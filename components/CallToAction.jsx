import Link from "next/link";
export default function CallToAction({
  interest, heading = ["Could your product", "earn the distinction?"],
  description, showNote = true,
}) {
  const href = interest ? `/contact?interest=${interest}` : "/contact";
  return <section className="wrap section call-to-action"><p className="eyebrow">Start a conversation</p><h2>{heading[0]}<br />{heading[1]}</h2><p className="lead">{description || <>Let’s explore your product, your goals<br />and what PPP’s evaluation could add.</>}</p><Link className="button" href={href}>Start a conversation</Link>{showNote && <p className="fine-print">Findings apply to the sample tested; qualification is conditional.<br />Reporting, improvements and potential savings depend on the product and agreed scope.</p>}</section>;
}
