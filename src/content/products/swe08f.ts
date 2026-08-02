import { rows, tbd, tbdRows } from "../placeholder";
import type { ProductModel } from "../types";

const ASK = "Potvrditi iz službenog Sunward datasheeta";

/**
 * Lesart dieser Datei: was NICHT in tbd()/tbdRows() eingewickelt ist,
 * ist eine bestätigte Tatsache aus CLAUDE.md §4.
 *
 * Bestätigt sind hier: Modellname, Radna masa 1.010 kg, Preis 16.000 EUR.
 * Alles andere ist plausibel geschätzt und wartet auf Zorans Datenblatt.
 */
export const swe08f = {
  slug: "swe08f",
  name: "SWE08F",
  fullName: "Sunward SWE08F",
  category: "bageri",
  group: "mini-bageri",
  order: 10,

  price: { kind: "eur", amount: 16_000, tax: "net" },

  intro:
    "Najmanji bager u ponudi — s radnom masom od 1.010 kg prolazi kroz vrtna vrata i standardni prolaz između kuća. Namijenjen je komunalnim radovima, uređenju okućnica i iskopima na mjestima gdje veći stroj jednostavno ne stane.",

  description: {
    heading: "Sunward SWE08F mini bager",
    paragraphs: [
      "SWE08F je ulazni model Sunward programa i najčešći izbor za obrtnike koji prvi put kupuju vlastiti stroj. Gusjenice se hidraulički sužavaju, pa stroj prolazi kroz uske prolaze, a na radilištu se raširi za stabilniji rad.",
      "Unatoč maloj masi, stroj ima punu hidrauliku za dodatne priključke — hidraulički čekić, svrdlo ili hvataljku možete montirati bez naknadnih preinaka. Kompletnu ponudu priključaka isporučujemo i servisiramo sami.",
      "Za novootvorene firme rješavamo financiranje uz 30% učešća, a stroj je pokriven garancijom do 3 godine ili 5.000 radnih sati.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: tbd("EU Stage V", ASK) },
    { key: "operatingWeight", value: "1.010 kg", n: 1010, unitCode: "KGM" },
    { key: "power", value: tbd("7,4 kW (10 KS)", ASK) },
    { key: "diggingDepth", value: tbd("1.720 mm", ASK) },
    { key: "width", value: tbd("930 mm", ASK) },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({ operatingWeight: "1.010 kg" }),
        ...tbdRows(
          {
            bucketCapacity: "0,025 m³",
            shippingLength: "2.930 mm",
            shippingWidth: "930 mm",
            heightOverCabin: "2.290 mm",
          },
          ASK,
        ),
      ],
    },
    {
      id: "engine",
      rows: tbdRows(
        {
          engineModel: "Kubota Z482",
          emission: "EU Stage V",
          displacement: "0,479 l",
          power: "7,4 kW pri 2.200 o/min",
        },
        ASK,
      ),
    },
    {
      id: "hydraulics",
      rows: tbdRows(
        {
          hydraulicType: "Otvoreni centar, zupčasta pumpa",
          pumpFlow: "2 × 12,8 l/min",
          hydraulicPressure: "18,5 MPa",
        },
        ASK,
      ),
    },
    {
      id: "workingRange",
      rows: tbdRows(
        {
          diggingDepth: "1.720 mm",
          diggingReach: "3.130 mm",
          bucketForce: "11,2 kN",
          armForce: "6,4 kN",
        },
        ASK,
      ),
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
  video: tbd("", "Dostaviti YouTube poveznicu za SWE08F"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE08F"),

  related: ["swl2830"],
} as const satisfies ProductModel;
