# Playbook: Union Church + The Builders Network

**Pastor:** Stephen Chandler · **Church:** [Union Church](https://theunionchurch.com/) · **Network:** [The Builders Network](https://www.thebuildersnetwork.org/)

## What they optimize for

1. **Accessibility** — "Worship experiences… primarily designed for those who do not yet have a genuine relationship with God" ([about](https://theunionchurch.com/about/))
2. **Systems over hustle** — Chandler's story: 400 people stuck 4 years until mentors + people development ([BLDRS home](https://www.thebuildersnetwork.org/))
3. **Multi-location movement** — MD, VA, NC campuses
4. **Worship as sub-brand** — [Union Sound](https://theunionchurch.com/unionsound/) with its own releases, newsletter, channels
5. **Creative team** — Video production, creative director, worship director (not pastor-only media)

## Org model (media-relevant)

```
Lead Pastor (vision, voice)
    ├── Senior Creative / Video (brand + broadcast)
    ├── Worship Director → Union Sound (music brand)
    ├── Production / A/V (services, IMAG, stream)
    └── Volunteers (trained teams, not lone wolves)
```

**Profile:** [`profiles/union-church.json`](../profiles/union-church.json) — role-based approval chains; Union Sound template family separate from sermon series.

## Story model — community > hero pastor

| Channel | Balance |
|---------|---------|
| Sermon | Chandler teaches; high production |
| Social | Mix pastor + congregation + Union Sound |
| Worship | Artists and songs foregrounded |
| BLDRS | Chandler coaches **other** pastors — meta-ministry |

**Skills to enforce:**
- `church.story.balance_pastor_vs_community_faces` — max 40% pastor face grid in 30-day window
- `church.story.promote_worship_subbrand` — Union Sound releases get dedicated template lane

## Asset cadence (inferred + standard large-church)

| Rhythm | Assets |
|--------|--------|
| Weekly | Service stream, clips, 3–5 social, lyric/worship visuals |
| Series | Multi-week kit (see `workflows/series-launch.md`) |
| Worship drops | Music video, Spotify canvas, vertical teaser |
| BLDRS | Conference promo, masterclass clips, leader testimonials |
| Growth | Next steps, groups, serve — **not event-only flyers |

## Visual / sound direction

- Contemporary African-American church excellence space
- Bold, encouraging, life-giving (their language)
- Union Sound: "Songs of today are altars of yesterday"
- Future-forward within reach of multi-campus ops — not lo-fi phone-only, not TC-level spectacle on every post

## Profile-driven deployment

1. **`profiles/union-church.json`** — campuses, approvers, Union Sound vs Union Church split
2. **Integrations** — Planning Center, YouTube, Spotify, Monday (listed in profile)
3. **Skill priorities** — see profile `skill_priorities[]`
4. **BLDRS lane** — `network.bldrs-network` in profile; separate DAM folder `Network/BLDRS/`

## Steal / avoid

| Steal | Avoid |
|-------|-------|
| Worship sub-brand with own CRM (newsletter) | Everything tagged only lead pastor |
| Systems coaching as content pillar | One-off graphics without series kit |
| Seeker-first copy on web | Insider Christianese on outreach posts |
| Production team roles in DAM permissions | Volunteer free-form Canva |

## Related skills (existing)

- `church.worship.*`, `church.motion.*`, `church.ops.define_approval_chain`
- `workflows/series-launch.md`, `workflows/sermon-to-social.md`

## Related skills (added)

- `church.story.balance_pastor_vs_community_faces`
- `church.worship.union_sound_release_kit`
- `church.ops.multi_campus_variant_switcher`
