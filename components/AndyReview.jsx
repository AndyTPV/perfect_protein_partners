import { andyReviews } from "@/lib/andy-review.mjs";
export default function AndyReview({ reviewId }) {
  if (process.env.VERCEL_ENV === "production") return null;
  const review = andyReviews.find(item => item.id === reviewId);
  if (!review) return null;
  return <small className="andy-reference" id={review.anchor} aria-label={`Reference ${review.id}`}>*** {review.id}</small>;
}
