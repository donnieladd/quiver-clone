---
id: product-brand.dtc_launch
title: "DTC product launch"
vertical: product-brand
skills_used:
  - product-brand.strategy.define_product_positioning
  - product-brand.photo.write_product_photography_brief
  - product-brand.launch.plan_product_launch_teaser
estimated_minutes: 360
primary_platforms: ["Shopify","Meta","Amazon A+","Product Hunt"]
---

# Workflow: DTC product launch

Positioning → tokens → product photo → teaser → launch → Amazon/Shopify assets.

## When to use

- New SKU or product line
- DTC-first brand

## When NOT to use

- B2B SaaS (use PMM tier 1)

## Primary platforms

Shopify · Meta · Amazon A+ · Product Hunt

## Steps

### Step 1 — Product positioning

**Type:** `skill`
**Skill:** `product-brand.strategy.define_product_positioning`

undefined

### Step 2 — Product brand tokens

**Type:** `skill`
**Skill:** `product-brand.identity.define_product_brand_tokens`

undefined

### Step 3 — Photography brief

**Type:** `skill`
**Skill:** `product-brand.photo.write_product_photography_brief`

undefined

### Step 4 — Product hero shot

**Type:** `generate`
**Generate job:** `product_photo`

undefined

### Step 5 — Launch teaser plan

**Type:** `skill`
**Skill:** `product-brand.launch.plan_product_launch_teaser`

undefined

### Step 6 — Commerce channels

**Type:** `route`

undefined

### Step 7 — Launch QA

**Type:** `gate`

undefined

**Gate criteria:**
- PDP copy approved
- Pack shots consistent
- UGC rights if used


## Outputs

- [ ] Shopify live
- [ ] Meta ads assets
- [ ] Amazon A+ if applicable

## Related workflows

- `product-marketing.tier1_launch`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/product-brand.dtc_launch/runs`
