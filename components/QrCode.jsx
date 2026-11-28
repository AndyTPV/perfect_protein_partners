"use client";
import QRCode from "qrcode";
import { useMemo } from "react";

export default function QrCode({ value }) {
  const code = useMemo(() => QRCode.create(value, { errorCorrectionLevel: "M" }), [value]);
  const { size, data } = code.modules;
  const path = Array.from(data, (on, index) => on ? `M${index % size + 4} ${Math.floor(index / size) + 4}h1v1h-1z` : "").join("");
  return <svg viewBox={`0 0 ${size + 8} ${size + 8}`} role="img" aria-label="Scan to open the demonstration product summary" shapeRendering="crispEdges">
    <rect width="100%" height="100%" fill="white" /><path d={path} fill="#061329" />
  </svg>;
}
