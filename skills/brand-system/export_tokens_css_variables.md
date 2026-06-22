---
id: brand-system.export.export_tokens_css_variables
tier: production
vertical: brand-system
title: "Export tokens to CSS variables"
inputs: [brand_system_json]
outputs: [tokens_css]
related: [brand-system.export.export_tokens_tailwind_theme]
---

# Export tokens to CSS variables

## Purpose

Generate :root CSS for web and email.

## Steps

1. Flatten tokens to --color-brand-primary format.
2. Include typography and spacing.
3. Version filename with brand version.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
