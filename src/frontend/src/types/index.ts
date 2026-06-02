export interface Trip {
  id: string;
  name: string;
  region: string;
  country: string;
  subRegion?: string;
  tripType: string;
  difficulty: string;
  difficultyGrade: number;
  duration: number;
  maxAltitude: number;
  maxGroup: number;
  departureDate?: string;
  returnDate?: string;
  priceINR?: number;
  priceUSD?: number;
  isPremium: boolean;
  isOnRequest: boolean;
  imageUrl: string;
  season: string[];
  slug: string;
}

export interface TripFilters {
  region?: string;
  difficulty?: string;
  duration?: string;
  season?: string;
  country?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  tripInterest?: string;
  numberOfPeople?: string;
  preferredDates?: string;
  message: string;
}

export interface TailorMadeFormData {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  destination?: string;
  numberOfPeople: string;
  preferredDuration?: string;
  budgetRange: string;
  preferredDates?: string;
  activityType: string;
  specialRequirements?: string;
}

export interface GHTFormData {
  name: string;
  email: string;
  phone?: string;
  ghtSection: string;
  message?: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface Testimonial {
  id: number;
  name: string;
  trip: string;
  text: string;
  avatar?: string;
}

export interface BookingRequestInput {
  tripId: string;
  tripName: string;
  selectedDate: string;
  participants: bigint;
  name: string;
  email: string;
  phone: string;
  nationality: string;
}

export interface BookingRequest {
  bookingId: bigint;
  userId: unknown;
  tripId: string;
  tripName: string;
  selectedDate: string;
  participants: bigint;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  status: string;
  createdAt: bigint;
  bookingRef: string;
}
