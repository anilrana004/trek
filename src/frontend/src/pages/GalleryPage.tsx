import React, { useState, useEffect } from "react";
export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<{ idx: number } | null>(null);

  useEffect(() => {
    document.title = "Photo Gallery | Global Trek — Himalayan Trek Photos";
  }, []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        setLightbox((l) =>
          l && l.idx < filteredImages.length - 1 ? { idx: l.idx + 1 } : l,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightbox((l) => (l && l.idx > 0 ? { idx: l.idx - 1 } : l));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const filters = [
    "All",
    "Uttarakhand",
    "Himachal Pradesh",
    "Yatra",
    "Wildlife",
  ];

  const allImages: {
    url: string;
    caption: string;
    location: string;
    category: string;
  }[] = [
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      caption: "Chopta Valley at Dawn",
      location: "Rudraprayag, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      caption: "Himalayan Panorama",
      location: "Kedarkantha Summit, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600",
      caption: "Hampta Pass Crossing",
      location: "Kullu, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600",
      caption: "Har Ki Dun Valley",
      location: "Uttarkashi, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600",
      caption: "Roopkund Lake Trail",
      location: "Chamoli, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600",
      caption: "Winter Summit Attempt",
      location: "Sankri, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
      caption: "Phulara Ridge Walk",
      location: "Govind Wildlife Sanctuary",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600",
      caption: "Sar Pass Snow Slope",
      location: "Parvati Valley, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600",
      caption: "Gorson Bugyal Meadow",
      location: "Auli, Chamoli, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600",
      caption: "Kheerganga Trail",
      location: "Parvati Valley, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600",
      caption: "Kedarnath Temple Complex",
      location: "Rudraprayag, Uttarakhand",
      category: "Yatra",
    },
    {
      url: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600",
      caption: "Badrinath Dham",
      location: "Chamoli, Uttarakhand",
      category: "Yatra",
    },
    {
      url: "https://images.unsplash.com/photo-1547190027-9156686aa2f0?w=600",
      caption: "Triund Campsite",
      location: "Dharamshala, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1579543814-4d1b48f6c798?w=600",
      caption: "Chandratal Moon Lake",
      location: "Lahaul-Spiti, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      caption: "Dayara Bugyal Meadow",
      location: "Uttarkashi, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=600",
      caption: "Valley of Flowers",
      location: "Chamoli, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
      caption: "Himalayan Monal Sighting",
      location: "Govind Wildlife Sanctuary",
      category: "Wildlife",
    },
    {
      url: "https://images.unsplash.com/photo-1567307224979-9b0cb25c4c97?w=600",
      caption: "Nag Tibba Summit",
      location: "Tehri Garhwal, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600",
      caption: "Gangotri Glacier Approach",
      location: "Uttarkashi, Uttarakhand",
      category: "Yatra",
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      caption: "Kuari Pass View",
      location: "Chamoli, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600",
      caption: "Beas Kund Lake",
      location: "Manali, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1423345548997-37e4e4db1e24?w=600",
      caption: "Snow Leopard Territory",
      location: "Govind Wildlife Sanctuary",
      category: "Wildlife",
    },
    {
      url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600",
      caption: "Deodar Forest Canopy",
      location: "Sankri, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1501260526143-8e92044adb5b?w=600",
      caption: "Kedarnath Char Dham Route",
      location: "Gaurikund, Uttarakhand",
      category: "Yatra",
    },
    {
      url: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600",
      caption: "Juda Ka Talab Frozen",
      location: "Sankri, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1474692260046-07ef3f8eaed6?w=600",
      caption: "Alpine Wildflowers",
      location: "Valley of Flowers, Uttarakhand",
      category: "Wildlife",
    },
    {
      url: "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?w=600",
      caption: "Yamunotri Temple",
      location: "Uttarkashi, Uttarakhand",
      category: "Yatra",
    },
    {
      url: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600",
      caption: "Twilight Campfire",
      location: "Balu Ka Ghera, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600",
      caption: "Brahmatal Trek",
      location: "Chamoli, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=600",
      caption: "Himalayan Village Home",
      location: "Osla, Uttarkashi",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600",
      caption: "River Supin Crossing",
      location: "Sankri, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?w=600",
      caption: "Himalayan Brown Bear",
      location: "Govind Wildlife Sanctuary",
      category: "Wildlife",
    },
    {
      url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600",
      caption: "Kasol Village Morning",
      location: "Parvati Valley, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
    {
      url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600",
      caption: "Rhododendron Forest",
      location: "Chopta, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1501746877-14782df58970?w=600",
      caption: "Panch Kedar Circuit",
      location: "Garhwal Himalaya",
      category: "Yatra",
    },
    {
      url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600",
      caption: "Trek Group Summit",
      location: "Kedarkantha Summit",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?w=600",
      caption: "Golden Eagle in Flight",
      location: "Kuari Pass, Chamoli",
      category: "Wildlife",
    },
    {
      url: "https://images.unsplash.com/photo-1485160497022-3e09382fb310?w=600",
      caption: "Sunrise at Chandrashila",
      location: "Tungnath, Rudraprayag",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600",
      caption: "Char Dham Pilgrims",
      location: "Badrinath, Chamoli",
      category: "Yatra",
    },
    {
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600",
      caption: "Musk Deer at Dusk",
      location: "Govind Wildlife Sanctuary",
      category: "Wildlife",
    },
    {
      url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600",
      caption: "Trek Camp at Night",
      location: "Phulara Ridge, Uttarakhand",
      category: "Uttarakhand",
    },
    {
      url: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=600",
      caption: "Sar Pass Summit Snow",
      location: "Kasol, Himachal Pradesh",
      category: "Himachal Pradesh",
    },
  ];

  const filteredImages =
    activeFilter === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  const currentImage = lightbox !== null ? filteredImages[lightbox.idx] : null;

  // Masonry layout: split into 3 columns
  const columns: (typeof allImages)[] = [[], [], []];
  filteredImages.forEach((img, i) => {
    columns[i % 3].push(img);
  });

  return (
    <main
      style={{
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background: "var(--green-dark)",
          padding: "64px clamp(20px,4vw,48px) 52px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(46,204,113,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "var(--green-light)",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          VISUAL DIARY
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(32px,6vw,60px)",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "14px",
          }}
        >
          Global Trek Photo Gallery
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "520px",
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Moments from the trail — Uttarakhand peaks, Himachal valleys, sacred
          yatras and Himalayan wildlife.
        </p>

        {/* Filter Tabs */}
        <div
          role="tablist"
          aria-label="Gallery filters"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              data-ocid={`gallery.filter.${filter.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                border:
                  activeFilter === filter
                    ? "2px solid #ffffff"
                    : "2px solid rgba(255,255,255,0.25)",
                background:
                  activeFilter === filter
                    ? "#ffffff"
                    : "rgba(255,255,255,0.08)",
                color:
                  activeFilter === filter ? "var(--green-dark)" : "#ffffff",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 200ms ease",
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Count indicator */}
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "20px clamp(20px,4vw,48px) 0",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          {filteredImages.length} photos
        </span>
      </div>

      {/* Masonry Grid */}
      <section
        data-ocid="gallery.grid"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "20px clamp(20px,4vw,48px) 64px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
        }}
      >
        {columns.map((col, colIdx) => (
          <div
            key={col[0]?.url?.slice(-10) ?? String(colIdx)}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {col.map((img) => {
              const globalIdx = filteredImages.indexOf(img);
              return (
                <button
                  key={img.url}
                  type="button"
                  data-ocid={`gallery.item.${globalIdx + 1}`}
                  aria-label={`View ${img.caption} — ${img.location}`}
                  onClick={() => setLightbox({ idx: globalIdx })}
                  style={{
                    all: "unset",
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "var(--radius-lg)",
                    cursor: "pointer",
                    boxShadow: "var(--card-shadow)",
                    transition: "transform 250ms ease, box-shadow 250ms ease",
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    btn.style.transform = "scale(1.02)";
                    btn.style.boxShadow = "0 12px 36px rgba(0,0,0,0.25)";
                    const overlay = btn.querySelector(
                      ".gallery-overlay",
                    ) as HTMLElement | null;
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    btn.style.transform = "scale(1)";
                    btn.style.boxShadow = "var(--card-shadow)";
                    const overlay = btn.querySelector(
                      ".gallery-overlay",
                    ) as HTMLElement | null;
                    if (overlay) overlay.style.opacity = "0";
                  }}
                >
                  <img
                    src={img.url}
                    alt={`${img.caption} — ${img.location}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      transition: "transform 400ms ease",
                    }}
                  />
                  <div
                    className="gallery-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(20,92,56,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                      opacity: 0,
                      transition: "opacity 250ms ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#fff",
                        lineHeight: 1.2,
                        marginBottom: "3px",
                      }}
                    >
                      {img.caption}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.8)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {img.location}
                    </p>
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </section>

      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div
          data-ocid="gallery.empty_state"
          style={{ textAlign: "center", padding: "80px 40px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "var(--text-primary)",
            }}
          >
            No photos in this category
          </p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && currentImage && (
        <dialog
          open
          data-ocid="gallery.dialog"
          aria-modal="true"
          aria-label={`Photo: ${currentImage.caption}`}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            border: "none",
            maxWidth: "100vw",
            maxHeight: "100vh",
            width: "100%",
            height: "100%",
            margin: 0,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightbox(null);
          }}
        >
          {/* Close */}
          <button
            type="button"
            data-ocid="gallery.close_button"
            aria-label="Close photo viewer"
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 200ms ease",
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            type="button"
            data-ocid="gallery.prev_button"
            aria-label="Previous photo"
            disabled={lightbox.idx === 0}
            onClick={() =>
              lightbox.idx > 0 && setLightbox({ idx: lightbox.idx - 1 })
            }
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              cursor: lightbox.idx === 0 ? "default" : "pointer",
              opacity: lightbox.idx === 0 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 200ms ease",
            }}
          >
            ‹
          </button>

          {/* Next */}
          <button
            type="button"
            data-ocid="gallery.next_button"
            aria-label="Next photo"
            disabled={lightbox.idx === filteredImages.length - 1}
            onClick={() =>
              lightbox.idx < filteredImages.length - 1 &&
              setLightbox({ idx: lightbox.idx + 1 })
            }
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              cursor:
                lightbox.idx === filteredImages.length - 1
                  ? "default"
                  : "pointer",
              opacity: lightbox.idx === filteredImages.length - 1 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 200ms ease",
            }}
          >
            ›
          </button>

          {/* Image */}
          <div
            style={{
              maxWidth: "min(90vw, 1000px)",
              maxHeight: "80vh",
              position: "relative",
            }}
          >
            <img
              src={currentImage.url.replace("?w=600", "?w=1200&q=90")}
              alt={`${currentImage.caption} — ${currentImage.location}`}
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: "12px",
                display: "block",
              }}
            />
          </div>

          {/* Caption */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "18px",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              {currentImage.caption}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {currentImage.location}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "8px",
              }}
            >
              {lightbox.idx + 1} / {filteredImages.length}
            </p>
          </div>
        </dialog>
      )}
    </main>
  );
}
