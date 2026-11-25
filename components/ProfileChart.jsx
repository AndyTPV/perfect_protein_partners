// Entirely fictional demonstration data in mg per 1 g protein; not client measurements.
// The tail highlight illustrates the report format, not a calculated SRT evaluation.
const profile = [
  ["Glu", "Glutamic acid", 160], ["Asp", "Aspartic acid", 102],
  ["Leu", "Leucine", 88], ["Lys", "Lysine", 76], ["Pro", "Proline", 68],
  ["Val", "Valine", 62], ["Ile", "Isoleucine", 58], ["Thr", "Threonine", 54],
  ["Ser", "Serine", 48], ["Ala", "Alanine", 44], ["Phe", "Phenylalanine", 40],
  ["Arg", "Arginine", 36], ["Gly", "Glycine", 32], ["Tyr", "Tyrosine", 30],
  ["Met", "Methionine", 28], ["His", "Histidine", 26],
  ["Cys", "Cystine", 25], ["Trp", "Tryptophan", 23],
];

export default function ProfileChart() {
  const left = 42, top = 36, bottom = 238, step = 25;
  const y = value => bottom - value / 180 * (bottom - top);
  return <div className="profile-chart-scroll" tabIndex={0} role="region" aria-label="Example amino acid chart; scroll horizontally on smaller screens">
    <svg className="profile-chart" viewBox="0 0 510 297" role="img" aria-label={`Fictional amino acid profile in milligrams per one gram of protein. ${profile.map(([, name, value]) => `${name}: ${value} mg`).join('; ')}. Dark blue bars illustrate the SRT tail grouping, not a calculated score.`}>
      <text className="chart-unit" x="2" y="13">mg per 1 g protein</text>
      {[0, 40, 80, 120, 160].map(value => <g key={value}>
        <line className="chart-grid" x1={left} x2="498" y1={y(value)} y2={y(value)} />
        <text className="chart-tick" x={left - 8} y={y(value) + 4} textAnchor="end">{value}</text>
      </g>)}
      <path className="chart-axis" d={`M${left} ${top}V${bottom}H498`} />
      {profile.map(([abbr, name, value], i) => <g key={abbr}>
        <rect className={i >= 12 ? "chart-bar chart-tail" : "chart-bar"} x={left + i * step + 4} y={y(value)} width="19" height={bottom - y(value)} rx="2"><title>{name}: {value} mg per 1 g protein</title></rect>
        <text className="chart-label" x={left + i * step + 14} y={bottom + 18} textAnchor="middle">{abbr}</text>
      </g>)}
      <text className="chart-axis-title" x="270" y="280" textAnchor="middle">Amino acids</text>
    </svg>
    <div className="profile-chart-legend" aria-hidden="true"><span><i />Amino acid</span><span><i className="tail-key" />SRT (example)</span></div>
  </div>;
}
