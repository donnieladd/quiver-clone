---
id: brand-system.lifecycle.create_series_token_override
tier: production
vertical: brand-system
title: "Create series token override"
inputs: [series_name, date_range, series_art]
outputs: [series_overrides_entry]
related: [brand-system.lifecycle.archive_series_token_override]
---

# Create series token override

## Purpose

Temporary palette and display type for sermon series.

## Steps

1. Add series_overrides with active_from/until.
2. Override color.brand.primary and typography.display only.
3. Sync to church.series domain kits.

## QA checks

- [ ] Validates against `schema.json` when producing JSON
- [ ] Documented in client `.tokens.json` or Brand Studio project
