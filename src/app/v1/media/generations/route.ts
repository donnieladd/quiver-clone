import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { checkRateLimit } from "@/lib/api/rate-limit";
import { errorResponse, rateLimitHeaders } from "@/lib/api/response";
import type { MediaGenerationRequest } from "@/lib/media/types";
import { listJobs } from "@/lib/media/jobs";
import {
  jobToResponse,
  submitGeneration,
} from "@/lib/media/router";

async function handleCreate(
  request: NextRequest,
  auth: AuthContext,
  requestId: string,
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const body = (await request.json()) as MediaGenerationRequest;

  if (!body.model?.trim()) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "model is required",
      request_id: requestId,
    });
  }

  const result = await submitGeneration({
    orgId: auth.orgId,
    requestId,
    body: { ...body, wait: body.wait !== false },
  });

  if (result instanceof Response) return result;

  return Response.json(jobToResponse(result), {
    status: body.wait === false ? 202 : 200,
    headers: {
      ...rateLimitHeaders(rate.remaining, rate.resetMs),
      "Content-Type": "application/json",
      "X-Request-ID": requestId,
    },
  });
}

async function handleList(
  _request: NextRequest,
  auth: AuthContext,
  requestId: string,
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  return Response.json(
    {
      object: "list",
      data: listJobs(50).map(jobToResponse),
      request_id: requestId,
    },
    {
      headers: rateLimitHeaders(rate.remaining, rate.resetMs),
    },
  );
}

export const POST = withAuth(handleCreate);
export const GET = withAuth(handleList);
