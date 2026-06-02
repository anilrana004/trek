import { Link } from "@tanstack/react-router";

export function BookingConfirmationPage() {
  const bookingId = `BK2026${String(Math.floor(1000 + Math.random() * 9000))}`;

  return (
    <div
      style={{
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "var(--bg-surface)",
      }}
      data-ocid="booking_confirmation.page"
    >
      {/* Green Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--green-dark) 0%, var(--green-primary) 100%)",
          padding: "64px 24px 80px",
          textAlign: "center",
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "3px solid rgba(255,255,255,0.4)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            aria-hidden="true"
            strokeWidth="2.5"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1
          className="text-4xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Booking Confirmed! 🎉
        </h1>
        <p
          className="text-white/80 text-base"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Get ready for your Himalayan adventure. See you on the trail!
        </p>
      </div>

      {/* Booking Card */}
      <div
        style={{
          maxWidth: "560px",
          margin: "-40px auto 0",
          padding: "0 24px 80px",
        }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "white", boxShadow: "var(--card-shadow)" }}
        >
          {/* Booking ID Header */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{
              background: "var(--green-muted)",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <span
              className="text-sm font-semibold"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Booking Reference
            </span>
            <span
              className="text-lg font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--green-primary)",
              }}
            >
              {bookingId}
            </span>
          </div>

          {/* Details */}
          <div className="px-6 py-5 space-y-4">
            {(
              [
                { label: "Trek", value: "Kedarkantha Trek", icon: "🏔️" },
                {
                  label: "Batch Dates",
                  value: "December 20 – December 24, 2026",
                  icon: "📅",
                },
                { label: "Participants", value: "2 Trekkers", icon: "👥" },
                {
                  label: "Status",
                  value: "Confirmed",
                  icon: "✅",
                  green: true,
                },
                {
                  label: "Total Paid",
                  value: "₹22,050",
                  icon: "💳",
                  bold: true,
                },
              ] as Array<{
                label: string;
                value: string;
                icon: string;
                green?: boolean;
                bold?: boolean;
              }>
            ).map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{item.icon}</span>
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: item.green
                      ? "#16a34a"
                      : item.bold
                        ? "var(--green-primary)"
                        : "var(--text-primary)",
                    fontSize: item.bold ? "1.1rem" : undefined,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Email notice */}
          <div
            className="mx-5 mb-5 p-4 rounded-xl flex items-center gap-3"
            style={{
              background: "var(--green-muted)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span className="text-xl">📧</span>
            <p
              className="text-sm"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Email confirmation sent to your inbox with full itinerary &amp;
              packing list PDF.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-6 px-6 pb-5">
            {["Certified Guides", "Fully Insured", "24/7 Support"].map(
              (badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--green-primary)"
                    aria-hidden="true"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {badge}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <Link
            to="/account/dashboard"
            className="flex-1 flex items-center justify-center py-3 rounded-xl font-semibold text-sm text-white"
            style={{
              background: "var(--green-primary)",
              fontFamily: "var(--font-body)",
            }}
            data-ocid="booking_confirmation.go_dashboard_button"
          >
            Go to Dashboard
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
            data-ocid="booking_confirmation.book_another_button"
          >
            Book Another Trek
          </Link>
        </div>
      </div>
    </div>
  );
}
