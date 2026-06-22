#!/usr/bin/env node
/** Validate church profile JSON against schema structure (required fields). */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const REQUIRED = [
  "id",
  "name",
  "slug",
  "playbook",
  "leadership",
  "brand",
  "voice",
  "story",
  "content_pillars",
  "social",
  "approval",
  "visual",
];

const index = JSON.parse(readFileSync(join(ROOT, "profiles/index.json"), "utf8"));
let ok = true;

for (const entry of index.profiles) {
  const path = join(ROOT, "profiles", entry.file);
  const profile = JSON.parse(readFileSync(path, "utf8"));
  const missing = REQUIRED.filter((k) => profile[k] === undefined);
  if (missing.length) {
    console.error(`FAIL ${entry.slug}: missing ${missing.join(", ")}`);
    ok = false;
  } else {
    console.log(`OK ${entry.slug} (${profile.id}) — ${profile.content_pillars.length} pillars`);
  }
}

process.exit(ok ? 0 : 1);
