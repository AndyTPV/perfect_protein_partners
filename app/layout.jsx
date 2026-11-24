import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
const description = "Explore finished-product amino acid testing, clear interpretation and qualification for the Perfect Protein Partners seal.";
export const metadata = {
  metadataBase: new URL("https://www.perfectproteinpartners.com"),
  robots: process.env.VERCEL_ENV === "production" ? { index: true, follow: true } : { index: false, follow: false },
  title: { default: "Perfect Protein Partners | Product Knowledge. Earned Recognition.", template: "%s | Perfect Protein Partners" }, description,
  openGraph: { title: "Perfect Protein Partners", description, siteName: "Perfect Protein Partners", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Perfect Protein Partners", description },
};
export default function RootLayout({ children }) {
  const review = process.env.VERCEL_ENV !== "production";
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{review && <aside className="review-banner">PPP website review build <span>November 2026</span></aside>}<Header /><main id="main">{children}</main><Footer />{!review && <Analytics />}</body></html>;
}
