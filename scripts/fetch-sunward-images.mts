/**
 * Lädt Produkt- und Unterkategorie-Kachelbilder von sunward.eu herunter.
 *
 * Läuft über Nodes eigenes Type-Stripping (--experimental-strip-types),
 * genau wie report-placeholders.mts — kein Build-Schritt, keine neue
 * Dependency (`fetch` ist ab Node 22 global verfügbar).
 *
 *   npm run fetch-images
 *
 * Slug-Mapping unten ist das Ergebnis einer Live-Recherche (jede URL
 * einzeln per Fetch bestätigt), keine Ableitungsregel — sunward.eu fügt
 * bei den meisten Modellen einen Bindestrich vor der ersten Ziffer ein,
 * aber fünf Modelle (SWTH 3507, SWE 215F-5A, SWE 335F-5, SWDM 165S,
 * SWDM 215S) weichen davon ab. Deshalb hier eine feste Liste statt einer
 * Transformationsfunktion.
 *
 * Kategorie-Heroes (8, 21:9) werden bewusst NICHT heruntergeladen: die
 * echten sunward.eu-Kategorieseiten haben kein Hero-Bild, nur ein
 * Produktraster. Das einzige verfügbare Bildmaterial dafür sind dieselben
 * quadratischen Icons wie bei den Unterkategorie-Kacheln — falsches Format
 * für den 21:9-Slot, deshalb ausgelassen (siehe ASSUMPTIONS.md).
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";

const UA = "Mozilla/5.0 (compatible; sunward.hr-image-sync/1.0)";
const DELAY_MS = 500;

/* ════════════════════════════════════════════════════════════════════════
   1. Produktbilder — 51 Modelle
   ════════════════════════════════════════════════════════════════════════ */

const MODELS: readonly { slug: string; sunwardSlug: string }[] = [
  { slug: "sl06w", sunwardSlug: "sl-06w" },
  { slug: "sl12w", sunwardSlug: "sl-12w" },
  { slug: "swa16j", sunwardSlug: "swa-16j" },
  { slug: "swa16je", sunwardSlug: "swa-16je" },
  { slug: "swa18je-p", sunwardSlug: "swa-18je-p" },
  { slug: "swa22je-p", sunwardSlug: "swa-22je-p" },
  { slug: "swdm135", sunwardSlug: "swdm-135" },
  { slug: "swdm165s", sunwardSlug: "swdm-165" },
  { slug: "swdm215s", sunwardSlug: "swdm-215" },
  { slug: "swdm245", sunwardSlug: "swdm-245" },
  { slug: "swdm325", sunwardSlug: "swdm-325" },
  { slug: "swdm415", sunwardSlug: "swdm-415" },
  { slug: "swdm85", sunwardSlug: "swdm-85" },
  { slug: "swe08f", sunwardSlug: "swe-08f" },
  { slug: "swe10fe", sunwardSlug: "swe-10fe" },
  { slug: "swe155f", sunwardSlug: "swe-155f" },
  { slug: "swe155fw", sunwardSlug: "swe-155fw" },
  { slug: "swe155uf-2pb", sunwardSlug: "swe-155uf-2pb" },
  { slug: "swe155uf", sunwardSlug: "swe-155uf" },
  { slug: "swe17f", sunwardSlug: "swe-17f" },
  { slug: "swe18uf", sunwardSlug: "swe-18uf" },
  { slug: "swe20f-1", sunwardSlug: "swe-20f-1" },
  { slug: "swe20fe", sunwardSlug: "swe-20fe" },
  { slug: "swe215f-5a", sunwardSlug: "swe-215f-2" },
  { slug: "swe225fn", sunwardSlug: "swe-225fn" },
  { slug: "swe240fe", sunwardSlug: "swe-240fe" },
  { slug: "swe25f", sunwardSlug: "swe-25f" },
  { slug: "swe25uf", sunwardSlug: "swe-25uf" },
  { slug: "swe335f-5", sunwardSlug: "swe-335f" },
  { slug: "swe35uf", sunwardSlug: "swe-35uf" },
  { slug: "swe50uf", sunwardSlug: "swe-50uf" },
  { slug: "swe60uf", sunwardSlug: "swe-60uf" },
  { slug: "swe90uf-2pb", sunwardSlug: "swe-90uf-2pb" },
  { slug: "swe90uf", sunwardSlug: "swe-90uf" },
  { slug: "swl2830", sunwardSlug: "swl-2830" },
  { slug: "swl3230", sunwardSlug: "swl-3230" },
  { slug: "swl4038", sunwardSlug: "swl-4038" },
  { slug: "swsl0607dc-s", sunwardSlug: "swsl-0607dc-s" },
  { slug: "swsl0607dc", sunwardSlug: "swsl-0607dc" },
  { slug: "swsl0807dc", sunwardSlug: "swsl-0807dc" },
  { slug: "swsl1008dc", sunwardSlug: "swsl-1008dc" },
  { slug: "swsl1212dc", sunwardSlug: "swsl-1212dc" },
  { slug: "swsl1223rt", sunwardSlug: "swsl-1223rt" },
  { slug: "swsl1412dc", sunwardSlug: "swsl-1412dc" },
  { slug: "swsl1623rt", sunwardSlug: "swsl-1623rt" },
  { slug: "swsl2023rt", sunwardSlug: "swsl-2023rt" },
  { slug: "swtc10", sunwardSlug: "swtc-10" },
  { slug: "swtc5d", sunwardSlug: "swtc-5d" },
  { slug: "swth3507", sunwardSlug: "swth3507" },
  { slug: "swtl4538", sunwardSlug: "swtl-4538" },
  { slug: "swtl5238", sunwardSlug: "swtl-5238" },
];

/* ════════════════════════════════════════════════════════════════════════
   2. Unterkategorie-Kacheln — 9 Gruppen
   ════════════════════════════════════════════════════════════════════════
   Direkte URLs von sunward.eu/products/, dort als freigestellte Icons für
   genau diese Untergruppen gelistet. */

const TILES: readonly { id: string; url: string }[] = [
  {
    id: "kategorije/bageri/grupe/kotacni-bageri/tile",
    url: "https://sunward.eu/wp-content/uploads/2023/09/SUNWARD-Wheeled-Excavator.png",
  },
  {
    id: "kategorije/bageri/grupe/mini-bageri/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Mini-Excavators.png",
  },
  {
    id: "kategorije/bageri/grupe/kompaktni-bageri/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Compact-Excavators.png",
  },
  {
    id: "kategorije/bageri/grupe/srednji-bageri/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Medium-Excavators.png",
  },
  {
    id: "kategorije/bageri/grupe/veliki-bageri/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Large-Excavators-1.png",
  },
  {
    id: "kategorije/utovarivaci/grupe/gusjenicni-utovarivaci/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Compact-track-loaders.png",
  },
  {
    id: "kategorije/utovarivaci/grupe/kotacni-mini-utovarivaci/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Skid-steer-loaders.png",
  },
  {
    id: "kategorije/skarasti-podizni-strojevi/grupe/skarasti-elektricni/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Electric-Driven-Scissor-Lifts.png",
  },
  {
    id: "kategorije/skarasti-podizni-strojevi/grupe/skarasti-terenski/tile",
    url: "https://sunward.eu/wp-content/uploads/2022/01/SUNWARD-Rough-Terrain-Scissor-Lifts.png",
  },
];

/* ════════════════════════════════════════════════════════════════════════
   3. Download-Logik
   ════════════════════════════════════════════════════════════════════════ */

const ROOT = join(process.cwd(), "public", "slike");

type Result = { id: string; status: "ok" | "skipped"; detail: string };

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extFromUrl(url: string): string {
  const ext = extname(new URL(url).pathname).toLowerCase();
  return ext || ".jpg";
}

async function fetchOgImage(pageUrl: string): Promise<string | null> {
  const res = await fetch(pageUrl, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const match = html.match(/<meta property="og:image" content="([^"]+)"/);
  return match?.[1] ?? null;
}

async function downloadTo(imageUrl: string, destWithoutExt: string): Promise<string> {
  const res = await fetch(imageUrl, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const dest = `${destWithoutExt}${extFromUrl(imageUrl)}`;
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, buffer);
  return dest;
}

async function run(): Promise<void> {
  const results: Result[] = [];

  for (const { slug, sunwardSlug } of MODELS) {
    const pageUrl = `https://sunward.eu/product/${sunwardSlug}/`;
    try {
      const ogImage = await fetchOgImage(pageUrl);
      if (!ogImage) {
        results.push({ id: slug, status: "skipped", detail: `nema og:image na ${pageUrl}` });
      } else {
        const dest = await downloadTo(ogImage, join(ROOT, "proizvodi", slug, "glavna"));
        results.push({ id: slug, status: "ok", detail: dest });
      }
    } catch (err) {
      results.push({ id: slug, status: "skipped", detail: `${pageUrl} — ${String(err)}` });
    }
    await sleep(DELAY_MS);
  }

  for (const { id, url } of TILES) {
    try {
      const dest = await downloadTo(url, join(ROOT, id));
      results.push({ id, status: "ok", detail: dest });
    } catch (err) {
      results.push({ id, status: "skipped", detail: `${url} — ${String(err)}` });
    }
    await sleep(DELAY_MS);
  }

  const ok = results.filter((r) => r.status === "ok");
  const skipped = results.filter((r) => r.status === "skipped");

  console.log(`\n# Preuzimanje slika sa sunward.eu\n`);
  console.log(`Preuzeto: ${ok.length}/${results.length}\n`);
  for (const r of ok) console.log(`  ✓ ${r.id} → ${r.detail}`);

  if (skipped.length > 0) {
    console.log(`\nPreskočeno (${skipped.length}) — provjeriti ručno:\n`);
    for (const r of skipped) console.log(`  ✗ ${r.id} — ${r.detail}`);
  }
}

await run();
