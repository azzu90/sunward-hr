"use client";

import { useCallback, useMemo, useSyncExternalStore, type ReactNode } from "react";

import { specLabels } from "@/content/specs";
import { ui } from "@/content/ui";
import type { GroupSlug } from "@/content/types";
import {
  DEFAULT_SORT,
  parseState,
  sortItems,
  stringifyState,
  type BrowseState,
  type SortableItem,
  type SortKey,
} from "@/lib/product-sort";

/**
 * Filter- und Sortierleiste der Kategorieseiten (TASK.md Phase 2b).
 *
 * sunward.eu täuscht eine Filterfunktion nur optisch vor (ANALYSIS.md §3);
 * hier ist sie echt.
 *
 * Die Produktkarten werden NICHT hier gebaut, sondern serverseitig gerendert
 * und als `card`-ReactNode hereingereicht. Das ist keine Stilfrage:
 * `ProductCard` → `SiteImage` → `lib/assets.ts` importiert `node:fs`, und
 * `content/products` trägt `server-only`. Diese Komponente sieht deshalb nie
 * ein `ProductModel`, sondern nur die zum Ordnen nötigen Felder.
 */

export interface BrowserItem extends SortableItem {
  /** Serverseitig gerenderte <ProductCard />. */
  readonly card: ReactNode;
}

export interface BrowserGroup {
  readonly slug: GroupSlug;
  readonly name: string;
  readonly count: number;
}

/**
 * Unterhalb dieser Modellzahl ist eine Sortierauswahl mehr Rauschen als
 * Hilfe. Bewusst eine Zahl und keine Kategorie-Liste: liefert Zoran ein
 * drittes Modell nach, erscheint die Leiste von allein.
 */
const MIN_ITEMS_FOR_SORT = 3;

/* ════════════════════════════════════════════════════════════════════════
   URL als Zustandsspeicher
   ════════════════════════════════════════════════════════════════════════ */

/**
 * Der Zustand lebt in der Adresszeile, nicht in useState.
 *
 * `useSyncExternalStore` ist hier genau das richtige Werkzeug: Server und
 * Client haben verschiedene Snapshots (der Server kennt keinen Query-String),
 * und React löst das ohne Hydration-Mismatch auf — im Gegensatz zu einem
 * setState im Effect, das zusätzlich Kaskadenrenders auslöst.
 *
 * Bewusst kein `useSearchParams()`: das erzwingt eine Suspense-Grenze, und
 * dann stünde im statisch generierten HTML der Kategorieseiten nur die
 * Fallback-Hülle statt der Produktkarten. Ausgerechnet dort, wo „kineski
 * bager" ranken soll.
 */
const listeners = new Set<() => void>();

function subscribeUrl(callback: () => void): () => void {
  listeners.add(callback);
  window.addEventListener("popstate", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("popstate", callback);
  };
}

function getSearch(): string {
  return window.location.search;
}

/** Der Server kennt keinen Query-String — Ausgangszustand. */
function getServerSearch(): string {
  return "";
}

export function CategoryBrowser({
  groups,
  items,
}: {
  groups: readonly BrowserGroup[];
  items: readonly BrowserItem[];
}) {
  const search = useSyncExternalStore(subscribeUrl, getSearch, getServerSearch);

  const groupSlugs = useMemo(() => groups.map((g) => g.slug), [groups]);
  const state = useMemo(() => parseState(search, groupSlugs), [search, groupSlugs]);

  const apply = useCallback((next: BrowseState) => {
    // replaceState statt pushState: vier Klicks auf Checkboxen sollen nicht
    // vier Zurück-Schritte erzeugen. Der Zustand ist teilbar, aber der
    // Zurück-Button verlässt die Seite, statt Filter einzeln zurückzunehmen.
    window.history.replaceState(null, "", window.location.pathname + stringifyState(next));
    for (const listener of listeners) listener();
  }, []);

  const showFilter = groups.length > 1;
  const showSort = items.length >= MIN_ITEMS_FOR_SORT;

  const active = useMemo(() => new Set(state.groups), [state.groups]);
  const visible = useMemo(
    () => (active.size === 0 ? items : items.filter((i) => active.has(i.group))),
    [items, active],
  );

  const toggleGroup = useCallback(
    (slug: GroupSlug) => {
      const next = new Set(state.groups);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      // Reihenfolge aus der Taxonomie übernehmen, nicht aus der Klickfolge —
      // sonst hängt die URL davon ab, in welcher Reihenfolge geklickt wurde.
      apply({ ...state, groups: groupSlugs.filter((s) => next.has(s)) });
    },
    [apply, state, groupSlugs],
  );

  const sortOptions: readonly { value: SortKey; label: string }[] = [
    { value: "preporuceno", label: ui.filter.sortRecommended },
    { value: "masa-asc", label: `${specLabels.operatingWeight} — ${ui.filter.ascending}` },
    { value: "masa-desc", label: `${specLabels.operatingWeight} — ${ui.filter.descending}` },
    // Preissortierung: `SortKey` kennt "cijena-asc"/"cijena-desc" bereits und
    // hat in lib/product-sort.ts einen fertigen Komparator. Hier zwei Zeilen
    // ergänzen, sobald echte Preise vorliegen — aktuell steht jedes der 51
    // Modelle auf „Cijena na upit" (PRD Abschnitt 7).
  ];

  const isDefault = state.groups.length === 0 && state.sort === DEFAULT_SORT;
  const countLabel = `${visible.length} ${
    visible.length === 1 ? ui.filter.modelSingular : ui.pages.modelsSuffix
  }`;

  return (
    <>
      {showFilter || showSort ? (
        <div
          role="group"
          aria-label={ui.filter.toolbar}
          className="mt-8 flex flex-col gap-4 border-y border-line bg-surface-alt px-4 py-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between"
        >
          {showFilter ? (
            <fieldset className="min-w-0">
              <legend className="mb-2 text-xs font-bold tracking-widest text-brand-text uppercase">
                {ui.filter.groupLegend}
              </legend>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {groups.map((group) => (
                  <label
                    key={group.slug}
                    className="flex cursor-pointer items-center gap-2 text-sm text-ink"
                  >
                    <input
                      type="checkbox"
                      checked={active.has(group.slug)}
                      onChange={() => toggleGroup(group.slug)}
                      className="size-4 accent-brand"
                    />
                    {group.name}
                    <span className="text-xs text-ink-muted">{group.count}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ) : null}

          <div className="flex flex-wrap items-end gap-4">
            {showSort ? (
              <div>
                <label
                  htmlFor="sort"
                  className="mb-2 block text-xs font-bold tracking-widest text-brand-text uppercase"
                >
                  {ui.filter.sortLabel}
                </label>
                <select
                  id="sort"
                  value={state.sort}
                  onChange={(event) => apply({ ...state, sort: event.target.value as SortKey })}
                  className="border border-line-strong bg-surface px-3 py-2 text-sm text-ink focus:border-brand focus:outline-2 focus:outline-offset-2 focus:outline-brand"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="flex items-center gap-3 pb-2">
              <span aria-live="polite" className="text-sm text-ink-muted">
                {countLabel}
              </span>
              {!isDefault ? (
                <button
                  type="button"
                  onClick={() => apply({ groups: [], sort: DEFAULT_SORT })}
                  className="text-sm font-bold text-brand-text underline underline-offset-4 hover:text-ink"
                >
                  {ui.filter.reset}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {state.sort === DEFAULT_SORT ? (
        /* Gruppierte Ansicht — die id-Anker bleiben erhalten, damit die
           Sprungmarken der Sidebar weiter funktionieren. */
        groups
          .filter((group) => active.size === 0 || active.has(group.slug))
          .map((group) => (
            <section key={group.slug} id={group.slug} className="mt-10 scroll-mt-24">
              <h2 className="mb-4 border-b border-line pb-2 text-lg font-bold text-ink">
                {group.name}
              </h2>
              <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visible
                  .filter((item) => item.group === group.slug)
                  .map((item) => (
                    <li key={item.slug}>{item.card}</li>
                  ))}
              </ul>
            </section>
          ))
      ) : (
        /* Nach Radna masa sortiert: Gruppenüberschriften würden gegen die
           Sortierung arbeiten, deshalb ein flaches Raster. */
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {sortItems(visible, state.sort).map((item) => (
            <li key={item.slug}>{item.card}</li>
          ))}
        </ul>
      )}
    </>
  );
}
