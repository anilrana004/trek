import { j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
import { T as TrekCard } from "./TrekCard-MEq-mcYL.js";
import { t as treks } from "./treks-NQ8g2zVB.js";
const mockUpcoming = [
  {
    id: "BK2026001",
    trekName: "Kedarkantha Trek",
    batchDate: "December 20, 2026",
    participants: 2,
    status: "Confirmed",
    daysAway: 201
  },
  {
    id: "BK2026002",
    trekName: "Hampta Pass Trek",
    batchDate: "July 15, 2026",
    participants: 3,
    status: "Confirmed",
    daysAway: 44
  }
];
const mockPast = [
  {
    id: "BK2025041",
    trekName: "Chopta Tungnath Trek",
    batchDate: "October 12, 2025",
    participants: 2,
    rating: 5
  },
  {
    id: "BK2025028",
    trekName: "Triund Trek",
    batchDate: "June 5, 2025",
    participants: 1,
    rating: 5
  }
];
const wishlistTreks = treks.slice(0, 3);
const statCards = [
  {
    label: "Upcoming Treks",
    value: mockUpcoming.length,
    icon: "🏔️",
    color: "var(--green-primary)"
  },
  { label: "Past Treks", value: mockPast.length, icon: "✅", color: "#145c38" },
  {
    label: "Wishlist Items",
    value: wishlistTreks.length,
    icon: "❤️",
    color: "var(--amber)"
  }
];
function DashboardPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "var(--bg-surface)"
      },
      "data-ocid": "dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-primary) 100%)",
              padding: "48px 0 64px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  maxWidth: "var(--container-max)",
                  margin: "0 auto",
                  padding: "0 24px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-white/70 text-sm mb-1",
                      style: { fontFamily: "var(--font-body)" },
                      children: "Welcome back"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h1",
                    {
                      className: "text-4xl font-bold text-white mb-2",
                      style: { fontFamily: "var(--font-display)" },
                      children: "Namaste, Adventurer 🏔️"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-white/80 text-base",
                      style: { fontFamily: "var(--font-body)" },
                      children: "Ready for your next summit? Your journey continues here."
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              maxWidth: "var(--container-max)",
              margin: "-28px auto 0",
              padding: "0 24px"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: statCards.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-5 flex flex-col gap-2",
                style: {
                  background: "white",
                  boxShadow: "var(--card-shadow)",
                  borderTop: `4px solid ${stat.color}`
                },
                "data-ocid": `dashboard.stat.${stat.label.toLowerCase().replace(/ /g, "_")}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: stat.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-3xl font-bold",
                      style: { fontFamily: "var(--font-display)", color: stat.color },
                      children: stat.value
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-semibold",
                      style: {
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-body)"
                      },
                      children: stat.label
                    }
                  )
                ]
              },
              stat.label
            )) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              maxWidth: "var(--container-max)",
              margin: "0 auto",
              padding: "40px 24px 80px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-2xl font-bold mb-5",
                    style: {
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)"
                    },
                    children: "Upcoming Treks"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: mockUpcoming.map((booking, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4",
                    style: {
                      background: "white",
                      boxShadow: "var(--card-shadow)",
                      borderLeft: "4px solid var(--green-primary)"
                    },
                    "data-ocid": `dashboard.upcoming.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs font-bold px-2 py-0.5 rounded-full",
                              style: {
                                background: "var(--green-muted)",
                                color: "var(--green-primary)"
                              },
                              children: booking.status
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: "text-xs",
                              style: {
                                color: "var(--text-muted)",
                                fontFamily: "var(--font-body)"
                              },
                              children: [
                                booking.daysAway,
                                " days away"
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: "text-lg font-bold mb-1 truncate",
                            style: {
                              fontFamily: "var(--font-display)",
                              color: "var(--text-primary)"
                            },
                            children: booking.trekName
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex flex-wrap gap-4 text-sm",
                            style: {
                              color: "var(--text-secondary)",
                              fontFamily: "var(--font-body)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "📅 ",
                                booking.batchDate
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "👥 ",
                                booking.participants,
                                " participant",
                                booking.participants > 1 ? "s" : ""
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "🎫 Ref: ",
                                booking.id
                              ] })
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/booking/confirmation",
                          className: "shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white",
                          style: {
                            background: "var(--green-primary)",
                            fontFamily: "var(--font-body)"
                          },
                          "data-ocid": `dashboard.view_details.${i + 1}`,
                          children: "View Details"
                        }
                      )
                    ]
                  },
                  booking.id
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-2xl font-bold mb-5",
                    style: {
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)"
                    },
                    children: "Past Adventures"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: mockPast.map((booking, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4",
                    style: {
                      background: "white",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      borderLeft: "4px solid #22c55e",
                      opacity: 0.92
                    },
                    "data-ocid": `dashboard.past.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                          style: { background: "#dcfce7" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "svg",
                            {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "#22c55e",
                              strokeWidth: "2.5",
                              "aria-hidden": "true",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: "text-base font-bold mb-1 truncate",
                            style: {
                              fontFamily: "var(--font-display)",
                              color: "var(--text-primary)"
                            },
                            children: booking.trekName
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex flex-wrap gap-4 text-sm",
                            style: {
                              color: "var(--text-secondary)",
                              fontFamily: "var(--font-body)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "📅 ",
                                booking.batchDate
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "👥 ",
                                booking.participants,
                                " participant",
                                booking.participants > 1 ? "s" : ""
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⭐".repeat(booking.rating) })
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-semibold px-3 py-1 rounded-full shrink-0",
                          style: { background: "#dcfce7", color: "#15803d" },
                          children: "Completed"
                        }
                      )
                    ]
                  },
                  booking.id
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-2xl font-bold mb-5",
                    style: {
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)"
                    },
                    children: "Saved Treks ❤️"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: wishlistTreks.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.slug)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-2xl font-bold mb-5",
                    style: {
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)"
                    },
                    children: "Quick Actions"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/treks",
                      className: "px-6 py-3 rounded-xl font-semibold text-sm text-white",
                      style: {
                        background: "var(--green-primary)",
                        fontFamily: "var(--font-body)",
                        boxShadow: "0 4px 12px rgba(26,122,76,0.3)"
                      },
                      "data-ocid": "dashboard.browse_treks_button",
                      children: "🗺️ Browse Treks"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/treks",
                      className: "px-6 py-3 rounded-xl font-semibold text-sm text-white",
                      style: {
                        background: "var(--green-dark)",
                        fontFamily: "var(--font-body)"
                      },
                      "data-ocid": "dashboard.book_trek_button",
                      children: "📅 Book a Trek"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "px-6 py-3 rounded-xl font-semibold text-sm",
                      style: {
                        border: "2px solid var(--green-primary)",
                        color: "var(--green-primary)",
                        fontFamily: "var(--font-body)",
                        background: "white"
                      },
                      "data-ocid": "dashboard.download_certificate_button",
                      children: "🏅 Download Certificate"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  DashboardPage
};
