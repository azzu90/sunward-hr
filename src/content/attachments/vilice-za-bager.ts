import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const viliceZaBager = {
  slug: "vilice-za-bager",
  name: "Vilice za bager",
  useCase: "Prijenos materijala",
  order: 70,

  intro:
    "Vilice pretvaraju bager u stroj za prijenos materijala — palete, građevinski materijal, balirano sijeno. Nosivost i prihvat određujemo prema vašem bageru.",

  bullets: ["Prijenos paleta i građevinskog materijala, nosivost prema vašem bageru"],

  compatibleWith: ["bageri"],

  image: "oprema/vilice-za-bager/glavna",
  video: tbd("VIDEO_VILICE", "Dostaviti YouTube poveznicu za vilice za bager"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
