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
export const swe50uf = {
  slug: "swe50uf",
  name: "SWE 50UF",
  fullName: "Sunward SWE 50UF",
  category: "bageri",
  group: "mini-bageri",
  order: 100,

  price: { kind: "onRequest" },

  intro:
    "Najveći stroj koji sunward.eu još vodi u mini razredu: 5.480 kg i 29,7 kW. Snaga srednjeg bagera u gabaritu koji se prevozi bez posebne dozvole.",

  description: {
    heading: "Sunward SWE 50UF bager",
    paragraphs: [
      "Skok s 18,2 na 29,7 kW mijenja karakter stroja. SWE 50UF kontinuirano radi s hidrauličkim čekićem, probija tvrdu podlogu i utovaruje kamion bez čekanja između ciklusa. Dubina kopanja od 3.375 mm pokriva i dublje infrastrukturne rovove.",
      "Za tvrtke koje rade više radilišta u nizu ovo je najisplativija točka u programu — dovoljno stroja za ozbiljan posao, još uvijek jednostavan za premještanje. Za sve Sunward strojeve dolazimo na teren; garancija je do 3 godine ili 5.000 radnih sati.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: "EU Stage V" },
    { key: "operatingWeight", value: "5.480 kg", n: 5480, unitCode: "KGM" },
    { key: "power", value: "29,7 kW" },
    { key: "diggingDepth", value: "3.375 mm" },
    { key: "width", value: "2.000 mm" },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        ...rows({
          operatingWeight: "5.480 kg",
          width: "2.000 mm",
        }),
      ],
    },
    {
      id: "engine",
      rows: [
        ...rows({
          emission: "EU Stage V",
          power: "29,7 kW",
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
          diggingDepth: "3.375 mm",
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

  gallery: { main: "proizvodi/swe50uf/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 50UF"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 50UF"),

  related: ["swe35uf", "swe60uf"],
} as const satisfies ProductModel;
