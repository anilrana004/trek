import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { treks } from "../../data/treks";
import { yatras } from "../../data/yatras";

interface DestinationCard {
  slug: string;
  name: string;
  image: string;
  type: "trek" | "yatra";
  rating: number;
  priceFrom: number;
  difficulty?: string;
  durationLabel: string;
}

interface Destination {
  id: number;
  label: string;
  heroImage: string;
  heroName: string;
  subtitle: string;
  ctaHref: string;
  cards: DestinationCard[];
}

function buildTrekCard(slug: string): DestinationCard | undefined {
  const t = treks.find((x) => x.slug === slug);
  if (!t) return undefined;
  return {
    slug: t.slug,
    name: t.name,
    image:
      t.heroImage ??
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    type: "trek",
    rating: t.rating,
    priceFrom: t.priceFrom,
    difficulty: t.difficulty,
    durationLabel: t.durationLabel,
  };
}

function buildYatraCard(slug: string): DestinationCard | undefined {
  const y = yatras.find((x) => x.slug === slug);
  if (!y) return undefined;
  return {
    slug: y.slug,
    name: y.name,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    type: "yatra",
    rating: y.rating,
    priceFrom: y.priceFrom,
    difficulty: undefined,
    durationLabel: y.durationLabel,
  };
}

// Destination card images per region
const CARD_IMAGES: Record<string, string> = {
  "chopta-tungnath":
    "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=500&q=80",
  kedarkantha:
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80",
  "har-ki-dun":
    "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=500&q=80",
  "kuari-pass":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  "valley-of-flowers":
    "https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&q=80",
  roopkund:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
  brahmatal:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=80",
  "phulara-ridge":
    "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=500&q=80",
  "hampta-pass":
    "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=500&q=80",
  "sar-pass":
    "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=500&q=80",
  kedarnath:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
  "do-dham":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  "char-dham":
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80",
  "panch-kedar":
    "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=500&q=80",
  "dayara-bugyal":
    "https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&q=80",
};

function buildCardWithImage(
  slug: string,
  type: "trek" | "yatra",
): DestinationCard | undefined {
  const card = type === "trek" ? buildTrekCard(slug) : buildYatraCard(slug);
  if (!card) return undefined;
  return { ...card, image: CARD_IMAGES[slug] ?? card.image };
}

const DESTINATIONS: Destination[] = [
  {
    id: 0,
    label: "Uttarakhand",
    heroImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=90",
    heroName: "Uttarakhand Highlands",
    subtitle: "The Land of Gods — Bugyals, Temples & Himalayan Peaks",
    ctaHref: "/treks/uttarakhand",
    cards: [
      buildCardWithImage("chopta-tungnath", "trek"),
      buildCardWithImage("har-ki-dun", "trek"),
      buildCardWithImage("kedarkantha", "trek"),
      buildCardWithImage("kuari-pass", "trek"),
      buildCardWithImage("valley-of-flowers", "trek"),
    ].filter((c): c is DestinationCard => !!c),
  },
  {
    id: 1,
    label: "Himachal Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=1920&q=90",
    heroName: "Himachal Highlands",
    subtitle: "Parvati Valley to Lahaul — Crossover Treks & Alpine Lakes",
    ctaHref: "/treks/himachal-pradesh",
    cards: [
      buildCardWithImage("hampta-pass", "trek"),
      buildCardWithImage("sar-pass", "trek"),
      buildCardWithImage("kheerganga", "trek"),
      buildCardWithImage("triund", "trek"),
      buildCardWithImage("beas-kund", "trek"),
    ].filter((c): c is DestinationCard => !!c),
  },
  {
    id: 2,
    label: "Kedarnath",
    heroImage:
      "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=1920&q=90",
    heroName: "Kedarnath Dham",
    subtitle: "Jyotirlinga of Lord Shiva — 3,583m, Rudraprayag, Uttarakhand",
    ctaHref: "/yatra/kedarnath",
    cards: [
      buildCardWithImage("kedarnath", "yatra"),
      buildCardWithImage("do-dham", "yatra"),
      buildCardWithImage("chopta-tungnath", "trek"),
      buildCardWithImage("roopkund", "trek"),
      buildCardWithImage("kuari-pass", "trek"),
    ].filter((c): c is DestinationCard => !!c),
  },
  {
    id: 3,
    label: "Winter",
    heroImage:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=90",
    heroName: "Winter Himalaya",
    subtitle: "Snow-Blanketed Trails & Frozen Lakes — Dec to Feb Season",
    ctaHref: "/treks",
    cards: [
      buildCardWithImage("kedarkantha", "trek"),
      buildCardWithImage("brahmatal", "trek"),
      buildCardWithImage("chopta-tungnath", "trek"),
      buildCardWithImage("dayara-bugyal", "trek"),
      buildCardWithImage("har-ki-dun", "trek"),
    ].filter((c): c is DestinationCard => !!c),
  },
  {
    id: 4,
    label: "Char Dham",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90",
    heroName: "Char Dham Yatra",
    subtitle:
      "Yamunotri · Gangotri · Kedarnath · Badrinath — Sacred Circuit 2026",
    ctaHref: "/yatra/char-dham",
    cards: [
      buildCardWithImage("char-dham", "yatra"),
      buildCardWithImage("kedarnath", "yatra"),
      buildCardWithImage("do-dham", "yatra"),
      buildCardWithImage("panch-kedar", "yatra"),
      buildCardWithImage("valley-of-flowers", "trek"),
    ].filter((c): c is DestinationCard => !!c),
  },
];

function HeroCard({
  card,
  index,
  isActive,
  onClick,
}: {
  card: DestinationCard;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const href =
    card.type === "trek" ? `/treks/${card.slug}` : `/yatra/${card.slug}`;

  return (
    <div
      data-ocid={`hero.foxico_card.${index + 1}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${card.name}`}
      style={{
        position: "relative",
        width: "220px",
        height: "290px",
        borderRadius: "16px",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        transform: `translateX(${index * 22}px) translateY(${index * 14}px)`,
        zIndex: 10 - index,
        border: isActive
          ? "2.5px solid #2ECC71"
          : "2px solid rgba(255,255,255,0.12)",
        boxShadow: isActive
          ? "0 0 0 3px rgba(46,204,113,0.25), 0 8px 32px rgba(0,0,0,0.5)"
          : "0 8px 32px rgba(0,0,0,0.45)",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Card BG image */}
      <img
        src={card.image}
        alt={card.name}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Dark gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* Bookmark */}
      <button
        type="button"
        aria-label={`Save ${card.name}`}
        data-ocid={`hero.bookmark.${index + 1}`}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      </button>

      {/* Type badge */}
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          background: card.type === "yatra" ? "#F4A623" : "#1A7A4C",
          color: "#fff",
          fontSize: "9px",
          fontWeight: 700,
          fontFamily: "var(--font-labels)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "3px 8px",
          borderRadius: "99px",
        }}
      >
        {card.type === "yatra" ? "Yatra" : (card.difficulty ?? "Trek")}
      </span>

      {/* Bottom content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "6px",
            lineHeight: 1.2,
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          {card.name}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "6px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="#F4A623"
              aria-hidden="true"
            >
              <title>Rating</title>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "rgba(255,255,255,0.9)",
                fontWeight: 600,
              }}
            >
              {card.rating}
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-labels)",
              fontSize: "11px",
              fontWeight: 700,
              color: "#2ECC71",
            }}
          >
            ₹{card.priceFrom.toLocaleString("en-IN")}
          </span>
        </div>
        <Link
          to={href}
          data-ocid={`hero.card_link.${index + 1}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "block",
            marginTop: "10px",
            textAlign: "center",
            background: "rgba(26,122,76,0.9)",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 700,
            fontFamily: "var(--font-labels)",
            letterSpacing: "0.08em",
            padding: "7px",
            borderRadius: "8px",
            textDecoration: "none",
            textTransform: "uppercase",
            backdropFilter: "blur(4px)",
          }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export function FoxicoHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [_prevIdx, setPrevIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dest = DESTINATIONS[activeIdx];

  function goTo(idx: number) {
    if (idx === activeIdx || animating) return;
    setPrevIdx(activeIdx);
    setAnimating(true);
    setActiveIdx(idx);
    setTimeout(() => setAnimating(false), 600);
  }

  // Auto-advance every 6s
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((activeIdx + 1) % DESTINATIONS.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  });

  return (
    <section
      data-ocid="home.foxico_hero"
      className="hidden md:flex"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "640px",
        overflow: "hidden",
      }}
    >
      {/* Background images — crossfade */}
      {DESTINATIONS.map((d, i) => (
        <div
          key={d.id}
          aria-hidden={i !== activeIdx}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === activeIdx ? 1 : 0,
            transition: "opacity 700ms ease",
            zIndex: 0,
          }}
        >
          <img
            src={d.heroImage}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 35%",
            }}
          />
        </div>
      ))}

      {/* Global overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.18) 100%)",
          zIndex: 1,
        }}
      />

      {/* Layout: left + right */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: "0 clamp(32px,4vw,64px)",
          gap: "32px",
        }}
      >
        {/* ── LEFT 55% ── */}
        <div
          style={{
            flex: "0 0 55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            paddingTop: "80px",
            paddingBottom: "60px",
          }}
        >
          {/* Overline label */}
          <p
            key={`label-${activeIdx}`}
            style={{
              fontFamily: "var(--font-labels)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2ECC71",
              marginBottom: "20px",
              animation: "heroTextIn 0.5s ease forwards",
            }}
          >
            🏔️ Himalayan Adventures Since 2009
          </p>

          {/* Hero name */}
          <h1
            key={`h1-${activeIdx}`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 6.5vw, 88px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.0,
              marginBottom: "20px",
              maxWidth: "580px",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              animation: "heroTextIn 0.55s ease forwards",
            }}
          >
            {dest.heroName}
          </h1>

          {/* Subtitle */}
          <p
            key={`sub-${activeIdx}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px,1.6vw,19px)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              maxWidth: "480px",
              marginBottom: "40px",
              animation: "heroTextIn 0.6s ease forwards",
            }}
          >
            {dest.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", marginBottom: "60px" }}>
            <Link
              to={dest.ctaHref}
              data-ocid="hero.foxico_explore_btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "50px",
                padding: "0 28px",
                background: "#1A7A4C",
                color: "#fff",
                borderRadius: "10px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(26,122,76,0.45)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(26,122,76,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(26,122,76,0.45)";
              }}
            >
              Explore Trek
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              to="/contact"
              data-ocid="hero.foxico_plan_btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "50px",
                padding: "0 28px",
                background: "transparent",
                color: "#fff",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                backdropFilter: "blur(6px)",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Plan My Trip
            </Link>
          </div>

          {/* Vertical dot nav */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {DESTINATIONS.map((d, i) => (
              <button
                key={d.id}
                type="button"
                aria-label={`Go to ${d.label}`}
                data-ocid={`hero.foxico_dot.${i + 1}`}
                onClick={() => goTo(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <span
                  style={{
                    width: i === activeIdx ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "99px",
                    background: i === activeIdx ? "#2ECC71" : "transparent",
                    border:
                      i === activeIdx
                        ? "none"
                        : "2px solid rgba(255,255,255,0.5)",
                    transition: "all 0.3s ease",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-labels)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: i === activeIdx ? "#fff" : "rgba(255,255,255,0.45)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {d.label}
                </span>
              </button>
            ))}
          </div>

          {/* Page counter */}
          <div
            style={{
              position: "absolute",
              bottom: "36px",
              left: "clamp(32px,4vw,64px)",
              fontFamily: "var(--font-labels)",
              fontSize: "13px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.1em",
            }}
          >
            <span style={{ color: "#fff", fontSize: "18px" }}>
              0{activeIdx + 1}
            </span>{" "}
            <span style={{ fontSize: "14px" }}>/</span> 0{DESTINATIONS.length}
          </div>
        </div>

        {/* ── RIGHT 45% — Staggered cards ── */}
        <div
          style={{
            flex: "0 0 45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "100%",
            paddingTop: "80px",
            paddingBottom: "60px",
          }}
        >
          <div
            key={`cards-${activeIdx}`}
            style={{
              position: "relative",
              width: "340px",
              height: "420px",
              animation: "heroCardsIn 0.55s ease forwards",
            }}
          >
            {dest.cards.map((card, i) => (
              <div
                key={card.slug + String(i)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                <HeroCard
                  card={card}
                  index={i}
                  isActive={i === 0}
                  onClick={() => goTo((activeIdx + 1) % DESTINATIONS.length)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "16px clamp(32px,4vw,64px)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { v: "500+", l: "Treks Completed" },
          { v: "12,000+", l: "Happy Trekkers" },
          { v: "15 Years", l: "Experience" },
          { v: "4.9 ★", l: "Rating" },
          { v: "100%", l: "Safe Record" },
        ].map((s, i, arr) => (
          <span key={s.l} style={{ display: "contents" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#2ECC71",
                }}
              >
                {s.v}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {s.l}
              </span>
            </span>
            {i < arr.length - 1 && (
              <span
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "20px",
                  margin: "0 8px",
                }}
              >
                ||
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateX(-28px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroCardsIn {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
