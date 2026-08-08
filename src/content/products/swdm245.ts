import { rows, tbd, tbdRows } from "../placeholder";
import type { ProductModel } from "../types";

const ASK = "Potvrditi iz službenog Sunward datasheeta";

/**
 * Lesart dieser Datei: die Kurzspecs sind BESTÄTIGTE Werte aus
 * ANALYSIS.md §9, direkt von sunward.eu übernommen.
 *
 * Was in tbd() steht, liegt dort NICHT vor. Es sind keine geschätzten
 * Zahlen — die Felder warten auf das offizielle Sunward-Datenblatt und
 * sind über `npm run report` auffindbar.
 *
 * Der Preis steht bei allen Modellen aus (PRD §16) und erscheint bis dahin
 * als „Cijena na upit".
 */
export const swdm245 = {
  slug: "swdm245",
  name: "SWDM 245",
  fullName: "Sunward SWDM 245",
  category: "busace-garniture",
  group: "busace-garniture-sve",
  order: 50,

  price: { kind: "onRequest" },

  intro:
    "Garnitura od 78 tona s promjerom bušenja do 2.000 mm — prvi stroj u programu koji izlazi iz standardnih promjera pilota.",

  description: {
    heading: "Sunward SWDM 245 bušača garnitura",
    paragraphs: [
      "Promjer do 2.000 mm otvara projekte velikih temeljnih pilota: mostovni stupovi, visoke građevine i objekti na slabo nosivom tlu. Masa od 78 tona osigurava stabilnost pri tim promjerima.",
      "Pogon od 252 kW dijeli sa SWDM 215S, ali s bitno većim kapacitetom bušenja. Konfiguraciju kelly sustava usklađujemo s projektiranim dubinama.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "78.000 kg", n: 78000, unitCode: "KGM" },
    { key: "power", value: "252 kW" },
    { key: "drillDiameter", value: "2.000 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "78.000 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "252 kW",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: tbdRows(
        {
          hydraulicType: "—",
          pumpFlow: "—",
          hydraulicPressure: "—",
        },
        ASK,
      ),
    },
    {
      id: "performance",
      rows: [
        ...rows({
          drillDiameter: "2.000 mm",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swdm245/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWDM 245"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWDM 245"),

  related: ["swdm215s", "swdm325"],
} as const satisfies ProductModel;
