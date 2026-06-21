import { NextRequest } from "next/server";
import { DEFAULT_API_KEY } from "@/lib/api/auth";

function forward(request: NextRequest, path: string, init?: RequestInit) {
  const url = new URL(path, request.url);
  const headers = new Headers(init?.headers);
  if (!headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${DEFAULT_API_KEY}`);
  }
  if (!headers.has("Content-Type") && init?.body) {
    headers.set("Content-Type", "application/json");
  }
  return fetch(url, { ...init, headers });
}

export async function GET(request: NextRequest) {
  const response = await forward(request, "/v1/models");
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const payload = body ? JSON.parse(body) : {};
  const v1Body = {
    model: payload.model ?? "arrow-1.1",
    prompt: payload.prompt,
    instructions: payload.instructions,
    temperature: payload.temperature,
    stream: payload.stream ?? false,
    n: payload.n ?? 1,
  };

  const response = await forward(request, "/v1/svgs/generations", {
    method: "POST",
    body: JSON.stringify(v1Body),
  });

  if (!payload.stream) {
    const data = await response.json();
    if (response.ok) {
      return Response.json({
        id: data.id,
        object: "svg.generation",
        model: payload.model,
        data: data.data,
        credits: data.credits,
        provider: "quiver-clone-v1",
      });
    }
    return Response.json(data, { status: response.status });
  }

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
