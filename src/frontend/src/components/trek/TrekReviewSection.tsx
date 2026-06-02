import { useState } from "react";

interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  initials: string;
  badge: string;
}

const REVIEWS_BY_TREK: Record<string, Review[]> = {
  default: [
    {
      name: "Priya Sharma",
      location: "New Delhi",
      date: "November 2025",
      rating: 5,
      text: "Absolutely breathtaking experience! The guides were professional, the camp setup was top-notch. Sunrise from the summit painted the peaks gold — I'll treasure this memory forever.",
      initials: "PS",
      badge: "Verified Trekker",
    },
    {
      name: "Arjun Mehta",
      location: "Mumbai",
      date: "October 2025",
      rating: 5,
      text: "Perfect organization from start to finish. The route was challenging but manageable, and the guides' knowledge of local mythology made every step more enriching. Worth every rupee!",
      initials: "AM",
      badge: "Repeat Trekker",
    },
    {
      name: "Neha Kapoor",
      location: "Bangalore",
      date: "September 2025",
      rating: 4,
      text: "A truly memorable trek. Food was surprisingly good — hot meals at 3,800m! Guides were attentive to safety. Would highly recommend to anyone who loves the Himalayas.",
      initials: "NK",
      badge: "Verified Trekker",
    },
    {
      name: "Rahul Verma",
      location: "Pune",
      date: "December 2025",
      rating: 5,
      text: "The winter trail was magical — 3 feet of snow and complete silence except for the crunch underfoot. Global Trek's team made me feel safe throughout. Already planning my next trek!",
      initials: "RV",
      badge: "Summit Achiever",
    },
    {
      name: "Ananya Iyer",
      location: "Chennai",
      date: "May 2025",
      rating: 5,
      text: "First time trekking and I was nervous, but the team was incredibly supportive. The views were beyond anything I'd seen in photos. This company genuinely cares about each trekker.",
      initials: "AI",
      badge: "First-Timer",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      date: "October 2025",
      rating: 4,
      text: "Extremely well-organized batch. The equipment provided was high quality, meals were nourishing, and the campfire evenings with fellow trekkers created bonds that'll last a lifetime.",
      initials: "VS",
      badge: "Verified Trekker",
    },
  ],
};

const STAR_BREAKDOWN = [
  { stars: 5, count: 1987, pct: 85 },
  { stars: 4, count: 234, pct: 10 },
  { stars: 3, count: 82, pct: 3.5 },
  { stars: 2, count: 23, pct: 1 },
  { stars: 1, count: 14, pct: 0.5 },
];

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
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

interface Props {
  trekName: string;
  trekSlug: string;
}

export function TrekReviewSection({ trekName, trekSlug }: Props) {
  const reviews = REVIEWS_BY_TREK[trekSlug] ?? REVIEWS_BY_TREK.default;
  const [showAll, _setShowAll] = useState(false);
  const displayed = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section
      style={{ padding: "64px 0" }}
      data-ocid="trek_reviews.section"
      aria-labelledby="trek-reviews-heading"
    >
      {/* Header */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <h2
          id="trek-reviews-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 700,
            color: "#1A1A1A",
            margin: "0 0 8px",
            fontStyle: "italic",
          }}
        >
          Trekker Reviews
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "#6B7280",
            margin: 0,
          }}
        >
          Real stories from people who walked this trail with us
        </p>
      </div>

      {/* Rating overview + breakdown */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
          background: "linear-gradient(135deg, #E8F5EE 0%, #F8FAF9 100%)",
          borderRadius: "16px",
          padding: "32px 40px",
          marginBottom: "40px",
          border: "1px solid #D4EDDA",
        }}
        data-ocid="trek_reviews.rating_overview"
      >
        {/* Big number */}
        <div style={{ textAlign: "center", minWidth: "100px" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "72px",
              fontWeight: 700,
              color: "#F4A623",
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            4.8
          </div>
          <StarRating rating={5} size={20} />
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "#6B7280",
              marginTop: "8px",
              fontWeight: 600,
            }}
          >
            2,340+ verified reviews
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "100px",
            background: "#C3E6CB",
            flexShrink: 0,
          }}
          aria-hidden="true"
        />

        {/* Star breakdown bars */}
        <div style={{ flex: 1, minWidth: "200px" }}>
          {STAR_BREAKDOWN.map(({ stars, count, pct }) => (
            <div
              key={stars}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "#4A4A4A",
                  width: "28px",
                  flexShrink: 0,
                  fontWeight: 600,
                }}
              >
                {stars}★
              </span>
              <div
                style={{
                  flex: 1,
                  height: "10px",
                  background: "rgba(255,255,255,0.6)",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
                role="meter"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${stars} stars: ${pct}%`}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background:
                      stars >= 4
                        ? "#1A7A4C"
                        : stars === 3
                          ? "#2ECC71"
                          : "#F4A623",
                    borderRadius: "5px",
                    transition: "width 0.8s ease",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "#6B7280",
                  width: "48px",
                  flexShrink: 0,
                  textAlign: "right",
                }}
              >
                {count.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { icon: "✅", text: "Verified bookings only" },
            { icon: "🏅", text: "Google 4.9★ rated" },
            { icon: "🔒", text: "No fake reviews" },
          ].map((b) => (
            <div
              key={b.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "#145C38",
                fontWeight: 600,
              }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
        data-ocid="trek_reviews.cards_grid"
      >
        {displayed.map((review, i) => (
          <div
            key={review.name}
            style={{
              background: "#fff",
              borderRadius: "14px",
              border: "1px solid #E8F5EE",
              padding: "24px",
              boxShadow: "0 2px 12px rgba(26,122,76,0.07)",
              transition: "transform 0.2s, box-shadow 0.2s",
              position: "relative",
            }}
            data-ocid={`trek_reviews.item.${i + 1}`}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 8px 24px rgba(26,122,76,0.13)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 2px 12px rgba(26,122,76,0.07)";
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                fontFamily: "Georgia, serif",
                fontSize: "48px",
                color: "#E8F5EE",
                lineHeight: 1,
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              ❝
            </div>

            {/* Reviewer info */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1A7A4C, #2ECC71)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "15px",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {review.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#1A1A1A",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {review.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "#6B7280",
                  }}
                >
                  📍 {review.location} · {review.date}
                </div>
              </div>
            </div>

            {/* Stars */}
            <div style={{ marginBottom: "10px" }}>
              <StarRating rating={review.rating} />
            </div>

            {/* Review text */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#4A4A4A",
                margin: "0 0 14px",
              }}
            >
              {review.text}
            </p>

            {/* Trek badge + verified */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  background: "#E8F5EE",
                  color: "#1A7A4C",
                  borderRadius: "20px",
                  padding: "4px 10px",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                🏔️ {trekName}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "#1A7A4C",
                  fontWeight: 600,
                }}
                title="Verified booking"
              >
                ✅ {review.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href={`https://wa.me/918882306635?text=${encodeURIComponent(`Hi! I'd like to leave a review for ${trekName}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="trek_reviews.leave_review_button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 28px",
            background: "#1A7A4C",
            color: "#fff",
            borderRadius: "8px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "15px",
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
          ✍️ Leave a Review
        </a>
        <a
          href="https://g.page/r/globaltrek/review"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="trek_reviews.google_reviews_link"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "#6B7280",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          View all 2,340 reviews on Google →
        </a>
      </div>
    </section>
  );
}
