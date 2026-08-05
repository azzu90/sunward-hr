/**
 * Die 8 Komponentenmarken, mit denen Zoran wirbt (CLAUDE.md, Phase 9) —
 * dieselbe Liste wie `site.componentBrands`, hier aber mit Logo-Datei statt
 * nur als Fliesstext.
 *
 * Bewusst eigene Datei statt Feld in `site.ts`: `componentBrands` bleibt der
 * reine Namens-Array für die Textstellen (Kacheln, "Prednosti"-Block), diese
 * Liste ist rein darstellerisch für die Logo-Reihe auf der Startseite.
 *
 * Dateien liegen unter public/slike/komponente/ — bewusst NICHT über das
 * SiteImage-Manifest (`src/content/images.ts`): das System dort ist für
 * Sunward-Produktfotos gebaut, die anfangs fehlen und als Platzhalter
 * markiert werden müssen. Diese 8 Logos sind fremde Marken, die schon jetzt
 * vollständig vorliegen und nie einen Platzhalterzustand durchlaufen — und
 * sie sitzen in der Zeile auf fester HÖHE bei natürlicher Breite (jedes Logo
 * behält sein eigenes Seitenverhältnis), nicht in der festen BREITE-Box mit
 * abgeleiteter Höhe, für die SiteImage gebaut ist.
 *
 * Quellen (offiziell, nicht von einer Fremdseite abfotografiert):
 *   - Kubota, Isuzu, Cummins, Yanmar, Rexroth, KYB, Eaton: Wikimedia Commons,
 *     jeweils die aktuelle Wortmarke/das aktuelle Logo der Marke.
 *   - Alfagomma: direkt von alfagomma.com (Header-Logo der offiziellen
 *     Firmenseite) — auf Wikimedia Commons nicht vorhanden.
 *
 * Rexroth zeigt bewusst die aktuelle Bosch-Gestaltung ("rexroth" + Swoosh +
 * "A Bosch Company"), nicht die ältere rot/graue Fassung von vor dem
 * Bosch-Rebranding. Eaton zeigt die reine Wortmarke ohne die Tagline
 * "Powering Business Worldwide" — konsistent zu den übrigen sechs Marken,
 * die ebenfalls ohne Tagline auftreten (nur Rexroth/KYB haben ihre Tagline
 * behalten, weil sie fester Teil von deren aktueller Wort-Bild-Marke ist).
 */
export interface ComponentBrand {
  readonly id: string;
  readonly name: string;
  readonly file: string;
}

export const componentBrands: readonly ComponentBrand[] = [
  { id: "kubota", name: "Kubota", file: "kubota.svg" },
  { id: "yanmar", name: "Yanmar", file: "yanmar.svg" },
  { id: "cummins", name: "Cummins", file: "cummins.svg" },
  { id: "isuzu", name: "Isuzu", file: "isuzu.svg" },
  { id: "rexroth", name: "Bosch Rexroth", file: "rexroth.svg" },
  { id: "eaton", name: "Eaton", file: "eaton.svg" },
  { id: "kyb", name: "KYB", file: "kyb.svg" },
  { id: "alfagomma", name: "Alfagomma", file: "alfagomma.svg" },
];
