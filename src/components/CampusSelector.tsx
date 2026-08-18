"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, School } from "lucide-react";
import { CAMPUSES } from "@/content/campuses";
import { campusAccent } from "@/content/accents";

// Global "Campus Selector" — jump between franchise hubs from anywhere.
export default function CampusSelector() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 rounded-full border border-navy-200/70 px-4 py-2 text-sm font-semibold text-navy-800 hover:border-navy-500 hover:bg-navy-50 transition-colors"
      >
        <School className="h-4 w-4" />
        <span className="hidden sm:inline">Select Campus</span>
        <span className="sm:hidden">Campuses</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Choose a campus"
          className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-navy-100 bg-white p-2 shadow-soft-lg"
        >
          <p className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-ink-400">
            Our Campuses in Pune
          </p>
          {CAMPUSES.map((c) => {
            const accent = campusAccent(c.slug);
            return (
              <Link
                key={c.slug}
                href={`/campuses/${c.slug}`}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-navy-50 transition-colors"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: accent.hex }}
                  aria-hidden="true"
                />
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-navy-900">{c.shortName}</span>
                  <span className="flex items-center gap-1 text-xs text-ink-400 truncate">
                    <MapPin className="h-3 w-3" /> {c.address.split(",")[0]}
                  </span>
                </span>
                <span
                  className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                  style={{ backgroundColor: accent.soft, color: accent.hex }}
                >
                  {c.slug === "keshav-nagar" ? "Flagship" : c.slug === "mundhwa" ? "Mundhwa" : "Gahunje"}
                </span>
              </Link>
            );
          })}
          <Link
            href="/#campuses"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-navy-900 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            Compare all campuses →
          </Link>
        </div>
      )}
    </div>
  );
}
