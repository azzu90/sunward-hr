import type { ReactNode } from "react";

import type { home } from "@/content/home";

/**
 * Strichicons für die Marketing-Kacheln: die vier „Zašto Sunward?"-Kacheln
 * und die drei Financiranje-Boxen.
 *
 * Gleicher Vertrag wie PartIcon.tsx und AttachmentIcon.tsx, damit alle drei
 * Sätze als eine Familie lesen.
 *
 * Kein rundes Icon-Tile über der Überschrift (DESIGN.md §25) — die Icons
 * sitzen klein und inline, wie auf /servis.
 *
 * Die vier Zašto-IDs kommen aus home.whySunwardTiles, die drei
 * Financiranje-IDs haben keine gemeinsame Datenstruktur (sie stehen als
 * site.financing, site.tradeIn und financing.warranty* nebeneinander) —
 * deshalb eine explizite Union statt einer abgeleiteten. Damit die
 * Zašto-Seite trotzdem nicht auseinanderlaufen kann, prüft
 * `CoversWhySunwardTiles` beim Typecheck, dass jede Kachel-ID hier
 * abgedeckt ist.
 */

export type FeatureIconId =
  // Zašto Sunward
  | "program"
  | "komponente"
  | "partner"
  | "servis"
  // Financiranje
  | "financiranje"
  | "staro-za-novo"
  | "garancija";

type WhySunwardTileId = (typeof home.whySunwardTiles)[number]["id"];
/** Bricht den Build, sobald eine Kachel in home.ts kein Icon hier hat. */
type CoversWhySunwardTiles = WhySunwardTileId extends FeatureIconId ? true : never;
const _covers: CoversWhySunwardTiles = true;
void _covers;

const paths: Record<FeatureIconId, ReactNode> = {
  /* Vier Felder = das ganze Programm, 51 Modelle in 8 Kategorien. */
  program: (
    <>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="1" />
    </>
  ),
  /* Zahnrad mit Häkchen — geprüfte Komponenten. Bewusst vierzahnig und
     versetzt, damit es nicht mit dem sechsspeichigen `motorni-dijelovi`
     aus PartIcon.tsx verwechselt wird. */
  komponente: (
    <>
      <circle cx="10.5" cy="10.5" r="4.25" />
      <path d="M10.5 3.25v2.5M10.5 15.25v2.5M3.25 10.5h2.5M15.25 10.5h2.5" />
      <path d="M14.25 17.75l2.25 2.25 4.25-5" />
    </>
  ),
  /* Medaille mit Bändern — geprüfter Partner. Das Schild bleibt der
     Garantie vorbehalten, damit die zwei sich nicht doppeln. */
  partner: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9.75 9l1.75 1.75L14.5 7.25" />
      <path d="M8.75 13.5L7 21l5-2.5 5 2.5-1.75-7.5" />
    </>
  ),
  /* Variante B aus dem Icon-Bogen: Schlüssel allein. Variante A trug
     zusätzlich eine kleine Uhr für „bez čekanja", die war bei 20px aber
     nur noch 6px groß — das „ohne Warten" trägt die Überschrift daneben. */
  servis: (
    <>
      <path d="M17.7 4.3a4.5 4.5 0 0 0-6 6L4.6 17.4a1.9 1.9 0 0 0 0 2.7l.3.3a1.9 1.9 0 0 0 2.7 0l7.1-7.1a4.5 4.5 0 0 0 6-6l-2.9 2.9-2.1-2.1z" />
    </>
  ),
  /* Kreissegment für den Eigenanteil von 30%. Der Winkel ist gerechnet,
     nicht geschätzt: 30% von 360° = 108°, ab 12 Uhr im Uhrzeigersinn. */
  financiranje: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12V3.5" />
      <path d="M12 12l8.1 2.6" />
    </>
  ),
  "staro-za-novo": (
    <>
      <path d="M4.5 10A7.5 7.5 0 0 1 17 6.75" />
      <path d="M17 3.25v3.5h-3.5" />
      <path d="M19.5 14A7.5 7.5 0 0 1 7 17.25" />
      <path d="M7 20.75v-3.5h3.5" />
    </>
  ),
  garancija: (
    <>
      <path d="M12 2.5l7.5 2.5v6c0 5-3.5 8.5-7.5 10.5C8 19.5 4.5 16 4.5 11V5z" />
      <path d="M8.75 11.75l2.5 2.5 4-5" />
    </>
  ),
};

export function FeatureIcon({ id, className }: { id: FeatureIconId; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[id]}
    </svg>
  );
}
