import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&auto=format&fit=crop"
];
function FloatingParallaxHero({
  title,
  subtitle,
  images,
  stats,
  breadcrumbs,
  onDownloadPDF
}) {
  const [scrollY, setScrollY] = reactExports.useState(0);
  const [mounted, setMounted] = reactExports.useState(false);
  const heroRef = reactExports.useRef(null);
  const resolvedImages = [
    images[0] ?? FALLBACK_IMAGES[0],
    images[1] ?? FALLBACK_IMAGES[1],
    images[2] ?? FALLBACK_IMAGES[2]
  ];
  reactExports.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handlePDF = () => {
    if (onDownloadPDF) {
      onDownloadPDF();
    } else {
      window.print();
    }
  };
  const parallaxOffset = scrollY * 0.4;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: heroRef,
      "data-ocid": "floating_parallax_hero",
      style: {
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "#0A1A0F"
      },
      "aria-label": `Hero section for ${title}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: "-10% 0 -10% 0",
              transform: `translateY(${parallaxOffset * 0.3}px)`,
              willChange: "transform"
            },
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: resolvedImages[0],
                alt: "",
                loading: "eager",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 35%"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.80) 100%)",
              zIndex: 1
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: "clamp(80px, 12vh, 140px)",
              right: "clamp(16px, 5vw, 80px)",
              width: "clamp(140px, 18vw, 220px)",
              aspectRatio: "4/3",
              borderRadius: "10px",
              overflow: "hidden",
              transform: mounted ? "rotate(5deg) translateY(0) scale(1)" : "rotate(5deg) translateY(-40px) scale(0.9)",
              transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s, opacity 0.8s ease 0.6s",
              opacity: mounted ? 1 : 0,
              boxShadow: "0 16px 48px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.4)",
              border: "3px solid rgba(255,255,255,0.18)",
              zIndex: 2
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: resolvedImages[1],
                  alt: "",
                  style: { width: "100%", height: "100%", objectFit: "cover" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(26,122,76,0.15) 0%, transparent 60%)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: "clamp(200px, 32vh, 380px)",
              left: "clamp(12px, 3vw, 48px)",
              width: "clamp(110px, 14vw, 180px)",
              aspectRatio: "3/4",
              borderRadius: "10px",
              overflow: "hidden",
              transform: mounted ? "rotate(-3deg) translateX(0) scale(1)" : "rotate(-3deg) translateX(-50px) scale(0.85)",
              transition: "transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s, opacity 0.9s ease 0.8s",
              opacity: mounted ? 1 : 0,
              boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
              border: "3px solid rgba(255,255,255,0.15)",
              zIndex: 2
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: resolvedImages[2],
                  alt: "",
                  style: { width: "100%", height: "100%", objectFit: "cover" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(225deg, rgba(26,122,76,0.12) 0%, transparent 60%)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60vw",
              height: "40vh",
              background: "radial-gradient(ellipse, rgba(26,122,76,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 1
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "relative",
              zIndex: 3,
              padding: "clamp(24px, 4vw, 64px) clamp(16px, 4vw, 64px) clamp(40px, 6vh, 72px)",
              maxWidth: "1200px",
              width: "100%",
              margin: "0 auto"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "nav",
                {
                  "aria-label": "Breadcrumb",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    flexWrap: "wrap",
                    marginBottom: "24px"
                  },
                  children: breadcrumbs.map((crumb, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: { display: "flex", alignItems: "center", gap: "6px" },
                      children: [
                        i === breadcrumbs.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.95)",
                              fontWeight: 600
                            },
                            children: crumb.label
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Link,
                          {
                            to: crumb.href,
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.65)",
                              textDecoration: "none",
                              transition: "color 0.2s"
                            },
                            onMouseEnter: (e) => {
                              e.currentTarget.style.color = "rgba(255,255,255,0.95)";
                            },
                            onMouseLeave: (e) => {
                              e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                            },
                            children: crumb.label
                          }
                        ),
                        i < breadcrumbs.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: { color: "rgba(255,255,255,0.35)", fontSize: "11px" },
                            children: "›"
                          }
                        )
                      ]
                    },
                    crumb.href
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(40px, 6vw, 72px)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.08,
                    marginBottom: subtitle ? "12px" : "28px",
                    marginTop: 0,
                    textShadow: "0 3px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)",
                    maxWidth: "820px"
                  },
                  children: title
                }
              ),
              subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(15px, 2vw, 18px)",
                    color: "rgba(255,255,255,0.82)",
                    marginBottom: "28px",
                    marginTop: 0,
                    maxWidth: "640px",
                    lineHeight: 1.6,
                    textShadow: "0 1px 8px rgba(0,0,0,0.4)"
                  },
                  children: subtitle
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "28px"
                  },
                  "data-ocid": "floating_parallax_hero.stats",
                  children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.28)",
                        borderRadius: "50px",
                        padding: "7px 16px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "15px", lineHeight: 1 }, children: stat.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              lineHeight: 1.2
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    color: "#fff"
                                  },
                                  children: stat.value
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "10px",
                                    color: "rgba(255,255,255,0.65)",
                                    fontWeight: 500,
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase"
                                  },
                                  children: stat.label
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    stat.label
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "floating_parallax_hero.download_pdf_button",
                        onClick: handlePDF,
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "9px",
                          background: "#1A7A4C",
                          color: "#fff",
                          padding: "13px 24px",
                          borderRadius: "10px",
                          border: "none",
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          fontWeight: 700,
                          cursor: "pointer",
                          boxShadow: "0 4px 20px rgba(26,122,76,0.45), 0 2px 8px rgba(0,0,0,0.3)",
                          transition: "background 0.2s, transform 0.15s, box-shadow 0.2s"
                        },
                        onMouseEnter: (e) => {
                          const el = e.currentTarget;
                          el.style.background = "#145C38";
                          el.style.transform = "translateY(-2px)";
                          el.style.boxShadow = "0 8px 28px rgba(26,122,76,0.5), 0 2px 8px rgba(0,0,0,0.3)";
                        },
                        onMouseLeave: (e) => {
                          const el = e.currentTarget;
                          el.style.background = "#1A7A4C";
                          el.style.transform = "translateY(0)";
                          el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.45), 0 2px 8px rgba(0,0,0,0.3)";
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "svg",
                            {
                              width: "17",
                              height: "17",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "#fff",
                              strokeWidth: "2.2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              "aria-hidden": "true",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                              ]
                            }
                          ),
                          "Download Itinerary PDF"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          background: "rgba(255,255,255,0.12)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.22)",
                          borderRadius: "50px",
                          padding: "6px 14px"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "svg",
                            {
                              width: "13",
                              height: "13",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "rgba(255,255,255,0.8)",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              "aria-hidden": "true",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "14 2 14 8 20 8" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.8)",
                                fontWeight: 600,
                                letterSpacing: "0.04em"
                              },
                              children: "PDF • Free Download"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              bottom: "32px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              opacity: scrollY > 50 ? 0 : 0.7,
              transition: "opacity 0.4s",
              pointerEvents: "none"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase"
                  },
                  children: "Scroll to explore"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "rgba(255,255,255,0.7)",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "aria-hidden": "true",
                  style: {
                    animation: "heroScrollBounce 2s ease-in-out infinite"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @media (max-width: 768px) {
          [data-ocid="floating_parallax_hero"] [style*="position: absolute"][style*="right"] {
            display: none;
          }
        }
      ` })
      ]
    }
  );
}
export {
  FloatingParallaxHero as F
};
