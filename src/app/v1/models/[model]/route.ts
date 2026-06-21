import { withAuth } from "@/lib/api/auth";
import { errorResponse, apiHeaders } from "@/lib/api/response";
import { getModelById } from "@/lib/models";

export const GET = withAuth(async (request, _auth, requestId, context) => {
  const { model: modelId } = await context.params;
  const model = getModelById(modelId);

  if (!model) {
    return errorResponse(
      {
        status: 404,
        code: "model_not_found",
        message: `Model '${modelId}' not found`,
        request_id: requestId,
      },
      Object.fromEntries(apiHeaders(request, requestId).entries()),
    );
  }

  const { maxReferences: _maxReferences, ...payload } = model;
  const headers = apiHeaders(request, requestId);
  return Response.json(payload, { headers });
});
