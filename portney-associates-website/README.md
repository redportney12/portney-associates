# Portney & Associates LLC — Website

A production-ready marketing site for a boutique executive advisory firm serving
public health, healthcare, emergency management, and government leaders.

Built with **Next.js (App Router) · React · TypeScript · Tailwind CSS**.
Deployable to **Vercel**.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

### Scripts
| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

### Requirements
- Node.js 18.18+ (Node 20 or 22 recommended)
- A [Resend](https://resend.com) account for contact-form email

---

## Environment variables

See `.env.example`. Nothing sensitive is exposed to the client except the values
prefixed `NEXT_PUBLIC_`.

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes (for form) | Server-only. Never exposed. |
| `CONTACT_TO_EMAIL` | yes (for form) | Where inquiries are delivered. |
| `CONTACT_FROM_EMAIL` | yes (for form) | Must be a verified Resend sender/domain. |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical origin, no trailing slash. Drives metadata, sitemap, robots, JSON-LD. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | no | Optional privacy-friendly analytics. |

If email vars are missing, the form fails gracefully (HTTP 503) and never leaks details.

---

## Project structure

```
app/                 Routes (App Router)
  page.tsx           Home
  services/          Services
  about/             About (company)
  jonathan-portney/  Founder profile (definitive entity page)
  contact/           Contact + form
  privacy/           Privacy placeholder (noindex until legal review)
  accessibility/     Accessibility placeholder
  api/contact/       Contact route handler (Zod + Resend)
  sitemap.ts robots.ts not-found.tsx globals.css layout.tsx
components/          layout · sections · ui · forms
content/             All copy as structured data (site, services, about, founder, contact)
lib/                 metadata · schema (JSON-LD) · validation · icons · utils
public/              images · logo · social  (README in each with exact filenames/sizes)
types/               Shared types
```

All page copy lives in `content/*` so it can migrate to a CMS without touching UI.

---

## Deploying to Vercel
1. Push to a Git repo and import into Vercel.
2. Add the environment variables above (Production + Preview).
3. Set `NEXT_PUBLIC_SITE_URL` to the final canonical domain.
4. Choose ONE canonical host (www **or** non-www) in the domain settings and
   redirect the other. HTTP→HTTPS is automatic on Vercel.
5. Enable Deployment Protection on Preview to keep staging out of search.

---

## Before launch — what is intentionally a placeholder

Nothing on this site is fabricated. The following are clearly marked placeholders
(search the codebase for `TODO:`):

- Logo files (`public/logo/…`) — a typographic fallback renders until added.
- Photography (`public/images/…`) — labeled image slots with exact dimensions.
- Social/OG images (`public/social/…`).
- Contact details, LinkedIn/Yelp URLs (`content/site.ts`).
- Founder bio specifics, timeline, and credentials (`content/founder.ts`) — hidden
  or flagged until verified.
- Testimonials (`content/site.ts`) — rendered with a visible "not a client statement" badge.
- Procurement identifiers — UEI, SAM, NAICS, insurance (`content/services.ts`).
- Privacy & Accessibility copy — require professional review; both are `noindex`.

Structured data (`lib/schema.ts`) only emits `sameAs` URLs once they are real,
so no fake profiles are ever published.

See `STRATEGY-AND-SEO.md` for positioning, the founder-entity SEO plan, the
Google Search launch checklist, the authority-building plan, and the pre-launch
information checklist.
