import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/content/posts";
import { SectionHeading } from "@/components/Blocks";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog — Insights for Parents",
  description:
    "Articles and guides from The Orbis School for parents — admissions, future skills, preschool guidance and CBSE insights.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-accent-400 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">Resources</p>
          <h1 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">The Orbis Blog</h1>
          <p className="mt-4 text-brand-100/85 max-w-xl">Insights for parents on admissions, future skills and childhood learning.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link href={`/resources/blog/${p.slug}`} className="group block rounded-3xl bg-white border border-brand-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover} alt="" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-6">
                    <p className="text-xs font-semibold text-accent-600 mb-2">{p.date}</p>
                    <h2 className="font-display text-lg font-semibold text-ink-900 leading-snug mb-2 group-hover:text-brand-700">{p.title}</h2>
                    <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">{p.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">{t}</span>
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
