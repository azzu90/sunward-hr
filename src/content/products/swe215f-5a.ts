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
export const swe215f5a = {
  slug: "swe215f-5a",
  name: "SWE 215F-5A",
  fullName: "Sunward SWE 215F-5A",
  category: "bageri",
  group: "srednji-bageri",
  order: 180,

  price: { kind: "onRequest" },

  intro:
    "Dvadesettonski razred: 21,8 tona, 129 kW i dubina kopanja od 6.635 mm. Stroj za velike zemljane radove, kamenolome i kontinuirani utovar.",

  description: {
    heading: "Sunward SWE 215F-5A bager",
    paragraphs: [
      "Na ovoj veličini stroj se bira po učinku po smjeni. SWE 215F-5A utovaruje kamion u tri do četiri ciklusa i drži tempo cijeli dan — hidraulika i rashladni sustav dimenzionirani su za puno opterećenje bez pada snage.",
      "Dubina kopanja preko 6,6 metara pokriva duboke temelje i velike infrastrukturne zahvate. Motor zadovoljava EU Stage V bez kompromisa u snazi.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "21.800 kg", n: 21800, unitCode: "KGM" },
    { key: "power", value: "129 kW" },
    { key: "diggingDepth", value: "6.635 mm" },
    { key: "width", value: "2.800 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "21.800 kg",
          bucketCapacity: "1,0 m³",
          width: "2.800 mm",
          shippingLength: "9.560 mm",
          heightOverCabin: "3.150 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins B6.7",
          emission: "EU Stage V",
          displacement: "6,7 l",
          power: "129 kW",
          ratedSpeed: "2.200 o/min",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Positive Flow sustav s glavnom pumpom 130 cm³",
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
          diggingDepth: "6.635 mm",
          diggingReach: "9.915 mm",
          bucketForce: "155 kN",
          armForce: "110 kN",
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

  gallery: { main: "proizvodi/swe215f-5a/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 215F-5A"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 215F-5A"),

  related: ["swe225fn", "swe240fe"],
} as const satisfies ProductModel;
