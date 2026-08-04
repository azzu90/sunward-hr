import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const powerTilt = {
  slug: "power-tilt",
  name: "Power tilt",
  useCase: "Nagib žlice",
  order: 60,

  intro:
    "Power tilt naginje žlicu u stranu, bez zakretanja. Jednostavniji je od roto tilta i dolazi u obzir kada je potreban samo nagib; prihvat prilagođavamo vašem bageru.",

  bullets: ["Nagib žlice u stranu, bez zakretanja"],

  compatibleWith: ["bageri"],

  image: "oprema/power-tilt/glavna",
  video: tbd("VIDEO_POWERTILT", "Dostaviti YouTube poveznicu za power tilt"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
