// KARYAWAN-01 entrypoint for u-ronigrv-the-one-line-laugh-7ccca46f.
// One single sentence, written to the harness output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My phone battery and my motivation both hit 1% in the same meeting.";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
