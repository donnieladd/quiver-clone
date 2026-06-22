---
id: corporate-marketing.sales_enablement_sprint
title: "Sales enablement sprint"
vertical: corporate-marketing
skills_used:
  - corporate-marketing.sales.sales_enablement_deck_system
  - product-marketing.strategy.competitive_battlecard_system
estimated_minutes: 240
primary_platforms: ["Sales deck","CRM attachments","Internal wiki"]
---

# Workflow: Sales enablement sprint

One week to refresh battlecards, deck modules, and objection one-pagers for a segment.

## When to use

- New vertical push
- Competitive landscape shifted

## When NOT to use

- Full rebrand in progress

## Primary platforms

Sales deck · CRM attachments · Internal wiki

## Steps

### Step 1 — Define segment

**Type:** `input`

undefined

**Inputs:**
- Target segment (required)
- Top 3 competitors (required)

### Step 2 — Battlecards

**Type:** `skill`
**Skill:** `product-marketing.strategy.competitive_battlecard_system`

undefined

### Step 3 — Modular deck slides

**Type:** `skill`
**Skill:** `corporate-marketing.sales.sales_enablement_deck_system`

undefined

### Step 4 — Objection one-pagers

**Type:** `skill`
**Skill:** `product-marketing.enablement.objection_handling_one_pagers`

undefined

### Step 5 — Sales leadership review

**Type:** `gate`

undefined

**Gate criteria:**
- AE feedback incorporated
- PMM + sales aligned


## Outputs

- [ ] Battlecards
- [ ] Deck module pack
- [ ] 3 objection one-pagers

## Related workflows

- `product-marketing.tier1_launch`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/corporate-marketing.sales_enablement_sprint/runs`
