import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

interface PackageInfo {
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  featuredTreks: string[];
  priceFrom: string;
  priceUnit: string;
  inclusions: string[];
  badge?: string;
  badgeColor?: string;
}

const packages: PackageInfo[] = [
  {
    slug: "corporate",
    icon: "\u{1F4BC}",
    title: "Corporate Trekking",
    subtitle: "Team Building Expeditions",
    targetAudience: "Companies, Startups & Teams",
    featuredTreks: ["Nag Tibba", "Triund", "Har Ki Dun"],
    priceFrom: "\u20B98,000",
    priceUnit: "per person",
    inclusions: [
      "Dedicated group liaison",
      "Team-building activities",
      "Gourmet camp meals",
      "Photography & videography",
      "Custom branded certificates",
      "Corporate invoice & GST bill",
    ],
    badge: "Most Popular",
    badgeColor: "#f4a623",
  },
  {
    slug: "school-college",
    icon: "\u{1F393}",
    title: "School & College",
    subtitle: "Educational Adventure Programs",
    targetAudience: "Students, NCC/NSS Groups",
    featuredTreks: ["Nag Tibba", "Chopta Tungnath", "Dayara Bugyal"],
    priceFrom: "\u20B95,000",
    priceUnit: "per student",
    inclusions: [
      "Trained instructors & guides",
      "Nature education sessions",
      "Survival skill workshops",
      "First aid & safety cover",
      "Parent coordination portal",
      "CBSE/ICSE compliance docs",
    ],
  },
  {
    slug: "family",
    icon: "\u{1F46A}",
    title: "Family Packages",
    subtitle: "Child-Friendly Mountain Escapes",
    targetAudience: "Families with Children",
    featuredTreks: ["Nag Tibba", "Chopta Tungnath", "Triund"],
    priceFrom: "\u20B96,000",
    priceUnit: "per person",
    inclusions: [
      "Family-suited easy trails",
      "Dedicated family guide",
      "Kids special menus",
      "Medical & first aid support",
      "Family photography package",
      "Comfortable accommodations",
    ],
    badge: "Kid Friendly",
    badgeColor: "#1a7a4c",
  },
  {
    slug: "honeymoon",
    icon: "\u{1F491}",
    title: "Honeymoon Packages",
    subtitle: "Romantic Himalayan Escapes",
    targetAudience: "Couples & Newlyweds",
    featuredTreks: ["Chopta Tungnath", "Har Ki Dun", "Beas Kund"],
    priceFrom: "\u20B912,000",
    priceUnit: "per couple",
    inclusions: [
      "Private tent with floral decor",
      "Candlelight bonfire dinner",
      "Sunrise photography session",
      "Couple spa & massage",
      "Personalized itinerary",
      "Premium camp bedding",
    ],
    badge: "Premium",
    badgeColor: "#e74c3c",
  },
  {
    slug: "solo",
    icon: "\u{1F9D7}",
    title: "Solo Trekker",
    subtitle: "Join Group Batches & Connect",
    targetAudience: "Solo Adventurers & Backpackers",
    featuredTreks: ["Kedarkantha", "Phulara Ridge", "Sar Pass"],
    priceFrom: "\u20B93,500",
    priceUnit: "per person",
    inclusions: [
      "Join-a-batch flexibility",
      "Safety tracking app access",
      "Single supplement options",
      "Social trekker community",
      "Budget-friendly group rates",
      "Networking events at base",
    ],
  },
];

export function PackagesPage() {
  return (
    <div
      style={{
        paddingTop: "var(--nav-height, 72px)",
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--green-dark, #145c38) 0%, var(--green-primary, #1a7a4c) 100%)",
          padding: "80px 24px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div
          style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "999px",
                padding: "6px 20px",
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Curated Travel Packages
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Tailored Travel Packages
              <br />
              for Every Group
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.85)",
                maxWidth: "560px",
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              From corporate team-building to romantic mountain escapes, we
              craft the perfect Himalayan experience for your group.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                "500+ Groups Served",
                "Customizable Itineraries",
                "Dedicated Trip Manager",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "999px",
                    padding: "8px 18px",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Cards */}
      <section
        style={{ padding: "80px 24px", maxWidth: "1280px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--text-primary, #1a1a1a)",
              marginBottom: "12px",
            }}
          >
            Choose Your Package
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary, #4a4a4a)",
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Every package is fully customizable to your group size, dates, and
            preferences.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "32px",
          }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              data-ocid={`package.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(26, 122, 76, 0.12)",
                border: "1px solid #e8f5ee",
                borderTop: "4px solid var(--green-primary, #1a7a4c)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: "28px 28px 20px",
                  borderBottom: "1px solid #e8f5ee",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <span style={{ fontSize: "2rem", lineHeight: 1 }}>
                      {pkg.icon}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.35rem",
                          color: "var(--text-primary, #1a1a1a)",
                          fontWeight: 700,
                          marginBottom: "2px",
                        }}
                      >
                        {pkg.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.85rem",
                          color: "var(--green-primary, #1a7a4c)",
                          fontWeight: 600,
                        }}
                      >
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>
                  {pkg.badge && (
                    <span
                      style={{
                        background: pkg.badgeColor,
                        color: "#fff",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--text-muted, #6b7280)",
                  }}
                >
                  For: {pkg.targetAudience}
                </p>
              </div>
              <div style={{ padding: "20px 28px", flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted, #6b7280)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  What's Included
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                  }}
                >
                  {pkg.inclusions.map((inc) => (
                    <li
                      key={inc}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "var(--text-secondary, #4a4a4a)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--green-primary, #1a7a4c)",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "0 28px 20px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted, #6b7280)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Featured Treks
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {pkg.featuredTreks.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "#e8f5ee",
                        color: "var(--green-dark, #145c38)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  padding: "20px 28px",
                  borderTop: "1px solid #e8f5ee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#f8faf9",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted, #6b7280)",
                      letterSpacing: "0.05em",
                      marginBottom: "2px",
                    }}
                  >
                    Starting from
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "var(--green-primary, #1a7a4c)",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {pkg.priceFrom}{" "}
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-body)",
                        color: "var(--text-muted, #6b7280)",
                        fontWeight: 400,
                      }}
                    >
                      {pkg.priceUnit}
                    </span>
                  </p>
                </div>
                <Link
                  to={
                    `/packages/${pkg.slug}` as Parameters<typeof Link>[0]["to"]
                  }
                  data-ocid={`package.cta.${i + 1}`}
                  style={{
                    background: "var(--green-primary, #1a7a4c)",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "10px 22px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ background: "#e8f5ee", padding: "80px 24px" }}>
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "var(--text-primary, #1a1a1a)",
              marginBottom: "12px",
            }}
          >
            Why Plan with Global Trek?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary, #4a4a4a)",
              maxWidth: "500px",
              margin: "0 auto 48px",
            }}
          >
            15 years of group travel experience across the Himalayas.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "🏆",
                title: "15 Years Experience",
                desc: "Trusted by 500+ corporate clients and universities",
              },
              {
                icon: "🛡️",
                title: "Certified Safety",
                desc: "All guides are Wilderness First Responder certified",
              },
              {
                icon: "📋",
                title: "Custom Itineraries",
                desc: "Built around your group goals and fitness levels",
              },
              {
                icon: "💬",
                title: "Dedicated Support",
                desc: "Your own trip manager from planning to return",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "28px 20px",
                  boxShadow: "0 2px 12px rgba(26,122,76,0.08)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {item.icon}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary, #1a1a1a)",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary, #4a4a4a)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--text-primary, #1a1a1a)",
              marginBottom: "16px",
            }}
          >
            Not Sure Which Package Fits?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary, #4a4a4a)",
              marginBottom: "32px",
              lineHeight: 1.7,
            }}
          >
            Let our travel experts create a custom package tailored exactly to
            your group. Free consultation, no commitment.
          </p>
          <a
            href="/contact"
            data-ocid="packages.custom_inquiry_button"
            style={{
              display: "inline-block",
              background: "var(--amber, #f4a623)",
              color: "#fff",
              borderRadius: "8px",
              padding: "16px 36px",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(244,166,35,0.3)",
            }}
          >
            Request Custom Package →
          </a>
        </div>
      </section>
    </div>
  );
}
