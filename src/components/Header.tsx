"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_GROUPS, SITE } from "@/content/site";

export default function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-900 text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-4">
          <p className="font-medium tracking-wide">
            {SITE.tagline} · <span className="text-accent-400">{SITE.motto}</span>
          </p>
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-accent-400">
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
            <a href="https://www.theorbisschool.com" className="hover:text-accent-400" target="_blank" rel="noreferrer">
              Parent / ERP Portal
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3" aria-label="The Orbis School — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.logo} alt="The Orbis School logo" className="h-11 w-11 object-contain" width={44} height={44} />
              <span className="leading-tight">
                <span className="block font-display text-lg sm:text-xl font-semibold text-brand-700">The Orbis School</span>
                <span className="block text-[11px] sm:text-xs text-ink-400 tracking-wide">CBSE · Pune · {SITE.range}</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {NAV_GROUPS.map((g) => (
                <div key={g.label} className="relative group" onMouseEnter={() => setOpenGroup(g.label)} onMouseLeave={() => setOpenGroup(null)}>
                  <Link
                    href={g.href}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  >
                    {g.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                  {openGroup === g.label && (
                    <div className="absolute left-0 top-full pt-2 w-64">
                      <div className="rounded-2xl bg-white border border-brand-100 shadow-xl p-2">
                        {g.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-4 py-2.5 rounded-xl text-sm text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admissions/enquiry"
                className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-brand-900 shadow-sm hover:bg-accent-400 transition-colors"
              >
                Admission Enquiry
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-brand-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-brand-100 bg-white max-h-[70vh] overflow-y-auto" aria-label="Mobile">
            <div className="px-4 py-3 space-y-1">
              {NAV_GROUPS.map((g) => (
                <div key={g.label} className="border-b border-brand-50 last:border-0">
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold text-ink-900"
                    onClick={() => setMobileGroup(mobileGroup === g.label ? null : g.label)}
                    aria-expanded={mobileGroup === g.label}
                  >
                    {g.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileGroup === g.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileGroup === g.label && (
                    <div className="pb-2 space-y-0.5">
                      {g.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block py-2 pl-3 text-sm text-ink-600 hover:text-brand-700"
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/admissions/enquiry"
                className="mt-3 block rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-bold text-brand-900"
                onClick={() => setMobileOpen(false)}
              >
                Admission Enquiry
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
