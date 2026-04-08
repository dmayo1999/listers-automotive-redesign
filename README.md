# Listers Automotive Service — Website Redesign Pipeline
**Prepared by:** David Gibson · [dgib.me](https://dgib.me)
**Date:** June 2025
**Business:** Listers Automotive Service · Palm Bay, FL
**Current site:** https://www.listersauto.com

---

## QUICK REFERENCE

| Field | Detail |
|-------|--------|
| Owner | Butch Lister |
| Phone | (321) 728-0710 |
| Address | 1730 Main Street NE, Palm Bay, FL 32905 |
| Hours | Mon–Fri 8am–5:30pm · Sat–Sun Closed |
| Google Rating | 4.9 ★ / 288+ reviews |
| Years in business | 25 years (est. 2001) |
| Category | Full-Service Auto Repair |
| Project tier | Standard business site (5–7 pages) |
| Recommended price | **$1,100** |
| Priority | URGENT — generic industry template, duplicate nav links, stale testimonials |

---

## PART 1: IMPLEMENTATION PLAN

### 1. Design Direction

**Color Palette**
Keep Listers' established black/white/red identity — it has real equity — but execute it at a premium level instead of the generic template's flat treatment.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | White | `#FFFFFF` |
| Background (alt / dark sections) | Near-black | `#111111` |
| Background (mid sections) | Off-white / light gray | `#F7F7F7` |
| Primary text | Dark charcoal | `#1A1A1A` |
| Accent / hero color | Lister's Red | `#D13426` |
| Accent hover | Darker red | `#A8281D` |
| Secondary accent | Mid gray | `#6B7280` |
| Dividers | Light gray | `#E5E7EB` |

**Typography**
- **Headings:** [Oswald](https://fonts.google.com/specimen/Oswald) — Strong, mechanical, built for auto-service brands. Weight 700. Pairs perfectly with the bulldog logo.
- **Subheadings / labels:** Oswald weight 500, slightly reduced size, uppercase letter-spacing
- **Body copy:** [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) — Clean, trustworthy, highly readable at small sizes. Weight 400/600.
- **Accent / callout text:** [Montserrat](https://fonts.google.com/specimen/Montserrat) for stats, badges, trust indicators

**Mood / Vibe**
Confident, clean, trustworthy. Not flashy — Lister's earns trust through transparency and longevity, so the site should feel the same way. Think: dark header with bold red accents, clean white service pages, real photos of Butch and the shop, and 4.9-star credibility front and center. The bulldog logo is a great asset — use it prominently.

---

### 2. Sitemap

| Page | Purpose |
|------|---------|
| **Home** | Lead with the 4.9-star reputation, 25 years in Palm Bay, and a clear "Request Service" CTA |
| **Services** | Comprehensive service list with descriptions — auto repair, AC, brakes, electrical, tires, towing, etc. |
| **About Us** | Butch Lister's story, the shop's 25-year track record, the team, the guarantee |
| **Reviews** | Dedicated testimonials page pulling from Google, SureCritic, and direct customer quotes |
| **Blog / Tips** | Keep the existing blog content (oil colors, oil changes, suspension) — it has SEO value |
| **Contact / Appointment** | Single-purpose contact page with appointment form, phone, address, hours, and Google map |

---

### 3. Page-by-Page Breakdown

#### HOME PAGE

**Section 1 — Hero (full-viewport)**
- Layout: Full-width, dark background (#111111), text centered or left-aligned over subtle texture (engine tread or brushed metal)
- Headline: `Palm Bay's Most Trusted Auto Shop` — Oswald 700, 68px desktop / 40px mobile, white
- Subheadline: `4.9 Stars · 25 Years Serving Brevard County · Honest Estimates Every Time` — Source Sans, 20px, light gray
- Primary CTA: `REQUEST APPOINTMENT` — red background, white text, large button
- Secondary CTA: `Call (321) 728-0710` — ghost style, white border
- Trust badge strip below CTAs: "BBB Accredited" / "ASE Certified" / "25 Years in Business" (white icon blocks)
- Mobile: Full-width hero, stacked CTAs, headline 36px

**Section 2 — Services Grid**
- Layout: 3×2 grid of service category cards (6 cards)
- Background: White
- Each card: Icon (line art, red), service category name (Oswald bold), 1-line description, arrow link to Services page
- Categories: Engine & Transmission · Brakes & Safety · AC & Heating · Tires & Alignment · Electrical Systems · Diagnostics & Inspection
- Hover state: Red top border appears, subtle shadow lift
- CTA below grid: `See All 30+ Services →`
- Mobile: 2-column grid, then single column on very small screens

**Section 3 — Reputation / Social Proof**
- Layout: Full-width dark background (#111111), 3-column stat row
- Stats: `4.9 ★ Google Rating` · `288+ Reviews` · `25 Years in Palm Bay`
- Each stat: Large number in red (Oswald 700, 56px), label in white Source Sans
- Below stats: 2–3 pull-quote testimonials in white text, attributed
- Testimonials to use:
  - "After ordering expensive parts for my transmission leak, they realized they could seal it without the parts — a huge savings. They even cleaned under my truck. Above and beyond." — Ken L.
  - "It is hard to find any service company where you feel confident you'll receive quality work at a fair price. I have found it with Lister's." — Ken L.
  - "Reliable and honest... saved $400 vs. the dealership quote." (paraphrase from known review)

**Section 4 — Why Lister's**
- Layout: 2-column — left: real photo of Butch Lister or shop interior; right: text block
- Headline: `An Honest Estimate Before We Touch Your Car` — Oswald
- Body (3 short paragraphs): 25-year commitment to Palm Bay. Straight-forward estimates before any work begins. Technicians who will tell you when you DON'T need something.
- Trust signal: "We stand behind all our work with a guarantee you can take to the bank."
- CTA: `About Lister's →`
- Mobile: Photo stacks above text

**Section 5 — Appointment CTA Banner**
- Full-width red banner (#D13426)
- Headline: `Ready to Schedule Service?` — Oswald white, 40px
- Sub: `Most services completed same day. Call or request online.`
- CTA: `REQUEST APPOINTMENT` (white button, red text) + Phone number large
- Mobile: Stack, full-width button

**Section 6 — Blog Preview**
- Layout: 3-column blog card grid (keep existing blog content — SEO value)
- Card: Featured image, category tag, title (Oswald), 1-line excerpt, "Read More →"
- Background: Light gray (#F7F7F7)
- Mobile: Single column

**Section 7 — Footer**
*(see Component Specs)*

---

#### SERVICES PAGE

**Section 1 — Page Hero**
- Headline: `Full-Service Auto Repair — Done Right` — Oswald white on dark background
- Sub: `30+ years of combined technician experience. Every service backed by our guarantee.`

**Section 2 — Services Index**
- Layout: Clean left-side anchor navigation + main content panel (two-column)
- Left nav: Category list (sticky on desktop) — Jump to: AC Service · Alignment · Brakes · Diagnostics · Electrical · Engine & Transmission · European/Asian/Domestic · Heating & Cooling · Tires · Towing · 4x4 Services
- Each category section:
  - Heading (Oswald bold, red underline)
  - 2–4 sentences describing what they do and why it matters for the customer
  - Specific services bulleted
  - CTA link: "Schedule [Service Name] →"
- **Replace the current 30+ individual tiny pages** with one well-organized single page — far better for SEO and UX
- Mobile: Accordion-style — each category expands/collapses

---

#### ABOUT US PAGE

**Section 1 — Butch's Story**
- Layout: 2-column — text left, photo right
- Headline: `Serving Palm Bay Since 2001`
- Body: Introduce Butch Lister. His philosophy: honest estimates, communication throughout every job, no surprise invoices. The story behind opening the shop. The guarantee. Reference: "Thanks Butch and Jessica!" from real review — acknowledge the team by name.
- Pull quote (styled in red): *"You can always ask us about options to keep your auto repair cost low."*

**Section 2 — Team Section**
- Staff cards: Photo + name + role + 1-line bio
- Minimum: Butch Lister, Jessica (mentioned in reviews), other key techs

**Section 3 — Our Promise**
- 3-column grid: Honest Estimates · Quality Work Guaranteed · Same-Day When Possible
- Icons, red accents, Oswald headings

---

#### REVIEWS PAGE

- Pull from Google reviews (live embed via Google Reviews widget or Elfsight) OR static collection of top reviews
- Feature SureCritic badge with link
- 4.9 star stat displayed large at top of page
- Categories: Recent · Testimonials · From Our Community
- **Replace the stale 2020 testimonials on the current site with current, dated reviews**

---

#### CONTACT / APPOINTMENT PAGE

**Section 1 — Contact Info Block**
- Layout: 2-column — left: form; right: info + map
- Address: 1730 Main Street NE, Palm Bay, FL 32905
- Phone: (321) 728-0710 (clickable)
- Hours: Mon–Fri 8:00am–5:30pm · Sat–Sun Closed
- Google map embed

**Section 2 — Appointment Request Form**
Fields: Name · Phone · Email · Vehicle Year/Make/Model · Mileage · Service Needed (dropdown with their categories) · Preferred Date · Message
- Note: This is a request form, not real-time booking (consistent with current practice)
- Form submit: Email to shop's inbox
- Add note: "We'll call to confirm your appointment time within 1 business hour."

---

### 4. Component Specifications

**Navigation Bar**
- Background: #111111 (dark), sticky
- Left: Bulldog logo (white version) + "LISTER'S AUTO" wordmark
- Links: Home · Services · About · Reviews · Blog · Contact (white, Oswald 13px uppercase)
- Active state: Red underline
- CTA button: `REQUEST APPOINTMENT` — red background, white text
- **Fix:** Remove the duplicate nav items (current "Repair Tips" and "Contact Us" both pointed to same URL)
- Mobile: Hamburger menu; full-screen dark nav; links stack vertically

**Footer**
- Background: #111111
- 3-column layout:
  - Col 1: Logo + tagline ("Your Trusted Source for Auto Repair in Palm Bay Since 2001")
  - Col 2: Services quick links, About, Contact
  - Col 3: Address · Phone · Hours · Facebook / LinkedIn icons
- Bottom bar: © 2025 Listers Automotive Service · All Rights Reserved
- SureCritic badge in footer

**Appointment Form CTA (Primary button)**
- Background: `#D13426`, text: `#FFFFFF`
- Oswald 700, 13px uppercase, letter-spacing 0.08em
- Padding: 14px 32px
- Hover: `#A8281D`, slight shadow lift

**Ghost Button**
- Border: 2px solid `#D13426`, text: `#D13426`
- Hover: fill red, text white

**Testimonial Card**
- White background, subtle border
- 5 gold stars (★★★★★)
- Review text: Source Sans italic
- Name + "Google Review" or "SureCritic" badge
- Date stamp (to counter the current "all reviews from 2020" problem)

---

### 5. Technical Notes

**Stack:** Static HTML + Tailwind CSS + vanilla JS. No WordPress (their current CMS is causing the duplicate nav link issue). Deploy to Netlify.

**Breakpoints:** 375px (mobile) · 768px (tablet) · 1280px (desktop)

**SEO — critical wins:**
- Consolidate 30+ individual service pages into 1 well-structured Services page with anchor links — far better UX and consolidates page authority
- Title: "Listers Automotive Service | Auto Repair Palm Bay, FL"
- Meta desc: "Palm Bay's top-rated auto repair shop. 4.9 stars, 25 years serving Brevard County. Honest estimates, quality work guaranteed. Call (321) 728-0710."
- Local business schema (JSON-LD) with correct NAP
- Each service section gets H2 with local keyword (e.g., "Brake Repair in Palm Bay, FL")
- Service area pages can be thin static pages for Melbourne, West Melbourne, Malabar, etc.

**Performance:**
- LCP target < 2.5s
- Replace stock images with real shop/Butch photos
- WebP format, lazy-load all non-hero images

**Fix Priority (on top of redesign):**
1. Remove duplicate nav links (Repair Tips = Contact Us URL — this is a CMS config bug)
2. Update all testimonials to include recent dated reviews
3. Replace generic "Repair Shop Websites" template copyright with custom ownership

---

## PART 2: PRICING ANALYSIS

### Recommended Flat Fee: **$1,100**

**Scope Breakdown:**
- 6 custom-designed pages: Home, Services (consolidated), About, Reviews, Blog (restyled), Contact
- 30+ individual service "template" pages consolidated into clean single Services page
- Duplicate nav link fix
- Fresh testimonials integration (Google reviews widget or Elfsight embed)
- Appointment request form (with proper field set)
- Real photo integration (Butch + shop)
- Local business schema markup
- Mobile-first responsive (375/768/1280)
- 2 rounds of revisions
- **Delivery: 12–14 days**

**Payment Structure:**
- 50% upfront: **$550** — due at kickoff
- 50% on delivery: **$550** — due when site is live and approved

**Optional Upsells:**
| Service | Price |
|---------|-------|
| Monthly maintenance (updates, backups) | $75/mo |
| Google Business Profile optimization | $150 one-time |
| Service area landing pages (Melbourne, West Melbourne, etc.) | $200 one-time |
| Real-time booking integration (if Butch wants to upgrade from form) | $200 one-time |

**Why $1,100 Makes Sense:**
Lister's has a 4.9-star rating and 25 years of reputation that the current template actively undermines. The identical "Repair Shop Websites" layout used by hundreds of competitors makes Lister's look generic in a market where it's clearly the premium option. A custom $1,100 site is less than 2 average repair jobs — and a site that properly showcases Butch's reputation and reviews will convert organic Google searchers at a meaningfully higher rate.

**Comparison Context:**
Auto shop web design agencies charge $3,000–$8,000 for comparable builds. The "Repair Shop Websites" template service they currently use likely charges $100–$200/month — that's $1,200–$2,400/year for a site that looks exactly like every competitor. A one-time custom build at $1,100 will have zero recurring platform fees after launch.

---

## PART 3: EMAIL PITCH

**To:** Butch Lister · (321) 728-0710 or via listersauto.com contact form
**Subject:** Butch — your 4.9 stars deserve a better website

---

Hey Butch,

I came across Lister's while doing some research on auto shops in Palm Bay, and your Google rating stopped me cold — 4.9 stars with nearly 300 reviews is extraordinary. Reviews like "they discovered they could seal my transmission leak without the expensive parts I'd already ordered, and then cleaned my entire undercarriage" tell you everything about how Lister's operates.

So I went to the website to learn more — and I have to be honest with you. The site is built on the same "Repair Shop Websites" template that hundreds of other shops across Florida use. If I pull up almost any competitor in Palm Bay right now, the layout is nearly identical. For a shop with 25 years and a 4.9, that disconnect is real. Your website says "generic auto shop" when your actual business says "best shop in Brevard County."

There are a couple of functional issues too: the "Repair Tips" and "Contact Us" links in your navigation both go to the same URL, and the testimonials on the site are all from 2020. Neither of those details instills confidence for someone visiting for the first time.

I'm David Gibson, a web designer in Brevard County (my work is at dgib.me). I specialize in building fast, clean custom sites for established local businesses — sites that actually reflect the reputation the owner has spent years building. I've already sketched out a direction for a Lister's site: black, white, and your red, Butch's story front and center, a proper appointment form, and your best Google reviews featured prominently.

For a 6-page custom build, I'd do it for **$1,100** — 50% to start, 50% on delivery, roughly 2 weeks turnaround. No recurring platform fees.

Happy to show you what I have in mind — a 15-minute call or stopping by the shop works for me.

David Gibson
dgib.me · david@dgib.me

---

## PART 4: IN-PERSON / PHONE SCRIPT

**Opening:**
"Hey, is Butch available? My name's David Gibson — I'm a web designer in Brevard County. I came across Lister's while doing some research, and I had a quick question about your website. Do you have 90 seconds?"

**Bridge to the problem:**
"So I want to show you something. [Pull up phone.] Your website and about three of your competitors in Palm Bay — including [specific shop name if known] — are all using the exact same 'Repair Shop Websites' template. Same layout, same sections, same stock photos. For a shop with 4.9 stars and 25 years, you're getting lost in the noise."

**Secondary issues:**
"There are also a couple of functional things — your 'Repair Tips' and 'Contact Us' nav links both actually go to the same page, and the testimonials section is showing 2020 reviews. Someone new to Palm Bay who Googles you and checks those out might not get the right impression."

**Mockup teaser:**
"I put together some design notes for a Lister's site that would actually stand apart — your red and black, Butch's story, your best reviews, a real appointment form. Totally custom, not a template anyone else is using."

**Price drop:**
"Full site, six pages, custom design — **$1,100**. Half up front, half when it goes live, usually about two weeks."

**Close:**
"Can I shoot you an email with what I've put together? Or if you'd rather, I can walk you through it here."

---

### Objection Handlers

**"I already have a website — it works fine."**
"It works in the sense that it's there. But pull up [competitor name] right now. Same template, same layout — your site doesn't stand out. And the duplicate nav link is a real UX issue for new customers. The good news is you already have the content and reputation — we just need a site that shows it off correctly."

**"I'm too busy to deal with a website project."**
"That's exactly why I handle everything. You give me your logo, a few photos of the shop, and an hour of your time on a call. I send you a draft in a week. You give me feedback. It goes live. You're not managing it — I am."

**"I can't justify the expense right now."**
"Understood. The $1,100 breaks into two payments — $550 now, $550 when it's done. And the site has no ongoing platform fees. Compare that to whatever your current template service charges per month — at $100–$200/month, you break even on my price within the year, then it's free after that."

---

## STRATEGIC NOTES

- **25-year story is the lead.** Butch has earned credibility over two decades — the site should make that the first thing visitors understand. The current template buries it.
- **"Repair Shop Websites" is a known cheap template service.** If Butch pushes back, you can show him the template provider's own portfolio — it's legitimately the same layout everywhere. This isn't opinion, it's demonstrable.
- **Photo opportunity:** If Butch has real shop photos (the review mentioned a very clean undercarriage), use those. Authenticity beats stock every time in the auto repair niche.
- **SureCritic integration** is worth a mention — it's a niche automotive review platform and adding a live feed widget would differentiate from the 2020 static testimonials.
- **Best outreach vector:** Phone call (321-728-0710) or show up in person. Auto shop owners respect directness. Don't lead with email — call first, email as a follow-up.
- **Jessica** is mentioned warmly by Ken L.'s review — she appears to be a key team member. Acknowledging her in your pitch shows you've actually read the reviews.
