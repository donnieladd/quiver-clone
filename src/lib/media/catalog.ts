import type { MediaModel } from "./types";

/** Unified catalog — Higgsfield-style model IDs + Quiver SVG + local dev models */
export const MEDIA_MODELS: MediaModel[] = [
  // --- Quiver / SVG ---
  {
    id: "quiver/arrow-1.1",
    object: "model",
    provider: "quiver",
    modality: "svg",
    name: "Arrow 1.1 SVG",
    description: "Vector SVG from text — logos, icons, marks.",
    input_modalities: ["text"],
    output_modalities: ["svg"],
    pricing_credits: 20,
  },
  {
    id: "quiver/arrow-1.1-max",
    object: "model",
    provider: "quiver",
    modality: "svg",
    name: "Arrow 1.1 Max SVG",
    description: "Higher-fidelity vector generation.",
    input_modalities: ["text"],
    output_modalities: ["svg"],
    pricing_credits: 25,
  },
  // --- OpenAI ---
  {
    id: "openai/gpt-image-1",
    object: "model",
    provider: "openai",
    modality: "image",
    name: "GPT Image 1",
    description: "OpenAI image generation via API.",
    input_modalities: ["text", "image"],
    output_modalities: ["image"],
    pricing_credits: 40,
    parameters_schema: {
      size: { enum: ["1024x1024", "1536x1024", "1024x1536"] },
      quality: { enum: ["low", "medium", "high"] },
    },
  },
  // --- Higgsfield image (endpoint paths from official SDK) ---
  {
    id: "higgsfield/bytedance/seedream/v4/text-to-image",
    object: "model",
    provider: "higgsfield",
    modality: "image",
    name: "Seedream v4 Text-to-Image",
    description: "ByteDance Seedream v4 via Higgsfield Cloud.",
    endpoint: "bytedance/seedream/v4/text-to-image",
    input_modalities: ["text"],
    output_modalities: ["image"],
    pricing_credits: 35,
    parameters_schema: {
      resolution: { enum: ["1K", "2K", "4K"] },
      aspect_ratio: { enum: ["1:1", "16:9", "9:16", "4:3", "3:4"] },
    },
  },
  {
    id: "higgsfield/flux/schnell",
    object: "model",
    provider: "higgsfield",
    modality: "image",
    name: "FLUX Schnell",
    description: "Fast FLUX text-to-image.",
    endpoint: "flux/schnell",
    input_modalities: ["text"],
    output_modalities: ["image"],
    pricing_credits: 25,
  },
  {
    id: "higgsfield/soul/v2/text-to-image",
    object: "model",
    provider: "higgsfield",
    modality: "image",
    name: "Soul V2",
    description: "Face-faithful character image generation.",
    endpoint: "soul/v2/text-to-image",
    input_modalities: ["text"],
    output_modalities: ["image"],
    pricing_credits: 45,
  },
  {
    id: "higgsfield/nano-banana-pro",
    object: "model",
    provider: "higgsfield",
    modality: "image",
    name: "Nano Banana Pro",
    description: "Higgsfield Nano Banana Pro image model.",
    endpoint: "nano-banana-pro",
    input_modalities: ["text", "image"],
    output_modalities: ["image"],
    pricing_credits: 30,
  },
  // --- Higgsfield video ---
  {
    id: "higgsfield/v1/image2video/dop",
    object: "model",
    provider: "higgsfield",
    modality: "video",
    name: "DoP Image-to-Video",
    description: "Cinematic camera motion on still image (DoP turbo).",
    endpoint: "/v1/image2video/dop",
    input_modalities: ["text", "image"],
    output_modalities: ["video"],
    pricing_credits: 80,
    parameters_schema: {
      model: { enum: ["dop-turbo", "dop-standard"] },
    },
  },
  {
    id: "higgsfield/kling/v3.0",
    object: "model",
    provider: "higgsfield",
    modality: "video",
    name: "Kling v3.0",
    description: "Kling video generation via Higgsfield.",
    endpoint: "kling3_0",
    input_modalities: ["text", "image"],
    output_modalities: ["video"],
    pricing_credits: 100,
  },
  {
    id: "higgsfield/google/veo-3.1",
    object: "model",
    provider: "higgsfield",
    modality: "video",
    name: "Google Veo 3.1",
    description: "Veo 3.1 video via Higgsfield Cloud.",
    endpoint: "veo3_1",
    input_modalities: ["text", "image"],
    output_modalities: ["video"],
    pricing_credits: 120,
  },
  {
    id: "higgsfield/marketing-studio/video",
    object: "model",
    provider: "higgsfield",
    modality: "video",
    name: "Marketing Studio Video",
    description: "Branded marketing video generation.",
    endpoint: "marketing_studio_video",
    input_modalities: ["text", "image"],
    output_modalities: ["video"],
    pricing_credits: 90,
  },
  {
    id: "higgsfield/cinematic-studio/3.0",
    object: "model",
    provider: "higgsfield",
    modality: "video",
    name: "Cinematic Studio 3.0",
    description: "Cinematic video generation.",
    endpoint: "cinematic_studio_3_0",
    input_modalities: ["text", "image"],
    output_modalities: ["video"],
    pricing_credits: 110,
  },
  // --- Local dev (no external keys) ---
  {
    id: "local/mock-image",
    object: "model",
    provider: "local",
    modality: "image",
    name: "Mock Image (dev)",
    description: "Placeholder PNG for dev without API keys.",
    input_modalities: ["text"],
    output_modalities: ["image"],
    pricing_credits: 0,
  },
  {
    id: "local/mock-video",
    object: "model",
    provider: "local",
    modality: "video",
    name: "Mock Video (dev)",
    description: "Placeholder video job for dev.",
    input_modalities: ["text", "image"],
    output_modalities: ["video"],
    pricing_credits: 0,
  },
];

export function listMediaModels(filter?: {
  modality?: string;
  provider?: string;
}): MediaModel[] {
  return MEDIA_MODELS.filter((m) => {
    if (filter?.modality && m.modality !== filter.modality) return false;
    if (filter?.provider && m.provider !== filter.provider) return false;
    return true;
  });
}

export function getMediaModel(id: string): MediaModel | undefined {
  return MEDIA_MODELS.find((m) => m.id === id);
}

export function parseModelId(id: string): {
  provider: string;
  path: string;
} {
  const slash = id.indexOf("/");
  if (slash === -1) return { provider: "unknown", path: id };
  return {
    provider: id.slice(0, slash),
    path: id.slice(slash + 1),
  };
}
