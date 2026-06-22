---
id: brand-system.lifecycle.migrate_prose_brand_to_tokens
tier: foundation
vertical: brand-system
title: "Migrate prose brand guide to tokens"
inputs: [brand_hub_url, existing_profile]
outputs: [brand_system_json]
related: [brand-system.tokens.define_design_tokens]
---

# Migrate prose brand guide to tokens

## Purpose

Convert PDF brand hub to structured JSON.

## Steps

1. Extract colors, fonts, logo rules from guide.
2. Fill faith-chapel.tokens.json pattern.
3. Link client_slug to church profile.
4. Validate against schema.json.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
