import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import {
  allTrips,
  filterByDifficulty,
  filterByDuration,
  filterByRegion,
  filterBySeason,
} from "../data/trips";
import type { Trip } from "../types";
import type { TripFilters } from "../types";

function backendTripToFrontend(t: import("@/backend").Trip): Trip {
  return {
    id: t.id,
    name: t.name,
    region: t.region,
    country: t.country,
    subRegion: t.subRegion,
    tripType: t.tripType,
    difficulty: t.difficulty,
    difficultyGrade: Number(t.difficultyGrade),
    duration: Number(t.duration),
    maxAltitude: Number(t.maxAltitude),
    maxGroup: Number(t.maxGroup),
    departureDate: t.departureDate,
    returnDate: t.returnDate,
    priceINR: t.priceINR !== undefined ? Number(t.priceINR) : undefined,
    priceUSD: t.priceUSD !== undefined ? Number(t.priceUSD) : undefined,
    isPremium: t.isPremium,
    isOnRequest: t.isOnRequest,
    imageUrl:
      t.imageUrl ??
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    season: t.season,
    slug: t.slug,
  };
}

export function useAllTrips() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Trip[]>({
    queryKey: ["trips"],
    queryFn: async () => {
      if (!actor) return allTrips;
      try {
        const result = await actor.getTrips();
        return result.map(backendTripToFrontend);
      } catch {
        return allTrips;
      }
    },
    enabled: !isFetching,
    initialData: allTrips,
    staleTime: 5 * 60 * 1000,
  });
}

export function useTripBySlug(slug: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Trip | null>({
    queryKey: ["trip", slug],
    queryFn: async () => {
      if (!actor) return allTrips.find((t) => t.slug === slug) ?? null;
      try {
        const result = await actor.getTripBySlug(slug);
        return result ? backendTripToFrontend(result) : null;
      } catch {
        return allTrips.find((t) => t.slug === slug) ?? null;
      }
    },
    enabled: !isFetching && !!slug,
    initialData: allTrips.find((t) => t.slug === slug) ?? null,
  });
}

export function useFilteredTrips(filters: TripFilters) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Trip[]>({
    queryKey: ["trips", "filtered", filters],
    queryFn: async () => {
      let trips: Trip[] = allTrips;
      if (!actor || isFetching) {
        // Apply client-side filtering on static data
      } else {
        try {
          const result = await actor.getTrips();
          trips = result.map(backendTripToFrontend);
        } catch {
          trips = allTrips;
        }
      }
      if (filters.region) trips = filterByRegion(trips, filters.region);
      if (filters.difficulty)
        trips = filterByDifficulty(trips, filters.difficulty);
      if (filters.duration) trips = filterByDuration(trips, filters.duration);
      if (filters.season) trips = filterBySeason(trips, filters.season);
      if (filters.country)
        trips = trips.filter(
          (t) => t.country.toLowerCase() === filters.country!.toLowerCase(),
        );
      return trips;
    },
    enabled: !isFetching,
    initialData: allTrips,
    staleTime: 5 * 60 * 1000,
  });
}
