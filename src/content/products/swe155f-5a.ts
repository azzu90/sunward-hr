import { tbd } from "../placeholder";
import type { ProductModel } from "../types";

const ASK = "Potvrditi kod Sunwarda/Zorana — model (još) nije naveden na sunward.eu, nema javnog datasheeta";

/**
 * Lesart dieser Datei — Ausnahme vom sonstigen Muster: SWE 155F-5A ist ein
 * aktuelles Sunward-Modell, das Zoran bereits verkauft, aber sunward.eu
 * (Stand heute) nicht einzeln führt. Es gibt daher KEINE ANALYSIS.md- oder
 * DATASHEET-RESEARCH.md-Quelle dafür — im Unterschied zu jedem anderen
 * Modell in diesem Verzeichnis ist hier buchstäblich jeder Spec-Wert
 * unbestätigt, nicht nur einzelne Felder. Vorläufige Einordnung in
 * "Srednji bageri" nach Zorans Angabe (PRD Abschnitt 7, "Abweichung"-Notiz).
 *
 * Nur Name und Preis sind von Zoran bestätigt. Sobald Sunward das Modell
 * offiziell listet oder Zoran ein Datenblatt liefert, werden die tbd()-
 * Felder unten ersetzt.
 */
export const swe155f5a = {
  slug: "swe155f-5a",
  name: "SWE 155F-5A",
  fullName: "Sunward SWE 155F-5A",
  category: "bageri",
  group: "srednji-bageri",
  order: 142,

  price: { kind: "eur", amount: 90000, tax: "net" },

  intro:
    "Aktualni Sunward model iz srednjeg razreda bagera — Zoran ga već prodaje i servisira, iako ga proizvođač zasad ne vodi zasebno na svojoj europskoj stranici. Tehničke podatke dopunjujemo čim stignu službeni izvori.",

  description: {
    heading: "Sunward SWE 155F-5A srednji bager",
    paragraphs: [
      "SWE 155F-5A je noviji model u Sunwardovoj ponudi koji sunward.eu trenutačno ne navodi kao zaseban proizvod — zato ovdje još nemamo ni službene tehničke podatke ni fotografiju stroja. Radi se o stvarnom, dostupnom modelu, a ne o pretpostavci: Zoran ga uvozi i prodaje već sada.",
      "Kao i za sve strojeve iz programa, i za ovaj model vrijede ista garancija, financiranje uz učešće i servis na terenu iz Karlovca. Za konkretnu ponudu i dostupne tehničke detalje javite nam se izravno.",
    ],
  },

  shortSpecs: [
    { key: "emission", value: tbd("—", ASK) },
    { key: "operatingWeight", value: tbd("—", ASK) },
    { key: "power", value: tbd("—", ASK) },
    { key: "diggingDepth", value: tbd("—", ASK) },
    { key: "width", value: tbd("—", ASK) },
  ],

  datasheet: [
    {
      id: "dimensions",
      rows: [
        { key: "operatingWeight", value: tbd("—", ASK) },
        { key: "bucketCapacity", value: tbd("—", ASK) },
        { key: "width", value: tbd("—", ASK) },
        { key: "shippingLength", value: tbd("—", ASK) },
        { key: "heightOverCabin", value: tbd("—", ASK) },
      ],
    },
    {
      id: "engine",
      rows: [
        { key: "engineModel", value: tbd("—", ASK) },
        { key: "emission", value: tbd("—", ASK) },
        { key: "displacement", value: tbd("—", ASK) },
        { key: "power", value: tbd("—", ASK) },
      ],
    },
    {
      id: "hydraulics",
      rows: [
        { key: "hydraulicType", value: tbd("—", ASK) },
        { key: "pumpFlow", value: tbd("—", ASK) },
        { key: "hydraulicPressure", value: tbd("—", ASK) },
      ],
    },
    {
      id: "workingRange",
      rows: [
        { key: "diggingDepth", value: tbd("—", ASK) },
        { key: "diggingReach", value: tbd("—", ASK) },
        { key: "bucketForce", value: tbd("—", ASK) },
        { key: "armForce", value: tbd("—", ASK) },
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

  gallery: { main: "proizvodi/swe155f-5a/glavna" },
  video: tbd("", "Dostaviti YouTube poveznicu za SWE 155F-5A"),
  brochure: tbd("", "Dostaviti PDF brošuru za SWE 155F-5A"),

  related: ["swe155f-5", "swe155f"],
} as const satisfies ProductModel;
