import type { Attachment, CategoryDef, ProductModel } from "./types";

/**
 * Die einzige Stelle im Projekt, an der URLs entstehen.
 *
 * Dadurch können Sitemap, Breadcrumbs, Navigation und interne Links gar
 * nicht auseinanderlaufen. Kein Pfad wird irgendwo sonst als String
 * zusammengesetzt.
 */
export const routes = {
  home: () => "/",
  oNama: () => "/o-nama",
  proizvodi: () => "/proizvodi",
  category: (c: CategoryDef | string) => `/proizvodi/${typeof c === "string" ? c : c.slug}`,
  product: (p: ProductModel) => `/proizvodi/${p.category}/${p.slug}`,
  dodatnaOprema: () => "/dodatna-oprema",
  attachment: (a: Attachment | string) => `/dodatna-oprema/${typeof a === "string" ? a : a.slug}`,
  financiranje: () => "/financiranje",
  servis: () => "/servis",
  jamstvo: () => "/jamstvo",
  primjene: () => "/primjene",
  kontakt: () => "/kontakt",
  impresum: () => "/impresum",
  privatnost: () => "/politika-privatnosti",
  kolacici: () => "/kolacici",
} as const;

/**
 * Statische Routen.
 *
 * `built` sagt, ob die Seite bereits existiert. Nur gebaute Routen kommen
 * in die Sitemap — eine Sitemap, die auf 404er zeigt, schadet aktiv.
 *
 * Phase 2 setzt das Flag jeweils auf true, sobald die Seite steht. Die
 * Liste steht schon vollständig hier, damit beim Bauen nichts vergessen
 * wird und die Navigation daraus abgeleitet werden kann.
 */
export const staticRoutes: readonly { href: string; priority: number; built: boolean }[] = [
  { href: routes.home(), priority: 1.0, built: true },
  { href: routes.proizvodi(), priority: 0.9, built: true },
  { href: routes.dodatnaOprema(), priority: 0.8, built: true },
  { href: routes.financiranje(), priority: 0.8, built: false },
  { href: routes.servis(), priority: 0.8, built: false },
  { href: routes.jamstvo(), priority: 0.7, built: false },
  { href: routes.oNama(), priority: 0.6, built: false },
  { href: routes.primjene(), priority: 0.6, built: false },
  { href: routes.kontakt(), priority: 0.7, built: false },
  { href: routes.impresum(), priority: 0.2, built: false },
  { href: routes.privatnost(), priority: 0.2, built: false },
  { href: routes.kolacici(), priority: 0.2, built: false },
];

const builtHrefs = new Set(staticRoutes.filter((r) => r.built).map((r) => r.href));

/**
 * Existiert die Seite schon? Navigation und Footer blenden noch nicht
 * gebaute Seiten aus, damit im Review keine 404er anklickbar sind.
 * Dynamische Routen (Kategorien, Modelle) existieren immer.
 */
export function isBuilt(href: string): boolean {
  if (!builtHrefs.has(href)) {
    return !staticRoutes.some((r) => r.href === href);
  }
  return true;
}
