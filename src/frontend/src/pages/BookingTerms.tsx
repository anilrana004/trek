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
          fontSize: "28px",
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

export default function BookingTerms() {
  useEffect(() => {
    document.title = "Booking Terms & Conditions | Global Trek";
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
            Booking Terms &amp; Conditions
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-muted)",
              marginTop: "12px",
            }}
          >
            Effective date: January 2025. Please read these carefully before
            booking.
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
        <Section title="1. Deposits & Payment Schedule">
          <p>
            A{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              non-refundable deposit of 25%
            </strong>{" "}
            of the total trip cost is required at the time of booking to confirm
            your place on the trip. This deposit covers initial reservations,
            permit applications, and logistics arrangements.
          </p>
          <p style={{ marginTop: "12px" }}>
            The remaining{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              75% balance is due no later than 30 days before the trip departure
              date
            </strong>
            . For bookings made within 30 days of departure, full payment is due
            immediately upon booking confirmation.
          </p>
          <p style={{ marginTop: "12px" }}>
            All prices are quoted in INR (Indian Rupees) and/or USD (US
            Dollars). International clients may pay in USD via wire transfer.
            Indian clients may pay by NEFT/RTGS, UPI, or credit card.
          </p>
        </Section>

        <Section title="2. Cancellation Policy (Client-Initiated)">
          <p>
            If you need to cancel your booking, the following cancellation
            charges apply:
          </p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "16px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
            }}
          >
            <thead>
              <tr style={{ background: "var(--bg-surface)" }}>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid var(--border-default)",
                  }}
                >
                  Notice Period
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "right",
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid var(--border-default)",
                  }}
                >
                  Refund
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["More than 45 days before departure", "75% refund"],
                ["30–45 days before departure", "50% refund"],
                ["15–30 days before departure", "25% refund"],
                ["Less than 15 days before departure", "No refund (0%)"],
              ].map(([period, refund]) => (
                <tr
                  key={period}
                  style={{ borderBottom: "1px solid var(--border-subtle)" }}
                >
                  <td
                    style={{
                      padding: "12px 16px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {period}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      textAlign: "right",
                      color:
                        refund === "No refund (0%)"
                          ? "var(--error)"
                          : "var(--success)",
                    }}
                  >
                    {refund}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: "16px", fontSize: "13px" }}>
            All cancellations must be submitted in writing to
            info@globaltrek.in. The cancellation date is the date we receive
            your written notice.
          </p>
        </Section>

        <Section title="3. Trip Cancellation by Global Trek">
          <p>
            In the rare event that Global Trek is required to cancel a trip due
            to circumstances beyond our control — including but not limited to
            natural disasters, government travel advisories, political
            instability, adverse weather conditions, or insufficient group size
            — you will receive:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              A{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                full refund
              </strong>{" "}
              of all monies paid, within 14 working days; or
            </li>
            <li>
              A{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                full credit
              </strong>{" "}
              towards any future Global Trek trip of equal or greater value,
              valid for 24 months.
            </li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            Global Trek is not responsible for any consequential losses
            (flights, visa fees, accommodation booked independently) arising
            from a trip cancellation.
          </p>
        </Section>

        <Section title="4. Liability & Adventure Risk Acknowledgment">
          <p>
            Adventure travel, trekking, and mountaineering involve inherent
            risks including altitude sickness, extreme weather, rockfall,
            avalanche, difficult terrain, and other natural hazards. By booking
            a trip with Global Trek, you acknowledge and accept these risks.
          </p>
          <p style={{ marginTop: "12px" }}>
            Global Trek operates to the highest safety standards and employs
            experienced, trained guides. However, we cannot be held liable for
            any injury, illness, loss, or damage arising from participation in
            adventure activities that are inherent to the nature of the trip.
          </p>
        </Section>

        <Section title="5. Travel Insurance (Mandatory for trips above 4000m)">
          <p>
            Comprehensive travel insurance is{" "}
            <strong style={{ color: "var(--text-primary)" }}>mandatory</strong>{" "}
            for all trips at or above 4,000m, and strongly recommended for all
            others. Your policy must cover:
          </p>
          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>Emergency medical expenses</li>
            <li style={{ marginBottom: "8px" }}>
              Emergency helicopter rescue and evacuation
            </li>
            <li style={{ marginBottom: "8px" }}>
              Trip cancellation and curtailment
            </li>
            <li>Repatriation of remains in case of fatality</li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            Please share your insurance policy details (insurer name, policy
            number, 24-hour emergency number) with us before departure.
          </p>
        </Section>

        <Section title="6. Conduct on Trip">
          <p>
            All participants are expected to treat fellow travellers, guides,
            porters, and local communities with respect and courtesy. White
            Magic reserves the right to remove any participant from a trip
            without refund if their behaviour endangers others, violates local
            customs, or disrupts the group experience.
          </p>
          <p style={{ marginTop: "12px" }}>
            You are responsible for following your guide's instructions at all
            times, particularly regarding safety protocols at altitude.
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
          For any questions about these terms, please contact us at
          info@globaltrek.in or +91 98765 43210.
        </p>
      </div>
    </main>
  );
}
