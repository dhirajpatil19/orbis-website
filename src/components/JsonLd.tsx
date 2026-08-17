import { SITE } from "@/content/site";
import { CAMPUSES } from "@/content/campuses";

// JSON-LD structured data — School + Organization (home page)
export function SchoolJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SITE.name,
    alternateName: "The Orbis Schools",
    url: "https://orbis-website.netlify.app",
    logo: "https://orbis-website.netlify.app/images/orbis-logo.png",
    description: SITE.metaDescription,
    slogan: SITE.tagline,
    founder: { "@type": "Organization", name: "Wissen Education Foundation" },
    address: {
      "@type": "PostalAddress",
      streetAddress: CAMPUSES[0].address,
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    telephone: SITE.phone,
    email: SITE.email,
    sameAs: ["https://www.theorbisschool.com"],
    containsPlace: CAMPUSES.map((c) => ({
      "@type": "Campus",
      name: c.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.address,
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      telephone: c.phones[0],
      email: c.email,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
