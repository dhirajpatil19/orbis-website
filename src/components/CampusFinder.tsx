"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { CAMPUSES } from "@/content/campuses";
import { campusAccent } from "@/content/accents";

// Dynamic "Campus Finder" — filters franchise locations in real time.
export default function CampusFinder() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CAMPUSES;
    return CAMPUSES.filter((c) =>
      [c.shortName, c.name, c.address, c.blurb].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-400" aria-hidden="true" />
        <label htmlFor="campus-finder" className="sr-only">
          Search campuses by name or area
        </label>
        <input
          id="campus-finder"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by campus or area — e.g. Mundhwa, Gahunje…"
          className="w-full rounded-full border border-navy-200 bg-white py-4 pl-13 pr-5 text-base text-ink-900 shadow-soft placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <p className="mt-4 text-sm text-ink-400" role="status" aria-live="polite">
        {results.length === 0
          ? "No campuses match — try another area."
          : `${results.length} campus${results.length === 1 ? "" : "es"} found`}
      </p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((c) => {
          const accent = campusAccent(c.slug);
          return (
            <li key={c.slug} className="@container">
              <Link
                href={`/campuses/${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-navy-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={`${c.shortName} campus`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold"
                    style={{ backgroundColor: accent.soft, color: accent.hex }}
                  >
                    {c.shortName}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-[var(--campus)] transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-400">
                    <MapPin className="h-3.5 w-3.5" /> {c.address.split(",").slice(0, 2).join(",")}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-ink-600 leading-relaxed">{c.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: accent.hex }}>
                    Explore campus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
