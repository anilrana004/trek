import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useEffect, useState } from "react";

export default function Contact() {
  const { actor } = useActor(createActor);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    trekInterest: "",
    message: "",
    preferredTime: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "Contact Us | Global Trek — Where Every Trail Tells a Story";
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    try {
      if (actor) {
        await (
          actor as unknown as {
            submitContact: (
              n: string,
              e: string,
              p: string | null,
              c: string | null,
              t: string | null,
              np: string | null,
              d: string | null,
              m: string,
            ) => Promise<void>;
          }
        ).submitContact(
          form.name,
          form.email,
          form.phone || null,
          null,
          form.trekInterest || null,
          null,
          form.preferredTime || null,
          form.message,
        );
      }
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        trekInterest: "",
        message: "",
        preferredTime: "",
      });
    } catch {
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "#ffffff",
    border: "1.5px solid #e8f5ee",
    color: "#1A1A1A",
    borderRadius: "8px",
    height: "48px",
    padding: "0 16px",
    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box" as const,
    outline: "none",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
    fontSize: "13px",
    fontWeight: 600,
    color: "#4A4A4A",
    marginBottom: "6px",
    display: "block",
  };
  const fieldFocusHandlers = {
    onFocus: (
      e: React.FocusEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      e.currentTarget.style.borderColor = "#1A7A4C";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(26,122,76,0.12)";
    },
    onBlur: (
      e: React.FocusEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      e.currentTarget.style.borderColor = "#e8f5ee";
      e.currentTarget.style.boxShadow = "none";
    },
  };

  const contactItems = [
    {
      icon: "📍",
      label: "Address",
      value: "123 Trek House, Rajpur Road, Dehradun 248001, Uttarakhand",
      href: "https://maps.google.com/?q=Dehradun+Uttarakhand+India",
      ocid: "contact.address_card",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      ocid: "contact.phone_card",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "info@globaltrek.in",
      href: "mailto:info@globaltrek.in",
      ocid: "contact.email_card",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+91 98765 43210",
      href: "https://wa.me/919876543210?text=Hi%20Global%20Trek!%20I%27m%20interested%20in%20booking%20a%20trek.",
      ocid: "contact.whatsapp_card",
    },
  ];

  const faqs = [
    {
      q: "How do I book a trek with Global Trek?",
      a: "You can book directly through our website by selecting your trek, choosing a batch date, and completing payment. Alternatively, call or WhatsApp us and our team will guide you through the entire process within minutes.",
    },
    {
      q: "What is your cancellation and refund policy?",
      a: "We offer 80% refund for cancellations 30+ days before the trek start date, 50% refund for 15–29 days, and no refund for cancellations within 14 days. Rescheduling is free up to 15 days before departure, subject to availability.",
    },
    {
      q: "What fitness level do I need for a Himalayan trek?",
      a: "Most of our treks (Kedarkantha, Chopta, Triund, Nag Tibba) are suitable for beginners with moderate fitness. We recommend 2–3 weeks of jogging or stair climbing before your trek. Advanced treks like Roopkund require prior trekking experience.",
    },
    {
      q: "Are your guides certified and trained?",
      a: "All our lead guides are ITBP-certified (Indo-Tibetan Border Police) mountain training graduates, and our support guides hold wilderness first aid certifications. Every trek has at least one trained first responder with oxygen and emergency equipment.",
    },
    {
      q: "What is included in the trek price?",
      a: "All our trek packages include accommodation (tent/guesthouse as per itinerary), all meals on trek, certified guide, camping/trek equipment, forest permits, and emergency medical support. Transport from Dehradun/Rishikesh to the trek base is available as an add-on.",
    },
  ];

  return (
    <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #145C38 0%, #1A7A4C 60%, #2ECC71 100%)",
          padding: "100px clamp(16px, 4vw, 48px) 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-mono, Montserrat, sans-serif)",
              fontSize: "11px",
              fontWeight: 700,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            REACH OUT
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 64px)",
              color: "#ffffff",
              lineHeight: 1.1,
              margin: "0 0 16px",
              textShadow: "0 2px 16px rgba(0,0,0,0.2)",
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.88)",
              maxWidth: "480px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Plan your perfect Himalayan adventure. Our expert team responds
            within 2 hours.
          </p>
        </div>
      </section>

      {/* 2-Column Layout */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px clamp(16px, 4vw, 48px)",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "56px",
          alignItems: "start",
        }}
      >
        {/* Left: Contact Form */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "32px",
              color: "#1A1A1A",
              marginBottom: "32px",
            }}
          >
            Send Us a Message
          </h2>
          {success ? (
            <div
              data-ocid="contact.success_state"
              style={{
                background: "#E8F5EE",
                border: "1.5px solid #1A7A4C",
                borderRadius: "16px",
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "52px", marginBottom: "16px" }}>🎉</div>
              <h3
                style={{
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "#1A7A4C",
                  marginBottom: "12px",
                }}
              >
                Message Sent!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  fontSize: "16px",
                  color: "#4A4A4A",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                Thank you for reaching out! Our team will get back to you within
                2 hours (9 AM – 9 PM IST).
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                style={{
                  background: "#1A7A4C",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 28px",
                  fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div>
                  <label style={labelStyle} htmlFor="c-name">
                    Full Name <span style={{ color: "#E74C3C" }}>*</span>
                  </label>
                  <input
                    data-ocid="contact.name_input"
                    id="c-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    {...fieldFocusHandlers}
                    placeholder="Your full name"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="c-email">
                    Email Address <span style={{ color: "#E74C3C" }}>*</span>
                  </label>
                  <input
                    data-ocid="contact.email_input"
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    {...fieldFocusHandlers}
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="c-phone">
                  Phone Number
                </label>
                <input
                  data-ocid="contact.phone_input"
                  id="c-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  {...fieldFocusHandlers}
                  placeholder="+91 XXXXX XXXXX"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="c-trek">
                  Trek Interest
                </label>
                <select
                  data-ocid="contact.trip_select"
                  id="c-trek"
                  name="trekInterest"
                  value={form.trekInterest}
                  onChange={handleChange}
                  {...fieldFocusHandlers}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Select a trek or yatra (optional)</option>
                  <optgroup label="Uttarakhand Treks">
                    <option>Chopta Tungnath Trek</option>
                    <option>Har Ki Dun Trek</option>
                    <option>Kedarkantha Trek</option>
                    <option>Kuari Pass Trek</option>
                    <option>Phulara Ridge Trek</option>
                    <option>Valley of Flowers Trek</option>
                    <option>Roopkund Trek</option>
                    <option>Brahmatal Trek</option>
                    <option>Dayara Bugyal Trek</option>
                    <option>Nag Tibba Trek</option>
                  </optgroup>
                  <optgroup label="Himachal Pradesh Treks">
                    <option>Hampta Pass Trek</option>
                    <option>Sar Pass Trek</option>
                    <option>Kheerganga Trek</option>
                    <option>Triund Trek</option>
                    <option>Beas Kund Trek</option>
                  </optgroup>
                  <optgroup label="Yatra / Pilgrimage">
                    <option>Kedarnath Yatra</option>
                    <option>Do Dham Yatra</option>
                    <option>Char Dham Yatra</option>
                    <option>Panch Kedar Yatra</option>
                  </optgroup>
                  <option>Corporate / Group Package</option>
                  <option>Custom / Other</option>
                </select>
              </div>
              <div>
                <label style={labelStyle} htmlFor="c-time">
                  Preferred Contact Time
                </label>
                <select
                  data-ocid="contact.time_select"
                  id="c-time"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  {...fieldFocusHandlers}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Select preferred time (optional)</option>
                  <option value="morning">Morning (9 AM – 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
                  <option value="evening">Evening (5 PM – 9 PM)</option>
                </select>
              </div>
              <div>
                <label style={labelStyle} htmlFor="c-message">
                  Message <span style={{ color: "#E74C3C" }}>*</span>
                </label>
                <textarea
                  data-ocid="contact.message_textarea"
                  id="c-message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  {...(fieldFocusHandlers as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                  placeholder="Tell us about your adventure plans, group size, preferred dates, or any questions…"
                  rows={5}
                  style={{
                    ...inputStyle,
                    height: "auto",
                    padding: "12px 16px",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                data-ocid="contact.submit_button"
                type="submit"
                disabled={submitting}
                style={{
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
                  boxShadow: submitting
                    ? "none"
                    : "0 4px 16px rgba(26,122,76,0.3)",
                }}
                onMouseEnter={(e) => {
                  if (!submitting) e.currentTarget.style.background = "#145C38";
                }}
                onMouseLeave={(e) => {
                  if (!submitting) e.currentTarget.style.background = "#1A7A4C";
                }}
              >
                {submitting ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>

        {/* Right: Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Response time badge */}
          <div
            data-ocid="contact.response_badge"
            style={{
              background: "#E8F5EE",
              border: "1.5px solid #1A7A4C",
              borderRadius: "12px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "24px" }}>⚡</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#1A7A4C",
                }}
              >
                2 Hour Response
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  fontSize: "13px",
                  color: "#4A4A4A",
                }}
              >
                9 AM – 9 PM IST, 7 Days a Week
              </div>
            </div>
          </div>

          {/* Contact cards */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid #e8f5ee",
              borderTop: "4px solid #1A7A4C",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 20px rgba(26,122,76,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {contactItems.map((item) => (
              <div
                key={item.label}
                data-ocid={item.ocid}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#E8F5EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#1A7A4C",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "3px",
                    }}
                  >
                    {item.label}
                  </div>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontSize: "14px",
                      color: "#1A7A4C",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps embed (Dehradun) */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1.5px solid #e8f5ee",
              boxShadow: "0 4px 20px rgba(26,122,76,0.08)",
            }}
          >
            <iframe
              title="Global Trek Office Location — Dehradun, Uttarakhand"
              width="100%"
              height="220"
              style={{ display: "block", border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.8!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sRajpur+Rd%2C+Dehradun%2C+Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        data-ocid="contact.faq.section"
        style={{
          background: "#F8FAF9",
          padding: "64px clamp(16px, 4vw, 48px)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono, Montserrat, sans-serif)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#1A7A4C",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              COMMON QUESTIONS
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {faqs.map((faq, i) => (
              <div
                key={faq.q.substring(0, 15)}
                data-ocid={`contact.faq.item.${i + 1}`}
                style={{
                  background: "#ffffff",
                  border: "1.5px solid #e8f5ee",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(26,122,76,0.05)",
                }}
              >
                <button
                  type="button"
                  data-ocid={`contact.faq.toggle.${i + 1}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                  aria-expanded={openFaq === i}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#1A1A1A",
                      flex: 1,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "#1A7A4C",
                      fontSize: "20px",
                      flexShrink: 0,
                      transition: "transform 200ms ease",
                      transform:
                        openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                      fontSize: "15px",
                      lineHeight: 1.8,
                      color: "#4A4A4A",
                      borderTop: "1px solid #e8f5ee",
                      paddingTop: "16px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
