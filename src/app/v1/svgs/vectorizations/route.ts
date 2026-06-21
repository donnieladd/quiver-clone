import { NextRequest } from "next/server";
import { withAuth, type AuthContext } from "@/lib/api/auth";
import { debitCredits, vectorizeCost } from "@/lib/api/credits";
import { checkRateLimit } from "@/lib/api/rate-limit";
import {
  createOutputId,
  createResponseId,
  DEPRECATED_USAGE,
  errorResponse,
  rateLimitHeaders,
  svgDocument,
} from "@/lib/api/response";
import { streamVectorize } from "@/lib/api/stream";
import { vectorizeImageInput } from "@/lib/api/vectorize";
import { getModelById, resolveModelId } from "@/lib/models";
import type { VectorizeSVGRequest } from "@/lib/types";

function validateVectorizeBody(
  body: VectorizeSVGRequest,
  requestId: string,
): Response | VectorizeSVGRequest {
  if (!body.model?.trim()) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "model is required",
      request_id: requestId,
    });
  }
  if (!body.image || (!body.image.url && !body.image.base64)) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "image.url or image.base64 is required",
      request_id: requestId,
    });
  }
  if (
    body.target_size !== undefined &&
    (body.target_size < 128 || body.target_size > 4096)
  ) {
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message: "target_size must be between 128 and 4096",
      request_id: requestId,
    });
  }
  return body;
}

async function handleVectorize(
  request: NextRequest,
  auth: AuthContext,
  requestId: string,
  _context: { params: Promise<Record<string, string>> },
): Promise<Response> {
  const rate = checkRateLimit(auth.apiKey, requestId);
  if (rate instanceof Response) return rate;

  const body = (await request.json()) as VectorizeSVGRequest;
  const validated = validateVectorizeBody(body, requestId);
  if (validated instanceof Response) return validated;

  const modelRecord = getModelById(validated.model);
  if (!modelRecord) {
    return errorResponse({
      status: 404,
      code: "model_not_found",
      message: `Model '${validated.model}' not found`,
      request_id: requestId,
    });
  }

  const model = resolveModelId(validated.model);
  const cost = vectorizeCost(modelRecord);
  const debit = debitCredits(auth.orgId, cost, requestId);
  if (debit instanceof Response) return debit;

  const rl = rateLimitHeaders(rate.remaining, rate.resetMs);
  const outputId = createOutputId();
  const svgPromise = vectorizeImageInput(
    validated.image,
    model,
    validated.target_size,
  );

  if (validated.stream) {
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamVectorize(outputId, svgPromise, cost)) {
            controller.enqueue(encoder.encode(chunk));
          }
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Vectorization failed";
          controller.enqueue(
            encoder.encode(
              `event: error\ndata: ${JSON.stringify({
                type: "error",
                message,
                request_id: requestId,
              })}\n\n`,
            ),
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        ...rl,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "X-Request-ID": requestId,
      },
    });
  }

  try {
    const svg = await svgPromise;
    return Response.json(
      {
        id: createResponseId("resp"),
        created: Math.floor(Date.now() / 1000),
        credits: cost,
        data: [svgDocument(svg)],
        usage: DEPRECATED_USAGE,
      },
      {
        headers: {
          ...rl,
          "Content-Type": "application/json",
          "X-Request-ID": requestId,
        },
      },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Vectorization failed";
    return errorResponse({
      status: 400,
      code: "invalid_request",
      message,
      request_id: requestId,
    });
  }
}

export const POST = withAuth(handleVectorize);
