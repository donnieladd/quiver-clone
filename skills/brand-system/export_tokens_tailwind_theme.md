---
id: brand-system.export.export_tokens_tailwind_theme
tier: production
vertical: brand-system
title: "Export tokens to Tailwind theme"
inputs: [brand_system_json]
outputs: [tailwind_theme_snippet]
related: [church.web-premium.typography_as_identity_pairing]
---

# Export tokens to Tailwind theme

## Purpose

Extend tailwind.config with semantic theme.

## Steps

1. Map colors and fontFamily to theme.extend.
2. Document in Brand Studio web projects.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
