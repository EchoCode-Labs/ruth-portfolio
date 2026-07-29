import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public", "images");

const TAUPE = "#B49B8E";
const TAUPE_LIGHT = "#D9C7BC";
const ESPRESSO = "#3E2B22";
const CREAM = "#FBF6F1";

/** @type {{ path: string; label: string; hint: string; w: number; h: number }[]} */
const slots = [
  { path: "hero-portrait.svg", label: "Hero portrait", hint: "Leopard-print headwrap photo, home hero", w: 880, h: 1100 },
  { path: "about-portrait.svg", label: "About photo", hint: "Circular crop, About page", w: 900, h: 900 },
  { path: "workspace.svg", label: "Workspace photo", hint: "Laptop & desk, Home intro", w: 1200, h: 900 },
  { path: "certificates/executive-assistant.svg", label: "Certificate", hint: "High-Impact Executive Assistant Training", w: 1200, h: 900 },
  { path: "certificates/virtual-assistant.svg", label: "Certificate", hint: "High-Impact Virtual Assistant Training", w: 1200, h: 900 },
  { path: "projects/calendar-management.svg", label: "Screenshot", hint: "Google Calendar — weekly view", w: 1400, h: 900 },
  { path: "projects/email-management.svg", label: "Screenshot", hint: "Gmail inbox management", w: 1400, h: 900 },
  { path: "projects/email-labels.svg", label: "Screenshot", hint: "Gmail filters & labels", w: 1400, h: 900 },
  { path: "projects/drive-sop.svg", label: "Screenshot", hint: "Google Drive folder structure", w: 1400, h: 900 },
  { path: "projects/trello-board.svg", label: "Screenshot", hint: "Content workflow Trello board", w: 1400, h: 900 },
  { path: "projects/instagram-carousel.svg", label: "Design", hint: "Instagram carousel — Quick Skin Fixes", w: 1200, h: 1500 },
  { path: "projects/webinar-flyer.svg", label: "Design", hint: "Business webinar flyer", w: 1000, h: 1400 },
  { path: "designs/tech-gadgets-ad.svg", label: "Design sample", hint: "Tech Hub Gadgets ad", w: 1000, h: 1250 },
  { path: "designs/election-poster.svg", label: "Design sample", hint: "PRO campaign poster", w: 1000, h: 1250 },
  { path: "designs/perfume-ad.svg", label: "Design sample", hint: "Ruth Essence perfume ad", w: 1000, h: 1250 },
  { path: "designs/book-cover.svg", label: "Design sample", hint: "Book cover layout", w: 1000, h: 1250 },
  { path: "designs/valentine-flyer.svg", label: "Design sample", hint: "Valentine's dinner flyer", w: 1000, h: 1250 },
  { path: "designs/keke-napepe-ad.svg", label: "Design sample", hint: "KekeNapepe transport ad", w: 1000, h: 1250 },
];

function wrap(text, max) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > max) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function svgFor({ label, hint, w, h }) {
  const lines = wrap(hint, 26);
  const centerY = h / 2 - (lines.length - 1) * 14;
  const textLines = lines
    .map(
      (l, i) =>
        `<text x="50%" y="${centerY + i * 34}" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="${ESPRESSO}" opacity="0.75">${l}</text>`
    )
    .join("\n    ");

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${CREAM}" />
      <stop offset="1" stop-color="${TAUPE_LIGHT}" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)" />
  <rect x="24" y="24" width="${w - 48}" height="${h - 48}" fill="none" stroke="${TAUPE}" stroke-width="3" stroke-dasharray="14 10" rx="18" />
  <text x="50%" y="${centerY - 56}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="34" fill="${ESPRESSO}">${label}</text>
    ${textLines}
</svg>`;
}

for (const slot of slots) {
  const fullPath = join(publicDir, slot.path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, svgFor(slot), "utf8");
}

console.log(`Generated ${slots.length} placeholder images in ${publicDir}`);