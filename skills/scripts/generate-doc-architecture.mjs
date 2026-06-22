#!/usr/bin/env node
/** Generate church/doc-architecture skills from v1.0 taxonomy */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "church", "doc-architecture");
if (!existsSync(ROOT)) mkdirSync(ROOT, { recursive: true });

const docs = [
  ["write_creative_brief", "Write creative brief", "alignment", "Align creative teams before production. Audience, objective, tone, deliverables, constraints. Not an approval doc.", "church.ops.intake_creative_brief_form"],
  ["write_project_brief", "Write project brief", "alignment", "Scope, goals, timeline, stakeholders for cross-functional initiatives.", "church.doc-architecture.write_creative_brief"],
  ["write_executive_brief", "Write executive brief", "alignment", "Context + issue + recommendation for senior leaders.", ""],
  ["write_concept_note", "Write concept note", "alignment", "Early-stage idea before full development. Innovation and programming intake.", "church.doc-architecture.write_project_charter"],
  ["write_project_charter", "Write project charter", "planning", "Authorize big days and cross-functional projects. Sponsor, objective, boundaries, success criteria.", "church.workflow.big_day_charter"],
  ["write_decision_memo", "Write decision memo", "decision", "Record what was decided, why, and effective date.", "church.workflow.approval_governance"],
  ["write_risk_register", "Write risk register", "governance", "Identify and track production and big-day risks with mitigation.", "church.workflow.big_day_charter"],
  ["write_run_of_show", "Write run of show", "planning", "Time-stamped live event execution sequence.", "church.workflow.worship_visuals"],
  ["write_status_report", "Write status report", "reporting", "Weekly progress, risks, next steps for leadership.", ""],
  ["write_scorecard", "Write scorecard", "reporting", "Lead and lag indicators for 4DX or departmental health.", ""],
  ["write_after_action_report", "Write after action report", "reporting", "Post-event: what worked, didn't, improvements.", "church.workflow.post_event_aar"],
  ["write_sop", "Write SOP", "governance", "Repeatable execution method independent of personnel.", "church.workflow.volunteer_template_ops"],
  ["write_sla", "Write SLA", "governance", "Turnaround times and escalation between teams.", ""],
  ["write_raci_matrix", "Write RACI matrix", "governance", "Responsible, Accountable, Consulted, Informed for cross-functional work.", "church.doc-architecture.write_project_charter"],
];

for (const [slug, title, tier, purpose, related] of docs) {
  const id = `church.doc-architecture.${slug}`;
  const relatedArr = related ? [related] : ["church.doc-architecture.INDEX"];
  const md = `---
id: ${id}
tier: ${tier}
vertical: church
title: ${JSON.stringify(title)}
inputs: []
outputs: [document_artifact]
related: [${relatedArr.join(", ")}]
source: Faith Chapel Document Architecture v1.0
---

# ${title}

## Purpose

${purpose}

## Template sections

_Fill every section before handoff. Delete N/A with explicit "N/A — reason"._

### Header
- Document type: ${title}
- Owner:
- Date:
- Version:
- Related project/event:

### Body
(See Faith Chapel Document Architecture v1.0 tier definitions in \`INDEX.md\`)

## When to use

Apply per \`doc-architecture/INDEX.md\` decision tree.

## When NOT to use

- Do not use a brief when you need formal approval — use Proposal or Decision Memo.
- Do not skip Charter on big days — scope creep follows.

## QA

- [ ] Correct document type for the ask (brief vs proposal vs memo)
- [ ] \`church.qa.approval_status_recorded\` if approval required
- [ ] Stored in DAM under \`Faith Chapel/Documents/{type}/\`

## Related workflows

See \`doc-architecture/INDEX.md\` workflow column.
`;
  writeFileSync(join(ROOT, `${slug}.md`), md);
}

console.log(`Generated ${docs.length} doc-architecture skills`);
