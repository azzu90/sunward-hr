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
export const swe90uf = {
  slug: "swe90uf",
  name: "SWE 90UF",
  fullName: "Sunward SWE 90UF",
  category: "bageri",
  group: "kompaktni-bageri",
  order: 120,

  price: { kind: "onRequest" },

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
          width: "2.270 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "46,2 kW",
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
          diggingDepth: "4.545 mm",
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
