import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const indexPath = resolve("dist/index.html");

if (!existsSync(indexPath)) {
  console.error("dist/index.html not found. Run npm run build first.");
  process.exit(1);
}

const html = readFileSync(indexPath, "utf8");

const emptyRoot = /<div id="root">\s*<\/div>/i.test(html);
if (emptyRoot) {
  console.error("Prerender check failed: #root is empty in dist/index.html.");
  process.exit(1);
}

const rootStart = html.indexOf('<div id="root"');
if (rootStart === -1) {
  console.error("Prerender check failed: #root element not found.");
  process.exit(1);
}

const rootContent = html.slice(rootStart);
const markers = ["Andrew M. Petersen", "Projects Built Around Real Problems", "Full-Stack Software Engineer"];
const missing = markers.filter((text) => !rootContent.includes(text));

if (missing.length > 0) {
  console.error("Prerender check failed: missing expected content after #root:");
  missing.forEach((text) => console.error(`  - ${text}`));
  process.exit(1);
}

console.log("Prerender check passed: dist/index.html contains server-rendered portfolio content.");
