import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TripCard } from "../components/ui/TripCard";
import { allTrips } from "../data/trips";

const regionOptions = [
  "All",
  "India",
  "Nepal",
  "Bhutan",
  "Tibet",
  "Outside Himalaya",
];
const difficultyOptions = [
  "All",
  "Beginner Trek",
  "Moderate Trek",
  "Challenging Trek",
  "Trekking Peak",
  "Technical Trek",
  "Moderate Climb",
  "Demanding Climb",
  "Very Demanding",
];

export default function FixedDepartures() {
  useEffect(() => {
    document.title = "Fixed Departures | Global Trek";
  }, []);

  const [regionFilter, setRegionFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const fixedTrips = useMemo(() => allTrips.filter((t) => !t.isOnRequest), []);

  const filtered = useMemo(() => {
    let trips = fixedTrips;
    if (regionFilter !== "All") {
      trips = trips.filter(
        (t) => t.country === regionFilter || t.region === regionFilter,
      );
    }
    if (difficultyFilter !== "All") {
      trips = trips.filter((t) => t.difficulty === difficultyFilter);
    }
    if (sortBy === "price-asc") {
      trips = [...trips].sort(
        (a, b) =>
          (a.priceINR ?? a.priceUSD ?? 0) - (b.priceINR ?? b.priceUSD ?? 0),
      );
    } else if (sortBy === "price-desc") {
      trips = [...trips].sort(
        (a, b) =>
          (b.priceINR ?? b.priceUSD ?? 0) - (a.priceINR ?? a.priceUSD ?? 0),
      );
    } else if (sortBy === "altitude") {
      trips = [...trips].sort((a, b) => b.maxAltitude - a.maxAltitude);
    } else if (sortBy === "duration") {
      trips = [...trips].sort((a, b) => a.duration - b.duration);
    }
    return trips;
  }, [fixedTrips, regionFilter, difficultyFilter, sortBy]);

  const pillStyle = (active: boolean): React.CSSProperties => ({
    padding: "8px 16px",
    borderRadius: "var(--radius-full)",
    border: `1px solid ${active ? "var(--accent-blue)" : "var(--border-default)"}`,
    background: active ? "var(--accent-blue-dim)" : "transparent",
    color: active ? "var(--accent-blue)" : "var(--text-secondary)",
    fontFamily: "var(--font-body)",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 150ms ease",
    whiteSpace: "nowrap" as const,
  });

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "40vh",
          minHeight: "360px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
          alt="Fixed departure adventures"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-hero)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
            marginTop: "72px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--accent-blue)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            GUARANTEED DEPARTURES
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(36px, 6vw, 64px)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              margin: "0 0 12px",
            }}
          >
            Fixed Departure Adventures
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--text-secondary)",
            }}
          >
            {fixedTrips.length} scheduled departures across the Himalaya
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 50,
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "16px 48px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                flexShrink: 0,
                width: "72px",
              }}
            >
              REGION
            </span>
            {regionOptions.map((r) => (
              <button
                key={r}
                type="button"
                data-ocid={`fixed.region.${r.toLowerCase().replace(/ /g, "_")}_filter`}
                style={pillStyle(regionFilter === r)}
                onClick={() => setRegionFilter(r)}
              >
                {r}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                flexShrink: 0,
                width: "72px",
              }}
            >
              GRADE
            </span>
            {difficultyOptions.map((d) => (
              <button
                key={d}
                type="button"
                data-ocid={`fixed.difficulty.${d.toLowerCase().replace(/ /g, "_")}_filter`}
                style={pillStyle(difficultyFilter === d)}
                onClick={() => setDifficultyFilter(d)}
              >
                {d}
              </button>
            ))}
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                Sort by:
              </span>
              <select
                data-ocid="fixed.sort_select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  padding: "6px 12px",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="date">Upcoming Departure</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="altitude">Highest Altitude</option>
                <option value="duration">Shortest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Trips Grid */}
      <section
        style={{
          padding: "48px 48px 80px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-muted)",
            }}
          >
            Showing {filtered.length} trip{filtered.length !== 1 ? "s" : ""}
          </span>
          {(regionFilter !== "All" || difficultyFilter !== "All") && (
            <button
              type="button"
              data-ocid="fixed.clear_filters_button"
              onClick={() => {
                setRegionFilter("All");
                setDifficultyFilter("All");
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--accent-blue)",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              Clear all filters x
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div
            data-ocid="fixed.trips.empty_state"
            style={{
              textAlign: "center",
              padding: "80px 20px",
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏔️</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "28px",
                color: "var(--text-primary)",
                margin: "0 0 8px",
              }}
            >
              No trips match your filters
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "var(--text-secondary)",
              }}
            >
              Try adjusting your region or difficulty selection.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {filtered.map((trip, i) => (
              <TripCard key={trip.id} trip={trip} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
