import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const specPath = join(process.cwd(), "public", "openapi.json");
  const spec = readFileSync(specPath, "utf8");
  return new Response(spec, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
