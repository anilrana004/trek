import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
import { S as SectionHeading } from "./SectionHeading-CrfcNCMw.js";
import { b as beginnerTrips, T as TripCard } from "./trips-Dg0_nTXB.js";
import { u as useScrollAnimation } from "./useScrollAnimation-CjWvoXuE.js";
const features = [
  {
    icon: "Tent",
    title: "Modern Comforts in Wild Places",
    desc: "Spacious tents, comfortable sleeping gear, and hot food in the heart of the Himalaya. You don't have to rough it to experience the mountains."
  },
  {
    icon: "Food",
    title: "Excellent Camp Food",
    desc: "Our legendary garlic soup, freshly cooked breakfast, packed lunches, and warm dinners. Vegetarian and non-vegetarian options, always."
  },
  {
    icon: "Guide",
    title: "Expert Guides, Small Groups",
    desc: "Every WM Lite trip is led by an experienced White Magic guide. Groups are capped at 12 for a personal, safe, and social experience."
  }
];
const featureIcons = [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "44",
      height: "44",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--accent-blue)",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      role: "img",
      "aria-label": "Tent accommodation",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 18 L12 4 L21 18 H3Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18 L12 12 L15 18" })
      ]
    },
    "tent"
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "44",
      height: "44",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--accent-blue)",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      role: "img",
      "aria-label": "Camp food",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 6v6l4 2" })
      ]
    },
    "food"
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "44",
      height: "44",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--accent-blue)",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      role: "img",
      "aria-label": "Expert guide",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9", cy: "7", r: "4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23 21v-2a4 4 0 00-3-3.87" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 3.13a4 4 0 010 7.75" })
      ]
    },
    "guide"
  )
];
const comparisonRows = [
  {
    feature: "Difficulty",
    lite: "Beginner",
    standard: "Moderate - Challenging",
    expedition: "Technical"
  },
  {
    feature: "Duration",
    lite: "6-10 Days",
    standard: "8-20 Days",
    expedition: "15-30+ Days"
  },
  {
    feature: "Max Altitude",
    lite: "Up to 4,000m",
    standard: "Up to 5,500m",
    expedition: "6,000m+"
  },
  {
    feature: "Prior Experience",
    lite: "None needed",
    standard: "Some fitness",
    expedition: "Required"
  },
  {
    feature: "Price Range",
    lite: "Rs.55K - Rs.90K",
    standard: "Rs.75K - Rs.2L",
    expedition: "Rs.1.5L - Rs.5L"
  }
];
function FeatureCard({
  title,
  desc,
  icon
}) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      style: {
        textAlign: "center",
        padding: "40px 28px",
        background: "var(--bg-elevated)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-subtle)",
        opacity: 0
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px"
            },
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            style: {
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: "0 0 12px"
            },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              margin: 0
            },
            children: desc
          }
        )
      ]
    }
  );
}
function WMLite() {
  reactExports.useEffect(() => {
    document.title = "WM Lite - Adventures for Beginners | White Magic Adventure Travel";
  }, []);
  const heroRef = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-primary)", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "relative",
          height: "80vh",
          minHeight: "560px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "80px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&q=80",
              alt: "Beginner trekking in the Himalaya",
              style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 40%"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                background: "var(--gradient-hero)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: heroRef,
              className: "animate-on-scroll",
              style: {
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "0 24px",
                maxWidth: "800px",
                opacity: 0
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
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
                      textTransform: "uppercase"
                    },
                    children: "PERFECT FOR FIRST-TIMERS"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(36px, 6vw, 70px)",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      margin: "0 0 16px"
                    },
                    children: "WM Lite - Adventure Made Accessible"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(18px, 2.5vw, 26px)",
                      color: "var(--text-secondary)",
                      margin: "0 0 28px"
                    },
                    children: "The Himalaya for First-Timers. No extreme difficulty. Just pure mountain magic."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/trips",
                    "data-ocid": "wmlite.hero.cta_button",
                    style: {
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
                      transition: "background 150ms ease, transform 150ms ease"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "var(--accent-blue-hover)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "var(--accent-blue)";
                      e.currentTarget.style.transform = "translateY(0)";
                    },
                    children: "Explore WM Lite Trips"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { background: "var(--bg-surface)", padding: "72px 48px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px"
            },
            children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FeatureCard,
              {
                title: f.title,
                desc: f.desc,
                icon: featureIcons[i]
              },
              f.title
            ))
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { background: "var(--bg-primary)", padding: "80px 48px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "HOW WE COMPARE",
              heading: "WM Lite vs The Rest",
              subtext: "Find the adventure level that's right for you.",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                overflowX: "auto",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-subtle)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "table",
                {
                  style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "600px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: "var(--bg-surface)" }, children: ["Feature", "WM Lite", "Standard Treks", "Expeditions"].map(
                      (h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "th",
                        {
                          style: {
                            padding: "16px 20px",
                            textAlign: i === 0 ? "left" : "center",
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            fontWeight: 700,
                            color: i === 1 ? "var(--accent-blue)" : "var(--text-muted)",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            borderBottom: "1px solid var(--border-subtle)"
                          },
                          children: [
                            h,
                            i === 1 ? " ✓" : ""
                          ]
                        },
                        h
                      )
                    ) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comparisonRows.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        style: {
                          background: idx % 2 === 0 ? "var(--bg-elevated)" : "var(--bg-surface)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              style: {
                                padding: "14px 20px",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "var(--text-secondary)",
                                borderBottom: "1px solid var(--border-subtle)"
                              },
                              children: row.feature
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              style: {
                                padding: "14px 20px",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                color: "var(--text-primary)",
                                textAlign: "center",
                                fontWeight: 600,
                                borderBottom: "1px solid var(--border-subtle)"
                              },
                              children: row.lite
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              style: {
                                padding: "14px 20px",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                color: "var(--text-secondary)",
                                textAlign: "center",
                                borderBottom: "1px solid var(--border-subtle)"
                              },
                              children: row.standard
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              style: {
                                padding: "14px 20px",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                color: "var(--text-secondary)",
                                textAlign: "center",
                                borderBottom: "1px solid var(--border-subtle)"
                              },
                              children: row.expedition
                            }
                          )
                        ]
                      },
                      row.feature
                    )) })
                  ]
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { background: "var(--bg-void)", padding: "80px 48px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "WM LITE TRIPS",
          heading: "Your First Adventure Awaits",
          subtext: "Handpicked beginner-friendly trips with everything handled for you.",
          align: "center"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          },
          children: beginnerTrips.map((trip, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TripCard, { trip, index: i }, trip.id))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { background: "var(--bg-surface)", padding: "80px 48px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: { maxWidth: "800px", margin: "0 auto", textAlign: "center" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "FIRST-TIMER STORY",
                  heading: "From Someone Who Was You",
                  align: "center"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-default)",
                    borderRadius: "var(--radius-xl)",
                    padding: "40px",
                    position: "relative"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontSize: "64px",
                          fontFamily: "Georgia, serif",
                          color: "var(--accent-blue)",
                          lineHeight: 0.6,
                          marginBottom: "24px",
                          opacity: 0.5,
                          textAlign: "left"
                        },
                        children: "“"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "17px",
                          color: "var(--text-primary)",
                          lineHeight: 1.8,
                          fontStyle: "italic",
                          margin: "0 0 28px"
                        },
                        children: "This was my first time trekking, and I was blown away by White Magic's flawless logistics. Everything was extremely smooth and impeccable, ranging from the delicious food, to the male/female toilet tents, to the guidance during the trip (they set the right pace, picked good times to rest). Can't recommend White Magic more!"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "12px"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              style: {
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
                                flexShrink: 0
                              },
                              children: "F"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "left" }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: "15px",
                                  fontWeight: 700,
                                  color: "var(--text-primary)"
                                },
                                children: "Fiona Liao"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: "12px",
                                  color: "var(--accent-blue)",
                                  background: "var(--accent-blue-dim)",
                                  display: "inline-block",
                                  padding: "2px 10px",
                                  borderRadius: "var(--radius-full)",
                                  marginTop: "2px"
                                },
                                children: "Markha Valley Trek"
                              }
                            )
                          ] })
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          background: "var(--bg-void)",
          padding: "80px 48px",
          textAlign: "center"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "600px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                margin: "0 0 16px"
              },
              children: "Ready for Your First Adventure?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-secondary)",
                margin: "0 0 32px"
              },
              children: "No experience needed. Just the desire to see something extraordinary."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/trips",
                    "data-ocid": "wmlite.cta.browse_button",
                    style: {
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
                      transition: "background 150ms ease"
                    },
                    children: "Browse All Trips"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    "data-ocid": "wmlite.cta.contact_link",
                    style: {
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
                      transition: "background 150ms ease"
                    },
                    children: "Talk to an Expert"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  WMLite as default
};
