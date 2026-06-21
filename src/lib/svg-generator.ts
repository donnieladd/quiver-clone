import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import { extractSvg } from "./svg-sanitize";
import {
  generateLocalSvg,
  getAiProvider,
} from "./local-svg-generator";
import type { ModelId } from "./types";

const SYSTEM_PROMPT = `You are Arrow, an expert SVG designer. Generate production-ready, clean SVG code.

Rules:
- Return ONLY valid SVG markup inside a single <svg> element
- Use viewBox="0 0 512 512" unless the subject needs a different aspect ratio
- Prefer shapes (rect, circle, ellipse, polygon, path) over excessive path complexity
- Use a cohesive 2-4 color palette with good contrast
- Keep paths editable with reasonable control point counts
- Include xmlns="http://www.w3.org/2000/svg"
- No scripts, external references, or foreign objects
- No markdown fences unless wrapping the SVG`;

interface GenerateInput {
  prompt: string;
  instructions?: string;
  model: ModelId;
  temperature?: number;
}

export async function generateSvg(input: GenerateInput): Promise<{
  svg: string;
  provider: string;
  reasoning?: string;
}> {
  const provider = getAiProvider();

  if (provider === "local") {
    return {
      svg: generateLocalSvg(input),
      provider: "local",
      reasoning:
        "Generated with built-in template engine. Set OPENAI_API_KEY or ANTHROPIC_API_KEY for AI-powered SVG generation.",
    };
  }

  const userContent = [
    `Create an SVG for: ${input.prompt}`,
    input.instructions ? `Style instructions: ${input.instructions}` : null,
    input.model === "arrow-1.1-max"
      ? "Use higher detail, precise geometry, and refined color choices."
      : "Keep the design clean and icon-friendly.",
  ]
    .filter(Boolean)
    .join("\n");

  const temperature =
    input.temperature ?? (input.model === "arrow-1.1-max" ? 0.7 : 0.85);

  const text =
    provider === "openai"
      ? await generateWithOpenAI(userContent, temperature)
      : await generateWithAnthropic(userContent, temperature);

  const svg = extractSvg(text);
  if (!svg) {
    return {
      svg: generateLocalSvg(input),
      provider: `${provider}-fallback`,
      reasoning: "AI response did not contain valid SVG; used local fallback.",
    };
  }

  return { svg, provider };
}

async function generateWithOpenAI(
  prompt: string,
  temperature: number,
): Promise<string> {
  const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    system: SYSTEM_PROMPT,
    prompt,
    temperature,
  });
  return text;
}

async function generateWithAnthropic(
  prompt: string,
  temperature: number,
): Promise<string> {
  const anthropic = createAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });
  const { text } = await generateText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: SYSTEM_PROMPT,
    prompt,
    temperature,
  });
  return text;
}

export async function* streamGenerateSvg(
  input: GenerateInput,
): AsyncGenerator<{ phase: "reasoning" | "draft" | "content"; content: string }> {
  yield {
    phase: "reasoning",
    content: `Analyzing prompt: "${input.prompt.slice(0, 80)}${input.prompt.length > 80 ? "..." : ""}"`,
  };

  yield {
    phase: "draft",
    content: generateLocalSvg({ ...input, model: "arrow-1.1" }),
  };

  const result = await generateSvg(input);

  yield { phase: "content", content: result.svg };
}
