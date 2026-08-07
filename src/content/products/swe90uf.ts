import { rows, tbd } from "../placeholder";
import type { ProductModel } from "../types";

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
export const swe90uf = {
  slug: "swe90uf",
  name: "SWE 90UF",
  fullName: "Sunward SWE 90UF",
  category: "bageri",
  group: "kompaktni-bageri",
  order: 120,

  price: { kind: "eur", amount: 63000, tax: "net" },

  intro:
    "Bager od 8,75 tone s dubinom kopanja preko 4,5 metra. Razred u kojem se rade cjeloviti iskopi za objekte, a ne samo priprema i dorada.",

  description: {
    heading: "Sunward SWE 90UF kompaktni bager",
    paragraphs: [
      "S 46,2 kW i 4.545 mm dubine kopanja SWE 90UF ulazi u posao koji je dosad tražio znatno skuplji stroj: kompletni iskopi podruma, veći infrastrukturni rovovi i utovar na kamione bez ograničenja visine istovara.",
      "Smanjeni pretek zadržava se i u ovoj klasi, što stroj čini upotrebljivim u gradskoj jezgri. Komponente dolaze od Kubote, Cumminsa, BOSCH Rexrotha, EATON-a i KYB-a — isti dobavljači koje koriste zapadni proizvođači.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "8.750 kg", n: 8750, unitCode: "KGM" },
    { key: "power", value: "46,2 kW" },
    { key: "diggingDepth", value: "4.545 mm" },
    { key: "width", value: "2.270 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "8.750 kg",
          bucketCapacity: "0,26 m³",
          width: "2.270 mm",
          shippingLength: "6.495 mm",
          heightOverCabin: "2.735 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Yanmar 4TNV98C",
          emission: "EU Stage V",
          displacement: "3,3 l",
          power: "46,2 kW",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Jedna klipna pumpa s varijabilnim protokom",
          pumpFlow: "158,4 l/min",
          hydraulicPressure: "28 MPa",
        }),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "4.545 mm",
          diggingReach: "7.445 mm",
          bucketForce: "63,5 kN",
          armForce: "38 kN",
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

  gallery: { main: "proizvodi/swe90uf/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 90UF"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 90UF"),

  related: ["swe60uf", "swe90uf-2pb"],
} as const satisfies ProductModel;
