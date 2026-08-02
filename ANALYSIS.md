# ANALYSIS.md — sunward.eu Struktur-Analyse

> Durchgeführt via Web-Fetch (Text-Extraktion). **Farbpalette und exakte Typografie konnten so NICHT zuverlässig ermittelt werden** — siehe Abschnitt 6, offener Punkt.

---

## 1. Vollständige Sitemap

**Bestätigt über EN- und DE-Version:** Die Informationsarchitektur ist sprachunabhängig identisch — DE-Version (sunward.eu/de/) übernimmt exakt dieselbe Struktur, Sektionsreihenfolge und Navigationslogik wie EN, nur Labels/Slugs übersetzt (z.B. "Excavators" → "BAGGER", "Compact loaders" → "Kompaktlader"). Das bestätigt: die Struktur ist stabil und sprachübergreifend übertragbar — genau das Muster, das wir für die kroatische Version anwenden (eigene übersetzte Slugs, identische IA).

### Hauptnavigation
```
Home
├── Company
│   ├── About Sunward
│   ├── Sunward Europe
│   ├── Our team
│   ├── Career
│   └── Sunward mania
├── Products
│   ├── Excavators
│   │   ├── Wheeled excavators
│   │   ├── Mini excavators
│   │   ├── Compact excavators
│   │   ├── Medium excavators
│   │   └── Large excavators
│   ├── Compact loaders
│   │   ├── Compact track loaders
│   │   └── Skid-steer loaders
│   ├── Articulated wheel loaders
│   ├── Drilling rigs (mit 7 Einzelmodellen als Unterseiten: SWDM 85/135/165/215/245/325/415)
│   ├── Articulated Boom Lifts
│   ├── Scissor lifts
│   │   ├── Electric driven scissor lifts
│   │   ├── Hydraulic driven scissor lifts
│   │   └── Rough terrain scissor lifts
│   ├── Telescopic cranes (mit Modellen SWTC 5D, SWTC 10)
│   └── Telehandlers
├── Service & Parts
│   ├── Spare parts
│   ├── Maintenance kits
│   ├── Logistic
│   ├── Warranty
│   ├── Training
│   ├── Smart Fleet
│   └── Find your dealer
├── Finance
├── Applications
└── Contact
```

Zusätzlich: Sprachumschalter EN/DE/FR/IT (rechts oben, vor dem Hauptmenü) und ein separater "Find your dealer"-Link ganz oben (Utility-Bar über der Hauptnavigation).

### Footer-Struktur (4 Bereiche)
```
Spalte 1: Logo + Firmenadresse + Social-Media-Icons (FB, LinkedIn, YouTube, Instagram)
Spalte 2: "Products" — Kurzliste der 8 Hauptkategorien
Spalte 3: "About us" — About Sunward, Sunward Europe, Career
Spalte 4: "Contact" — E-Mail, Telefon
Bottom bar: Privacy policy | Cookies | Legal Notice | Agentur-Credit
```

---

## 2. Homepage — Sektionsaufbau (Reihenfolge)

1. **Hero-Slider** (Slider Revolution Plugin) — 4 rotierende Vollbild-Slides, je: großes Produktfoto, Headline, Subline, CTA-Button. Slides beobachtet: neue E-Bagger, Elektro-Bagger-Range, Bohrgeräte, Händlersuche.
2. **"Sunward's DNA"** — Markenstatement (Gründer-Zitat, Vision) + 4 Kennzahlen-Icons nebeneinander: 100 Länder, Top 20 Baggerhersteller weltweit, Top 50 Baumaschinenhersteller, 180 Mrd. Yuan Konzernvermögen
3. **"Our products"** — Kategorie-Grid, 11 Kacheln (Icon/Bild + Titel), verlinkt auf Unterkategorien
4. **"Why choosing a Sunward product?"** — 4 USP-Kacheln mit Icon: European Headquarter (24h Belieferung EU/Naher Osten), Premium Components, Best Value for Money, 5-Year Warranty
5. **"The Sunward community"** — Testimonial-Karawane (6 Kundenzitate mit Foto, Name, Rolle/Land) — **auffällig viele kroatische Stimmen** (Mata, Josip, Antun, Franko — alle "Director/Croatia" o.ä.)
6. **"Sunward news"** — 4 neueste News-Kacheln (Bild, Kategorie-Tag, Titel, Autor/Datum, "Read more")
7. **"Let's Stay connected"** — Social-Media-Icon-Reihe
8. **"Locate our dealers"** — Händlersuche-CTA mit großem Bagger-Bild
9. **Newsletter-Anmeldung**
10. **Footer** (siehe oben)

---

## 3. Kategorieseite — Muster (am Beispiel Excavators)

- Breadcrumb: Home / [Kategorie]
- Linke Sidebar: vollständiger Kategorienbaum (aufklappbar, aktuelle Kategorie hervorgehoben)
- Hauptbereich: Produktgrid, **pro Karte exakt 5 Kurzspecs**:
  1. Emission rating (z.B. EU Stage V)
  2. Operating weight
  3. Power output
  4. Max. digging depth
  5. Width
- Jede Karte: Produktbild, Modellname, die 5 Specs, "View product"-Button
- Kein Preis auf der Kategorieseite (Preise nur beim Händler/auf Anfrage — anders als unser Drvošped-Modell, das Preise direkt zeigt)

**23 Excavator-Modelle** gezählt auf der Excavators-Kategorieseite (SWE 08F bis SWE 335F-5) — deutlich mehr Modellvielfalt als unsere 22 (unsere Liste ist der Drvošped-Bestand, nicht 1:1 identisch mit dem globalen Sunward-Sortiment — das ist korrekt so, wir bilden Zorans Angebot ab, nicht das komplette globale Sortiment).

---

## 4. Produktdetailseite — Muster (am Beispiel SWE 60UF)

Sektion für Sektion:

1. **Bildergalerie** — Hauptbild groß + bis zu 20 Miniaturansichten (verschiedene Winkel, Detailaufnahmen)
2. **Breadcrumb** — Home / Products / [Kategorie] / [Unterkategorie] / Modellname
3. **H1** — Modellname
4. **Kurzbeschreibung** — 1 Absatz, Einstiegstext zum Modell
5. **Kurzspec-Tabelle** (5 Felder, gleiche wie Kategorieseite, hier als Definitionsliste mit Links zu Filterseiten je Wert)
6. **CTA** — "INTERESTED? CONTACT YOUR NEAREST DEALER" (kein Preis, kein Formular — nur Weiterleitung zum Händler)
7. **Share-Buttons** (FB, Twitter, LinkedIn, E-Mail, Copy Link, WhatsApp)
8. **Ausführliche Beschreibung** (Anchor "SPECIFICATIONS") — 2. H1/H2 "SUNWARD [Modell]" + mehrere Absätze Fließtext (Motor, Hydraulik, Einsatzzweck)
9. **Technische Datenblatt-Tabellen**, klar gruppiert in 4 Blöcke:
   - **DIMENSIONS** (Operating weight, Standard bucket capacity, Shipping length/width, Height over cabin)
   - **ENGINE** (Model, Emission rating, Displacement, Rated power output)
   - **HYDRAULIC SYSTEM** (Type, Displacement, Hydraulic pressure)
   - **WORKING RANGE** (Max. digging depth/reach, Max. bucket/arm digging force)
10. **"FEATURES & BENEFITS"** (Anchor) — 7-8 Icon-Kacheln (Bild + Titel + Absatz), z.B. "Made for Europe", "Powerful & Reliable Engine", "Premium Components", "High Working Range", "Well-Equipped from the Outset", "Easy to Maintain", "Safe Cab", "Best Value for Money"
11. **"VIDEO"** (Anchor) — eingebettetes YouTube-Video
12. **"BROCHURE"** (Anchor) — Vorschaubild + Download-Button (PDF)
13. Footer (Standard)

**Wichtig für unsere Produktdetailseiten:** Dieses 13-Punkte-Muster ist die Vorlage für jede unserer 22 Modell-Detailseiten — inkl. der 4-Block-Datenblatt-Struktur (Dimensions/Engine/Hydraulic/Working Range) und der Feature-Kachel-Sektion.

---

## 5. Finance-Seite — Muster

- Hero mit Frage/Antwort-Format ("Need for new Sunward equipment?" / "SUNWARD Finance has been created to accompany...")
- Logo der Finance-Marke + großes Bild
- 2 Vorteils-Blöcke: "PROTECT YOUR CASH FLOW" + "GROW YOUR BUSINESS"
- CTA "CONTACT YOUR SUNWARD DEALER"
- Partner-Hinweis: "In cooperation with our Partner BNP Paribas" + Partner-Logo

**Für sunward.hr:** Diese Seite wird zu unserer Finanzierungs-Sektion — Struktur übernehmen, aber Inhalt durch Zorans konkretes 30%-Angebot ersetzen (kein Bank-Partner-Verweis nötig, da Zoran direkt finanziert).

---

## 6. Farbpalette & Typografie — BESTÄTIGT ✅

Per Chrome-Screenshot auf Startseite, Kategorieseite (Excavators) und Produktseite (SWE 60UF) abgelesen:

| Element | Farbe | Verwendung |
|---|---|---|
| Header/Footer (dunkel) | `#14212B` (Anthrazit/Navy, fast Schwarz) | Hauptnavigation, Footer-Hintergrund |
| Markenfarbe/Akzent | `#00A19A` (Sunward-Türkis/Petrol) | Icons, Links, Hervorhebungen, CTA-Buttons, Maschinenfarbe |
| CTA-Button | `#00A19A` Hintergrund, weiße Schrift | "View product", "Discover the range" |
| Hintergrund Content | `#FFFFFF` (Weiß) | Hauptflächen |
| Hintergrund alternierend | `#F5F6F7` (sehr helles Grau) | Wechselnde Sektionen |
| Fließtext | `#2C2C2C`–`#333333` (dunkles Anthrazit) | Body-Text, kein reines Schwarz |
| Rahmen/Trennlinien | `#E5E5E5` (helles Grau) | Card-Borders, Tabellen-Trennlinien |

**Layout-Beobachtungen aus den Screenshots:**
- Kategorieseite: linke Sidebar dezent grau mit Kategorienbaum, Produktkarten auf Weiß mit dünnen grauen Rahmen, großzügiger Weißraum zwischen Karten
- Produktseite: Bildergalerie dominiert den oberen Bereich (großes Hauptbild + Thumbnail-Leiste), Spec-Tabellen mit minimalistischen Trennlinien statt Zellrahmen, viel Weißraum, klare Typografie-Hierarchie

**Typografie (visuell):** Serifenlose, moderne Grotesk-Schrift durchgängig (Headings fett/kräftig, Body regulär) — konsistent mit gängigen Industrial/Corporate-Sans-Serif-Fonts (z.B. Inter, Montserrat oder ähnlich; exakte Font-Familie nicht aus Screenshot ableitbar, aber jede vergleichbare moderne Grotesk-Schrift trifft den Look).

**Für sunward.hr:** Diese Werte 1:1 als Basis übernehmen. Cross-Branding-Akzent von Drvošped (Navy `#1B3A6B` / Amber `#E8A020`) NUR für das kleine "powered by"-Badge und den Rücklink verwenden — nicht die Sunward-Hauptfarben verwässern.



---

## 7. Wichtige strukturelle Unterschiede zu unserem Drvošped-Modell (bewusste Anpassungen)

| sunward.eu (Original) | sunward.hr (unsere Adaption) |
|---|---|
| Kein Preis auf Produktseiten, nur "Contact your dealer" | Preis direkt anzeigen (Zorans Wunsch — Preistransparenz als Verkaufsargument) |
| Kein Finanzierungs-Detail, nur Partner-Verweis (BNP Paribas) | Konkretes 30%-Angebot direkt von Zoran, keine Bank |
| 4 Sprachen (EN/DE/FR/IT) | Nur Kroatisch (Phase 1) |
| Kein "Dodatna Oprema"/Anbaugeräte-Bereich | Neue eigene Kategorie (10 Anbaugeräte) — Alleinstellungsmerkmal |
| Generischer globaler Content | Auf Zoran/Drvošped zugeschnittene Texte, 27-Mitarbeiter-Trust-Signale, Vor-Ort-Service-Hinweis |
| Kein Rücklink zu einem Mutterunternehmen | "Powered by / u suradnji s Hidraulika Drvošped" + Rücklink |

---

*Erstellt via Web-Fetch-Analyse (Struktur/IA) + Chrome-Screenshot-Analyse (Farben/Layout). Vollständig — keine offenen Punkte mehr.*
