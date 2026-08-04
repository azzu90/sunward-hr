import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const mjesalicaBetona = {
  slug: "mjesalica-betona",
  name: "Mješalica betona",
  useCase: "Betonski radovi",
  order: 100,

  intro:
    "Mješalica miješa beton direktno na gradilištu i istresa ga na mjesto ugradnje — bez čekanja na dostavu i bez ručnog prenošenja. Volumen i prihvat određujemo prema vašem bageru.",

  bullets: ["Miješanje i istresanje betona na mjestu ugradnje"],

  compatibleWith: ["bageri"],

  image: "oprema/mjesalica-betona/glavna",
  video: tbd("VIDEO_MJESALICA", "Dostaviti YouTube poveznicu za mješalicu betona"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
