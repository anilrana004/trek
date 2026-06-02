import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { treks } from "../../data/treks";
import { yatras } from "../../data/yatras";

type FilterPill =
  | "All"
  | "Treks"
  | "Yatras"
  | "Easy"
  | "Moderate"
  | "Difficult"
  | "Packages";

const PILLS: FilterPill[] = [
  "All",
  "Treks",
  "Yatras",
  "Easy",
  "Moderate",
  "Difficult",
  "Packages",
];

const PACKAGES = [
  {
    slug: "corporate",
    name: "Corporate Trek",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80",
    priceFrom: 12000,
    durationLabel: "2-3 Days",
    state: "Packages",
    difficulty: null,
    rating: 4.8,
  },
  {
    slug: "family",
    name: "Family Package",
    image:
      "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
    priceFrom: 9000,
    durationLabel: "3-4 Days",
    state: "Packages",
    difficulty: null,
    rating: 4.9,
  },
  {
    slug: "honeymoon",
    name: "Honeymoon Camp",
    image:
      "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
    priceFrom: 18000,
    durationLabel: "3-5 Days",
    state: "Packages",
    difficulty: null,
    rating: 5.0,
  },
  {
    slug: "school-college",
    name: "School/College Trek",
    image:
      "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80",
    priceFrom: 5500,
    durationLabel: "2-4 Days",
    state: "Packages",
    difficulty: null,
    rating: 4.7,
  },
];

type CardItem = {
  slug: string;
  name: string;
  image: string;
  priceFrom: number;
  durationLabel: string;
  state: string;
  difficulty: string | null;
  rating: number;
  type: "trek" | "yatra" | "package";
};

const CARD_IMAGES: Record<string, string> = {
  "chopta-tungnath":
    "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80",
  kedarkantha:
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  "har-ki-dun":
    "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
  "kuari-pass":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "valley-of-flowers":
    "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
  roopkund:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  brahmatal:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80",
  "phulara-ridge":
    "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80",
  "hampta-pass":
    "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80",
  "sar-pass":
    "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
  kheerganga:
    "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
  triund:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "beas-kund":
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80",
  "nag-tibba":
    "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80",
  "dayara-bugyal":
    "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
  kedarnath:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
  "do-dham":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "char-dham":
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  "panch-kedar":
    "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80",
};

function MobileCard({ item }: { item: CardItem }) {
  const href =
    item.type === "trek"
      ? `/treks/${item.slug}`
      : item.type === "yatra"
        ? `/yatra/${item.slug}`
        : `/packages/${item.slug}`;

  return (
    <Link
      to={href}
      style={{ textDecoration: "none", color: "inherit", flexShrink: 0 }}
    >
      <div
        style={{
          width: "180px",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          border: "1px solid rgba(26,122,76,0.1)",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            height: "120px",
            overflow: "hidden",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Badge */}
          <span
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              background: item.type === "yatra" ? "#F4A623" : "#1A7A4C",
              color: "#fff",
              fontSize: "9px",
              fontWeight: 700,
              fontFamily: "var(--font-labels)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "3px 7px",
              borderRadius: "99px",
            }}
          >
            {item.type === "yatra"
              ? "Yatra"
              : item.type === "package"
                ? "Package"
                : (item.difficulty ?? "Trek")}
          </span>
          {/* Rating chip */}
          <span
            style={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
              background: "rgba(0,0,0,0.6)",
              color: "#F4A623",
              fontSize: "10px",
              fontWeight: 700,
              fontFamily: "var(--font-labels)",
              padding: "3px 7px",
              borderRadius: "99px",
              backdropFilter: "blur(4px)",
            }}
          >
            ★ {item.rating}
          </span>
        </div>

        {/* Details */}
        <div style={{ padding: "10px 12px 12px" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.25,
              marginBottom: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "#6B7280",
              marginBottom: "8px",
            }}
          >
            {item.state !== "Packages" ? item.state : "Custom"} ·{" "}
            {item.durationLabel}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "13px",
                fontWeight: 800,
                color: "#1A7A4C",
              }}
            >
              ₹{item.priceFrom.toLocaleString("en-IN")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                color: "#6B7280",
              }}
            >
              /person
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function AirbnbMobileHero() {
  const [activeFilter, setActiveFilter] = useState<FilterPill>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allTreks: CardItem[] = treks.map((t) => ({
    slug: t.slug,
    name: t.name,
    image: CARD_IMAGES[t.slug] ?? t.heroImage ?? "",
    priceFrom: t.priceFrom,
    durationLabel: t.durationLabel,
    state: t.state,
    difficulty: t.difficulty,
    rating: t.rating,
    type: "trek" as const,
  }));

  const allYatras: CardItem[] = yatras.map((y) => ({
    slug: y.slug,
    name: y.name,
    image: CARD_IMAGES[y.slug] ?? "",
    priceFrom: y.priceFrom,
    durationLabel: y.durationLabel,
    state: "Uttarakhand",
    difficulty: null,
    rating: y.rating,
    type: "yatra" as const,
  }));

  const allPackages: CardItem[] = PACKAGES.map((p) => ({
    ...p,
    type: "package" as const,
  }));

  const filteredCards = useMemo(() => {
    const all = [...allTreks, ...allYatras, ...allPackages];
    let base: CardItem[];
    switch (activeFilter) {
      case "Treks":
        base = allTreks;
        break;
      case "Yatras":
        base = allYatras;
        break;
      case "Easy":
        base = allTreks.filter((t) => t.difficulty?.includes("Easy"));
        break;
      case "Moderate":
        base = allTreks.filter(
          (t) =>
            t.difficulty === "Moderate" || t.difficulty?.includes("Moderate"),
        );
        break;
      case "Difficult":
        base = allTreks.filter((t) => t.difficulty === "Difficult");
        break;
      case "Packages":
        base = allPackages;
        break;
      default:
        base = all;
    }
    if (searchQuery.length >= 2) {
      const q = searchQuery.toLowerCase();
      base = base.filter(
        (c) =>
          c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q),
      );
    }
    return base;
  }, [activeFilter, searchQuery, allTreks, allYatras, allPackages]);

  const trendingItems = allTreks.filter((t) =>
    [
      "kedarkantha",
      "chopta-tungnath",
      "hampta-pass",
      "har-ki-dun",
      "sar-pass",
    ].includes(t.slug),
  );

  return (
    <section
      data-ocid="home.airbnb_mobile_hero"
      className="md:hidden"
      style={{ background: "#F8FAF9", paddingBottom: "80px" }}
    >
      {/* Hero banner with search */}
      <div
        style={{
          position: "relative",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=800&q=80"
          alt="Himalayan trails"
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(20,92,56,0.75) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "16px",
            right: "16px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "4px",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Find Your Summit
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Himalayan Treks & Yatras — Expert Guided
          </p>
        </div>
      </div>

      {/* Sticky search bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#fff",
          padding: "12px 16px",
          borderBottom: "1px solid #E8F5EE",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#F8FAF9",
            border: "1.5px solid #1A7A4C",
            borderRadius: "12px",
            padding: "0 14px",
            height: "46px",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A7A4C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            data-ocid="home.mobile_search_input"
            placeholder="Search treks, yatras, destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "#1A1A1A",
              outline: "none",
            }}
          />
          {searchQuery && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearchQuery("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "#6B7280",
                fontSize: "18px",
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Category filter pills */}
      <div
        style={{
          overflowX: "auto",
          display: "flex",
          gap: "8px",
          padding: "14px 16px 10px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {PILLS.map((pill) => (
          <button
            key={pill}
            type="button"
            data-ocid={`home.filter_pill.${pill.toLowerCase()}`}
            onClick={() => setActiveFilter(pill)}
            style={{
              flexShrink: 0,
              padding: "8px 16px",
              borderRadius: "99px",
              border:
                activeFilter === pill
                  ? "none"
                  : "1.5px solid rgba(26,122,76,0.25)",
              background: activeFilter === pill ? "#1A7A4C" : "#fff",
              color: activeFilter === pill ? "#fff" : "#1A7A4C",
              fontFamily: "var(--font-labels)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {pill}
          </button>
        ))}
      </div>

      {/* Filtered cards strip */}
      <div
        style={{
          overflowX: "auto",
          display: "flex",
          gap: "12px",
          padding: "4px 16px 16px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {filteredCards.length === 0 ? (
          <div
            data-ocid="home.mobile_cards.empty_state"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 32px",
              width: "100%",
              color: "#6B7280",
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
            }}
          >
            <span style={{ fontSize: "32px", marginBottom: "8px" }}>🏔️</span>
            <p>No results found. Try a different filter.</p>
          </div>
        ) : (
          filteredCards.map((item, i) => (
            <div
              key={item.slug + String(i)}
              data-ocid={`home.mobile_card.${i + 1}`}
            >
              <MobileCard item={item} />
            </div>
          ))
        )}
      </div>

      {/* Trending Near You */}
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1A1A1A",
            }}
          >
            🔥 Trending Right Now
          </h2>
          <Link
            to="/treks"
            data-ocid="home.mobile_trending_see_all"
            style={{
              fontFamily: "var(--font-labels)",
              fontSize: "12px",
              fontWeight: 700,
              color: "#1A7A4C",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            See all →
          </Link>
        </div>

        <div
          style={{
            overflowX: "auto",
            display: "flex",
            gap: "12px",
            paddingBottom: "4px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {trendingItems.map((item, i) => (
            <div key={item.slug} data-ocid={`home.trending_card.${i + 1}`}>
              <MobileCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Quick category cards */}
      <div style={{ padding: "24px 16px 0" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "14px",
          }}
        >
          Explore by Type
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {[
            {
              label: "Trek",
              emoji: "🥾",
              href: "/treks",
              bg: "#E8F5EE",
              color: "#1A7A4C",
              count: treks.length,
            },
            {
              label: "Yatra",
              emoji: "🙏",
              href: "/yatra",
              bg: "#FEF3E2",
              color: "#F4A623",
              count: yatras.length,
            },
            {
              label: "Packages",
              emoji: "📦",
              href: "/packages",
              bg: "#EEF2FF",
              color: "#4F46E5",
              count: PACKAGES.length,
            },
            {
              label: "Gear Rental",
              emoji: "🎒",
              href: "/gear-rental",
              bg: "#FEE2E2",
              color: "#EF4444",
              count: 10,
            },
          ].map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              data-ocid={`home.category_card.${cat.label.toLowerCase().replace(" ", "-")}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: cat.bg,
                  borderRadius: "14px",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "28px" }}>{cat.emoji}</span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: cat.color,
                    }}
                  >
                    {cat.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      color: "#6B7280",
                    }}
                  >
                    {cat.count}+ options
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
