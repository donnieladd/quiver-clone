---
id: platform.brand_studio.execute_workflow
tier: production
vertical: platform
title: "Execute workflow"
inputs:
  - workflow_id
  - optional context
outputs:
  - workflow_run
  - deliverable_checklist
related:
  - platform.brand_studio.resolve_skill_chain
  - platform.brand_studio.run_qa_pipeline
---

# Execute workflow

## Purpose

Run a **real workflow** — not a skill list. Workflows are step-by-step state machines with inputs, AI generation, gates, and checklists.

## When to use

User says: "launch a product", "run a fashion drop", "sermon to social", "pillar page", etc.

## Steps

1. **List workflows** — `GET /v1/workflows?vertical={pack}` or read `skills/workflows/INDEX.md`
2. **Load definition** — `GET /v1/workflows/{id}` (includes platform + tool routes per step)
3. **Start run** — `POST /v1/workflows/{id}/runs` with optional `{ context: { ... } }`
4. **For each step:**
   - `input` → collect fields, `PATCH` run with `{ payload: { key: value } }`
   - `route` → show platform matrix; user confirms; advance
   - `skill` → execute skill doc at `skillId`; advance when done
   - `generate` → `PATCH` with `{ action: "generate_and_advance", prompt: "..." }` (calls `/v1/media/generations`)
   - `gate` → human approval; `PATCH` with `{ notes: "approved by ..." }`
   - `checklist` → verify items; advance
5. **Complete** — run status `completed`; export `outputChecklist`
6. **QA** — `platform.brand_studio.run_qa_pipeline` before external publish

## UI

Brand Studio: `/app/workflows`

## Do not

- Skip gates for editorial fact-check or fashion AI policy
- Pick tools manually when step type is `generate` — router already chose model
