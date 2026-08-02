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
export const swe35uf = {
  slug: "swe35uf",
  name: "SWE 35UF",
  fullName: "Sunward SWE 35UF",
  category: "bageri",
  group: "mini-bageri",
  order: 90,

  price: { kind: "onRequest" },

  intro:
    "Bager od blizu četiri tone s dubinom kopanja od 3.320 mm. Granica na kojoj mini bager prestaje biti pomoćni stroj i postaje glavni stroj na gradilištu.",

  description: {
    heading: "Sunward SWE 35UF mini bager",
    paragraphs: [
      "SWE 35UF kopa temelje obiteljske kuće u jednom prolazu, bez etažiranja iskopa. Uz 18,2 kW i masu blizu 3,8 tone nosi teže priključke — veći hidraulički čekić, šumske škare i mulčer rade u punom kapacitetu.",
      "Smanjeni pretek zadržava upotrebljivost u skučenom prostoru unatoč većoj masi. Stroj se još uvijek prevozi standardnom prikolicom nosivosti 3,5 t uz odgovarajuću vučnu kombinaciju.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "3.750–3.850 kg", n: 3750, unitCode: "KGM" },
    { key: "power", value: "18,2 kW" },
    { key: "diggingDepth", value: "3.320 mm" },
    { key: "width", value: "1.700 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "3.750–3.850 kg",
          width: "1.700 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "18,2 kW",
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
          diggingDepth: "3.320 mm",
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

  gallery: { main: "proizvodi/swe35uf/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 35UF"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 35UF"),

  related: ["swe25uf", "swe50uf"],
} as const satisfies ProductModel;
