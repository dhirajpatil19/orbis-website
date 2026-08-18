"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, GraduationCap, MapPin, CalendarCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";

const SLIDES = [
  {
    image: "/images/slider_images/OrbisMainwebsite.jpg",
    kicker: "Admissions Open 2026–27",
    title: "Learners today, Leaders tomorrow!",
    sub: "A premium CBSE network across Pune — experiential learning, sportsmanship and responsible leadership from preschool to Class 12.",
  },
  {
    image: "/images/slider_images/OrbisMainwebsite2.jpg",
    kicker: "Three Campuses in Pune",
    title: "At Orbis, enjoy experiential learning!",
    sub: "Keshav Nagar · Mundhwa · Gahunje — a complete Pre-primary to Class 12 journey.",
  },
  {
    image: "/images/slider_images/OrbisMainwebsite1.jpg",
    kicker: "NCC Empowering Youth",
    title: "Together We Thrive",
    sub: "Discipline, leadership and service — co-scholastic excellence that shapes character.",
  },
];

const TRUST_CHIPS = [
  { icon: GraduationCap, label: "CBSE Board" },
  { icon: MapPin, label: "3 Campuses in Pune" },
  { icon: CalendarCheck, label: "Preschool → Class 12" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [next, paused]);

  return (
    <section
      className="relative h-[620px] sm:h-[700px] overflow-hidden bg-navy-950"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-hidden={i !== index}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.image} alt="" className={`h-full w-full object-cover ${i === index ? "animate-ken-burns" : ""}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/75 to-navy-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 h-full flex flex-col justify-center">
            {i === index && (
              <div key={`content-${i}`} className="max-w-2xl">
                <span className="animate-hero-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm font-bold text-gold-400 uppercase tracking-[0.2em]">
                  <Sparkles className="h-4 w-4" />
                  {s.kicker}
                </span>
                <h1
                  className="animate-hero-fade-up text-white font-display text-4xl sm:text-6xl font-semibold max-w-2xl leading-[1.06] mt-5 mb-5"
                  style={{ animationDelay: "120ms" }}
                >
                  {s.title}
                </h1>
                <p
                  className="animate-hero-fade-up text-navy-100/90 max-w-xl text-base sm:text-lg leading-relaxed mb-8"
                  style={{ animationDelay: "240ms" }}
                >
                  {s.sub}
                </p>
                <div className="animate-hero-fade-up flex flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
                  <MagneticButton>
                    <Link
                      href="/#campuses"
                      className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-bold text-navy-900 shadow-xl shadow-gold-500/20 hover:bg-gold-400 transition-colors"
                    >
                      Explore Campuses
                    </Link>
                  </MagneticButton>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-colors"
                  >
                    Book a Campus Visit
                  </Link>
                </div>
                <div className="animate-hero-fade-up mt-10 flex flex-wrap gap-2" style={{ animationDelay: "480ms" }}>
                  {TRUST_CHIPS.map((chip) => (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-xs font-semibold text-white/90"
                    >
                      <chip.icon className="h-3.5 w-3.5 text-gold-400" /> {chip.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="absolute -left-28 top-20 h-80 w-80 blob bg-emerald-500/15 blur-2xl" aria-hidden="true" />
      <div className="absolute right-0 bottom-0 h-64 w-64 blob bg-gold-500/10 blur-2xl" aria-hidden="true" />

      <button
        onClick={prev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 backdrop-blur-md border border-white/15 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 backdrop-blur-md border border-white/15 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-gold-500" : "w-2.5 bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute right-6 sm:right-14 bottom-24 hidden md:block animate-float-soft z-10">
        <div className="rounded-3xl glass px-6 py-5 text-white shadow-soft-lg">
          <p className="font-display text-3xl font-semibold text-gold-400">3000+</p>
          <p className="text-xs text-white/85 mt-1">Students across 3 campuses</p>
        </div>
      </div>
    </section>
  );
}
