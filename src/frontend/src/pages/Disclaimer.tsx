import { useEffect } from "react";

function Section({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "48px" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "26px",
          color: "var(--text-primary)",
          marginBottom: "16px",
          paddingBottom: "12px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Disclaimer | Global Trek";
  }, []);

  return (
    <main
      style={{
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background: "var(--bg-void)",
          padding: "72px clamp(20px,4vw,48px) 60px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ maxWidth: "var(--container-narrow)", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--accent-blue)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            LEGAL
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(32px,5vw,56px)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Disclaimer
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-muted)",
              marginTop: "12px",
            }}
          >
            Please read this disclaimer carefully before participating in any
            trip.
          </p>
        </div>
      </section>

      {/* Content */}
      <div
        style={{
          maxWidth: "var(--container-narrow)",
          margin: "0 auto",
          padding: "64px clamp(20px,4vw,48px)",
        }}
      >
        <Section title="Adventure Travel Risks">
          <p>
            Participation in adventure travel activities — including but not
            limited to trekking, mountaineering, high-altitude expeditions,
            river crossings, and off-trail travel — involves significant
            inherent risks that cannot be entirely eliminated even with proper
            training, equipment, and experience.
          </p>
          <p style={{ marginTop: "12px" }}>
            These risks include, but are not limited to:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              High Altitude Pulmonary Edema (HAPE) and High Altitude Cerebral
              Edema (HACE)
            </li>
            <li style={{ marginBottom: "8px" }}>Hypothermia and frostbite</li>
            <li style={{ marginBottom: "8px" }}>
              Rockfall, avalanche, and glacier hazards
            </li>
            <li style={{ marginBottom: "8px" }}>Extreme weather conditions</li>
            <li style={{ marginBottom: "8px" }}>
              Injury from falls on difficult terrain
            </li>
            <li>Remote access and limited emergency services</li>
          </ul>
        </Section>

        <Section title="Assumption of Risk">
          <p>
            By booking and participating in any trip operated by White Magic
            Adventure Travel, you voluntarily assume all risks associated with
            the activity, including the risk of death, serious injury, or
            property damage resulting from those risks.
          </p>
          <p style={{ marginTop: "12px" }}>
            You affirm that you are physically and mentally fit for the
            activity, have disclosed any medical conditions that might affect
            your participation, and understand the demands of the trip you are
            undertaking.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            Global Trek, its directors, employees, guides, and contractors shall
            not be liable for any injury, illness, death, loss, damage, or
            expense arising from:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              Acts of God or natural disasters
            </li>
            <li style={{ marginBottom: "8px" }}>
              Government decisions or border closures
            </li>
            <li style={{ marginBottom: "8px" }}>
              Inherent risks of adventure activities acknowledged above
            </li>
            <li style={{ marginBottom: "8px" }}>
              Actions of third parties beyond our control
            </li>
            <li>
              Your failure to follow guide instructions or safety protocols
            </li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            Our maximum liability in any circumstance shall not exceed the total
            trip cost paid by you.
          </p>
        </Section>

        <Section title="Website Accuracy">
          <p>
            The information on this website, including trip descriptions,
            itineraries, difficulty gradings, altitudes, and prices, is provided
            in good faith and updated regularly. However, conditions in the
            mountains change rapidly and actual conditions may differ from
            descriptions. We reserve the right to modify itineraries, routes, or
            accommodations when safety or conditions require it.
          </p>
        </Section>

        <Section title="Insurance Recommendation">
          <p>
            We{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              strongly recommend
            </strong>{" "}
            that all participants obtain comprehensive travel insurance before
            any trip. This insurance should include coverage for emergency
            medical treatment, emergency helicopter rescue and evacuation, and
            repatriation. For trips above 4,000m, this insurance is{" "}
            <strong style={{ color: "var(--text-primary)" }}>mandatory</strong>.
          </p>
          <p style={{ marginTop: "12px" }}>
            Global Trek does not provide insurance. Any costs arising from
            medical emergencies, rescue operations, or evacuation are the sole
            responsibility of the participant unless covered by their insurance
            policy.
          </p>
        </Section>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--text-muted)",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "24px",
          }}
        >
          Questions? Contact: info@globaltrek.in | +91 98765 43210
        </p>
      </div>
    </main>
  );
}
