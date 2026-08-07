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
export const swsl1412dc = {
  slug: "swsl1412dc",
  name: "SWSL 1412DC",
  fullName: "Sunward SWSL 1412DC",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-elektricni",
  order: 60,

  price: { kind: "eur", amount: 18600, tax: "net" },

  intro:
    "Najviše električno škarasto dizalo u programu: 14 metara radne visine uz nosivost od 320 kg.",

  description: {
    heading: "Sunward SWSL 1412DC škarasto dizalo",
    paragraphs: [
      "Dva dodatna metra u odnosu na SWSL 1212DC dobivaju se uz porast mase od samo 60 kg i bez promjene gabarita. Za visoke hale i objekte s velikim rasponom to je najracionalniji izbor u električnoj seriji.",
      "Nosivost od 320 kg i širina od 1,17 metra ostaju nepromijenjene, pa vrijede isti uvjeti pristupa kao za manji model.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "14 m" },
    { key: "platformCapacity", value: "320 kg" },
    { key: "width", value: "1,17 m" },
    { key: "operatingWeight", value: "3.000 kg", n: 3000, unitCode: "KGM" },
    { key: "driveType", value: "Električni" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "3.000 kg",
          width: "1,17 m",
          shippingLength: "2,47 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Električni",
          travelSpeed: "0,8 / 4,0 km/h (podignuto / spušteno)",
          gradeability: "25 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "12 m",
          workingHeight: "14 m",
          platformCapacity: "320 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing"],

  gallery: { main: "proizvodi/swsl1412dc/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 1412DC"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 1412DC"),

  related: ["swsl1212dc", "swsl1223rt"],
} as const satisfies ProductModel;
