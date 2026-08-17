import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CalendarDays, Tag, ArrowRight } from "lucide-react";
import { getPost, POSTS } from "@/content/posts";
import { CTABand } from "@/components/Blocks";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-brand-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-3xl px-4 relative">
          <nav className="text-xs sm:text-sm text-brand-100/80 mb-6 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="rounded-full bg-white/10 border border-white/15 backdrop-blur-md px-3 py-1.5 hover:text-accent-400 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-brand-100/60" />
            <Link href="/resources/blog" className="rounded-full bg-white/10 border border-white/15 backdrop-blur-md px-3 py-1.5 hover:text-accent-400 transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5 text-brand-100/60" />
            <span className="text-accent-400 font-semibold px-1">Article</span>
          </nav>
          <p className="inline-flex items-center gap-2 text-accent-400 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> From Our Blog
          </p>
          <h1 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-brand-100/85">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Tag className="h-4 w-4" /> {post.tags.join(", ")}</span>
          </div>
        </div>
      </section>

      <article className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-[2rem] overflow-hidden shadow-xl mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt="" className="w-full aspect-[16/8] object-cover" />
          </div>
          <div className="space-y-6">
            {post.body.map((para, i) => (
              <p key={i} className={`text-base sm:text-lg leading-relaxed ${i === 0 ? "text-ink-900 first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:text-brand-700 first-letter:float-left first-letter:mr-3 first-letter:mt-1" : "text-ink-600"}`}>
                {para}
              </p>
            ))}
          </div>
          <div className="mt-12 pt-6 border-t border-brand-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">{t}</span>
              ))}
            </div>
            <Link href="/resources/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600">
              Back to blog <ArrowRight className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </article>

      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 mb-8">Keep Reading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/resources/blog/${p.slug}`} className="group block rounded-3xl border border-brand-100 bg-paper p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <p className="text-xs font-semibold text-accent-600 mb-2">{p.date}</p>
                <h3 className="font-display font-semibold text-ink-900 leading-snug group-hover:text-brand-700 transition-colors">{p.title}</h3>
                <p className="text-sm text-ink-600 mt-2 leading-relaxed line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
