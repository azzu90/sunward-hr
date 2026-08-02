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
        }),
      ],
    },
    {
      id: "powertrain",
      rows: tbdRows(
        {
          driveType: "—",
          travelSpeed: "—",
          gradeability: "—",
        },
        ASK,
      ),
    },
    {
      id: "performance",
      rows: [
        ...rows({
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
