import { j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
function PaymentFailedPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "var(--bg-surface)"
      },
      "data-ocid": "payment_failed.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center min-h-[80vh] px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "480px", width: "100%", textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8",
            style: {
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              boxShadow: "0 0 0 12px rgba(239,68,68,0.1), 0 0 0 24px rgba(239,68,68,0.05)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                width: "44",
                height: "44",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "2.5",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18", strokeLinecap: "round" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18", strokeLinecap: "round" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-4xl font-bold mb-3",
            style: {
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)"
            },
            children: "Payment Failed"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-base mb-2",
            style: {
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)"
            },
            children: "We couldn't process your payment. Don't worry — your booking is saved."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-2xl p-5 mb-6 text-left",
            style: {
              background: "white",
              boxShadow: "var(--card-shadow)",
              border: "1px solid #fee2e2"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                  style: { background: "#fee2e2" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#dc2626",
                      strokeWidth: "2.5",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 9v4m0 4h.01" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-semibold text-sm mb-1",
                    style: {
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)"
                    },
                    children: "Reason: Card Declined"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm",
                    style: {
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)"
                    },
                    children: "Your bank declined the transaction. This could be due to insufficient funds, incorrect card details, or your bank's security policy."
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl p-4 mb-8 text-left",
            style: { background: "#fefce8", border: "1px solid #fef08a" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-semibold text-sm mb-2",
                  style: { color: "#854d0e", fontFamily: "var(--font-body)" },
                  children: "What you can try:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: [
                "Check your card number, expiry date, and CVV",
                "Ensure sufficient balance or credit limit",
                "Try a different card or UPI payment",
                "Contact your bank if the issue persists"
              ].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-sm",
                  style: { color: "#92400e", fontFamily: "var(--font-body)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-500 mt-0.5", children: "•" }),
                    tip
                  ]
                },
                tip
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/treks",
              className: "flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm text-white",
              style: {
                background: "var(--green-primary)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 4px 12px rgba(26,122,76,0.3)"
              },
              "data-ocid": "payment_failed.try_again_button",
              children: "Try Again"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/919876543210?text=Hi%20Global%20Trek!%20My%20payment%20failed%2C%20please%20help.",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm gap-2",
              style: {
                border: "1.5px solid var(--border-default)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
                background: "white"
              },
              "data-ocid": "payment_failed.contact_support_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.36 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
                  }
                ),
                "Contact Support"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "mt-5 text-xs",
            style: {
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)"
            },
            children: "No amount has been deducted. Your booking details are safe and can be completed anytime."
          }
        )
      ] }) })
    }
  );
}
export {
  PaymentFailedPage
};
