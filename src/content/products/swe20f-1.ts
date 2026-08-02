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
export const swe20f1 = {
  slug: "swe20f-1",
  name: "SWE 20F-1",
  fullName: "Sunward SWE 20F-1",
  category: "bageri",
  group: "mini-bageri",
  order: 50,

  price: { kind: "onRequest" },

  intro:
    "Dvotonski razred, klasična izvedba s punim protuutegom. Stabilniji od lakših modela pri radu s punom žlicom na dosegu, uz istu mogućnost prolaza kroz uske prolaze.",

  description: {
    heading: "Sunward SWE 20F-1 mini bager",
    paragraphs: [
      "SWE 20F-1 je izbor za one kojima je stabilnost važnija od minimalnog gabarita. Uz 1.910 kg radne mase i 2.260 mm dubine kopanja pokriva iste poslove kao SWE 17F, ali mirnije radi na dosegu i pri podizanju tereta.",
      "Sužavajuće gusjenice zadržavaju prolaznost od 990 mm. Za novootvorene firme rješavamo financiranje uz 30% učešća, a stroj je pokriven garancijom do 3 godine ili 5.000 radnih sati.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "1.910 kg", n: 1910, unitCode: "KGM" },
    { key: "power", value: "13,4 kW" },
    { key: "diggingDepth", value: "2.260 mm" },
    { key: "width", value: "990–1.360 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.910 kg",
          width: "990–1.360 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "13,4 kW",
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
          diggingDepth: "2.260 mm",
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

  gallery: { main: "proizvodi/swe20f-1/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 20F-1"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 20F-1"),

  related: ["swe18uf", "swe25f"],
} as const satisfies ProductModel;
