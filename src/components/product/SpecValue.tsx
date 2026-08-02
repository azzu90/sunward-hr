import { isTbd, val } from "@/content/placeholder";
import { ui } from "@/content/ui";
import type { Spec } from "@/content/types";
import { SHOW_UNCONFIRMED_SPECS } from "@/lib/flags";

/**
 * Zeigt einen technischen Wert an und macht sichtbar, ob er bestätigt ist.
 *
 * Öffentlich dezent: kursiv plus Sternchen, dazu eine Fussnote pro Tabelle.
 * In der Entwicklung laut (amberfarben) — dafür sorgt die Regel
 * `[data-dev="true"] .spec-tbd` in globals.css.
 *
 * Ist SHOW_UNCONFIRMED_SPECS abgeschaltet, verschwinden alle erfundenen
 * Werte site-weit hinter „—" — ohne dass eine Datendatei angefasst wird.
 */
export function SpecValue({ value }: { value: Spec<string> }) {
  if (!isTbd(value)) return <span>{value}</span>;

  if (!SHOW_UNCONFIRMED_SPECS) {
    return <span className="text-ink-muted">{ui.spec.unknown}</span>;
  }

  return (
    <span data-tbd="true" className="spec-tbd" title={ui.spec.tbdTooltip}>
      {val(value)}
      <sup aria-hidden="true" className="ml-0.5 text-brand-text">
        {ui.spec.tbdMarker}
      </sup>
      <span className="sr-only">{` — ${ui.spec.tbdSrSuffix}`}</span>
    </span>
  );
}

/** Wahr, wenn irgendein Wert in der Liste unbestätigt ist. */
export function hasUnconfirmed(values: readonly Spec<string>[]): boolean {
  return values.some(isTbd);
}
