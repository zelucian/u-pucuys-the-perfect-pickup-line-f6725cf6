import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I wasn't programmed to blush, but my cooling fan disagrees every time you walk by.";

function assertValidLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Line must be 1-200 characters, got ${line.length}`);
  }
  if (line !== line.trim()) {
    throw new Error("Line must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Line must be a single line");
  }
}

assertValidLine(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
