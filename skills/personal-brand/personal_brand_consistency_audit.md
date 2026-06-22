---
id: personal-brand.ops.personal_brand_consistency_audit
tier: qa
vertical: personal-brand
title: "Personal brand consistency audit"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Personal brand consistency audit

## Purpose

Monthly audit of profiles vs tokens.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
