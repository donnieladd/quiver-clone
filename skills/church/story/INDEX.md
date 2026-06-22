# Church Story Skills — Index

**Community-first narrative** — who we are, what we care about, whose faces we show — not event flyers alone.

Load **`profiles/{slug}.json`** first, then route here.

---

## Decision tree

```
Story task?
│
├─ Which church?
│   └─► church.story.route_by_profile
│
├─ Plan month of story content
│   └─► church.story.plan_story_content_calendar
│       └─► map_values_to_content_pillars OR balance_four_mission_pillars
│       └─► balance_pastor_vs_community_faces
│
├─ Collect testimony
│   └─► collect_member_testimony → consent_and_privacy_check
│       └─► edit_testimony_for_publication
│       └─► feature_member_story_on_web + social template
│
├─ Faith Chapel Share Your Story campaign
│   └─► run_share_your_story_campaign → share_your_story_intake_form
│
├─ Baptism / milestone
│   └─► baptism_story_workflow
│
├─ Serve / groups / outreach highlight
│   └─► serve_team_spotlight | groups_highlight | outreach_impact_feature
│
├─ Worship sub-brand (Union Sound, Elevation Worship)
│   └─► promote_worship_subbrand
│
├─ TC vision language on copy
│   └─► apply_represent_language_filter → maintain_vision_phrase_glossary
│
├─ eFam / Watch Party (Elevation)
│   └─► efam_community_story + ops.efam_watch_party_promo
│
├─ Multi-campus local story
│   └─► localize_story_for_campus
│
├─ Values campaign (not one event)
│   └─► build_community_campaign_not_event
│
└─ After publish
    └─► archive_published_stories
```

---

## Skills by profile

| Skill | FC | Union | TC | Highlands | Elevation |
|-------|:--:|:-----:|:--:|:---------:|:---------:|
| `balance_pastor_vs_community_faces` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `run_share_your_story_campaign` | ✓ | | | | |
| `apply_represent_language_filter` | | | ✓ | | |
| `balance_four_mission_pillars` | | | | ✓ | |
| `efam_community_story` | | | | | ✓ |
| `promote_worship_subbrand` | | ✓ | | | ✓ |
| `outreach_impact_feature` | | ✓ | | ✓ | ✓ |

FC = Faith Chapel · Full list in `registry.json` domain `story`

---

## QA chain (always)

1. `consent_and_privacy_check` (if person featured)
2. `avoid_out_of_context_narrative`
3. `diversity_representation_check`
4. `balance_pastor_vs_community_faces` (calendar level)
5. Profile `approval.chain` for asset type
