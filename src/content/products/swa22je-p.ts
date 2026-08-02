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
export const swa22jep = {
  slug: "swa22je-p",
  name: "SWA 22JE-P",
  fullName: "Sunward SWA 22JE-P",
  category: "zglobne-radne-platforme",
  group: "zglobne-radne-platforme-sve",
  order: 40,

  price: { kind: "onRequest" },

  intro:
    "Najveća zglobna platforma u programu: 22 metra radne visine i 12,28 metara radnog radijusa. Doseg koji pokriva višekatne objekte i široke industrijske hale.",

  description: {
    heading: "Sunward SWA 22JE-P zglobna radna platforma",
    paragraphs: [
      "Radni radijus od preko 12 metara znači da se s jedne pozicije pokriva površina koju manje platforme obrađuju iz tri ili četiri postavljanja. Na velikim objektima to izravno skraćuje vrijeme rada.",
      "Nosivost do 360 kg i električni pogon zadržani su iz manjeg modela. Radna masa od 10,2 tone traži planiranje pristupa i nosivosti podloge.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "22 m" },
    { key: "workRadius", value: "12,28 m" },
    { key: "platformCapacity", value: "260/360 kg" },
    { key: "operatingWeight", value: "10.160 kg", n: 10160, unitCode: "KGM" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "10.160 kg",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: tbdRows(
        {
          driveType: "—",
          travelSpeed: "—",
          gradeability: "—",
        },
        ASK,
      ),
    },
    {
      id: "performance",
      rows: [
        ...rows({
          workingHeight: "22 m",
          workRadius: "12,28 m",
          platformCapacity: "260/360 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swa22je-p/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWA 22JE-P"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWA 22JE-P"),

  related: ["swa18je-p", "swa16j"],
} as const satisfies ProductModel;
