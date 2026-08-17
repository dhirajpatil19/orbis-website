import Link from "next/link";
import { ChevronRight, CalendarCheck, PhoneCall } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/45" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <nav className="text-xs sm:text-sm text-brand-100/80 mb-6 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="rounded-full bg-white/10 border border-white/15 backdrop-blur-md px-3 py-1.5 hover:text-accent-400 transition-colors">
            Home
          </Link>
          {crumb && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-brand-100/60" />
              <Link href={crumb.href} className="rounded-full bg-white/10 border border-white/15 backdrop-blur-md px-3 py-1.5 hover:text-accent-400 transition-colors">
                {crumb.label}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5 text-brand-100/60" />
          <span className="text-accent-400 font-semibold px-1">{title}</span>
        </nav>
        <p className="text-accent-400 font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">{kicker}</p>
        <h1 className="text-white font-display text-4xl sm:text-5xl font-semibold max-w-3xl leading-tight">{title}</h1>
      </div>
    </section>
  );
}

export function SectionHeading({ kicker, title, subtitle, center = true }: { kicker?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-10 sm:mb-14`}>
      {kicker && (
        <p className={`inline-flex items-center gap-2 text-accent-600 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 ${center ? "" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-ink-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,204,41,0.18),transparent_55%)]" />
      <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 sm:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-accent-300 uppercase tracking-[0.2em]">
          <CalendarCheck className="h-4 w-4" />
          Admissions Open {`2026–27`}
        </span>
        <h2 className="text-white font-display text-3xl sm:text-5xl font-semibold leading-tight mt-6 mb-5">
          Start your child&apos;s journey with Orbis
        </h2>
        <p className="text-brand-100/85 mb-9 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Book a campus visit or speak with an admission counsellor at Keshav Nagar, Mundhwa or Gahunje today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/admissions/enquiry" className="rounded-full bg-accent-500 px-8 py-4 font-bold text-brand-900 shadow-xl shadow-accent-500/20 hover:bg-accent-400 hover:-translate-y-0.5 transition-all">
            Enquire Now
          </Link>
          <Link href="/contact" className="rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
            Book a Campus Visit
          </Link>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-brand-100/70">
          <PhoneCall className="h-4 w-4" /> Or call us directly — we&apos;re happy to help.
        </p>
      </div>
    </section>
  );
}
