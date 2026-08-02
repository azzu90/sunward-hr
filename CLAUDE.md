# CLAUDE.md — Projekt Drvošped / sunward.hr

## 0. Lies zuerst

Bevor du irgendetwas tust: lies `TASK.md` (aktueller Auftrag) und `ANALYSIS.md` (sunward.eu-Referenzanalyse, inkl. bestätigter Farbpalette). Diese Datei hier (CLAUDE.md) ist der Ausgangspunkt, nicht der komplette Auftrag.

## 0.1 Modell- & Effort-Strategie

- **Planung / Architektur-Entscheidungen:** Opus, hoher Effort (`/effort high`), im Plan Mode
- **Routine-Umsetzung nach freigegebenem Plan:** Sonnet, Standard-Effort
- **Kleine mechanische Änderungen (Texte, Konfig, Boilerplate):** Sonnet oder Haiku, niedriger Effort
- Vorgabe kommt jeweils im Kickoff-Prompt vom Nutzer — falls nicht angegeben: Sonnet + Standard-Effort als sicherer Default

---

## 1. Was ist dieses Projekt?

Zwei zusammenhängende Website-Projekte für **Hidraulika Drvošped d.o.o.** (Karlovac, Kroatien):

| # | Projekt | Domain | Status | Reihenfolge |
|---|---------|--------|--------|-------------|
| 1 | **sunward.hr** | sunward.hr (vorhanden) | 🔨 Dieses Repo — jetzt bauen | **ZUERST** |
| 2 | drvosped.hr Redesign | drvosped.hr | In v0.dev weitgehend fertig, wartet | danach |

**sunward.hr** = eigenständige kroatische Vertriebsseite für Sunward-Baumaschinen. Strukturelle und visuelle Kopie von **sunward.eu** (offizielle globale Sunward-Website), aber komplett auf Kroatisch und mit Inhalten zugeschnitten auf Drvošped als offiziellen Generalvertreter (generalni zastupnik) für Kroatien.

Nach Fertigstellung von sunward.hr wird auf drvosped.hr der Navigationspunkt "Sunward" extern auf sunward.hr verlinkt (statt interner Unterseite).

---

## 2. Firmen-Stammdaten (verbindlich)

| Feld | Wert |
|---|---|
| Firma | Hidraulika Drvošped d.o.o. |
| Adresse | Jelaši 37C, 47000 Karlovac, Hrvatska |
| OIB | 64423111898 |
| MB (sudski) | 020035243 |
| Registereintrag | 14.09.2004 |
| Grundkapital | 2.000.000,00 kn |
| Geschäftsführer | Zoran Lovrinović |
| Mitarbeiter | **27** (wichtiges Trust-Signal, prominent zeigen!) |
| IBAN PBZ | HR1323400091110158496 (BIC: PBZGHR2X) |
| IBAN RBA | HR4924840081105405647 (BIC: RZBHHR2X) |

### Kontakte
| Kanal | Wert | Link-Format |
|---|---|---|
| Tel/Fax Büro | 047 641 200 / 047 641 299 | — |
| Mobil Vlado | 091 641 2000 | `tel:+385916412000` |
| Mobil Zoran | 091 641 2001 | `tel:+385916412001` |
| E-Mail Haupt | drvosped@gmail.com | `mailto:` |
| E-Mail Sunward | sunward.hrvatska@gmail.com | `mailto:` — **primärer Kontakt für sunward.hr** |

### Zertifikate & Auszeichnungen
- ISO 9001:2008 (Qualitätsmanagement)
- ISO 14001:2004 (Umweltmanagement)
- FSC® CoC — FSC-C165150 (nachhaltige Forstwirtschaft)
- Top 6% erfolgreichste Unternehmen Kroatiens (poslovna.hr)
- AAA-Bonität erwähnt — Zertifikat-Scan von Zoran noch ausstehend
- Lizenzierter Baumfällbetrieb (Parkbäume)

---

## 3. Bestätigte Geschäftsfakten für sunward.hr (aus Business-Meeting mit Zoran)

| Thema | Fakt |
|---|---|
| Rolle | Offizieller **Generalni zastupnik Sunward za Hrvatsku** |
| Garantie | **3 Jahre ODER 5.000 Betriebsstunden** — Teile und Arbeit kostenlos im Garantiezeitraum. (NICHT 3.000h — das war ein alter, falscher Stand) |
| Finanzierung | **30% Anzahlung + Raten.** Gilt für **d.o.o., obrt UND OPG** — auch für frisch gegründete Firmen |
| Eintausch | **Staro za novo:** altes Sunward-Gerät wird als Anzahlung für neues angerechnet |
| Service-Gebiet | Hydraulik-Reparatur: **ganz Kroatien** |
| Service-Reaktion | **Innerhalb von 24 Stunden** an der Reihe + Fehlerbericht (izvještaj greške). (NICHT 24 Tage — bestätigter Tippfehler) |
| Vor-Ort-Service | Techniker kommt vor Ort (na terenu / licu mjesta) — **ausschließlich für Sunward-Geräte** |
| SEO-Ziel | **Platz 1 bei Google für "kineski bager"** und Bagger-Suchen in Kroatien generell |
| Bildrechte | ✅ **Geklärt:** Zoran darf Bilder, Farben und Layout von sunward.eu frei übernehmen (Marketingabteilung dort inaktiv, er ist Vertragshändler). **Texte werden trotzdem eigenständig neu geschrieben** — maßgeschneidert auf Drvošped, nicht 1:1 übersetzt |

### Fertige Marketing-Texte (exakt so verwenden)

**Finanzierungs-Box:**
> "Uz 30% učešća sredimo leasing za novootvorene firme! U ponedjeljak otvorite firmu, u četvrtak već kopate sa svojim novim bagerom! Vrijedi za d.o.o., obrt i OPG."

**Eintausch-Box:**
> "Imate stari Sunward stroj? Zamijenite ga za novi — vaš stari stroj priznajemo kao učešće."

**Garantie:**
> "Garancija do 3 godine ili 5.000 radnih sati. Svi dijelovi i rad BESPLATNI u garantnom roku."

---

## 4. Sunward Modell-Preisliste (22 Modelle, verbindlich)

Jedes Modell bekommt eine Produktkarte UND eine eigene Detailseite.

| Modell | Typ / Gewicht | Preis |
|---|---|---|
| SWE08F | 1.010 kg Mini bager | 16.000 EUR |
| SWE17F | Kompaktbagger | 22.800 EUR |
| SWE18UF | UF model | 22.900 EUR |
| SWE20F | Mini bager | 23.500 EUR |
| SWE25UF | 2,5t | 28.000 EUR |
| SWE35UF | UF model | 33.500 EUR |
| SWE50UF | UF model | 45.500 EUR |
| SWE60UF | 6t | 50.000 EUR |
| SWE90UF | 9t | 63.000 EUR |
| SWE90UF-2PB | 9t, 2-teiliger Ausleger | 68.000 EUR |
| SWE155UF | 15t | 113.000 EUR |
| SWE155UF-2PB | 15t, 2-teiliger Ausleger | 118.000 EUR |
| SWE215F | 21t | 133.000 EUR |
| SWE335F | 33t | Na upit |
| SWE400F | 40t | Na upit |
| SWL2830 | Utovarivač (Radlader) | 33.000 EUR |
| SWL3230 | Utovarivač (Radlader) | 34.000 EUR |
| SWTL4538 | Teleskoplader | 45.000 EUR |
| SWSL Podizne košare | Hubarbeitsbühne 6–14m | 17.500 EUR |
| SWE10FE | Električni | Na upit |
| SWE20FED | Električni | Na upit |
| SWE60UFED | Električni | Na upit |

Sunward-Maschinen nutzen Komponenten von: Kubota, Yanmar, Cummins, BOSCH Rexroth, EATON, KYB, ALFAGOMMA — als Qualitätsargument nennen.

---

## 5. Dodatna Oprema (Anbaugeräte — NEUE Kategorie, existiert auf sunward.eu NICHT)

Alleinstellungsmerkmal von Zorans Angebot. Je Artikel: Produktfoto-Platzhalter, YouTube-Embed-Platzhalter, Kurzbeschreibung, "Cijena na upit"-Button.

| Anbaugerät | Einsatz | Video-Platzhalter |
|---|---|---|
| Hidraulički čekić (60–8.000 kg Klassen) | Abbruch / Fels | `{VIDEO_CEKIC}` |
| Thumb | Greifen / Sortieren | `{VIDEO_THUMB}` |
| Šumske škare | Forstwirtschaft | `{VIDEO_SKARE}` |
| Bušač rupa (svrdlo) | Erdbohrungen | `{VIDEO_BUSAC}` |
| Roto tilt | Präzisionsarbeiten | `{VIDEO_ROTOTILT}` |
| Power tilt | Kippfunktion | `{VIDEO_POWERTILT}` |
| Vilice za bager | Materialtransport | `{VIDEO_VILICE}` |
| Sortirne škare | Sortieren / Recycling | `{VIDEO_SORTIRNE}` |
| Mulčer | Vegetation / Forst | `{VIDEO_MULCER}` |
| Mješalica betona | Betonarbeiten | `{VIDEO_MJESALICA}` |

YouTube-Links liefert Zoran nach — Platzhalter-Embeds einbauen.

---

## 6. Design

### sunward.hr (dieses Projekt) — Farbpalette BESTÄTIGT ✅
Per Chrome-Screenshot-Analyse von sunward.eu abgelesen (Details: `ANALYSIS.md` §6):

| Element | Farbe |
|---|---|
| Header/Footer (dunkel) | `#14212B` |
| Markenfarbe/Akzent (Türkis) | `#00A19A` |
| Hintergrund Content | `#FFFFFF` |
| Hintergrund alternierend | `#F5F6F7` |
| Fließtext | `#2C2C2C`–`#333333` |
| Rahmen/Trennlinien | `#E5E5E5` |

Typografie: moderne serifenlose Grotesk-Schrift (Headings fett, Body regulär) — z.B. Inter oder vergleichbar.

Diese Werte 1:1 übernehmen — **keine eigene Design-Erfindung.**

### Drvošped Cross-Branding (nur fürs "powered by"-Badge und Rücklinks)
- Navy: `#1B3A6B`
- Amber: `#E8A020`
- Logo: HD Hidraulika Drvošped (navy/weiß + rot-gelbe Streifen der kroatischen Flagge) — liegt ggf. als Datei im Repo, sonst Text-Platzhalter

Diese Cross-Branding-Farben NUR für das kleine Badge/Rücklink verwenden, NICHT die Sunward-Hauptfarben verwässern.

### Header/Footer-Pflichten sunward.hr
- Badge im Header: "u suradnji s Hidraulika Drvošped" (klein, neben/unter Sunward-Logo)
- Link zurück zu drvosped.hr in Header UND Footer
- Footer-Hinweis: "sunward.hr je dio Hidraulika Drvošped d.o.o."

---

## 7. SEO-Anforderungen

**Fokus-Keywords (Ziel: Platz 1 Google Kroatien):**
- kineski bager ← wichtigstes Keyword (Zorans expliziter Wunsch)
- sunward bager
- mini bager cijena / mini bager cijena Hrvatska
- bager na rate
- generalni zastupnik Sunward Hrvatska

**Umsetzung:**
- Individuelle Title-Tags + Meta-Descriptions pro Seite
- Keywords in H1/H2, Alt-Texten, URLs (slugs kroatisch)
- Schema.org strukturierte Daten: Organization + Product (je Modell)
- sitemap.xml + robots.txt
- Sprache: `lang="hr"`

---

## 8. Rechtliches (eigene Domain = eigene Pflichtseiten)

- **Impresum** — Firmendaten aus Abschnitt 2
- **Politika privatnosti** — GDPR-Basistext, Hinweis: finaler Text von Zoran/Anwalt kommt später
- **Cookie-Banner** — erscheint beim ersten Besuch, "Samo nužni" / "Prihvati sve", speichert in localStorage (getrennt von drvosped.hr), Link zu Politika privatnosti

---

## 9. Sprache

- **Phase 1: ausschließlich Kroatisch.** Kein DE, kein EN.
- Keine Sprachpakete/i18n-Framework jetzt installieren (Token-/Komplexitätsverschwendung) — aber Code so strukturieren, dass Texte später extrahierbar sind (z.B. zentrale Content-Objekte statt hartkodierter Strings in JSX, wo praktikabel).

---

## 10. Vorhandene Assets

| Asset | Status |
|---|---|
| 5 Referenzfotos (Radbagger türkis, Forstmaschinen-Collage, SL12W Radlader, Skid-Steer, roter Holzspalter) | ✅ Vorhanden — falls im Repo unter `reference-images/`, sonst Platzhalter |
| Drvošped-Logo (PNG) | ✅ Vorhanden (ggf. im Repo) |
| Fotos von sunward.eu | ✅ Dürfen übernommen werden (Rechte geklärt) |
| ISO 9001 Logo (Vektor) | ❌ Von Zoran ausstehend |
| ISO-Zertifikat-Scans (hochauflösend) | ❌ Von Zoran ausstehend |
| YouTube-Videos Anbaugeräte | ❌ Von Zoran ausstehend |
| AAA-Bonitäts-Zertifikat | ❌ Von Zoran ausstehend |
| Finaler Datenschutztext | ❌ Von Zoran/Anwalt ausstehend |

---

## 11. Kontext: Rest des Drvošped-Geschäfts (NICHT Inhalt von sunward.hr — nur für Rücklink-Kontext)

Drvošped hat zwei Geschäftsbereiche, die auf **drvosped.hr** bleiben:
- **Forstwirtschaft:** Holzfällung/Rückung (ganz HR), Brennholz (Bukva 88€ / Hrast 85€ / Mix 72€ pro prm inkl. PDV, Gratis-Lieferung ab 3 prm im Umkreis 20 km Karlovac), Parkbaum-Sanierung (lizenziert), Ankauf privater Wälder
- **Hydraulik & Services:** Hydraulikreparatur, Zylinder-/Schlauchfertigung, Holzspalter-Eigenproduktion (Unikate), einziger Lenkgetriebe-Reparateur im Kreis Karlovac, 60t-LKW-Waage (geeicht), Drehen/Fräsen, Veriga-Ketten (regionaler Vertreter), Forstausrüstung (Styria-Forst-2-Stahlseile, Omče/Chokeri, Forstschere GMR 1300 HD 1.700 EUR+PDV)

Auf sunward.hr darf gern EIN kurzer Verweis stehen ("Trebate šumarske usluge ili servis hidraulike? → drvosped.hr"), aber diese Themen werden dort nicht ausgebaut.

### Status drvosped.hr (v0.dev-Build, wartet auf sunward.hr)
Alle Seiten gebaut (Početna, O Nama, Šumarstvo, Hidraulika, Sunward, Veriga, Usluge, Šumska Oprema, Kontakt, Impresum, Privatnost).
Design: Navy #1B3A6B / Amber #E8A020, Oswald + Inter.
Noch offen dort: Cookie-Banner final, Navigation "Sunward" auf sunward.hr umstellen, Logo-Feinschliff.

---

## 12. Arbeitsweise in diesem Repo

- Autonom arbeiten, keine Zwischen-Rückfragen — fehlende Infos: beste Annahme treffen und in `ASSUMPTIONS.md` dokumentieren
- Ausführungsauftrag: siehe `TASK.md`
- Analyse-Ergebnis von sunward.eu: nach Phase 0 in `ANALYSIS.md` ablegen
- Am Ende: ein einziger Abschlussbericht (siehe TASK.md Abschnitt 8)
