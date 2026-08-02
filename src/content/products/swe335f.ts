import { tbd, tbdRows } from "../placeholder";
import type { ProductModel } from "../types";

const ASK = "Potvrditi iz službenog Sunward datasheeta";

/**
 * Seed-Modell für den Fall „Na upit" — bewusst ohne Zahlenpreis, damit
 * die Preis- und Schema.org-Logik in beiden Varianten geprüft ist.
 * Bestätigt aus CLAUDE.md §4: Modellname, 33 t Klasse, Cijena na upit.
 */
export const swe335f = {
  slug: "swe335f",
  name: "SWE335F",
  fullName: "Sunward SWE335F",
  category: "bageri",
  group: "veliki-bageri",
  order: 140,

  price: { kind: "onRequest" },

  intro:
    "Bager od 33 tone za velike zemljane radove, kamenolome i infrastrukturne projekte. Stroj ove klase isporučujemo po dogovoru jer konfiguracija — strela, gusjenice i priključci — ovisi o vrsti radova.",

  description: {
    heading: "Sunward SWE335F veliki bager",
    paragraphs: [
      "SWE335F je namijenjen kontinuiranom radu u zahtjevnim uvjetima. Pojačana konstrukcija donjeg postroja i strele izrađena je za rad u kamenu, a hidraulika je dimenzionirana za velike priključke.",
      "Zbog raznolikosti konfiguracija cijenu formiramo po projektu. Javite nam vrstu radova i predviđeni broj sati godišnje i pripremit ćemo ponudu s planom održavanja.",
      "Kao i za ostatak programa, servis izlazi na teren u cijeloj Hrvatskoj, a u garantnom roku su dijelovi i rad besplatni.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: tbd("EU Stage V", ASK) },
    {
      key: "operatingWeight",
      value: tbd("33.500 kg", "Potvrditi radnu masu", "izvedeno iz oznake modela SWE335F"),
      n: 33500,
      unitCode: "KGM",
    },
    { key: "power", value: tbd("186 kW (253 KS)", ASK) },
    { key: "diggingDepth", value: tbd("7.180 mm", ASK) },
    { key: "width", value: tbd("3.190 mm", ASK) },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: tbdRows(
        {
          operatingWeight: "33.500 kg",
          bucketCapacity: "1,60 m³",
          shippingLength: "11.150 mm",
          shippingWidth: "3.190 mm",
          heightOverCabin: "3.250 mm",
        },
        ASK,
      ),
    },
    {
      id: "engine",
      rows: tbdRows(
        {
          engineModel: "Cummins QSL9",
          emission: "EU Stage V",
          displacement: "8,9 l",
          power: "186 kW pri 1.950 o/min",
        },
        ASK,
      ),
    },
    {
      id: "hydraulics",
      rows: tbdRows(
        {
          hydraulicType: "BOSCH Rexroth, promjenjivi protok",
          pumpFlow: "2 × 260 l/min",
          hydraulicPressure: "34,3 MPa",
        },
        ASK,
      ),
    },
    {
      id: "workingRange",
      rows: tbdRows(
        {
          diggingDepth: "7.180 mm",
          diggingReach: "10.900 mm",
          bucketForce: "216 kN",
          armForce: "180 kN",
        },
        ASK,
      ),
    },
  ],

  features: [
    "premiumComponents",
    "madeForEurope",
    "warranty",
    "fieldService",
    "easyMaintenance",
    "localSupport",
  ],

  gallery: { main: "proizvodi/swe335f/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE335F"),

  related: ["swe08f"],
} as const satisfies ProductModel;
