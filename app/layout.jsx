import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://perfectproteinpartners.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Perfect Protein Partners | Precision Protein Ingredient Sourcing",
  description:
    "Perfect Protein Partners helps food, nutrition, and ingredient businesses source protein solutions with precision, traceability, and formulation fit.",
  openGraph: {
    title: "Perfect Protein Partners | Precision Protein Ingredient Sourcing",
    description:
      "Perfect Protein Partners helps food, nutrition, and ingredient businesses source protein solutions with precision, traceability, and formulation fit.",
    siteName: "Perfect Protein Partners",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Protein Partners | Precision Protein Ingredient Sourcing",
    description:
      "Perfect Protein Partners helps food, nutrition, and ingredient businesses source protein solutions with precision, traceability, and formulation fit.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased font-sans bg-cream text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
