import { withAuth } from "@/lib/api/auth";
import { listModels } from "@/lib/models";
import { apiHeaders } from "@/lib/api/response";

export const GET = withAuth(async (request, _auth, requestId) => {
  const headers = apiHeaders(request, requestId);
  return Response.json(
    {
      object: "list",
      data: listModels().map(({ maxReferences: _maxReferences, ...model }) => model),
    },
    { headers },
  );
});
