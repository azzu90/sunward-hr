import { isBuilt, routes } from "./routes";
import { site } from "./site";
import { categoryList } from "./taxonomy";
import { ui } from "./ui";
import type { FooterColumn, NavNode } from "./types";

/**
 * Navigation.
 *
 * Produktkategorien werden aus der Taxonomie abgeleitet, damit sie nicht
 * doppelt gepflegt werden müssen.
 *
 * Noch nicht gebaute Seiten werden über isBuilt() ausgeblendet — sonst
 * wären im Review 404er anklickbar. Sobald Phase 2 eine Seite baut und das
 * Flag in routes.ts umlegt, erscheint sie hier automatisch.
 */
function visible(nodes: readonly NavNode[]): NavNode[] {
  return nodes.filter((n) => n.external || !n.href || isBuilt(n.href));
}

export const mainNav: readonly NavNode[] = visible([
  {
    id: "proizvodi",
    label: "Strojevi",
    href: routes.proizvodi(),
    children: categoryList.map((c) => ({
      id: c.slug,
      label: c.name,
      href: routes.category(c),
    })),
  },
  {
    id: "dodatna-oprema",
    label: "Dodatna oprema",
    href: routes.dodatnaOprema(),
    badge: "NOVO",
  },
  // Servis vor Financiranje — dieselbe Position wie „Service & Parts" vor
  // „Finance" bei sunward.eu (ANALYSIS.md §1).
  { id: "servis", label: "Servis i dijelovi", href: routes.servis() },
  { id: "financiranje", label: "Financiranje", href: routes.financiranje() },
  { id: "jamstvo", label: "Jamstvo", href: routes.jamstvo() },
  { id: "o-nama", label: "O nama", href: routes.oNama() },
  { id: "kontakt", label: "Kontakt", href: routes.kontakt() },
]);

export const footerColumns: readonly FooterColumn[] = [
  {
    id: "products",
    heading: ui.footer.productsHeading,
    links: visible([
      ...categoryList.map((c) => ({
        id: c.slug,
        label: c.name,
        href: routes.category(c),
      })),
      { id: "dodatna-oprema", label: "Dodatna oprema", href: routes.dodatnaOprema() },
    ]),
  },
  {
    id: "company",
    heading: ui.footer.companyHeading,
    links: visible([
      { id: "o-nama", label: "O nama", href: routes.oNama() },
      { id: "servis", label: "Servis i dijelovi", href: routes.servis() },
      { id: "financiranje", label: "Financiranje", href: routes.financiranje() },
      { id: "jamstvo", label: "Jamstvo", href: routes.jamstvo() },
      { id: "primjene", label: "Primjene", href: routes.primjene() },
      {
        id: "drvosped",
        label: site.parent.name,
        href: site.parent.url,
        external: true,
      },
      {
        id: "sunward-eu",
        label: "Otkrijte našu globalnu stranicu",
        href: "https://sunward.eu",
        external: true,
      },
    ]),
  },
  {
    id: "legal",
    heading: ui.footer.legalHeading,
    links: visible([
      { id: "impresum", label: "Impresum", href: routes.impresum() },
      { id: "privatnost", label: "Politika privatnosti", href: routes.privatnost() },
      { id: "kolacici", label: "Kolačići", href: routes.kolacici() },
    ]),
  },
].filter((column) => column.links.length > 0);
