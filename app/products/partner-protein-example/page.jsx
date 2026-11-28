import Link from "next/link";
import ProductSummary from "@/components/ProductSummary";
export const metadata = {
  title: "Partner Protein | Example Product Summary",
  description: "A fictional example of a brand-selected product summary reached through a packaging QR code.",
  robots: { index: false, follow: false },
};
export default function ExampleProductPage() {
  return <div className="summary-page"><div className="wrap summary-page-inner"><Link href="/#transparency" className="text-link light-link">← Back to the QR demonstration</Link><h1 className="summary-page-title">Example product summary</h1><ProductSummary /></div></div>;
}
