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
 */
export const swe20fe = {
  slug: "swe20fe",
  name: "SWE 20FE",
  fullName: "Sunward SWE 20FE",
  category: "bageri",
  group: "mini-bageri",
  order: 60,
  electric: true,

  price: { kind: "eur", amount: 45000, tax: "net", note: "bez kabine: 43.700 €" },

  intro:
    "Baterijski bager dvotonskog razreda s dubinom kopanja od 2.380 mm — najveći električni Sunward mini bager, namijenjen radu bez ispuha uz zadržan doseg dizelskog ekvivalenta.",

  description: {
    heading: "Sunward SWE 20FE električni mini bager",
    paragraphs: [
      "Za rad u zatvorenom, u tunelima i u zonama sa strogim ograničenjima buke i emisija SWE 20FE nudi doseg koji je dosad tražio dizelski stroj. Elektromotor daje puni okretni moment odmah, pa je odziv hidraulike pri kopanju izravan.",
      "Održavanje je jednostavnije nego kod dizelskog stroja — nema izmjene ulja i filtera motora ni sustava naknadne obrade ispušnih plinova. Autonomiju potvrđujemo prema režimu rada i konfiguraciji baterije.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "Bez emisija — električni pogon" },
    { key: "operatingWeight", value: "1.920 kg", n: 1920, unitCode: "KGM" },
    { key: "power", value: "10 kW" },
    { key: "diggingDepth", value: "2.380 mm" },
    { key: "width", value: "990–1.360 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.920 kg",
          width: "990–1.360 mm",
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
          power: "10 kW",
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
          diggingDepth: "2.380 mm",
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

  gallery: { main: "proizvodi/swe20fe/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 20FE"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 20FE"),

  related: ["swe10fe", "swe20f-1"],
} as const satisfies ProductModel;
