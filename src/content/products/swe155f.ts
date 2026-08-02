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
export const swe155f = {
  slug: "swe155f",
  name: "SWE 155F",
  fullName: "Sunward SWE 155F",
  category: "bageri",
  group: "srednji-bageri",
  order: 140,

  price: { kind: "onRequest" },

  intro:
    "Ulaz u srednji razred: 14,7 tona, 90 kW i dubina kopanja od 5.530 mm. Stroj za zemljane radove u kojima se mjeri učinak po danu, a ne po satu.",

  description: {
    heading: "Sunward SWE 155F srednji bager",
    paragraphs: [
      "Petnaesttonski razred je radna konjica građevinarstva — dovoljno stroja za ozbiljan iskop, još uvijek prihvatljivo za prijevoz i troškove pogona. SWE 155F pokriva iskope, utovar, planiranje terena i rad s teškim priključcima.",
      "Uz 90 kW hidraulika ne pada pri istovremenom radu više funkcija. Za sve isporučene strojeve servis izlazi na lice mjesta u roku od 24 sata uz izvještaj greške.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "14.700 kg", n: 14700, unitCode: "KGM" },
    { key: "power", value: "90 kW" },
    { key: "diggingDepth", value: "5.530 mm" },
    { key: "width", value: "2.490 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "14.700 kg",
          width: "2.490 mm",
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
          diggingDepth: "5.530 mm",
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

  gallery: { main: "proizvodi/swe155f/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 155F"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 155F"),

  related: ["swe155uf", "swe215f-5a"],
} as const satisfies ProductModel;
