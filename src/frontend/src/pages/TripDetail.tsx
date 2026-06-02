import BookingForm from "@/components/booking/BookingForm";
import { Link, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { TripCard } from "../components/ui/TripCard";
import { allTrips } from "../data/trips";
import { useTripBySlug } from "../hooks/useTrips";
import type { Trip } from "../types";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getDifficultyColor(grade: number): string {
  const c: Record<number, string> = {
    1: "var(--diff-1)",
    2: "var(--diff-2)",
    3: "var(--diff-3)",
    4: "var(--diff-4)",
    5: "var(--diff-5)",
    6: "var(--diff-6)",
    7: "var(--diff-7)",
    8: "var(--diff-8)",
  };
  return c[grade] ?? "var(--text-muted)";
}

function getHeroImage(trip: Trip): string {
  if (trip.country === "Nepal")
    return "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=85";
  if (trip.country === "Bhutan")
    return "https://images.unsplash.com/photo-1609868888839-ebd9fd32d3c3?w=1600&q=85";
  if (trip.subRegion === "Ladakh")
    return "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=85";
  if (trip.subRegion === "Kashmir")
    return "https://images.unsplash.com/photo-1596985558987-82aad18e9f5a?w=1600&q=85";
  if (trip.tripType === "Climb" || trip.tripType === "Expedition")
    return "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85";
  return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85";
}

function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--success)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--error)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 300ms ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Itinerary Data Generator ─────────────────────────────────────────────────

function generateItinerary(trip: Trip) {
  const days: {
    day: number;
    heading: string;
    altitude: number;
    accommodation: string;
    notes: string;
  }[] = [];
  const dest = trip.subRegion || trip.region;
  const isClimb = trip.tripType === "Climb";
  const baseAlt =
    trip.country === "India" && trip.subRegion === "Ladakh" ? 3500 : 1300;
  const peak = trip.maxAltitude;
  const altStep = Math.round((peak - baseAlt) / (trip.duration - 2));

  const templates = [
    {
      heading: `Arrive Delhi / Fly to ${dest === "Ladakh" ? "Leh" : dest === "Nepal" ? "Kathmandu" : dest}`,
      alt: baseAlt,
      accommodation: "Hotel",
      notes: "Arrival, meet and greet, trip briefing. Rest and acclimatize.",
    },
    {
      heading: "Acclimatization day — explore local area",
      alt: baseAlt,
      accommodation: "Hotel",
      notes:
        "Rest day to acclimatize to the altitude. Short walks, gear check, and team briefing.",
    },
    {
      heading: "Drive / Trek to base camp trailhead",
      alt: baseAlt + altStep,
      accommodation: "Tented camp",
      notes:
        "Scenic drive through mountain roads with stunning valley views. First camp setup.",
    },
    {
      heading: "Trek through alpine meadows",
      alt: baseAlt + altStep * 2,
      accommodation: "Tented camp",
      notes:
        "Beautiful trek through flower-filled meadows. Views of surrounding peaks open up.",
    },
    {
      heading: "Cross high pass — panoramic summit views",
      alt: baseAlt + altStep * 3,
      accommodation: "Tented camp",
      notes: isClimb
        ? "Technical section. Fixed ropes used. Ice axe and crampons required."
        : "The most rewarding pass of the route. 360° Himalayan panorama.",
    },
    {
      heading: "Trek to high camp",
      alt: baseAlt + altStep * 4,
      accommodation: "High camp",
      notes:
        "Altitude increases. Take it slow, stay hydrated. Excellent views of the main peak.",
    },
    {
      heading: isClimb ? "Summit push — summit day" : "Summit plateau approach",
      alt: peak,
      accommodation: isClimb ? "High camp" : "Tented camp",
      notes: isClimb
        ? `The big day. Early alpine start. Push for the ${trip.maxAltitude}m summit. Rope teams in use.`
        : "Approach the high plateau. Outstanding wilderness scenery.",
    },
    {
      heading: "Descend to lower camp",
      alt: baseAlt + altStep * 2,
      accommodation: "Tented camp",
      notes:
        "Rapid descent. Knees will feel it — use trekking poles. Celebratory meal at camp.",
    },
    {
      heading: "Trek back to roadhead",
      alt: baseAlt + altStep,
      accommodation: "Hotel or guesthouse",
      notes:
        "Final trek day. Reflect on the journey. Hot shower and warm meal await.",
    },
    {
      heading: "Return to Delhi / Depart",
      alt: baseAlt,
      accommodation: "Hotel",
      notes: "Drive or fly out. Final group dinner. Certificate presentation.",
    },
  ];

  for (let i = 0; i < trip.duration; i++) {
    const t = templates[Math.min(i, templates.length - 1)];
    const alt = Math.min(baseAlt + altStep * i, peak);
    const normalized =
      i >= trip.duration - 1 ? baseAlt : Math.max(baseAlt, alt);
    days.push({
      day: i + 1,
      heading:
        i === 0
          ? templates[0].heading
          : i === 1
            ? templates[1].heading
            : i === trip.duration - 1
              ? templates[9].heading
              : t.heading,
      altitude: normalized,
      accommodation: t.accommodation,
      notes: t.notes,
    });
  }
  return days;
}

// ─── Gallery Data ─────────────────────────────────────────────────────────────

function getGalleryImages(trip: Trip) {
  const base = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=900&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    "https://images.unsplash.com/photo-1609868888839-ebd9fd32d3c3?w=900&q=80",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
    "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900&q=80",
  ];
  if (trip.subRegion === "Ladakh")
    return [base[3], base[0], base[1], base[2], base[6], base[7]];
  if (trip.country === "Nepal")
    return [base[4], base[1], base[0], base[7], base[2], base[8]];
  if (trip.country === "Bhutan")
    return [base[5], base[0], base[2], base[4], base[6], base[8]];
  return base.slice(0, 6);
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

function getFAQs(trip: Trip) {
  const isEasy = trip.difficultyGrade <= 3;
  const isClimb = trip.tripType === "Climb";
  return [
    {
      q: "Is this trip suitable for beginners?",
      a: isEasy
        ? `Yes — the ${trip.name} is designed for first-time trekkers. No prior mountain experience is required, though a reasonable level of fitness is recommended.`
        : isClimb
          ? `No prior mountaineering experience is strictly required, but a good base fitness level and some prior trekking experience at altitude is strongly recommended for ${trip.name}.`
          : `Some trekking experience is recommended for ${trip.name}. You should be comfortable walking 6–8 hours on consecutive days on rough terrain.`,
    },
    {
      q: "What fitness level is required?",
      a: isClimb
        ? "You should be able to run 5km comfortably, do regular cardio training, and ideally have completed a challenging multi-day trek at altitude before this expedition."
        : "You should be physically active — capable of walking 5–7 hours a day on consecutive days. Regular running, hiking, or cycling 3–4 times a week for 2 months before the trip will prepare you well.",
    },
    {
      q: "What is included in the price?",
      a: "The price includes all accommodation on trek (tented camps), all meals from Day 2 to the second-to-last day, an experienced mountain guide, all permits and entry fees, porters/mules for equipment, a first aid kit, and emergency oxygen. Flights and travel insurance are not included.",
    },
    {
      q: "What gear do I need to bring?",
      a: isClimb
        ? "You will need a 4-season sleeping bag (rated to -20°C), mountaineering boots, crampons, an ice axe, helmet, and harness. A full gear list will be sent after booking. White Magic provides technical group equipment."
        : "Essential gear includes trekking boots (broken in), thermal base layers, a down jacket, waterproof outer layers, a 3-season sleeping bag (rated to -10°C), trekking poles, and a 40L daypack. A full gear list is sent after booking.",
    },
    {
      q: "What happens if weather or conditions are unsafe?",
      a: "Your safety is our absolute priority. If our guides assess conditions as unsafe, departures or summit attempts may be postponed or cancelled. We always have contingency plans in place. Refund and rescheduling terms are covered in our booking T&Cs.",
    },
    {
      q: "Do you provide rescue and emergency support?",
      a: "Yes. All White Magic trips carry a comprehensive first aid kit and emergency oxygen. Our guides are trained in wilderness first aid and high-altitude medicine. We maintain communication with local rescue teams and can arrange helicopter evacuation in genuine emergencies.",
    },
  ];
}

// ─── Skeleton Loading ─────────────────────────────────────────────────────────

function SkeletonBlock({
  w,
  h,
  radius = 8,
}: { w?: string; h: number; radius?: number }) {
  return (
    <div
      style={{
        width: w ?? "100%",
        height: `${h}px`,
        background: "var(--bg-elevated)",
        borderRadius: `${radius}px`,
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    />
  );
}

function TripDetailSkeleton() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <style>{"@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}"}</style>
      <div style={{ height: "65vh", background: "var(--bg-elevated)" }} />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          gap: "40px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <SkeletonBlock h={48} w="60%" />
          <SkeletonBlock h={20} />
          <SkeletonBlock h={20} />
          <SkeletonBlock h={20} w="80%" />
        </div>
        <div style={{ width: "320px", flexShrink: 0 }}>
          <SkeletonBlock h={360} radius={20} />
        </div>
      </div>
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      data-ocid="trip_gallery.dialog"
      onClick={onClose}
      role="presentation"
      onKeyDown={(e) => {
        e.stopPropagation();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(8,10,12,0.97)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Close */}
      <button
        data-ocid="trip_gallery.close_button"
        type="button"
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "44px",
          height: "44px",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-default)",
          borderRadius: "50%",
          color: "var(--text-primary)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {/* Prev */}
      <button
        data-ocid="trip_gallery.prev_button"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "48px",
          height: "48px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      {/* Image */}
      <img
        src={images[index]}
        alt={`Scene ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        style={{
          maxHeight: "85vh",
          maxWidth: "90vw",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />
      {/* Next */}
      <button
        data-ocid="trip_gallery.next_button"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "48px",
          height: "48px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {/* Counter */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--text-secondary)",
        }}
      >
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TripDetail() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const { data: trip, isLoading } = useTripBySlug(slug ?? "");
  const [activeTab, setActiveTab] = useState(0);
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLElement | null)[]>([]);

  // Update document title
  useEffect(() => {
    if (trip) document.title = `${trip.name} | White Magic Adventure Travel`;
    return () => {
      document.title = "White Magic Adventure Travel";
    };
  }, [trip]);

  const scrollToTab = useCallback((idx: number) => {
    setActiveTab(idx);
    const el = tabRefs.current[idx];
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }, []);

  if (isLoading) return <TripDetailSkeleton />;

  if (!trip) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-primary)",
          gap: "20px",
          paddingTop: "var(--nav-height)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "72px",
            color: "var(--accent-blue)",
            lineHeight: 1,
          }}
        >
          404
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "32px",
            color: "var(--text-primary)",
          }}
        >
          Trip Not Found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--text-secondary)",
          }}
        >
          This adventure doesn't exist on our routes.
        </p>
        <Link
          to="/trips"
          style={{
            height: "44px",
            padding: "0 28px",
            background: "var(--accent-blue)",
            color: "var(--text-inverse)",
            borderRadius: "var(--btn-radius)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Browse All Trips
        </Link>
      </div>
    );
  }

  const diffColor = getDifficultyColor(trip.difficultyGrade);
  const heroImg = getHeroImage(trip);
  const itinerary = generateItinerary(trip);
  const galleryImages = getGalleryImages(trip);
  const faqs = getFAQs(trip);
  const tabs = [
    "Overview",
    "Itinerary",
    "Inclusions",
    "Dates & Prices",
    "Gallery",
    "FAQs",
  ];
  const relatedTrips = allTrips
    .filter(
      (t) =>
        t.id !== trip.id &&
        (t.region === trip.region ||
          t.difficultyGrade === trip.difficultyGrade),
    )
    .slice(0, 4);

  const contactHref = `/contact?trip=${encodeURIComponent(trip.name)}`;

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i !== null && i > 0 ? i - 1 : galleryImages.length - 1,
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i !== null && i < galleryImages.length - 1 ? i + 1 : 0,
            )
          }
        />
      )}

      {/* ── HERO ── */}
      <div
        style={{
          position: "relative",
          height: "clamp(400px, 65vh, 700px)",
          overflow: "hidden",
        }}
      >
        <img
          src={heroImg}
          alt={trip.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-hero)",
          }}
        />
        {/* Bottom-aligned content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 48px 40px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--text-muted)",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
              style={{ color: "var(--text-muted)", textDecoration: "none" }}
            >
              Home
            </Link>
            <span>/</span>
            <Link
              to="/trips"
              style={{ color: "var(--text-muted)", textDecoration: "none" }}
            >
              Trips
            </Link>
            <span>/</span>
            <span style={{ color: "var(--text-secondary)" }}>
              {trip.subRegion ?? trip.region}
            </span>
            <span>/</span>
            <span style={{ color: "var(--text-primary)" }}>{trip.name}</span>
          </div>
          {/* Trip name */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "16px",
              maxWidth: "800px",
            }}
          >
            {trip.name}
          </h1>
          {/* Tag pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[
              trip.subRegion
                ? `${trip.country}, ${trip.subRegion}`
                : trip.region,
              `${trip.duration} Days`,
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-default)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                {tag}
              </span>
            ))}
            <span
              style={{
                background: `${diffColor}22`,
                border: `1px solid ${diffColor}`,
                color: diffColor,
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
              }}
            >
              {trip.difficulty.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* ── TAB BAR ── */}
      <div
        data-ocid="trip_detail.tab_nav"
        style={{
          position: "sticky",
          top: "var(--nav-height)",
          zIndex: 50,
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--border-subtle)",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            gap: "0",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              data-ocid={`trip_detail.tab.${i + 1}`}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onClick={() => scrollToTab(i)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color:
                  activeTab === i ? "var(--text-primary)" : "var(--text-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 20px",
                borderBottom:
                  activeTab === i
                    ? "2px solid var(--accent-blue)"
                    : "2px solid transparent",
                transition: "color 150ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== i)
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--text-secondary)";
              }}
              onMouseLeave={(e) => {
                if (activeTab !== i)
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--text-muted)";
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 48px",
          display: "flex",
          gap: "48px",
          alignItems: "flex-start",
        }}
      >
        {/* Left: Tab content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* ── Tab 0: Overview ── */}
          {activeTab === 0 && (
            <div data-ocid="trip_detail.overview_section">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontStyle: "italic",
                  fontSize: "18px",
                  color: "var(--text-primary)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                {trip.country === "Nepal"
                  ? `The ${trip.name} is one of the most breathtaking journeys in the Nepal Himalaya — a carefully crafted route that balances stunning landscapes with achievable daily targets.`
                  : trip.tripType === "Climb"
                    ? `The ${trip.name} offers mountaineers a genuine high-altitude challenge in some of the world's most dramatic terrain. Expert-led, well-equipped, and meticulously planned.`
                    : `The ${trip.name} takes you deep into the heart of the Indian Himalaya — through remote valleys, ancient trails, and landscapes that few modern travellers ever witness.`}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "16px",
                }}
              >
                With an experienced White Magic guide leading every step, you
                can focus entirely on the experience — the views, the culture,
                the physical and personal achievement — while we handle all
                logistics, permits, and safety protocols.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "36px",
                }}
              >
                The maximum altitude of {trip.maxAltitude.toLocaleString()}m
                means acclimatization days are built into the schedule. Our
                guides are trained in high-altitude medicine and carry emergency
                oxygen on all trips above 5,000m. Group size is limited to{" "}
                {trip.maxGroup} participants to ensure quality and safety.
              </p>
              {/* Highlight boxes */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                {[
                  {
                    icon: "🏔",
                    title:
                      trip.tripType === "Climb"
                        ? "Summit Opportunity"
                        : "Spectacular Scenery",
                    desc:
                      trip.tripType === "Climb"
                        ? `Attempt the ${trip.maxAltitude.toLocaleString()}m summit with expert guides`
                        : "Passes, valleys, and panoramas that stay with you for life",
                  },
                  {
                    icon: "🧭",
                    title: "Expert Mountain Guides",
                    desc: "IMF-certified, English-speaking guides with 10+ years of Himalayan experience",
                  },
                  {
                    icon:
                      trip.season[0] === "spring"
                        ? "🌸"
                        : trip.season[0] === "fall"
                          ? "🍂"
                          : "☀️",
                    title: "Best Season Window",
                    desc: `${trip.season.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" / ")} — optimal weather and visibility`,
                  },
                ].map((box) => (
                  <div
                    key={box.title}
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "24px" }}>{box.icon}</span>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {box.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {box.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Tab 1: Itinerary ── */}
          {activeTab === 1 && (
            <div data-ocid="trip_detail.itinerary_section">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Day-by-Day Itinerary
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                {itinerary.map((day) => (
                  <div
                    key={day.day}
                    style={{
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      background:
                        openDay === day.day - 1
                          ? "var(--bg-elevated)"
                          : "var(--bg-surface)",
                    }}
                  >
                    <button
                      type="button"
                      data-ocid={`trip_itinerary.item.${day.day}`}
                      onClick={() =>
                        setOpenDay(openDay === day.day - 1 ? null : day.day - 1)
                      }
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          background: "var(--accent-blue-dim)",
                          border: "1px solid var(--accent-blue)",
                          color: "var(--accent-blue)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: "var(--radius-full)",
                          minWidth: "52px",
                          textAlign: "center",
                        }}
                      >
                        DAY {day.day}
                      </span>
                      <span
                        style={{
                          flex: 1,
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                        }}
                      >
                        {day.heading}
                      </span>
                      <span
                        style={{
                          flexShrink: 0,
                          fontFamily: "var(--font-mono)",
                          fontSize: "12px",
                          color: "var(--accent-blue)",
                          background: "var(--accent-blue-dim)",
                          padding: "2px 8px",
                          borderRadius: "var(--radius-full)",
                        }}
                      >
                        {day.altitude.toLocaleString()}m
                      </span>
                      <ChevronIcon open={openDay === day.day - 1} />
                    </button>
                    {openDay === day.day - 1 && (
                      <div
                        style={{
                          padding: "0 20px 20px 20px",
                          borderTop: "1px solid var(--border-subtle)",
                          paddingTop: "16px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.7,
                          }}
                        >
                          {day.notes}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "13px",
                              color: "var(--text-muted)",
                            }}
                          >
                            🏕{" "}
                            <strong style={{ color: "var(--text-secondary)" }}>
                              Accommodation:
                            </strong>{" "}
                            {day.accommodation}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "13px",
                              color: "var(--text-muted)",
                            }}
                          >
                            🍽{" "}
                            <strong style={{ color: "var(--text-secondary)" }}>
                              Meals:
                            </strong>{" "}
                            B / L / D
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Altitude profile */}
              <AltitudeProfile days={itinerary} />
            </div>
          )}

          {/* ── Tab 2: Inclusions ── */}
          {activeTab === 2 && (
            <div data-ocid="trip_detail.inclusions_section">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  marginBottom: "28px",
                }}
              >
                What's Included
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                }}
              >
                {/* Included */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--success)",
                      letterSpacing: "0.15em",
                      marginBottom: "20px",
                    }}
                  >
                    WHAT'S INCLUDED
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {[
                      "All tented accommodation on trek",
                      "All meals during trek (breakfast, lunch, dinner)",
                      "Experienced mountain guide (IMF-certified)",
                      ...(trip.tripType === "Climb"
                        ? ["Technical climbing equipment"]
                        : []),
                      "Porters/mules for equipment transport",
                      "First aid kit and emergency oxygen",
                      "All permits, entry fees and royalties",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckIcon />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Not included */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--error)",
                      letterSpacing: "0.15em",
                      marginBottom: "20px",
                    }}
                  >
                    WHAT'S NOT INCLUDED
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {[
                      `Flights to/from ${trip.country === "Nepal" ? "Kathmandu" : trip.country === "Bhutan" ? "Paro" : trip.subRegion === "Ladakh" ? "Leh" : "destination"}`,
                      "Travel insurance (mandatory)",
                      `Personal ${trip.tripType === "Climb" ? "climbing" : "trekking"} gear`,
                      "Tips for guides, cooks and porters",
                      "Alcoholic beverages",
                      "Costs arising from emergency or rescue",
                    ].map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <XIcon />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab 3: Dates & Prices ── */}
          {activeTab === 3 && (
            <div data-ocid="trip_detail.dates_section">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Dates & Prices
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {[
                        "Departure",
                        "Return",
                        "Spaces",
                        "Price (INR)",
                        "Price (USD)",
                        "Action",
                      ].map((h) => (
                        <th
                          key={h}
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "var(--text-muted)",
                            letterSpacing: "0.12em",
                            padding: "12px 16px",
                            textAlign: "left",
                            borderBottom: "1px solid var(--border-default)",
                          }}
                        >
                          {h.toUpperCase()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(trip.isOnRequest
                      ? [
                          {
                            dep: "On Request",
                            ret: "On Request",
                            spaces: 12,
                            priceINR: trip.priceINR,
                            priceUSD: trip.priceUSD,
                          },
                        ]
                      : [
                          {
                            dep: trip.departureDate ?? "TBA",
                            ret: trip.returnDate ?? "TBA",
                            spaces: 8,
                            priceINR: trip.priceINR,
                            priceUSD: trip.priceUSD,
                          },
                        ]
                    ).map((row, i) => (
                      <tr
                        key={`row-${row.dep || i}`}
                        style={{
                          background:
                            i % 2 === 0
                              ? "var(--bg-surface)"
                              : "var(--bg-elevated)",
                        }}
                      >
                        <td
                          style={{
                            padding: "14px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-primary)",
                          }}
                        >
                          {trip.isOnRequest ? (
                            <em style={{ color: "var(--accent-gold)" }}>
                              On Request
                            </em>
                          ) : (
                            row.dep
                          )}
                        </td>
                        <td
                          style={{
                            padding: "14px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {trip.isOnRequest ? (
                            <em style={{ color: "var(--accent-gold)" }}>
                              On Request
                            </em>
                          ) : (
                            row.ret
                          )}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <SpacesPill spaces={row.spaces} />
                        </td>
                        <td
                          style={{
                            padding: "14px 16px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "14px",
                            color: "var(--text-primary)",
                            fontWeight: 700,
                          }}
                        >
                          {row.priceINR ? formatINR(row.priceINR) : "—"}
                        </td>
                        <td
                          style={{
                            padding: "14px 16px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {row.priceUSD
                            ? `$${row.priceUSD.toLocaleString()}`
                            : "—"}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <a
                            href={contactHref}
                            data-ocid="trip_dates.book_button"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              height: "32px",
                              padding: "0 16px",
                              background: trip.isOnRequest
                                ? "transparent"
                                : "var(--accent-blue)",
                              color: trip.isOnRequest
                                ? "var(--accent-blue)"
                                : "var(--text-inverse)",
                              border: "1px solid var(--accent-blue)",
                              borderRadius: "var(--radius-sm)",
                              fontFamily: "var(--font-body)",
                              fontSize: "12px",
                              fontWeight: 600,
                              textDecoration: "none",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {trip.isOnRequest ? "Enquire" : "Book Now"}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  marginTop: "20px",
                  lineHeight: 1.6,
                }}
              >
                Prices are per person. Group discounts available for 4+
                participants. Contact us for custom departure dates.
              </p>
            </div>
          )}

          {/* ── Tab 4: Gallery ── */}
          {activeTab === 4 && (
            <div data-ocid="trip_detail.gallery_section">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Photo Gallery
              </h2>
              <div
                style={{
                  columns: "3",
                  columnGap: "12px",
                }}
              >
                {galleryImages.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    data-ocid={`trip_gallery.item.${i + 1}`}
                    onClick={() => setLightboxIndex(i)}
                    style={{
                      marginBottom: "12px",
                      breakInside: "avoid",
                      cursor: "pointer",
                      overflow: "hidden",
                      borderRadius: "var(--radius-md)",
                      position: "relative",
                      display: "block",
                      padding: 0,
                      border: "none",
                      background: "none",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      const imgEl = e.currentTarget.querySelector(
                        "img",
                      ) as HTMLElement;
                      if (imgEl) imgEl.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      const imgEl = e.currentTarget.querySelector(
                        "img",
                      ) as HTMLElement;
                      if (imgEl) imgEl.style.transform = "scale(1)";
                    }}
                  >
                    <img
                      src={img}
                      alt={`${trip.name} scene ${i + 1}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        display: "block",
                        objectFit: "cover",
                        transition: "transform 400ms ease",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Tab 5: FAQs ── */}
          {activeTab === 5 && (
            <div data-ocid="trip_detail.faqs_section">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Frequently Asked Questions
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                {faqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    style={{
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      background:
                        openFaq === i
                          ? "var(--bg-elevated)"
                          : "var(--bg-surface)",
                    }}
                  >
                    <button
                      type="button"
                      data-ocid={`trip_faqs.item.${i + 1}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        padding: "18px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "var(--text-primary)",
                        }}
                      >
                        {faq.q}
                      </span>
                      <ChevronIcon open={openFaq === i} />
                    </button>
                    {openFaq === i && (
                      <div
                        style={{
                          padding: "0 20px 20px",
                          borderTop: "1px solid var(--border-subtle)",
                          paddingTop: "16px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.75,
                            margin: 0,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── STICKY SIDEBAR ── */}
        <aside
          data-ocid="trip_detail.sidebar"
          style={{
            width: "320px",
            flexShrink: 0,
            position: "sticky",
            top: "calc(var(--nav-height) + 64px + 24px)",
            background: "var(--bg-surface)",
            border: "var(--card-border)",
            borderRadius: "var(--radius-xl)",
            padding: "28px",
            display: "none",
          }}
          className="trip-sidebar"
        >
          <SidebarContent trip={trip} diffColor={diffColor} />
        </aside>
      </div>

      {/* Desktop sidebar via CSS */}
      <style>{`
        @media (min-width: 1024px) {
          .trip-sidebar { display: block !important; }
        }
        @media (max-width: 767px) {
          .trip-mobile-cta { display: flex !important; }
        }
      `}</style>

      {/* Mobile CTA bar */}
      <div
        data-ocid="trip_detail.mobile_cta"
        className="trip-mobile-cta"
        style={{
          display: "none",
          position: "sticky",
          bottom: 0,
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "16px 20px",
          gap: "12px",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <div style={{ flex: 1 }}>
          {trip.priceINR && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              {formatINR(trip.priceINR)}
            </div>
          )}
          {trip.priceUSD && !trip.priceINR && (
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              ${trip.priceUSD.toLocaleString()}
            </div>
          )}
        </div>
        <a
          href={contactHref}
          data-ocid="trip_detail.enquire_button"
          style={{
            height: "44px",
            padding: "0 20px",
            background: "var(--accent-blue)",
            color: "var(--text-inverse)",
            borderRadius: "var(--btn-radius)",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Book Now
        </a>
      </div>

      {/* ── RELATED TRIPS ── */}
      {relatedTrips.length > 0 && (
        <div
          style={{
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "60px 48px",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ marginBottom: "32px" }}>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--accent-blue)",
                  letterSpacing: "0.2em",
                  marginBottom: "8px",
                }}
              >
                SIMILAR ADVENTURES
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "32px",
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                You Might Also Like
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {relatedTrips.map((t, i) => (
                <TripCard key={t.id} trip={t} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Sidebar Content ──────────────────────────────────────────────────────────

function SidebarContent({
  trip,
  diffColor,
}: {
  trip: Trip;
  diffColor: string;
}) {
  return (
    <>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "18px",
          color: "var(--text-primary)",
          lineHeight: 1.2,
          marginBottom: "20px",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical" as const,
        }}
      >
        {trip.name}
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {[
          ["Duration", `${trip.duration} Days`],
          ["Max Altitude", `${trip.maxAltitude.toLocaleString()}m`],
          ["Difficulty", trip.difficulty],
          ["Group Size", `Max ${trip.maxGroup} people`],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--text-muted)",
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily:
                  label === "Max Altitude" || label === "Duration"
                    ? "var(--font-mono)"
                    : "var(--font-body)",
                fontSize: label === "Difficulty" ? "11px" : "13px",
                fontWeight: label === "Difficulty" ? 700 : 500,
                color:
                  label === "Difficulty" ? diffColor : "var(--text-primary)",
                letterSpacing: label === "Difficulty" ? "0.06em" : 0,
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          height: "1px",
          background: "var(--border-subtle)",
          margin: "16px 0",
        }}
      />

      {/* Next Departure */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--text-muted)",
            letterSpacing: "0.12em",
            marginBottom: "6px",
          }}
        >
          NEXT DEPARTURE
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: trip.isOnRequest
              ? "var(--accent-gold)"
              : "var(--text-primary)",
            fontStyle: trip.isOnRequest ? "italic" : "normal",
          }}
        >
          {trip.isOnRequest
            ? "On Request"
            : trip.departureDate
              ? `${trip.departureDate}${trip.returnDate ? ` – ${trip.returnDate}` : ""}`
              : "Contact us for dates"}
        </div>
      </div>

      <div
        style={{
          height: "1px",
          background: "var(--border-subtle)",
          margin: "16px 0",
        }}
      />

      {/* Price */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--text-muted)",
            letterSpacing: "0.12em",
            marginBottom: "6px",
          }}
        >
          PRICE FROM
        </div>
        {trip.priceINR ? (
          <>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "26px",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              ₹{trip.priceINR.toLocaleString("en-IN")}
            </div>
            {trip.priceUSD && (
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                }}
              >
                / ${trip.priceUSD.toLocaleString()} USD
              </div>
            )}
          </>
        ) : trip.priceUSD ? (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "26px",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            ${trip.priceUSD.toLocaleString()}
          </div>
        ) : (
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--accent-gold)",
              fontStyle: "italic",
            }}
          >
            Price on request
          </div>
        )}
      </div>

      {/* Booking Form */}
      <BookingForm
        tripId={trip.id}
        tripName={trip.name}
        defaultDate={trip.departureDate ?? ""}
        priceUSD={trip.priceUSD}
        priceINR={trip.priceINR}
      />
    </>
  );
}

// ─── Altitude Profile SVG ─────────────────────────────────────────────────────

function AltitudeProfile({
  days,
}: { days: ReturnType<typeof generateItinerary> }) {
  const W = 600;
  const H = 80;
  const alts = days.map((d) => d.altitude);
  const minA = Math.min(...alts);
  const maxA = Math.max(...alts);
  const range = maxA - minA || 1;

  const points = alts
    .map((a, i) => {
      const x = (i / (alts.length - 1)) * W;
      const y = H - ((a - minA) / range) * (H - 10) - 5;
      return `${x},${y}`;
    })
    .join(" ");

  const fillPoints = `0,${H} ${points} ${W},${H}`;

  return (
    <div style={{ marginTop: "32px" }}>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 700,
          color: "var(--text-muted)",
          letterSpacing: "0.12em",
          marginBottom: "8px",
        }}
      >
        ALTITUDE PROFILE
      </div>
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "80px" }}
      >
        <defs>
          <linearGradient id="altGrad" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--accent-blue)"
              stopOpacity="0.4"
            />
            <stop
              offset="100%"
              stopColor="var(--accent-blue)"
              stopOpacity="0.05"
            />
          </linearGradient>
        </defs>
        <polygon points={fillPoints} fill="url(#altGrad)" />
        <polyline
          points={points}
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          marginTop: "4px",
        }}
      >
        <span>Day 1</span>
        <span style={{ color: "var(--accent-blue)" }}>
          Peak: {maxA.toLocaleString()}m
        </span>
        <span>Day {days.length}</span>
      </div>
    </div>
  );
}

// ─── Spaces Pill ──────────────────────────────────────────────────────────────

function SpacesPill({ spaces }: { spaces: number }) {
  const color =
    spaces > 5
      ? "var(--success)"
      : spaces >= 3
        ? "var(--warning)"
        : spaces >= 1
          ? "var(--error)"
          : "var(--text-muted)";
  const label =
    spaces > 5
      ? `${spaces} spaces`
      : spaces >= 3
        ? `${spaces} spaces`
        : spaces >= 1
          ? `${spaces} left`
          : "WAITLIST";
  return (
    <span
      style={{
        background: `${color}1a`,
        border: `1px solid ${color}`,
        color,
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: "var(--radius-full)",
        letterSpacing: "0.06em",
      }}
    >
      {label}
    </span>
  );
}
