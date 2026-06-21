"use client";

import { cn } from "@/lib/utils";

interface SvgPreviewProps {
  svg: string;
  className?: string;
  checkerboard?: boolean;
}

export function SvgPreview({
  svg,
  className,
  checkerboard = true,
}: SvgPreviewProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-xl border border-border",
        checkerboard && "grid-bg",
        className,
      )}
    >
      {svg ? (
        <div
          className="max-h-full max-w-full p-8 [&>svg]:h-auto [&>svg]:max-h-[420px] [&>svg]:w-full [&>svg]:max-w-[420px]"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <p className="text-sm text-muted">SVG preview will appear here</p>
      )}
    </div>
  );
}
