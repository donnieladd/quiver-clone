---
id: creator.social.export_platform_native_aspects
tier: production
vertical: creator
title: "Export platform native aspects"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Export platform native aspects

## Purpose

9:16, 1:1, 16:9 export matrix.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
