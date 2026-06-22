---
id: editorial-marketing.pillar_page
title: "SEO pillar page production"
vertical: editorial-marketing
skills_used:
  - editorial-marketing.seo.topic_cluster_and_pillar_page_plan
  - editorial-marketing.seo.search_intent_content_brief
  - editorial-marketing.ai.ai_fact_check_and_citation_gate
estimated_minutes: 240
primary_platforms: ["Blog","Newsletter","LinkedIn"]
---

# Workflow: SEO pillar page production

Keyword research → brief → long-form → visuals → publish with fact-check gate.

## When to use

- Building topic cluster hub
- Targeting high-intent keyword

## When NOT to use

- News reaction (use newsletter workflow)
- Thin programmatic pages

## Primary platforms

Blog · Newsletter · LinkedIn

## Steps

### Step 1 — Target keyword

**Type:** `input`

undefined

**Inputs:**
- Primary keyword (required)
- Search intent (required)
- Spoke topics (5-10) (required)

### Step 2 — Cluster architecture

**Type:** `skill`
**Skill:** `editorial-marketing.seo.topic_cluster_and_pillar_page_plan`

undefined

### Step 3 — SERP-informed brief

**Type:** `skill`
**Skill:** `editorial-marketing.seo.search_intent_content_brief`

undefined

### Step 4 — AI outline from research

**Type:** `skill`
**Skill:** `editorial-marketing.ai.ai_outline_from_keyword_research`

undefined

### Step 5 — Long-form structure

**Type:** `skill`
**Skill:** `editorial-marketing.writing.long_form_article_structure`

undefined

### Step 6 — Editorial hero

**Type:** `generate`
**Generate job:** `editorial_hero`

undefined

### Step 7 — Fact-check gate

**Type:** `gate`
**Skill:** `editorial-marketing.ai.ai_fact_check_and_citation_gate`

undefined

**Gate criteria:**
- Every stat has source
- No unsourced claims
- Editor review

### Step 8 — Publish checklist

**Type:** `checklist`

undefined

**Checklist:**
- [ ] Internal links to spokes
- [ ] Meta title/desc
- [ ] Schema markup
- [ ] Newsletter teaser scheduled


## Outputs

- [ ] Pillar page live
- [ ] Cluster map updated
- [ ] 5+ internal links planned

## Related workflows

- `editorial-marketing.content_cluster`
- `editorial-marketing.article_social_ladder`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/editorial-marketing.pillar_page/runs`
