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
export const swe155uf = {
  slug: "swe155uf",
  name: "SWE 155UF",
  fullName: "Sunward SWE 155UF",
  category: "bageri",
  group: "srednji-bageri",
  order: 150,

  price: { kind: "onRequest" },

  intro:
    "Srednji bager sa smanjenim pretekom — 16,5 tona snage u stroju koji se okreće bez izlaska stražnjeg dijela izvan gabarita gusjenica.",

  description: {
    heading: "Sunward SWE 155UF srednji bager sa smanjenim pretekom",
    paragraphs: [
      "Kratki rep u petnaesttonskom razredu otvara radilišta koja su inače zatvorena za ovu klasu: rad u prometnom traku, uz zgrade, između postojećih objekata. Dodatnih 1,8 tona u odnosu na SWE 155F daje i veću stabilnost pri podizanju.",
      "Dubina kopanja i snaga ostaju na razini osnovnog modela. Za gradske i infrastrukturne radove ovo je izvedba koja se najčešće traži.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "16.500 kg", n: 16500, unitCode: "KGM" },
    { key: "power", value: "90 kW" },
    { key: "diggingDepth", value: "5.525 mm" },
    { key: "width", value: "2.600 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "16.500 kg",
          width: "2.600 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
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
          diggingDepth: "5.525 mm",
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

  gallery: { main: "proizvodi/swe155uf/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 155UF"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 155UF"),

  related: ["swe155f", "swe155uf-2pb"],
} as const satisfies ProductModel;
