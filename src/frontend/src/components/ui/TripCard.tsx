import { useNavigate } from "@tanstack/react-router";
import type { Trip } from "../../types";

function getDifficultyColor(grade: number): string {
  const colors: Record<number, string> = {
    1: "var(--diff-1)",
    2: "var(--diff-2)",
    3: "var(--diff-3)",
    4: "var(--diff-4)",
    5: "var(--diff-5)",
    6: "var(--diff-6)",
    7: "var(--diff-7)",
    8: "var(--diff-8)",
  };
  return colors[grade] ?? "var(--text-muted)";
}

function MountainIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--text-muted)" }}
      role="presentation"
      aria-hidden="true"
    >
      <path d="M3 20l7-12 4 6 2-3 5 9H3z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--text-muted)" }}
      role="presentation"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--text-muted)" }}
      role="presentation"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

interface TripCardProps {
  trip: Trip;
  index?: number;
}

export function TripCard({ trip, index = 0 }: TripCardProps) {
  const navigate = useNavigate();
  const diffColor = getDifficultyColor(trip.difficultyGrade);

  return (
    <div
      data-ocid={`trips.item.${index + 1}`}
      style={{
        background: "var(--bg-surface)",
        border: "var(--card-border)",
        borderRadius: "var(--card-radius)",
        overflow: "hidden",
        transition: "transform 250ms ease, box-shadow 250ms ease",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
        const img = e.currentTarget.querySelector(".card-img") as HTMLElement;
        if (img) img.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
        const img = e.currentTarget.querySelector(".card-img") as HTMLElement;
        if (img) img.style.transform = "scale(1)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: "251px",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <img
          src={trip.imageUrl}
          alt={trip.name}
          className="card-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 400ms ease",
          }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-card)",
            pointerEvents: "none",
          }}
        />
        {/* Type badge top-left */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "var(--accent-blue-dim)",
            border: "1px solid var(--accent-blue)",
            color: "var(--accent-blue)",
            fontFamily: "var(--font-body)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            padding: "3px 10px",
            borderRadius: "var(--radius-full)",
          }}
        >
          {trip.tripType.toUpperCase()}
        </div>
        {/* Difficulty badge top-right */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: `${diffColor}22`,
            border: `1px solid ${diffColor}`,
            color: diffColor,
            fontFamily: "var(--font-body)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            padding: "3px 10px",
            borderRadius: "var(--radius-full)",
          }}
        >
          {trip.difficulty.toUpperCase()}
        </div>
        {/* Premium badge */}
        {trip.isPremium && (
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              background: "var(--accent-gold-dim)",
              border: "1px solid var(--accent-gold)",
              color: "var(--accent-gold)",
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              padding: "3px 10px",
              borderRadius: "var(--radius-full)",
            }}
          >
            PREMIUM
          </div>
        )}
      </div>

      {/* Text area */}
      <div
        style={{
          padding: "20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "20px",
            color: "var(--text-primary)",
            lineHeight: 1.2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {trip.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--accent-blue)",
            letterSpacing: "0.08em",
          }}
        >
          {trip.subRegion ? `${trip.country}, ${trip.subRegion}` : trip.country}
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "16px", paddingTop: "8px" }}>
          {[
            {
              icon: <MountainIcon />,
              value: `${trip.maxAltitude.toLocaleString()}m`,
              label: "MAX ALTITUDE",
            },
            {
              icon: <CalendarIcon />,
              value: `${trip.duration} DAYS`,
              label: "DURATION",
            },
            {
              icon: <UsersIcon />,
              value: `${trip.maxGroup}`,
              label: "MAX GROUP",
            },
          ].map(({ icon, value, label }) => (
            <div
              key={label}
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                {icon}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--text-primary)",
                    fontWeight: 500,
                  }}
                >
                  {value}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div
          style={{
            height: "1px",
            background: "var(--border-subtle)",
            margin: "8px 0",
          }}
        />

        {/* Departure + Price */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <div>
            {trip.isOnRequest ? (
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--accent-gold)",
                  fontStyle: "italic",
                }}
              >
                ON REQUEST
              </span>
            ) : trip.departureDate ? (
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                }}
              >
                {trip.departureDate}
                {trip.returnDate ? ` – ${trip.returnDate}` : ""}
              </span>
            ) : null}
          </div>
          <div style={{ textAlign: "right" }}>
            {trip.priceINR && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                ₹{trip.priceINR.toLocaleString("en-IN")}
              </span>
            )}
            {trip.priceUSD && !trip.priceINR && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                ${trip.priceUSD.toLocaleString()}
              </span>
            )}
            {trip.priceINR && trip.priceUSD && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  display: "block",
                }}
              >
                / ${trip.priceUSD.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CTA button */}
      <button
        type="button"
        onClick={() => navigate({ to: `/trips/${trip.slug}` })}
        data-ocid={`trips.item.${index + 1}.view_button`}
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          height: "44px",
          lineHeight: "44px",
          background: "transparent",
          border: "none",
          borderTop: "1px solid var(--accent-blue)",
          color: "var(--accent-blue)",
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textDecoration: "none",
          transition: "background 150ms ease, color 150ms ease",
          borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
          flexShrink: 0,
          cursor: "pointer",
          boxSizing: "border-box",
          padding: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--accent-blue)";
          e.currentTarget.style.color = "var(--text-inverse)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--accent-blue)";
        }}
      >
        View Trip Details
      </button>
    </div>
  );
}
