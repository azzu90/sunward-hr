/**
 * Alle Content-Typen an einem Ort.
 *
 * Diese Datei ist in Phase 1 vollständig fertig. Sie später zu ändern
 * entwertet die Massen-Dateneingabe aus Phase 2 — deshalb hier zuerst
 * gründlich sein und danach nur noch Einträge hinzufügen.
 */

import type { images } from "./images";

/* ════════════════════════════════════════════════════════════════════════
   1. Platzhalter-Wrapper
   ════════════════════════════════════════════════════════════════════════ */

/**
 * Ein plausibel erfundener Wert, der ausdrücklich noch von Zoran bzw. aus
 * einem offiziellen Sunward-Datenblatt bestätigt werden muss.
 *
 * Kennzeichnung pro Feld statt pro Modell: eine Markierung auf Modellebene
 * würde auch den Preis als „unbestätigt" stempeln, und Preistransparenz ist
 * Zorans zentrales Verkaufsargument (CLAUDE.md §3).
 */
export type Tbd<T> = {
  readonly __tbd: true;
  /** Der angezeigte, erfundene Wert. */
  readonly value: T;
  /** Was genau bestätigt werden muss — auf Kroatisch, landet im Report. */
  readonly ask?: string;
  /** Warum dieser Wert geschätzt wurde. */
  readonly basis?: string;
};

/** Entweder eine bestätigte Tatsache oder ein markierter Platzhalter. */
export type Spec<T = string> = T | Tbd<T>;

/* ════════════════════════════════════════════════════════════════════════
   2. Firmen- und Seitendaten
   ════════════════════════════════════════════════════════════════════════ */

export interface PhoneContact {
  readonly id: string;
  readonly label: string;
  /** Anzeigeform, kroatische Schreibweise: "091 641 2001" */
  readonly display: string;
  /** E.164 für den Link: "tel:+385916412001" */
  readonly href: `tel:+385${string}`;
  readonly role?: string;
}

export interface EmailContact {
  readonly id: string;
  readonly label: string;
  readonly address: string;
  /** Genau ein Eintrag ist primary — für sunward.hr die Sunward-Adresse. */
  readonly primary: boolean;
}

export interface BankAccount {
  readonly bank: string;
  readonly iban: string;
  readonly bic: string;
}

export interface Certificate {
  readonly id: string;
  readonly name: string;
  readonly note?: string;
  readonly logo?: ImageId;
}

export interface SiteData {
  readonly brandName: string;
  readonly legalName: string;
  readonly shortName: string;
  readonly tagline: string;
  readonly role: string;
  readonly address: {
    readonly street: string;
    readonly postalCode: string;
    readonly city: string;
    readonly country: string;
    readonly countryCode: "HR";
    readonly geo: Spec<{ readonly lat: number; readonly lng: number }>;
  };
  readonly identifiers: {
    readonly oib: string;
    readonly mb: string;
    readonly registeredAt: string;
    readonly shareCapital: string;
  };
  readonly director: string;
  readonly employeeCount: number;
  readonly phones: readonly PhoneContact[];
  readonly emails: readonly EmailContact[];
  readonly fax: string;
  readonly banks: readonly BankAccount[];
  readonly certificates: readonly Certificate[];
  readonly warranty: {
    readonly years: number;
    readonly hours: number;
    readonly headline: string;
    readonly detail: string;
  };
  readonly financing: {
    readonly downPaymentPercent: number;
    readonly headline: string;
    readonly detail: string;
  };
  readonly tradeIn: {
    readonly headline: string;
    readonly detail: string;
  };
  readonly service: {
    readonly responseHours: number;
    readonly headline: string;
    readonly detail: string;
  };
  readonly componentBrands: readonly string[];
  readonly parent: {
    readonly name: string;
    readonly url: string;
    readonly badge: string;
    readonly footerNote: string;
    readonly crossLink: string;
  };
}

/* ════════════════════════════════════════════════════════════════════════
   3. Preis
   ════════════════════════════════════════════════════════════════════════ */

/** Ob der Preis netto (bez PDV-a) oder brutto (s PDV-om) gemeint ist. */
export type TaxBasis = "net" | "gross";

export type Price =
  | {
      readonly kind: "eur";
      readonly amount: number;
      readonly tax: TaxBasis;
      readonly note?: string;
    }
  | { readonly kind: "onRequest"; readonly note?: string };

export function isQuotable(p: Price): p is Extract<Price, { kind: "eur" }> {
  return p.kind === "eur";
}

/* ════════════════════════════════════════════════════════════════════════
   4. Technische Daten
   ════════════════════════════════════════════════════════════════════════ */

export type SpecKey =
  // Abmessungen / Masse
  | "operatingWeight"
  | "bucketCapacity"
  | "shippingLength"
  | "shippingWidth"
  | "heightOverCabin"
  | "width"
  // Motor / Antrieb
  | "engineModel"
  | "emission"
  | "displacement"
  | "power"
  | "ratedSpeed"
  | "batteryCapacity"
  | "batteryType"
  | "chargingTime"
  | "runtime"
  // Hydraulik
  | "hydraulicType"
  | "pumpFlow"
  | "hydraulicPressure"
  | "auxFlow"
  // Arbeitsbereich / Leistung
  | "diggingDepth"
  | "diggingReach"
  | "bucketForce"
  | "armForce"
  | "dumpHeight"
  | "tippingLoad"
  | "liftCapacity"
  | "liftHeight"
  | "workingHeight"
  | "platformCapacity"
  | "travelSpeed"
  | "gradeability"
  // Utovarivači / Bušače garniture / Platforme / Dizalice (ANALYSIS.md §9)
  | "ratedCapacity"
  | "breakoutForce"
  | "drillDiameter"
  | "workRadius"
  | "driveType"
  | "maxLoad"
  | "maxOutreach";

export interface SpecRow {
  readonly key: SpecKey;
  /** Anzeigewert in kroatischer Formatierung: "1.010 kg", "0,479 l". */
  readonly value: Spec<string>;
  /** Optionaler Maschinenwert für Sortierung und Schema.org. */
  readonly n?: number;
  /** UN/CEFACT-Code für Schema.org, z.B. "KGM". */
  readonly unitCode?: string;
}

export type DatasheetBlockId =
  "dimensions" | "engine" | "powertrain" | "hydraulics" | "workingRange" | "performance";

export interface DatasheetBlock {
  readonly id: DatasheetBlockId;
  readonly rows: readonly SpecRow[];
}

/**
 * ANALYSIS.md §3: Produktkarten zeigen die Kurzspecs ihrer Kategorie.
 *
 * Vier oder fünf, nicht beliebig viele. sunward.eu zeigt bei Baggern,
 * Škarasti-Bühnen und Teleskopladern fünf Felder, bei Zglobni utovarivači,
 * Bušače garniture, Zglobne radne platforme und Teleskopske dizalice nur
 * vier. Das ist dort so und wird hier so übernommen — die vierte Variante
 * ist kein fehlender Wert, der noch nachzutragen wäre.
 *
 * Welche Felder es je Kategorie sind und in welcher Reihenfolge, steht in
 * `CategoryDef.shortSpecKeys` und wird beim Build von `assertContract()`
 * (content/products/index.ts) gegen jedes Modell geprüft — inklusive Anzahl.
 */
export type ShortSpecs =
  | readonly [SpecRow, SpecRow, SpecRow, SpecRow]
  | readonly [SpecRow, SpecRow, SpecRow, SpecRow, SpecRow];

/* ════════════════════════════════════════════════════════════════════════
   5. Taxonomie
   ════════════════════════════════════════════════════════════════════════ */

/** Oberklasse — steht in der URL und ist damit dauerhaft stabil. */
export type CategorySlug =
  | "bageri"
  | "utovarivaci"
  | "zglobni-utovarivaci"
  | "busace-garniture"
  | "zglobne-radne-platforme"
  | "skarasti-podizni-strojevi"
  | "teleskopske-dizalice"
  | "teleskopski-utovarivaci";

/**
 * Unterkategorie — nur Gruppierung in Sidebar und Breadcrumb, nie in der URL.
 *
 * Die Bagger-Gruppen folgen der Aufteilung von sunward.eu, nicht einer
 * eigenen Gewichtslogik: dort zählen SWE 25F bis SWE 50UF noch zu „Mini",
 * „Kompaktni" beginnt erst bei SWE 60UF. Eine Zuordnung nach Tonnage
 * würde hier falsch liegen (ANALYSIS.md §8).
 */
export type GroupSlug =
  | "kotacni-bageri"
  | "mini-bageri"
  | "kompaktni-bageri"
  | "srednji-bageri"
  | "veliki-bageri"
  | "gusjenicni-utovarivaci"
  | "kotacni-mini-utovarivaci"
  | "zglobni-utovarivaci-svi"
  | "busace-garniture-sve"
  | "zglobne-radne-platforme-sve"
  | "skarasti-elektricni"
  | "skarasti-terenski"
  | "teleskopske-dizalice-sve"
  | "teleskopski-utovarivaci-svi";

export interface GroupDef {
  readonly slug: GroupSlug;
  readonly name: string;
  readonly nameSingular: string;
  readonly order: number;
}

export interface CategoryDef {
  readonly slug: CategorySlug;
  readonly name: string;
  readonly nameSingular: string;
  readonly lede: string;
  readonly heroImage: ImageId;
  readonly keywords: readonly string[];
  readonly groups: readonly GroupDef[];
  /** Vertrag: welche Kurzspecs die Karten dieser Kategorie zeigen (4 oder 5). */
  readonly shortSpecKeys:
    | readonly [SpecKey, SpecKey, SpecKey, SpecKey]
    | readonly [SpecKey, SpecKey, SpecKey, SpecKey, SpecKey];
  /** Vertrag: welche Datenblatt-Blöcke jedes Modell hier liefern muss. */
  readonly datasheetBlocks: readonly DatasheetBlockId[];
  readonly order: number;
}

/* ════════════════════════════════════════════════════════════════════════
   6. Produkt
   ════════════════════════════════════════════════════════════════════════ */

export interface FeatureTile {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export type YouTubeId = string;

export interface SeoOverride {
  readonly title?: string;
  readonly description?: string;
  readonly noindex?: boolean;
}

export interface GalleryRef {
  readonly main: ImageId;
  readonly extras?: readonly ImageId[];
}

export interface ProductModel {
  readonly slug: string;
  readonly name: string;
  readonly fullName: string;
  readonly category: CategorySlug;
  readonly group: GroupSlug;
  readonly order: number;

  readonly price: Price;
  readonly badges?: readonly string[];

  /**
   * Batterieelektrische Variante. Bewusst ein eigenes Feld und kein
   * Eintrag in `badges`: Electric ist bei sunward.eu ein Marketing-Highlight
   * quer durch die Gewichtsklassen, keine eigene Unterkategorie. Als
   * typisiertes Attribut lässt sich später danach filtern, ohne über
   * Freitext zu gehen — und das Label bleibt in ui.ts.
   */
  readonly electric?: boolean;

  /** ANALYSIS.md §4 Punkt 4 — ein Absatz Einstiegstext. */
  readonly intro: string;
  /** ANALYSIS.md §4 Punkt 8 — ausführliche Beschreibung. */
  readonly description: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
  };

  readonly shortSpecs: ShortSpecs;
  readonly datasheet: readonly DatasheetBlock[];

  /** String = ID aus features.ts, Objekt = modellspezifische Kachel. */
  readonly features: readonly (string | FeatureTile)[];
  readonly gallery: GalleryRef;
  readonly video?: Spec<YouTubeId>;
  readonly brochure?: Spec<string>;

  readonly seo?: SeoOverride;
  readonly related?: readonly string[];
}

/* ════════════════════════════════════════════════════════════════════════
   7. Anbaugerät (Dodatna oprema)
   ════════════════════════════════════════════════════════════════════════ */

export interface Attachment {
  readonly slug: string;
  readonly name: string;
  readonly useCase: string;
  readonly intro: string;
  readonly bullets: readonly string[];
  readonly sizeRange?: Spec<string>;
  readonly compatibleWith?: readonly CategorySlug[];
  readonly image: ImageId;
  /** Zoran liefert die Links nach — bis dahin Platzhalter mit Token. */
  readonly video?: Spec<YouTubeId>;
  readonly price: Price;
  readonly seo?: SeoOverride;
  readonly order: number;
}

/* ════════════════════════════════════════════════════════════════════════
   8. Navigation
   ════════════════════════════════════════════════════════════════════════ */

export interface NavNode {
  readonly id: string;
  readonly label: string;
  readonly href?: string;
  readonly external?: boolean;
  readonly badge?: string;
  readonly children?: readonly NavNode[];
}

export interface FooterColumn {
  readonly id: string;
  readonly heading: string;
  readonly links: readonly NavNode[];
}

/* ════════════════════════════════════════════════════════════════════════
   9. Bild-Manifest
   ════════════════════════════════════════════════════════════════════════ */

export type AspectRatio = "16/9" | "4/3" | "3/2" | "1/1" | "21/9" | "4/1" | (string & {});

/** Woher das Bild kommen soll — steuert die Gruppierung im Report. */
export type AssetSource = "zoran" | "sunward.eu" | "drvosped" | "generated";

export interface ImageEntry {
  /** Zugleich der Dateipfad: public/slike/<id>.<ext> — ASCII, keine Umlaute. */
  readonly id: string;
  /** Finaler SEO-Alt-Text auf Kroatisch. Wird JETZT geschrieben. */
  readonly alt: string;
  /** Welches Foto konkret hierhin gehört — auf Kroatisch, für Zoran. */
  readonly hint: string;
  readonly aspect: AspectRatio;
  readonly source: AssetSource;
  readonly priority?: boolean;
  readonly sizes?: string;
  /** Für Galerien: Alt-Text der nummerierten Extras, {n} wird ersetzt. */
  readonly altTemplate?: string;
}

/** Literal-Union aller Bild-IDs — ein Tippfehler ist ein Compile-Fehler. */
export type ImageId = keyof typeof images;
