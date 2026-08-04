import type { Attachment } from "../types";
import { tbd } from "../placeholder";

/**
 * Der einzige Anbaugerät-Preis, der bereits bestätigt ist: schon auf
 * drvosped.hr/Šumska Oprema gelistet, Foto & Preis vorhanden (PRD §8).
 */
export const sumskeSkare = {
  slug: "sumske-skare",
  name: "Šumske škare",
  useCase: "Šumarski radovi",
  order: 30,

  intro:
    "Šumske škare režu stabla i grmlje direktno s bagera, bez rada motornom pilom na tlu. Škare su već dio ponude šumske opreme Hidraulike Drvošped, pa su cijena i dostupnost potvrđene.",

  bullets: ["Rez stabala i grmlja direktno s bagera, bez motorne pile na tlu"],

  compatibleWith: ["bageri"],

  image: "oprema/sumske-skare/glavna",
  video: tbd("VIDEO_SKARE", "Dostaviti YouTube poveznicu za šumske škare"),

  price: { kind: "eur", amount: 1700, tax: "net" },
} as const satisfies Attachment;
