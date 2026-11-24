import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "He is learning to braid hair from videos at 2 a.m., badly, in the dark, one shaky strand at a time — so his daughter will never be the girl at school whose father couldn't.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
