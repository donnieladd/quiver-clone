---
id: brand-system.components.map_tokens_to_template_families
tier: production
vertical: brand-system
title: "Map tokens to template families"
inputs: [components_map, canva_templates]
outputs: [binding_audit_report]
related: [church.ops.duplicate_template_not_redesign]
---

# Map tokens to template families

## Purpose

Ensure every Canva/Figma template uses token bindings not ad hoc hex.

## Steps

1. Audit templates for hardcoded colors.
2. Replace with token references in Brand Studio.
3. Block publish if audit fails.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
