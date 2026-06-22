---
id: corporate-marketing.case_study
title: "Customer case study production"
vertical: corporate-marketing
skills_used:
  - corporate-marketing.sales.case_study_production_workflow
  - corporate-marketing.sales.sales_enablement_deck_system
estimated_minutes: 180
primary_platforms: ["Web","LinkedIn","Sales deck"]
---

# Workflow: Customer case study production

Interview → PDF → web page → social cutdown — full customer story pipeline.

## When to use

- New enterprise win to promote
- Sales needs proof for a vertical

## When NOT to use

- Customer has not agreed to public reference

## Primary platforms

Web · LinkedIn · Sales deck

## Steps

### Step 1 — Customer intake

**Type:** `input`

undefined

**Inputs:**
- Customer name (required)
- Industry (required)
- Challenge (before) (required)
- Solution (required)
- Quantified results (required)

### Step 2 — Interview guide

**Type:** `skill`
**Skill:** `corporate-marketing.sales.case_study_production_workflow`

undefined

### Step 3 — PDF one-pager

**Type:** `generate`
**Generate job:** `corporate_hero`

Sales-ready PDF with logo, quote, metrics callout.

### Step 4 — Web case study page

**Type:** `skill`
**Skill:** `corporate-marketing.digital.corporate_website_information_architecture`

undefined

### Step 5 — LinkedIn cutdown

**Type:** `generate`
**Generate job:** `campaign_photo`

undefined

### Step 6 — Add to sales deck

**Type:** `skill`
**Skill:** `corporate-marketing.sales.sales_enablement_deck_system`

undefined

### Step 7 — Customer sign-off

**Type:** `gate`

undefined

**Gate criteria:**
- Customer approved quote
- Legal approved
- Metrics verified


## Outputs

- [ ] PDF
- [ ] Web URL
- [ ] LinkedIn post
- [ ] Sales deck slide

## Related workflows

- `corporate-marketing.sales_enablement_sprint`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/corporate-marketing.case_study/runs`
