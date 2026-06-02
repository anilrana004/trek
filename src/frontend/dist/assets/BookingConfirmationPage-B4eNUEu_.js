import { j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
function BookingConfirmationPage() {
  const bookingId = `BK2026${String(Math.floor(1e3 + Math.random() * 9e3))}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "var(--bg-surface)"
      },
      "data-ocid": "booking_confirmation.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-primary) 100%)",
              padding: "64px 24px 80px",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                  style: {
                    background: "rgba(255,255,255,0.2)",
                    border: "3px solid rgba(255,255,255,0.4)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      width: "40",
                      height: "40",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "white",
                      "aria-hidden": "true",
                      strokeWidth: "2.5",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-4xl font-bold text-white mb-2",
                  style: { fontFamily: "var(--font-display)" },
                  children: "Booking Confirmed! 🎉"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-white/80 text-base",
                  style: { fontFamily: "var(--font-body)" },
                  children: "Get ready for your Himalayan adventure. See you on the trail!"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              maxWidth: "560px",
              margin: "-40px auto 0",
              padding: "0 24px 80px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-2xl overflow-hidden",
                  style: { background: "white", boxShadow: "var(--card-shadow)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "px-6 py-4 flex items-center justify-between",
                        style: {
                          background: "var(--green-muted)",
                          borderBottom: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-sm font-semibold",
                              style: {
                                color: "var(--text-secondary)",
                                fontFamily: "var(--font-body)"
                              },
                              children: "Booking Reference"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-lg font-bold",
                              style: {
                                fontFamily: "var(--font-display)",
                                color: "var(--green-primary)"
                              },
                              children: bookingId
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-5 space-y-4", children: [
                      { label: "Trek", value: "Kedarkantha Trek", icon: "🏔️" },
                      {
                        label: "Batch Dates",
                        value: "December 20 – December 24, 2026",
                        icon: "📅"
                      },
                      { label: "Participants", value: "2 Trekkers", icon: "👥" },
                      {
                        label: "Status",
                        value: "Confirmed",
                        icon: "✅",
                        green: true
                      },
                      {
                        label: "Total Paid",
                        value: "₹22,050",
                        icon: "💳",
                        bold: true
                      }
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center justify-between gap-4",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: item.icon }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-sm",
                                style: {
                                  color: "var(--text-secondary)",
                                  fontFamily: "var(--font-body)"
                                },
                                children: item.label
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-sm font-semibold",
                              style: {
                                fontFamily: "var(--font-body)",
                                color: item.green ? "#16a34a" : item.bold ? "var(--green-primary)" : "var(--text-primary)",
                                fontSize: item.bold ? "1.1rem" : void 0
                              },
                              children: item.value
                            }
                          )
                        ]
                      },
                      item.label
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "mx-5 mb-5 p-4 rounded-xl flex items-center gap-3",
                        style: {
                          background: "var(--green-muted)",
                          border: "1px solid var(--border-subtle)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "📧" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-sm",
                              style: {
                                color: "var(--text-secondary)",
                                fontFamily: "var(--font-body)"
                              },
                              children: "Email confirmation sent to your inbox with full itinerary & packing list PDF."
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-6 px-6 pb-5", children: ["Certified Guides", "Fully Insured", "24/7 Support"].map(
                      (badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "var(--green-primary)",
                            "aria-hidden": "true",
                            strokeWidth: "2.5",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6L9 17l-5-5" })
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
                            children: badge
                          }
                        )
                      ] }, badge)
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/account/dashboard",
                    className: "flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm text-white",
                    style: {
                      background: "var(--green-primary)",
                      fontFamily: "var(--font-body)"
                    },
                    "data-ocid": "booking_confirmation.go_dashboard_button",
                    children: "Go to Dashboard"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/treks",
                    className: "flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm",
                    style: {
                      border: "1.5px solid var(--green-primary)",
                      color: "var(--green-primary)",
                      fontFamily: "var(--font-body)",
                      background: "white"
                    },
                    "data-ocid": "booking_confirmation.book_another_button",
                    children: "Book Another Trek"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  BookingConfirmationPage
};
