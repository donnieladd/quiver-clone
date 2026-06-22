---
id: brand-system.tokens.define_typography_scale
tier: foundation
vertical: brand-system
title: "Define typography scale"
inputs: [font_families, scale_ratio]
outputs: [typography_tokens]
related: [brand-system.export.export_tokens_css_variables]
---

# Define typography scale

## Purpose

Modular type scale for social, slides, web, print.

## Steps

1. Lock sans + display families.
2. Define fontSize steps (xs through display).
3. Set weights and line heights.
4. Document display font for series-only use.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
