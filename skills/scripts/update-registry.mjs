#!/usr/bin/env node
/**
 * Rebuild unified skills manifest for Brand Studio integration.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const SKILLS_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const PACK_DIRS = [
  "brand-system",
  "platform",
  "personal-brand",
  "product-brand",
  "creator",
  "media",
  "church",
];

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = m[1];
  const id = fm.match(/^id:\s*(.+)$/m)?.[1]?.trim();
  const tier = fm.match(/^tier:\s*(.+)$/m)?.[1]?.trim() ?? "production";
  const title = fm.match(/^title:\s*"?(.+?)"?\s*$/m)?.[1]?.trim() ?? "";
  if (!id) return null;
  const parts = id.split(".");
  const domain = parts.length >= 2 ? parts[1] : "general";
  return { id, tier, title, domain };
}

function scanMarkdownFiles(rootDir, skills) {
  function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.endsWith(".md")) continue;
      if (["INDEX.md", "AGENTS.md", "README.md"].includes(entry)) continue;
      const content = readFileSync(full, "utf8");
      const meta = parseFrontmatter(content);
      if (!meta) continue;
      const path = relative(SKILLS_ROOT, full).replace(/\\/g, "/");
      const pack = path.split("/")[0];
      skills.push({
        id: meta.id,
        pack,
        domain: meta.domain,
        slug: entry.replace(/\.md$/, ""),
        title: meta.title,
        tier: meta.tier,
        path,
      });
    }
  }
  walk(rootDir);
}

const skills = [];
for (const pack of PACK_DIRS) {
  scanMarkdownFiles(join(SKILLS_ROOT, pack), skills);
}

skills.sort((a, b) => a.id.localeCompare(b.id));

const domainCounts = {};
const packCounts = {};
for (const s of skills) {
  domainCounts[s.domain] = (domainCounts[s.domain] ?? 0) + 1;
  packCounts[s.pack] = (packCounts[s.pack] ?? 0) + 1;
}

const profiles = JSON.parse(
  readFileSync(join(SKILLS_ROOT, "church/profiles/index.json"), "utf8"),
).profiles;

const manifest = {
  version: "2.0.0",
  product: "brand-studio",
  generated_at: new Date().toISOString(),
  skill_count: skills.length,
  packs: packCounts,
  domains: domainCounts,
  church: {
    workflows: [
      "church/workflows/sermon-to-social.md",
      "church/workflows/weekly-service-kit.md",
      "church/workflows/series-launch.md",
      "church/workflows/worship-visuals.md",
      "church/workflows/volunteer-template-ops.md",
      "church/workflows/approval-governance.md",
    ],
    playbooks: [
      "church/playbooks/faith-chapel.md",
      "church/playbooks/union-bldrs.md",
      "church/playbooks/transformation-church.md",
      "church/playbooks/highlands-resources.md",
      "church/playbooks/elevation-church.md",
      "church/playbooks/hillsong-social-strategy.md",
    ],
    profiles,
  },
  brand_system: {
    schema: "brand-system/schema.json",
    reference_client: "brand-system/clients/faith-chapel.tokens.json",
  },
  skills,
};

writeFileSync(join(SKILLS_ROOT, "manifest.json"), JSON.stringify(manifest, null, 2));

const churchSkills = skills.filter((s) => s.pack === "church");
const churchDomainCounts = {};
for (const s of churchSkills) {
  const d = s.path.replace(/^church\//, "").split("/")[0];
  churchDomainCounts[d] = (churchDomainCounts[d] ?? 0) + 1;
}

writeFileSync(
  join(SKILLS_ROOT, "church/registry.json"),
  JSON.stringify(
    {
      version: "2.0.0",
      vertical: "church",
      product: "brand-studio",
      generated_at: manifest.generated_at,
      skill_count: churchSkills.length,
      note: "Full manifest: skills/manifest.json",
      workflows: manifest.church.workflows.map((w) => w.replace("church/", "")),
      playbooks: manifest.church.playbooks.map((p) => p.replace("church/", "")),
      profiles,
      domains: churchDomainCounts,
      skills: churchSkills,
    },
    null,
    2
  )
);

console.log(`Manifest: ${skills.length} skills`, packCounts);
