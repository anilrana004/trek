import { useState } from "react";

const columns = [
  {
    badge: "FIXED DEPARTURES",
    heading: "Join an Adventure",
    sub: "Handpicked itineraries for Small-Group Travel",
    body: "Meet like-minded adventurers. Share experiences. Trek with expert-led groups on carefully selected routes.",
    cta: "Check curated departures →",
    href: "/fixed-departures",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
    ocid: "home.ways_group_card",
  },
  {
    badge: "BESPOKE",
    heading: "Tailor-Made Adventures",
    sub: "Experiences crafted exclusively for you",
    body: "Your dates. Your group. Your dream route. We design every detail around your vision — from honeymoon treks to corporate expeditions.",
    cta: "Design your experience →",
    href: "/tailor-made",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ocid: "home.ways_tailor_card",
  },
];

export function WaysToTravel() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      data-ocid="home.ways_to_travel_section"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        background: "var(--bg-void)",
      }}
    >
      {columns.map((col, i) => (
        <a
          key={col.href}
          href={col.href}
          data-ocid={col.ocid}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "relative",
            height: "500px",
            overflow: "hidden",
            display: "block",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {/* Background image */}
          <img
            src={col.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform 400ms ease, filter 400ms ease",
              transform: hovered === i ? "scale(1.04)" : "scale(1.0)",
              filter: hovered === i ? "brightness(0.85)" : "brightness(0.7)",
            }}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(8,10,12,0.75) 0%, rgba(8,10,12,0.4) 100%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {/* Badge */}
            <span
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--accent-blue)",
                border: "1px solid var(--accent-blue)",
                borderRadius: "var(--radius-full)",
                padding: "4px 12px",
                marginBottom: "20px",
                background: "var(--accent-blue-dim)",
              }}
            >
              {col.badge}
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              {col.heading}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-secondary)",
                marginBottom: "10px",
                fontWeight: 500,
              }}
            >
              {col.sub}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "24px",
                maxWidth: "380px",
              }}
            >
              {col.body}
            </p>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--accent-blue)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "gap 150ms ease",
              }}
            >
              {col.cta.replace(" →", "")}
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
    </section>
  );
}
