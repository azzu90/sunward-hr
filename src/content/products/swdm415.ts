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
export const swdm415 = {
  slug: "swdm415",
  name: "SWDM 415",
  fullName: "Sunward SWDM 415",
  category: "busace-garniture",
  group: "busace-garniture-sve",
  order: 70,

  price: { kind: "onRequest" },

  intro:
    "Najveća garnitura u programu: 134 tone i 410 kW. Vrh Sunward ponude za temeljenje, namijenjen najvećim projektima.",

  description: {
    heading: "Sunward SWDM 415 bušača garnitura",
    paragraphs: [
      "SWDM 415 je stroj za projekte na kojima je dubina temeljenja kritični put cijele gradnje. Sa 410 kW zadržava brzinu bušenja i u najtežim uvjetima, na promjerima do 2.500 mm.",
      "Transport i montaža garniture ove mase planiraju se kao zaseban dio projekta. Uvjete isporuke i puštanja u rad dogovaramo pojedinačno.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "134.000 kg", n: 134000, unitCode: "KGM" },
    { key: "power", value: "410 kW" },
    { key: "drillDiameter", value: "2.500 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "134.000 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "410 kW",
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
          drillDiameter: "2.500 mm",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swdm415/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWDM 415"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWDM 415"),

  related: ["swdm325", "swdm245"],
} as const satisfies ProductModel;
