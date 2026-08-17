"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

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

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[560px] sm:h-[620px] overflow-hidden" aria-label="Highlights">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-hidden={i !== index}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/70 to-brand-900/30" />
          <div className="relative mx-auto max-w-7xl px-4 h-full flex flex-col justify-center">
            <p className="text-accent-400 font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">{s.kicker}</p>
            <h1 className="text-white font-display text-3xl sm:text-5xl lg:text-6xl font-semibold max-w-2xl leading-tight mb-5">
              {s.title}
            </h1>
            <p className="text-brand-100/90 max-w-xl text-sm sm:text-lg leading-relaxed mb-8">{s.sub}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions/enquiry" className="rounded-full bg-accent-500 px-7 py-3.5 font-bold text-brand-900 shadow-lg hover:bg-accent-400 transition-colors">
                Enquire Now
              </Link>
              <Link href="/contact" className="rounded-full border-2 border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors">
                Book a Campus Visit
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/25 backdrop-blur transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/25 backdrop-blur transition-colors"
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
