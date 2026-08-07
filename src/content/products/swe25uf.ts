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
export const swe25uf = {
  slug: "swe25uf",
  name: "SWE 25UF",
  fullName: "Sunward SWE 25UF",
  category: "bageri",
  group: "mini-bageri",
  order: 80,

  price: { kind: "eur", amount: 29500, tax: "net" },

  intro:
    "Tritonski bager sa smanjenim pretekom stražnjeg dijela i dubinom kopanja od 2.800 mm — kombinacija snage i gabarita koja pokriva najveći dio građevinskih poslova u naseljima.",

  description: {
    heading: "Sunward SWE 25UF mini bager sa smanjenim pretekom",
    paragraphs: [
      "U odnosu na SWE 25F, UF izvedba dobiva kratki rep i nešto jači motor. Rezultat je stroj koji radi uz sam zid ili rub prometnice bez stalne brige o stražnjem gabaritu, uz gotovo tri metra dubine kopanja.",
      "To je razred u kojem se najčešće kupuje prvi ozbiljan stroj za tvrtku. Uz 30% učešća rješavamo leasing i za tek osnovane firme — d.o.o., j.d.o.o., d.d., obrt i OPG.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "2.750 kg", n: 2750, unitCode: "KGM" },
    { key: "power", value: "15,4 kW" },
    { key: "diggingDepth", value: "2.800 mm" },
    { key: "width", value: "1.500 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "2.750 kg",
          bucketCapacity: "0,08 m³",
          width: "1.500 mm",
          shippingLength: "4.150 mm",
          heightOverCabin: "2.510 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Kubota D1105",
          emission: "EU Stage V",
          displacement: "1,123 l",
          power: "15,4 kW",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Dvije klipne pumpe s varijabilnim protokom + zupčasta pumpa",
          pumpFlow: "2 × 28,8 + 19,2 l/min",
          hydraulicPressure: "2 × 23,5 + 19 MPa",
        }),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "2.800 mm",
          diggingReach: "4.780 mm",
          bucketForce: "24 kN",
          armForce: "14 kN",
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

  gallery: { main: "proizvodi/swe25uf/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 25UF"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 25UF"),

  related: ["swe25f", "swe35uf"],
} as const satisfies ProductModel;
