import { Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { YatraCard } from "../components/YatraCard";
import { FloatingParallaxHero } from "../components/trek/FloatingParallaxHero";
import { getYatraBySlug, yatras } from "../data/yatras";

const HERO_IMAGES: Record<string, string> = {
  kedarnath:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&auto=format&fit=crop",
  "do-dham":
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600&auto=format&fit=crop",
  "char-dham":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop",
  "panch-kedar":
    "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=1600&auto=format&fit=crop",
};

const TABS = [
  "Overview",
  "Itinerary",
  "Inclusions",
  "Package Options",
  "Reviews",
  "FAQ",
] as const;
type Tab = (typeof TABS)[number];

const packages = [
  {
    tier: "Budget",
    badge: "🌿",
    tagline: "Complete yatra, comfortable journey",
    features: [
      "Shared guest house / dharamshala",
      "AC Tempo Traveller",
      "Vegetarian meals (breakfast + dinner)",
      "Local guide & pujari coordination",
      "Registration assistance",
    ],
    excludes: ["Helicopter", "Luxury hotel", "Personal puja"],
    multiplier: 1,
  },
  {
    tier: "Standard",
    badge: "⭐",
    tagline: "Our most popular package",
    popular: true,
    features: [
      "3-star hotel accommodation",
      "AC Innova / Ertiga transport",
      "All meals included",
      "Dedicated guide throughout",
      "Priority darshan assistance",
      "Travel insurance included",
      "Registration + permits handled",
    ],
    excludes: ["Helicopter", "Premium puja packages"],
    multiplier: 1.6,
  },
  {
    tier: "Premium",
    badge: "🏆",
    tagline: "The ultimate sacred experience",
    features: [
      "Luxury resort / heritage hotel",
      "Private SUV with driver",
      "Helicopter for Kedarnath (where applicable)",
      "Gourmet sattvic meals",
      "Private Rudrabhishek puja",
      "Dedicated priest coordination",
      "Personal assistant throughout",
      "Photography package",
      "Certificate of completion",
    ],
    excludes: [],
    multiplier: 2.8,
  },
];

const inclusions = [
  "All accommodation (per package tier)",
  "Private/shared AC vehicle throughout",
  "All meals (breakfast, lunch, dinner — vegetarian)",
  "Experienced local guide + support staff",
  "Biometric registration at all shrines",
  "Pony/doli booking assistance (on request)",
  "First aid kit and emergency support",
  "Welcome kit with yatra map and diary",
  "Basic travel insurance",
];

const exclusions = [
  "Helicopter charges (unless Premium package)",
  "Personal shopping and souvenirs",
  "Pony/doli charges (if availed)",
  "Puja offerings and prasad",
  "Porterage charges",
  "Expenses during flight/train to base city",
  "Any item not listed in inclusions",
];

const reviews = [
  {
    name: "Ramesh Gupta",
    city: "Jaipur, Rajasthan",
    rating: 5,
    date: "October 2025",
    text: "Global Trek made our Kedarnath yatra absolutely divine. They handled everything — registration, pony booking, accommodation at altitude. The guide's deep knowledge of the mythology added a completely new dimension to the pilgrimage. We will definitely do the Char Dham with them next year.",
    initials: "RG",
    color: "#1A7A4C",
  },
  {
    name: "Sunita Sharma",
    city: "Mumbai, Maharashtra",
    rating: 5,
    date: "September 2025",
    text: "I'm a senior citizen and was worried about the 16km Kedarnath trek. Global Trek arranged a doli for me without any extra hassle. The team was incredibly caring and patient. Attending the 4 AM Mangal Aarti at Kedarnath is a life-changing experience — I wept with joy.",
    initials: "SS",
    color: "#C8960C",
  },
  {
    name: "Arvind Nair",
    city: "Bangalore, Karnataka",
    rating: 5,
    date: "June 2025",
    text: "Did the Do Dham Yatra with my family. The Standard package was excellent value. Both Kedarnath and Badrinath darshans were profound. The Mana Village visit was a bonus. Global Trek's coordination is impeccable — no wasted time, no surprises.",
    initials: "AN",
    color: "#145C38",
  },
];

const faqs: Record<string, { q: string; a: string }[]> = {
  kedarnath: [
    {
      q: "When does Kedarnath temple open in 2026?",
      a: "The Kedarnath temple is expected to open around Vaishakh Panchami in early May 2026. The exact date is announced by the temple committee based on auspicious muhurta. The temple closes on Bhai Dooj (November 2026).",
    },
    {
      q: "Can I do Kedarnath without trekking?",
      a: "Yes. Ponies (ghoda), dolis (palki), and helicopter services are available. Helicopters operate from Phata, Sersi, Sitapur, and Agastmuni. Pre-booking is essential, especially for peak season.",
    },
    {
      q: "What is Mangal Aarti and how to attend?",
      a: "The Mangal Aarti begins at 4 AM at Kedarnath. It is the first and most powerful prayer of the day — inside the Garbha Griha (sanctum). Access is limited. We pre-coordinate VIP darshan passes for our group pilgrims.",
    },
  ],
  "do-dham": [
    {
      q: "What is the Do Dham Yatra route?",
      a: "Haridwar → Guptkashi → Gaurikund → Kedarnath (trek 16km) → Return to Rudraprayag → Drive to Joshimath → Badrinath → Return Haridwar.",
    },
    {
      q: "Can I do Kedarnath by helicopter and Badrinath by road?",
      a: "Yes, this is the most popular combination — saves time and energy. Helicopter from Phata/Sersi to Kedarnath, then road drive to Badrinath via Joshimath.",
    },
  ],
  "char-dham": [
    {
      q: "What is the ideal duration for Char Dham Yatra?",
      a: "We recommend 10–12 days for a comfortable pace. Rushing through Char Dham increases exhaustion and reduces the spiritual depth of the experience.",
    },
    {
      q: "Is registration mandatory for all four dhams?",
      a: "Yes. Biometric registration is mandatory for Kedarnath, Badrinath, Yamunotri, and Gangotri. Registration opens online months before the season. We handle all registration for group pilgrims.",
    },
  ],
  "panch-kedar": [
    {
      q: "What is the order of Panch Kedar pilgrimage?",
      a: "Traditional order: Kedarnath → Tungnath → Rudranath → Madhyamaheshwar → Kalpeshwar. However, routes can be customized based on your starting point and dates.",
    },
    {
      q: "Is Panch Kedar suitable for beginners?",
      a: "Kedarnath and Tungnath are accessible to most pilgrims. Rudranath and Madhyamaheshwar involve serious trekking (12–24km). Kalpeshwar is a short 2km walk. A reasonable fitness level is required for the full circuit.",
    },
  ],
};

const defaultFaqs = [
  {
    q: "Is registration mandatory?",
    a: "Yes. We handle all biometric registrations for our group packages.",
  },
  {
    q: "What is your cancellation policy?",
    a: "30+ days: 80% refund. 15–29 days: 50% refund. Less than 15 days: no refund. We strongly recommend travel insurance.",
  },
];

export function YatraDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const yatra = getYatraBySlug(slug);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!yatra) {
    return (
      <div
        style={{
          paddingTop: "var(--nav-height, 72px)",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <div style={{ fontSize: "48px" }}>ॐ</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            color: "#1A7A4C",
          }}
        >
          Yatra Not Found
        </h1>
        <Link
          to="/yatra"
          style={{ color: "#1A7A4C", fontFamily: "var(--font-body)" }}
        >
          View All Yatras →
        </Link>
      </div>
    );
  }

  const heroImg = HERO_IMAGES[yatra.slug] ?? HERO_IMAGES.kedarnath;
  const pageFaqs = faqs[yatra.slug] ?? defaultFaqs;

  const yatraHeroImages = [
    heroImg,
    HERO_IMAGES["char-dham"] ?? heroImg,
    HERO_IMAGES["do-dham"] ?? heroImg,
  ];

  const yatraBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Yatra", href: "/yatra" },
    { label: yatra.name, href: `/yatra/${yatra.slug}` },
  ];

  const yatraStats = [
    {
      icon: "📍",
      label: "Altitude",
      value: `${yatra.templeAltitudeM.toLocaleString()}m`,
    },
    { icon: "⏱", label: "Duration", value: yatra.durationLabel },
    { icon: "📅", label: "Season", value: yatra.season.split(",")[0] },
    {
      icon: "💰",
      label: "From",
      value: `₹${yatra.priceFrom.toLocaleString("en-IN")}`,
    },
    {
      icon: "⭐",
      label: "Rating",
      value: `${yatra.rating} (${yatra.reviewCount} reviews)`,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <FloatingParallaxHero
        title={yatra.name}
        subtitle={yatra.subtitle}
        images={yatraHeroImages}
        stats={yatraStats}
        breadcrumbs={yatraBreadcrumbs}
        onDownloadPDF={() => window.print()}
      />

      {/* Main Layout */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "40px",
          alignItems: "start",
        }}
        className="yatra-detail-grid"
      >
        {/* Left Column */}
        <div>
          {/* Tab Navigation */}
          <div
            style={{
              display: "flex",
              gap: "0",
              overflowX: "auto",
              borderBottom: "2px solid #E8F5EE",
              marginTop: "40px",
              marginBottom: "36px",
              scrollbarWidth: "none",
            }}
            role="tablist"
            data-ocid="yatra_detail.tabs"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                data-ocid={`yatra_detail.tab.${tab.toLowerCase().replace(/ /g, "_")}`}
                style={{
                  padding: "14px 20px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: activeTab === tab ? 700 : 500,
                  color: activeTab === tab ? "#C8960C" : "#4A4A4A",
                  background: "none",
                  border: "none",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #C8960C"
                      : "2px solid transparent",
                  marginBottom: "-2px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "Overview" && (
            <div data-ocid="yatra_detail.overview">
              {/* Description */}
              <div style={{ marginBottom: "32px" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "16px",
                  }}
                >
                  About This Yatra
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "#333",
                    lineHeight: 1.8,
                  }}
                >
                  {yatra.description}
                </p>
              </div>

              {/* Spiritual Highlights (Gold accent card) */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #FFF8E1 0%, #FFFCE8 100%)",
                  border: "1px solid rgba(200,150,12,0.3)",
                  borderLeft: "5px solid #C8960C",
                  borderRadius: "12px",
                  padding: "28px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>ॐ</span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#8B6F08",
                      margin: 0,
                    }}
                  >
                    Spiritual Significance
                  </h3>
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {yatra.significance.map((sig) => (
                    <li
                      key={sig}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "#C8960C",
                          fontSize: "14px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ★
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "#5A4010",
                          lineHeight: 1.6,
                        }}
                      >
                        {sig}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div
                style={{
                  background: "#F8FAF9",
                  border: "1px solid #E8F5EE",
                  borderLeft: "5px solid #1A7A4C",
                  borderRadius: "12px",
                  padding: "28px",
                  marginBottom: "28px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "16px",
                  }}
                >
                  Highlights
                </h3>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
                    gap: "10px",
                  }}
                >
                  {yatra.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "#1A7A4C",
                          fontSize: "14px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ✔
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "#333",
                          lineHeight: 1.5,
                        }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Info Table */}
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #E8F5EE",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "#1A7A4C",
                    padding: "14px 20px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    Quick Info
                  </h3>
                </div>
                {[
                  [
                    "Temple Altitude",
                    `${yatra.templeAltitudeM.toLocaleString()}m / ${yatra.templeAltitudeFt.toLocaleString()}ft`,
                  ],
                  ["Duration", yatra.durationLabel],
                  ["Best Season", yatra.season],
                  ["State", yatra.state],
                  [
                    "Price From",
                    `₹${yatra.priceFrom.toLocaleString("en-IN")} per person`,
                  ],
                  [
                    "Registration",
                    yatra.registration ?? "Online registration required",
                  ],
                  ...(yatra.transportOptions
                    ? [
                        [
                          "Transport Options",
                          yatra.transportOptions.join(" | "),
                        ],
                      ]
                    : []),
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "160px 1fr",
                      gap: "16px",
                      padding: "13px 20px",
                      background: i % 2 === 0 ? "#FAFCFB" : "#fff",
                      borderBottom: "1px solid #E8F5EE",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#1A7A4C",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "#333",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Itinerary" && (
            <div data-ocid="yatra_detail.itinerary">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: "24px",
                }}
              >
                Day-by-Day Itinerary
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {yatra.itinerary.map((day, i) => (
                  <div
                    key={day.day}
                    data-ocid={`yatra_detail.itinerary.item.${i + 1}`}
                    style={{
                      background: "#fff",
                      border:
                        openDay === i
                          ? "1px solid #C8960C"
                          : "1px solid #E8F5EE",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow:
                        openDay === i
                          ? "0 4px 20px rgba(200,150,12,0.1)"
                          : "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.2s",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenDay(openDay === i ? null : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "18px 20px",
                        background:
                          openDay === i
                            ? "linear-gradient(135deg, #FFF8E1, #FFFCE8)"
                            : "#FAFCFB",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "background 0.2s",
                      }}
                      aria-expanded={openDay === i}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: openDay === i ? "#C8960C" : "#1A7A4C",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "#fff",
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "13px",
                        }}
                      >
                        D{day.day}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 700,
                            fontSize: "15px",
                            color: openDay === i ? "#8B6F08" : "#1A1A1A",
                          }}
                        >
                          {day.title}
                        </div>
                        {day.altitude && (
                          <div
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "12px",
                              color: "#C8960C",
                              marginTop: "2px",
                            }}
                          >
                            📍 {day.altitude}
                          </div>
                        )}
                      </div>
                      <span
                        style={{
                          color: openDay === i ? "#C8960C" : "#1A7A4C",
                          fontSize: "20px",
                          transition: "transform 0.2s",
                          transform:
                            openDay === i ? "rotate(45deg)" : "rotate(0deg)",
                          fontWeight: 300,
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openDay === i && (
                      <div style={{ padding: "16px 20px 20px 76px" }}>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "#4A4A4A",
                            lineHeight: 1.75,
                            margin: 0,
                          }}
                        >
                          {day.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Inclusions" && (
            <div data-ocid="yatra_detail.inclusions">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: "28px",
                }}
              >
                What's Included
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "28px",
                }}
              >
                <div
                  style={{
                    background: "#F0FBF5",
                    border: "1px solid #A8DFC0",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1A7A4C",
                      marginBottom: "16px",
                    }}
                  >
                    &#10003; Included
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {inclusions.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            color: "#1A7A4C",
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          ✔
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "#333",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    background: "#FFF5F5",
                    border: "1px solid #FFCDD2",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#C62828",
                      marginBottom: "16px",
                    }}
                  >
                    &#10007; Excluded
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {exclusions.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            color: "#C62828",
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          ✘
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "#333",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Package Options" && (
            <div data-ocid="yatra_detail.packages">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                Choose Your Package
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "#666",
                  marginBottom: "32px",
                }}
              >
                All packages include expert guide, registration support, and
                full coordination.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "20px",
                }}
              >
                {packages.map((pkg) => (
                  <div
                    key={pkg.tier}
                    data-ocid={`yatra_detail.package.${pkg.tier.toLowerCase()}`}
                    style={{
                      background: "#fff",
                      borderRadius: "16px",
                      border: pkg.popular
                        ? "2px solid #C8960C"
                        : "1px solid #E8F5EE",
                      padding: "28px 24px",
                      position: "relative",
                      boxShadow: pkg.popular
                        ? "0 8px 32px rgba(200,150,12,0.15)"
                        : "0 4px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    {pkg.popular && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-12px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "#C8960C",
                          color: "#fff",
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "4px 14px",
                          borderRadius: "50px",
                          letterSpacing: "0.06em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        MOST POPULAR
                      </div>
                    )}
                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>
                      {pkg.badge}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        marginBottom: "4px",
                      }}
                    >
                      {pkg.tier}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "#C8960C",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      {pkg.tagline}
                    </p>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#1A7A4C",
                        marginBottom: "20px",
                      }}
                    >
                      From &#8377;
                      {Math.round(
                        yatra.priceFrom * pkg.multiplier,
                      ).toLocaleString("en-IN")}
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "#666",
                          fontWeight: 400,
                        }}
                      >
                        /person
                      </span>
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        margin: "0 0 20px",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "flex-start",
                          }}
                        >
                          <span
                            style={{
                              color: "#1A7A4C",
                              fontWeight: 700,
                              flexShrink: 0,
                              fontSize: "13px",
                            }}
                          >
                            ✔
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "13px",
                              color: "#333",
                              lineHeight: 1.5,
                            }}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/booking/${yatra.slug}`}
                      data-ocid={`yatra_detail.package_book.${pkg.tier.toLowerCase()}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "12px",
                        background: pkg.popular ? "#C8960C" : "#1A7A4C",
                        color: "#fff",
                        borderRadius: "10px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "14px",
                        textDecoration: "none",
                        transition: "background 0.2s",
                      }}
                    >
                      Book {pkg.tier} Package
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div data-ocid="yatra_detail.reviews">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #FFF8E1, #FFFCE8)",
                    border: "1px solid #C8960C",
                    borderRadius: "16px",
                    padding: "20px 28px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "48px",
                      fontWeight: 700,
                      color: "#C8960C",
                      lineHeight: 1,
                    }}
                  >
                    {yatra.rating}
                  </div>
                  <div
                    style={{
                      color: "#C8960C",
                      fontSize: "16px",
                      letterSpacing: "2px",
                      margin: "4px 0",
                    }}
                  >
                    ★★★★★
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "#8B6F08",
                    }}
                  >
                    {yatra.reviewCount} reviews
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      marginBottom: "4px",
                    }}
                  >
                    Pilgrim Testimonials
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    Real experiences from our yatra participants
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {reviews.map((rev, i) => (
                  <div
                    key={rev.name}
                    data-ocid={`yatra_detail.review.item.${i + 1}`}
                    style={{
                      background: "#fff",
                      border: "1px solid #E8F5EE",
                      borderRadius: "14px",
                      padding: "24px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        marginBottom: "14px",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: rev.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "#fff",
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "14px",
                        }}
                      >
                        {rev.initials}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 700,
                            fontSize: "15px",
                            color: "#1A1A1A",
                          }}
                        >
                          {rev.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            color: "#888",
                          }}
                        >
                          {rev.city} • {rev.date}
                        </div>
                      </div>
                      <div style={{ color: "#C8960C", letterSpacing: "2px" }}>
                        ★★★★★
                      </div>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "#444",
                        lineHeight: 1.75,
                        margin: 0,
                        fontStyle: "italic",
                      }}
                    >
                      &#8220;{rev.text}&#8221;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "FAQ" && (
            <div data-ocid="yatra_detail.faq">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: "24px",
                }}
              >
                Frequently Asked Questions
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {pageFaqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    data-ocid={`yatra_detail.faq.item.${i + 1}`}
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      border:
                        openFaq === i
                          ? "1px solid #C8960C"
                          : "1px solid #E8F5EE",
                      overflow: "hidden",
                      boxShadow:
                        openFaq === i
                          ? "0 4px 20px rgba(200,150,12,0.1)"
                          : "0 2px 8px rgba(0,0,0,0.04)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 20px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        gap: "16px",
                      }}
                      aria-expanded={openFaq === i}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: openFaq === i ? "#C8960C" : "#1A1A1A",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        style={{
                          color: openFaq === i ? "#C8960C" : "#1A7A4C",
                          fontSize: "20px",
                          flexShrink: 0,
                          transition: "transform 0.2s",
                          transform:
                            openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                          fontWeight: 300,
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: "0 20px 18px" }}>
                        <div
                          style={{
                            width: "40px",
                            height: "2px",
                            background: "#C8960C",
                            marginBottom: "10px",
                            borderRadius: "2px",
                          }}
                        />
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "#4A4A4A",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div
          style={{
            position: "sticky",
            top: "calc(var(--nav-height, 72px) + 20px)",
          }}
          data-ocid="yatra_detail.booking_sidebar"
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              border: "1px solid #E8F5EE",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(26,122,76,0.1)",
              marginTop: "40px",
            }}
          >
            {/* Price header */}
            <div
              style={{
                background: "linear-gradient(135deg, #0D3D24 0%, #1A7A4C 100%)",
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "4px",
                }}
              >
                Starting from
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#F4A623",
                    lineHeight: 1,
                  }}
                >
                  &#8377;{yatra.priceFrom.toLocaleString("en-IN")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  /person
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginTop: "8px",
                  color: "#F4A623",
                  fontSize: "12px",
                }}
              >
                <span>★★★★★</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>
                  {yatra.rating} ({yatra.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Booking content */}
            <div style={{ padding: "20px 24px" }}>
              {/* Next batch */}
              <div
                style={{
                  background: "#F8FAF9",
                  borderRadius: "8px",
                  padding: "12px",
                  marginBottom: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      color: "#888",
                      marginBottom: "2px",
                    }}
                  >
                    NEXT BATCH
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#1A1A1A",
                    }}
                  >
                    15 May 2026
                  </div>
                </div>
                <div
                  style={{
                    background: "#E8F5EE",
                    color: "#1A7A4C",
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "50px",
                  }}
                >
                  8 Seats Left
                </div>
              </div>

              {/* Transport options */}
              {yatra.transportOptions && yatra.transportOptions.length > 0 && (
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#888",
                      marginBottom: "8px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Transport Options
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {yatra.transportOptions.map((opt, oi) => (
                      <label
                        key={opt}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name={`transport-${yatra.slug}`}
                          defaultChecked={oi === 0}
                          data-ocid={`yatra_detail.transport_option.${oi + 1}`}
                          style={{ accentColor: "#1A7A4C" }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            color: "#333",
                          }}
                        >
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <a
                href={`/booking/${yatra.slug}`}
                data-ocid="yatra_detail.book_now_button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "14px",
                  background: "#F4A623",
                  color: "#fff",
                  borderRadius: "10px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "background 0.2s",
                  boxShadow: "0 4px 16px rgba(244,166,35,0.3)",
                }}
              >
                🙏 Register for Yatra
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I%27m%20interested%20in%20the%20yatra."
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="yatra_detail.whatsapp_button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "12px",
                  background: "#25D366",
                  color: "#fff",
                  borderRadius: "10px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  marginBottom: "10px",
                  transition: "background 0.2s",
                }}
              >
                💬 WhatsApp Us
              </a>
              <button
                type="button"
                data-ocid="yatra_detail.inquiry_button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "11px",
                  background: "transparent",
                  color: "#1A7A4C",
                  border: "2px solid #1A7A4C",
                  borderRadius: "10px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  marginBottom: "16px",
                  transition: "all 0.2s",
                }}
              >
                Send Inquiry
              </button>

              {/* Trust badges */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  borderTop: "1px solid #E8F5EE",
                  paddingTop: "14px",
                }}
              >
                {[
                  { icon: "✅", text: "Expert Coordination at Each Shrine" },
                  { icon: "🛱️", text: "Pony/Helicopter Booking Assisted" },
                  { icon: "🏥", text: "Medical Support Available" },
                  { icon: "🔒", text: "100% Secure Booking" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "13px" }}>{badge.icon}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Yatras */}
      <section
        style={{
          background: "#F8FAF9",
          padding: "60px 24px",
          borderTop: "1px solid #E8F5EE",
        }}
        data-ocid="yatra_detail.related_section"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "28px",
            }}
          >
            Other Sacred Yatras
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {yatras
              .filter((y) => y.slug !== yatra.slug)
              .slice(0, 3)
              .map((y, i) => (
                <YatraCard key={y.slug} yatra={y} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* Mobile Bottom CTA bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          borderTop: "1px solid #E8F5EE",
          padding: "12px 16px calc(12px + env(safe-area-inset-bottom))",
          display: "flex",
          gap: "10px",
          zIndex: 50,
        }}
        className="mobile-booking-bar"
        data-ocid="yatra_detail.mobile_cta_bar"
      >
        <a
          href={`/booking/${yatra.slug}`}
          data-ocid="yatra_detail.mobile_book_button"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            background: "#F4A623",
            color: "#fff",
            borderRadius: "10px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          🙏 Book Now
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I%27m%20interested%20in%20the%20yatra."
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="yatra_detail.mobile_whatsapp_button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 16px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "10px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          💬
        </a>
        <a
          href="tel:+919876543210"
          data-ocid="yatra_detail.mobile_call_button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 16px",
            background: "#1A7A4C",
            color: "#fff",
            borderRadius: "10px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          📞
        </a>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .mobile-booking-bar { display: none !important; }
        }
        @media (max-width: 900px) {
          .yatra-detail-grid {
            grid-template-columns: 1fr !important;
          }
          .yatra-detail-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
