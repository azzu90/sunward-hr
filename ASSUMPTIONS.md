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

### Abweichung 4 — dunkle statt weisser Schrift auf den Orange-CTAs

Der zweite Live-Check der Button-Rollen (ANALYSIS.md §7 Nachtrag) hat ergeben:
die primäre Handlungs-CTA ist auf sunward.eu Orange `#F39A2E` **mit weisser
Schrift**. Nachgerechnet sind das **2,22:1** — verfehlt AA für Fliesstext
(4,5:1) und sogar die Grossschrift-Schwelle (3:1). Derselbe Fehlertyp wie
beim Fliesstext-Ton `#879C9F` in Abweichung 1, nur an einer Stelle, die
jeder Besucher anklicken soll.

**Entscheidung:** Orange-Fläche bleibt exakt `#F39A2E` (Markentreue), die
Schrift darauf ist aber `--color-on-accent` (`#14212b`, **7,39:1**). Der
Tokensatz hatte diesen Ton bereits für die Badges — die CTAs nutzen jetzt
dasselbe Paar. Neu dazu kam nur `--color-accent-strong` (`#e08a1e`) als
Hover-Fläche; dort sind es noch **6,10:1**, weil ein dunkleres Orange den
Kontrast zur dunklen Schrift *senkt* und nicht hebt — deshalb nachgerechnet
statt geschätzt.

**Bewusst offen gelassen:** die Orange-Fläche selbst erreicht gegen Weiss nur
2,22:1 und gegen `#F5F6F7` 2,05:1. Für WCAG 1.4.11 (Nicht-Text-Kontrast,
3:1) wäre das zu wenig, *wenn* der Rand die einzige Kennzeichnung des
Bedienelements wäre. Ist er hier nicht: jeder dieser Buttons trägt ein
fettes Versal-Label mit 7,39:1, das den Klickbereich eindeutig markiert. Ein
zusätzlicher dunkler Rahmen würde 3:1 erreichen, wäre aber eine
Design-Erfindung ohne Vorbild im Original — deshalb nicht gemacht, sondern
hier dokumentiert.

### Abweichung 5 — kein dunkles Navy mehr

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

## Financiranje- und Kontakt-Seite (Phase 3, Teilumfang)

### Abweichung — Web3Forms statt Resend

`PRD-sunward.hr.md` §14 und `TASK.md` Phase 3 nennen „API-Route +
E-Mail-Versand (z.B. Resend)". Umgesetzt ist die API-Route
(`src/app/api/kontakt/route.ts`), als Transport aber **Web3Forms**:

Resend verlangt eine verifizierte Absenderdomain. `sunward.hr` ist noch
nicht live, es gibt also nichts zu verifizieren — bis zum Domain-Cutover
käme keine einzige Mail bei Zoran an, und das Formular wäre eine Attrappe.
Web3Forms braucht nur einen Access Key plus eine einmalig per Klick
bestätigte Empfängeradresse und funktioniert auf der `*.vercel.app`-URL
sofort.

Der Transport liegt gekapselt in `src/lib/contact-mail.ts`. Ein späterer
Wechsel auf Resend — sinnvoll, sobald `sunward.hr` auf Vercel verifiziert
ist — betrifft ausschliesslich diese eine Datei; Route und Formular kennen
nur `sendContactMessage()`.

Der Key heisst `WEB3FORMS_ACCESS_KEY` und **nicht** mehr
`NEXT_PUBLIC_WEB3FORMS_KEY` wie in der ursprünglichen `.env.example`
vorgesehen: der Aufruf geht serverseitig raus, damit steht der Key nicht im
ausgelieferten HTML und lässt sich nicht von fremden Seiten missbrauchen.

Fehlt der Key, antwortet die Route mit `503 { reason: "unconfigured" }` und
das Formular zeigt E-Mail-Adresse und Zorans Telefonnummer als Fallback.
Die Seite ist damit auch ohne Konfiguration nie eine Sackgasse.

### Financiranje-Texte — was bewusst NICHT dort steht

Die Seite ist auf das Fokus-Keyword `bager na rate` (PRD §10) ausgerichtet
und brauchte dafür mehr Text als die beiden vorhandenen Boxen. Neu
geschrieben wurden Intro, ein Prozess-Absatz und sechs FAQ-Einträge
(`src/content/financing.ts`) — ausschliesslich aus bestätigten Angaben aus
PRD §4/§5.

Nicht erfunden und deshalb nirgends genannt: **Zinssatz, Laufzeit,
Monatsrate, Bearbeitungsdauer und der Name des Leasingpartners.** Wo eine
solche Zahl inhaltlich hingehört (FAQ „Kolika je mjesečna rata?"), verweist
der Text auf den persönlichen Kontakt statt zu schätzen. Eine geschätzte
Rate in einem Finanzierungsangebot ist kein Platzhalter, sondern eine
Falschaussage — dafür reicht `tbd()` nicht als Absicherung.

Die FAQ-Antworten erscheinen zusätzlich als `FAQPage`-JSON-LD
(`faqSchema()` in `src/lib/schema.ts`). Im Snippet steht damit nur, was
auch auf der Seite sichtbar ist.

### Kontaktseite — Auslassungen

- **Kein Länder-Dropdown**, anders als bei sunward.eu (ANALYSIS.md §13) —
  für einen Händler, der nur Kroatien beliefert, eine Hürde ohne Nutzen.
- **Keine Öffnungszeiten.** Nirgends bestätigt; geratene Zeiten schicken
  Leute vor eine verschlossene Tür. Offene Frage an Zoran.
- **Kein Karten-Embed**, solange `site.address.geo` ein `tbd()` ist. Ein
  Pin auf ungeprüfter Position ist schlechter als gar keiner.
- **Keine Consent-Checkbox**, nur eine Hinweiszeile: `/politika-privatnosti`
  existiert noch nicht (Phase 4), und eine Pflicht-Checkbox mit Link auf
  einen 404 wäre schlechter als keine.
- Spam-Schutz ist ein Honeypot-Feld (`tvrtka`). Kein CAPTCHA — bei diesem
  Aufkommen unverhältnismässig.

### Offene Fragen an Zoran

1. Öffnungszeiten der Poslovnica Jelaši 37C.
2. Konkreter Financiranje-Ablauf: Laufzeiten, übliche Raten, Leasingpartner
   — damit „Kako funkcionira" von einem allgemeinen Absatz zu echten
   Schritten werden kann.
3. Web3Forms-Key anlegen und die Empfängeradresse
   `sunward.hrvatska@gmail.com` bestätigen.

---

## Produktbilder von sunward.eu

`scripts/fetch-sunward-images.mts` (`npm run fetch-images`) hat die 51
Produktfotos (`public/slike/proizvodi/<slug>/glavna.png`) und die 9
Unterkategorie-Kachelbilder (`public/slike/kategorije/<kategorija>/grupe/
<grupa>/tile.png`) heruntergeladen. Slug-Mapping ist live verifiziert, nicht
mechanisch abgeleitet — sunward.eu fügt bei den meisten Modellen einen
Bindestrich vor der ersten Ziffer ein, aber fünf Modelle weichen ab: SWTH
3507 (kein Bindestrich), SWE 215F-5A (sunward.eu-Slug `swe-215f-2`, anderer
Suffix), SWE 335F-5 (`swe-335f`, Suffix entfällt), SWDM 165S und SWDM 215S
(`swdm-165`/`swdm-215`, trailing „s" entfällt). Alle fünf per direktem Fetch
bestätigt (richtiger Modellname in der Überschrift, gültiges `og:image`).

### Abweichung — die 8 Kategorie-Heroes bleiben Platzhalter

`TASK.md`/`images.ts` sehen für jede der 8 Kategorien ein 21:9-Breitformat-
Foto vor (Hint-Text z.B. „Mehrere Sunward-Bagger zusammen … Halbprofil").
Verifiziert: die echten sunward.eu-Kategorieseiten
(`/product-category/excavators/` etc.) haben **kein** Hero-Bild, nur ein
reines Produktraster (kein `og:image`, kein Banner-`<img>` im HTML). Die
einzigen kategoriebezogenen Bilder sind die freigestellten 569×564-Icons von
`/products/` — dieselbe Bildsorte wie die 9 Unterkategorie-Kacheln oben,
aber falsches Seitenverhältnis für den 21:9-Slot und ein anderes Motiv als
der Hint-Text verlangt.

**Entscheidung (mit Auftraggeber bestätigt):** kein Download für die 8
Heroes in dieser Phase, Platzhalter bleibt.

**Vormerkung für einen späteren Durchgang:** als Interimslösung könnte je
Kategorie eines der bereits vorhandenen 51 Produktfotos als Hero dienen
(ein repräsentatives Modell im Halbprofil, wie der Hint-Text selbst
vorschlägt). Das ist eine redaktionelle Auswahl — welches Modell je
Kategorie, und ob der 21:9-Ausschnitt des jeweiligen Fotos funktioniert —
und deshalb bewusst nicht Teil des automatisierten Massen-Downloads.

### Noch ohne UI — die 9 Unterkategorie-Kacheln

`GroupDef` (`src/content/types.ts`) hat aktuell kein Bildfeld, und
`CategoryBrowser.tsx` zeigt Gruppen nur als Text-Überschrift. Die neuen
Manifest-Einträge in `images.ts` liefern nur das Asset vor; die
Kachel-Darstellung selbst ist ein späterer Phasenschritt.

---

## Rechtliches (Phase 4) — Impresum, Politika privatnosti, Kolačići

`src/content/legal.ts` + drei neue Routen. Gliederung nach ANALYSIS.md §14
(nur Struktur-Vorlage von sunward.eu), Inhalt vollständig eigenständig für
Hidraulika Drvošped d.o.o. verfasst. Firmendaten kommen ausschließlich aus
`site.ts` (PRD §3), keine zweite Quelle.

Tatsächlich verarbeitete Daten wurden im Code verifiziert, nicht geraten:
Kontaktformular → Web3Forms → `sunward.hrvatska@gmail.com`; Vercel Analytics
und Speed Insights (laut eigenem Code-Kommentar cookielos); Schriften
selbst gehostet (kein Kontakt zu `fonts.gstatic.com`); Hosting bei Vercel
Inc. Keine weiteren Cookies, kein Google Analytics, kein Captcha (Honeypot
statt Captcha) — per Grep im Code bestätigt.

Zwei Angaben sind bewusst generisch statt erfunden gehalten (gleiches
Prinzip wie der Zinssatz in `financing.ts`):

- **Aufbewahrungsdauer** der Kontaktanfragen — keine konkrete Anzahl Tage
  bekannt, deshalb nur „so lange wie für die Bearbeitung nötig".
- **Datenschutzbeauftragter (DPO)** — bei 27 Mitarbeitenden keine gesetzliche
  Bestellpflicht; kein erfundener Name, Anfragen laufen über die
  Kontakt-E-Mail.

### Offene Punkte

1. Genaue Aufbewahrungsdauer der Kontaktanfragen mit Zoran klären, falls er
   eine konkrete Praxis hat (sonst bleibt die generische Formulierung).
2. Bestätigen, dass kein DPO bestellt ist bzw. bestellt werden muss.
3. **Alle drei Rechtsseiten vor dem echten Domain-Cutover einmal von einem
   kroatischen Anwalt gegenlesen lassen** — bewusst offener Schritt, keine
   Anforderung an diese Phase selbst, aber vor Live-Gang nachzuholen.

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
