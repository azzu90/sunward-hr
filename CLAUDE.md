# CLAUDE.md — sunward.hr

> Diese Datei wird von Claude Code automatisch bei jeder Session gelesen. Ersetzt eine ältere Version, die vermutlich durch eine zu lange Plan-Mode-Session (Instruction Drift) fehlerhafte Anweisungen enthielt (u.a. Sprachumschalter, reduzierter Produktkatalog — beides falsch, siehe unten).

## Projekt

Kroatische Vertriebsseite für Sunward-Baumaschinen, Generalvertreter Hidraulika Drvošped d.o.o. (Karlovac). Zweites Projekt in einer Zwei-Seiten-Serie (drvosped.hr folgt später).

**Vollständige Anforderungen:** `PRD-sunward.hr.md`
**sunward.eu-Referenz (verifiziert, nicht geraten):** `ANALYSIS.md`
**Design-Tokens/Richtung:** `DESIGN.md`
**Phasenplan:** `TASK.md`

Bei Widerspruch zwischen dieser Datei und den vier oben: die vier oben gewinnen, diese Datei ist nur die Kurzfassung.

## Tech-Stack

Next.js 16 (App Router, Turbopack), React 19, Tailwind v4 (CSS-first), TypeScript 5.9.3 (bewusst gepinnt — `typescript@latest` liegt außerhalb der Peer-Range von `typescript-eslint`), Node 24.x. Deploy: Vercel.

## Nicht verhandelbar (bereits einmal falsch umgesetzt — nicht wiederholen)

1. **Kein Sprachumschalter.** Ausschließlich Kroatisch, `lang="hr"`. Kein DE/EN/FR/IT.
2. **Voller Produktkatalog: 51 Modelle, 8 Hauptkategorien** (siehe ANALYSIS.md Abschnitt 8). Keine Reduktion auf eine Teilmenge — Zoran ist Generalvertreter für ganz Kroatien, nicht nur für seinen eigenen Lagerbestand.
3. **Farben: `#008D84` (Türkis) / `#F39A2E` (Orange) / `#FFFFFF`.** Kein dunkles Navy — das war eine falsche Annahme aus einer früheren Screenshot-Analyse, per Live-CSS widerlegt.
4. **Keine 1:1-Kopie von sunward.eu.** Struktur/Farben als Referenz, aber deutlich mutiger und besser umsetzen — sunward.eu ist die Startlinie, nicht die Ziellinie.
5. **Preise nicht erfinden.** Exakte EUR-Beträge je Modell stehen noch aus (Zoran liefert). Bis dahin: Platzhalter oder "Cijena na upit", keine geratenen Zahlen.

## Architektur, die bereits gut ist (behalten, nicht neu bauen)

- Modell-URL-Struktur `/proizvodi/<oberklasse>/<modell>` (Gewichtsklasse in Breadcrumb/Sidebar, nicht in der URL)
- Bild-Platzhalter-Auto-Discovery über `public/slike`
- Farbtoken-Ansatz als Variablen (nur die Werte selbst sind falsch, siehe Punkt 3 oben)

## Arbeitsweise

- Sessions **kurz und fokussiert halten** — die vorherige einstündige durchgehende Plan-Mode-Session hat zu Instruction Drift geführt. Lieber mehrere kurze, klar abgegrenzte Sessions als eine lange.
- Vor größeren Änderungen: kurzer Plan-Mode-Durchgang, Ergebnis dem Nutzer zeigen, erst nach Bestätigung ausführen.
- Reihenfolge siehe `TASK.md` (Phase 0–7).
