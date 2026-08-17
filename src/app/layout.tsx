import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://orbis-website.netlify.app"),
  title: {
    default: SITE.metaTitle,
    template: `%s | The Orbis School`,
  },
  description: SITE.metaDescription,
  keywords: [
    "CBSE school Pune",
    "best CBSE school in Pune",
    "preschool Pune",
    "The Orbis School",
    "Keshav Nagar school",
    "Mundhwa school",
    "Gahunje school",
  ],
  openGraph: {
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    siteName: SITE.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#33594c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts — Plus Jakarta Sans (body) + Fraunces (display), loaded via Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
