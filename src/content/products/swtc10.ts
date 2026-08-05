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
export const swtc10 = {
  slug: "swtc10",
  name: "SWTC 10",
  fullName: "Sunward SWTC 10",
  category: "teleskopske-dizalice",
  group: "teleskopske-dizalice-sve",
  order: 20,

  price: { kind: "onRequest" },

  intro:
    "Gusjenična teleskopska dizalica nosivosti 10 tona i dosega 21,5 metara — dvostruka nosivost i pet metara više dosega od SWTC 5D.",

  description: {
    heading: "Sunward SWTC 10 teleskopska dizalica",
    paragraphs: [
      "S 10 tona nosivosti dizalica ulazi u posao montaže teških konstrukcijskih elemenata, betonskih ploča i strojeva. Doseg od 21,5 metara pokriva višekatne objekte i široke hale iz jedne pozicije.",
      "Radna masa od 20,5 tona traži planiranje transporta, ali gusjenična šasija zadržava prednost rada bez pripreme podloge. Servis i dijelove pokrivamo iz Karlovca za cijelu Hrvatsku.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "20.500 kg", n: 20500, unitCode: "KGM" },
    { key: "maxLoad", value: "10.000 kg" },
    { key: "workingHeight", value: "21,5 m" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "20.500 kg",
          shippingLength: "9.073 mm",
          shippingWidth: "2.800 mm",
          heightOverCabin: "3.070 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins QSB6.7",
          emission: "EU Stage V",
          displacement: "6,7 l",
          power: "129 kW",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          maxLoad: "10.000 kg",
          liftHeight: "26 m (s najdužom strelom)",
          workingHeight: "21,5 m",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swtc10/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWTC 10"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWTC 10"),

  related: ["swtc5d", "swth3507"],
} as const satisfies ProductModel;
