---
id: church.workflow.volunteer_template_ops
title: Volunteer Template Operations Workflow
skills_used:
  - church.ops.train_volunteers_duplicate_templates
  - church.ops.duplicate_template_not_redesign
  - church.brand.setup_canva_brand_kit
  - church.brand.define_template_folder_structure
  - church.ops.create_asset_request_form
  - church.qa.logo_and_color_compliance
---

# Workflow: Volunteer Template Operations

Enable non-designers to produce **on-brand** church media by constraining choices, not adding creative freedom.

## Purpose

Most church media teams are 1 staff + volunteers. The system must survive volunteer turnover.

## Setup (once per church)

1. **`church.brand.setup_canva_brand_kit`** — logos, colors, fonts locked.
2. **`church.brand.define_template_folder_structure`** — e.g. `Templates/Social`, `Templates/Slides`, `Archive`.
3. **`church.ops.publish_role_permissions`** — who can edit brand kit vs duplicate only.
4. **`church.ops.train_volunteers_duplicate_templates`** — 30-min onboarding doc + Loom.

## Volunteer rules (enforce in training)

| Do | Don't |
|----|-------|
| Duplicate approved template | Start from blank canvas |
| Swap photo, text, week # | Change fonts or colors |
| Use brand kit swatches only | Eyedropper random colors from Google |
| Export using preset sizes | Custom resize that crops logo |
| Ask comms if unsure | Publish without approval |

## Weekly volunteer flow

1. Open template from folder (not search).
2. **`church.ops.duplicate_template_not_redesign`**
3. Replace placeholder text; run spell-check.
4. **`church.qa.logo_and_color_compliance`** self-check sheet.
5. Submit via **`church.ops.create_asset_request_form`** for approval.

## Escalation

Volunteers escalate to staff when:

- New series (needs `series-launch.md`)
- Theology-sensitive quote
- New event type with no template
- Brand kit missing asset

## Sources

- [Church Visuals Canva system](https://churchvisuals.com/article/how-to-build-a-reusable-social-media-template-system-in-canva/)
- [Breeze brand guide for churches](https://www.breezechms.com/blog/how-to-craft-your-churchs-brand-guide)
