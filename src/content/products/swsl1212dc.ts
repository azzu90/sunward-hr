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
export const swsl1212dc = {
  slug: "swsl1212dc",
  name: "SWSL 1212DC",
  fullName: "Sunward SWSL 1212DC",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-elektricni",
  order: 50,

  price: { kind: "onRequest" },

  intro:
    "Dvanaest metara radne visine i nosivost od 320 kg — šira platforma za rad s više ljudi i težim materijalom.",

  description: {
    heading: "Sunward SWSL 1212DC škarasto dizalo",
    paragraphs: [
      "Povećanjem širine na 1,17 metra raste i nosivost na 320 kg. To znači tri radnika s alatom ili dva radnika s materijalom za montažu — konfiguracija koja se traži za instalaterske i montažne radove na visini.",
      "Električni pogon zadržava upotrebljivost u zatvorenim prostorima unatoč većim dimenzijama stroja.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "12 m" },
    { key: "platformCapacity", value: "320 kg" },
    { key: "width", value: "1,17 m" },
    { key: "operatingWeight", value: "2.940 kg", n: 2940, unitCode: "KGM" },
    { key: "driveType", value: "Električni" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "2.940 kg",
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
          liftHeight: "10 m",
          workingHeight: "12 m",
          platformCapacity: "320 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing"],

  gallery: { main: "proizvodi/swsl1212dc/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 1212DC"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 1212DC"),

  related: ["swsl1008dc", "swsl1412dc"],
} as const satisfies ProductModel;
