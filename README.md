# GM GYM — Jankipuram, Lucknow

A premium single-page gym website built with Next.js 16, React 19 and Tailwind CSS 4.

**Live demo:** deployment link added after Vercel deploy

## Brand

- **Name:** GM GYM
- **Phone / WhatsApp:** +91 94533 26595
- **Location:** Behind Sahara States, Sector F / Sector D, Jankipuram, Lucknow, Uttar Pradesh
- **Hours:** Monday–Saturday, 6:00 AM – 9:30 PM · Sunday closed

## What to edit

| Content | File |
| --- | --- |
| Phone, address, hours, Google link, map | `lib/site.ts` |
| Membership prices, features and WhatsApp messages | `lib/site.ts` → `plans` |
| Facilities, trainer demo profiles, sample reviews, gallery | `lib/site.ts` |
| Global colours and typography | `app/globals.css` |
| Metadata | `app/layout.tsx` |

### Membership / WhatsApp

Each plan has its own pre-filled message. The helper `whatsappUrl(message)` encodes the message with `encodeURIComponent()` and opens `https://wa.me/919453326595` in a new tab. Update the price in both the card data and the message.

### Demo content

This is a demonstration website. Prices are sample estimates. Trainer cards are labelled demo profiles, testimonials are labelled sample placeholders, and transformation visuals are labelled illustrative. Replace them with verified content before launch.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

Deploy on Vercel as a standard Next.js project. Optionally set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical URLs, robots and sitemap use it.
