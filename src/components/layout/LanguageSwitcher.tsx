import { site } from "@/content/site";
import { ui } from "@/content/ui";

/**
 * Sprachumschalter aus der Utility-Bar von sunward.eu (ANALYSIS.md §1).
 *
 * Phase 1 ist ausschliesslich kroatisch (CLAUDE.md §9), die übrigen
 * Sprachen erscheinen deaktiviert mit „Uskoro dostupno".
 *
 * Zwei Details, die hier bewusst so sind:
 *
 *  1. Die inaktiven Einträge sind KEINE Links — kein href, aria-disabled,
 *     nicht fokussierbar. Sonst entdeckt Google tote Sprach-URLs und
 *     indexiert Seiten, die es nicht gibt.
 *  2. Es werden KEINE hreflang-Tags ausgegeben, solange die Sprachen
 *     nicht existieren. hreflang auf nicht vorhandene Varianten ist ein
 *     handfester SEO-Fehler, kein Vorgriff.
 *
 * Eine Sprache zu aktivieren ist später ein Datenfeld in site.ts, kein
 * Umbau dieser Komponente.
 */
export function LanguageSwitcher() {
  return (
    <nav aria-label={ui.nav.languages}>
      <ul className="flex items-center gap-1">
        {site.languages.map((lang) => (
          <li key={lang.code}>
            {lang.available ? (
              <span
                aria-current="true"
                className="inline-block px-1.5 py-0.5 text-xs font-semibold text-on-shell"
              >
                {lang.label}
              </span>
            ) : (
              <span
                aria-disabled="true"
                title={ui.nav.languageUnavailable}
                className="inline-block cursor-not-allowed px-1.5 py-0.5 text-xs text-on-shell-muted opacity-55"
              >
                {lang.label}
                <span className="sr-only">{` — ${ui.nav.languageUnavailable}`}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
