export default function PackagingSeal() {
  return <svg viewBox="0 0 420 132" role="img" aria-label="PPP Protein Profile — three-star packaging example">
    <text x="8" y="76" fill="#12336b" fontFamily="Arial,Helvetica,sans-serif" fontWeight="900" fontStyle="italic" fontSize="82" letterSpacing="-5" textLength="177" lengthAdjust="spacingAndGlyphs">PPP</text>
    <path d="M207 15V81" stroke="#315baf" strokeWidth="2" />
    <g fill="#235aff">{[249, 311, 373].map(x => <path key={x} transform={`translate(${x} 47)`} d="M0-27 8-9 28-9 12 5 18 25 0 13-18 25-12 5-28-9-8-9Z" />)}</g>
    <text x="15" y="118" fill="#12336b" fontFamily="Arial,Helvetica,sans-serif" fontWeight="800" fontSize="33" textLength="382" lengthAdjust="spacingAndGlyphs">PROTEIN PROFILE</text>
  </svg>;
}
