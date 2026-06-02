import List "mo:core/List";
import TripsLib "../lib/trips";
import TripsTypes "../types/trips";

mixin (
  trips : List.List<TripsTypes.Trip>,
) {
  /// Return all trips.
  public query func getTrips() : async [TripsTypes.Trip] {
    TripsLib.listTrips(trips);
  };

  /// Return a single trip by its URL slug, or null if not found.
  public query func getTripBySlug(slug : Text) : async ?TripsTypes.Trip {
    TripsLib.findBySlug(trips, slug);
  };

  /// Return trips filtered by region / country string.
  public query func getTripsByRegion(region : Text) : async [TripsTypes.Trip] {
    TripsLib.filterByRegion(trips, region);
  };

  /// Return trips filtered by difficulty label.
  public query func getTripsByDifficulty(difficulty : Text) : async [TripsTypes.Trip] {
    TripsLib.filterByDifficulty(trips, difficulty);
  };

  /// Return trips filtered by duration range code.
  public query func getTripsByDuration(durationRange : Text) : async [TripsTypes.Trip] {
    TripsLib.filterByDuration(trips, durationRange);
  };

  /// Return trips filtered by season label.
  public query func getTripsBySeason(season : Text) : async [TripsTypes.Trip] {
    TripsLib.filterBySeason(trips, season);
  };
};
