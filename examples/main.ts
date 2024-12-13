import { parsePDF } from "../src";
//     replace with this ^ "@literate.ink/pdf-inspector";

import fs from "node:fs/promises";
import path from "node:path";

void async function main () {
  const file = path.join(__dirname, "timetable.pdf");
  const buffer = await fs.readFile(file);

  const pages = await parsePDF(buffer);

  for (const page of pages) {
    console.log(`Page of ${page.Width}x${page.Height}px`);
    console.log("- contains", page.Texts.length, "texts");
    console.log("- contains", page.Fills.length, "fills");
  }
}();
