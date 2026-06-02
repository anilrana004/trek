import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { u as useActor, c as createActor } from "./backend-BbHTL8oc.js";
function Contact() {
  const { actor } = useActor(createActor);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    trekInterest: "",
    message: "",
    preferredTime: ""
  });
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  reactExports.useEffect(() => {
    document.title = "Contact Us | Global Trek — Where Every Trail Tells a Story";
  }, []);
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitContact(
          form.name,
          form.email,
          form.phone || null,
          null,
          form.trekInterest || null,
          null,
          form.preferredTime || null,
          form.message
        );
      }
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        trekInterest: "",
        message: "",
        preferredTime: ""
      });
    } catch {
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }
  const inputStyle = {
    background: "#ffffff",
    border: "1.5px solid #e8f5ee",
    color: "#1A1A1A",
    borderRadius: "8px",
    height: "48px",
    padding: "0 16px",
    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 150ms ease, box-shadow 150ms ease"
  };
  const labelStyle = {
    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
    fontSize: "13px",
    fontWeight: 600,
    color: "#4A4A4A",
    marginBottom: "6px",
    display: "block"
  };
  const fieldFocusHandlers = {
    onFocus: (e) => {
      e.currentTarget.style.borderColor = "#1A7A4C";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(26,122,76,0.12)";
    },
    onBlur: (e) => {
      e.currentTarget.style.borderColor = "#e8f5ee";
      e.currentTarget.style.boxShadow = "none";
    }
  };
  const contactItems = [
    {
      icon: "📍",
      label: "Address",
      value: "123 Trek House, Rajpur Road, Dehradun 248001, Uttarakhand",
      href: "https://maps.google.com/?q=Dehradun+Uttarakhand+India",
      ocid: "contact.address_card"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      ocid: "contact.phone_card"
    },
    {
      icon: "✉️",
      label: "Email",
      value: "info@globaltrek.in",
      href: "mailto:info@globaltrek.in",
      ocid: "contact.email_card"
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+91 98765 43210",
      href: "https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I%27m%20interested%20in%20booking%20a%20trek.",
      ocid: "contact.whatsapp_card"
    }
  ];
  const faqs = [
    {
      q: "How do I book a trek with Global Trek?",
      a: "You can book directly through our website by selecting your trek, choosing a batch date, and completing payment. Alternatively, call or WhatsApp us and our team will guide you through the entire process within minutes."
    },
    {
      q: "What is your cancellation and refund policy?",
      a: "We offer 80% refund for cancellations 30+ days before the trek start date, 50% refund for 15–29 days, and no refund for cancellations within 14 days. Rescheduling is free up to 15 days before departure, subject to availability."
    },
    {
      q: "What fitness level do I need for a Himalayan trek?",
      a: "Most of our treks (Kedarkantha, Chopta, Triund, Nag Tibba) are suitable for beginners with moderate fitness. We recommend 2–3 weeks of jogging or stair climbing before your trek. Advanced treks like Roopkund require prior trekking experience."
    },
    {
      q: "Are your guides certified and trained?",
      a: "All our lead guides are ITBP-certified (Indo-Tibetan Border Police) mountain training graduates, and our support guides hold wilderness first aid certifications. Every trek has at least one trained first responder with oxygen and emergency equipment."
    },
    {
      q: "What is included in the trek price?",
      a: "All our trek packages include accommodation (tent/guesthouse as per itinerary), all meals on trek, certified guide, camping/trek equipment, forest permits, and emergency medical support. Transport from Dehradun/Rishikesh to the trek base is available as an add-on."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: { background: "#FFFFFF", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        style: {
          background: "linear-gradient(135deg, #145C38 0%, #1A7A4C 60%, #2ECC71 100%)",
          padding: "100px clamp(16px, 4vw, 48px) 64px",
          position: "relative",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
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
                  marginBottom: "12px"
                },
                children: "REACH OUT"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                style: {
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 6vw, 64px)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  margin: "0 0 16px",
                  textShadow: "0 2px 16px rgba(0,0,0,0.2)"
                },
                children: "Get In Touch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.88)",
                  maxWidth: "480px",
                  lineHeight: 1.6,
                  margin: 0
                },
                children: "Plan your perfect Himalayan adventure. Our expert team responds within 2 hours."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        style: {
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px clamp(16px, 4vw, 48px)",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "56px",
          alignItems: "start"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#1A1A1A",
                  marginBottom: "32px"
                },
                children: "Send Us a Message"
              }
            ),
            success ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "contact.success_state",
                style: {
                  background: "#E8F5EE",
                  border: "1.5px solid #1A7A4C",
                  borderRadius: "16px",
                  padding: "48px 32px",
                  textAlign: "center"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "52px", marginBottom: "16px" }, children: "🎉" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      style: {
                        fontFamily: "var(--font-display, 'Playfair Display', serif)",
                        fontStyle: "italic",
                        fontSize: "28px",
                        color: "#1A7A4C",
                        marginBottom: "12px"
                      },
                      children: "Message Sent!"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                        fontSize: "16px",
                        color: "#4A4A4A",
                        lineHeight: 1.7,
                        marginBottom: "24px"
                      },
                      children: "Thank you for reaching out! Our team will get back to you within 2 hours (9 AM – 9 PM IST)."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSuccess(false),
                      style: {
                        background: "#1A7A4C",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px 28px",
                        fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                        fontSize: "15px",
                        fontWeight: 600,
                        cursor: "pointer"
                      },
                      children: "Send Another Message"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                style: { display: "flex", flexDirection: "column", gap: "20px" },
                children: [
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
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: labelStyle, htmlFor: "c-name", children: [
                            "Full Name ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E74C3C" }, children: "*" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              "data-ocid": "contact.name_input",
                              id: "c-name",
                              name: "name",
                              type: "text",
                              required: true,
                              value: form.name,
                              onChange: handleChange,
                              ...fieldFocusHandlers,
                              placeholder: "Your full name",
                              style: inputStyle
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: labelStyle, htmlFor: "c-email", children: [
                            "Email Address ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E74C3C" }, children: "*" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              "data-ocid": "contact.email_input",
                              id: "c-email",
                              name: "email",
                              type: "email",
                              required: true,
                              value: form.email,
                              onChange: handleChange,
                              ...fieldFocusHandlers,
                              placeholder: "your@email.com",
                              style: inputStyle
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "c-phone", children: "Phone Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        "data-ocid": "contact.phone_input",
                        id: "c-phone",
                        name: "phone",
                        type: "tel",
                        value: form.phone,
                        onChange: handleChange,
                        ...fieldFocusHandlers,
                        placeholder: "+91 XXXXX XXXXX",
                        style: inputStyle
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "c-trek", children: "Trek Interest" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        "data-ocid": "contact.trip_select",
                        id: "c-trek",
                        name: "trekInterest",
                        value: form.trekInterest,
                        onChange: handleChange,
                        ...fieldFocusHandlers,
                        style: { ...inputStyle, cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a trek or yatra (optional)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "Uttarakhand Treks", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Chopta Tungnath Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Har Ki Dun Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Kedarkantha Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Kuari Pass Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Phulara Ridge Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Valley of Flowers Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Roopkund Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Brahmatal Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Dayara Bugyal Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Nag Tibba Trek" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "Himachal Pradesh Treks", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Hampta Pass Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sar Pass Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Kheerganga Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Triund Trek" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Beas Kund Trek" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("optgroup", { label: "Yatra / Pilgrimage", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Kedarnath Yatra" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Do Dham Yatra" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Char Dham Yatra" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Panch Kedar Yatra" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Corporate / Group Package" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Custom / Other" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, htmlFor: "c-time", children: "Preferred Contact Time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        "data-ocid": "contact.time_select",
                        id: "c-time",
                        name: "preferredTime",
                        value: form.preferredTime,
                        onChange: handleChange,
                        ...fieldFocusHandlers,
                        style: { ...inputStyle, cursor: "pointer" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select preferred time (optional)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "morning", children: "Morning (9 AM – 12 PM)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "afternoon", children: "Afternoon (12 PM – 5 PM)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "evening", children: "Evening (5 PM – 9 PM)" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: labelStyle, htmlFor: "c-message", children: [
                      "Message ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#E74C3C" }, children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        "data-ocid": "contact.message_textarea",
                        id: "c-message",
                        name: "message",
                        required: true,
                        value: form.message,
                        onChange: handleChange,
                        ...fieldFocusHandlers,
                        placeholder: "Tell us about your adventure plans, group size, preferred dates, or any questions…",
                        rows: 5,
                        style: {
                          ...inputStyle,
                          height: "auto",
                          padding: "12px 16px",
                          resize: "vertical"
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      "data-ocid": "contact.submit_button",
                      type: "submit",
                      disabled: submitting,
                      style: {
                        height: "52px",
                        background: submitting ? "#6c8f7d" : "#1A7A4C",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                        fontSize: "16px",
                        fontWeight: 700,
                        cursor: submitting ? "not-allowed" : "pointer",
                        transition: "background 150ms ease, transform 150ms ease",
                        boxShadow: submitting ? "none" : "0 4px 16px rgba(26,122,76,0.3)"
                      },
                      onMouseEnter: (e) => {
                        if (!submitting) e.currentTarget.style.background = "#145C38";
                      },
                      onMouseLeave: (e) => {
                        if (!submitting) e.currentTarget.style.background = "#1A7A4C";
                      },
                      children: submitting ? "Sending…" : "Send Message →"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "contact.response_badge",
                style: {
                  background: "#E8F5EE",
                  border: "1.5px solid #1A7A4C",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "24px" }, children: "⚡" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                          fontWeight: 700,
                          fontSize: "14px",
                          color: "#1A7A4C"
                        },
                        children: "2 Hour Response"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                          fontSize: "13px",
                          color: "#4A4A4A"
                        },
                        children: "9 AM – 9 PM IST, 7 Days a Week"
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e8f5ee",
                  borderTop: "4px solid #1A7A4C",
                  borderRadius: "12px",
                  padding: "24px",
                  boxShadow: "0 4px 20px rgba(26,122,76,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px"
                },
                children: contactItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": item.ocid,
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            background: "#E8F5EE",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            flexShrink: 0
                          },
                          children: item.icon
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#1A7A4C",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              marginBottom: "3px"
                            },
                            children: item.label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: item.href,
                            target: item.href.startsWith("http") ? "_blank" : void 0,
                            rel: "noopener noreferrer",
                            style: {
                              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                              fontSize: "14px",
                              color: "#1A7A4C",
                              textDecoration: "none",
                              fontWeight: 500
                            },
                            children: item.value
                          }
                        )
                      ] })
                    ]
                  },
                  item.label
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1.5px solid #e8f5ee",
                  boxShadow: "0 4px 20px rgba(26,122,76,0.08)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "iframe",
                  {
                    title: "Global Trek Office Location — Dehradun, Uttarakhand",
                    width: "100%",
                    height: "220",
                    style: { display: "block", border: 0 },
                    loading: "lazy",
                    allowFullScreen: true,
                    referrerPolicy: "no-referrer-when-downgrade",
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.8!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sRajpur+Rd%2C+Dehradun%2C+Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "contact.faq.section",
        style: {
          background: "#F8FAF9",
          padding: "64px clamp(16px, 4vw, 48px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "800px", margin: "0 auto" }, children: [
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
                children: "COMMON QUESTIONS"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "#1A1A1A",
                  margin: 0
                },
                children: "Frequently Asked Questions"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: { display: "flex", flexDirection: "column", gap: "12px" },
              children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `contact.faq.item.${i + 1}`,
                  style: {
                    background: "#ffffff",
                    border: "1.5px solid #e8f5ee",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(26,122,76,0.05)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `contact.faq.toggle.${i + 1}`,
                        onClick: () => setOpenFaq(openFaq === i ? null : i),
                        style: {
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
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
                                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#1A1A1A",
                                flex: 1
                              },
                              children: faq.q
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                color: "#1A7A4C",
                                fontSize: "20px",
                                flexShrink: 0,
                                transition: "transform 200ms ease",
                                transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)"
                              },
                              children: "+"
                            }
                          )
                        ]
                      }
                    ),
                    openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          padding: "0 24px 20px",
                          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                          fontSize: "15px",
                          lineHeight: 1.8,
                          color: "#4A4A4A",
                          borderTop: "1px solid #e8f5ee",
                          paddingTop: "16px"
                        },
                        children: faq.a
                      }
                    )
                  ]
                },
                faq.q.substring(0, 15)
              ))
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Contact as default
};
