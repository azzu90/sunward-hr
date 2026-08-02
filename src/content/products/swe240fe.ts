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
export const swe240fe = {
  slug: "swe240fe",
  name: "SWE 240FE",
  fullName: "Sunward SWE 240FE",
  category: "bageri",
  group: "srednji-bageri",
  order: 200,
  electric: true,

  price: { kind: "onRequest" },

  intro:
    "Baterijski bager od 23 tone — puni dvadesettonski učinak bez ispušnih plinova. Namijenjen rudarskim halama, tunelima i radilištima s nultom tolerancijom na emisije.",

  description: {
    heading: "Sunward SWE 240FE električni bager",
    paragraphs: [
      "Elektrifikacija u ovoj klasi rješava probleme koje dizel ne može: rad u zatvorenim pogonima, ispod razine terena i u prostorima gdje bi ventilacija ispuha bila skuplja od samog stroja. Sa 132 kW stroj ne zaostaje za dizelskim ekvivalentom.",
      "Troškovi pogona po satu su niži, a održavanje jednostavnije — nema sustava naknadne obrade ispušnih plinova ni redovite izmjene motornog ulja. Konfiguraciju baterije i način punjenja planiramo prema vašem režimu rada.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "Bez emisija — električni pogon" },
    { key: "operatingWeight", value: "23.360 kg", n: 23360, unitCode: "KGM" },
    { key: "power", value: "132 kW" },
    { key: "diggingDepth", value: "6.750 mm" },
    { key: "width", value: "2.984 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "23.360 kg",
          width: "2.984 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "Bez emisija — električni pogon",
          engineModel: "Trofazni asinkroni elektromotor",
          batteryType: "Litij-ionska baterija",
          power: "132 kW",
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
          diggingDepth: "6.750 mm",
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

  gallery: { main: "proizvodi/swe240fe/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 240FE"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 240FE"),

  related: ["swe215f-5a", "swe335f-5"],
} as const satisfies ProductModel;
