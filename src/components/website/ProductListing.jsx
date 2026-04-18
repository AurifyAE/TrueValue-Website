import React, { useState } from 'react';

const products = [
  { id: 1, name: "Gold Coins", image: "/images/products/gold-coins.webp", category: "Coins" },
  { id: 2, name: "Cast Gold Bars", image: "/images/products/gold bars.webp", category: "Bullion" },
  { id: 3, name: "PAMP Suisse Bar", image: "/images/products/pamp-bar.webp", category: "Bullion" },
  { id: 4, name: "1 Kilo Gold Bar", image: "/images/products/kilo-bar.webp", category: "Bullion" },
  { id: 5, name: "Ten Tola (TT) Bar", image: "/images/products/tt-bar.webp", category: "Bullion" },
  { id: 6, name: "Premium Chains", image: "/images/products/chains.webp", category: "Jewelry" },
  { id: 7, name: "Crafted Bangles", image: "/images/products/bangles.webp", category: "Jewelry" },
  { id: 8, name: "Gold Rings", image: "/images/products/rings.webp", category: "Jewelry" },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.02)",
        border: hovered ? "1px solid rgba(186,138,84,0.5)" : "1px solid rgba(255,255,255,0.05)",
        borderRadius: "1rem",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.4s ease",
        transform: hovered ? "translateY(-0.25rem)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        boxShadow: hovered ? "0 15px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* Image Thumbnail */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "15rem",
        overflow: "hidden",
        background: "#000"
      }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.2, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            opacity: 0.85
          }}
        />
        {/* Subtle overlay gradient to blend into card styling */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #0c0c22 0%, transparent 60%)",
          opacity: 0.8
        }} />
      </div>

      {/* Card Info Details */}
      <div style={{
        padding: "1.5rem",
        background: "#0c0c22",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
      }}>
        <span style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          color: "rgba(186,138,84,0.7)",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}>
          {product.category}
        </span>
        <h3 style={{
          fontSize: "1.25rem",
          fontWeight: 400,
          color: hovered ? "#e8c98a" : "#fff",
          transition: "color 0.3s",
          margin: 0
        }}>
          {product.name}
        </h3>
        
        {/* Animated Arrow Action */}
        <div style={{
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          color: hovered ? "#BA8A54" : "rgba(255,255,255,0.2)",
          transition: "color 0.3s",
          gap: "0.5rem"
        }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>View Details</span>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s"
            }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ProductListing() {
  return (
    <section id="products" style={{
      width: "100%",
      background: "#05051a", 
      padding: "3.64vw 0",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#BA8A54",
            marginBottom: "1rem",
          }}>
            Our Exclusive Collection
          </p>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#fff",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}>
            Premium <span style={{ color: "#e8c98a", fontStyle: "italic" }}>Products</span>
          </h2>
          <div style={{
            width: "3rem",
            height: "1px",
            background: "linear-gradient(to right, transparent, #BA8A54, transparent)",
            margin: "0 auto",
          }} />
        </div>

        {/* Responsive CSS Grid */}
        <style>{`
          .product-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          @media (max-width: 1024px) {
            .product-grid { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 820px) {
            .product-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 600px) {
            .product-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
