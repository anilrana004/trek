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

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Global Trek";
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
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-muted)",
              marginTop: "12px",
            }}
          >
            Last updated: January 2025. We take your privacy seriously.
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
        <Section title="1. Information We Collect">
          <p>
            When you interact with Global Trek — through our website, booking
            forms, or direct communications — we may collect the following
            information:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong style={{ color: "var(--text-primary)" }}>
                Personal identifiers:
              </strong>{" "}
              Name, email address, phone number, country of residence.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong style={{ color: "var(--text-primary)" }}>
                Trip preferences:
              </strong>{" "}
              Destination interests, preferred travel dates, group size, budget
              range, and activity type.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong style={{ color: "var(--text-primary)" }}>
                Health information:
              </strong>{" "}
              Medical conditions disclosed for safety assessment on
              high-altitude trips.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Communications:
              </strong>{" "}
              Email and message content when you contact us directly.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>
            Your personal information is used exclusively for the following
            purposes:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              Processing trip enquiries and bookings.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Communicating about your trip before, during, and after travel.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Safety planning and emergency contact management for trips.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Sending newsletters and trip updates (only if you have
              subscribed).
            </li>
            <li>Improving our services based on feedback.</li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            We do <strong style={{ color: "var(--text-primary)" }}>not</strong>{" "}
            sell, rent, or trade your personal information to any third party
            for marketing purposes.
          </p>
        </Section>

        <Section title="3. Third-Party Sharing">
          <p>
            We share your information only as necessary to deliver your trip:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              Local guides, porters, and camp staff who need to know your name
              and health information relevant to the trip.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Government permit offices that require participant details.
            </li>
            <li>
              Trusted international partners for trips outside India (Nepal,
              Bhutan, Tibet, Africa).
            </li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            All partners are bound by confidentiality agreements and use your
            data only for trip-related purposes.
          </p>
        </Section>

        <Section title="4. Cookies & Website Data">
          <p>
            Our website uses essential cookies to provide basic functionality.
            We do not use tracking cookies or third-party advertising cookies.
            If you use Google Analytics on this site, it is configured to
            anonymise IP addresses and does not store personally identifiable
            information.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your personal information for as long as necessary to
            fulfil the purposes described above, plus a period of seven years
            for tax and legal compliance purposes. Health information disclosed
            for high-altitude trips is deleted after the trip concludes unless
            you consent to longer retention.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>You have the right to:</p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              Access the personal information we hold about you.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Correct inaccurate information.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Request deletion of your personal data (subject to legal retention
              requirements).
            </li>
            <li>Withdraw consent to marketing communications at any time.</li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            To exercise any of these rights, please email us at{" "}
            <a
              href="mailto:info@globaltrek.in"
              style={{ color: "var(--accent-blue)" }}
            >
              info@globaltrek.in
            </a>
            .
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
          For privacy-related questions, contact: info@globaltrek.in | +91 98765
          43210
        </p>
      </div>
    </main>
  );
}
