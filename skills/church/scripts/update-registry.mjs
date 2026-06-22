#!/usr/bin/env node
/** Rebuild registry.json by scanning skill markdown frontmatter. */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DOMAINS = [
  "brand",
  "series",
  "social",
  "slides",
  "worship",
  "motion",
  "print",
  "web",
  "content",
  "story",
  "env",
  "ops",
  "qa",
];

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = m[1];
  const id = fm.match(/^id:\s*(.+)$/m)?.[1]?.trim();
  const tier = fm.match(/^tier:\s*(.+)$/m)?.[1]?.trim() ?? "production";
  const title = fm.match(/^title:\s*"?(.+?)"?\s*$/m)?.[1]?.trim() ?? "";
  if (!id) return null;
  return { id, tier, title, slug: id.replace(/^church\.\w+\./, ""), domain: id.split(".")[1] };
}

const skills = [];
for (const domain of DOMAINS) {
  const dir = join(ROOT, domain);
  try {
    for (const file of readdirSync(dir)) {
      if (!file.endsWith(".md") || file === "INDEX.md") continue;
      const content = readFileSync(join(dir, file), "utf8");
      const meta = parseFrontmatter(content);
      if (meta) {
        skills.push({
          id: meta.id,
          domain: meta.domain,
          slug: file.replace(/\.md$/, ""),
          title: meta.title,
          tier: meta.tier,
          path: `${domain}/${file}`,
        });
      }
    }
  } catch {
    /* domain dir optional */
  }
}

skills.sort((a, b) => a.id.localeCompare(b.id));

const profilesIndex = JSON.parse(readFileSync(join(ROOT, "profiles/index.json"), "utf8"));
const domainCounts = {};
for (const s of skills) {
  domainCounts[s.domain] = (domainCounts[s.domain] ?? 0) + 1;
}

const registry = {
  version: "1.2.0",
  vertical: "church",
  generated_at: new Date().toISOString(),
  skill_count: skills.length,
  workflows: [
    "workflows/sermon-to-social.md",
    "workflows/weekly-service-kit.md",
    "workflows/series-launch.md",
    "workflows/worship-visuals.md",
    "workflows/volunteer-template-ops.md",
    "workflows/approval-governance.md",
  ],
  playbooks: [
    "playbooks/faith-chapel.md",
    "playbooks/union-bldrs.md",
    "playbooks/transformation-church.md",
    "playbooks/highlands-resources.md",
    "playbooks/elevation-church.md",
    "playbooks/hillsong-social-strategy.md",
  ],
  profiles: profilesIndex.profiles,
  domains: domainCounts,
  skills,
};

writeFileSync(join(ROOT, "registry.json"), JSON.stringify(registry, null, 2));
console.log(`Registry updated: ${skills.length} skills`, domainCounts);
