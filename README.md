# PPP website redesign — review branch

The approved homepage leads to six primary pages: Home, The seal, Testing & results, Consulting & formulation, About PPP and Contact. The working branch is `redesign/website-overhaul`; production remains on `main`.

## Run

```sh
npm ci
npm run dev
npm test
npm run build
```

## Review with Andy

Open `/review` in a local or Vercel Preview build. Nine stable IDs, `PPP-A01` through `PPP-A09`, link to highlighted notes beside the relevant content. The IDs and questions live in `lib/andy-review.mjs`; a section's `reviewId` connects it to its note.

- A01–A03: star meanings, packaging permissions and QR publishing.
- A04–A05: report deliverables and practical testing arrangements.
- A06–A07: SRT explanation and consulting requirements.
- A08–A09: company story and Andy/team background.

These are requests for input, not finalized criteria or terms. Review notes and their banner link are omitted when `VERCEL_ENV=production`; `/review` returns not found in that environment. The notes should be resolved before production release, not merely hidden.

## Navigation and examples

`/process` permanently redirects to `/testing#how-it-works`. `/transparency` permanently redirects to `/seal#product-transparency`. Current navigation links directly to the consolidated destinations. `/opportunities` remains the stable URL for Consulting & formulation.

The packaging QR opens a native dialog on click and the same summary at `/products/partner-protein-example` on scan. It encodes the current website origin after hydration. The standalone example has noindex metadata and stays out of the sitemap and main menu. It is unlisted, not access-controlled. Vercel Preview authentication may still require a login when scanning from another device.

All Partner Protein data and packaging are fictional. The report preview uses mg per gram of protein. The QR summary uses quantities per 100 g of product. Its figures and group totals share a tested source in `lib/product-example.mjs`. SRT color grouping illustrates the layout and is not a computed evaluation. The QR SVG has been independently decoded during development.

## Enquiries

The form only calls Turnstile and Resend when `VERCEL_ENV=production`. Local and Vercel Preview builds validate an enquiry and show a preview response without sending or storing a message.

Production uses `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`. Configure values in Vercel, never in source. Real contact delivery and production challenge configuration require an authorized release check.

## Release status

This is a draft review checkpoint. No production merge, promotion or domain switch is authorized by the review workflow. Mobile review and Andy's flagged details remain pending. Keep the company identity distinct from product-specific star ratings. Testing scope, contextual limitations and cost uncertainty are explained on their relevant pages.
