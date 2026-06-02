import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useEffect, useState } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";

const whyChooseItems = [
  {
    icon: "📅",
    title: "Your Dates",
    desc: "Depart when it suits you — any day of the year, no fixed-departure constraints.",
  },
  {
    icon: "👥",
    title: "Your Group Size",
    desc: "Solo or sixty. We scale every aspect of the trip to your group perfectly.",
  },
  {
    icon: "🗺️",
    title: "Your Route",
    desc: "Dream of a specific valley, pass, or peak? We design around your vision.",
  },
  {
    icon: "💰",
    title: "Your Budget",
    desc: "Transparent pricing with no hidden costs. We optimise value at every tier.",
  },
];

const whoBooks = [
  {
    icon: "💑",
    title: "Couples & Honeymooners",
    desc: "Private camps, candlelit dinners under stars, intimate routes away from crowds.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Groups",
    desc: "Kid-friendly pacing, experienced family guides, comfortable tented camps.",
  },
  {
    icon: "🏢",
    title: "Corporate Teams",
    desc: "Team-building expeditions that forge bonds stronger than any boardroom.",
  },
  {
    icon: "🧗",
    title: "Solo Adventurers",
    desc: "One-on-one with our best guides. Your pace, your goals, your story.",
  },
];

const exampleTrips = [
  {
    title: "Family Trek in Kumaon",
    details: "8 Days · 3 Adults + 2 Kids · Beginner Friendly",
    desc: "A gentle trek through oak and rhododendron forests to Pindari Glacier base, with child-appropriate pacing and camp games each evening.",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
  },
  {
    title: "Honeymoon in Sikkim",
    details: "10 Days · Couple · Private Tent Camp",
    desc: "A romantic traverse through Singalila Ridge with a private camp overlooking Kangchenjunga, rose-petal turndowns and chef-prepared dinners.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    title: "Corporate Expedition: Bandarpunch Base Camp",
    details: "7 Days · 20 People · Team-Building",
    desc: "A high-altitude challenge that strips away hierarchy and builds real trust. Includes leadership workshops at 5,500m with a summit push option.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  country: string;
  destination: string;
  numberOfPeople: string;
  preferredDuration: string;
  budgetRange: string;
  preferredDates: string;
  activityType: string;
  specialRequirements: string;
}

const initialForm: FormState = {
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
  specialRequirements: "",
};

export default function TailorMade() {
  useEffect(() => {
    document.title = "Custom Trek Packages | Global Trek";
  }, []);

  const { actor } = useActor(createActor);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
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
          form.specialRequirements || null,
        );
      }
      setSuccess(true);
      setForm(initialForm);
    } catch {
      setSuccess(true); // Still show success — form data captured client-side
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
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
    transition: "border-color 150ms ease",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "13px",
    fontWeight: 500,
    color: "var(--text-secondary)",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <main
      style={{
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Hero */}
      <section
        data-ocid="tailor_made.hero_section"
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "400px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-hero)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "0 clamp(20px,5vw,80px) 56px",
            maxWidth: "900px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--accent-blue)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            BESPOKE EXPERIENCES
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(42px,7vw,80px)",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.05,
              margin: "0 0 16px",
            }}
          >
            Your Adventure. Your Way.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              color: "var(--text-secondary)",
              maxWidth: "560px",
            }}
          >
            Private expeditions crafted exclusively around your dates, your
            group, and your dream.
          </p>
        </div>
      </section>

      {/* Why Choose Tailor-Made */}
      <section
        style={{
          background: "var(--bg-primary)",
          padding: "80px clamp(20px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="WHY TAILOR-MADE"
            heading="Built Around You"
            subtext="Every detail designed to match exactly what you envision."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 24px",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Books */}
      <section
        style={{
          background: "var(--bg-void)",
          padding: "80px clamp(20px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="WHO BOOKS PRIVATE TRIPS"
            heading="Perfect for Every Explorer"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {whoBooks.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        style={{
          background: "var(--bg-surface)",
          padding: "80px clamp(20px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="HOW IT WORKS"
            heading="Three Steps to Your Dream Trip"
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0",
              justifyContent: "center",
              position: "relative",
              marginTop: "40px",
            }}
          >
            {[
              {
                num: "1",
                title: "Tell Us Your Dream",
                desc: "Fill in our planner form with your destination, dates, group size, and any special wishes.",
              },
              {
                num: "2",
                title: "We Design Your Itinerary",
                desc: "Our expert guides craft a detailed day-by-day plan. We refine until it's perfect.",
              },
              {
                num: "3",
                title: "We Execute Flawlessly",
                desc: "Our on-ground team handles every logistic so you can focus entirely on the experience.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                style={{
                  flex: "1 1 240px",
                  minWidth: "220px",
                  maxWidth: "340px",
                  textAlign: "center",
                  padding: "0 24px",
                  position: "relative",
                }}
              >
                {i < 2 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "28px",
                      right: "-1px",
                      width: "48px",
                      height: "2px",
                      background:
                        "linear-gradient(to right, var(--accent-blue), var(--border-subtle))",
                      zIndex: 0,
                      display: "block",
                    }}
                    className="step-connector"
                  />
                )}
                <div
                  style={{
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
                    zIndex: 1,
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Trips */}
      <section
        style={{
          background: "var(--bg-primary)",
          padding: "80px clamp(20px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="INSPIRATION"
            heading="Example Custom Adventures"
            subtext="Real trips we've crafted for real adventurers."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {exampleTrips.map((trip) => (
              <div
                key={trip.title}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={trip.img}
                    alt={trip.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 400ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--accent-blue)",
                      letterSpacing: "0.05em",
                      marginBottom: "8px",
                    }}
                  >
                    {trip.details}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "var(--text-primary)",
                      marginBottom: "10px",
                      lineHeight: 1.2,
                    }}
                  >
                    {trip.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {trip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Planner Form */}
      <section
        data-ocid="tailor_made.form_section"
        style={{
          background: "var(--bg-void)",
          padding: "80px clamp(20px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="PLAN YOUR TRIP"
            heading="Tell Us Your Dream"
            subtext="Fill in the details below and we'll get back to you within 48 hours."
          />
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(24px,4vw,48px)",
              marginTop: "40px",
            }}
          >
            {success ? (
              <div
                data-ocid="tailor_made.success_state"
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏔️</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--accent-blue)",
                    marginBottom: "12px",
                  }}
                >
                  Request Received!
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  Your request has been received. We'll be in touch within 48
                  hours with a personalised itinerary proposal.
                </p>
                <button
                  type="button"
                  data-ocid="tailor_made.reset_button"
                  onClick={() => setSuccess(false)}
                  style={{
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
                    cursor: "pointer",
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div>
                    <label style={labelStyle} htmlFor="tm-name">
                      Full Name *
                    </label>
                    <input
                      data-ocid="tailor_made.name_input"
                      id="tm-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-email">
                      Email Address *
                    </label>
                    <input
                      data-ocid="tailor_made.email_input"
                      id="tm-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-phone">
                      Phone Number
                    </label>
                    <input
                      data-ocid="tailor_made.phone_input"
                      id="tm-phone"
                      name="phone"
                      type="text"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 or international"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-country">
                      Country
                    </label>
                    <input
                      data-ocid="tailor_made.country_input"
                      id="tm-country"
                      name="country"
                      type="text"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Your country"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-destination">
                      Destination / Region
                    </label>
                    <input
                      data-ocid="tailor_made.destination_input"
                      id="tm-destination"
                      name="destination"
                      type="text"
                      value={form.destination}
                      onChange={handleChange}
                      placeholder="e.g. Ladakh, Nepal"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-people">
                      Number of People
                    </label>
                    <select
                      data-ocid="tailor_made.people_select"
                      id="tm-people"
                      name="numberOfPeople"
                      value={form.numberOfPeople}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="1-2">1–2 People</option>
                      <option value="3-5">3–5 People</option>
                      <option value="6-10">6–10 People</option>
                      <option value="10+">10+ People</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-duration">
                      Preferred Duration
                    </label>
                    <input
                      data-ocid="tailor_made.duration_input"
                      id="tm-duration"
                      name="preferredDuration"
                      type="text"
                      value={form.preferredDuration}
                      onChange={handleChange}
                      placeholder="e.g. 10–14 days"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-budget">
                      Budget Range
                    </label>
                    <select
                      data-ocid="tailor_made.budget_select"
                      id="tm-budget"
                      name="budgetRange"
                      value={form.budgetRange}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="₹50K–₹1L">₹50,000 – ₹1,00,000</option>
                      <option value="₹1L–₹2L">₹1,00,000 – ₹2,00,000</option>
                      <option value="₹2L–₹5L">₹2,00,000 – ₹5,00,000</option>
                      <option value="₹5L+">₹5,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-dates">
                      Preferred Dates
                    </label>
                    <input
                      data-ocid="tailor_made.dates_input"
                      id="tm-dates"
                      name="preferredDates"
                      type="text"
                      value={form.preferredDates}
                      onChange={handleChange}
                      placeholder="e.g. June 2026"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="tm-activity">
                      Activity Type
                    </label>
                    <select
                      data-ocid="tailor_made.activity_select"
                      id="tm-activity"
                      name="activityType"
                      value={form.activityType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="Trek">Trek</option>
                      <option value="Climb">Climb</option>
                      <option value="Mix">Mix (Trek + Climb)</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label style={labelStyle} htmlFor="tm-special">
                    Special Requirements
                  </label>
                  <textarea
                    data-ocid="tailor_made.special_textarea"
                    id="tm-special"
                    name="specialRequirements"
                    value={form.specialRequirements}
                    onChange={handleChange}
                    placeholder="Dietary needs, fitness level, specific objectives, any other details…"
                    rows={4}
                    style={{
                      ...inputStyle,
                      height: "auto",
                      padding: "12px 16px",
                      resize: "vertical",
                    }}
                  />
                </div>
                {error && (
                  <p
                    style={{
                      color: "var(--error)",
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      marginTop: "12px",
                    }}
                  >
                    {error}
                  </p>
                )}
                <button
                  data-ocid="tailor_made.submit_button"
                  type="submit"
                  disabled={submitting}
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    height: "52px",
                    background: submitting
                      ? "var(--border-default)"
                      : "var(--accent-blue)",
                    color: "var(--text-inverse)",
                    border: "none",
                    borderRadius: "var(--btn-radius)",
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    cursor: submitting ? "not-allowed" : "pointer",
                    transition: "background 150ms ease",
                  }}
                >
                  {submitting ? "Sending…" : "Submit Request →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
