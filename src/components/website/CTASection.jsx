import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          
          {/* Glow Effects */}
          <div className="cta-glow top" />
          <div className="cta-glow bottom" />

          {/* CONTENT */}
          <div className="cta-row">
            
            {/* TEXT */}
            <div className="cta-text">
              <h2>
                Get started{" "}
                <span>now</span>
              </h2>

              <p>
                Try our product and start saving through precision bullion
                trading, superior market access, and intelligent real-time
                insights.
              </p>
            </div>

            {/* BUTTON */}
            <div className="cta-action">
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => navigate("/register")}
                className={`cta-button ${hovered ? "hovered" : ""}`}
              >
                Get Started
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .cta-section {
          width: 100%;
          background: #05051a;
          color: #fff;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .cta-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .cta-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(186,138,84,0.15);
          border-radius: 24px;
          padding: clamp(24px, 5vw, 64px);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        /* Glow */
        .cta-glow {
          position: absolute;
          pointer-events: none;
        }

        .cta-glow.top {
          top: -40%;
          left: -20%;
          width: clamp(200px, 40vw, 500px);
          height: clamp(200px, 40vw, 500px);
          background: radial-gradient(circle, rgba(186,138,84,0.06), transparent 70%);
        }

        .cta-glow.bottom {
          bottom: -30%;
          right: -10%;
          width: clamp(150px, 30vw, 400px);
          height: clamp(150px, 30vw, 400px);
          background: radial-gradient(circle, rgba(186,138,84,0.04), transparent 70%);
        }

        /* Layout */
        .cta-row {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* TEXT */
        .cta-text {
          flex: 1;
        }

        .cta-text h2 {
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .cta-text span {
          color: #e8c98a;
          font-style: italic;
        }

        .cta-text p {
          font-size: clamp(14px, 2vw, 17px);
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          max-width: 600px;
        }

        /* BUTTON */
        .cta-action {
          display: flex;
          justify-content: flex-start;
        }

        .cta-button {
          all: unset;
          cursor: pointer;
          border: 1px solid #BA8A54;
          color: #BA8A54;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .cta-button svg {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
          transition: transform 0.3s ease;
        }

        .cta-button.hovered {
          background: #BA8A54;
          color: #0c0c22;
        }

        .cta-button.hovered svg {
          transform: translateX(4px);
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .cta-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .cta-action {
            justify-content: flex-end;
          }
        }
      `}</style>
    </section>
  );
}
