# investorpropertyinsurance.com

Next.js 14 marketing site for **InvestorPropertyInsurance.com**, the real estate investor insurance brand of Vantage Point Risk Partners LLC. Coverage for every asset class across the 12 western states.

- Phone: Call or text 541-681-8793
- Email: richard@vantagepointrisk.com
- Quote flow: `/get-a-quote` (Sembley short form, redirects to `/thank-you`)

## Stack

- Next.js 14 App Router
- React 18, TypeScript
- Tailwind CSS, dark theme, mobile-first
- Markdown blog posts in `content/blog/`
- Schema.org JSON-LD on every page

## Pages (18)

Core: `/`, `/rentals-rehabs`, `/short-term-rentals`, `/ground-up-construction`, `/multifamily`, `/commercial-property`

Big 5: `/how-much-does-real-estate-investor-insurance-cost`, `/real-estate-investor-insurance-problems`, `/landlord-insurance-vs-investor-insurance`, `/best-insurance-for-real-estate-investors`, `/real-estate-investor-insurance-reviews`

Conversion: `/get-a-quote`, `/thank-you`, `/faq`, `/real-estate-investor-insurance-calculator`, `/about`, `/blog`, `/contact`

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Adding blog posts

Drop a Markdown file into `content/blog/`:

```markdown
---
title: "Post title"
date: 2026-04-25
tags: [coverage, rental]
excerpt: "First two sentences."
---

Post body in Markdown.
```

## Deployment

Configured for Vercel via `vercel.json`. Connect the GitHub repo to Vercel and map `investorpropertyinsurance.com`.
