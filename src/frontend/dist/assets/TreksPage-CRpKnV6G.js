import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { S as SectionHeading } from "./SectionHeading-CuY5AD7W.js";
import { T as TrekCard } from "./TrekCard-MEq-mcYL.js";
import { t as treks } from "./treks-NQ8g2zVB.js";
function TreksPage() {
  const [stateFilter, setStateFilter] = reactExports.useState("All");
  const [diffFilter, setDiffFilter] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    return treks.filter((t) => {
      const stateMatch = stateFilter === "All" || t.state === stateFilter;
      const diffMatch = diffFilter === "All" || t.difficulty === diffFilter;
      return stateMatch && diffMatch;
    });
  }, [stateFilter, diffFilter]);
  const difficultyOptions = [
    "All",
    "Easy",
    "Easy to Moderate",
    "Moderate",
    "Difficult"
  ];
  const stateOptions = [
    { label: "All Treks", value: "All" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { paddingTop: "var(--nav-height, 72px)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "linear-gradient(135deg, #145C38 0%, #1A7A4C 60%, #2ECC71 100%)",
          padding: "72px 24px 56px",
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
                top: "-60px",
                right: "-60px",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              style: {
                position: "absolute",
                bottom: "-40px",
                left: "10%",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)"
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
                    children: ["Home", "Treks"].map((crumb, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                                color: i === 1 ? "#fff" : "rgba(255,255,255,0.7)",
                                fontWeight: i === 1 ? 600 : 400
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(36px, 5vw, 64px)",
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                      marginBottom: "16px",
                      lineHeight: 1.1
                    },
                    children: "Explore Himalayan Treks"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(15px, 2vw, 18px)",
                      color: "rgba(255,255,255,0.88)",
                      maxWidth: "560px",
                      lineHeight: 1.6,
                      margin: 0
                    },
                    children: "Discover 15 spectacular treks across Uttarakhand and Himachal Pradesh — from serene meadow walks to challenging high-altitude expeditions."
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "#fff",
          borderBottom: "1px solid #E8F5EE",
          boxShadow: "0 2px 12px rgba(26,122,76,0.07)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              flexWrap: "wrap",
              gap: 0
            },
            children: [
              { value: "15", label: "Total Treks" },
              { value: "10", label: "Uttarakhand" },
              { value: "5", label: "Himachal Pradesh" },
              { value: "All Levels", label: "Difficulty Range" }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  flex: "1 1 160px",
                  padding: "20px 24px",
                  borderRight: "1px solid #E8F5EE",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "26px",
                        fontWeight: 700,
                        color: "#1A7A4C",
                        lineHeight: 1
                      },
                      children: stat.value
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "#4A4A4A"
                      },
                      children: stat.label
                    }
                  )
                ]
              },
              stat.label
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "#F8FAF9",
          padding: "24px 24px 0",
          borderBottom: "1px solid #E8F5EE"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "flex",
                gap: "4px",
                marginBottom: "16px",
                borderBottom: "2px solid #E8F5EE",
                paddingBottom: 0
              },
              children: stateOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `treks.filter_tab.${opt.value.toLowerCase().replace(" ", "_")}`,
                  onClick: () => setStateFilter(opt.value),
                  style: {
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "10px 20px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    borderBottom: stateFilter === opt.value ? "3px solid #1A7A4C" : "3px solid transparent",
                    color: stateFilter === opt.value ? "#1A7A4C" : "#4A4A4A",
                    transition: "all 0.2s",
                    marginBottom: "-2px"
                  },
                  children: opt.label
                },
                opt.value
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                paddingBottom: "20px",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#4A4A4A",
                      marginRight: "4px"
                    },
                    children: "Difficulty:"
                  }
                ),
                difficultyOptions.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `treks.difficulty_filter.${d.toLowerCase().replace(/ /g, "_")}`,
                    onClick: () => setDiffFilter(d),
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 600,
                      padding: "6px 16px",
                      borderRadius: "50px",
                      border: "1.5px solid",
                      borderColor: diffFilter === d ? "#1A7A4C" : "#D1E7D9",
                      background: diffFilter === d ? "#1A7A4C" : "#fff",
                      color: diffFilter === d ? "#fff" : "#1A7A4C",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    },
                    children: d
                  },
                  d
                ))
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "#F8FAF9", padding: "48px 24px 80px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "12px"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Trek Collection",
              title: stateFilter === "All" ? "All Himalayan Treks" : `${stateFilter} Treks`,
              subtitle: `Showing ${filtered.length} trek${filtered.length !== 1 ? "s" : ""}`
            }
          )
        }
      ),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "treks.empty_state",
          style: {
            textAlign: "center",
            padding: "80px 24px",
            background: "#fff",
            borderRadius: "16px",
            border: "2px dashed #D1E7D9"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "🏔️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  color: "#1A1A1A",
                  marginBottom: "8px"
                },
                children: "No treks match your filters"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "var(--font-body)", color: "#4A4A4A" }, children: "Try selecting a different difficulty or state." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "treks.list",
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px"
          },
          children: filtered.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.slug))
        }
      )
    ] }) })
  ] });
}
export {
  TreksPage
};
