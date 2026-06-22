---
id: brand-system.logos.document_logo_matrix
tier: foundation
vertical: brand-system
title: "Document logo matrix"
inputs: [logo_svgs, brand_guide]
outputs: [logo_matrix_json]
related: [brand-system.logos.define_logo_usage_rules]
---

# Document logo matrix

## Purpose

Catalog every logo variant with file paths and use cases.

## Steps

1. List primary, reversed, submark, social avatar.
2. Record min width and clear space ratio per variant.
3. Note allowed backgrounds per variant.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
