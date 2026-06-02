import { createActor } from "@/lib/backendActor";
import type { BookingRequest, BookingRequestInput } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useState } from "react";

export function useBooking() {
  const { actor } = useActor(createActor);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitBooking = async (
    input: BookingRequestInput,
  ): Promise<BookingRequest | null> => {
    if (!actor) {
      setError("Not connected. Please try again.");
      return null;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await actor.submitBookingRequest(input);
      return result as BookingRequest;
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Booking failed. Please try again.";
      setError(msg);
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitBooking, isSubmitting, error };
}
