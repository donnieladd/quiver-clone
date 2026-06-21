import Link from "next/link";
import { ArrowRight, Layers, Sparkles, Wand2, Zap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const features = [
  {
    icon: Wand2,
    title: "Text to SVG",
    description:
      "Describe what you want and get clean, editable vector output — icons, logos, illustrations, and diagrams.",
  },
  {
    icon: Layers,
    title: "Image to SVG",
    description:
      "Upload PNG or JPEG assets and convert them into structured SVG paths ready for editing and scaling.",
  },
  {
    icon: Sparkles,
    title: "Arrow models",
    description:
      "Choose Arrow 1.1 for everyday work or Arrow 1.1 Max when precision and detail matter most.",
  },
  {
    icon: Zap,
    title: "Streaming preview",
    description:
      "Watch reasoning, draft, and final SVG phases stream in — just like the QuiverAI playground.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">
              Visual code generation
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
              Building the future of vector design
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Generate, edit, and export production-ready SVG assets from text
              prompts and raster images. Vectors are code — structured,
              scalable, and fully editable.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/app"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:brightness-110"
              >
                Open Playground
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/app/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium transition hover:bg-card-hover"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Everything you need to create vectors with AI
            </h2>
            <p className="mt-4 text-muted">
              A functional QuiverAI-style workflow: playground generation,
              vectorization, gallery, and export.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 transition hover:bg-card-hover"
              >
                <feature.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                "Write a prompt or upload a raster image in the Playground.",
                "Pick Arrow 1.1 or Arrow 1.1 Max and generate your SVG.",
                "Preview, edit code, export SVG/PNG, and save to Gallery.",
              ].map((step, index) => (
                <li key={step} className="space-y-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-medium text-accent">
                    {index + 1}
                  </span>
                  <p className="text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to create your first SVG?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Works out of the box with built-in generation and vectorization.
            Add an OpenAI or Anthropic API key for AI-powered text-to-SVG.
          </p>
          <Link href="/app" className="mt-8 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:brightness-110">
              Launch Playground
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        Quiver Clone — functional open-source-style recreation of QuiverAI
      </footer>
    </>
  );
}
