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
export const swe10fe = {
  slug: "swe10fe",
  name: "SWE 10FE",
  fullName: "Sunward SWE 10FE",
  category: "bageri",
  group: "mini-bageri",
  order: 20,
  electric: true,

  price: { kind: "eur", amount: 29000, tax: "net" },

  intro:
    "Baterijska verzija najmanjeg Sunward bagera. Ista masa i isti doseg kao SWE 08F, ali bez ispušnih plinova i uz bitno nižu buku — jedini način da se kopa u zatvorenom prostoru, u podrumu ili noću u naselju.",

  description: {
    heading: "Sunward SWE 10FE električni mini bager",
    paragraphs: [
      "Elektrifikacija ovdje nije marketinški dodatak nego rješenje za konkretna radilišta: unutrašnje rušenje, radovi u tunelima, staje i skladišta, te sve situacije u kojima dizelski ispuh nije prihvatljiv. Buka je niska dovoljno da se radi uz stambene objekte izvan uobičajenog radnog vremena.",
      "Sužavajuće gusjenice i priključna hidraulika preuzeti su iz dizelskog modela, pa vrijede isti priključci. Autonomiju i vrijeme punjenja potvrđujemo prema konfiguraciji baterije — javite nam predviđeni režim rada pa računamo zajedno.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "Bez emisija — električni pogon" },
    { key: "operatingWeight", value: "1.010 kg", n: 1010, unitCode: "KGM" },
    { key: "power", value: "5,5 kW" },
    { key: "diggingDepth", value: "1.440 mm" },
    { key: "width", value: "750–1.000 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.010 kg",
          width: "750–1.000 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "Bez emisija — električni pogon",
          engineModel: "Trofazni asinkroni elektromotor",
          batteryType: "Litij-željezo-fosfat (LiFePO₄)",
          power: "5,5 kW",
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
      id: "workingRange",
      rows: [
        ...rows({
          diggingDepth: "1.440 mm",
          diggingReach: "2.845 mm",
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

  gallery: { main: "proizvodi/swe10fe/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 10FE"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 10FE"),

  related: ["swe08f", "swe20fe"],
} as const satisfies ProductModel;
