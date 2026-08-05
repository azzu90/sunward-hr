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
export const swe17f = {
  slug: "swe17f",
  name: "SWE 17F",
  fullName: "Sunward SWE 17F",
  category: "bageri",
  group: "mini-bageri",
  order: 30,

  price: { kind: "onRequest" },

  intro:
    "Bager od 1,8 tone s dubinom kopanja preko dva metra — dovoljno za temelje, vodovodne i kanalizacijske rovove, a još uvijek dovoljno lagan za prijevoz običnom prikolicom.",

  description: {
    heading: "Sunward SWE 17F mini bager",
    paragraphs: [
      "Sa 13,4 kW i 2.060 mm dubine kopanja SWE 17F pokriva najveći dio poslova na kojima mini bager stvarno zarađuje: priključci na infrastrukturu, drenaže, temelji ograda i manji iskopi oko objekta. Radna masa ostaje ispod granice koja bi tražila poseban prijevoz.",
      "Gusjenice se sužavaju na 990 mm za prolaz kroz vrata i između objekata. Stroj je pripremljen za priključke, a za sve isporučene strojeve servis izlazi na teren u roku od 24 sata.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "1.780 kg", n: 1780, unitCode: "KGM" },
    { key: "power", value: "13,4 kW" },
    { key: "diggingDepth", value: "2.060 mm" },
    { key: "width", value: "990–1.360 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.780 kg",
          bucketCapacity: "0,035 m³",
          width: "990–1.360 mm",
          shippingLength: "3.840 mm",
          shippingWidth: "990 mm",
          heightOverCabin: "2.360 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Yanmar 3TNV80F-SSU",
          emission: "EU Stage V",
          displacement: "1,267 l",
          power: "13,4 kW",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Jedna aksijalna klipna pumpa s varijabilnim protokom",
          pumpFlow: "62 l/min",
          hydraulicPressure: "24,5 MPa",
        }),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "2.060 mm",
          diggingReach: "3.885 mm",
          bucketForce: "21 kN",
          armForce: "12 kN",
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

  gallery: { main: "proizvodi/swe17f/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 17F"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 17F"),

  related: ["swe18uf", "swe20f-1"],
} as const satisfies ProductModel;
