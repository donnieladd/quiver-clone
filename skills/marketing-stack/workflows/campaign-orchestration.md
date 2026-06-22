---
id: marketing-stack.campaign_orchestration
title: "End-to-end campaign orchestration"
vertical: marketing-stack
skills_used:
  - marketing-stack.platform.select_platform_for_objective
  - marketing-stack.ai.route_tool_for_job
  - marketing-stack.workflow.ai_human_qa_gates
  - platform.brand_studio.run_qa_pipeline
estimated_minutes: 45
primary_platforms: ["Varies by objective"]
---

# Workflow: End-to-end campaign orchestration

Brief → platform pick → AI tool pick → create → QA → publish. The master workflow for any campaign.

## When to use

- Starting any new campaign and you need the full path
- Onboarding a new client or vertical
- You feel overwhelmed by tool choice

## When NOT to use

- Single asset tweak (use Media Studio directly)
- Vertical-specific launch already has a dedicated workflow

## Primary platforms

Varies by objective

## Steps

### Step 1 — Campaign brief

**Type:** `input`

Capture objective, audience, timeline, and success metric in one place.

**Inputs:**
- Campaign objective (required)
- Primary audience (required)
- Publish deadline (required)
- How we measure success (required)

### Step 2 — Load brand tokens

**Type:** `skill`
**Skill:** `brand-system.tokens.define_design_tokens`

Attach client token JSON and verify logo matrix exists.

### Step 3 — Select platform

**Type:** `route`
**Skill:** `marketing-stack.platform.select_platform_for_objective`

Pick primary channel — do not co-primary two channels.

### Step 4 — Route AI tools

**Type:** `skill`
**Skill:** `marketing-stack.ai.route_tool_for_job`

Map each asset job to the right generator — no manual tool shopping.

### Step 5 — Produce assets

**Type:** `generate`
**Generate job:** `campaign_photo`

Generate visuals via Media Studio using routed models.

### Step 6 — QA gates

**Type:** `gate`
**Skill:** `marketing-stack.workflow.ai_human_qa_gates`

Token lint + vertical-specific human gates before publish.

**Gate criteria:**
- Token lint passed
- No uncanny AI faces in hero (corporate/luxury)
- Copy claims have citations (editorial)
- Approver signed off

### Step 7 — Publish & archive

**Type:** `checklist`

Schedule to primary platform and archive deliverable bundle.

**Checklist:**
- [ ] Scheduled on primary platform
- [ ] UTM / tracking links set
- [ ] DAM folder created
- [ ] Deliverable manifest exported


## Outputs

- [ ] Campaign brief saved
- [ ] Platform decision documented
- [ ] Assets generated and QA-approved
- [ ] Published or scheduled
- [ ] Archive bundle in DAM

## Related workflows

- `corporate-marketing.thought_leadership`
- `product-marketing.tier1_launch`
- `fashion-luxury.capsule_drop`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/marketing-stack.campaign_orchestration/runs`
