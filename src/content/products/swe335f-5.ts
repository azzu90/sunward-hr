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
export const swe335f5 = {
  slug: "swe335f-5",
  name: "SWE 335F-5",
  fullName: "Sunward SWE 335F-5",
  category: "bageri",
  group: "veliki-bageri",
  order: 210,

  price: { kind: "onRequest" },

  intro:
    "Najveći bager u programu: 33,6 tona i 209 kW. Stroj za kamenolome, velike zemljane radove i kontinuirani utovar na najvišoj razini učinka.",

  description: {
    heading: "Sunward SWE 335F-5 veliki bager",
    paragraphs: [
      "U ovom razredu stroj se ne kupuje za povremeni posao nego kao proizvodna jedinica. Sa 209 kW SWE 335F-5 drži ciklus utovara bez pada snage i radi s najtežim priključcima — velikim čekićem, škarama za rušenje i sortirnim hvataljkama.",
      "Dubina kopanja od preko sedam metara pokriva najveće iskope. Za strojeve ove veličine servisni odziv i dostupnost dijelova odlučuju o isplativosti — oboje pokrivamo iz Karlovca za cijelu Hrvatsku.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "33.600 kg", n: 33600, unitCode: "KGM" },
    { key: "power", value: "209 kW" },
    { key: "diggingDepth", value: "7.010 mm" },
    { key: "width", value: "3.190 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "33.600 kg",
          bucketCapacity: "1,7 m³",
          width: "3.190 mm",
          shippingLength: "10.866 mm",
          heightOverCabin: "3.600 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins B6.7-129-SV",
          emission: "EU Stage V",
          displacement: "6,7 l",
          power: "209 kW",
          ratedSpeed: "2.000 o/min",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Sustav velikog protoka",
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
          diggingDepth: "7.010 mm",
          diggingReach: "10.570 mm",
          bucketForce: "214 kN",
          armForce: "165 kN",
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

  gallery: { main: "proizvodi/swe335f-5/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 335F-5"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 335F-5"),

  related: ["swe240fe", "swe215f-5a"],
} as const satisfies ProductModel;
