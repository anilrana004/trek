import List "mo:core/List";
import SubTypes "../types/submissions";
import Time "mo:core/Time";
import SubLib "../lib/submissions";

mixin (
  contacts          : List.List<SubTypes.ContactSubmission>,
  newsletters       : List.List<SubTypes.NewsletterSubscription>,
  tailorMadeReqs    : List.List<SubTypes.TailorMadeRequest>,
  ghtInterests      : List.List<SubTypes.GHTInterestForm>,
  bookingInquiries  : List.List<SubTypes.BookingInquiry>,
  bookingRequests   : List.List<SubTypes.BookingRequest>,
  state             : {
    var nextContactId          : Nat;
    var nextNewsletterId       : Nat;
    var nextTailorMadeId       : Nat;
    var nextGHTInterestId      : Nat;
    var nextBookingInquiryId   : Nat;
    var nextBookingRequestId   : Nat;
  },
) {
  /// Submit a general contact enquiry. Returns the new submission ID.
  public shared func submitContact(
    name           : Text,
    email          : Text,
    phone          : ?Text,
    country        : ?Text,
    tripInterest   : ?Text,
    numberOfPeople : ?Text,
    preferredDates : ?Text,
    message        : Text,
  ) : async Nat {
    SubLib.addContact(contacts, state, name, email, phone, country, tripInterest, numberOfPeople, preferredDates, message);
  };

  /// Subscribe an email to the newsletter. Returns the new subscription ID.
  public shared func subscribeNewsletter(email : Text) : async Nat {
    SubLib.addNewsletterSubscription(newsletters, state, email);
  };

  /// Submit a tailor-made trip request. Returns the new submission ID.
  public shared func submitTailorMade(
    name                : Text,
    email               : Text,
    phone               : ?Text,
    country             : ?Text,
    destination         : ?Text,
    numberOfPeople      : Text,
    preferredDuration   : ?Text,
    budgetRange         : Text,
    preferredDates      : ?Text,
    activityType        : Text,
    specialRequirements : ?Text,
  ) : async Nat {
    SubLib.addTailorMadeRequest(tailorMadeReqs, state, name, email, phone, country, destination, numberOfPeople, preferredDuration, budgetRange, preferredDates, activityType, specialRequirements);
  };

  /// Submit a GHT India interest form. Returns the new submission ID.
  public shared func submitGHTInterest(
    name       : Text,
    email      : Text,
    phone      : ?Text,
    ghtSection : Text,
    message    : ?Text,
  ) : async Nat {
    SubLib.addGHTInterest(ghtInterests, state, name, email, phone, ghtSection, message);
  };

  /// Submit a booking enquiry for a specific trip. Returns the new submission ID.
  public shared func submitBookingInquiry(
    tripId  : Text,
    name    : Text,
    email   : Text,
    message : Text,
  ) : async Nat {
    SubLib.addBookingInquiry(bookingInquiries, state, tripId, name, email, message);
  };

  /// Submit a full booking request. Returns the stored BookingRequest.
  public shared ({ caller }) func submitBookingRequest(
    input : SubTypes.BookingRequestInput,
  ) : async SubTypes.BookingRequest {
    SubLib.addBookingRequest(bookingRequests, state, caller, input);
  };

  /// Return all bookings made by the calling principal.
  public query ({ caller }) func getMyBookingRequests() : async [SubTypes.BookingRequest] {
    SubLib.getBookingsByUser(bookingRequests, caller);
  };

  /// Return a booking by its numeric ID.
  public query func getBookingById(id : Nat) : async ?SubTypes.BookingRequest {
    SubLib.getBookingById(bookingRequests, id);
  };
};
