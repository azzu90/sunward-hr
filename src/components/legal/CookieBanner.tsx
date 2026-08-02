"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { isBuilt, routes } from "@/content/routes";
import { ui } from "@/content/ui";

/**
 * Cookie-Banner (CLAUDE.md §8).
 *
 * Der localStorage-Schlüssel ist bewusst domain-spezifisch und damit von
 * drvosped.hr getrennt — eine Einwilligung dort gilt hier nicht.
 *
 * Gelesen wird über useSyncExternalStore statt über setState im Effect:
 * localStorage IST ein externer Store, und das ist die dafür vorgesehene
 * API. Der Server-Snapshot liefert „bereits entschieden", damit im
 * SSR-HTML kein Banner steckt und es keine Hydration-Abweichung gibt.
 */
const STORAGE_KEY = "sunward-hr-cookie-consent";

export type ConsentValue = "all" | "necessary";

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  // Auch auf Änderungen aus anderen Tabs reagieren.
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): string | null {
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot(): string | null {
  return "ssr";
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function choose(value: ConsentValue) {
    window.localStorage.setItem(STORAGE_KEY, value);
    emit();
  }

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label={ui.cookies.heading}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface shadow-[0_-4px_16px_rgba(20,33,43,0.12)]"
    >
      <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-ink-body">
          {ui.cookies.body}
          {/* Die Datenschutzseite entsteht erst in Phase 2 — bis dahin kein
              Link, statt eines Links auf einen 404. */}
          {isBuilt(routes.privatnost()) ? (
            <>
              {" "}
              <Link href={routes.privatnost()} className="text-brand-text underline">
                {ui.cookies.moreInfo}
              </Link>
            </>
          ) : null}
        </p>
        <div className="flex flex-none gap-2">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="border border-line-strong px-4 py-2 text-sm font-bold text-ink-body hover:bg-surface-alt"
          >
            {ui.cookies.necessaryOnly}
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="bg-brand-strong px-4 py-2 text-sm font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
          >
            {ui.cookies.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
