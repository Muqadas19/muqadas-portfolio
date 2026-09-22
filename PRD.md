# Product Requirements Document

# Personal Portfolio Website (Next.js)

**Project working name:** Muqadas Portfolio  
**Status:** Draft v1.1, product decisions locked, waiting on personal content  
**Date:** 21 September 2026  
**Owner:** Muqadas  
**Build start:** after the content questionnaire is filled  

**Design read:** solo developer portfolio for freelance and agency clients, cinematic dark-glass language, matching the provided Framora-style reference.

---

## 1. Purpose

Build a one-page Next.js portfolio that looks and feels like the attached Framora reference: dark, cinematic, glassmorphism, large display type, and high-conversion contact flow.

The visual system, section order, and component language stay faithful to the reference. The copy, photo, projects, stats, socials, and contact details become Muqadas's real information.

This document is the source of truth before any code is written.

---

## 2. Product goal

A visitor should understand, within a few seconds:

1. Who you are
2. What you do
3. Why you are credible
4. What you have built
5. How to hire or contact you

Primary conversion: **Let's Talk** (contact form or direct message).  
Secondary conversion: **view selected work**.

---

## 3. Audience

| Audience | Job to be done |
|---|---|
| Recruiters / hiring managers | Scan title, stack, proof, projects, then contact or download resume |
| Freelance / agency clients | See services, results, case studies, then inquire |
| Peers / community | Share a memorable, premium personal site |

**Locked:** primary audience is freelance / agency clients. Recruiter scanning is secondary, not the voice of the page.

---

## 4. Scope

### In scope (v1)

- Single-page marketing/portfolio site
- Sticky glass navigation
- Hero with personal identity and portrait
- About / proof metrics
- Services block
- Selected work (3 featured projects)
- Testimonials (6-card grid; reference placeholders until real quotes)
- FAQ + contact split
- Resume download
- Footer with giant wordmark
- Mobile, tablet, and desktop layouts
- Contact form emailed to you
- Basic SEO (title, description, Open Graph, sitemap, robots)
- Reduced-motion support
- Dark cinematic theme matching the reference

### Out of scope (v1)

- Blog or CMS
- Multi-language
- User accounts
- Admin dashboard
- Light-mode theme (unless requested)
- Shop / payments
- Case-study inner pages (can be v2 if projects need more depth)
- CMS-backed content (content lives in typed data files)

---

## 5. Site map and information architecture

Single route: `/`

| Order | Section ID | Nav label | Job |
|---|---|---|---|
| 1 | `#home` | Home | Identity + first CTA |
| 2 | `#about` | About | Positioning, bio, proof metrics |
| 3 | `#services` | Services | What a client can hire you for |
| 4 | `#portfolio` | Portfolio | 3 featured case studies |
| 5 | `#testimonials` | (not in nav) | Social proof |
| 6 | `#contact` | Contact | FAQ + inquiry form |
| 7 | Footer | | Legal, links, resume, giant wordmark |

Nav items from the reference:

- Home
- About
- Portfolio
- Services
- Contact
- Primary CTA: **Let's Talk**

**Locked:** Services stays in the nav. A dedicated services block will sit between About and Portfolio, or as a compact row under About, depending on how many services you list.

---

## 6. Visual specification (from the reference)

The coded site must feel like the same product as the screenshot, not a generic dark template.

### 6.1 Theme

- Full-page dark mode. No mid-page theme flip.
- Background: deep navy-black, about `#070614` to `#0b0818`
- Atmospheric magenta / violet / cyan lighting
- Soft photographic bokeh and 3D objects in the page background, not inside every card

### 6.2 Palette

| Token | Role | Approx value |
|---|---|---|
| `--bg` | Page background | `#070614` |
| `--surface` | Glass cards | `rgba(255,255,255,0.06)` |
| `--surface-strong` | Elevated glass | `rgba(255,255,255,0.10)` |
| `--stroke` | Glass edge | `rgba(255,255,255,0.14)` |
| `--text` | Primary text | `#F4F1FF` |
| `--muted` | Secondary text | `rgba(244,241,255,0.62)` |
| `--accent` | Magenta CTA / glow | `#C026D3` to `#E879F9` |
| `--accent-2` | Cyan / blue highlight | `#67E8F9` |
| `--star` | Ratings | `#F5C542` |

Accent lock: magenta-violet is the one accent. Cyan is highlight lighting only, not a second CTA color.

### 6.3 Shape system

- Page sections: large rounded frames, about `28px` to `40px`
- Cards: `20px` to `28px`
- Pills / nav / CTA: fully rounded
- One radius family for the whole site

### 6.4 Material

- Frosted glass: `backdrop-filter: blur(20px) saturate(160%)`
- 1px inner highlight border
- Soft tinted shadows, never harsh black drop shadows
- Solid-fill fallback when `prefers-reduced-transparency` is set

### 6.5 Typography

- Display / headlines: geometric grotesque, tight tracking, heavy weight (Geist, Satoshi, or similar via `next/font`). No Inter. No default serif.
- Body: same family, regular / medium, relaxed line-height, max ~65 characters.
- Giant decorative wordmarks (`PORTFOLIO`, brand name in footer) use ultra-bold condensed display type with gradient fill and outer glow.
- Hero title: 1 to 2 lines. Role title is the loudest line.

### 6.6 Motion (build phase)

- Hero entrance: fade + slight rise
- Section reveal on scroll
- Magnetic / hover lift on glass cards
- Accordion expand on FAQ
- Respect `prefers-reduced-motion`

Dial targets for implementation:

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 7`
- `VISUAL_DENSITY: 4`

---

## 7. Section requirements

### 7.1 Navigation

**Layout:** floating pill centered at the top, glass background, logo left, links center, CTA right.

**Behavior:**

- Sticky
- Active section highlight while scrolling
- Mobile: collapse to logo + CTA + hamburger
- Height cap: 64-72px desktop
- One line of links at desktop

**Copy (pending):**

- Logo / wordmark: `[BRAND_NAME]`
- CTA: Let's Talk

### 7.2 Hero (`#home`)

**Layout:** split cinematic card. Left: name, role, CTA. Right: portrait with cinematic grade. Bottom: social row.

**Must include:**

- Intro line: `I Am [FULL_NAME]`
- Role title: `[ROLE]` in large display type (example from reference: `FULL STACK DEVELOPER`)
- Primary CTA button with arrow icon: Let's Talk
- Portrait photo
- Social icons (only networks you actually use)

**Must not include:**

- Extra badges, version labels, scroll cues, logo walls, or a second contact CTA with different wording

**Content fields:**

```
hero.intro          = "I Am {fullName}"
hero.role           = "{role}"
hero.cta            = "Let's Talk"
hero.portrait       = /public/images/portrait.jpg
hero.socials[]      = { label, href, icon }
```

### 7.3 About / proof (`#about`)

**Layout:** left copy column, right 2x2 metric bento, decorative 3D objects in the background.

**Must include:**

- Short positioning headline
- 2-3 sentence bio
- 4 proof tiles (numbers you can stand behind)

Reference tile pattern to keep:

1. Large dollar / revenue / rate figure
2. Client or brand marks (or stack logos)
3. Speed / delivery multiplier
4. Visual or extra metric

**Content fields:**

```
about.headline
about.body
about.metrics[4] = { value, label, optionalNote }
```

If you do not have public revenue numbers, use honest alternatives: years of experience, projects shipped, clients served, response time, stack count. Do not invent fake-precise stats.

### 7.4 Services (`#services`)

**Layout:** compact hire-me strip matching the glass language. Not a generic 3 equal-card row if we can avoid it. Prefer a horizontal service list or an asymmetric 2+1 grid.

Each service:

- Name (example: Web Development, App Design, AI Development)
- One-line outcome for the client
- Optional starting point / typical timeline, only if you want it public

**Content fields:**

```
services[] = { name, outcome, startingFrom?, timeline? }
```

Expect 3-5 services. Nav label is Services.

### 7.5 Portfolio (`#portfolio`)

**Layout:** giant background word `PORTFOLIO`, then 3 stacked case-study rows.

Each row:

- Category label (Web Development / App Design / AI Development, or your real categories)
- Short project name
- 1-2 line description
- Tech / skill pills
- Large visual (product shot, UI mock, or generated project art)
- Optional live / case link

Rhythm: vary left/right media placement so it does not become three identical zigzags. Max two consecutive split rows in the same orientation, then break.

**Content fields:**

```
projects[3] = {
  category,
  name,
  summary,
  tags[],
  image,
  href?,
  year?
}
```

v1 shows 3 featured projects. More work can wait for a later `/work` page.

### 7.6 Testimonials (`#testimonials`)

**Layout:** 6 glass quote cards in a 2-column (desktop) / 1-column (mobile) grid. Photo, name, role, 5-star row, 2-3 line quote.

**Locked for v1:** keep the 6-card testimonial grid from the reference. Use the existing reference quotes as styled placeholders until you send real client quotes. Replace placeholders before a public launch. Do not ship invented names as if they were your clients.

### 7.7 Contact + FAQ (`#contact`)

**Layout:** split panel.

Left:

- Let's Talk heading
- Short invite line
- Email, phone, optional WhatsApp
- Direct Let's Talk button

Right:

- 4 FAQ accordion rows

**Locked:** contact form that emails you. Fields: name, email, project type, message. Show success, loading, and error states. No WhatsApp button unless you add a number later.

### 7.8 Footer

- Copyright line with year and name
- Repeat nav
- Social links
- Giant glowing wordmark of `[BRAND_NAME]`

---

## 8. Content model

All personal content lives in one typed file, for example `src/content/site.ts`. Components do not hardcode biography text.

```ts
export type SiteContent = {
  brandName: string;
  fullName: string;
  role: string;
  location?: string;
  availability?: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  resumeUrl?: string;
  portrait: string;
  hero: { intro: string; role: string; cta: string };
  about: { headline: string; body: string; metrics: Metric[] };
  socials: Social[];
  services?: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  faqs: Faq[];
  seo: { title: string; description: string; ogImage: string };
};
```

Until the questionnaire is answered, this file stays unwritten.

---

## 9. Functional requirements

| ID | Requirement |
|---|---|
| F1 | Smooth-scroll to section IDs from nav and CTAs |
| F2 | Contact form validates name, email, and message before submit |
| F3 | Form success, loading, and error states are visible |
| F4 | External social / project links open in a new tab with `rel="noopener noreferrer"` |
| F5 | Images use `next/image` with reserved size to avoid layout shift |
| F6 | Portrait and OG image are priority / preloaded for LCP |
| F7 | Keyboard focus states on nav, buttons, inputs, accordion |
| F8 | FAQ accordion is operable with keyboard |
| F9 | Mobile nav can open, close, and lock body scroll |
| F10 | `prefers-reduced-motion` disables non-essential animation |
| F11 | SEO tags: title, description, canonical, Open Graph, Twitter card |
| F12 | `robots.txt` and `sitemap.xml` exist |
| F13 | 404 page exists, visually on-brand |

---

## 10. Non-functional requirements

| Area | Target |
|---|---|
| LCP | under 2.5s on a typical 4G laptop |
| CLS | under 0.1 |
| INP | under 200ms |
| Contrast | WCAG AA for body and UI text |
| Breakpoints | 390 / 768 / 1024 / 1280 |
| Browser | last 2 Chrome, Safari, Firefox, Edge |
| Hosting | Vercel (default for Next.js) |

---

## 11. Technical plan (locked for v1)

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router), React Server Components by default |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Motion | Motion (`motion/react`) for UI; GSAP only if a pinned scroll section is needed |
| Icons | Phosphor (`@phosphor-icons/react`) |
| Fonts | `next/font` (self-hosted), no Google Fonts `<link>` |
| Forms | Server Action or API route + Resend / Formspree / WhatsApp fallback |
| Images | `next/image`, files in `/public/images` |
| Content | typed TS module, not a CMS |
| Deploy | Vercel |

Client Components are used only for interactive leaves: nav spy, accordion, form UI, motion.

---

## 12. SEO and social

Pending real name / role, proposed pattern:

- Title: `{Full Name} | {Role}`
- Description: one sentence, max 155 characters, written from your bio
- OG image: portrait + name + role on the dark cinematic background, 1200x630
- JSON-LD: `Person` schema (name, jobTitle, url, sameAs socials)

---

## 13. Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`
- Alt text on portrait and project images
- Visible focus rings
- Form labels above inputs, errors below inputs, no placeholder-as-label
- Hit targets at least 44px on mobile
- Reduced motion and reduced transparency fallbacks

---

## 14. Assets required from you

| Asset | Spec | Status |
|---|---|---|
| Portrait photo | vertical-ish, clear face, 1600px+ on the long edge | missing |
| Project images (3) | 1600x1000 or similar landscape UI / product shots | missing |
| Resume PDF (optional) | A4/Letter PDF | missing |
| Favicon / mark | if you have a logo; otherwise a letter mark from your name | missing |
| Testimonial photos | only if real people consent | missing |

If a real project screenshot is not available, a generated cinematic mock will be created in the build phase, labeled as a visual, not as a fake product UI made of divs.

---

## 15. Success criteria

v1 is done when:

1. The live page is recognizably the Framora-style layout on desktop and mobile
2. Every visible string is your real copy, not Isaac Fomo / Framora leftovers
3. Let's Talk leads to a working contact path
4. 3 real projects are shown
5. Lighthouse is in a plausible green band for performance, a11y, and SEO on the home page
6. Content can be edited from one file without hunting through components

---

## 16. Build phases (after PRD approval)

1. Scaffold Next.js + Tailwind + fonts + content types
2. Global shell: background, nav, footer
3. Hero
4. About / metrics
5. Portfolio
6. Testimonials or proof alternative
7. Contact + FAQ
8. SEO, 404, polish, browser pass

No phase starts until the questionnaire below is answered well enough to fill `site.ts`.

---

## 17. Locked product decisions

Answered 21 September 2026.

| Decision | Choice |
|---|---|
| Primary audience | Freelance / agency clients |
| Brand / logo / footer wordmark | Personal name |
| Visual direction | Match the Framora reference closely |
| Services section | Yes, keep it |
| Testimonials | Keep the 6-card grid from the reference as placeholders until real quotes arrive |
| Let's Talk | Contact form that emails you |
| Resume | Yes, include a download once the PDF is provided |
| Hero pattern | Keep `I Am {Name}` plus a huge role title |

Still open, because they need your text:

- Exact legal name vs display name
- Domain (even if not bought yet)
- Real services list
- Real bio, metrics, projects, FAQs, socials, email

---

## 18. Content questionnaire

Fill this in the chat, in any format. Short honest answers are better than polished marketing copy. I will turn them into site-ready text.

### Identity

1. Full name as it should appear on the site
2. Preferred first name / how people address you
3. Professional title (example: Full Stack Developer, Frontend Engineer, AI Engineer)
4. One-line intro under the name, if different from the title
5. City / country
6. Languages you work in
7. Years of experience
8. Current status: open to work, freelance, both, or not looking

### Story

9. 3-5 sentence bio. Who you are, what you build, who you help.
10. What problem do you solve for clients or employers?
11. What are you best at? Rank your top 5 skills.
12. Tech stack you want listed (languages, frameworks, tools)
13. Education (optional): school, degree, year
14. Anything you do not want on the internet?

### Proof

15. Four metrics you are comfortable showing. Examples: years, projects shipped, clients, average delivery time, rating, companies. Real numbers only.
16. Hourly / project rate, only if you want it public. Otherwise omit.

### Work

For each of 3 projects, send:

17. Project name  
18. Category (Web, App, AI, E-commerce, etc.)  
19. What it is, in 2 sentences  
20. Your role  
21. Tech used  
22. Live URL and/or GitHub, if public  
23. Screenshot or a description of what the visual should show  
24. Year  

### Social proof

25. 2-6 testimonials if you have them: quote, person name, role, company, photo optional  
26. Platforms you work on (Fiverr, Upwork, LinkedIn, GitHub, etc.) with profile URLs

### Contact

27. Public email  
28. Public phone / WhatsApp, or "email only"  
29. Social links you want as icons: GitHub, LinkedIn, Instagram, Dribbble, Behance, X, YouTube, Fiverr, other  
30. FAQ: 4 questions clients actually ask you, plus your answers  
31. Typical project types you take (example: landing pages, SaaS dashboards, AI chatbots)

### Voice

32. Tone: more formal recruiter-friendly, or more bold freelance-agency?
33. Words you never want on the site
34. Do you want "I Am {Name}" kept as the hero pattern from the reference?

### Assets

35. Can you drop a portrait photo into this folder?
36. Can you drop project screenshots?
37. Resume PDF, yes or no?

---

## 19. Copy rules for implementation

When content is rewritten into the site:

- No leftover "Isaac Fomo", "Framora", "Creative Ments", or "ATIRA" unless those are actually your brands
- No fake testimonials
- No invented percentages or revenue
- No em-dash characters in visible UI copy
- Primary CTA wording is consistent: **Let's Talk** everywhere that means contact
- Headlines stay short. Hero role title max 2 lines

---

## 20. Approval gate

Product decisions are locked. Building starts only after:

1. You answer the identity, story, work, services, and contact questions at minimum
2. You send or approve a portrait plan (real photo now, or generate a stand-in later)
3. You confirm the PRD still matches what you want

Minimum viable answers to start build:

- Name, title, bio, services list, 3 projects, email, social links you care about, 4 FAQs or permission to draft them from your bio
