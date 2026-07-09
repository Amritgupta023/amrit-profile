import { readFile } from "node:fs/promises";

const requiredFiles = ["index.html", "styles.css", "script.js"];
const requiredText = [
  "Brittany Chiang",
  "Frontend Engineer",
  "Senior Frontend Engineer, Accessibility",
  "Build a Spotify Connected App",
  "Welcome to the AI Parade"
];

for (const file of requiredFiles) {
  await readFile(file, "utf8");
}

const html = await readFile("index.html", "utf8");
for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Missing expected text: ${text}`);
  }
}

console.log("Static clone verification passed.");
