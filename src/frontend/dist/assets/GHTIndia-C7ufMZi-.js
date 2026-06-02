import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { S as SectionHeading } from "./SectionHeading-CrfcNCMw.js";
import { u as useScrollAnimation } from "./useScrollAnimation-CjWvoXuE.js";
const routeStops = [
  { name: "Kashmir", desc: "High alpine meadows" },
  { name: "Kishtwar", desc: "Remote gorges" },
  { name: "Zanskar", desc: "Frozen river valleys" },
  { name: "Ladakh", desc: "High desert passes" },
  { name: "Spiti", desc: "Tibetan plateau" },
  { name: "Kinnaur", desc: "Orchards & peaks" },
  { name: "Garhwal", desc: "Sacred summits" },
  { name: "Kumaon", desc: "Flower valleys" },
  { name: "Sikkim", desc: "Eastern Himalaya" }
];
const ghtSections = [
  {
    name: "GHT - Kashmir Section",
    days: 28,
    altitude: 4800,
    priceINR: "Rs.3,99,000",
    priceUSD: "$5,490",
    slug: "ght-kashmir"
  },
  {
    name: "GHT - Himachal Section",
    days: 26,
    altitude: 5750,
    priceINR: "On Request",
    priceUSD: null,
    slug: "ght-himachal"
  },
  {
    name: "GHT - Kumaon Section",
    days: 28,
    altitude: 4850,
    priceINR: "Rs.3,99,000",
    priceUSD: "$5,590",
    slug: "ght-kumaon"
  },
  {
    name: "GHT - Sikkim Section",
    days: 25,
    altitude: 4950,
    priceINR: "Rs.3,49,000",
    priceUSD: "$4,990",
    slug: "ght-sikkim"
  }
];
const whyCards = [
  {
    icon: "Map",
    title: "Unprecedented Route",
    desc: "177 days traversing 9 distinct Himalayan regions. No other trail covers the breadth of the Indian Himalaya in a single journey."
  },
  {
    icon: "Mountain",
    title: "Expert-Led Sections",
    desc: "Each section is guided by Global Trek's most experienced mountain leaders with deep regional knowledge."
  },
  {
    icon: "Leaf",
    title: "Join Any Section",
    desc: "You don't have to do all 177 days. Join one section that matches your schedule, fitness, and adventure appetite."
  }
];
function WhyCard({ title, desc }) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      style: {
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "36px 28px",
        textAlign: "center",
        opacity: 0
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            width: "40",
            height: "40",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "var(--accent-blue)",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 20l7-12 4 6 2-3 5 9H3z" })
          }
        ) }),
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
              lineHeight: 1.7,
              margin: 0
            },
            children: desc
          }
        )
      ]
    }
  );
}
function GHTSectionCard({
  s,
  index
}) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      "data-ocid": `ght.section.item.${index + 1}`,
      style: {
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "32px",
        opacity: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        transition: "border-color 200ms ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.borderColor = "var(--accent-blue)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "24px",
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: "0 0 12px"
              },
              children: s.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "24px", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--accent-blue)"
                  },
                  children: s.days
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginLeft: "4px"
                  },
                  children: "DAYS"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-secondary)"
                  },
                  children: [
                    s.altitude.toLocaleString(),
                    "m"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginLeft: "4px"
                  },
                  children: "MAX ALT"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "right", flexShrink: 0 }, children: s.priceINR === "On Request" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--accent-gold)",
              fontStyle: "italic"
            },
            children: "On Request"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                fontFamily: "var(--font-mono)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--text-primary)"
              },
              children: s.priceINR
            }
          ),
          s.priceUSD && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--text-muted)"
              },
              children: [
                "/ ",
                s.priceUSD
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "13px",
  fontWeight: 500,
  color: "var(--text-secondary)",
  marginBottom: "6px"
};
const inputStyle = {
  width: "100%",
  background: "var(--bg-elevated)",
  border: "1px solid var(--border-default)",
  color: "var(--text-primary)",
  borderRadius: "var(--radius-md)",
  height: "48px",
  padding: "0 16px",
  fontFamily: "var(--font-body)",
  fontSize: "15px",
  boxSizing: "border-box",
  outline: "none"
};
function StatBar() {
  const ref = useScrollAnimation();
  const stats = [
    { value: "177", unit: "Days", label: "Total Duration" },
    { value: "9", unit: "Regions", label: "Crossed" },
    { value: "~4,000", unit: "km", label: "Distance" },
    { value: "2023", unit: "", label: "First Commercial Run" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      style: {
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "32px 48px",
        opacity: 0
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px"
          },
          children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "4px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-mono)",
                        fontSize: "42px",
                        fontWeight: 700,
                        color: "var(--accent-blue)",
                        lineHeight: 1
                      },
                      children: s.value
                    }
                  ),
                  s.unit && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-mono)",
                        fontSize: "18px",
                        color: "var(--text-secondary)"
                      },
                      children: s.unit
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  marginTop: "6px",
                  textTransform: "uppercase"
                },
                children: s.label
              }
            )
          ] }, s.label))
        }
      )
    }
  );
}
function GHTIndia() {
  reactExports.useEffect(() => {
    document.title = "GHT India - Great Himalayan Traverse | Global Trek";
  }, []);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    section: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setSubmitting(false);
  };
  const heroRef = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-primary)", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "relative",
          height: "100vh",
          minHeight: "640px",
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
              src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
              alt: "Great Himalayan Traverse",
              style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%"
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
                opacity: 0
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
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
                      textTransform: "uppercase"
                    },
                    children: "NEW - FIRST COMMERCIALLY GUIDED"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(36px, 6vw, 72px)",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      margin: "0 0 16px",
                      maxWidth: "900px"
                    },
                    children: "The Great Himalayan Traverse - India"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(20px, 3vw, 30px)",
                      color: "var(--text-secondary)",
                      margin: 0
                    },
                    children: "177 Days. 9 Regions. One Lifetime."
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { background: "var(--bg-void)", padding: "80px 48px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "THE ROUTE",
          heading: "West to East Across India",
          subtext: "Traversing the entire Indian Himalaya in one epic journey.",
          align: "center"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", paddingTop: "24px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "36px",
              left: "calc(100% / 18)",
              right: "calc(100% / 18)",
              height: "2px",
              background: "linear-gradient(to right, var(--accent-blue), var(--accent-gold))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(9, 1fr)",
              gap: "8px",
              position: "relative"
            },
            children: routeStops.map((stop, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { textAlign: "center", position: "relative" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: i === 0 ? "var(--accent-blue)" : i === 8 ? "var(--accent-gold)" : "var(--bg-elevated)",
                        border: `2px solid ${i === 0 ? "var(--accent-blue)" : i === 8 ? "var(--accent-gold)" : "var(--border-strong)"}`,
                        margin: "0 auto 20px",
                        zIndex: 2,
                        position: "relative"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "4px"
                      },
                      children: stop.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        lineHeight: 1.4
                      },
                      children: stop.desc
                    }
                  )
                ]
              },
              stop.name
            ))
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { background: "var(--bg-surface)", padding: "80px 48px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "WHY GHT INDIA",
              heading: "A Trail Like No Other",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px"
              },
              children: whyCards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { title: card.title, desc: card.desc }, card.title))
            }
          )
        ] })
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
              eyebrow: "JOIN A SECTION",
              heading: "Sections You Can Trek",
              subtext: "Each section is a complete, standalone adventure. Join one or chain them together.",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px"
              },
              children: ghtSections.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(GHTSectionCard, { s, index: i }, s.slug))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { background: "var(--bg-surface)", padding: "80px 48px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--accent-gold)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "12px"
                    },
                    children: "FIRST COMMERCIAL RUN - 2023"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(28px, 3vw, 42px)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      margin: "0 0 20px"
                    },
                    children: "Making History in 2023"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      marginBottom: "16px",
                      margin: "0 0 16px"
                    },
                    children: "In 2023, Global Trek became the first operator to run a commercial traverse of the entire Indian Himalaya under the GHT India banner. Spanning 177 days and 9 distinct Himalayan regions from Kashmir in the west to Sikkim in the east, it stands as one of the world's most ambitious trekking achievements."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      margin: 0
                    },
                    children: "The traverse crossed high passes, remote valleys, and ancient trading routes that few modern trekkers have ever seen. Now you can join us for individual sections of this landmark journey."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    position: "relative",
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    aspectRatio: "4/3"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
                        alt: "GHT 2023 traverse",
                        style: { width: "100%", height: "100%", objectFit: "cover" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(8,10,12,0.7) 0%, transparent 60%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          bottom: "24px",
                          left: "24px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "12px",
                          color: "var(--accent-gold)",
                          letterSpacing: "0.08em"
                        },
                        children: "177 DAYS - 9 REGIONS - 2023"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { background: "var(--bg-void)", padding: "80px 48px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "720px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "INTERESTED?",
          heading: "Register Your Interest",
          subtext: "Tell us which section calls to you. We'll get back within 48 hours.",
          align: "center"
        }
      ),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "ght.form.success_state",
          style: {
            background: "var(--bg-surface)",
            border: "1px solid var(--success)",
            borderRadius: "var(--radius-xl)",
            padding: "48px",
            textAlign: "center"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "🏔️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  margin: "0 0 12px"
                },
                children: "Interest Registered!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  margin: 0
                },
                children: "Thank you. Our GHT team will reach out within 48 hours to discuss your journey."
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          "data-ocid": "ght.interest_form",
          onSubmit: handleSubmit,
          style: {
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ght-name", style: labelStyle, children: "Full Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "ght-name",
                        "data-ocid": "ght.name_input",
                        required: true,
                        type: "text",
                        placeholder: "Your name",
                        value: form.name,
                        onChange: (e) => setForm({ ...form, name: e.target.value }),
                        style: inputStyle
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ght-email", style: labelStyle, children: "Email Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "ght-email",
                        "data-ocid": "ght.email_input",
                        required: true,
                        type: "email",
                        placeholder: "you@example.com",
                        value: form.email,
                        onChange: (e) => setForm({ ...form, email: e.target.value }),
                        style: inputStyle
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ght-phone", style: labelStyle, children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "ght-phone",
                  "data-ocid": "ght.phone_input",
                  type: "tel",
                  placeholder: "+91 XXXXX XXXXX",
                  value: form.phone,
                  onChange: (e) => setForm({ ...form, phone: e.target.value }),
                  style: inputStyle
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ght-section", style: labelStyle, children: "Which Section Interests You? *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "ght-section",
                  "data-ocid": "ght.section_select",
                  required: true,
                  value: form.section,
                  onChange: (e) => setForm({ ...form, section: e.target.value }),
                  style: { ...inputStyle, cursor: "pointer" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a section" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "kashmir", children: "GHT - Kashmir Section (28 days)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "himachal", children: "GHT - Himachal Section (26 days)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "kumaon", children: "GHT - Kumaon Section (28 days)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sikkim", children: "GHT - Sikkim Section (25 days)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "full", children: "Full Traverse (177 days)" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ght-message", style: labelStyle, children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "ght-message",
                  "data-ocid": "ght.message_textarea",
                  placeholder: "Tell us about your experience level and what excites you about the GHT...",
                  value: form.message,
                  onChange: (e) => setForm({ ...form, message: e.target.value }),
                  rows: 4,
                  style: {
                    ...inputStyle,
                    height: "auto",
                    padding: "12px 16px",
                    resize: "vertical"
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                "data-ocid": "ght.form.submit_button",
                disabled: submitting,
                style: {
                  height: "52px",
                  background: submitting ? "var(--border-default)" : "var(--accent-blue)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  color: "var(--text-inverse)",
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "background 150ms ease"
                },
                children: submitting ? "Submitting..." : "Submit Interest"
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  GHTIndia as default
};
