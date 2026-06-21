"use client";

import { useCallback, useRef, useState } from "react";
import {
  Copy,
  Download,
  ImageUp,
  Loader2,
  Sparkles,
  Wand2,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { CodePanel } from "@/components/code-panel";
import { SvgPreview } from "@/components/svg-preview";
import { MODELS } from "@/lib/models";
import { useGalleryStore } from "@/lib/store";
import type { ModelId, StreamPhase } from "@/lib/types";
import { downloadBlob, svgToPng } from "@/lib/utils";

type Mode = "generate" | "vectorize";

const PHASE_LABELS: Record<StreamPhase, string> = {
  generating: "Generating",
  reasoning: "Reasoning",
  draft: "Draft",
  content: "Final SVG",
  error: "Error",
};

export function Playground() {
  const addArtwork = useGalleryStore((s) => s.addArtwork);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState<Mode>("generate");
  const [model, setModel] = useState<ModelId>("arrow-1.1");
  const [prompt, setPrompt] = useState("a minimalist logo of a mountain at sunset");
  const [instructions, setInstructions] = useState("clean flat design, purple accent palette");
  const [temperature, setTemperature] = useState(0.85);
  const [svg, setSvg] = useState("");
  const [phase, setPhase] = useState<StreamPhase | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [streamEnabled, setStreamEnabled] = useState(true);

  const saveToGallery = useCallback(
    (nextSvg: string, title: string) => {
      addArtwork({
        id: uuidv4(),
        title,
        svg: nextSvg,
        prompt: mode === "generate" ? prompt : undefined,
        mode,
        model,
        createdAt: Date.now(),
      });
    },
    [addArtwork, mode, model, prompt],
  );

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setStatus(null);
    setPhase(null);
    setSvg("");

    try {
      if (streamEnabled) {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt,
            instructions,
            model,
            temperature,
            stream: true,
          }),
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error ?? "Generation failed");
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        if (!reader) throw new Error("No stream available");

        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const chunks = buffer.split("\n\n");
          buffer = chunks.pop() ?? "";

          for (const chunk of chunks) {
            const lines = chunk.split("\n");
            let eventName: string | null = null;
            let dataLine: string | null = null;
            for (const line of lines) {
              if (line.startsWith("event: ")) eventName = line.slice(7).trim();
              if (line.startsWith("data: ")) dataLine = line.slice(6);
            }
            if (!dataLine || dataLine === "[DONE]") continue;

            const payload = JSON.parse(dataLine) as {
              type?: StreamPhase;
              phase?: StreamPhase;
              svg?: string;
              content?: string;
              text?: string;
              message?: string;
            };

            const phase = payload.type ?? payload.phase ?? eventName;
            if (phase === "reasoning" || phase === "generating") {
              setPhase(phase);
            }
            if (phase === "draft" || phase === "content") {
              setPhase(phase);
              const nextSvg = payload.svg ?? payload.content;
              if (nextSvg) setSvg(nextSvg);
            }
          }
        }

        setStatus("Generation complete");
      } else {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt,
            instructions,
            model,
            temperature,
            stream: false,
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error ?? "Generation failed");
        const nextSvg = data.data[0].svg as string;
        setSvg(nextSvg);
        setStatus(`Generated via ${data.provider}`);
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Generation failed");
    } finally {
      setLoading(false);
      setPhase(null);
    }
  };

  const handleVectorize = async () => {
    if (!uploadPreview) return;
    setLoading(true);
    setStatus(null);
    setSvg("");

    try {
      const response = await fetch("/api/vectorize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: uploadPreview,
          model,
          targetSize: 512,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Vectorization failed");
      setSvg(data.data[0].svg as string);
      setStatus("Vectorization complete");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Vectorization failed");
    } finally {
      setLoading(false);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUploadPreview(reader.result as string);
      setMode("vectorize");
    };
    reader.readAsDataURL(file);
  };

  const copySvg = async () => {
    await navigator.clipboard.writeText(svg);
    setStatus("Copied SVG to clipboard");
  };

  const downloadSvg = () => {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, "quiver-clone.svg");
  };

  const downloadPng = async () => {
    try {
      const blob = await svgToPng(svg);
      downloadBlob(blob, "quiver-clone.png");
    } catch {
      setStatus("PNG export failed");
    }
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[360px_1fr]">
      <aside className="space-y-5">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">
            Playground
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create SVGs with Arrow
          </h1>
          <p className="mt-2 text-sm text-muted">
            Generate from text or vectorize raster images into editable SVG.
          </p>
        </div>

        <div className="flex rounded-xl border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setMode("generate")}
            className={`flex-1 rounded-lg px-3 py-2 text-sm transition ${
              mode === "generate"
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            Text to SVG
          </button>
          <button
            type="button"
            onClick={() => setMode("vectorize")}
            className={`flex-1 rounded-lg px-3 py-2 text-sm transition ${
              mode === "vectorize"
                ? "bg-accent text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            Image to SVG
          </button>
        </div>

        <label className="block space-y-2 text-sm">
          <span className="text-muted">Model</span>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as ModelId)}
            className="w-full rounded-xl border border-border bg-[#0d0d10] px-3 py-2 outline-none focus:border-accent/50"
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-muted">
            {MODELS.find((m) => m.id === model)?.description}
          </p>
        </label>

        {mode === "generate" ? (
          <>
            <label className="block space-y-2 text-sm">
              <span className="text-muted">Prompt</span>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-border bg-[#0d0d10] px-3 py-2 outline-none focus:border-accent/50"
              />
            </label>
            <label className="block space-y-2 text-sm">
              <span className="text-muted">Instructions</span>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                rows={3}
                className="w-full rounded-xl border border-border bg-[#0d0d10] px-3 py-2 outline-none focus:border-accent/50"
              />
            </label>
            <label className="block space-y-2 text-sm">
              <span className="text-muted">Temperature: {temperature.toFixed(2)}</span>
              <input
                type="range"
                min={0}
                max={2}
                step={0.05}
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-accent"
              />
            </label>
            <label className="flex items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={streamEnabled}
                onChange={(e) => setStreamEnabled(e.target.checked)}
                className="accent-accent"
              />
              Stream reasoning, draft, and final SVG
            </label>
            <Button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="w-full"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4" />
              )}
              Generate SVG
            </Button>
          </>
        ) : (
          <>
            <div
              role="button"
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === "Enter") fileInputRef.current?.click();
              }}
              className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card transition hover:border-accent/40 hover:bg-card-hover"
            >
              {uploadPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={uploadPreview}
                  alt="Upload preview"
                  className="max-h-40 rounded-lg object-contain"
                />
              ) : (
                <>
                  <ImageUp className="h-8 w-8 text-muted" />
                  <p className="text-sm text-muted">
                    Drop PNG, JPEG, or WebP here
                  </p>
                </>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            <Button
              onClick={handleVectorize}
              disabled={loading || !uploadPreview}
              className="w-full"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              Vectorize Image
            </Button>
          </>
        )}

        {phase && (
          <div className="rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm">
            <span className="font-medium text-accent">{PHASE_LABELS[phase]}</span>
            <span className="ml-2 animate-pulse-soft text-muted">processing…</span>
          </div>
        )}

        {status && (
          <p className="text-sm text-muted">{status}</p>
        )}
      </aside>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-medium">Preview</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              size="sm"
              disabled={!svg}
              onClick={copySvg}
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={!svg}
              onClick={downloadSvg}
            >
              <Download className="h-4 w-4" />
              SVG
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={!svg}
              onClick={downloadPng}
            >
              <Download className="h-4 w-4" />
              PNG
            </Button>
            <Button
              size="sm"
              disabled={!svg}
              onClick={() =>
                saveToGallery(
                  svg,
                  mode === "generate" ? prompt.slice(0, 60) : "Vectorized image",
                )
              }
            >
              Save to Gallery
            </Button>
          </div>
        </div>

        <SvgPreview svg={svg} className="glow min-h-[420px]" />

        <div>
          <h3 className="mb-2 text-sm font-medium text-muted">SVG Code</h3>
          <CodePanel value={svg} onChange={setSvg} />
        </div>
      </section>
    </div>
  );
}
