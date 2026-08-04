import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const busacRupa = {
  slug: "busac-rupa",
  name: "Bušač rupa (svrdlo)",
  useCase: "Bušenje rupa u zemlji",
  order: 40,

  intro:
    "Svrdlo buši rupe u zemlji — za stupove, ograde, temelje i sadnju. Promjer svrdla odabiremo prema namjeni, a prihvat prema vašem bageru.",

  bullets: ["Bušenje rupa za stupove, ograde, temelje i sadnju, promjer prema namjeni"],

  compatibleWith: ["bageri"],

  image: "oprema/busac-rupa/glavna",
  video: tbd("VIDEO_BUSAC", "Dostaviti YouTube poveznicu za bušač rupa"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
