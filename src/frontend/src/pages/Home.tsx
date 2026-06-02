import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { TrekCard } from "../components/TrekCard";
import { YatraCard } from "../components/YatraCard";
import { AirbnbMobileHero } from "../components/home/AirbnbMobileHero";
import { FoxicoHero } from "../components/home/FoxicoHero";
import { ReelsSection } from "../components/home/ReelsSection";
import { blogPosts } from "../data/blogs";
import { treks } from "../data/treks";
import { yatras } from "../data/yatras";

/* ─── Constants ─── */
const HERO_IMAGE = "/assets/generated/global-trek-hero.dim_1600x900.jpg";

const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80",
  "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
  "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80",
];

const YOUTUBE_IDS = ["G41oAgfxj4o", "ia6TXClgnyc", "M7lc1UVf-VE"];

const REVIEW_DATA = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    stars: 5,
    text: "Best trekking experience of my life! The Kedarkantha winter trek was absolutely magical. Summit sunrise at -8°C with snow-covered peaks all around — nothing I have ever experienced compares to this. The guides were extremely professional and safety-conscious.",
    time: "2 weeks ago",
    initials: "RS",
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    stars: 5,
    text: "Chose Global Trek for Char Dham Yatra and it exceeded every expectation. The logistics were seamless, the accommodation was comfortable, and our guide Vikram made the spiritual journey deeply meaningful. Will definitely book again.",
    time: "1 month ago",
    initials: "PP",
  },
  {
    name: "Amit Verma",
    location: "Bengaluru",
    stars: 5,
    text: "Hampta Pass trek with Global Trek — professional guides, amazing food, and stunning views. The crossover from green Kullu valley to barren Lahaul in one day is mind-blowing. Group of 10, all perfectly taken care of. Highly recommend.",
    time: "3 weeks ago",
    initials: "AV",
  },
];

const WHY_US = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A7A4C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Expert Safety",
    desc: "100% safe trek record, trained guides, emergency protocols & first aid on every trek.",
    stat: "100%",
    statLabel: "Safe",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A7A4C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Fixed Departures",
    desc: "Guaranteed batches every weekend. Book anytime, trek with a great group.",
    stat: "500+",
    statLabel: "Trips Done",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A7A4C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Certified Guides",
    desc: "ITBP certified, 10+ years experience, deep local knowledge of every trail.",
    stat: "15",
    statLabel: "Years",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A7A4C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "We Care",
    desc: "Small groups max 12, personalized attention, 24/7 support throughout your journey.",
    stat: "12,000+",
    statLabel: "Trekkers",
  },
];

const PARTNERS = [
  "Times of India",
  "NDTV",
  "Ministry of Tourism",
  "Uttarakhand Tourism",
  "HP Tourism",
  "Incredible India",
];

/* ─── Helpers ─── */
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }, (_, starIdx) => String(starIdx)).map(
        (key) => (
          <svg
            key={key}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#1A7A4C"
            aria-hidden="true"
          >
            <title>Star</title>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
      )}
    </div>
  );
}

/* ─── Search Dropdown ─── */
function TrekSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered =
    query.length >= 2
      ? treks
          .filter(
            (t) =>
              t.name.toLowerCase().includes(query.toLowerCase()) ||
              t.state.toLowerCase().includes(query.toLowerCase()),
          )
          .slice(0, 6)
      : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        maxWidth: "560px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <svg
          style={{ marginLeft: "16px", flexShrink: 0 }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A7A4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search a trek, destination, or yatra..."
          value={query}
          data-ocid="hero.search_input"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            padding: "16px 12px",
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "#1A1A1A",
            outline: "none",
          }}
          aria-label="Search treks and yatras"
        />
        <Link
          to="/treks"
          data-ocid="hero.search_button"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 20px",
            background: "#1A7A4C",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Search
        </Link>
      </div>
      {open && filtered.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            zIndex: 100,
            overflow: "hidden",
          }}
        >
          {filtered.map((t) => (
            <Link
              key={t.slug}
              to={
                `/treks/${t.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh"}/${t.slug}` as string
              }
              data-ocid={`hero.search_result.${t.slug}`}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                textDecoration: "none",
                borderBottom: "1px solid #F0F0F0",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#F0F9F4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#1A1A1A",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "#4A4A4A",
                  }}
                >
                  {t.state} · {t.durationLabel} · {t.difficulty}
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#1A7A4C",
                }}
              >
                ₹{t.priceFrom.toLocaleString("en-IN")}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Animated Stat ─── */
function AnimatedStat({ target, label }: { target: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s ease",
        }}
      >
        {target}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "rgba(255,255,255,0.8)",
          marginTop: "6px",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── YouTube Embed ─── */
function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        background: "#000",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => setLoaded(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setLoaded(true);
      }}
      aria-label="Play trek video"
    >
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Trek video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      ) : (
        <>
          <img
            src={thumb}
            alt="Trek video thumbnail"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "#FF0000",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
                aria-hidden="true"
              >
                <title>Play</title>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Hero section removed — now using FoxicoHero / AirbnbMobileHero ─── */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _HeroSection() {
  return (
    <section
      data-ocid="home.hero_section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(20,92,56,0.6) 60%, rgba(20,92,56,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 clamp(16px,4vw,48px)",
          maxWidth: "900px",
          width: "100%",
          paddingBottom: "140px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-labels)",
            fontSize: "13px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          🏔️ HIMALAYAN ADVENTURES SINCE 2009
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.05,
            marginBottom: "24px",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          Find Your
          <br />
          Summit
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.6,
            maxWidth: "640px",
            margin: "0 auto 40px",
          }}
        >
          Expert-guided treks across the Himalayas of Uttarakhand &amp; Himachal
          Pradesh
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <Link
            to="/treks"
            data-ocid="hero.explore_treks_button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 36px",
              background: "#1A7A4C",
              color: "#fff",
              borderRadius: "8px",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 4px 20px rgba(26,122,76,0.5)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#145C38";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#1A7A4C";
              el.style.transform = "translateY(0)";
            }}
          >
            Explore Treks
          </Link>
          <Link
            to="/contact"
            data-ocid="hero.plan_trip_button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 36px",
              background: "transparent",
              color: "#fff",
              borderRadius: "8px",
              border: "2px solid rgba(255,255,255,0.8)",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(255,255,255,0.15)";
              el.style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.8)";
            }}
          >
            Plan My Trip
          </Link>
        </div>

        {/* Search Bar */}
        <TrekSearch />
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          background: "rgba(26,122,76,0.95)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "16px clamp(16px,4vw,48px)",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[
            "500+ Treks Completed",
            "12,000+ Happy Trekkers",
            "15 Years Experience",
            "4.9★ Rating",
          ].map((stat, i, arr) => (
            <span key={stat} style={{ display: "contents" }}>
              <span
                data-ocid={`hero.stat.${i + 1}`}
                style={{
                  fontFamily: "var(--font-labels)",
                  fontSize: "clamp(12px,1.5vw,14px)",
                  fontWeight: 700,
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                {stat}
              </span>
              {i < arr.length - 1 && (
                <span
                  style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}
                >
                  |
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "Uttarakhand" | "Himachal Pradesh"
  >("Uttarakhand");

  useEffect(() => {
    document.title = "Global Trek — Where Every Trail Tells a Story";
  }, []);

  const uttarakhandTreks = treks
    .filter((t) => t.state === "Uttarakhand")
    .slice(0, 6);
  const himachalTreks = treks
    .filter((t) => t.state === "Himachal Pradesh")
    .slice(0, 6);
  const trendingTreks = treks.slice(0, 8);
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <main style={{ background: "#FFFFFF" }}>
      {/* ═══ HERO ═══ — Desktop: Foxico split layout, Mobile: Airbnb-style */}
      <FoxicoHero />
      <AirbnbMobileHero />

      {/* ═══ REELS ═══ */}
      <ReelsSection />

      {/* ═══ TRENDING TREKS ═══ */}
      <section
        data-ocid="home.trending_section"
        style={{ background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <p
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#1A7A4C",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              MOST POPULAR
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Trending Treks
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {trendingTreks.map((trek, i) => (
              <TrekCard key={trek.slug} trek={trek} index={i} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              to="/treks"
              data-ocid="home.trending.view_all_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "#1A7A4C",
                color: "#fff",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#145C38";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#1A7A4C";
              }}
            >
              View All Treks →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section
        data-ocid="home.why_us_section"
        style={{ background: "#F8FAF9", padding: "80px clamp(16px,4vw,48px)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#1A7A4C",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              OUR PROMISE
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              4 Reasons to Choose Global Trek
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
              marginBottom: "56px",
            }}
          >
            {WHY_US.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  borderTop: "4px solid #1A7A4C",
                  boxShadow: "0 4px 20px rgba(26,122,76,0.1)",
                  padding: "32px 28px",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 32px rgba(26,122,76,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.1)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-labels)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#4A4A4A",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "32px",
              background: "#1A7A4C",
              borderRadius: "16px",
              padding: "40px",
            }}
          >
            {WHY_US.map((item) => (
              <AnimatedStat
                key={item.statLabel}
                target={item.stat}
                label={item.statLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATE-WISE TREKS ═══ */}
      <section
        data-ocid="home.statewise_section"
        style={{ background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#1A7A4C",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              EXPLORE BY REGION
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Treks by State
            </h2>
          </div>
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderRadius: "10px",
              overflow: "hidden",
              border: "2px solid #1A7A4C",
              width: "fit-content",
              margin: "0 auto 40px",
            }}
          >
            {(["Uttarakhand", "Himachal Pradesh"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                data-ocid={`home.statewise.tab.${tab.toLowerCase().replace(" ", "-")}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "12px 28px",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === tab ? "#1A7A4C" : "#fff",
                  color: activeTab === tab ? "#fff" : "#1A7A4C",
                  fontFamily: "var(--font-labels)",
                  fontWeight: 700,
                  fontSize: "14px",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {(activeTab === "Uttarakhand"
              ? uttarakhandTreks
              : himachalTreks
            ).map((trek, i) => (
              <TrekCard key={trek.slug} trek={trek} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ YATRA ═══ */}
      <section
        data-ocid="home.yatra_section"
        style={{
          background: "linear-gradient(135deg, #145C38 0%, #1A7A4C 100%)",
          padding: "80px clamp(16px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#F4A623",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              ☸ SACRED JOURNEYS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 12px",
              }}
            >
              Embark on a Sacred Journey
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "rgba(255,255,255,0.8)",
                margin: 0,
              }}
            >
              Spiritual pilgrimages to the holiest shrines of the Himalayas.
              2026 Season Open.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {yatras.map((yatra, i) => (
              <YatraCard key={yatra.slug} yatra={yatra} index={i} />
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link
              to="/yatra"
              data-ocid="home.yatra.register_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 40px",
                background: "#F4A623",
                color: "#fff",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                transition: "background 0.2s",
                boxShadow: "0 4px 16px rgba(244,166,35,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#E0941A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#F4A623";
              }}
            >
              🙏 Register for 2026 Yatra
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ YOUTUBE ═══ */}
      <section
        data-ocid="home.youtube_section"
        style={{ background: "#F8FAF9", padding: "80px clamp(16px,4vw,48px)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#1A7A4C",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              WATCH & EXPLORE
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Experience the Himalayas — Watch Our Stories
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {YOUTUBE_IDS.map((id) => (
              <YouTubeEmbed key={id} videoId={id} />
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://youtube.com/@globaltrek"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.youtube.channel_link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "15px",
                color: "#1A7A4C",
                textDecoration: "none",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#FF0000"
                aria-hidden="true"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                  fill="#fff"
                />
              </svg>
              Watch More on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ GOOGLE REVIEWS ═══ */}
      <section
        data-ocid="home.reviews_section"
        style={{ background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <StarRating count={5} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                4.9/5
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "#4A4A4A",
                marginBottom: "4px",
              }}
            >
              Based on 500+ Google Reviews
            </p>
            <p
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#1A7A4C",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              WHAT OUR TREKKERS SAY
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {REVIEW_DATA.map((r, i) => (
              <div
                key={r.name}
                data-ocid={`home.reviews.item.${i + 1}`}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  borderTop: "4px solid #1A7A4C",
                  boxShadow: "0 4px 20px rgba(26,122,76,0.1)",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#1A7A4C",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-labels)",
                      fontWeight: 700,
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    {r.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-labels)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#1A1A1A",
                      }}
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        color: "#4A4A4A",
                      }}
                    >
                      {r.location} · {r.time}
                    </div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Google"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <StarRating count={r.stars} />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#4A4A4A",
                    lineHeight: 1.7,
                    marginTop: "12px",
                  }}
                >
                  {r.text}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://g.page/global-trek-india/review"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.reviews.google_link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                border: "2px solid #1A7A4C",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#1A7A4C",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#1A7A4C";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "#1A7A4C";
              }}
            >
              Read All Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED BLOGS ═══ */}
      <section
        data-ocid="home.blog_section"
        style={{ background: "#F8FAF9", padding: "80px clamp(16px,4vw,48px)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "16px",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                HIMALAYAN STORIES
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  margin: 0,
                }}
              >
                Featured Articles
              </h2>
            </div>
            <Link
              to="/blog"
              data-ocid="home.blog.view_all_link"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#1A7A4C",
                textDecoration: "none",
              }}
            >
              Read All Articles →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {featuredBlogs.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}` as string}
                data-ocid={`home.blog.item.${i + 1}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(26,122,76,0.08)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 32px rgba(26,122,76,0.16)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.08)";
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      background:
                        "linear-gradient(135deg, #E8F5EE 0%, #1A7A4C33 100%)",
                    }}
                  >
                    <img
                      src={`https://images.unsplash.com/photo-150690592534${6 + i}-21bda4d32df4?w=600&q=80`}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s",
                      }}
                      loading="lazy"
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#E8F5EE",
                        color: "#1A7A4C",
                        fontFamily: "var(--font-labels)",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "50px",
                        marginBottom: "12px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {post.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        lineHeight: 1.4,
                        marginBottom: "10px",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "#4A4A4A",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                      }}
                    >
                      {post.excerpt.length > 150
                        ? `${post.excerpt.slice(0, 150)}...`
                        : post.excerpt}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          color: "#4A4A4A",
                        }}
                      >
                        <strong>{post.author}</strong> · {post.date}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          color: "#1A7A4C",
                          fontWeight: 600,
                        }}
                      >
                        {post.readTime} min read
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTAGRAM ═══ */}
      <section
        data-ocid="home.instagram_section"
        style={{ background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p
              style={{
                fontFamily: "var(--font-labels)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#1A7A4C",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              @GLOBALTREK
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Follow Us on Instagram
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            {INSTAGRAM_IMAGES.map((url, i) => (
              <a
                key={url}
                href="https://instagram.com/globaltrek"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`home.instagram.item.${i + 1}`}
                style={{
                  display: "block",
                  aspectRatio: "1",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={url}
                  alt={`Global Trek Instagram ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                  loading="lazy"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                  }}
                />
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://instagram.com/globaltrek"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.instagram.follow_button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "linear-gradient(135deg, #E1306C, #833AB4)",
                color: "#fff",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#fff"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @globaltrek
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section
        data-ocid="home.partners_section"
        style={{ background: "#F8FAF9", padding: "56px clamp(16px,4vw,48px)" }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-labels)",
              fontSize: "12px",
              fontWeight: 700,
              color: "#4A4A4A",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            TRUSTED & RECOGNIZED BY
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            {PARTNERS.map((p) => (
              <div
                key={p}
                data-ocid={`home.partner.${p.toLowerCase().replace(/ /g, "-")}`}
                style={{
                  padding: "12px 24px",
                  border: "2px solid #1A7A4C",
                  borderRadius: "8px",
                  fontFamily: "var(--font-labels)",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#1A7A4C",
                  background: "#fff",
                  letterSpacing: "0.05em",
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
