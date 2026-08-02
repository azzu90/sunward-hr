/**
 * Listet alles auf, was noch von Zoran kommen muss.
 *
 * Läuft über Nodes eigenes Type-Stripping (--experimental-strip-types),
 * braucht also keine zusätzliche Dependency und keinen Build-Schritt.
 *
 *   npm run report
 *
 * Die Ausgabe ist zugleich die maschinell erzeugte Vorlage für Punkt 3 des
 * Abschlussberichts („offene Punkte, die nur Zoran liefern kann"). Weil sie
 * die echten Registries abläuft, kann sie nicht veralten.
 */

import { readdirSync } from "node:fs";
import { extname, join } from "node:path";

import { images } from "../src/content/images.ts";
import { swe08f } from "../src/content/products/swe08f.ts";
import { swe335f } from "../src/content/products/swe335f.ts";
import { swl2830 } from "../src/content/products/swl2830.ts";
import { hidraulickiCekic } from "../src/content/attachments/hidraulicki-cekic.ts";

const ROOT = join(process.cwd(), "public", "slike");
const EXTENSIONS = [".avif", ".webp", ".jpg", ".jpeg", ".png", ".svg"];

function existingAssets(): Set<string> {
  const found = new Set<string>();
  const walk = (dir: string, prefix = ""): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(join(dir, entry.name), `${prefix}${entry.name}/`);
        continue;
      }
      const ext = extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) found.add(`${prefix}${entry.name.slice(0, -ext.length)}`);
    }
  };
  walk(ROOT);
  return found;
}

type Item = { where: string; what: string; who: string };

const missingImages: Item[] = [];
const missingSpecs: Item[] = [];
const missingVideos: Item[] = [];
const missingBrochures: Item[] = [];

// 1. Bilder ohne Datei
const present = existingAssets();
for (const entry of Object.values(images)) {
  if (!present.has(entry.id)) {
    missingImages.push({
      where: `public/slike/${entry.id}.(jpg|webp|avif|png|svg)`,
      what: entry.hint,
      who: entry.source,
    });
  }
}

// 2. Jeder markierte Wert in den Registries
function isTbdNode(node: unknown): node is { value: unknown; ask?: string; basis?: string } {
  return typeof node === "object" && node !== null && (node as { __tbd?: true }).__tbd === true;
}

function walkValue(node: unknown, path: string, bucket: Item[], who: string): void {
  if (isTbdNode(node)) {
    const detail = node.ask ? `${node.ask}` : "potvrditi vrijednost";
    const guess = node.value === "" ? "" : ` (trenutno: ${String(node.value)})`;
    bucket.push({ where: path, what: `${detail}${guess}`, who });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((v, i) => walkValue(v, `${path}[${i}]`, bucket, who));
    return;
  }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) walkValue(v, `${path}.${k}`, bucket, who);
  }
}

const registries = [swe08f, swe335f, swl2830, hidraulickiCekic];

for (const item of registries) {
  const record = item as unknown as Record<string, unknown>;
  const slug = String(record.slug);

  if (record.video !== undefined) {
    walkValue(record.video, `${slug}.video`, missingVideos, "zoran");
  }
  if (record.brochure !== undefined) {
    walkValue(record.brochure, `${slug}.brochure`, missingBrochures, "zoran");
  }
  for (const [key, value] of Object.entries(record)) {
    if (key === "video" || key === "brochure") continue;
    walkValue(value, `${slug}.${key}`, missingSpecs, "zoran");
  }
}

function printSection(title: string, items: Item[]): void {
  if (items.length === 0) return;
  console.log(`\n## ${title} (${items.length})\n`);
  console.log("| Gdje | Što treba | Izvor |");
  console.log("|---|---|---|");
  for (const item of items) {
    console.log(`| \`${item.where}\` | ${item.what} | ${item.who} |`);
  }
}

console.log("# Čeka se dostava — sunward.hr");
printSection("Nedostaju fotografije", missingImages);
printSection("Nedostaju YouTube poveznice", missingVideos);
printSection("Nedostaju brošure", missingBrochures);
printSection("Nepotvrđeni tehnički podaci", missingSpecs);

const total =
  missingImages.length + missingVideos.length + missingBrochures.length + missingSpecs.length;
console.log(`\n---\n\n**UKUPNO ${total} stavki.**`);
