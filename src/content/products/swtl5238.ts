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
export const swtl5238 = {
  slug: "swtl5238",
  name: "SWTL 5238",
  fullName: "Sunward SWTL 5238",
  category: "utovarivaci",
  group: "gusjenicni-utovarivaci",
  order: 20,

  price: { kind: "onRequest" },

  intro:
    "Najjači kompaktni utovarivač u programu: 85,1 kW i nosivost od 1.500 kg. Snaga koja priključke pogoni u punom kapacitetu, a ne na granici.",

  description: {
    heading: "Sunward SWTL 5238 gusjenični utovarivač",
    paragraphs: [
      "Skok s 55,4 na 85,1 kW mijenja što stroj može vući. Velika freza za asfalt, širok mulčer i hidraulički čekić traže protok koji manji strojevi ne daju — SWTL 5238 ih pogoni bez pada radne brzine.",
      "Uz prevrtnu nosivost od 4.286 kg stroj utovaruje kamion s punom žlicom bez traženja idealne pozicije. Za šumarske i komunalne poslove ovo je gornja granica kompaktnog razreda.",
    ],
  },

  shortSpecs: [
    { key: "ratedCapacity", value: "1.500 kg" },
    { key: "tippingLoad", value: "4.286 kg" },
    { key: "power", value: "85,1 kW" },
    { key: "operatingWeight", value: "5.375 kg", n: 5375, unitCode: "KGM" },
    { key: "liftHeight", value: "2.467 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "5.375 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          power: "85,1 kW",
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
          ratedCapacity: "1.500 kg",
          tippingLoad: "4.286 kg",
          liftHeight: "2.467 mm",
          breakoutForce: "3.900 kg",
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

  gallery: { main: "proizvodi/swtl5238/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWTL 5238"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWTL 5238"),

  related: ["swtl4538", "swl4038"],
} as const satisfies ProductModel;
