import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { TrekCard } from "../components/TrekCard";
import { treks } from "../data/treks";

const FEATURED_SLUGS = ["hampta-pass", "sar-pass"];

const difficultyColors: Record<string, { bg: string; text: string }> = {
  Easy: { bg: "#E8F5EE", text: "#1A7A4C" },
  "Easy to Moderate": { bg: "#E8F5EE", text: "#1A7A4C" },
  Moderate: { bg: "#FFF3CD", text: "#856404" },
  Difficult: { bg: "#FDECEA", text: "#C0392B" },
};

export function HimachalHubPage() {
  const hpTreks = useMemo(
    () => treks.filter((t) => t.state === "Himachal Pradesh"),
    [],
  );
  const featuredTreks = useMemo(
    () =>
      FEATURED_SLUGS.map((s) => hpTreks.find((t) => t.slug === s)).filter(
        Boolean,
      ),
    [hpTreks],
  );
  const gridTreks = useMemo(
    () => hpTreks.filter((t) => !FEATURED_SLUGS.includes(t.slug)),
    [hpTreks],
  );

  const infoCards = [
    {
      icon: "🌊",
      title: "Parvati Valley Treks",
      desc: "Sar Pass and Kheerganga wind through the mystical Parvati Valley — pine-scented forest trails, hot springs and Himalayan villages.",
    },
    {
      icon: "🗻",
      title: "Manali-Based Treks",
      desc: "Hampta Pass and Beas Kund are iconic Manali treks through Kullu Valley, with dramatic crossovers into the arid Lahaul landscape.",
    },
    {
      icon: "🌸",
      title: "Best Seasons",
      desc: "June–September is ideal — monsoon brings lush meadows and roaring waterfalls. April–May has spectacular snow on Sar Pass and Hampta.",
    },
    {
      icon: "🏔️",
      title: "Altitude & Access",
      desc: "Treks range 2,850m–4,270m. Base cities are Manali, Kasol, and Dharamshala — all well connected by road from Chandigarh.",
    },
  ];

  return (
    <div style={{ paddingTop: "var(--nav-height, 72px)" }}>
      {/* Hero Banner */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0a3320 0%, #1A7A4C 55%, #2ECC71 100%)",
          padding: "80px 24px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "15%",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "rgba(46,204,113,0.07)",
          }}
        />
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "20px" }}>
            <ol
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {["Home", "Treks", "Himachal Pradesh"].map((crumb, i, arr) => (
                <li
                  key={crumb}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  {i > 0 && (
                    <span
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "13px",
                      }}
                    >
                      ›
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color:
                        i === arr.length - 1 ? "#fff" : "rgba(255,255,255,0.7)",
                      fontWeight: i === arr.length - 1 ? 600 : 400,
                    }}
                  >
                    {crumb}
                  </span>
                </li>
              ))}
            </ol>
          </nav>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 400px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "50px",
                  padding: "5px 14px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontSize: "16px" }}>🌲</span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Himachal Pradesh Trekking
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                }}
              >
                Himachal Pradesh Treks
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.6,
                  maxWidth: "540px",
                  margin: "0 0 32px",
                }}
              >
                5 iconic treks through Parvati Valley's mystical forests,
                Manali's dramatic crossover passes, and Dharamshala's Dhauladhar
                ridgelines.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="#all-treks"
                  data-ocid="hp_hub.explore_button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#fff",
                    color: "#1A7A4C",
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "15px",
                    padding: "12px 28px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  Explore All 5 Treks
                </a>
                <a
                  href="/contact"
                  data-ocid="hp_hub.inquiry_button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "15px",
                    padding: "12px 28px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  Plan My Trek
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                flexShrink: 0,
              }}
            >
              {[
                { value: "5", label: "HP Treks" },
                { value: "2,850m–4,270m", label: "Altitude Range" },
                { value: "2–5 Days", label: "Duration Range" },
                { value: "4.8★", label: "Avg. Rating" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    minWidth: "130px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.75)",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Treks — Hampta Pass & Sar Pass */}
      <div style={{ background: "#fff", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            label="Signature Routes"
            title="Featured Himachal Treks"
            subtitle="Hampta Pass and Sar Pass are two of India's most celebrated mountain crossovers — dramatic, breathtaking, and unforgettable."
          />

          {/* Large featured layout — 2 side-by-side */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "28px",
              marginBottom: "24px",
            }}
          >
            {featuredTreks.map((trek, i) => {
              if (!trek) return null;
              const diffStyle =
                difficultyColors[trek.difficulty] ?? difficultyColors.Moderate;
              return (
                <article
                  key={trek.slug}
                  data-ocid={`hp_hub.featured_card.${i + 1}`}
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    border: "1px solid #E8F5EE",
                    borderTop: "4px solid #1A7A4C",
                    boxShadow: "0 4px 24px rgba(26,122,76,0.1)",
                    overflow: "hidden",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 16px 40px rgba(26,122,76,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 4px 24px rgba(26,122,76,0.1)";
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "240px",
                      overflow: "hidden",
                      background: "linear-gradient(135deg, #E8F5EE, #1A7A4C33)",
                    }}
                  >
                    <img
                      src="/assets/generated/himalaya-hero.dim_1600x900.jpg"
                      alt={`${trek.name} in Himachal Pradesh`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s",
                      }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(20,92,56,0.65) 0%, transparent 55%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "16px",
                        right: "16px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "22px",
                            fontWeight: 700,
                            color: "#fff",
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {trek.name}
                        </h3>
                        <span
                          style={{
                            background: "rgba(20,92,56,0.9)",
                            color: "#fff",
                            borderRadius: "8px",
                            padding: "4px 10px",
                            fontFamily: "var(--font-body)",
                            fontWeight: 700,
                            fontSize: "13px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          ₹{trek.priceFrom.toLocaleString("en-IN")}+
                        </span>
                      </div>
                    </div>
                    {trek.isTrending && (
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          background: "#F4A623",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: "50px",
                        }}
                      >
                        🔥 Trending
                      </div>
                    )}
                  </div>
                  <div style={{ padding: "22px 24px 24px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "#4A4A4A",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                      }}
                    >
                      {trek.shortDescription}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "20px",
                      }}
                    >
                      {[
                        { icon: "⏱", val: trek.durationLabel },
                        {
                          icon: "📍",
                          val: `${trek.maxAltitudeM.toLocaleString()}m`,
                        },
                        {
                          icon: "🗓",
                          val:
                            trek.bestSeason.split(";")?.[0] ?? trek.bestSeason,
                        },
                      ].map((s) => (
                        <span
                          key={s.icon}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            background: "#F8FAF9",
                            border: "1px solid #E8F5EE",
                            borderRadius: "50px",
                            padding: "4px 12px",
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            color: "#1A1A1A",
                            fontWeight: 600,
                          }}
                        >
                          {s.icon} {s.val}
                        </span>
                      ))}
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          background: diffStyle.bg,
                          borderRadius: "50px",
                          padding: "4px 12px",
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          color: diffStyle.text,
                          fontWeight: 700,
                        }}
                      >
                        {trek.difficulty}
                      </span>
                    </div>
                    {/* Key highlights — show first 3 */}
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {trek.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            color: "#4A4A4A",
                            lineHeight: 1.4,
                          }}
                        >
                          <span
                            style={{
                              color: "#1A7A4C",
                              fontWeight: 700,
                              flexShrink: 0,
                              marginTop: "1px",
                            }}
                          >
                            ✓
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Link
                        to={`/treks/himachal-pradesh/${trek.slug}` as string}
                        data-ocid={`hp_hub.featured_link.${i + 1}`}
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                          border: "1.5px solid #1A7A4C",
                          borderRadius: "8px",
                          color: "#1A7A4C",
                          fontFamily: "var(--font-body)",
                          fontWeight: 600,
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        Full Details
                      </Link>
                      <Link
                        to={`/treks/himachal-pradesh/${trek.slug}` as string}
                        data-ocid={`hp_hub.featured_book.${i + 1}`}
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "10px",
                          background: "#F4A623",
                          borderRadius: "8px",
                          color: "#fff",
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Parvati Valley callout */}
          <div
            style={{
              background: "linear-gradient(to right, #E8F5EE, #F8FAF9)",
              border: "1px solid #D1E7D9",
              borderLeft: "4px solid #1A7A4C",
              borderRadius: "12px",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "36px" }}>🪷</span>
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  margin: "0 0 4px",
                }}
              >
                Parvati Valley — India's Most Mystical Trekking Corridor
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#4A4A4A",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                From Kasol's cafes to Kheerganga's hot springs, Sar Pass, and
                beyond — the Parvati Valley offers an unmatched blend of natural
                beauty, cultural depth, and trekking adventure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All HP Treks Grid */}
      <div
        id="all-treks"
        style={{ background: "#F8FAF9", padding: "64px 24px 80px" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            label="Complete Collection"
            title="All 5 Himachal Pradesh Treks"
            subtitle="Every route — from easy Triund to dramatic Hampta Pass — curated for maximum adventure."
          />
          <div
            data-ocid="hp_hub.treks_list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {gridTreks.map((trek, i) => (
              <TrekCard key={trek.slug} trek={trek} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* About HP Trekking */}
      <div style={{ background: "#fff", padding: "64px 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            label="Why Himachal Pradesh"
            title="Trekking in Himachal Pradesh"
            subtitle="From Manali to Dharamshala to Kasol — Himachal's valleys offer diverse, dramatic, and deeply personal Himalayan experiences."
            centered
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            {infoCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#F8FAF9",
                  border: "1px solid #E8F5EE",
                  borderTop: "3px solid #1A7A4C",
                  borderRadius: "12px",
                  padding: "24px 20px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#4A4A4A",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div
            style={{
              background: "linear-gradient(135deg, #145C38, #1A7A4C)",
              borderRadius: "20px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              Start Your Himachal Adventure Today
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "28px",
                maxWidth: "460px",
                margin: "0 auto 28px",
              }}
            >
              Expert local guides, fully managed camping, and unforgettable
              mountain crossovers.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/treks"
                data-ocid="hp_hub.cta_treks_button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "13px 32px",
                  background: "#fff",
                  color: "#1A7A4C",
                  borderRadius: "10px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                All Treks
              </a>
              <a
                href="/contact"
                data-ocid="hp_hub.cta_contact_button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "13px 32px",
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  borderRadius: "10px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                Get Expert Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
