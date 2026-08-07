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
 *
 * Die Zeilen in `datasheet` stammen aus der sunward.eu-Recherche (Brochure-PDF
 * bzw. Produktseite je Modell). Bestätigte Werte wurden dabei nicht angetastet.
 */
export const swe155fw = {
  slug: "swe155fw",
  name: "SWE 155FW",
  fullName: "Sunward SWE 155FW",
  category: "bageri",
  group: "kotacni-bageri",
  order: 170,

  price: { kind: "eur", amount: 132000, tax: "net" },

  intro:
    "Jedini kotačni bager u programu. Prelazi između radilišta vlastitim pogonom po asfaltu, bez prikolice i bez oštećivanja podloge — presudno za komunalne službe i održavanje cesta.",

  description: {
    heading: "Sunward SWE 155FW kotačni bager",
    paragraphs: [
      "Kotačna izvedba mijenja ekonomiku posla: stroj koji sam dolazi na lokaciju ne troši dan na transport i ne traži vučno vozilo. Za održavanje cesta, vodovodne intervencije i radove raspoređene po više lokacija to je odlučujuća prednost.",
      "Sa 115 kW SWE 155FW je i najjači stroj u petnaesttonskom razredu programa. Stabilizatori i nož osiguravaju stabilnost pri kopanju usprkos kotačnoj šasiji.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "14.700–15.400 kg", n: 14700, unitCode: "KGM" },
    { key: "power", value: "115 kW" },
    { key: "diggingDepth", value: "5.100 mm" },
    { key: "width", value: "2.515 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "14.700–15.400 kg",
          bucketCapacity: "0,6 m³",
          width: "2.515 mm",
          shippingLength: "8.585 mm",
          heightOverCabin: "3.150 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins F3.8",
          emission: "EU Stage V",
          displacement: "3,8 l",
          power: "115 kW",
          ratedSpeed: "2.200 o/min",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Positive Flow sustav",
        }),
        ...tbdRows(
          {
            pumpFlow: "—",
            hydraulicPressure: "—",
          },
          ASK,
        ),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "5.100 mm",
          diggingReach: "8.610 mm",
          bucketForce: "100 kN",
          armForce: "84 kN",
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

  gallery: { main: "proizvodi/swe155fw/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 155FW"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 155FW"),

  related: ["swe155f", "swe155uf"],
} as const satisfies ProductModel;
