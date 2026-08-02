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
export const swe60uf = {
  slug: "swe60uf",
  name: "SWE 60UF",
  fullName: "Sunward SWE 60UF",
  category: "bageri",
  group: "kompaktni-bageri",
  order: 110,

  price: { kind: "onRequest" },

  intro:
    "Početak kompaktnog razreda kod Sunwarda: šest tona, 35 kW i dubina kopanja od 3.700 mm. Stroj za izvođače koji rade cijelu sezonu, a ne povremene zahvate.",

  description: {
    heading: "Sunward SWE 60UF kompaktni bager",
    paragraphs: [
      "SWE 60UF je namijenjen svakodnevnom radu u punoj smjeni. Šasija, hidraulika i rashlad dimenzionirani su za kontinuirano opterećenje, a ne za povremenu upotrebu — to je stvarna razlika između kompaktnog i mini razreda.",
      "Uz smanjeni pretek stroj je i dalje upotrebljiv uz objekte. Kombinacija dosega, mase i gabarita čini ga standardnim izborom za komunalne radove, infrastrukturu i pripremu terena.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "6.000 kg", n: 6000, unitCode: "KGM" },
    { key: "power", value: "35 kW" },
    { key: "diggingDepth", value: "3.700 mm" },
    { key: "width", value: "2.000 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "6.000 kg",
          width: "2.000 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "35 kW",
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
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "3.700 mm",
        }),
      ],
    },
  ],

  features: [
    "madeForEurope",
    "premiumComponents",
    "warranty",
    "financing",
    "bestValue",
    "fieldService",
    "localSupport",
  ],

  gallery: { main: "proizvodi/swe60uf/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 60UF"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 60UF"),

  related: ["swe50uf", "swe90uf"],
} as const satisfies ProductModel;
