import "server-only";

import type { Attachment } from "../types";
import { busacRupa } from "./busac-rupa";
import { hidraulickiCekic } from "./hidraulicki-cekic";
import { mjesalicaBetona } from "./mjesalica-betona";
import { mulcer } from "./mulcer";
import { powerTilt } from "./power-tilt";
import { rotoTilt } from "./roto-tilt";
import { sortirneSkare } from "./sortirne-skare";
import { sumskeSkare } from "./sumske-skare";
import { thumb } from "./thumb";
import { viliceZaBager } from "./vilice-za-bager";

/**
 * Dodatna oprema — die Kategorie, die es auf sunward.eu nicht gibt und
 * die Zorans Alleinstellungsmerkmal ist (CLAUDE.md §5).
 *
 * Alle zehn aus PRD §8.
 */
export const attachments: readonly Attachment[] = [
  hidraulickiCekic,
  thumb,
  sumskeSkare,
  busacRupa,
  rotoTilt,
  powerTilt,
  viliceZaBager,
  sortirneSkare,
  mulcer,
  mjesalicaBetona,
].sort((a, b) => a.order - b.order);

export function getAttachment(slug: string): Attachment | undefined {
  return attachments.find((a) => a.slug === slug);
}
