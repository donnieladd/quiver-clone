import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { checkRateLimit } from "@/lib/api/rate-limit";
import { errorResponse, rateLimitHeaders } from "@/lib/api/response";
import { getJob } from "@/lib/media/jobs";
import { jobToResponse } from "@/lib/media/router";

async function handleGet(
  _request: NextRequest,
  auth: AuthContext,
  requestId: string,
  context: { params: Promise<Record<string, string>> },
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const params = await context.params;
  const id = params.id;
  if (!id) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "id is required",
      request_id: requestId,
    });
  }

  const job = getJob(id);

  if (!job) {
    return errorResponse({
      status: 404,
      code: "not_found",
      message: `Generation '${id}' not found`,
      request_id: requestId,
    });
  }

  return Response.json(jobToResponse(job), {
    headers: rateLimitHeaders(rate.remaining, rate.resetMs),
  });
}

export const GET = withAuth(handleGet);
