import { randomUUID } from "crypto";
import type { NextRequest } from "next/server";
import type { PublicErrorEnvelope } from "@/lib/types";

export function createRequestId(): string {
  return randomUUID();
}

export function getTraceId(request: NextRequest): string | undefined {
  return request.headers.get("x-trace-id") ?? undefined;
}

export function apiHeaders(request: NextRequest, requestId: string) {
  const headers = new Headers({
    "X-Request-ID": requestId,
    "Content-Type": "application/json",
  });
  const traceId = getTraceId(request);
  if (traceId) headers.set("X-Trace-ID", traceId);
  return headers;
}

export function rateLimitHeaders(remaining: number, resetMs: number) {
  return {
    "X-RateLimit-Limit": "20",
    "X-RateLimit-Remaining": String(Math.max(0, remaining)),
    "X-RateLimit-Reset": String(resetMs),
  };
}

export function errorResponse(
  envelope: PublicErrorEnvelope,
  extraHeaders?: Record<string, string>,
): Response {
  const headers = new Headers({
    "Content-Type": "application/json",
    "X-Request-ID": envelope.request_id,
    ...extraHeaders,
  });
  return Response.json(envelope, { status: envelope.status, headers });
}

export function svgDocument(svg: string) {
  return { mime_type: "image/svg+xml" as const, svg };
}

export const DEPRECATED_USAGE = {
  input_tokens: 0 as const,
  output_tokens: 0 as const,
  total_tokens: 0 as const,
};

export function createResponseId(prefix: string): string {
  return `${prefix}_${randomUUID().replace(/-/g, "").slice(0, 26)}`;
}

export function createOutputId(): string {
  return `svg_out_${randomUUID().replace(/-/g, "").slice(0, 26)}`;
}
