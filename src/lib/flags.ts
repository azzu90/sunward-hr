/**
 * Zeigt unbestätigte technische Werte mit Markierung an (true) oder
 * ersetzt sie site-weit durch „—" (false).
 *
 * TASK.md Phase 2 Punkt 5 verlangt „plausibel als klar markierte
 * Platzhalter befüllen", deshalb ist true der Standard. Sollte sich das
 * Veröffentlichen erfundener Werte als rechtlich unerwünscht erweisen,
 * ist das Abschalten eine Zeile hier und keine Datenänderung.
 */
export const SHOW_UNCONFIRMED_SPECS = true;

/** Steuert die auffällige Platzhalter-Darstellung in der Entwicklung. */
export const IS_DEV = process.env.NODE_ENV !== "production";
