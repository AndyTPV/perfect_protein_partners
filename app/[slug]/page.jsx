import { notFound } from "next/navigation";
import Link from "next/link";
import { pages } from "@/lib/pages";
import CallToAction from "@/components/CallToAction";
import ProcessExplorer from "@/components/ProcessExplorer";
import ResultsExplorer from "@/components/ResultsExplorer";
import SealArtwork from "@/components/SealArtwork";
export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null; return page ? { title: page.title, description: page.intro, alternates: { canonical: `/${slug}` } } : {}; }
export default async function DetailPage({ params }) {
 const { slug } = await params; const page = Object.hasOwn(pages, slug) ? pages[slug] : null; if (!page) notFound();
 return <><section className="detail-hero wrap"><Link className="breadcrumb" href="/">Perfect Protein Partners</Link><p className="eyebrow">{page.eyebrow}</p><h1>{page.heading[0]}<br /><em>{page.heading[1]}</em></h1><p className="lead">{page.intro}</p></section>{slug === "seal" && <div className="wrap detail-seal"><SealArtwork /></div>}{slug === "process" && <section className="wrap section compact" aria-label="The evaluation process"><ProcessExplorer /></section>}{slug === "testing" && <section className="dark section"><div className="wrap results-layout"><div><p className="eyebrow light">Explore the report</p><h2>Numbers translated<br />into product knowledge.</h2><p>Explore an illustrative layout showing the measured profile, interpretation and possible business context. Client-specific data is not reproduced here.</p></div><ResultsExplorer /></div></section>}<div className="wrap editorial-content">{page.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<p className="editorial-note">{page.note}</p></div><CallToAction /></>;
}
