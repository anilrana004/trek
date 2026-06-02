import List "mo:core/List";
import TreksTypes "../types/treks";
import TreksLib "../lib/treks";

mixin (
  treks     : List.List<TreksTypes.Trek>,
  batches   : List.List<TreksTypes.TrekBatch>,
  bookings  : List.List<TreksTypes.Booking>,
  wishlist  : List.List<TreksTypes.WishlistItem>,
  gear      : List.List<TreksTypes.GearRentalItem>,
  inquiries : List.List<TreksTypes.Inquiry>,
  callbacks : List.List<TreksTypes.CallbackRequest>,
  state     : {
    var nextBookingId  : Nat;
    var nextInquiryId  : Nat;
    var nextCallbackId : Nat;
  },
) {
  /// Return all treks in the catalogue.
  public query func getTreks() : async [TreksTypes.Trek] {
    TreksLib.listTreks(treks);
  };

  /// Return a single trek by its URL slug.
  public query func getTrekBySlug(slug : Text) : async ?TreksTypes.Trek {
    TreksLib.findTrekBySlug(treks, slug);
  };

  /// Return treks filtered by state name (e.g. "Uttarakhand").
  public query func getTreksByState(state_ : Text) : async [TreksTypes.Trek] {
    TreksLib.filterTreksByState(treks, state_);
  };

  /// Return treks filtered by difficulty.
  public query func getTreksByDifficulty(difficulty : TreksTypes.Difficulty) : async [TreksTypes.Trek] {
    TreksLib.filterTreksByDifficulty(treks, difficulty);
  };

  /// Search treks by keyword (matches name, state, highlights).
  public query func searchTreks(keyword : Text) : async [TreksTypes.Trek] {
    TreksLib.searchTreks(treks, keyword);
  };

  /// Return all batches for a specific trek.
  public query func getTrekBatches(trekSlug : Text) : async [TreksTypes.TrekBatch] {
    TreksLib.getBatchesForTrek(batches, trekSlug);
  };

  /// Return only upcoming (non-full, non-cancelled) batches for a trek.
  public query func getUpcomingBatchesForTrek(trekSlug : Text) : async [TreksTypes.TrekBatch] {
    TreksLib.getUpcomingBatchesForTrek(batches, trekSlug);
  };

  /// Create a booking. Returns the created Booking record.
  public shared ({ caller }) func createBooking(
    trekSlug     : Text,
    batchId      : Nat,
    participants : [TreksTypes.Participant],
    addOns       : TreksTypes.BookingAddOns,
    totalAmount  : Nat,
    gstAmount    : Nat,
    couponCode   : ?Text,
  ) : async TreksTypes.Booking {
    let booking = TreksLib.createBooking(
      bookings, state, caller, trekSlug, batchId,
      participants, addOns, totalAmount, gstAmount, couponCode,
    );
    ignore TreksLib.incrementBatchBookedSeats(batches, batchId);
    booking;
  };

  /// Return a booking by its numeric ID.
  public query func getBooking(bookingId : Nat) : async ?TreksTypes.Booking {
    TreksLib.getBookingById(bookings, bookingId);
  };

  /// Return all bookings for the calling principal.
  public query ({ caller }) func getMyTrekBookings() : async [TreksTypes.Booking] {
    TreksLib.getBookingsByUser(bookings, caller);
  };

  /// Cancel a booking (caller must be the owner).
  public shared ({ caller }) func cancelBooking(bookingId : Nat) : async Bool {
    TreksLib.cancelBooking(bookings, bookingId, caller);
  };

  /// Update payment status after Stripe webhook confirmation.
  public shared func updateBookingPaymentStatus(
    bookingId             : Nat,
    paymentStatus         : TreksTypes.PaymentStatus,
    stripePaymentIntentId : ?Text,
  ) : async Bool {
    TreksLib.updateBookingPaymentStatus(bookings, bookingId, paymentStatus, stripePaymentIntentId);
  };

  /// Add a trek to the caller's wishlist.
  public shared ({ caller }) func addToWishlist(trekSlug : Text) : async () {
    TreksLib.addToWishlist(wishlist, caller, trekSlug);
  };

  /// Remove a trek from the caller's wishlist.
  public shared ({ caller }) func removeFromWishlist(trekSlug : Text) : async () {
    TreksLib.removeFromWishlist(wishlist, caller, trekSlug);
  };

  /// Return the calling principal's wishlist.
  public query ({ caller }) func getMyWishlist() : async [TreksTypes.WishlistItem] {
    TreksLib.getWishlistByUser(wishlist, caller);
  };

  /// Return all available gear rental items.
  public query func getGearRentalItems() : async [TreksTypes.GearRentalItem] {
    TreksLib.listGearRentalItems(gear);
  };

  /// Submit a trek inquiry form.
  public shared func submitInquiry(
    trekSlug : Text,
    name     : Text,
    email    : Text,
    phone    : Text,
    message  : Text,
  ) : async Nat {
    TreksLib.addInquiry(inquiries, state, trekSlug, name, email, phone, message);
  };

  /// Submit a callback request from the floating CTA.
  public shared func submitCallbackRequest(
    name          : Text,
    phone         : Text,
    trekInterest  : ?Text,
    preferredDate : ?Text,
  ) : async Nat {
    TreksLib.addCallbackRequest(callbacks, state, name, phone, trekInterest, preferredDate);
  };
};
