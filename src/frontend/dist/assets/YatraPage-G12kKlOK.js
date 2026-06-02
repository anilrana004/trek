import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
import { S as SectionHeading } from "./SectionHeading-CuY5AD7W.js";
import { y as yatras, Y as YatraCard } from "./yatras-BSkLTFMw.js";
const sacredCircuits = [
  {
    name: "Yamunotri",
    deity: "Goddess Yamuna",
    alt: "3,291m",
    desc: "Source of the sacred Yamuna River. Pilgrims cook rice in the boiling Surya Kund hot spring as an offering to the goddess.",
    icon: "🌊"
  },
  {
    name: "Gangotri",
    deity: "Goddess Ganga",
    alt: "3,048m",
    desc: "Origin of the holy Bhagirathi River. King Bhagirath meditated here for thousands of years to bring Ganga from heaven to earth.",
    icon: "✨"
  },
  {
    name: "Kedarnath",
    deity: "Lord Shiva",
    alt: "3,583m",
    desc: "Most sacred Jyotirlinga. Lord Shiva's bull form appeared here. The 1,200-year-old temple is among the most powerful in Hinduism.",
    icon: "🕉️"
  },
  {
    name: "Badrinath",
    deity: "Lord Vishnu",
    alt: "3,133m",
    desc: "Sacred abode of Lord Vishnu in the Char Dham circuit. Completing the four dhams is believed to grant liberation (moksha).",
    icon: "🙏"
  }
];
const stats = [
  { value: "50,000+", label: "Pilgrims Annually" },
  { value: "100%", label: "Safe & Insured" },
  { value: "Expert", label: "Coordination" },
  { value: "May–Nov", label: "2026 Season" }
];
const faqs = [
  {
    q: "What is the best time to do the Char Dham Yatra?",
    a: "The temples open in late April/early May (Akshaya Tritiya) and close in November (Bhai Dooj). June and September–October are ideal — weather is clear, crowds are manageable, and roads are open. Avoid July–August monsoon peak for long drives."
  },
  {
    q: "Is registration mandatory for the Yatra?",
    a: "Yes. Biometric registration is mandatory for all Char Dham shrines via the official Uttarakhand government portal (devasthanam.uk.gov.in). We handle registration for all participants in our group packages."
  },
  {
    q: "What is the minimum fitness level required?",
    a: "For Kedarnath, pilgrims must be able to walk 16km on a mountain trail (or use pony/doli/helicopter). Badrinath, Gangotri, and Yamunotri (5km trek) require moderate fitness. We recommend basic walking practice 2-4 weeks before the yatra."
  },
  {
    q: "Can senior citizens and children do the Yatra?",
    a: "Yes. We have special pony, doli (palki), and helicopter arrangements for senior pilgrims at Kedarnath and Yamunotri. Children above 5 years can participate. We provide dedicated support staff for seniors."
  },
  {
    q: "What accommodation is provided during the Yatra?",
    a: "We offer Budget (guest houses/dharamshalas), Standard (hotels), and Premium (resort) options. At Kedarnath (altitude), all accommodation is limited — we pre-book well in advance to guarantee your stay."
  },
  {
    q: "Is helicopter available for Kedarnath?",
    a: "Yes. Helicopter services operate from Phata, Sersi, Sitapur, and Agastmuni to Kedarnath. One-way fares range from ₹7,000–9,000. Bookings must be made months in advance via IRCTC or official state portals. We assist with helicopter booking for premium packages."
  }
];
function YatraPage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "#fff"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              background: "linear-gradient(135deg, #0D3D24 0%, #145C38 40%, #1A7A4C 100%)",
              padding: "80px 24px 64px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            },
            "data-ocid": "yatra.hero",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    border: "1px solid rgba(244,166,35,0.08)",
                    borderRadius: "50%",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "800px",
                    height: "800px",
                    border: "1px solid rgba(244,166,35,0.05)",
                    borderRadius: "50%",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    fontSize: "36px",
                    marginBottom: "20px",
                    color: "#F4A623",
                    letterSpacing: "0.1em"
                  },
                  children: "ॐ"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "inline-block",
                    border: "1px solid rgba(244,166,35,0.4)",
                    borderRadius: "4px",
                    padding: "6px 20px",
                    marginBottom: "20px",
                    background: "rgba(244,166,35,0.08)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#F4A623"
                      },
                      children: "Sacred Himalayan Pilgrimages • 2026 Season"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 6vw, 72px)",
                    fontWeight: 700,
                    color: "#F4A623",
                    lineHeight: 1.1,
                    marginBottom: "20px",
                    textShadow: "0 2px 20px rgba(0,0,0,0.4)"
                  },
                  children: "Sacred Himalayan Yatras"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    color: "rgba(255,255,255,0.88)",
                    maxWidth: "680px",
                    margin: "0 auto 36px",
                    lineHeight: 1.7
                  },
                  children: "Join thousands of pilgrims on the most auspicious journeys through the Himalayas. Expert coordination, safe travel, and deeply spiritual experiences at every sacred shrine."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    gap: "0",
                    flexWrap: "wrap",
                    background: "rgba(0,0,0,0.25)",
                    borderRadius: "12px",
                    border: "1px solid rgba(244,166,35,0.2)",
                    overflow: "hidden",
                    maxWidth: "700px",
                    margin: "0 auto"
                  },
                  children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        flex: "1 1 140px",
                        padding: "18px 20px",
                        borderRight: i < stats.length - 1 ? "1px solid rgba(244,166,35,0.15)" : "none",
                        textAlign: "center"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "clamp(22px, 3vw, 28px)",
                              fontWeight: 700,
                              color: "#F4A623",
                              lineHeight: 1,
                              marginBottom: "4px"
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
                              color: "rgba(255,255,255,0.7)",
                              letterSpacing: "0.04em"
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
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: { padding: "72px 24px", maxWidth: "1200px", margin: "0 auto" },
            "data-ocid": "yatra.cards_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  label: "Our Yatra Packages",
                  title: "Choose Your Sacred Journey",
                  subtitle: "From the most accessible to the most challenging pilgrimages — find the yatra that calls to your soul.",
                  centered: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "28px",
                    marginTop: "40px"
                  },
                  children: yatras.map((yatra, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(YatraCard, { yatra, index: i }, yatra.slug))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              background: "linear-gradient(180deg, #F8FAF9 0%, #FFFFFF 100%)",
              padding: "72px 24px",
              borderTop: "1px solid #E8F5EE"
            },
            "data-ocid": "yatra.sacred_circuits",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  label: "Spiritual Significance",
                  title: "The Four Sacred Circuits",
                  subtitle: "Each shrine holds profound mythological and spiritual significance — a journey through the Himalayan abodes of the gods.",
                  centered: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "24px",
                    marginTop: "40px"
                  },
                  children: sacredCircuits.map((circuit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": `yatra.circuit.item.${idx + 1}`,
                      style: {
                        background: "#fff",
                        borderRadius: "16px",
                        border: "1px solid #E8F5EE",
                        borderTop: "4px solid #C8960C",
                        padding: "28px 24px",
                        boxShadow: "0 4px 20px rgba(26,122,76,0.06)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease"
                      },
                      onMouseEnter: (e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(-4px)";
                        el.style.boxShadow = "0 12px 32px rgba(200,150,12,0.15)";
                      },
                      onMouseLeave: (e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.06)";
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "32px", marginBottom: "12px" }, children: circuit.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontSize: "20px",
                              fontWeight: 700,
                              color: "#1A1A1A",
                              marginBottom: "4px"
                            },
                            children: circuit.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "12px",
                              fontWeight: 700,
                              color: "#C8960C",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              marginBottom: "10px"
                            },
                            children: [
                              circuit.deity,
                              " • ",
                              circuit.alt
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              color: "#4A4A4A",
                              lineHeight: 1.65,
                              margin: 0
                            },
                            children: circuit.desc
                          }
                        )
                      ]
                    },
                    circuit.name
                  ))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              background: "linear-gradient(135deg, #0D3D24 0%, #1A7A4C 100%)",
              padding: "72px 24px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            },
            "data-ocid": "yatra.cta_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(244,166,35,0.06)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: "-80px",
                    left: "-80px",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "rgba(244,166,35,0.04)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: { position: "relative", maxWidth: "680px", margin: "0 auto" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: { fontSize: "28px", marginBottom: "16px", color: "#F4A623" },
                        children: "ॐ"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(28px, 4vw, 48px)",
                          fontWeight: 700,
                          color: "#F4A623",
                          marginBottom: "16px",
                          lineHeight: 1.15
                        },
                        children: "Register for 2026 Yatra Season"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "17px",
                          color: "rgba(255,255,255,0.85)",
                          marginBottom: "36px",
                          lineHeight: 1.6
                        },
                        children: "Temples open May 2026. Limited seats per batch. Early registration ensures best accommodation and helicopter slots."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          gap: "16px",
                          justifyContent: "center",
                          flexWrap: "wrap"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Link,
                            {
                              to: "/yatra/$slug",
                              params: { slug: "char-dham" },
                              "data-ocid": "yatra.register_primary_button",
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "14px 36px",
                                background: "#F4A623",
                                color: "#fff",
                                borderRadius: "12px",
                                fontFamily: "var(--font-body)",
                                fontWeight: 700,
                                fontSize: "16px",
                                textDecoration: "none",
                                transition: "all 0.2s",
                                boxShadow: "0 4px 20px rgba(244,166,35,0.4)"
                              },
                              onMouseEnter: (e) => {
                                e.currentTarget.style.background = "#e09410";
                                e.currentTarget.style.transform = "translateY(-2px)";
                              },
                              onMouseLeave: (e) => {
                                e.currentTarget.style.background = "#F4A623";
                                e.currentTarget.style.transform = "translateY(0)";
                              },
                              children: "🙏 Book Char Dham Yatra"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Link,
                            {
                              to: "/yatra/$slug",
                              params: { slug: "kedarnath" },
                              "data-ocid": "yatra.register_secondary_button",
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "14px 36px",
                                background: "transparent",
                                color: "#F4A623",
                                border: "2px solid rgba(244,166,35,0.6)",
                                borderRadius: "12px",
                                fontFamily: "var(--font-body)",
                                fontWeight: 700,
                                fontSize: "16px",
                                textDecoration: "none",
                                transition: "all 0.2s"
                              },
                              onMouseEnter: (e) => {
                                e.currentTarget.style.borderColor = "#F4A623";
                                e.currentTarget.style.background = "rgba(244,166,35,0.1)";
                              },
                              onMouseLeave: (e) => {
                                e.currentTarget.style.borderColor = "rgba(244,166,35,0.6)";
                                e.currentTarget.style.background = "transparent";
                              },
                              children: "View All Yatras"
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: { padding: "72px 24px", maxWidth: "800px", margin: "0 auto" },
            "data-ocid": "yatra.faq_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  label: "Common Questions",
                  title: "Frequently Asked Questions",
                  subtitle: "Everything you need to know before embarking on your sacred journey.",
                  centered: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "40px"
                  },
                  children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": `yatra.faq.item.${i + 1}`,
                      style: {
                        background: "#fff",
                        borderRadius: "12px",
                        border: openFaq === i ? "1px solid #C8960C" : "1px solid #E8F5EE",
                        overflow: "hidden",
                        boxShadow: openFaq === i ? "0 4px 20px rgba(200,150,12,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
                        transition: "all 0.2s ease"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setOpenFaq(openFaq === i ? null : i),
                            style: {
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "20px 24px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              textAlign: "left",
                              gap: "16px"
                            },
                            "aria-expanded": openFaq === i,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    color: openFaq === i ? "#C8960C" : "#1A1A1A",
                                    lineHeight: 1.4
                                  },
                                  children: faq.q
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    color: openFaq === i ? "#C8960C" : "#1A7A4C",
                                    fontSize: "20px",
                                    flexShrink: 0,
                                    transition: "transform 0.2s",
                                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                                    fontWeight: 300,
                                    lineHeight: 1
                                  },
                                  children: "+"
                                }
                              )
                            ]
                          }
                        ),
                        openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0 24px 20px" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              style: {
                                width: "40px",
                                height: "2px",
                                background: "#C8960C",
                                marginBottom: "12px",
                                borderRadius: "2px"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                color: "#4A4A4A",
                                lineHeight: 1.7,
                                margin: 0
                              },
                              children: faq.a
                            }
                          )
                        ] })
                      ]
                    },
                    faq.q
                  ))
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
  YatraPage
};
