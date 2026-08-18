"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

// Interactive campus tour — keyboard-accessible slideshow with thumbnails.
export default function VirtualTour({ images, label = "Campus tour" }: { images: string[]; label?: string }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (total === 0) return null;

  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-navy-950 shadow-soft-lg">
      <div className="relative aspect-[16/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={`${label} — photo ${index + 1} of ${total}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          <Camera className="h-3.5 w-3.5" /> {label}
        </span>
        <button
          onClick={prev}
          aria-label="Previous tour photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next tour photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <p className="absolute bottom-3 right-4 rounded-full bg-navy-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur" aria-live="polite">
          {index + 1} / {total}
        </p>
      </div>
      <div className="flex gap-2 overflow-x-auto p-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-label={`Show tour photo ${i + 1}`}
            aria-current={i === index}
            className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg transition-all ${i === index ? "ring-2 ring-gold-400" : "opacity-60 hover:opacity-100"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
