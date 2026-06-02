import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
import { b as blogPosts } from "./blogs-Cq9k69Hm.js";
function Blog() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  reactExports.useEffect(() => {
    document.title = "Himalayan Trek Stories & Guides | Global Trek Blog";
  }, []);
  const categories = [
    "All",
    "Trekking Tips",
    "Trek Stories",
    "Gear & Guides",
    "Spiritual Journeys",
    "Photography"
  ];
  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const featured = filtered[0];
  const rest = filtered.slice(1);
  const getBlogImage = (slug) => {
    const map = {
      "kedarkantha-winter-2026-guide": "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=80",
      "chopta-tungnath-spirituality-beauty": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
      "char-dham-2026-complete-guide": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      "hampta-pass-crossover-trek": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=900&q=80",
      "har-ki-dun-valley-of-gods": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80",
      "himalayan-trek-gear-checklist-2026": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=900&q=80",
      "kuari-pass-lord-curzon-trail": "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=900&q=80",
      "sar-pass-parvati-valley-guide": "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&q=80",
      "himalayan-acclimatization-guide": "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=900&q=80",
      "phulara-ridge-indias-finest-walk": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80"
    };
    return map[slug] || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80";
  };
  const getCategoryColor = (cat) => {
    const map = {
      "Trekking Tips": "#2ecc71",
      "Trek Stories": "#1a7a4c",
      "Gear & Guides": "#f4a623",
      "Spiritual Journeys": "#9b59b6",
      Photography: "#3498db"
    };
    return map[cat] || "#1a7a4c";
  };
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "main",
    {
      style: {
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              background: "var(--green-dark)",
              padding: "72px clamp(20px,4vw,48px) 60px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse at 50% 0%, rgba(46,204,113,0.15) 0%, transparent 70%)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "var(--green-light)",
                    textTransform: "uppercase",
                    marginBottom: "14px"
                  },
                  children: "THE GLOBAL TREK JOURNAL"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "clamp(36px,6vw,64px)",
                    color: "#ffffff",
                    lineHeight: 1.1,
                    marginBottom: "16px"
                  },
                  children: "Himalayan Trek Stories & Guides"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.75)",
                    maxWidth: "560px",
                    margin: "0 auto 36px",
                    lineHeight: 1.6
                  },
                  children: "Expert trek guides, route reports, gear reviews and spiritual journey insights from 15 years in the Himalayas."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  role: "tablist",
                  "aria-label": "Blog categories",
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    justifyContent: "center"
                  },
                  children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      role: "tab",
                      "aria-selected": activeCategory === cat,
                      "data-ocid": `blog.category_tab.${cat.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`,
                      onClick: () => setActiveCategory(cat),
                      style: {
                        padding: "9px 22px",
                        borderRadius: "9999px",
                        border: activeCategory === cat ? "2px solid #ffffff" : "2px solid rgba(255,255,255,0.25)",
                        background: activeCategory === cat ? "#ffffff" : "rgba(255,255,255,0.08)",
                        color: activeCategory === cat ? "var(--green-dark)" : "#ffffff",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 200ms ease",
                        letterSpacing: "0.04em"
                      },
                      children: cat
                    },
                    cat
                  ))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              maxWidth: "var(--container-max)",
              margin: "0 auto",
              padding: "64px clamp(20px,4vw,48px)"
            },
            children: [
              featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "64px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--green-primary)",
                      marginBottom: "20px"
                    },
                    children: "FEATURED ARTICLE"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "article",
                  {
                    "data-ocid": "blog.featured_article",
                    style: {
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      borderRadius: "var(--radius-xl)",
                      overflow: "hidden",
                      border: "1px solid var(--border-subtle)",
                      background: "var(--bg-surface)",
                      boxShadow: "var(--card-shadow)",
                      minHeight: "400px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          style: {
                            position: "relative",
                            overflow: "hidden",
                            minHeight: "320px"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: getBlogImage(featured.slug),
                                alt: featured.title,
                                loading: "lazy",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  position: "absolute",
                                  inset: 0
                                }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: {
                                  position: "absolute",
                                  top: "20px",
                                  left: "20px",
                                  background: getCategoryColor(featured.category),
                                  color: "#ffffff",
                                  fontFamily: "var(--font-body)",
                                  fontSize: "10px",
                                  fontWeight: 700,
                                  letterSpacing: "0.15em",
                                  padding: "5px 12px",
                                  borderRadius: "9999px",
                                  textTransform: "uppercase"
                                },
                                children: featured.category
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          style: {
                            padding: "44px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "16px"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  gap: "12px",
                                  alignItems: "center",
                                  flexWrap: "wrap"
                                },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "12px",
                                        color: "var(--text-muted)"
                                      },
                                      children: formatDate(featured.date)
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      style: {
                                        width: "3px",
                                        height: "3px",
                                        borderRadius: "50%",
                                        background: "var(--text-muted)"
                                      }
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "span",
                                    {
                                      style: {
                                        fontFamily: "var(--font-body)",
                                        fontSize: "12px",
                                        color: "var(--text-muted)"
                                      },
                                      children: [
                                        featured.readTime,
                                        " min read"
                                      ]
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "h2",
                              {
                                style: {
                                  fontFamily: "var(--font-display)",
                                  fontStyle: "italic",
                                  fontWeight: 700,
                                  fontSize: "clamp(20px,2.5vw,30px)",
                                  color: "var(--text-primary)",
                                  lineHeight: 1.25
                                },
                                children: featured.title
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: "14px",
                                  color: "var(--text-secondary)",
                                  lineHeight: 1.7
                                },
                                children: featured.excerpt.slice(0, 200)
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                style: { display: "flex", alignItems: "center", gap: "10px" },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      style: {
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background: "var(--green-primary)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontFamily: "var(--font-body)",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        flexShrink: 0
                                      },
                                      children: featured.author.split(" ").map((n) => n[0]).join("")
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "p",
                                      {
                                        style: {
                                          fontFamily: "var(--font-body)",
                                          fontWeight: 600,
                                          fontSize: "13px",
                                          color: "var(--text-primary)"
                                        },
                                        children: featured.author
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "p",
                                      {
                                        style: {
                                          fontFamily: "var(--font-body)",
                                          fontSize: "11px",
                                          color: "var(--text-muted)"
                                        },
                                        children: featured.authorBio.split("|")[0].trim()
                                      }
                                    )
                                  ] })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Link,
                              {
                                to: "/blog/$slug",
                                params: { slug: featured.slug },
                                "data-ocid": "blog.featured_read_more",
                                style: {
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  height: "44px",
                                  padding: "0 28px",
                                  background: "var(--green-primary)",
                                  color: "#ffffff",
                                  borderRadius: "8px",
                                  fontFamily: "var(--font-body)",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  textDecoration: "none",
                                  alignSelf: "flex-start",
                                  transition: "background 200ms ease"
                                },
                                children: "Read Full Article →"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              rest.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "24px"
                    },
                    children: "MORE ARTICLES"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                      gap: "28px"
                    },
                    children: rest.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "article",
                      {
                        "data-ocid": `blog.post_card.${i + 1}`,
                        style: {
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border-subtle)",
                          borderTop: `4px solid ${getCategoryColor(post.category)}`,
                          borderRadius: "var(--radius-xl)",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          transition: "transform 250ms ease, box-shadow 250ms ease",
                          boxShadow: "var(--card-shadow)"
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.transform = "translateY(-4px)";
                          e.currentTarget.style.boxShadow = "0 12px 36px rgba(26,122,76,0.18)";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.transform = "none";
                          e.currentTarget.style.boxShadow = "var(--card-shadow)";
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                height: "200px",
                                overflow: "hidden",
                                position: "relative",
                                flexShrink: 0
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "img",
                                  {
                                    src: getBlogImage(post.slug),
                                    alt: post.title,
                                    loading: "lazy",
                                    style: {
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                      transition: "transform 400ms ease"
                                    },
                                    onMouseEnter: (e) => {
                                      e.currentTarget.style.transform = "scale(1.06)";
                                    },
                                    onMouseLeave: (e) => {
                                      e.currentTarget.style.transform = "scale(1)";
                                    }
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    style: {
                                      position: "absolute",
                                      top: "14px",
                                      left: "14px",
                                      background: getCategoryColor(post.category),
                                      color: "#ffffff",
                                      fontFamily: "var(--font-body)",
                                      fontSize: "9px",
                                      fontWeight: 700,
                                      letterSpacing: "0.15em",
                                      padding: "4px 10px",
                                      borderRadius: "9999px",
                                      textTransform: "uppercase"
                                    },
                                    children: post.category
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                padding: "22px",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      justifyContent: "space-between",
                                      marginBottom: "10px",
                                      flexWrap: "wrap",
                                      gap: "4px"
                                    },
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "span",
                                        {
                                          style: {
                                            fontFamily: "var(--font-body)",
                                            fontSize: "11px",
                                            color: "var(--text-muted)"
                                          },
                                          children: formatDate(post.date)
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                        "span",
                                        {
                                          style: {
                                            fontFamily: "var(--font-body)",
                                            fontSize: "11px",
                                            color: "var(--text-muted)"
                                          },
                                          children: [
                                            post.readTime,
                                            " min read"
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "h2",
                                  {
                                    style: {
                                      fontFamily: "var(--font-display)",
                                      fontStyle: "italic",
                                      fontWeight: 600,
                                      fontSize: "18px",
                                      color: "var(--text-primary)",
                                      lineHeight: 1.3,
                                      marginBottom: "10px"
                                    },
                                    children: post.title
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "p",
                                  {
                                    style: {
                                      fontFamily: "var(--font-body)",
                                      fontSize: "13px",
                                      color: "var(--text-secondary)",
                                      lineHeight: 1.65,
                                      flex: 1,
                                      marginBottom: "16px"
                                    },
                                    children: [
                                      post.excerpt.slice(0, 120),
                                      "…"
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
                                        "div",
                                        {
                                          style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                          },
                                          children: [
                                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                                              "div",
                                              {
                                                style: {
                                                  width: "28px",
                                                  height: "28px",
                                                  borderRadius: "50%",
                                                  background: getCategoryColor(post.category),
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  color: "#fff",
                                                  fontSize: "10px",
                                                  fontWeight: 700,
                                                  flexShrink: 0
                                                },
                                                children: post.author.split(" ").map((n) => n[0]).join("")
                                              }
                                            ),
                                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                                              "span",
                                              {
                                                style: {
                                                  fontFamily: "var(--font-body)",
                                                  fontSize: "12px",
                                                  color: "var(--text-secondary)",
                                                  fontWeight: 500
                                                },
                                                children: post.author.split(" ").slice(0, 2).join(" ")
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        Link,
                                        {
                                          to: "/blog/$slug",
                                          params: { slug: post.slug },
                                          "data-ocid": `blog.read_more.${i + 1}`,
                                          style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            fontFamily: "var(--font-body)",
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color: "var(--green-primary)",
                                            textDecoration: "none"
                                          },
                                          children: "Read More →"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      },
                      post.slug
                    ))
                  }
                )
              ] }),
              filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "blog.empty_state",
                  style: {
                    textAlign: "center",
                    padding: "80px 40px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid var(--border-subtle)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                          fontSize: "22px",
                          color: "var(--text-primary)",
                          marginBottom: "8px"
                        },
                        children: "No articles in this category yet"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "var(--text-muted)"
                        },
                        children: "Our writers are out on the trail. Check back soon."
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "blog.newsletter_section",
                  style: {
                    marginTop: "80px",
                    background: "var(--green-dark)",
                    borderRadius: "var(--radius-xl)",
                    padding: "56px clamp(24px,5vw,72px)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          inset: 0,
                          background: "radial-gradient(ellipse at 50% 0%, rgba(46,204,113,0.2) 0%, transparent 70%)",
                          pointerEvents: "none"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--green-light)",
                          marginBottom: "12px"
                        },
                        children: "HIMALAYAN DISPATCHES"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                          fontWeight: 700,
                          fontSize: "clamp(24px,3vw,36px)",
                          color: "#ffffff",
                          marginBottom: "12px"
                        },
                        children: "Get Trek Guides in Your Inbox"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          color: "rgba(255,255,255,0.72)",
                          maxWidth: "480px",
                          margin: "0 auto 32px",
                          lineHeight: 1.6
                        },
                        children: "Monthly dispatches: new trek guides, packing lists, and batch announcements. No spam, ever."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "form",
                      {
                        onSubmit: (e) => {
                          e.preventDefault();
                          const input = e.currentTarget.querySelector("input");
                          if (input) input.value = "";
                          alert("Thanks! You'll get our next dispatch soon.");
                        },
                        style: {
                          display: "flex",
                          gap: "12px",
                          maxWidth: "440px",
                          margin: "0 auto",
                          flexWrap: "wrap"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "email",
                              placeholder: "Your email address",
                              required: true,
                              "data-ocid": "blog.newsletter_input",
                              "aria-label": "Email address for newsletter",
                              style: {
                                flex: 1,
                                minWidth: "200px",
                                height: "46px",
                                padding: "0 16px",
                                background: "rgba(255,255,255,0.1)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                borderRadius: "8px",
                                color: "#ffffff",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                outline: "none"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "submit",
                              "data-ocid": "blog.newsletter_submit",
                              style: {
                                height: "46px",
                                padding: "0 24px",
                                background: "var(--green-light)",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "8px",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                fontWeight: 700,
                                cursor: "pointer",
                                whiteSpace: "nowrap"
                              },
                              children: "Subscribe Free"
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
        )
      ]
    }
  );
}
export {
  Blog as default
};
