import Link from "next/link";

import { routes } from "@/content/routes";
import { categoryList } from "@/content/taxonomy";
import type { CategoryDef, GroupSlug } from "@/content/types";

/**
 * Linke Sidebar mit dem vollständigen Kategorienbaum (ANALYSIS.md §3).
 *
 * Hier erscheinen die Gewichtsklassen, die bewusst NICHT in der URL
 * stehen — als Sprungmarken innerhalb der Kategorieseite. Die
 * Informationsarchitektur von sunward.eu bleibt damit erhalten, ohne die
 * URL an eine änderbare Einschätzung zu binden.
 */
export function CategorySidebar({
  active,
  groupCounts,
}: {
  active: CategoryDef;
  groupCounts: ReadonlyMap<GroupSlug, number>;
}) {
  return (
    <nav aria-label={active.name} className="text-sm">
      <ul className="flex flex-col gap-1">
        {categoryList.map((category) => {
          const isActive = category.slug === active.slug;
          return (
            <li key={category.slug}>
              <Link
                href={routes.category(category)}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "block border-l-2 border-brand bg-surface-alt px-3 py-2 font-bold text-ink"
                    : "block border-l-2 border-transparent px-3 py-2 text-ink-body hover:border-line-strong hover:bg-surface-alt"
                }
              >
                {category.name}
              </Link>

              {isActive ? (
                <ul className="mt-1 mb-2 ml-3 flex flex-col gap-0.5 border-l border-line pl-3">
                  {category.groups
                    .filter((group) => (groupCounts.get(group.slug) ?? 0) > 0)
                    .map((group) => (
                      <li key={group.slug}>
                        <a
                          href={`#${group.slug}`}
                          className="flex justify-between gap-2 py-1 text-xs text-ink-muted hover:text-brand-text"
                        >
                          {group.name}
                          <span aria-hidden="true">{groupCounts.get(group.slug)}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
