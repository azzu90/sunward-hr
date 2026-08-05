import { rows, tbd } from "../placeholder";
import type { ProductModel } from "../types";

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
 *
 * Die Zeilen in `datasheet` stammen aus der sunward.eu-Recherche (Brochure-PDF
 * bzw. Produktseite je Modell). Bestätigte Werte wurden dabei nicht angetastet.
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
          width: "2,3 m",
          shippingLength: "7,5 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Električni (litij-ionska baterija)",
          travelSpeed: "5,8 / 0,8 km/h (uvučeno / izvučeno)",
          gradeability: "40 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "16 m",
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
