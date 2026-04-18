import React, { useState, useRef } from "react";

function WhoWeAreCard({ label, text }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        background: "#0c0c22",
        border: hovered ? "1px solid rgba(186,138,84,0.5)" : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "1.25rem",
        padding: "3rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        transition: "border-color 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        cursor: "default",
        overflow: "hidden",
        flex: "1 1 25rem"
      }}
    >
      {/* Spotlight glow on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(20rem circle at ${pos.x}px ${pos.y}px, rgba(186,138,84,0.10) 0%, transparent 70%)`,
            pointerEvents: "none",
            borderRadius: "1.25rem",
            transition: "opacity 0.2s",
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(186,138,84,0.7)",
        }}>
          Our
        </p>

        <h3 style={{
          fontSize: "36px",
          fontWeight: 600,
          color: hovered ? "#e8c98a" : "#d4b37a",
          marginTop: "12px",
          marginBottom: "20px",
          transition: "color 0.3s",
        }}>
          {label}
        </h3>

        <div style={{
          width: "48px",
          height: "1px",
          background: hovered ? "linear-gradient(to right, rgba(186,138,84,0.6), transparent)" : "rgba(255,255,255,0.1)",
          marginBottom: "24px",
          transition: "background 0.4s",
        }} />

        <p style={{
          fontSize: "16px",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.55)",
          margin: 0,
        }}>
          {text}
        </p>
      </div>

      {/* Abstract lines ornament */}
      <img 
        src="/images/lines.svg" 
        alt="Ornament"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "90%",
          width: "auto",
          objectFit: "contain",
          opacity: 0.35,
          transform: "scale(1,-1)",
          zIndex: 1,
          pointerEvents: "none"
        }} 
      />
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <section
      style={{
        width: "100%",
        background: "#05051a",
        color: "#fff",
        padding: "3.64vw 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient backgrounds */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "340px",
          background: "radial-gradient(ellipse, rgba(186,138,84,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(186,138,84,0.025) 1px,transparent 1px), linear-gradient(90deg,rgba(186,138,84,0.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#BA8A54",
            marginBottom: "16px",
          }}>
            Who We Are
          </p>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 66px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#fff",
            marginBottom: "20px",
            lineHeight: 1.1,
          }}>
            Crafted for the{" "}
            <em style={{ color: "#BA8A54", fontStyle: "italic" }}>Discerning</em>{" "}
            Investor
          </h2>
          <div style={{
            width: "48px",
            height: "1px",
            background: "linear-gradient(to right, transparent, #BA8A54, transparent)",
            margin: "0 auto 24px",
          }} />
        </div>

        {/* Cards container */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <WhoWeAreCard
            label="Mission"
            text="To elevate gold trading through trust, precision, and excellence in every transaction."
          />
          <WhoWeAreCard
            label="Vision"
            text="To redefine bullion investment through innovation, transparency, and global accessibility."
          />
        </div>

      </div>
    </section>
  );
}
