// Content integrity + internal link integrity tests.
// These guard the data layer that drives the whole site: any page, campus,
// post, or nav link that breaks will fail here before it reaches production.
import { describe, it, expect } from "vitest";
import { SITE, NAV_GROUPS } from "@/content/site";
import { CAMPUSES } from "@/content/campuses";
import { PAGES } from "@/content/pages";
import { POSTS } from "@/content/posts";
import { EVENTS, STATS } from "@/content/events";
import { TESTIMONIALS } from "@/content/testimonials";

// Mirrors CAMPUS_SUBPAGES in src/app/[...slug]/page.tsx — every campus gets
// this exact set of generated sub-pages.
const CAMPUS_SUBPAGES = [
  "key-highlights",
  "principal-message",
  "headmistress-message",
  "discipline",
  "pedagogy",
  "admission-inquiry",
];

const SLUG_RE = /^[a-z0-9-]+(\/[a-z0-9-]+)*$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** All routes the static export is expected to produce. */
function buildRouteSet(): Set<string> {
  const routes = new Set<string>(["/", "/resources/blog", "/resources/faqs"]);
  for (const p of PAGES) routes.add(`/${p.slug}`);
  for (const c of CAMPUSES) {
    routes.add(`/campuses/${c.slug}`);
    for (const sub of CAMPUS_SUBPAGES) routes.add(`/campuses/${c.slug}/${sub}`);
  }
  for (const post of POSTS) routes.add(`/resources/blog/${post.slug}`);
  return routes;
}

describe("site brand data", () => {
  it("has all required brand fields filled in", () => {
    expect(SITE.name).toBeTruthy();
    expect(SITE.tagline).toBeTruthy();
    expect(SITE.board).toBe("CBSE");
    expect(SITE.admissionsYear).toMatch(/\d{4}–\d{2}/);
    expect(SITE.phone).toMatch(/^\+91/);
    expect(SITE.email).toMatch(EMAIL_RE);
    expect(SITE.logo).toMatch(/^\//);
    expect(SITE.metaTitle.length).toBeGreaterThan(10);
    expect(SITE.metaDescription.length).toBeGreaterThan(40);
  });
});

describe("navigation link integrity", () => {
  const routeSet = buildRouteSet();

  it("has 8 top-level nav groups with children", () => {
    expect(NAV_GROUPS.length).toBe(8);
    for (const group of NAV_GROUPS) {
      expect(group.label).toBeTruthy();
      expect(group.href).toMatch(/^\//);
      expect(group.children.length).toBeGreaterThan(0);
    }
  });

  it("every nav href resolves to a real route", () => {
    const missing = NAV_GROUPS.flatMap((g) => [
      g.href,
      ...g.children.map((c) => c.href),
    ]).filter((href) => !routeSet.has(href));
    expect(missing).toEqual([]);
  });

  it("every page sidebar link resolves to a real route", () => {
    const missing = PAGES.flatMap((p) => p.sidebarLinks ?? []).filter(
      (l) => !routeSet.has(l.href),
    );
    expect(missing).toEqual([]);
  });

  it("hardcoded component links (Header CTA, CTABand, Footer) resolve", () => {
    const hardcoded = [
      "/",
      "/admissions/enquiry",
      "/admissions/fee-structure",
      "/admissions/process",
      "/contact",
      "/contact/careers",
      "/resources/blog",
      "/resources/faqs",
      "/about/why-orbis",
      ...CAMPUSES.map((c) => `/campuses/${c.slug}`),
    ];
    const missing = hardcoded.filter((href) => !routeSet.has(href));
    expect(missing).toEqual([]);
  });
});

describe("interior pages", () => {
  it("has a healthy number of pages (plan targets ~40 interior routes)", () => {
    expect(PAGES.length).toBeGreaterThanOrEqual(30);
  });

  it("slugs are unique and well-formed", () => {
    const slugs = PAGES.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(SLUG_RE);
  });

  it("every page has title, meta, hero image and content blocks", () => {
    for (const page of PAGES) {
      expect(page.title, page.slug).toBeTruthy();
      expect(page.kicker, page.slug).toBeTruthy();
      expect(page.metaTitle, page.slug).toBeTruthy();
      expect(page.metaDescription.length, `${page.slug} metaDescription`).toBeGreaterThan(40);
      expect(page.heroImage, page.slug).toMatch(/^\//);
      expect(page.blocks.length, `${page.slug} blocks`).toBeGreaterThan(0);
      for (const block of page.blocks) {
        expect(block.body, `${page.slug} block body`).toBeTruthy();
        expect(block.body.length).toBeGreaterThan(20);
      }
    }
  });

  it("key conversion pages exist", () => {
    const slugs = new Set(PAGES.map((p) => p.slug));
    for (const required of ["admissions/enquiry", "contact", "resources/faqs", "about/why-orbis"]) {
      expect(slugs.has(required), `missing required page ${required}`).toBe(true);
    }
  });
});

describe("campuses", () => {
  it("has exactly the 3 Pune campuses with unique slugs", () => {
    expect(CAMPUSES.length).toBe(3);
    const slugs = CAMPUSES.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(3);
  });

  it("every campus has complete contact + content data", () => {
    for (const campus of CAMPUSES) {
      expect(campus.slug).toMatch(SLUG_RE);
      expect(campus.name).toBeTruthy();
      expect(campus.shortName).toBeTruthy();
      expect(campus.address.length).toBeGreaterThan(15);
      expect(campus.phones.length).toBeGreaterThan(0);
      for (const phone of campus.phones) expect(phone).toMatch(/^\+91/);
      expect(campus.email).toMatch(EMAIL_RE);
      expect(campus.image).toMatch(/^\//);
      expect(campus.blurb.length).toBeGreaterThan(40);
      expect(campus.mapQuery).toBeTruthy();
    }
  });
});

describe("blog posts", () => {
  it("has at least 5 real posts with unique slugs", () => {
    expect(POSTS.length).toBeGreaterThanOrEqual(5);
    const slugs = POSTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every post is fully populated and dated", () => {
    for (const post of POSTS) {
      expect(post.slug).toMatch(SLUG_RE);
      expect(post.title.length).toBeGreaterThan(10);
      expect(post.excerpt.length).toBeGreaterThan(30);
      expect(post.tags.length).toBeGreaterThan(0);
      expect(post.date).toMatch(DATE_RE);
      expect(new Date(post.date).toString()).not.toBe("Invalid Date");
      expect(post.cover).toMatch(/^\//);
      expect(post.body.length).toBeGreaterThan(0);
    }
  });
});

describe("events, stats, testimonials", () => {
  it("events have dates, titles and valid types", () => {
    expect(EVENTS.length).toBeGreaterThan(3);
    for (const event of EVENTS) {
      expect(event.date).toBeTruthy();
      expect(event.title).toBeTruthy();
      expect(["holiday", "activity", "meeting"]).toContain(event.type);
    }
  });

  it("stats have value + label pairs", () => {
    for (const stat of STATS) {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    }
  });

  it("testimonials are real quotes with authors", () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(3);
    for (const t of TESTIMONIALS) {
      expect(t.quote.length).toBeGreaterThan(40);
      expect(t.author).toBeTruthy();
      expect(t.role).toBeTruthy();
    }
  });
});
