# CorpSolutions — Website Rebuild: Implementation Plan (v2, finalized)

**Status:** Content locked · ready to build · **Last updated:** 2026-07-15
**Owner:** Manash Garg (`gargmanash`)
**Goal:** Replace the legacy Flash-era corpsolutions.in with a modern, cinematic corporate website, deployed on AWS Amplify.

> **Authoritative content source:** `CorpSolutions_Profile...pdf` (company profile deck) is the single source of truth for brand, services, copy, clients, and contacts. Where the deck and older docs conflict, **the deck wins**. Only one item is still pending: the revised **Employment Verification** write-up (existing `.doc` used as interim copy).

---

## 1. Objectives & Principles

**What we're building:** A cinematic, multi-route corporate marketing site for **CorpSolutions Services Private Limited** — a Consultancy / Outsourcing / Recruitment firm serving Insurance, Telecom, and Banking sectors in India.

**Design intent — "corporate cinematic":**
- Full-viewport hero with slow, deliberate motion (premium, trustworthy, not flashy).
- Dark editorial base + the deck's **per-pillar accent colors** (Consultancy blue, Outsourcing teal, HR purple) + the diamond/rhombus geometric motif from the deck.
- Scroll-driven reveals; restrained, GPU-cheap motion; respects `prefers-reduced-motion`.
- Feels fast, fully responsive, accessible (WCAG 2.1 AA target), SEO-clean.

**Non-negotiables:**
1. Content taken **only** from provided sources (deck = primary). No invented facts, figures, or client names.
2. Deploys cleanly to **AWS Amplify** as a static build.
3. Client logos are trademarks — used per the deck + its disclaimer; sourced from the deck itself.

**Non-goals (v1):** No CMS, backend, auth, or applicant database. Career page is informational + resume-to-email (`jobs@corpsolutions.in`).

---

## 2. Decisions Locked

| Decision | Choice |
|---|---|
| Framework | **Vite + React + TypeScript** (static SPA) |
| Logo | **Recreate as clean SVG** wordmark ("CorpSolutions" + tagline) |
| Service taxonomy | **Follow the deck** (drops older Data Entry / Collection / Customer Query / Address Verification) |
| Color system | **Per-pillar accents** (blue / teal / purple) over a cinematic dark base |
| Head Office address | **436-437**, Blue Rose Industrial Estate (from the deck) |
| Management team | **3 members** (per current content doc) |
| Legacy content | Use as-is; client corrects post-build |
| Hosting | AWS Amplify Hosting (static SPA) |

---

## 3. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Build | Vite 5 | Fast, tiny static output, first-class Amplify support |
| UI | React 18 + TypeScript | Component reuse across 11 service pages; typed content |
| Routing | React Router v6 | Multi-route SPA |
| Styling | CSS Modules + CSS custom properties (design tokens) | Zero-runtime, theme-able, full control of the cinematic look |
| Animation | Framer Motion | Scroll reveals, hero motion, page transitions; honors reduced-motion |
| Icons | lucide-react | Consistent line icons for service cards |
| Fonts | Self-hosted woff2 via `@fontsource` | No FOUT / privacy / latency issues |
| Forms | Amplify + SES **or** third-party endpoint | No backend to maintain (see §10) |
| Lint/format | ESLint + Prettier | Consistency before GitHub push |

**Content strategy:** All copy lives in typed `src/content/*` files (not hardcoded in JSX). One `services.ts` array drives the mega-menu, services grid, and every detail page — so editing copy (e.g. the incoming EV write-up) is a one-file change.

---

## 4. Repository Structure

```
corpsolutions-website/
├── docs/IMPLEMENTATION_PLAN.md
├── public/{favicon.svg, og-image.jpg, assets/, clients/}
├── src/
│   ├── main.tsx, App.tsx
│   ├── styles/{tokens.css, global.css}
│   ├── components/{layout/, ui/, sections/}
│   ├── content/{company.ts, services.ts, team.ts, about.ts, clients.ts, careers.ts}
│   ├── pages/{Home, About, Services, ServiceDetail, Clients, Career, Contact}.tsx
│   └── hooks/
├── index.html, vite.config.ts, tsconfig.json, package.json
├── amplify.yml, README.md
```

---

## 5. Information Architecture (Sitemap)

Reconciled from the **deck** (authoritative).

```
/                       Home
/about                  About Us  (+ Management team)
/services               Services overview (grid, grouped by 3 pillars)
  ├── /services/financial-consultancy        [Consultancy · blue]
  ├── /services/tax-consultancy              [Consultancy · blue]
  ├── /services/reconciliation               [Outsourcing · teal]
  ├── /services/accounts-payable             [Outsourcing · teal]
  ├── /services/call-centre                  [Outsourcing · teal]
  ├── /services/corporate-events-roadshow    [Outsourcing · teal]
  ├── /services/recruitment                  [HR Management · purple]
  ├── /services/contract-staffing            [HR Management · purple]
  ├── /services/payroll-management           [HR Management · purple]
  └── /services/employment-verification      [HR Management · purple]  (interim copy)
/clients                Clients (logo wall + disclaimer)
/career                 Careers (jobs@corpsolutions.in)
/contact                Contact (both offices + form + map)
```

**Top nav:** HOME · ABOUT · SERVICES ▾ (3-col mega-menu) · CLIENTS · CAREER · CONTACT

**Mega-menu columns:**
- **Consultancy** → Financial Consultancy, Tax Consultancy
- **Outsourcing** → Reconciliation Services, Accounts Payable, Call-Centre Services, Corporate Events & Road Show
- **HR Management** → Recruitment, Contract Staffing, Payroll Management, Employment Verification

---

## 6. Design System

### 6.1 Color tokens — cinematic dark base + per-pillar accents
```
/* base (cinematic dark) */
--bg-900:#0A0E1A  --bg-800:#101627  --bg-700:#18203A  --line:#26304C
--text-hi:#F4F7FF --text-mid:#AEB8D0 --text-lo:#6C789A
/* brand */
--navy:#1E2A78          /* logo wordmark navy */
--azure:#00AEEF         /* logo accent / global CTA */
/* per-pillar accents (from deck) */
--consultancy:#1CA0E3   /* blue */
--outsourcing:#12B5A5   /* teal */
--hr:#7A3FB0            /* purple */
/* light-section variant */
--bg-50:#F5F7FC  (dark text) — for alternating light/dark bands
```
Each service page + its cards/nav column are tinted with the pillar accent (used in gradients, borders, icon chips, active states). Global CTAs use `--azure`.

### 6.2 Typography
- **Display/headings:** Space Grotesk *or* Fraunces (pick in design review).
- **Body/UI:** Inter (self-hosted).
- Fluid scale via `clamp()`; tight heading leading, 1.6 body.

### 6.3 Layout & motion
- 8px grid; section padding `clamp(5rem,10vw,9rem)`; max width 1200px; full-bleed hero/bands.
- **Diamond motif** from the deck used as a recurring decorative device (hero, pillar cards, section corners).
- Hero: slow gradient/parallax drift + staggered headline reveal. Scroll: `Reveal` fade-up at 15% in-view. Nav condenses after 40px. Cards lift on hover. Short cross-fade page transitions. All transform/opacity; reduced-motion disables non-essential motion.

---

## 7. Page-by-Page Spec (content status)

All copy is **✓ available verbatim** from the deck unless noted.

### 7.1 Home
Hero H1 + deck tagline *"We aim to render our clients such a service to enable them achieve their business goals."* · tagline chip **Consultancy • Outsourcing • Recruitment** · CTAs (Services, Contact). Sections: sectors served (Insurance/Telecom/Banking) · three pillar cards (color-coded) · Why "Trustworthy partner" line · services grid preview · client logo strip · CTA band.

### 7.2 About Us  ✓
Verbatim from deck p2: intro, quality-provider paragraph, philosophy, the **"Innovation"** highlight quote, automation/IT paragraph. + **Management team** (3): Pankaj Mohan – Director; Sudha Agarwal – Director (Finance); Ashlesh Bokade – Head IT (bios verbatim from current content doc). No photos in source → monogram avatars unless supplied.

### 7.3 Services overview  ✓
Grid of all 10 services grouped by pillar, each color-coded card → detail page.

### 7.4 Service detail template — content status
| Service | Pillar | Copy |
|---|---|---|
| Financial Consultancy | Consultancy | ✓ deck p3 (intro + 5+ service bullets) |
| Tax Consultancy | Consultancy | ✓ deck p4 (intro + 7 bullets) |
| Reconciliation Services | Outsourcing | ✓ deck p5 (intro, 4 types, report list) |
| Accounts Payable | Outsourcing | ✓ deck p6 (intro + 12 bullets) |
| Call-Centre Services | Outsourcing | ✓ deck p7 (intro + insurance & telecom/bank sets) |
| Corporate Events & Road Show | Outsourcing | ✓ deck p8 (full write-up) |
| Recruitment | HR | ✓ deck p9 (intro + areas of expertise) |
| Contract Staffing | HR | ✓ deck p10 (full write-up) |
| Payroll Management | HR | ✓ deck p10 (intro + services list) |
| Employment Verification | HR | ⚠ interim (existing `.doc`); revised write-up incoming |

For ⚠ EV: render clean on-brand page with interim copy; swap when revised text arrives.

### 7.5 Clients  ✓
Logo wall (15, from deck p11): Reliance Nippon Life · Pitney Bowes · IndiaFirst Life · Birla Sun Life · Aegon Life · Kedaara Capital · Tata AIG · HDFC Bank · Aditya Birla Health · Reliance Capital · Airtel · Vodafone · First Advantage · PNB MetLife · Aircel. Include the deck's trademark **disclaimer** verbatim. Logos extracted from the deck.

### 7.6 Career  ✓
Verbatim from current doc: *"A place where employees future aspirations are evolved!"* + benefits blurb + "post your resume on **jobs@corpsolutions.in**". Optional apply form → email.

### 7.7 Contact  ✓ (from deck p12)
- **Head Office:** CorpSolutions Services Private Limited, 436-437, Blue Rose Industrial Estate, Western Express Highway, Borivali (East), Mumbai – 400 066. Phone: **+91 22 4226 9015**. Email: **info@corpsolutions.in**
- **Branch Office:** 48, Canal West Road, Near RG Kar Hospital, Next to Muthoot Finance, Kolkata – 700 004. Phone: **033-2985 0112**. Email: info@corpsolutions.in
- Contact form + embedded map(s). ⚠ confirm form destination email (default `info@corpsolutions.in`).

---

## 8. Component Inventory
`Header` (transparent→solid) · `MegaMenu` (3-col, keyboard-accessible, pillar-colored) · `MobileNav` · `Footer` (nav + both offices + copyright) · `Layout`. UI: `Button`, `Reveal`, `SectionHeading`, `Card`, `Stat`, `Chip`, `Diamond`, `Icon`. Sections: `Hero`, `PillarCards`, `ServicesGrid`, `TeamGrid`, `LogoWall`, `OfficesBlock`, `ContactForm`, `CTABand`. Content-driven: `ServiceDetail` (reads one `services.ts` entry).

---

## 9. Logo (SVG recreation)
Recreate the **"CorpSolutions"** navy wordmark + underline + tagline "Consultancy • Outsourcing • Recruitment". `Logo.tsx` color-adaptive (light-on-dark over hero; navy-on-light on light sections). `favicon.svg` = "CS" monogram in a diamond. Original `.cdr` kept for reference only.

---

## 10. Forms (no backend)
1. **Amplify + SES (recommended):** form → API Gateway + Lambda → SES email to `info@corpsolutions.in` / `jobs@corpsolutions.in`. All-AWS.
2. **Third-party endpoint** (Formspree/Web3Forms): fastest, zero backend.
Both: client validation, honeypot spam guard, success/error states.

---

## 11. AWS Amplify Deployment
`npm run build` → `dist/`. `amplify.yml`:
```yaml
version: 1
frontend:
  phases:
    preBuild: { commands: [ npm ci ] }
    build:    { commands: [ npm run build ] }
  artifacts: { baseDirectory: dist, files: [ "**/*" ] }
  cache:     { paths: [ node_modules/**/* ] }
```
SPA rewrite (non-file paths → `/index.html`, 200). Connect `gargmanash/corpsolutions-website` in Amplify console → auto-deploy on push to `main`; preview branches for review. Custom domain + TLS via Amplify.

---

## 12. Quality Bar
Lighthouse ≥ 90 all categories · images webp/avif, lazy, sized · fonts woff2 preloaded · code-split routes · semantic landmarks, keyboard mega-menu, visible focus, alt text, AA contrast, reduced-motion · per-route title/meta/OG (react-helmet-async) · sitemap.xml, robots.txt, JSON-LD `Organization` (name, both offices, phones) · breakpoints 360/768/1024/1280+ mobile-first.

---

## 13. Build Phases
1. **M0 – Scaffold & pipeline:** Vite+TS+Router, tokens, global styles, fonts, Layout/Header/Footer/MegaMenu, logo SVG; deploy empty shell to Amplify (prove pipeline early).
2. **M1 – Content model:** all `content/*` populated verbatim from deck; extract client logos.
3. **M2 – Home + About + Team:** hero, pillars, motion system.
4. **M3 – Services:** overview + `ServiceDetail` + all 10 pages.
5. **M4 – Clients / Career / Contact:** logo wall, forms, offices, map.
6. **M5 – Polish:** design review, a11y, Lighthouse, SEO/meta, OG, favicon.
7. **M6 – Launch:** custom domain, swap revised EV copy, legacy redirects.

---

## 14. Open Items / Needs From You
1. **Revised Employment Verification** write-up (incoming; interim copy used meanwhile).
2. **Form destination email** — default `info@corpsolutions.in` unless told otherwise.
3. **Domain** to deploy to (corpsolutions.in or other).
4. **Team photos** (optional; else monogram avatars).
5. Design-review picks: **display font** (Space Grotesk vs Fraunces), **forms path** (Amplify+SES vs third-party).
6. Confirm **GitHub repo name** `corpsolutions-website` before first push.

---

## 15. Content Source Map
| Content | Source (priority: deck > current doc > 2011 backup) |
|---|---|
| Brand, colors, logo, hero line | `CorpSolutions_Profile...pdf` |
| All 10 service write-ups | deck pp.3–10 |
| About / Innovation quote | deck p2 |
| Clients (15 logos + disclaimer) | deck p11 |
| Contacts (both offices) | deck p12 / current content doc |
| Management team (3) | `CorpSolutions- Current Web Content with Changes.doc` |
| Careers | current content doc |
| Employment Verification (interim) | `Employment Verification - Content.doc` |
| Logo vector (reference) | `Corpsolutions Logo.cdr` |
