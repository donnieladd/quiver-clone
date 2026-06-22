---
id: brand-system.lifecycle.version_brand_system_release
tier: ops
vertical: brand-system
title: "Version brand system release"
inputs: [changes, approver]
outputs: [new_version, changelog_entry]
related: [brand-system.lifecycle.migrate_prose_brand_to_tokens]
---

# Version brand system release

## Purpose

Semver brand system; changelog for staff.

## Steps

1. Bump patch for token fix, minor for new component, major for rebrand.
2. Notify vertical ops to refresh Canva kits.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
