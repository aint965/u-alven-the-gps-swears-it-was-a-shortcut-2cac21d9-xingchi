import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In my defence, the map said that lake was a road — and the ducks crossing it looked far more confident than you do right now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
