import { tbd, tbdRows } from "../placeholder";
import type { ProductModel } from "../types";

const ASK = "Potvrditi iz službenog Sunward datasheeta";

/**
 * Seed-Modell einer ANDEREN Kategorie: Utovarivači haben ein abweichendes
 * Kurzspec-Set (bucketCapacity, tippingLoad statt diggingDepth, width) und
 * einen `performance`- statt `workingRange`-Block.
 *
 * Das ist der eigentliche Zweck dieses Seeds: es beweist, dass die
 * Verträge in taxonomy.ts nicht baggerspezifisch sind.
 * Bestätigt aus CLAUDE.md §4: Modellname, Utovarivač, 33.000 EUR.
 */
export const swl2830 = {
  slug: "swl2830",
  name: "SWL2830",
  fullName: "Sunward SWL2830",
  category: "utovarivaci",
  group: "utovarivaci-svi",
  order: 10,

  price: { kind: "eur", amount: 33_000, tax: "net" },

  intro:
    "Zglobni utovarivač za svakodnevni rad na gradilištu, farmi ili deponiju. Zglobno upravljanje daje mali radijus okretanja, pa stroj radi i u skučenim dvorištima.",

  description: {
    heading: "Sunward SWL2830 utovarivač",
    paragraphs: [
      "SWL2830 je namijenjen utovaru rasutog materijala, čišćenju platoa i manipulaciji na skladištu. Zglobna konstrukcija znatno smanjuje radijus okretanja u odnosu na stroj s klasičnim upravljanjem.",
      "Brza izmjena priključaka omogućuje prelazak s lopate na vilice ili metlu bez alata, čime jedan stroj pokriva više poslova kroz godinu.",
      "Financiranje rješavamo uz 30% učešća, uključujući obrte i OPG-ove, a stari stroj priznajemo kao učešće.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: tbd("EU Stage V", ASK) },
    { key: "operatingWeight", value: tbd("2.830 kg", ASK, "izvedeno iz oznake modela SWL2830") },
    { key: "power", value: tbd("36,8 kW (50 KS)", ASK) },
    { key: "bucketCapacity", value: tbd("0,60 m³", ASK) },
    { key: "tippingLoad", value: tbd("1.850 kg", ASK) },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: tbdRows(
        {
          operatingWeight: "2.830 kg",
          bucketCapacity: "0,60 m³",
          shippingLength: "4.760 mm",
          shippingWidth: "1.500 mm",
          heightOverCabin: "2.480 mm",
        },
        ASK,
      ),
    },
    {
      id: "engine",
      rows: tbdRows(
        {
          engineModel: "Yanmar 4TNV88",
          emission: "EU Stage V",
          displacement: "2,19 l",
          power: "36,8 kW pri 2.400 o/min",
        },
        ASK,
      ),
    },
    {
      id: "hydraulics",
      rows: tbdRows(
        {
          hydraulicType: "Otvoreni centar, zupčasta pumpa",
          pumpFlow: "62 l/min",
          hydraulicPressure: "20,0 MPa",
        },
        ASK,
      ),
    },
    {
      id: "performance",
      rows: tbdRows(
        {
          tippingLoad: "1.850 kg",
          dumpHeight: "2.520 mm",
          travelSpeed: "20 km/h",
          gradeability: "30°",
        },
        ASK,
      ),
    },
  ],

  features: ["premiumComponents", "warranty", "financing", "tradeIn", "bestValue", "localSupport"],

  gallery: { main: "proizvodi/swl2830/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWL2830"),

  related: ["swe08f"],
} as const satisfies ProductModel;
