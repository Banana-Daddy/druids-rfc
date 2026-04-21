# Strathcona Druids RFC — Design Brief

**Mode**: PRO-MAX
**Date**: 2026-04-21
**Source**: https://www.druidsrfc.com/

---

## Brand Synopsis

The Strathcona Druids Rugby Football Club is a 66-year-old Alberta rugby institution born of a Welshman's challenge at a 1959 party. Founder Chris Battin boasted he could form a side to beat any team in Alberta. He followed through. First captain Brian Jones chose the name — The Druids — for a club that was already wearing red. A three-year championship run from 1966–68 set the DNA, and subsequent decades brought a security arm that ran Commonwealth Stadium and the Grey Cup, junior boys in the '80s, junior girls and senior women's rugby in the '90s, and a 1997 merger with the Strathcona Outlaws that brought the club home to Sherwood Park.

Today the club runs five programs (Mini, Junior Boys, Junior Girls, Senior Men, Senior Women) out of **Lynn Davies Rugby Park** — grounds renamed in 2010 for the Sherwood Park pioneer who acquired and maintained them. In April 2026 they received a **$699,508 provincial grant** from Alberta's Community Facility Enhancement Program to build a new modular clubhouse and realign the pitches.

The existing site is a Wix template — functional but flat. It buries the heritage story, undersells the grant, and never expresses the club's red identity visually. Every Druid who reads their own history deserves more than a template.

---

## Design Decisions

### Direction: Heritage Editorial (single direction)

**Mood**: Rugged heritage. Sixty-six years of Alberta rugby with a Welsh soul. Editorial weight, not corporate gloss. Red as a signature, not a decoration. Black as the canvas. Gold reserved for glory.

**Fonts** (Google Fonts):
- Display: **Bebas Neue** — condensed sans, all-caps, masthead energy. Used for section heads, year stamps, stats, CTAs.
- Body: **Source Sans 3** — modern humanist sans, highly legible. Multi-weight (300–700).
- Accent: **Playfair Display Italic** — used only for pullquotes and the running callout. Serif italic adds editorial punctuation.
- Imports: `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@1,500&display=swap`

**Colors**:
- `#0A0A0A` **Ink** — primary canvas (hero + heritage + timeline + programs + support + sponsor + footer)
- `#F5F2EC` **Paper** — cream paper canvas (grant banner, stats, Park section) — classic editorial contrast
- `#DC2626` **Red** — signature brand accent, CTAs, dot markers, corner decorators, tagline
- `#7F1D1D` **Deep red** — text on paper for heritage eyebrows
- `#FBBF24` **Gold** — 1966–68 championship era year, READ THE ANNOUNCEMENT arrow, small eyebrow accents
- `#525252` **Muted** — supporting text

Palette rationale: red alone would flatten into a one-note sports site. Pairing deep red with ink-black and cream-paper gives the editorial magazine contrast the story deserves, and gold carries the championship-era accent the skill recommended.

**Layout style**: Editorial grid with oversized typography. Dark hero with ghosted DRUIDS wordmark, cream paper grant banner for high contrast, sticky-header timeline with red dots, asymmetric 2×2 program cards with red corner decorators, massive DRUIDS wordmark again at footer.

**Signature moves**:
1. **Oversized "DRUIDS" wordmark** — rendered in red-to-transparent gradient at the hero base AND as ghosted stroke-only text at heritage/programs sections AND again in massive stroke form at the footer. Repeated motif = magazine masthead running through the issue.
2. **Year stamps in Bebas Neue** — 1959 / 1966–68 (gold) / 1975 / 1980s / 1990s / 2010 (red) / 2020 / 2026 (red) — rendered huge, scroll-anchored, with red timeline dots.
3. **Red corner decorators** on program cards — borrowed translation of 21st.dev Features 10 card decorator treatment.

**Trends used** (layered via the skill's Vibrant & Block-based style direction, applied with heritage restraint):
- Big type / editorial oversizing
- Bold color-block contrast (ink ↔ paper ↔ red)
- Horizontally scrolling logo marquee
- Scroll-reveal animation (IntersectionObserver, iOS-safe, content visible by default)
- Sticky-header timeline ledger pattern

**Logos used (Logo Search)**: Used `logo_search` for Instagram/Facebook/Twitter initially but swapped to inline hand-crafted SVGs for the footer social icons to keep them monochrome + hoverable. Logo Search's Instagram/Facebook logos were too brand-color-locked for a monochrome-paper-on-red-hover treatment.

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Hero | Hero Section (bg image + slogan + CTA + contact strip) | `hero editorial cinematic bold` | `21st-sources/hero-section.tsx` | Split-screen editorial layout concept, bottom contact-info strip pattern, uppercase tracked slogan lockup, clip-path reveal consideration |
| Program cards | Features 10 / FeatureCard | `program cards asymmetric editorial` | `21st-sources/features-10-cards.tsx` | 2-column FeatureCard grid with corner decorator SVG overlay, heading + description inner treatment |
| Footer | Modem Animated Footer | `footer oversized typographic` | `21st-sources/animated-footer.tsx` | Massive brand-name gradient text ghosted behind contact info as editorial close |
| Nav (reference, not cached) | Resizable Navbar / Floating Header | `nav sticky minimal uppercase` | — | Sticky-on-scroll treatment; uppercase tracked link label style |
| Timeline (reference, not cached) | Modern Timeline | `timeline history editorial vertical` | — | Vertical ribbon with dot markers, year + category + description per row |
| Stats (reference, not cached) | Case Studies w/ Metrics | `stats counter oversized numbers` | — | Oversized numeric + small label pattern |

---

## Content Inventory

### Images used (hotlinked from Wix CDN)
- Club crest (footer outline, CMYK): `https://static.wixstatic.com/media/5c77aa_0a3b4f2049be496699f4ba28a066b300~mv2.png`
- Grant announcement photo: `https://static.wixstatic.com/media/e73b12_2daa232ea546467c89f07b265620c559~mv2.png`
- Lynn Davies Rugby Park: `https://static.wixstatic.com/media/e73b12_0960beeb91b8413988504209611cbbde~mv2.png`
- Sponsor logos (9): Revolution Crane, Escom, Pasifika, North 49 Hi, Summerside C+S Physio, IS2, Kukri Sports, Windermere Studios, Brandz Marketing

### Images generated (local, in `images/`)
- `hero.jpg` — Grok Imagine Standard 2K, 16:9, hands gripping weathered rugby ball against crimson jersey (see IMAGE_LOG.md)

### Key copy — factual content pulled from site
- "In the fall of 1959, Welshman Chris Battin boldly stated at a party that he would form a rugby team that could beat any other in the province of Alberta."
- "three consecutive rugby championship titles in both Edmonton and Alberta from 1966 to 1968"
- "The Druids by Brian Jones, the club's first captain"
- "$699,508 through Alberta's Community Facility Enhancement Program (CFEP)" — April 8 — Hon. Nate Glubish MLA — Stalcorp / Total Modular Limited / McElhanney

### Links preserved
- Volunteer signup: https://signup.com/go/bsyEHDr
- Facebook, Twitter, Instagram (@druidsrfc)
- tel: 780-449-1793
- mailto: info@, president@, juniors@, mensrugby@, womensrugby@, facilities@

---

## Image Generation Prompts

Only one image was auto-generated for this build; the rest were hotlinked from the existing Wix CDN. If Zack wants to upgrade sections with new heritage art, here are prompts optimized for Grok Imagine:

### Additional Image 1 — Heritage Section Portrait (optional upgrade)
- **Slot**: Heritage story section right-column visual (between the 1959 founding narrative and timeline)
- **Aspect ratio**: 4:5 portrait
- **Prompt**: "Moody editorial still-life photograph of a weathered cream-and-crimson rugby jersey folded on a dark oak table beside a tarnished 1960s-era leather rugby ball and a creased black-and-white team photograph, single bronze-warm window light raking across the fabric from the left, deep shadow falling to the right, shot on 50mm at f/2.0, shallow depth of field focused on the jersey's stitched number, documentary heritage sports photography, muted wine-red, cream, and bronze palette, faint 35mm film grain, no faces or specific team markings visible."
- **Why**: Adds a quiet editorial breath between the founding story and the timeline. Reinforces 66-year heritage without depicting the actual team.
- **Verified facts**: Founder was Welsh (1959), club wore red early, championship era 1966–68. Image is generic atmosphere, not specific to any team member.
- **Status**: Prompt ready; not generated (budget reserved)

### Additional Image 2 — Lynn Davies Park Atmosphere (optional upgrade)
- **Slot**: Park section background texture OR a secondary visual alongside the existing park photo
- **Aspect ratio**: 21:9 ultra-wide
- **Prompt**: "Wide-angle photograph of a silhouetted rugby goalpost against a dramatic Alberta prairie dusk sky, deep indigo fading to warm amber along the horizon, empty grass pitch in the foreground with a single weathered line of chalk, long raking shadows, no people, no buildings, no readable signage, shot on 24mm at f/5.6 with infinite depth of field, documentary landscape photography feel, muted sage and dusty amber palette with a single strip of warm red horizon, 35mm film grain."
- **Why**: Adds a sense of place (Alberta prairie) without depicting the actual Lynn Davies Rugby Park — a filler landscape that supports the mood.
- **Verified facts**: Sherwood Park is in the Edmonton metro area, on the Alberta prairie. Dusk lighting is common to the landscape.
- **Status**: Prompt ready; not generated (budget reserved)

---

## Build Timing
| Phase | Duration |
|---|---|
| Step 1: READ | 158s (~2m 38s) |
| Step 2: DIRECTION (skill + 21st.dev + cache) | 217s (~3m 37s) |
| Step 3: BUILD (HTML + preview verify) | 632s (~10m 32s) |
| Hero image generation (parallel, inside BUILD) | 330s (~5m 30s — includes QA) |
| Step 4: VERIFY (factual accuracy review) | *in progress* |
| Step 5: BRIEF (this file) | *in progress* |
| Step 6: PUBLISH | *pending* |
| Step 7: DELIVER | *pending* |

*Full timing will be updated at delivery.*

---

## Suggested Next Mockups

1. **Fixtures + schedule page** — Senior Men's and Women's home fixtures with opponents, dates, weather forecasts, live scorekeeping link. Pull from Rugby Alberta or build a seasonal calendar module.
2. **Individual program detail pages** — Mini Rugby, Junior Boys, Junior Girls, Senior Men, Senior Women each get a dedicated page with coach intros (without naming individuals unless confirmed), practice schedules, registration CTAs, age-specific content.
3. **Lynn Davies: The Man and the Park** — a dedicated tribute page for the club's namesake with CBC article references, timeline of his contributions, and historical photos. Excellent content-marketing anchor.
4. **Membership + Registration flow** — Alberta Rugby Union Sport Lomo registration wrapper with tier comparison (family rates, junior discounts, volunteer credits), payment preview, insurance fee breakdown.
5. **Sponsor package page** — tier table (Club / Junior / Tournament / Door Prize), exposure examples (mockups of logo placement, jersey patches, ground signage), ROI case studies, downloadable PDF deck.

---

## Production Notes

To build this into a real site, use Claude Code (Opus, high effort).

**Recommended stack**: Next.js 15 (app router) + Tailwind CSS + Sanity.io or Payload CMS for content management. The long-form heritage text, timeline entries, board directory, and news blog all benefit from a structured content model. Deploy to Vercel.

**Why not Wix**: The existing Wix instance is holding the club back. Migrating to a real framework buys typography control (custom fonts work correctly), faster page load (no Wix runtime weight), and a proper React/Tailwind codebase that can evolve with the club. The cached 21st.dev components in `21st-sources/` drop in to Next.js directly — HANDOFF MODE already has the source ready.

**Key production features to implement**:
- CMS-driven timeline entries and news posts
- TeamSnap or Sport Lomo integration for registration
- Facility rentals booking form (email pipeline for now, Stripe for deposits later)
- Mailchimp or Beehiiv newsletter (club + junior)
- Google Analytics 4 + Plausible for sponsor reporting
- Next.js Image with srcset for all hotlinked assets
- Open Graph + Twitter card images for each page (the current site has none)
- Sitemap + robots.txt for Alberta Rugby Union discoverability

**Accessibility**: The mockup meets WCAG 4.5:1 contrast on all body text, includes focus-visible rings, respects prefers-reduced-motion, and keeps all content visible by default (iOS-safe). Keep these in the production build.
