---
id: creator.business.affiliate_link_placement_guide
tier: production
vertical: creator
title: "Affiliate link placement guide"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Affiliate link placement guide

## Purpose

Where and how to place affiliate CTAs.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
