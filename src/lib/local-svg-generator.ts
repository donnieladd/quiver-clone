import type { ModelId } from "./types";

interface GenerateOptions {
  prompt: string;
  instructions?: string;
  model: ModelId;
}

const TEMPLATES: Record<string, (palette: string[]) => string> = {
  mountain: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${c[0]}"/>
  <polygon points="0,360 180,140 320,280 512,120 512,512 0,512" fill="${c[1]}"/>
  <polygon points="120,360 260,200 420,340 512,260 512,512 0,512" fill="${c[2]}" opacity="0.85"/>
  <circle cx="380" cy="110" r="42" fill="${c[3]}"/>
</svg>`,

  heart: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${c[0]}"/>
  <path d="M256 420 C256 420 80 280 80 170 C80 110 120 70 170 70 C210 70 240 95 256 130 C272 95 302 70 342 70 C392 70 432 110 432 170 C432 280 256 420 256 420 Z" fill="${c[1]}"/>
</svg>`,

  star: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${c[0]}"/>
  <polygon points="256,60 310,210 470,210 340,300 385,450 256,355 127,450 172,300 42,210 202,210" fill="${c[1]}"/>
</svg>`,

  rocket: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${c[0]}"/>
  <ellipse cx="256" cy="430" rx="90" ry="18" fill="${c[3]}" opacity="0.35"/>
  <path d="M256 80 C256 80 190 180 190 280 L190 360 L220 330 L256 390 L292 330 L322 360 L322 280 C322 180 256 80 256 80 Z" fill="${c[1]}"/>
  <circle cx="256" cy="220" r="34" fill="${c[2]}"/>
  <path d="M190 300 L150 360 L190 340 Z" fill="${c[2]}"/>
  <path d="M322 300 L362 360 L322 340 Z" fill="${c[2]}"/>
</svg>`,

  sun: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${c[0]}"/>
  <g stroke="${c[1]}" stroke-width="18" stroke-linecap="round">
    <line x1="256" y1="40" x2="256" y2="100"/><line x1="256" y1="412" x2="256" y2="472"/>
    <line x1="40" y1="256" x2="100" y2="256"/><line x1="412" y1="256" x2="472" y2="256"/>
    <line x1="103" y1="103" x2="145" y2="145"/><line x1="367" y1="367" x2="409" y2="409"/>
    <line x1="409" y1="103" x2="367" y2="145"/><line x1="145" y1="367" x2="103" y2="409"/>
  </g>
  <circle cx="256" cy="256" r="88" fill="${c[1]}"/>
</svg>`,

  tree: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${c[0]}"/>
  <rect x="232" y="300" width="48" height="120" rx="8" fill="${c[3]}"/>
  <polygon points="256,60 380,280 132,280" fill="${c[1]}"/>
  <polygon points="256,140 360,300 152,300" fill="${c[2]}"/>
</svg>`,

  logo: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="${c[0]}"/>
  <circle cx="256" cy="256" r="120" fill="none" stroke="${c[1]}" stroke-width="24"/>
  <path d="M256 160 L256 352 M160 256 L352 256" stroke="${c[2]}" stroke-width="20" stroke-linecap="round"/>
</svg>`,
};

function paletteForInstructions(instructions?: string, model?: ModelId): string[] {
  const text = (instructions ?? "").toLowerCase();
  if (text.includes("monochrome") || text.includes("black")) {
    return ["#0f0f12", "#f5f5f7", "#a1a1aa", "#ffffff"];
  }
  if (text.includes("warm")) {
    return ["#1a1208", "#f97316", "#fbbf24", "#fde68a"];
  }
  if (text.includes("cool") || text.includes("blue")) {
    return ["#0b1220", "#38bdf8", "#6366f1", "#e0f2fe"];
  }
  if (model === "arrow-1.1-max" || model === "arrow-1") {
    return ["#09090b", "#8b5cf6", "#22d3ee", "#f472b6"];
  }
  return ["#0c0c0f", "#6366f1", "#a78bfa", "#f8fafc"];
}

function matchTemplate(prompt: string): keyof typeof TEMPLATES {
  const p = prompt.toLowerCase();
  if (p.includes("mountain")) return "mountain";
  if (p.includes("heart")) return "heart";
  if (p.includes("star")) return "star";
  if (p.includes("rocket") || p.includes("space")) return "rocket";
  if (p.includes("sun") || p.includes("weather")) return "sun";
  if (p.includes("tree") || p.includes("nature")) return "tree";
  if (p.includes("logo") || p.includes("brand") || p.includes("icon")) return "logo";
  return "logo";
}

export function generateLocalSvg(options: GenerateOptions): string {
  const palette = paletteForInstructions(options.instructions, options.model);
  const key = matchTemplate(options.prompt);
  const base = TEMPLATES[key](palette);

  if (options.model === "arrow-1.1-max" || options.model === "arrow-1") {
    return base.replace(
      "</svg>",
      `  <text x="256" y="490" text-anchor="middle" fill="${palette[3]}" font-family="system-ui,sans-serif" font-size="14" opacity="0.5">${escapeXml(options.prompt.slice(0, 48))}</text>\n</svg>`,
    );
  }

  return base;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function getAiProvider(): "openai" | "anthropic" | "local" {
  if (process.env.OPENAI_API_KEY) return "openai";
  if (process.env.ANTHROPIC_API_KEY) return "anthropic";
  return "local";
}
