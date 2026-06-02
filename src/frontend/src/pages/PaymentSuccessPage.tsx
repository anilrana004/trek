import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function PaymentSuccessPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "var(--bg-surface)",
      }}
      data-ocid="payment_success.page"
    >
      <div
        className="flex flex-col items-center justify-center min-h-[80vh] px-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div style={{ maxWidth: "480px", width: "100%", textAlign: "center" }}>
          {/* Animated Checkmark */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              boxShadow:
                "0 0 0 12px rgba(34,197,94,0.12), 0 0 0 24px rgba(34,197,94,0.06)",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              aria-hidden="true"
              strokeWidth="2.5"
            >
              <path
                d="M20 6L9 17l-5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1
            className="text-4xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Payment Successful! 🎉
          </h1>
          <p
            className="text-base mb-8"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Your trek is officially booked. Get ready to summit your next peak!
          </p>

          {/* Summary Card */}
          <div
            className="rounded-2xl text-left mb-8"
            style={{
              background: "white",
              boxShadow: "var(--card-shadow)",
              overflow: "hidden",
            }}
          >
            <div
              className="px-5 py-3"
              style={{ background: "var(--green-primary)" }}
            >
              <p
                className="text-white/80 text-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Booking confirmed
              </p>
              <p
                className="text-white font-bold text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kedarkantha Trek
              </p>
            </div>
            <div className="px-5 py-4 space-y-3">
              {(
                [
                  { label: "Booking ID", value: "BK20260421" },
                  { label: "Amount Paid", value: "₹22,050" },
                  { label: "Batch Date", value: "Dec 20 – Dec 24, 2026" },
                  { label: "Participants", value: "2 Trekkers" },
                  { label: "Payment Method", value: "Stripe • Visa····4242" },
                ] as Array<{ label: string; value: string }>
              ).map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next steps */}
          <div
            className="flex items-center gap-3 p-4 rounded-xl mb-8 text-left"
            style={{
              background: "var(--green-muted)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span className="text-2xl">📧</span>
            <p
              className="text-sm"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
              }}
            >
              A confirmation email with your full itinerary and pre-trek
              checklist has been sent to your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/account/dashboard"
              className="flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm text-white"
              style={{
                background: "var(--green-primary)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 4px 12px rgba(26,122,76,0.3)",
              }}
              data-ocid="payment_success.go_dashboard_button"
            >
              View My Dashboard
            </Link>
            <Link
              to="/treks"
              className="flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm"
              style={{
                border: "1.5px solid var(--green-primary)",
                color: "var(--green-primary)",
                fontFamily: "var(--font-body)",
                background: "white",
              }}
              data-ocid="payment_success.browse_more_button"
            >
              Browse More Treks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
