# DESIGN.md — sunward.hr

> Ersetzt/ergänzt eine ggf. vorhandene DESIGN.md. Kompatibel mit Impeccables `/impeccable init`-Kontextformat (Zielgruppe, Marken-Lane, Voice, Anti-Referenzen, Farben, Type, Komponenten).

---

## Zielgruppe

Kroatische Bau-, Forst- und Kommunalunternehmer sowie Site-Manager, die eine Baumaschine kaufen oder leasen wollen. Entscheidungskriterien: Preis, Garantie, Service-Erreichbarkeit, Vertrauenswürdigkeit des Händlers — nicht Trend/Ästhetik um ihrer selbst willen.

## Marken-Lane

Regionaler Exklusivhändler-Auftritt für eine internationale Baumaschinenmarke. Näher an "seriöser Industrieausrüster" als an "Tech-Startup". Referenzpunkt ist explizit **sunward.eu** — nicht ein generisches SaaS-Landingpage-Muster.

🔴 **Aber keine 1:1-Kopie.** sunward.eu wurde von einer Agentur (Pageart, Polen) gebaut — solide, aber nicht das Ziel selbst. sunward.hr soll sich an Struktur/Farben/Wiedererkennung anlehnen, dabei aber **deutlich mutiger, schärfer und besser** sein als das Original. "Angelehnt, nicht kopiert" — sunward.eu ist die Startlinie, nicht die Ziellinie.

## Voice

Direkt, faktenbasiert, kroatisch (ausschließlich). Konkrete Zahlen vorne: Garantie (3 god/5.000h), Finanzierung (30%), Mitarbeiterzahl (27), Reaktionszeit (24h). Keine vagen Marketing-Floskeln ohne Beleg.

## 🔴 Anti-Referenzen (explizit vermeiden — das ist im vorherigen Build passiert)

- **Keine 1:1-Kopie von sunward.eu** — eigenständiger, mutigerer Ausdruck gefordert, auf Basis der verifizierten Farben/Struktur
- **Kein** dunkles Vollbild-Hero ohne Fotografie — das ist NICHT der sunward.eu-Look (der ist weiß-dominant)
- Kein generischer "AI-SaaS-Look": keine Purple-Blue-Gradients, keine verschachtelten Cards-in-Cards, kein rundes Icon-Tile über jeder Überschrift
- Kein Sprachumschalter — nur Kroatisch
- Kein reduzierter/verkürzter Produktkatalog — alle 51 Modelle, 8 Kategorien (siehe ANALYSIS.md)

## Farben (live verifiziert von sunward.eu, siehe ANALYSIS.md Abschnitt 7)

| Rolle                                        | Wert                               |
| -------------------------------------------- | ---------------------------------- |
| Primär (Marke)                               | `#008D84`                          |
| Akzent                                       | `#F39A2E`                          |
| Hauptfläche                                  | `#FFFFFF`                          |
| Footer                                       | `#008D84` + dezente Verlaufstextur |
| Fließtext (Referenzwert von sunward.eu)      | `#879C9F`                          |
| Drvošped-Cross-Branding (nur Badge/Rücklink) | Navy `#1B3A6B` / Amber `#E8A020`   |

⚠️ **Accessibility geht vor 1:1-Treue:** `#879C9F` selbst erreicht auf Weiß nur 2,88:1 Kontrast — verfehlt WCAG AA (4,5:1) und sogar die Großtext-Schwelle (3:1). Das ist ein echter Fehler auf sunward.eu selbst, kein Messfehler unsererseits. Da "Accessibility soll sunward.eu übertreffen" ein explizites Ziel ist (siehe unten): `#879C9F` nur für dekorative/Nicht-Text-Elemente verwenden; für tatsächlichen Fließtext einen dunkleren, WCAG-AA-konformen Ton derselben Farbfamilie ableiten (analog zum bereits bestehenden Muster einer abgeleiteten textsicheren Markenfarbe).

## Typografie

- Body: **Oxygen** (Google Font) — falls nicht verfügbar, vergleichbare humanistische Sans-Serif
- Headings: **Mulish** (Google Font), Weight 900 für H2, 700 für H3
- ⚠️ Vor dem Umstieg prüfen: beide Fonts müssen kroatische Diakritika (č, ć, š, ž, đ) über das `latin-ext`-Subset abdecken, so wie das aktuell genutzte Inter das tut. Falls eine der beiden Schriften das nicht sauber abdeckt, Alternative mit vollem `latin-ext`-Support wählen statt fehlerhafter Glyphen zu riskieren.
- ⚠️ **Oxygen-Gewichtslimit:** Oxygen existiert nur in 300/400/700, keine Variable-Achse, kein 500/600. Emphase-Stufen, die 500/600 bräuchten (z.B. Spec-Label vs. Spec-Wert), über **Farbe statt Gewicht** differenzieren. Stellen, die tatsächlich Weight 900 brauchen (Wortmarke, Preis-Anzeige), explizit auf die Heading-Font (Mulish) umleiten statt auf Oxygens Maximalgewicht (700) zurückzufallen.

## Komponenten/Patterns (aus ANALYSIS.md übernehmen)

- Kategorieseiten: Sidebar-Kategorienbaum + Produktgrid mit 5-Spec-Karten + Preis (Abweichung von sunward.eu)
- Produktdetailseiten: 13-Punkte-Muster, CTA zu Zoran statt Händlersuche
- Trust-Leiste: Generalni zastupnik / 27 zaposlenika / 3 god-5.000h / Servis 24h (siehe PRD Abschnitt 13)
- Finanzierungs-/Eintausch-Boxen als Zwei-Spalten-Layout
- Cookie-Banner: schlank, zwei Buttons ("Samo nužni" / "Prihvati sve") — nicht der textlastige Stil der alten Seite

## Mobile

Vollständig responsive ist Pflicht. Mobile-First als Bauweise empfohlen, aber keine Vorgabe — das Ergebnis zählt.

## Performance-Ziel

Lighthouse Performance/SEO/Accessibility spürbar über sunward.eu-Niveau: schnellere Ladezeit, kleinere Bundle-Größe, optimierte Fonts, korrekte Meta-Tags, sauberes Semantic HTML.
