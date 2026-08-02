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
export const swa18jep = {
  slug: "swa18je-p",
  name: "SWA 18JE-P",
  fullName: "Sunward SWA 18JE-P",
  category: "zglobne-radne-platforme",
  group: "zglobne-radne-platforme-sve",
  order: 30,

  price: { kind: "onRequest" },

  intro:
    "Električna zglobna platforma radne visine 18 metara s radnim radijusom od 9,6 metra i promjenjivom nosivošću košare do 360 kg.",

  description: {
    heading: "Sunward SWA 18JE-P zglobna radna platforma",
    paragraphs: [
      "Dvostupanjska nosivost (260 kg na punom dosegu, 360 kg u povučenom položaju) omogućuje rad s tri osobe ili s težim alatom kad doseg nije maksimalan. Za montažne radove to je praktična razlika u odnosu na fiksnu nosivost.",
      "Radni radijus od 9,6 metra pokriva široko područje iz jedne pozicije, bez premještanja stroja. Elektropogon zadržava upotrebljivost u zatvorenim prostorima.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "18 m" },
    { key: "workRadius", value: "9,6 m" },
    { key: "platformCapacity", value: "260/360 kg" },
    { key: "operatingWeight", value: "8.270 kg", n: 8270, unitCode: "KGM" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "8.270 kg",
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
          workingHeight: "18 m",
          workRadius: "9,6 m",
          platformCapacity: "260/360 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swa18je-p/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWA 18JE-P"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWA 18JE-P"),

  related: ["swa16je", "swa22je-p"],
} as const satisfies ProductModel;
