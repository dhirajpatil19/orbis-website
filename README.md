# The Orbis School — Website

A modern, clean, fast static website for **The Orbis School** (theorbisschool.com) — a
top CBSE school group in Pune with three campuses (Keshav Nagar, Mundhwa, Gahunje).

Built from a scraped-content reference of the live site and a design/architecture plan.
The site is a **fully static export** — no server runtime, no database — deployed on
**Netlify**, with a **Decap CMS admin dashboard** (`/admin`) for content management.

## Tech Stack

- **Next.js 16** (App Router, React 19, TypeScript strict) with `output: "export"`
- **Tailwind CSS v4** — brand design tokens (deep green `#33594C`, gold `#FFCC29`)
- **Plus Jakarta Sans** (body) + **Fraunces** (display headings) via Google Fonts
- **lucide-react** icons, CSS/IntersectionObserver animations (`prefers-reduced-motion` safe)
- **Decap CMS** (`/admin`) — Git-backed content dashboard with Netlify Identity login
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
Discipline, Diary, Newsletter), Resources (Blog + posts, FAQs), Contact (+ Careers,
Vendors, Franchise).

## Admin Dashboard (Decap CMS)

The site ships with a content-management dashboard at **`/admin`** (built from
`public/admin/`). Editors can manage blog posts, interior pages, campuses, events,
testimonials and site settings, and upload images — every change is committed to
GitHub and auto-deploys via Netlify.

### One-time setup on Netlify (after first deploy)

1. Open your site → **Site configuration → Identity** → **Enable Identity**.
2. Under **Identity → Services**, enable **Git Gateway** (this is what lets the
   dashboard commit edits to the repo).
3. Under **Identity → Invite users**, invite the editors (e.g. `admin@theorbisschool.com`).
   Each editor receives an email to set their password.
4. Visit `https://<your-site>.netlify.app/admin`, sign in with the invited account —
   done. The dashboard reflects your GitHub repo's content.

> First visit after login may ask the CMS to authorize access to your GitHub repo —
> that is the expected OAuth flow; approve it once.

### What editors can do

| Collection | What it edits |
|---|---|
| Blog Posts | Create/edit/delete posts (title, slug, excerpt, tags, date, cover, body) |
| Pages | Edit existing page copy, SEO titles/descriptions, hero images |
| Campuses | Names, addresses, phones, emails, images, blurbs |
| Events & Stats | Homepage events ticker + stats counters |
| Testimonials | Parent quotes shown on Home + Testimonials page |
| Site Settings | Brand name, tagline, contact details, SEO defaults |

## Content Editing (repo files)

All content is plain files under `content/` — editable via the dashboard **or** by hand:

| Path | Purpose |
|---|---|
| `content/site.json` | Brand, contact, SEO defaults |
| `content/campuses.json` | Campus details |
| `content/events.json` | Events ticker + stats |
| `content/testimonials.json` | Parent quotes |
| `content/posts/*.md` | Blog posts (frontmatter + markdown body) |
| `content/pages/**/*.md` | Interior pages (frontmatter + markdown body) |

Markdown body convention: `## Heading` starts a section card, `- item` makes bullets,
blank lines separate paragraphs. Navigation structure is code (`src/content/site.ts`).

## Deployment (Netlify)

`netlify.toml` is included — Netlify builds with `npm run build` and publishes `out/`.
Forms are automatically detected by Netlify (static forms). Connect the GitHub repo:

1. Push this repo to GitHub
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Select the repo — build settings are picked up from `netlify.toml`
4. Deploy 🎉 then follow the **Admin Dashboard** setup above.

## Notes

- Contacts/phone numbers were scraped from the live site — **verify with the client
  before publishing as final**.
- This is a concept rebuild from public content; the live site remains the authority.
