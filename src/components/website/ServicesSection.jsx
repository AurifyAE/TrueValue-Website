import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Gold & Bullion Trading",
    description:
      "Trade gold with real-time pricing and global market access.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect x="4" y="12" width="24" height="14" rx="2" stroke="#BA8A54" strokeWidth="1.5"/>
        <path d="M10 12V9a6 6 0 0112 0v3" stroke="#BA8A54" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="19" r="3" stroke="#BA8A54" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Precious Metals Investment",
    description:
      "Diversify with silver, platinum, and palladium, backed by expert guidance.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M16 4l3.5 7 7.5 1-5.5 5.5 1.5 7.5L16 21l-7 4 1.5-7.5L5 12l7.5-1z" stroke="#BA8A54" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Portfolio Consultation",
    description:
      "Get a personalized strategy to optimize your investments.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="12" cy="10" r="4" stroke="#BA8A54" strokeWidth="1.5"/>
        <path d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#BA8A54" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 14l2 2 4-4" stroke="#BA8A54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Market Insights",
    description:
      "Stay ahead with expert analysis, forecasts, and updates.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <polyline points="4,22 10,14 16,18 22,8 28,12" stroke="#BA8A54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="12" r="2" fill="#BA8A54"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Storage",
    description:
      "Protect your assets in our state-of-the-art vault facilities.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect x="5" y="5" width="22" height="22" rx="3" stroke="#BA8A54" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="5" stroke="#BA8A54" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2" fill="#BA8A54"/>
        <path d="M16 11V8M16 24v-3M11 16H8M24 16h-3" stroke="#BA8A54" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Insured Delivery",
    description:
      "Receive your metals safely, straight to your doorstep.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M4 20V10l8-6 8 6v10H4z" stroke="#BA8A54" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 14h6l2 6H20V14z" stroke="#BA8A54" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="10" cy="23" r="2" stroke="#BA8A54" strokeWidth="1.5"/>
        <circle cx="24" cy="23" r="2" stroke="#BA8A54" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 7,
    title: "Dedicated Support",
    description:
      "Expert assistance for a smooth, confident trading experience.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M6 14a10 10 0 0120 0v2a4 4 0 01-4 4H16" stroke="#BA8A54" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 16a4 4 0 004 4v-4" stroke="#BA8A54" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="24" r="2" stroke="#BA8A54" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

function ServiceCard({ service, index }) {
  const navigate = useNavigate();
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
        animationDelay: `${index * 80}ms`,
        position: "relative",
        background: "#0c0c22",
        border: hovered ? "1px solid rgba(186,138,84,0.5)" : "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        transition: "border-color 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "default",
        overflow: "hidden",
      }}
      className="services-card"
    >
      {/* Spotlight glow on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgba(186,138,84,0.10) 0%, transparent 70%)`,
            pointerEvents: "none",
            borderRadius: "20px",
            transition: "opacity 0.2s",
          }}
        />
      )}

      {/* Top row: icon + number */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: hovered ? "rgba(186,138,84,0.15)" : "rgba(186,138,84,0.08)",
            border: "1px solid rgba(186,138,84,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s",
          }}
        >
          {service.icon}
        </div>
        <span
          style={{
            fontSize: "13px",
            letterSpacing: "0.15em",
            color: hovered ? "rgba(186,138,84,0.7)" : "rgba(255,255,255,0.15)",
            fontWeight: 600,
            transition: "color 0.3s",
          }}
        >
          {service.id < 10 ? `0${service.id}` : service.id}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 600,
          letterSpacing: "0.01em",
          color: hovered ? "#e8c98a" : "#d4b37a",
          marginBottom: "12px",
          transition: "color 0.3s",
          lineHeight: 1.25,
        }}
      >
        {service.title}
      </h3>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: hovered
            ? "linear-gradient(to right, rgba(186,138,84,0.6), transparent)"
            : "rgba(255,255,255,0.07)",
          marginBottom: "16px",
          transition: "background 0.4s",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: "14.5px",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.55)",
          flex: 1,
          marginBottom: "28px",
        }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate("/contact")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: hovered ? "#BA8A54" : "rgba(186,138,84,0.6)",
          transition: "color 0.3s",
        }}
      >
        Enquire Now
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: hovered ? "translateX(3px)" : "translateX(0)",
            transition: "transform 0.3s",
          }}
        >
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

       
    </div>
  );
}

export default function ServicesSection() {
  return (
    <>
      <style>{`
        .services-card {
          animation: cardFadeUp 0.6s ease both;
        }

        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

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
        {/* Ambient background orb */}
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
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#BA8A54",
                marginBottom: "16px",
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                    fontSize: "clamp(40px, 6vw, 66px)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#e8c98a",
                marginBottom: "20px",
                lineHeight: 1.1,
              }}
            >
              Our Services
            </h2>
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "linear-gradient(to right, transparent, #BA8A54, transparent)",
                margin: "0 auto 24px",
              }}
            />
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                maxWidth: "520px",
                margin: "0 auto",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Experience premium bullion trading with advanced tools, insights,
              and secure services tailored to your financial goals.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}