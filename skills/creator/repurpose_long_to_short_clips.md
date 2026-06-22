---
id: creator.content.repurpose_long_to_short_clips
tier: production
vertical: creator
title: "Repurpose long to short clips"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Repurpose long to short clips

## Purpose

Extract clips from long video.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
