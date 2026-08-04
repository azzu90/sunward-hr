"use client";

import Link from "next/link";
import { useState } from "react";

import { mainNav } from "@/content/nav";
import { ui } from "@/content/ui";

/**
 * Mobile Navigation. Bewusst ohne Bibliothek — ein useState und ein
 * <ul> reichen; jede Dialog-Library wäre hier reines Bundle-Gewicht.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Orange Fläche mit dunklen Balken — auf sunward.eu ist der Toggle
          orange. Die Balken bleiben trotzdem --color-on-accent (#14212b)
          statt Weiss: Weiss auf #f39a2e ergibt 2,21:1 und reisst die
          3:1-Schwelle von WCAG 1.4.11 für grafische Objekte, dieser Ton
          7,26:1. Dieselbe bewusste Abweichung wie bei allen orangen CTAs.
          Der graue Rahmen entfällt — auf der Fläche nur noch Rauschen. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="flex size-9 items-center justify-center rounded-ui bg-accent text-on-accent hover:bg-accent-strong"
      >
        <span className="sr-only">{open ? ui.nav.mobileClose : ui.nav.mobileOpen}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="size-5"
          aria-hidden="true"
        >
          {open ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label={ui.nav.main}
          className="absolute inset-x-0 z-40 border-t border-line bg-surface px-4 pb-4 shadow-lg"
        >
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.id} className="border-b border-line last:border-0">
                <Link
                  href={item.href ?? "#"}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
