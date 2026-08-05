import { readdirSync } from "node:fs";
import { extname, join } from "node:path";

import { images } from "@/content/images";
import type { AssetSource, AspectRatio, ImageEntry, ImageId } from "@/content/types";
import { aspectFromSize, intrinsicSize } from "@/lib/image-size";

/**
 * `images` ist mit `as const satisfies` deklariert, damit ImageId eine
 * Literal-Union wird. Dadurch verliert jeder Eintrag aber die optionalen
 * Felder, die er selbst nicht setzt — deshalb hier eine gewidmete,
 * aufgeweitete Sicht auf dasselbe Objekt.
 */
const imageEntries = images as Record<ImageId, ImageEntry>;

/**
 * Auflösung Bild-ID → echte Datei, per Auto-Discovery.
 *
 * Der Kern des Platzhalter-Systems: es gibt KEIN Flag im Manifest, das
 * gepflegt werden müsste. Existiert unter public/slike/<id>.<ext> eine
 * Datei, wird sie benutzt; sonst rendert die Komponente einen markierten
 * Platzhalter. Zoran liefert ein Foto → Datei ablegen → fertig.
 *
 * Läuft ausschliesslich zur Build-Zeit, weil die ganze Seite statisch
 * generiert wird.
 */

const ROOT = join(process.cwd(), "public", "slike");
const EXTENSIONS = [".avif", ".webp", ".jpg", ".jpeg", ".png", ".svg"];

let cache: Map<string, string> | null = null;

function assetIndex(): Map<string, string> {
  if (cache) return cache;
  const index = new Map<string, string>();

  const walk = (dir: string, prefix = ""): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return; // public/slike existiert noch nicht — völlig in Ordnung
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(join(dir, entry.name), `${prefix}${entry.name}/`);
        continue;
      }
      const ext = extname(entry.name).toLowerCase();
      if (!EXTENSIONS.includes(ext)) continue;
      const key = `${prefix}${entry.name.slice(0, -ext.length)}`;
      // Erste passende Endung gewinnt (Reihenfolge von EXTENSIONS).
      if (!index.has(key)) index.set(key, `/slike/${prefix}${entry.name}`);
    }
  };

  walk(ROOT);
  cache = index;
  return index;
}

export type ResolvedImage =
  | {
      readonly status: "real";
      readonly src: string;
      readonly alt: string;
      readonly aspect: AspectRatio;
      readonly priority: boolean;
      readonly sizes?: string;
    }
  | {
      readonly status: "placeholder";
      readonly id: string;
      readonly alt: string;
      readonly aspect: AspectRatio;
      readonly hint: string;
      readonly source: AssetSource;
    };

/**
 * Seitenverhältnis einer vorhandenen Datei: die echten Pixelmasse gewinnen,
 * der Manifest-Wert ist nur noch Rückfallebene.
 *
 * Das ist die zentrale Stelle, an der aus einer Absicht („dieser Slot soll
 * 4/3 werden") eine Tatsache wird („die Datei ist 1000×1000"). Vorher hat
 * jede Box die Manifest-Ratio gesetzt und object-cover den Unterschied
 * weggeschnitten — auf den Karten (siehe ProductCard.tsx) und, unbemerkt
 * mitkorrigiert-nicht-worden, auf dem Hauptbild der Detailseite.
 *
 * Folge fürs Weiterarbeiten: ein neues Foto von Zoran wird automatisch
 * richtig dargestellt, egal in welchem Format es kommt. Der Manifest-Wert
 * beschreibt weiter den WUNSCH und reserviert die Fläche, solange nur der
 * Platzhalter steht — er ist damit kein toter Wert, aber auch keine
 * Behauptung mehr über eine Datei, die er nicht kennt.
 */
function realAspect(src: string, fallback: AspectRatio): AspectRatio {
  const size = intrinsicSize(join(process.cwd(), "public", src.replace(/^\//, "")));
  return size ? aspectFromSize(size) : fallback;
}

export function resolveImage(id: ImageId): ResolvedImage {
  const entry = imageEntries[id];
  const src = assetIndex().get(entry.id);

  if (src) {
    return {
      status: "real",
      src,
      alt: entry.alt,
      aspect: realAspect(src, entry.aspect),
      priority: entry.priority ?? false,
      sizes: entry.sizes,
    };
  }

  return {
    status: "placeholder",
    id: entry.id,
    alt: entry.alt,
    aspect: entry.aspect,
    hint: entry.hint,
    source: entry.source,
  };
}

/**
 * Nummerierte Galerie-Extras: public/slike/<id>/02.jpg, 03.jpg …
 * Dadurch braucht das Ablegen von zehn Fotos in einem Ordner keinen
 * einzigen Manifest-Eintrag.
 */
export function resolveGalleryExtras(id: ImageId): { src: string; alt: string }[] {
  const entry = imageEntries[id];
  const template = entry.altTemplate;
  if (!template) return [];

  const folder = entry.id.replace(/\/[^/]+$/, "");
  const out: { src: string; alt: string }[] = [];

  for (const [key, src] of assetIndex()) {
    if (!key.startsWith(`${folder}/`)) continue;
    if (key === entry.id) continue;
    const name = key.slice(folder.length + 1);
    if (!/^\d+$/.test(name)) continue;
    out.push({ src, alt: template.replace("{n}", String(Number(name))) });
  }

  return out.sort((a, b) => a.src.localeCompare(b.src, "hr"));
}

/** Für scripts/report-placeholders.ts. */
export function listMissingImages(): {
  id: string;
  hint: string;
  source: AssetSource;
  expectedPath: string;
}[] {
  return Object.values(imageEntries)
    .filter((e) => !assetIndex().has(e.id))
    .map((e) => ({
      id: e.id,
      hint: e.hint,
      source: e.source,
      expectedPath: `public/slike/${e.id}.(jpg|webp|avif|png|svg)`,
    }));
}
