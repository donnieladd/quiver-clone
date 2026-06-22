---
id: creator.live.design_live_stream_overlay_kit
tier: production
vertical: creator
title: "Design live stream overlay kit"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Design live stream overlay kit

## Purpose

OBS/stream overlays on-brand.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
