export type MediaProvider =
  | "higgsfield"
  | "openai"
  | "quiver"
  | "local";

export type MediaModality = "image" | "video" | "audio" | "svg" | "3d";

export type MediaJobStatus =
  | "queued"
  | "processing"
  | "completed"
  | "failed"
  | "cancelled";

export interface MediaModel {
  id: string;
  object: "model";
  provider: MediaProvider;
  modality: MediaModality;
  name: string;
  description: string;
  endpoint?: string;
  input_modalities: string[];
  output_modalities: string[];
  pricing_credits: number;
  parameters_schema?: Record<string, unknown>;
}

export interface MediaGenerationRequest {
  model: string;
  prompt?: string;
  input_images?: Array<{ type: "url" | "base64"; value: string }>;
  parameters?: Record<string, unknown>;
  wait?: boolean;
  webhook_url?: string;
}

export interface MediaOutputAsset {
  mime_type: string;
  url?: string;
  b64_json?: string;
  svg?: string;
  width?: number;
  height?: number;
  duration_seconds?: number;
}

export interface MediaJob {
  id: string;
  object: "generation";
  status: MediaJobStatus;
  model: string;
  provider: MediaProvider;
  created: number;
  completed_at?: number;
  prompt?: string;
  outputs?: MediaOutputAsset[];
  error?: { code: string; message: string };
  credits_charged: number;
  request_id: string;
}

export interface ProviderGenerateInput {
  model: MediaModel;
  prompt?: string;
  inputImages?: Array<{ type: "url" | "base64"; value: string }>;
  parameters?: Record<string, unknown>;
  requestId: string;
}

export interface ProviderGenerateResult {
  status: MediaJobStatus;
  outputs?: MediaOutputAsset[];
  externalJobId?: string;
  error?: { code: string; message: string };
}
