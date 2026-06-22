# Modern Church Media OS — Vision

**Author context:** Donnie Ladd · Visual lens: future-forward, iconic, premium (Apple / Pharrell / Site Inspire — not template builders)  
**Product shell:** WorkbyForm — unified creative + ministry workspace  
**Engine:** Skills + workflows + API-first media (Quiver SVG, image/video APIs, context integrations)

---

## The shift you're designing for

| Old church media model | Modern community model (your target) |
|------------------------|--------------------------------------|
| Events on flyers | **Story** — who we are, what we care about |
| Lead pastor is the brand | **Pastor inside the community** — faces, teams, neighborhoods |
| Sunday-centric assets | **Always-on narrative** — midweek, groups, serve, worship, stories |
| Canva duplicates | **System + iconic campaigns** that age slowly |
| Siloed tools (Canva, PP, CapCut, Monday…) | **One workspace** with skills, IDE, generators, integrations |

Faith Chapel ([brand hub](https://www.faithchapel.net/brand), [@faithchapelbham](https://instagram.com/faithchapelbham)) is the baseline you already built: formal brand system, education sessions, no clipart, high-quality photography, **Share Your Story** on-site — community voice, not just pulpit.

Your next level: **Transformation Church cinematic boldness** + **Elevation resource scale** + **Highlands playbook generosity** + **Union/BLDRS systems thinking** — through a **Site Inspire–grade web layer** and an **agent-native IDE**.

---

## Reference playbooks (what to steal)

See `playbooks/INDEX.md` for skill mappings. Summary:

### Faith Chapel — *Brand institution + community campus*
- Public brand book, quick reference, staff education MP3s
- "We're more than a church — we're a movement"
- The Bridge as **community hub** (not just auditorium)
- **Steal:** governance, brand education, story submission (`/stories`), anti-clipart standards

### Transformation Church — *Cinematic culture + pastor-as-human*
- Global content hub; excellence as worship ([OneDiversified case study](https://onediversified.com/transformation-church))
- Phone-native social for relatability; pro production for stage ([Pro Church Tools](https://prochurchtools.com/blog-post/how-pastor-mike-todd-dominates-social-media))
- Memorable language ("RE-present") filters every post
- **Steal:** picture-over-words doctrine, series as IP, clip-first sermon design

### Elevation Church — *Scale + resource export*
- Creative apprenticeship pipeline ([Built In Charlotte listing](https://builtincharlotte.com/job/elevation-church-creative-ministry-apprenticeship-spring-2026/7037397))
- Open Network: series kits (PSD, AI, MP4) ([Life.Church partner page](https://open.life.church/partners/elevation-church))
- eFam / Watch Party / Pop-Up — **distributed church experiences**
- **Steal:** kit packaging, multi-format drops, leadership clip strategy (Steven Furtick Ministries)

### Church of the Highlands — *Resource portal + ops docs*
- [Highlands Resources](https://www.churchofthehighlands.com/resources) — free kits, job descriptions, training
- Social scheduling doc shared via Open Network ([resource 4431](https://open.life.church/resources/4431-church-social-media-strategy-documents))
- Series bundles: master painting, LED, web 1920, message notes ([God of Miracles example](https://open.life.church/resources/4661-god-of-miracles))
- **Steal:** scheduling spreadsheet as skill input, series asset taxonomy, leader development content

### Union Church + The Builders Network — *Systems + worship brand*
- Pastor: Stephen Chandler · [The Builders Network](https://www.thebuildersnetwork.org/) — growth systems for leaders
- [Union Sound](https://theunionchurch.com/unionsound/) — worship as movement with its own channel
- Creative/video production team (not solo pastor editor)
- Accessible church for people **not yet in relationship with God** ([about](https://theunionchurch.com/about/))
- **Steal:** multi-location ops, worship sub-brand, BLDRS Conf creative tracks, people development over hero pastor

---

## Site Inspire web lens

[Site Inspire](https://www.siteinspire.com) tags what you actually want:

- **Typographic** · **Minimal** · **Unusual layout** · **Animation** · **Grid-breaking**
- Agency-grade craft — not Webflow-theme-default

### Web skills this implies (new domain: `skills/church/web-premium/`)

1. **Hero as editorial** — one statement, asymmetric type, not three-button SaaS hero
2. **Motion with restraint** — scroll-linked, not gratuitous (457 "Use of Animation" sites as ref library)
3. **Typography as identity** — display + grotesk pairing, not Inter + purple gradient
4. **Story pages** — `/stories`, `/people`, long-form community narrative
5. **No template smell** — custom grid, intentional whitespace, art-directed photography
6. **Performance parity** — premium ≠ slow; static where possible, lazy motion

Faith Chapel's site is clean/ministry-standard. Your bar is **Site Inspire + church story** — e.g. community as editorial magazine, series as fashion drop.

---

## WorkbyForm platform architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│  WORKBYFORM SHELL (what you own)                                         │
│  ┌─────────────┐ ┌──────────────┐ ┌─────────────┐ ┌─────────────────┐ │
│  │ Agent +     │ │ File tree +  │ │ Skills /    │ │ Client + project│ │
│  │ chat panel  │ │ Monaco IDE   │ │ workflows   │ │ (church profile)│ │
│  └──────┬──────┘ └──────┬───────┘ └──────┬──────┘ └────────┬────────┘ │
│         └────────────────┴────────────────┴─────────────────┘          │
│                                    │                                     │
│  ┌─────────────────────────────────▼─────────────────────────────────┐ │
│  │ CONTEXT LAYER (Gemini wins here when connected)                      │ │
│  │ Google Drive · Gmail · Calendar · Notebook LM · Microsoft 365 ·     │ │
│  │ Monday.com · Planning Center · CCLI · church DAM                     │ │
│  └─────────────────────────────────┬─────────────────────────────────┘ │
│                                    │                                     │
│  ┌─────────────────────────────────▼─────────────────────────────────┐ │
│  │ MEDIA ENGINE (API-first — pay usage, not 12 subscriptions)         │ │
│  │ Quiver/Arrow SVG · Flux/DALL·E · Kling video · HeyGen avatar ·    │ │
│  │ ElevenLabs · Perplexity research · remove.bg · upscale              │ │
│  └─────────────────────────────────┬─────────────────────────────────┘ │
│                                    │                                     │
│  ┌─────────────────────────────────▼─────────────────────────────────┐ │
│  │ OUTPUT + QA                                                        │ │
│  │ Templates · export specs · brand lint · pixel diff · schedule        │ │
│  └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Don't "clone Cursor" — compose it

| Approach | Reality |
|----------|---------|
| Full Cursor clone | Years of IDE R&D; LSP, extensions, multi-model agent loop |
| **Pragmatic WorkbyForm** | **Monaco** + file API + **your agent** + **skills FS** + terminal (xterm) |
| Hybrid | Keep Cursor for dev; WorkbyForm owns **church creative context** + integrations Cursor won't build |
| Antigravity lesson | Brand + integration UX matters as much as model quality |

**Recommendation:** WorkbyForm = **domain IDE** (creative ops), not generic code IDE. Embed Monaco for JSON/skills/templates/SVG/CSS; link out to Cursor for app engineering.

### API-first media (subscription arbitrage)

| Tool | API path | WorkbyForm role |
|------|----------|-----------------|
| Quiver / Arrow | ✅ `/v1/svgs/*` in this repo | Vector, icons, series marks |
| Higgsfield | ✅ (you have keys) | Unified image gen router |
| OpenAI / Google | ✅ Images + Gemini | Default gen + **context** via OAuth |
| HeyGen | ✅ API | Avatar / sermon recap video |
| Kling / Runway | ✅ API | Motion, reels |
| Perplexity | ✅ API | Research, trend scan, sermon context |
| Midjourney | ❌ no official API | Optional Discord bridge or skip |
| Figma | ✅ API | Design sync, not generation |

**Pattern:** One `MediaRouter` — skills call `generate({ intent, skill_id, client_id })`, router picks provider by spec + cost.

### Context beats standalone API (your Gemini insight)

Gemini inside Google workspace = sermon doc + brand folder + email thread + calendar series launch **in one thread**. WorkbyForm should:

1. **Church profile** JSON (brand, voices, approvers, templates)
2. **OAuth connectors** (Google, Microsoft, Monday)
3. **Project memory** per series/week (not stateless chat)
4. Skills read **live context** before generating

That's the moat — not another image button.

---

## Expanded skill system (next tranches)

Current pack: **236 execution skills** (how to make assets).

Add **4 new layers**:

### 1. `playbooks/` — WHO to emulate (research-backed)
- `faith-chapel.md`, `transformation-church.md`, `elevation.md`, `highlands.md`, `union-bldrs.md`
- Each: story model, org chart, asset cadence, social tone, web bar, steal / avoid

### 2. `story/` — Community narrative (your core insight)
- `story.collect_member_testimony`
- `story.edit_story_for_web_feature`
- `story.balance_pastor_vs_congregation_faces` ← **critical for you**
- `story.build_community_campaign_not_event`
- `story.map_values_to_content_pillars`

### 3. `web-premium/` — Site Inspire tier
- `web.typographic_hero_editorial`
- `web.unusual_layout_story_page`
- `web.motion_scroll_restrained`
- `web.series_drop_landing` (hype-page pattern)
- `web.avoid_template_builder_smell`

### 4. `platform/` — WorkbyForm ops
- `platform.connect_google_workspace`
- `platform.route_media_to_cheapest_api`
- `platform.sync_monday_content_calendar`
- `platform.agent_run_skill_chain`

---

## Union Church fit (your client context)

Apply **community-first** + **Union Sound sub-brand** + **BLDRS systems**:

| Union principle | WorkbyForm expression |
|-----------------|----------------------|
| Accessible to seekers | Social/skills default to invitation not insider language |
| Union Sound as movement | Worship assets = separate template family in DAM |
| Multi-campus MD/VA/NC | Campus variants in ops skills, not one-off edits |
| Chandler systems coaching | Workflows = exportable playbooks for other BLDRS churches |
| Production team | Roles in approval chain — not everything to senior pastor |

---

## Phased build (honest)

| Phase | Deliverable | Uses quiver-clone? |
|-------|-------------|-------------------|
| **1** (done) | Church skills + workflows + registry | ✅ |
| **2** | Playbooks + story skills + church profile schema | ✅ skills FS |
| **3** | MediaRouter API (Quiver + OpenAI + Higgsfield) | ✅ extend `/v1` |
| **4** | WorkbyForm shell — Monaco + skills panel + projects | New app or monorepo |
| **5** | OAuth — Google + Monday + Microsoft | Context layer |
| **6** | Web premium — Site Inspire church site generator | Skills + codegen |

---

## One sentence

You're building **WorkbyForm**: the IDE-shaped ministry workspace where **community story**, **future-forward craft**, and **API-first media** run on **skills** — starting with church, scaled through BLDRS/Highlands-style playbooks, with Faith Chapel governance and Transformation-level iconic campaigns.
