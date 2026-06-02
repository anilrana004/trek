import Debug "mo:core/Debug";

module {
  /// General contact enquiry from any site form.
  public type ContactSubmission = {
    id              : Nat;
    name            : Text;
    email           : Text;
    phone           : ?Text;
    country         : ?Text;
    tripInterest    : ?Text;
    numberOfPeople  : ?Text;
    preferredDates  : ?Text;
    message         : Text;
    submittedAt     : Int;
  };

  /// Newsletter sign-up.
  public type NewsletterSubscription = {
    id           : Nat;
    email        : Text;
    subscribedAt : Int;
  };

  /// Custom / tailor-made trip request.
  public type TailorMadeRequest = {
    id                  : Nat;
    name                : Text;
    email               : Text;
    phone               : ?Text;
    country             : ?Text;
    destination         : ?Text;
    numberOfPeople      : Text;   // e.g. "1-2", "3-5", "6-10", "10+"
    preferredDuration   : ?Text;
    budgetRange         : Text;   // e.g. "₹50K–₹1L"
    preferredDates      : ?Text;
    activityType        : Text;   // "Trek", "Climb", "Mix"
    specialRequirements : ?Text;
    submittedAt         : Int;
  };

  /// Interest registration for a GHT India section.
  public type GHTInterestForm = {
    id          : Nat;
    name        : Text;
    email       : Text;
    phone       : ?Text;
    ghtSection  : Text;  // "Kashmir", "Himachal", "Kumaon", "Sikkim", "Full traverse"
    message     : ?Text;
    submittedAt : Int;
  };

  /// Quick booking enquiry tied to a specific trip.
  public type BookingInquiry = {
    id          : Nat;
    tripId      : Text;
    name        : Text;
    email       : Text;
    message     : Text;
    submittedAt : Int;
  };

  /// Input payload for a full booking request (caller-supplied fields only).
  public type BookingRequestInput = {
    tripId        : Text;
    tripName      : Text;
    selectedDate  : Text;
    participants  : Nat;
    name          : Text;
    email         : Text;
    phone         : Text;
    nationality   : Text;
  };

  /// Full booking request record stored on-chain.
  public type BookingRequest = {
    bookingId    : Nat;
    userId       : Principal;
    tripId       : Text;
    tripName     : Text;
    selectedDate : Text;
    participants : Nat;
    name         : Text;
    email        : Text;
    phone        : Text;
    nationality  : Text;
    status       : Text; // default "pending"
    createdAt    : Int;
    bookingRef   : Text; // e.g. "WM-2026-0001"
  };
};
