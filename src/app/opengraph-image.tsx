import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const name = "Syed Muhammad Taha Waqar";
  const title = "Full-Stack Software Engineer";
  const subtitle = "Fintech • Systems • Applied AI";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          padding: "64px",
          background: "#0b0b0b",
          color: "#fafafa",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Inter, system-ui, sans-serif",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 56, fontWeight: 650, letterSpacing: "-0.02em" }}>
            {name}
          </div>

          <div style={{ fontSize: 32, color: "rgba(250,250,250,0.85)", letterSpacing: "-0.01em" }}>
            {title}
          </div>

          <div style={{ fontSize: 22, color: "rgba(250,250,250,0.55)" }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontSize: 18, color: "rgba(250,250,250,0.45)" }}>
            Taha.dev
          </div>

          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.18), transparent 45%), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.10), transparent 40%)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
