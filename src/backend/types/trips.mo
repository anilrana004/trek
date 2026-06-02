import Debug "mo:core/Debug";

module {
  /// A single adventure trip offered by White Magic.
  public type Trip = {
    id            : Text;
    name          : Text;
    region        : Text;       // e.g. "India, Ladakh"
    country       : Text;       // e.g. "India", "Nepal", "Bhutan", "Tibet", "Outside Himalaya"
    subRegion     : ?Text;      // e.g. "Ladakh", "Uttarakhand", "Himachal", "Kashmir"
    tripType      : Text;       // e.g. "Trek", "Climb", "Expedition"
    difficulty    : Text;       // e.g. "Moderate Trek", "Trekking Peak"
    difficultyGrade : Nat;      // 1–8
    duration      : Nat;        // days
    maxAltitude   : Nat;        // metres
    maxGroup      : Nat;
    departureDate : ?Text;      // ISO date string, null => on-request
    returnDate    : ?Text;
    priceINR      : ?Nat;       // rupees
    priceUSD      : ?Nat;       // US dollars
    isPremium     : Bool;
    isOnRequest   : Bool;
    imageUrl      : ?Text;
    season        : [Text];     // e.g. ["summer", "monsoon"]
    slug          : Text;       // URL slug
  };
};
