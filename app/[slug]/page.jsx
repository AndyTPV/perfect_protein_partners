import { notFound } from "next/navigation";
import Link from "next/link";
import { pages } from "@/lib/pages";
import CallToAction from "@/components/CallToAction";
import SealArtwork from "@/components/SealArtwork";
import AndyReview from "@/components/AndyReview";
import ProfileChart from "@/components/ProfileChart";
import ReportBrand from "@/components/ReportBrand";
export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null;
  return page ? { title: page.title, description: page.intro, alternates: { canonical: `/${slug}` } } : {};
}
export default async function DetailPage({ params }) {
  const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null;
  if (!page) notFound();
  return <>
    <section className="detail-hero wrap"><Link className="breadcrumb" href="/">Perfect Protein Partners</Link><p className="eyebrow">{page.eyebrow}</p><h1>{page.heading[0]}<br /><em>{page.heading[1]}</em></h1><p className="lead">{page.intro}</p><nav className="detail-contents" aria-label="On this page">{page.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title.replace(/\.$/, "")}</a>)}</nav></section>
    {slug === "seal" && <div className="wrap detail-seal detail-seal-current"><SealArtwork /></div>}
    {slug === "testing" && <section className="dark section"><div className="wrap results-layout"><div><p className="eyebrow light">Read the reporting basis</p><h2>The quantities.<br />And what they refer to.</h2><p>This example shows amino acid quantities per gram of protein. Serving-based findings and quantities per product weight need their own clearly labelled basis.</p><Link href="/#results" className="text-link light-link">Explore the report preview</Link></div><div className="report-paper detail-profile-example"><div className="report-header"><ReportBrand /><span>Protein profile<br />Fictional example</span></div><h3>A profile you can examine.</h3><ProfileChart /></div></div></section>}
    <div className="wrap editorial-content">{page.sections.map(section => <section key={section.id} id={section.id}><h2>{section.title}</h2><p>{section.text}</p>{section.links && <div className="detail-section-links">{section.links.map(link => <Link key={link.href} className="text-link" href={link.href}>{link.label}</Link>)}</div>}{section.reviewId && <AndyReview reviewId={section.reviewId} />}</section>)}</div>
    <CallToAction {...page.cta} showNote={false} />
  </>;
}
