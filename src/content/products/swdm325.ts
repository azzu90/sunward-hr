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
export const swdm325 = {
  slug: "swdm325",
  name: "SWDM 325",
  fullName: "Sunward SWDM 325",
  category: "busace-garniture",
  group: "busace-garniture-sve",
  order: 60,

  price: { kind: "onRequest" },

  intro:
    "Garnitura od 107 tona i 321 kW s promjerom bušenja do 2.500 mm. Razred za najzahtjevnije geotehničke radove.",

  description: {
    heading: "Sunward SWDM 325 bušača garnitura",
    paragraphs: [
      "Na ovoj veličini garnitura je projektna investicija, ne dio opće mehanizacije. SWDM 325 radi promjere do 2.500 mm i dubine koje traže veliki infrastrukturni i energetski objekti.",
      "Snaga od 321 kW održava brzinu napredovanja i u stijeni. Za projekte ove veličine planiranje servisa i rezervnih dijelova dogovaramo unaprijed, prije početka radova.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "107.000 kg", n: 107000, unitCode: "KGM" },
    { key: "power", value: "321 kW" },
    { key: "drillDiameter", value: "2.300–2.500 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "107.000 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "321 kW",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: tbdRows(
        {
          hydraulicType: "—",
          pumpFlow: "—",
          hydraulicPressure: "—",
        },
        ASK,
      ),
    },
    {
      id: "performance",
      rows: [
        ...rows({
          drillDiameter: "2.300–2.500 mm",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swdm325/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWDM 325"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWDM 325"),

  related: ["swdm245", "swdm415"],
} as const satisfies ProductModel;
