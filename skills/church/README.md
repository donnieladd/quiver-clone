# Church / Ministry Media Skills Pack

**276 atomic skills** · **6 workflows** · **5 client profiles** · Agent-ready markdown for AI experts and platform automation.

## Quick start

```bash
# Regenerate baseline skills from catalog (skips hand-written files)
npm run skills:church

# Rebuild registry.json from all skill frontmatter (after adding hand-written skills)
npm run skills:update-registry

# Validate client profiles
npm run skills:validate-profiles
```

**For AI agents:** Read `AGENTS.md` → load `profiles/{slug}.json` → playbook → `INDEX.md` or `story/INDEX.md` → workflow → skills.

**For humans:** Start with `workflows/series-launch.md` (new series) or `workflows/sermon-to-social.md` (weekly content). For community narrative, start at `story/INDEX.md`.

## Client profiles

| Client | File | Playbook |
|--------|------|----------|
| Faith Chapel | `profiles/faith-chapel.json` | `playbooks/faith-chapel.md` |
| Union Church | `profiles/union-church.json` | `playbooks/union-bldrs.md` |
| Transformation Church | `profiles/transformation-church.json` | `playbooks/transformation-church.md` |
| Church of the Highlands | `profiles/church-of-the-highlands.json` | `playbooks/highlands-resources.md` |
| Elevation Church | `profiles/elevation-church.json` | `playbooks/elevation-church.md` |

## Structure

```
skills/church/
├── AGENTS.md
├── INDEX.md
├── registry.json          # Run skills:update-registry to refresh
├── README.md
├── profiles/              # 5 registered clients
├── playbooks/
├── workflows/             # 6 end-to-end workflows
├── scripts/
│   ├── generate-skills.mjs
│   ├── update-registry.mjs
│   └── validate-profiles.mjs
├── story/                 # 24 community narrative skills + INDEX.md
├── brand/                 # 19 skills
├── social/                # 38 skills
├── series/                # 28 skills
├── slides/                # 24 skills
├── worship/               # 19 skills
├── motion/                # 21 skills
├── print/                 # 14 skills
├── web/                   # 16 skills
├── content/               # 23 skills
├── env/                   # 13 skills
├── ops/                   # 21 skills
└── qa/                    # 16 skills
```

## Story domain (`church.story.*`)

Community-first narrative — testimony, values campaigns, pastor/face balance, eFam, outreach:

- Entry: `story/INDEX.md`
- Calendar: `church.story.plan_story_content_calendar`
- QA chain: consent → context → diversity → pastor-face ratio

## Workflows

| Workflow | Use when |
|----------|----------|
| [sermon-to-social.md](./workflows/sermon-to-social.md) | Repurpose sermon into 8–30 social assets |
| [weekly-service-kit.md](./workflows/weekly-service-kit.md) | Slides, bulletin, email, reminders for Sunday |
| [series-launch.md](./workflows/series-launch.md) | Full visual kit for new sermon series |
| [worship-visuals.md](./workflows/worship-visuals.md) | Loops, lyrics, stage motion |
| [volunteer-template-ops.md](./workflows/volunteer-template-ops.md) | Canva/volunteer training & constraints |
| [approval-governance.md](./workflows/approval-governance.md) | Sign-off, versioning, archive |

## Quiver integration

Skills that need **vector marks, icons, patterns, or title treatments** should call this repo's API:

```bash
curl -X POST http://localhost:3000/v1/svgs/generations \
  -H "Authorization: Bearer qv_dev_local_key" \
  -H "Content-Type: application/json" \
  -d '{"model":"arrow-1.1","prompt":"minimal geometric cross motif for sermon series, flat SVG","stream":false}'
```

Then run `church.qa.logo_and_color_compliance` before placing in templates.

## Hand-written skills

Profile-specific and story skills are **not** overwritten by `generate-skills.mjs`. After adding or editing them, run `npm run skills:update-registry`.

Examples: `story/*`, `social/steven_furtick_clip_strategy.md`, `series/ship_open_network_elevation_kit.md`, `ops/efam_watch_party_promo.md`

## Sources

- [Church Visuals — Canva template system](https://churchvisuals.com/article/how-to-build-a-reusable-social-media-template-system-in-canva/)
- [Sermon Clips — sermon to social workflow](https://sermon-clips.com/blog/sermon-to-social-media-workflow)
- [Elevation Open Network](https://open.life.church/partners/elevation-church)
- [Highlands Resources](https://www.churchofthehighlands.com/resources)
- [Faith Chapel Brand](https://www.faithchapel.net/brand)
