import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const thumb = {
  slug: "thumb",
  name: "Thumb",
  useCase: "Prihvat i sortiranje materijala",
  order: 20,

  intro:
    "Thumb je hidraulička hvataljka koja radi u paru sa žlicom bagera — pridržava materijal koji žlica sama ne može zahvatiti, od kamena i betonskih ostataka do debala. Veličinu i prihvat određujemo prema vašem bageru.",

  bullets: ["Radi u paru sa žlicom pri prihvatu i sortiranju materijala"],

  compatibleWith: ["bageri"],

  image: "oprema/thumb/glavna",
  video: tbd("VIDEO_THUMB", "Dostaviti YouTube poveznicu za thumb"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
