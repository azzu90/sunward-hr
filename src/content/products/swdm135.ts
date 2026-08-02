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
export const swdm135 = {
  slug: "swdm135",
  name: "SWDM 135",
  fullName: "Sunward SWDM 135",
  category: "busace-garniture",
  group: "busace-garniture-sve",
  order: 20,

  price: { kind: "onRequest" },

  intro:
    "Garnitura od 39 tona s promjerom bušenja do 1.500 mm i snagom od 186 kW — dvostruko jači pogon od SWDM 85 uz znatno veći kapacitet.",

  description: {
    heading: "Sunward SWDM 135 bušača garnitura",
    paragraphs: [
      "Skok na 186 kW omogućuje rad u tvrđim tlima i na većim dubinama bez gubitka brzine napredovanja. Promjer do 1.500 mm pokriva standardne pilote za mostove, industrijske objekte i visokogradnju.",
      "Za izvođače koji pilotiranje rade kao osnovnu djelatnost ovo je najčešća polazna veličina. Dostupnost dijelova i servisni odziv pokrivamo iz Karlovca za cijelu Hrvatsku.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "39.000 kg", n: 39000, unitCode: "KGM" },
    { key: "power", value: "186 kW" },
    { key: "drillDiameter", value: "1.500 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "39.000 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "186 kW",
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
          drillDiameter: "1.500 mm",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swdm135/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWDM 135"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWDM 135"),

  related: ["swdm85", "swdm165s"],
} as const satisfies ProductModel;
