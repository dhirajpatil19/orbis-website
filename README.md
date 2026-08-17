# The Orbis School — Website

A modern, clean, fast static website for **The Orbis School** (theorbisschool.com) — a
top CBSE school group in Pune with three campuses (Keshav Nagar, Mundhwa, Gahunje).

Built from a scraped-content reference of the live site and a design/architecture plan
(see `PLAN.md` and `CONTENT.md` in this repo). The site is a **fully static export** —
no server runtime, no database, no credentials required — designed to deploy on **Netlify**.

## Tech Stack

- **Next.js 16** (App Router, React 19, TypeScript strict) with `output: "export"`
- **Tailwind CSS v4** — brand design tokens (deep green `#33594C`, gold `#FFCC29`)
- **Plus Jakarta Sans** (body) + **Fraunces** (display headings) via Google Fonts
- **lucide-react** icons, CSS/IntersectionObserver animations (`prefers-reduced-motion` safe)
- **Netlify static forms** (`data-netlify="true"`) for enquiry/contact/newsletter/careers

## Local Development

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & Verify

```bash
npm test          # Vitest: content integrity, link integrity, component smoke (28 tests)
npm run lint      # ESLint
npm run build     # static export to ./out
npx serve out     # serve the static output locally
```

## Pages

~40 routes: Home, About (Why Orbis, Director's Message, Awards, Facilities, Core
Practices, Alumni, Testimonials), Admissions (Process, Enquiry form, Fees,
International), Academics (CBSE, Pedagogy, Preschool → Senior Secondary), Co-Scholastic
(GEP, SSR, Literary, Leadership, OrbiEventum, NCC), Campuses (3 campuses × main +
sub-pages), Life at Orbis (Events, Gallery, Transport, School Song, Outdoor, Progress,
Discipline, Diary, Newsletter), Resources (Blog + 7 posts, FAQs), Contact (+ Careers,
Vendors, Franchise).

## Deployment (Netlify)

`netlify.toml` is included — Netlify builds with `npm run build` and publishes `out/`.
Forms are automatically detected by Netlify (static forms). Connect the GitHub repo:

1. Push this repo to GitHub
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Select the repo — build settings are picked up from `netlify.toml`
4. Deploy 🎉

## Content Editing

All site copy lives in `src/content/`:

| File | Purpose |
|---|---|
| `site.ts` | Brand, nav structure |
| `campuses.ts` | Campus names, addresses, phones, emails |
| `testimonials.ts` | Parent quotes |
| `events.ts` | Events ticker + stats |
| `posts.ts` | Blog posts |
| `pages.ts` | Interior page copy (headings + body + bullets) |

Edit the TypeScript data and re-deploy — no CMS required.

## Notes

- Contacts/phone numbers were scraped from the live site — **verify with the client
  before publishing as final**.
- This is a concept rebuild from public content; the live site remains the authority.
