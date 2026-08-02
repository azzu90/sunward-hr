# ANALYSIS.md — sunward.eu Referenzanalyse (verifiziert)

> Ersetzt die alte, vermutlich korrumpierte `ANALYSIS.md`. Jede Aussage hier stammt aus direkter Prüfung (Web-Fetch + Claude-in-Chrome-Live-CSS-Messung), nicht aus Screenshot-Schätzung. Stand: siehe PRD-sunward.hr.md, Abschnitt 6/7 — dort auch die vollständige Historie/Begründung.

---

## 1. Sitemap (verifiziert)

```
Home
├── Company
│   ├── About Sunward / Sunward Europe / Our team / Career / Sunward mania
├── Products
│   ├── Excavators (Wheeled / Mini / Compact / Medium / Large)
│   ├── Compact loaders (Compact track loaders / Skid-steer loaders)
│   ├── Articulated wheel loaders
│   ├── Drilling rigs (7 Modelle als Unterseiten)
│   ├── Articulated Boom Lifts
│   ├── Scissor lifts (Electric driven / Hydraulic driven / Rough terrain)
│   ├── Telescopic cranes
│   └── Telehandlers
├── Service & Parts (Spare parts / Maintenance kits / Logistic / Warranty / Training / Smart Fleet / Find your dealer)
├── Finance
├── Applications
└── Contact
```

Utility-Bar über der Hauptnavigation: "Find your dealer"-Link + Sprachumschalter (EN/DE/FR/IT).

**Für sunward.hr:** Nur Kroatisch — kein Sprachumschalter. "Find your dealer" entfällt (es gibt nur einen Händler: Drvošped). Struktur sonst 1:1 übernehmen.

---

## 2. Homepage — Sektionsreihenfolge (verifiziert)

1. Hero-Slider (Vollbild-Produktfoto, Headline, CTA)
2. "Sunward's DNA" — Markenstatement + 4 Kennzahlen (100 Länder / Top 20 Baggerhersteller / Top 50 Baumaschinenhersteller / 180 Mrd. Yuan)
3. "Our products" — Kategorie-Grid
4. "Why choosing a Sunward product?" — 4 USP-Kacheln (European HQ 24h-Lieferung / Premium Components / Best Value for Money / 5-Jahres-Garantie)
5. "The Sunward community" — Testimonials (auffällig viele kroatische Stimmen: Mata/Josip/Antun/Franko, alle "Director/Croatia")
6. "Sunward news" — 4 News-Kacheln
7. Social-Media-Icon-Reihe
8. Händlersuche-CTA
9. Newsletter-Anmeldung
10. Footer

**Für sunward.hr:** Struktur übernehmen. Kennzahlen um 27-Mitarbeiter-Fakt ergänzen. Testimonials durch eigene Zoran-Kunden ersetzen (falls vorhanden) oder Sektion vorerst weglassen statt mit Fremdinhalt zu füllen.

---

## 3. Kategorieseite — Muster (verifiziert an Excavators/Drilling Rigs)

- Breadcrumb: Home / [Kategorie]
- Linke Sidebar: vollständiger Kategorienbaum, aktuelle Kategorie hervorgehoben
- Produktgrid, **jede Karte exakt 5 Kurzspecs** (variieren leicht je Produkttyp, typisch: Emission rating, Operating weight, Power output, Max. digging depth, Width)
- Jede Karte: Produktbild, Modellname, 5 Specs, "View product"-Button
- **Kein Preis** bei sunward.eu (globale Herstellerseite)

**Für sunward.hr:** Preis zusätzlich anzeigen (Zorans Wunsch). Sonst 1:1.

---

## 4. Produktdetailseite — 13-Punkte-Muster (verifiziert an SWE 60UF)

1. Bildergalerie (Hauptbild + bis zu 20 Thumbnails)
2. Breadcrumb
3. H1 Modellname
4. Kurzbeschreibung (1 Absatz)
5. Kurzspec-Tabelle (5 Felder, mit Links zu Filterseiten je Wert)
6. CTA "INTERESTED? CONTACT YOUR NEAREST DEALER" (exakter Wortlaut verifiziert)
7. Share-Buttons (FB, Twitter, LinkedIn, E-Mail, Copy Link, WhatsApp)
8. Ausführliche Beschreibung (Anchor "SPECIFICATIONS")
9. Technisches Datenblatt in 4 Blöcken: **DIMENSIONS / ENGINE / HYDRAULIC SYSTEM / WORKING RANGE**
10. "FEATURES & BENEFITS" — 8–9 Icon-Kacheln (Bild + Titel + Absatz)
11. "VIDEO" (Anchor) — YouTube-Embed
12. "BROCHURE" (Anchor) — PDF-Download
13. Footer

**Für sunward.hr:** CTA → Zoran/Kontaktformular statt Händlersuche. Preis zusätzlich zeigen. Video von Zoran, wo vorhanden. Garantie- und Finanzierungsverweis ergänzen.

---

## 5. Finance-Seite — Muster

Hero im Frage/Antwort-Format, 2 Vorteils-Blöcke, CTA, Partner-Logo (BNP Paribas).

**Für sunward.hr:** Struktur übernehmen, Zorans konkretes 30%-Angebot statt Bank-Partner.

---

## 6. Footer-Struktur

4 Spalten: Logo+Adresse+Social-Icons | Products-Kurzliste | About us | Contact. Bottom-Bar: Privacy/Cookies/Legal Notice.

---

## 7. Farben & Typografie — LIVE VERIFIZIERT (Claude in Chrome, direktes CSS-Auslesen)

⚠️ **Korrigiert eine frühere, falsche Screenshot-Schätzung.** Es gibt **kein** dunkles Navy auf sunward.eu.

| Element | Wert | Quelle |
|---|---|---|
| Primärfarbe | `#008D84` (Türkis) — `rgb(0,141,132)` | Live-CSS, Links/H2/Buttons |
| Akzentfarbe | `#F39A2E` (Orange) — `rgb(243,154,46)` | Live-CSS, Badges/Pfeile |
| Hauptfläche | `#FFFFFF` | Live-CSS, dominant |
| Footer-Hintergrund | `#008D84` + Verlaufstextur (`bg-gradient.jpg`) | Live-CSS — türkis, nicht navy |
| Fließtext | `#879C9F` (hell) | Live-CSS, body |
| Body-Font | **Oxygen** (Google Font), 15px | Live-CSS |
| Heading-Font | **Mulish** (Google Font), H2 Weight 900 / H3 Weight 700 | Live-CSS |

Cross-Branding Drvošped (Navy `#1B3A6B` / Amber `#E8A020`) **nur** fürs kleine "powered by"-Badge — Sunward-Hauptfarben nicht verwässern.

Mobile-Check (390×844) unauffällig — Navigation kollabiert sauber in ein Mobile-Menü.

---

## 8. Vollständiger Produktkatalog (verifiziert, Stand heute)

| Kategorie | Unterkategorie | Modelle | Anzahl |
|---|---|---|---|
| Bageri (Excavators) | Kotačni/mini/kompaktni/srednji/veliki | SWE 08F, SWE 10FE, SWE 17F, SWE 18UF, SWE 20F-1, SWE 20FE, SWE 25F, SWE 25UF, SWE 35UF, SWE 50UF, SWE 60UF, SWE 90UF, SWE 90UF-2PB, SWE 155F, SWE 155UF, SWE 155UF-2PB, SWE 155FW, SWE 215F-5A, SWE 225FN, SWE 240FE, SWE 335F-5 | 21 |
| Utovarivači | Gusjenični | SWTL 4538, SWTL 5238 | 2 |
| Utovarivači | Kotačni mini | SWL 2830, SWL 3230, SWL 4038 | 3 |
| Zglobni utovarivači | — | SL 06W, SL 12W | 2 |
| Bušače garniture | — | SWDM 85, SWDM 135, SWDM 165S, SWDM 215S, SWDM 245, SWDM 325, SWDM 415 | 7 |
| Zglobne radne platforme | — | SWA 16J, SWA 16JE, SWA 18JE-P, SWA 22JE-P | 4 |
| Škarasti podizni strojevi | Električni | SWSL 0607DC-S, SWSL 0607DC, SWSL 0807DC, SWSL 1008DC, SWSL 1212DC, SWSL 1412DC | 6 |
| Škarasti podizni strojevi | Terenski | SWSL 1223RT, SWSL 1623RT, SWSL 2023RT | 3 |
| Teleskopske dizalice | — | SWTC 5D, SWTC 10 | 2 |
| Teleskopski utovarivači | — | SWTH 3507 | 1 |

**Gesamt: 51 Modelle, 8 Hauptkategorien.** Plus Dodatna Oprema (10 Positionen, existiert bei sunward.eu nicht — siehe PRD Abschnitt 8).

🔴 **Bindend:** Alle 51 Modelle/8 Kategorien werden 1:1 übernommen — kein reduzierter Katalog. Das war der zentrale Fehler im vorherigen Build.

---

## 9. Bewusste Abweichungen sunward.hr vs. sunward.eu

| sunward.eu | sunward.hr |
|---|---|
| Kein Preis auf Produktseiten | Preis direkt zeigen |
| Nur Bank-Partner-Verweis (Finance) | Konkretes 30%-Angebot von Zoran |
| 4 Sprachen (EN/DE/FR/IT) | Nur Kroatisch, kein Umschalter |
| Kein Dodatna-Oprema-Bereich | Neue Kategorie (10 Anbaugeräte) |
| CTA → Händlersuche | CTA → Zoran/Kontaktformular |
| Kein Rücklink zu Mutterfirma | Subtiler "u suradnji s Hidraulika Drvošped"-Hinweis + Rücklink |
