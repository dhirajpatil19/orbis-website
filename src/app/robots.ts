import type { MetadataRoute } from "next";

// Required for static export ("output: export") — route is prerendered at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://orbis-website.netlify.app/sitemap.xml",
  };
}
