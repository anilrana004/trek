import { j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
const difficultyColors = {
  Easy: { bg: "#E8F5EE", text: "#1A7A4C" },
  "Easy to Moderate": { bg: "#E8F5EE", text: "#1A7A4C" },
  Moderate: { bg: "#FFF3CD", text: "#856404" },
  Difficult: { bg: "#FDECEA", text: "#C0392B" }
};
function TrekCard({ trek, index = 0 }) {
  const diffStyle = difficultyColors[trek.difficulty] ?? difficultyColors.Moderate;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      "data-ocid": `trek_card.item.${index + 1}`,
      style: {
        background: "#fff",
        borderRadius: "14px",
        borderTop: "4px solid #1A7A4C",
        boxShadow: "0 4px 20px rgba(26,122,76,0.12)",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        cursor: "pointer"
      },
      onMouseEnter: (e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(26,122,76,0.2)";
      },
      onMouseLeave: (e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.12)";
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "relative",
              height: "200px",
              background: "linear-gradient(135deg, #E8F5EE 0%, #1A7A4C33 100%)",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/himalaya-hero.dim_1600x900.jpg",
                  alt: `${trek.name} - ${trek.state} Himalayan trek`,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease"
                  },
                  loading: "lazy",
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "#1A7A4C",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontFamily: "var(--font-body)",
                          letterSpacing: "0.05em"
                        },
                        children: trek.state === "Uttarakhand" ? "UK" : "HP"
                      }
                    ),
                    trek.isTrending && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "#F4A623",
                          color: "#fff",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontFamily: "var(--font-body)"
                        },
                        children: "🔥 Trending"
                      }
                    ),
                    trek.isEditorsPick && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "#fff",
                          color: "#1A7A4C",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontFamily: "var(--font-body)",
                          border: "1px solid #1A7A4C"
                        },
                        children: "⭐ Pick"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: "rgba(20,92,56,0.92)",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "4px 10px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          opacity: 0.8
                        },
                        children: [
                          "From",
                          " "
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "14px"
                        },
                        children: [
                          "₹",
                          trek.priceFrom.toLocaleString("en-IN")
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "18px 20px 20px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "8px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      lineHeight: 1.3,
                      margin: 0
                    },
                    children: trek.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      background: diffStyle.bg,
                      color: diffStyle.text,
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "50px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      fontFamily: "var(--font-body)"
                    },
                    children: trek.difficulty
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                gap: "14px",
                marginBottom: "12px",
                flexWrap: "wrap"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "#4A4A4A"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          width: "13",
                          height: "13",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#1A7A4C",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "12 6 12 12 16 14" })
                          ]
                        }
                      ),
                      trek.durationLabel
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "#4A4A4A"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          width: "13",
                          height: "13",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#1A7A4C",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 17l4-8 4 5 3-4 4 7" })
                        }
                      ),
                      trek.maxAltitudeM.toLocaleString(),
                      "m"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "#F4A623",
                      fontWeight: 600
                    },
                    children: [
                      "★ ",
                      trek.rating,
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#6B7280", fontWeight: 400 }, children: [
                        "(",
                        trek.reviewCount,
                        ")"
                      ] })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: `/treks/${trek.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh"}/${trek.slug}`,
                "data-ocid": `trek_card.link.${index + 1}`,
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "9px 12px",
                  border: "1.5px solid #1A7A4C",
                  borderRadius: "8px",
                  color: "#1A7A4C",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "all 0.2s"
                },
                onMouseEnter: (e) => {
                  const el = e.currentTarget;
                  el.style.background = "#E8F5EE";
                },
                onMouseLeave: (e) => {
                  const el = e.currentTarget;
                  el.style.background = "transparent";
                },
                children: "View Details"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: `/treks/${trek.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh"}/${trek.slug}`,
                "data-ocid": `trek_card.primary_button.${index + 1}`,
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "9px 12px",
                  background: "#F4A623",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "background 0.2s"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "#E0941A";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "#F4A623";
                },
                children: "Book Now"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  TrekCard as T
};
