---
id: product-marketing.tier1_launch
title: "Tier 1 product launch (GTM)"
vertical: product-marketing
skills_used:
  - product-marketing.launch.gtm_launch_tier_selection
  - product-marketing.strategy.write_positioning_and_messaging_doc
  - product-marketing.launch.launch_narrative_and_hook
  - product-marketing.launch.sales_launch_kit
estimated_minutes: 480
primary_platforms: ["Web","Product Hunt","Email","Sales"]
---

# Workflow: Tier 1 product launch (GTM)

Full launch: positioning, narrative, sales kit, web, email, demo video, analyst kit.

## When to use

- New product or major version
- Company priority launch

## When NOT to use

- Minor feature — use tier 2
- Internal-only release

## Primary platforms

Web · Product Hunt · Email · Sales

## Steps

### Step 1 — Confirm Tier 1 scope

**Type:** `skill`
**Skill:** `product-marketing.launch.gtm_launch_tier_selection`

Tier 1 = positioning + full asset suite + analyst/press.

### Step 2 — PRD intake

**Type:** `input`

undefined

**Inputs:**
- Product name (required)
- Launch date (required)
- PRD summary (required)
- Key differentiation (required)

### Step 3 — Positioning & messaging doc

**Type:** `skill`
**Skill:** `product-marketing.strategy.write_positioning_and_messaging_doc`

undefined

### Step 4 — AI draft from PRD

**Type:** `skill`
**Skill:** `product-marketing.ai.ai_generate_pmm_draft_from_prd`

Human edit gate required — never publish raw AI copy.

### Step 5 — Launch narrative & hook

**Type:** `skill`
**Skill:** `product-marketing.launch.launch_narrative_and_hook`

undefined

### Step 6 — Launch channels

**Type:** `route`

undefined

### Step 7 — Launch hero visual

**Type:** `generate`
**Generate job:** `product_photo`

undefined

### Step 8 — Demo storyboard

**Type:** `skill`
**Skill:** `product-marketing.content.product_demo_storyboard`

undefined

### Step 9 — Sales launch kit

**Type:** `skill`
**Skill:** `product-marketing.launch.sales_launch_kit`

undefined

### Step 10 — Customer email sequence

**Type:** `skill`
**Skill:** `product-marketing.launch.customer_announcement_email_sequence`

undefined

### Step 11 — Analyst & press kit

**Type:** `skill`
**Skill:** `product-marketing.launch.analyst_and_press_briefing_kit`

undefined

### Step 12 — Launch readiness review

**Type:** `gate`

undefined

**Gate criteria:**
- PMM + product + sales sign-off
- No synthetic testimonials
- Demo tested
- Tracking live


## Outputs

- [ ] Positioning doc
- [ ] Landing page live
- [ ] Sales kit
- [ ] Email sequence scheduled
- [ ] Launch metrics dashboard

## Related workflows

- `product-marketing.tier2_launch`
- `product-marketing.positioning_from_prd`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/product-marketing.tier1_launch/runs`
