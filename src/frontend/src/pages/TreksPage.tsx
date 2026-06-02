import { useMemo, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { TrekCard } from "../components/TrekCard";
import { type TrekDifficulty, type TrekState, treks } from "../data/treks";

type DifficultyFilter = "All" | TrekDifficulty;
type StateFilter = "All" | TrekState;

export function TreksPage() {
  const [stateFilter, setStateFilter] = useState<StateFilter>("All");
  const [diffFilter, setDiffFilter] = useState<DifficultyFilter>("All");

  const filtered = useMemo(() => {
    return treks.filter((t) => {
      const stateMatch = stateFilter === "All" || t.state === stateFilter;
      const diffMatch = diffFilter === "All" || t.difficulty === diffFilter;
      return stateMatch && diffMatch;
    });
  }, [stateFilter, diffFilter]);

  const difficultyOptions: DifficultyFilter[] = [
    "All",
    "Easy",
    "Easy to Moderate",
    "Moderate",
    "Difficult",
  ];
  const stateOptions: { label: string; value: StateFilter }[] = [
    { label: "All Treks", value: "All" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  ];

  return (
    <div style={{ paddingTop: "var(--nav-height, 72px)" }}>
      {/* Hero Banner */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #145C38 0%, #1A7A4C 60%, #2ECC71 100%)",
          padding: "72px 24px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "20px" }}>
            <ol
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {["Home", "Treks"].map((crumb, i) => (
                <li
                  key={crumb}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  {i > 0 && (
                    <span
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "13px",
                      }}
                    >
                      ›
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: i === 1 ? "#fff" : "rgba(255,255,255,0.7)",
                      fontWeight: i === 1 ? 600 : 400,
                    }}
                  >
                    {crumb}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Explore Himalayan Treks
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.88)",
              maxWidth: "560px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Discover 15 spectacular treks across Uttarakhand and Himachal
            Pradesh — from serene meadow walks to challenging high-altitude
            expeditions.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #E8F5EE",
          boxShadow: "0 2px 12px rgba(26,122,76,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
          }}
        >
          {[
            { value: "15", label: "Total Treks" },
            { value: "10", label: "Uttarakhand" },
            { value: "5", label: "Himachal Pradesh" },
            { value: "All Levels", label: "Difficulty Range" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                flex: "1 1 160px",
                padding: "20px 24px",
                borderRight: "1px solid #E8F5EE",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "#4A4A4A",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          background: "#F8FAF9",
          padding: "24px 24px 0",
          borderBottom: "1px solid #E8F5EE",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* State Tabs */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              marginBottom: "16px",
              borderBottom: "2px solid #E8F5EE",
              paddingBottom: 0,
            }}
          >
            {stateOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                data-ocid={`treks.filter_tab.${opt.value.toLowerCase().replace(" ", "_")}`}
                onClick={() => setStateFilter(opt.value)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 20px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  borderBottom:
                    stateFilter === opt.value
                      ? "3px solid #1A7A4C"
                      : "3px solid transparent",
                  color: stateFilter === opt.value ? "#1A7A4C" : "#4A4A4A",
                  transition: "all 0.2s",
                  marginBottom: "-2px",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Difficulty Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              paddingBottom: "20px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                color: "#4A4A4A",
                marginRight: "4px",
              }}
            >
              Difficulty:
            </span>
            {difficultyOptions.map((d) => (
              <button
                key={d}
                type="button"
                data-ocid={`treks.difficulty_filter.${d.toLowerCase().replace(/ /g, "_")}`}
                onClick={() => setDiffFilter(d)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "6px 16px",
                  borderRadius: "50px",
                  border: "1.5px solid",
                  borderColor: diffFilter === d ? "#1A7A4C" : "#D1E7D9",
                  background: diffFilter === d ? "#1A7A4C" : "#fff",
                  color: diffFilter === d ? "#fff" : "#1A7A4C",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trek Grid */}
      <div style={{ background: "#F8FAF9", padding: "48px 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Results count */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "32px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <SectionHeading
              label="Trek Collection"
              title={
                stateFilter === "All"
                  ? "All Himalayan Treks"
                  : `${stateFilter} Treks`
              }
              subtitle={`Showing ${filtered.length} trek${filtered.length !== 1 ? "s" : ""}`}
            />
          </div>

          {filtered.length === 0 ? (
            <div
              data-ocid="treks.empty_state"
              style={{
                textAlign: "center",
                padding: "80px 24px",
                background: "#fff",
                borderRadius: "16px",
                border: "2px dashed #D1E7D9",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏔️</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                No treks match your filters
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "#4A4A4A" }}>
                Try selecting a different difficulty or state.
              </p>
            </div>
          ) : (
            <div
              data-ocid="treks.list"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {filtered.map((trek, i) => (
                <TrekCard key={trek.slug} trek={trek} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
