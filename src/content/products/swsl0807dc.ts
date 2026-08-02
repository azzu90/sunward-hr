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
export const swsl0807dc = {
  slug: "swsl0807dc",
  name: "SWSL 0807DC",
  fullName: "Sunward SWSL 0807DC",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-elektricni",
  order: 30,

  price: { kind: "onRequest" },

  intro:
    "Osam metara radne visine uz nepromijenjenu širinu od 0,76 metra. Najviši doseg koji Sunward nudi u uskoj izvedbi.",

  description: {
    heading: "Sunward SWSL 0807DC škarasto dizalo",
    paragraphs: [
      "SWSL 0807DC zadržava prolaznost kroz standardna vrata, ali doseže visine koje traže veće hale i dvoetažni prostori. Masa raste na 1.545 kg, pa treba provjeriti nosivost podloge pri radu na katovima.",
      "Nosivost košare od 230 kg i električni pogon ostaju na razini manjih modela u seriji.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "8 m" },
    { key: "platformCapacity", value: "230 kg" },
    { key: "width", value: "0,76 m" },
    { key: "operatingWeight", value: "1.545 kg", n: 1545, unitCode: "KGM" },
    { key: "driveType", value: "Električni" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.545 kg",
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
          workingHeight: "8 m",
          platformCapacity: "230 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing"],

  gallery: { main: "proizvodi/swsl0807dc/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 0807DC"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 0807DC"),

  related: ["swsl0607dc", "swsl1008dc"],
} as const satisfies ProductModel;
