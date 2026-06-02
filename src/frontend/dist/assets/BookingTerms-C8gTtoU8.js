import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "48px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "28px",
          color: "var(--text-primary)",
          marginBottom: "16px",
          paddingBottom: "12px",
          borderBottom: "1px solid var(--border-subtle)"
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
  ] });
}
function BookingTerms() {
  reactExports.useEffect(() => {
    document.title = "Booking Terms & Conditions | Global Trek";
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
                  children: "LEGAL"
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
                  children: "Booking Terms & Conditions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    marginTop: "12px"
                  },
                  children: "Effective date: January 2025. Please read these carefully before booking."
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "1. Deposits & Payment Schedule", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "A",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "non-refundable deposit of 25%" }),
                  " ",
                  "of the total trip cost is required at the time of booking to confirm your place on the trip. This deposit covers initial reservations, permit applications, and logistics arrangements."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { marginTop: "12px" }, children: [
                  "The remaining",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "75% balance is due no later than 30 days before the trip departure date" }),
                  ". For bookings made within 30 days of departure, full payment is due immediately upon booking confirmation."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "12px" }, children: "All prices are quoted in INR (Indian Rupees) and/or USD (US Dollars). International clients may pay in USD via wire transfer. Indian clients may pay by NEFT/RTGS, UPI, or credit card." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "2. Cancellation Policy (Client-Initiated)", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you need to cancel your booking, the following cancellation charges apply:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "table",
                  {
                    style: {
                      width: "100%",
                      borderCollapse: "collapse",
                      marginTop: "16px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { background: "var(--bg-surface)" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "th",
                          {
                            style: {
                              padding: "12px 16px",
                              textAlign: "left",
                              color: "var(--text-secondary)",
                              borderBottom: "1px solid var(--border-default)"
                            },
                            children: "Notice Period"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "th",
                          {
                            style: {
                              padding: "12px 16px",
                              textAlign: "right",
                              color: "var(--text-secondary)",
                              borderBottom: "1px solid var(--border-default)"
                            },
                            children: "Refund"
                          }
                        )
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
                        ["More than 45 days before departure", "75% refund"],
                        ["30–45 days before departure", "50% refund"],
                        ["15–30 days before departure", "25% refund"],
                        ["Less than 15 days before departure", "No refund (0%)"]
                      ].map(([period, refund]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "tr",
                        {
                          style: { borderBottom: "1px solid var(--border-subtle)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "td",
                              {
                                style: {
                                  padding: "12px 16px",
                                  color: "var(--text-secondary)"
                                },
                                children: period
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "td",
                              {
                                style: {
                                  padding: "12px 16px",
                                  textAlign: "right",
                                  color: refund === "No refund (0%)" ? "var(--error)" : "var(--success)"
                                },
                                children: refund
                              }
                            )
                          ]
                        },
                        period
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "16px", fontSize: "13px" }, children: "All cancellations must be submitted in writing to info@globaltrek.in. The cancellation date is the date we receive your written notice." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "3. Trip Cancellation by Global Trek", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In the rare event that Global Trek is required to cancel a trip due to circumstances beyond our control — including but not limited to natural disasters, government travel advisories, political instability, adverse weather conditions, or insufficient group size — you will receive:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { style: { marginTop: "12px", paddingLeft: "20px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { style: { marginBottom: "8px" }, children: [
                    "A",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "full refund" }),
                    " ",
                    "of all monies paid, within 14 working days; or"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "A",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "full credit" }),
                    " ",
                    "towards any future Global Trek trip of equal or greater value, valid for 24 months."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "12px" }, children: "Global Trek is not responsible for any consequential losses (flights, visa fees, accommodation booked independently) arising from a trip cancellation." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "4. Liability & Adventure Risk Acknowledgment", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Adventure travel, trekking, and mountaineering involve inherent risks including altitude sickness, extreme weather, rockfall, avalanche, difficult terrain, and other natural hazards. By booking a trip with Global Trek, you acknowledge and accept these risks." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "12px" }, children: "Global Trek operates to the highest safety standards and employs experienced, trained guides. However, we cannot be held liable for any injury, illness, loss, or damage arising from participation in adventure activities that are inherent to the nature of the trip." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "5. Travel Insurance (Mandatory for trips above 4000m)", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Comprehensive travel insurance is",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "mandatory" }),
                  " ",
                  "for all trips at or above 4,000m, and strongly recommended for all others. Your policy must cover:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { style: { marginTop: "12px", paddingLeft: "20px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "8px" }, children: "Emergency medical expenses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "8px" }, children: "Emergency helicopter rescue and evacuation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "8px" }, children: "Trip cancellation and curtailment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Repatriation of remains in case of fatality" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "12px" }, children: "Please share your insurance policy details (insurer name, policy number, 24-hour emergency number) with us before departure." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "6. Conduct on Trip", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "All participants are expected to treat fellow travellers, guides, porters, and local communities with respect and courtesy. White Magic reserves the right to remove any participant from a trip without refund if their behaviour endangers others, violates local customs, or disrupts the group experience." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "12px" }, children: "You are responsible for following your guide's instructions at all times, particularly regarding safety protocols at altitude." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "24px"
                  },
                  children: "For any questions about these terms, please contact us at info@globaltrek.in or +91 98765 43210."
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
  BookingTerms as default
};
