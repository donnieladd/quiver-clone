---
id: media.quiver.svg_generate_via_media_api
tier: production
vertical: media
title: "Quiver SVG generate via media API"
inputs: []
outputs: []
related: [platform.brand_studio.route_media_generation]
---

# Quiver SVG generate via media API

## Purpose

quiver/arrow models via unified API.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per media/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `platform.brand_studio.route_media_generation`
