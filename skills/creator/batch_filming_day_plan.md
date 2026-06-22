---
id: creator.content.batch_filming_day_plan
tier: ops
vertical: creator
title: "Batch filming day plan"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Batch filming day plan

## Purpose

Shot list for batch content day.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
