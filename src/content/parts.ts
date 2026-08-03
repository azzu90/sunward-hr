/**
 * Inhalte der Seite /servis (PRD §8, Abschnitt „Servis i dijelovi").
 *
 * 🔴 Die wichtigste Regel dieser Datei: auf der Seite stehen ZWEI
 * 24-Stunden-Aussagen, und die dürfen nicht verschwimmen.
 *
 *  1. `availability*` — 95 % Verfügbarkeit und Versand in 24 h. Das ist die
 *     Zusage von Sunward Europe für sein zentrales EU-Lager in Tessenderlo,
 *     also ein Netzwerkvorteil, den Zoran als Vertragshändler weitergibt.
 *     KEIN Lieferversprechen von Karlovac aus. Wie lange der Transport nach
 *     Kroatien dauert, ist nicht bekannt und wird nicht geschätzt —
 *     `availabilityNote` sagt genau das.
 *
 *  2. `site.service` — Servis na terenu in 24 h. Das ist Zorans eigene,
 *     bestätigte Zusage (PRD §4) und steht auf der Seite bewusst in einem
 *     eigenen Abschnitt mit eigener Überschrift.
 *
 * Kein Warenkorb und keine SKU-Liste: Ersatzteile werden angefragt, nicht
 * online bestellt.
 */

export const parts = {
  h1: "Servis i rezervni dijelovi za Sunward strojeve",

  intro:
    "Originalni Sunward dijelovi, servisni paketi i servis na terenu — sve preko jednog " +
    "sugovornika. Dijelove naručujete upitom, bez web-trgovine: pošaljete oznaku stroja i dio " +
    "koji tražite, a mi javljamo dostupnost i cijenu.",

  availabilityHeadline: "95% dostupnost rezervnih dijelova, isporuka u 24 sata",
  availabilityBody:
    "To jamstvo daje Sunward Europe za svoje središnje europsko skladište dijelova u " +
    "Tessenderlu u Belgiji: 95 % dijelova na zalihi, s isporukom u roku od 24 sata. Kao " +
    "generalni zastupnik za Hrvatsku naručujemo izravno iz tog skladišta, pa vam je ta zaliha " +
    "dostupna preko nas.",
  /** Ohne diesen Satz liest sich die Zusage wie ein Versprechen nach Karlovac. */
  availabilityNote:
    "Rok isporuke do vas ovisi o transportu do Hrvatske i dogovaramo ga za svaku narudžbu posebno.",

  categoriesHeading: "Što nabavljamo",
  categoriesLede: "Cijeli program originalnih dijelova i potrošnog materijala za Sunward strojeve.",

  categories: [
    { id: "baterije", label: "Baterije" },
    { id: "motorni-dijelovi", label: "Motorni dijelovi" },
    { id: "filteri", label: "Filteri" },
    { id: "maziva", label: "Maziva" },
    { id: "boja", label: "Boja" },
    { id: "klinovi-i-cahure", label: "Klinovi i čahure" },
    { id: "sasije", label: "Šasije" },
    { id: "gusjenice", label: "Gusjenice" },
    { id: "zubi-zlice", label: "Zubi žlice" },
    { id: "zlice", label: "Žlice" },
    { id: "cekici", label: "Čekići" },
  ],

  kitsHeading: "Servisni paketi",
  kitsBody:
    "Uz pojedinačne dijelove postoje i unaprijed složeni servisni paketi (maintenance kits) po " +
    "servisnom intervalu — filtri, maziva i potrošni dijelovi za taj interval u jednoj narudžbi. " +
    "Pitajte nas pri upitu koji paket odgovara vašem stroju.",

  serviceHeading: "Servis na terenu",

  ctaHeading: "Trebate rezervni dio?",
  ctaBody: "Pošaljite nam oznaku stroja i dio koji tražite — javljamo se s dostupnošću i cijenom.",
  ctaLabel: "Pošaljite upit za dijelove",
} as const;

/** Slug für /kontakt?tema=… — hält Link und Formular-Vorauswahl zusammen. */
export const PARTS_ENQUIRY_SLUG = "rezervni-dijelovi";
