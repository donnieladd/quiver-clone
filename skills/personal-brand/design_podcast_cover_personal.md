---
id: personal-brand.media.design_podcast_cover_personal
tier: production
vertical: personal-brand
title: "Design podcast cover personal"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Design podcast cover personal

## Purpose

Podcast artwork system.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
