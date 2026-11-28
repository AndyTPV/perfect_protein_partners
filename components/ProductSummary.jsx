import { exampleProfile, exampleMetals, labelProteinGrams, measuredAminoAcidGrams, essentialGrams, bcaaGrams, leucineGrams, aminoAcidToLabelPercent } from "@/lib/product-example.mjs";

function Metric({ value, label, note }) {
  return <div className="summary-metric"><strong>{value}</strong><span>{label}</span>{note && <small>{note}</small>}</div>;
}
export default function ProductSummary() {
  const top = 30, bottom = 240, left = 55;
  const y = mg => bottom - mg / 5000 * (bottom - top);
  return <article className="product-summary">
    <header className="summary-intro"><p className="eyebrow light">Partner Protein · Vanilla bar</p><h2>A closer look.<br /><em>Shared with you.</em></h2><p className="summary-example">Demonstration product · Fictional example results</p><p>A preview of the report information a brand could choose to share with its customers.</p><span className="summary-basis">All quantities per 100 g of product</span></header>
    <section className="summary-section"><div className="summary-section-heading"><span>01 / Overview</span><h3>The protein picture.</h3></div>
      <div className="summary-metrics"><Metric value={`${measuredAminoAcidGrams.toFixed(1)} g`} label="Total amino acids" /><Metric value={`${aminoAcidToLabelPercent.toFixed(0)}%`} label="Amino acids relative to label protein" note="Not an overall quality score" /><Metric value="18" label="Amino acids represented" /><Metric value="100 g" label="Product reference amount" /></div>
    </section>
    <section className="summary-section"><div className="summary-section-heading"><span>02 / Metals</span><h3>The quantities in context.</h3></div><p>Example quantities per 100 g of product, expressed in micrograms (µg).</p>
      <div className="summary-metal-chart" role="img" aria-label={exampleMetals.map(m => `${m.name}: ${m.micrograms.toFixed(2)} micrograms per 100 grams of product`).join('; ')}>
        <div className="summary-metal-scale"><span>0</span><span>0.4</span><span>0.8 µg</span></div>
        {exampleMetals.map(m => <div className="summary-metal-row" key={m.name}><span>{m.name}</span><div className="summary-metal-track"><i style={{ width: `${m.micrograms / 0.8 * 100}%` }} /></div><strong>{m.micrograms.toFixed(2)} µg</strong></div>)}
      </div><p className="summary-context">Quantities are shown without safety ratings or comparisons to exposure limits.</p>
    </section>
    <section className="summary-section"><div className="summary-section-heading"><span>03 / Amino acid profile</span><h3>See the composition.</h3></div>
      <div className="summary-profile-scroll" tabIndex={0} role="region" aria-label="Amino acid chart; scroll horizontally on small screens"><svg className="summary-profile-chart" viewBox="0 0 640 300" role="img" aria-label={`Fictional amino acid quantities per 100 g of product. ${exampleProfile.map(a => `${a.name}: ${a.mg} mg`).join('; ')}. SRT grouping is illustrative, not a calculated rating.`}>
        <text className="summary-chart-text summary-chart-unit" x="2" y="14">mg per 100 g product</text>
        {[0, 1000, 2000, 3000, 4000, 5000].map(mg => <g key={mg}><line className="summary-chart-grid" x1={left} x2="630" y1={y(mg)} y2={y(mg)} /><text className="summary-chart-text" x={left - 9} y={y(mg) + 4} textAnchor="end">{mg.toLocaleString("en-US")}</text></g>)}
        <path className="summary-chart-axis" d={`M${left} ${top}V${bottom}H630`} />
        {exampleProfile.map((aa, i) => <g key={aa.abbr}><rect x={left + i * 32 + 4} y={y(aa.mg)} width="24" height={bottom - y(aa.mg)} rx="2" fill={aa.tail ? "#427fff" : "#9bb9f6"}><title>{aa.name}: {aa.mg.toLocaleString("en-US")} mg per 100 g product</title></rect><text className="summary-chart-text" x={left + i * 32 + 16} y="260" textAnchor="middle">{aa.abbr}</text></g>)}
        <text className="summary-chart-text" x="340" y="286" textAnchor="middle">Amino acids</text>
      </svg></div><div className="summary-chart-legend"><span><i />Amino acid</span><span><i />SRT grouping · illustration</span></div>
    </section>
    <section className="summary-section"><div className="summary-section-heading"><span>04 / Per 100 g</span><h3>What the product provides.</h3></div>
      <div className="summary-metrics"><Metric value={`${labelProteinGrams.toFixed(0)} g`} label="Protein" note="Example label declaration" /><Metric value={`${essentialGrams.toFixed(2)} g`} label="Essential amino acids" /><Metric value={`${bcaaGrams.toFixed(2)} g`} label="BCAAs" /><Metric value={`${leucineGrams.toFixed(2)} g`} label="Leucine" /></div>
    </section>
    <footer className="summary-footer">A demonstration of selected public findings. The brand chooses what is disclosed; the full report is not reproduced here.</footer>
  </article>;
}
