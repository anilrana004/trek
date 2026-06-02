import { Link } from "@tanstack/react-router";

export function PaymentFailedPage() {
  return (
    <div
      style={{
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "var(--bg-surface)",
      }}
      data-ocid="payment_failed.page"
    >
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div style={{ maxWidth: "480px", width: "100%", textAlign: "center" }}>
          {/* Red X */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{
              background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
              boxShadow:
                "0 0 0 12px rgba(239,68,68,0.1), 0 0 0 24px rgba(239,68,68,0.05)",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
              <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
            </svg>
          </div>

          <h1
            className="text-4xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Payment Failed
          </h1>
          <p
            className="text-base mb-2"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            We couldn't process your payment. Don't worry — your booking is
            saved.
          </p>

          {/* Reason Card */}
          <div
            className="rounded-2xl p-5 mb-6 text-left"
            style={{
              background: "white",
              boxShadow: "var(--card-shadow)",
              border: "1px solid #fee2e2",
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "#fee2e2" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M12 9v4m0 4h.01" />
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </div>
              <div>
                <p
                  className="font-semibold text-sm mb-1"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Reason: Card Declined
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Your bank declined the transaction. This could be due to
                  insufficient funds, incorrect card details, or your bank's
                  security policy.
                </p>
              </div>
            </div>
          </div>

          {/* What to try */}
          <div
            className="rounded-xl p-4 mb-8 text-left"
            style={{ background: "#fefce8", border: "1px solid #fef08a" }}
          >
            <p
              className="font-semibold text-sm mb-2"
              style={{ color: "#854d0e", fontFamily: "var(--font-body)" }}
            >
              What you can try:
            </p>
            <ul className="space-y-1">
              {[
                "Check your card number, expiry date, and CVV",
                "Ensure sufficient balance or credit limit",
                "Try a different card or UPI payment",
                "Contact your bank if the issue persists",
              ].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#92400e", fontFamily: "var(--font-body)" }}
                >
                  <span className="text-amber-500 mt-0.5">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/treks"
              className="flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm text-white"
              style={{
                background: "var(--green-primary)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 4px 12px rgba(26,122,76,0.3)",
              }}
              data-ocid="payment_failed.try_again_button"
            >
              Try Again
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Global%20Trek!%20My%20payment%20failed%2C%20please%20help."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm gap-2"
              style={{
                border: "1.5px solid var(--border-default)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
                background: "white",
              }}
              data-ocid="payment_failed.contact_support_button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.36 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Support
            </a>
          </div>

          <p
            className="mt-5 text-xs"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-body)",
            }}
          >
            No amount has been deducted. Your booking details are safe and can
            be completed anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
