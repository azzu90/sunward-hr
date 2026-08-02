import { tbd } from "../placeholder";
import type { Attachment } from "../types";

/**
 * Seed-Anbaugerät. Prüft die beiden Platzhalter-Wege, die es sonst
 * nirgends zusammen gibt: fehlendes Foto UND fehlender YouTube-Link
 * (CLAUDE.md §5 — Zoran liefert die Videos nach).
 */
export const hidraulickiCekic = {
  slug: "hidraulicki-cekic",
  name: "Hidraulički čekić",
  useCase: "Rušenje i rad u stijeni",
  order: 10,

  intro:
    "Hidraulički čekić pretvara bager u stroj za rušenje. Nudimo klase od 60 do 8.000 kg, pa svaki stroj iz naše ponude — od mini bagera do 40-tonca — može dobiti odgovarajući čekić.",

  bullets: [
    "Klase od 60 do 8.000 kg za sve veličine bagera",
    "Montaža i podešavanje hidraulike u našoj radionici",
    "Rezervni dijelovi i šiljci na zalihi",
    "Servis na terenu u cijeloj Hrvatskoj",
  ],

  sizeRange: "60–8.000 kg",
  compatibleWith: ["bageri"],

  image: "oprema/hidraulicki-cekic/glavna",
  video: tbd("VIDEO_CEKIC", "Dostaviti YouTube poveznicu za hidraulički čekić"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
