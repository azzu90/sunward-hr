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
export const swsl1623rt = {
  slug: "swsl1623rt",
  name: "SWSL 1623RT",
  fullName: "Sunward SWSL 1623RT",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-terenski",
  order: 80,

  price: { kind: "onRequest" },

  intro:
    "Terensko škarasto dizalo radne visine 16,5 metara uz nosivost od 780 kg. Kombinacija dosega i kapaciteta za fasadne i montažne radove na gradilištu.",

  description: {
    heading: "Sunward SWSL 1623RT terensko škarasto dizalo",
    paragraphs: [
      "Na 16,5 metara pokrivaju se fasade četverokatnica i konstrukcije industrijskih hala. Nosivost od 780 kg i dalje dopušta podizanje materijala uz radnike, što skraćuje broj ciklusa.",
      "Terenska šasija zadržava mobilnost po nepripremljenom terenu. Za rad na ovoj visini stabilizacija i nosivost podloge planiraju se unaprijed.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "16,5 m" },
    { key: "platformCapacity", value: "780 kg" },
    { key: "width", value: "2,39 m" },
    { key: "operatingWeight", value: "9.200 kg", n: 9200, unitCode: "KGM" },
    { key: "driveType", value: "Dizel / hidraulički" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "9.200 kg",
          width: "2,39 m",
          shippingLength: "5,33 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          engineModel: "Kubota V2403-CR-T-E5",
          emission: "EU Stage V",
          power: "36,5 kW",
          driveType: "Dizel / hidraulički",
          travelSpeed: "0,6 / 7,2 km/h (podignuto / spušteno)",
          gradeability: "40 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "14,5 m",
          workingHeight: "16,5 m",
          platformCapacity: "780 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swsl1623rt/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 1623RT"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 1623RT"),

  related: ["swsl1223rt", "swsl2023rt"],
} as const satisfies ProductModel;
