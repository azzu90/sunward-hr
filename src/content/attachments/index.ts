import "server-only";

import type { Attachment } from "../types";
import { hidraulickiCekic } from "./hidraulicki-cekic";

/**
 * Dodatna oprema — die Kategorie, die es auf sunward.eu nicht gibt und
 * die Zorans Alleinstellungsmerkmal ist (CLAUDE.md §5).
 *
 * Phase 1: ein Seed. Phase 2 ergänzt die übrigen neun.
 */
export const attachments: readonly Attachment[] = [hidraulickiCekic].sort(
  (a, b) => a.order - b.order,
);

export function getAttachment(slug: string): Attachment | undefined {
  return attachments.find((a) => a.slug === slug);
}
