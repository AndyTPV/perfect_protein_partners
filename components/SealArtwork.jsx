export default function SealArtwork() {
  return <figure className="seal-feature">
    <div className="seal-feature-glow" aria-hidden="true" />
    <svg className="seal-feature-mark" viewBox="0 0 420 132" role="img" aria-label="PPP Protein Profile — illustrative three-star rating">
      <text x="15" y="76" fill="white" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontStyle="italic" fontSize="82" letterSpacing="-5">PPP</text>
      <path d="M204 15V81" stroke="#9db9f3" strokeWidth="2" />
      <g fill="#397bff">
        {[244, 308, 372].map(x => <path key={x} transform={`translate(${x} 47)`} d="M0-29 8.5-9 30-9 13 5 19 27 0 14-19 27-13 5-30-9-8.5-9Z" />)}
      </g>
      <text x="22" y="118" fill="white" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="33" textLength="376" lengthAdjust="spacingAndGlyphs">PROTEIN PROFILE</text>
    </svg>
    <figcaption>Illustrative three-star seal</figcaption>
  </figure>;
}
