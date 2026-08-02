import { tbd } from "./placeholder";
import type { SiteData } from "./types";

/**
 * Firmenstammdaten aus CLAUDE.md §2 und die bestätigten Geschäftsfakten
 * aus §3. Einzige Quelle der Wahrheit — Telefonnummern, OIB, Garantie und
 * Mitarbeiterzahl werden nirgendwo sonst hartkodiert.
 *
 * Ändert Zoran die Mitarbeiterzahl, ist das genau eine Zahl an dieser Stelle.
 */
export const site: SiteData = {
  brandName: "Sunward Hrvatska",
  legalName: "Hidraulika Drvošped d.o.o.",
  shortName: "Drvošped",
  tagline: "Sunward građevinski strojevi za Hrvatsku",
  role: "Generalni zastupnik Sunward za Hrvatsku",

  address: {
    street: "Jelaši 37C",
    postalCode: "47000",
    city: "Karlovac",
    country: "Hrvatska",
    countryCode: "HR",
    // Für LocalBusiness-Schema und den Maps-Embed. Zwei Minuten Arbeit für
    // Zoran, hilft messbar bei „bager Karlovac".
    geo: tbd(
      { lat: 45.4929, lng: 15.5553 },
      "Potvrditi točne GPS koordinate poslovnice Jelaši 37C",
      "približna lokacija Karlovca",
    ),
  },

  identifiers: {
    oib: "64423111898",
    mb: "020035243",
    registeredAt: "14.09.2004.",
    shareCapital: "2.000.000,00 kn",
  },

  director: "Zoran Lovrinović",
  employeeCount: 27,

  phones: [
    {
      id: "office",
      label: "Ured",
      display: "047 641 200",
      href: "tel:+38547641200",
    },
    {
      id: "vlado",
      label: "Vlado",
      display: "091 641 2000",
      href: "tel:+385916412000",
      role: "Prodaja",
    },
    {
      id: "zoran",
      label: "Zoran Lovrinović",
      display: "091 641 2001",
      href: "tel:+385916412001",
      role: "Direktor",
    },
  ],

  emails: [
    {
      id: "sunward",
      label: "Sunward prodaja i servis",
      address: "sunward.hrvatska@gmail.com",
      primary: true,
    },
    {
      id: "general",
      label: "Hidraulika Drvošped",
      address: "drvosped@gmail.com",
      primary: false,
    },
  ],

  fax: "047 641 299",

  banks: [
    { bank: "Privredna banka Zagreb", iban: "HR1323400091110158496", bic: "PBZGHR2X" },
    { bank: "Raiffeisenbank Austria", iban: "HR4924840081105405647", bic: "RZBHHR2X" },
  ],

  certificates: [
    { id: "iso9001", name: "ISO 9001:2008", note: "Upravljanje kvalitetom" },
    { id: "iso14001", name: "ISO 14001:2004", note: "Upravljanje okolišem" },
    { id: "fsc", name: "FSC® CoC — FSC-C165150", note: "Održivo gospodarenje šumama" },
    { id: "top6", name: "Top 6% najuspješnijih tvrtki u Hrvatskoj", note: "poslovna.hr" },
  ],

  warranty: {
    years: 3,
    hours: 5000,
    headline: "Garancija do 3 godine ili 5.000 radnih sati",
    detail: "Svi dijelovi i rad BESPLATNI u garantnom roku.",
  },

  financing: {
    downPaymentPercent: 30,
    headline: "Financiranje uz 30% učešća",
    detail:
      "Uz 30% učešća sredimo leasing za novootvorene firme! U ponedjeljak otvorite firmu, u četvrtak već kopate sa svojim novim bagerom! Vrijedi za d.o.o., obrt i OPG.",
  },

  tradeIn: {
    headline: "Staro za novo",
    detail:
      "Imate stari Sunward stroj? Zamijenite ga za novi — vaš stari stroj priznajemo kao učešće.",
  },

  service: {
    responseHours: 24,
    headline: "Servis na terenu u roku od 24 sata",
    detail:
      "Popravak hidraulike na području cijele Hrvatske. Za Sunward strojeve dolazimo na teren i izlazimo na lice mjesta u roku od 24 sata, uz izvještaj greške.",
  },

  componentBrands: ["Kubota", "Yanmar", "Cummins", "BOSCH Rexroth", "EATON", "KYB", "ALFAGOMMA"],

  parent: {
    name: "Hidraulika Drvošped d.o.o.",
    url: "https://drvosped.hr",
    badge: "u suradnji s Hidraulika Drvošped",
    footerNote: "sunward.hr je dio Hidraulika Drvošped d.o.o.",
    crossLink: "Trebate šumarske usluge ili servis hidraulike?",
  },

  /**
   * Sprachumschalter aus ANALYSIS.md §1. In Phase 1 ist nur `hr` aktiv
   * (CLAUDE.md §9). Die inaktiven Einträge werden bewusst NICHT als Links
   * gerendert, damit Google keine toten Sprach-URLs entdeckt — siehe
   * components/layout/LanguageSwitcher.tsx.
   */
  languages: [
    { code: "hr", label: "HR", available: true, href: "/" },
    { code: "de", label: "DE", available: false },
    { code: "en", label: "EN", available: false },
    { code: "fr", label: "FR", available: false },
    { code: "it", label: "IT", available: false },
  ],
};
