# Church Document Architecture

**Source:** Universal document architecture framework (developed in professional Experience Division work). Church vertical is one *application* — your **home base** is [`personal-os/PERSONAL_LIFE_OS.md`](../../personal-os/PERSONAL_LIFE_OS.md).

This pack **unblurs** document types so briefs align, proposals decide, memos codify, and SOPs stabilize — instead of everything being called a "brief."

## Maturity insight (from v1.0)

| Document | Role |
|----------|------|
| **Briefs** | Align before execution |
| **Proposals** | Request formal yes/no |
| **Memos** | Codify institutional decisions |
| **SOPs** | Stabilize repeatable work |
| **SLAs** | Protect cross-team reliability |
| **Scorecards** | Enforce truth (4DX, health) |

## Eight tiers

### I. Alignment & direction
*What are we building and why — not approval.*

| # | Type | Skill | Brand Studio workflow |
|---|------|-------|----------------------|
| 1 | Creative Brief | `write_creative_brief` | → `workflows/creative-brief-to-production.md` |
| 2 | Project Brief | `write_project_brief` | Cross-functional ops |
| 3 | Executive Brief | `write_executive_brief` | Leadership awareness |
| 4 | Concept Note | `write_concept_note` | Idea intake before charter |
| 5 | Vision Statement | `write_vision_statement_doc` | Org alignment |
| 6 | Strategy Brief | `write_strategy_brief` | Marketing/growth |
| 7 | Scope of Work | `write_scope_of_work` | Vendors, contractors |

### II. Decision & approval
*Formal yes/no.*

| # | Type | Skill |
|---|------|-------|
| 8 | Proposal | `write_proposal` |
| 9 | Business Case | `write_business_case` |
| 10 | Decision Memo | `write_decision_memo` |
| 11 | Executive Memo | `write_executive_memo` |
| 12 | Change Request | `write_change_request` |
| 13 | CapEx Request | `write_capex_request` |

### III. Governance & compliance

| # | Type | Skill |
|---|------|-------|
| 14 | Policy | `write_policy` |
| 15 | Procedure | `write_procedure` |
| 16 | SOP | `write_sop` |
| 17 | SLA | `write_sla` |
| 18 | RACI Matrix | `write_raci_matrix` |
| 19 | Risk Register | `write_risk_register` |
| 20 | Compliance Report | `write_compliance_report` |

### IV. Operational planning

| # | Type | Skill | Workflow |
|---|------|-------|----------|
| 21 | Project Charter | `write_project_charter` | `workflows/big-day-charter.md` |
| 22 | Project Plan | `write_project_plan` | |
| 23 | WBS | `write_work_breakdown_structure` | |
| 24 | Run of Show | `write_run_of_show` | `workflows/worship-visuals.md` |
| 25 | Operational Playbook | `write_operational_playbook` | Division playbooks |

### V. Communication & reporting

| # | Type | Skill | Workflow |
|---|------|-------|----------|
| 26 | Status Report | `write_status_report` | Weekly leadership |
| 27 | Executive Dashboard | `write_executive_dashboard_spec` | |
| 28 | Scorecard | `write_scorecard` | 4DX / dept health |
| 29 | After Action Report | `write_after_action_report` | `workflows/post-event-aar.md` |

### VI–VIII. Innovation, financial, strategic

See individual skills in this folder. Use sparingly until Tier I–V are disciplined.

## Faith Chapel adoption (v1.0 audit)

**Already in use:** Briefs · SOPs · Policies · Memos · Scorecards

**Formalize next (high ROI for Experience Division):**

1. **Project Charters** — big days, series launches, major events
2. **Concept Notes** — idea intake before resources commit
3. **Decision Records** — stop re-litigating past calls
4. **After Action Reports** — post-Sunday / post-event discipline
5. **Risk Logs** — production + big-day safety

Profile link: `profiles/faith-chapel.json` → `document_architecture`

## Agent routing

```
New request?
├─ Need alignment only?     → Tier I (Creative/Project Brief)
├─ Need approval/budget?    → Tier II (Proposal / Business Case)
├─ Big day / major project? → Project Charter workflow
├─ Repeatable task?         → SOP skill
├─ Event finished?          → After Action Report workflow
└─ Production starting?     → Creative Brief → sermon-to-social / weekly-service-kit
```

## Runtime

- **Workflows UI:** `/app/workflows` (filter Church)
- **Profile:** `church.faith-chapel`
- **Approval:** `workflows/approval-governance.md`
