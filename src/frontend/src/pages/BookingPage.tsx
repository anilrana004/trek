import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { treks } from "../data/treks";

// ─── Data ───────────────────────────────────────────────────────────────────────

const BATCHES = [
  {
    id: 1,
    date: "June 20 – June 24, 2026",
    month: "June",
    day: 20,
    seats: 8,
    totalSeats: 12,
    price: 10500,
  },
  {
    id: 2,
    date: "July 4 – July 8, 2026",
    month: "July",
    day: 4,
    seats: 4,
    totalSeats: 12,
    price: 10500,
  },
  {
    id: 3,
    date: "July 18 – July 22, 2026",
    month: "July",
    day: 18,
    seats: 2,
    totalSeats: 12,
    price: 11500,
  },
  {
    id: 4,
    date: "August 1 – August 5, 2026",
    month: "August",
    day: 1,
    seats: 10,
    totalSeats: 12,
    price: 10500,
  },
  {
    id: 5,
    date: "August 22 – August 26, 2026",
    month: "August",
    day: 22,
    seats: 1,
    totalSeats: 12,
    price: 12000,
  },
  {
    id: 6,
    date: "September 12 – September 16, 2026",
    month: "September",
    day: 12,
    seats: 12,
    totalSeats: 12,
    price: 10500,
  },
  {
    id: 7,
    date: "October 3 – October 7, 2026",
    month: "October",
    day: 3,
    seats: 0,
    totalSeats: 12,
    price: 10500,
  },
  {
    id: 8,
    date: "October 24 – October 28, 2026",
    month: "October",
    day: 24,
    seats: 6,
    totalSeats: 12,
    price: 11000,
  },
];

const ADDONS = [
  {
    id: "gear",
    icon: "⛺",
    label: "Gear Rental Pack",
    desc: "Poles, poncho, gaiters — full kit",
    price: 800,
    priceLabel: "₹800/day",
  },
  {
    id: "pickup",
    icon: "🚌",
    label: "City Pickup",
    desc: "From Haridwar/Rishikesh",
    price: 1200,
    priceLabel: "₹1,200/person",
  },
  {
    id: "room",
    icon: "🏠",
    label: "Single Room Supplement",
    desc: "Private tent or room",
    price: 1500,
    priceLabel: "₹1,500",
  },
  {
    id: "photo",
    icon: "📸",
    label: "Photography Package",
    desc: "Professional trek photographer",
    price: 2500,
    priceLabel: "₹2,500",
  },
  {
    id: "insurance",
    icon: "🛡️",
    label: "Insurance Cover",
    desc: "Trek insurance with evacuation",
    price: 500,
    priceLabel: "₹500/person",
  },
  {
    id: "veg",
    icon: "🥗",
    label: "Vegetarian Meals Only",
    desc: "Special dietary meals throughout",
    price: 0,
    priceLabel: "Free",
  },
];

const STEPS = [
  { id: 1, label: "Select Batch", short: "Batch" },
  { id: 2, label: "Your Details", short: "Details" },
  { id: 3, label: "Add-Ons", short: "Add-Ons" },
  { id: 4, label: "Review & Pay", short: "Pay" },
  { id: 5, label: "Confirmed", short: "Done" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────────

function seatStatus(seats: number, total: number) {
  if (seats === 0)
    return {
      color: "#dc2626",
      bg: "#fee2e2",
      label: "Full",
      isFull: true,
      isLow: false,
    };
  if (seats <= 3)
    return {
      color: "#d97706",
      bg: "#fef3c7",
      label: `${seats} left`,
      isFull: false,
      isLow: true,
    };
  const ratio = seats / total;
  if (ratio <= 0.4)
    return {
      color: "#d97706",
      bg: "#fef3c7",
      label: `${seats} seats`,
      isFull: false,
      isLow: true,
    };
  return {
    color: "#16a34a",
    bg: "#dcfce7",
    label: `${seats} seats`,
    isFull: false,
    isLow: false,
  };
}

// ─── Step Stepper ────────────────────────────────────────────────────────────────

function StepStepper({ current }: { current: number }) {
  return (
    <div
      className="rounded-2xl"
      style={{
        background: "white",
        boxShadow: "var(--card-shadow)",
        padding: "20px 28px",
      }}
      aria-label="Booking steps"
    >
      <div className="flex items-center justify-between">
        {STEPS.map((step, i) => {
          const isDone = i + 1 < current;
          const isActive = i + 1 === current;
          return (
            <div
              key={step.id}
              className="flex items-center"
              style={{ flex: i < STEPS.length - 1 ? 1 : undefined }}
            >
              <div className="flex flex-col items-center gap-1">
                <div
                  className="flex items-center justify-center rounded-full font-bold text-sm"
                  style={{
                    width: 36,
                    height: 36,
                    background: isDone
                      ? "var(--green-primary)"
                      : isActive
                        ? "white"
                        : "#f3f4f6",
                    border: isActive
                      ? "2.5px solid var(--green-primary)"
                      : isDone
                        ? "none"
                        : "2px solid #d1d5db",
                    color: isDone
                      ? "white"
                      : isActive
                        ? "var(--green-primary)"
                        : "#9ca3af",
                    boxShadow: isActive
                      ? "0 0 0 4px rgba(26,122,76,0.12)"
                      : "none",
                    transition: "all 0.3s ease",
                  }}
                  aria-current={isActive ? "step" : undefined}
                >
                  {isDone ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className="text-xs font-semibold hidden sm:block whitespace-nowrap"
                  style={{
                    color: isActive
                      ? "var(--green-primary)"
                      : isDone
                        ? "var(--green-dark)"
                        : "#9ca3af",
                    fontFamily: "var(--font-body)",
                    transition: "color 0.3s",
                  }}
                >
                  {step.short}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="flex-1 h-0.5 mx-2"
                  style={{
                    background: isDone ? "var(--green-primary)" : "#e5e7eb",
                    transition: "background 0.4s ease",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Addon Card ──────────────────────────────────────────────────────────────────

function AddonCard({
  addon,
  selected,
  onToggle,
}: {
  addon: (typeof ADDONS)[0];
  selected: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={`booking.addon.${addon.id}`}
      aria-pressed={selected}
      className="w-full text-left rounded-xl p-4 cursor-pointer relative"
      style={{
        border: selected
          ? "2px solid #1A7A4C"
          : hovered
            ? "2px solid #2ECC71"
            : "2px solid #e5e7eb",
        background: selected ? "#E8F5EE" : "white",
        boxShadow:
          hovered && !selected
            ? "0 4px 16px rgba(26,122,76,0.12)"
            : selected
              ? "0 2px 12px rgba(26,122,76,0.1)"
              : "none",
        transition: "all 0.2s ease",
      }}
    >
      {selected && (
        <div
          className="absolute top-3 right-3 rounded-full flex items-center justify-center"
          style={{ width: 22, height: 22, background: "#1A7A4C" }}
          aria-hidden="true"
        >
          <svg
            width="10"
            height="8"
            viewBox="0 0 12 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 5l3 3 7-7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      <div
        className="flex items-start gap-3 mb-2"
        style={{ paddingRight: selected ? 28 : 0 }}
      >
        <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
          {addon.icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <p
              className="font-semibold text-sm"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-body)" }}
            >
              {addon.label}
            </p>
            <span
              className="font-bold text-sm shrink-0"
              style={{
                color: addon.price === 0 ? "#16a34a" : "#1A7A4C",
                fontFamily: "var(--font-body)",
              }}
            >
              {addon.price === 0
                ? "Free"
                : `+₹${addon.price.toLocaleString("en-IN")}`}
            </span>
          </div>
          <p
            className="text-xs mt-0.5"
            style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
          >
            {addon.priceLabel} · {addon.desc}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div
          className="rounded flex items-center justify-center"
          style={{
            width: 18,
            height: 18,
            background: selected ? "#1A7A4C" : "white",
            border: selected ? "2px solid #1A7A4C" : "2px solid #d1d5db",
          }}
          aria-hidden="true"
        >
          {selected && (
            <svg
              width="9"
              height="7"
              viewBox="0 0 12 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 5l3 3 7-7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span
          className="text-xs"
          style={{
            color: selected ? "#1A7A4C" : "#9ca3af",
            fontFamily: "var(--font-body)",
          }}
        >
          {selected ? "Added to booking" : "Tap to add"}
        </span>
      </div>
    </button>
  );
}

// ─── Razorpay Modal ──────────────────────────────────────────────────────────────

function RazorpayModal({
  total,
  onSuccess,
}: { total: number; onSuccess: () => void }) {
  useEffect(() => {
    const t = setTimeout(onSuccess, 2200);
    return () => clearTimeout(t);
  }, [onSuccess]);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(4px)" }}
      aria-modal="true"
      aria-label="Processing payment"
    >
      <div
        className="rounded-2xl flex flex-col items-center gap-6 p-10"
        style={{ background: "white", minWidth: 320 }}
      >
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            role="img"
            aria-label="Razorpay logo"
          >
            <rect width="32" height="32" rx="8" fill="#072654" />
            <path d="M16 6l-6 12h5l-3 8 12-14h-6l4-6z" fill="#3395FF" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              color: "#072654",
              fontSize: 18,
            }}
          >
            razorpay
          </span>
        </div>
        <div
          className="rounded-full"
          style={{
            width: 56,
            height: 56,
            border: "4px solid #E8F5EE",
            borderTop: "4px solid #1A7A4C",
            animation: "rzp-spin 0.85s linear infinite",
          }}
          aria-hidden="true"
        />
        <div className="text-center">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 16,
              color: "#1a1a1a",
            }}
          >
            Processing Payment…
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#6b7280",
              marginTop: 4,
            }}
          >
            Please do not close this window
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 22,
              color: "#1A7A4C",
              marginTop: 12,
            }}
          >
            ₹{total.toLocaleString("en-IN")}
          </p>
        </div>
        <span
          style={{
            fontSize: 12,
            color: "#9ca3af",
            fontFamily: "var(--font-body)",
          }}
        >
          🔒 256-bit SSL Secured
        </span>
      </div>
    </div>
  );
}

// ─── Step 1: Batch Selection ──────────────────────────────────────────────────────

function BatchStep({
  selectedBatch,
  setSelectedBatch,
  participants,
  setParticipants,
}: {
  selectedBatch: (typeof BATCHES)[0] | null;
  setSelectedBatch: (b: (typeof BATCHES)[0]) => void;
  participants: number;
  setParticipants: (n: number) => void;
}) {
  const months = [...new Set(BATCHES.map((b) => b.month))];
  const [activeMonth, setActiveMonth] = useState(months[0]);
  const filtered = BATCHES.filter((b) => b.month === activeMonth);

  return (
    <div>
      <h2
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--text-primary)",
        }}
      >
        Select Your Batch
      </h2>
      <p
        className="text-sm mb-6"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-body)",
        }}
      >
        Choose your preferred departure date. Prices include all trek
        essentials.
      </p>
      {/* Participants counter */}
      <div
        className="flex items-center gap-3 mb-6 p-4 rounded-xl"
        style={{
          background: "var(--green-muted)",
          border: "1px solid rgba(26,122,76,0.15)",
        }}
      >
        <span
          className="text-sm font-semibold flex-1"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Participants
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setParticipants(Math.max(1, participants - 1))}
            className="w-9 h-9 rounded-lg font-bold text-lg flex items-center justify-center"
            style={{
              border: "1.5px solid var(--green-primary)",
              color: "var(--green-primary)",
              background: "white",
            }}
            data-ocid="booking.participants_minus"
          >
            −
          </button>
          <span
            className="w-8 text-center font-bold text-lg"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {participants}
          </span>
          <button
            type="button"
            onClick={() => setParticipants(Math.min(12, participants + 1))}
            className="w-9 h-9 rounded-lg font-bold text-lg flex items-center justify-center"
            style={{
              border: "1.5px solid var(--green-primary)",
              color: "var(--green-primary)",
              background: "white",
            }}
            data-ocid="booking.participants_plus"
          >
            +
          </button>
        </div>
        {participants >= 6 && (
          <span
            className="text-xs font-bold px-2 py-1 rounded-lg"
            style={{ background: "#fef3c7", color: "#92400e" }}
          >
            🎉 10% off
          </span>
        )}
      </div>
      {/* Month tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {months.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setActiveMonth(m)}
            className="px-4 py-1.5 rounded-full text-xs font-bold transition-all"
            style={{
              background:
                activeMonth === m ? "var(--green-primary)" : "#f3f4f6",
              color: activeMonth === m ? "white" : "#6b7280",
              fontFamily: "var(--font-body)",
              border: "none",
              cursor: "pointer",
            }}
            data-ocid={`booking.month_tab.${m.toLowerCase()}`}
          >
            {m}
          </button>
        ))}
      </div>
      {/* Batch cards */}
      <div className="grid gap-3">
        {filtered.map((batch, i) => {
          const sc = seatStatus(batch.seats, batch.totalSeats);
          return (
            <button
              key={batch.id}
              type="button"
              disabled={sc.isFull}
              onClick={() => setSelectedBatch(batch)}
              data-ocid={`booking.batch.item.${i + 1}`}
              className="w-full text-left rounded-xl p-4 transition-all"
              style={{
                border:
                  selectedBatch?.id === batch.id
                    ? "2px solid var(--green-primary)"
                    : "1.5px solid #e5e7eb",
                background:
                  selectedBatch?.id === batch.id ? "#E8F5EE" : "white",
                opacity: sc.isFull ? 0.55 : 1,
                cursor: sc.isFull ? "not-allowed" : "pointer",
                boxShadow:
                  selectedBatch?.id === batch.id
                    ? "0 2px 12px rgba(26,122,76,0.12)"
                    : "none",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center shrink-0"
                    style={{
                      width: 40,
                      height: 40,
                      background:
                        selectedBatch?.id === batch.id
                          ? "var(--green-primary)"
                          : sc.isFull
                            ? "#fee2e2"
                            : sc.isLow
                              ? "#fef3c7"
                              : "#f0fdf4",
                      color:
                        selectedBatch?.id === batch.id
                          ? "white"
                          : sc.isFull
                            ? "#dc2626"
                            : sc.isLow
                              ? "#d97706"
                              : "#16a34a",
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                    aria-hidden="true"
                  >
                    {selectedBatch?.id === batch.id ? (
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 6l4 4 8-8"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      batch.day
                    )}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{
                        color: "#1a1a1a",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {sc.isFull ? <s>{batch.date}</s> : batch.date}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{
                        color: "#6b7280",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      ₹{batch.price.toLocaleString("en-IN")}/person
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {sc.isLow && !sc.isFull && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md"
                      style={{ background: "#fef3c7", color: "#92400e" }}
                    >
                      ⚡ Filling fast
                    </span>
                  )}
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: sc.bg, color: sc.color }}
                  >
                    {sc.label}
                  </span>
                </div>
              </div>
              <div
                className="mt-3 rounded-full overflow-hidden"
                style={{ height: 4, background: "#f3f4f6" }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${((batch.totalSeats - batch.seats) / batch.totalSeats) * 100}%`,
                    background: sc.isFull
                      ? "#dc2626"
                      : sc.isLow
                        ? "#f59e0b"
                        : "var(--green-primary)",
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 2: Details ─────────────────────────────────────────────────────────────

type Details = {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  emergency: string;
  medical: string;
  fitness: boolean;
};

function DetailsStep({
  details,
  setDetails,
}: { details: Details; setDetails: (d: Details) => void }) {
  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1.5px solid #e5e7eb",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--text-primary)",
    background: "#fafafa",
    outline: "none",
    boxSizing: "border-box",
  };
  const fields: Array<{
    key: keyof Details;
    label: string;
    type: string;
    placeholder?: string;
    span?: number;
    ocid: string;
    opts?: string[];
  }> = [
    {
      key: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Arjun Sharma",
      span: 2,
      ocid: "booking.name_input",
    },
    {
      key: "email",
      label: "Email Address",
      type: "email",
      placeholder: "you@example.com",
      ocid: "booking.email_input",
    },
    {
      key: "phone",
      label: "Phone / WhatsApp",
      type: "tel",
      placeholder: "+91 98765 43210",
      ocid: "booking.phone_input",
    },
    {
      key: "age",
      label: "Age",
      type: "number",
      placeholder: "25",
      ocid: "booking.age_input",
    },
    {
      key: "gender",
      label: "Gender",
      type: "select",
      ocid: "booking.gender_input",
      opts: ["Male", "Female", "Other", "Prefer not to say"],
    },
    {
      key: "emergency",
      label: "Emergency Contact",
      type: "text",
      placeholder: "Name & Phone",
      span: 2,
      ocid: "booking.emergency_input",
    },
  ];

  return (
    <div>
      <h2
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--text-primary)",
        }}
      >
        Your Details
      </h2>
      <p
        className="text-sm mb-6"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-body)",
        }}
      >
        We need a few details to confirm your booking.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.key} className={f.span === 2 ? "col-span-full" : ""}>
            <label
              htmlFor={f.key}
              className="block text-sm font-semibold mb-1.5"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-body)" }}
            >
              {f.label}
            </label>
            {f.type === "select" ? (
              <select
                id={f.key}
                value={details[f.key] as string}
                onChange={(e) =>
                  setDetails({ ...details, [f.key]: e.target.value })
                }
                data-ocid={f.ocid}
                style={inputBase}
              >
                <option value="">Select</option>
                {f.opts?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={f.key}
                type={f.type}
                placeholder={f.placeholder}
                value={details[f.key] as string}
                onChange={(e) =>
                  setDetails({ ...details, [f.key]: e.target.value })
                }
                data-ocid={f.ocid}
                style={inputBase}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--green-primary)";
                  e.currentTarget.style.background = "white";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.background = "#fafafa";
                }}
              />
            )}
          </div>
        ))}
        <div className="col-span-full">
          <label
            htmlFor="medical"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "#1a1a1a", fontFamily: "var(--font-body)" }}
          >
            Medical Conditions (optional)
          </label>
          <textarea
            id="medical"
            rows={3}
            placeholder="List any medical conditions, allergies, or medications…"
            value={details.medical}
            onChange={(e) =>
              setDetails({ ...details, medical: e.target.value })
            }
            data-ocid="booking.medical_input"
            style={{ ...inputBase, resize: "none", lineHeight: 1.5 }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--green-primary)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          />
        </div>
        <div className="col-span-full">
          <label
            className="flex items-start gap-3 cursor-pointer"
            data-ocid="booking.fitness_checkbox"
          >
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                className="sr-only"
                checked={details.fitness}
                onChange={(e) =>
                  setDetails({ ...details, fitness: e.target.checked })
                }
              />
              <div
                className="w-5 h-5 rounded border-2 flex items-center justify-center transition-all"
                style={{
                  background: details.fitness
                    ? "var(--green-primary)"
                    : "white",
                  borderColor: details.fitness
                    ? "var(--green-primary)"
                    : "#d1d5db",
                }}
              >
                {details.fitness && (
                  <svg
                    width="11"
                    height="9"
                    viewBox="0 0 11 9"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 4l3 3 6-6"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span
              className="text-sm"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
              }}
            >
              I confirm I am physically fit for this trek and have no
              undisclosed medical conditions.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

// ─── Step 3: Add-Ons ─────────────────────────────────────────────────────────────

function AddOnsStep({
  selectedAddons,
  onToggle,
  basePrice,
  addonsTotal,
}: {
  selectedAddons: Set<string>;
  onToggle: (id: string) => void;
  basePrice: number;
  addonsTotal: number;
}) {
  return (
    <div>
      <h2
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--text-primary)",
        }}
      >
        Enhance Your Trek
      </h2>
      <p
        className="text-sm mb-6"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-body)",
        }}
      >
        Add optional services to make your experience even better.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {ADDONS.map((addon) => (
          <AddonCard
            key={addon.id}
            addon={addon}
            selected={selectedAddons.has(addon.id)}
            onToggle={() => onToggle(addon.id)}
          />
        ))}
      </div>
      <div
        className="rounded-xl p-4 flex items-center justify-between"
        style={{
          background: "var(--green-muted)",
          border: "1px solid rgba(26,122,76,0.2)",
        }}
      >
        <div>
          <p
            className="text-sm font-semibold"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Add-Ons Total
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
          >
            {selectedAddons.size} item{selectedAddons.size !== 1 ? "s" : ""}{" "}
            selected
          </p>
        </div>
        <div className="text-right">
          <p
            className="text-xl font-bold"
            style={{
              color: "var(--green-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            +₹{addonsTotal.toLocaleString("en-IN")}
          </p>
          <p
            className="text-xs"
            style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
          >
            Base: ₹{basePrice.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Step 4: Payment ─────────────────────────────────────────────────────────────

function PaymentStep({
  trek,
  selectedBatch,
  participants,
  selectedAddons,
  basePrice,
  groupDiscount,
  couponDiscount,
  gst,
  total,
  coupon,
  setCoupon,
  couponApplied,
  onApplyCoupon,
  onPay,
}: {
  trek: { name: string; priceFrom: number };
  selectedBatch: (typeof BATCHES)[0] | null;
  participants: number;
  selectedAddons: Set<string>;
  basePrice: number;
  groupDiscount: number;
  couponDiscount: number;
  gst: number;
  total: number;
  coupon: string;
  setCoupon: (v: string) => void;
  couponApplied: boolean;
  onApplyCoupon: () => void;
  onPay: () => void;
}) {
  const lineItems: Array<{ label: string; value: number; type: string }> = [
    {
      label: `${trek.name} × ${participants} person${participants > 1 ? "s" : ""}`,
      value: basePrice,
      type: "base",
    },
    ...ADDONS.filter((a) => selectedAddons.has(a.id)).map((a) => ({
      label: a.label,
      value: a.price,
      type: "addon",
    })),
    ...(groupDiscount > 0
      ? [
          {
            label: "Group Discount (10%)",
            value: -groupDiscount,
            type: "discount",
          },
        ]
      : []),
    ...(couponDiscount > 0
      ? [
          {
            label: `Coupon ${coupon.toUpperCase()} (5%)`,
            value: -couponDiscount,
            type: "discount",
          },
        ]
      : []),
    { label: "GST (5%)", value: gst, type: "tax" },
  ];

  return (
    <div>
      <h2
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--text-primary)",
        }}
      >
        Review & Pay
      </h2>
      <p
        className="text-sm mb-6"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "var(--font-body)",
        }}
      >
        Review your order and complete the secure payment.
      </p>
      {/* Order summary */}
      <div
        className="rounded-xl overflow-hidden mb-5"
        style={{ border: "1.5px solid #e5e7eb" }}
      >
        <div className="px-5 py-4" style={{ background: "var(--green-dark)" }}>
          <p
            className="font-bold text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: 16 }}
          >
            {trek.name}
          </p>
          <p
            className="text-sm mt-0.5"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-body)",
            }}
          >
            📅 {selectedBatch?.date ?? "Date TBD"} · 👥 {participants}{" "}
            {participants === 1 ? "person" : "people"}
          </p>
        </div>
        {lineItems.map((row, i) => (
          <div
            key={row.label}
            className="flex justify-between items-center px-5 py-3"
            style={{
              borderBottom:
                i < lineItems.length - 1 ? "1px solid #f3f4f6" : "none",
              background: i % 2 === 0 ? "white" : "#fafafa",
            }}
          >
            <span
              className="text-sm"
              style={{
                color: row.type === "discount" ? "#16a34a" : "#4b5563",
                fontFamily: "var(--font-body)",
              }}
            >
              {row.label}
            </span>
            <span
              className="text-sm font-semibold"
              style={{
                color: row.type === "discount" ? "#16a34a" : "#1a1a1a",
                fontFamily: "var(--font-body)",
              }}
            >
              {row.value < 0
                ? `-₹${Math.abs(row.value).toLocaleString("en-IN")}`
                : `₹${row.value.toLocaleString("en-IN")}`}
            </span>
          </div>
        ))}
        <div
          className="flex justify-between items-center px-5 py-4"
          style={{ background: "var(--green-primary)" }}
        >
          <span
            className="text-white font-bold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Total Amount
          </span>
          <span
            className="text-white font-bold"
            style={{ fontFamily: "var(--font-display)", fontSize: 22 }}
          >
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
      {/* Coupon */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Coupon code (try TREK10)"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          disabled={couponApplied}
          data-ocid="booking.coupon_input"
          className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none"
          style={{
            border: couponApplied
              ? "1.5px solid #16a34a"
              : "1.5px solid #e5e7eb",
            fontFamily: "var(--font-body)",
            background: couponApplied ? "#f0fdf4" : "#fafafa",
            color: "#1a1a1a",
          }}
        />
        <button
          type="button"
          onClick={onApplyCoupon}
          disabled={couponApplied || !coupon}
          data-ocid="booking.coupon_apply_button"
          className="px-5 py-3 rounded-xl font-bold text-sm shrink-0"
          style={{
            background: couponApplied
              ? "#dcfce7"
              : coupon
                ? "var(--green-primary)"
                : "#f3f4f6",
            color: couponApplied ? "#16a34a" : coupon ? "white" : "#9ca3af",
            fontFamily: "var(--font-body)",
            border: "none",
            cursor: couponApplied || !coupon ? "not-allowed" : "pointer",
          }}
        >
          {couponApplied ? "✓ Applied" : "Apply"}
        </button>
      </div>
      {/* Razorpay button */}
      <button
        type="button"
        onClick={onPay}
        data-ocid="booking.pay_button"
        className="w-full flex items-center justify-center gap-3 font-bold text-white rounded-xl"
        style={{
          height: 56,
          background: "#0f2b5b",
          border: "none",
          fontFamily: "var(--font-body)",
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(15,43,91,0.3)",
          letterSpacing: "0.02em",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#1a3d73";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#0f2b5b";
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <rect width="32" height="32" rx="6" fill="#3395FF" />
          <path d="M16 5l-7 13h6l-3 9 13-15h-7l4-7z" fill="white" />
        </svg>
        Pay ₹{total.toLocaleString("en-IN")} Securely
      </button>
      {/* Trust badges */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { icon: "🔒", label: "SSL Secured" },
          { icon: "🛡️", label: "PCI DSS" },
          { icon: "💳", label: "UPI / Cards / EMI" },
          { icon: "⚡", label: "Instant Confirmation" },
        ].map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-1.5 justify-center rounded-lg py-2 px-3"
            style={{ background: "#f8fafc", border: "1px solid #e5e7eb" }}
          >
            <span style={{ fontSize: 14 }}>{badge.icon}</span>
            <span
              className="text-xs font-semibold"
              style={{ color: "#4b5563", fontFamily: "var(--font-body)" }}
            >
              {badge.label}
            </span>
          </div>
        ))}
      </div>
      <p
        className="text-center mt-4 text-xs"
        style={{ color: "#9ca3af", fontFamily: "var(--font-body)" }}
      >
        International cards?{" "}
        <button
          type="button"
          style={{
            color: "#3395FF",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            fontSize: 12,
            textDecoration: "underline",
          }}
          data-ocid="booking.stripe_link"
        >
          Pay via Stripe
        </button>
      </p>
    </div>
  );
}

// ─── Step 5: Confirmed ───────────────────────────────────────────────────────────

function ConfirmedStep({
  trek,
  selectedBatch,
  total,
}: {
  trek: { name: string };
  selectedBatch: (typeof BATCHES)[0] | null;
  total: number;
}) {
  return (
    <div className="flex flex-col items-center gap-5 py-8 text-center">
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: 80,
          height: 80,
          background: "#E8F5EE",
          border: "4px solid var(--green-primary)",
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--green-primary)"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path
            d="M20 6L9 17l-5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h2
          className="text-2xl font-bold mb-2"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          Booking Confirmed! 🎉
        </h2>
        <p
          className="text-sm"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Your spot on <strong>{trek.name}</strong> is secured.
        </p>
        {selectedBatch && (
          <p
            className="text-sm mt-1"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Departure: <strong>{selectedBatch.date}</strong>
          </p>
        )}
        <p
          className="text-lg font-bold mt-3"
          style={{
            color: "var(--green-primary)",
            fontFamily: "var(--font-display)",
          }}
        >
          ₹{total.toLocaleString("en-IN")} paid
        </p>
      </div>
      <div
        className="rounded-xl p-5 text-left w-full max-w-sm"
        style={{
          background: "var(--green-muted)",
          border: "1px solid rgba(26,122,76,0.2)",
        }}
      >
        <p
          className="font-semibold text-sm mb-3"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          What happens next?
        </p>
        {[
          "📧 Booking confirmation sent to your email",
          "📱 WhatsApp details shared by team within 1 hour",
          "📋 Detailed itinerary PDF will be sent 7 days before",
          "💬 Trek coordinator will call 3 days before departure",
        ].map((item) => (
          <p
            key={item}
            className="text-sm py-1"
            style={{ color: "#4b5563", fontFamily: "var(--font-body)" }}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          to="/account/my-bookings"
          className="px-6 py-3 rounded-xl font-bold text-sm text-white"
          style={{
            background: "var(--green-primary)",
            fontFamily: "var(--font-body)",
          }}
          data-ocid="booking.view_bookings_button"
        >
          View My Bookings
        </Link>
        <Link
          to="/treks"
          className="px-6 py-3 rounded-xl font-bold text-sm"
          style={{
            border: "1.5px solid var(--border-default)",
            color: "var(--text-primary)",
            background: "white",
            fontFamily: "var(--font-body)",
          }}
          data-ocid="booking.explore_more_button"
        >
          Explore More Treks
        </Link>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────────

export function BookingPage() {
  const params = useParams({ strict: false }) as { trekSlug?: string };
  const trekSlug = params.trekSlug ?? "kedarkantha";
  const trek = treks.find((t) => t.slug === trekSlug) ?? treks[2];
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [animDir, setAnimDir] = useState<"forward" | "back">("forward");
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const [selectedBatch, setSelectedBatch] = useState<
    (typeof BATCHES)[0] | null
  >(null);
  const [participants, setParticipants] = useState(1);
  const [details, setDetails] = useState<Details>({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    emergency: "",
    medical: "",
    fitness: false,
  });
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [showPayModal, setShowPayModal] = useState(false);

  function toggleAddon(id: string) {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const addonsTotal = ADDONS.filter((a) => selectedAddons.has(a.id)).reduce(
    (s, a) => s + a.price,
    0,
  );
  const basePrice = (selectedBatch?.price ?? trek.priceFrom) * participants;
  const groupDiscount = participants >= 6 ? Math.round(basePrice * 0.1) : 0;
  const couponDiscount = couponApplied
    ? Math.round((basePrice + addonsTotal - groupDiscount) * 0.05)
    : 0;
  const gst = Math.round(
    (basePrice + addonsTotal - groupDiscount - couponDiscount) * 0.05,
  );
  const total = basePrice + addonsTotal - groupDiscount - couponDiscount + gst;

  function goToStep(next: number, dir: "forward" | "back") {
    if (isAnimating) return;
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setStep(next);
      setIsAnimating(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 280);
  }

  function handleNext() {
    if (step === 1 && !selectedBatch) return;
    if (step === 4) {
      setShowPayModal(true);
      return;
    }
    if (step < 5) goToStep(step + 1, "forward");
  }

  function handleBack() {
    if (step > 1) goToStep(step - 1, "back");
  }

  const canNext = step !== 1 || !!selectedBatch;

  const slideClass = isAnimating
    ? animDir === "forward"
      ? "bk-slide-out-left"
      : "bk-slide-out-right"
    : "";

  return (
    <>
      <style>{`
        @keyframes bkSlideInRight  { from { opacity:0; transform:translateX(48px); } to { opacity:1; transform:translateX(0); } }
        @keyframes bkSlideInLeft   { from { opacity:0; transform:translateX(-48px); } to { opacity:1; transform:translateX(0); } }
        @keyframes bkSlideOutLeft  { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-48px); } }
        @keyframes bkSlideOutRight { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(48px); } }
        @keyframes rzp-spin { to { transform: rotate(360deg); } }
        .bk-slide-in       { animation: bkSlideInRight 0.3s ease-out forwards; }
        .bk-slide-in-back  { animation: bkSlideInLeft  0.3s ease-out forwards; }
        .bk-slide-out-left { animation: bkSlideOutLeft 0.28s ease-in forwards; }
        .bk-slide-out-right{ animation: bkSlideOutRight 0.28s ease-in forwards; }
        @media (max-width: 767px) {
          .bk-content-area { padding-bottom: 96px !important; }
          .bk-mobile-bar   { display: flex !important; }
        }
        @media (min-width: 768px) {
          .bk-mobile-bar { display: none !important; }
        }
      `}</style>

      <div
        style={{
          paddingTop: "var(--nav-height, 72px)",
          minHeight: "100vh",
          background: "var(--bg-surface)",
        }}
        data-ocid="booking.page"
      >
        {/* Header */}
        <div
          style={{ background: "var(--green-dark)", padding: "32px 0 56px" }}
        >
          <div
            style={{
              maxWidth: "var(--container-narrow)",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div
              className="flex items-center gap-2 text-sm mb-3"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-body)",
              }}
            >
              <Link to="/" style={{ color: "inherit" }}>
                Home
              </Link>
              <span>/</span>
              <Link to="/treks" style={{ color: "inherit" }}>
                Treks
              </Link>
              <span>/</span>
              <span style={{ color: "white" }}>{trek.name}</span>
            </div>
            <h1
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book: {trek.name}
            </h1>
            <p
              className="mt-1 text-sm"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-body)",
              }}
            >
              {trek.durationLabel} · {trek.difficulty} · Max{" "}
              {trek.maxAltitudeFt.toLocaleString()} ft
            </p>
          </div>
        </div>

        <div
          style={{
            maxWidth: "var(--container-narrow)",
            margin: "-28px auto 0",
            padding: "0 24px",
          }}
          className="bk-content-area"
        >
          {/* Stepper */}
          <StepStepper current={step} />

          {/* Step content */}
          <div
            ref={contentRef}
            className={`rounded-2xl mt-5 ${slideClass}`}
            style={{
              background: "white",
              boxShadow: "var(--card-shadow)",
              padding: "32px",
              overflow: "hidden",
            }}
          >
            {step === 1 && (
              <BatchStep
                selectedBatch={selectedBatch}
                setSelectedBatch={setSelectedBatch}
                participants={participants}
                setParticipants={setParticipants}
              />
            )}
            {step === 2 && (
              <DetailsStep details={details} setDetails={setDetails} />
            )}
            {step === 3 && (
              <AddOnsStep
                selectedAddons={selectedAddons}
                onToggle={toggleAddon}
                basePrice={basePrice}
                addonsTotal={addonsTotal}
              />
            )}
            {step === 4 && (
              <PaymentStep
                trek={trek}
                selectedBatch={selectedBatch}
                participants={participants}
                selectedAddons={selectedAddons}
                basePrice={basePrice}
                groupDiscount={groupDiscount}
                couponDiscount={couponDiscount}
                gst={gst}
                total={total}
                coupon={coupon}
                setCoupon={setCoupon}
                couponApplied={couponApplied}
                onApplyCoupon={() => {
                  if (coupon.toUpperCase() === "TREK10") setCouponApplied(true);
                }}
                onPay={() => setShowPayModal(true)}
              />
            )}
            {step === 5 && (
              <ConfirmedStep
                trek={trek}
                selectedBatch={selectedBatch}
                total={total}
              />
            )}
          </div>

          {/* Desktop nav */}
          {step < 5 && (
            <div className="md:flex justify-between items-center mt-5 mb-16 hidden">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{
                    border: "1.5px solid var(--border-default)",
                    color: "var(--text-primary)",
                    background: "white",
                    fontFamily: "var(--font-body)",
                  }}
                  data-ocid="booking.back_button"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={handleNext}
                disabled={!canNext}
                className="px-8 py-3 rounded-xl font-semibold text-sm text-white"
                style={{
                  background: !canNext
                    ? "#a7c9ba"
                    : step === 4
                      ? "var(--amber)"
                      : "var(--green-primary)",
                  fontFamily: "var(--font-body)",
                  cursor: !canNext ? "not-allowed" : "pointer",
                  boxShadow:
                    step === 4 && canNext
                      ? "0 4px 16px rgba(244,166,35,0.4)"
                      : "none",
                  border: "none",
                  transition: "background 0.2s",
                }}
                data-ocid={
                  step === 4 ? "booking.pay_button" : "booking.next_button"
                }
              >
                {step === 4
                  ? `💳 Pay ₹${total.toLocaleString("en-IN")} Securely`
                  : "Next Step →"}
              </button>
            </div>
          )}
          {step === 5 && <div className="pb-16" />}
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      {step < 5 && (
        <div
          className="bk-mobile-bar fixed bottom-0 left-0 right-0 items-center gap-3 px-4 py-3 z-40"
          style={{
            background: "white",
            borderTop: "1px solid #e5e7eb",
            boxShadow: "0 -4px 16px rgba(0,0,0,0.08)",
            display: "none",
          }}
          data-ocid="booking.mobile_bar"
        >
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="shrink-0 px-5 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                border: "1.5px solid var(--border-default)",
                color: "var(--text-primary)",
                background: "white",
                fontFamily: "var(--font-body)",
              }}
              data-ocid="booking.mobile_back_button"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={handleNext}
            disabled={!canNext}
            className="flex-1 py-3.5 rounded-xl font-bold text-sm text-white"
            style={{
              background: !canNext
                ? "#a7c9ba"
                : step === 4
                  ? "var(--amber)"
                  : "var(--green-primary)",
              fontFamily: "var(--font-body)",
              cursor: !canNext ? "not-allowed" : "pointer",
              boxShadow:
                step === 4 && canNext
                  ? "0 4px 16px rgba(244,166,35,0.45)"
                  : "none",
              border: "none",
            }}
            data-ocid={
              step === 4
                ? "booking.mobile_pay_button"
                : "booking.mobile_next_button"
            }
          >
            {step === 4
              ? `💳 Pay ₹${total.toLocaleString("en-IN")}`
              : step === 3
                ? "Review & Pay →"
                : "Continue →"}
          </button>
        </div>
      )}

      {/* Razorpay modal */}
      {showPayModal && (
        <RazorpayModal
          total={total}
          onSuccess={() => {
            setShowPayModal(false);
            goToStep(5, "forward");
            navigate({ to: "/payment/success" });
          }}
        />
      )}
    </>
  );
}
