import { rows, tbd } from "../placeholder";
import type { ProductModel } from "../types";

const ASK_TRGOVAC = "Potvrditi iz službenog sunward.eu datasheeta";
const BASIS_TRGOVAC = "Sunward datasheet distribuiran preko ovlaštenog trgovca, nije sa sunward.eu";

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
export const swtc5d = {
  slug: "swtc5d",
  name: "SWTC 5D",
  fullName: "Sunward SWTC 5D",
  category: "teleskopske-dizalice",
  group: "teleskopske-dizalice-sve",
  order: 10,

  price: { kind: "onRequest" },

  intro:
    "Gusjenična teleskopska dizalica nosivosti 5 tona s dosegom od 16,5 metara. Radi na neuređenom terenu bez postavljanja stabilizatora.",

  description: {
    heading: "Sunward SWTC 5D teleskopska dizalica",
    paragraphs: [
      "Gusjenična izvedba je prednost na gradilištu koje još nije uređeno: dizalica se premješta po blatu i nasipu, spremna za rad odmah po dolasku na poziciju. Kotačna dizalica na istom terenu traži pripremu podloge i vrijeme za stabilizatore.",
      "Nosivost od 5 tona i doseg do 16,5 metara pokrivaju montažu konstrukcija, postavljanje elemenata i opsluživanje gradilišta. Za povremene dizaličarske poslove uz osnovnu djelatnost ovo je racionalna veličina.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "10.910 kg", n: 10910, unitCode: "KGM" },
    { key: "maxLoad", value: "5.000 kg" },
    { key: "workingHeight", value: "16,5 m" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "10.910 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
        }),
        { key: "engineModel", value: tbd("Yanmar 4TNV98C", ASK_TRGOVAC, BASIS_TRGOVAC) },
        { key: "displacement", value: tbd("3,319 l", ASK_TRGOVAC, BASIS_TRGOVAC) },
        { key: "power", value: tbd("46,2 kW", ASK_TRGOVAC, BASIS_TRGOVAC) },
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          maxLoad: "5.000 kg",
          workingHeight: "16,5 m",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swtc5d/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWTC 5D"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWTC 5D"),

  related: ["swtc10", "swth3507"],
} as const satisfies ProductModel;
