---
id: creator.media.ai_assisted_b_roll_generation
tier: production
vertical: creator
title: "AI assisted B-roll generation"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# AI assisted B-roll generation

## Purpose

Use media router for supplemental B-roll.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
