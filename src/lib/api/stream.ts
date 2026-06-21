import { generateLocalSvg } from "@/lib/local-svg-generator";
import { generateSvg } from "@/lib/svg-generator";
import { createOutputId } from "@/lib/api/response";
import type { ModelId, QuiverModel } from "@/lib/types";

const ZERO_USAGE = { input_tokens: 0, output_tokens: 0, total_tokens: 0 };

export interface GenerationJob {
  outputId: string;
  index: number;
  prompt: string;
  instructions?: string;
  model: ModelId;
  temperature?: number;
}

export function buildGenerationJobs(
  body: {
    prompt: string;
    instructions?: string;
    n?: number;
    temperature?: number;
  },
  model: ModelId,
): GenerationJob[] {
  const n = Math.min(Math.max(body.n ?? 1, 1), 16);
  return Array.from({ length: n }, (_, index) => ({
    outputId: createOutputId(),
    index,
    prompt: body.prompt,
    instructions: body.instructions,
    model,
    temperature: body.temperature,
  }));
}

export async function runGenerationJob(job: GenerationJob) {
  return generateSvg({
    prompt: job.prompt,
    instructions: job.instructions,
    model: job.model,
    temperature: job.temperature,
  });
}

export function draftSvg(job: GenerationJob): string {
  return generateLocalSvg({
    prompt: job.prompt,
    instructions: job.instructions,
    model: job.model === "arrow-1.1-max" ? "arrow-1.1-max" : "arrow-1.1",
  });
}

export function reasoningText(job: GenerationJob): string {
  return `Planning SVG structure for: ${job.prompt.slice(0, 120)}`;
}

export function perOutputCredits(model: QuiverModel): number {
  return model.pricing_credits.svg_generate;
}

export function encodeSse(event: string, data: Record<string, unknown>): string {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

export async function* streamJobs(
  jobs: GenerationJob[],
  model: QuiverModel,
): AsyncGenerator<string> {
  for (const job of jobs) {
    yield encodeSse("generating", {
      type: "generating",
      id: job.outputId,
      index: job.index,
      text: "Starting generation",
      usage: ZERO_USAGE,
    });

    yield encodeSse("reasoning", {
      type: "reasoning",
      id: job.outputId,
      index: job.index,
      text: reasoningText(job),
      usage: ZERO_USAGE,
    });

    const draft = draftSvg(job);
    yield encodeSse("draft", {
      type: "draft",
      id: job.outputId,
      index: job.index,
      svg: draft,
      usage: ZERO_USAGE,
    });

    const result = await runGenerationJob(job);
    yield encodeSse("content", {
      type: "content",
      id: job.outputId,
      index: job.index,
      svg: result.svg,
      credits: perOutputCredits(model),
      usage: ZERO_USAGE,
    });
  }

  yield "data: [DONE]\n\n";
}

export async function* streamVectorize(
  outputId: string,
  svgPromise: Promise<string>,
  credits: number,
): AsyncGenerator<string> {
  yield encodeSse("generating", {
    type: "generating",
    id: outputId,
    index: 0,
    text: "Vectorizing image",
    usage: ZERO_USAGE,
  });

  yield encodeSse("reasoning", {
    type: "reasoning",
    id: outputId,
    index: 0,
    text: "Tracing paths and simplifying geometry",
    usage: ZERO_USAGE,
  });

  const svg = await svgPromise;
  const partial = svg.slice(0, Math.min(svg.length, 280));
  yield encodeSse("draft", {
    type: "draft",
    id: outputId,
    index: 0,
    svg: partial.endsWith("</svg>") ? partial : `${partial}<!-- draft -->`,
    usage: ZERO_USAGE,
  });

  yield encodeSse("content", {
    type: "content",
    id: outputId,
    index: 0,
    svg,
    credits,
    usage: ZERO_USAGE,
  });

  yield "data: [DONE]\n\n";
}
