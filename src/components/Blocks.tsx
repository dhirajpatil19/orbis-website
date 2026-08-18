import Link from "next/link";
import { ChevronRight, CalendarCheck, PhoneCall } from "lucide-react";
import MagneticButton from "./MagneticButton";

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
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/45" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 blob bg-gold-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <nav className="text-xs sm:text-sm text-navy-100/80 mb-6 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="rounded-full glass px-3 py-1.5 hover:text-gold-400 transition-colors">
            Home
          </Link>
          {crumb && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-navy-100/60" />
              <Link href={crumb.href} className="rounded-full glass px-3 py-1.5 hover:text-gold-400 transition-colors">
                {crumb.label}
              </Link>
            </>
          )}
          <ChevronRight className="h-3.5 w-3.5 text-navy-100/60" />
          <span className="text-gold-400 font-semibold px-1">{title}</span>
        </nav>
        <p className="text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">{kicker}</p>
        <h1 className="text-white font-display text-4xl sm:text-5xl font-semibold max-w-3xl leading-tight">{title}</h1>
      </div>
    </section>
  );
}

export function SectionHeading({ kicker, title, subtitle, center = true }: { kicker?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-10 sm:mb-14`}>
      {kicker && (
        <p className={`inline-flex items-center gap-2 text-emerald-600 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 ${center ? "" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 leading-tight">{title}</h2>
      {center && <span className="mx-auto mt-5 block h-1.5 w-16 rounded-full bg-gradient-to-r from-gold-500 via-emerald-500 to-navy-500" aria-hidden="true" />}
      {subtitle && <p className="mt-4 text-ink-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,181,74,0.18),transparent_55%)]" />
      <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -top-20 right-10 h-72 w-72 blob bg-gold-500/12 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 sm:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold text-gold-400 uppercase tracking-[0.2em]">
          <CalendarCheck className="h-4 w-4" />
          Admissions Open {`2026–27`}
        </span>
        <h2 className="text-white font-display text-3xl sm:text-5xl font-semibold leading-tight mt-6 mb-5">
          Start your child&apos;s journey with Orbis
        </h2>
        <p className="text-navy-100/85 mb-9 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Book a campus visit or speak with an admission counsellor at Keshav Nagar, Mundhwa or Gahunje today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton>
            <Link href="/#campuses" className="inline-flex rounded-full bg-gold-500 px-8 py-4 font-bold text-navy-900 shadow-xl shadow-gold-500/20 hover:bg-gold-400 transition-colors">
              Explore Campuses
            </Link>
          </MagneticButton>
          <Link href="/contact" className="rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
            Book a Campus Visit
          </Link>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-navy-100/70">
          <PhoneCall className="h-4 w-4" /> Or call us directly — we&apos;re happy to help.
        </p>
      </div>
    </section>
  );
}
