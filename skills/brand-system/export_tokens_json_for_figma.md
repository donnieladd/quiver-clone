---
id: brand-system.export.export_tokens_json_for_figma
tier: production
vertical: brand-system
title: "Export tokens JSON for Figma"
inputs: [brand_system_json]
outputs: [figma_tokens_json]
related: [brand-system.export.export_tokens_css_variables]
---

# Export tokens JSON for Figma

## Purpose

Figma variables / Tokens Studio compatible export.

## Steps

1. Use W3C design tokens format where possible.
2. Separate collections: color, type, spacing.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
