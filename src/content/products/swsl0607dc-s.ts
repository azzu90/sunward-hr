import { rows, tbd } from "../placeholder";
import type { ProductModel } from "../types";

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
export const swsl0607dcs = {
  slug: "swsl0607dc-s",
  name: "SWSL 0607DC-S",
  fullName: "Sunward SWSL 0607DC-S",
  category: "skarasti-podizni-strojevi",
  group: "skarasti-elektricni",
  order: 10,

  price: { kind: "eur", amount: 9000, tax: "net" },

  intro:
    "Najmanje škarasto dizalo u programu: radna visina 5,6 metara pri širini od samo 76 centimetara. Prolazi kroz standardna vrata i stane u teretno dizalo.",

  description: {
    heading: "Sunward SWSL 0607DC-S škarasto dizalo",
    paragraphs: [
      "Širina od 0,76 metra je odlučujuća specifikacija ovog stroja — prolazi kroz uobičajene otvore u zgradama, pa se koristi za održavanje unutar objekta bez rastavljanja. Masa od 900 kg dopušta rad na većini međukatnih konstrukcija.",
      "Električni pogon i nulte emisije podrazumijevaju se za rad u zatvorenom. Nosivost od 240 kg prima dva radnika s alatom.",
    ],
  },

  shortSpecs: [
    { key: "workingHeight", value: "5,6 m" },
    { key: "platformCapacity", value: "240 kg" },
    { key: "width", value: "0,76 m" },
    { key: "operatingWeight", value: "900 kg", n: 900, unitCode: "KGM" },
    { key: "driveType", value: "Električni" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "900 kg",
          width: "0,76 m",
          shippingLength: "1,44 m",
        }),
      ],
    },
    {
      id: "powertrain",
      rows: [
        ...rows({
          driveType: "Električni",
          travelSpeed: "0,8 / 3,6 km/h (podignuto / spušteno)",
          gradeability: "30 %",
        }),
      ],
    },
    {
      id: "performance",
      rows: [
        ...rows({
          liftHeight: "3,0–3,6 m",
          workingHeight: "5,6 m",
          platformCapacity: "240 kg",
        }),
      ],
    },
  ],

  features: ["madeForEurope", "premiumComponents", "warranty", "financing"],

  gallery: { main: "proizvodi/swsl0607dc-s/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWSL 0607DC-S"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWSL 0607DC-S"),

  related: ["swsl0607dc", "swsl0807dc"],
} as const satisfies ProductModel;
