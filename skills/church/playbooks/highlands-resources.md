# Playbook: Church of the Highlands

**Lead Pastor:** Mark Pettus · **Founding Pastor:** Chris Hodges · **Church:** [Church of the Highlands](https://www.churchofthehighlands.com/) · **Resources:** [Highlands Resources](https://www.churchofthehighlands.com/resources)

## What this playbook represents

Highlands is the **resource portal + ops documentation + series kit packaging + multi-campus systems** model. They freely export **how they work**, not just what they make — scheduling docs, job descriptions, full series bundles.

**Profile:** [`profiles/church-of-the-highlands.json`](../profiles/church-of-the-highlands.json)

## What they optimize for

1. **Life-giving culture** — warmth, community, authenticity in brand
2. **Mission four-part loop** — Know God · Find Freedom · Discover Purpose · Make a Difference
3. **Leader development** — GROW, ARC, Highlands College (sub-brands)
4. **Generosity of systems** — [Highlands Resources](https://www.churchofthehighlands.com/resources) + Open Network drops
5. **Multi-campus at scale** — 26 campuses across Alabama and Georgia ([PR 2026](https://www.prnewswire.com/news-releases/25-years-and-counting-church-of-the-highlands-marks-a-milestone-of-impact-and-looks-ahead-to-the-future-302675652.html))

## Leadership transition (2025+)

- **Mark Pettus** — Lead Pastor (accelerate mission)
- **Chris Hodges** — Founding Pastor (college, leadership platforms, select messages)
- **Skill implication:** Dual-voice calendar — Hodges legacy content vs Pettus-era campus forward

## Org model (media-relevant)

```
Lead Pastor + Founding Pastor (visible leadership)
    ├── Creative / production (internal team)
    ├── Highlands Resources (external-facing kits)
    ├── Campus pastors (26 locations)
    └── Partner networks: GROW, ARC, Highlands College
```

## Story model — community + mission pillars

| Channel | Balance |
|---------|---------|
| Sermon series | Hodges/Pettus + series art system |
| Social | Scheduling grid; mix message, serve, groups, stories |
| Resources | Other churches consume your kits |
| Campus | Local community, serve, events |

**Profile limit:** `pastor_face_ratio_max_30d: 0.45` — pastor visible but **four mission pillars** must appear in calendar monthly.

## Series kit taxonomy (from Open Network / Highlands drops)

Standard bundle fields (see [God of Miracles example](https://open.life.church/resources/4661-god-of-miracles)):

| Layer | Assets |
|-------|--------|
| Master painting | Flat + layered PSD sources |
| Series production | Multi-angle compositing |
| LED / stage | Giving slides, environmental |
| Web | 1920×1080 exports |
| Message notes | Print/PDF companions |
| Social + video | Openers, trailers |
| Brand guidelines | Per-series PDF |

**Skill:** `church.series.package_open_network_style_kit`

## Social ops

- [Church Social Media Strategy Documents](https://open.life.church/resources/4431-church-social-media-strategy-documents) — Highlands **scheduling document** shared publicly
- **Skill:** `church.social.use_highlands_scheduling_grid`

## Steal / avoid

| Steal | Avoid |
|-------|-------|
| Full series kit zip with naming convention | Single JPEG sermon graphic only |
| Social scheduling spreadsheet as source of truth | Ad-hoc posting |
| Job descriptions for creative roles | Undefined volunteer chaos |
| Free resources as leadership generosity | Hoarding templates |
| Master painting + LED + web export parity | Social-only series launch |

## Related skills

- `church.series.package_open_network_style_kit`
- `church.series.include_master_painting_layer`
- `church.social.use_highlands_scheduling_grid`
- `church.ops.multi_campus_variant_switcher` (26-campus mode)
- `church.content.map_points_to_content_pillars` (four-part mission)

## Sources

- [Highlands Resources](https://www.churchofthehighlands.com/resources)
- [Open Network — social strategy docs](https://open.life.church/resources/4431-church-social-media-strategy-documents)
- [Open Network — God of Miracles kit](https://open.life.church/resources/4661-god-of-miracles)
- [Leadership transition PR](https://www.prnewswire.com/news-releases/church-of-the-highlands-to-grow-impact-with-leadership-transition-302365944.html)
