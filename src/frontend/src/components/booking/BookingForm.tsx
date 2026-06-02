import { useBooking } from "@/hooks/useBooking";
import type { BookingRequest } from "@/types";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BookingConfirmationModal from "./BookingConfirmationModal";

interface BookingFormProps {
  tripId: string;
  tripName: string;
  defaultDate?: string;
  priceUSD?: number;
  priceINR?: number;
}

interface FormValues {
  selectedDate: string;
  participants: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
}

export default function BookingForm({
  tripId,
  tripName,
  defaultDate = "",
  priceUSD,
  priceINR,
}: BookingFormProps) {
  const { loginStatus, login } = useInternetIdentity();
  const { submitBooking, isSubmitting, error } = useBooking();
  const [confirmed, setConfirmed] = useState<BookingRequest | null>(null);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      selectedDate: defaultDate,
      participants: "1",
    },
  });

  const isLoggedIn = loginStatus === "success";

  const onSubmit = async (data: FormValues) => {
    const result = await submitBooking({
      tripId,
      tripName,
      selectedDate: data.selectedDate,
      participants: BigInt(Number.parseInt(data.participants, 10)),
      name: data.name,
      email: data.email,
      phone: data.phone,
      nationality: data.nationality,
    });
    if (result) {
      setConfirmed(result);
      setOpen(true);
    }
  };

  return (
    <div
      data-ocid="booking_form.panel"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "0.04em",
        }}
      >
        Book This Expedition
      </div>

      {/* Price reminder */}
      {(priceUSD || priceINR) && (
        <div
          style={{
            display: "flex",
            gap: "12px",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--accent-gold)",
          }}
        >
          {priceUSD && <span>USD ${priceUSD.toLocaleString()}</span>}
          {priceUSD && priceINR && (
            <span style={{ color: "var(--text-muted)" }}>·</span>
          )}
          {priceINR && (
            <span style={{ color: "var(--text-secondary)" }}>
              ₹{priceINR.toLocaleString()}
            </span>
          )}
        </div>
      )}

      {!isLoggedIn ? (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "20px 0",
            textAlign: "center",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent-blue)"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Sign in with Internet Identity to book your expedition and track
            your reservation.
          </p>
          <button
            type="button"
            data-ocid="booking_form.login_button"
            onClick={() => login()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "44px",
              padding: "0 24px",
              background: "var(--accent-blue)",
              color: "var(--text-inverse)",
              borderRadius: "var(--btn-radius)",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              cursor: "pointer",
              border: "none",
              transition: "background 150ms ease, box-shadow 150ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "var(--accent-blue-hover)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "var(--shadow-glow-blue)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "var(--accent-blue)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            Sign In to Book
          </button>

          <a
            href="https://wa.me/918882306635"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="booking_form.whatsapp_button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              height: "44px",
              padding: "0 24px",
              background: "transparent",
              color: "var(--whatsapp-green)",
              border: "1px solid var(--whatsapp-green)",
              borderRadius: "var(--btn-radius)",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textDecoration: "none",
              transition: "background 150ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(37,211,102,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
            }}
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="var(--whatsapp-green)"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>
      ) : (
        <motion.form
          key="booking-form"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          {/* Date */}
          <FormField
            label="Departure Date"
            error={errors.selectedDate?.message}
          >
            <input
              {...register("selectedDate", {
                required: "Please select a date",
              })}
              type="text"
              placeholder="e.g. 15 Jun 2026"
              data-ocid="booking_form.date_input"
              style={inputStyle}
            />
          </FormField>

          {/* Participants */}
          <FormField label="Participants" error={errors.participants?.message}>
            <select
              {...register("participants", { required: "Required" })}
              data-ocid="booking_form.participants_select"
              style={inputStyle}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "person" : "people"}
                </option>
              ))}
            </select>
          </FormField>

          {/* Name */}
          <FormField label="Full Name" error={errors.name?.message}>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name too short" },
              })}
              type="text"
              placeholder="Your full name"
              data-ocid="booking_form.name_input"
              style={inputStyle}
            />
          </FormField>

          {/* Email */}
          <FormField label="Email" error={errors.email?.message}>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email",
                },
              })}
              type="email"
              placeholder="you@example.com"
              data-ocid="booking_form.email_input"
              style={inputStyle}
            />
          </FormField>

          {/* Phone */}
          <FormField label="Phone / WhatsApp" error={errors.phone?.message}>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              placeholder="+91 98765 43210"
              data-ocid="booking_form.phone_input"
              style={inputStyle}
            />
          </FormField>

          {/* Nationality */}
          <FormField label="Nationality" error={errors.nationality?.message}>
            <input
              {...register("nationality", {
                required: "Nationality is required",
              })}
              type="text"
              placeholder="e.g. Indian, British"
              data-ocid="booking_form.nationality_input"
              style={inputStyle}
            />
          </FormField>

          {error && (
            <p
              data-ocid="booking_form.error_state"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--error)",
                background: "rgba(255,80,80,0.08)",
                border: "1px solid rgba(255,80,80,0.2)",
                borderRadius: "6px",
                padding: "8px 12px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            data-ocid="booking_form.submit_button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              height: "48px",
              background: isSubmitting
                ? "var(--bg-surface)"
                : "var(--accent-blue)",
              color: "var(--text-inverse)",
              borderRadius: "var(--btn-radius)",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              border: "none",
              transition: "background 150ms ease, box-shadow 150ms ease",
              opacity: isSubmitting ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting)
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--accent-blue-hover)";
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting)
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--accent-blue)";
            }}
          >
            {isSubmitting ? (
              <>
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ animation: "spin 0.8s linear infinite" }}
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Submitting…
              </>
            ) : (
              "CONFIRM BOOKING"
            )}
          </button>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "var(--text-muted)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            No payment required now · Our team will confirm availability within
            24h
          </p>
        </motion.form>
      )}

      <AnimatePresence>
        {open && confirmed && (
          <BookingConfirmationModal
            booking={confirmed}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FormField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            color: "var(--error)",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "38px",
  padding: "0 10px",
  background: "var(--bg-surface)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "6px",
  fontFamily: "var(--font-body)",
  fontSize: "13px",
  color: "var(--text-primary)",
  outline: "none",
  boxSizing: "border-box",
};
