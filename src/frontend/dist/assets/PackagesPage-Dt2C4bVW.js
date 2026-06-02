import { j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
import { m as motion } from "./proxy-B5-_tyRn.js";
const packages = [
  {
    slug: "corporate",
    icon: "💼",
    title: "Corporate Trekking",
    subtitle: "Team Building Expeditions",
    targetAudience: "Companies, Startups & Teams",
    featuredTreks: ["Nag Tibba", "Triund", "Har Ki Dun"],
    priceFrom: "₹8,000",
    priceUnit: "per person",
    inclusions: [
      "Dedicated group liaison",
      "Team-building activities",
      "Gourmet camp meals",
      "Photography & videography",
      "Custom branded certificates",
      "Corporate invoice & GST bill"
    ],
    badge: "Most Popular",
    badgeColor: "#f4a623"
  },
  {
    slug: "school-college",
    icon: "🎓",
    title: "School & College",
    subtitle: "Educational Adventure Programs",
    targetAudience: "Students, NCC/NSS Groups",
    featuredTreks: ["Nag Tibba", "Chopta Tungnath", "Dayara Bugyal"],
    priceFrom: "₹5,000",
    priceUnit: "per student",
    inclusions: [
      "Trained instructors & guides",
      "Nature education sessions",
      "Survival skill workshops",
      "First aid & safety cover",
      "Parent coordination portal",
      "CBSE/ICSE compliance docs"
    ]
  },
  {
    slug: "family",
    icon: "👪",
    title: "Family Packages",
    subtitle: "Child-Friendly Mountain Escapes",
    targetAudience: "Families with Children",
    featuredTreks: ["Nag Tibba", "Chopta Tungnath", "Triund"],
    priceFrom: "₹6,000",
    priceUnit: "per person",
    inclusions: [
      "Family-suited easy trails",
      "Dedicated family guide",
      "Kids special menus",
      "Medical & first aid support",
      "Family photography package",
      "Comfortable accommodations"
    ],
    badge: "Kid Friendly",
    badgeColor: "#1a7a4c"
  },
  {
    slug: "honeymoon",
    icon: "💑",
    title: "Honeymoon Packages",
    subtitle: "Romantic Himalayan Escapes",
    targetAudience: "Couples & Newlyweds",
    featuredTreks: ["Chopta Tungnath", "Har Ki Dun", "Beas Kund"],
    priceFrom: "₹12,000",
    priceUnit: "per couple",
    inclusions: [
      "Private tent with floral decor",
      "Candlelight bonfire dinner",
      "Sunrise photography session",
      "Couple spa & massage",
      "Personalized itinerary",
      "Premium camp bedding"
    ],
    badge: "Premium",
    badgeColor: "#e74c3c"
  },
  {
    slug: "solo",
    icon: "🧗",
    title: "Solo Trekker",
    subtitle: "Join Group Batches & Connect",
    targetAudience: "Solo Adventurers & Backpackers",
    featuredTreks: ["Kedarkantha", "Phulara Ridge", "Sar Pass"],
    priceFrom: "₹3,500",
    priceUnit: "per person",
    inclusions: [
      "Join-a-batch flexibility",
      "Safety tracking app access",
      "Single supplement options",
      "Social trekker community",
      "Budget-friendly group rates",
      "Networking events at base"
    ]
  }
];
function PackagesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        paddingTop: "var(--nav-height, 72px)",
        background: "#ffffff",
        minHeight: "100vh"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              background: "linear-gradient(135deg, var(--green-dark, #145c38) 0%, var(--green-primary, #1a7a4c) 100%)",
              padding: "80px 24px 60px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.15
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: { position: "relative", maxWidth: "800px", margin: "0 auto" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.6 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
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
                              marginBottom: "20px"
                            },
                            children: "Curated Travel Packages"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "h1",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "clamp(2rem, 5vw, 3.5rem)",
                              color: "#ffffff",
                              lineHeight: 1.2,
                              marginBottom: "20px",
                              fontWeight: 700
                            },
                            children: [
                              "Tailored Travel Packages",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                              "for Every Group"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "1.1rem",
                              color: "rgba(255,255,255,0.85)",
                              maxWidth: "560px",
                              margin: "0 auto 32px",
                              lineHeight: 1.7
                            },
                            children: "From corporate team-building to romantic mountain escapes, we craft the perfect Himalayan experience for your group."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              display: "flex",
                              gap: "16px",
                              justifyContent: "center",
                              flexWrap: "wrap"
                            },
                            children: [
                              "500+ Groups Served",
                              "Customizable Itineraries",
                              "Dedicated Trip Manager"
                            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "span",
                              {
                                style: {
                                  background: "rgba(255,255,255,0.12)",
                                  color: "#fff",
                                  border: "1px solid rgba(255,255,255,0.2)",
                                  borderRadius: "999px",
                                  padding: "8px 18px",
                                  fontSize: "0.85rem",
                                  fontFamily: "var(--font-body)"
                                },
                                children: [
                                  "✓ ",
                                  t
                                ]
                              },
                              t
                            ))
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: { padding: "80px 24px", maxWidth: "1280px", margin: "0 auto" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "56px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      color: "var(--text-primary, #1a1a1a)",
                      marginBottom: "12px"
                    },
                    children: "Choose Your Package"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      color: "var(--text-secondary, #4a4a4a)",
                      fontSize: "1rem",
                      maxWidth: "500px",
                      margin: "0 auto"
                    },
                    children: "Every package is fully customizable to your group size, dates, and preferences."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                    gap: "32px"
                  },
                  children: packages.map((pkg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      "data-ocid": `package.item.${i + 1}`,
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: i * 0.08 },
                      whileHover: { y: -6 },
                      style: {
                        background: "#ffffff",
                        borderRadius: "16px",
                        boxShadow: "0 4px 20px rgba(26, 122, 76, 0.12)",
                        border: "1px solid #e8f5ee",
                        borderTop: "4px solid var(--green-primary, #1a7a4c)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              padding: "28px 28px 20px",
                              borderBottom: "1px solid #e8f5ee"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    marginBottom: "12px"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "14px"
                                        },
                                        children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2rem", lineHeight: 1 }, children: pkg.icon }),
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                                              "h3",
                                              {
                                                style: {
                                                  fontFamily: "var(--font-display)",
                                                  fontSize: "1.35rem",
                                                  color: "var(--text-primary, #1a1a1a)",
                                                  fontWeight: 700,
                                                  marginBottom: "2px"
                                                },
                                                children: pkg.title
                                              }
                                            ),
                                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                                              "p",
                                              {
                                                style: {
                                                  fontFamily: "var(--font-body)",
                                                  fontSize: "0.85rem",
                                                  color: "var(--green-primary, #1a7a4c)",
                                                  fontWeight: 600
                                                },
                                                children: pkg.subtitle
                                              }
                                            )
                                          ] })
                                        ]
                                      }
                                    ),
                                    pkg.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        style: {
                                          background: pkg.badgeColor,
                                          color: "#fff",
                                          borderRadius: "999px",
                                          padding: "4px 12px",
                                          fontSize: "0.72rem",
                                          fontFamily: "var(--font-mono)",
                                          fontWeight: 700,
                                          letterSpacing: "0.08em",
                                          textTransform: "uppercase",
                                          whiteSpace: "nowrap"
                                        },
                                        children: pkg.badge
                                      }
                                    )
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "p",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.85rem",
                                    color: "var(--text-muted, #6b7280)"
                                  },
                                  children: [
                                    "For: ",
                                    pkg.targetAudience
                                  ]
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px 28px", flex: 1 }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.72rem",
                                color: "var(--text-muted, #6b7280)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "12px"
                              },
                              children: "What's Included"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "ul",
                            {
                              style: {
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "8px"
                              },
                              children: pkg.inclusions.map((inc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "li",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.82rem",
                                    color: "var(--text-secondary, #4a4a4a)",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "6px"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        style: {
                                          color: "var(--green-primary, #1a7a4c)",
                                          fontWeight: 700,
                                          flexShrink: 0
                                        },
                                        children: "✓"
                                      }
                                    ),
                                    inc
                                  ]
                                },
                                inc
                              ))
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0 28px 20px" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.72rem",
                                color: "var(--text-muted, #6b7280)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                marginBottom: "10px"
                              },
                              children: "Featured Treks"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: pkg.featuredTreks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                background: "#e8f5ee",
                                color: "var(--green-dark, #145c38)",
                                borderRadius: "999px",
                                padding: "4px 12px",
                                fontSize: "0.78rem",
                                fontFamily: "var(--font-body)",
                                fontWeight: 600
                              },
                              children: t
                            },
                            t
                          )) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              padding: "20px 28px",
                              borderTop: "1px solid #e8f5ee",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              background: "#f8faf9"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "p",
                                  {
                                    style: {
                                      fontFamily: "var(--font-mono)",
                                      fontSize: "0.72rem",
                                      color: "var(--text-muted, #6b7280)",
                                      letterSpacing: "0.05em",
                                      marginBottom: "2px"
                                    },
                                    children: "Starting from"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "p",
                                  {
                                    style: {
                                      fontFamily: "var(--font-display)",
                                      fontSize: "1.5rem",
                                      color: "var(--green-primary, #1a7a4c)",
                                      fontWeight: 700,
                                      lineHeight: 1
                                    },
                                    children: [
                                      pkg.priceFrom,
                                      " ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "span",
                                        {
                                          style: {
                                            fontSize: "0.85rem",
                                            fontFamily: "var(--font-body)",
                                            color: "var(--text-muted, #6b7280)",
                                            fontWeight: 400
                                          },
                                          children: pkg.priceUnit
                                        }
                                      )
                                    ]
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Link,
                                {
                                  to: `/packages/${pkg.slug}`,
                                  "data-ocid": `package.cta.${i + 1}`,
                                  style: {
                                    background: "var(--green-primary, #1a7a4c)",
                                    color: "#fff",
                                    borderRadius: "8px",
                                    padding: "10px 22px",
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.88rem",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    transition: "background 0.2s"
                                  },
                                  children: "View Details →"
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    pkg.slug
                  ))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { background: "#e8f5ee", padding: "80px 24px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: { maxWidth: "1100px", margin: "0 auto", textAlign: "center" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    color: "var(--text-primary, #1a1a1a)",
                    marginBottom: "12px"
                  },
                  children: "Why Plan with Global Trek?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary, #4a4a4a)",
                    maxWidth: "500px",
                    margin: "0 auto 48px"
                  },
                  children: "15 years of group travel experience across the Himalayas."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "24px"
                  },
                  children: [
                    {
                      icon: "🏆",
                      title: "15 Years Experience",
                      desc: "Trusted by 500+ corporate clients and universities"
                    },
                    {
                      icon: "🛡️",
                      title: "Certified Safety",
                      desc: "All guides are Wilderness First Responder certified"
                    },
                    {
                      icon: "📋",
                      title: "Custom Itineraries",
                      desc: "Built around your group goals and fitness levels"
                    },
                    {
                      icon: "💬",
                      title: "Dedicated Support",
                      desc: "Your own trip manager from planning to return"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "28px 20px",
                        boxShadow: "0 2px 12px rgba(26,122,76,0.08)",
                        textAlign: "center"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              fontSize: "2rem",
                              display: "block",
                              marginBottom: "12px"
                            },
                            children: item.icon
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "1rem",
                              fontWeight: 700,
                              color: "var(--text-primary, #1a1a1a)",
                              marginBottom: "8px"
                            },
                            children: item.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "0.85rem",
                              color: "var(--text-secondary, #4a4a4a)",
                              lineHeight: 1.6
                            },
                            children: item.desc
                          }
                        )
                      ]
                    },
                    item.title
                  ))
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              padding: "80px 24px",
              textAlign: "center",
              background: "#fff"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "600px", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--text-primary, #1a1a1a)",
                    marginBottom: "16px"
                  },
                  children: "Not Sure Which Package Fits?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary, #4a4a4a)",
                    marginBottom: "32px",
                    lineHeight: 1.7
                  },
                  children: "Let our travel experts create a custom package tailored exactly to your group. Free consultation, no commitment."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/contact",
                  "data-ocid": "packages.custom_inquiry_button",
                  style: {
                    display: "inline-block",
                    background: "var(--amber, #f4a623)",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "16px 36px",
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(244,166,35,0.3)"
                  },
                  children: "Request Custom Package →"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
export {
  PackagesPage
};
