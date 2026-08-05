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
export const swa16j = {
  slug: "swa16j",
  name: "SWA 16J",
  fullName: "Sunward SWA 16J",
  category: "zglobne-radne-platforme",
  group: "zglobne-radne-platforme-sve",
  order: 10,

  price: { kind: "onRequest" },

  intro:
    "Zglobna platforma radne visine 16 metara s horizontalnim dosegom od 8,02 metra. Zglobna strela prelazi preko prepreka i spušta košaru točno na mjesto rada.",

  description: {
    heading: "Sunward SWA 16J zglobna radna platforma",
    paragraphs: [
      "Prednost zglobne strele nad ravnom je rad iznad i iza prepreka: preko krova, preko strojeva u pogonu ili preko ograde. Tamo gdje se platforma ne može postaviti neposredno ispod mjesta rada, zglobna izvedba je jedina koja dolazi.",
      "Nosivost košare od 250 kg prima dva radnika s alatom. Za održavanje objekata, rasvjete i industrijskih postrojenja to je standardna konfiguracija.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "16 m" },
    { key: "workRadius", value: "8,02 m" },
    { key: "platformCapacity", value: "250 kg" },
    { key: "operatingWeight", value: "7.650 kg", n: 7650, unitCode: "KGM" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "7.650 kg",
          width: "2,3 m",
          shippingLength: "6,93 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          engineModel: "Kubota V2403",
          power: "47,9 kW",
          ratedSpeed: "2.700 o/min",
          driveType: "Dizel",
          travelSpeed: "6,8 / 0,8 km/h (uvučeno / izvučeno)",
          gradeability: "45 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "14 m",
          workingHeight: "16 m",
          workRadius: "8,02 m",
          platformCapacity: "250 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swa16j/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWA 16J"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWA 16J"),

  related: ["swa16je", "swa18je-p"],
} as const satisfies ProductModel;
