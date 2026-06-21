import type { NextRequest } from "next/server";
import {
  apiHeaders,
  createRequestId,
  errorResponse,
} from "@/lib/api/response";
import type { PublicErrorEnvelope } from "@/lib/types";

function validKeys(): Set<string> {
  const fromEnv = process.env.QUIVER_CLONE_API_KEYS?.split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  if (fromEnv?.length) return new Set(fromEnv);
  return new Set(["qv_dev_local_key"]);
}

export interface AuthContext {
  apiKey: string;
  orgId: string;
}

export function authenticate(
  request: NextRequest,
  requestId: string,
): AuthContext | Response {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return errorResponse({
      status: 401,
      code: "unauthorized",
      message: "Missing or invalid Authorization header",
      request_id: requestId,
    });
  }

  const token = header.slice("Bearer ".length).trim();
  if (!token) {
    return errorResponse({
      status: 401,
      code: "invalid_api_key",
      message: "API key missing",
      request_id: requestId,
    });
  }

  if (!validKeys().has(token)) {
    return errorResponse({
      status: 401,
      code: "invalid_api_key",
      message: "Invalid API key",
      request_id: requestId,
    });
  }

  return { apiKey: token, orgId: `org_${token.slice(0, 8)}` };
}

type RouteContext = { params: Promise<Record<string, string>> };

export function withAuth(
  handler: (
    request: NextRequest,
    auth: AuthContext,
    requestId: string,
    context: RouteContext,
  ) => Promise<Response>,
) {
  return async (
    request: NextRequest,
    context: RouteContext,
  ): Promise<Response> => {
    const requestId = createRequestId();
    const authResult = authenticate(request, requestId);
    if (authResult instanceof Response) return authResult;
    try {
      const response = await handler(
        request,
        authResult,
        requestId,
        context,
      );
      const traceId = request.headers.get("x-trace-id");
      if (traceId && !response.headers.get("X-Trace-ID")) {
        response.headers.set("X-Trace-ID", traceId);
      }
      if (!response.headers.get("X-Request-ID")) {
        response.headers.set("X-Request-ID", requestId);
      }
      return response;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unexpected server error";
      return errorResponse(
        {
          status: 500,
          code: "server_error",
          message,
          request_id: requestId,
        },
        Object.fromEntries(apiHeaders(request, requestId).entries()),
      );
    }
  };
}

export function isErrorEnvelope(value: unknown): value is PublicErrorEnvelope {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value &&
    "code" in value
  );
}

export const DEFAULT_API_KEY = "qv_dev_local_key";
