import { site } from "./site";

/**
 * Langtexte der Seite /financiranje.
 *
 * Zielkeyword ist `bager na rate` (PRD §10) — deshalb steht der Begriff in
 * H1, Intro und in der ersten FAQ-Frage, und nicht nur im Title-Tag.
 *
 * 🔴 Regel für diese Datei: hier stehen ausschliesslich BESTÄTIGTE Fakten
 * aus PRD §4/§5 — 30 % Anzahlung, Geltung für d.o.o./j.d.o.o./d.d./obrt/OPG inklusive
 * Neugründungen, Eintausch-Mechanik, Garantie. Zinssatz, Laufzeit,
 * Monatsrate, Bearbeitungsdauer und der Name des Leasingpartners sind NICHT
 * bekannt und werden auch nicht plausibel geschätzt: eine erfundene Rate in
 * einem Finanzierungsangebot ist kein Platzhalter, sondern eine Falschaussage.
 * Wo eine Zahl fehlt, verweist der Text auf den persönlichen Kontakt.
 */

const percent = site.financing.downPaymentPercent;

export const financing = {
  h1: `Bager na rate: financiranje uz ${percent}% učešća`,

  intro:
    `Bager na rate bez čekanja na cijeli iznos — uz ${percent}% učešća sredimo leasing za ostatak. ` +
    "Vrijedi za d.o.o., j.d.o.o., d.d., obrt i OPG, uključujući i tek osnovane firme. Kao generalni zastupnik " +
    "Sunwarda za Hrvatsku financiranje dogovaramo za cijeli program: bagere, utovarivače, " +
    "bušače garniture, radne platforme i dodatnu opremu.",

  processHeading: "Kako funkcionira",
  processBody:
    "Javite nam koji vas stroj zanima — telefonom ili preko obrasca na stranici Kontakt. " +
    `Pripremimo ponudu za odabrani model i objasnimo uvjete financiranja uz ${percent}% učešća, ` +
    "a ostatak iznosa ide kroz leasing. Imate li stari Sunward stroj, uzimamo ga u obzir kao " +
    "učešće. Točne uvjete, iznos rate i trajanje ugovora dogovaramo za svaki stroj posebno, " +
    "pa nazovite za konkretan izračun.",

  faqHeading: "Česta pitanja o kupnji na rate",

  faq: [
    {
      id: "na-rate",
      q: "Mogu li Sunward bager kupiti na rate?",
      a: `Da. Uz ${percent}% učešća sredimo leasing za ostatak iznosa. Ponuda vrijedi za d.o.o., j.d.o.o., d.d., obrt i OPG.`,
    },
    {
      id: "novootvorene",
      q: "Vrijedi li financiranje i za novootvorene firme?",
      a: site.financing.detail,
    },
    {
      id: "ucesce",
      q: "Koliko iznosi učešće?",
      a: `${percent}% cijene stroja. Ostatak se financira kroz leasing.`,
    },
    {
      id: "staro-za-novo",
      q: "Mogu li stari stroj dati u zamjenu umjesto učešća?",
      a: site.tradeIn.detail,
    },
    {
      id: "rata",
      q: "Kolika je mjesečna rata?",
      a:
        "Ovisi o modelu, iznosu učešća i trajanju ugovora, pa jedinstvenog iznosa nema. " +
        "Izračun pripremamo za svaki upit posebno — javite nam koji vas stroj zanima.",
    },
    {
      id: "garancija",
      q: "Vrijedi li garancija i na strojeve kupljene na rate?",
      a: `${site.warranty.headline} vrijedi jednako, bez obzira na način plaćanja. ${site.warranty.detail}`,
    },
  ],

  warrantyHeading: "Uz svaki stroj",
  warrantyBody: `${site.warranty.headline}. ${site.warranty.detail} ${site.service.headline} na području cijele Hrvatske.`,

  categoriesHeading: "Za koji stroj tražite financiranje?",
  categoriesLede: "Financiranje uz učešće vrijedi za cijeli Sunward program.",

  ctaHeading: "Zatražite izračun",
  ctaBody:
    "Recite nam koji model vas zanima i pripremamo ponudu s uvjetima financiranja. " +
    "Bez obveze i bez naknade.",
} as const;
