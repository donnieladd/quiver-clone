---
id: creator.strategy.define_creator_monetization_stack
tier: foundation
vertical: creator
title: "Define creator monetization stack"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Define creator monetization stack

## Purpose

Ads, subs, products, sponsors map.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
