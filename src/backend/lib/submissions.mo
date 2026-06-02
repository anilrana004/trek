import List "mo:core/List";
import Time "mo:core/Time";
import SubTypes "../types/submissions";
import Int "mo:core/Int";

module {
  public type ContactSubmission     = SubTypes.ContactSubmission;
  public type NewsletterSubscription = SubTypes.NewsletterSubscription;
  public type TailorMadeRequest     = SubTypes.TailorMadeRequest;
  public type GHTInterestForm       = SubTypes.GHTInterestForm;
  public type BookingInquiry        = SubTypes.BookingInquiry;
  public type BookingRequestInput   = SubTypes.BookingRequestInput;
  public type BookingRequest        = SubTypes.BookingRequest;

  /// Append a new contact submission and return its assigned ID.
  public func addContact(
    store   : List.List<ContactSubmission>,
    state   : { var nextContactId : Nat },
    name    : Text,
    email   : Text,
    phone   : ?Text,
    country : ?Text,
    tripInterest   : ?Text,
    numberOfPeople : ?Text,
    preferredDates : ?Text,
    message        : Text,
  ) : Nat {
    let id = state.nextContactId;
    state.nextContactId += 1;
    store.add({
      id;
      name;
      email;
      phone;
      country;
      tripInterest;
      numberOfPeople;
      preferredDates;
      message;
      submittedAt = Time.now();
    });
    id;
  };

  /// Append a newsletter subscription and return its assigned ID.
  public func addNewsletterSubscription(
    store : List.List<NewsletterSubscription>,
    state : { var nextNewsletterId : Nat },
    email : Text,
  ) : Nat {
    let id = state.nextNewsletterId;
    state.nextNewsletterId += 1;
    store.add({
      id;
      email;
      subscribedAt = Time.now();
    });
    id;
  };

  /// Append a tailor-made trip request and return its assigned ID.
  public func addTailorMadeRequest(
    store               : List.List<TailorMadeRequest>,
    state               : { var nextTailorMadeId : Nat },
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
  ) : Nat {
    let id = state.nextTailorMadeId;
    state.nextTailorMadeId += 1;
    store.add({
      id;
      name;
      email;
      phone;
      country;
      destination;
      numberOfPeople;
      preferredDuration;
      budgetRange;
      preferredDates;
      activityType;
      specialRequirements;
      submittedAt = Time.now();
    });
    id;
  };

  /// Append a GHT interest form submission and return its assigned ID.
  public func addGHTInterest(
    store      : List.List<GHTInterestForm>,
    state      : { var nextGHTInterestId : Nat },
    name       : Text,
    email      : Text,
    phone      : ?Text,
    ghtSection : Text,
    message    : ?Text,
  ) : Nat {
    let id = state.nextGHTInterestId;
    state.nextGHTInterestId += 1;
    store.add({
      id;
      name;
      email;
      phone;
      ghtSection;
      message;
      submittedAt = Time.now();
    });
    id;
  };

  /// Append a full booking request and return the stored BookingRequest.
  public func addBookingRequest(
    store   : List.List<BookingRequest>,
    state   : { var nextBookingRequestId : Nat },
    caller  : Principal,
    input   : BookingRequestInput,
  ) : BookingRequest {
    let id = state.nextBookingRequestId;
    state.nextBookingRequestId += 1;

    // Derive calendar year from nanosecond timestamp
    let nowNs : Int  = Time.now();
    let year  : Int  = nowNs / 1_000_000_000 / 60 / 60 / 24 / 365 + 1970;

    // Zero-pad the numeric ID to 4 digits
    let idText = id.toText();
    let padded = if (id < 10) { "000" # idText }
                 else if (id < 100) { "00" # idText }
                 else if (id < 1000) { "0" # idText }
                 else { idText };

    let bookingRef = "WM-" # year.toText() # "-" # padded;

    let record : BookingRequest = {
      bookingId    = id;
      userId       = caller;
      tripId       = input.tripId;
      tripName     = input.tripName;
      selectedDate = input.selectedDate;
      participants = input.participants;
      name         = input.name;
      email        = input.email;
      phone        = input.phone;
      nationality  = input.nationality;
      status       = "pending";
      createdAt    = Time.now();
      bookingRef;
    };
    store.add(record);
    record;
  };

  /// Return all booking requests made by a specific user.
  public func getBookingsByUser(
    store  : List.List<BookingRequest>,
    userId : Principal,
  ) : [BookingRequest] {
    store.filter(func(r : BookingRequest) : Bool { r.userId == userId }).toArray();
  };

  /// Return a booking request by its numeric bookingId.
  public func getBookingById(
    store     : List.List<BookingRequest>,
    bookingId : Nat,
  ) : ?BookingRequest {
    store.find(func(r : BookingRequest) : Bool { r.bookingId == bookingId });
  };

  /// Append a booking inquiry and return its assigned ID.
  public func addBookingInquiry(
    store   : List.List<BookingInquiry>,
    state   : { var nextBookingInquiryId : Nat },
    tripId  : Text,
    name    : Text,
    email   : Text,
    message : Text,
  ) : Nat {
    let id = state.nextBookingInquiryId;
    state.nextBookingInquiryId += 1;
    store.add({
      id;
      tripId;
      name;
      email;
      message;
      submittedAt = Time.now();
    });
    id;
  };
};
