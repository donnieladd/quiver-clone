---
id: church.story.localize_story_for_campus
tier: production
vertical: church
title: Localize story for campus
inputs: [base_story_or_campaign, campus_slug, church_profile]
outputs: [campus_variant_assets, localized_cta]
related: [church.ops.multi_campus_variant_switcher, church.story.plan_story_content_calendar]
profiles: [church.union-church, church.church-of-the-highlands, church.elevation-church]
---

# Localize story for campus

## Purpose

Multi-campus churches need **local faces and CTAs** on shared campaigns — same brand, local proof.

## Steps

1. Run **`church.ops.multi_campus_variant_switcher`** for logo/address/time.
2. Swap hero photo for campus-specific community shot.
3. CTA: campus URL or register link from profile `campuses[]`.
4. Keep series branding locked; only local layer changes.

## QA

- [ ] Correct service times on graphic
- [ ] Campus name spelled per brand guide
- [ ] Pastor-face ratio still holds at **network** calendar level
