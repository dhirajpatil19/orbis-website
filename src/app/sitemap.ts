import type { MetadataRoute } from "next";
import { PAGES } from "@/content/pages";
import { CAMPUSES } from "@/content/campuses";
import { POSTS } from "@/content/posts";

// Required for static export ("output: export") — route is prerendered at build time.
export const dynamic = "force-static";

const BASE = "https://orbisschool.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const interior = PAGES.map((p) => ({
    url: `${BASE}/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const campuses = CAMPUSES.flatMap((c) => [
    { url: `${BASE}/campuses/${c.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/campuses/${c.slug}/key-highlights/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/campuses/${c.slug}/principal-message/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/campuses/${c.slug}/discipline/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/campuses/${c.slug}/pedagogy/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/campuses/${c.slug}/admission-inquiry/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ]);

  const posts = POSTS.map((p) => ({
    url: `${BASE}/resources/blog/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...interior,
    ...campuses,
    ...posts,
  ];
}
