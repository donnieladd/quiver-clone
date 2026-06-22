---
id: personal-brand.social.design_link_in_bio_page
tier: production
vertical: personal-brand
title: "Design link-in-bio page"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Design link-in-bio page

## Purpose

Single landing for all personal CTAs.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
