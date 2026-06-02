import { useState } from "react";
import { gearItems } from "../../data/gearRental";

interface Props {
  selectedGear?: string[];
  onToggleGear?: (itemId: string) => void;
}

export function TrekGearSection({
  selectedGear: externalSelected,
  onToggleGear,
}: Props) {
  const [internalSelected, setInternalSelected] = useState<string[]>([]);
  const selected = externalSelected ?? internalSelected;

  const toggle = (id: string) => {
    if (onToggleGear) {
      onToggleGear(id);
    } else {
      setInternalSelected((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
      );
    }
  };

  const totalCost = selected.reduce((sum, id) => {
    const item = gearItems.find((g) => g.id === id);
    return sum + (item ? item.pricePerDay : 0);
  }, 0);

  return (
    <section
      style={{ padding: "64px 0" }}
      data-ocid="trek_gear.section"
      aria-labelledby="trek-gear-heading"
    >
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h2
              id="trek-gear-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 700,
                color: "#1A1A1A",
                margin: "0 0 8px",
                fontStyle: "italic",
              }}
            >
              Gear Rental
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#6B7280",
                margin: 0,
              }}
            >
              Add to your booking at checkout · Deposit refunded after return
            </p>
          </div>
          {selected.length > 0 && (
            <div
              style={{
                background: "linear-gradient(135deg, #1A7A4C, #2ECC71)",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "right",
              }}
              data-ocid="trek_gear.cost_preview"
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.8)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Rental total
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                ₹{totalCost.toLocaleString("en-IN")}
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                  }}
                >
                  /day
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {selected.length} item{selected.length !== 1 ? "s" : ""}{" "}
                selected
              </div>
            </div>
          )}
        </div>

        {/* Info banner */}
        <div
          style={{
            marginTop: "16px",
            background: "#E8F5EE",
            borderRadius: "10px",
            padding: "12px 16px",
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            border: "1px solid #C3E6CB",
          }}
        >
          {[
            { icon: "🔄", text: "Deposit fully refunded on return" },
            { icon: "✅", text: "Cleaned & inspected before each rental" },
            { icon: "📦", text: "Gear delivered to base camp" },
          ].map((b) => (
            <div
              key={b.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "#145C38",
                fontWeight: 600,
              }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gear grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}
        data-ocid="trek_gear.grid"
      >
        {gearItems.map((item, i) => {
          const isSelected = selected.includes(item.id);
          return (
            <div
              key={item.id}
              data-ocid={`trek_gear.item.${i + 1}`}
              style={{
                background: "#fff",
                borderRadius: "14px",
                border: isSelected ? "2px solid #1A7A4C" : "1px solid #E8F5EE",
                padding: "20px",
                boxShadow: isSelected
                  ? "0 4px 20px rgba(26,122,76,0.18)"
                  : "0 2px 8px rgba(26,122,76,0.06)",
                transition: "all 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Selected indicator */}
              {isSelected && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #1A7A4C, #2ECC71)",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Icon + availability */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{ fontSize: "32px", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    background: item.available ? "#E8F5EE" : "#FEE2E2",
                    color: item.available ? "#1A7A4C" : "#DC2626",
                    borderRadius: "20px",
                    padding: "3px 10px",
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.available ? "✓ Available" : "Unavailable"}
                </span>
              </div>

              {/* Name & category */}
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#1A1A1A",
                  marginBottom: "4px",
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                {item.category}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "#6B7280",
                  lineHeight: 1.5,
                  margin: "0 0 16px",
                }}
              >
                {item.description}
              </p>

              {/* Pricing */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#1A7A4C",
                    }}
                  >
                    ₹{item.pricePerDay}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "#6B7280",
                    }}
                  >
                    /day
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "#9B8B72",
                    textAlign: "right",
                  }}
                >
                  Deposit
                  <br />
                  <strong style={{ color: "#4A4A4A" }}>
                    ₹{item.depositAmount}
                  </strong>
                </div>
              </div>

              {/* Toggle button */}
              <button
                type="button"
                data-ocid={`trek_gear.toggle.${i + 1}`}
                aria-pressed={isSelected}
                aria-label={`${isSelected ? "Remove" : "Add"} ${item.name} ${isSelected ? "from" : "to"} booking`}
                onClick={() => toggle(item.id)}
                disabled={!item.available}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: isSelected ? "#1A7A4C" : "transparent",
                  border: `2px solid ${isSelected ? "#1A7A4C" : "#1A7A4C"}`,
                  borderRadius: "8px",
                  color: isSelected ? "#fff" : "#1A7A4C",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: item.available ? "pointer" : "not-allowed",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  opacity: item.available ? 1 : 0.5,
                }}
              >
                {isSelected ? (
                  <>
                    <span aria-hidden="true">✓</span> Added to Booking
                  </>
                ) : (
                  <>
                    <span aria-hidden="true">+</span> Add to Booking
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA if items selected */}
      {selected.length > 0 && (
        <div
          style={{
            marginTop: "24px",
            background: "linear-gradient(135deg, #1A7A4C 0%, #145C38 100%)",
            borderRadius: "14px",
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
          data-ocid="trek_gear.booking_summary"
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "4px",
              }}
            >
              {selected.length} rental item{selected.length !== 1 ? "s" : ""}{" "}
              selected
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              ₹{totalCost.toLocaleString("en-IN")}
              <span
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  marginLeft: "4px",
                }}
              >
                /day total
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "4px",
              }}
            >
              These items will be added at checkout
            </div>
          </div>
          <a
            href="/booking"
            data-ocid="trek_gear.proceed_booking_button"
            style={{
              padding: "12px 28px",
              background: "#F4A623",
              color: "#fff",
              borderRadius: "8px",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#E0941A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#F4A623";
            }}
          >
            Proceed to Booking →
          </a>
        </div>
      )}
    </section>
  );
}
