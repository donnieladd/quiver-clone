import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { checkRateLimit } from "@/lib/api/rate-limit";
import { errorResponse, rateLimitHeaders } from "@/lib/api/response";
import { getWorkflow } from "@/lib/workflows/registry";
import { createWorkflowRun, runToResponse } from "@/lib/workflows/runs";

async function handleCreate(
  request: NextRequest,
  auth: AuthContext,
  requestId: string,
  context: { params: Promise<Record<string, string>> },
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const params = await context.params;
  const workflowId = decodeURIComponent(params.id ?? "");
  if (!getWorkflow(workflowId)) {
    return errorResponse({
      status: 404,
      code: "workflow_not_found",
      message: `Workflow '${workflowId}' not found`,
      request_id: requestId,
    });
  }

  let body: { context?: Record<string, unknown> } = {};
  try {
    body = (await request.json()) as typeof body;
  } catch {
    body = {};
  }

  const run = createWorkflowRun(workflowId, body.context ?? {});
  if (!run) {
    return errorResponse({
      status: 500,
      code: "server_error",
      message: "Failed to create workflow run",
      request_id: requestId,
    });
  }

  return Response.json(runToResponse(run), {
    status: 201,
    headers: rateLimitHeaders(rate.remaining, rate.resetMs),
  });
}

export const POST = withAuth(handleCreate);
