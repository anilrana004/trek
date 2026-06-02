import List "mo:core/List";
import TripsTypes "../types/trips";

module {
  public type Trip = TripsTypes.Trip;

  /// Return every trip in the store.
  public func listTrips(trips : List.List<Trip>) : [Trip] {
    trips.toArray();
  };

  /// Find a trip by its URL slug.
  public func findBySlug(trips : List.List<Trip>, slug : Text) : ?Trip {
    trips.find(func(t) { t.slug == slug });
  };

  /// Filter trips by country or broad region string.
  public func filterByRegion(trips : List.List<Trip>, region : Text) : [Trip] {
    let lower = region.toLower();
    trips.filter(func(t) {
      t.country.toLower() == lower or
      (switch (t.subRegion) { case (?sr) sr.toLower() == lower; case null false })
    }).toArray();
  };

  /// Filter trips by difficulty label.
  public func filterByDifficulty(trips : List.List<Trip>, difficulty : Text) : [Trip] {
    let lower = difficulty.toLower();
    trips.filter(func(t) { t.difficulty.toLower() == lower }).toArray();
  };

  /// Filter trips by duration range code.
  /// Accepted values: "1" (< 7d), "2" (8–10d), "3" (11–14d), "4" (15–20d), "5" (> 20d)
  public func filterByDuration(trips : List.List<Trip>, durationRange : Text) : [Trip] {
    trips.filter(func(t) {
      switch (durationRange) {
        case "1" { t.duration < 7 };
        case "2" { t.duration >= 8 and t.duration <= 10 };
        case "3" { t.duration >= 11 and t.duration <= 14 };
        case "4" { t.duration >= 15 and t.duration <= 20 };
        case "5" { t.duration > 20 };
        case _   { false };
      }
    }).toArray();
  };

  /// Filter trips by season label (e.g. "spring", "summer", "monsoon", "fall", "winter").
  public func filterBySeason(trips : List.List<Trip>, season : Text) : [Trip] {
    let lower = season.toLower();
    trips.filter(func(t) {
      t.season.find(func(s) { s.toLower() == lower }) != null
    }).toArray();
  };
};
