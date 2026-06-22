---
id: product-brand.saas.define_saas_ui_tokens
tier: foundation
vertical: product-brand
title: "Define SaaS UI tokens"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Define SaaS UI tokens

## Purpose

Product UI extends marketing brand.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per product-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
