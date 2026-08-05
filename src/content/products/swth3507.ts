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
 *
 * Die Zeilen in `datasheet` stammen aus der sunward.eu-Recherche (Brochure-PDF
 * bzw. Produktseite je Modell). Bestätigte Werte wurden dabei nicht angetastet.
 */
export const swth3507 = {
  slug: "swth3507",
  name: "SWTH 3507",
  fullName: "Sunward SWTH 3507",
  category: "teleskopski-utovarivaci",
  group: "teleskopski-utovarivaci-svi",
  order: 10,

  price: { kind: "onRequest" },

  intro:
    "Teleskopski utovarivač s visinom podizanja od 7,43 metra i dosegom od 3,83 metra. Jedan stroj koji zamjenjuje utovarivač, viličar i manju dizalicu.",

  description: {
    heading: "Sunward SWTH 3507 teleskopski utovarivač",
    paragraphs: [
      "Teleskopska strela mijenja što utovarivač može: materijal se ne samo podiže nego i iznosi naprijed — na prikolicu, preko zida ili na skelu. Za poljoprivredu, građevinu i skladišta to znači jedan stroj umjesto tri.",
      "Uz 55 kW i 8,3 tone radne mase stroj prihvaća vilice, žlicu, hvataljku i radnu košaru. Priključke isporučujemo iz vlastite ponude, a servis izlazi na teren u roku od 24 sata.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "liftHeight", value: "7,43 m" },
    { key: "maxOutreach", value: "3,83 m" },
    { key: "power", value: "55 kW" },
    { key: "operatingWeight", value: "8.300 kg", n: 8300, unitCode: "KGM" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "8.300 kg",
          width: "2.410 mm",
          shippingLength: "5.090 mm",
          heightOverCabin: "2.390 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins F3.8",
          emission: "EU Stage V",
          power: "55 kW",
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
          maxLoad: "3.500 kg",
          liftHeight: "7,43 m",
          maxOutreach: "3,83 m",
          travelSpeed: "30 km/h",
        }),
      ],
    },
  ],

  features: [
    "madeForEurope",
    "premiumComponents",
    "warranty",
    "financing",
    "bestValue",
    "fieldService",
    "localSupport",
  ],

  gallery: { main: "proizvodi/swth3507/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWTH 3507"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWTH 3507"),

  related: ["swtc5d", "swtl5238"],
} as const satisfies ProductModel;
