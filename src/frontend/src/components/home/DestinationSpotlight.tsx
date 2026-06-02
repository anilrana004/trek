import { useState } from "react";

const destinations = [
  {
    name: "India",
    flag: "🇮🇳",
    tripCount: "34 Adventures",
    href: "/trips?country=india",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
    tripCount: "18 Adventures",
    href: "/trips?country=nepal",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    name: "Bhutan",
    flag: "🇧🇹",
    tripCount: "4 Adventures",
    href: "/trips?country=bhutan",
    image:
      "https://images.unsplash.com/photo-1609868888839-ebd9fd32d3c3?w=800&q=80",
  },
];

export function DestinationSpotlight() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      data-ocid="home.destination_spotlight_section"
      style={{
        display: "flex",
        height: "420px",
        gap: "2px",
        overflow: "hidden",
      }}
    >
      {destinations.map((dest, i) => (
        <a
          key={dest.name}
          href={dest.href}
          data-ocid={`home.destination_card.${i + 1}`}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            textDecoration: "none",
            cursor: "pointer",
            display: "block",
          }}
        >
          {/* Background image */}
          <img
            src={dest.image}
            alt={dest.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform 400ms ease",
              transform: hovered === i ? "scale(1.08)" : "scale(1.0)",
              display: "block",
            }}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                hovered === i
                  ? "linear-gradient(to top, rgba(8,10,12,0.95) 0%, rgba(8,10,12,0.3) 60%, transparent 100%)"
                  : "linear-gradient(to top, rgba(8,10,12,0.9) 0%, rgba(8,10,12,0.2) 60%, transparent 100%)",
              transition: "background 300ms ease",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              bottom: "28px",
              left: "28px",
              right: "28px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                display: "block",
                marginBottom: "8px",
              }}
            >
              {dest.flag}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "36px",
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "6px",
                textDecoration: hovered === i ? "underline" : "none",
                transition: "text-decoration 150ms ease",
              }}
            >
              {dest.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-secondary)",
                marginBottom: "14px",
              }}
            >
              {dest.tripCount}
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--accent-blue)",
                border: "1px solid var(--accent-blue)",
                borderRadius: "var(--radius-full)",
                padding: "6px 14px",
              }}
            >
              Explore
              <span
                style={{
                  display: "inline-block",
                  transform:
                    hovered === i ? "translateX(4px)" : "translateX(0)",
                  transition: "transform 150ms ease",
                }}
              >
                →
              </span>
            </span>
          </div>
        </a>
      ))}

      <style>{`
        @media (max-width: 640px) {
          [data-ocid="home.destination_spotlight_section"] {
            height: 280px;
            overflow-x: auto;
            overflow-y: hidden;
          }
          [data-ocid="home.destination_spotlight_section"] a {
            min-width: 260px;
          }
        }
      `}</style>
    </section>
  );
}
