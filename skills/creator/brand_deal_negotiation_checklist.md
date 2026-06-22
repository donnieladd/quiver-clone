---
id: creator.business.brand_deal_negotiation_checklist
tier: ops
vertical: creator
title: "Brand deal negotiation checklist"
inputs: []
outputs: []
related: [media.router.route_generation_request]
---

# Brand deal negotiation checklist

## Purpose

Usage rights, exclusivity, whitelisting.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per creator/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `media.router.route_generation_request`
