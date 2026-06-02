import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=90",
    credit: "Christian Crott",
  },
  {
    url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&q=90",
    credit: "Jasmine Star",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90",
    credit: "Sharath Vishnu",
  },
  {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=90",
    credit: "Sharath Vishnu",
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=90",
    credit: "Sanjiv Rai",
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=90",
    credit: "Avilash Bisht",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(current + 1), 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, goTo]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      data-ocid="home.hero_section"
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "640px",
        height: "100vh",
        overflow: "hidden",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.credit + String(i)}
          aria-hidden={i !== current}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 800ms ease",
            willChange: "opacity",
          }}
        >
          <img
            src={slide.url}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              animation:
                i === current ? "kenBurns 5000ms ease forwards" : "none",
            }}
          />
          {/* Photo credit */}
          <span
            style={{
              position: "absolute",
              bottom: "60px",
              right: "20px",
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "12px",
              color: "rgba(240,244,248,0.5)",
              textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              pointerEvents: "none",
            }}
          >
            📷 {slide.credit}
          </span>
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-hero)",
          pointerEvents: "none",
        }}
      />

      {/* Hero text */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: 0,
          right: 0,
          textAlign: "center",
          padding: "0 clamp(20px,5vw,80px)",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent-blue)",
            marginBottom: "12px",
          }}
        >
          Welcome to
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "clamp(52px, 8vw, 88px)",
            color: "var(--text-primary)",
            lineHeight: 1.0,
            marginBottom: "16px",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          Global Trek
        </h1>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "var(--text-secondary)",
            marginBottom: "16px",
            maxWidth: "700px",
            margin: "0 auto 16px",
          }}
        >
          Where Every Trail Tells a Story
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          We are mountain guides delivering meticulously planned, carefully
          curated and safely executed adventure trips to various corners of the
          Himalaya &amp; beyond.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            pointerEvents: "all",
          }}
        >
          <Link
            to="/trips"
            data-ocid="home.hero_explore_button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "52px",
              padding: "0 32px",
              background: "var(--accent-blue)",
              color: "var(--text-inverse)",
              borderRadius: "var(--btn-radius)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "all 150ms ease",
              boxShadow: "0 4px 16px rgba(91,196,240,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-blue-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent-blue)";
              e.currentTarget.style.transform = "none";
            }}
          >
            Explore All Trips
          </Link>
          <Link
            to="/tailor-made"
            data-ocid="home.hero_plan_button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "52px",
              padding: "0 32px",
              background: "transparent",
              color: "var(--accent-blue)",
              border: "1px solid var(--accent-blue)",
              borderRadius: "var(--btn-radius)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "all 150ms ease",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-blue-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Plan My Adventure
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: scrolled ? 0 : 1,
          transition: "opacity 400ms ease",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          SCROLL TO EXPLORE
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="presentation"
          aria-hidden="true"
          style={{ animation: "scrollBounce 1.5s ease infinite" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Prev/Next arrows */}
      <button
        type="button"
        onClick={() => goTo(current - 1)}
        data-ocid="home.hero_prev_button"
        aria-label="Previous slide"
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 150ms ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(91,196,240,0.25)";
          e.currentTarget.style.borderColor = "var(--accent-blue)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label="Navigate left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        data-ocid="home.hero_next_button"
        aria-label="Next slide"
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 150ms ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(91,196,240,0.25)";
          e.currentTarget.style.borderColor = "var(--accent-blue)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label="Navigate right"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.credit + String(i)}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            data-ocid={`home.hero_dot.${i + 1}`}
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              borderRadius: "var(--radius-full)",
              background:
                i === current ? "var(--accent-blue)" : "var(--border-strong)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 250ms ease, background 250ms ease",
            }}
          />
        ))}
      </div>

      {/* CSS keyframes for Ken Burns + scroll bounce */}
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.0); }
          to   { transform: scale(1.06); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
