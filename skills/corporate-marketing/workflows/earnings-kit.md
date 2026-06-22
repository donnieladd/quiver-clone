---
id: corporate-marketing.earnings_kit
title: "Quarterly earnings visual kit"
vertical: corporate-marketing
skills_used:
  - corporate-marketing.content.design_earnings_visual_summary
  - corporate-marketing.pr.press_release_visual_companion
estimated_minutes: 90
primary_platforms: ["LinkedIn","Investor email","Press"]
---

# Workflow: Quarterly earnings visual kit

Results one-pager, social graphics, and investor email header for earnings week.

## When to use

- Public or private quarterly results announcement

## When NOT to use

- Ad-hoc product news

## Primary platforms

LinkedIn · Investor email · Press

## Steps

### Step 1 — Key metrics lock

**Type:** `input`

undefined

**Inputs:**
- Headline metric (required)
- 3 supporting stats (required)

### Step 2 — Visual one-pager

**Type:** `skill`
**Skill:** `corporate-marketing.content.design_earnings_visual_summary`

undefined

### Step 3 — Social graphics

**Type:** `generate`
**Generate job:** `corporate_hero`

undefined

### Step 4 — Press companion

**Type:** `skill`
**Skill:** `corporate-marketing.pr.press_release_visual_companion`

undefined

### Step 5 — IR + legal approval

**Type:** `gate`

undefined

**Gate criteria:**
- IR approved numbers
- Legal cleared forward-looking statements


## Outputs

- [ ] One-pager PDF
- [ ] LinkedIn carousel
- [ ] Email header
- [ ] Press kit

## Related workflows



## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/corporate-marketing.earnings_kit/runs`
