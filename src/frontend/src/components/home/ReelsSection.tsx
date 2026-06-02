import { useRef } from "react";

const REELS = [
  {
    id: 1,
    title: "Kedarkantha Summit Sunrise",
    duration: "1:24",
    image:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80",
  },
  {
    id: 2,
    title: "Hampta Pass Crossing",
    duration: "0:58",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  },
  {
    id: 3,
    title: "Valley of Flowers Bloom",
    duration: "1:05",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
  },
  {
    id: 4,
    title: "Kedarnath Yatra Morning",
    duration: "0:47",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    id: 5,
    title: "Har Ki Dun Valley",
    duration: "1:18",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  },
  {
    id: 6,
    title: "Sar Pass Snow Slides",
    duration: "0:52",
    image:
      "https://images.unsplash.com/photo-1458442310124-dde6edb43d10?w=400&q=80",
  },
  {
    id: 7,
    title: "Chopta Tungnath Temple",
    duration: "1:03",
    image:
      "https://images.unsplash.com/photo-1573590330099-d6c7355ec595?w=400&q=80",
  },
  {
    id: 8,
    title: "Char Dham Highlights",
    duration: "0:39",
    image:
      "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
  },
];

function PlayIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="18" fill="rgba(255,255,255,0.95)" />
      <polygon points="14,11 28,18 14,25" fill="#1A7A4C" />
    </svg>
  );
}

export function ReelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      data-ocid="home.reels_section"
      style={{
        background: "#1A1A1A",
        padding: "48px 0",
        overflow: "hidden",
      }}
    >
      {/* Header row */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(16px,4vw,48px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "28px",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Trek Reels
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.55)",
              margin: "6px 0 0",
            }}
          >
            Short clips from the trails
          </p>
        </div>
        <a
          href="https://www.youtube.com/@GlobalTrekIndia"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="home.reels.watch_all_link"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 600,
            color: "#2ECC71",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "opacity 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
        >
          Watch All on YouTube
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="#2ECC71"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        data-ocid="home.reels.scroll_strip"
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          padding: "4px clamp(16px,4vw,48px) 12px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
        }}
        className="reels-strip"
      >
        {REELS.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </section>
  );
}

function ReelCard({
  reel,
}: {
  reel: { id: number; title: string; duration: string; image: string };
}) {
  return (
    <div
      data-ocid={`home.reels.item.${reel.id}`}
      style={{
        position: "relative",
        minWidth: "160px",
        width: "160px",
        height: "280px",
        borderRadius: "16px",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        transition:
          "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 40px rgba(26,122,76,0.45)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Background image */}
      <img
        src={reel.image}
        alt={reel.title}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* Duration badge top-left */}
      <span
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
          color: "#fff",
          fontSize: "11px",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          padding: "3px 8px",
          borderRadius: "20px",
          letterSpacing: "0.03em",
        }}
      >
        {reel.duration}
      </span>

      {/* Play button center */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))",
        }}
      >
        <PlayIcon />
      </div>

      {/* Trek name bottom */}
      <p
        style={{
          position: "absolute",
          bottom: "12px",
          left: "10px",
          right: "10px",
          margin: 0,
          fontFamily: "var(--font-body)",
          fontSize: "12px",
          fontWeight: 600,
          color: "#fff",
          lineHeight: 1.35,
          textShadow: "0 1px 4px rgba(0,0,0,0.7)",
        }}
      >
        {reel.title}
      </p>
    </div>
  );
}
