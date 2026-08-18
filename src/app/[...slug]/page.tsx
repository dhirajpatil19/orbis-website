import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CalendarDays,
  Bus,
  Wallet,
  Users,
} from "lucide-react";
import { PageHero, CTABand, SectionHeading } from "@/components/Blocks";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import VirtualTour from "@/components/VirtualTour";
import EnrolDialog from "@/components/EnrolDialog";
import { EnquiryForm, ContactForm } from "@/components/Forms";
import { PAGES, getPage } from "@/content/pages";
import { CAMPUSES, getCampus } from "@/content/campuses";
import { TESTIMONIALS } from "@/content/testimonials";
import { EVENTS } from "@/content/events";
import { campusAccent } from "@/content/accents";
import galleryJson from "../../../content/gallery.json";

// Campus sub-pages (each campus gets a consistent set)
const CAMPUS_SUBPAGES = [
  { slug: "key-highlights", title: "Key Highlights" },
  { slug: "principal-message", title: "Principal's Message" },
  { slug: "headmistress-message", title: "Headmistress's Message" },
  { slug: "discipline", title: "Discipline & Values" },
  { slug: "pedagogy", title: "Pedagogy" },
  { slug: "admission-inquiry", title: "Admission Inquiry" },
];

interface Props {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  const interior = PAGES.map((p) => ({ slug: p.slug.split("/") }));
  const campuses = CAMPUSES.flatMap((c) => [
    { slug: ["campuses", c.slug] },
    ...CAMPUS_SUBPAGES.map((s) => ({ slug: ["campuses", c.slug, s.slug] })),
  ]);
  return [...interior, ...campuses];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const page = getPage(path);
  if (page) {
    const metaTitle = page.metaTitle.replace(/\s*\|\s*The Orbis School\s*$/, "");
    return { title: metaTitle, description: page.metaDescription };
  }
  if (slug[0] === "campuses") {
    const campus = getCampus(slug[1] ?? "");
    if (campus) {
      return {
        title: `${campus.name} | Best CBSE School in Pune`,
        description: campus.blurb,
      };
    }
    if (slug.length === 3) {
      const campus = getCampus(slug[1] ?? "");
      const sub = CAMPUS_SUBPAGES.find((s) => s.slug === slug[2]);
      if (campus && sub) {
        return {
          title: `${sub.title} | ${campus.shortName}`,
          description: `${sub.title} at ${campus.name}, Pune — a CBSE school from preschool to Class 12.`,
        };
      }
    }
  }
  return {};
}

function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {images.map((src) => (
        <a
          key={src}
          href={src}
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden rounded-2xl bg-navy-50 aspect-[4/3]"
          aria-label="Open photo"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </a>
      ))}
    </div>
  );
}

function Sidebar({ links, path }: { links: { label: string; href: string }[]; path: string }) {
  return (
    <aside className="lg:w-72 shrink-0" aria-label="Related pages">
      <div className="sticky top-28 rounded-[1.5rem] bg-white border border-navy-100 shadow-soft p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-3">In This Section</p>
        <nav className="space-y-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                path === l.href
                  ? "bg-navy-900 text-white font-semibold"
                  : "text-ink-600 hover:bg-navy-50 hover:text-navy-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <EnrolDialog
          trigger={
            <button
              type="button"
              className="mt-5 block w-full rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-bold text-navy-900 hover:bg-gold-400 transition-colors"
            >
              Admission Enquiry
            </button>
          }
        />
      </div>
    </aside>
  );
}

// ─── Campus Hub — the reusable franchise template ───────────────────
function CampusHub({ campus }: { campus: (typeof CAMPUSES)[number] }) {
  const accent = campusAccent(campus.slug);
  const tourImages = [campus.image, "/images/about_images/Highlights.webp", "/images/about_images/celebratelearning.webp", ...galleryJson.images.slice(0, 4)];

  return (
    <div data-campus={campus.slug}>
      {/* Campus hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={campus.image} alt="" className="h-full w-full object-cover opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <nav className="text-xs sm:text-sm text-navy-100/80 mb-6 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="rounded-full glass px-3 py-1.5 hover:text-gold-400 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-navy-100/60" />
            <span className="text-gold-400 font-semibold px-1">Campuses</span>
          </nav>
          <p className="text-gold-400 font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">Campus Hub</p>
          <h1 className="text-white font-display text-4xl sm:text-5xl font-semibold max-w-3xl leading-tight">{campus.name}</h1>
          <p className="mt-4 inline-flex items-center gap-1.5 text-navy-100/85">
            <MapPin className="h-4 w-4" style={{ color: accent.hex }} /> {campus.address}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <EnrolDialog
              campus={campus.shortName}
              trigger={
                <button
                  type="button"
                  className="rounded-full px-8 py-3.5 font-bold text-white shadow-xl transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: accent.hex }}
                >
                  Enrol at {campus.shortName}
                </button>
              }
            />
            <Link
              href="/contact"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-colors"
            >
              Book a Campus Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Quick info + tour */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading center={false} kicker="About This Campus" title={campus.shortName} subtitle={campus.blurb} />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Users, label: "Students", value: "Preschool–12" },
                { icon: Bus, label: "Transport", value: "GPS-tracked" },
                { icon: Wallet, label: "Fees", value: "See structure" },
              ].map((f) => (
                <Link
                  key={f.label}
                  href={f.label === "Fees" ? "/admissions/fee-structure" : "/admissions/process"}
                  className="rounded-[1.5rem] border border-navy-100 bg-white p-5 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all"
                >
                  <f.icon className="h-5 w-5 mb-3" style={{ color: accent.hex }} />
                  <p className="text-sm font-semibold text-navy-900">{f.label}</p>
                  <p className="text-xs text-ink-400 mt-0.5">{f.value}</p>
                </Link>
              ))}
            </div>

            {/* Events for this campus */}
            <div className="mt-10">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-navy-900 mb-4">
                <CalendarDays className="h-5 w-5" style={{ color: accent.hex }} /> Upcoming
              </h3>
              <ul className="space-y-2">
                {EVENTS.slice(0, 4).map((e) => (
                  <li key={e.title} className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-3 text-sm shadow-soft">
                    <span className="rounded-full px-2.5 py-1 text-xs font-bold" style={{ backgroundColor: accent.soft, color: accent.hex }}>
                      {e.date}
                    </span>
                    {e.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-navy-900 mb-4">Take a Virtual Tour</h3>
            <VirtualTour images={tourImages} label={`${campus.shortName} campus`} />
            <div className="mt-6 rounded-[1.5rem] border border-navy-100 bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-4">Contact this campus</p>
              <ul className="space-y-3 text-sm text-ink-600">
                {campus.phones.map((p) => (
                  <li key={p} className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 mt-0.5" style={{ color: accent.hex }} /> {p}</li>
                ))}
                <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 mt-0.5" style={{ color: accent.hex }} /> {campus.email}</li>
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: accent.hex }}
              >
                Open in Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading kicker="Explore" title="Inside This Campus" subtitle="Everything parents need to know about life, learning and admissions." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMPUS_SUBPAGES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/campuses/${campus.slug}/${s.slug}`}
                  className="group block rounded-[1.5rem] bg-paper border border-navy-100 p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all h-full"
                >
                  <h3 className="font-display font-semibold text-navy-900 group-hover:[color:var(--campus)] transition-colors">{s.title}</h3>
                  <p className="text-sm text-ink-600 mt-2 leading-relaxed">Learn more about {s.title.toLowerCase()} at {campus.shortName}.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: accent.hex }}>
                    Explore <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CampusSubPage({ campus, sub }: { campus: (typeof CAMPUSES)[number]; sub: (typeof CAMPUS_SUBPAGES)[number] }) {
  const accent = campusAccent(campus.slug);
  const copy: Record<string, { heading: string; body: string }[]> = {
    "key-highlights": [
      {
        heading: `Highlights of ${campus.shortName}`,
        body: `${campus.shortName} is a complete CBSE campus from preschool to Class 12, combining modern infrastructure with a warm, values-driven community.`,
      },
      {
        heading: "What Makes This Campus Special",
        body: "Experiential learning across grades, well-equipped laboratories, sports programmes and a strong co-scholastic calendar — all within a safe, green, child-friendly environment.",
      },
    ],
    "principal-message": [
      {
        heading: "From the Principal's Desk",
        body: "Welcome to The Orbis School. Our passionate and caring teachers, supportive parents and vibrant community make Orbis a place where every child is known, challenged and cherished. We invite you to visit and experience the Orbis difference.",
      },
    ],
    "headmistress-message": [
      {
        heading: "From the Headmistress's Desk",
        body: "Welcome to The Orbis School, Gahunje. We believe every child arrives with a spark, and our role is to keep that spark alive through joyful, rigorous learning. Come and see our campus in action.",
      },
    ],
    discipline: [
      {
        heading: "Discipline & Values",
        body: "At Orbis, discipline is taught through example, clear expectations and consistent routines. We aim for self-discipline — children who understand why, not just what. Our code is simple: respect yourself, respect others, respect the environment.",
      },
    ],
    pedagogy: [
      {
        heading: "Our Pedagogy",
        body: "We blend the rigour of the CBSE curriculum with inquiry-based, experiential methods. Concept-first learning, collaborative projects, technology-enhanced classrooms and continuous assessment keep children active owners of their learning.",
      },
    ],
    "admission-inquiry": [
      {
        heading: "Seeking Admissions?",
        body: "Seeking admissions for CBSE school? Contact The Orbis School — our admission team will guide you through campus visits, counselling and the admission process. Start with the enquiry form.",
      },
    ],
  };
  const blocks = copy[sub.slug] ?? [{ heading: sub.title, body: `${sub.title} at ${campus.shortName}. Please contact the campus for details.` }];

  return (
    <div data-campus={campus.slug}>
      <PageHero kicker={`${campus.shortName} · ${sub.title}`} title={sub.title} image={campus.image} crumb={{ label: campus.shortName, href: `/campuses/${campus.slug}` }} />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-6">
            {blocks.map((b) => (
              <Reveal key={b.heading}>
                <div className="rounded-[1.5rem] bg-white border border-navy-100 p-6 sm:p-8 shadow-soft">
                  <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">{b.heading}</h2>
                  <p className="text-ink-600 leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <EnrolDialog
              campus={campus.shortName}
              trigger={
                <button
                  type="button"
                  className="rounded-full px-7 py-3.5 font-bold text-white shadow-lg hover:-translate-y-0.5 transition-transform"
                  style={{ backgroundColor: accent.hex }}
                >
                  Enrol at {campus.shortName}
                </button>
              }
            />
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export default async function InteriorPage({ params }: Props) {
  const { slug } = await params;
  const path = slug.join("/");

  // Campus main pages
  if (slug[0] === "campuses" && slug.length === 2) {
    const campus = getCampus(slug[1]);
    if (!campus) notFound();
    return (
      <>
        <CampusHub campus={campus} />
        <CTABand />
      </>
    );
  }

  // Campus sub-pages
  if (slug[0] === "campuses" && slug.length === 3) {
    const campus = getCampus(slug[1]);
    const sub = CAMPUS_SUBPAGES.find((s) => s.slug === slug[2]);
    if (!campus || !sub) notFound();
    return <CampusSubPage campus={campus} sub={sub} />;
  }

  // Interior content pages
  const page = getPage(path);
  if (!page) notFound();

  const crumbFrom = path.split("/")[0];
  const crumbLabel = { about: "About Us", admissions: "Admissions", academics: "Academics", "co-scholastic": "Co-Scholastic", life: "Life at Orbis", resources: "Resources", contact: "Contact" }[crumbFrom];

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} image={page.heroImage} crumb={crumbFrom ? { label: crumbLabel ?? "Explore", href: `/${crumbFrom}` } : undefined} />
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            {path === "about/testimonials" ? (
              <div className="grid md:grid-cols-2 gap-6">
                {TESTIMONIALS.map((t, i) => (
                  <Reveal key={t.author} delay={i * 80}>
                    <figure className="rounded-[1.5rem] bg-white border border-navy-100 p-6 shadow-soft h-full">
                      <div className="text-gold-500 text-2xl leading-none mb-3" aria-hidden="true">“</div>
                      <blockquote className="text-sm sm:text-base text-ink-600 leading-relaxed mb-5">{t.quote}</blockquote>
                      <figcaption>
                        <p className="font-semibold text-navy-900 text-sm">{t.author}</p>
                        <p className="text-xs text-ink-400">{t.role}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            ) : path === "admissions/enquiry" ? (
              <EnquiryForm />
            ) : path === "life/gallery" ? (
              <GalleryGrid images={galleryJson.images} />
            ) : path === "contact" || path === "contact/careers" || path === "contact/vendors" || path === "contact/franchise" ? (
              <ContactForm formName={path.split("/")[1] ?? "contact"} title={path === "contact/careers" ? "Apply to Join Our Team" : path === "contact/vendors" ? "Vendor Registration" : path === "contact/franchise" ? "Franchise Enquiry" : "Send Us a Message"} />
            ) : path === "resources/faqs" ? (
              <FAQAccordion
                items={[
                  { q: "When are admissions open?", a: "Admissions for 2026–27 are open at all three campuses — Keshav Nagar, Mundhwa and Gahunje. Start with the online Admission Enquiry form." },
                  { q: "What is the admission process?", a: "Fill the enquiry form, meet an admission counsellor, visit the campus, submit documents, and receive confirmation. Our team supports you at every step." },
                  { q: "Which curriculum do you follow?", a: "We follow the CBSE curriculum from preschool (age 2) through Class 12, with Science, Commerce and Humanities streams at the senior secondary level." },
                  { q: "Do you provide transport?", a: "Yes. Our GPS-tracked, staff-supervised buses cover routes across Pune, coordinated with admissions so every family can plan from day one." },
                  { q: "What facilities are available?", a: "Science, Math, AI & Robotics, Language and Computer labs; sports for cricket, football, archery, skating, basketball, TT, chess and gymnastics; and digital classrooms." },
                  { q: "How do you keep parents informed?", a: "Through the student diary, parent portal, monthly newsletter, parent-teacher meetings and direct communication with class teachers." },
                ]}
              />
            ) : (
              <div className="space-y-6">
                {page.blocks.map((b, i) => (
                  <Reveal key={i}>
                    <div className="rounded-[1.5rem] bg-white border border-navy-100 p-6 sm:p-8 shadow-soft">
                      {b.heading && <h2 className="font-display text-xl font-semibold text-navy-900 mb-3">{b.heading}</h2>}
                      <p className="text-ink-600 leading-relaxed whitespace-pre-line">{b.body}</p>
                      {b.bullets && (
                        <ul className="mt-4 space-y-2">
                          {b.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2.5 text-ink-600 leading-relaxed">
                              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          {page.sidebarLinks && page.sidebarLinks.length > 0 && <Sidebar links={page.sidebarLinks} path={path} />}
        </div>
      </section>
      <CTABand />
    </>
  );
}
