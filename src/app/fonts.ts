import { Mulish, Oxygen } from "next/font/google";

/**
 * Zwei Familien, exakt wie auf sunward.eu live gemessen (ANALYSIS.md §7):
 * Oxygen für den Fliesstext, Mulish für Überschriften (900/700).
 *
 * `latin-ext` ist ZWINGEND und nicht optional: č ć š ž đ / Č Ć Š Ž Đ liegen
 * in Latin Extended-A. Ohne diesen Subset rendert ein grosser Teil der
 * kroatischen Texte in der Fallback-Schrift — sichtbar hässlich und eine
 * CLS-Quelle obendrein.
 *
 * Beide Familien wurden gegen Googles Coverage-Angaben geprüft und decken
 * alle zehn kroatischen Zeichen ab, einschliesslich des gern fehlenden
 * đ/Đ (U+0110/U+0111):
 *   Oxygen latin-ext: 256–275, 349–353, 376–382
 *   Mulish latin-ext: 256–304, 340–382
 *
 * next/font/google lädt die Dateien zur BUILD-Zeit und hostet sie selbst.
 * Der Besucher kontaktiert fonts.gstatic.com nie, es fliesst keine IP zu
 * Google — relevant für die Datenschutzerklärung.
 */

/**
 * Fliesstext.
 *
 * Oxygen gibt es nur in 300/400/700, ohne Kursive und ohne Variable-Achse —
 * das ist eine Eigenschaft der Schrift, keine Konfigurationslücke. Geladen
 * werden nur 400 und 700; 300 wird nirgends verwendet und wäre reines
 * Transfergewicht.
 *
 * Folge fürs Styling: `font-medium` (500) fällt auf 400 und `font-semibold`
 * (600) auf 700 zurück. Die betroffenen Stellen wurden entsprechend
 * aufgelöst — Spec-Tabellen unterscheiden Label und Wert seitdem über die
 * Farbe statt über das Gewicht.
 */
export const sans = Oxygen({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
  // Familienneutraler Name: ein Schriftwechsel berührt nur diese Datei,
  // nie globals.css und nie eine Komponente.
  variable: "--font-sans-src",
});

/**
 * Überschriften. DESIGN.md: H2 in 900, H3 in 700.
 *
 * Bewusst als feste Schnitte statt als Variable Font: gebraucht werden
 * genau zwei Gewichte, und zwei statische Instanzen wiegen zusammen
 * weniger als die volle 200–1000-Achse.
 */
export const heading = Mulish({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "900"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
  variable: "--font-heading-src",
});
