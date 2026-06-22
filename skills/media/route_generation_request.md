---
id: media.router.route_generation_request
tier: foundation
vertical: media
title: "Route generation request"
inputs: []
outputs: []
related: [platform.brand_studio.route_media_generation]
---

# Route generation request

## Purpose

Central router — picks provider by model id and cost.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per media/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `platform.brand_studio.route_media_generation`
