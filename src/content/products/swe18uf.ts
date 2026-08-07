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
export const swe18uf = {
  slug: "swe18uf",
  name: "SWE 18UF",
  fullName: "Sunward SWE 18UF",
  category: "bageri",
  group: "mini-bageri",
  order: 40,

  price: { kind: "eur", amount: 22900, tax: "net" },

  intro:
    "UF izvedba znači smanjeni pretek stražnjeg dijela — stroj se okreće gotovo unutar širine gusjenica. To je razlika koja odlučuje kad se radi uz zid, ogradu ili u prometnom traku.",

  description: {
    heading: "Sunward SWE 18UF mini bager sa smanjenim pretekom",
    paragraphs: [
      "Uz 1.880 kg i 2.390 mm dubine kopanja SWE 18UF pokriva zahtjevnije poslove nego lakši modeli u mini-bager razredu, a zbog kratkog repa bitno je upotrebljiviji u skučenom prostoru. Operater ne mora računati koliko mu stražnji dio izlazi izvan gabarita pri svakom zakretu.",
      "Tipični posao su radovi u naseljima, uz postojeće objekte i na parcelama gdje nema mjesta za manevar. Sužavajuće gusjenice i puna priključna hidraulika su serijski.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "1.880 kg", n: 1880, unitCode: "KGM" },
    { key: "power", value: "13,4–14 kW" },
    { key: "diggingDepth", value: "2.390 mm" },
    { key: "width", value: "990–1.360 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.880 kg",
          bucketCapacity: "0,04 m³",
          width: "990–1.360 mm",
          shippingLength: "3.580 mm",
          heightOverCabin: "2.400 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Yanmar 3TNV80-SSU (alternativno Kubota D1105)",
          emission: "EU Stage V",
          displacement: "1,267 l (Yanmar) / 1,123 l (Kubota)",
          power: "13,4–14 kW",
          ratedSpeed: "2.200 o/min",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Jedna klipna pumpa s varijabilnim protokom",
          pumpFlow: "62 l/min",
          hydraulicPressure: "24,5 MPa",
        }),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "2.390 mm",
          diggingReach: "4.160 mm",
          dumpHeight: "2.560 mm",
          bucketForce: "22,7 kN",
          armForce: "9,8 kN",
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

  gallery: { main: "proizvodi/swe18uf/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 18UF"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 18UF"),

  related: ["swe20f-1", "swe20fe"],
} as const satisfies ProductModel;
