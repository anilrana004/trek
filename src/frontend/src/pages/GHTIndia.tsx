import { useEffect, useState } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const routeStops = [
  { name: "Kashmir", desc: "High alpine meadows" },
  { name: "Kishtwar", desc: "Remote gorges" },
  { name: "Zanskar", desc: "Frozen river valleys" },
  { name: "Ladakh", desc: "High desert passes" },
  { name: "Spiti", desc: "Tibetan plateau" },
  { name: "Kinnaur", desc: "Orchards & peaks" },
  { name: "Garhwal", desc: "Sacred summits" },
  { name: "Kumaon", desc: "Flower valleys" },
  { name: "Sikkim", desc: "Eastern Himalaya" },
];

const ghtSections = [
  {
    name: "GHT - Kashmir Section",
    days: 28,
    altitude: 4800,
    priceINR: "Rs.3,99,000",
    priceUSD: "$5,490",
    slug: "ght-kashmir",
  },
  {
    name: "GHT - Himachal Section",
    days: 26,
    altitude: 5750,
    priceINR: "On Request",
    priceUSD: null,
    slug: "ght-himachal",
  },
  {
    name: "GHT - Kumaon Section",
    days: 28,
    altitude: 4850,
    priceINR: "Rs.3,99,000",
    priceUSD: "$5,590",
    slug: "ght-kumaon",
  },
  {
    name: "GHT - Sikkim Section",
    days: 25,
    altitude: 4950,
    priceINR: "Rs.3,49,000",
    priceUSD: "$4,990",
    slug: "ght-sikkim",
  },
];

const whyCards = [
  {
    icon: "Map",
    title: "Unprecedented Route",
    desc: "177 days traversing 9 distinct Himalayan regions. No other trail covers the breadth of the Indian Himalaya in a single journey.",
  },
  {
    icon: "Mountain",
    title: "Expert-Led Sections",
    desc: "Each section is guided by Global Trek's most experienced mountain leaders with deep regional knowledge.",
  },
  {
    icon: "Leaf",
    title: "Join Any Section",
    desc: "You don't have to do all 177 days. Join one section that matches your schedule, fitness, and adventure appetite.",
  },
];

function WhyCard({ title, desc }: { title: string; desc: string }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll"
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "36px 28px",
        textAlign: "center",
        opacity: 0,
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 20l7-12 4 6 2-3 5 9H3z" />
        </svg>
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
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function GHTSectionCard({
  s,
  index,
}: { s: (typeof ghtSections)[0]; index: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll"
      data-ocid={`ght.section.item.${index + 1}`}
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "32px",
        opacity: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        transition: "border-color 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-blue)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
      }}
    >
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 12px",
          }}
        >
          {s.name}
        </h3>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--accent-blue)",
              }}
            >
              {s.days}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--text-muted)",
                marginLeft: "4px",
              }}
            >
              DAYS
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--text-secondary)",
              }}
            >
              {s.altitude.toLocaleString()}m
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--text-muted)",
                marginLeft: "4px",
              }}
            >
              MAX ALT
            </span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        {s.priceINR === "On Request" ? (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--accent-gold)",
              fontStyle: "italic",
            }}
          >
            On Request
          </span>
        ) : (
          <>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {s.priceINR}
            </div>
            {s.priceUSD && (
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--text-muted)",
                }}
              >
                / {s.priceUSD}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "13px",
  fontWeight: 500,
  color: "var(--text-secondary)",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-elevated)",
  border: "1px solid var(--border-default)",
  color: "var(--text-primary)",
  borderRadius: "var(--radius-md)",
  height: "48px",
  padding: "0 16px",
  fontFamily: "var(--font-body)",
  fontSize: "15px",
  boxSizing: "border-box" as const,
  outline: "none",
};

function StatBar() {
  const ref = useScrollAnimation();
  const stats = [
    { value: "177", unit: "Days", label: "Total Duration" },
    { value: "9", unit: "Regions", label: "Crossed" },
    { value: "~4,000", unit: "km", label: "Distance" },
    { value: "2023", unit: "", label: "First Commercial Run" },
  ];
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll"
      style={{
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "32px 48px",
        opacity: 0,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "var(--accent-blue)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              {s.unit && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "18px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {s.unit}
                </span>
              )}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                marginTop: "6px",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GHTIndia() {
  useEffect(() => {
    document.title = "GHT India - Great Himalayan Traverse | Global Trek";
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    section: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setSubmitting(false);
  };

  const heroRef = useScrollAnimation();

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "640px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "80px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Great Himalayan Traverse"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
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
            opacity: 0,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "var(--accent-gold-dim)",
              border: "1px solid var(--accent-gold)",
              color: "var(--accent-gold)",
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
            NEW - FIRST COMMERCIALLY GUIDED
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(36px, 6vw, 72px)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              margin: "0 0 16px",
              maxWidth: "900px",
            }}
          >
            The Great Himalayan Traverse - India
          </h1>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(20px, 3vw, 30px)",
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            177 Days. 9 Regions. One Lifetime.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <StatBar />

      {/* Route Timeline */}
      <section style={{ background: "var(--bg-void)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="THE ROUTE"
            heading="West to East Across India"
            subtext="Traversing the entire Indian Himalaya in one epic journey."
            align="center"
          />
          <div style={{ position: "relative", paddingTop: "24px" }}>
            <div
              style={{
                position: "absolute",
                top: "36px",
                left: "calc(100% / 18)",
                right: "calc(100% / 18)",
                height: "2px",
                background:
                  "linear-gradient(to right, var(--accent-blue), var(--accent-gold))",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(9, 1fr)",
                gap: "8px",
                position: "relative",
              }}
            >
              {routeStops.map((stop, i) => (
                <div
                  key={stop.name}
                  style={{ textAlign: "center", position: "relative" }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background:
                        i === 0
                          ? "var(--accent-blue)"
                          : i === 8
                            ? "var(--accent-gold)"
                            : "var(--bg-elevated)",
                      border: `2px solid ${i === 0 ? "var(--accent-blue)" : i === 8 ? "var(--accent-gold)" : "var(--border-strong)"}`,
                      margin: "0 auto 20px",
                      zIndex: 2,
                      position: "relative",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {stop.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {stop.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why GHT */}
      <section
        style={{ background: "var(--bg-surface)", padding: "80px 48px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="WHY GHT INDIA"
            heading="A Trail Like No Other"
            align="center"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {whyCards.map((card) => (
              <WhyCard key={card.title} title={card.title} desc={card.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* GHT Section Cards */}
      <section
        style={{ background: "var(--bg-primary)", padding: "80px 48px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="JOIN A SECTION"
            heading="Sections You Can Trek"
            subtext="Each section is a complete, standalone adventure. Join one or chain them together."
            align="center"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {ghtSections.map((s, i) => (
              <GHTSectionCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 2023 Story */}
      <section
        style={{ background: "var(--bg-surface)", padding: "80px 48px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--accent-gold)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                FIRST COMMERCIAL RUN - 2023
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                }}
              >
                Making History in 2023
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                  margin: "0 0 16px",
                }}
              >
                In 2023, Global Trek became the first operator to run a
                commercial traverse of the entire Indian Himalaya under the GHT
                India banner. Spanning 177 days and 9 distinct Himalayan regions
                from Kashmir in the west to Sikkim in the east, it stands as one
                of the world's most ambitious trekking achievements.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                The traverse crossed high passes, remote valleys, and ancient
                trading routes that few modern trekkers have ever seen. Now you
                can join us for individual sections of this landmark journey.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                alt="GHT 2023 traverse"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,10,12,0.7) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--accent-gold)",
                  letterSpacing: "0.08em",
                }}
              >
                177 DAYS - 9 REGIONS - 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section style={{ background: "var(--bg-void)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="INTERESTED?"
            heading="Register Your Interest"
            subtext="Tell us which section calls to you. We'll get back within 48 hours."
            align="center"
          />
          {submitted ? (
            <div
              data-ocid="ght.form.success_state"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--success)",
                borderRadius: "var(--radius-xl)",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏔️</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  margin: "0 0 12px",
                }}
              >
                Interest Registered!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                Thank you. Our GHT team will reach out within 48 hours to
                discuss your journey.
              </p>
            </div>
          ) : (
            <form
              data-ocid="ght.interest_form"
              onSubmit={handleSubmit}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <label htmlFor="ght-name" style={labelStyle}>
                    Full Name *
                  </label>
                  <input
                    id="ght-name"
                    data-ocid="ght.name_input"
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="ght-email" style={labelStyle}>
                    Email Address *
                  </label>
                  <input
                    id="ght-email"
                    data-ocid="ght.email_input"
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    style={inputStyle}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="ght-phone" style={labelStyle}>
                  Phone Number
                </label>
                <input
                  id="ght-phone"
                  data-ocid="ght.phone_input"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="ght-section" style={labelStyle}>
                  Which Section Interests You? *
                </label>
                <select
                  id="ght-section"
                  data-ocid="ght.section_select"
                  required
                  value={form.section}
                  onChange={(e) =>
                    setForm({ ...form, section: e.target.value })
                  }
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Select a section</option>
                  <option value="kashmir">
                    GHT - Kashmir Section (28 days)
                  </option>
                  <option value="himachal">
                    GHT - Himachal Section (26 days)
                  </option>
                  <option value="kumaon">GHT - Kumaon Section (28 days)</option>
                  <option value="sikkim">GHT - Sikkim Section (25 days)</option>
                  <option value="full">Full Traverse (177 days)</option>
                </select>
              </div>
              <div>
                <label htmlFor="ght-message" style={labelStyle}>
                  Message
                </label>
                <textarea
                  id="ght-message"
                  data-ocid="ght.message_textarea"
                  placeholder="Tell us about your experience level and what excites you about the GHT..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  style={{
                    ...inputStyle,
                    height: "auto",
                    padding: "12px 16px",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                data-ocid="ght.form.submit_button"
                disabled={submitting}
                style={{
                  height: "52px",
                  background: submitting
                    ? "var(--border-default)"
                    : "var(--accent-blue)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  color: "var(--text-inverse)",
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "background 150ms ease",
                }}
              >
                {submitting ? "Submitting..." : "Submit Interest"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
