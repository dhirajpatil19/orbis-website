import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { PageHero, CTABand } from "@/components/Blocks";
import Reveal from "@/components/Reveal";
import FAQAccordion from "@/components/FAQAccordion";
import { EnquiryForm, ContactForm } from "@/components/Forms";
import { PAGES, getPage } from "@/content/pages";
import { CAMPUSES, getCampus } from "@/content/campuses";
import { TESTIMONIALS } from "@/content/testimonials";
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
    // Avoid "| The Orbis School | The Orbis School": the layout template appends
    // the suffix, so strip it from metaTitles that already include it.
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
          className="group block overflow-hidden rounded-2xl bg-brand-50 aspect-[4/3]"
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
      <div className="sticky top-28 rounded-3xl bg-white border border-brand-100 shadow-sm p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-3">In This Section</p>
        <nav className="space-y-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                path === l.href
                  ? "bg-brand-700 text-white font-semibold"
                  : "text-ink-600 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/admissions/enquiry"
          className="mt-5 block rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-bold text-brand-900 hover:bg-accent-400 transition-colors"
        >
          Admission Enquiry
        </Link>
      </div>
    </aside>
  );
}

function CampusDetail({ campus }: { campus: (typeof CAMPUSES)[number] }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={campus.image} alt={`${campus.name} campus`} className="rounded-3xl shadow-lg w-full aspect-[4/3] object-cover" />
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-3xl bg-white border border-brand-100 shadow-sm p-6 h-full">
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">Visit {campus.shortName}</h2>
            <ul className="space-y-3 text-sm text-ink-600">
              <li className="flex gap-2.5"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-700" /> {campus.address}</li>
              {campus.phones.map((p) => (
                <li key={p} className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-brand-700" /> {p}</li>
              ))}
              <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-brand-700" /> {campus.email}</li>
            </ul>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CAMPUS_SUBPAGES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <Link
              href={`/campuses/${campus.slug}/${s.slug}`}
              className="group block rounded-3xl bg-white border border-brand-100 p-6 shadow-sm hover:shadow-lg hover:border-brand-400 transition-all hover:-translate-y-1 h-full"
            >
              <h3 className="font-display font-semibold text-ink-900 group-hover:text-brand-700">{s.title}</h3>
              <p className="text-sm text-ink-600 mt-2 leading-relaxed">Learn more about {s.title.toLowerCase()} at {campus.shortName}.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Explore <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function CampusSubPage({ campus, sub }: { campus: (typeof CAMPUSES)[number]; sub: (typeof CAMPUS_SUBPAGES)[number] }) {
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
    <div className="space-y-6">
      {blocks.map((b) => (
        <Reveal key={b.heading}>
          <div className="rounded-3xl bg-white border border-brand-100 shadow-sm p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-3">{b.heading}</h2>
            <p className="text-ink-600 leading-relaxed">{b.body}</p>
          </div>
        </Reveal>
      ))}
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
    const crumb = { label: "Campuses", href: "/campuses/keshav-nagar" };
    return (
      <>
        <PageHero kicker="Campus" title={campus.name} image={campus.image} crumb={crumb} />
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <p className="max-w-3xl text-lg text-ink-600 leading-relaxed mb-10">{campus.blurb}</p>
            </Reveal>
            <CampusDetail campus={campus} />
          </div>
        </section>
        <CTABand />
      </>
    );
  }

  // Campus sub-pages
  if (slug[0] === "campuses" && slug.length === 3) {
    const campus = getCampus(slug[1]);
    const sub = CAMPUS_SUBPAGES.find((s) => s.slug === slug[2]);
    if (!campus || !sub) notFound();
    return (
      <>
        <PageHero kicker={`${campus.shortName} · ${sub.title}`} title={sub.title} image={campus.image} crumb={{ label: campus.shortName, href: `/campuses/${campus.slug}` }} />
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <CampusSubPage campus={campus} sub={sub} />
          </div>
        </section>
        <CTABand />
      </>
    );
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
                    <figure className="rounded-3xl bg-white border border-brand-100 p-6 shadow-sm h-full">
                      <div className="text-accent-500 text-2xl leading-none mb-3" aria-hidden="true">“</div>
                      <blockquote className="text-sm sm:text-base text-ink-600 leading-relaxed mb-5">{t.quote}</blockquote>
                      <figcaption>
                        <p className="font-semibold text-ink-900 text-sm">{t.author}</p>
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
                    <div className="rounded-3xl bg-white border border-brand-100 shadow-sm p-6 sm:p-8">
                      {b.heading && <h2 className="font-display text-xl font-semibold text-ink-900 mb-3">{b.heading}</h2>}
                      <p className="text-ink-600 leading-relaxed">{b.body}</p>
                      {b.bullets && (
                        <ul className="mt-4 space-y-2">
                          {b.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2.5 text-ink-600 leading-relaxed">
                              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
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
