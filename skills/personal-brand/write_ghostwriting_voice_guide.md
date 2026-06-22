---
id: personal-brand.content.write_ghostwriting_voice_guide
tier: foundation
vertical: personal-brand
title: "Write ghostwriting voice guide"
inputs: []
outputs: []
related: [brand-system.tokens.define_design_tokens]
---

# Write ghostwriting voice guide

## Purpose

Do/don't for assistants and AI drafting.

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per personal-brand/INDEX.md decision tree.
3. Route media via `media.router.route_generation_request` when assets need AI generation.
4. Run `brand-system.qa.run_token_lint_on_asset` before publish.

## Related

- `brand-system.tokens.define_design_tokens`
