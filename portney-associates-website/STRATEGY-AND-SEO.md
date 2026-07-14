# Portney & Associates LLC — Strategy, SEO & Launch Guide

A companion to the codebase. Covers positioning, the founder-entity SEO strategy,
the launch checklist, authority-building, and the pre-launch information list.

---

## 1. Strategic foundation

**Positioning.** A high-trust, senior-level executive advisory firm for public
institutions and healthcare organizations facing complex, politically sensitive,
operationally difficult, or high-consequence challenges. Not a large generalist
consultancy — a focused practice offering direct access to experienced leadership.

**Primary audiences.** State/county/city government, public health departments,
healthcare and hospital leadership, emergency management agencies, executive teams
and boards, public-sector program administrators.
**Secondary.** Universities, nonprofits, foundations, associations, regional
collaboratives, prime contractors seeking qualified subcontractors.

**Value proposition.** Experienced judgment, direct attention, clear
recommendations, and implementation-focused support — not junior consultants or
generic frameworks.

**Messaging hierarchy.**
1. Tagline — *Leadership for Complex Public Challenges.*
2. Descriptor — Executive advisory for public health, healthcare, emergency
   management, and government leadership.
3. Proof — six capabilities, four differentiators, a four-step engagement model,
   sectors served, verified outcome categories.

**Primary conversion goal.** Qualified consultation inquiries via `/contact`.
Secondary: procurement review on `/services`; founder credibility on
`/jonathan-portney`.

**User journeys.**
- *Government/healthcare exec* → Home (5-second positioning) → Services → Contact.
- *Procurement officer* → Services (procurement block) → Contact.
- *Search for the founder by name* → `/jonathan-portney` → Services → Contact.

**Sitemap (five core pages).** `/` · `/services` · `/about` · `/jonathan-portney`
· `/contact`, plus `/privacy`, `/accessibility`, a 404, sitemap, and robots.
`/insights` is architected but intentionally not launched.

---

## 2. Founder-entity SEO strategy (the key improvement)

Jonathan Portney is treated as a **distinct search entity**, not folded into the
About page. `/jonathan-portney` is the single canonical, indexable page about him.

**Name hierarchy.** Primary: *Jonathan Portney*. Secondary: *Jonathan "JP"
Portney*. Structured-data alternates only: *JP Portney, J. Portney, J Portney*.
The nickname appears naturally once near the top — no keyword stuffing, no visible
repetition of every variant.

**Entity consistency.** `lib/schema.ts` emits:
- `Organization` on the homepage with a stable `@id` (`/#organization`) and
  `founder` → the person `@id`.
- `ProfilePage` + `Person` on `/jonathan-portney` with matching `@id`
  (`/jonathan-portney#jonathan-portney`), `alternateName`, `worksFor` linked back
  to the org `@id`, and `knowsAbout`. Structured data matches visible content.
- `BreadcrumbList` on interior pages.
`sameAs` arrays only include **verified** URLs (empty until you provide them), so
no fabricated or irrelevant profiles are ever emitted.

**Name-variant redirects.** `next.config.mjs` permanently redirects
`/jp-portney`, `/j-portney`, `/jon-portney` → `/jonathan-portney`. These are 301s,
never separate indexable pages, so there are no duplicates.

**Internal linking to the founder** (with natural anchor variation) from the
homepage founder section, the About founder-connection block, the footer, and the
founder page's related-services links. Future insights/case studies should add a
`By Jonathan Portney` byline linking to `/jonathan-portney`.

**External identity — keep this string consistent everywhere:**
```
Jonathan Portney
Founder and Principal
Portney & Associates LLC
```
Align it across: the website, LinkedIn personal + company pages, Google Business
Profile (if eligible), conference speaker pages, professional directories,
government vendor profiles, published articles, and association bios.

---

## 3. Google Search launch checklist
1. Verify the domain in Google Search Console (prefer DNS domain-property).
2. Submit `/sitemap.xml`.
3. Inspect the homepage; request indexing.
4. Inspect `/jonathan-portney`; request indexing.
5. Confirm Google renders the content (URL Inspection → live test).
6. Review Page Indexing reports; fix any excluded/canonical issues.
7. Review Core Web Vitals and mobile usability.
8. Validate structured data (Rich Results Test / Schema validator).
9. Confirm production pages are **not** `noindex` (privacy/accessibility stay noindex by design).
10. Monitor branded searches: *Jonathan Portney, JP Portney, J Portney, Portney &
    Associates, Portney consulting.*
11. Re-check monthly.

**No guarantees.** SEO is supported by technical quality, consistent identity,
useful content, and legitimate third-party references — not by promises of #1
rankings, a Knowledge Panel, or a specific indexing date.

---

## 4. Ethical authority-building plan
Pursue legitimate references only: LinkedIn (personal + company), professional
associations, government vendor directories, conference/webinar/podcast
appearances, university and public-health partnerships, healthcare associations,
chambers of commerce, regional collaboratives, credible directories, and genuine
published articles.
**Never:** purchased backlinks, link farms, PBNs, fake profiles, fake press
releases, directory spam, mass guest posts, or artificial reviews.

---

## 5. Design system (as implemented)

**Color** (`tailwind.config.ts` + `globals.css` tokens): Deep Navy `#081D33`
primary; Warm White `#F7F6F2` primary background; Muted Gold `#C9A46A` accent
(hairlines, small labels, hover) with Dark Gold `#A98349` for accent **text** to
hold WCAG AA. Charcoal text; Soft Gray borders. No large gold text areas, no
bright colors, no glossy effects.

**Type.** Source Serif 4 (editorial headlines) + Inter (executive body), wired via
`next/font` CSS variables. Responsive `clamp()` scale (display/h1–h4/eyebrow).
Uppercase reserved for eyebrows, nav, and small labels.

**Spacing/layout.** 4-based scale; `max-w-container` 1200px; `max-w-measure`
~68ch text measure; generous section padding (`py-20 md:py-28`).

**Components** (all reusable): Header (sticky, transitions), MobileNavigation
(focus-trapped, Escape-close, 44px targets), Footer, PageHero, SectionHeading,
CapabilityCard, Process step grid, TestimonialCard (placeholder-aware), Timeline,
Checklist, CtaPanel, Button/ButtonLink, form fields, ContactForm, Breadcrumb,
Icon, Logo, JsonLd.

**Interaction states.** Default/hover/focus-visible/active/disabled/loading/
success/error are all handled; focus is always visible; state is never conveyed by
color alone.

---

## 6. Accessibility (WCAG 2.2 AA target)
Semantic landmarks, skip-to-content link, logical heading order, keyboard-operable
sticky + mobile nav, visible focus, labeled fields with accessible error and
status messaging (`aria-live`), sufficient contrast, descriptive alt text, reduced-
motion support (`prefers-reduced-motion`), no autoplay, no essential text baked
into images, ≥44px touch targets, body text ≥16px.

---

## 7. Performance notes
Static generation for all content pages; the contact route is the only dynamic
endpoint. Lean shared JS (~102 kB First Load). `next/image` with AVIF/WebP and
explicit dimensions once photography is added; fonts via `next/font` (self-hosted,
`display: swap`). Avoid layout shift by keeping the declared image ratios.

---

## 8. Pre-launch information checklist
Provide these to finalize (development does not block on them — placeholders ship):

- [ ] Final domain (and www vs non-www preference)
- [ ] Professional email · business phone
- [ ] LinkedIn personal URL · LinkedIn company URL · Yelp URL (if any)
- [ ] Approved logo files (5, named per `public/logo/README.md`)
- [ ] Founder headshot + final biography
- [ ] Degrees · certifications · licenses · affiliations
- [ ] Employment timeline (organizations, roles, dates, scope)
- [ ] Vendor registrations · UEI · SAM · NAICS · insurance · capability statement
- [ ] Verified testimonials (name/title/organization) and any verifiable metrics
- [ ] Mailing address or service-area preference
- [ ] Contact-form destination email · analytics preference
- [ ] Legal review of privacy policy and accessibility statement

---

## 9. Final design review — self-assessment
Would a state health officer, hospital CEO, or procurement officer trust and
understand this firm? Yes: positioning is clear within five seconds, the visual
system is restrained and supports (not competes with) the logo, services are
scannable, the founder page establishes the entity, the contact path is obvious,
mobile carries the same substance, and no unsupported claims appear. The design is
timeless enough to remain appropriate for a decade and appropriate to a
$10,000–$25,000 engagement.
