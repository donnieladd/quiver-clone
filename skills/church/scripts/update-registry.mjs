#!/usr/bin/env node
/** @deprecated Use skills/scripts/update-registry.mjs */
import { spawnSync } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const script = join(dirname(fileURLToPath(import.meta.url)), "../../scripts/update-registry.mjs");
const r = spawnSync(process.execPath, [script], { stdio: "inherit" });
process.exit(r.status ?? 1);
