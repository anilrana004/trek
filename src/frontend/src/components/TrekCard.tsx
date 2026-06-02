import { Link } from "@tanstack/react-router";
import type { Trek } from "../data/treks";

interface TrekCardProps {
  trek: Trek;
  index?: number;
}

const difficultyColors: Record<string, { bg: string; text: string }> = {
  Easy: { bg: "#E8F5EE", text: "#1A7A4C" },
  "Easy to Moderate": { bg: "#E8F5EE", text: "#1A7A4C" },
  Moderate: { bg: "#FFF3CD", text: "#856404" },
  Difficult: { bg: "#FDECEA", text: "#C0392B" },
};

export function TrekCard({ trek, index = 0 }: TrekCardProps) {
  const diffStyle =
    difficultyColors[trek.difficulty] ?? difficultyColors.Moderate;

  return (
    <article
      data-ocid={`trek_card.item.${index + 1}`}
      style={{
        background: "#fff",
        borderRadius: "14px",
        borderTop: "4px solid #1A7A4C",
        boxShadow: "0 4px 20px rgba(26,122,76,0.12)",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(26,122,76,0.2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.12)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          height: "200px",
          background: "linear-gradient(135deg, #E8F5EE 0%, #1A7A4C33 100%)",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/generated/himalaya-hero.dim_1600x900.jpg"
          alt={`${trek.name} - ${trek.state} Himalayan trek`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          loading="lazy"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform =
              "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
          }}
        />
        {/* Badges */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: "#1A7A4C",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "50px",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.05em",
            }}
          >
            {trek.state === "Uttarakhand" ? "UK" : "HP"}
          </span>
          {trek.isTrending && (
            <span
              style={{
                background: "#F4A623",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "50px",
                fontFamily: "var(--font-body)",
              }}
            >
              🔥 Trending
            </span>
          )}
          {trek.isEditorsPick && (
            <span
              style={{
                background: "#fff",
                color: "#1A7A4C",
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "50px",
                fontFamily: "var(--font-body)",
                border: "1px solid #1A7A4C",
              }}
            >
              ⭐ Pick
            </span>
          )}
        </div>
        {/* Price overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "rgba(20,92,56,0.92)",
            color: "#fff",
            borderRadius: "8px",
            padding: "4px 10px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              opacity: 0.8,
            }}
          >
            From{" "}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            &#8377;{trek.priceFrom.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "17px",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {trek.name}
          </h3>
          <span
            style={{
              background: diffStyle.bg,
              color: diffStyle.text,
              fontSize: "11px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "50px",
              whiteSpace: "nowrap",
              flexShrink: 0,
              fontFamily: "var(--font-body)",
            }}
          >
            {trek.difficulty}
          </span>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "#4A4A4A",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A7A4C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {trek.durationLabel}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "#4A4A4A",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A7A4C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 17l4-8 4 5 3-4 4 7" />
            </svg>
            {trek.maxAltitudeM.toLocaleString()}m
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "#F4A623",
              fontWeight: 600,
            }}
          >
            &#9733; {trek.rating}
            <span style={{ color: "#6B7280", fontWeight: 400 }}>
              ({trek.reviewCount})
            </span>
          </span>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            to={
              `/treks/${trek.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh"}/${trek.slug}` as string
            }
            data-ocid={`trek_card.link.${index + 1}`}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "9px 12px",
              border: "1.5px solid #1A7A4C",
              borderRadius: "8px",
              color: "#1A7A4C",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "13px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#E8F5EE";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
            }}
          >
            View Details
          </Link>
          <Link
            to={
              `/treks/${trek.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh"}/${trek.slug}` as string
            }
            data-ocid={`trek_card.primary_button.${index + 1}`}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "9px 12px",
              background: "#F4A623",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "13px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#E0941A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#F4A623";
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
