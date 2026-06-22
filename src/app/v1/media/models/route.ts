import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { checkRateLimit } from "@/lib/api/rate-limit";
import { errorResponse, rateLimitHeaders } from "@/lib/api/response";
import { listMediaModels } from "@/lib/media/catalog";

async function handleList(
  request: NextRequest,
  auth: AuthContext,
  requestId: string,
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const { searchParams } = new URL(request.url);
  const modality = searchParams.get("modality") ?? undefined;
  const provider = searchParams.get("provider") ?? undefined;

  const data = listMediaModels({ modality, provider });

  return Response.json(
    {
      object: "list",
      data,
      request_id: requestId,
    },
    {
      headers: {
        ...rateLimitHeaders(rate.remaining, rate.resetMs),
        "X-Request-ID": requestId,
      },
    },
  );
}

export const GET = withAuth(handleList);
