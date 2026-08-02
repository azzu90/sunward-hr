# TASK.md — Ausführungsauftrag: sunward.hr bauen

> Alle Fakten, Preise, Kontakte und Anforderungen stehen in `CLAUDE.md` — dort nachschlagen, nichts erfinden, nichts nachfragen.

---

## Auftrag in einem Satz

Baue sunward.hr als strukturelle und visuelle Kopie von **sunward.eu** — komplett auf Kroatisch, mit eigenständig geschriebenen, auf Drvošped zugeschnittenen Texten, technisch besser (Performance, SEO, Accessibility) als das Original, aber ohne von dessen Struktur, Kategorien-Logik und visueller Identität abzuweichen.

---

## Autonomie-Regeln

1. Arbeite alle Phasen sequenziell und **ohne Zwischen-Rückfragen** ab.
2. Standard-Aktionen (npm install, Dateien/Ordner anlegen, Dependencies) ohne Bestätigung ausführen.
3. Fehlende Infos: erst `CLAUDE.md` prüfen → sonst beste Annahme treffen und in `ASSUMPTIONS.md` festhalten → weiterarbeiten.
4. Nur unterbrechen wenn etwas destruktiv/irreversibel ist oder sunward.eu technisch nicht erreichbar ist.
5. **Ein einziger Abschlussbericht am Ende** — keine Zwischenberichte.

---

## Phase 0 — Analyse sunward.eu

✅ **Vollständig erledigt — siehe `ANALYSIS.md` im Repo.** Sitemap, Kategorien-Struktur, Homepage-Sektionsaufbau, Kategorieseiten-Muster, komplette Produktdetailseiten-Vorlage (13-Punkte-Struktur inkl. der 4 Datenblatt-Blöcke Dimensions/Engine/Hydraulic/Working Range) UND die bestätigte Farbpalette (Abschnitt 6: `#14212B` Anthrazit/Navy, `#00A19A` Sunward-Türkis als Akzent, Weiß/`#F5F6F7` als Basis) sind vollständig dokumentiert. Lies `ANALYSIS.md` vollständig, bevor du irgendetwas baust. Keine eigene Analyse mehr nötig — direkt mit Phase 1 starten.


---

## Phase 1 — Setup & Tech-Stack

- **Next.js (App Router) + Tailwind CSS**
- `next/image` durchgängig, Lazy Loading unterhalb des Folds, Font-Optimierung (next/font)
- Mobile-First, vollständig responsive
- Semantisches HTML, saubere Heading-Hierarchie
- Performance-Ziel: sunward.eu in Ladezeit und Lighthouse-Werten spürbar übertreffen
- **Keine strukturelle/visuelle Abweichung** vom in `ANALYSIS.md` Dokumentierten

---

## Phase 2 — Build (Daten aus CLAUDE.md)

Umsetzen, alles auf Kroatisch:

1. **Alle Seiten** gemäß Sitemap aus Phase 0, adaptiert auf das Drvošped-Angebot
2. **Header:** Sunward-Optik + Badge "u suradnji s Hidraulika Drvošped" + Link zu drvosped.hr
3. **Trust-Leiste Startseite:** Generalni zastupnik za Hrvatsku | 27 zaposlenika | Garancija 3 god / 5.000h | Servis na terenu (samo Sunward)
4. **Finanzierungs-Box + Eintausch-Box** (exakte Texte in CLAUDE.md §3)
5. **22 Modelle** (CLAUDE.md §4): je Produktkarte (5 Kurzspecs wie in ANALYSIS.md §3: Emission rating, Operating weight, Power output, Max. digging depth, Width) + eigene Detailseite nach dem 13-Punkte-Muster aus ANALYSIS.md §4 (Bildergalerie, Breadcrumb, H1, Kurzspecs, Preis+Upit-CTA statt "contact dealer", Langbeschreibung, 4 Datenblatt-Blöcke Dimensions/Engine/Hydraulic/Working Range, Features&Benefits-Kacheln, Video-Embed, Broschüre-Platzhalter). Fehlende technische Werte plausibel als klar markierte Platzhalter befüllen. Abweichend vom Original: **Preis IMMER anzeigen** (Zorans Wunsch), kein reiner "Contact dealer"-Verweis.
6. **Kategorie "Dodatna Oprema"** (CLAUDE.md §5): 10 Anbaugeräte mit Foto- und YouTube-Platzhaltern
7. **Service-Seite:** Hydraulik ganz Kroatien, 24h-Reaktion + Fehlerbericht, Vor-Ort nur Sunward
8. **Kontakt:** Zoran-Daten, Google-Maps-Embed-Platzhalter, Kontaktformular (Frontend)
9. **Rechtliches:** Impresum, Politika privatnosti, Cookie-Banner (CLAUDE.md §8)
10. **SEO komplett** (CLAUDE.md §7): Meta-Tags, Schema.org, sitemap.xml, robots.txt, kroatische Slugs, Fokus-Keyword "kineski bager"
11. **Rücklink-Sektion:** ein kurzer Verweis auf drvosped.hr für Forst/Hydraulik-Services (CLAUDE.md §11)

---

## Phase 3 — Self-QC (vor Abschluss, automatisch)

- [ ] Build läuft fehlerfrei, keine Konsolen-Errors
- [ ] Alle internen Links funktionieren
- [ ] Keine Lorem-Ipsum-Reste, keine gemischten Sprachen — alles Kroatisch
- [ ] Jede Seite: individueller Title + Meta-Description
- [ ] Alle Bilder: Alt-Texte
- [ ] `tel:` / `mailto:` Links korrekt
- [ ] Mobile-Ansicht aller Seitentypen geprüft
- [ ] Cookie-Banner funktioniert (localStorage)
- [ ] Lighthouse-Check durchgeführt und Werte notiert

---

## Abschlussbericht (einziger Report, am Ende)

1. Was gebaut wurde (Seitenliste, Komponentenübersicht)
2. Getroffene Annahmen (Verweis auf ASSUMPTIONS.md)
3. Offene Punkte, die nur Zoran liefern kann (ISO-Logo, Zertifikat-Scans, echte Fotos aller 22 Modelle, YouTube-Links, finaler Datenschutztext)
4. Performance-Vergleich zu sunward.eu (Messwerte/Einschätzung)
5. Empfohlene nächste Schritte (Deployment Vercel, Domain-Setup)
