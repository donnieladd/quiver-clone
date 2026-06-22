# Marketing OS — The Full Map

You described a **top-to-bottom marketing system** with AI wired in. This is that map — you do not need to hold it in your head.

## Who is this for?

| If you are… | Start pack | Primary platforms | Primary AI |
|-------------|------------|-------------------|------------|
| **Corporate / B2B** | `corporate-marketing/` | LinkedIn, email, events, PR | Copy AI + Higgsfield for visuals |
| **Product marketer (PMM)** | `product-marketing/` | Web, sales deck, launch email | PRD → AI draft + human QA |
| **DTC / product brand** | `product-brand/` | Shopify, Amazon, PH | Marketing Studio, product photo AI |
| **Luxury / fashion** | `fashion-luxury/` | IG, TikTok, Pinterest, journal | Moodboard AI + human shoot |
| **Editorial / SEO content** | `editorial-marketing/` | Blog, newsletter, podcast | Research AI + fact-check gate |
| **Creator / personal** | `creator/`, `personal-brand/` | YouTube, TikTok, LinkedIn | Clip + B-roll + voice AI |
| **Church / mission** | `church/` | YouTube, IG, web | Story + Open Network kits |

## The stack (always)

```
1. brand-system/          ← tokens, logos (every vertical)
2. marketing-stack/       ← which platform + which AI tool
3. [vertical pack]        ← corporate | pmm | fashion | editorial | …
4. media/                 ← execute generation (/v1/media)
5. brand-system.qa        ← lint before publish
```

## AI integration (not one tool — a router)

Skill: `marketing-stack.ai.route_tool_for_job`

| Job | Default tool | API in this repo |
|-----|--------------|------------------|
| Logo, icon, vector | Quiver SVG | `/v1/svgs/generations` |
| Photo, campaign image | Higgsfield Seedream / FLUX | `/v1/media/generations` |
| Product video, motion | Higgsfield Kling / Veo / DoP | `/v1/media/generations` |
| Talking head | HeyGen (skill) | add provider |
| Voiceover | ElevenLabs (skill) | add provider |
| Long copy, positioning | Claude / GPT | external |
| Research, SERP | Perplexity | skill |
| Layout, UI | Figma + tokens | export skills |

## ADHD-friendly workflow

**One campaign = one folder in Brand Studio (future):**

```
project/
  brief.md
  tokens → brand-system
  platform → marketing-stack decision (done for you)
  assets/  → generated + approved
```

**Do not choose 50 tools.** Run `marketing-stack.ai.route_tool_for_job` — it picks.

## Vertical skill counts

See `manifest.json` after `npm run skills:update-registry`.

## Your vision (reflected back)

Traditional business marketing ✓ `corporate-marketing/`  
Product marketing (PMM) ✓ `product-marketing/`  
High-end fashion ✓ `fashion-luxury/`  
Editorial + big SEO/content ✓ `editorial-marketing/`  
AI + which platforms ✓ `marketing-stack/`  
Personal + creator + church ✓ already built  

All routes through **Brand Studio** + **Media Studio** (`/app/studio`) + **Workflows** (`/app/workflows`).

## Workflows (executable)

**21 step-by-step workflows** — not capability lists. Open `/app/workflows` or see `workflows/INDEX.md`.

| You want to… | Workflow |
|--------------|----------|
| Run any campaign top-to-bottom | `marketing-stack.campaign_orchestration` |
| Tier 1 SaaS launch | `product-marketing.tier1_launch` |
| Luxury capsule drop | `fashion-luxury.capsule_drop` |
| SEO pillar page | `editorial-marketing.pillar_page` |
| Executive LinkedIn program | `corporate-marketing.thought_leadership` |
| Sermon → social batch | `church.sermon_to_social` |
| Creator weekly batch | `creator.weekly_production` |
