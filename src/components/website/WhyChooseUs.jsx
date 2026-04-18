import React, { useState } from "react";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: "01", title: "Expert Curation", desc: "Premium gold handpicked by industry professionals with decades of experience.", icon: (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <rect x="4" y="12" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12V9a6 6 0 0112 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: "02", title: "Seamless Technology", desc: "Trade effortlessly with our proprietary platform — real-time pricing and instant execution.", icon: (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M16 4l3.5 7 7.5 1-5.5 5.5 1.5 7.5L16 21l-7 4 1.5-7.5L5 12l7.5-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: "03", title: "Knowledge & Insights", desc: "Stay ahead with daily expert analysis, macro forecasts, and market intelligence reports.", icon: (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 14l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: "04", title: "Tailored Solutions", desc: "Personalized investment strategies designed around your financial goals and timeline.", icon: (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <polyline points="4,22 10,14 16,18 22,8 28,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      id: "05", title: "Ethical Sourcing", desc: "Every bar and coin we trade is responsibly sourced from certified supply chains.", icon: (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <rect x="5" y="5" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
          <path d="M16 11V8M16 24v-3M11 16H8M24 16h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "06", title: "Beyond Gold", desc: "Diversify across silver, platinum, and palladium — managed under one unified portfolio.", icon: (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M4 20V10l8-6 8 6v10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M20 14h6l2 6H20V14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="10" cy="23" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="23" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
  ];

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
      {/* Abstract Background Accents */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "40rem",
          height: "40rem",
          background: "radial-gradient(circle, rgba(186,138,84,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(186,138,84,0.02) 1px,transparent 1px), linear-gradient(90deg,rgba(186,138,84,0.02) 1px,transparent 1px)",
          backgroundSize: "6rem 6rem",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 2rem", position: "relative", display: "flex", flexWrap: "wrap", gap: "4rem" }}>

        {/* Left Side: Sticky Header */}
        <div style={{ flex: "1 1 20rem" }}>
          <div style={{ position: "sticky", top: "8rem" }}>
            <p style={{
              fontSize: "0.75rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#BA8A54",
              marginBottom: "1rem",
            }}>
              What Sets Us Apart
            </p>
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "2rem",
            }}>
              Why <br />
              <span style={{ color: "#e8c98a", fontStyle: "italic" }}>Choose Us</span>
            </h2>
            <div style={{
              width: "4rem",
              height: "1px",
              background: "#BA8A54",
              marginBottom: "2rem",
              opacity: 0.6
            }} />
            <p style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "24rem",
            }}>
              Discover the advantages of choosing TrueValue as your trusted bullion partner for unparalleled expertise, global access, and airtight security.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Accordion */}
        <div style={{ flex: "2 1 35rem" }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                borderTop: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                style={{
                  all: "unset",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "1rem 0",
                  cursor: "pointer",
                  background: activeIndex === i ? "linear-gradient(90deg, rgba(186,138,84,0.04) 0%, transparent 100%)" : "transparent",
                  transition: "background 0.4s ease",
                  boxSizing: "border-box"
                }}
              >
                {/* Number */}
                <span style={{
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  color: activeIndex === i ? "#BA8A54" : "rgba(255,255,255,0.2)",
                  width: "4rem",
                  flexShrink: 0,
                  transition: "color 0.4s",
                }}>
                  {service.id}
                </span>

                {/* Title */}
                <span style={{
                  fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                  fontWeight: activeIndex === i ? 500 : 300,
                  color: activeIndex === i ? "#fff" : "rgba(255,255,255,0.5)",
                  flex: 1,
                  textAlign: "left",
                  paddingRight: "1rem",
                  transition: "color 0.4s, transform 0.4s",
                  transform: activeIndex === i ? "translateX(0.5rem)" : "translateX(0)"
                }}>
                  {service.title}
                </span>

                {/* Plus / Minus Indicator */}
                <span style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid",
                  borderColor: activeIndex === i ? "rgba(186,138,84,0.4)" : "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  color: activeIndex === i ? "#BA8A54" : "rgba(255,255,255,0.3)",
                  transition: "all 0.4s ease",
                  transform: activeIndex === i ? "rotate(180deg)" : "rotate(0deg)"
                }}>
                  {activeIndex === i ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  )}
                </span>
              </button>

              {/* Expandable Content Panel */}
              <div style={{
                display: "grid",
                gridTemplateRows: activeIndex === i ? "1fr" : "0fr",
                opacity: activeIndex === i ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}>
                <div style={{ overflow: "hidden" }}>
                  <div style={{
                    padding: "0 1rem 1rem 2rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: ".5rem",
                  }}>
                    <div style={{
                      width: "3rem",
                      height: "3rem",
                      color: "rgba(186,138,84,0.6)",
                      flexShrink: 0
                    }}>
                      {service.icon}
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: "1.125rem",
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.5)",
                      maxWidth: "35rem",
                    }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
