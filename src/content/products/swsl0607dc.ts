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
export const swsl0607dc = {
  slug: "swsl0607dc",
  name: "SWSL 0607DC",
  fullName: "Sunward SWSL 0607DC",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-elektricni",
  order: 20,

  price: { kind: "onRequest" },

  intro:
    "Radna visina 6,5 metara uz istu širinu od 0,76 metra i istu masu kao model 0607DC-S — gotovo metar više dosega bez ikakvog gubitka u prolaznosti.",

  description: {
    heading: "Sunward SWSL 0607DC škarasto dizalo",
    paragraphs: [
      "Kad je posao na visini stropa hale ili na drugoj etaži, dodatni metar odlučuje hoće li se raditi s platforme ili s ljestava. SWSL 0607DC zadržava sve gabarite manjeg modela i dolazi na ista mjesta.",
      "Za održavanje rasvjete, instalacija i klimatizacije u zatvorenim objektima ovo je najčešće tražena konfiguracija.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "6,5 m" },
    { key: "platformCapacity", value: "240 kg" },
    { key: "width", value: "0,76 m" },
    { key: "operatingWeight", value: "900 kg", n: 900, unitCode: "KGM" },
    { key: "driveType", value: "Električni" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "900 kg",
          width: "0,76 m",
          shippingLength: "1,44 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Električni",
          travelSpeed: "0,8 / 3,6 km/h (podignuto / spušteno)",
          gradeability: "25 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "4,5 m",
          workingHeight: "6,5 m",
          platformCapacity: "240 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing"],

  gallery: { main: "proizvodi/swsl0607dc/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 0607DC"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 0607DC"),

  related: ["swsl0607dc-s", "swsl0807dc"],
} as const satisfies ProductModel;
