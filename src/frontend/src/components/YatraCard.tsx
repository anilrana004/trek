import { Link } from "@tanstack/react-router";
import type { Yatra } from "../data/yatras";

interface YatraCardProps {
  yatra: Yatra;
  index?: number;
}

export function YatraCard({ yatra, index = 0 }: YatraCardProps) {
  return (
    <article
      data-ocid={`yatra_card.item.${index + 1}`}
      style={{
        background: "#fff",
        borderRadius: "14px",
        borderTop: "4px solid #C8960C",
        boxShadow: "0 4px 20px rgba(200,150,12,0.12)",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(200,150,12,0.2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 20px rgba(200,150,12,0.12)";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: "180px",
          background: "linear-gradient(135deg, #FFF8E1 0%, #F4A62333 100%)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="/assets/generated/himalaya-hero.dim_1600x900.jpg"
          alt={`${yatra.name} - Uttarakhand pilgrimage`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(20,12,0,0.6) 0%, transparent 50%)",
          }}
        />
        <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
          <span
            style={{
              background: "#C8960C",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: "50px",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.05em",
            }}
          >
            &#x0950; Yatra
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "rgba(20,12,0,0.7)",
            color: "#F4A623",
            borderRadius: "8px",
            padding: "4px 10px",
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px" }}>
            From{" "}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            &#8377;{yatra.priceFrom.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 20px" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "4px",
            lineHeight: 1.3,
          }}
        >
          {yatra.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "#C8960C",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          {yatra.subtitle}
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "14px",
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
              stroke="#C8960C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {yatra.durationLabel}
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
              stroke="#C8960C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 17l4-8 4 5 3-4 4 7" />
            </svg>
            {yatra.templeAltitudeM.toLocaleString()}m
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "#F4A623",
              fontWeight: 600,
            }}
          >
            &#9733; {yatra.rating} ({yatra.reviewCount})
          </span>
        </div>

        <Link
          to={`/yatra/${yatra.slug}` as string}
          data-ocid={`yatra_card.primary_button.${index + 1}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
            background: "#1A7A4C",
            color: "#fff",
            borderRadius: "8px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#145C38";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#1A7A4C";
          }}
        >
          Register for 2026 Yatra
        </Link>
      </div>
    </article>
  );
}
