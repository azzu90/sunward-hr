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
 *
 * Die Zeilen in `datasheet` stammen aus der sunward.eu-Recherche (Brochure-PDF
 * bzw. Produktseite je Modell). Bestätigte Werte wurden dabei nicht angetastet.
 */
export const sl12w = {
  slug: "sl12w",
  name: "SL 12W",
  fullName: "Sunward SL 12W",
  category: "zglobni-utovarivaci",
  group: "zglobni-utovarivaci-svi",
  order: 20,

  price: { kind: "onRequest" },

  intro:
    "Veći zglobni utovarivač: nosivost 1.300 kg uz radnu masu od samo 2,5 tone. Više od dvostruko veći kapacitet od SL 06W uz isti princip nježnog rada na podlozi.",

  description: {
    heading: "Sunward SL 12W zglobni utovarivač",
    paragraphs: [
      "SL 12W nosi 1.300 kg — jednako kao znatno teži kotačni mini utovarivači — a pritom teži samo 2,5 tone. Za poljoprivredu i komunalne službe to znači manje zbijanje tla i niže troškove prijevoza.",
      "Žlica od 0,38 m³ i zglobna šasija čine ga učinkovitim za ponavljajući utovar na skučenom prostoru. Stroj se prevozi laganom prikolicom i spreman je za rad odmah po istovaru.",
    ],
  },

  shortSpecs: [
    { key: "ratedCapacity", value: "1.300 kg" },
    { key: "operatingWeight", value: "2.500 kg", n: 2500, unitCode: "KGM" },
    { key: "power", value: "18,5 kW" },
    { key: "bucketCapacity", value: "0,38 m³" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "2.500 kg",
          bucketCapacity: "0,38 m³",
          width: "1.310 mm",
          shippingLength: "4.210 mm",
          heightOverCabin: "2.316 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Kubota D1703",
          power: "18,5 kW",
          ratedSpeed: "2.200 o/min",
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
      id: "performance",
      rows: [
        ...rows({
          ratedCapacity: "1.300 kg",
          breakoutForce: "19 kN",
          dumpHeight: "2.029 mm",
        }),
      ],
    },
  ],

  features: [
    "madeForEurope",
    "premiumComponents",
    "warranty",
    "financing",
    "fieldService",
    "localSupport",
  ],

  gallery: { main: "proizvodi/sl12w/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SL 12W"),
  brochure: tbd("", "Dostaviti PDF brošuru za SL 12W"),

  related: ["sl06w", "swl3230"],
} as const satisfies ProductModel;
