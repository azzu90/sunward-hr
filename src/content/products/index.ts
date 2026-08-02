import "server-only";

import { categories } from "../taxonomy";
import type { CategorySlug, GroupSlug, ProductModel } from "../types";
import { swe08f } from "./swe08f";
import { swe335f } from "./swe335f";
import { swl2830 } from "./swl2830";

/**
 * Produkt-Registry.
 *
 * `import "server-only"` verhindert, dass die vollständige Modell-Registry
 * versehentlich in ein Client-Bundle gezogen wird.
 *
 * Phase 1 enthält bewusst nur drei Seeds. Sie decken die drei Fälle ab,
 * an denen sich die Architektur beweisen muss:
 *   - SWE08F   Zahlenpreis, Bagger-Spec-Set
 *   - SWE335F  „Na upit", kein Offer im Schema
 *   - SWL2830  andere Kategorie, anderes Kurzspec-Set, performance-Block
 *
 * Phase 2 fügt die restlichen 19 Modelle hinzu und fasst sonst nichts an.
 */

/**
 * Prüft beim Build, dass jedes Modell exakt die fünf Kurzspecs und die
 * Datenblatt-Blöcke seiner Kategorie liefert — in der richtigen
 * Reihenfolge. Das gibt der Massen-Dateneingabe in Phase 2 ein hartes
 * Geländer, ohne eine Test-Dependency einzuführen.
 */
function assertContract(p: ProductModel): ProductModel {
  const category = categories[p.category];

  const wantSpecs = category.shortSpecKeys;
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

export const products: readonly ProductModel[] = [swe08f, swe335f, swl2830]
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
