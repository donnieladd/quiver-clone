---
id: brand-system.tokens.define_design_tokens
tier: foundation
vertical: brand-system
title: "Define design tokens master file"
inputs: [client_slug, vertical]
outputs: [brand_system_json]
related: [brand-system.tokens.define_color_semantic_tokens]
---

# Define design tokens master file

## Purpose

Create BrandSystem JSON skeleton linked to schema.

## Steps

1. Copy schema required fields.
2. Set id, name, version semver.
3. Link client_slug to vertical profile.
4. Initialize empty components and series_overrides arrays.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
