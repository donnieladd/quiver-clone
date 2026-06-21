export type ModelId = "arrow-1" | "arrow-1.1" | "arrow-1.1-max";

export interface QuiverModel {
  id: ModelId;
  object: "model";
  name: string;
  description: string;
  created: number;
  owned_by: string;
  context_length: number;
  max_output_length: number;
  input_modalities: ("text" | "image" | "svg")[];
  output_modalities: ("svg")[];
  supported_operations: ("svg_generate" | "svg_edit" | "svg_vectorize")[];
  supported_sampling_parameters: (
    | "temperature"
    | "top_p"
    | "presence_penalty"
  )[];
  pricing: { svg_generate: string; svg_vectorize: string };
  pricing_credits: { svg_generate: number; svg_vectorize: number };
  maxReferences: number;
}

export interface Artwork {
  id: string;
  title: string;
  svg: string;
  prompt?: string;
  mode: "generate" | "vectorize";
  model: ModelId;
  createdAt: number;
}

export type StreamPhase =
  | "generating"
  | "reasoning"
  | "draft"
  | "content"
  | "error";

export interface PublicErrorEnvelope {
  status: number;
  code: string;
  message: string;
  request_id: string;
}

export interface SvgDocument {
  mime_type: "image/svg+xml";
  svg: string;
}

export interface SvgResponse {
  id: string;
  created: number;
  credits?: number;
  data: SvgDocument[];
  usage: {
    input_tokens: 0;
    output_tokens: 0;
    total_tokens: 0;
  };
}

export interface GenerateSVGRequest {
  model: string;
  prompt: string;
  instructions?: string;
  n?: number;
  stream?: boolean;
  temperature?: number;
  top_p?: number;
  presence_penalty?: number;
  max_output_tokens?: number;
  references?: Array<{ url?: string; base64?: string } | string>;
}

export interface VectorizeSVGRequest {
  model: string;
  image: { url?: string; base64?: string };
  auto_crop?: boolean;
  target_size?: number;
  stream?: boolean;
  temperature?: number;
  top_p?: number;
  presence_penalty?: number;
  max_output_tokens?: number;
}
