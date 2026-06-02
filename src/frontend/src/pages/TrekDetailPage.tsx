import { Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { TrekCard } from "../components/TrekCard";
import { FloatingParallaxHero } from "../components/trek/FloatingParallaxHero";
import {
  IllustratedTrailMap,
  charDhamWaypoints,
  chopTungnathWaypoints,
  hamptaPassWaypoints,
  harKiDunWaypoints,
  kedarkanthaWaypoints,
  kedarnathWaypoints,
  sarPassWaypoints,
} from "../components/trek/IllustratedTrailMap";
import type { TrekWaypoint } from "../components/trek/IllustratedTrailMap";
import { type Trek, getTrekBySlug, getTreksByState } from "../data/treks";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600",
  "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600",
  "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600",
  "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=600",
  "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
];

const STANDARD_FAQS = [
  {
    q: "What fitness level is required?",
    a: "Moderate fitness is sufficient. We recommend 4-6 weeks of regular cardio before the trek. No prior trekking experience is mandatory for easy/moderate treks.",
  },
  {
    q: "What is the best time to do this trek?",
    a: "Each trek has an optimal season listed in the quick info. Avoid peak monsoon (July-August) for Himalayan treks unless stated otherwise.",
  },
  {
    q: "Is altitude sickness a concern?",
    a: "For treks above 3,500m, altitude sickness is possible. Our guides carry emergency oxygen and first-aid kits. Acclimatization days are built into the itinerary.",
  },
  {
    q: "What accommodation is provided?",
    a: "Quality camping tents with sleeping bags, foam mats, and common dining/kitchen tents. Village stays may be arranged at base camps.",
  },
  {
    q: "What is the cancellation policy?",
    a: "30+ days before: 80% refund. 15-29 days: 50% refund. Less than 15 days: no refund. Travel insurance is strongly recommended.",
  },
];

const SAMPLE_REVIEWS = [
  {
    name: "Priya Sharma",
    date: "November 2025",
    rating: 5,
    text: "Absolutely breathtaking experience! The guides were professional and the camp setup was top-notch. The sunrise from the summit left me speechless - will definitely book again.",
    avatar: "PS",
  },
  {
    name: "Arjun Mehta",
    date: "October 2025",
    rating: 5,
    text: "Perfect organization from start to finish. The route was challenging but manageable, and the team's knowledge of local history made every step more enriching.",
    avatar: "AM",
  },
  {
    name: "Neha Kapoor",
    date: "September 2025",
    rating: 4,
    text: "A truly memorable trek. Food was surprisingly good in the mountains! A couple of itinerary tweaks would have made it 5-star, but overall an incredible adventure.",
    avatar: "NK",
  },
];

const PACKING_LIST = [
  {
    category: "Clothing",
    items: [
      "Thermal base layers",
      "Fleece jacket",
      "Waterproof shell",
      "Trekking trousers",
      "Warm hat & gloves",
      "Wool socks (3 pairs)",
    ],
  },
  {
    category: "Footwear",
    items: ["Ankle trekking boots", "Camp sandals", "Gaiters (snow treks)"],
  },
  {
    category: "Gear",
    items: [
      "Trekking poles",
      "60L backpack",
      "Sleeping bag liner",
      "Headlamp + batteries",
    ],
  },
  {
    category: "Personal Care",
    items: [
      "Sunscreen SPF 50+",
      "Lip balm SPF",
      "Personal first-aid kit",
      "ORS packets",
    ],
  },
  {
    category: "Documents",
    items: [
      "Photo ID (original)",
      "Passport photos (2)",
      "Booking confirmation",
    ],
  },
];

// StatPill removed — hero uses FloatingParallaxHero stats

function TabBtn({
  id,
  active,
  label,
  onClick,
}: { id: string; active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      data-ocid={`trek_detail.tab.${id}`}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        border: "none",
        borderBottom: active ? "3px solid #1A7A4C" : "3px solid transparent",
        background: "transparent",
        color: active ? "#1A7A4C" : "#4A4A4A",
        fontFamily: "var(--font-body)",
        fontWeight: active ? 700 : 500,
        fontSize: "14px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "color 0.2s, border-color 0.2s",
      }}
    >
      {label}
    </button>
  );
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
  ocid,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  ocid?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        border: "1px solid #E8F5EE",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "10px",
      }}
    >
      <button
        type="button"
        data-ocid={ocid}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          background: open ? "#E8F5EE" : "#fff",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "background 0.2s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "15px",
            color: "#1A1A1A",
            flex: 1,
            minWidth: 0,
          }}
        >
          {title}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A7A4C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s",
            flexShrink: 0,
            marginLeft: "12px",
          }}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div
          style={{
            padding: "16px 20px",
            background: "#fff",
            borderTop: "1px solid #E8F5EE",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={s <= rating ? "#F4A623" : "none"}
          stroke="#F4A623"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

function OverviewTab({ trek }: { trek: Trek }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          lineHeight: 1.8,
          color: "#4A4A4A",
          margin: 0,
        }}
      >
        {trek.shortDescription} This iconic Himalayan adventure takes you
        through ancient forests, alpine meadows, and dramatic mountain
        landscapes. With expert-certified guides, Global Trek ensures your
        safety and enriches every step with local knowledge, mythology, and
        natural history.
      </p>
      <div
        style={{
          background: "#E8F5EE",
          borderRadius: "12px",
          padding: "24px",
          borderLeft: "4px solid #1A7A4C",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "#145C38",
            marginBottom: "16px",
            marginTop: 0,
          }}
        >
          Trek Highlights
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {trek.highlights.map((h) => (
            <li
              key={h}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#1A1A1A",
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  background: "#1A7A4C",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "16px",
            marginTop: 0,
          }}
        >
          Quick Info
        </h3>
        <div
          style={{
            border: "1px solid #E8F5EE",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {(
            [
              ["Duration", trek.durationLabel],
              [
                "Distance",
                trek.trekDistanceKm ? `${trek.trekDistanceKm} km` : "Varies",
              ],
              [
                "Max Altitude",
                `${trek.maxAltitudeM}m (${trek.maxAltitudeFt} ft)`,
              ],
              ["Start Point", trek.startPoint],
              ["End Point", trek.endPoint],
              ["Trek Grade", trek.difficulty],
              ["Best Season", trek.bestSeason],
              ["State", trek.state],
              ...(trek.nearestRailway
                ? [["Nearest Railway", trek.nearestRailway]]
                : []),
              ...(trek.permits ? [["Permits", trek.permits]] : []),
            ] as [string, string][]
          ).map(([lbl, val], i, arr) => (
            <div
              key={lbl}
              style={{
                display: "flex",
                borderBottom: i < arr.length - 1 ? "1px solid #E8F5EE" : "none",
                background: i % 2 === 0 ? "#F8FAF9" : "#fff",
              }}
            >
              <span
                style={{
                  width: "160px",
                  flexShrink: 0,
                  padding: "12px 16px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  borderRight: "1px solid #E8F5EE",
                }}
              >
                {lbl}
              </span>
              <span
                style={{
                  padding: "12px 16px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#1A1A1A",
                }}
              >
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ItineraryTab({ trek }: { trek: Trek }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "#6B7280",
          marginBottom: "20px",
          marginTop: 0,
        }}
      >
        {trek.durationLabel} &bull; {trek.itinerary.length} days detailed
        itinerary
      </p>
      {trek.itinerary.map((day, i) => (
        <AccordionItem
          key={day.day}
          defaultOpen={i === 0}
          ocid={`trek_detail.itinerary.day.${day.day}`}
          title={
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#1A7A4C",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  flexShrink: 0,
                  fontFamily: "var(--font-body)",
                }}
              >
                {day.day}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#1A1A1A",
                  }}
                >
                  {day.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "4px",
                    flexWrap: "wrap",
                  }}
                >
                  {day.altitude && (
                    <span
                      style={{
                        fontSize: "11px",
                        background: "#E8F5EE",
                        color: "#1A7A4C",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                      }}
                    >
                      {day.altitude}
                    </span>
                  )}
                  {day.distance && (
                    <span
                      style={{
                        fontSize: "11px",
                        background: "#FFF8EC",
                        color: "#C07000",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                      }}
                    >
                      {day.distance}
                    </span>
                  )}
                  {day.meals && (
                    <span
                      style={{
                        fontSize: "11px",
                        background: "#F0F9FF",
                        color: "#0369A1",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                      }}
                    >
                      {day.meals}
                    </span>
                  )}
                </div>
              </div>
            </div>
          }
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#4A4A4A",
              margin: 0,
            }}
          >
            {day.description}
          </p>
        </AccordionItem>
      ))}
    </div>
  );
}

function InclusionsTab({ trek }: { trek: Trek }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        <div
          style={{
            background: "#F0FBF4",
            borderRadius: "12px",
            padding: "24px",
            borderTop: "4px solid #1A7A4C",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#145C38",
              marginBottom: "16px",
              marginTop: 0,
            }}
          >
            Included
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {trek.inclusions.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#1A1A1A",
                  lineHeight: 1.5,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A7A4C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            background: "#FFF5F5",
            borderRadius: "12px",
            padding: "24px",
            borderTop: "4px solid #E74C3C",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#C0392B",
              marginBottom: "16px",
              marginTop: 0,
            }}
          >
            Not Included
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {trek.exclusions.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#1A1A1A",
                  lineHeight: 1.5,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E74C3C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "20px",
            marginTop: 0,
          }}
        >
          What to Carry - Packing List
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {PACKING_LIST.map((cat) => (
            <div
              key={cat.category}
              style={{
                background: "#F8FAF9",
                borderRadius: "10px",
                padding: "18px",
                border: "1px solid #E8F5EE",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#1A7A4C",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "10px",
                  marginTop: 0,
                }}
              >
                {cat.category}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "#4A4A4A",
                      paddingLeft: "10px",
                      borderLeft: "2px solid #2ECC71",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryTab({ trekName }: { trekName: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const closeLightbox = () => setLightbox(null);
  return (
    <div>
      <div style={{ columns: "3 200px", columnGap: "12px" }}>
        {GALLERY_IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            style={{
              marginBottom: "12px",
              breakInside: "avoid",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "zoom-in",
              transition: "transform 0.25s",
              border: "none",
              padding: 0,
              background: "transparent",
              display: "block",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "scale(1)";
            }}
            onClick={() => setLightbox(src)}
            data-ocid={`trek_detail.gallery.item.${i + 1}`}
            aria-label={`View ${trekName} landscape ${i + 1}`}
          >
            <img
              src={src}
              alt={`${trekName} landscape ${i + 1}`}
              style={{ width: "100%", display: "block" }}
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {lightbox && (
        <dialog
          open
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            border: "none",
            maxWidth: "100vw",
            maxHeight: "100vh",
            width: "100vw",
            height: "100vh",
            margin: 0,
          }}
          data-ocid="trek_detail.lightbox"
          aria-label="Photo lightbox"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
          }}
        >
          <button
            type="button"
            data-ocid="trek_detail.lightbox.close_button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              color: "#fff",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close lightbox"
          >
            X
          </button>
          <img
            src={lightbox.replace("w=600", "w=1200")}
            alt="Himalayan trek landscape full view"
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              borderRadius: "12px",
              objectFit: "contain",
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </dialog>
      )}
    </div>
  );
}

function ReviewsTab({ trek }: { trek: Trek }) {
  const breakdown = [
    { stars: 5, pct: 85 },
    { stars: 4, pct: 10 },
    { stars: 3, pct: 5 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div
        style={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "56px",
              fontWeight: 700,
              color: "#1A7A4C",
              lineHeight: 1,
            }}
          >
            {trek.rating}
          </div>
          <StarRating rating={Math.round(trek.rating)} />
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "#6B7280",
              marginTop: "6px",
            }}
          >
            {trek.reviewCount} reviews
          </div>
        </div>
        <div style={{ flex: 1, minWidth: "200px" }}>
          {breakdown.map(({ stars, pct }) => (
            <div
              key={stars}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "#4A4A4A",
                  width: "36px",
                  flexShrink: 0,
                }}
              >
                {stars}&#9733;
              </span>
              <div
                style={{
                  flex: 1,
                  height: "8px",
                  background: "#E8F5EE",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background:
                      pct > 50 ? "#1A7A4C" : pct > 20 ? "#2ECC71" : "#E8F5EE",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "#6B7280",
                  width: "34px",
                  flexShrink: 0,
                  textAlign: "right",
                }}
              >
                {pct}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {SAMPLE_REVIEWS.map((r, i) => (
          <div
            key={r.name}
            data-ocid={`trek_detail.reviews.item.${i + 1}`}
            style={{
              background: "#fff",
              border: "1px solid #E8F5EE",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(26,122,76,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#1A7A4C",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "14px",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {r.avatar}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#1A1A1A",
                  }}
                >
                  {r.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "2px",
                  }}
                >
                  <StarRating rating={r.rating} />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "#6B7280",
                    }}
                  >
                    {r.date}
                  </span>
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#4A4A4A",
                margin: 0,
              }}
            >
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqTab() {
  return (
    <div>
      {STANDARD_FAQS.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          ocid={`trek_detail.faq.item.${i + 1}`}
          title={faq.q}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#4A4A4A",
              margin: 0,
            }}
          >
            {faq.a}
          </p>
        </AccordionItem>
      ))}
    </div>
  );
}

function BookingSidebar({ trek }: { trek: Trek }) {
  const waMsg = encodeURIComponent(
    `Hi Global Trek! I am interested in booking the ${trek.name}. Please share details.`,
  );
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        borderTop: "4px solid #1A7A4C",
        boxShadow: "0 4px 20px rgba(26,122,76,0.14)",
        padding: "24px",
        position: "sticky",
        top: "88px",
      }}
      data-ocid="trek_detail.booking_sidebar"
    >
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "#6B7280",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Starting from
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "32px",
            fontWeight: 700,
            color: "#1A7A4C",
            lineHeight: 1.2,
          }}
        >
          &#8377;{trek.priceFrom.toLocaleString("en-IN")}
          <span
            style={{
              fontSize: "14px",
              fontFamily: "var(--font-body)",
              color: "#6B7280",
              fontWeight: 400,
            }}
          >
            {" "}
            /person
          </span>
        </div>
      </div>
      <div
        style={{
          background: "#E8F5EE",
          borderRadius: "8px",
          padding: "12px 14px",
          marginBottom: "18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "#6B7280",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Next Batch
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "14px",
              color: "#1A1A1A",
            }}
          >
            Jun 15, 2026
          </div>
        </div>
        <span
          style={{
            background: "#F4A623",
            color: "#fff",
            borderRadius: "50px",
            padding: "4px 10px",
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          8 seats left!
        </span>
      </div>
      <Link
        to={`/booking/${trek.slug}` as string}
        data-ocid="trek_detail.booking_sidebar.primary_button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "14px",
          background: "#F4A623",
          color: "#fff",
          borderRadius: "10px",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: "16px",
          textDecoration: "none",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#E0941A";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#F4A623";
        }}
      >
        Book Now
      </Link>
      <button
        type="button"
        data-ocid="trek_detail.booking_sidebar.secondary_button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "12px",
          background: "transparent",
          border: "2px solid #1A7A4C",
          borderRadius: "10px",
          color: "#1A7A4C",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#E8F5EE";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "transparent";
        }}
      >
        Send Inquiry
      </button>
      <button
        type="button"
        data-ocid="trek_detail.booking_sidebar.download_button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "10px",
          background: "transparent",
          border: "none",
          color: "#1A7A4C",
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          textDecoration: "underline",
          textDecorationColor: "rgba(26,122,76,0.4)",
          marginBottom: "10px",
        }}
      >
        Download Itinerary PDF
      </button>
      <a
        href={`https://wa.me/918882306635?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="trek_detail.booking_sidebar.whatsapp_button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          padding: "10px",
          background: "#25D366",
          borderRadius: "10px",
          color: "#fff",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "14px",
          textDecoration: "none",
          marginBottom: "18px",
          boxSizing: "border-box",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#1EBE57";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#25D366";
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        WhatsApp Us
      </a>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid #E8F5EE",
          paddingTop: "16px",
        }}
      >
        {["Certified", "Safe", "Insured"].map((badge) => (
          <div
            key={badge}
            style={{
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "#1A7A4C",
              fontWeight: 700,
            }}
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileBottomBar({ trek }: { trek: Trek }) {
  const waMsg = encodeURIComponent(
    `Hi Global Trek! I am interested in booking the ${trek.name}.`,
  );
  return (
    <div
      className="trek-mobile-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        borderTop: "1px solid #E8F5EE",
        display: "flex",
        gap: "8px",
        padding: "10px 12px",
        zIndex: 100,
        boxShadow: "0 -4px 16px rgba(26,122,76,0.12)",
      }}
      data-ocid="trek_detail.mobile_bar"
    >
      <Link
        to={`/booking/${trek.slug}` as string}
        data-ocid="trek_detail.mobile_bar.primary_button"
        style={{
          flex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 8px",
          background: "#F4A623",
          borderRadius: "10px",
          color: "#fff",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: "14px",
          textDecoration: "none",
        }}
      >
        Book Now
      </Link>
      <a
        href={`https://wa.me/918882306635?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="trek_detail.mobile_bar.whatsapp_button"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 8px",
          background: "#25D366",
          borderRadius: "10px",
          color: "#fff",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "13px",
          textDecoration: "none",
        }}
      >
        WhatsApp
      </a>
      <a
        href="tel:+918882306635"
        data-ocid="trek_detail.mobile_bar.call_button"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 8px",
          background: "#1A7A4C",
          borderRadius: "10px",
          color: "#fff",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "13px",
          textDecoration: "none",
        }}
      >
        Call
      </a>
    </div>
  );
}

type Tab =
  | "overview"
  | "itinerary"
  | "inclusions"
  | "gallery"
  | "reviews"
  | "faq"
  | "map"
  | "gear";

export function TrekDetailPage() {
  const params = useParams({ strict: false }) as { slug?: string };
  const slug = params.slug ?? "";
  const trek = getTrekBySlug(slug);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  if (!trek) {
    return (
      <div
        style={{
          paddingTop: "var(--nav-height, 72px)",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          background: "#fff",
        }}
        data-ocid="trek_detail.empty_state"
      >
        <div style={{ fontSize: "64px" }}>&#127956;</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "32px",
            color: "#1A1A1A",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          Trek Not Found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "#6B7280",
            margin: 0,
          }}
        >
          The trek you are looking for does not exist in our collection yet.
        </p>
        <Link
          to="/treks"
          data-ocid="trek_detail.empty_state.link"
          style={{
            padding: "12px 28px",
            background: "#1A7A4C",
            color: "#fff",
            borderRadius: "8px",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Explore All Treks
        </Link>
      </div>
    );
  }

  const stateSlug =
    trek.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh";
  const similarTreks = getTreksByState(trek.state)
    .filter((t) => t.slug !== trek.slug)
    .slice(0, 3);

  const WAYPOINT_MAP: Record<string, TrekWaypoint[]> = {
    kedarkantha: kedarkanthaWaypoints,
    "har-ki-dun": harKiDunWaypoints,
    "chopta-tungnath": chopTungnathWaypoints,
    "hampta-pass": hamptaPassWaypoints,
    "sar-pass": sarPassWaypoints,
    kedarnath: kedarnathWaypoints,
    "char-dham": charDhamWaypoints,
  };
  const mapWaypoints: TrekWaypoint[] =
    WAYPOINT_MAP[trek.slug] ?? kedarkanthaWaypoints;

  const TABS: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "inclusions", label: "Inclusions" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "map", label: "Trail Map" },
    { id: "faq", label: "FAQ" },
  ];

  const trekBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Treks", href: "/treks" },
    { label: trek.state, href: `/treks/${stateSlug}` },
    { label: trek.name, href: `/treks/${stateSlug}/${trek.slug}` },
  ];

  const trekHeroImages = [
    GALLERY_IMAGES[0],
    GALLERY_IMAGES[3],
    GALLERY_IMAGES[6],
  ];

  const trekStats = [
    {
      icon: "📍",
      label: "Max Altitude",
      value: `${trek.maxAltitudeM.toLocaleString()}m / ${trek.maxAltitudeFt.toLocaleString()} ft`,
    },
    { icon: "⏱", label: "Duration", value: trek.durationLabel },
    { icon: "🥾", label: "Difficulty", value: trek.difficulty },
    {
      icon: "📅",
      label: "Best Season",
      value: trek.bestSeason.split(";")[0].split(",")[0].trim(),
    },
    {
      icon: "💰",
      label: "Starting From",
      value: `₹${trek.priceFrom.toLocaleString("en-IN")}`,
    },
    {
      icon: "⭐",
      label: "Rating",
      value: `${trek.rating} (${trek.reviewCount} reviews)`,
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
      }}
      data-ocid="trek_detail.page"
    >
      <FloatingParallaxHero
        title={trek.name}
        subtitle={`${trek.district}, ${trek.state}`}
        images={trekHeroImages}
        stats={trekStats}
        breadcrumbs={trekBreadcrumbs}
        onDownloadPDF={() => window.print()}
      />

      {/* 2-column layout */}
      <div
        data-ocid="trek_detail.content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px 80px",
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) 340px",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* LEFT: tabs */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              borderBottom: "2px solid #E8F5EE",
              marginBottom: "28px",
              overflowX: "auto",
            }}
            data-ocid="trek_detail.tabs"
          >
            {TABS.map((tab) => (
              <TabBtn
                key={tab.id}
                id={tab.id}
                active={activeTab === tab.id}
                label={tab.label}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
          <div>
            {activeTab === "overview" && <OverviewTab trek={trek} />}
            {activeTab === "itinerary" && <ItineraryTab trek={trek} />}
            {activeTab === "inclusions" && <InclusionsTab trek={trek} />}
            {activeTab === "gallery" && <GalleryTab trekName={trek.name} />}
            {activeTab === "reviews" && <ReviewsTab trek={trek} />}
            {activeTab === "map" && (
              <div>
                <div style={{ marginBottom: "16px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      marginBottom: "6px",
                      marginTop: 0,
                    }}
                  >
                    {trek.name} — Trail Map
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "#6B7280",
                      margin: 0,
                    }}
                  >
                    Hover or tap a waypoint to explore day-by-day details along
                    the trail.
                  </p>
                </div>
                <IllustratedTrailMap
                  trekName={trek.name}
                  region={`${trek.district}, ${trek.state}`}
                  waypoints={mapWaypoints}
                />
                {/* Altitude profile */}
                <div
                  style={{
                    marginTop: "20px",
                    background: "#F8FAF9",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    border: "1px solid #E8F5EE",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#1A7A4C",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "12px",
                    }}
                  >
                    Altitude Profile
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "flex-end",
                      height: "70px",
                    }}
                  >
                    {[...mapWaypoints]
                      .sort((a, b) => a.dayNumber - b.dayNumber)
                      .map((wp) => {
                        const maxAlt = Math.max(
                          ...mapWaypoints.map((w) => w.altitude),
                        );
                        const minAlt = Math.min(
                          ...mapWaypoints.map((w) => w.altitude),
                        );
                        const range = maxAlt - minAlt || 1;
                        const barH =
                          Math.round(((wp.altitude - minAlt) / range) * 50) +
                          10;
                        const barColor =
                          wp.type === "summit"
                            ? "#F4A623"
                            : wp.type === "basecamp" || wp.type === "village"
                              ? "#5B9BD5"
                              : "#1A7A4C";
                        return (
                          <div
                            key={wp.id}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              flex: 1,
                            }}
                            title={`${wp.name}: ${wp.altitude}m`}
                          >
                            <div
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "8px",
                                color: "#9B8B72",
                                marginBottom: "2px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {wp.altitude}m
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: `${barH}px`,
                                background: barColor,
                                borderRadius: "3px 3px 0 0",
                                opacity: 0.75,
                              }}
                            />
                            <div
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "7px",
                                color: "#6B7280",
                                textAlign: "center",
                                marginTop: "3px",
                                width: "100%",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              D{wp.dayNumber}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "faq" && <FaqTab />}
          </div>
        </div>
        {/* RIGHT: sidebar */}
        <div data-ocid="trek_detail.sidebar_col">
          <BookingSidebar trek={trek} />
        </div>
      </div>

      {/* Similar Treks */}
      {similarTreks.length > 0 && (
        <div
          style={{
            background: "#F8FAF9",
            borderTop: "1px solid #E8F5EE",
            padding: "48px 24px",
          }}
          data-ocid="trek_detail.similar_treks"
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 700,
                color: "#1A1A1A",
                marginBottom: "24px",
                marginTop: 0,
              }}
            >
              You Might Also Like
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {similarTreks.map((t, i) => (
                <TrekCard key={t.slug} trek={t} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}

      <MobileBottomBar trek={trek} />

      <style>{`
        @media (min-width: 1024px) { .trek-mobile-bar { display: none !important; } }
        @media (max-width: 1023px) {
          [data-ocid="trek_detail.content"] { grid-template-columns: 1fr !important; }
          [data-ocid="trek_detail.sidebar_col"] { display: none !important; }
          [data-ocid="trek_detail.page"] { padding-bottom: 80px; }
        }
        [data-ocid="trek_detail.tabs"] { scrollbar-width: none; }
        [data-ocid="trek_detail.tabs"]::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
