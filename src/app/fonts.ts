import { Inter } from "next/font/google";

/**
 * Eine variable Grotesk-Familie für die ganze Seite (ANALYSIS.md §6).
 *
 * `latin-ext` ist ZWINGEND und nicht optional: č ć š ž đ / Č Ć Š Ž Đ liegen
 * in Latin Extended-A. Ohne diesen Subset rendert ein grosser Teil der
 * kroatischen Texte in der Fallback-Schrift — sichtbar hässlich und eine
 * CLS-Quelle obendrein.
 *
 * Variable Font statt fester Schnitte: eine Datei je Subset (2 gesamt)
 * statt drei je Subset (6 gesamt). Bei einem expliziten Performance-Ziel
 * ist das keine knappe Entscheidung.
 *
 * next/font/google lädt die Dateien zur BUILD-Zeit und hostet sie selbst.
 * Der Besucher kontaktiert fonts.gstatic.com nie, es fliesst keine IP zu
 * Google — relevant für die Datenschutzerklärung (CLAUDE.md §8).
 */
export const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
  // Familienneutraler Name: ein Schriftwechsel berührt nur diese Datei,
  // nie globals.css und nie eine Komponente.
  variable: "--font-sans-src",
});
