import { useCallback, useEffect, useState } from "react";

const MOUNTAIN_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    alt: "Himalayan peaks at golden hour",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    alt: "Trekker on high altitude ridge",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    alt: "Snow-capped mountain summit",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800",
    alt: "Alpine meadow with wildflowers",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800",
    alt: "Mountain campsite at dusk",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800",
    alt: "Valley view from high altitude",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
    alt: "Pine forest trail in Himalayas",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800",
    alt: "Glacial lake reflection",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
    alt: "Sunrise over mountain peaks",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800",
    alt: "Group of trekkers on ridge",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800",
    alt: "Himalayan village with snow peaks",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    alt: "Morning mist in mountain valley",
    tall: false,
  },
];

interface Props {
  trekName: string;
  images?: string[];
}

export function TrekPhotoGallery({ trekName }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const total = MOUNTAIN_IMAGES.length;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) => (i !== null ? (i - 1 + total) % total : null)),
    [total],
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % total : null)),
    [total],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  const waLink = `https://wa.me/918882306635?text=${encodeURIComponent(`Hi! I'd like to share my ${trekName} trek photos with Global Trek!`)}`;

  return (
    <section
      style={{ padding: "64px 0" }}
      data-ocid="trek_gallery.section"
      aria-labelledby="trek-gallery-heading"
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <div>
          <h2
            id="trek-gallery-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 700,
              color: "#1A1A1A",
              margin: "0 0 6px",
              fontStyle: "italic",
            }}
          >
            Photo Gallery
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "#6B7280",
              margin: 0,
            }}
          >
            Photography by Global Trek guides & trekkers · {total} photos
          </p>
        </div>
        <span
          style={{
            background: "#E8F5EE",
            color: "#1A7A4C",
            borderRadius: "20px",
            padding: "6px 14px",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          📸 {total} Photos
        </span>
      </div>

      {/* Masonry grid */}
      <div
        style={{
          columns: "3 220px",
          columnGap: "12px",
        }}
        data-ocid="trek_gallery.grid"
      >
        {MOUNTAIN_IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            data-ocid={`trek_gallery.item.${i + 1}`}
            aria-label={`View ${trekName} photo ${i + 1}: ${img.alt}`}
            onClick={() => setLightboxIndex(i)}
            style={{
              marginBottom: "12px",
              breakInside: "avoid",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "zoom-in",
              border: "none",
              padding: 0,
              background: "transparent",
              display: "block",
              width: "100%",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector(
                ".photo-overlay",
              ) as HTMLElement | null;
              if (overlay) overlay.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector(
                ".photo-overlay",
              ) as HTMLElement | null;
              if (overlay) overlay.style.opacity = "0";
            }}
          >
            <img
              src={img.src}
              alt={`${trekName} — ${img.alt}`}
              loading="lazy"
              style={{
                width: "100%",
                display: "block",
                aspectRatio: img.tall ? "3/4" : "4/3",
                objectFit: "cover",
                transition: "transform 0.35s",
              }}
            />
            {/* Hover overlay */}
            <div
              className="photo-overlay"
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(26,122,76,0.85) 0%, transparent 60%)",
                opacity: 0,
                transition: "opacity 0.25s",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                padding: "12px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                }}
              >
                📸 {i + 1} / {total}
              </span>
              <span
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "#fff",
                }}
              >
                ⛶
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Share CTA */}
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="trek_gallery.share_photos_button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 28px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "8px",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "15px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#1ebb55";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#25D366";
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Share Your Photos
        </a>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <dialog
          aria-label={`Photo lightbox: ${lightboxIndex + 1} of ${total}`}
          data-ocid="trek_gallery.lightbox"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.93)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
          }}
        >
          {/* Counter */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              borderRadius: "20px",
              padding: "6px 16px",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            {lightboxIndex + 1} / {total}
          </div>

          {/* Close */}
          <button
            type="button"
            data-ocid="trek_gallery.lightbox.close_button"
            aria-label="Close lightbox"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              color: "#fff",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            type="button"
            data-ocid="trek_gallery.lightbox.prev_button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              color: "#fff",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>

          {/* Next */}
          <button
            type="button"
            data-ocid="trek_gallery.lightbox.next_button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              color: "#fff",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>

          {/* Image */}
          <img
            src={MOUNTAIN_IMAGES[lightboxIndex].src.replace("w=800", "w=1400")}
            alt={`${trekName} — ${MOUNTAIN_IMAGES[lightboxIndex].alt}`}
            style={{
              maxWidth: "88vw",
              maxHeight: "82vh",
              borderRadius: "12px",
              objectFit: "contain",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />

          {/* Caption + download */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "300px",
                textAlign: "center",
              }}
            >
              {MOUNTAIN_IMAGES[lightboxIndex].alt}
            </span>
            <a
              href={MOUNTAIN_IMAGES[lightboxIndex].src.replace(
                "w=800",
                "w=1400",
              )}
              download={`${trekName}-photo-${lightboxIndex + 1}.jpg`}
              data-ocid="trek_gallery.lightbox.download_button"
              aria-label="Download photo"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "8px",
                padding: "8px 14px",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
              }}
            >
              ⬇ Download
            </a>
          </div>
        </dialog>
      )}
    </section>
  );
}
