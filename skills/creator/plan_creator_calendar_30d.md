---
id: creator.content.plan_creator_calendar_30d
tier: production
vertical: creator
title: "Plan creator calendar 30d"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Plan creator calendar 30d

## Purpose

Platform-native 30-day plan.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
