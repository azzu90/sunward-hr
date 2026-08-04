import { tbd } from "../placeholder";
import type { Attachment } from "../types";

export const sortirneSkare = {
  slug: "sortirne-skare",
  name: "Sortirne škare",
  useCase: "Sortiranje i reciklaža",
  order: 80,

  intro:
    "Sortirne škare hvataju i razdvajaju građevinski otpad — beton, ciglu, drvo i metal — pa se materijal sortira već na gradilištu. Model odabiremo prema klasi vašeg bagera.",

  bullets: ["Hvatanje i razdvajanje građevinskog otpada već na gradilištu"],

  compatibleWith: ["bageri"],

  image: "oprema/sortirne-skare/glavna",
  video: tbd("VIDEO_SORTIRNE", "Dostaviti YouTube poveznicu za sortirne škare"),

  price: { kind: "onRequest" },
} as const satisfies Attachment;
