---
id: brand-system.logos.define_subbrand_inheritance
tier: production
vertical: brand-system
title: "Define sub-brand inheritance"
inputs: [subbrand_brief, parent_tokens]
outputs: [subbrand_token_block]
related: [church.story.promote_worship_subbrand]
---

# Define sub-brand inheritance

## Purpose

Sub-brands extend parent tokens with explicit overrides only.

## Steps

1. Create sub_brands[] entry with extends: parent.
2. List token_overrides object — no full fork.
3. Link template_family in vertical profile.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
