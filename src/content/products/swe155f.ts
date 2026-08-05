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
          bucketCapacity: "0,6 m³",
          width: "2.490 mm",
          shippingLength: "8.270 mm",
          heightOverCabin: "2.860 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins QSF3.8",
          emission: "EU Stage V",
          displacement: "3,8 l",
          power: "90 kW",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Dvije klipne pumpe s varijabilnim protokom",
          pumpFlow: "2 × 165 l/min",
          hydraulicPressure: "31,4 / 34,3 MPa",
        }),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "5.530 mm",
          diggingReach: "8.330 mm",
          bucketForce: "100 kN",
          armForce: "76 kN",
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
