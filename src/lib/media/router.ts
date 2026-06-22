import { debitCredits } from "@/lib/api/credits";
import { createResponseId, errorResponse } from "@/lib/api/response";
import { getMediaModel } from "./catalog";
import { createJobId, getJob, saveJob, updateJob } from "./jobs";
import { runProvider } from "./providers";
import type { MediaGenerationRequest, MediaJob } from "./types";

export interface SubmitGenerationOptions {
  orgId: string;
  requestId: string;
  body: MediaGenerationRequest;
}

export async function submitGeneration(
  opts: SubmitGenerationOptions,
): Promise<MediaJob | Response> {
  const model = getMediaModel(opts.body.model);
  if (!model) {
    return errorResponse({
      status: 404,
      code: "model_not_found",
      message: `Model '${opts.body.model}' not found`,
      request_id: opts.requestId,
    });
  }

  const cost = model.pricing_credits;
  const debit = debitCredits(opts.orgId, cost, opts.requestId);
  if (debit instanceof Response) {
    return debit;
  }

  const jobId = createJobId();
  const job: MediaJob = {
    id: jobId,
    object: "generation",
    status: "queued",
    model: model.id,
    provider: model.provider,
    created: Math.floor(Date.now() / 1000),
    prompt: opts.body.prompt,
    credits_charged: cost,
    request_id: opts.requestId,
  };
  saveJob(job);

  if (opts.body.wait === false) {
    void processJob(jobId, model.id, opts.body, opts.requestId);
    return job;
  }

  await processJob(jobId, model.id, opts.body, opts.requestId);
  return getJob(jobId)!;
}

async function processJob(
  jobId: string,
  modelId: string,
  body: MediaGenerationRequest,
  requestId: string,
): Promise<void> {
  updateJob(jobId, { status: "processing" });
  const model = getMediaModel(modelId);
  if (!model) {
    updateJob(jobId, {
      status: "failed",
      error: { code: "model_not_found", message: modelId },
    });
    return;
  }

  const result = await runProvider(model, {
    model,
    prompt: body.prompt,
    inputImages: body.input_images?.map((img) => ({
      type: img.type === "base64" ? "base64" : "url",
      value: img.value,
    })),
    parameters: body.parameters,
    requestId,
  });

  if (result.status === "failed" || result.error) {
    updateJob(jobId, {
      status: "failed",
      completed_at: Math.floor(Date.now() / 1000),
      error: result.error ?? { code: "failed", message: "Generation failed" },
    });
    return;
  }

  updateJob(jobId, {
    status: "completed",
    completed_at: Math.floor(Date.now() / 1000),
    outputs: result.outputs,
  });
}

export function jobToResponse(job: MediaJob) {
  return {
    id: job.id,
    object: job.object,
    status: job.status,
    model: job.model,
    provider: job.provider,
    created: job.created,
    completed_at: job.completed_at,
    prompt: job.prompt,
    outputs: job.outputs,
    error: job.error,
    credits: job.credits_charged,
  };
}

export function createMediaRequestId(): string {
  return createResponseId("req");
}
