import { errorResponse } from "@/lib/api/response";

const WINDOW_MS = 60_000;
const LIMIT = 20;

const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string,
  requestId: string,
): { ok: true; remaining: number; resetMs: number } | Response {
  const now = Date.now();
  let bucket = buckets.get(key);
  if (!bucket || now >= bucket.resetAt) {
    bucket = { count: 0, resetAt: now + WINDOW_MS };
    buckets.set(key, bucket);
  }

  if (bucket.count >= LIMIT) {
    const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);
    return errorResponse(
      {
        status: 429,
        code: "rate_limit_exceeded",
        message: "Rate limit exceeded",
        request_id: requestId,
      },
      {
        "Retry-After": String(retryAfter),
        "X-RateLimit-Limit": String(LIMIT),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": String(bucket.resetAt),
      },
    );
  }

  bucket.count += 1;
  return {
    ok: true,
    remaining: LIMIT - bucket.count,
    resetMs: bucket.resetAt,
  };
}

export function isSvgEndpoint(pathname: string): boolean {
  return (
    pathname.endsWith("/v1/svgs/generations") ||
    pathname.endsWith("/v1/svgs/vectorizations")
  );
}
