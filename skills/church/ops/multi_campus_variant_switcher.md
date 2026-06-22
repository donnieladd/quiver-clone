---
id: church.ops.multi_campus_variant_switcher
tier: ops
vertical: church
title: Multi-campus variant switcher
inputs: [church_profile, base_template, target_campus_id]
outputs: [campus_specific_asset, campus_metadata_verified]
related: [church.slides.campus_specific_announcement_variant, church.qa.spellcheck_and_names]
profiles: [church.union-church]
---

# Multi-campus variant switcher

## Purpose

Produce **campus-correct** assets for Union Church (MD, VA, NC) without forking the entire brand system.

## Campuses (from profile)

| ID | Location |
|----|----------|
| `glen-burnie-md` | Glen Burnie, MD (primary) |
| `virginia` | Virginia |
| `north-carolina` | North Carolina |

## Steps

1. Load `profiles/union-church.json` → `campuses[]`.
2. Duplicate base template → **`church.ops.duplicate_template_not_redesign`**.
3. Swap: campus name, service times, address, register URL, campus pastor quote (if approved).
4. Run **`church.qa.spellcheck_and_names`** on campus staff names.
5. Route approval: `asset_type: campus_specific` → Campus Pastor → Central Comms.

## When NOT to use

- Church-wide series art (use central kit)
- Union Sound releases (worship lane)

## QA checks

- [ ] Correct campus ID in DAM filename
- [ ] No other campus times/addresses visible
