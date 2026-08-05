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
export const swe25f = {
  slug: "swe25f",
  name: "SWE 25F",
  fullName: "Sunward SWE 25F",
  category: "bageri",
  group: "mini-bageri",
  order: 70,

  price: { kind: "onRequest" },

  intro:
    "Prelazak iz dvotonskog u tritonski razred: 2.640 kg, 14,6 kW i dubina kopanja od 2.705 mm. Fiksna širina od 1.500 mm daje stabilnu osnovu bez potrebe za sužavanjem.",

  description: {
    heading: "Sunward SWE 25F mini bager",
    paragraphs: [
      "SWE 25F je stroj za korisnika koji je prerastao najmanju klasu. Veća masa znači da žlica puna vlažne zemlje više ne podiže stražnji dio, a dodatnih 300 mm dubine kopanja pokriva dublje rovove bez dodatnog otkopavanja.",
      "Kod nas se stroj isporučuje spreman za priključke iz vlastite ponude. Servis hidraulike pokrivamo na području cijele Hrvatske, a za Sunward strojeve izlazimo na teren u roku od 24 sata uz izvještaj greške.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "2.640 kg", n: 2640, unitCode: "KGM" },
    { key: "power", value: "14,6 kW" },
    { key: "diggingDepth", value: "2.705 mm" },
    { key: "width", value: "1.500 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "2.640 kg",
          bucketCapacity: "0,08 m³",
          width: "1.500 mm",
          shippingLength: "4.265 mm",
          heightOverCabin: "2.400 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Yanmar 3TNV80-PSU",
          emission: "EU Stage V",
          displacement: "1,267 l",
          power: "14,6 kW",
          ratedSpeed: "2.400 o/min",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Jedna klipna pumpa s varijabilnim protokom",
          pumpFlow: "77 l/min",
          hydraulicPressure: "24,5 MPa",
        }),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "2.705 mm",
          diggingReach: "4.845 mm",
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

  gallery: { main: "proizvodi/swe25f/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 25F"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 25F"),

  related: ["swe25uf", "swe35uf"],
} as const satisfies ProductModel;
