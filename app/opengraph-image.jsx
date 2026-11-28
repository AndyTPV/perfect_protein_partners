import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Perfect Protein Partners — Your protein. An earned distinction.";
export default function OpenGraphImage() {
 return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#09172f", color: "white", padding: "70px 80px", borderTop: "7px solid #245dff", fontFamily: "sans-serif" }}><div style={{ display: "flex", color: "#a8c0ff", fontSize: 23, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 40 }}>Perfect Protein Partners</div><div style={{ display: "flex", flexDirection: "column", fontSize: 83, fontWeight: 600, lineHeight: 1.07, letterSpacing: "-0.04em" }}><span>Your protein.</span><span>An earned distinction.</span></div><div style={{ color: "#b8c9e3", fontSize: 28, marginTop: 35 }}>Product knowledge. Earned recognition.</div></div>, size);
}
