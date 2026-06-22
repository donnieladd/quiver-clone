---
id: brand-system.lifecycle.archive_series_token_override
tier: ops
vertical: brand-system
title: "Archive series token override"
inputs: [series_id]
outputs: [archived_record, restored_tokens]
related: [church.ops.archive_week_assets]
---

# Archive series token override

## Purpose

Remove expired series tokens; restore core brand.

## Steps

1. Move override to archive with end date.
2. Verify no live templates reference series tokens.
3. Run token lint on remaining assets.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
