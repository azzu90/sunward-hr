import type { GroupSlug } from "@/content/types";

/**
 * Sortier- und Filterlogik der Kategorieseiten (TASK.md Phase 2b).
 *
 * Bewusst getrennt von der Komponente und frei von `server-only`-Importen:
 * `CategoryBrowser` ist eine Client-Komponente und darf die Produkt-Registry
 * nicht sehen. Sortiert wird deshalb über eine leichte Projektion, die die
 * Server-Seite baut — nicht über `ProductModel`.
 */

/**
 * `cijena-asc`/`cijena-desc` sind hier bereits gültige Werte und haben unten
 * einen fertigen Komparator, obwohl die UI sie noch nicht anbietet: aktuell
 * stehen alle 51 Modelle auf `price: { kind: "onRequest" }` (PRD Abschnitt 7,
 * Preisliste steht noch aus). Sobald echte Preise da sind, ist das Aktivieren
 * ein Eintrag in `SORT_OPTIONS` und keine Typ- oder Logikänderung.
 */
export type SortKey = "preporuceno" | "masa-asc" | "masa-desc" | "cijena-asc" | "cijena-desc";

export const DEFAULT_SORT: SortKey = "preporuceno";

/** Was der Client von einem Modell wissen muss, um es zu ordnen. */
export interface SortableItem {
  readonly slug: string;
  readonly group: GroupSlug;
  /** `SpecRow.n` der Radna masa. Bei allen 51 Modellen gesetzt. */
  readonly weight: number | null;
  /** EUR-Betrag, sofern der Preis beziffert ist — sonst null. */
  readonly price: number | null;
}

function isSortKey(value: string): value is SortKey {
  return (
    value === "preporuceno" ||
    value === "masa-asc" ||
    value === "masa-desc" ||
    value === "cijena-asc" ||
    value === "cijena-desc"
  );
}

/**
 * Unbekannte Werte sortieren ans Ende, unabhängig von der Richtung.
 * Sonst würde ein fehlender Wert bei „absteigend" nach vorne rutschen und
 * wie das grösste Modell aussehen.
 */
function compareNullable(a: number | null, b: number | null, direction: 1 | -1): number {
  if (a === null && b === null) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  return (a - b) * direction;
}

/**
 * Sortiert eine Kopie. `preporuceno` gibt die Eingabereihenfolge zurück —
 * die ist bereits nach `product.order` sortiert und damit die redaktionelle
 * Reihenfolge aus der Registry.
 */
export function sortItems<T extends SortableItem>(items: readonly T[], sort: SortKey): T[] {
  const out = [...items];
  switch (sort) {
    case "masa-asc":
      return out.sort((a, b) => compareNullable(a.weight, b.weight, 1));
    case "masa-desc":
      return out.sort((a, b) => compareNullable(a.weight, b.weight, -1));
    case "cijena-asc":
      return out.sort((a, b) => compareNullable(a.price, b.price, 1));
    case "cijena-desc":
      return out.sort((a, b) => compareNullable(a.price, b.price, -1));
    case "preporuceno":
      return out;
  }
}

/* ════════════════════════════════════════════════════════════════════════
   URL-Zustand
   ════════════════════════════════════════════════════════════════════════ */

export const PARAM_GROUP = "grupa";
export const PARAM_SORT = "sort";

export interface BrowseState {
  readonly groups: readonly GroupSlug[];
  readonly sort: SortKey;
}

/**
 * Liest den Zustand aus einem Query-String. Unbekannte Gruppen-Slugs werden
 * verworfen — eine manipulierte URL darf die Liste nicht leerlaufen lassen.
 */
export function parseState(search: string, known: readonly GroupSlug[]): BrowseState {
  const params = new URLSearchParams(search);

  const raw = params.get(PARAM_GROUP);
  const groups = raw
    ? raw
        .split(",")
        .map((s) => s.trim())
        .filter((s): s is GroupSlug => (known as readonly string[]).includes(s))
    : [];

  const sortRaw = params.get(PARAM_SORT);
  const sort = sortRaw && isSortKey(sortRaw) ? sortRaw : DEFAULT_SORT;

  return { groups, sort };
}

/**
 * Baut den Query-String zum Zustand. Der Ausgangszustand ergibt einen leeren
 * String — dann steht in der Adresszeile wieder die nackte Kategorie-URL und
 * niemand teilt versehentlich einen Link mit Default-Parametern.
 */
export function stringifyState(state: BrowseState): string {
  const params = new URLSearchParams();
  if (state.groups.length > 0) params.set(PARAM_GROUP, state.groups.join(","));
  if (state.sort !== DEFAULT_SORT) params.set(PARAM_SORT, state.sort);
  // Das Komma zwischen den Gruppen bleibt lesbar. `toString()` macht daraus
  // %2C, was in einem geteilten Link unnötig kryptisch aussieht; als
  // Sub-Delimiter ist "," in einer Query erlaubt, und URLSearchParams liest
  // beide Schreibweisen zurück.
  const query = params.toString().replace(/%2C/g, ",");
  return query ? `?${query}` : "";
}
