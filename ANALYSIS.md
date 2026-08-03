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

⚠️ **Kuriosum, verifiziert:** Die URLs für "Warranty" und "Training" lauten `/service-parts/spare-parts-2/` bzw. `/service-parts/spare-parts-2-2/` — ein WordPress-Slug-Artefakt (vermutlich aus einer Spare-Parts-Vorlage dupliziert, Slugs nie angepasst). Nur zur Einordnung — für sunward.hr natürlich eigene, saubere Slugs.

**Für sunward.hr:** Nur Kroatisch — kein Sprachumschalter. "Find your dealer" entfällt (es gibt nur einen Händler: Drvošped). Struktur sonst 1:1 übernehmen.

---

## 2. Homepage — Sektionsreihenfolge (verifiziert)

1. Hero-Slider (Vollbild-Produktfoto, Headline, CTA)
2. "Sunward's DNA" — Markenstatement + 4 Kennzahlen (100 Länder / Top 20 Baggerhersteller / Top 50 Baumaschinenhersteller / 180 Mrd. Yuan)
3. "Our products" — Kategorie-Grid
4. "Why choosing a Sunward product?" — 4 USP-Kacheln (European HQ 24h-Lieferung / Premium Components / Best Value for Money / 5-Jahres-Garantie)
5. "The Sunward community" — Testimonials (auffällig viele kroatische Stimmen: Mata/Josip/Antun/Franko, alle "Director/Croatia"). Eines der Zitate erwähnt explizit: *"...we finally decided to trust Sunward's dealer in Croatia, offering us the best value for money..."* — vermutlich ein Zoran-Kunde, nicht verifiziert wer genau. Für sunward.hr interessant als potenzielles echtes Testimonial, falls Zoran das bestätigen kann — nicht ungefragt übernehmen.
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
- **Orange "NEW"-Badge** auf Karten kürzlich hinzugefügter Modelle (z.B. SWE 20F, SWE 225FN) — unabhängig vom Elektro-Blitz-Icon auf den E-Baggern (beide Badges können auch einzeln auftreten)

🔴 **Wichtige Korrektur (per DOM-Inspektion via Claude in Chrome geprüft, nicht nur Screenshot):** Die Sidebar-Kategorien (Wheeled/Mini/Compact/Medium/Large excavators) **sehen aus wie Filter-Checkboxen, sind aber keine.** Es sind reine `<a>`-Navigationslinks in einer verschachtelten `<li class="cat-item">`-Liste — die quadratischen Symbole davor sind rein dekoratives CSS, keine echten `<input type="checkbox">`-Elemente. Klick navigiert zu einer eigenen Unterseite, es wird nichts per JS gefiltert. **Eine Sortierfunktion (nach Gewicht, Preis o.ä.) existiert auf sunward.eu nicht** — explizit per DOM-Abfrage geprüft: keine `<select>`, keine Sort-Buttons, keine Sort-Formulare.

**Für sunward.hr:** Preis zusätzlich anzeigen (Zorans Wunsch). Hier liegt eine echte Chance, sunward.eu **zu übertreffen** statt nur zu kopieren (PRD §13, "keine 1:1-Kopie"): eine **tatsächlich funktionierende** Filter- und Sortierfunktion (nach Gewicht, Preis, Kategorie) einbauen — genau das, was auf sunward.eu nur optisch suggeriert, aber nicht eingelöst wird.

---

## 3a. Products-Übersichtsseite (`/products/`) — bislang nicht dokumentiert, jetzt nachgetragen

Eigenständige Seite (nicht zu verwechseln mit der Kategorieseite oder der Homepage-Kachel-Sektion "Our products"). Struktur je Kategorie, der Reihe nach wiederholt für alle 8 Kategorien:

1. Großes Kategorie-Bild
2. Kategorie-Name als Überschrift
3. Fließtext-Intro (1 Absatz, identisch mit dem Text auf der jeweiligen Kategorieseite)
4. CTA-Button ("Find your Sunward [Kategorie]")
5. Reihe von Unterkategorie-/Modell-Bildkacheln (Bild + Name, verlinkt) — bei Kategorien ohne Untergruppen (z.B. Boom Lifts, Telescopic cranes) sind es direkt die einzelnen Modelle statt Untergruppen
6. "View all products"-Link zur vollständigen Kategorieseite

⚠️ Auf sunward.eu selbst fehlerhaft: mehrere "View all products"-Links zeigen fälschlich auf `/product-category/excavators/` statt auf die jeweils richtige Kategorie (offenbar ein Copy-Paste-Fehler beim Seitenaufbau), und der Drilling-Rigs-Link führt sogar auf eine völlig andere, alte Sunward-Global-Domain. **Für sunward.hr natürlich korrekt verlinken, das ist ein Fehler, kein Vorbild.**

**Für sunward.hr:** Diese Seite ist im PRD bislang **nicht** als eigener Seitentyp vorgesehen — offene Entscheidung, ob wir sie brauchen (die 8 Kategorieseiten + Homepage-Produktgrid decken inhaltlich vielleicht schon ab, was diese Seite leistet) oder ob sie als zusätzliche "Alle Produkte auf einen Blick"-Übersicht Mehrwert bringt.

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

## 5. Finance-Seite — Muster (jetzt vollständig verifiziert, vorher nur Screenshot-basiert)

Hero "WHY SUNWARD Finance?" — Frage/Antwort-Format ("Need for new Sunward equipment?" / "SUNWARD Finance has been created to accompany financially both our dealers and their customers..."). Logo + Bild. 2 Vorteils-Blöcke mit echtem Fließtext: **"PROTECT YOUR CASH FLOW"** (Working Capital für andere Geschäftszwecke freihalten) und **"GROW YOUR BUSINESS"** (neue Ausrüstung oder Ersatz, maßgeschneiderte Finanzierung). CTA **"CONTACT YOUR SUNWARD DEALER"**. Disclaimer: *"In cooperation with our Partner BNP Paribas"* + Partner-Logo.

**Für sunward.hr:** Struktur/Aufbau übernehmen, Zorans konkretes 30%-Angebot statt Bank-Partner-Verweis (kein BNP-Paribas-Äquivalent nötig, da Zoran direkt finanziert).

---

## 6. Footer-Struktur (vollständig verifiziert, exakte Links)

4 Spalten + Bottom-Bar, identisch auf jeder geprüften Unterseite:

- **Spalte 1:** Logo + Adresse (SUNWARD EUROPE HEAVY INDUSTRY N.V., Havenlaan 1, Tessenderlo) + "Follow us"-Social-Icons: Facebook (facebook.com/eu.sunward), LinkedIn, YouTube, Instagram — **kein Twitter/X, kein TikTok**
- **Spalte 2 "Products":** Excavators, Articulated wheel loaders, Compact loaders, Telescopic cranes, Scissor lifts, Articulated Boom Lifts, Rigs, Telehandlers (Reihenfolge weicht leicht von der Hauptnav ab)
- **Spalte 3 "About us":** About Sunward, Sunward Europe, Career — **"Our team" und "Sunward mania" tauchen im Footer NICHT auf**, nur im Hauptmenü
- **Spalte 4 "Contact":** E-Mail + Telefon
- **Bottom-Bar:** Privacy policy / Cookies / Legal Notice (je eigene Seite) + Agentur-Credit ("PAGEART")

**Für sunward.hr:** Struktur übernehmen, "Products"-Spalte auf die 8 eigenen Kategorien, "About us" durch Drvošped-Bezug ersetzen (siehe PRD §6 Branding), Social-Icons auf Facebook + TikTok (PRD §3 — sunward.eu hat kein TikTok, das ist eine bewusste Abweichung, da Zoran dort aktiv ist), kein Agentur-Credit nötig (oder eigener, falls gewünscht).

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

🔴 **Nachtrag/Korrektur (zweiter Live-Check, Button-Rollen genau gemessen):** Die ursprüngliche Zuordnung "Orange = Badges/sekundäre CTAs" war unvollständig. Tatsächliches Muster auf sunward.eu:

| Button-Typ | Farbe | Beispiele (live gemessen) |
|---|---|---|
| **Primäre Handlungs-CTA** (1× pro Seite/Sektion) | **Orange** `#F39A2E`, gefüllt, weiße Schrift | "Discover the range" (Hero), "Find your Sunward [Kategorie]" (jede der 8 Kategorien auf `/products/`), "View all products" |
| **Wiederkehrender/navigatorischer Button** (mehrfach pro Seite) | **Türkis** `#008D84`, gefüllt, weiße Schrift | "View product" (21× auf einer Kategorieseite), "Find your dealer" (Utility-Leiste), "More about Sunward" |

Begründung fürs Muster: 21× ein lautes Orange auf einer Kategorieseite wäre Reizüberflutung — Orange bleibt für die eine, prominente Handlung reserviert.

✅ Für sunward.hr umgesetzt: "Zatraži ponudu" und die "Cijena na upit"-CTA sind jetzt Orange (primäre Handlung), "Pogledaj stroj"/"Svi strojevi" bleiben Türkis (wiederkehrend/navigatorisch).

Nachtrag zum Umsetzungsumfang: die Regel gilt rollenbasiert, nicht labelbasiert — deshalb sind auch die je eine Abschluss-CTA von `/financiranje`, `/servis` und `/dodatna-oprema/<slug>` Orange. **Eine bewusste Abweichung vom Original:** die weiße Schrift auf Orange erreicht nur 2,22:1 und verfehlt WCAG AA klar (derselbe Fehlertyp wie der Fließtext-Ton oben). sunward.hr setzt dort dunkle Schrift `#14212B` (7,39:1) — Begründung in `ASSUMPTIONS.md`.

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

⚡ **Korrektur/Nachtrag:** SWE 10FE, SWE 20FE und SWE 240FE (in der Bageri-Liste oben enthalten) sind **echte, vollelektrische Modelle** (Lithium-Eisenphosphat-Akku, Drehstrom-Asynchronmotor, Null-Emission) — verifiziert über die sunward.eu-Produktseite selbst plus unabhängige Fachquellen, nicht nur aus dem Namensmuster geraten. Die Kategorieseite zeigt bei ihnen trotzdem "Emission rating: EU Stage V" (vermutlich ein Vorlagen-Standardfeld auf sunward.eu selbst, kein Widerspruch). Sunward.eu hat dafür **keine eigene Sidebar-Kategorie** — Electric wird nur als Homepage-Highlight beworben (siehe Abschnitt 2, Hero-Slider "ELECTRIC EXCAVATORS"). Empfehlung für sunward.hr: Gewichtsklassen-Struktur wie verifiziert beibehalten, diese drei Modelle zusätzlich mit einem "Električni"-Badge markieren. Ein möglicher vierter Elektro-Bagger, "SWE 60UFE", taucht in Presseartikeln auf, aber nicht in der aktuell verifizierten Kategorieseite — nicht bestätigt, vorerst nicht aufnehmen.

---

## 9. Vollständige technische Spezifikationen je Modell (verifiziert, für Phase 2)

> Alle Werte per Web-Fetch direkt von den jeweiligen sunward.eu-Kategorieseiten übernommen (dieselbe Recherche wie Abschnitt 8). Einheiten wie im Original (kg/kW/mm/m).

### Bageri — verifizierte Untergruppen-Zuordnung (je einzeln von sunward.eu geprüft, nicht nach Gewicht geschätzt)

| Untergruppe | Modelle |
|---|---|
| Kotačni (Wheeled) | SWE 155FW |
| Mini | SWE 08F, SWE 10FE, SWE 17F, SWE 18UF, SWE 20F-1, SWE 20FE, SWE 25F, SWE 25UF, SWE 35UF, SWE 50UF |
| Kompaktni (Compact) | SWE 60UF, SWE 90UF, SWE 90UF-2PB |
| Srednji (Medium) | SWE 155F, SWE 155UF, SWE 155UF-2PB, SWE 215F-5A, SWE 225FN, SWE 240FE |
| Veliki (Large) | SWE 335F-5 |

⚠️ Die Grenze zwischen Mini und Kompakt verläuft bei sunward.eu **nicht** rein nach Gewicht — 25F/25UF/35UF/50UF zählen dort zu Mini, nicht zu Kompakt. Eine gewichtsbasierte Schätzung würde das falsch aufteilen.

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

---

## 11. Warranty-Seite (verifiziert)

"Peace of mind" — bis zu 5 Jahre Garantie auf Standardausrüstung. Premium Components. "Top Quality Control" — Product Delivery Inspection (PDI) im Hauptsitz Tessenderlo.

⚠️ **Wichtiger Unterschied, nicht verwechseln:** sunward.eu wirbt mit "bis zu 5 Jahren" Garantie (globales Herstellerversprechen). **Zorans tatsächliches, bestätigtes Angebot ist 3 Jahre ODER 5.000 Betriebsstunden** (PRD §4) — das ist ein anderer, konkreterer Wert und bleibt maßgeblich für sunward.hr. Nicht die "5 Jahre" von sunward.eu übernehmen.

**Für sunward.hr:** PDI-Konzept (Qualitätskontrolle vor Auslieferung) als Trust-Baustein prüfenswert, falls Zoran das auch so macht — sonst weglassen, nichts erfinden.

---

## 12. Applications-Seite (verifiziert)

Einfache 11-Kachel-Galerie (Bild + Label, kein Fließtext): Mine & Quarry, Agriculture, Forestry, Demolition, Infrastructure, Earthmoving, Landscaping & Gardening, Building construction, Material Handling, Waste, Rental.

**Für sunward.hr:** Optional als kleine Sektion — zeigt Einsatzgebiete der Maschinen. Kein Muss, geringer Aufwand falls gewünscht. Hinweis: "Forestry" hier meint nur "Maschinen sind forsttauglich", das hat nichts mit Drvošpeds eigenem Forstgeschäft auf drvosped.hr zu tun (PRD §12, Abgrenzung bleibt bestehen).

---

## 13. Contact-Seite (verifiziert)

"LET'S KEEP IN TOUCH" Hero, Telefonnummer, Formular mit Länder-Dropdown (alle Länder der Welt) + Pflichtfeld-Markierung.

**Für sunward.hr:** Länder-Dropdown **nicht übernehmen** — ergibt für einen Kroatien-only-Händler keinen Sinn. Einfaches Formular: Name, Kontakt (Tel/E-Mail), Nachricht, ggf. Produktinteresse-Dropdown (Kategorie). CTA-Ziel: sunward.hrvatska@gmail.com (PRD §3).

---

## 14. Legal Notice — Struktur (verifiziert, nur als Gliederungs-Vorlage, NICHT Inhalt übernehmen)

sunward.eu gliedert seine Impressum-Seite so: Website-Betreiber (Firma, Adresse, USt-ID, Handelsregister, Kontakt, Geschäftsführer) → Hosting-Provider → Geistiges Eigentum → Haftungsausschluss → Externe Links → Datenschutz-Verweis → Anwendbares Recht/Gerichtsstand.

**Für sunward.hr:** Dieselbe Gliederung, aber vollständig eigenständiger Inhalt mit Drvošped-Daten (PRD §3: OIB, MB, Adresse, Zoran als Geschäftsführer), kroatischem Recht/Gerichtsstand statt belgischem, und dem tatsächlichen Hosting-Provider (Vercel). Privacy Policy und Cookies-Seite sind eigene Unterseiten (nicht inhaltlich geprüft, da GDPR-Inhalt ohnehin komplett eigenständig für Drvošped verfasst werden muss, PRD §11).

---

## 15. Nicht vertieft geprüft (bewusst, geringe Relevanz für sunward.hr)

- **Company-Unterseiten** "Our team", "Career", "Sunward mania" — globale Sunward-Europe-Konzernseiten (Team, Stellenausschreibungen, Markengeschichte). Für einen regionalen Händler ohne direkte Entsprechung, nicht Teil des Scopes.
- **Service & Parts:** "Smart Fleet" ist **jetzt per Chrome-Scan bestätigt** ein Telematik-/Ferndiagnose-System (Sensornetzwerk + OBD-Anschluss, in Kooperation mit Jaltest/COJALI, Spanien) — eine ab Werk in die Maschinen eingebaute Funktion, kein separater Service, den Zoran lokal anbieten würde. "Training" (Schulungsangebot) weiterhin nicht vertieft geprüft, vermutlich ebenfalls Konzern-Ebene. Vor Umsetzung kurz mit Zoran klären, ob eines von beiden für ihn relevant ist, sonst weglassen.
- **About Sunward / Sunward Europe** (Konzern-Ebene) — Inhalt bereits in PRD/ANALYSIS für die "Sunward's DNA"-Kennzahlen auf der Startseite verwendet (100 Länder, Top 20/50, 180 Mrd. Yuan), keine eigene Unterseite für sunward.hr nötig darüber hinaus.
