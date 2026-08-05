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
export const swl2830 = {
  slug: "swl2830",
  name: "SWL 2830",
  fullName: "Sunward SWL 2830",
  category: "utovarivaci",
  group: "kotacni-mini-utovarivaci",
  order: 30,

  price: { kind: "onRequest" },

  intro:
    "Ulazni kotačni mini utovarivač nosivosti 750 kg. Okreće se u mjestu, radi na tvrdoj podlozi i prolazi kroz otvore kroz koje veći stroj ne stane.",

  description: {
    heading: "Sunward SWL 2830 kotačni mini utovarivač",
    paragraphs: [
      "Na betonu, asfaltu i uređenom dvorištu kotačna izvedba je brža i jeftinija za održavanje od gusjenične. SWL 2830 je namijenjen radu oko objekta, u halama, na farmama i na komunalnim poslovima gdje se stalno mijenja pozicija.",
      "Sa 48,6 kW stroj pogoni standardne priključke — hvataljku, vilice, četku i mješalicu. Kompletnu ponudu dodatne opreme isporučujemo iz vlastitog programa.",
    ],
  },

  shortSpecs: [
    { key: "ratedCapacity", value: "750 kg" },
    { key: "tippingLoad", value: "1.500 kg" },
    { key: "power", value: "48,6 kW" },
    { key: "operatingWeight", value: "2.830 kg", n: 2830, unitCode: "KGM" },
    { key: "liftHeight", value: "2.320 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "2.830 kg",
          width: "1.293 mm",
          shippingLength: "3.318 mm (s lopatom)",
          heightOverCabin: "2.014 mm (do ROPS-a)",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          engineModel: "Kubota V2403-CR-TE4B",
          emission: "EU Stage V",
          power: "48,6 kW",
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
          ratedCapacity: "750 kg",
          tippingLoad: "1.500 kg",
          breakoutForce: "2.000 kg",
          liftHeight: "2.320 mm",
          travelSpeed: "13 km/h",
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

  gallery: { main: "proizvodi/swl2830/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWL 2830"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWL 2830"),

  related: ["swl3230", "swtl4538"],
} as const satisfies ProductModel;
