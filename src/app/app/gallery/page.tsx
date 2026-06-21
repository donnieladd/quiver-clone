import { SiteHeader } from "@/components/site-header";
import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl flex-1 px-6 py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Gallery</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Your creations
          </h1>
          <p className="mt-2 text-muted">
            Review, download, and manage SVGs saved from the Playground.
          </p>
        </div>
        <GalleryGrid />
      </main>
    </>
  );
}
