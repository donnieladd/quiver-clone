"use client";

import { cn } from "@/lib/utils";

interface CodePanelProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  className?: string;
}

export function CodePanel({
  value,
  onChange,
  readOnly = false,
  className,
}: CodePanelProps) {
  return (
    <textarea
      value={value}
      readOnly={readOnly}
      onChange={(e) => onChange?.(e.target.value)}
      spellCheck={false}
      className={cn(
        "h-full min-h-[240px] w-full resize-none rounded-xl border border-border bg-[#0d0d10] p-4 font-mono text-xs leading-relaxed text-zinc-300 outline-none focus:border-accent/50",
        className,
      )}
    />
  );
}
