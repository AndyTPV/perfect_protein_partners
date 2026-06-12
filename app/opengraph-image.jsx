import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function fetchFont(family, weight) {
  // Use the v1 CSS API with an old Android UA. Modern UAs get WOFF2, which
  // Satori (used by ImageResponse) does not support. Android 2.x gets TTF.
  const css = await fetch(
    `https://fonts.googleapis.com/css?family=${family.replace(" ", "+")}:${weight}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
      },
    }
  ).then((r) => r.text());

  // Prefer a format Satori supports: truetype, opentype, or woff (not woff2).
  const supported = css.match(
    /url\(([^)]+)\)\s*format\(['"]?(truetype|opentype|woff)['"]?\)/
  );
  const url = supported?.[1] ?? css.match(/url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error(`Font URL not found: ${family} ${weight}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function OpenGraphImage() {
  const [playfair400, playfair700] = await Promise.all([
    fetchFont("Playfair Display", 400),
    fetchFont("Playfair Display", 700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F5F2EC",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Top gold rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#A8895A",
          }}
        />

        {/* Eyebrow label */}
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: "18px",
            fontWeight: 400,
            color: "#A8895A",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Protein Ingredient Sourcing
        </div>

        {/* Company name */}
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: "76px",
            fontWeight: 700,
            color: "#1C3A2A",
            lineHeight: 1.05,
            marginBottom: "28px",
          }}
        >
          Perfect Protein Partners
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: "30px",
            fontWeight: 400,
            color: "#6B6558",
          }}
        >
          Precision Protein Ingredient Sourcing
        </div>

        {/* Bottom gold accent */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            width: "48px",
            height: "2px",
            background: "#A8895A",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair Display", data: playfair400, weight: 400, style: "normal" },
        { name: "Playfair Display", data: playfair700, weight: 700, style: "normal" },
      ],
    }
  );
}
