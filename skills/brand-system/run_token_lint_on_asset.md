---
id: brand-system.qa.run_token_lint_on_asset
tier: qa
vertical: brand-system
title: "Run token lint on asset"
inputs: [asset_path, brand_system_json]
outputs: [lint_pass_fail, violations]
related: [church.qa.logo_and_color_compliance, platform.brand_studio.run_qa_pipeline]
---

# Run token lint on asset

## Purpose

Validate SVG, PNG, or CSS against BrandSystem rules.

## Steps

1. Check logo clear space and forbidden treatments.
2. Verify colors match token set within delta-E threshold.
3. Verify fonts are approved families.
4. Return machine-readable violations list.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
