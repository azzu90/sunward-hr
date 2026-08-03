import { site } from "./site";

/**
 * Kuratierte Langtexte für die zwei neuen Homepage-Sektionen
 * (ANALYSIS.md §2, Nachzügler-Sammel-Phase): "Zašto Sunward?" und die
 * Überschrift des Kategorien-Grids.
 *
 * Eigenständig formuliert, keine Übersetzung von sunward.eu — dort heissen
 * die vier USP-Kacheln laut ANALYSIS.md §2 "European HQ 24h-Lieferung /
 * Premium Components / Best Value for Money / 5-Jahres-Garantie". Die
 * 5-Jahres-Garantie ist für sunward.hr schlicht falsch (bestätigt sind
 * 3 Jahre / 5.000 h, siehe site.warranty) — deshalb eigene Themen statt
 * Übersetzung.
 */
export const home = {
  categoriesHeading: "Naši proizvodi",

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
