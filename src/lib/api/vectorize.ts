import ImageTracer from "imagetracerjs";
import type { ModelId } from "@/lib/types";

function tracerOptions(model: ModelId) {
  if (model === "arrow-1.1-max") {
    return {
      ltres: 0.5,
      qtres: 0.5,
      pathomit: 4,
      numberofcolors: 16,
      viewbox: true,
    };
  }
  if (model === "arrow-1") {
    return {
      ltres: 1.2,
      qtres: 1.2,
      pathomit: 10,
      numberofcolors: 6,
      viewbox: true,
    };
  }
  return {
    ltres: 1,
    qtres: 1,
    pathomit: 8,
    numberofcolors: 8,
    viewbox: true,
  };
}

export async function resolveImageDataUrl(image: {
  url?: string;
  base64?: string;
}): Promise<string> {
  if (image.base64) {
    const value = image.base64.trim();
    if (value.startsWith("data:")) return value;
    return `data:image/png;base64,${value}`;
  }

  if (image.url) {
    const response = await fetch(image.url, { redirect: "follow" });
    if (!response.ok) {
      throw new Error(`Failed to fetch image URL (${response.status})`);
    }
    const contentType = response.headers.get("content-type") ?? "image/png";
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.byteLength > 12_582_912) {
      throw new Error("Image exceeds maximum size (12,582,912 bytes)");
    }
    return `data:${contentType};base64,${buffer.toString("base64")}`;
  }

  throw new Error("image must include url or base64");
}

export async function vectorizeFromDataUrl(
  dataUrl: string,
  model: ModelId,
  targetSize = 512,
): Promise<string> {
  const { createCanvas, loadImage } = await import("canvas");
  const img = await loadImage(dataUrl);
  const scale = targetSize / Math.max(img.width, img.height);
  const width = Math.max(1, Math.round(img.width * scale));
  const height = Math.max(1, Math.round(img.height * scale));
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);
  const imageData = ctx.getImageData(0, 0, width, height);
  return ImageTracer.imagedataToSVG(
    imageData as unknown as ImageData,
    tracerOptions(model),
  );
}

export async function vectorizeImageInput(
  image: { url?: string; base64?: string },
  model: ModelId,
  targetSize?: number,
): Promise<string> {
  const dataUrl = await resolveImageDataUrl(image);
  return vectorizeFromDataUrl(dataUrl, model, targetSize ?? 512);
}
