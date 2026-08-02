import type { Spec, SpecKey, SpecRow, Tbd } from "./types";

/**
 * Konvention für unbestätigte Daten.
 *
 * Lesart in den Datendateien: **was nicht eingewickelt ist, ist eine
 * Tatsache aus CLAUDE.md.** Alles andere geht durch `tbd()` bzw. `tbdRows()`
 * und ist damit maschinell auffindbar (scripts/report-placeholders.ts),
 * im UI sichtbar markiert und von Schema.org und Meta-Descriptions
 * ausgeschlossen.
 */

/** Markiert einen plausibel erfundenen Wert als bestätigungsbedürftig. */
export function tbd<T>(value: T, ask?: string, basis?: string): Tbd<T> {
  return { __tbd: true, value, ask, basis };
}

export function isTbd<T>(v: Spec<T>): v is Tbd<T> {
  return typeof v === "object" && v !== null && (v as Tbd<T>).__tbd === true;
}

/** Holt den Anzeigewert heraus, egal ob bestätigt oder markiert. */
export function val<T>(v: Spec<T>): T {
  return isTbd(v) ? v.value : v;
}

type SpecMap = Partial<Record<SpecKey, string>>;

/** Bestätigte Zeilen — kurze Schreibweise für ganze Blöcke. */
export function rows(m: SpecMap): SpecRow[] {
  return (Object.entries(m) as [SpecKey, string][]).map(([key, value]) => ({ key, value }));
}

/**
 * Unbestätigte Zeilen. Fängt die Verbosität der Feld-für-Feld-Markierung
 * auf: die drei Blöcke, die zu 100 % erfunden sind (Motor, Hydraulik,
 * Arbeitsbereich), werden damit als flaches Objekt geschrieben.
 */
export function tbdRows(m: SpecMap, ask?: string, basis?: string): SpecRow[] {
  return (Object.entries(m) as [SpecKey, string][]).map(([key, value]) => ({
    key,
    value: tbd(value, ask, basis),
  }));
}
