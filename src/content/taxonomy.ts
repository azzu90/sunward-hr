import type { CategoryDef, CategorySlug } from "./types";

/**
 * Produkt-Taxonomie — acht Kategorien, 51 Modelle (ANALYSIS.md §8).
 *
 * URL-Entscheidung: nur die OBERKLASSE steht in der URL
 * (/proizvodi/bageri/swe60uf). Ein SWE60UF bleibt für immer ein „bager",
 * die Unterkategorie ist dagegen eine Einordnung, die sich ändern kann —
 * stünde sie in der URL, kostete jede Umklassifizierung eine 301.
 *
 * Die Unterkategorien (`groups`) verschwinden dadurch nicht: sie erscheinen
 * in der linken Sidebar (ANALYSIS.md §3), im Breadcrumb und als Anker
 * innerhalb der Kategorieseite.
 *
 * `shortSpecKeys` ist ein Vertrag: `assertContract()` in products/index.ts
 * prüft beim Build, dass jedes Modell genau diese Felder in genau dieser
 * Reihenfolge liefert. Vier Felder bei den Kategorien, die auch sunward.eu
 * nur mit vier zeigt — das ist keine Lücke.
 */
export const categories = {
  bageri: {
    slug: "bageri",
    name: "Bageri",
    nameSingular: "bager",
    lede: "Sunward bageri od 1 do 34 tone — od mini bagera koji prolazi kroz vrtna vrata do velikih strojeva za zemljane radove. Kao generalni zastupnik za Hrvatsku isporučujemo, servisiramo i financiramo cijeli program.",
    heroImage: "kategorije/bageri/hero",
    keywords: [
      "kineski bager",
      "sunward bager",
      "mini bager cijena",
      "mini bager cijena Hrvatska",
      "bager na rate",
    ],
    /**
     * Aufteilung exakt wie auf sunward.eu, NICHT nach Tonnage: dort zählen
     * SWE 25F bis SWE 50UF noch zu „Mini", „Kompaktni" beginnt erst bei
     * SWE 60UF. Eine Einordnung nach Gewicht läge hier falsch.
     */
    groups: [
      { slug: "kotacni-bageri", name: "Kotačni bageri", nameSingular: "kotačni bager", order: 10 },
      { slug: "mini-bageri", name: "Mini bageri", nameSingular: "mini bager", order: 20 },
      {
        slug: "kompaktni-bageri",
        name: "Kompaktni bageri",
        nameSingular: "kompaktni bager",
        order: 30,
      },
      { slug: "srednji-bageri", name: "Srednji bageri", nameSingular: "srednji bager", order: 40 },
      { slug: "veliki-bageri", name: "Veliki bageri", nameSingular: "veliki bager", order: 50 },
    ],
    shortSpecKeys: ["emission", "operatingWeight", "power", "diggingDepth", "width"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "workingRange"],
    order: 10,
  },

  utovarivaci: {
    slug: "utovarivaci",
    name: "Utovarivači",
    nameSingular: "utovarivač",
    lede: "Kompaktni utovarivači Sunward — gusjenični za mekan i nestabilan teren, kotačni mini za tvrde podloge i rad oko objekta. Snažna hidraulika za prihvat priključaka u serijskoj opremi.",
    heroImage: "kategorije/utovarivaci/hero",
    keywords: ["sunward utovarivač", "kompaktni utovarivač cijena", "kineski utovarivač"],
    groups: [
      {
        slug: "gusjenicni-utovarivaci",
        name: "Gusjenični utovarivači",
        nameSingular: "gusjenični utovarivač",
        order: 10,
      },
      {
        slug: "kotacni-mini-utovarivaci",
        name: "Kotačni mini utovarivači",
        nameSingular: "kotačni mini utovarivač",
        order: 20,
      },
    ],
    shortSpecKeys: ["ratedCapacity", "tippingLoad", "power", "operatingWeight", "liftHeight"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "performance"],
    order: 20,
  },

  "zglobni-utovarivaci": {
    slug: "zglobni-utovarivaci",
    name: "Zglobni utovarivači",
    nameSingular: "zglobni utovarivač",
    lede: "Zglobni utovarivači za poljoprivredu, komunalne službe i rad u skučenom prostoru — zglobno upravljanje daje mali radijus okretanja bez oštećivanja podloge.",
    heroImage: "kategorije/zglobni-utovarivaci/hero",
    keywords: ["zglobni utovarivač cijena", "mini zglobni utovarivač", "sunward SL utovarivač"],
    groups: [
      {
        slug: "zglobni-utovarivaci-svi",
        name: "Svi zglobni utovarivači",
        nameSingular: "zglobni utovarivač",
        order: 10,
      },
    ],
    shortSpecKeys: ["ratedCapacity", "operatingWeight", "power", "bucketCapacity"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "performance"],
    order: 30,
  },

  "busace-garniture": {
    slug: "busace-garniture",
    name: "Bušače garniture",
    nameSingular: "bušača garnitura",
    lede: "Rotacijske bušače garniture Sunward za temeljenje, pilote i posebne geotehničke radove — od 28 do 134 tone radne mase i promjera bušenja do 2.500 mm.",
    heroImage: "kategorije/busace-garniture/hero",
    keywords: ["bušača garnitura", "garnitura za pilote", "sunward SWDM"],
    groups: [
      {
        slug: "busace-garniture-sve",
        name: "Sve bušače garniture",
        nameSingular: "bušača garnitura",
        order: 10,
      },
    ],
    shortSpecKeys: ["emission", "operatingWeight", "power", "drillDiameter"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "performance"],
    order: 40,
  },

  "zglobne-radne-platforme": {
    slug: "zglobne-radne-platforme",
    name: "Zglobne radne platforme",
    nameSingular: "zglobna radna platforma",
    lede: "Zglobne platforme s dosegom do 22 metra visine — zglobna strela omogućuje rad iznad prepreka, tamo gdje ravna dizalica ne dolazi.",
    heroImage: "kategorije/zglobne-radne-platforme/hero",
    keywords: ["zglobna platforma", "radna platforma cijena", "zglobna košara"],
    groups: [
      {
        slug: "zglobne-radne-platforme-sve",
        name: "Sve zglobne platforme",
        nameSingular: "zglobna radna platforma",
        order: 10,
      },
    ],
    shortSpecKeys: ["workingHeight", "workRadius", "platformCapacity", "operatingWeight"],
    datasheetBlocks: ["dimensions", "powertrain", "performance"],
    order: 50,
  },

  "skarasti-podizni-strojevi": {
    slug: "skarasti-podizni-strojevi",
    name: "Škarasti podizni strojevi",
    nameSingular: "škarasti podizni stroj",
    lede: "Škarasta dizala za radove na visini od 5,6 do 20 metara — električna za rad u zatvorenom i na ravnoj podlozi, terenska za gradilište i neravan teren.",
    heroImage: "kategorije/skarasti-podizni-strojevi/hero",
    keywords: ["škarasta platforma", "podizna košara cijena", "škarasto dizalo Hrvatska"],
    groups: [
      {
        slug: "skarasti-elektricni",
        name: "Električni",
        nameSingular: "električni škarasti stroj",
        order: 10,
      },
      {
        slug: "skarasti-terenski",
        name: "Terenski",
        nameSingular: "terenski škarasti stroj",
        order: 20,
      },
    ],
    shortSpecKeys: ["workingHeight", "platformCapacity", "width", "operatingWeight", "driveType"],
    datasheetBlocks: ["dimensions", "powertrain", "performance"],
    order: 60,
  },

  "teleskopske-dizalice": {
    slug: "teleskopske-dizalice",
    name: "Teleskopske dizalice",
    nameSingular: "teleskopska dizalica",
    lede: "Gusjenične teleskopske dizalice nosivosti 5 i 10 tona — stabilne na neuređenom terenu i spremne za rad bez postavljanja stabilizatora.",
    heroImage: "kategorije/teleskopske-dizalice/hero",
    keywords: ["teleskopska dizalica", "gusjenična dizalica", "sunward SWTC"],
    groups: [
      {
        slug: "teleskopske-dizalice-sve",
        name: "Sve teleskopske dizalice",
        nameSingular: "teleskopska dizalica",
        order: 10,
      },
    ],
    shortSpecKeys: ["emission", "operatingWeight", "maxLoad", "workingHeight"],
    datasheetBlocks: ["dimensions", "engine", "performance"],
    order: 70,
  },

  "teleskopski-utovarivaci": {
    slug: "teleskopski-utovarivaci",
    name: "Teleskopski utovarivači",
    nameSingular: "teleskopski utovarivač",
    lede: "Teleskopski utovarivač spaja doseg dizalice i snagu utovarivača — jedan stroj za utovar, podizanje i rad na visini do 7,4 metra.",
    heroImage: "kategorije/teleskopski-utovarivaci/hero",
    keywords: ["teleskopski utovarivač cijena", "sunward telehandler", "teleskopski viličar"],
    groups: [
      {
        slug: "teleskopski-utovarivaci-svi",
        name: "Svi teleskopski utovarivači",
        nameSingular: "teleskopski utovarivač",
        order: 10,
      },
    ],
    shortSpecKeys: ["emission", "liftHeight", "maxOutreach", "power", "operatingWeight"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "performance"],
    order: 80,
  },
} as const satisfies Record<CategorySlug, CategoryDef>;

export const categoryList: readonly CategoryDef[] = Object.values(categories).sort(
  (a, b) => a.order - b.order,
);

export function getCategory(slug: string): CategoryDef | undefined {
  return (categories as Record<string, CategoryDef>)[slug];
}
