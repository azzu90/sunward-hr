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
export const swsl0607dc = {
  slug: "swsl0607dc",
  name: "SWSL 0607DC",
  fullName: "Sunward SWSL 0607DC",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-elektricni",
  order: 20,

  price: { kind: "onRequest" },

  intro:
    "Radna visina 6,5 metara uz istu širinu od 0,76 metra i istu masu kao model 0607DC-S — gotovo metar više dosega bez ikakvog gubitka u prolaznosti.",

  description: {
    heading: "Sunward SWSL 0607DC škarasto dizalo",
    paragraphs: [
      "Kad je posao na visini stropa hale ili na drugoj etaži, dodatni metar odlučuje hoće li se raditi s platforme ili s ljestava. SWSL 0607DC zadržava sve gabarite manjeg modela i dolazi na ista mjesta.",
      "Za održavanje rasvjete, instalacija i klimatizacije u zatvorenim objektima ovo je najčešće tražena konfiguracija.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "6,5 m" },
    { key: "platformCapacity", value: "240 kg" },
    { key: "width", value: "0,76 m" },
    { key: "operatingWeight", value: "900 kg", n: 900, unitCode: "KGM" },
    { key: "driveType", value: "Električni" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "900 kg",
          width: "0,76 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Električni",
        }),
        ...tbdRows(
          {
            travelSpeed: "—",
            gradeability: "—",
          },
          ASK,
        ),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          workingHeight: "6,5 m",
          platformCapacity: "240 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing"],

  gallery: { main: "proizvodi/swsl0607dc/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 0607DC"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 0607DC"),

  related: ["swsl0607dc-s", "swsl0807dc"],
} as const satisfies ProductModel;
