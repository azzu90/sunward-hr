# ASSUMPTIONS.md — sunward.hr

Getroffene Annahmen und bewusste Abweichungen von den Referenzdokumenten.
Referenzen: `PRD-sunward.hr.md`, `ANALYSIS.md`, `DESIGN.md`, `TASK.md`.

---

## Farben (Phase 1)

Basis ist die live per CSS von sunward.eu gemessene Palette (`ANALYSIS.md` §7):
Türkis `#008D84`, Orange `#F39A2E`, Fläche `#FFFFFF`, Fliesstext `#879C9F`.

Alle Kontrastwerte nach WCAG 2.1 nachgerechnet. Schwellen: 4,5:1 für
Fliesstext, 3:1 für Grossschrift (ab 18,66 px fett) und UI-Elemente.

| Token | Wert | Kontrast | Rolle |
|---|---|---|---|
| `--color-brand` | `#008d84` | 4,09:1 auf Weiss | Flächen, Rahmen, Icons. **Nicht** für Fliesstext — 4,09:1 verfehlt die 4,5:1. |
| `--color-brand-text` | `#00726d` | 5,79:1 Weiss / 5,35:1 auf `#F5F6F7` | Türkiser Text und Links auf hellem Grund |
| `--color-brand-strong` | `#00807b` | Weiss darauf 4,80:1 | Button-Füllung mit weisser Schrift |
| `--color-brand-deep` | `#00655f` | Weiss darauf 6,94:1 | Footer-Fläche |
| `--color-on-brand-muted` | `#cddcda` | 4,90:1 auf `--color-brand-deep` | Gedämpfter Text im Footer |
| `--color-accent` | `#f39a2e` | 2,22:1 auf Weiss | **Nur als Fläche** mit dunkler Schrift |
| `--color-on-accent` | `#14212b` | 7,41:1 auf `--color-accent` | Schrift auf orangener Fläche |

### Abweichung 1 — Fliesstext ist nicht `#879C9F`

`TASK.md` Phase 1 nennt `#879C9F` als Textfarbe. Nachgerechnet ergibt der Ton
auf Weiss **2,88:1** und verfehlt damit nicht nur die AA-Schwelle für
Fliesstext (4,5:1), sondern auch die für Grossschrift (3:1).

`DESIGN.md` und `PRD` §13 fordern gleichzeitig, die Lighthouse-Accessibility
von sunward.eu spürbar zu übertreffen. Beides zusammen geht nicht.

**Entscheidung (vom Auftraggeber bestätigt):** Fliesstext bleibt auf
`--color-ink-body` (`#2c2c2c`, 12,6:1). `#879C9F` ist als
`--color-ink-faint` im Tokensatz vorhanden, aber ausdrücklich auf rein
dekorative Elemente ohne Informationsgehalt beschränkt und aktuell
ungenutzt.

### Abweichung 2 — Footer-Fläche ist minimal tiefer als `#008D84`

`ANALYSIS.md` gibt `#008D84` als Footer-Hintergrund an. Auf diesem Ton
erreicht selbst reines Weiss nur **4,09:1** — der Footer enthält aber
überwiegend kleinen Text (Adresse, Links, Copyright). Ein gedämpfter
zweiter Textton wäre dort rechnerisch gar nicht mehr möglich.

**Entscheidung:** Footer-Fläche auf `#00655f` abgesenkt. Optisch
unverändert derselbe Sunward-Türkis, aber Weiss erreicht 6,94:1 und ein
gedämpfter Ton (`#cddcda`) noch 4,90:1. `#008D84` bleibt unverändert die
Markenfarbe für alle übrigen Flächen.

### Abweichung 3 — der Punkt der Footer-Wortmarke

Ein automatischer Kontrast-Audit über alle Textknoten (Startseite und
Produktdetailseite) meldet genau eine Fundstelle: den orangenen Punkt in
„SUNWARD." im Footer — `#f39a2e` auf `#00655f` = **3,13:1** bei 18 px/900,
knapp unter der Grossschrift-Schwelle von 18,66 px.

**Bewertung:** akzeptiert. Der Punkt ist reine Zierde ohne
Informationsgehalt; der lesbare Teil der Wortmarke steht in Weiss bei
6,94:1. Für nicht-textuelle grafische Objekte gilt die 3:1-Schwelle, die
mit 3,13:1 eingehalten ist. Dieselbe Zierde im Header steht auf Weiss und
ist dort unkritisch.

### Abweichung 4 — kein dunkles Navy mehr

Der vorherige Build nutzte `#14212B` als grossflächigen Header-/Footer-/
Hero-Hintergrund. Das beruhte auf einer Screenshot-Schätzung, die per
Live-CSS-Messung widerlegt ist (`ANALYSIS.md` §7). Der Wert existiert nur
noch als Textfarbe (`--color-ink`) und als Schrift auf orangener Fläche.

---

## Typografie (Phase 1)

Oxygen (Fliesstext) und Mulish (Überschriften, 900/700) laut `ANALYSIS.md` §7.

**Kroatische Diakritika geprüft** gegen Googles Coverage-Angaben — beide
Familien decken alle zehn Zeichen ab, einschliesslich des häufig fehlenden
`đ`/`Đ` (U+0110/U+0111):

- Oxygen `latin-ext`: 256–275, 349–353, 376–382
- Mulish `latin-ext`: 256–304, 340–382

### Folge — Oxygen hat nur 300/400/700

Oxygen existiert nicht als Variable Font, hat keine Kursive und kein 500
oder 600. Der Code nutzte an 13 Stellen `font-medium` (500) und
`font-semibold` (600); der Browser bildet diese auf 400 bzw. 700 ab.

Aufgelöst:

- `font-semibold` → explizit `font-bold`, damit die Klasse nicht mehr
  etwas anderes behauptet, als gerendert wird
- Spec-Tabellen (`SpecTables.tsx`, `ProductCard.tsx`) unterschieden
  Label (`dt`) und Wert (`dd`) über das Gewicht. Mit Oxygen wären beide
  400 und damit ununterscheidbar gewesen — auf jeder Produktdetailseite
  und jeder Produktkarte. Die Unterscheidung läuft jetzt über die Farbe
  (`--color-ink-muted` gegen `--color-ink`), was zugleich barrierefreier
  ist als eine reine Gewichtsdifferenz.
- `font-black` (900) stand an drei Stellen ausserhalb von `h1`–`h6`
  (Wortmarke im Header, Wortmarke im Footer, Preis). Diese wären auf
  Oxygens Maximum 700 zurückgefallen und tragen jetzt die Utility
  `font-heading`, damit die 900 aus Mulish kommt.
- `.spec-tbd` setzt `font-style: italic`. Oxygen hat keine echte Kursive,
  der Browser stellt synthetisch schräg. Akzeptiert — die Klasse markiert
  unbestätigte Werte und ist nicht gestalterisch tragend.

---

## Sonstiges

- GPS-Koordinaten in `src/content/site.ts` sind die ungefähre Lage von
  Karlovac und mit `tbd()` markiert. Zoran bestätigt die exakten
  Koordinaten der Betriebsstätte Jelaši 37C.
- Der Klassenname `.bg-shell-pattern` stammt aus der Zeit des dunklen
  Chrome. Er bleibt bestehen, weil `SiteImage.tsx` zum unangetasteten
  Platzhalter-System gehört; nur die Farben der Klasse wurden auf die
  helle Palette umgestellt.
- **Ausnahme von der „keine rohen Hex-Werte"-Regel:** `src/app/icon.tsx`,
  `src/app/opengraph-image.tsx` und `src/app/global-error.tsx` enthalten
  Hex-Werte inline. `next/og`-`ImageResponse` rendert ausserhalb der
  CSS-Pipeline, und `global-error.tsx` ersetzt das Root-Layout und lädt
  damit `globals.css` nicht — in beiden Fällen existiert `var(--color-…)`
  nicht. Diese Werte sind Kopien und müssen bei jeder Palettenänderung
  mitgezogen werden.
