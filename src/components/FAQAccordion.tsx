"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft">
          <button
            className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left font-semibold text-navy-900 hover:bg-navy-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.q}
            <ChevronDown className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-ink-600 leading-relaxed">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
