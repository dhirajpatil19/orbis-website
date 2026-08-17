# Build Instructions — The Orbis School Website (Netlify Static)

You are the coding system executing PLAN.md for **The Orbis School** (theorbisschool.com).
CONTENT.md has the scraped real copy. Deploy target is **Netlify**, so the site MUST be a
**fully static export** — no server runtime, no server actions, no database.

## Mandatory stack (adapt from PLAN.md §3 for static-only)

- **Next.js 15+ (App Router, React 19, TypeScript strict)** with `output: 'export'` in
  `next.config.ts` — the build produces a plain static site in `out/`.
- **Tailwind CSS v4** with the design tokens from PLAN.md §5.1 (deep green #33594C,
  gold #FFCC29, paper #FBFBF7, ink tones). Fonts: **Plus Jakarta Sans** (body) +
  **Fraunces** (display headings) — self-host via @fontsource OR link Google Fonts with
  preconnect + `font-display: swap`. Google Fonts link is fine.
- **lucide-react** for icons. **motion** only if needed; CSS animations preferred.
- Do NOT install better-sqlite3, Resend, Sanity, or any native modules. Zero credentials.
- Node available at `/opt/data/home/.local/node22/bin` — use that node/npm.

## Forms (static-only adaptation)

- Enquiry form, contact form, newsletter form = **static HTML forms with
  `data-netlify="true"`** (and a hidden `form-name` input) so Netlify Forms captures
  submissions. Client-side validation only. Success = redirect to a thank-you page or
  show inline success message. Forms must be REAL forms (name attributes on inputs).
- Keep the form on `/admissions/enquiry` (Admission Enquiry) with campus select
  (Gahunje, Pune / Keshav Nagar, Pune / Mundhwa, Pune) per CONTENT.md §5.

## Pages to build (all from CONTENT.md §6 sitemap — every URL must exist)

Build ALL of these routes (static export → `out/<path>/index.html`):

- `/` Home — hero slider (3–5 slides, CSS/JS), events ticker, about intro, stats band,
  campuses (3 cards), academic journey (Preschool→Senior Secondary 5 cards), facilities
  highlights, co-scholastic strip, testimonials carousel, news preview, CTA band.
- `/about/why-orbis` — vision/mission, celebrate learning, ideas on education.
- `/about/directors-message`, `/about/awards`, `/about/knowledge-partners`,
  `/about/facilities`, `/about/core-practices`, `/about/alumni`
- `/admissions/process` — stepper (enquiry → counsellor → campus visit → documents →
  confirmation).
- `/admissions/enquiry` — Netlify form (campus select + parent name/email/phone + child
  name/grade + message).
- `/admissions/fee-structure`, `/admissions/international`
- `/academics/cbse`, `/academics/pedagogy`, `/academics/preschool`,
  `/academics/lower-primary`, `/academics/upper-primary`, `/academics/secondary`,
  `/academics/senior-secondary`
- `/co-scholastic/greater-education-programme`, `/co-scholastic/ssr`,
  `/co-scholastic/literary-activities`, `/co-scholastic/leadership`,
  `/co-scholastic/orbieventum`, `/co-scholastic/ncc`
- `/campuses/keshav-nagar`, `/campuses/mundhwa`, `/campuses/gahunje` — each with
  key-highlights, principal-message (or headmistress-message for Gahunje), discipline,
  pedagogy, admission-inquiry subpages. Contact details from CONTENT.md §6.
- `/life/events`, `/life/gallery`, `/life/transport`, `/life/school-song`,
  `/life/outdoor-activities`, `/life/progress-promotion`, `/life/discipline`,
  `/life/diary-rules`, `/life/newsletter`
- `/resources/blog` (list) + `/resources/blog/[slug]` for the 7 real posts in CONTENT.md
  §8 (use their real titles/excerpts; write 2–3 short paragraphs of plausible body copy
  per post).
- `/resources/faqs` — accordion, ~8 FAQs about admissions/fees/transport (write
  sensible Q&A consistent with CONTENT.md).
- `/contact`, `/contact/careers`, `/contact/vendors`, `/contact/franchise`
- `/about/testimonials` (real quotes from CONTENT.md §5) and `/about/awards-recognitions`
  (reuse awards page content).

That is ~40+ routes. Use a shared data-driven approach: a `src/content/` directory
(TS/JSON) with campuses, testimonials, events, blog posts, and page copy; generate pages
from templates. Do NOT hand-write 40 bespoke components — a few templates (home,
interior, campus, blog list, blog post, contact, faq) + data.

## Images

Download real assets from the live site into `public/` with curl (they are publicly
served):
- logo: `https://www.theorbisschool.com/images/orbis-logo.png`
- hero: `https://www.theorbisschool.com/images/slider_images/OrbisMainwebsite.jpg`,
  `.../OrbisMainwebsite1.jpg`, `.../OrbisMainwebsite2.jpg`, `.../Experiential Learning.jpg`
- campuses: `https://www.theorbisschool.com/images/school_images/KN.webp`,
  `.../MU.webp`, `.../Gahunje.webp`
- about: `https://www.theorbisschool.com/images/about_images/aboutorbis.webp`,
  `.../visionmission.webp`, `.../celebratelearning.webp`
Use plain `<img>` (not next/image) since this is a static export — set width/height or
aspect-ratio to avoid CLS. If a download 404s, generate a tasteful CSS gradient
placeholder instead — never leave broken images.

## Design requirements (PLAN.md §5)

- Deep green + gold on warm off-white paper. Pill-shaped CTAs (gold bg, dark-green
  text). Fraunces display headings, generous whitespace, rounded-2xl cards with soft
  shadows, hover lift.
- Sticky header with nav: About Us · Admissions · Life at Orbis · Academics ·
  Co-Scholastic · Campuses · Resources · Contact + gold "Admission Enquiry" button.
  Mobile hamburger menu.
- Footer: 4 columns (about blurb, quick links, campuses, contact) + newsletter form.
- Hero: full-bleed image + green gradient overlay + "Admissions Open 2026–27 · Learners
  today, Leaders tomorrow" + dual CTA (Enquire Now / Book Campus Visit).
- Skip link, semantic landmarks, focus-visible styles, `prefers-reduced-motion`.
- SEO: unique title + meta description per page, canonical, JSON-LD (School +
  Organization on home, FAQPage on faqs, Article on blog posts, BreadcrumbList interior),
  `src/app/sitemap.ts`, `src/app/robots.ts`.

## Quality gates (must pass before you stop)

1. `npm run build` exits 0 and produces `out/` with `index.html` + every route above.
2. `npx tsc --noEmit` clean (or build's type-check passes).
3. `npm run lint` clean (or fix all errors).
4. After build, walk `out/` and confirm every sitemap route exists as a directory with
   index.html (or .html file). Count them — report the number.
5. Serve `out/` locally (`npx serve out` or `python3 -m http.server` in out/) and
   curl-check ~10 key routes return 200 and contain expected headings.
6. No absolute links to the live site for page navigation (external links like ERP
   portals are fine).

## Constraints

- Do NOT run `git init` or `git commit` — the orchestrator handles git.
- Do NOT install anything interactive; `npm install` must complete non-interactively.
- Use `--no-optional`/`--legacy-peer-deps` if peer-dep resolution fights you.
- If you cannot reach the live site for images, use placeholders and note it.
- Work entirely inside this directory.

## Report back

End your session with a concise report: routes built + count, build/lint/tsc results,
any deviations from this spec, and the exact command to serve the static output.
