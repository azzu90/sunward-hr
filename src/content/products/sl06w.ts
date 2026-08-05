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
export const sl06w = {
  slug: "sl06w",
  name: "SL 06W",
  fullName: "Sunward SL 06W",
  category: "zglobni-utovarivaci",
  group: "zglobni-utovarivaci-svi",
  order: 10,

  price: { kind: "onRequest" },

  intro:
    "Zglobni utovarivač od 1,7 tone s nosivošću od 600 kg. Zglobno upravljanje daje mali radijus okretanja bez proklizavanja kotača — stroj ne razara travu ni betonski pod.",

  description: {
    heading: "Sunward SL 06W zglobni utovarivač",
    paragraphs: [
      "Za razliku od utovarivača s upravljanjem proklizavanjem, zglobni stroj skreće savijanjem šasije. Kotači se kotrljaju umjesto da stružu, pa se SL 06W koristi ondje gdje podloga mora ostati neoštećena: u stajama, na sportskim terenima, u vrtnim centrima i oko uređenih objekata.",
      "Uz 18,2 kW i žlicu od 0,26 m³ stroj pokriva svakodnevni transport materijala, čišćenje i utovar na malim gospodarstvima. Mala masa znači i nisku potrošnju.",
    ],
  },

  shortSpecs: [
    { key: "ratedCapacity", value: "600 kg" },
    { key: "operatingWeight", value: "1.700 kg", n: 1700, unitCode: "KGM" },
    { key: "power", value: "18,2 kW" },
    { key: "bucketCapacity", value: "0,26 m³" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "1.700 kg",
          bucketCapacity: "0,26 m³",
          width: "1.120 mm",
          shippingLength: "3.669 mm (s lopatom)",
          heightOverCabin: "2.310 mm (do ROPS-a)",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Kubota D1105",
          emission: "EU Stage V",
          power: "18,2 kW",
          ratedSpeed: "2.400 o/min",
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
          ratedCapacity: "600 kg",
          breakoutForce: "13 kN",
          travelSpeed: "12 km/h",
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

  gallery: { main: "proizvodi/sl06w/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SL 06W"),
  brochure: tbd("", "Dostaviti PDF brošuru za SL 06W"),

  related: ["sl12w", "swl2830"],
} as const satisfies ProductModel;
