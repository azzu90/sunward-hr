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
export const swsl2023rt = {
  slug: "swsl2023rt",
  name: "SWSL 2023RT",
  fullName: "Sunward SWSL 2023RT",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-terenski",
  order: 90,

  price: { kind: "onRequest" },

  intro:
    "Najviše škarasto dizalo u programu: 20 metara radne visine. Najveći doseg koji škarasta konstrukcija nudi prije prelaska na zglobne platforme.",

  description: {
    heading: "Sunward SWSL 2023RT terensko škarasto dizalo",
    paragraphs: [
      "Dvadeset metara radne visine s velikom radnom platformom je konfiguracija koju zglobna strela ne može ponuditi — škarasta izvedba daje punu površinu za rad i materijal na svakoj visini.",
      "Nosivost pada na 545 kg zbog visine, ali ostaje dovoljna za dvojicu radnika s opremom. Radna masa od 10,4 tone traži provjeru pristupa i nosivosti terena.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "20 m" },
    { key: "platformCapacity", value: "545 kg" },
    { key: "width", value: "2,39 m" },
    { key: "operatingWeight", value: "10.380 kg", n: 10380, unitCode: "KGM" },
    { key: "driveType", value: "Dizel / hidraulički" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "10.380 kg",
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
          workingHeight: "20 m",
          platformCapacity: "545 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swsl2023rt/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 2023RT"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 2023RT"),

  related: ["swsl1623rt", "swa22je-p"],
} as const satisfies ProductModel;
