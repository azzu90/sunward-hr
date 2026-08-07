import "server-only";

import { categories } from "../taxonomy";
import type { CategorySlug, GroupSlug, ProductModel } from "../types";
import { sl06w } from "./sl06w";
import { sl12w } from "./sl12w";
import { swa16j } from "./swa16j";
import { swa16je } from "./swa16je";
import { swa18jep } from "./swa18je-p";
import { swa22jep } from "./swa22je-p";
import { swdm135 } from "./swdm135";
import { swdm165s } from "./swdm165s";
import { swdm215s } from "./swdm215s";
import { swdm245 } from "./swdm245";
import { swdm325 } from "./swdm325";
import { swdm415 } from "./swdm415";
import { swdm85 } from "./swdm85";
import { swe08f } from "./swe08f";
import { swe10fe } from "./swe10fe";
import { swe155f } from "./swe155f";
import { swe155f5 } from "./swe155f-5";
import { swe155f5a } from "./swe155f-5a";
import { swe155fw } from "./swe155fw";
import { swe155uf } from "./swe155uf";
import { swe155uf2pb } from "./swe155uf-2pb";
import { swe18uf } from "./swe18uf";
import { swe20f1 } from "./swe20f-1";
import { swe20fe } from "./swe20fe";
import { swe215f5a } from "./swe215f-5a";
import { swe225fn } from "./swe225fn";
import { swe240fe } from "./swe240fe";
import { swe25uf } from "./swe25uf";
import { swe335f5 } from "./swe335f-5";
import { swe35uf } from "./swe35uf";
import { swe50uf } from "./swe50uf";
import { swe60uf } from "./swe60uf";
import { swe90uf } from "./swe90uf";
import { swe90uf2pb } from "./swe90uf-2pb";
import { swl2830 } from "./swl2830";
import { swl3230 } from "./swl3230";
import { swl4038 } from "./swl4038";
import { swsl0607dc } from "./swsl0607dc";
import { swsl0607dcs } from "./swsl0607dc-s";
import { swsl0807dc } from "./swsl0807dc";
import { swsl1008dc } from "./swsl1008dc";
import { swsl1212dc } from "./swsl1212dc";
import { swsl1223rt } from "./swsl1223rt";
import { swsl1412dc } from "./swsl1412dc";
import { swsl1623rt } from "./swsl1623rt";
import { swsl2023rt } from "./swsl2023rt";
import { swtc10 } from "./swtc10";
import { swtc5d } from "./swtc5d";
import { swth3507 } from "./swth3507";
import { swtl4538 } from "./swtl4538";
import { swtl5238 } from "./swtl5238";

/**
 * Produkt-Registry — 51 Modelle in acht Kategorien (ANALYSIS.md §8).
 *
 * `import "server-only"` verhindert, dass die vollständige Modell-Registry
 * versehentlich in ein Client-Bundle gezogen wird.
 */

/**
 * Prüft beim Build, dass jedes Modell exakt die Kurzspecs und die
 * Datenblatt-Blöcke seiner Kategorie liefert — in der richtigen Anzahl und
 * Reihenfolge. Das gibt der Massen-Dateneingabe ein hartes Geländer, ohne
 * eine Test-Dependency einzuführen.
 */
function assertContract(p: ProductModel): ProductModel {
  const category = categories[p.category];
  const wantSpecs = category.shortSpecKeys;

  if (p.shortSpecs.length !== wantSpecs.length) {
    throw new Error(
      `${p.slug}: ${p.shortSpecs.length} kratkih specifikacija, očekivano ${wantSpecs.length} ` +
        `(kategorija ${category.slug})`,
    );
  }

  p.shortSpecs.forEach((row, i) => {
    if (row.key !== wantSpecs[i]) {
      throw new Error(
        `${p.slug}: shortSpecs[${i}] je "${row.key}", očekivano "${wantSpecs[i]}" ` +
          `(kategorija ${category.slug})`,
      );
    }
  });

  const have = p.datasheet.map((b) => b.id).join(",");
  const want = category.datasheetBlocks.join(",");
  if (have !== want) {
    throw new Error(
      `${p.slug}: blokovi datasheeta su "${have}", očekivano "${want}" ` +
        `(kategorija ${category.slug})`,
    );
  }

  const group = category.groups.find((g) => g.slug === p.group);
  if (!group) {
    throw new Error(`${p.slug}: grupa "${p.group}" ne postoji u kategoriji ${category.slug}`);
  }

  return p;
}

export const products: readonly ProductModel[] = [
  sl06w,
  sl12w,
  swa16j,
  swa16je,
  swa18jep,
  swa22jep,
  swdm135,
  swdm165s,
  swdm215s,
  swdm245,
  swdm325,
  swdm415,
  swdm85,
  swe08f,
  swe10fe,
  swe155f,
  swe155f5,
  swe155f5a,
  swe155fw,
  swe155uf,
  swe155uf2pb,
  swe18uf,
  swe20f1,
  swe20fe,
  swe215f5a,
  swe225fn,
  swe240fe,
  swe25uf,
  swe335f5,
  swe35uf,
  swe50uf,
  swe60uf,
  swe90uf,
  swe90uf2pb,
  swl2830,
  swl3230,
  swl4038,
  swsl0607dc,
  swsl0607dcs,
  swsl0807dc,
  swsl1008dc,
  swsl1212dc,
  swsl1223rt,
  swsl1412dc,
  swsl1623rt,
  swsl2023rt,
  swtc10,
  swtc5d,
  swth3507,
  swtl4538,
  swtl5238,
]
  .map(assertContract)
  .sort((a, b) => a.order - b.order);

export function getProduct(category: string, slug: string): ProductModel | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function productsInCategory(category: CategorySlug): ProductModel[] {
  return products.filter((p) => p.category === category);
}

export function groupCounts(category: CategorySlug): Map<GroupSlug, number> {
  const counts = new Map<GroupSlug, number>();
  for (const p of productsInCategory(category)) {
    counts.set(p.group, (counts.get(p.group) ?? 0) + 1);
  }
  return counts;
}
