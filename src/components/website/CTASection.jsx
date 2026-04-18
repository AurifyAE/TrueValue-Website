import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{
        width: "100%",
        background: "#05051a",
        color: "#fff",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* CTA Card */}
        <div
          style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(186,138,84,0.15)",
            borderRadius: "24px",
            padding: "clamp(24px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "flex-start",
            justifyContent: "space-between",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Glow Effects (responsive size) */}
          <div
            style={{
              position: "absolute",
              top: "-40%",
              left: "-20%",
              width: "clamp(200px, 40vw, 500px)",
              height: "clamp(200px, 40vw, 500px)",
              background:
                "radial-gradient(circle, rgba(186,138,84,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30%",
              right: "-10%",
              width: "clamp(150px, 30vw, 400px)",
              height: "clamp(150px, 30vw, 400px)",
              background:
                "radial-gradient(circle, rgba(186,138,84,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* CONTENT ROW (responsive switch) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width: "100%",
            }}
            className="cta-row"
          >
            {/* TEXT */}
            <div style={{ maxWidth: "600px" }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 5vw, 56px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Get started{" "}
                <span style={{ color: "#e8c98a", fontStyle: "italic" }}>
                  now
                </span>
              </h2>

              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 17px)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Try our product and start saving through precision bullion
                trading, superior market access, and intelligent real-time
                insights.
              </p>
            </div>

            {/* BUTTON */}
            <div>
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => navigate("/register")}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  background: hovered
                    ? "rgba(186,138,84,1)"
                    : "transparent",
                  border: "1px solid #BA8A54",
                  color: hovered ? "#0c0c22" : "#BA8A54",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Get Started
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    transform: hovered
                      ? "translateX(3px)"
                      : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE MEDIA QUERY */}
      <style>{`
        @media (min-width: 768px) {
          .cta-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}
