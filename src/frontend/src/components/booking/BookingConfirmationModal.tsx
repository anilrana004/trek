import type { BookingRequest } from "@/types";
import { AnimatePresence, motion } from "motion/react";

export default function BookingConfirmationModal({
  booking,
  onClose,
}: {
  booking: BookingRequest;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="rounded-2xl p-8 max-w-sm w-full mx-4"
          style={{
            background: "white",
            boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 64,
                height: 64,
                background: "#E8F5EE",
                border: "3px solid #1A7A4C",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1A7A4C"
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
                id="modal-title"
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}
              >
                Booking Requested!
              </h2>
              <p
                className="text-sm mt-2"
                style={{ color: "#4b5563", fontFamily: "var(--font-body)" }}
              >
                Your booking for <strong>{booking.tripName}</strong> has been
                submitted. Our team will confirm within 24 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-xl font-bold text-white text-sm"
              style={{
                background: "#1A7A4C",
                border: "none",
                fontFamily: "var(--font-body)",
                cursor: "pointer",
              }}
              data-ocid="booking.modal_close_button"
            >
              Got it!
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
