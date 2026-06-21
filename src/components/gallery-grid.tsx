"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SvgPreview } from "@/components/svg-preview";
import { useGalleryStore } from "@/lib/store";
import { downloadBlob } from "@/lib/utils";

export function GalleryGrid() {
  const artworks = useGalleryStore((s) => s.artworks);
  const removeArtwork = useGalleryStore((s) => s.removeArtwork);
  const clearGallery = useGalleryStore((s) => s.clearGallery);

  if (artworks.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card px-8 py-16 text-center">
        <p className="text-lg font-medium">No creations yet</p>
        <p className="mt-2 text-sm text-muted">
          Generate or vectorize SVGs in the Playground, then save them here.
        </p>
        <Link href="/app" className="mt-6 inline-block">
          <Button>Open Playground</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">{artworks.length} saved creations</p>
        <Button variant="ghost" size="sm" onClick={clearGallery}>
          <Trash2 className="h-4 w-4" />
          Clear gallery
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {artworks.map((artwork) => (
          <article
            key={artwork.id}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <SvgPreview svg={artwork.svg} className="min-h-[220px] border-0" />
            <div className="space-y-3 border-t border-border p-4">
              <div>
                <h3 className="font-medium">{artwork.title}</h3>
                <p className="mt-1 text-xs text-muted">
                  {artwork.mode === "generate" ? "Text to SVG" : "Image to SVG"} ·{" "}
                  {artwork.model} ·{" "}
                  {new Date(artwork.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    const blob = new Blob([artwork.svg], {
                      type: "image/svg+xml",
                    });
                    downloadBlob(blob, `${artwork.id}.svg`);
                  }}
                >
                  Download
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArtwork(artwork.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
