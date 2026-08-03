import type { CategorySlug, ImageId } from "./types";

/**
 * Welches Modellfoto eine Kategorie in den Kachel-Rastern vertritt
 * (Startseite „Naši proizvodi", Übersicht /proizvodi).
 *
 * Bewusst eine eigene Datei und KEIN Feld in `CategoryDef`: taxonomy.ts und
 * types.ts sind die Struktur des Katalogs, und types.ts trägt oben den
 * Hinweis, dass Änderungen daran die Massen-Dateneingabe entwerten. Ein rein
 * darstellerischer Verweis gehört nicht in diese Schicht — hier ist er
 * nachschlagbar und ändert nichts an der Taxonomie.
 *
 * Es sind vorhandene Produktfotos, nichts neu Geladenes: die Kategorie-Slots
 * `kategorije/<slug>/hero` bleiben unangetastet als offene 21:9-Plätze für
 * echte Gradilište-Aufnahmen von Zoran (siehe ASSUMPTIONS.md).
 *
 * Auswahlkriterium war jeweils ein Modell mittlerer Größe, das als kleine
 * Kachel noch erkennbar ist — kein Kran mit 16 m Ausleger, der zum Strich
 * schrumpft. Bageri nutzt denselben SWE 155F wie der Hero, das ist gewollt.
 */
export const categoryTiles = {
  bageri: "proizvodi/swe155f/glavna",
  utovarivaci: "proizvodi/swtl4538/glavna",
  "zglobni-utovarivaci": "proizvodi/sl12w/glavna",
  "busace-garniture": "proizvodi/swdm135/glavna",
  "zglobne-radne-platforme": "proizvodi/swa16je/glavna",
  "skarasti-podizni-strojevi": "proizvodi/swsl1223rt/glavna",
  "teleskopske-dizalice": "proizvodi/swtc10/glavna",
  "teleskopski-utovarivaci": "proizvodi/swth3507/glavna",
} as const satisfies Record<CategorySlug, ImageId>;
