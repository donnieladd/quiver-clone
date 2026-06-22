---
id: creator.product.lead_magnet_funnel_visuals
tier: production
vertical: creator
title: "Lead magnet funnel visuals"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Lead magnet funnel visuals

## Purpose

Opt-in, thank-you, nurture graphics.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
