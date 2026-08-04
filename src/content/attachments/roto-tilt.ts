import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const rotoTilt = {
  slug: "roto-tilt",
  name: "Roto tilt",
  useCase: "Precizni radovi",
  order: 50,

  intro:
    "Roto tilt zakreće i naginje žlicu, pa bager radi precizno i bez stalnog premještanja stroja — kod uređenja terena, kanala i radova uz rub. Model prilagođavamo klasi vašeg bagera.",

  bullets: ["Zakretanje i nagib žlice bez premještanja stroja"],

  compatibleWith: ["bageri"],

  image: "oprema/roto-tilt/glavna",
  video: tbd("VIDEO_ROTOTILT", "Dostaviti YouTube poveznicu za roto tilt"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
