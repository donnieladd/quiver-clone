---
id: personal-brand.social.optimize_linkedin_banner
tier: production
vertical: personal-brand
title: "Optimize LinkedIn banner"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Optimize LinkedIn banner

## Purpose

1584×396 banner aligned to positioning.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
