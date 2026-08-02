import Link from "next/link";

import { ui } from "@/content/ui";

export interface Crumb {
  name: string;
  href?: string;
}

/**
 * Breadcrumb nach ANALYSIS.md §4 Punkt 2.
 *
 * Wichtig: die Gewichtsklasse (z.B. „Mini bageri") erscheint hier als
 * Station, obwohl sie NICHT in der URL steht — die Informationsarchitektur
 * bleibt damit die von sunward.eu, ohne die URL an eine Einschätzung zu
 * binden, die sich ändern kann.
 */
export function Breadcrumbs({ trail }: { trail: readonly Crumb[] }) {
  return (
    <nav aria-label={ui.nav.breadcrumb} className="py-3">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-ink-muted">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${crumb.name}-${i}`} className="flex items-center gap-1.5">
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="hover:text-brand-text hover:underline">
                  {crumb.name}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-ink-body">
                  {crumb.name}
                </span>
              )}
              {!isLast ? <span aria-hidden="true">{"/"}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
