# TASK.md — sunward.hr Workflow

> Ersetzt die alte, vermutlich korrumpierte TASK.md. Referenzdokumente: `PRD-sunward.hr.md` (Anforderungen), `ANALYSIS.md` (sunward.eu-Referenz), `DESIGN.md` (Design-Tokens/Richtung).

---

## Phase 0 — Repo-Audit (kurz, Plan Mode)

**Ziel:** Verstehen was im bestehenden Next.js-16-Stand behalten werden kann, bevor irgendetwas geändert wird.

- Bestehenden Dateibaum + `git log` durchgehen
- Prüfen: Farbtoken-Definitionen, Routing-Struktur (`/proizvodi/<oberklasse>/<modell>`), Platzhalter-System (`public/slike`) — diese Architektur ist vermutlich gut und bleibt
- Prüfen: wo genau der Sprachumschalter und die 4-Kategorien-Reduktion herkommen (welche Datei/Komponente)
- **Output:** kurze Liste "behalten" vs. "ersetzen" — kein Code ändern in dieser Phase

📌 **Modell-Empfehlung:** Sonnet, mittlere Reasoning-Stufe. Plan Mode ja — aber zeitlich kurz halten (Ergebnis nach einem Durchgang, nicht iterativ stundenlang verfeinern).

---

## Phase 1 — Design-Fundament korrigieren

- Farbtokens ersetzen: `#008D84` (Primär), `#F39A2E` (Akzent), `#FFFFFF` (Fläche), `#879C9F` (Text) — siehe DESIGN.md
- Dunkles Navy-Vollbild-Hero entfernen/umbauen (kein Navy auf sunward.eu, siehe ANALYSIS.md Abschnitt 7)
- Fonts auf Oxygen (Body) / Mulish (Headings) umstellen
- Sprachumschalter komplett entfernen (nur `lang="hr"`)

📌 **Modell-Empfehlung:** Opus, hohe Reasoning-Stufe (strukturelle Änderung an Design-System-Basis, wirkt sich auf alles Weitere aus).

---

## Phase 2 — Kategorie-/Produktstruktur erweitern

- Von 4 auf 8 Hauptkategorien erweitern (siehe ANALYSIS.md Abschnitt 8): Bageri, Utovarivači (2 Unterkategorien), Zglobni utovarivači, Bušače garniture, Zglobne radne platforme, Škarasti podizni strojevi (2 Unterkategorien), Teleskopske dizalice, Teleskopski utovarivači
- Alle 51 Modelle als Dateneinträge anlegen (Platzhalter-Bilder, Specs aus ANALYSIS.md)
- Produktdetailseiten-Template nach 13-Punkte-Muster (ANALYSIS.md Abschnitt 4) für alle 51 Modelle
- Dodatna Oprema als eigene Kategorie (10 Positionen, PRD Abschnitt 8)

📌 **Modell-Empfehlung:** Opus, hohe Reasoning-Stufe (großer struktureller Umfang, Datenmodellierung für 51 Einträge).

---

## Phase 3 — Content-Bausteine

- Trust-Leiste (Generalni zastupnik / 27 zaposlenika / 3 god-5.000h / Servis 24h)
- Finanzierungs- und Eintausch-Box (Texte 1:1 aus PRD Abschnitt 5)
- Zertifikate-Box als Text (ohne Logo-Grafiken, Upgrade später — PRD Abschnitt 3)
- Drvošped-Branding: Badge + Logo-Kombination + subtiler Rücklink zu drvosped.hr
- Kontaktformular (API-Route + E-Mail-Versand an sunward.hrvatska@gmail.com)

📌 **Modell-Empfehlung:** Sonnet, mittlere Reasoning-Stufe (Standard-Umsetzung nach klarer Vorlage).

---

## Phase 4 — SEO & Rechtliches

- Individuelle Title-Tags + Meta-Descriptions pro Seite
- Schema.org (Organization + Product je Modell)
- sitemap.xml + robots.txt
- Impressum (Firmendaten PRD Abschnitt 3), Datenschutz, eigene Cookie-Consent-Instanz (getrennt von drvosped.hr)

📌 **Modell-Empfehlung:** Sonnet, mittlere Reasoning-Stufe.

---

## Phase 5 — QA vor Push

Pre-Launch-Checkliste aus PRD Abschnitt 18 komplett durchgehen, insbesondere:
- Kein Sprachumschalter mehr vorhanden
- Alle 8 Kategorien/51 Modelle da
- Mobile-Ansicht aller Seitentypen
- Lighthouse-Check gegen sunward.eu-Niveau

📌 **Modell-Empfehlung:** Sonnet, niedrige bis mittlere Reasoning-Stufe (Checkliste abarbeiten).

---

## Phase 6 — Deploy & Review

- Push nach GitHub, Vercel-Preview-Link prüfen
- Preview an Zoran, Feedback einholen
- Parallel: Zoran um Preisliste (PRD Abschnitt 7), Zertifikat-Scans, YouTube-Links bitten

---

## Phase 7 — Go-Live

- Nach Freigabe: Domain-Umzug auf produktive sunward.hr
