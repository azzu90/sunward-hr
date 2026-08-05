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
export const swe155uf2pb = {
  slug: "swe155uf-2pb",
  name: "SWE 155UF-2PB",
  fullName: "Sunward SWE 155UF-2PB",
  category: "bageri",
  group: "srednji-bageri",
  order: 160,

  price: { kind: "onRequest" },

  intro:
    "Srednji bager koji spaja obje prednosti: smanjeni pretek i dvodijelnu strelu. Najfleksibilniji stroj u petnaesttonskom razredu za rad u skučenom i zauzetom prostoru.",

  description: {
    heading: "Sunward SWE 155UF-2PB sa smanjenim pretekom i dvodijelnom strelom",
    paragraphs: [
      "Kombinacija kratkog repa i zglobne strele znači da stroj radi i iza sebe i ispod prepreka, bez premještanja gusjenica. Na radilištima s gustom infrastrukturom to izravno skraćuje vrijeme rada.",
      "Uz 17 tona radne mase i 5.600 mm dubine kopanja stroj ne gubi kapacitet u odnosu na jednostavnije izvedbe istog razreda.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "17.000 kg", n: 17000, unitCode: "KGM" },
    { key: "power", value: "90 kW" },
    { key: "diggingDepth", value: "5.600 mm" },
    { key: "width", value: "2.600 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "17.000 kg",
          width: "2.600 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins QSF3.8",
          emission: "EU Stage V",
          power: "90 kW",
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
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "5.600 mm",
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

  gallery: { main: "proizvodi/swe155uf-2pb/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 155UF-2PB"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 155UF-2PB"),

  related: ["swe155uf", "swe90uf-2pb"],
} as const satisfies ProductModel;
