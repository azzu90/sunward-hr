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
export const swe90uf2pb = {
  slug: "swe90uf-2pb",
  name: "SWE 90UF-2PB",
  fullName: "Sunward SWE 90UF-2PB",
  category: "bageri",
  group: "kompaktni-bageri",
  order: 130,

  price: { kind: "onRequest" },

  intro:
    "SWE 90UF s dvodijelnom strelom. Zglob na streli daje bitno veću slobodu pozicioniranja žlice — stroj radi blizu sebe i ispod prepreka bez premještanja.",

  description: {
    heading: "Sunward SWE 90UF-2PB s dvodijelnom strelom",
    paragraphs: [
      "Dvodijelna strela (2PB) mijenja geometriju rada: žlica se može spustiti okomito uz samo gusjenicu, doseći ispod cijevi i instalacija te raditi u prostoru koji jednodijelna strela ne pokriva. Za radove uz postojeću infrastrukturu to je odlučujuća prednost.",
      "Dodatna masa od 850 kg u odnosu na osnovni model daje i veću stabilnost pri podizanju. Dubina kopanja raste na 4.735 mm uz nepromijenjenih 46,2 kW.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "9.600 kg", n: 9600, unitCode: "KGM" },
    { key: "power", value: "46,2 kW" },
    { key: "diggingDepth", value: "4.735 mm" },
    { key: "width", value: "2.270 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "9.600 kg",
          width: "2.270 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Yanmar 4TNV98C",
          emission: "EU Stage V",
          power: "46,2 kW",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Sustav protoka neovisan o teretu (LUDFF)",
        }),
        ...tbdRows(
          {
            pumpFlow: "—",
            hydraulicPressure: "—",
          },
          ASK,
        ),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "4.735 mm",
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

  gallery: { main: "proizvodi/swe90uf-2pb/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 90UF-2PB"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 90UF-2PB"),

  related: ["swe90uf", "swe155f"],
} as const satisfies ProductModel;
