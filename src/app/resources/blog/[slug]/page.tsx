import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CalendarDays, Tag } from "lucide-react";
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
      <section className="bg-brand-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <nav className="text-xs sm:text-sm text-brand-100/80 mb-5 flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent-400">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/resources/blog" className="hover:text-accent-400">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-accent-400">Article</span>
          </nav>
          <p className="text-accent-400 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">From Our Blog</p>
          <h1 className="text-white font-display text-2xl sm:text-4xl font-semibold leading-tight">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-brand-100/85">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Tag className="h-4 w-4" /> {post.tags.join(", ")}</span>
          </div>
        </div>
      </section>

      <article className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.cover} alt="" className="w-full aspect-[16/7] object-cover rounded-3xl shadow-lg mb-10" />
          <div className="space-y-6">
            {post.body.map((para, i) => (
              <p key={i} className="text-base sm:text-lg text-ink-600 leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{t}</span>
            ))}
          </div>
        </div>
      </article>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-semibold text-ink-900 mb-8">Keep Reading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/resources/blog/${p.slug}`} className="group block rounded-3xl border border-brand-100 p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <p className="text-xs font-semibold text-accent-600 mb-2">{p.date}</p>
                <h3 className="font-display font-semibold text-ink-900 leading-snug group-hover:text-brand-700">{p.title}</h3>
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
