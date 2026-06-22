---
id: product-marketing.tier2_launch
title: "Tier 2 feature launch"
vertical: product-marketing
skills_used:
  - product-marketing.launch.gtm_launch_tier_selection
  - product-marketing.content.changelog_to_marketing_repurpose
  - product-marketing.content.feature_adoption_campaign
estimated_minutes: 120
primary_platforms: ["Blog","Email","In-app"]
---

# Workflow: Tier 2 feature launch

Lighter launch: changelog → blog → email → in-app — no full analyst kit.

## When to use

- Significant feature
- Existing product expansion

## When NOT to use

- Tier 1 new product
- Patch notes only

## Primary platforms

Blog · Email · In-app

## Steps

### Step 1 — Tier 2 scope

**Type:** `skill`
**Skill:** `product-marketing.launch.gtm_launch_tier_selection`

undefined

### Step 2 — Changelog intake

**Type:** `input`

undefined

**Inputs:**
- Feature name (required)
- Changelog text (required)
- User benefit (one line) (required)

### Step 3 — Changelog → marketing

**Type:** `skill`
**Skill:** `product-marketing.content.changelog_to_marketing_repurpose`

undefined

### Step 4 — Feature graphic

**Type:** `generate`
**Generate job:** `product_photo`

undefined

### Step 5 — Adoption campaign

**Type:** `skill`
**Skill:** `product-marketing.content.feature_adoption_campaign`

undefined

### Step 6 — PM review

**Type:** `gate`

undefined

**Gate criteria:**
- Product verified accuracy
- Support briefed


## Outputs

- [ ] Blog post
- [ ] Email
- [ ] In-app announcement
- [ ] Help docs link

## Related workflows

- `product-marketing.tier1_launch`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/product-marketing.tier2_launch/runs`
