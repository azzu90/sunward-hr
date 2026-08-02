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
  },

  pages: {
    productsTitle: "Sunward strojevi",
    modelsSuffix: "modela",
  },

  cta: {
    viewProduct: "Pogledaj stroj",
    requestQuote: "Zatraži ponudu",
    contactUs: "Kontaktirajte nas",
    callUs: "Nazovite nas",
    allProducts: "Svi strojevi",
    backToCategory: "Natrag na kategoriju",
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
    legalHeading: "Pravno",
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
