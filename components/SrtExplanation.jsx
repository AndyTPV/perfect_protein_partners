// Relative amounts for the shared part of both illustrative profiles.
const leadingAmounts = [100, 78, 67, 60, 53, 48, 44, 41, 38, 35, 33, 32, 31];
const firstTailAmount = 30;
const tailLength = 5;
const barStep = 16;
const barWidth = 12;
const baseline = 107;
const left = 3;
const firstTailX = left + leadingAmounts.length * barStep;

function TailPlot({ title, drop }) {
  const tail = Array.from({ length: tailLength }, (_, i) => {
    const fractionAlongTail = i / (tailLength - 1);
    return firstTailAmount * (1 - fractionAlongTail * drop / 100);
  });
  const amounts = [...leadingAmounts, ...tail];
  const lastX = left + (amounts.length - 1) * barStep;
  const plotWidth = lastX + barWidth + left;

  return (
    <div className="srt-plot">
      <div className="srt-plot-heading">
        <h4>{title}</h4><span>{drop}% drop</span>
      </div>
      <svg viewBox={`0 0 ${plotWidth} ${baseline + 5}`} role="img"
        aria-label={`${title}. The five lowest amino acid amounts are highlighted. The lowest is ${drop}% below the fifth-lowest.`}>
        {amounts.map((amount, i) => (
          <rect key={i} x={left + i * barStep} y={baseline - amount} width={barWidth} height={amount}
            className={i < leadingAmounts.length ? "srt-bar" : "srt-bar-tail"} />
        ))}
        <line className="srt-level" x1={firstTailX} x2={lastX + barWidth}
          y1={baseline - firstTailAmount} y2={baseline - firstTailAmount} />
        <line className="srt-slope" x1={firstTailX + barWidth / 2} x2={lastX + barWidth / 2}
          y1={baseline - firstTailAmount} y2={baseline - tail[tail.length - 1]} />
        <line className="srt-axis" x1={left} x2={lastX + barWidth} y1={baseline} y2={baseline} />
      </svg>
      <div className="srt-axis-labels" aria-hidden="true"><span>Most abundant</span><span>Least abundant</span></div>
    </div>
  );
}

export default function SrtExplanation() {
  return (
    <>
      <figure className="srt-comparison">
        <figcaption>
          <h3>What the last five amino acids reveal</h3>
          <p>Bar height shows the relative amount of each amino acid. Both illustrative profiles use the same scale.</p>
        </figcaption>
        <div className="srt-plots">
          <TailPlot title="More even tail" drop={13} />
          <TailPlot title="Steep tail" drop={88} />
        </div>
        <div className="srt-key"><span>Other amino acids</span><span>Final five (SRT)</span></div>
        <p className="srt-figure-note">Tail drop shows how far the lowest amino acid falls below the fifth-lowest. Only the final five amounts differ between these examples.</p>
      </figure>
      <h3 className="srt-mps-heading">Why does PPP study the tail?</h3>
      <p>Muscle protein synthesis (MPS) is how the body builds new muscle proteins. PPP is interested in what happens after that process starts. When enough leucine and other essential amino acids are available, could a more even tail help sustain MPS longer after resistance exercise?</p>
      <p>PPP’s position is that this possibility is worth investigating. Our model shows how a proposed adjustment changes the amino acid profile. Establishing its effect on MPS duration would require measuring that response in people.</p>
    </>
  );
}
