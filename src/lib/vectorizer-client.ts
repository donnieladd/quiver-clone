import ImageTracer from "imagetracerjs";
import type { ModelId } from "./types";

function getTracerOptions(model: ModelId) {
  if (model === "arrow-1.1-max") {
    return {
      ltres: 0.5,
      qtres: 0.5,
      pathomit: 4,
      colorsampling: 2,
      numberofcolors: 16,
      scale: 1,
      linefilter: true,
      rightangleenhance: true,
      viewbox: true,
    };
  }

  return {
    ltres: 1,
    qtres: 1,
    pathomit: 8,
    colorsampling: 1,
    numberofcolors: 8,
    scale: 1,
    linefilter: true,
    rightangleenhance: false,
    viewbox: true,
  };
}

export async function vectorizeImageData(
  imageData: ImageData,
  model: ModelId,
): Promise<string> {
  const svg = ImageTracer.imagedataToSVG(
    imageData,
    getTracerOptions(model),
  );
  return normalizeVectorSvg(svg);
}

function normalizeVectorSvg(svg: string): string {
  let result = svg.trim();
  if (!result.includes("xmlns")) {
    result = result.replace(
      "<svg",
      '<svg xmlns="http://www.w3.org/2000/svg"',
    );
  }
  return result;
}

export function loadImageFromBase64(base64: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = base64.startsWith("data:")
      ? base64
      : `data:image/png;base64,${base64}`;
  });
}

export function imageToImageData(
  img: HTMLImageElement,
  targetSize?: number,
): ImageData {
  const canvas = document.createElement("canvas");
  const size = targetSize ?? Math.min(Math.max(img.width, img.height), 512);
  const scale = size / Math.max(img.width, img.height);
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

export async function vectorizeBase64Client(
  base64: string,
  model: ModelId,
  targetSize?: number,
): Promise<string> {
  const img = await loadImageFromBase64(base64);
  const imageData = imageToImageData(img, targetSize);
  return vectorizeImageData(imageData, model);
}
