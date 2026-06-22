---
id: personal-brand.media.create_personal_media_kit
tier: production
vertical: personal-brand
title: "Create personal media kit"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Create personal media kit

## Purpose

Photos, bio lengths, logos for press.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
