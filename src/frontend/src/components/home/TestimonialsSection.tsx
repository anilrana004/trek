import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "../../types";
import { SectionHeading } from "../ui/SectionHeading";

interface Props {
  testimonials: Testimonial[];
}

function StarRating() {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: "var(--accent-gold)", fontSize: "16px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 220;
  const shouldTruncate = testimonial.text.length > MAX_CHARS;
  const displayText =
    shouldTruncate && !expanded
      ? `${testimonial.text.slice(0, MAX_CHARS)}…`
      : testimonial.text;

  return (
    <div
      data-ocid={`home.testimonial_card.${index + 1}`}
      style={{
        minWidth: "340px",
        maxWidth: "400px",
        flexShrink: 0,
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "28px",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StarRating />
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          fontStyle: "italic",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        &ldquo;{displayText}&rdquo;
      </p>
      {shouldTruncate && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--accent-blue)",
            cursor: "pointer",
            padding: "4px 0",
            marginTop: "8px",
            alignSelf: "flex-start",
          }}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <div
        style={{
          borderTop: "1px solid var(--border-subtle)",
          marginTop: "20px",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: 0,
          }}
        >
          <img
            src={`https://i.pravatar.cc/80?u=${encodeURIComponent(testimonial.name)}`}
            alt={testimonial.name}
            loading="lazy"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid var(--border-default)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text-primary)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {testimonial.name}
          </span>
        </div>
        <span
          style={{
            flexShrink: 0,
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            color: "var(--accent-blue)",
            background: "var(--accent-blue-dim)",
            border: "1px solid rgba(91,196,240,0.3)",
            borderRadius: "var(--radius-full)",
            padding: "3px 10px",
            maxWidth: "160px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {testimonial.trip}
        </span>
      </div>
    </div>
  );
}

export function TestimonialsSection({ testimonials }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const scroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 416; // 400px + 16px gap
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (paused) return;
    autoScrollTimer.current = setInterval(scroll, 4000);
    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [paused, scroll]);

  return (
    <section
      data-ocid="home.testimonials_section"
      style={{
        background: "var(--bg-surface)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mountain silhouette bg */}
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        role="presentation"
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "300px",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      >
        <path
          d="M0 300 L200 150 L360 220 L520 80 L680 180 L840 50 L1000 160 L1160 90 L1320 170 L1440 120 L1440 300 Z"
          fill="var(--accent-blue)"
        />
      </svg>

      <div
        style={{
          paddingLeft: "clamp(20px,4vw,48px)",
          paddingRight: "clamp(20px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="CLIENT STORIES"
            heading="From the people who traveled with us"
          />
        </div>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "clamp(20px,4vw,48px)",
          paddingRight: "clamp(20px,4vw,48px)",
          paddingBottom: "8px",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <div key={t.id} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
            <TestimonialCard testimonial={t} index={i} />
          </div>
        ))}
      </div>

      {/* Platform review buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px",
          paddingLeft: "clamp(20px,4vw,48px)",
          paddingRight: "clamp(20px,4vw,48px)",
        }}
      >
        <a
          href="https://g.page/r/global-trek-reviews"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="home.google_reviews_button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            height: "44px",
            padding: "0 20px",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--btn-radius)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent-blue)";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-default)";
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Google"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google Reviews
        </a>
        <a
          href="https://www.facebook.com/globaltrekin/reviews"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="home.facebook_reviews_button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            height: "44px",
            padding: "0 20px",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--btn-radius)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "all 150ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#1877F2";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-default)";
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#1877F2"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Facebook"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook Reviews
        </a>
      </div>

      <style>{`
        [data-ocid="home.testimonials_section"] div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
