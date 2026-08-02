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
export const swdm85 = {
  slug: "swdm85",
  name: "SWDM 85",
  fullName: "Sunward SWDM 85",
  category: "busace-garniture",
  group: "busace-garniture-sve",
  order: 10,

  price: { kind: "onRequest" },

  intro:
    "Ulazna rotacijska bušača garnitura: 28 tona radne mase i promjer bušenja do 1.200 mm. Namijenjena temeljenju objekata i manjim geotehničkim zahvatima.",

  description: {
    heading: "Sunward SWDM 85 bušača garnitura",
    paragraphs: [
      "SWDM 85 je najmanja garnitura u programu i time najlakša za transport i postavljanje na radilište. Za temelje zgrada, potporne zidove i sanacije klizišta pokriva najveći dio traženih promjera i dubina.",
      "Rotacijsko bušenje s kelly šipkom omogućuje rad u različitim tlima bez zamjene sustava. Garniture ove veličine najčešće se uzimaju kad se pilotiranje radi povremeno, uz ostale građevinske poslove.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "28.000 kg", n: 28000, unitCode: "KGM" },
    { key: "power", value: "90 kW" },
    { key: "drillDiameter", value: "1.200 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "28.000 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "90 kW",
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
          drillDiameter: "1.200 mm",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swdm85/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWDM 85"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWDM 85"),

  related: ["swdm135", "swdm165s"],
} as const satisfies ProductModel;
