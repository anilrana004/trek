import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
function PayCard({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "28px 32px",
        marginBottom: "24px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              color: "var(--text-primary)",
              letterSpacing: "0.05em",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.75
            },
            children
          }
        )
      ]
    }
  );
}
function InfoRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        display: "flex",
        gap: "16px",
        padding: "10px 0",
        borderBottom: "1px solid var(--border-subtle)",
        flexWrap: "wrap"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--text-muted)",
              minWidth: "200px",
              flexShrink: 0
            },
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--text-primary)",
              flex: 1
            },
            children: value
          }
        )
      ]
    }
  );
}
function PaymentInstructions() {
  reactExports.useEffect(() => {
    document.title = "Payment Instructions | White Magic Adventure Travel";
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      style: {
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              background: "var(--bg-void)",
              padding: "72px clamp(20px,4vw,48px) 60px",
              borderBottom: "1px solid var(--border-subtle)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "var(--container-narrow)", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "var(--accent-blue)",
                    textTransform: "uppercase",
                    marginBottom: "12px"
                  },
                  children: "HOW TO PAY"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "clamp(32px,5vw,56px)",
                    color: "var(--text-primary)",
                    lineHeight: 1.1
                  },
                  children: "Payment Instructions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    marginTop: "12px",
                    maxWidth: "520px"
                  },
                  children: "We offer multiple secure payment methods for Indian and international clients."
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              maxWidth: "var(--container-narrow)",
              margin: "0 auto",
              padding: "64px clamp(20px,4vw,48px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    background: "var(--accent-blue-dim)",
                    border: "1px solid var(--accent-blue)",
                    borderRadius: "var(--radius-lg)",
                    padding: "16px 20px",
                    marginBottom: "36px",
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "20px", flexShrink: 0 }, children: "ℹ️" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6
                        },
                        children: [
                          "Always reference your",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "name and trip name" }),
                          " ",
                          "in the payment notes/remarks. After payment, email your receipt to",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "mailto:info@whitemagicadventure.com",
                              style: { color: "var(--accent-blue)" },
                              children: "info@whitemagicadventure.com"
                            }
                          ),
                          " ",
                          "to receive your booking confirmation."
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(PayCard, { title: "🏦 Bank Transfer (Indian Clients — NEFT / RTGS / IMPS)", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Account Name", value: "White Magic Adventure Travel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InfoRow,
                  {
                    label: "Account Number",
                    value: "XXXX XXXX XXXX (provided upon booking)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InfoRow,
                  {
                    label: "IFSC Code",
                    value: "Provided upon booking confirmation"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Bank Name", value: "[Bank name provided on invoice]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Branch", value: "New Delhi, India" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      marginTop: "16px",
                      fontSize: "13px",
                      color: "var(--text-muted)"
                    },
                    children: "Full bank details including account number and IFSC are sent on your booking confirmation invoice. Do not use details from any other source."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(PayCard, { title: "🌍 International Wire Transfer (SWIFT)", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InfoRow,
                  {
                    label: "Beneficiary Name",
                    value: "White Magic Adventure Travel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "SWIFT / BIC Code", value: "Provided upon booking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Bank Name", value: "[Bank name provided on invoice]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Bank Address", value: "New Delhi, India" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  InfoRow,
                  {
                    label: "Currency",
                    value: "USD (preferred for international transfers)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      marginTop: "16px",
                      fontSize: "13px",
                      color: "var(--text-muted)"
                    },
                    children: "Please note that your bank may deduct a wire transfer fee. Ensure the full invoiced amount reaches us. For high-value expeditions, we recommend transferring an additional $20–30 to cover potential bank charges."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(PayCard, { title: "📱 UPI (Indian Clients)", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      background: "var(--bg-elevated)",
                      borderRadius: "var(--radius-md)",
                      padding: "16px 20px",
                      display: "inline-block",
                      marginBottom: "12px"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-mono)",
                          fontSize: "15px",
                          color: "var(--accent-blue)",
                          letterSpacing: "0.05em"
                        },
                        children: "UPI ID: Provided upon booking confirmation"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "UPI payments are accepted via PhonePe, Google Pay, Paytm, and all UPI-enabled apps. The UPI ID will be confirmed on your booking invoice." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(PayCard, { title: "💳 Credit / Debit Card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Credit and debit card payments are accepted through our secure payment gateway (Razorpay). A payment link will be shared with you upon booking confirmation. A 2–2.5% processing fee applies to card payments." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "12px" }, children: "We accept Visa, Mastercard, RuPay, and American Express cards." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(PayCard, { title: "📄 Payment Confirmation", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Once your payment is received and verified:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { style: { marginTop: "12px", paddingLeft: "20px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: { marginBottom: "8px" }, children: [
                    "You will receive a",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "booking confirmation email" }),
                    " ",
                    "within 24–48 hours with all trip details."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: { marginBottom: "8px" }, children: [
                    "A",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "digital receipt" }),
                    " ",
                    "will be issued via email."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "You will receive a",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "pre-departure information pack" }),
                    " ",
                    "approximately 4 weeks before departure."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "12px" }, children: "If you do not receive confirmation within 48 hours of payment, please contact us immediately at info@whitemagicadventure.com or +91-11-41076073." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    padding: "20px 24px",
                    textAlign: "center"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          color: "var(--text-secondary)"
                        },
                        children: "Questions about payment? Contact us directly:"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          gap: "12px",
                          justifyContent: "center",
                          marginTop: "12px",
                          flexWrap: "wrap"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "tel:+911141076073",
                              style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: "14px",
                                color: "var(--accent-blue)",
                                textDecoration: "none"
                              },
                              children: "+91-11-41076073"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "|" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "mailto:info@whitemagicadventure.com",
                              style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: "14px",
                                color: "var(--accent-blue)",
                                textDecoration: "none"
                              },
                              children: "info@whitemagicadventure.com"
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
        )
      ]
    }
  );
}
export {
  PaymentInstructions as default
};
