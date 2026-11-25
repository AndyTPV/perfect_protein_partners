import { andyReviews } from "@/lib/andy-review.mjs";
export default function AndyReview({ reviewId }) {
  if (process.env.VERCEL_ENV === "production") return null;
  const review = andyReviews.find(item => item.id === reviewId);
  if (!review) return null;
  return <aside className="andy-review" id={review.anchor} aria-label={`Andy review ${review.id}: ${review.title}`}>
    <div className="andy-review-heading"><a href={`#${review.anchor}`} className="andy-review-id">{review.id} · Andy review</a><span>Preview only</span></div>
    <strong>{review.title}</strong><p>{review.question}</p>
  </aside>;
}
