import { NextRequest } from "next/server";
import { DEFAULT_API_KEY } from "@/lib/api/auth";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const imageBase64 = String(payload.imageBase64 ?? "");
  if (!imageBase64) {
    return Response.json({ error: "imageBase64 is required" }, { status: 400 });
  }

  const v1Body = {
    model: payload.model ?? "arrow-1.1",
    image: imageBase64.startsWith("data:")
      ? { base64: imageBase64 }
      : { base64: imageBase64 },
    target_size: payload.targetSize ?? 512,
    stream: false,
  };

  const response = await fetch(new URL("/v1/svgs/vectorizations", request.url), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DEFAULT_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(v1Body),
  });

  const data = await response.json();
  if (!response.ok) {
    return Response.json(data, { status: response.status });
  }

  return Response.json({
    id: data.id,
    object: "svg.vectorization",
    model: payload.model,
    data: data.data,
    credits: data.credits,
    provider: "quiver-clone-v1",
  });
}
