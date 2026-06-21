"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Artwork } from "./types";

interface GalleryState {
  artworks: Artwork[];
  addArtwork: (artwork: Artwork) => void;
  removeArtwork: (id: string) => void;
  clearGallery: () => void;
}

export const useGalleryStore = create<GalleryState>()(
  persist(
    (set) => ({
      artworks: [],
      addArtwork: (artwork) =>
        set((state) => ({
          artworks: [artwork, ...state.artworks].slice(0, 100),
        })),
      removeArtwork: (id) =>
        set((state) => ({
          artworks: state.artworks.filter((a) => a.id !== id),
        })),
      clearGallery: () => set({ artworks: [] }),
    }),
    { name: "quiver-clone-gallery" },
  ),
);
