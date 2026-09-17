# Product Requirements Document — Muqadas Ibrar Portfolio

**Product:** Personal portfolio website  
**Owner:** Muqadas Ibrar  
**Version:** 1.0  
**Status:** Approved  
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS  
**Visual source:** Framora-style dark neon-glass landing (layout and craft only — not the Framora brand)

---

## 1. Problem and goal

Recruiters and clients need a single page that shows Muqadas Ibrar as a Computer Science student who ships practical web apps. The site should look like a premium agency landing, convert to email, and stay easy to update from one content file.

| CTA | Action |
| --- | --- |
| Primary | Let’s Talk → `mailto:muqadasibrar746@gmail.com` |
| Secondary | See Work → scroll to portfolio |

---

## 2. Audience

- Recruiters scanning for a Software Engineer / CS student
- Small businesses needing websites
- Peers visiting [github.com/Muqadas19](https://github.com/Muqadas19)

---

## 3. Brand

| Item | Decision |
| --- | --- |
| Full name | Muqadas Ibrar |
| Nav / footer wordmark | Muqadas / MUQADAS |
| Hero title | SOFTWARE ENGINEER |
| About identity | Computer Science student |
| Studio name | Do not use Framora |
| Services | Web Development only |
| Contact | Email only: muqadasibrar746@gmail.com |
| Visual language | Dark navy-to-black, glass pill nav, orange accent, purple/pink glow, large display type, rounded project boards |

---

## 4. Information architecture

Single page, no testimonials.

```text
Nav (sticky glass)
Hero
About + skills
Portfolio (2 web case studies)
FAQ + contact
Footer
```

Nav: Home, Work, About, Contact, Let’s Talk.

---

## 5. Content (verbatim)

### Hero

- Eyebrow: I Am Muqadas Ibrar
- Headline: SOFTWARE ENGINEER
- Subline: Passionate about web development and creating useful digital solutions.
- Tools: HTML, CSS, JavaScript, PHP, MySQL, Photoshop

### About

Hi, I’m Muqadas Ibrar, a Computer Science student passionate about web development and creating useful digital solutions.

I have experience working with HTML, CSS, JavaScript, PHP, and MySQL. I also enjoy designing creative visuals using Photoshop and exploring modern tools like AI and Cursor to improve my development workflow.

I’m continuously learning new technologies and looking for opportunities to build practical projects, improve my skills, and work with clients on meaningful digital solutions.

Skills row (replaces fake stats): HTML, CSS, JavaScript, PHP, MySQL, Photoshop, AI, Cursor.

### Portfolio

No live or GitHub buttons until URLs exist.

1. **Smart Nutrition Planner** — A web-based application that helps users calculate BMI and create nutrition plans based on their goals.
2. **Shortest Route Navigator** — A navigation project that finds the shortest path between two locations using graph algorithms. It demonstrates concepts such as graphs, nodes, edges, and pathfinding.

### FAQ (site-authored, honest)

1. What do you work on? — Web development projects for learning and clients: sites and practical tools in HTML, CSS, JavaScript, PHP, and MySQL.
2. Are you available for freelance work? — Yes. Email muqadasibrar746@gmail.com to talk about a project.
3. What is your current focus? — Computer Science studies, shipping practical web apps, and improving the development workflow with modern tools.
4. Do you have live project links? — Case studies are listed on this page. Live and GitHub links will be added when they are ready.

### Contact

mailto:muqadasibrar746@gmail.com only. No LinkedIn or WhatsApp.

---

## 6. Functional requirements

- Smooth in-page scroll from the nav
- FAQ accordion, one panel open at a time, keyboard accessible
- Hover states on cards and buttons
- Mobile: stacked hero, scaled oversized type, compact or hamburger nav
- All copy lives in `src/content/site.ts`

## 7. Non-functional requirements

- Semantic HTML and readable contrast on body copy
- SEO: title, description, Open Graph, Person JSON-LD, sitemap
- `next/image` for photos; `next/font` for display + body type
- Deploy target: Vercel

## 8. Out of scope (v1)

- CMS, blog, auth, i18n
- App Design / AI Development service rows
- Testimonials
- Contact backend
- Invented stats, clients, or project URLs

## 9. Success

- Desktop layout is recognizably the approved reference
- Reads as Muqadas Ibrar / Software Engineer / CS student / Web Development
- Let’s Talk opens the Gmail address
- FAQ usable with keyboard; no unlabeled icon-only controls
