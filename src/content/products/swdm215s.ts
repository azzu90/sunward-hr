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
export const swdm215s = {
  slug: "swdm215s",
  name: "SWDM 215S",
  fullName: "Sunward SWDM 215S",
  category: "busace-garniture",
  group: "busace-garniture-sve",
  order: 40,

  price: { kind: "onRequest" },

  intro:
    "Garnitura od 65 tona i 252 kW. Prelazak u razred u kojem se rade duboki piloti za infrastrukturne objekte i mostove.",

  description: {
    heading: "Sunward SWDM 215S bušača garnitura",
    paragraphs: [
      "Sa 252 kW i 65 tona radne mase SWDM 215S dosiže dubine koje manje garniture ne pokrivaju. Pogon i masa dimenzionirani su za kontinuirani rad u tvrdim i heterogenim tlima.",
      "Za velike infrastrukturne projekte odlučuje kombinacija dubine, promjera i pouzdanosti u dugim smjenama. Garancija do 5 godina ili 5.000 radnih sati vrijedi i za ovu klasu strojeva.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "65.000 kg", n: 65000, unitCode: "KGM" },
    { key: "power", value: "252 kW" },
    { key: "drillDiameter", value: "1.500 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "65.000 kg",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "252 kW",
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
          drillDiameter: "1.500 mm",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing", "fieldService"],

  gallery: { main: "proizvodi/swdm215s/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWDM 215S"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWDM 215S"),

  related: ["swdm165s", "swdm245"],
} as const satisfies ProductModel;
