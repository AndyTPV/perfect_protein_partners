import Link from "next/link";
import { notFound } from "next/navigation";
import { andyReviews } from "@/lib/andy-review.mjs";
export const metadata = { title: "Andy review checklist", robots: { index: false, follow: false } };
export default function ReviewPage() {
  if (process.env.VERCEL_ENV === "production") notFound();
  return <section className="wrap section review-index"><p className="eyebrow">Website walkthrough · Preview only</p><h1>Nine topics.<br /><em>Ready for Andy.</em></h1><p className="lead">Each ID matches a highlighted note beside the relevant section. Use these links to walk through the details together.</p><p>The notes identify information to confirm. They do not indicate that PPP’s criteria, terms or background have already been finalized for publication.</p><div className="review-index-cards">{andyReviews.map(review => <article key={review.id}><Link className="andy-review-id" href={`/${review.page}#${review.anchor}`}>{review.id} · Open section</Link><h2>{review.title}</h2><p>{review.question}</p></article>)}</div><Link href="/" className="text-link">Return to the homepage</Link></section>;
}
