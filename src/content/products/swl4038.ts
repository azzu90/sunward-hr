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
export const swl4038 = {
  slug: "swl4038",
  name: "SWL 4038",
  fullName: "Sunward SWL 4038",
  category: "utovarivaci",
  group: "kotacni-mini-utovarivaci",
  order: 50,

  price: { kind: "onRequest" },

  intro:
    "Najveći kotačni mini utovarivač u programu: nosivost 1.300 kg i sila otkidanja od 3.385 kg. Kapacitet gusjeničnog stroja uz brzinu i jednostavnost kotača.",

  description: {
    heading: "Sunward SWL 4038 kotačni mini utovarivač",
    paragraphs: [
      "SWL 4038 dijeli silu otkidanja i visinu podizanja sa SWTL 4538, ali na kotačima — brži je pri premještanju i jeftiniji za održavanje kad se radi na tvrdoj podlozi. Za gradilišta s uređenim prilazima to je racionalniji izbor.",
      "Uz 55,4 kW i prevrtnu nosivost od 2.600 kg stroj pokriva utovar, transport materijala i rad sa svim standardnim priključcima iz naše ponude.",
    ],
  },

  shortSpecs: [
    { key: "ratedCapacity", value: "1.300 kg" },
    { key: "tippingLoad", value: "2.600 kg" },
    { key: "power", value: "55,4 kW" },
    { key: "operatingWeight", value: "3.650 kg", n: 3650, unitCode: "KGM" },
    { key: "liftHeight", value: "2.467 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "3.650 kg",
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
          ratedCapacity: "1.300 kg",
          tippingLoad: "2.600 kg",
          liftHeight: "2.467 mm",
          breakoutForce: "3.385 kg",
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

  gallery: { main: "proizvodi/swl4038/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWL 4038"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWL 4038"),

  related: ["swl3230", "swtl4538"],
} as const satisfies ProductModel;
