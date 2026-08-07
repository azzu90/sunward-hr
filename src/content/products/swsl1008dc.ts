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
export const swsl1008dc = {
  slug: "swsl1008dc",
  name: "SWSL 1008DC",
  fullName: "Sunward SWSL 1008DC",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-elektricni",
  order: 40,

  price: { kind: "eur", amount: 15900, tax: "net" },

  intro:
    "Deset metara radne visine pri širini od 0,83 metra. Prelazak u razred u kojem se radi na visini industrijskih hala i skladišta.",

  description: {
    heading: "Sunward SWSL 1008DC škarasto dizalo",
    paragraphs: [
      "Na deset metara pokrivaju se stropovi visokoregalnih skladišta, sportskih dvorana i proizvodnih pogona. Širina od 0,83 metra i dalje omogućuje kretanje između regala i strojeva.",
      "Uz 2.100 kg radne mase stroj je stabilan na punoj visini, ali traži provjeru nosivosti poda pri radu izvan prizemlja.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "10 m" },
    { key: "platformCapacity", value: "230 kg" },
    { key: "width", value: "0,83 m" },
    { key: "operatingWeight", value: "2.100 kg", n: 2100, unitCode: "KGM" },
    { key: "driveType", value: "Električni" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "2.100 kg",
          width: "0,83 m",
          shippingLength: "2,46 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Električni",
          travelSpeed: "0,8 / 4,5 km/h (podignuto / spušteno)",
          gradeability: "25 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "8 m",
          workingHeight: "10 m",
          platformCapacity: "230 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing"],

  gallery: { main: "proizvodi/swsl1008dc/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 1008DC"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 1008DC"),

  related: ["swsl0807dc", "swsl1212dc"],
} as const satisfies ProductModel;
