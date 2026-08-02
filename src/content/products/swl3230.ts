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
export const swl3230 = {
  slug: "swl3230",
  name: "SWL 3230",
  fullName: "Sunward SWL 3230",
  category: "utovarivaci",
  group: "kotacni-mini-utovarivaci",
  order: 40,

  price: { kind: "onRequest" },

  intro:
    "Kotačni mini utovarivač nosivosti 1.100 kg — srednja veličina programa, s dovoljno snage za kontinuirani rad i još uvijek kompaktnim gabaritom.",

  description: {
    heading: "Sunward SWL 3230 kotačni mini utovarivač",
    paragraphs: [
      "U odnosu na SWL 2830 nosivost raste za gotovo 50%, a snaga na 55,4 kW. To je razlika između stroja koji pomaže i stroja koji sam nosi posao — utovar, premještanje materijala i rad s priključcima kroz cijelu smjenu.",
      "Prevrtna nosivost od 2.200 kg omogućuje siguran rad s punom žlicom na visini istovara. Stroj ostaje dovoljno malen za rad u halama i između objekata.",
    ],
  },

  shortSpecs: [
    { key: "ratedCapacity", value: "1.100 kg" },
    { key: "tippingLoad", value: "2.200 kg" },
    { key: "power", value: "55,4 kW" },
    { key: "operatingWeight", value: "3.500 kg", n: 3500, unitCode: "KGM" },
    { key: "liftHeight", value: "2.395 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "3.500 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          power: "55,4 kW",
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
          ratedCapacity: "1.100 kg",
          tippingLoad: "2.200 kg",
          liftHeight: "2.395 mm",
          breakoutForce: "2.480 kg",
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

  gallery: { main: "proizvodi/swl3230/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWL 3230"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWL 3230"),

  related: ["swl2830", "swl4038"],
} as const satisfies ProductModel;
