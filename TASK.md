# TASK.md — sunward.hr Workflow

> Ersetzt die alte, vermutlich korrumpierte TASK.md. Referenzdokumente: `PRD-sunward.hr.md` (Anforderungen), `ANALYSIS.md` (sunward.eu-Referenz), `DESIGN.md` (Design-Tokens/Richtung).

---

## Phase 0 — Repo-Audit (kurz, Plan Mode)

**Ziel:** Verstehen was im bestehenden Next.js-16-Stand behalten werden kann, bevor irgendetwas geändert wird.

- Bestehenden Dateibaum + `git log` durchgehen
- Prüfen: Farbtoken-Definitionen, Routing-Struktur (`/proizvodi/<oberklasse>/<modell>`), Platzhalter-System (`public/slike`) — diese Architektur ist vermutlich gut und bleibt
- Prüfen: wo genau der Sprachumschalter und die 4-Kategorien-Reduktion herkommen (welche Datei/Komponente)
- **Output:** kurze Liste "behalten" vs. "ersetzen" — kein Code ändern in dieser Phase

📌 **Modell-Empfehlung:** Sonnet 5, Effort **medium** (per `/model` einstellen, dann mit Pfeiltasten die Effort-Stufe wählen). Reine Lese-/Auditaufgabe, keine Architekturentscheidung — braucht noch keine hohe Stufe. Plan Mode ja — aber zeitlich kurz halten (Ergebnis nach einem Durchgang, nicht iterativ stundenlang verfeinern).

✅ **Status: abgeschlossen.**

---

## Phase 1 — Design-Fundament korrigieren

- Farbtokens ersetzen: `#008D84` (Primär), `#F39A2E` (Akzent), `#FFFFFF` (Fläche), `#879C9F` (Text) — siehe DESIGN.md
- Dunkles Navy-Vollbild-Hero entfernen/umbauen (kein Navy auf sunward.eu, siehe ANALYSIS.md Abschnitt 7)
- Fonts auf Oxygen (Body) / Mulish (Headings) umstellen
- Sprachumschalter komplett entfernen (nur `lang="hr"`)

📌 **Modell-Empfehlung:** Opus (4.8 oder 5, je nach Verfügbarkeit), Effort **high** (Default — strukturelle Änderung an der Design-System-Basis, wirkt sich auf alles Weitere aus).

✅ **Status: umgesetzt, committet, gepusht** (Commit 3d0bd90 auf `redesign`).

---

## Phase 2 — Kategorie-/Produktstruktur erweitern

- Von 4 auf 8 Hauptkategorien erweitern (siehe ANALYSIS.md Abschnitt 8): Bageri, Utovarivači (2 Unterkategorien), Zglobni utovarivači, Bušače garniture, Zglobne radne platforme, Škarasti podizni strojevi (2 Unterkategorien), Teleskopske dizalice, Teleskopski utovarivači
- Alle 51 Modelle als Dateneinträge anlegen (Platzhalter-Bilder, Specs aus ANALYSIS.md)
- Produktdetailseiten-Template nach 13-Punkte-Muster (ANALYSIS.md Abschnitt 4) für alle 51 Modelle
- Dodatna Oprema als eigene Kategorie (10 Positionen, PRD Abschnitt 8)

📌 **Modell-Empfehlung:** Opus, Effort **high**, ggf. **xhigh** wenn die Datenmodellierung für 51 Einträge komplex wird (großer struktureller Umfang).

✅ **Status: umgesetzt, committet, gepusht** (Commits 6104074, 8843fb9 auf `redesign`).

---

## Phase 2b — Filter & Sortierung auf Kategorieseiten (neuer, bestätigter Scope)

**Kontext:** sunward.eu suggeriert optisch eine Filterfunktion (Kategorienbaum mit dekorativen, nicht-funktionalen Checkbox-Icons), liefert aber keine echte Filter- oder Sortierlogik (per DOM-Prüfung bestätigt, ANALYSIS.md §3). Bestätigter Auftrag: sunward.hr bekommt eine **echte** Filterung (nach Untergruppe) und eine **echte** Sortierung (mind. nach Gewicht; nach Preis sobald echte Preise vorliegen) — eine bewusste Verbesserung, kein 1:1-Nachbau.

- Filterung nach Untergruppe (z.B. bei Bagerima: Kotačni/Mini/Kompaktni/Srednji/Veliki) — Mehrfachauswahl möglich
- Sortierung nach Operating Weight (aufsteigend/absteigend) als erste Stufe; Sortierung nach Preis vorbereiten, aber erst aktivieren, sobald echte Preise vorliegen (PRD Abschnitt 7)
- Client-seitige Lösung naheliegend, da alle 51 Modelldaten ohnehin statisch im Repo vorliegen — technische Entscheidung liegt bei der Umsetzungs-Session
- Bestehende Sidebar-Navigationslinks (Untergruppen als eigene Seiten) bleiben zusätzlich bestehen — Filter/Sort ergänzt, ersetzt nicht

📌 **Modell-Empfehlung:** Opus, Effort **high** (neue Interaktionslogik, State-Management für Filter+Sort-Kombination).

✅ **Status: umgesetzt.** `CategoryBrowser.tsx` (Client) + `lib/product-sort.ts`, eingebunden auf allen acht Kategorieseiten. Filter und Sortierung erscheinen **anzahlgesteuert**, nicht pro Kategorie hartkodiert: Sortierung ab 3 Modellen, Untergruppen-Filter ab zwei nicht-leeren Gruppen. Liefert Zoran Modelle nach, erscheinen die Bedienelemente ohne Codeänderung.

**Korrektur zum Kontext oben:** Untergruppen sind **keine eigenen Seiten**. Die Sidebar-Links sind `#anchor`-Sprungmarken auf `<section id>` derselben Seite — so dokumentiert in `taxonomy.ts`, `types.ts` (`GroupSlug`) und CLAUDE.md. Deshalb bleibt bei Default-Sortierung die gruppierte Darstellung samt `id` erhalten; nur beim Sortieren nach Radna masa wird daraus ein flaches Raster. Ist eine Gruppe weggefiltert, führt ihr Sidebar-Anker ins Leere — bekannte Grenze, die Sidebar blieb auftragsgemäß unangetastet.

**Zwei Entscheidungen, die für spätere Sessions festgehalten gehören:**

1. **`replaceState`, nicht `pushState`.** Der Zustand steht in der URL (`?grupa=…&sort=…`) und ist damit teilbar, aber der Zurück-Button nimmt Filter **nicht** einzeln zurück, sondern verlässt die Seite. Mit `pushState` wären fünf Checkbox-Klicks fünf Zurück-Schritte — die schlechtere Bedienung. Bewusst so, nicht vergessen.
2. **`useSyncExternalStore` statt `useState` + Effect.** Ein Effect, der beim Mount den Zustand aus der URL setzt, läuft in `react-hooks/set-state-in-effect` — dieselbe Regel, die schon beim Kontaktformular griff. `useSyncExternalStore` ist für „Server und Client haben verschiedene Snapshots" gebaut und löst das ohne Hydration-Mismatch. Ebenfalls bewusst **kein** `useSearchParams()`: das erzwingt eine Suspense-Grenze, und dann stünde im statischen HTML der Kategorieseiten nur die Fallback-Hülle statt der Produktkarten — verifiziert stehen dort weiterhin alle 21 Bageri-Karten.

Preissortierung ist im Typsystem vorhanden (`SortKey` kennt `cijena-asc`/`cijena-desc` samt Komparator), wird aber nicht angeboten: alle 51 Modelle stehen auf „Cijena na upit". Aktivierung sind zwei Zeilen in `sortOptions`, siehe Kommentar dort.

---

## Phase 3 — Content-Bausteine

- Trust-Leiste (Generalni zastupnik / 27 zaposlenika / 3 god-5.000h / Servis 24h)
- Finanzierungs- und Eintausch-Box (Texte 1:1 aus PRD Abschnitt 5)
- Zertifikate-Box als Text (ohne Logo-Grafiken, Upgrade später — PRD Abschnitt 3)
- Drvošped-Branding: Badge + Logo-Kombination + subtiler Rücklink zu drvosped.hr
- ✅ Kontaktformular (API-Route + E-Mail-Versand an sunward.hrvatska@gmail.com) — umgesetzt als `/kontakt` mit `POST /api/kontakt`; Transport Web3Forms statt Resend, Begründung in ASSUMPTIONS.md
- ✅ Eigene Seite `/financiranje`, SEO-Fokus `bager na rate` (PRD Abschnitt 6/10) — Homepage-Sektion bleibt als Teaser bestehen
- ✅ Eigene Seite `/servis` (Servis i dijelovi, PRD Abschnitt 8): Verfügbarkeitszusage als weitergegebener Vertragshändler-Vorteil formuliert (nicht als eigenes Lieferversprechen nach Karlovac), 11 Ersatzteil-Kategorien als Icon-Grid, Nebensatz zu Maintenance Kits, CTA mit vorausgewähltem Ersatzteil-Betreff im Kontaktformular
- ✅ Hauptnavigation vollständig: Strojevi · Dodatna oprema · Servis i dijelovi · Financiranje · Kontakt (Servis vor Financiranje, analog zu sunward.eu)

📌 **Modell-Empfehlung:** Sonnet 5, Effort **medium** (Standard-Umsetzung nach klarer Vorlage).

---

## Phase 4 — SEO & Rechtliches

- Individuelle Title-Tags + Meta-Descriptions pro Seite
- Schema.org (Organization + Product je Modell)
- sitemap.xml + robots.txt
- Impressum (Firmendaten PRD Abschnitt 3), Datenschutz, eigene Cookie-Consent-Instanz (getrennt von drvosped.hr)

📌 **Modell-Empfehlung:** Sonnet 5, Effort **medium**.

✅ **Status: umgesetzt, committet, gepusht.** Die SEO-Grundlage steht seit dem Aufsetzen des Projekts (Commit 6dfe517): Title-Tags und Meta-Descriptions werden in `lib/seo.ts` aus den Content-Objekten abgeleitet statt je Route von Hand geschrieben, Schema.org (Organization + Product je Modell + BreadcrumbList + FAQPage) in `lib/schema.ts`, dazu `app/sitemap.ts` und `app/robots.ts`. Die drei Pflichtseiten Impresum, Politika privatnosti und Kolačići kamen mit Commit a61bdb1 dazu — Inhalt eigenständig verfasst, nur die Gliederung folgt ANALYSIS.md §14. Cookie-Consent ist eine eigene Instanz mit dem localStorage-Schlüssel `sunward-hr-cookie-consent`, damit von drvosped.hr getrennt (PRD §11).

⚠️ Offen vor dem Domain-Cutover: die drei Rechtsseiten einmal von einem kroatischen Anwalt gegenlesen lassen, sowie Aufbewahrungsdauer der Kontaktanfragen und DPO-Frage mit Zoran klären — alle drei als offene Punkte in ASSUMPTIONS.md.

---

## Phase 4b — Design-Korrekturen: Button-Rollen & Hero-Foto

Zwei Befunde aus einem zweiten Live-Check von sunward.eu, beide unabhängig voneinander.

- Button-Rollen nach dem tatsächlich gemessenen Muster (ANALYSIS.md §7 Nachtrag): primäre Handlungs-CTA Orange, wiederkehrende/navigatorische Buttons Türkis. Vorher war ausnahmslos alles Türkis.
- Homepage-Hero hatte gar kein Bild — jetzt zweispaltig mit einem Modellfoto aus den 51 übernommenen Aufnahmen.

✅ **Status: umgesetzt.** Orange (`--color-accent` + dunkle Schrift `--color-on-accent`, neu dazu `--color-accent-strong` als Hover) auf fünf primären CTAs: Hero „Zatraži ponudu", „Cijena na upit"-CTA der Produktdetailseiten sowie die Abschluss-CTAs von `/financiranje`, `/servis` und `/dodatna-oprema/<slug>`. Türkis bleibt bei „Svi strojevi", „Pogledaj stroj", Formular-Submit und Broschüren-Download.

⚠️ Die weisse Schrift des Originals erreicht auf Orange nur 2,22:1 — bei uns deshalb dunkle Schrift mit 7,39:1 (ASSUMPTIONS.md, Abweichung 4).

Hero zeigt den **SWE 155F**, Text links / freigestelltes Modellfoto rechts. Interimslösung: der 21:9-Slot `pocetna/hero` bleibt offen für eine echte breite Gradilište-Aufnahme von Zoran.

📌 **Modell-Empfehlung:** Opus 5, Effort **medium** (Kontrastrechnung + redaktionelle Bildauswahl).

---

## Phase 5 — QA vor Push

Pre-Launch-Checkliste aus PRD Abschnitt 18 komplett durchgehen, insbesondere:
- Kein Sprachumschalter mehr vorhanden
- Alle 8 Kategorien/51 Modelle da
- Mobile-Ansicht aller Seitentypen
- Lighthouse-Check gegen sunward.eu-Niveau

📌 **Modell-Empfehlung:** Sonnet 5, Effort **low** bis **medium** (Checkliste abarbeiten).

---

## Phase 6 — Deploy & Review

- Push nach GitHub, Vercel-Preview-Link prüfen
- 🔴 **Vor dem Domain-Cutover:** `WEB3FORMS_ACCESS_KEY` in den Vercel-Environment-Variablen setzen und Zoran die Empfängeradresse `sunward.hrvatska@gmail.com` bei Web3Forms bestätigen lassen. Solange der Key fehlt, antwortet `/api/kontakt` mit 503 und Kontaktanfragen erreichen Zoran nur über den mailto-Fallback, nicht automatisch. Nach dem Setzen einen echten Testversand machen.
- Preview an Zoran, Feedback einholen
- Parallel: Zoran um Preisliste (PRD Abschnitt 7), Zertifikat-Scans, YouTube-Links bitten sowie um Öffnungszeiten und den konkreten Financiranje-Ablauf (Laufzeiten, Leasingpartner) — beides bewusst nicht erfunden, siehe ASSUMPTIONS.md

---

## Phase 7 — Go-Live

- Nach Freigabe: Domain-Umzug auf produktive sunward.hr

---

## Phase 8 — Datenblatt-Tiefe: zusätzliche Spec-Felder (später, nicht launchkritisch)

Die Datenblatt-Recherche (`reference-docs/DATASHEET-RESEARCH.md`) enthält rund zehn Kennwerte, für die es in `SpecKey` (`src/content/types.ts`) noch kein Feld gibt und die deshalb bei der Übernahme liegen geblieben sind. **Die Daten sind schon recherchiert** — es fehlt nur die Struktur, nichts muss neu beschafft werden:

- Motor: max. Drehmoment (Nm bei U/min), Tankvolumen Diesel, AdBlue-Volumen
- Hydraulik: Volumen Hydrauliköltank
- Fahrwerk/Abmessungen: Bodenfreiheit, Kettenschuhbreite, Kettenbreite, Oberwagenbreite, Heckschwenkradius, Radstand/Spurbreite
- Arbeitsbereich: Auslegerlänge, Armlänge, max. Grabhöhe, Abkippreichweite
- Bühnen/Kran: Plattformmaße, Plattformverlängerung, Plattformdrehung, Wendekreis, Auslegerlängen
- Bohrgeräte: max. Bohrtiefe, max. Drehmoment (kN·m), Rotationsgeschwindigkeit, Windenzugkraft

Vorgehen: `SpecKey` nur **erweitern** (types.ts warnt oben selbst davor, Bestehendes zu ändern), kroatische Labels in `specs.ts` ergänzen, dann Werte aus dem Recherche-Dokument nachtragen. Zu klären ist vorher, welche dieser Felder auf einer Vertriebsseite überhaupt Kaufentscheidungen stützen — sunward.eu selbst zeigt sie teils nur im PDF, nicht auf der Produktseite. Kandidat für ein Aufklappen („Detaljni podaci") statt für die Hauptansicht.

📌 **Modell-Empfehlung:** Sonnet 5, Effort **medium** (Struktur erweitern + Massen-Dateneingabe nach bestehendem Muster).
