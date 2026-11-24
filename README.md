# PPP website overhaul — review checkpoint

Working branch: `redesign/website-overhaul`. Baseline: `16698a0a5b041b6b07d5e79137a4ade44239bfeb` from `AndyTPV/perfect_protein_partners`.

This is the first Next.js implementation of the approved navy/blue website direction. It is a review build, not an instruction to release to the production domain.

## Included

- Responsive homepage, seal, testing/reporting, process, transparency, formulation opportunities, about and contact pages.
- Keyboard-accessible process and report tabs, mobile navigation and native product-story dialog.
- Restyled enquiry form, server-side validation, Turnstile and Resend integration, explicit provider error handling, and preview mode that never sends enquiries.
- Updated metadata, canonical URLs, sharing artwork, icons, sitemap and robots rules.
- The approved generated hero image, compressed for the website. Concept imagery depicts no actual awarded product or client.

## Run

```sh
npm ci
npm run dev
npm test
npm run build
```

## Enquiry delivery

The form only calls Turnstile and Resend when `VERCEL_ENV=production`. Local and Vercel Preview builds validate a sample enquiry and return a clear preview response without calling external services or storing messages.

Production retains the existing environment-variable names: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`. Configure these in Vercel; do not place their values in source code. No secret values were copied into this branch.

Before release, verify the allowed Turnstile hostnames and recipient configuration, then authorize an actual delivery check. Unit tests use mocked providers and send no messages.

## Content basis and review

Copy reflects the November 19 seal, product-knowledge and transparency flyers (v3), seal outreach companion (v2) and results-preview document (v2). No internal sample measurements or client identifiers are reproduced. Detailed reporting capabilities are subject to agreed scope. QR product pages and public summaries remain proposed services. A live award database and tier thresholds are not implemented.

Final logo/seal artwork, tier explanations, contact/privacy wording, any case-study permissions, and film assets require review before launch. An initial motion study was prepared; video production is paused and the banner currently uses the approved still image.

## Checkpoint and next review

The November 21, 2026 desktop version is approved as a stopping point. The mobile homepage layout needs a dedicated review in the next session. The audience line remains removed pending wording from Andy, and video production is paused while the approved still image is used in the banner.

## GitHub workflow

Keep this checkpoint on `redesign/website-overhaul` with a draft pull request for review. Complete the mobile and remaining content reviews before merging or releasing. The current production website stays on `main`.
