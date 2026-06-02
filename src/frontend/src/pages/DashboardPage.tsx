import { Link } from "@tanstack/react-router";
import { TrekCard } from "../components/TrekCard";
import { treks } from "../data/treks";

const mockUpcoming = [
  {
    id: "BK2026001",
    trekName: "Kedarkantha Trek",
    batchDate: "December 20, 2026",
    participants: 2,
    status: "Confirmed",
    daysAway: 201,
  },
  {
    id: "BK2026002",
    trekName: "Hampta Pass Trek",
    batchDate: "July 15, 2026",
    participants: 3,
    status: "Confirmed",
    daysAway: 44,
  },
];

const mockPast = [
  {
    id: "BK2025041",
    trekName: "Chopta Tungnath Trek",
    batchDate: "October 12, 2025",
    participants: 2,
    rating: 5,
  },
  {
    id: "BK2025028",
    trekName: "Triund Trek",
    batchDate: "June 5, 2025",
    participants: 1,
    rating: 5,
  },
];

const wishlistTreks = treks.slice(0, 3);

const statCards = [
  {
    label: "Upcoming Treks",
    value: mockUpcoming.length,
    icon: "🏔️",
    color: "var(--green-primary)",
  },
  { label: "Past Treks", value: mockPast.length, icon: "✅", color: "#145c38" },
  {
    label: "Wishlist Items",
    value: wishlistTreks.length,
    icon: "❤️",
    color: "var(--amber)",
  },
];

export function DashboardPage() {
  return (
    <div
      style={{
        paddingTop: "var(--nav-height, 72px)",
        minHeight: "100vh",
        background: "var(--bg-surface)",
      }}
      data-ocid="dashboard.page"
    >
      {/* Welcome Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--green-dark) 0%, var(--green-primary) 100%)",
          padding: "48px 0 64px",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <p
            className="text-white/70 text-sm mb-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Welcome back
          </p>
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Namaste, Adventurer 🏔️
          </h1>
          <p
            className="text-white/80 text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ready for your next summit? Your journey continues here.
          </p>
        </div>
      </div>

      {/* Stats Row — overlaps header */}
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "-28px auto 0",
          padding: "0 24px",
        }}
      >
        <div className="grid grid-cols-3 gap-4">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5 flex flex-col gap-2"
              style={{
                background: "white",
                boxShadow: "var(--card-shadow)",
                borderTop: `4px solid ${stat.color}`,
              }}
              data-ocid={`dashboard.stat.${stat.label.toLowerCase().replace(/ /g, "_")}`}
            >
              <span className="text-2xl">{stat.icon}</span>
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: stat.color }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-semibold"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        {/* Upcoming Treks */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Upcoming Treks
          </h2>
          <div className="grid gap-4">
            {mockUpcoming.map((booking, i) => (
              <div
                key={booking.id}
                className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{
                  background: "white",
                  boxShadow: "var(--card-shadow)",
                  borderLeft: "4px solid var(--green-primary)",
                }}
                data-ocid={`dashboard.upcoming.item.${i + 1}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "var(--green-muted)",
                        color: "var(--green-primary)",
                      }}
                    >
                      {booking.status}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {booking.daysAway} days away
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-1 truncate"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {booking.trekName}
                  </h3>
                  <div
                    className="flex flex-wrap gap-4 text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span>📅 {booking.batchDate}</span>
                    <span>
                      👥 {booking.participants} participant
                      {booking.participants > 1 ? "s" : ""}
                    </span>
                    <span>🎫 Ref: {booking.id}</span>
                  </div>
                </div>
                <Link
                  to="/booking/confirmation"
                  className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{
                    background: "var(--green-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                  data-ocid={`dashboard.view_details.${i + 1}`}
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Past Treks */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Past Adventures
          </h2>
          <div className="grid gap-4">
            {mockPast.map((booking, i) => (
              <div
                key={booking.id}
                className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{
                  background: "white",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderLeft: "4px solid #22c55e",
                  opacity: 0.92,
                }}
                data-ocid={`dashboard.past.item.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#dcfce7" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base font-bold mb-1 truncate"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {booking.trekName}
                  </h3>
                  <div
                    className="flex flex-wrap gap-4 text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span>📅 {booking.batchDate}</span>
                    <span>
                      👥 {booking.participants} participant
                      {booking.participants > 1 ? "s" : ""}
                    </span>
                    <span>{"⭐".repeat(booking.rating)}</span>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full shrink-0"
                  style={{ background: "#dcfce7", color: "#15803d" }}
                >
                  Completed
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Wishlist */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Saved Treks ❤️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wishlistTreks.map((trek, i) => (
              <TrekCard key={trek.slug} trek={trek} index={i} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2
            className="text-2xl font-bold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/treks"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white"
              style={{
                background: "var(--green-primary)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 4px 12px rgba(26,122,76,0.3)",
              }}
              data-ocid="dashboard.browse_treks_button"
            >
              🗺️ Browse Treks
            </Link>
            <Link
              to="/treks"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white"
              style={{
                background: "var(--green-dark)",
                fontFamily: "var(--font-body)",
              }}
              data-ocid="dashboard.book_trek_button"
            >
              📅 Book a Trek
            </Link>
            <button
              type="button"
              className="px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                border: "2px solid var(--green-primary)",
                color: "var(--green-primary)",
                fontFamily: "var(--font-body)",
                background: "white",
              }}
              data-ocid="dashboard.download_certificate_button"
            >
              🏅 Download Certificate
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
