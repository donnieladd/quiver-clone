import { NextRequest } from "next/server";
import { DEFAULT_API_KEY } from "@/lib/api/auth";

export async function GET(request: NextRequest) {
  const response = await fetch(new URL("/v1/models", request.url), {
    headers: { Authorization: `Bearer ${DEFAULT_API_KEY}` },
  });
  const data = await response.json();
  return Response.json({
    ...data,
    provider: process.env.OPENAI_API_KEY
      ? "openai"
      : process.env.ANTHROPIC_API_KEY
        ? "anthropic"
        : "local",
  });
}
