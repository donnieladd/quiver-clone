---
id: church.brand.setup_canva_brand_kit
tier: foundation
vertical: church
title: "Set up Canva brand kit"
inputs: [logo_files, hex_palette, font_names]
outputs: [canva_brand_kit_configured]
related: [church.ops.train_volunteers_duplicate_templates]
---

# Set up Canva brand kit

## Purpose

Lock logos, colors, and fonts so volunteers cannot drift off-brand.

## When to use

Apply when this task appears in an active church media workflow (see `INDEX.md`).

## When NOT to use

Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied.

## Inputs

- `logo_files`
- `hex_palette`
- `font_names`

## Decision rules

- Follow brand guide and series kit when present.
- Prefer template duplication over new layout.
- Escalate theology-sensitive copy to pastoral review.

## Steps

1. Upload primary, reversed, and submark logos.
2. Add hex colors only (no unnamed swatches).
3. Add max 2–3 font pairs with usage notes in kit description.
4. Restrict brand kit editing to comms staff.

## Export specs

See `INDEX.md` platform format reference for dimensions and color space.

## QA checks

- [ ] `church.qa.logo_and_color_compliance`
- [ ] `church.qa.approval_status_recorded`

## Examples

_Add church-specific examples when implementing this skill in production._

## Related skills

- `church.ops.train_volunteers_duplicate_templates`
