import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/content/site";
import { CAMPUSES } from "@/content/campuses";
import { NewsletterForm } from "@/components/Forms";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logo} alt="The Orbis School logo" className="h-14 w-14 object-contain mb-4" width={56} height={56} />
          <h3 className="font-display text-xl text-white font-semibold mb-2">The Orbis School</h3>
          <p className="text-sm text-brand-100/80 leading-relaxed">
            {SITE.tagline}. A Wissen Education Foundation initiative — CBSE education from
            preschool to Class 12 across three campuses in Pune.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-accent-400" href="/about/why-orbis">Why Orbis</Link></li>
            <li><Link className="hover:text-accent-400" href="/admissions/process">Admission Process</Link></li>
            <li><Link className="hover:text-accent-400" href="/admissions/fee-structure">Fee Structure</Link></li>
            <li><Link className="hover:text-accent-400" href="/resources/blog">Blog</Link></li>
            <li><Link className="hover:text-accent-400" href="/resources/faqs">FAQs</Link></li>
            <li><Link className="hover:text-accent-400" href="/contact/careers">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Campuses</h4>
          <ul className="space-y-3 text-sm">
            {CAMPUSES.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-accent-400" href={`/campuses/${c.slug}`}>
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-brand-100/80 mb-5">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent-400" /> 33, 3A/6, Keshav Nagar, Mundhwa, Pune 411036</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-accent-400" /> {SITE.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-accent-400" /> {SITE.email}</li>
          </ul>
          <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Monthly Newsletter</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-100/70">
          <p>© {new Date().getFullYear()} The Orbis Schools, Pune. All rights reserved.</p>
          <p>Concept site built from public content of theorbisschool.com · Admissions Open {SITE.admissionsYear}</p>
        </div>
      </div>
    </footer>
  );
}
