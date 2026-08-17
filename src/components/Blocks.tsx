import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  kicker,
  title,
  image,
  crumb,
}: {
  kicker: string;
  title: string;
  image: string;
  crumb?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/75 to-brand-900/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <nav className="text-xs sm:text-sm text-brand-100/80 mb-4 flex items-center gap-1.5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent-400">Home</Link>
          {crumb && (
            <>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href={crumb.href} className="hover:text-accent-400">{crumb.label}</Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent-400">{title}</span>
        </nav>
        <p className="text-accent-400 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">{kicker}</p>
        <h1 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-3xl leading-tight">{title}</h1>
      </div>
    </section>
  );
}

export function SectionHeading({ kicker, title, subtitle, center = true }: { kicker?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-10 sm:mb-12`}>
      {kicker && <p className="text-accent-600 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">{kicker}</p>}
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink-900 leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-ink-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="bg-brand-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,204,41,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 text-center">
        <h2 className="text-white font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
          Start your child&apos;s journey with Orbis
        </h2>
        <p className="text-brand-100/85 mb-8 max-w-xl mx-auto">
          Admissions open for {`2026–27`} across Keshav Nagar, Mundhwa and Gahunje. Book a campus visit or
          speak with an admission counsellor today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/admissions/enquiry" className="rounded-full bg-accent-500 px-7 py-3.5 font-bold text-brand-900 shadow-lg hover:bg-accent-400 transition-colors">
            Enquire Now
          </Link>
          <Link href="/contact" className="rounded-full border-2 border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors">
            Book a Campus Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
