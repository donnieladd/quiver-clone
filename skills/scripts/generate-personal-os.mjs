#!/usr/bin/env node
/** Personal Life OS — doc types + skills (universal framework, not church-specific) */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "personal-os");
const DOC = join(ROOT, "doc-architecture");
for (const d of [ROOT, join(ROOT, "workflows"), DOC]) {
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
}

const docs = [
  ["write_weekly_alignment_brief", "Write weekly alignment brief", "alignment", "15-min reset: intention, top 3, constraints, energy forecast. Not a todo list.", "personal-os.workflow.weekly_alignment"],
  ["write_personal_creative_brief", "Write personal creative brief", "alignment", "Before side projects or content: audience, output, tone, done definition.", "personal-os.workflow.personal_creative_brief"],
  ["write_life_project_charter", "Write life project charter", "planning", "Big personal projects: sponsor (you), scope, out-of-scope, success criteria.", "personal-os.workflow.life_project_charter"],
  ["write_personal_sop", "Write personal SOP", "governance", "Repeatable personal procedure — meds, morning, bills — zero decision fatigue.", ""],
  ["write_personal_scorecard", "Write personal scorecard", "reporting", "5 lead + 5 lag indicators. Truth without shame.", "personal-os.workflow.weekly_alignment"],
  ["write_personal_decision_memo", "Write personal decision memo", "decision", "Record a life decision so you stop re-litigating.", ""],
  ["write_personal_risk_register", "Write personal risk register", "governance", "Known failure modes: hyperfocus, isolation, skip meals, overspend triggers.", "personal-os.workflow.life_project_charter"],
  ["write_personal_aar", "Write personal after action report", "reporting", "Blameless review after hard weeks or finished projects.", "personal-os.workflow.personal_aar"],
  ["write_personal_run_of_show", "Write personal run of show", "planning", "Travel, shoot, interview, hard conversation — timed sequence.", ""],
  ["write_quarter_strategy_brief", "Write quarter strategy brief", "alignment", "Season direction: 3 outcomes max across health, work, relationships, creative.", ""],
  ["write_concept_note_personal", "Write personal concept note", "alignment", "Park an idea without committing resources.", ""],
  ["write_personal_status_report", "Write personal status report", "reporting", "Done / stuck / next for accountability partner or Future You.", "personal-os.workflow.weekly_alignment"],
];

for (const [slug, title, tier, purpose, related] of docs) {
  const id = `personal-os.doc.${slug}`;
  const rel = related ? [related] : ["personal-os.PERSONAL_LIFE_OS"];
  const md = `---
id: ${id}
tier: ${tier}
vertical: personal-os
title: ${JSON.stringify(title)}
inputs: []
outputs: [personal_document]
related: [${rel.join(", ")}]
framework: Document Architecture (universal)
---

# ${title}

## Purpose

${purpose}

## Personal template

- **Owner:** You
- **Date / week of:**
- **Energy level honest check:** low / medium / high
- **One-line intention:**

(Fill body per \`../PERSONAL_LIFE_OS.md\` tier guidance.)

## ADHD note

If this doc takes >20 minutes, you're over-building. Minimum viable section only.

## Storage

\`Personal OS/Documents/{type}/YYYY-MM-DD-slug.md\` or Brand Studio project folder.
`;
  writeFileSync(join(DOC, `${slug}.md`), md);
}

writeFileSync(
  join(DOC, "INDEX.md"),
  `# Personal document architecture

Universal framework (origin: professional Experience Division work — **not church-specific**).

Master map: [../PERSONAL_LIFE_OS.md](../PERSONAL_LIFE_OS.md)

| Skill | Tier | Use when |
|-------|------|----------|
${docs.map(([s, t, tier]) => `| \`${s}\` | ${tier} | ${t} |`).join("\n")}

Church vertical \`church/doc-architecture/\` is the same framework applied to ministry ops.
`,
);

console.log(`Personal OS: ${docs.length} doc skills`);
