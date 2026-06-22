import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { checkRateLimit } from "@/lib/api/rate-limit";
import { errorResponse, rateLimitHeaders } from "@/lib/api/response";
import {
  listWorkflows,
  workflowToSummary,
  WORKFLOW_VERTICALS,
} from "@/lib/workflows/registry";

async function handleList(
  request: NextRequest,
  auth: AuthContext,
  requestId: string,
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const vertical = request.nextUrl.searchParams.get("vertical") ?? undefined;
  const workflows = listWorkflows(
    vertical ? { vertical: vertical as import("@/lib/workflows/types").WorkflowVertical } : undefined,
  );

  return Response.json(
    {
      object: "list",
      verticals: WORKFLOW_VERTICALS,
      data: workflows.map(workflowToSummary),
      request_id: requestId,
    },
    { headers: rateLimitHeaders(rate.remaining, rate.resetMs) },
  );
}

export const GET = withAuth(handleList);
