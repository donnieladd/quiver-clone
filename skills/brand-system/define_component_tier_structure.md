---
id: brand-system.components.define_component_tier_structure
tier: foundation
vertical: brand-system
title: "Define component tier structure"
inputs: [template_inventory]
outputs: [components_map]
related: [brand-system.components.map_tokens_to_template_families]
---

# Define component tier structure

## Purpose

Map Tier 3 components to DAM and token bindings.

## Steps

1. Tag each family: foundation|component|template|campaign.
2. Assign dam_path per vertical profile.
3. Bind semantic tokens per component slot.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
