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
export const swdm165s = {
  slug: "swdm165s",
  name: "SWDM 165S",
  fullName: "Sunward SWDM 165S",
  category: "busace-garniture",
  group: "busace-garniture-sve",
  order: 30,

  price: { kind: "onRequest" },

  intro:
    "Garnitura od 47 tona s istim pogonom kao SWDM 135, ali teža i stabilnija — veća masa znači mirniji rad na punom dosegu i veće dubine bušenja.",

  description: {
    heading: "Sunward SWDM 165S bušača garnitura",
    paragraphs: [
      "Dodatnih osam tona u odnosu na SWDM 135 nije samo masa nego stabilnost: garnitura zadržava geometriju pri dubokom bušenju i radu s teškom kelly šipkom, što izravno utječe na točnost pilota.",
      "Snaga od 186 kW i promjer do 1.500 mm ostaju nepromijenjeni. Izvedba S namijenjena je zahtjevnijim uvjetima tla i dužim radnim ciklusima.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "47.000 kg", n: 47000, unitCode: "KGM" },
    { key: "power", value: "186 kW" },
    { key: "drillDiameter", value: "1.500 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "47.000 kg",
          width: "2.550–3.800 mm (gusjenice uvučene / izvučene)",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Cummins QSB6.7",
          emission: "EU Stage V",
          power: "186 kW",
          ratedSpeed: "2.000 o/min",
        }),
      ],
    },
    {
      id: "hydraulics",
      rows: [
        ...rows({
          hydraulicType: "Dvije glavne pumpe",
          pumpFlow: "2 × 247 l/min",
          hydraulicPressure: "32 MPa (320 bar)",
        }),
      ],
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

  gallery: { main: "proizvodi/swdm165s/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWDM 165S"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWDM 165S"),

  related: ["swdm135", "swdm215s"],
} as const satisfies ProductModel;
