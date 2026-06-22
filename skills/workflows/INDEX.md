# Workflow Index

**28 executable workflows** — start at [`/app/workflows`](../../app/app/workflows/page.tsx) or the API.

| Vertical | Workflow | Minutes |
|----------|----------|---------|
| marketing-stack | [End-to-end campaign orchestration](../marketing-stack/workflows/campaign-orchestration.md) | ~45 |
| marketing-stack | [AI + human QA pipeline](../marketing-stack/workflows/qa-pipeline.md) | ~15 |
| corporate-marketing | [Executive thought leadership program](../corporate-marketing/workflows/thought-leadership.md) | ~120 |
| corporate-marketing | [Customer case study production](../corporate-marketing/workflows/case-study-production.md) | ~180 |
| corporate-marketing | [Sales enablement sprint](../corporate-marketing/workflows/sales-enablement-sprint.md) | ~240 |
| corporate-marketing | [Quarterly earnings visual kit](../corporate-marketing/workflows/earnings-kit.md) | ~90 |
| product-marketing | [Tier 1 product launch (GTM)](../product-marketing/workflows/tier1-launch.md) | ~480 |
| product-marketing | [Tier 2 feature launch](../product-marketing/workflows/tier2-launch.md) | ~120 |
| product-marketing | [Positioning from PRD](../product-marketing/workflows/positioning-from-prd.md) | ~90 |
| fashion-luxury | [Capsule drop hype sequence](../fashion-luxury/workflows/capsule-drop.md) | ~360 |
| fashion-luxury | [Season lookbook production](../fashion-luxury/workflows/lookbook-season.md) | ~720 |
| fashion-luxury | [Collaboration announcement](../fashion-luxury/workflows/collab-announcement.md) | ~180 |
| editorial-marketing | [SEO pillar page production](../editorial-marketing/workflows/pillar-page-production.md) | ~240 |
| editorial-marketing | [Content cluster sprint (4 weeks)](../editorial-marketing/workflows/content-cluster-sprint.md) | ~960 |
| editorial-marketing | [Newsletter edition production](../editorial-marketing/workflows/newsletter-edition.md) | ~90 |
| editorial-marketing | [Article → social teaser ladder](../editorial-marketing/workflows/article-social-ladder.md) | ~60 |
| product-brand | [DTC product launch](../product-brand/workflows/dtc-launch.md) | ~360 |
| personal-brand | [30-day personal brand launch](../personal-brand/workflows/thirty-day-launch.md) | ~480 |
| personal-os | [Weekly personal alignment](../personal-os/workflows/weekly-alignment.md) | ~15 |
| personal-os | [Life project charter](../personal-os/workflows/life-project-charter.md) | ~45 |
| personal-os | [Personal after action review](../personal-os/workflows/personal-aar.md) | ~20 |
| personal-os | [Personal creative brief](../personal-os/workflows/personal-creative-brief.md) | ~20 |
| creator | [Creator weekly production](../creator/workflows/weekly-production.md) | ~480 |
| church | [Sermon → social content](../church/workflows/sermon-to-social.md) | ~180 |
| church | [Weekly service kit](../church/workflows/weekly-service-kit.md) | ~240 |
| church | [Creative brief → production](../church/workflows/creative-brief-to-production.md) | ~45 |
| church | [Big day project charter](../church/workflows/big-day-charter.md) | ~120 |
| church | [After action report (post-event)](../church/workflows/post-event-aar.md) | ~60 |

## How to run

1. **UI:** Open `/app/workflows` → pick vertical → start → follow steps
2. **API:** `POST /v1/workflows/{id}/runs` then `PATCH /v1/workflows/runs/{runId}`
3. **Agent:** `platform.brand_studio.execute_workflow`

Master map: [MARKETING_OS.md](../MARKETING_OS.md)
