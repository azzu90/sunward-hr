import type { CategoryDef, CategorySlug } from "./types";

/**
 * Produkt-Taxonomie.
 *
 * URL-Entscheidung: nur die OBERKLASSE steht in der URL
 * (/proizvodi/bageri/swe60uf). Ein SWE60UF bleibt für immer ein „bager",
 * die Gewichtsklasse ist dagegen eine Einschätzung, die Zoran jederzeit
 * ändern kann — stünde sie in der URL, kostete jede Umklassifizierung eine
 * 301-Weiterleitung.
 *
 * Die Gewichtsklassen (`groups`) verschwinden dadurch nicht: sie erscheinen
 * in der linken Sidebar (ANALYSIS.md §3), im Breadcrumb und als Anker
 * innerhalb der Kategorieseite.
 */
export const categories = {
  bageri: {
    slug: "bageri",
    name: "Bageri",
    nameSingular: "bager",
    lede: "Sunward bageri od 1 do 40 tona — od mini bagera za uske prilaze do velikih strojeva za zemljane radove. Kao generalni zastupnik za Hrvatsku isporučujemo, servisiramo i financiramo cijeli program.",
    heroImage: "kategorije/bageri/hero",
    keywords: [
      "kineski bager",
      "sunward bager",
      "mini bager cijena",
      "mini bager cijena Hrvatska",
      "bager na rate",
    ],
    groups: [
      { slug: "mini-bageri", name: "Mini bageri", nameSingular: "mini bager", order: 10 },
      {
        slug: "kompaktni-bageri",
        name: "Kompaktni bageri",
        nameSingular: "kompaktni bager",
        order: 20,
      },
      { slug: "srednji-bageri", name: "Srednji bageri", nameSingular: "srednji bager", order: 30 },
      { slug: "veliki-bageri", name: "Veliki bageri", nameSingular: "veliki bager", order: 40 },
      {
        slug: "elektricni-bageri",
        name: "Električni bageri",
        nameSingular: "električni bager",
        order: 50,
      },
    ],
    shortSpecKeys: ["emission", "operatingWeight", "power", "diggingDepth", "width"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "workingRange"],
    order: 10,
  },

  utovarivaci: {
    slug: "utovarivaci",
    name: "Utovarivači",
    nameSingular: "utovarivač",
    lede: "Zglobni utovarivači Sunward za građevinu, poljoprivredu i komunalne radove — snažna hidraulika i provjerene komponente uz cijenu koja se isplati.",
    heroImage: "kategorije/utovarivaci/hero",
    keywords: ["sunward utovarivač", "zglobni utovarivač cijena", "kineski utovarivač"],
    groups: [
      { slug: "utovarivaci-svi", name: "Svi utovarivači", nameSingular: "utovarivač", order: 10 },
    ],
    shortSpecKeys: ["emission", "operatingWeight", "power", "bucketCapacity", "tippingLoad"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "performance"],
    order: 20,
  },

  "teleskopski-utovarivaci": {
    slug: "teleskopski-utovarivaci",
    name: "Teleskopski utovarivači",
    nameSingular: "teleskopski utovarivač",
    lede: "Teleskopski utovarivač spaja doseg dizalice i snagu utovarivača — jedan stroj za utovar, podizanje i rad na visini.",
    heroImage: "kategorije/teleskopski-utovarivaci/hero",
    keywords: ["teleskopski utovarivač cijena", "sunward telehandler"],
    groups: [
      {
        slug: "teleskopski-svi",
        name: "Svi teleskopski utovarivači",
        nameSingular: "teleskopski utovarivač",
        order: 10,
      },
    ],
    shortSpecKeys: ["emission", "operatingWeight", "power", "liftHeight", "liftCapacity"],
    datasheetBlocks: ["dimensions", "engine", "hydraulics", "performance"],
    order: 30,
  },

  "podizne-platforme": {
    slug: "podizne-platforme",
    name: "Podizne platforme",
    nameSingular: "podizna platforma",
    lede: "Podizne košare za radove na visini od 6 do 14 metara — za održavanje, montažu i komunalne poslove.",
    heroImage: "kategorije/podizne-platforme/hero",
    keywords: ["podizna košara cijena", "podizna platforma Hrvatska"],
    groups: [
      {
        slug: "platforme-sve",
        name: "Sve platforme",
        nameSingular: "podizna platforma",
        order: 10,
      },
    ],
    shortSpecKeys: ["workingHeight", "platformCapacity", "operatingWeight", "width", "travelSpeed"],
    datasheetBlocks: ["dimensions", "powertrain", "performance"],
    order: 40,
  },
} as const satisfies Record<CategorySlug, CategoryDef>;

export const categoryList: readonly CategoryDef[] = Object.values(categories).sort(
  (a, b) => a.order - b.order,
);

export function getCategory(slug: string): CategoryDef | undefined {
  return (categories as Record<string, CategoryDef>)[slug];
}
