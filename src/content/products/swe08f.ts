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
export const swe08f = {
  slug: "swe08f",
  name: "SWE 08F",
  fullName: "Sunward SWE 08F",
  category: "bageri",
  group: "mini-bageri",
  order: 10,

  price: { kind: "onRequest" },

  intro:
    "Najmanji bager u ponudi — s radnom masom od 1.010 kg prolazi kroz vrtna vrata i standardni prolaz između kuća. Namijenjen je komunalnim radovima, uređenju okućnica i iskopima na mjestima gdje veći stroj jednostavno ne stane.",

  description: {
    heading: "Sunward SWE 08F mini bager",
    paragraphs: [
      "SWE 08F je ulazni model Sunward programa i najčešći izbor za obrtnike koji prvi put kupuju vlastiti stroj. Gusjenice se hidraulički sužavaju s 1.000 na 750 mm, pa stroj prolazi kroz uske prolaze, a na radilištu se raširi za stabilniji rad.",
      "Unatoč maloj masi stroj ima punu hidrauliku za dodatne priključke — hidraulički čekić, svrdlo ili hvataljku montirate bez naknadnih preinaka. Kompletnu ponudu priključaka isporučujemo i servisiramo sami.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "1.010 kg", n: 1010, unitCode: "KGM" },
    { key: "power", value: "7,2 kW" },
    { key: "diggingDepth", value: "1.450 mm" },
    { key: "width", value: "750–1.000 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.010 kg",
          bucketCapacity: "0,022 m³",
          width: "750–1.000 mm",
          shippingLength: "2.640 mm",
          heightOverCabin: "2.275 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Yanmar 2TNV70-PSU",
          emission: "EU Stage V",
          displacement: "0,57 l",
          power: "7,2 kW",
          ratedSpeed: "2.400 o/min",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Zupčasta pumpa s konstantnim protokom",
          pumpFlow: "9,6 + 9,6 l/min",
          hydraulicPressure: "16 MPa",
        }),
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "1.450 mm",
          diggingReach: "2.850 mm",
          dumpHeight: "1.770 mm",
          bucketForce: "9,4 kN",
          armForce: "5,8 kN",
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

  gallery: { main: "proizvodi/swe08f/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 08F"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 08F"),

  related: ["swe10fe", "swe17f"],
} as const satisfies ProductModel;
