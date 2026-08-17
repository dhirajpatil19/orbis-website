"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const SLIDES = [
  {
    image: "/images/hero-1.jpg",
    kicker: "Admissions Open 2026–27",
    title: "Learners today, Leaders tomorrow!",
    sub: "Experiential learning, sportsmanship and responsible leadership — CBSE education from preschool to Class 12.",
  },
  {
    image: "/images/hero-2.jpg",
    kicker: "Three Campuses in Pune",
    title: "At Orbis, enjoy experiential learning!",
    sub: "Keshav Nagar · Mundhwa · Gahunje — a complete Pre-primary to Class 12 journey.",
  },
  {
    image: "/images/hero-3.jpg",
    kicker: "NCC Empowering Youth",
    title: "Together We Thrive",
    sub: "Discipline, leadership and service — co-scholastic excellence that shapes character.",
  },
];

const TRUST_CHIPS = ["CBSE Board", "3 Campuses in Pune", "Preschool → Class 12"];

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
      className="relative h-[600px] sm:h-[680px] overflow-hidden"
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
          <img
            src={s.image}
            alt=""
            className={`h-full w-full object-cover ${i === index ? "animate-ken-burns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/70 to-brand-900/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 h-full flex flex-col justify-center">
            {i === index && (
              <div key={`content-${i}`} className="max-w-2xl">
                <span className="animate-hero-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-bold text-accent-300 uppercase tracking-[0.2em]">
                  <Sparkles className="h-4 w-4" />
                  {s.kicker}
                </span>
                <h1
                  className="animate-hero-fade-up text-white font-display text-4xl sm:text-6xl font-semibold max-w-2xl leading-[1.08] mt-5 mb-5"
                  style={{ animationDelay: "120ms" }}
                >
                  {s.title}
                </h1>
                <p
                  className="animate-hero-fade-up text-brand-100/90 max-w-xl text-base sm:text-lg leading-relaxed mb-8"
                  style={{ animationDelay: "240ms" }}
                >
                  {s.sub}
                </p>
                <div className="animate-hero-fade-up flex flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
                  <Link
                    href="/admissions/enquiry"
                    className="rounded-full bg-accent-500 px-8 py-3.5 font-bold text-brand-900 shadow-xl shadow-accent-500/20 hover:bg-accent-400 hover:-translate-y-0.5 transition-all"
                  >
                    Enquire Now
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-8 py-3.5 font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    Book a Campus Visit
                  </Link>
                </div>
                <div className="animate-hero-fade-up mt-10 flex flex-wrap gap-2" style={{ animationDelay: "480ms" }}>
                  {TRUST_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-white/10 border border-white/15 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white/90"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

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
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-accent-500" : "w-2.5 bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
