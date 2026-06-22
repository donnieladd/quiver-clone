import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Sparkles className="h-4 w-4" />
          </span>
          Quiver Clone
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="/#features" className="transition hover:text-foreground">
            Features
          </Link>
          <Link href="/#how-it-works" className="transition hover:text-foreground">
            How it works
          </Link>
          <Link href="/app/gallery" className="transition hover:text-foreground">
            Gallery
          </Link>
          <Link href="/app/studio" className="transition hover:text-foreground">
            Studio
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/app"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
          >
            Open Playground
          </Link>
        </div>
      </div>
    </header>
  );
}
