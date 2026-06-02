import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
import { S as SectionHeading } from "./SectionHeading-CuY5AD7W.js";
import { T as TrekCard } from "./TrekCard-MEq-mcYL.js";
import { t as treks } from "./treks-NQ8g2zVB.js";
const FEATURED_SLUGS = ["kedarkantha", "har-ki-dun", "kuari-pass"];
const difficultyColors = {
  Easy: { bg: "#E8F5EE", text: "#1A7A4C" },
  "Easy to Moderate": { bg: "#E8F5EE", text: "#1A7A4C" },
  Moderate: { bg: "#FFF3CD", text: "#856404" },
  Difficult: { bg: "#FDECEA", text: "#C0392B" }
};
function UttarakhandHubPage() {
  const ukTreks = reactExports.useMemo(
    () => treks.filter((t) => t.state === "Uttarakhand"),
    []
  );
  const featuredTreks = reactExports.useMemo(
    () => FEATURED_SLUGS.map((s) => ukTreks.find((t) => t.slug === s)).filter(
      Boolean
    ),
    [ukTreks]
  );
  const gridTreks = reactExports.useMemo(
    () => ukTreks.filter((t) => !FEATURED_SLUGS.includes(t.slug)),
    [ukTreks]
  );
  const infoCards = [
    {
      icon: "🌸",
      title: "Best Seasons",
      desc: "Apr–Jun (spring blooms), Sep–Nov (clear skies). Winter (Dec–Feb) for snow treks like Kedarkantha & Brahmatal."
    },
    {
      icon: "🎯",
      title: "Difficulty Range",
      desc: "Easy weekend treks (Nag Tibba, Chopta) to challenging high-altitude expeditions (Roopkund 5,029m)."
    },
    {
      icon: "🚆",
      title: "Getting There",
      desc: "Base city: Dehradun (railway + airport). Most treks are 3–8 hours from Dehradun, Haridwar, or Rishikesh."
    },
    {
      icon: "🏕️",
      title: "Camping & Stay",
      desc: "Fully managed campsites with dining tents. Expert local guides certified by IMF and Uttarakhand Tourism."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { paddingTop: "var(--nav-height, 72px)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "linear-gradient(135deg, #0D3D24 0%, #145C38 50%, #1A7A4C 100%)",
          padding: "80px 24px 64px",
          position: "relative",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              style: {
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              style: {
                position: "absolute",
                bottom: "-60px",
                left: "5%",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "rgba(46,204,113,0.08)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: { maxWidth: "1200px", margin: "0 auto", position: "relative" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", style: { marginBottom: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "ol",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      listStyle: "none",
                      padding: 0,
                      margin: 0
                    },
                    children: ["Home", "Treks", "Uttarakhand"].map((crumb, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        style: { display: "flex", alignItems: "center", gap: "6px" },
                        children: [
                          i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "13px"
                              },
                              children: "›"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "13px",
                                color: i === arr.length - 1 ? "#fff" : "rgba(255,255,255,0.7)",
                                fontWeight: i === arr.length - 1 ? 600 : 400
                              },
                              children: crumb
                            }
                          )
                        ]
                      },
                      crumb
                    ))
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "48px",
                      flexWrap: "wrap"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: "1 1 400px" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              background: "rgba(255,255,255,0.12)",
                              borderRadius: "50px",
                              padding: "5px 14px",
                              marginBottom: "20px"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "16px" }, children: "🏔️" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: "#fff",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase"
                                  },
                                  children: "Uttarakhand Trekking"
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h1",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "clamp(36px, 5vw, 60px)",
                              fontWeight: 700,
                              color: "#fff",
                              lineHeight: 1.1,
                              margin: "0 0 20px"
                            },
                            children: "Uttarakhand Treks"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "clamp(15px, 1.8vw, 18px)",
                              color: "rgba(255,255,255,0.88)",
                              lineHeight: 1.6,
                              maxWidth: "540px",
                              margin: "0 0 32px"
                            },
                            children: "10 spectacular treks from easy weekend getaways to challenging high-altitude adventures in the sacred land of Devbhumi — the abode of the gods."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "#all-treks",
                              "data-ocid": "uk_hub.explore_button",
                              style: {
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
                                transition: "all 0.2s"
                              },
                              children: "Explore All 10 Treks"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "/contact",
                              "data-ocid": "uk_hub.inquiry_button",
                              style: {
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
                                transition: "all 0.2s"
                              },
                              children: "Plan My Trek"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "12px",
                            flexShrink: 0
                          },
                          children: [
                            { value: "10", label: "Treks Available" },
                            { value: "3,022m–5,029m", label: "Altitude Range" },
                            { value: "2–8 Days", label: "Duration Range" },
                            { value: "4.8★", label: "Avg. Rating" }
                          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "16px 20px",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                minWidth: "130px"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    style: {
                                      fontFamily: "var(--font-display)",
                                      fontSize: "22px",
                                      fontWeight: 700,
                                      color: "#fff",
                                      lineHeight: 1
                                    },
                                    children: s.value
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    style: {
                                      fontFamily: "var(--font-body)",
                                      fontSize: "12px",
                                      color: "rgba(255,255,255,0.75)",
                                      marginTop: "4px"
                                    },
                                    children: s.label
                                  }
                                )
                              ]
                            },
                            s.label
                          ))
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "#fff", padding: "64px 24px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          label: "Staff Favourites",
          title: "Featured Uttarakhand Treks",
          subtitle: "Hand-picked by our expert guides — these three treks showcase the very best of Garhwal Himalaya."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px"
          },
          children: featuredTreks.map((trek, i) => {
            if (!trek) return null;
            const diffStyle = difficultyColors[trek.difficulty] ?? difficultyColors.Moderate;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                "data-ocid": `uk_hub.featured_card.${i + 1}`,
                style: {
                  background: "#fff",
                  borderRadius: "16px",
                  border: "1px solid #E8F5EE",
                  borderTop: "4px solid #1A7A4C",
                  boxShadow: "0 4px 24px rgba(26,122,76,0.1)",
                  overflow: "hidden",
                  transition: "all 0.3s"
                },
                onMouseEnter: (e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 40px rgba(26,122,76,0.18)";
                },
                onMouseLeave: (e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 24px rgba(26,122,76,0.1)";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        position: "relative",
                        height: "220px",
                        overflow: "hidden",
                        background: "linear-gradient(135deg, #E8F5EE, #1A7A4C33)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: "/assets/generated/himalaya-hero.dim_1600x900.jpg",
                            alt: `${trek.name} in Uttarakhand`,
                            style: {
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.4s"
                            },
                            loading: "lazy"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(to top, rgba(20,92,56,0.6) 0%, transparent 60%)"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              bottom: "16px",
                              left: "16px"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "h3",
                              {
                                style: {
                                  fontFamily: "var(--font-display)",
                                  fontSize: "20px",
                                  fontWeight: 700,
                                  color: "#fff",
                                  margin: 0
                                },
                                children: trek.name
                              }
                            )
                          }
                        ),
                        trek.isTrending && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              top: "12px",
                              right: "12px",
                              background: "#F4A623",
                              color: "#fff",
                              fontSize: "11px",
                              fontWeight: 700,
                              padding: "4px 10px",
                              borderRadius: "50px"
                            },
                            children: "🔥 Trending"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px 24px 24px" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "#4A4A4A",
                          lineHeight: 1.55,
                          marginBottom: "16px"
                        },
                        children: trek.shortDescription
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          gap: "8px",
                          flexWrap: "wrap",
                          marginBottom: "20px"
                        },
                        children: [
                          [
                            { icon: "⏱", val: trek.durationLabel },
                            {
                              icon: "📍",
                              val: `${trek.maxAltitudeM.toLocaleString()}m`
                            }
                          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              style: {
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
                                fontWeight: 600
                              },
                              children: [
                                stat.icon,
                                " ",
                                stat.val
                              ]
                            },
                            stat.icon
                          )),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                background: diffStyle.bg,
                                borderRadius: "50px",
                                padding: "4px 12px",
                                fontFamily: "var(--font-body)",
                                fontSize: "12px",
                                color: diffStyle.text,
                                fontWeight: 700
                              },
                              children: trek.difficulty
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: `/treks/uttarakhand/${trek.slug}`,
                          "data-ocid": `uk_hub.featured_link.${i + 1}`,
                          style: {
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
                            textDecoration: "none"
                          },
                          children: "View Trek"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: `/treks/uttarakhand/${trek.slug}`,
                          "data-ocid": `uk_hub.featured_book.${i + 1}`,
                          style: {
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
                            textDecoration: "none"
                          },
                          children: [
                            "Book — ₹",
                            trek.priceFrom.toLocaleString("en-IN")
                          ]
                        }
                      )
                    ] })
                  ] })
                ]
              },
              trek.slug
            );
          })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: "all-treks",
        style: { background: "#F8FAF9", padding: "64px 24px 80px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Complete Collection",
              title: "All 10 Uttarakhand Treks",
              subtitle: "Every trail, every altitude, every season — your next Himalayan adventure starts here."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "uk_hub.treks_list",
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "24px"
              },
              children: gridTreks.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.slug))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "#fff", padding: "64px 24px 80px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          label: "Why Uttarakhand",
          title: "About Uttarakhand Trekking",
          subtitle: "Known as Devbhumi — the Land of the Gods — Uttarakhand is India's premier trekking destination.",
          centered: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "48px"
          },
          children: infoCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                background: "#F8FAF9",
                border: "1px solid #E8F5EE",
                borderTop: "3px solid #1A7A4C",
                borderRadius: "12px",
                padding: "24px 20px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "28px", marginBottom: "12px" }, children: card.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      marginBottom: "8px"
                    },
                    children: card.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "#4A4A4A",
                      lineHeight: 1.55,
                      margin: 0
                    },
                    children: card.desc
                  }
                )
              ]
            },
            card.title
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            background: "linear-gradient(135deg, #145C38, #1A7A4C)",
            borderRadius: "20px",
            padding: "48px",
            textAlign: "center"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "12px"
                },
                children: "Ready for Your Uttarakhand Adventure?"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "28px",
                  maxWidth: "480px",
                  margin: "0 auto 28px"
                },
                children: "Our expert guides have been leading treks across Garhwal and Kumaon for over 15 years."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  flexWrap: "wrap"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/treks",
                      "data-ocid": "uk_hub.cta_treks_button",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "13px 32px",
                        background: "#fff",
                        color: "#1A7A4C",
                        borderRadius: "10px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "15px",
                        textDecoration: "none"
                      },
                      children: "Browse All Treks"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/contact",
                      "data-ocid": "uk_hub.cta_contact_button",
                      style: {
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
                        textDecoration: "none"
                      },
                      children: "Get Expert Advice"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  UttarakhandHubPage
};
