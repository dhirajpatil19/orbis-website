import Link from "next/link";
import { ArrowRight, MapPin, CalendarDays, Trophy, FlaskConical, Puzzle, Languages, Cpu, MonitorSmartphone, Music, HeartHandshake, Mic, ShieldCheck, Users, Star } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import { SectionHeading, CTABand } from "@/components/Blocks";
import { SchoolJsonLd } from "@/components/JsonLd";
import { CAMPUSES } from "@/content/campuses";
import { TESTIMONIALS } from "@/content/testimonials";
import { EVENTS, STATS } from "@/content/events";
import { POSTS } from "@/content/posts";

const JOURNEY = [
  { grade: "Preschool", age: "Age 2–5", href: "/academics/preschool", desc: "Play-based beginnings with wonder." },
  { grade: "Lower Primary", age: "Classes 1–5", href: "/academics/lower-primary", desc: "Foundations of literacy and numeracy." },
  { grade: "Upper Primary", age: "Classes 6–8", href: "/academics/upper-primary", desc: "Deepening concepts and critical thinking." },
  { grade: "Secondary", age: "Classes 9–10", href: "/academics/secondary", desc: "Rigorous CBSE preparation with mentorship." },
  { grade: "Senior Secondary", age: "Classes 11–12", href: "/academics/senior-secondary", desc: "Science, Commerce & Humanities streams." },
];

const FACILITIES = [
  { icon: Trophy, label: "Sports Grounds", desc: "Cricket, football, archery, skating, basketball, TT, chess, gymnastics" },
  { icon: FlaskConical, label: "Science & Math Labs", desc: "Well-equipped Physics, Chemistry, Biology & Math laboratories" },
  { icon: Cpu, label: "AI & Robotics Lab", desc: "State-of-the-art robotics and artificial intelligence lab" },
  { icon: MonitorSmartphone, label: "Computer & Digital Classrooms", desc: "Eco-friendly computer lab and interactive digital classrooms" },
  { icon: Languages, label: "Language Lab", desc: "Dedicated language lab for communication excellence" },
  { icon: Puzzle, label: "Experiential Learning", desc: "Project-based, hands-on learning across every grade" },
];

const CO_SCHOLASTIC = [
  { icon: Users, label: "GEP", desc: "Greater Education Programme", href: "/co-scholastic/greater-education-programme" },
  { icon: HeartHandshake, label: "SSR", desc: "Student Social Responsibility", href: "/co-scholastic/ssr" },
  { icon: Mic, label: "Literary", desc: "Debates, elocution & OrbiLoqui", href: "/co-scholastic/literary-activities" },
  { icon: ShieldCheck, label: "Leadership", desc: "Councils & house captains", href: "/co-scholastic/leadership" },
  { icon: Music, label: "OrbiEventum", desc: "Annual celebration of learning", href: "/co-scholastic/orbieventum" },
  { icon: Trophy, label: "NCC", desc: "Empowering youth", href: "/co-scholastic/ncc" },
];

export default function HomePage() {
  return (
    <>
      <SchoolJsonLd />
      <HeroSlider />

      {/* Events ticker (marquee) */}
      <div className="relative bg-accent-500 text-brand-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 uppercase tracking-wide text-xs font-bold shrink-0">
            <CalendarDays className="h-4 w-4" /> Events
          </span>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="animate-marquee flex w-max gap-3">
              {[...EVENTS, ...EVENTS].map((e, i) => (
                <span key={`${e.title}-${i}`} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-900/10 whitespace-nowrap">
                  <span className="font-bold">{e.date}</span> {e.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About intro */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-400/30 to-brand-500/20 blur-2xl" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-orbis.webp" alt="The Orbis School campus life" className="relative rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-brand-900 text-white rounded-3xl px-6 py-5 shadow-2xl animate-float-soft">
                <p className="font-display text-4xl font-semibold text-accent-400">19+</p>
                <p className="text-xs text-brand-100/80 mt-1">Years of Excellence</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              center={false}
              kicker="Why Orbis"
              title="Study in the Top CBSE School in Pune"
              subtitle="Top schools in Pune have always attracted students from all over the country and abroad. In such an environment, The Orbis Schools are the preferred choice of parents seeking admission to good schools in Pune — because 'Orbis', which comes from orb, is a metaphor for the world of possibilities we open for every child."
            />
            <p className="mb-8 text-ink-600 leading-relaxed">
              We envision a movement that celebrates learning — empowering generations of self-motivated achievers,
              questing in their chosen fields of endeavour.
            </p>
            <Link href="/about/why-orbis" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white hover:bg-brand-600 hover:-translate-y-0.5 shadow-lg shadow-brand-700/20 transition-all">
              Discover Orbis <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white py-14 sm:py-16 overflow-hidden">
        <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md px-4 py-7 hover:bg-white/10 transition-colors">
                <p className="font-display text-4xl sm:text-5xl font-semibold text-accent-400">{s.value}</p>
                <p className="mt-2 text-sm text-brand-100/85">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Campuses */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            kicker="Our Branches"
            title="Three Campuses, One Orbis Family"
            subtitle="A complete CBSE journey from preschool to Class 12 at three locations across Pune."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {CAMPUSES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 100}>
                <Link href={`/campuses/${c.slug}`} className="group block rounded-[2rem] bg-white border border-brand-100 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all hover:-translate-y-1.5 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={`${c.shortName} campus`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-brand-900 shadow-sm">
                      {c.shortName}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-ink-900 mb-2 group-hover:text-brand-700 transition-colors">{c.shortName}</h3>
                    <p className="text-sm text-ink-600 leading-relaxed mb-4 line-clamp-3">{c.blurb}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      <MapPin className="h-4 w-4" /> Pune, Maharashtra
                      <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academic journey */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            kicker="Academics"
            title="A Journey From Preschool to Class 12"
            subtitle="One seamless CBSE continuum — pedagogy evolves with every stage of your child's growth."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.grade} delay={i * 80}>
                <Link href={j.href} className="group block h-full rounded-3xl bg-white border border-brand-100 p-6 shadow-sm hover:shadow-xl hover:border-brand-400 hover:-translate-y-1.5 transition-all relative overflow-hidden">
                  <span className="absolute top-4 right-5 font-display text-5xl font-semibold text-brand-100 group-hover:text-accent-300/60 transition-colors" aria-hidden="true">
                    {i + 1}
                  </span>
                  <p className="relative text-xs font-bold uppercase tracking-wider text-accent-600 mb-3">{j.age}</p>
                  <h3 className="relative font-display text-lg font-semibold text-ink-900 mb-2 group-hover:text-brand-700 transition-colors">{j.grade}</h3>
                  <p className="relative text-sm text-ink-600 leading-relaxed">{j.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="relative py-16 sm:py-24 bg-brand-900 text-white overflow-hidden">
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <p className="inline-flex items-center gap-2 text-accent-400 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Facilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">Infrastructure That Inspires</h2>
            <p className="mt-4 text-brand-100/85">Modern classrooms, advanced laboratories and sports facilities built for every kind of learner.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.label} delay={i * 80}>
                <div className="rounded-3xl bg-white/5 border border-white/10 p-7 h-full hover:bg-white/10 hover:border-accent-500/30 transition-all">
                  <div className="rounded-2xl bg-accent-500/15 p-3 inline-flex mb-5">
                    <f.icon className="h-7 w-7 text-accent-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{f.label}</h3>
                  <p className="text-sm text-brand-100/80 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Co-scholastic strip */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            kicker="Co-Scholastic"
            title="Learning Beyond the Syllabus"
            subtitle="Sports, leadership, service and the arts — where Orbis children discover their strengths."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CO_SCHOLASTIC.map((c, i) => (
              <Reveal key={c.label} delay={i * 60}>
                <Link href={c.href} className="group flex flex-col items-center text-center rounded-3xl bg-white border border-brand-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-accent-500/40 transition-all h-full">
                  <span className="rounded-2xl bg-brand-50 p-3 mb-4 group-hover:bg-accent-500/15 transition-colors">
                    <c.icon className="h-7 w-7 text-brand-700 group-hover:text-accent-600 transition-colors" />
                  </span>
                  <p className="font-display font-semibold text-ink-900">{c.label}</p>
                  <p className="text-xs text-ink-600 mt-1 leading-snug">{c.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            kicker="Testimonials"
            title="Voices From Our Community"
            subtitle="Real words from parents about life, learning and growth at Orbis."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <figure className="rounded-[2rem] bg-paper border border-brand-100 p-7 h-full shadow-sm hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-0.5 text-accent-500 mb-4" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base text-ink-600 leading-relaxed mb-6">{t.quote}</blockquote>
                  <figcaption className="border-t border-brand-100 pt-4">
                    <p className="font-semibold text-ink-900 text-sm">{t.author}</p>
                    <p className="text-xs text-ink-400">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about/testimonials" className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3 text-brand-700 font-semibold hover:bg-brand-50 transition-colors">
              Read more testimonials <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            kicker="From Our Blog"
            title="Insights for Parents"
            subtitle="Practical guidance on admissions, future skills and childhood learning."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {POSTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link href={`/resources/blog/${p.slug}`} className="group block rounded-[2rem] bg-white border border-brand-100 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all hover:-translate-y-1.5 overflow-hidden h-full">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.cover} alt="" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-accent-600 mb-2">{p.date}</p>
                    <h3 className="font-display text-lg font-semibold text-ink-900 leading-snug mb-2 group-hover:text-brand-700 transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
