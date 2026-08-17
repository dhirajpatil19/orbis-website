// Site-wide brand data — editable via the CMS dashboard (content/site.json).
// Navigation structure stays in code (structural, not content).
import siteJson from "../../content/site.json";

export interface SiteSettings {
  name: string;
  tagline: string;
  motto: string;
  board: string;
  range: string;
  logo: string;
  metaTitle: string;
  metaDescription: string;
  admissionsYear: string;
  phone: string;
  email: string;
  domain: string;
}

export const SITE = siteJson as SiteSettings;

export interface NavGroup {
  label: string;
  href: string;
  children: { label: string; href: string }[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "About Us",
    href: "/about/why-orbis",
    children: [
      { label: "Why The Orbis School", href: "/about/why-orbis" },
      { label: "Director's Message", href: "/about/directors-message" },
      { label: "Awards & Recognitions", href: "/about/awards" },
      { label: "Knowledge Partners", href: "/about/knowledge-partners" },
      { label: "School Facilities", href: "/about/facilities" },
      { label: "Core Practices", href: "/about/core-practices" },
      { label: "Orbis Alumni", href: "/about/alumni" },
      { label: "Testimonials", href: "/about/testimonials" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions/process",
    children: [
      { label: "Admission Process", href: "/admissions/process" },
      { label: "Admission Enquiry", href: "/admissions/enquiry" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
      { label: "International Students", href: "/admissions/international" },
    ],
  },
  {
    label: "Academics",
    href: "/academics/cbse",
    children: [
      { label: "CBSE Academics", href: "/academics/cbse" },
      { label: "Pedagogy", href: "/academics/pedagogy" },
      { label: "Preschool (Pre-primary)", href: "/academics/preschool" },
      { label: "Lower Primary (1st–5th)", href: "/academics/lower-primary" },
      { label: "Upper Primary (6th–8th)", href: "/academics/upper-primary" },
      { label: "Secondary (9th–10th)", href: "/academics/secondary" },
      { label: "Senior Secondary (11th–12th)", href: "/academics/senior-secondary" },
    ],
  },
  {
    label: "Co-Scholastic",
    href: "/co-scholastic/greater-education-programme",
    children: [
      { label: "Greater Education Programme", href: "/co-scholastic/greater-education-programme" },
      { label: "Student Social Responsibility", href: "/co-scholastic/ssr" },
      { label: "Literary Activities", href: "/co-scholastic/literary-activities" },
      { label: "Leadership", href: "/co-scholastic/leadership" },
      { label: "OrbiEventum", href: "/co-scholastic/orbieventum" },
      { label: "NCC", href: "/co-scholastic/ncc" },
    ],
  },
  {
    label: "Life at Orbis",
    href: "/life/events",
    children: [
      { label: "Events & Annual Calendar", href: "/life/events" },
      { label: "Gallery", href: "/life/gallery" },
      { label: "School Transport", href: "/life/transport" },
      { label: "School Song", href: "/life/school-song" },
      { label: "Outdoor Activities", href: "/life/outdoor-activities" },
      { label: "Progress & Promotion", href: "/life/progress-promotion" },
      { label: "Discipline", href: "/life/discipline" },
      { label: "Student Diary Rules", href: "/life/diary-rules" },
      { label: "Monthly Newsletter", href: "/life/newsletter" },
    ],
  },
  {
    label: "Campuses",
    href: "/campuses/keshav-nagar",
    children: [
      { label: "Keshav Nagar", href: "/campuses/keshav-nagar" },
      { label: "Mundhwa", href: "/campuses/mundhwa" },
      { label: "Gahunje", href: "/campuses/gahunje" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blog",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/contact/careers" },
      { label: "Vendors", href: "/contact/vendors" },
      { label: "Franchise", href: "/contact/franchise" },
    ],
  },
];
