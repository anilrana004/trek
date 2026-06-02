import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import TreksTypes "../types/treks";

module {
  public type Trek = TreksTypes.Trek;
  public type TrekBatch = TreksTypes.TrekBatch;
  public type Booking = TreksTypes.Booking;
  public type WishlistItem = TreksTypes.WishlistItem;
  public type GearRentalItem = TreksTypes.GearRentalItem;
  public type Inquiry = TreksTypes.Inquiry;
  public type CallbackRequest = TreksTypes.CallbackRequest;
  public type Participant = TreksTypes.Participant;
  public type BookingAddOns = TreksTypes.BookingAddOns;
  public type Difficulty = TreksTypes.Difficulty;
  public type TrekCategory = TreksTypes.TrekCategory;

  // ── Trek catalogue ──────────────────────────────────────────────────────────

  public func listTreks(treks : List.List<Trek>) : [Trek] {
    treks.toArray();
  };

  public func findTrekBySlug(treks : List.List<Trek>, slug : Text) : ?Trek {
    treks.find(func(t) { t.slug == slug });
  };

  public func filterTreksByState(treks : List.List<Trek>, state : Text) : [Trek] {
    treks.filter(func(t) { t.state == state }).toArray();
  };

  public func filterTreksByDifficulty(treks : List.List<Trek>, difficulty : Difficulty) : [Trek] {
    treks.filter(func(t) { t.difficulty == difficulty }).toArray();
  };

  public func searchTreks(treks : List.List<Trek>, keyword : Text) : [Trek] {
    let kw = keyword.toLower();
    treks.filter(func(t) {
      t.name.toLower().contains(#text kw) or
      t.state.toLower().contains(#text kw) or
      t.description.toLower().contains(#text kw)
    }).toArray();
  };

  // ── Batches ─────────────────────────────────────────────────────────────────

  public func getBatchesForTrek(
    batches  : List.List<TrekBatch>,
    trekSlug : Text,
  ) : [TrekBatch] {
    batches.filter(func(b) { b.trekSlug == trekSlug }).toArray();
  };

  public func getUpcomingBatchesForTrek(
    batches  : List.List<TrekBatch>,
    trekSlug : Text,
  ) : [TrekBatch] {
    batches.filter(func(b) {
      b.trekSlug == trekSlug and
      (b.status == #open or b.status == #filling)
    }).toArray();
  };

  public func findBatchById(
    batches : List.List<TrekBatch>,
    batchId : Nat,
  ) : ?TrekBatch {
    batches.find(func(b) { b.id == batchId });
  };

  public func incrementBatchBookedSeats(
    batches : List.List<TrekBatch>,
    batchId : Nat,
  ) : Bool {
    var found = false;
    batches.mapInPlace(func(b) {
      if (b.id == batchId and b.bookedSeats < b.totalSeats) {
        found := true;
        let newBooked = b.bookedSeats + 1;
        let newStatus : TreksTypes.BatchStatus = if (newBooked >= b.totalSeats) #full else #filling;
        { b with bookedSeats = newBooked; status = newStatus };
      } else { b };
    });
    found;
  };

  // ── Bookings ────────────────────────────────────────────────────────────────

  public func createBooking(
    bookings     : List.List<Booking>,
    state        : { var nextBookingId : Nat },
    userId       : Principal,
    trekSlug     : Text,
    batchId      : Nat,
    participants : [Participant],
    addOns       : BookingAddOns,
    totalAmount  : Nat,
    gstAmount    : Nat,
    couponCode   : ?Text,
  ) : Booking {
    let id = state.nextBookingId;
    state.nextBookingId += 1;
    let ref = "GT-2026-" # debug_show(id);
    let booking : Booking = {
      id;
      userId;
      trekSlug;
      batchId;
      participants;
      addOns;
      totalAmount;
      gstAmount;
      couponCode;
      paymentStatus = #pending;
      stripePaymentIntentId = null;
      createdAt = Time.now();
      status = #pending;
      bookingRef = ref;
    };
    bookings.add(booking);
    booking;
  };

  public func getBookingById(
    bookings  : List.List<Booking>,
    bookingId : Nat,
  ) : ?Booking {
    bookings.find(func(b) { b.id == bookingId });
  };

  public func getBookingsByUser(
    bookings : List.List<Booking>,
    userId   : Principal,
  ) : [Booking] {
    bookings.filter(func(b) { b.userId == userId }).toArray();
  };

  public func updateBookingPaymentStatus(
    bookings              : List.List<Booking>,
    bookingId             : Nat,
    paymentStatus         : TreksTypes.PaymentStatus,
    stripePaymentIntentId : ?Text,
  ) : Bool {
    var found = false;
    bookings.mapInPlace(func(b) {
      if (b.id == bookingId) {
        found := true;
        let newStatus : TreksTypes.BookingStatus = if (paymentStatus == #paid) #confirmed else b.status;
        { b with paymentStatus; stripePaymentIntentId; status = newStatus };
      } else { b };
    });
    found;
  };

  public func cancelBooking(
    bookings  : List.List<Booking>,
    bookingId : Nat,
    userId    : Principal,
  ) : Bool {
    var found = false;
    bookings.mapInPlace(func(b) {
      if (b.id == bookingId and b.userId == userId) {
        found := true;
        { b with status = #cancelled };
      } else { b };
    });
    found;
  };

  // ── Wishlist ────────────────────────────────────────────────────────────────

  public func addToWishlist(
    wishlist : List.List<WishlistItem>,
    userId   : Principal,
    trekSlug : Text,
  ) : () {
    let alreadyAdded = wishlist.find(func(w) { w.userId == userId and w.trekSlug == trekSlug }) != null;
    if (not alreadyAdded) {
      wishlist.add({ userId; trekSlug; addedAt = Time.now() });
    };
  };

  public func removeFromWishlist(
    wishlist : List.List<WishlistItem>,
    userId   : Principal,
    trekSlug : Text,
  ) : () {
    wishlist.retain(func(w) { not (w.userId == userId and w.trekSlug == trekSlug) });
  };

  public func getWishlistByUser(
    wishlist : List.List<WishlistItem>,
    userId   : Principal,
  ) : [WishlistItem] {
    wishlist.filter(func(w) { w.userId == userId }).toArray();
  };

  // ── Inquiries & Callbacks ───────────────────────────────────────────────────

  public func addInquiry(
    inquiries : List.List<Inquiry>,
    state     : { var nextInquiryId : Nat },
    trekSlug  : Text,
    name      : Text,
    email     : Text,
    phone     : Text,
    message   : Text,
  ) : Nat {
    let id = state.nextInquiryId;
    state.nextInquiryId += 1;
    inquiries.add({ id; trekSlug; name; email; phone; message; createdAt = Time.now() });
    id;
  };

  public func addCallbackRequest(
    callbacks    : List.List<CallbackRequest>,
    state        : { var nextCallbackId : Nat },
    name         : Text,
    phone        : Text,
    trekInterest : ?Text,
    preferredDate: ?Text,
  ) : Nat {
    let id = state.nextCallbackId;
    state.nextCallbackId += 1;
    callbacks.add({ id; name; phone; trekInterest; preferredDate; createdAt = Time.now() });
    id;
  };

  // ── Gear rental ─────────────────────────────────────────────────────────────

  public func listGearRentalItems(gear : List.List<GearRentalItem>) : [GearRentalItem] {
    gear.toArray();
  };
};
