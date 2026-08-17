// Interior pages — editable via the CMS dashboard (content/pages/**/*.md).
// Reads markdown at build time (server components + generateStaticParams only).
import fs from "node:fs";
import path from "node:path";
import { parseFrontmatter, markdownToBlocks, type ContentBlock } from "./parse";

export type { ContentBlock };

export interface SidebarLink {
  label: string;
  href: string;
}

export interface InteriorPage {
  slug: string;
  title: string;
  kicker: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  blocks: ContentBlock[];
  sidebarLinks: SidebarLink[];
}

const PAGES_DIR = path.join(process.cwd(), "content", "pages");

// Section sidebars — computed per page (mirrors the pre-CMS behaviour).
const SIDEBARS: Record<string, SidebarLink[]> = {
  about: [
    { label: "Why The Orbis School", href: "/about/why-orbis" },
    { label: "Director's Message", href: "/about/directors-message" },
    { label: "Awards & Recognitions", href: "/about/awards" },
    { label: "Knowledge Partners", href: "/about/knowledge-partners" },
    { label: "School Facilities", href: "/about/facilities" },
    { label: "Core Practices", href: "/about/core-practices" },
    { label: "Orbis Alumni", href: "/about/alumni" },
    { label: "Testimonials", href: "/about/testimonials" },
  ],
  academics: [
    { label: "CBSE Academics", href: "/academics/cbse" },
    { label: "Pedagogy", href: "/academics/pedagogy" },
    { label: "Preschool", href: "/academics/preschool" },
    { label: "Lower Primary", href: "/academics/lower-primary" },
    { label: "Upper Primary", href: "/academics/upper-primary" },
    { label: "Secondary", href: "/academics/secondary" },
    { label: "Senior Secondary", href: "/academics/senior-secondary" },
  ],
  admissions: [
    { label: "Admission Process", href: "/admissions/process" },
    { label: "Admission Enquiry", href: "/admissions/enquiry" },
    { label: "Fee Structure", href: "/admissions/fee-structure" },
    { label: "International Students", href: "/admissions/international" },
  ],
  life: [
    { label: "Events & Calendar", href: "/life/events" },
    { label: "Gallery", href: "/life/gallery" },
    { label: "School Transport", href: "/life/transport" },
    { label: "School Song", href: "/life/school-song" },
    { label: "Outdoor Activities", href: "/life/outdoor-activities" },
    { label: "Progress & Promotion", href: "/life/progress-promotion" },
    { label: "Discipline", href: "/life/discipline" },
    { label: "Student Diary Rules", href: "/life/diary-rules" },
    { label: "Monthly Newsletter", href: "/life/newsletter" },
  ],
  "co-scholastic": [
    { label: "Greater Education Programme", href: "/co-scholastic/greater-education-programme" },
    { label: "Student Social Responsibility", href: "/co-scholastic/ssr" },
    { label: "Literary Activities", href: "/co-scholastic/literary-activities" },
    { label: "Leadership", href: "/co-scholastic/leadership" },
    { label: "OrbiEventum", href: "/co-scholastic/orbieventum" },
    { label: "NCC", href: "/co-scholastic/ncc" },
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/contact/careers" },
    { label: "Vendors", href: "/contact/vendors" },
    { label: "Franchise", href: "/contact/franchise" },
  ],
};

function sidebarFor(slug: string): SidebarLink[] {
  const section = slug.split("/")[0];
  const links = SIDEBARS[section] ?? [];
  return links.filter((l) => l.href !== `/${slug}`);
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

function loadPages(): InteriorPage[] {
  if (!fs.existsSync(PAGES_DIR)) return [];
  return walk(PAGES_DIR)
    .map((file) => {
      const raw = fs.readFileSync(file, "utf8");
      const { data, body } = parseFrontmatter(raw);
      const slug = String(data.slug ?? "").trim();
      return {
        slug,
        title: String(data.title ?? ""),
        kicker: String(data.kicker ?? ""),
        metaTitle: String(data.metaTitle ?? ""),
        metaDescription: String(data.metaDescription ?? ""),
        heroImage: String(data.heroImage ?? "/images/about-orbis.webp"),
        blocks: markdownToBlocks(body),
        sidebarLinks: sidebarFor(slug),
      };
    })
    .filter((p) => p.slug)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export const PAGES: InteriorPage[] = loadPages();

export function getPage(slug: string): InteriorPage | undefined {
  return PAGES.find((p) => p.slug === slug);
}
