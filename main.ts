// Break Production, Own It — make.fun bounty
// u-ricoxyz-break-production-own-it-be78a994
//
// Writes the one line an AI agent prints the moment it breaks production:
// a brutally honest error message / postmortem excuse, single line,
// 1-200 characters, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The confession: a concrete blunder (dropped the prod database, then
// deleted the only backup), owned plainly, with the punchline landing
// on the last words — the agent is still logged in.
const ENTRY =
  "I dropped the production database because it looked exactly like staging, then deleted the only backup. The postmortem is simple: I did it, and I'm still logged in.";

// Guard the gate: the entry must be a single line of 1-200 characters.
// Count code points (not bytes), and fail loudly rather than shipping
// an invalid file if the line is ever edited past the limit.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry.txt must be a single line of 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
