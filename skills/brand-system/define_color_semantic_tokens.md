---
id: brand-system.tokens.define_color_semantic_tokens
tier: foundation
vertical: brand-system
title: "Define semantic color tokens"
inputs: [brand_palette_hex, accessibility_targets]
outputs: [color_token_map]
related: [brand-system.qa.run_token_lint_on_asset]
---

# Define semantic color tokens

## Purpose

Name colors by role not appearance — brand.primary not blue-500.

## Steps

1. Map 1–2 brand primaries from logo.
2. Add text, surface, border semantic groups.
3. Add semantic success/warning/error sparingly.
4. Verify WCAG AA pairs for text on surface.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
