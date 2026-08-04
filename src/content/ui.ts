/**
 * Generische Oberflächentexte.
 *
 * Regel aus CLAUDE.md §9: Was ein kroatischer Besucher wahrnehmen kann —
 * gelesen, vorgelesen oder von Google indexiert — steht hier und nicht im
 * JSX. Das schliesst ausdrücklich alt, aria-label, title und
 * Formularfehler mit ein; genau die Strings, die man beim späteren
 * Extrahieren sonst vergisst.
 */
export const ui = {
  nav: {
    main: "Glavna navigacija",
    mobileOpen: "Otvori izbornik",
    mobileClose: "Zatvori izbornik",
    breadcrumb: "Navigacijski put",
    skipToContent: "Prijeđi na sadržaj",
  },

  /**
   * Breadcrumb- und Seitentitel. Stehen hier und nicht im JSX, weil sie
   * sichtbarer Text sind — die Lint-Regel jsx-no-literals greift bei
   * Props nicht, die Regel aus CLAUDE.md §9 gilt trotzdem.
   */
  crumbs: {
    home: "Početna",
    products: "Strojevi",
    financing: "Financiranje",
    contact: "Kontakt",
    service: "Servis i dijelovi",
    impresum: "Impresum",
    privacy: "Politika privatnosti",
    cookies: "Kolačići",
  },

  pages: {
    productsTitle: "Sunward strojevi",
    modelsSuffix: "modela",
    /** H2 der Financiranje-Sektion auf der Startseite. Bewusst nicht
        site.financing.headline — der Text steht direkt darunter schon als H3. */
    homeFinancingHeading: "Financiranje i staro za novo",
    /** Eigene Überschrift für die Startseiten-Auswahl. Bewusst NICHT
        ui.product.relatedHeading („Slični strojevi") — das ist das Label der
        Produktdetailseiten und heisst „ähnlich zu diesem Modell hier". Auf der
        Startseite gibt es kein Bezugsmodell, dieselbe Zeichenfolge stünde dort
        für etwas anderes. */
    homeFeaturedHeading: "Istaknuti strojevi",
  },

  cta: {
    viewProduct: "Pogledaj stroj",
    requestQuote: "Zatraži ponudu",
    contactUs: "Kontaktirajte nas",
    callUs: "Nazovite nas",
    allProducts: "Svi strojevi",
    backToCategory: "Natrag na kategoriju",
    moreAboutFinancing: "Više o financiranju i kupnji na rate",
  },

  /**
   * Filter- und Sortierleiste der Kategorieseiten (TASK.md Phase 2b).
   *
   * Die Sortierbezeichnung selbst kommt nicht von hier, sondern aus
   * `specLabels.operatingWeight` — der Kennwert heisst überall auf der Seite
   * gleich, und zwei Quellen dafür würden auseinanderlaufen.
   */
  filter: {
    toolbar: "Filtriranje i sortiranje",
    groupLegend: "Podgrupa",
    sortLabel: "Sortiraj",
    sortRecommended: "Preporučeno",
    ascending: "uzlazno",
    descending: "silazno",
    reset: "Poništi filtere",
    /** Für „1 model" — ab zwei greift ui.pages.modelsSuffix. */
    modelSingular: "model",
  },

  price: {
    onRequest: "Cijena na upit",
    net: "bez PDV-a",
    gross: "s PDV-om",
    from: "od",
  },

  spec: {
    unknown: "—",
    tbdMarker: "*",
    tbdSrSuffix: "orijentacijski podatak, nije službeno potvrđen",
    tbdTooltip: "Orijentacijski podatak — za obvezujuće vrijednosti kontaktirajte nas",
    tbdFootnote:
      "* Označene vrijednosti su orijentacijske i nisu službeno potvrđene od proizvođača. Za obvezujuće podatke kontaktirajte nas.",
    shortSpecsHeading: "Osnovni podaci",
    datasheetHeading: "Tehnički podaci",
  },

  product: {
    featuresHeading: "Prednosti i oprema",
    videoHeading: "Video",
    brochureHeading: "Brošura",
    descriptionHeading: "Opis stroja",
    galleryHeading: "Fotografije",
    relatedHeading: "Slični strojevi",
    /** Badge für batterieelektrische Modelle (ProductModel.electric). */
    electric: "Električni",
  },

  media: {
    imagePending: "Fotografija u pripremi",
    videoPending: "Video u pripremi",
    videoPendingHint: "YouTube poveznicu dostavlja Hidraulika Drvošped",
    brochurePending: "Brošura uskoro",
    galleryPending: "Fotografije stroja u pripremi",
  },

  trust: {
    heading: "Zašto Sunward preko Drvošpeda",
  },

  /**
   * Kontaktseite und Formular.
   *
   * Auch die Fehlertexte stehen hier — es sind sichtbare Strings, und beim
   * späteren Extrahieren werden genau die vergessen (CLAUDE.md §9).
   */
  contact: {
    title: "Kontakt",
    lede: "Nazovite nas ili pošaljite upit — javljamo se u najkraćem roku.",
    formHeading: "Pošaljite upit",
    detailsHeading: "Kontakt podaci",
    addressHeading: "Adresa",
    socialHeading: "Pratite nas",
    requiredMarker: "*",
    requiredNote: "Polja označena zvjezdicom su obavezna.",

    nameLabel: "Ime i prezime",
    namePlaceholder: "Vaše ime",
    contactLabel: "Telefon ili e-mail",
    contactPlaceholder: "091 234 5678 ili ime@primjer.hr",
    productLabel: "Stroj koji vas zanima",
    productAny: "Nije važno / ostalo",
    productAttachments: "Dodatna oprema",
    productParts: "Rezervni dijelovi i servis",
    messageLabel: "Poruka",
    messagePlaceholder: "Opišite ukratko što vas zanima.",

    /** Honeypot. Für Menschen unsichtbar, Screenreader werden per
        aria-hidden ausgeschlossen — der Text ist reine Absicherung. */
    honeypotLabel: "Ovo polje ostavite prazno",

    submit: "Pošalji upit",
    sending: "Šaljemo…",
    successHeading: "Hvala na upitu!",
    successBody: "Poruka je poslana. Javljamo vam se u najkraćem roku.",
    errorHeading: "Slanje nije uspjelo",
    errorBody: "Molimo pokušajte ponovno ili nas kontaktirajte izravno:",
    privacyNote:
      "Vaše podatke koristimo isključivo za odgovor na ovaj upit i ne prosljeđujemo ih trećim stranama.",
  },

  cookies: {
    heading: "Kolačići",
    body: "Koristimo nužne kolačiće za rad stranice i, uz vaš pristanak, kolačiće za analizu posjeta.",
    acceptAll: "Prihvati sve",
    necessaryOnly: "Samo nužni",
    moreInfo: "Više o kolačićima",
  },

  footer: {
    productsHeading: "Strojevi",
    companyHeading: "Tvrtka",
    contactHeading: "Kontakt",
    certificatesHeading: "Certifikati i nagrade",
    /* Kein h2 mehr wie die anderen Headings — steht jetzt als kleines
       Inline-Label direkt vor den Social-Icons in Spalte 1 (wie
       "Follow us:" bei sunward.eu), keine eigene Überschrift mit
       Trennlinie mehr. */
    socialHeading: "Pratite nas",
    rightsReserved: "Sva prava pridržana.",
  },

  error: {
    notFoundTitle: "Stranica nije pronađena",
    notFoundBody: "Tražena stranica ne postoji ili je premještena.",
    notFoundCta: "Natrag na početnu",
    genericTitle: "Došlo je do pogreške",
    genericBody: "Pokušajte ponovno ili nas kontaktirajte.",
    retry: "Pokušaj ponovno",
  },
} as const;
