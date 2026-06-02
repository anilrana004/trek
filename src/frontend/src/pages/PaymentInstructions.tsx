import { useEffect } from "react";

function PayCard({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "28px 32px",
        marginBottom: "24px",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: "16px",
          color: "var(--text-primary)",
          letterSpacing: "0.05em",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
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
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "10px 0",
        borderBottom: "1px solid var(--border-subtle)",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          color: "var(--text-muted)",
          minWidth: "200px",
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--text-primary)",
          flex: 1,
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function PaymentInstructions() {
  useEffect(() => {
    document.title = "Payment Instructions | White Magic Adventure Travel";
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
            HOW TO PAY
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
            Payment Instructions
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-secondary)",
              marginTop: "12px",
              maxWidth: "520px",
            }}
          >
            We offer multiple secure payment methods for Indian and
            international clients.
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
        {/* Important Note */}
        <div
          style={{
            background: "var(--accent-blue-dim)",
            border: "1px solid var(--accent-blue)",
            borderRadius: "var(--radius-lg)",
            padding: "16px 20px",
            marginBottom: "36px",
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "20px", flexShrink: 0 }}>ℹ️</span>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Always reference your{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              name and trip name
            </strong>{" "}
            in the payment notes/remarks. After payment, email your receipt to{" "}
            <a
              href="mailto:info@whitemagicadventure.com"
              style={{ color: "var(--accent-blue)" }}
            >
              info@whitemagicadventure.com
            </a>{" "}
            to receive your booking confirmation.
          </p>
        </div>

        <PayCard title="🏦 Bank Transfer (Indian Clients — NEFT / RTGS / IMPS)">
          <InfoRow label="Account Name" value="White Magic Adventure Travel" />
          <InfoRow
            label="Account Number"
            value="XXXX XXXX XXXX (provided upon booking)"
          />
          <InfoRow
            label="IFSC Code"
            value="Provided upon booking confirmation"
          />
          <InfoRow label="Bank Name" value="[Bank name provided on invoice]" />
          <InfoRow label="Branch" value="New Delhi, India" />
          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            Full bank details including account number and IFSC are sent on your
            booking confirmation invoice. Do not use details from any other
            source.
          </p>
        </PayCard>

        <PayCard title="🌍 International Wire Transfer (SWIFT)">
          <InfoRow
            label="Beneficiary Name"
            value="White Magic Adventure Travel"
          />
          <InfoRow label="SWIFT / BIC Code" value="Provided upon booking" />
          <InfoRow label="Bank Name" value="[Bank name provided on invoice]" />
          <InfoRow label="Bank Address" value="New Delhi, India" />
          <InfoRow
            label="Currency"
            value="USD (preferred for international transfers)"
          />
          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            Please note that your bank may deduct a wire transfer fee. Ensure
            the full invoiced amount reaches us. For high-value expeditions, we
            recommend transferring an additional $20–30 to cover potential bank
            charges.
          </p>
        </PayCard>

        <PayCard title="📱 UPI (Indian Clients)">
          <div
            style={{
              background: "var(--bg-elevated)",
              borderRadius: "var(--radius-md)",
              padding: "16px 20px",
              display: "inline-block",
              marginBottom: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "15px",
                color: "var(--accent-blue)",
                letterSpacing: "0.05em",
              }}
            >
              UPI ID: Provided upon booking confirmation
            </p>
          </div>
          <p>
            UPI payments are accepted via PhonePe, Google Pay, Paytm, and all
            UPI-enabled apps. The UPI ID will be confirmed on your booking
            invoice.
          </p>
        </PayCard>

        <PayCard title="💳 Credit / Debit Card">
          <p>
            Credit and debit card payments are accepted through our secure
            payment gateway (Razorpay). A payment link will be shared with you
            upon booking confirmation. A 2–2.5% processing fee applies to card
            payments.
          </p>
          <p style={{ marginTop: "12px" }}>
            We accept Visa, Mastercard, RuPay, and American Express cards.
          </p>
        </PayCard>

        <PayCard title="📄 Payment Confirmation">
          <p>Once your payment is received and verified:</p>
          <ol style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              You will receive a{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                booking confirmation email
              </strong>{" "}
              within 24–48 hours with all trip details.
            </li>
            <li style={{ marginBottom: "8px" }}>
              A{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                digital receipt
              </strong>{" "}
              will be issued via email.
            </li>
            <li>
              You will receive a{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                pre-departure information pack
              </strong>{" "}
              approximately 4 weeks before departure.
            </li>
          </ol>
          <p style={{ marginTop: "12px" }}>
            If you do not receive confirmation within 48 hours of payment,
            please contact us immediately at info@whitemagicadventure.com or
            +91-11-41076073.
          </p>
        </PayCard>

        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-secondary)",
            }}
          >
            Questions about payment? Contact us directly:
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              marginTop: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+911141076073"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--accent-blue)",
                textDecoration: "none",
              }}
            >
              +91-11-41076073
            </a>
            <span style={{ color: "var(--text-muted)" }}>|</span>
            <a
              href="mailto:info@whitemagicadventure.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--accent-blue)",
                textDecoration: "none",
              }}
            >
              info@whitemagicadventure.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
