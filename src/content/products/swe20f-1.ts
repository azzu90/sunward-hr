import { rows, tbd } from "../placeholder";
import type { ProductModel } from "../types";

const ASK_20F1 = "Potvrditi vrijednosti za varijantu 20F-1";
const BASIS_20F = "Vrijednosti iz datasheeta SWE 20F; varijanta 20F-1 nije zasebno dokumentirana";

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
export const swe20f1 = {
  slug: "swe20f-1",
  name: "SWE 20F-1",
  fullName: "Sunward SWE 20F-1",
  category: "bageri",
  group: "mini-bageri",
  order: 50,

  price: { kind: "eur", amount: 23500, tax: "net" },

  intro:
    "Dvotonski razred, klasična izvedba s punim protuutegom. Stabilniji od lakših modela pri radu s punom žlicom na dosegu, uz istu mogućnost prolaza kroz uske prolaze.",

  description: {
    heading: "Sunward SWE 20F-1 mini bager",
    paragraphs: [
      "SWE 20F-1 je izbor za one kojima je stabilnost važnija od minimalnog gabarita. Uz 1.910 kg radne mase i 2.260 mm dubine kopanja pokriva iste poslove kao SWE 17F, ali mirnije radi na dosegu i pri podizanju tereta.",
      "Sužavajuće gusjenice zadržavaju prolaznost od 990 mm. Za novootvorene firme rješavamo financiranje uz 30% učešća, a stroj je pokriven garancijom do 5 godina ili 5.000 radnih sati.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "1.910 kg", n: 1910, unitCode: "KGM" },
    { key: "power", value: "13,4 kW" },
    { key: "diggingDepth", value: "2.260 mm" },
    { key: "width", value: "990–1.360 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.910 kg",
          width: "990–1.360 mm",
        }),
        { key: "bucketCapacity", value: tbd("0,04 m³", ASK_20F1, BASIS_20F) },
        { key: "shippingLength", value: tbd("3.905 mm", ASK_20F1, BASIS_20F) },
        { key: "heightOverCabin", value: tbd("2.235 mm", ASK_20F1, BASIS_20F) },
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "13,4 kW",
        }),
        { key: "engineModel", value: tbd("Yanmar 3TNV80-SSU", ASK_20F1, BASIS_20F) },
        { key: "displacement", value: tbd("1,267 l", ASK_20F1, BASIS_20F) },
        { key: "ratedSpeed", value: tbd("2.200 o/min", ASK_20F1, BASIS_20F) },
      ],
    },
    {
      id: "hydraulics",
      rows: [
        {
          key: "hydraulicType",
          value: tbd(
            "Dvije klipne pumpe s varijabilnim protokom + zupčasta i pilot pumpa",
            ASK_20F1,
            BASIS_20F,
          ),
        },
        { key: "pumpFlow", value: tbd("2 × 21 + 13 + 6 l/min", ASK_20F1, BASIS_20F) },
        { key: "hydraulicPressure", value: tbd("21 / 16 MPa", ASK_20F1, BASIS_20F) },
      ],
    },
    {
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "2.260 mm",
        }),
        { key: "diggingReach", value: tbd("4.040 mm", ASK_20F1, BASIS_20F) },
        { key: "bucketForce", value: tbd("22,7 kN", ASK_20F1, BASIS_20F) },
        { key: "armForce", value: tbd("9,8 kN", ASK_20F1, BASIS_20F) },
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

  gallery: { main: "proizvodi/swe20f-1/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 20F-1"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 20F-1"),

  related: ["swe18uf", "swe25f"],
} as const satisfies ProductModel;
