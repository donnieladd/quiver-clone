import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { debitCredits, generationCost } from "@/lib/api/credits";
import { checkRateLimit } from "@/lib/api/rate-limit";
import {
  createResponseId,
  DEPRECATED_USAGE,
  errorResponse,
  rateLimitHeaders,
  svgDocument,
} from "@/lib/api/response";
import {
  buildGenerationJobs,
  runGenerationJob,
  streamJobs,
} from "@/lib/api/stream";
import { getModelById, resolveModelId } from "@/lib/models";
import type { GenerateSVGRequest } from "@/lib/types";

function validateGenerateBody(
  body: GenerateSVGRequest,
  requestId: string,
): Response | GenerateSVGRequest {
  if (!body.model?.trim()) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "model is required",
      request_id: requestId,
    });
  }
  if (!body.prompt?.trim()) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "prompt is required",
      request_id: requestId,
    });
  }
  if (body.n !== undefined && (body.n < 1 || body.n > 16)) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "n must be between 1 and 16",
      request_id: requestId,
    });
  }
  return body;
}

async function handleGenerate(
  request: NextRequest,
  auth: AuthContext,
  requestId: string,
  _context: { params: Promise<Record<string, string>> },
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const body = (await request.json()) as GenerateSVGRequest;
  const validated = validateGenerateBody(body, requestId);
  if (validated instanceof Response) return validated;

  const modelRecord = getModelById(validated.model);
  if (!modelRecord) {
    return errorResponse({
      status: 404,
      code: "model_not_found",
      message: `Model '${validated.model}' not found`,
      request_id: requestId,
    });
  }

  const model = resolveModelId(validated.model);
  const n = Math.min(Math.max(validated.n ?? 1, 1), 16);
  const cost = generationCost(modelRecord, n);
  const debit = debitCredits(auth.orgId, cost, requestId);
  if (debit instanceof Response) return debit;

  const jobs = buildGenerationJobs(validated, model);
  const rl = rateLimitHeaders(rate.remaining, rate.resetMs);

  if (validated.stream) {
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of streamJobs(jobs, modelRecord)) {
          controller.enqueue(encoder.encode(chunk));
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        ...rl,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "X-Request-ID": requestId,
      },
    });
  }

  const results = await Promise.all(jobs.map((job) => runGenerationJob(job)));

  return Response.json(
    {
      id: createResponseId("resp"),
      created: Math.floor(Date.now() / 1000),
      credits: cost,
      data: results.map((r) => svgDocument(r.svg)),
      usage: DEPRECATED_USAGE,
    },
    {
      headers: {
        ...rl,
        "Content-Type": "application/json",
        "X-Request-ID": requestId,
      },
    },
  );
}

export const POST = withAuth(handleGenerate);
