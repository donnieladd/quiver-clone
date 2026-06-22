import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { checkRateLimit } from "@/lib/api/rate-limit";
import { errorResponse, rateLimitHeaders } from "@/lib/api/response";
import { submitGeneration } from "@/lib/media/router";
import {
  advanceWorkflowRun,
  getWorkflowRun,
  runToResponse,
} from "@/lib/workflows/runs";
import { routeToolForJob } from "@/lib/workflows/tool-router";
import { getWorkflow } from "@/lib/workflows/registry";

async function handleGet(
  _request: NextRequest,
  auth: AuthContext,
  requestId: string,
  context: { params: Promise<Record<string, string>> },
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const params = await context.params;
  const runId = params.runId;
  const run = runId ? getWorkflowRun(runId) : undefined;

  if (!run) {
    return errorResponse({
      status: 404,
      code: "not_found",
      message: `Workflow run '${runId}' not found`,
      request_id: requestId,
    });
  }

  return Response.json(runToResponse(run), {
    headers: rateLimitHeaders(rate.remaining, rate.resetMs),
  });
}

interface AdvanceBody {
  action?: "advance" | "generate_and_advance";
  payload?: Record<string, unknown>;
  notes?: string;
  skip?: boolean;
  prompt?: string;
}

async function handlePatch(
  request: NextRequest,
  auth: AuthContext,
  requestId: string,
  context: { params: Promise<Record<string, string>> },
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const params = await context.params;
  const runId = params.runId;
  const run = runId ? getWorkflowRun(runId) : undefined;

  if (!run) {
    return errorResponse({
      status: 404,
      code: "not_found",
      message: `Workflow run '${runId}' not found`,
      request_id: requestId,
    });
  }

  const body = (await request.json()) as AdvanceBody;
  let generationJobId: string | undefined;

  if (body.action === "generate_and_advance") {
    const workflow = getWorkflow(run.workflowId);
    const stepDef = workflow?.steps[run.currentStepIndex];
    if (stepDef?.type === "generate" && stepDef.jobType) {
      const route = routeToolForJob(stepDef.jobType);
      if (route) {
        let prompt = body.prompt ?? stepDef.promptTemplate ?? stepDef.title;
        for (const [key, value] of Object.entries(run.context)) {
          prompt = prompt.replace(
            new RegExp(`\\{\\{${key}\\}\\}`, "g"),
            String(value),
          );
        }

        const model =
          route.modality === "svg"
            ? route.modelId
            : route.modelId;

        const endpoint =
          route.modality === "svg"
            ? null
            : await submitGeneration({
                orgId: auth.orgId,
                requestId,
                body: {
                  model,
                  prompt,
                  wait: true,
                },
              });

        if (endpoint && !(endpoint instanceof Response)) {
          generationJobId = endpoint.id;
        } else if (endpoint instanceof Response) {
          return endpoint;
        }
      }
    }
  }

  const updated = advanceWorkflowRun(runId!, {
    payload: body.payload,
    notes: body.notes,
    skip: body.skip,
    generationJobId,
  });

  if (!updated) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "Cannot advance workflow run",
      request_id: requestId,
    });
  }

  return Response.json(runToResponse(updated), {
    headers: rateLimitHeaders(rate.remaining, rate.resetMs),
  });
}

export const GET = withAuth(handleGet);
export const PATCH = withAuth(handlePatch);
