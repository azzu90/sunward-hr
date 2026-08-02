import { isTbd, val } from "@/content/placeholder";
import { ui } from "@/content/ui";
import type { Spec, YouTubeId } from "@/content/types";

/**
 * YouTube-Einbindung. Zoran liefert die Links nach (CLAUDE.md §5).
 *
 * Solange nur ein Platzhalter-Token vorliegt, wird die Fläche in korrektem
 * 16/9 reserviert und der Token angezeigt — dadurch ist beim Nachliefern
 * sofort klar, welches Video wohin gehört.
 */
export function SiteVideo({ id, title }: { id?: Spec<YouTubeId>; title: string }) {
  if (!id || isTbd(id)) {
    const token = id ? val(id) : "";
    return (
      <div
        className="flex aspect-video w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-line bg-surface-alt p-4 text-center"
        data-placeholder="video"
      >
        <p className="text-sm font-medium text-ink-body">{ui.media.videoPending}</p>
        <p className="text-xs text-ink-muted">{ui.media.videoPendingHint}</p>
        {token ? <code className="text-[10px] text-ink-muted">{token}</code> : null}
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden bg-shell">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${val(id)}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
