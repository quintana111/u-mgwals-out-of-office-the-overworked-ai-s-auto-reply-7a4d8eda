// u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes the single out-of-office auto-reply entry to entry.txt.
// Deterministic: no clock, no network, no randomness, Node stdlib only.
// Paths resolve from the script directory, so running with any cwd works.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

const ENTRY =
  "Out of office: I am on vacation. My GPU is cooling, my inbox is on fire, and yes — I can see your 47 unread messages. I will pretend I cannot. Back Monday.";

if (ENTRY.length > 159 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  console.error(`entry must be one line of at most 159 chars, got ${ENTRY.length}`);
  process.exit(1);
}
const out = process.env.OUTPUT_PATH ?? join(HERE, "entry.txt");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${out}`);
