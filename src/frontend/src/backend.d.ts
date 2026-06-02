import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Participant {
    age: bigint;
    fitnessDeclaration: boolean;
    name: string;
    medicalConditions?: string;
    emergencyContact: string;
    gender: string;
}
export interface FAQ {
    question: string;
    answer: string;
}
export interface Trip {
    id: string;
    region: string;
    subRegion?: string;
    duration: bigint;
    country: string;
    tripType: string;
    difficultyGrade: bigint;
    departureDate?: string;
    isPremium: boolean;
    maxGroup: bigint;
    difficulty: string;
    name: string;
    slug: string;
    season: Array<string>;
    imageUrl?: string;
    priceINR?: bigint;
    priceUSD?: bigint;
    maxAltitude: bigint;
    returnDate?: string;
    isOnRequest: boolean;
}
export interface WishlistItem {
    userId: Principal;
    addedAt: bigint;
    trekSlug: string;
}
export interface Trek {
    id: string;
    region: string;
    durationDays: bigint;
    country: string;
    packingList: Array<string>;
    faqs: Array<FAQ>;
    difficulty: Difficulty;
    isMostBooked: boolean;
    name: string;
    slug: string;
    description: string;
    inclusions: Array<string>;
    highlights: Array<string>;
    isEditorsPick: boolean;
    district?: string;
    priceTo?: bigint;
    state: string;
    imageUrl?: string;
    maxAltitudeM: bigint;
    trekDistanceKm?: number;
    exclusions: Array<string>;
    category: TrekCategory;
    priceFrom: bigint;
    endPoint?: string;
    startPoint?: string;
    isTrending: boolean;
    itinerary: Array<ItineraryDay>;
    youtubeVideoIds: Array<string>;
    bestSeason: string;
}
export interface BookingRequest {
    status: string;
    participants: bigint;
    bookingId: bigint;
    tripName: string;
    userId: Principal;
    name: string;
    createdAt: bigint;
    tripId: string;
    nationality: string;
    email: string;
    phone: string;
    selectedDate: string;
    bookingRef: string;
}
export interface ItineraryDay {
    meals?: string;
    title: string;
    waypoints: Array<string>;
    altitude?: string;
    description: string;
    accommodation?: string;
    distanceKm?: number;
    dayNumber: bigint;
    durationHrs?: number;
}
export interface BookingRequestInput {
    participants: bigint;
    tripName: string;
    name: string;
    tripId: string;
    nationality: string;
    email: string;
    phone: string;
    selectedDate: string;
}
export interface GearRentalItem {
    id: bigint;
    depositAmount: bigint;
    name: string;
    description: string;
    available: boolean;
    pricePerDay: bigint;
}
export interface TrekBatch {
    id: bigint;
    status: BatchStatus;
    endDate: string;
    pricePerPerson: bigint;
    totalSeats: bigint;
    bookedSeats: bigint;
    trekSlug: string;
    startDate: string;
}
export interface Booking {
    id: bigint;
    status: BookingStatus;
    couponCode?: string;
    participants: Array<Participant>;
    paymentStatus: PaymentStatus;
    userId: Principal;
    createdAt: bigint;
    gstAmount: bigint;
    totalAmount: bigint;
    addOns: BookingAddOns;
    trekSlug: string;
    stripePaymentIntentId?: string;
    batchId: bigint;
    bookingRef: string;
}
export interface BookingAddOns {
    gearRental: boolean;
    cityPickup: boolean;
    insurance: boolean;
    singleRoom: boolean;
    photography: boolean;
}
export enum BatchStatus {
    filling = "filling",
    cancelled = "cancelled",
    full = "full",
    open = "open"
}
export enum BookingStatus {
    cancelled = "cancelled",
    pending = "pending",
    confirmed = "confirmed"
}
export enum Difficulty {
    Easy = "Easy",
    EasyModerate = "EasyModerate",
    Difficult = "Difficult",
    Moderate = "Moderate"
}
export enum PaymentStatus {
    pending = "pending",
    paid = "paid",
    refunded = "refunded",
    failed = "failed"
}
export enum TrekCategory {
    trek = "trek",
    yatra = "yatra"
}
export interface backendInterface {
    addToWishlist(trekSlug: string): Promise<void>;
    cancelBooking(bookingId: bigint): Promise<boolean>;
    createBooking(trekSlug: string, batchId: bigint, participants: Array<Participant>, addOns: BookingAddOns, totalAmount: bigint, gstAmount: bigint, couponCode: string | null): Promise<Booking>;
    getBooking(bookingId: bigint): Promise<Booking | null>;
    getBookingById(id: bigint): Promise<BookingRequest | null>;
    getGearRentalItems(): Promise<Array<GearRentalItem>>;
    getMyBookingRequests(): Promise<Array<BookingRequest>>;
    getMyTrekBookings(): Promise<Array<Booking>>;
    getMyWishlist(): Promise<Array<WishlistItem>>;
    getTrekBatches(trekSlug: string): Promise<Array<TrekBatch>>;
    getTrekBySlug(slug: string): Promise<Trek | null>;
    getTreks(): Promise<Array<Trek>>;
    getTreksByDifficulty(difficulty: Difficulty): Promise<Array<Trek>>;
    getTreksByState(state: string): Promise<Array<Trek>>;
    getTripBySlug(slug: string): Promise<Trip | null>;
    getTrips(): Promise<Array<Trip>>;
    getTripsByDifficulty(difficulty: string): Promise<Array<Trip>>;
    getTripsByDuration(durationRange: string): Promise<Array<Trip>>;
    getTripsByRegion(region: string): Promise<Array<Trip>>;
    getTripsBySeason(season: string): Promise<Array<Trip>>;
    getUpcomingBatchesForTrek(trekSlug: string): Promise<Array<TrekBatch>>;
    removeFromWishlist(trekSlug: string): Promise<void>;
    searchTreks(keyword: string): Promise<Array<Trek>>;
    submitBookingInquiry(tripId: string, name: string, email: string, message: string): Promise<bigint>;
    submitBookingRequest(input: BookingRequestInput): Promise<BookingRequest>;
    submitCallbackRequest(name: string, phone: string, trekInterest: string | null, preferredDate: string | null): Promise<bigint>;
    submitContact(name: string, email: string, phone: string | null, country: string | null, tripInterest: string | null, numberOfPeople: string | null, preferredDates: string | null, message: string): Promise<bigint>;
    submitGHTInterest(name: string, email: string, phone: string | null, ghtSection: string, message: string | null): Promise<bigint>;
    submitInquiry(trekSlug: string, name: string, email: string, phone: string, message: string): Promise<bigint>;
    submitTailorMade(name: string, email: string, phone: string | null, country: string | null, destination: string | null, numberOfPeople: string, preferredDuration: string | null, budgetRange: string, preferredDates: string | null, activityType: string, specialRequirements: string | null): Promise<bigint>;
    subscribeNewsletter(email: string): Promise<bigint>;
    updateBookingPaymentStatus(bookingId: bigint, paymentStatus: PaymentStatus, stripePaymentIntentId: string | null): Promise<boolean>;
}
