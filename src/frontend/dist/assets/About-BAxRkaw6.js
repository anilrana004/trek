import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { u as useScrollAnimation } from "./useScrollAnimation-CjWvoXuE.js";
const stats = [
  { value: "500+", label: "Treks Completed" },
  { value: "12,000+", label: "Happy Trekkers" },
  { value: "100+", label: "Certified Guides" },
  { value: "15 Years", label: "Of Experience" }
];
const values = [
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "ITBP-certified guides, comprehensive first aid, and emergency satellite communication on every trek. Your safety is our highest priority, always."
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "We believe treks are more than trails — they're shared stories. Our trekking community spans 12,000+ adventurers who carry the spirit of the Himalayas back home."
  },
  {
    icon: "🏔️",
    title: "Authenticity",
    desc: "Every itinerary is crafted from years of firsthand Himalayan experience. No generic packages — every trek tells a real story of the land, culture, and peaks."
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Leave No Trace is not a policy, it's our culture. Zero single-use plastic on all treks, eco-partner certified operators, and a clean-up crew on every departure."
  }
];
const guides = [
  {
    name: "Rajesh Kumar",
    title: "Lead Trek Guide",
    experience: "12 Years",
    specialty: "Uttarakhand High Passes",
    bio: "Born in Uttarkashi, Rajesh has summited Kedarkantha, Kuari Pass, and Har Ki Dun over 200 times combined. His calm expertise in high-altitude terrain and deep Garhwali cultural knowledge make every trek an education.",
    avatar: "RK"
  },
  {
    name: "Priya Singh",
    title: "Yatra & Pilgrimage Specialist",
    experience: "8 Years",
    specialty: "Char Dham & Kedarnath Yatras",
    bio: "Priya grew up in the shadow of Kedarnath. Her intimate knowledge of the Panch Kedar circuit, yatra logistics, and the spiritual significance of each shrine ensures every pilgrimage is both safe and deeply meaningful.",
    avatar: "PS"
  },
  {
    name: "Vikram Negi",
    title: "High-Altitude Expedition Expert",
    experience: "15 Years",
    specialty: "Roopkund, Valley of Flowers, Hampta Pass",
    bio: "With 15 Himalayan seasons under his belt, Vikram is the go-to guide for difficult terrain. He has led over 80 successful Roopkund expeditions and holds advanced mountaineering certifications from the Nehru Institute of Mountaineering.",
    avatar: "VN"
  },
  {
    name: "Anita Rawat",
    title: "Safety & Wellness Officer",
    experience: "10 Years",
    specialty: "Medical Safety & Altitude Response",
    bio: "A trained wilderness first responder and certified yoga instructor, Anita leads our safety protocols across all treks. She ensures every trekker acclimatizes properly and reaches the summit healthy and confident.",
    avatar: "AR"
  }
];
const certifications = [
  {
    icon: "🏅",
    title: "ITBP Certified",
    subtitle: "Indo-Tibetan Border Police Mountain Training"
  },
  {
    icon: "🏛️",
    title: "Ministry of Tourism",
    subtitle: "Recognized by Government of India"
  },
  {
    icon: "🌿",
    title: "Uttarakhand Tourism Partner",
    subtitle: "Official registered operator"
  },
  {
    icon: "✅",
    title: "ISO 9001:2015",
    subtitle: "Certified Quality Management"
  }
];
function StatCard({ value, label }) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      style: {
        textAlign: "center",
        padding: "32px 24px",
        background: "rgba(255,255,255,0.12)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid rgba(255,255,255,0.2)",
        opacity: 0
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "8px"
            },
            children: value
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)"
            },
            children: label
          }
        )
      ]
    }
  );
}
function ValueCard({
  icon,
  title,
  desc
}) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      style: {
        background: "var(--bg-primary)",
        borderRadius: "var(--radius-lg)",
        padding: "32px 28px",
        borderTop: "4px solid #1A7A4C",
        boxShadow: "0 4px 20px rgba(26, 122, 76, 0.12)",
        opacity: 0,
        transition: "transform 200ms ease, box-shadow 200ms ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(26, 122, 76, 0.2)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(26, 122, 76, 0.12)";
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "36px", marginBottom: "16px" }, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "17px",
              fontWeight: 700,
              color: "#1A7A4C",
              marginBottom: "12px"
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
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              margin: 0
            },
            children: desc
          }
        )
      ]
    }
  );
}
function GuideCard({
  guide,
  index
}) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      "data-ocid": `about.guide.item.${index + 1}`,
      style: {
        background: "var(--bg-primary)",
        borderRadius: "var(--radius-lg)",
        padding: "32px",
        borderTop: "4px solid #1A7A4C",
        boxShadow: "0 4px 20px rgba(26, 122, 76, 0.1)",
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1A7A4C, #2ECC71)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "18px",
                color: "#ffffff",
                flexShrink: 0
              },
              children: guide.avatar
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--font-mono)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: "0 0 4px"
                },
                children: guide.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1A7A4C"
                },
                children: guide.title
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                background: "#E8F5EE",
                color: "#1A7A4C",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "4px 12px",
                borderRadius: "var(--radius-full)"
              },
              children: guide.experience
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                background: "#f8faf9",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 500,
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                border: "1px solid #e8f5ee"
              },
              children: guide.specialty
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              margin: 0
            },
            children: guide.bio
          }
        )
      ]
    }
  );
}
function CertCard({
  icon,
  title,
  subtitle
}) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: "var(--bg-primary)",
        borderRadius: "var(--radius-lg)",
        padding: "20px 24px",
        boxShadow: "0 2px 12px rgba(26, 122, 76, 0.08)",
        border: "1px solid #e8f5ee",
        opacity: 0
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "28px", flexShrink: 0 }, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "2px"
              },
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--text-muted)"
              },
              children: subtitle
            }
          )
        ] })
      ]
    }
  );
}
function About() {
  const [_openFaq] = reactExports.useState(null);
  reactExports.useEffect(() => {
    document.title = "About Global Trek | Where Every Trail Tells a Story";
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#FFFFFF", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #145C38 0%, #1A7A4C 50%, #2ECC71 100%)",
          overflow: "hidden",
          paddingTop: "80px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "-40px",
                left: "-40px",
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                pointerEvents: "none"
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
                padding: "60px 24px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "16px"
                    },
                    children: "Dehradun, Uttarakhand — Est. 2010"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    style: {
                      fontFamily: "var(--font-display, 'Playfair Display', serif)",
                      fontStyle: "italic",
                      fontWeight: 700,
                      fontSize: "clamp(40px, 7vw, 76px)",
                      color: "#ffffff",
                      lineHeight: 1.1,
                      margin: "0 0 20px",
                      textShadow: "0 2px 16px rgba(0,0,0,0.3)"
                    },
                    children: "About Global Trek"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontSize: "clamp(16px, 2vw, 20px)",
                      color: "rgba(255,255,255,0.88)",
                      maxWidth: "540px",
                      margin: "0 auto",
                      lineHeight: 1.6
                    },
                    children: "Where Every Trail Tells a Story"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.stats.section",
        style: {
          background: "#145C38",
          padding: "0"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 clamp(16px, 4vw, 48px)",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)"
            },
            children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { value: s.value, label: s.label }, s.label))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.story.section",
        style: {
          background: "#FFFFFF",
          padding: "80px clamp(16px, 4vw, 48px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
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
                      fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#1A7A4C",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "12px"
                    },
                    children: "OUR STORY"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display, 'Playfair Display', serif)",
                      fontStyle: "italic",
                      fontWeight: 700,
                      fontSize: "clamp(28px, 4vw, 44px)",
                      color: "#1A1A1A",
                      lineHeight: 1.2,
                      margin: "0 0 24px"
                    },
                    children: "Born in the Heart of the Himalayas"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontSize: "16px",
                      lineHeight: 1.85,
                      color: "#4A4A4A",
                      marginBottom: "16px"
                    },
                    children: "Global Trek was founded in Dehradun, Uttarakhand — the gateway to the Himalayas — by a team of passionate mountaineers who believed that the mountains of northern India deserved to be shared with the world. For over 15 years, we have been guiding trekkers, pilgrims, families, and adventurers through the most spectacular trails in Uttarakhand and Himachal Pradesh."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontSize: "16px",
                      lineHeight: 1.85,
                      color: "#4A4A4A",
                      marginBottom: "16px"
                    },
                    children: "What started as a small group of local guides taking trekkers to Kedarkantha and Har Ki Dun has grown into Uttarakhand's most trusted trekking operator — with over 12,000 happy trekkers from across India and around the world completing journeys with us."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontSize: "16px",
                      lineHeight: 1.85,
                      color: "#4A4A4A"
                    },
                    children: "Our mission is simple: make the Himalayas accessible to everyone — safely, sustainably, and with the deep reverence these sacred mountains deserve. Every trail we walk, every campfire we light, every summit we reach is a story waiting to be told."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(26,122,76,0.2)",
                    border: "4px solid #1A7A4C",
                    aspectRatio: "4/3",
                    background: "linear-gradient(160deg, #145C38 0%, #2ECC71 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "12px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "72px" }, children: "🏔️" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-display, 'Playfair Display', serif)",
                          fontStyle: "italic",
                          fontSize: "22px",
                          color: "#ffffff",
                          textAlign: "center",
                          padding: "0 24px"
                        },
                        children: "15 Years in the Himalayas"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.values.section",
        style: {
          background: "#F8FAF9",
          padding: "80px clamp(16px, 4vw, 48px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "48px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "12px"
                },
                children: "WHAT WE STAND FOR"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                  margin: 0
                },
                children: "Our Core Values"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "28px"
              },
              children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ValueCard,
                {
                  icon: v.icon,
                  title: v.title,
                  desc: v.desc
                },
                v.title
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.guides.section",
        style: {
          background: "#FFFFFF",
          padding: "80px clamp(16px, 4vw, 48px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "48px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "12px"
                },
                children: "THE PEOPLE BEHIND EVERY TREK"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                  margin: 0
                },
                children: "Meet Our Expert Guides"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px"
              },
              children: guides.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(GuideCard, { guide: g, index: i }, g.name))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.certifications.section",
        style: {
          background: "#F8FAF9",
          padding: "64px clamp(16px, 4vw, 48px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "40px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "12px"
                },
                children: "ACCREDITATIONS & TRUST"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1A1A1A",
                  margin: 0
                },
                children: "Why Trekkers Trust Us"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px"
              },
              children: certifications.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                CertCard,
                {
                  icon: c.icon,
                  title: c.title,
                  subtitle: c.subtitle
                },
                c.title
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.cta.section",
        style: {
          background: "linear-gradient(135deg, #145C38 0%, #1A7A4C 100%)",
          padding: "80px clamp(16px, 4vw, 48px)",
          textAlign: "center"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "640px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              style: {
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "16px"
              },
              children: "Ready to Start Your Himalayan Journey?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                fontSize: "18px",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "36px",
                lineHeight: 1.6
              },
              children: "Join 12,000+ adventurers who've discovered the magic of the Himalayas with Global Trek."
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
                  "a",
                  {
                    href: "/treks",
                    "data-ocid": "about.cta.primary_button",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#F4A623",
                      color: "#ffffff",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontWeight: 700,
                      fontSize: "16px",
                      padding: "14px 32px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      boxShadow: "0 4px 16px rgba(244,166,35,0.4)",
                      transition: "transform 150ms ease, box-shadow 150ms ease"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(244,166,35,0.5)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(244,166,35,0.4)";
                    },
                    children: "Book a Trek →"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "/contact",
                    "data-ocid": "about.cta.secondary_button",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "transparent",
                      color: "#ffffff",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontWeight: 600,
                      fontSize: "16px",
                      padding: "14px 32px",
                      borderRadius: "8px",
                      border: "2px solid rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "border-color 150ms ease, background 150ms ease"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.borderColor = "#ffffff";
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                      e.currentTarget.style.background = "transparent";
                    },
                    children: "Contact Us"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  About as default
};
