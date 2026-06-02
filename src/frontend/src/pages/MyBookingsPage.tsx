import { useState } from "react";

type BookingStatus = "confirmed" | "pending" | "cancelled";

interface Booking {
  id: string;
  ref: string;
  trekName: string;
  startDate: string;
  endDate: string;
  participants: number;
  totalAmount: number;
  status: BookingStatus;
  imageUrl: string;
}

const mockBookings: Booking[] = [
  {
    id: "1",
    ref: "GT-2026-0421",
    trekName: "Kedarkantha Trek",
    startDate: "Dec 20, 2026",
    endDate: "Dec 25, 2026",
    participants: 2,
    totalAmount: 16800,
    status: "confirmed",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    id: "2",
    ref: "GT-2026-0389",
    trekName: "Chopta Tungnath Trek",
    startDate: "Oct 10, 2026",
    endDate: "Oct 12, 2026",
    participants: 3,
    totalAmount: 22500,
    status: "pending",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  },
  {
    id: "3",
    ref: "GT-2025-0298",
    trekName: "Hampta Pass Trek",
    startDate: "Jul 5, 2025",
    endDate: "Jul 9, 2025",
    participants: 1,
    totalAmount: 9000,
    status: "confirmed",
    imageUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
  },
  {
    id: "4",
    ref: "GT-2025-0201",
    trekName: "Sar Pass Trek",
    startDate: "Apr 15, 2025",
    endDate: "Apr 20, 2025",
    participants: 2,
    totalAmount: 15000,
    status: "cancelled",
    imageUrl:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80",
  },
];

type TabFilter = "all" | "upcoming" | "completed" | "cancelled";

function statusBadge(status: BookingStatus) {
  if (status === "confirmed") {
    return (
      <span
        style={{
          background: "#e8f5ee",
          color: "var(--green-primary)",
          border: "1px solid #b3dcc5",
          borderRadius: "999px",
          padding: "2px 12px",
          fontSize: "12px",
          fontWeight: 700,
          fontFamily: "var(--font-body)",
          letterSpacing: "0.04em",
          textTransform: "uppercase" as const,
        }}
      >
        Confirmed
      </span>
    );
  }
  if (status === "pending") {
    return (
      <span
        style={{
          background: "#fff8ec",
          color: "var(--amber)",
          border: "1px solid #f4c97c",
          borderRadius: "999px",
          padding: "2px 12px",
          fontSize: "12px",
          fontWeight: 700,
          fontFamily: "var(--font-body)",
          letterSpacing: "0.04em",
          textTransform: "uppercase" as const,
        }}
      >
        Pending
      </span>
    );
  }
  return (
    <span
      style={{
        background: "#fef2f2",
        color: "var(--red)",
        border: "1px solid #fca5a5",
        borderRadius: "999px",
        padding: "2px 12px",
        fontSize: "12px",
        fontWeight: 700,
        fontFamily: "var(--font-body)",
        letterSpacing: "0.04em",
        textTransform: "uppercase" as const,
      }}
    >
      Cancelled
    </span>
  );
}

function BookingCard({ booking, index }: { booking: Booking; index: number }) {
  return (
    <div
      data-ocid={`bookings.item.${index + 1}`}
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        borderTop: "4px solid var(--green-primary)",
        boxShadow: "var(--card-shadow)",
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        transition: "box-shadow 200ms ease, transform 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(26, 122, 76, 0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--card-shadow)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={booking.imageUrl}
        alt={booking.trekName}
        style={{
          width: "140px",
          height: "100%",
          objectFit: "cover",
          minHeight: "130px",
        }}
      />
      <div
        style={{
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap" as const,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                marginBottom: "4px",
              }}
            >
              Ref:{" "}
              <strong style={{ color: "var(--green-primary)" }}>
                {booking.ref}
              </strong>
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "20px",
                fontWeight: 600,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              {booking.trekName}
            </h3>
          </div>
          {statusBadge(booking.status)}
        </div>
        <div
          style={{ display: "flex", gap: "24px", flexWrap: "wrap" as const }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "var(--text-muted)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                display: "block",
              }}
            >
              Dates
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-primary)",
              }}
            >
              {booking.startDate} – {booking.endDate}
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "var(--text-muted)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                display: "block",
              }}
            >
              Participants
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--text-primary)",
              }}
            >
              {booking.participants}{" "}
              {booking.participants === 1 ? "person" : "people"}
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "var(--text-muted)",
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                display: "block",
              }}
            >
              Total
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "15px",
                fontWeight: 700,
                color: "var(--green-primary)",
              }}
            >
              ₹{booking.totalAmount.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
        <div style={{ marginTop: "auto", paddingTop: "8px" }}>
          <button
            type="button"
            data-ocid={`bookings.view_button.${index + 1}`}
            style={{
              background: "var(--green-primary)",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "0 20px",
              height: "36px",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "background 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--green-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--green-primary)";
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

const tabs: { key: TabFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

export function MyBookingsPage() {
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const now = new Date();

  const filtered = mockBookings.filter((b) => {
    if (activeTab === "all") return true;
    if (activeTab === "cancelled") return b.status === "cancelled";
    const end = new Date(b.endDate);
    if (activeTab === "upcoming") return b.status !== "cancelled" && end >= now;
    if (activeTab === "completed") return b.status !== "cancelled" && end < now;
    return true;
  });

  return (
    <div
      style={{
        background: "var(--bg-surface)",
        minHeight: "100vh",
        paddingTop: "var(--nav-height, 72px)",
      }}
    >
      <div
        style={{
          background: "var(--green-dark)",
          padding: "40px clamp(20px, 4vw, 48px) 32px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "8px",
            }}
          >
            Dashboard
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 42px)",
              color: "#ffffff",
              margin: 0,
            }}
          >
            My Bookings
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)",
              marginTop: "8px",
            }}
          >
            Track and manage all your trek reservations.
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid var(--border-subtle)",
          position: "sticky",
          top: "var(--nav-height, 72px)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 clamp(20px, 4vw, 48px)",
            display: "flex",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              data-ocid={`bookings.filter.${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  activeTab === tab.key
                    ? "3px solid var(--green-primary)"
                    : "3px solid transparent",
                padding: "16px 20px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: activeTab === tab.key ? 700 : 500,
                color:
                  activeTab === tab.key
                    ? "var(--green-primary)"
                    : "var(--text-muted)",
                cursor: "pointer",
                transition: "color 150ms ease, border-color 150ms ease",
              }}
            >
              {tab.label}
              <span
                style={{
                  marginLeft: "6px",
                  background:
                    activeTab === tab.key
                      ? "var(--green-primary)"
                      : "var(--border-default)",
                  color:
                    activeTab === tab.key ? "#ffffff" : "var(--text-muted)",
                  borderRadius: "999px",
                  padding: "1px 7px",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                {tab.key === "all"
                  ? mockBookings.length
                  : tab.key === "upcoming"
                    ? mockBookings.filter(
                        (b) =>
                          b.status !== "cancelled" &&
                          new Date(b.endDate) >= now,
                      ).length
                    : tab.key === "completed"
                      ? mockBookings.filter(
                          (b) =>
                            b.status !== "cancelled" &&
                            new Date(b.endDate) < now,
                        ).length
                      : mockBookings.filter((b) => b.status === "cancelled")
                          .length}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "32px clamp(20px, 4vw, 48px) 64px",
        }}
      >
        {filtered.length === 0 ? (
          <div
            data-ocid="bookings.empty_state"
            style={{
              textAlign: "center",
              padding: "80px 20px",
              background: "#ffffff",
              borderRadius: "16px",
              border: "2px dashed var(--border-default)",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏔️</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "22px",
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              No bookings found
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "var(--text-muted)",
                maxWidth: "320px",
                margin: "0 auto 24px",
              }}
            >
              You don't have any {activeTab !== "all" ? activeTab : ""} bookings
              yet.
            </p>
            <a
              href="/treks"
              data-ocid="bookings.explore_button"
              style={{
                display: "inline-block",
                background: "var(--green-primary)",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "12px 28px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Explore Treks
            </a>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {filtered.map((booking, i) => (
              <BookingCard key={booking.id} booking={booking} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
