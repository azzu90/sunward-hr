import { site } from "./site";

/**
 * Kuratierte Langtexte für die zwei neuen Homepage-Sektionen
 * (ANALYSIS.md §2, Nachzügler-Sammel-Phase): "Zašto Sunward?" und die
 * Überschrift des Kategorien-Grids.
 *
 * Eigenständig formuliert, keine Übersetzung von sunward.eu — dort heissen
 * die vier USP-Kacheln laut ANALYSIS.md §2 "European HQ 24h-Lieferung /
 * Premium Components / Best Value for Money / 5-Jahres-Garantie" — deshalb
 * eigene Themen statt Übersetzung (Garantiedauer siehe site.warranty).
 */
export const home = {
  categoriesHeading: "Naši proizvodi",

  /**
   * Kuratierte Auswahl für „Istaknuti strojevi" — vorher lief die Sektion
   * über `products.map()` und zeigte damit alle 51 Modelle, was keine
   * Hervorhebung mehr ist, sondern ein zweiter Katalog.
   *
   * Sechs Einträge, weil das im Desktop-Raster (3 Spalten) genau zwei volle
   * Reihen sind. Zusammensetzung mit Absicht: drei Bagger-Gewichtsklassen
   * (mini/kompaktni/srednji) als kommerzieller Kern plus drei andere
   * Kategorien, damit die Breite des Programms sichtbar wird.
   *
   * Keines dieser sechs Fotos ist gleichzeitig Kategorie-Kachel
   * (category-tiles.ts) — sonst stünde dasselbe Bild zweimal auf der
   * Startseite. Ebenfalls geprüft: alle sechs liegen in 1000×1000 vor und
   * trugen kein eingebranntes NEW-Banner.
   */
  featuredSlugs: [
    "swe25uf", // mini bager — SEO-Fokus „mini bager cijena" (PRD §10)
    "swe60uf", // kompaktni bager — kommerzieller Kern für einen Händler
    "swe215f-5a", // srednji bager — macht „1 bis 34 t" glaubhaft
    "swl4038", // kotačni utovarivač
    "swsl0807dc", // električno škarasto dizalo
    "swa18je-p", // zglobna radna platforma
  ],

  whySunwardHeading: "Zašto Sunward?",

  whySunwardTiles: [
    {
      id: "program",
      headline: "Cijeli Sunward program",
      body: "51 model u 8 kategorija — bageri, utovarivači, platforme, bušače garniture i dodatna oprema iz jedne ruke.",
    },
    {
      id: "komponente",
      headline: "Provjerene komponente",
      body: `${site.componentBrands.join(", ")} — svjetski poznati proizvođači ugrađenih komponenti, ne nepoznate zamjene.`,
    },
    {
      id: "partner",
      headline: "Provjeren partner",
      body: `Dio grupe Hidraulika Drvošped, na tržištu od ${site.identifiers.registeredAt} — nismo posrednik koji sutra nestaje.`,
    },
    {
      id: "servis",
      headline: "Bez čekanja na servis",
      body: `Servis na terenu u roku od ${site.service.responseHours} sata, na području cijele Hrvatske — ne šaljemo vas prvo u radionicu.`,
    },
  ],
} as const;
