import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TripCard } from "../components/ui/TripCard";
import { beginnerTrips } from "../data/trips";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    icon: "Tent",
    title: "Modern Comforts in Wild Places",
    desc: "Spacious tents, comfortable sleeping gear, and hot food in the heart of the Himalaya. You don't have to rough it to experience the mountains.",
  },
  {
    icon: "Food",
    title: "Excellent Camp Food",
    desc: "Our legendary garlic soup, freshly cooked breakfast, packed lunches, and warm dinners. Vegetarian and non-vegetarian options, always.",
  },
  {
    icon: "Guide",
    title: "Expert Guides, Small Groups",
    desc: "Every WM Lite trip is led by an experienced White Magic guide. Groups are capped at 12 for a personal, safe, and social experience.",
  },
];

const featureIcons = [
  <svg
    key="tent"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--accent-blue)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Tent accommodation"
  >
    <path d="M3 18 L12 4 L21 18 H3Z" />
    <path d="M9 18 L12 12 L15 18" />
  </svg>,
  <svg
    key="food"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--accent-blue)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Camp food"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 6v6l4 2" />
  </svg>,
  <svg
    key="guide"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--accent-blue)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Expert guide"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>,
];

const comparisonRows = [
  {
    feature: "Difficulty",
    lite: "Beginner",
    standard: "Moderate - Challenging",
    expedition: "Technical",
  },
  {
    feature: "Duration",
    lite: "6-10 Days",
    standard: "8-20 Days",
    expedition: "15-30+ Days",
  },
  {
    feature: "Max Altitude",
    lite: "Up to 4,000m",
    standard: "Up to 5,500m",
    expedition: "6,000m+",
  },
  {
    feature: "Prior Experience",
    lite: "None needed",
    standard: "Some fitness",
    expedition: "Required",
  },
  {
    feature: "Price Range",
    lite: "Rs.55K - Rs.90K",
    standard: "Rs.75K - Rs.2L",
    expedition: "Rs.1.5L - Rs.5L",
  },
];

function FeatureCard({
  title,
  desc,
  icon,
}: { title: string; desc: string; icon: React.ReactNode }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll"
      style={{
        textAlign: "center",
        padding: "40px 28px",
        background: "var(--bg-elevated)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-subtle)",
        opacity: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "22px",
          fontWeight: 600,
          color: "var(--text-primary)",
          margin: "0 0 12px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function WMLite() {
  useEffect(() => {
    document.title =
      "WM Lite - Adventures for Beginners | White Magic Adventure Travel";
  }, []);

  const heroRef = useScrollAnimation();

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "80vh",
          minHeight: "560px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "80px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&q=80"
          alt="Beginner trekking in the Himalaya"
          style={{
            position: "absolute",
            inset: 0,
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
            background: "var(--gradient-hero)",
          }}
        />
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className="animate-on-scroll"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: "800px",
            opacity: 0,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(74, 222, 128, 0.15)",
              border: "1px solid var(--diff-1)",
              color: "var(--diff-1)",
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              padding: "4px 14px",
              borderRadius: "var(--radius-full)",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            PERFECT FOR FIRST-TIMERS
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(36px, 6vw, 70px)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            WM Lite - Adventure Made Accessible
          </h1>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              color: "var(--text-secondary)",
              margin: "0 0 28px",
            }}
          >
            The Himalaya for First-Timers. No extreme difficulty. Just pure
            mountain magic.
          </p>
          <Link
            to="/trips"
            data-ocid="wmlite.hero.cta_button"
            style={{
              display: "inline-block",
              height: "52px",
              lineHeight: "52px",
              padding: "0 36px",
              background: "var(--accent-blue)",
              borderRadius: "var(--radius-md)",
              color: "var(--text-inverse)",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "background 150ms ease, transform 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-blue-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent-blue)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore WM Lite Trips
          </Link>
        </div>
      </div>

      {/* 3-Feature Row */}
      <section
        style={{ background: "var(--bg-surface)", padding: "72px 48px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {features.map((f, i) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                desc={f.desc}
                icon={featureIcons[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        style={{ background: "var(--bg-primary)", padding: "80px 48px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="HOW WE COMPARE"
            heading="WM Lite vs The Rest"
            subtext="Find the adventure level that's right for you."
            align="center"
          />
          <div
            style={{
              overflowX: "auto",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr style={{ background: "var(--bg-surface)" }}>
                  {["Feature", "WM Lite", "Standard Treks", "Expeditions"].map(
                    (h, i) => (
                      <th
                        key={h}
                        style={{
                          padding: "16px 20px",
                          textAlign: i === 0 ? "left" : "center",
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          fontWeight: 700,
                          color:
                            i === 1
                              ? "var(--accent-blue)"
                              : "var(--text-muted)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          borderBottom: "1px solid var(--border-subtle)",
                        }}
                      >
                        {h}
                        {i === 1 ? " ✓" : ""}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    style={{
                      background:
                        idx % 2 === 0
                          ? "var(--bg-elevated)"
                          : "var(--bg-surface)",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 20px",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "var(--text-primary)",
                        textAlign: "center",
                        fontWeight: 600,
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      {row.lite}
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        textAlign: "center",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      {row.standard}
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        textAlign: "center",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      {row.expedition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Beginner Trips Grid */}
      <section style={{ background: "var(--bg-void)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="WM LITE TRIPS"
            heading="Your First Adventure Awaits"
            subtext="Handpicked beginner-friendly trips with everything handled for you."
            align="center"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {beginnerTrips.map((trip, i) => (
              <TripCard key={trip.id} trip={trip} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section
        style={{ background: "var(--bg-surface)", padding: "80px 48px" }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <SectionHeading
            eyebrow="FIRST-TIMER STORY"
            heading="From Someone Who Was You"
            align="center"
          />
          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-xl)",
              padding: "40px",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "64px",
                fontFamily: "Georgia, serif",
                color: "var(--accent-blue)",
                lineHeight: 0.6,
                marginBottom: "24px",
                opacity: 0.5,
                textAlign: "left",
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "var(--text-primary)",
                lineHeight: 1.8,
                fontStyle: "italic",
                margin: "0 0 28px",
              }}
            >
              This was my first time trekking, and I was blown away by White
              Magic's flawless logistics. Everything was extremely smooth and
              impeccable, ranging from the delicious food, to the male/female
              toilet tents, to the guidance during the trip (they set the right
              pace, picked good times to rest). Can't recommend White Magic
              more!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "var(--accent-blue-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "20px",
                  color: "var(--accent-blue)",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                F
              </div>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Fiona Liao
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--accent-blue)",
                    background: "var(--accent-blue-dim)",
                    display: "inline-block",
                    padding: "2px 10px",
                    borderRadius: "var(--radius-full)",
                    marginTop: "2px",
                  }}
                >
                  Markha Valley Trek
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--bg-void)",
          padding: "80px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Ready for Your First Adventure?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--text-secondary)",
              margin: "0 0 32px",
            }}
          >
            No experience needed. Just the desire to see something
            extraordinary.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/trips"
              data-ocid="wmlite.cta.browse_button"
              style={{
                display: "inline-block",
                height: "52px",
                lineHeight: "52px",
                padding: "0 36px",
                background: "var(--accent-blue)",
                borderRadius: "var(--radius-md)",
                color: "var(--text-inverse)",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 150ms ease",
              }}
            >
              Browse All Trips
            </Link>
            <Link
              to="/contact"
              data-ocid="wmlite.cta.contact_link"
              style={{
                display: "inline-block",
                height: "52px",
                lineHeight: "52px",
                padding: "0 36px",
                background: "transparent",
                border: "1px solid var(--accent-blue)",
                borderRadius: "var(--radius-md)",
                color: "var(--accent-blue)",
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 150ms ease",
              }}
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
