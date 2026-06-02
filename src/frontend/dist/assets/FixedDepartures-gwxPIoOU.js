import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { a as allTrips, T as TripCard } from "./trips-Dg0_nTXB.js";
const regionOptions = [
  "All",
  "India",
  "Nepal",
  "Bhutan",
  "Tibet",
  "Outside Himalaya"
];
const difficultyOptions = [
  "All",
  "Beginner Trek",
  "Moderate Trek",
  "Challenging Trek",
  "Trekking Peak",
  "Technical Trek",
  "Moderate Climb",
  "Demanding Climb",
  "Very Demanding"
];
function FixedDepartures() {
  reactExports.useEffect(() => {
    document.title = "Fixed Departures | Global Trek";
  }, []);
  const [regionFilter, setRegionFilter] = reactExports.useState("All");
  const [difficultyFilter, setDifficultyFilter] = reactExports.useState("All");
  const [sortBy, setSortBy] = reactExports.useState("date");
  const fixedTrips = reactExports.useMemo(() => allTrips.filter((t) => !t.isOnRequest), []);
  const filtered = reactExports.useMemo(() => {
    let trips = fixedTrips;
    if (regionFilter !== "All") {
      trips = trips.filter(
        (t) => t.country === regionFilter || t.region === regionFilter
      );
    }
    if (difficultyFilter !== "All") {
      trips = trips.filter((t) => t.difficulty === difficultyFilter);
    }
    if (sortBy === "price-asc") {
      trips = [...trips].sort(
        (a, b) => (a.priceINR ?? a.priceUSD ?? 0) - (b.priceINR ?? b.priceUSD ?? 0)
      );
    } else if (sortBy === "price-desc") {
      trips = [...trips].sort(
        (a, b) => (b.priceINR ?? b.priceUSD ?? 0) - (a.priceINR ?? a.priceUSD ?? 0)
      );
    } else if (sortBy === "altitude") {
      trips = [...trips].sort((a, b) => b.maxAltitude - a.maxAltitude);
    } else if (sortBy === "duration") {
      trips = [...trips].sort((a, b) => a.duration - b.duration);
    }
    return trips;
  }, [fixedTrips, regionFilter, difficultyFilter, sortBy]);
  const pillStyle = (active) => ({
    padding: "8px 16px",
    borderRadius: "var(--radius-full)",
    border: `1px solid ${active ? "var(--accent-blue)" : "var(--border-default)"}`,
    background: active ? "var(--accent-blue-dim)" : "transparent",
    color: active ? "var(--accent-blue)" : "var(--text-secondary)",
    fontFamily: "var(--font-body)",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 150ms ease",
    whiteSpace: "nowrap"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-primary)", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "relative",
          height: "40vh",
          minHeight: "360px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80",
              alt: "Fixed departure adventures",
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
              style: {
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "0 24px",
                marginTop: "72px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--accent-blue)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "12px"
                    },
                    children: "GUARANTEED DEPARTURES"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(36px, 6vw, 64px)",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      margin: "0 0 12px"
                    },
                    children: "Fixed Departure Adventures"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      color: "var(--text-secondary)"
                    },
                    children: [
                      fixedTrips.length,
                      " scheduled departures across the Himalaya"
                    ]
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
          position: "sticky",
          top: "72px",
          zIndex: 50,
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "16px 48px"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "12px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                      width: "72px"
                    },
                    children: "REGION"
                  }
                ),
                regionOptions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `fixed.region.${r.toLowerCase().replace(/ /g, "_")}_filter`,
                    style: pillStyle(regionFilter === r),
                    onClick: () => setRegionFilter(r),
                    children: r
                  },
                  r
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                      width: "72px"
                    },
                    children: "GRADE"
                  }
                ),
                difficultyOptions.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `fixed.difficulty.${d.toLowerCase().replace(/ /g, "_")}_filter`,
                    style: pillStyle(difficultyFilter === d),
                    onClick: () => setDifficultyFilter(d),
                    children: d
                  },
                  d
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      marginLeft: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            color: "var(--text-muted)",
                            whiteSpace: "nowrap"
                          },
                          children: "Sort by:"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          "data-ocid": "fixed.sort_select",
                          value: sortBy,
                          onChange: (e) => setSortBy(e.target.value),
                          style: {
                            background: "var(--bg-elevated)",
                            border: "1px solid var(--border-default)",
                            borderRadius: "var(--radius-md)",
                            color: "var(--text-primary)",
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            padding: "6px 12px",
                            cursor: "pointer",
                            outline: "none"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: "Upcoming Departure" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-asc", children: "Price: Low to High" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-desc", children: "Price: High to Low" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "altitude", children: "Highest Altitude" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "duration", children: "Shortest First" })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        style: {
          padding: "48px 48px 80px",
          maxWidth: "1280px",
          margin: "0 auto"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "28px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--text-muted)"
                    },
                    children: [
                      "Showing ",
                      filtered.length,
                      " trip",
                      filtered.length !== 1 ? "s" : ""
                    ]
                  }
                ),
                (regionFilter !== "All" || difficultyFilter !== "All") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "fixed.clear_filters_button",
                    onClick: () => {
                      setRegionFilter("All");
                      setDifficultyFilter("All");
                    },
                    style: {
                      background: "transparent",
                      border: "none",
                      color: "var(--accent-blue)",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "4px 8px"
                    },
                    children: "Clear all filters x"
                  }
                )
              ]
            }
          ),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "fixed.trips.empty_state",
              style: {
                textAlign: "center",
                padding: "80px 20px",
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-subtle)"
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
                      margin: "0 0 8px"
                    },
                    children: "No trips match your filters"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "var(--text-secondary)"
                    },
                    children: "Try adjusting your region or difficulty selection."
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px"
              },
              children: filtered.map((trip, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TripCard, { trip, index: i }, trip.id))
            }
          )
        ]
      }
    )
  ] });
}
export {
  FixedDepartures as default
};
