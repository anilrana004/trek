import { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const videos = [
  {
    id: "G41oAgfxj4o",
    caption:
      "We are reminded of the simple pleasures of life & our roots every time we visit the mountains — a short film.",
    posted: "Apr 2019",
  },
  {
    id: "ia6TXClgnyc",
    caption:
      "A glimpse into our successful expedition to Mt. Satopanth (7075m) — an iconic peak in the Garhwal Himalaya.",
    posted: "",
  },
];

function VideoCard({
  video,
  index,
}: { video: (typeof videos)[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div
      data-ocid={`home.video_card.${index + 1}`}
      style={{
        flex: 1,
        minWidth: "280px",
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
      }}
    >
      {/* Video area */}
      <button
        type="button"
        style={{
          position: "relative",
          aspectRatio: "16/9",
          cursor: playing ? "default" : "pointer",
          overflow: "hidden",
          background: "none",
          border: "none",
          padding: 0,
          display: "block",
          width: "100%",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          if (!playing) setPlaying(true);
        }}
        aria-label={playing ? "Video playing" : "Play video"}
        disabled={playing}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={`Video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
          />
        ) : (
          <>
            <img
              src={thumbUrl}
              alt=""
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "filter 250ms ease",
                filter: hovered ? "brightness(0.85)" : "brightness(0.7)",
              }}
            />
            {/* Play button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(91,196,240,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(91,196,240,0.4)",
                  transition: "transform 250ms ease",
                  transform: hovered ? "scale(1.15)" : "scale(1.0)",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Play video"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </>
        )}
      </button>

      {/* Caption */}
      <div style={{ padding: "16px 20px 20px" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          {video.caption}
        </p>
        {video.posted && (
          <span
            style={{
              display: "inline-block",
              marginTop: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-muted)",
            }}
          >
            {video.posted}
          </span>
        )}
      </div>
    </div>
  );
}

export function VideoSection() {
  return (
    <section
      data-ocid="home.video_section"
      style={{
        background: "var(--bg-primary)",
        padding: "80px clamp(20px,4vw,48px)",
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeading eyebrow="IN ACTION" heading="Mountain Moments" />
        <div
          style={{
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {videos.map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
