import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { u as useActor, c as createActor } from "./backend-BbHTL8oc.js";
import { S as SectionHeading } from "./SectionHeading-CrfcNCMw.js";
import "./useScrollAnimation-CjWvoXuE.js";
const whyChooseItems = [
  {
    icon: "📅",
    title: "Your Dates",
    desc: "Depart when it suits you — any day of the year, no fixed-departure constraints."
  },
  {
    icon: "👥",
    title: "Your Group Size",
    desc: "Solo or sixty. We scale every aspect of the trip to your group perfectly."
  },
  {
    icon: "🗺️",
    title: "Your Route",
    desc: "Dream of a specific valley, pass, or peak? We design around your vision."
  },
  {
    icon: "💰",
    title: "Your Budget",
    desc: "Transparent pricing with no hidden costs. We optimise value at every tier."
  }
];
const whoBooks = [
  {
    icon: "💑",
    title: "Couples & Honeymooners",
    desc: "Private camps, candlelit dinners under stars, intimate routes away from crowds."
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Groups",
    desc: "Kid-friendly pacing, experienced family guides, comfortable tented camps."
  },
  {
    icon: "🏢",
    title: "Corporate Teams",
    desc: "Team-building expeditions that forge bonds stronger than any boardroom."
  },
  {
    icon: "🧗",
    title: "Solo Adventurers",
    desc: "One-on-one with our best guides. Your pace, your goals, your story."
  }
];
const exampleTrips = [
  {
    title: "Family Trek in Kumaon",
    details: "8 Days · 3 Adults + 2 Kids · Beginner Friendly",
    desc: "A gentle trek through oak and rhododendron forests to Pindari Glacier base, with child-appropriate pacing and camp games each evening.",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80"
  },
  {
    title: "Honeymoon in Sikkim",
    details: "10 Days · Couple · Private Tent Camp",
    desc: "A romantic traverse through Singalila Ridge with a private camp overlooking Kangchenjunga, rose-petal turndowns and chef-prepared dinners.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
  },
  {
    title: "Corporate Expedition: Bandarpunch Base Camp",
    details: "7 Days · 20 People · Team-Building",
    desc: "A high-altitude challenge that strips away hierarchy and builds real trust. Includes leadership workshops at 5,500m with a summit push option.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
  }
];
const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  destination: "",
  numberOfPeople: "1-2",
  preferredDuration: "",
  budgetRange: "₹50K–₹1L",
  preferredDates: "",
  activityType: "Trek",
  specialRequirements: ""
};
function TailorMade() {
  reactExports.useEffect(() => {
    document.title = "Custom Trek Packages | Global Trek";
  }, []);
  const { actor } = useActor(createActor);
  const [form, setForm] = reactExports.useState(initialForm);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);
    setError("");
    try {
      if (actor) {
        await actor.submitTailorMade(
          form.name,
          form.email,
          form.phone || null,
          form.country || null,
          form.destination || null,
          form.numberOfPeople,
          form.preferredDuration || null,
          form.budgetRange,
          form.preferredDates || null,
          form.activityType,
          form.specialRequirements || null
        );
      }
      setSuccess(true);
      setForm(initialForm);
    } catch {
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }
  const inputStyle = {
    background: "var(--bg-elevated)",
    border: "1px solid var(--border-default)",
    color: "var(--text-primary)",
    borderRadius: "var(--radius-md)",
    height: "48px",
    padding: "0 16px",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 150ms ease"
  };
  const labelStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "13px",
    fontWeight: 500,
    color: "var(--text-secondary)",
    marginBottom: "6px",
    display: "block"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      style: {
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            "data-ocid": "tailor_made.hero_section",
            style: {
              position: "relative",
              height: "50vh",
              minHeight: "400px",
              backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              display: "flex",
              alignItems: "flex-end"
            },
            children: [
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
                    zIndex: 1,
                    padding: "0 clamp(20px,5vw,80px) 56px",
                    maxWidth: "900px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          letterSpacing: "0.2em",
                          color: "var(--accent-blue)",
                          textTransform: "uppercase",
                          marginBottom: "12px"
                        },
                        children: "BESPOKE EXPERIENCES"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h1",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                          fontSize: "clamp(42px,7vw,80px)",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.05,
                          margin: "0 0 16px"
                        },
                        children: "Your Adventure. Your Way."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "18px",
                          color: "var(--text-secondary)",
                          maxWidth: "560px"
                        },
                        children: "Private expeditions crafted exclusively around your dates, your group, and your dream."
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
            style: {
              background: "var(--bg-primary)",
              padding: "80px clamp(20px,4vw,48px)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "var(--container-max)", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "WHY TAILOR-MADE",
                  heading: "Built Around You",
                  subtext: "Every detail designed to match exactly what you envision."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: "24px"
                  },
                  children: whyChooseItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-lg)",
                        padding: "28px 24px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "32px", marginBottom: "12px" }, children: item.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontWeight: 700,
                              fontSize: "16px",
                              color: "var(--text-primary)",
                              marginBottom: "8px"
                            },
                            children: item.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              color: "var(--text-secondary)",
                              lineHeight: 1.65
                            },
                            children: item.desc
                          }
                        )
                      ]
                    },
                    item.title
                  ))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              background: "var(--bg-void)",
              padding: "80px clamp(20px,4vw,48px)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "var(--container-max)", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "WHO BOOKS PRIVATE TRIPS",
                  heading: "Perfect for Every Explorer"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "20px"
                  },
                  children: whoBooks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-lg)",
                        padding: "24px",
                        textAlign: "center"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "36px", marginBottom: "12px" }, children: item.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontWeight: 600,
                              fontSize: "15px",
                              color: "var(--text-primary)",
                              marginBottom: "8px"
                            },
                            children: item.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              color: "var(--text-secondary)",
                              lineHeight: 1.65
                            },
                            children: item.desc
                          }
                        )
                      ]
                    },
                    item.title
                  ))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              background: "var(--bg-surface)",
              padding: "80px clamp(20px,4vw,48px)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "var(--container-max)", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "HOW IT WORKS",
                  heading: "Three Steps to Your Dream Trip"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0",
                    justifyContent: "center",
                    position: "relative",
                    marginTop: "40px"
                  },
                  children: [
                    {
                      num: "1",
                      title: "Tell Us Your Dream",
                      desc: "Fill in our planner form with your destination, dates, group size, and any special wishes."
                    },
                    {
                      num: "2",
                      title: "We Design Your Itinerary",
                      desc: "Our expert guides craft a detailed day-by-day plan. We refine until it's perfect."
                    },
                    {
                      num: "3",
                      title: "We Execute Flawlessly",
                      desc: "Our on-ground team handles every logistic so you can focus entirely on the experience."
                    }
                  ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        flex: "1 1 240px",
                        minWidth: "220px",
                        maxWidth: "340px",
                        textAlign: "center",
                        padding: "0 24px",
                        position: "relative"
                      },
                      children: [
                        i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              top: "28px",
                              right: "-1px",
                              width: "48px",
                              height: "2px",
                              background: "linear-gradient(to right, var(--accent-blue), var(--border-subtle))",
                              zIndex: 0,
                              display: "block"
                            },
                            className: "step-connector"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: "56px",
                              height: "56px",
                              borderRadius: "50%",
                              background: "var(--accent-blue)",
                              color: "var(--text-inverse)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "20px",
                              fontWeight: 700,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 20px",
                              position: "relative",
                              zIndex: 1
                            },
                            children: step.num
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontWeight: 600,
                              fontSize: "16px",
                              color: "var(--text-primary)",
                              marginBottom: "10px"
                            },
                            children: step.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              color: "var(--text-secondary)",
                              lineHeight: 1.65
                            },
                            children: step.desc
                          }
                        )
                      ]
                    },
                    step.num
                  ))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              background: "var(--bg-primary)",
              padding: "80px clamp(20px,4vw,48px)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "var(--container-max)", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "INSPIRATION",
                  heading: "Example Custom Adventures",
                  subtext: "Real trips we've crafted for real adventurers."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "24px"
                  },
                  children: exampleTrips.map((trip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "200px", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: trip.img,
                            alt: trip.title,
                            style: {
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 400ms ease"
                            },
                            onMouseEnter: (e) => {
                              e.currentTarget.style.transform = "scale(1.05)";
                            },
                            onMouseLeave: (e) => {
                              e.currentTarget.style.transform = "scale(1)";
                            }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: "11px",
                                color: "var(--accent-blue)",
                                letterSpacing: "0.05em",
                                marginBottom: "8px"
                              },
                              children: trip.details
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              style: {
                                fontFamily: "var(--font-display)",
                                fontStyle: "italic",
                                fontWeight: 600,
                                fontSize: "20px",
                                color: "var(--text-primary)",
                                marginBottom: "10px",
                                lineHeight: 1.2
                              },
                              children: trip.title
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                color: "var(--text-secondary)",
                                lineHeight: 1.65
                              },
                              children: trip.desc
                            }
                          )
                        ] })
                      ]
                    },
                    trip.title
                  ))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            "data-ocid": "tailor_made.form_section",
            style: {
              background: "var(--bg-void)",
              padding: "80px clamp(20px,4vw,48px)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "768px", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  eyebrow: "PLAN YOUR TRIP",
                  heading: "Tell Us Your Dream",
                  subtext: "Fill in the details below and we'll get back to you within 48 hours."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-xl)",
                    padding: "clamp(24px,4vw,48px)",
                    marginTop: "40px"
                  },
                  children: success ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": "tailor_made.success_state",
                      style: { textAlign: "center", padding: "40px 0" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "48px", marginBottom: "16px" }, children: "🏔️" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            style: {
                              fontFamily: "var(--font-display)",
                              fontStyle: "italic",
                              fontSize: "28px",
                              color: "var(--accent-blue)",
                              marginBottom: "12px"
                            },
                            children: "Request Received!"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "16px",
                              color: "var(--text-secondary)",
                              lineHeight: 1.7
                            },
                            children: "Your request has been received. We'll be in touch within 48 hours with a personalised itinerary proposal."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "tailor_made.reset_button",
                            onClick: () => setSuccess(false),
                            style: {
                              marginTop: "24px",
                              background: "var(--accent-blue)",
                              color: "var(--text-inverse)",
                              border: "none",
                              borderRadius: "var(--btn-radius)",
                              padding: "0 28px",
                              height: "44px",
                              fontFamily: "var(--font-body)",
                              fontSize: "14px",
                              fontWeight: 600,
                              cursor: "pointer"
                            },
                            children: "Submit Another Request"
                          }
                        )
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "20px"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-name", children: "Full Name *" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                "data-ocid": "tailor_made.name_input",
                                id: "tm-name",
                                name: "name",
                                type: "text",
                                required: true,
                                value: form.name,
                                onChange: handleChange,
                                placeholder: "Your name",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-email", children: "Email Address *" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                "data-ocid": "tailor_made.email_input",
                                id: "tm-email",
                                name: "email",
                                type: "email",
                                required: true,
                                value: form.email,
                                onChange: handleChange,
                                placeholder: "your@email.com",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-phone", children: "Phone Number" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                "data-ocid": "tailor_made.phone_input",
                                id: "tm-phone",
                                name: "phone",
                                type: "text",
                                value: form.phone,
                                onChange: handleChange,
                                placeholder: "+91 or international",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-country", children: "Country" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                "data-ocid": "tailor_made.country_input",
                                id: "tm-country",
                                name: "country",
                                type: "text",
                                value: form.country,
                                onChange: handleChange,
                                placeholder: "Your country",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-destination", children: "Destination / Region" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                "data-ocid": "tailor_made.destination_input",
                                id: "tm-destination",
                                name: "destination",
                                type: "text",
                                value: form.destination,
                                onChange: handleChange,
                                placeholder: "e.g. Ladakh, Nepal",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-people", children: "Number of People" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "select",
                              {
                                "data-ocid": "tailor_made.people_select",
                                id: "tm-people",
                                name: "numberOfPeople",
                                value: form.numberOfPeople,
                                onChange: handleChange,
                                style: { ...inputStyle, cursor: "pointer" },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1-2", children: "1–2 People" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3-5", children: "3–5 People" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6-10", children: "6–10 People" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10+", children: "10+ People" })
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-duration", children: "Preferred Duration" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                "data-ocid": "tailor_made.duration_input",
                                id: "tm-duration",
                                name: "preferredDuration",
                                type: "text",
                                value: form.preferredDuration,
                                onChange: handleChange,
                                placeholder: "e.g. 10–14 days",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-budget", children: "Budget Range" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "select",
                              {
                                "data-ocid": "tailor_made.budget_select",
                                id: "tm-budget",
                                name: "budgetRange",
                                value: form.budgetRange,
                                onChange: handleChange,
                                style: { ...inputStyle, cursor: "pointer" },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "₹50K–₹1L", children: "₹50,000 – ₹1,00,000" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "₹1L–₹2L", children: "₹1,00,000 – ₹2,00,000" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "₹2L–₹5L", children: "₹2,00,000 – ₹5,00,000" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "₹5L+", children: "₹5,00,000+" })
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-dates", children: "Preferred Dates" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                "data-ocid": "tailor_made.dates_input",
                                id: "tm-dates",
                                name: "preferredDates",
                                type: "text",
                                value: form.preferredDates,
                                onChange: handleChange,
                                placeholder: "e.g. June 2026",
                                style: inputStyle
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-activity", children: "Activity Type" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "select",
                              {
                                "data-ocid": "tailor_made.activity_select",
                                id: "tm-activity",
                                name: "activityType",
                                value: form.activityType,
                                onChange: handleChange,
                                style: { ...inputStyle, cursor: "pointer" },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Trek", children: "Trek" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Climb", children: "Climb" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Mix", children: "Mix (Trek + Climb)" })
                                ]
                              }
                            )
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "20px" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "tm-special", children: "Special Requirements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          "data-ocid": "tailor_made.special_textarea",
                          id: "tm-special",
                          name: "specialRequirements",
                          value: form.specialRequirements,
                          onChange: handleChange,
                          placeholder: "Dietary needs, fitness level, specific objectives, any other details…",
                          rows: 4,
                          style: {
                            ...inputStyle,
                            height: "auto",
                            padding: "12px 16px",
                            resize: "vertical"
                          }
                        }
                      )
                    ] }),
                    error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          color: "var(--error)",
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          marginTop: "12px"
                        },
                        children: error
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        "data-ocid": "tailor_made.submit_button",
                        type: "submit",
                        disabled: submitting,
                        style: {
                          marginTop: "24px",
                          width: "100%",
                          height: "52px",
                          background: submitting ? "var(--border-default)" : "var(--accent-blue)",
                          color: "var(--text-inverse)",
                          border: "none",
                          borderRadius: "var(--btn-radius)",
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          cursor: submitting ? "not-allowed" : "pointer",
                          transition: "background 150ms ease"
                        },
                        children: submitting ? "Sending…" : "Submit Request →"
                      }
                    )
                  ] })
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
export {
  TailorMade as default
};
