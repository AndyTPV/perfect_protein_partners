"use client";
import { useId, useRef, useState } from "react";
import ProfileChart from "@/components/ProfileChart";
const tabs = [
 { name: "The profile", title: "Know what’s inside.", description: "See how individual amino acids contribute to the overall protein profile." },
 { name: "The interpretation", title: "Put the facts in context.", items: [
   ["PPP evaluation", "Understand how your amino acid profile relates to PPP’s evaluation and star-rating system."],
   ["Optional metals review", "Review metals-testing results in the context of serving size and product use."],
   ["Product strengths and priorities", "Identify strengths in the measured profile and areas worth exploring further."]
 ] },
 { name: "The business picture", title: "Choose what comes next.", items: [
   ["Amino acid profile improvement", "Explore formulation adjustments that could bring your profile closer to PPP’s complementary amino acid target."],
   ["Raw-material cost opportunities", "Assess ingredient combinations and potential cost efficiencies alongside protein-profile goals."],
   ["Relevant product comparisons", "Put your findings alongside relevant competing products to inform development decisions."],
   ["Future product development", "Use the analysis to prioritize reformulation opportunities and new product ideas."]
 ] },
];
function ReportBrand() {
 return <svg className="report-brand" viewBox="0 0 270 64" role="img" aria-label="PPP Protein Profile">
   <text x="0" y="49" fill="#12336b" fontFamily="Arial, Helvetica, sans-serif" fontSize="57" fontWeight="900" fontStyle="italic" letterSpacing="-4" textLength="124" lengthAdjust="spacingAndGlyphs">PPP</text>
   <path d="M146 8V55" stroke="#315baf" strokeWidth="1.5" />
   <g fill="#12336b" fontFamily="Arial, Helvetica, sans-serif" fontSize="17" fontWeight="800" letterSpacing=".5"><text x="164" y="29">PROTEIN</text><text x="164" y="50">PROFILE</text></g>
 </svg>;
}
export default function ResultsPreview() {
 const [active, setActive] = useState(0); const id = useId(); const buttons = useRef([]); const tab = tabs[active];
 function keydown(e) { if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return; e.preventDefault(); const n = e.key === "Home" ? 0 : e.key === "End" ? 2 : (active + (e.key === "ArrowRight" ? 1 : 2)) % 3; setActive(n); buttons.current[n]?.focus(); }
 return <div className="results-explorer"><div className="report-tabs" role="tablist" aria-label="Report contents" onKeyDown={keydown}>{tabs.map((t, i) => <button type="button" key={t.name} ref={el => { buttons.current[i] = el; }} role="tab" id={`${id}-tab-${i}`} aria-controls={`${id}-panel`} aria-selected={active === i} tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)}>{t.name}</button>)}</div><div className="report-paper report-review" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} tabIndex={0}><div className="report-header"><ReportBrand /><span>Results overview<br />Example layout</span></div><h3>{tab.title}</h3>{active === 0 ? <ProfileChart /> : <dl className={`report-points${active === 1 ? " report-points-spread" : ""}`}>{tab.items.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>}{tab.description && <p className="profile-chart-callout">{tab.description}</p>}</div></div>;
}
