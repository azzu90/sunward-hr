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
export const swsl1223rt = {
  slug: "swsl1223rt",
  name: "SWSL 1223RT",
  fullName: "Sunward SWSL 1223RT",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-terenski",
  order: 70,

  price: { kind: "onRequest" },

  intro:
    "Terensko škarasto dizalo nosivosti 1.200 kg — više nego četverostruko u odnosu na električne modele. Namijenjeno gradilištu, ne zatvorenom prostoru.",

  description: {
    heading: "Sunward SWSL 1223RT terensko škarasto dizalo",
    paragraphs: [
      "RT izvedba ima terenske gume, veći klirens i pogon na sve kotače, pa se kreće po neuređenom gradilištu bez pripreme podloge. Nosivost od 1.200 kg omogućuje podizanje materijala zajedno s radnicima.",
      "Širina od 2,39 metra i masa od 8,17 tone znače da stroj radi vani, na terenu — za rad u objektu služe električne izvedbe iz istog programa.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "12 m" },
    { key: "platformCapacity", value: "1.200 kg" },
    { key: "width", value: "2,39 m" },
    { key: "operatingWeight", value: "8.170 kg", n: 8170, unitCode: "KGM" },
    { key: "driveType", value: "Dizel / hidraulički" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "8.170 kg",
          width: "2,39 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Dizel / hidraulički",
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
          workingHeight: "12 m",
          platformCapacity: "1.200 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swsl1223rt/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 1223RT"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 1223RT"),

  related: ["swsl1623rt", "swsl1412dc"],
} as const satisfies ProductModel;
