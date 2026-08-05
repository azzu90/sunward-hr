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
export const swa16je = {
  slug: "swa16je",
  name: "SWA 16JE",
  fullName: "Sunward SWA 16JE",
  category: "zglobne-radne-platforme",
  group: "zglobne-radne-platforme-sve",
  order: 20,

  price: { kind: "onRequest" },

  intro:
    "Električna verzija zglobne platforme od 16 metara — isti doseg, bez ispuha i uz znatno tiši rad. Za rad u zatvorenom i na osjetljivim lokacijama.",

  description: {
    heading: "Sunward SWA 16JE električna zglobna platforma",
    paragraphs: [
      "SWA 16JE pokriva ista radilišta kao dizelska izvedba, ali u prostorima u kojima se dizel ne smije koristiti: proizvodne hale, skladišta, sportski i izložbeni objekti. Radna visina od 15,8 metara praktički se ne razlikuje od dizelskog modela.",
      "Elektropogon smanjuje troškove pogona i uklanja potrebu za ventilacijom ispuha. Nosivost košare je 230 kg.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "15,8 m" },
    { key: "workRadius", value: "7,74 m" },
    { key: "platformCapacity", value: "230 kg" },
    { key: "operatingWeight", value: "7.750 kg", n: 7750, unitCode: "KGM" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "7.750 kg",
          width: "1,75 m",
          shippingLength: "6,63 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Električni",
          travelSpeed: "5,2 / 0,8 km/h (uvučeno / izvučeno)",
          gradeability: "30 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "13,8 m",
          workingHeight: "15,8 m",
          workRadius: "7,74 m",
          platformCapacity: "230 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swa16je/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWA 16JE"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWA 16JE"),

  related: ["swa16j", "swa18je-p"],
} as const satisfies ProductModel;
