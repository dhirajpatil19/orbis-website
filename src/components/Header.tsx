"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_GROUPS, SITE } from "@/content/site";
import CampusSelector from "./CampusSelector";
import EnrolDialog from "./EnrolDialog";
import MagneticButton from "./MagneticButton";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-4">
          <p className="font-medium tracking-wide truncate">
            {SITE.tagline} · <span className="text-gold-400">{SITE.motto}</span>
          </p>
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
            <a href="https://www.theorbisschool.com" className="hover:text-gold-400 transition-colors" target="_blank" rel="noreferrer">
              Parent / ERP Portal
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy-100 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-navy-900/5" : "shadow-sm"}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="The Orbis School — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.logo} alt="The Orbis School logo" className="h-11 w-11 object-contain" width={44} height={44} />
              <span className="leading-tight hidden sm:block">
                <span className="block font-display text-lg font-semibold text-navy-900">The Orbis School</span>
                <span className="block text-[11px] text-ink-400 tracking-wide">CBSE · Pune · {SITE.range}</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {NAV_GROUPS.map((g) => (
                <div key={g.label} className="relative group">
                  <Link
                    href={g.href}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-ink-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                  >
                    {g.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="rounded-2xl bg-white border border-navy-100 shadow-soft-lg p-2">
                      {g.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2.5 rounded-xl text-sm text-ink-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <CampusSelector />
              <MagneticButton>
                <EnrolDialog
                  trigger={
                    <button
                      type="button"
                      className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 shadow-sm hover:bg-gold-400 transition-colors"
                    >
                      Enrol Now
                    </button>
                  }
                />
              </MagneticButton>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-navy-50"
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
          <nav className="lg:hidden border-t border-navy-100 bg-white max-h-[75vh] overflow-y-auto" aria-label="Mobile">
            <div className="px-4 py-3 space-y-1">
              <div className="pb-2">
                <CampusSelector />
              </div>
              {NAV_GROUPS.map((g) => (
                <div key={g.label} className="border-b border-navy-50 last:border-0">
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold text-navy-900"
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
                          className="block py-2 pl-3 text-sm text-ink-600 hover:text-navy-900"
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <EnrolDialog
                trigger={
                  <button
                    type="button"
                    className="mt-3 block w-full rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-bold text-navy-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    Enrol Now
                  </button>
                }
              />
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
