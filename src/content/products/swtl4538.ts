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
export const swtl4538 = {
  slug: "swtl4538",
  name: "SWTL 4538",
  fullName: "Sunward SWTL 4538",
  category: "utovarivaci",
  group: "gusjenicni-utovarivaci",
  order: 10,

  price: { kind: "onRequest" },

  intro:
    "Gusjenični utovarivač nosivosti 1.200 kg. Gusjenice raspoređuju masu po velikoj površini, pa stroj radi na blatu, pijesku i svježe nasutom terenu gdje kotačni utovarivač propada.",

  description: {
    heading: "Sunward SWTL 4538 gusjenični utovarivač",
    paragraphs: [
      "Prednost gusjenične izvedbe je niski pritisak na tlo. Na mekanoj podlozi, u šumi i na neuređenom terenu SWTL 4538 zadržava vučnu silu tamo gdje kotači proklizavaju, a pritom ne razara podlogu na kojoj se radi.",
      "Sa 55,4 kW i prevrtnom nosivošću od 3.430 kg stroj prihvaća pun raspon priključaka — mulčer, freza, hvataljka i mješalica betona rade u punom kapacitetu. Priključke isporučujemo i servisiramo sami.",
    ],
  },

  shortSpecs: [
    { key: "ratedCapacity", value: "1.200 kg" },
    { key: "tippingLoad", value: "3.430 kg" },
    { key: "power", value: "55,4 kW" },
    { key: "operatingWeight", value: "4.400 kg", n: 4400, unitCode: "KGM" },
    { key: "liftHeight", value: "2.467 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "4.400 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          power: "55,4 kW",
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
          ratedCapacity: "1.200 kg",
          tippingLoad: "3.430 kg",
          liftHeight: "2.467 mm",
          breakoutForce: "3.385 kg",
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

  gallery: { main: "proizvodi/swtl4538/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWTL 4538"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWTL 4538"),

  related: ["swtl5238", "swl4038"],
} as const satisfies ProductModel;
