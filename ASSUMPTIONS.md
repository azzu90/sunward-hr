# ASSUMPTIONS.md — getroffene Annahmen

Stand: Phase 1 (Setup & Tech-Stack) abgeschlossen.

Alles hier ist eine Entscheidung, die ohne Rückfrage getroffen wurde, weil `CLAUDE.md` sie nicht abdeckt. Jede Zeile ist bewusst revidierbar — wo eine Änderung teuer wird, steht es dabei.

---

## 1. Farben

`ANALYSIS.md` §6 nennt fünf Werte. Für Zustände, die es dort nicht gibt (Fließtext in Türkis, Icons auf grauem Grund, Hinweise), mussten Töne abgeleitet werden. Alle Kontrastwerte selbst nachgerechnet nach WCAG 2.1.

| Token | Wert | Kontrast | Verwendung |
|---|---|---|---|
| `--color-brand` | `#00A19A` | 3.20:1 auf Weiß | **Aus ANALYSIS.md.** Icons, Rahmen, Akzente, große Flächen auf Weiß und auf dunklem Chrome |
| `--color-brand-text` | `#00726D` | 5.79:1 Weiß / 5.35:1 auf `#F5F6F7` | Abgeleitet. Türkiser Text und Links auf hellem Grund |
| `--color-brand-strong` | `#00807B` | 4.80:1 gegen Weiß / 4.44:1 auf `#F5F6F7` | Abgeleitet. Button-Füllung mit weißer Schrift; Icons und Rahmen auf `#F5F6F7` |
| `--color-ink-muted` | `#5C6670` | 5.85:1 Weiß | Abgeleitet. Sekundärtext |
| `--color-notice` | `#8A6100` | 5.54:1 Weiß | Abgeleitet. Markierung unbestätigter Werte |

Der Zwei-Ton-Ansatz löst den Konflikt zwischen „Palette 1:1 übernehmen" (CLAUDE.md §6) und „Accessibility besser als sunward.eu" (TASK.md).

**Drei Fallstricke, die aus den Zahlen folgen — alle beim Testen aufgetreten, nicht am Reißbrett:**

- `#00A19A` auf `#F5F6F7` liegt bei **2.96:1** und verfehlt sogar die 3:1-Schwelle für UI-Elemente. Auf den grauen Wechselsektionen greift `--color-brand-strong`.
- **Buttons: Abweichung von der ursprünglichen Vorgabe.** Vorgesehen war, `#00A19A` als Button-Füllung beizubehalten, weil CTA-Labels als „große Schrift" (≥18,66 px fett) bei 3:1 zulässig gewesen wären. In der Umsetzung sind die Labels aber 14 px — dort gilt 4,5:1, und weiße Schrift auf `#00A19A` erreicht nur **3,19:1**. Lighthouse hat drei Verstöße gemeldet.
  Statt die Buttons auf 19 px aufzublasen (unbrauchbar für Cookie-Banner und das 10-px-„NOVO"-Badge) tragen interaktive Flächen jetzt `#00807B`. Weiße Schrift darauf: **4,80:1**, AA bei jeder Größe. Der Unterschied zu `#00A19A` ist ohne direkten Farbvergleich nicht erkennbar, und die Optik von sunward.eu — türkiser Button, weißes Label — bleibt erhalten. Das war die schonendere von zwei Möglichkeiten; die Alternative (dunkelnavy Schrift auf originalem Türkis, 5,12:1) hätte den Button-Charakter sichtbar verändert.
  **Zoran sollte davon wissen:** die Markenfarbe der Buttons ist um rund 6 % abgedunkelt.
- `--color-ink` ist identisch mit `--color-shell` (`#14212B`). Ohne die Regel `.bg-shell :is(h1…h6) { color: var(--color-on-shell) }` wäre **jede** Überschrift auf dunklem Chrome unsichtbar — im ersten Durchlauf war die H1 der Startseite genau das.

## 1a. Gemessene Werte (Phase-1-Abschluss)

Lighthouse Desktop, lokaler Produktions-Build, `/proizvodi/bageri/swe08f`, gegen die aktuell live stehende alte Seite:

| | alt (`www.sunward.hr/sunward.html`) | neu |
|---|---|---|
| Performance | 71 | **100** |
| Accessibility | 87 | **100** |
| Best Practices | 71 | **100** |
| SEO | 92 | 66 ¹ |
| First Contentful Paint | 1,5 s | **0,2 s** |
| Largest Contentful Paint | 4,0 s | **0,6 s** |
| Cumulative Layout Shift | 0,01 | **0** |

¹ Ausschließlich wegen „Page is blocked from indexing" — das ist der gewollte `Disallow: /` außerhalb der Produktionsumgebung. Alle acht übrigen SEO-Audits bestehen. Nach dem Cutover entfällt der Block.

Die Messung der alten Seite wurde jetzt erfasst, weil sie nach dem Domain-Umzug nicht mehr möglich ist.

## 2. Produkt-Taxonomie

Die Zuordnung der 22 Modelle zu Gewichtsklassen ist eine Vertriebsentscheidung, keine technische Tatsache. Angenommene Grenzen:

| Klasse | Grenze | Modelle |
|---|---|---|
| Mini | bis 2,5 t | SWE08F, SWE17F, SWE18UF, SWE20F, SWE25UF |
| Kompaktni | 3,5–6 t | SWE35UF, SWE50UF, SWE60UF |
| Srednji | 9–15 t | SWE90UF, SWE90UF-2PB, SWE155UF, SWE155UF-2PB |
| Veliki | ab 21 t | SWE215F, SWE335F, SWE400F |
| Električni | eigene Klasse | SWE10FE, SWE20FED, SWE60UFED |

**Zoran sollte das bestätigen.** Die Zuordnung ist billig zu ändern, weil sie *nicht* in der URL steht — genau dafür wurde die URL-Struktur so gewählt.

Elektrische Bagger bilden eine eigene Klasse statt nur ein Badge zu bekommen, weil „električni bager" ein eigenständiges Suchwort ist.

## 3. Preise

**Alle Preise aus CLAUDE.md §4 sind als NETTO (`bez PDV-a`) modelliert.** Das ist eine Annahme — CLAUDE.md sagt es nicht. Bei Verkauf an Endverbraucher verlangt kroatisches Recht in der Regel Bruttopreise.

Der Typ trägt das Feld explizit (`tax: "net" | "gross"`), die Umstellung ist also ein Wort pro Modell. **Vor dem Livegang mit Zoran klären.**

## 4. Technische Daten

Bestätigt sind nur Modellname, grobes Gewicht und Preis. Die Produktseiten-Vorlage aus ANALYSIS.md §4 verlangt rund 20 Kennwerte pro Modell — der Rest ist plausibel geschätzt und **pro Feld** als unbestätigt markiert.

- Öffentlich: kursiv mit Sternchen plus Fußnote pro Tabelle.
- In der Entwicklung: amberfarben hinterlegt.
- Markierte Werte gehen **nie** in Schema.org und **nie** in Meta-Descriptions.
- `SHOW_UNCONFIRMED_SPECS` in `src/lib/flags.ts` schaltet alle erfundenen Werte site-weit auf „—", falls das rechtlich unerwünscht ist. Eine Zeile, keine Datenänderung.

`npm run report` listet alles auf, was noch fehlt. Aktueller Stand (3 Seed-Modelle + 1 Anbaugerät): **78 offene Punkte.** Hochgerechnet auf alle 32 Detailseiten werden es rund 450.

## 5. Bilder

Es existiert **kein einziges Bild-Asset**. Jedes Bild ist ein markierter Platzhalter mit finalem kroatischem Alt-Text.

Zoran liefert ein Foto → Datei unter dem im Report genannten Pfad ablegen → `npm run build`. **Keine Codeänderung.** Der Weg ist getestet: Datei abgelegt → `next/image` erscheint, Alt-Text unverändert; Datei entfernt → Platzhalter zurück.

Das Logo bekommt als einziges einen typografischen Fallback („SUNWARD" + türkiser Punkt), weil eine gestrichelte Box auf jeder Seite die Website im Review kaputt aussehen ließe. Favicon und OG-Bild werden über `next/og` aus Text und Tokens generiert — Social-Sharing funktioniert damit ohne jedes Asset.

## 6. Technische Entscheidungen

- **TypeScript auf 5.9.3 gepinnt.** `typescript@latest` ist inzwischen 7.0.2 (Go-Portierung); `typescript-eslint@8.46` deklariert `typescript >=4.8.4 <6.0.0`. Ohne Pin bricht `npm install` mit `ERESOLVE` ab.
- **Keine Content-Security-Policy in Phase 1.** YouTube- und Maps-Embeds kommen erst in Phase 2, jede jetzt geschriebene `frame-src` wäre falsch. CSP in Phase 3 nachziehen.
- **`npm audit` meldet 5 Schwachstellen** — alle in Next-eigenen Abhängigkeiten (`postcss@8.4.31`, `sharp`/libvips). Der angebotene Fix wäre ein Downgrade auf `next@9.3.3`, also keiner. Beide Angriffswege setzen fremdbestimmtes CSS bzw. fremdbestimmte Bilder voraus; bei durchgehend selbst verfasstem, statischem Inhalt existieren sie nicht. Bei Next-Updates neu bewerten.
- **`react/jsx-no-literals` ist als Fehler aktiv** für `src/app` und `src/components`. Das macht die i18n-Regel aus CLAUDE.md §9 maschinell prüfbar. Achtung: die Regel greift **nicht** bei Props — Breadcrumb-Namen und Alt-Texte müssen weiterhin diszipliniert aus `src/content` kommen.
- **`allowImportingTsExtensions`** ist gesetzt, damit `scripts/*.mts` die Content-Module direkt ausführen kann. Lockert keine Typprüfung.
- **Statische Routen tragen ein `built`-Flag** (`src/content/routes.ts`). Sitemap und Navigation blenden noch nicht gebaute Seiten aus — sonst zeigte die Sitemap auf 404er und im Review wären tote Links anklickbar. **Phase 2 muss das Flag pro fertiggestellter Seite umlegen.**
- **Der „Zatraži ponudu"-CTA auf der Startseite** führt vorerst per `mailto:` an `sunward.hrvatska@gmail.com`, weil `/kontakt` erst in Phase 2 entsteht.

## 7. Kontaktformular

Entscheidung des Auftraggebers: kein eigenes Backend, sondern ein No-Code-Formulardienst (**Web3Forms**) mit Zorans Mailadresse als Ziel. In Phase 1 ist nur `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.example` vorbereitet.

Der Dienst ist Auftragsverarbeiter im Sinne der DSGVO und muss in der Datenschutzerklärung genannt werden. Da der Anbieter außerhalb der EU sitzt, ist vor dem Livegang zu prüfen, ob ein AV-Vertrag vorliegt.

## 8. Sprachen

Der Sprachumschalter aus ANALYSIS.md §1 ist umgesetzt, aber nur `hr` ist aktiv. Zwei bewusste Details:

- Die inaktiven Sprachen sind **keine Links** (kein `href`, `aria-disabled`), damit Google keine toten Sprach-URLs entdeckt.
- Es werden **keine `hreflang`-Tags** ausgegeben. `hreflang` auf nicht existierende Varianten ist ein handfester SEO-Fehler.

## 9. Domain-Umzug — verifizierte Warnung

Per `dig` selbst geprüft:

```
sunward.hr   A    185.58.73.40
sunward.hr   MX   0 sunward.hr.      ← Mail hängt am Apex-A-Record
sunward.hr   TXT  v=spf1 … +a +mx ~all
sunward.hr   NS   dns1.cdn.hr / dns2.cdn.hr
drvosped.hr  A    185.58.73.40       (identisches Muster)
```

**Wird beim Cutover der Apex-A-Record auf Vercel gezeigt, fällt `@sunward.hr`-Mail aus.** Der MX zeigt auf denselben Namen, und es existiert ein nicht-trivialer SPF-Eintrag — Mail ist also eingerichtet.

Vor dem Umzug: Mail auf einen eigenen Hostnamen entkoppeln (`mail.sunward.hr` A-Record), MX dorthin zeigen, Zustellung prüfen, SPF/DKIM/DMARC mitnehmen — **erst danach** den Apex anfassen. Dieselbe Falle später bei drvosped.hr.

In Phase 1 wurde die Live-Seite nicht berührt: keine Custom Domain im Vercel-Projekt, `robots.txt` liefert außerhalb der Produktionsumgebung `Disallow: /`.

---

## Offen — nur Zoran kann liefern

Maschinell erzeugt über `npm run report`; die Liste unten ist die verdichtete Fassung.

- Fotos aller 22 Modelle und 10 Anbaugeräte (Rechte an sunward.eu-Bildern sind laut CLAUDE.md §3 geklärt — das würde einen großen Teil sofort erledigen)
- Sunward-Logo als Vektor, Drvošped-Logo
- Offizielle Datenblätter zur Bestätigung der technischen Werte
- YouTube-Links für die 10 Anbaugeräte
- ISO-Logo und Zertifikat-Scans, AAA-Bonitätszertifikat
- Finaler Datenschutztext
- GPS-Koordinaten der Betriebsstätte Jelaši 37C (zwei Minuten Arbeit, hilft messbar bei „bager Karlovac")
- Bestätigung: Netto- oder Bruttopreise
- Bestätigung: Gewichtsklassen-Grenzen
