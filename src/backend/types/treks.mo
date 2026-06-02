import Debug "mo:core/Debug";

module {
  /// Difficulty enum for Global Trek treks.
  public type Difficulty = { #Easy; #EasyModerate; #Moderate; #Difficult };

  /// Category of the entry — trekking or pilgrimage.
  public type TrekCategory = { #trek; #yatra };

  /// Booking/payment status enum.
  public type PaymentStatus = { #pending; #paid; #failed; #refunded };

  /// Booking lifecycle status.
  public type BookingStatus = { #pending; #confirmed; #cancelled };

  /// Batch availability status.
  public type BatchStatus = { #open; #filling; #full; #cancelled };

  /// One day in the itinerary.
  public type ItineraryDay = {
    dayNumber     : Nat;
    title         : Text;
    altitude      : ?Text;      // e.g. "3,800 m"
    distanceKm    : ?Float;
    durationHrs   : ?Float;
    meals         : ?Text;      // e.g. "Breakfast, Lunch, Dinner"
    accommodation : ?Text;
    description   : Text;
    waypoints     : [Text];
  };

  /// FAQ entry.
  public type FAQ = {
    question : Text;
    answer   : Text;
  };

  /// Expanded Trek / Yatra record.
  public type Trek = {
    id               : Text;        // same as slug
    slug             : Text;
    name             : Text;
    state            : Text;        // e.g. "Uttarakhand"
    district         : ?Text;
    country          : Text;
    region           : Text;        // e.g. "India, Uttarakhand"
    category         : TrekCategory;
    difficulty       : Difficulty;
    durationDays     : Nat;
    maxAltitudeM     : Nat;         // metres
    trekDistanceKm   : ?Float;
    priceFrom        : Nat;         // INR
    priceTo          : ?Nat;        // INR
    bestSeason       : Text;
    startPoint       : ?Text;
    endPoint         : ?Text;
    highlights       : [Text];
    itinerary        : [ItineraryDay];
    inclusions       : [Text];
    exclusions       : [Text];
    packingList      : [Text];
    youtubeVideoIds  : [Text];
    faqs             : [FAQ];
    isTrending       : Bool;
    isEditorsPick    : Bool;
    isMostBooked     : Bool;
    imageUrl         : ?Text;
    description      : Text;
  };

  /// A scheduled departure batch for a trek.
  public type TrekBatch = {
    id            : Nat;
    trekSlug      : Text;
    startDate     : Text;  // ISO date e.g. "2026-12-01"
    endDate       : Text;
    pricePerPerson: Nat;
    totalSeats    : Nat;
    bookedSeats   : Nat;
    status        : BatchStatus;
  };

  /// Individual participant details.
  public type Participant = {
    name              : Text;
    age               : Nat;
    gender            : Text;
    emergencyContact  : Text;
    medicalConditions : ?Text;
    fitnessDeclaration: Bool;
  };

  /// Add-ons selected at booking time.
  public type BookingAddOns = {
    gearRental      : Bool;
    cityPickup      : Bool;
    singleRoom      : Bool;
    photography     : Bool;
    insurance       : Bool;
  };

  /// Full booking record stored on-chain.
  public type Booking = {
    id                    : Nat;
    userId                : Principal;
    trekSlug              : Text;
    batchId               : Nat;
    participants          : [Participant];
    addOns                : BookingAddOns;
    totalAmount           : Nat;
    gstAmount             : Nat;
    couponCode            : ?Text;
    paymentStatus         : PaymentStatus;
    stripePaymentIntentId : ?Text;
    createdAt             : Int;
    status                : BookingStatus;
    bookingRef            : Text;  // e.g. "GT-2026-0001"
  };

  /// Wishlist entry.
  public type WishlistItem = {
    userId   : Principal;
    trekSlug : Text;
    addedAt  : Int;
  };

  /// Gear rental item available for hire.
  public type GearRentalItem = {
    id            : Nat;
    name          : Text;
    pricePerDay   : Nat;
    depositAmount : Nat;
    description   : Text;
    available     : Bool;
  };

  /// Send-inquiry form per trek.
  public type Inquiry = {
    id        : Nat;
    trekSlug  : Text;
    name      : Text;
    email     : Text;
    phone     : Text;
    message   : Text;
    createdAt : Int;
  };

  /// Callback request from the floating CTA.
  public type CallbackRequest = {
    id            : Nat;
    name          : Text;
    phone         : Text;
    trekInterest  : ?Text;
    preferredDate : ?Text;
    createdAt     : Int;
  };
};
