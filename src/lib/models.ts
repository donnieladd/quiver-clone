import type { ModelId, QuiverModel } from "./types";

const CREATED = 1704067200;

export const QUIVER_MODELS: QuiverModel[] = [
  {
    id: "arrow-1",
    object: "model",
    name: "Arrow 1.0",
    description:
      "First-gen vector-native model for editable logos, icons, and illustrations.",
    created: CREATED,
    owned_by: "quiver-clone",
    context_length: 131072,
    max_output_length: 65536,
    input_modalities: ["text", "image"],
    output_modalities: ["svg"],
    supported_operations: ["svg_generate", "svg_vectorize"],
    supported_sampling_parameters: ["temperature", "top_p", "presence_penalty"],
    pricing: { svg_generate: "0.30", svg_vectorize: "0.30" },
    pricing_credits: { svg_generate: 30, svg_vectorize: 30 },
    maxReferences: 4,
  },
  {
    id: "arrow-1.1",
    object: "model",
    name: "Arrow 1.1",
    description:
      "Best default for speed and quality, with strong prompt following and precise SVG.",
    created: CREATED,
    owned_by: "quiver-clone",
    context_length: 131072,
    max_output_length: 65536,
    input_modalities: ["text", "image"],
    output_modalities: ["svg"],
    supported_operations: ["svg_generate", "svg_vectorize"],
    supported_sampling_parameters: ["temperature", "top_p", "presence_penalty"],
    pricing: { svg_generate: "0.20", svg_vectorize: "0.15" },
    pricing_credits: { svg_generate: 20, svg_vectorize: 15 },
    maxReferences: 4,
  },
  {
    id: "arrow-1.1-max",
    object: "model",
    name: "Arrow 1.1 Max",
    description:
      "Higher-fidelity model for detailed diagrams and illustrations.",
    created: CREATED,
    owned_by: "quiver-clone",
    context_length: 131072,
    max_output_length: 65536,
    input_modalities: ["text", "image"],
    output_modalities: ["svg"],
    supported_operations: ["svg_generate", "svg_vectorize"],
    supported_sampling_parameters: ["temperature", "top_p", "presence_penalty"],
    pricing: { svg_generate: "0.25", svg_vectorize: "0.20" },
    pricing_credits: { svg_generate: 25, svg_vectorize: 20 },
    maxReferences: 16,
  },
];

export function listModels(): QuiverModel[] {
  return QUIVER_MODELS;
}

export function getModelById(id: string): QuiverModel | undefined {
  return QUIVER_MODELS.find((m) => m.id === id);
}

export function resolveModelId(id: string): ModelId {
  const aliases: Record<string, ModelId> = {
    "arrow-1": "arrow-1",
    "arrow-1.0": "arrow-1",
    "arrow-1.1": "arrow-1.1",
    "arrow-1.1-max": "arrow-1.1-max",
  };
  return aliases[id] ?? "arrow-1.1";
}

// Back-compat for playground
export const MODELS = QUIVER_MODELS.filter((m) => m.id !== "arrow-1").map(
  (m) => ({
    id: m.id as "arrow-1.1" | "arrow-1.1-max",
    name: m.name,
    description: m.description,
    maxReferences: m.maxReferences,
  }),
);

export function getModel(id: string) {
  const model = getModelById(id) ?? getModelById("arrow-1.1")!;
  return {
    id: model.id,
    name: model.name,
    description: model.description,
    maxReferences: model.maxReferences,
  };
}
