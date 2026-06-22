---
id: product-marketing.positioning_from_prd
title: "Positioning from PRD"
vertical: product-marketing
skills_used:
  - product-marketing.ai.ai_generate_pmm_draft_from_prd
  - product-marketing.strategy.write_positioning_and_messaging_doc
  - product-marketing.strategy.build_buyer_persona_research_synthesis
estimated_minutes: 90
primary_platforms: ["Internal"]
---

# Workflow: Positioning from PRD

PRD → positioning doc → messaging pillars in one working session.

## When to use

- Pre-launch positioning workshop
- Repositioning after win/loss

## When NOT to use

- Launch assets due tomorrow — use tier workflow

## Primary platforms

Internal

## Steps

### Step 1 — PRD upload

**Type:** `input`

undefined

**Inputs:**
- PRD or spec (required)

### Step 2 — Buyer personas

**Type:** `skill`
**Skill:** `product-marketing.strategy.build_buyer_persona_research_synthesis`

undefined

### Step 3 — AI positioning draft

**Type:** `skill`
**Skill:** `product-marketing.ai.ai_generate_pmm_draft_from_prd`

undefined

### Step 4 — Human positioning workshop

**Type:** `gate`

undefined

**Gate criteria:**
- Category defined
- 3 pillars locked
- Proof points assigned

### Step 5 — Final positioning doc

**Type:** `skill`
**Skill:** `product-marketing.strategy.write_positioning_and_messaging_doc`

undefined


## Outputs

- [ ] Positioning & messaging doc v1

## Related workflows

- `product-marketing.tier1_launch`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/product-marketing.positioning_from_prd/runs`
