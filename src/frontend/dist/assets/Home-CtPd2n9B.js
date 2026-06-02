import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
import { T as TrekCard } from "./TrekCard-MEq-mcYL.js";
import { y as yatras, Y as YatraCard } from "./yatras-BSkLTFMw.js";
import { t as treks } from "./treks-NQ8g2zVB.js";
import { b as blogPosts } from "./blogs-Cq9k69Hm.js";
const PILLS = [
  "All",
  "Treks",
  "Yatras",
  "Easy",
  "Moderate",
  "Difficult",
  "Packages"
];
const PACKAGES = [
  {
    slug: "corporate",
    name: "Corporate Trek",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80",
    priceFrom: 12e3,
    durationLabel: "2-3 Days",
    state: "Packages",
    difficulty: null,
    rating: 4.8
  },
  {
    slug: "family",
    name: "Family Package",
    image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
    priceFrom: 9e3,
    durationLabel: "3-4 Days",
    state: "Packages",
    difficulty: null,
    rating: 4.9
  },
  {
    slug: "honeymoon",
    name: "Honeymoon Camp",
    image: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
    priceFrom: 18e3,
    durationLabel: "3-5 Days",
    state: "Packages",
    difficulty: null,
    rating: 5
  },
  {
    slug: "school-college",
    name: "School/College Trek",
    image: "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80",
    priceFrom: 5500,
    durationLabel: "2-4 Days",
    state: "Packages",
    difficulty: null,
    rating: 4.7
  }
];
const CARD_IMAGES$1 = {
  "chopta-tungnath": "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80",
  kedarkantha: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  "har-ki-dun": "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
  "kuari-pass": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "valley-of-flowers": "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
  roopkund: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  brahmatal: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80",
  "phulara-ridge": "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80",
  "hampta-pass": "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80",
  "sar-pass": "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
  kheerganga: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
  triund: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "beas-kund": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80",
  "nag-tibba": "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80",
  "dayara-bugyal": "https://images.unsplash.com/photo-1502920514313-52581002a659?w=400&q=80",
  kedarnath: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
  "do-dham": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "char-dham": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  "panch-kedar": "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80"
};
function MobileCard({ item }) {
  const href = item.type === "trek" ? `/treks/${item.slug}` : item.type === "yatra" ? `/yatra/${item.slug}` : `/packages/${item.slug}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: href,
      style: { textDecoration: "none", color: "inherit", flexShrink: 0 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            width: "180px",
            borderRadius: "14px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            border: "1px solid rgba(26,122,76,0.1)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  position: "relative",
                  height: "120px",
                  overflow: "hidden"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.image,
                      alt: item.name,
                      loading: "lazy",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        background: item.type === "yatra" ? "#F4A623" : "#1A7A4C",
                        color: "#fff",
                        fontSize: "9px",
                        fontWeight: 700,
                        fontFamily: "var(--font-labels)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "3px 7px",
                        borderRadius: "99px"
                      },
                      children: item.type === "yatra" ? "Yatra" : item.type === "package" ? "Package" : item.difficulty ?? "Trek"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: {
                        position: "absolute",
                        bottom: "8px",
                        right: "8px",
                        background: "rgba(0,0,0,0.6)",
                        color: "#F4A623",
                        fontSize: "10px",
                        fontWeight: 700,
                        fontFamily: "var(--font-labels)",
                        padding: "3px 7px",
                        borderRadius: "99px",
                        backdropFilter: "blur(4px)"
                      },
                      children: [
                        "★ ",
                        item.rating
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "10px 12px 12px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    lineHeight: 1.25,
                    marginBottom: "4px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: item.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "#6B7280",
                    marginBottom: "8px"
                  },
                  children: [
                    item.state !== "Packages" ? item.state : "Custom",
                    " ·",
                    " ",
                    item.durationLabel
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-labels)",
                          fontSize: "13px",
                          fontWeight: 800,
                          color: "#1A7A4C"
                        },
                        children: [
                          "₹",
                          item.priceFrom.toLocaleString("en-IN")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "10px",
                          color: "#6B7280"
                        },
                        children: "/person"
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function AirbnbMobileHero() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const allTreks = treks.map((t) => ({
    slug: t.slug,
    name: t.name,
    image: CARD_IMAGES$1[t.slug] ?? t.heroImage ?? "",
    priceFrom: t.priceFrom,
    durationLabel: t.durationLabel,
    state: t.state,
    difficulty: t.difficulty,
    rating: t.rating,
    type: "trek"
  }));
  const allYatras = yatras.map((y) => ({
    slug: y.slug,
    name: y.name,
    image: CARD_IMAGES$1[y.slug] ?? "",
    priceFrom: y.priceFrom,
    durationLabel: y.durationLabel,
    state: "Uttarakhand",
    difficulty: null,
    rating: y.rating,
    type: "yatra"
  }));
  const allPackages = PACKAGES.map((p) => ({
    ...p,
    type: "package"
  }));
  const filteredCards = reactExports.useMemo(() => {
    const all = [...allTreks, ...allYatras, ...allPackages];
    let base;
    switch (activeFilter) {
      case "Treks":
        base = allTreks;
        break;
      case "Yatras":
        base = allYatras;
        break;
      case "Easy":
        base = allTreks.filter((t) => {
          var _a;
          return (_a = t.difficulty) == null ? void 0 : _a.includes("Easy");
        });
        break;
      case "Moderate":
        base = allTreks.filter(
          (t) => {
            var _a;
            return t.difficulty === "Moderate" || ((_a = t.difficulty) == null ? void 0 : _a.includes("Moderate"));
          }
        );
        break;
      case "Difficult":
        base = allTreks.filter((t) => t.difficulty === "Difficult");
        break;
      case "Packages":
        base = allPackages;
        break;
      default:
        base = all;
    }
    if (searchQuery.length >= 2) {
      const q = searchQuery.toLowerCase();
      base = base.filter(
        (c) => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)
      );
    }
    return base;
  }, [activeFilter, searchQuery, allTreks, allYatras, allPackages]);
  const trendingItems = allTreks.filter(
    (t) => [
      "kedarkantha",
      "chopta-tungnath",
      "hampta-pass",
      "har-ki-dun",
      "sar-pass"
    ].includes(t.slug)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "home.airbnb_mobile_hero",
      className: "md:hidden",
      style: { background: "#F8FAF9", paddingBottom: "80px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "relative",
              height: "260px",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=800&q=80",
                  alt: "Himalayan trails",
                  loading: "eager",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 40%"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(20,92,56,0.75) 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: "28px",
                    left: "16px",
                    right: "16px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h1",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "28px",
                          fontWeight: 700,
                          color: "#fff",
                          lineHeight: 1.15,
                          marginBottom: "4px",
                          textShadow: "0 2px 12px rgba(0,0,0,0.4)"
                        },
                        children: "Find Your Summit"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.85)"
                        },
                        children: "Himalayan Treks & Yatras — Expert Guided"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "sticky",
              top: 0,
              zIndex: 50,
              background: "#fff",
              padding: "12px 16px",
              borderBottom: "1px solid #E8F5EE",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#F8FAF9",
                  border: "1.5px solid #1A7A4C",
                  borderRadius: "12px",
                  padding: "0 14px",
                  height: "46px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#1A7A4C",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "search",
                      "data-ocid": "home.mobile_search_input",
                      placeholder: "Search treks, yatras, destinations...",
                      value: searchQuery,
                      onChange: (e) => setSearchQuery(e.target.value),
                      style: {
                        flex: 1,
                        border: "none",
                        background: "transparent",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "#1A1A1A",
                        outline: "none"
                      }
                    }
                  ),
                  searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Clear search",
                      onClick: () => setSearchQuery(""),
                      style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        color: "#6B7280",
                        fontSize: "18px"
                      },
                      children: "×"
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              overflowX: "auto",
              display: "flex",
              gap: "8px",
              padding: "14px 16px 10px",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            },
            children: PILLS.map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `home.filter_pill.${pill.toLowerCase()}`,
                onClick: () => setActiveFilter(pill),
                style: {
                  flexShrink: 0,
                  padding: "8px 16px",
                  borderRadius: "99px",
                  border: activeFilter === pill ? "none" : "1.5px solid rgba(26,122,76,0.25)",
                  background: activeFilter === pill ? "#1A7A4C" : "#fff",
                  color: activeFilter === pill ? "#fff" : "#1A7A4C",
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap"
                },
                children: pill
              },
              pill
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              overflowX: "auto",
              display: "flex",
              gap: "12px",
              padding: "4px 16px 16px",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            },
            children: filteredCards.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "home.mobile_cards.empty_state",
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px 32px",
                  width: "100%",
                  color: "#6B7280",
                  textAlign: "center",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "32px", marginBottom: "8px" }, children: "🏔️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No results found. Try a different filter." })
                ]
              }
            ) : filteredCards.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": `home.mobile_card.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCard, { item })
              },
              item.slug + String(i)
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0 16px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "14px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1A1A1A"
                    },
                    children: "🔥 Trending Right Now"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/treks",
                    "data-ocid": "home.mobile_trending_see_all",
                    style: {
                      fontFamily: "var(--font-labels)",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#1A7A4C",
                      textDecoration: "none",
                      letterSpacing: "0.05em"
                    },
                    children: "See all →"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                overflowX: "auto",
                display: "flex",
                gap: "12px",
                paddingBottom: "4px",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              },
              children: trendingItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": `home.trending_card.${i + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCard, { item }) }, item.slug))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "24px 16px 0" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 700,
                color: "#1A1A1A",
                marginBottom: "14px"
              },
              children: "Explore by Type"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px"
              },
              children: [
                {
                  label: "Trek",
                  emoji: "🥾",
                  href: "/treks",
                  bg: "#E8F5EE",
                  color: "#1A7A4C",
                  count: treks.length
                },
                {
                  label: "Yatra",
                  emoji: "🙏",
                  href: "/yatra",
                  bg: "#FEF3E2",
                  color: "#F4A623",
                  count: yatras.length
                },
                {
                  label: "Packages",
                  emoji: "📦",
                  href: "/packages",
                  bg: "#EEF2FF",
                  color: "#4F46E5",
                  count: PACKAGES.length
                },
                {
                  label: "Gear Rental",
                  emoji: "🎒",
                  href: "/gear-rental",
                  bg: "#FEE2E2",
                  color: "#EF4444",
                  count: 10
                }
              ].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: cat.href,
                  "data-ocid": `home.category_card.${cat.label.toLowerCase().replace(" ", "-")}`,
                  style: { textDecoration: "none" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        background: cat.bg,
                        borderRadius: "14px",
                        padding: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "28px" }, children: cat.emoji }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-display)",
                                fontSize: "15px",
                                fontWeight: 700,
                                color: cat.color
                              },
                              children: cat.label
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "11px",
                                color: "#6B7280"
                              },
                              children: [
                                cat.count,
                                "+ options"
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  )
                },
                cat.label
              ))
            }
          )
        ] })
      ]
    }
  );
}
function buildTrekCard(slug) {
  const t = treks.find((x) => x.slug === slug);
  if (!t) return void 0;
  return {
    slug: t.slug,
    name: t.name,
    image: t.heroImage ?? "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    type: "trek",
    rating: t.rating,
    priceFrom: t.priceFrom,
    difficulty: t.difficulty,
    durationLabel: t.durationLabel
  };
}
function buildYatraCard(slug) {
  const y = yatras.find((x) => x.slug === slug);
  if (!y) return void 0;
  return {
    slug: y.slug,
    name: y.name,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    type: "yatra",
    rating: y.rating,
    priceFrom: y.priceFrom,
    difficulty: void 0,
    durationLabel: y.durationLabel
  };
}
const CARD_IMAGES = {
  "chopta-tungnath": "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=500&q=80",
  kedarkantha: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80",
  "har-ki-dun": "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=500&q=80",
  "kuari-pass": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  "valley-of-flowers": "https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&q=80",
  roopkund: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
  brahmatal: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&q=80",
  "phulara-ridge": "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=500&q=80",
  "hampta-pass": "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=500&q=80",
  "sar-pass": "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=500&q=80",
  kedarnath: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
  "do-dham": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  "char-dham": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80",
  "panch-kedar": "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=500&q=80",
  "dayara-bugyal": "https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&q=80"
};
function buildCardWithImage(slug, type) {
  const card = type === "trek" ? buildTrekCard(slug) : buildYatraCard(slug);
  if (!card) return void 0;
  return { ...card, image: CARD_IMAGES[slug] ?? card.image };
}
const DESTINATIONS = [
  {
    id: 0,
    label: "Uttarakhand",
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=90",
    heroName: "Uttarakhand Highlands",
    subtitle: "The Land of Gods — Bugyals, Temples & Himalayan Peaks",
    ctaHref: "/treks/uttarakhand",
    cards: [
      buildCardWithImage("chopta-tungnath", "trek"),
      buildCardWithImage("har-ki-dun", "trek"),
      buildCardWithImage("kedarkantha", "trek"),
      buildCardWithImage("kuari-pass", "trek"),
      buildCardWithImage("valley-of-flowers", "trek")
    ].filter((c) => !!c)
  },
  {
    id: 1,
    label: "Himachal Pradesh",
    heroImage: "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=1920&q=90",
    heroName: "Himachal Highlands",
    subtitle: "Parvati Valley to Lahaul — Crossover Treks & Alpine Lakes",
    ctaHref: "/treks/himachal-pradesh",
    cards: [
      buildCardWithImage("hampta-pass", "trek"),
      buildCardWithImage("sar-pass", "trek"),
      buildCardWithImage("kheerganga", "trek"),
      buildCardWithImage("triund", "trek"),
      buildCardWithImage("beas-kund", "trek")
    ].filter((c) => !!c)
  },
  {
    id: 2,
    label: "Kedarnath",
    heroImage: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=1920&q=90",
    heroName: "Kedarnath Dham",
    subtitle: "Jyotirlinga of Lord Shiva — 3,583m, Rudraprayag, Uttarakhand",
    ctaHref: "/yatra/kedarnath",
    cards: [
      buildCardWithImage("kedarnath", "yatra"),
      buildCardWithImage("do-dham", "yatra"),
      buildCardWithImage("chopta-tungnath", "trek"),
      buildCardWithImage("roopkund", "trek"),
      buildCardWithImage("kuari-pass", "trek")
    ].filter((c) => !!c)
  },
  {
    id: 3,
    label: "Winter",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=90",
    heroName: "Winter Himalaya",
    subtitle: "Snow-Blanketed Trails & Frozen Lakes — Dec to Feb Season",
    ctaHref: "/treks",
    cards: [
      buildCardWithImage("kedarkantha", "trek"),
      buildCardWithImage("brahmatal", "trek"),
      buildCardWithImage("chopta-tungnath", "trek"),
      buildCardWithImage("dayara-bugyal", "trek"),
      buildCardWithImage("har-ki-dun", "trek")
    ].filter((c) => !!c)
  },
  {
    id: 4,
    label: "Char Dham",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90",
    heroName: "Char Dham Yatra",
    subtitle: "Yamunotri · Gangotri · Kedarnath · Badrinath — Sacred Circuit 2026",
    ctaHref: "/yatra/char-dham",
    cards: [
      buildCardWithImage("char-dham", "yatra"),
      buildCardWithImage("kedarnath", "yatra"),
      buildCardWithImage("do-dham", "yatra"),
      buildCardWithImage("panch-kedar", "yatra"),
      buildCardWithImage("valley-of-flowers", "trek")
    ].filter((c) => !!c)
  }
];
function HeroCard({
  card,
  index,
  isActive,
  onClick
}) {
  const href = card.type === "trek" ? `/treks/${card.slug}` : `/yatra/${card.slug}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `hero.foxico_card.${index + 1}`,
      onClick,
      onKeyDown: (e) => e.key === "Enter" && onClick(),
      "aria-label": `View ${card.name}`,
      style: {
        position: "relative",
        width: "220px",
        height: "290px",
        borderRadius: "16px",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        transform: `translateX(${index * 22}px) translateY(${index * 14}px)`,
        zIndex: 10 - index,
        border: isActive ? "2.5px solid #2ECC71" : "2px solid rgba(255,255,255,0.12)",
        boxShadow: isActive ? "0 0 0 3px rgba(46,204,113,0.25), 0 8px 32px rgba(0,0,0,0.5)" : "0 8px 32px rgba(0,0,0,0.45)",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: card.image,
            alt: card.name,
            loading: "lazy",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.82) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": `Save ${card.name}`,
            "data-ocid": `hero.bookmark.${index + 1}`,
            style: {
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(6px)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2
            },
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              position: "absolute",
              top: "12px",
              left: "12px",
              background: card.type === "yatra" ? "#F4A623" : "#1A7A4C",
              color: "#fff",
              fontSize: "9px",
              fontWeight: 700,
              fontFamily: "var(--font-labels)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: "99px"
            },
            children: card.type === "yatra" ? "Yatra" : card.difficulty ?? "Trek"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "16px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "6px",
                    lineHeight: 1.2,
                    textShadow: "0 1px 4px rgba(0,0,0,0.5)"
                  },
                  children: card.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "6px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "svg",
                        {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 24 24",
                          fill: "#F4A623",
                          "aria-hidden": "true",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Rating" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.9)",
                            fontWeight: 600
                          },
                          children: card.rating
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-labels)",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#2ECC71"
                        },
                        children: [
                          "₹",
                          card.priceFrom.toLocaleString("en-IN")
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: href,
                  "data-ocid": `hero.card_link.${index + 1}`,
                  onClick: (e) => e.stopPropagation(),
                  style: {
                    display: "block",
                    marginTop: "10px",
                    textAlign: "center",
                    background: "rgba(26,122,76,0.9)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    fontFamily: "var(--font-labels)",
                    letterSpacing: "0.08em",
                    padding: "7px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    backdropFilter: "blur(4px)"
                  },
                  children: "View Details →"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function FoxicoHero() {
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  const [_prevIdx, setPrevIdx] = reactExports.useState(0);
  const [animating, setAnimating] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const dest = DESTINATIONS[activeIdx];
  function goTo(idx) {
    if (idx === activeIdx || animating) return;
    setPrevIdx(activeIdx);
    setAnimating(true);
    setActiveIdx(idx);
    setTimeout(() => setAnimating(false), 600);
  }
  reactExports.useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((activeIdx + 1) % DESTINATIONS.length);
    }, 6e3);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "home.foxico_hero",
      className: "hidden md:flex",
      style: {
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "640px",
        overflow: "hidden"
      },
      children: [
        DESTINATIONS.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": i !== activeIdx,
            style: {
              position: "absolute",
              inset: 0,
              opacity: i === activeIdx ? 1 : 0,
              transition: "opacity 700ms ease",
              zIndex: 0
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: d.heroImage,
                alt: "",
                loading: i === 0 ? "eager" : "lazy",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 35%"
                }
              }
            )
          },
          d.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.18) 100%)",
              zIndex: 1
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "relative",
              zIndex: 2,
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              padding: "0 clamp(32px,4vw,64px)",
              gap: "32px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    flex: "0 0 55%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    paddingTop: "80px",
                    paddingBottom: "60px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-labels)",
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "#2ECC71",
                          marginBottom: "20px",
                          animation: "heroTextIn 0.5s ease forwards"
                        },
                        children: "🏔️ Himalayan Adventures Since 2009"
                      },
                      `label-${activeIdx}`
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h1",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(52px, 6.5vw, 88px)",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                          marginBottom: "20px",
                          maxWidth: "580px",
                          textShadow: "0 2px 24px rgba(0,0,0,0.5)",
                          animation: "heroTextIn 0.55s ease forwards"
                        },
                        children: dest.heroName
                      },
                      `h1-${activeIdx}`
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "clamp(15px,1.6vw,19px)",
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.6,
                          maxWidth: "480px",
                          marginBottom: "40px",
                          animation: "heroTextIn 0.6s ease forwards"
                        },
                        children: dest.subtitle
                      },
                      `sub-${activeIdx}`
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "14px", marginBottom: "60px" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: dest.ctaHref,
                          "data-ocid": "hero.foxico_explore_btn",
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            height: "50px",
                            padding: "0 28px",
                            background: "#1A7A4C",
                            color: "#fff",
                            borderRadius: "10px",
                            fontFamily: "var(--font-body)",
                            fontWeight: 700,
                            fontSize: "14px",
                            textDecoration: "none",
                            boxShadow: "0 4px 20px rgba(26,122,76,0.45)",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease"
                          },
                          onMouseEnter: (e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 28px rgba(26,122,76,0.6)";
                          },
                          onMouseLeave: (e) => {
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,122,76,0.45)";
                          },
                          children: [
                            "Explore Trek",
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "svg",
                              {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "12 5 19 12 12 19" })
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/contact",
                          "data-ocid": "hero.foxico_plan_btn",
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            height: "50px",
                            padding: "0 28px",
                            background: "transparent",
                            color: "#fff",
                            borderRadius: "10px",
                            border: "1.5px solid rgba(255,255,255,0.5)",
                            fontFamily: "var(--font-body)",
                            fontWeight: 600,
                            fontSize: "14px",
                            textDecoration: "none",
                            backdropFilter: "blur(6px)",
                            transition: "border-color 0.2s ease, background 0.2s ease"
                          },
                          onMouseEnter: (e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                          },
                          onMouseLeave: (e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                            e.currentTarget.style.background = "transparent";
                          },
                          children: "Plan My Trip"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "14px"
                        },
                        children: DESTINATIONS.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            "aria-label": `Go to ${d.label}`,
                            "data-ocid": `hero.foxico_dot.${i + 1}`,
                            onClick: () => goTo(i),
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: 0
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    width: i === activeIdx ? "28px" : "10px",
                                    height: "10px",
                                    borderRadius: "99px",
                                    background: i === activeIdx ? "#2ECC71" : "transparent",
                                    border: i === activeIdx ? "none" : "2px solid rgba(255,255,255,0.5)",
                                    transition: "all 0.3s ease",
                                    flexShrink: 0
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "var(--font-labels)",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: i === activeIdx ? "#fff" : "rgba(255,255,255,0.45)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    transition: "color 0.3s ease",
                                    whiteSpace: "nowrap"
                                  },
                                  children: d.label
                                }
                              )
                            ]
                          },
                          d.id
                        ))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          bottom: "36px",
                          left: "clamp(32px,4vw,64px)",
                          fontFamily: "var(--font-labels)",
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.6)",
                          letterSpacing: "0.1em"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#fff", fontSize: "18px" }, children: [
                            "0",
                            activeIdx + 1
                          ] }),
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "14px" }, children: "/" }),
                          " 0",
                          DESTINATIONS.length
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    flex: "0 0 45%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    height: "100%",
                    paddingTop: "80px",
                    paddingBottom: "60px"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        position: "relative",
                        width: "340px",
                        height: "420px",
                        animation: "heroCardsIn 0.55s ease forwards"
                      },
                      children: dest.cards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            animationDelay: `${i * 0.07}s`
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            HeroCard,
                            {
                              card,
                              index: i,
                              isActive: i === 0,
                              onClick: () => goTo((activeIdx + 1) % DESTINATIONS.length)
                            }
                          )
                        },
                        card.slug + String(i)
                      ))
                    },
                    `cards-${activeIdx}`
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 3,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "16px clamp(32px,4vw,64px)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              justifyContent: "center"
            },
            children: [
              { v: "500+", l: "Treks Completed" },
              { v: "12,000+", l: "Happy Trekkers" },
              { v: "15 Years", l: "Experience" },
              { v: "4.9 ★", l: "Rating" },
              { v: "100%", l: "Safe Record" }
            ].map((s, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "contents" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#2ECC71"
                        },
                        children: s.v
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.75)"
                        },
                        children: s.l
                      }
                    )
                  ]
                }
              ),
              i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    color: "rgba(255,255,255,0.2)",
                    fontSize: "20px",
                    margin: "0 8px"
                  },
                  children: "||"
                }
              )
            ] }, s.l))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateX(-28px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroCardsIn {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
      ` })
      ]
    }
  );
}
const REELS = [
  {
    id: 1,
    title: "Kedarkantha Summit Sunrise",
    duration: "1:24",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&q=80"
  },
  {
    id: 2,
    title: "Hampta Pass Crossing",
    duration: "0:58",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80"
  },
  {
    id: 3,
    title: "Valley of Flowers Bloom",
    duration: "1:05",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80"
  },
  {
    id: 4,
    title: "Kedarnath Yatra Morning",
    duration: "0:47",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
  },
  {
    id: 5,
    title: "Har Ki Dun Valley",
    duration: "1:18",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80"
  },
  {
    id: 6,
    title: "Sar Pass Snow Slides",
    duration: "0:52",
    image: "https://images.unsplash.com/photo-1458442310124-dde6edb43d10?w=400&q=80"
  },
  {
    id: 7,
    title: "Chopta Tungnath Temple",
    duration: "1:03",
    image: "https://images.unsplash.com/photo-1573590330099-d6c7355ec595?w=400&q=80"
  },
  {
    id: 8,
    title: "Char Dham Highlights",
    duration: "0:39",
    image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80"
  }
];
function PlayIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "36",
      height: "36",
      viewBox: "0 0 36 36",
      fill: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "18", fill: "rgba(255,255,255,0.95)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "14,11 28,18 14,25", fill: "#1A7A4C" })
      ]
    }
  );
}
function ReelsSection() {
  const scrollRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "home.reels_section",
      style: {
        background: "#1A1A1A",
        padding: "48px 0",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 clamp(16px,4vw,48px)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "28px",
              gap: "16px",
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.2
                    },
                    children: "Trek Reels"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      margin: "6px 0 0"
                    },
                    children: "Short clips from the trails"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://www.youtube.com/@GlobalTrekIndia",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "home.reels.watch_all_link",
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#2ECC71",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "opacity 0.2s",
                    whiteSpace: "nowrap"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.opacity = "0.75";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.opacity = "1";
                  },
                  children: [
                    "Watch All on YouTube",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M3 8h10M9 4l4 4-4 4",
                            stroke: "#2ECC71",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: scrollRef,
            "data-ocid": "home.reels.scroll_strip",
            style: {
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              padding: "4px clamp(16px,4vw,48px) 12px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab"
            },
            className: "reels-strip",
            children: REELS.map((reel) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReelCard, { reel }, reel.id))
          }
        )
      ]
    }
  );
}
function ReelCard({
  reel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `home.reels.item.${reel.id}`,
      style: {
        position: "relative",
        minWidth: "160px",
        width: "160px",
        height: "280px",
        borderRadius: "16px",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,122,76,0.45)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: reel.image,
            alt: reel.title,
            loading: "lazy",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.88) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(4px)",
              color: "#fff",
              fontSize: "11px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: "20px",
              letterSpacing: "0.03em"
            },
            children: reel.duration
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlayIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              position: "absolute",
              bottom: "12px",
              left: "10px",
              right: "10px",
              margin: 0,
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.35,
              textShadow: "0 1px 4px rgba(0,0,0,0.7)"
            },
            children: reel.title
          }
        )
      ]
    }
  );
}
const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&q=80",
  "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&q=80",
  "https://images.unsplash.com/photo-1608278047522-58806a6ac85b?w=400&q=80"
];
const YOUTUBE_IDS = ["G41oAgfxj4o", "ia6TXClgnyc", "M7lc1UVf-VE"];
const REVIEW_DATA = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    stars: 5,
    text: "Best trekking experience of my life! The Kedarkantha winter trek was absolutely magical. Summit sunrise at -8°C with snow-covered peaks all around — nothing I have ever experienced compares to this. The guides were extremely professional and safety-conscious.",
    time: "2 weeks ago",
    initials: "RS"
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    stars: 5,
    text: "Chose Global Trek for Char Dham Yatra and it exceeded every expectation. The logistics were seamless, the accommodation was comfortable, and our guide Vikram made the spiritual journey deeply meaningful. Will definitely book again.",
    time: "1 month ago",
    initials: "PP"
  },
  {
    name: "Amit Verma",
    location: "Bengaluru",
    stars: 5,
    text: "Hampta Pass trek with Global Trek — professional guides, amazing food, and stunning views. The crossover from green Kullu valley to barren Lahaul in one day is mind-blowing. Group of 10, all perfectly taken care of. Highly recommend.",
    time: "3 weeks ago",
    initials: "AV"
  }
];
const WHY_US = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#1A7A4C",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
      }
    ),
    title: "Expert Safety",
    desc: "100% safe trek record, trained guides, emergency protocols & first aid on every trek.",
    stat: "100%",
    statLabel: "Safe"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#1A7A4C",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
        ]
      }
    ),
    title: "Fixed Departures",
    desc: "Guaranteed batches every weekend. Book anytime, trek with a great group.",
    stat: "500+",
    statLabel: "Trips Done"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#1A7A4C",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", r: "6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" })
        ]
      }
    ),
    title: "Certified Guides",
    desc: "ITBP certified, 10+ years experience, deep local knowledge of every trail.",
    stat: "15",
    statLabel: "Years"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#1A7A4C",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
      }
    ),
    title: "We Care",
    desc: "Small groups max 12, personalized attention, 24/7 support throughout your journey.",
    stat: "12,000+",
    statLabel: "Trekkers"
  }
];
const PARTNERS = [
  "Times of India",
  "NDTV",
  "Ministry of Tourism",
  "Uttarakhand Tourism",
  "HP Tourism",
  "Incredible India"
];
function StarRating({ count = 5 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: "2px" }, children: Array.from({ length: count }, (_, starIdx) => String(starIdx)).map(
    (key) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "#1A7A4C",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Star" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
        ]
      },
      key
    )
  ) });
}
function AnimatedStat({ target, label }) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, style: { textAlign: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.7s ease"
        },
        children: target
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "rgba(255,255,255,0.8)",
          marginTop: "6px",
          fontWeight: 500
        },
        children: label
      }
    )
  ] });
}
function YouTubeEmbed({ videoId }) {
  const [loaded, setLoaded] = reactExports.useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "relative",
        paddingBottom: "56.25%",
        background: "#000",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer"
      },
      onClick: () => setLoaded(true),
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") setLoaded(true);
      },
      "aria-label": "Play trek video",
      children: loaded ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
          title: "Trek video",
          allow: "autoplay; encrypted-media",
          allowFullScreen: true,
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none"
          }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: thumb,
            alt: "Trek video thumbnail",
            style: {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            },
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.3)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  width: "64px",
                  height: "64px",
                  background: "#FF0000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "#fff",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Play" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "5 3 19 12 5 21 5 3" })
                    ]
                  }
                )
              }
            )
          }
        )
      ] })
    }
  );
}
function Home() {
  const [activeTab, setActiveTab] = reactExports.useState("Uttarakhand");
  reactExports.useEffect(() => {
    document.title = "Global Trek — Where Every Trail Tells a Story";
  }, []);
  const uttarakhandTreks = treks.filter((t) => t.state === "Uttarakhand").slice(0, 6);
  const himachalTreks = treks.filter((t) => t.state === "Himachal Pradesh").slice(0, 6);
  const trendingTreks = treks.slice(0, 8);
  const featuredBlogs = blogPosts.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: { background: "#FFFFFF" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FoxicoHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AirbnbMobileHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReelsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.trending_section",
        style: { background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "40px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                },
                children: "MOST POPULAR"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  margin: 0
                },
                children: "Trending Treks"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px"
              },
              children: trendingTreks.map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.slug))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", marginTop: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/treks",
              "data-ocid": "home.trending.view_all_button",
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "#1A7A4C",
                color: "#fff",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "background 0.2s"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#145C38";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "#1A7A4C";
              },
              children: "View All Treks →"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.why_us_section",
        style: { background: "#F8FAF9", padding: "80px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "56px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                },
                children: "OUR PROMISE"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  margin: 0
                },
                children: "4 Reasons to Choose Global Trek"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "28px",
                marginBottom: "56px"
              },
              children: WHY_US.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    background: "#fff",
                    borderRadius: "16px",
                    borderTop: "4px solid #1A7A4C",
                    boxShadow: "0 4px 20px rgba(26,122,76,0.1)",
                    padding: "32px 28px",
                    textAlign: "center",
                    transition: "transform 0.3s, box-shadow 0.3s"
                  },
                  onMouseEnter: (e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 32px rgba(26,122,76,0.18)";
                  },
                  onMouseLeave: (e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.1)";
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "16px"
                        },
                        children: item.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        style: {
                          fontFamily: "var(--font-labels)",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#1A1A1A",
                          marginBottom: "10px"
                        },
                        children: item.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "#4A4A4A",
                          lineHeight: 1.6,
                          margin: 0
                        },
                        children: item.desc
                      }
                    )
                  ]
                },
                item.title
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "32px",
                background: "#1A7A4C",
                borderRadius: "16px",
                padding: "40px"
              },
              children: WHY_US.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                AnimatedStat,
                {
                  target: item.stat,
                  label: item.statLabel
                },
                item.statLabel
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.statewise_section",
        style: { background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "40px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                },
                children: "EXPLORE BY REGION"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  margin: 0
                },
                children: "Treks by State"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "flex",
                borderRadius: "10px",
                overflow: "hidden",
                border: "2px solid #1A7A4C",
                width: "fit-content",
                margin: "0 auto 40px"
              },
              children: ["Uttarakhand", "Himachal Pradesh"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `home.statewise.tab.${tab.toLowerCase().replace(" ", "-")}`,
                  onClick: () => setActiveTab(tab),
                  style: {
                    padding: "12px 28px",
                    border: "none",
                    cursor: "pointer",
                    background: activeTab === tab ? "#1A7A4C" : "#fff",
                    color: activeTab === tab ? "#fff" : "#1A7A4C",
                    fontFamily: "var(--font-labels)",
                    fontWeight: 700,
                    fontSize: "14px",
                    transition: "all 0.2s"
                  },
                  children: tab
                },
                tab
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px"
              },
              children: (activeTab === "Uttarakhand" ? uttarakhandTreks : himachalTreks).map((trek, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek, index: i }, trek.slug))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.yatra_section",
        style: {
          background: "linear-gradient(135deg, #145C38 0%, #1A7A4C 100%)",
          padding: "80px clamp(16px,4vw,48px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "48px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#F4A623",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                },
                children: "☸ SACRED JOURNEYS"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 12px"
                },
                children: "Embark on a Sacred Journey"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.8)",
                  margin: 0
                },
                children: "Spiritual pilgrimages to the holiest shrines of the Himalayas. 2026 Season Open."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "48px"
              },
              children: yatras.map((yatra, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(YatraCard, { yatra, index: i }, yatra.slug))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/yatra",
              "data-ocid": "home.yatra.register_button",
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 40px",
                background: "#F4A623",
                color: "#fff",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                transition: "background 0.2s",
                boxShadow: "0 4px 16px rgba(244,166,35,0.4)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#E0941A";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "#F4A623";
              },
              children: "🙏 Register for 2026 Yatra"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.youtube_section",
        style: { background: "#F8FAF9", padding: "80px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "48px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                },
                children: "WATCH & EXPLORE"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  margin: 0
                },
                children: "Experience the Himalayas — Watch Our Stories"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                marginBottom: "40px"
              },
              children: YOUTUBE_IDS.map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(YouTubeEmbed, { videoId: id }, id))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://youtube.com/@globaltrek",
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "home.youtube.channel_link",
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "15px",
                color: "#1A7A4C",
                textDecoration: "none"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "#FF0000",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "polygon",
                        {
                          points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02",
                          fill: "#fff"
                        }
                      )
                    ]
                  }
                ),
                "Watch More on YouTube →"
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.reviews_section",
        style: { background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "48px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "12px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { count: 5 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "28px",
                        fontWeight: 700,
                        color: "#1A1A1A"
                      },
                      children: "4.9/5"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "#4A4A4A",
                  marginBottom: "4px"
                },
                children: "Based on 500+ Google Reviews"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase"
                },
                children: "WHAT OUR TREKKERS SAY"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                marginBottom: "40px"
              },
              children: REVIEW_DATA.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `home.reviews.item.${i + 1}`,
                  style: {
                    background: "#fff",
                    borderRadius: "16px",
                    borderTop: "4px solid #1A7A4C",
                    boxShadow: "0 4px 20px rgba(26,122,76,0.1)",
                    padding: "28px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "16px"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              style: {
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                background: "#1A7A4C",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "var(--font-labels)",
                                fontWeight: 700,
                                fontSize: "16px",
                                flexShrink: 0
                              },
                              children: r.initials
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  fontFamily: "var(--font-labels)",
                                  fontWeight: 700,
                                  fontSize: "15px",
                                  color: "#1A1A1A"
                                },
                                children: r.name
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: "12px",
                                  color: "#4A4A4A"
                                },
                                children: [
                                  r.location,
                                  " · ",
                                  r.time
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "svg",
                            {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              role: "img",
                              "aria-label": "Google",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "path",
                                  {
                                    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                    fill: "#4285F4"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "path",
                                  {
                                    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                    fill: "#34A853"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "path",
                                  {
                                    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                    fill: "#FBBC05"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "path",
                                  {
                                    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                    fill: "#EA4335"
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { count: r.stars }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "#4A4A4A",
                          lineHeight: 1.7,
                          marginTop: "12px"
                        },
                        children: r.text
                      }
                    )
                  ]
                },
                r.name
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://g.page/global-trek-india/review",
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "home.reviews.google_link",
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                border: "2px solid #1A7A4C",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#1A7A4C",
                textDecoration: "none",
                transition: "all 0.2s"
              },
              onMouseEnter: (e) => {
                const el = e.currentTarget;
                el.style.background = "#1A7A4C";
                el.style.color = "#fff";
              },
              onMouseLeave: (e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "#1A7A4C";
              },
              children: "Read All Reviews on Google →"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.blog_section",
        style: { background: "#F8FAF9", padding: "80px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "16px",
                marginBottom: "40px",
                flexWrap: "wrap"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontFamily: "var(--font-labels)",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#1A7A4C",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "8px"
                      },
                      children: "HIMALAYAN STORIES"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(28px,4vw,42px)",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        margin: 0
                      },
                      children: "Featured Articles"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/blog",
                    "data-ocid": "home.blog.view_all_link",
                    style: {
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#1A7A4C",
                      textDecoration: "none"
                    },
                    children: "Read All Articles →"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "28px"
              },
              children: featuredBlogs.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: `/blog/${post.slug}`,
                  "data-ocid": `home.blog.item.${i + 1}`,
                  style: { textDecoration: "none", display: "block" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "article",
                    {
                      style: {
                        background: "#fff",
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 4px 20px rgba(26,122,76,0.08)",
                        transition: "transform 0.3s, box-shadow 0.3s"
                      },
                      onMouseEnter: (e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(-4px)";
                        el.style.boxShadow = "0 12px 32px rgba(26,122,76,0.16)";
                      },
                      onMouseLeave: (e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "0 4px 20px rgba(26,122,76,0.08)";
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              height: "200px",
                              overflow: "hidden",
                              background: "linear-gradient(135deg, #E8F5EE 0%, #1A7A4C33 100%)"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: `https://images.unsplash.com/photo-150690592534${6 + i}-21bda4d32df4?w=600&q=80`,
                                alt: post.title,
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  transition: "transform 0.4s"
                                },
                                loading: "lazy"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "24px" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                display: "inline-block",
                                background: "#E8F5EE",
                                color: "#1A7A4C",
                                fontFamily: "var(--font-labels)",
                                fontSize: "11px",
                                fontWeight: 700,
                                padding: "4px 10px",
                                borderRadius: "50px",
                                marginBottom: "12px",
                                letterSpacing: "0.05em"
                              },
                              children: post.category
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              style: {
                                fontFamily: "var(--font-display)",
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#1A1A1A",
                                lineHeight: 1.4,
                                marginBottom: "10px"
                              },
                              children: post.title
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                color: "#4A4A4A",
                                lineHeight: 1.6,
                                marginBottom: "16px"
                              },
                              children: post.excerpt.length > 150 ? `${post.excerpt.slice(0, 150)}...` : post.excerpt
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "div",
                                  {
                                    style: {
                                      fontFamily: "var(--font-body)",
                                      fontSize: "12px",
                                      color: "#4A4A4A"
                                    },
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: post.author }),
                                      " · ",
                                      post.date
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: "var(--font-body)",
                                      fontSize: "12px",
                                      color: "#1A7A4C",
                                      fontWeight: 600
                                    },
                                    children: [
                                      post.readTime,
                                      " min read"
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  )
                },
                post.slug
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.instagram_section",
        style: { background: "#FFFFFF", padding: "80px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "40px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "var(--font-labels)",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                },
                children: "@GLOBALTREK"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px,4vw,42px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  margin: 0
                },
                children: "Follow Us on Instagram"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "8px",
                marginBottom: "32px"
              },
              children: INSTAGRAM_IMAGES.map((url, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://instagram.com/globaltrek",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": `home.instagram.item.${i + 1}`,
                  style: {
                    display: "block",
                    aspectRatio: "1",
                    overflow: "hidden",
                    borderRadius: "8px"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: url,
                      alt: `Global Trek Instagram ${i + 1}`,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s"
                      },
                      loading: "lazy",
                      onMouseEnter: (e) => {
                        e.currentTarget.style.transform = "scale(1.08)";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }
                  )
                },
                url
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://instagram.com/globaltrek",
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "home.instagram.follow_button",
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "linear-gradient(135deg, #E1306C, #833AB4)",
                color: "#fff",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "opacity 0.2s"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.opacity = "0.9";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.opacity = "1";
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "#fff",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
                  }
                ),
                "Follow @globaltrek"
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.partners_section",
        style: { background: "#F8FAF9", padding: "56px clamp(16px,4vw,48px)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: { maxWidth: "1280px", margin: "0 auto", textAlign: "center" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-labels)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#4A4A4A",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "28px"
                  },
                  children: "TRUSTED & RECOGNIZED BY"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "center"
                  },
                  children: PARTNERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "data-ocid": `home.partner.${p.toLowerCase().replace(/ /g, "-")}`,
                      style: {
                        padding: "12px 24px",
                        border: "2px solid #1A7A4C",
                        borderRadius: "8px",
                        fontFamily: "var(--font-labels)",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: "#1A7A4C",
                        background: "#fff",
                        letterSpacing: "0.05em"
                      },
                      children: p
                    },
                    p
                  ))
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  Home as default
};
