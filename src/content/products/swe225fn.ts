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
export const swe225fn = {
  slug: "swe225fn",
  name: "SWE 225FN",
  fullName: "Sunward SWE 225FN",
  category: "bageri",
  group: "srednji-bageri",
  order: 190,

  price: { kind: "onRequest" },

  intro:
    "Izvedba dvadesettonskog razreda s istim pogonskim sklopom kao SWE 215F-5A, prilagođena zahtjevnijim uvjetima rada i drukčijoj konfiguraciji opreme.",

  description: {
    heading: "Sunward SWE 225FN bager",
    paragraphs: [
      "Radna masa, snaga i doseg poklapaju se sa SWE 215F-5A — razlika je u izvedbi i opremljenosti stroja. Koja je konfiguracija prava za vaš posao, najbrže rješavamo u razgovoru o konkretnim radilištima.",
      "Za oba stroja vrijede iste garancije i isti servisni uvjeti: garancija do 3 godine ili 5.000 radnih sati te izlazak na teren u roku od 24 sata.",
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
          width: "2.800 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "129 kW",
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
          diggingDepth: "6.635 mm",
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

  gallery: { main: "proizvodi/swe225fn/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 225FN"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 225FN"),

  related: ["swe215f-5a", "swe240fe"],
} as const satisfies ProductModel;
