import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const mulcer = {
  slug: "mulcer",
  name: "Mulčer",
  useCase: "Uklanjanje rastinja",
  order: 90,

  intro:
    "Mulčer usitnjava grmlje, šiblje i nisko rastinje u jednom prohodu — za čišćenje zemljišta, održavanje pojasa uz putove i šumske radove. Model odabiremo prema klasi vašeg bagera.",

  bullets: ["Usitnjavanje grmlja, šiblja i niskog rastinja u jednom prohodu"],

  compatibleWith: ["bageri"],

  image: "oprema/mulcer/glavna",
  video: tbd("VIDEO_MULCER", "Dostaviti YouTube poveznicu za mulčer"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
