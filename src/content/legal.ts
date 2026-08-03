import { site } from "./site";

/**
 * Langtexte der drei Pflichtseiten Impresum, Politika privatnosti und
 * Kolačići (TASK.md Phase 4, PRD §11).
 *
 * ANALYSIS.md §14 liefert nur die GLIEDERUNG von sunward.eu als Vorlage —
 * der Wortlaut hier ist vollständig eigenständig für Hidraulika Drvošped
 * d.o.o. verfasst, nicht übersetzt.
 *
 * Firmendaten kommen ausnahmslos aus `site.ts` statt hier dupliziert zu
 * werden. Zwei Angaben sind bewusst generisch statt erfunden gehalten
 * (gleiches Prinzip wie der Zinssatz in financing.ts): Aufbewahrungsdauer
 * der Kontaktanfragen und Datenschutzbeauftragter — siehe ASSUMPTIONS.md.
 */

const primaryEmail = site.emails.find((e) => e.primary)?.address ?? site.emails[0]?.address;

export const legal = {
  impresum: {
    h1: "Impresum",
    intro:
      "Pravna napomena za internetsku stranicu sunward.hr, u skladu s hrvatskim propisima " +
      "o elektroničkoj trgovini i pružanju informacijskih usluga.",

    companyHeading: "Podaci o društvu",
    companyIntro: `${site.legalName} (u nastavku: „Društvo")`,
    companyRows: [
      { label: "Naziv", value: site.legalName },
      {
        label: "Adresa",
        value: `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
      },
      { label: "OIB", value: site.identifiers.oib },
      { label: "MBS (Trgovački sud)", value: site.identifiers.mb },
      { label: "Datum upisa u sudski registar", value: site.identifiers.registeredAt },
      { label: "Temeljni kapital", value: `${site.identifiers.shareCapital}, uplaćen u cijelosti` },
      { label: "Direktor", value: site.director },
    ],

    contactHeading: "Kontakt",

    bankHeading: "Poslovni računi",

    hostingHeading: "Pružatelj usluge hostinga",
    hostingBody:
      "Stranica se hostira kod Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, SAD). " +
      "Vercel djeluje kao pružatelj infrastrukture, ne kao izdavač sadržaja ove stranice.",

    copyrightHeading: "Autorska prava",
    copyrightBody:
      `Sadržaj ove stranice — tekstovi, struktura i odabir podataka — u vlasništvu je društva ` +
      `${site.legalName}, osim fotografija Sunward strojeva, koje se koriste uz odobrenje proizvođača ` +
      "(Sunward Intelligent Equipment Co., Ltd. / Sunward Europe). Preuzimanje ili daljnje korištenje " +
      "sadržaja bez prethodne pisane suglasnosti nije dopušteno, osim u mjeri u kojoj je to izričito " +
      "dopušteno zakonom.",

    disclaimerHeading: "Ograničenje odgovornosti",
    disclaimerBody:
      "Sadržaj stranice ažuriramo s dužnom pažnjom, no ne odgovaramo za potpunost, točnost ili " +
      "aktualnost objavljenih informacija. Tehnički podaci o strojevima potječu od proizvođača i " +
      "podložni su izmjenama; vrijednosti označene kao orijentacijske nisu službeno potvrđene i ne " +
      "predstavljaju obvezujuću ponudu. Obvezujući podaci i cijene dostupni su isključivo na izravan upit.",

    linksHeading: "Vanjske poveznice",
    linksBody:
      "Stranica sadrži poveznice na sunward.eu, drvosped.hr i profile na Facebooku i TikToku. Za " +
      "sadržaj tih stranica, koji ne kontroliramo, ne odgovaramo.",

    privacyHeading: "Zaštita podataka",
    privacyBody: "Kako obrađujemo osobne podatke opisano je u ",
    privacyLinkLabel: "Politici privatnosti",

    lawHeading: "Mjerodavno pravo i nadležnost",
    lawBody:
      // Lokativ grada je nepravilan („u Karlovcu", ne "u Karlovacu") — zato
      // fest formuliert statt aus site.address.city zusammengesetzt.
      "Na sve odnose proizašle iz korištenja ove stranice primjenjuje se hrvatsko pravo. Za rješavanje " +
      "eventualnih sporova mjesno je nadležan sud u Karlovcu.",
  },

  privatnost: {
    h1: "Politika privatnosti",
    intro:
      "Ova politika privatnosti objašnjava koje osobne podatke prikupljamo putem sunward.hr, u koju " +
      "svrhu i s kim ih eventualno dijelimo, u skladu s Općom uredbom o zaštiti podataka (GDPR).",

    controllerHeading: "Voditelj obrade",
    controllerBody: `Voditelj obrade osobnih podataka je ${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}, OIB: ${site.identifiers.oib}.`,
    controllerContact: `Za sva pitanja o zaštiti podataka javite se na ${primaryEmail}.`,

    dataHeading: "Koje podatke prikupljamo i zašto",
    dataIntro:
      "Osobne podatke prikupljamo isključivo kad ih sami ostavite putem obrasca za kontakt:",
    dataItems: [
      "Ime i prezime — za identifikaciju i obraćanje u odgovoru.",
      "Kontakt podatak (telefon ili e-mail) — da bismo vam mogli odgovoriti.",
      "Sadržaj poruke i, ako ga navedete, stroj koji vas zanima — da bismo razumjeli upit.",
    ],
    dataBasis:
      "Pravna osnova obrade je poduzimanje radnji na vaš zahtjev prije eventualnog sklapanja ugovora " +
      "(čl. 6(1)(b) GDPR), odnosno naš legitimni interes da odgovorimo na upit (čl. 6(1)(f) GDPR).",

    analyticsHeading: "Statistika posjeta",
    analyticsBody:
      "Za mjerenje posjećenosti i performansi stranice koristimo Vercel Analytics i Vercel Speed " +
      "Insights. Oba alata rade bez kolačića i bez osobnih identifikatora — bilježe se samo agregirani, " +
      "anonimizirani podaci o posjetama i brzini učitavanja stranice. Ne koristimo Google Analytics ni " +
      "oglasne piksele.",

    fontsHeading: "Fontovi",
    fontsBody:
      "Fontovi korišteni na stranici preuzeti su i pohranjeni na našem poslužitelju u trenutku izrade " +
      "stranice — vaš preglednik pri posjeti nikad ne kontaktira Googleove poslužitelje za fontove.",

    recipientsHeading: "Primatelji i obrađivači podataka",
    recipientsIntro:
      "Vaše podatke iz obrasca za kontakt prosljeđujemo isključivo sljedećim obrađivačima, u mjeri potrebnoj za slanje i primanje vaše poruke:",
    recipientsItems: [
      `Web3Forms — usluga za slanje obrasca s ove stranice na naš e-mail (${primaryEmail}).`,
      "Vercel Inc. (SAD) — pružatelj hostinga; podaci mogu biti obrađivani na poslužiteljima izvan EGP-a, uz odgovarajuće zaštitne mjere (standardne ugovorne klauzule EU-a).",
    ],
    recipientsNote: "Vaše podatke ne prodajemo i ne koristimo za marketing trećih strana.",

    retentionHeading: "Rok čuvanja podataka",
    retentionBody:
      "Podatke iz obrasca za kontakt čuvamo samo onoliko dugo koliko je potrebno za obradu vašeg upita " +
      "i eventualnu komunikaciju koja iz njega proizađe, a zatim ih brišemo.",

    rightsHeading: "Vaša prava",
    rightsIntro: "U vezi s vašim osobnim podacima imate pravo na:",
    rightsItems: [
      "pristup podacima koje o vama obrađujemo,",
      "ispravak netočnih podataka,",
      `brisanje podataka („pravo na zaborav"),`,
      "ograničenje obrade,",
      "prenosivost podataka,",
      "prigovor na obradu temeljenu na legitimnom interesu.",
    ],
    rightsContact: `Zahtjev za ostvarivanje prava možete uputiti na ${primaryEmail}.`,
    rightsComplaint:
      "Ako smatrate da obrada vaših podataka nije u skladu s propisima, imate pravo podnijeti pritužbu " +
      "Agenciji za zaštitu osobnih podataka (AZOP), www.azop.hr.",

    dpoHeading: "Službenik za zaštitu podataka",
    dpoBody:
      "S obzirom na veličinu i djelatnost Društva, zakonska obveza imenovanja službenika za zaštitu " +
      "podataka (DPO) ne postoji. Sva pitanja o zaštiti podataka rješava Društvo izravno, na gore " +
      "navedenu kontakt adresu.",

    cookiesHeading: "Kolačići",
    cookiesBody: "Koje kolačiće i slične tehnologije koristimo opisano je u posebnoj ",
    cookiesLinkLabel: "politici kolačića",

    changesHeading: "Izmjene ove politike",
    changesBody:
      "Ovu politiku privatnosti možemo povremeno ažurirati, primjerice zbog promjene propisa ili " +
      "usluga koje koristimo. Aktualna verzija je uvijek dostupna na ovoj stranici.",
  },

  kolacici: {
    h1: "Politika kolačića",
    intro:
      "Ova stranica objašnjava koje kolačiće (cookies) i slične tehnologije pohrane sunward.hr koristi, " +
      "te što određuje izbor koji nudi banner pri prvom posjetu.",

    bannerHeading: "Nužno / Prihvati sve",
    bannerBody:
      'Pri prvom posjetu stranica prikazuje banner s dva izbora — "Samo nužni" i "Prihvati sve". Vaš ' +
      "izbor pohranjujemo lokalno u vašem pregledniku (localStorage), pod ključem specifičnim za " +
      "sunward.hr — ta pohrana odvojena je od drvosped.hr i drugih stranica, čak i ako pripadaju istoj " +
      "tvrtki.",

    necessaryHeading: "Nužna pohrana",
    necessaryBody:
      "Jedina pohrana koju stranica postavlja bez vašeg pristanka je zapis vašeg izbora iz bannera — " +
      "nije riječ o HTTP kolačiću, već o lokalnoj pohrani (localStorage) potrebnoj isključivo za " +
      "funkcioniranje samog bannera (da vas ne pita svaki put iznova).",

    analyticsHeading: "Analitika",
    analyticsBody:
      "Za statistiku posjeta koristimo Vercel Analytics i Vercel Speed Insights. Oba alata rade " +
      "bez kolačića — ne postavljaju nikakvu pohranu u vašem pregledniku i ne prate vas s posjete na " +
      "posjet. Trenutačno rade neovisno o vašem izboru u banneru, jer ne postoji kolačić kojim bi ih " +
      "trebalo isključiti.",

    noneHeading: "Trenutno stanje",
    noneBody:
      "Stranica trenutno ne koristi kolačiće za oglašavanje niti kolačiće trećih strana za praćenje. " +
      "Ako se to promijeni, ova stranica i banner bit će ažurirani u skladu s time.",

    manageHeading: "Promjena izbora",
    manageBody:
      "Poseban gumb za promjenu ranijeg izbora još ne postoji. Do tada izbor možete poništiti brisanjem " +
      "pohranjenih podataka stranice (website data / local storage) u postavkama vašeg preglednika za " +
      "sunward.hr — nakon toga će se banner pri sljedećem posjetu ponovno prikazati.",
  },
} as const;
