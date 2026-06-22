import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { checkRateLimit } from "@/lib/api/rate-limit";
import { errorResponse, rateLimitHeaders } from "@/lib/api/response";
import { getWorkflow } from "@/lib/workflows/registry";
import { routePlatformForObjective, routeToolForJob } from "@/lib/workflows/tool-router";
import type { WorkflowStep } from "@/lib/workflows/types";

async function handleGet(
  _request: NextRequest,
  auth: AuthContext,
  requestId: string,
  context: { params: Promise<Record<string, string>> },
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const params = await context.params;
  const id = decodeURIComponent(params.id ?? "");
  if (!id) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "id is required",
      request_id: requestId,
    });
  }

  const workflow = getWorkflow(id);
  if (!workflow) {
    return errorResponse({
      status: 404,
      code: "workflow_not_found",
      message: `Workflow '${params.id}' not found`,
      request_id: requestId,
    });
  }

  const enrichedSteps = workflow.steps.map((step: WorkflowStep) => {
    const extra: Record<string, unknown> = {};
    if (step.routeObjective) {
      extra.platformRoute = routePlatformForObjective(step.routeObjective);
    }
    if (step.jobType) {
      extra.toolRoute = routeToolForJob(step.jobType);
    }
    return { ...step, ...extra };
  });

  return Response.json(
    {
      object: "workflow",
      ...workflow,
      steps: enrichedSteps,
      request_id: requestId,
    },
    { headers: rateLimitHeaders(rate.remaining, rate.resetMs) },
  );
}

export const GET = withAuth(handleGet);
