"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface MediaModel {
  id: string;
  name: string;
  provider: string;
  modality: string;
  description: string;
  pricing_credits: number;
}

interface GenerationJob {
  id: string;
  status: string;
  model: string;
  outputs?: Array<{ mime_type: string; url?: string; svg?: string; b64_json?: string }>;
  error?: { message: string };
  credits: number;
}

const API_KEY = "qv_dev_local_key";

export function MediaStudio() {
  const [models, setModels] = useState<MediaModel[]>([]);
  const [modality, setModality] = useState<string>("image");
  const [model, setModel] = useState("");
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [job, setJob] = useState<GenerationJob | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadModels = useCallback(async () => {
    const res = await fetch("/v1/media/models", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const json = await res.json();
    setModels(json.data ?? []);
  }, []);

  useEffect(() => {
    void loadModels();
  }, [loadModels]);

  const filtered = models.filter((m) => m.modality === modality);

  useEffect(() => {
    if (filtered.length && !filtered.find((m) => m.id === model)) {
      setModel(filtered[0]?.id ?? "");
    }
  }, [modality, filtered, model]);

  const generate = async () => {
    setLoading(true);
    setError(null);
    setJob(null);
    try {
      const body: Record<string, unknown> = {
        model,
        prompt,
        wait: true,
      };
      if (imageUrl.trim() && modality !== "svg") {
        body.input_images = [{ type: "url", value: imageUrl.trim() }];
      }

      const res = await fetch("/v1/media/generations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message ?? "Generation failed");
      setJob(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed");
    } finally {
      setLoading(false);
    }
  };

  const preview = job?.outputs?.[0];

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Media Studio</h1>
        <p className="text-muted-foreground max-w-2xl text-sm">
          Higgsfield-style unified generation — image, video, SVG — routed through
          Brand Studio APIs. Set{" "}
          <code className="rounded bg-muted px-1">HIGGSFIELD_CREDENTIALS</code> or{" "}
          <code className="rounded bg-muted px-1">OPENAI_API_KEY</code> in .env.local.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {(["image", "video", "svg"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setModality(m)}
            className={`rounded-full px-4 py-1.5 text-sm capitalize ${
              modality === m
                ? "bg-foreground text-background"
                : "bg-muted text-foreground"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl border p-4">
          <label className="block space-y-1">
            <span className="text-sm font-medium">Model</span>
            <select
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              {filtered.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.provider}) — {m.pricing_credits} cr
                </option>
              ))}
            </select>
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium">Prompt</span>
            <textarea
              className="min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what to generate..."
            />
          </label>

          {modality === "video" && (
            <label className="block space-y-1">
              <span className="text-sm font-medium">Input image URL (optional)</span>
              <input
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://..."
              />
            </label>
          )}

          <Button onClick={() => void generate()} disabled={loading || !prompt.trim()}>
            {loading ? "Generating…" : "Generate"}
          </Button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="mb-3 text-sm font-medium">Output</h2>
          {!job && (
            <p className="text-muted-foreground text-sm">Results appear here.</p>
          )}
          {job && (
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                {job.id} · {job.status} · {job.credits} credits
              </p>
              {job.error && (
                <p className="text-sm text-red-600">{job.error.message}</p>
              )}
              {preview?.svg && (
                <div
                  className="overflow-auto rounded-lg bg-muted p-4"
                  dangerouslySetInnerHTML={{ __html: preview.svg }}
                />
              )}
              {preview?.url && (
                <a
                  href={preview.url}
                  className="text-sm text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open asset
                </a>
              )}
              {preview?.b64_json && preview.mime_type.includes("svg") && (
                <div
                  className="overflow-auto rounded-lg bg-muted p-4"
                  dangerouslySetInnerHTML={{
                    __html: atob(preview.b64_json),
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
