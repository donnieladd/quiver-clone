---
id: product-brand.saas.feature_naming_system
tier: foundation
vertical: product-brand
title: "Feature naming system"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Feature naming system

## Purpose

Consistent naming for releases.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
