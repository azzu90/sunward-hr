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

### Bageri — Zuordnung zu den fünf Unterkategorien (einzeln auf sunward.eu geprüft)

⚠️ **Nicht nach Tonnage ableiten.** sunward.eu zieht die Grenze zwischen Mini und Kompaktni nicht nach Gewicht: SWE 25F, SWE 25UF, SWE 35UF und SWE 50UF zählen dort noch zu **Mini**, „Kompaktni" beginnt erst bei SWE 60UF. Eine Einordnung nach Gewicht liegt falsch — dieser Fehler ist beim ersten Anlauf genau so passiert.

| Unterkategorie | Modelle | Anzahl |
|---|---|---|
| Kotačni | SWE 155FW | 1 |
| Mini | SWE 08F, SWE 10FE, SWE 17F, SWE 18UF, SWE 20F-1, SWE 20FE, SWE 25F, SWE 25UF, SWE 35UF, SWE 50UF | 10 |
| Kompaktni | SWE 60UF, SWE 90UF, SWE 90UF-2PB | 3 |
| Srednji | SWE 155F, SWE 155UF, SWE 155UF-2PB, SWE 215F-5A, SWE 225FN, SWE 240FE | 6 |
| Veliki | SWE 335F-5 | 1 |

⚡ Korrektur/Nachtrag: SWE 10FE, SWE 20FE und SWE 240FE (in der Bageri-Liste oben enthalten) sind echte, vollelektrische Modelle (Lithium-Eisenphosphat-Akku, Drehstrom-Asynchronmotor, Null-Emission) — verifiziert über die sunward.eu-Produktseite selbst plus unabhängige Fachquellen, nicht nur aus dem Namensmuster geraten. Die Kategorieseite zeigt bei ihnen trotzdem 'Emission rating: EU Stage V' (vermutlich ein Vorlagen-Standardfeld auf sunward.eu selbst, kein Widerspruch). Sunward.eu hat dafür keine eigene Sidebar-Kategorie — Electric wird nur als Homepage-Highlight beworben. Ein möglicher vierter Elektro-Bagger, 'SWE 60UFE', taucht in Presseartikeln auf, aber nicht in der aktuell verifizierten Kategorieseite — nicht bestätigt, vorerst nicht aufnehmen.

---

## 9. Vollständige technische Spezifikationen je Modell (verifiziert, für Phase 2)

> Alle Werte per Web-Fetch direkt von den jeweiligen sunward.eu-Kategorieseiten übernommen (dieselbe Recherche wie Abschnitt 8). Einheiten wie im Original (kg/kW/mm/m).

### Bageri — Excavators (Emission / Operating weight / Power output / Max. digging depth / Width)

| Modell | Emission | Gewicht | Leistung | Grabtiefe | Breite |
|---|---|---|---|---|---|
| SWE 08F | EU Stage V | 1010 kg | 7.2 kW | 1450 mm | 750–1000 mm |
| SWE 10FE | EU Stage V | 1010 kg | 5.5 kW | 1440 mm | 750–1000 mm |
| SWE 17F | EU Stage V | 1780 kg | 13.4 kW | 2060 mm | 990–1360 mm |
| SWE 18UF | EU Stage V | 1880 kg | 13.4–14 kW | 2390 mm | 990–1360 mm |
| SWE 20F-1 | EU Stage V | 1910 kg | 13.4 kW | 2260 mm | 990–1360 mm |
| SWE 20FE | EU Stage V | 1920 kg | 10 kW | 2380 mm | 990–1360 mm |
| SWE 25F | EU Stage V | 2640 kg | 14.6 kW | 2705 mm | 1500 mm |
| SWE 25UF | EU Stage V | 2750 kg | 15.4 kW | 2800 mm | 1500 mm |
| SWE 35UF | EU Stage V | 3750–3850 kg | 18.2 kW | 3320 mm | 1700 mm |
| SWE 50UF | EU Stage V | 5480 kg | 29.7 kW | 3375 mm | 2000 mm |
| SWE 60UF | EU Stage V | 6000 kg | 35 kW | 3700 mm | 2000 mm |
| SWE 90UF | EU Stage V | 8750 kg | 46.2 kW | 4545 mm | 2270 mm |
| SWE 90UF-2PB | EU Stage V | 9600 kg | 46.2 kW | 4735 mm | 2270 mm |
| SWE 155F | EU Stage V | 14700 kg | 90 kW | 5530 mm | 2490 mm |
| SWE 155UF | EU Stage V | 16500 kg | 90 kW | 5525 mm | 2600 mm |
| SWE 155UF-2PB | EU Stage V | 17000 kg | 90 kW | 5600 mm | 2600 mm |
| SWE 155FW | EU Stage V | 14700–15400 kg | 115 kW | 5100 mm | 2515 mm |
| SWE 215F-5A | EU Stage V | 21800 kg | 129 kW | 6635 mm | 2800 mm |
| SWE 225FN | EU Stage V | 21800 kg | 129 kW | 6635 mm | 2800 mm |
| SWE 240FE | EU Stage V | 23360 kg | 132 kW | 6750 mm | 2984 mm |
| SWE 335F-5 | EU Stage V | 33600 kg | 209 kW | 7010 mm | 3190 mm |

### Utovarivači — Compact track loaders (Rated capacity / Tipping load / Power / Weight / Lift height / Breakout force)

| Modell | Kapazität | Kipplast | Leistung | Gewicht | Hubhöhe | Ausbrechkraft |
|---|---|---|---|---|---|---|
| SWTL 4538 | 1200 kg | 3430 kg | 55.4 kW | 4400 kg | 2467 mm | 3385 kg |
| SWTL 5238 | 1500 kg | 4286 kg | 85.1 kW | 5375 kg | 2467 mm | 3900 kg |

### Utovarivači — Skid-steer loaders (dieselben Felder)

| Modell | Kapazität | Kipplast | Leistung | Gewicht | Hubhöhe | Ausbrechkraft |
|---|---|---|---|---|---|---|
| SWL 2830 | 750 kg | 1500 kg | 48.6 kW | 2830 kg | 2320 mm | 2000 kg |
| SWL 3230 | 1100 kg | 2200 kg | 55.4 kW | 3500 kg | 2395 mm | 2480 kg |
| SWL 4038 | 1300 kg | 2600 kg | 55.4 kW | 3650 kg | 2467 mm | 3385 kg |

### Zglobni utovarivači — Articulated wheel loaders (Rated load / Operating weight / Power / Bucket capacity)

| Modell | Nutzlast | Gewicht | Leistung | Schaufel |
|---|---|---|---|---|
| SL 06W | 600 kg | 1700 kg | 18.2 kW | 0.26 m³ |
| SL 12W | 1300 kg | 2500 kg | 18.5 kW | 0.38 m³ |

### Bušače garniture — Drilling rigs (Emission / Operating weight / Power / Max. drilling diameter)

| Modell | Emission | Gewicht | Leistung | Bohrdurchmesser |
|---|---|---|---|---|
| SWDM 85 | EU Stage V | 28000 kg | 90 kW | 1200 mm |
| SWDM 135 | EU Stage V | 39000 kg | 186 kW | 1500 mm |
| SWDM 165S | EU Stage V | 45000 kg | 186 kW | 1500 mm |
| SWDM 215S | EU Stage V | 65000 kg | 252 kW | 1500 mm |
| SWDM 245 | EU Stage V | 77000–78000 kg | 252 kW | 1800–2000 mm |
| SWDM 325 | EU Stage V | 107000 kg | 321 kW | 2300–2500 mm |
| SWDM 415 | EU Stage V | 134000 kg | 410 kW | 2500 mm |

### Zglobne radne platforme — Articulated Boom Lifts (Max height / Span or radius / Rated load / Weight)

| Modell | Max. Höhe | Reichweite/Radius | Nutzlast | Gewicht |
|---|---|---|---|---|
| SWA 16J | 16 m | 8.02 m (horizontal) | 250 kg | 7650 kg |
| SWA 16JE | 15.8 m | 7.74 m (horizontal) | 230 kg | 7750 kg |
| SWA 18JE-P | 18 m | 9.6 m (Arbeitsradius) | 260/360 kg | 8270 kg |
| SWA 22JE-P | 22 m | 12.28 m (Arbeitsradius) | 260/360 kg | 10160 kg |

### Škarasti podizni strojevi — Scissor lifts (Max height / Capacity / Width / Weight / Antrieb)

| Modell | Max. Höhe | Kapazität | Breite | Gewicht | Antrieb |
|---|---|---|---|---|---|
| SWSL 0607DC-S | 5.6 m | 240 kg | 0.76 m | 900 kg | Elektrisch |
| SWSL 0607DC | 6.5 m | 240 kg | 0.76 m | 900 kg | Elektrisch |
| SWSL 0807DC | 8 m | 230 kg | 0.76 m | 1545 kg | Elektrisch |
| SWSL 1008DC | 10 m | 230 kg | 0.83 m | 2100 kg | Elektrisch |
| SWSL 1212DC | 12 m | 320 kg | 1.17 m | 2940 kg | Elektrisch |
| SWSL 1412DC | 14 m | 320 kg | 1.17 m | 3000 kg | Elektrisch |
| SWSL 1223RT | 12 m | 1200 kg | 2.39 m | 8170 kg | Diesel/Hydraulisch |
| SWSL 1623RT | 16.5 m | 780 kg | 2.39 m | 9200 kg | Diesel/Hydraulisch |
| SWSL 2023RT | 20 m | 545 kg | 2.39 m | 10380 kg | Diesel/Hydraulisch |

### Teleskopske dizalice — Telescopic cranes (Emission / Weight / Max load / Max height)

| Modell | Emission | Gewicht | Max. Traglast | Max. Höhe |
|---|---|---|---|---|
| SWTC 5D | EU Stage V | 10910 kg | 5000 kg | 16.5 m |
| SWTC 10 | EU Stage V | 20500 kg | 10000 kg | 21.5 m |

### Teleskopski utovarivači — Telehandlers (Emission / Max height / Max outreach / Power / Weight)

| Modell | Emission | Max. Hubhöhe | Max. Reichweite | Leistung | Gewicht |
|---|---|---|---|---|---|
| SWTH 3507 | EU Stage V | 7.43 m | 3.83 m | 55 kW | 8300 kg |

## 10. Bewusste Abweichungen sunward.hr vs. sunward.eu

| sunward.eu | sunward.hr |
|---|---|
| Kein Preis auf Produktseiten | Preis direkt zeigen |
| Nur Bank-Partner-Verweis (Finance) | Konkretes 30%-Angebot von Zoran |
| 4 Sprachen (EN/DE/FR/IT) | Nur Kroatisch, kein Umschalter |
| Kein Dodatna-Oprema-Bereich | Neue Kategorie (10 Anbaugeräte) |
| CTA → Händlersuche | CTA → Zoran/Kontaktformular |
| Kein Rücklink zu Mutterfirma | Subtiler "u suradnji s Hidraulika Drvošped"-Hinweis + Rücklink |
