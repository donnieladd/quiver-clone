---
id: creator.analytics.weekly_creator_analytics_review
tier: ops
vertical: creator
title: "Weekly creator analytics review"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Weekly creator analytics review

## Purpose

Review retention, CTR, conversion.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
