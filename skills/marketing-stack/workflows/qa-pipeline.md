---
id: marketing-stack.qa_pipeline
title: "AI + human QA pipeline"
vertical: marketing-stack
skills_used:
  - marketing-stack.workflow.ai_human_qa_gates
  - brand-system.qa.run_token_lint_on_asset
  - platform.brand_studio.approval_workflow_state
estimated_minutes: 15
primary_platforms: ["All"]
---

# Workflow: AI + human QA pipeline

Mandatory checkpoints before any asset goes live — by asset type.

## When to use

- Before publishing any AI-assisted asset
- Setting up approval chain for a client

## When NOT to use

- Internal draft-only exploration

## Primary platforms

All

## Steps

### Step 1 — Classify asset type

**Type:** `input`

Hero image, copy, video, logo, or editorial — each has different gates.

**Inputs:**
- Asset type (required)
- Vertical pack (required)

### Step 2 — Token lint

**Type:** `skill`
**Skill:** `brand-system.qa.run_token_lint_on_asset`

Run brand-system lint on colors, type, logo usage.

### Step 3 — Vertical QA gate

**Type:** `gate`

Fashion: no AI on-model hero. Editorial: citation check. Corporate: exec voice.

**Gate criteria:**
- Vertical-specific rules passed
- Legal/compliance if required

### Step 4 — Approval state

**Type:** `skill`
**Skill:** `platform.brand_studio.approval_workflow_state`

Move asset draft → review → approved.


## Outputs

- [ ] Asset approved and ready to publish

## Related workflows

- `marketing-stack.campaign_orchestration`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/marketing-stack.qa_pipeline/runs`
