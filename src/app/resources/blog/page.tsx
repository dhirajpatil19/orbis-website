import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { POSTS } from "@/content/posts";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog — Insights for Parents",
  description:
    "Articles and guides from The Orbis School for parents — admissions, future skills, preschool guidance and CBSE insights.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <section className="relative bg-navy-950 py-16 sm:py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <p className="inline-flex items-center gap-2 text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Resources
          </p>
          <h1 className="text-white font-display text-4xl sm:text-5xl font-semibold max-w-2xl leading-tight">The Orbis Blog</h1>
          <p className="mt-4 text-navy-100/85 max-w-xl text-base sm:text-lg">Insights for parents on admissions, future skills and childhood learning.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Featured post */}
          {featured && (
            <Reveal>
              <Link href={`/resources/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-0 rounded-[1.5rem] overflow-hidden bg-white border border-navy-100 shadow-soft hover:shadow-soft-lg transition-all mb-10">
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featured.cover} alt="" className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">
                    <CalendarDays className="h-4 w-4" /> {featured.date} · Latest
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-900 leading-tight mb-4 group-hover:text-emerald-700 transition-colors">{featured.title}</h2>
                  <p className="text-ink-600 leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.tags.map((t) => (
                      <span key={t} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 font-semibold text-emerald-700">
                    Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link href={`/resources/blog/${p.slug}`} className="group block rounded-[1.5rem] bg-white border border-navy-100 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1.5 overflow-hidden h-full">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.cover} alt="" loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-emerald-600 mb-2">{p.date}</p>
                    <h2 className="font-display text-lg font-semibold text-navy-900 leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">{p.title}</h2>
                    <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">{p.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
