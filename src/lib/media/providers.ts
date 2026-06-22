import { generateLocalSvg } from "@/lib/local-svg-generator";
import { generateSvg } from "@/lib/svg-generator";
import type {
  MediaModel,
  ProviderGenerateInput,
  ProviderGenerateResult,
} from "./types";

export async function generateLocal(
  input: ProviderGenerateInput,
): Promise<ProviderGenerateResult> {
  const { model, prompt, requestId } = input;

  if (model.modality === "image") {
    const svg = generateLocalSvg({
      prompt: prompt ?? "placeholder",
      model: "arrow-1.1",
      instructions: "minimal flat icon, square composition",
    });
    const b64 = Buffer.from(svg).toString("base64");
    return {
      status: "completed",
      outputs: [
        {
          mime_type: "image/svg+xml",
          b64_json: b64,
          svg,
        },
      ],
    };
  }

  if (model.modality === "video") {
    return {
      status: "completed",
      outputs: [
        {
          mime_type: "text/plain",
          url: `https://placeholder.brand-studio.local/video/${requestId}.mp4`,
        },
      ],
    };
  }

  return {
    status: "failed",
    error: { code: "unsupported", message: "Local provider modality not supported" },
  };
}

export async function generateQuiver(
  input: ProviderGenerateInput,
): Promise<ProviderGenerateResult> {
  const modelId = input.model.id.replace("quiver/", "") as "arrow-1.1" | "arrow-1.1-max" | "arrow-1";
  const { svg } = await generateSvg({
    prompt: input.prompt ?? "",
    model: modelId === "arrow-1" ? "arrow-1.1" : modelId,
    instructions: String(input.parameters?.instructions ?? ""),
    temperature: 0.7,
  });
  return {
    status: "completed",
    outputs: [{ mime_type: "image/svg+xml", svg }],
  };
}

export async function generateOpenAI(
  input: ProviderGenerateInput,
): Promise<ProviderGenerateResult> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      status: "failed",
      error: {
        code: "missing_credentials",
        message: "OPENAI_API_KEY not configured — use local/mock-image or set key",
      },
    };
  }

  const size =
    (input.parameters?.size as string | undefined) ?? "1024x1024";
  const prompt = input.prompt ?? "";

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return {
      status: "failed",
      error: { code: "provider_error", message: text.slice(0, 500) },
    };
  }

  const data = (await response.json()) as {
    data?: Array<{ b64_json?: string; url?: string }>;
  };

  const first = data.data?.[0];
  if (!first) {
    return {
      status: "failed",
      error: { code: "empty_response", message: "No image returned" },
    };
  }

  return {
    status: "completed",
    outputs: [
      {
        mime_type: "image/png",
        b64_json: first.b64_json,
        url: first.url,
      },
    ],
  };
}

function higgsfieldCredentials(): string | undefined {
  return (
    process.env.HIGGSFIELD_CREDENTIALS ??
    process.env.HIGGSFIELD_API_KEY ??
    undefined
  );
}

export async function generateHiggsfield(
  input: ProviderGenerateInput,
): Promise<ProviderGenerateResult> {
  const credentials = higgsfieldCredentials();
  if (!credentials) {
    return {
      status: "failed",
      error: {
        code: "missing_credentials",
        message:
          "Set HIGGSFIELD_CREDENTIALS=KEY_ID:KEY_SECRET from cloud.higgsfield.ai",
      },
    };
  }

  try {
    const { createHiggsfieldClient } = await import("@higgsfield/client/v2");
    const client = createHiggsfieldClient({ credentials });

    const endpoint =
      input.model.endpoint ??
      input.model.id.replace(/^higgsfield\//, "");

    const isLegacyPath = endpoint.startsWith("/v1/");

    if (isLegacyPath) {
      const result = await client.subscribe(endpoint, {
        input: {
          model:
            (input.parameters?.model as string | undefined) ?? "dop-turbo",
          prompt: input.prompt ?? "",
          input_images: (input.inputImages ?? []).map((img) => ({
            type: "image_url" as const,
            image_url: img.value,
          })),
          ...input.parameters,
        },
        withPolling: true,
      });

      return mapHiggsfieldResult(result);
    }

    const inputPayload: Record<string, unknown> = {
      prompt: input.prompt ?? "",
      ...input.parameters,
    };

    if (input.inputImages?.length) {
      inputPayload.input_image = input.inputImages[0]?.value;
      inputPayload.input_images = input.inputImages.map((i) => i.value);
    }

    const result = await client.subscribe(endpoint, {
      input: inputPayload,
      withPolling: true,
    });

    return mapHiggsfieldResult(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      status: "failed",
      error: { code: "higgsfield_error", message },
    };
  }
}

function mapHiggsfieldResult(result: unknown): ProviderGenerateResult {
  const r = result as Record<string, unknown>;
  const outputs: ProviderGenerateResult["outputs"] = [];

  const images = r.images as Array<{ url?: string }> | undefined;
  if (images?.length) {
    for (const img of images) {
      outputs.push({
        mime_type: "image/png",
        url: img.url,
      });
    }
  }

  const video = r.video as { url?: string } | undefined;
  if (video?.url) {
    outputs.push({ mime_type: "video/mp4", url: video.url });
  }

  const videoUrl = r.video_url as string | undefined;
  if (videoUrl) {
    outputs.push({ mime_type: "video/mp4", url: videoUrl });
  }

  const url = r.url as string | undefined;
  if (url && outputs.length === 0) {
    outputs.push({ mime_type: "application/octet-stream", url });
  }

  if (outputs.length === 0) {
    return {
      status: "completed",
      outputs: [
        {
          mime_type: "application/json",
          b64_json: Buffer.from(JSON.stringify(result)).toString("base64"),
        },
      ],
    };
  }

  return { status: "completed", outputs };
}

export async function runProvider(
  model: MediaModel,
  input: ProviderGenerateInput,
): Promise<ProviderGenerateResult> {
  switch (model.provider) {
    case "local":
      return generateLocal(input);
    case "quiver":
      return generateQuiver(input);
    case "openai":
      return generateOpenAI(input);
    case "higgsfield":
      return generateHiggsfield(input);
    default:
      return {
        status: "failed",
        error: { code: "unknown_provider", message: model.provider },
      };
  }
}
