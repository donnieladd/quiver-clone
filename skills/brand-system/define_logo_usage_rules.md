---
id: brand-system.logos.define_logo_usage_rules
tier: foundation
vertical: brand-system
title: "Define logo usage rules"
inputs: [logo_matrix]
outputs: [forbidden_list, lint_rules]
related: [brand-system.qa.run_token_lint_on_asset]
---

# Define logo usage rules

## Purpose

Machine-checkable forbidden treatments.

## Steps

1. Encode forbidden: stretch, rotate, effects, unapproved colors.
2. Map to church.qa.logo_and_color_compliance for vertical lint.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
