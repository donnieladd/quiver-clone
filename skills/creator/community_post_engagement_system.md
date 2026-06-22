---
id: creator.community.community_post_engagement_system
tier: production
vertical: creator
title: "Community post engagement system"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Community post engagement system

## Purpose

Community tab / Discord visuals.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
