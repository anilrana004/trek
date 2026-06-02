import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
const mediaItems = [
  {
    publication: "SAT (Società Alpinisti Tridentini)",
    date: "November 2025",
    story: "Medical-scientific expedition to Kedar Dome",
    icon: "🏔️"
  },
  {
    publication: "Business Standard",
    date: "October 2019",
    story: "Bara Banghal 2019 by Shyam Saran",
    icon: "📰"
  },
  {
    publication: "The Himalayan Journal",
    date: "November 2017",
    story: "First Ascent of Arwa Col",
    icon: "📖"
  },
  {
    publication: "Live Mint",
    date: "October 2017",
    story: "Recommended operator for Annapurna Base Camp Trek",
    icon: "📰"
  },
  {
    publication: "Discover India",
    date: "October 2016",
    story: "First Ascent of Arwa Col (photo essay)",
    icon: "📸"
  },
  {
    publication: "Action Asia",
    date: "May/June 2016",
    story: "Recommended operator for Bara Banghal trek",
    icon: "🧗"
  },
  {
    publication: "National Geographic Traveller",
    date: "April 2016",
    story: "Stok Kangri Trip",
    icon: "🌍"
  },
  {
    publication: "National Geographic Traveller",
    date: "April 2014",
    story: "Kilimanjaro Climb story by Praveen Suthrum",
    icon: "🌍"
  },
  {
    publication: "Outlook Traveller",
    date: "November 2013",
    story: "Photo feature on Panpatia Col trek by Sankar Sridhar",
    icon: "🏆"
  },
  {
    publication: "Action Asia",
    date: "July 2013",
    story: "Panpatia Col trek story by Sankar Sridhar",
    icon: "🧗"
  },
  {
    publication: "National Geographic Traveller",
    date: "May 2013",
    story: "Auden Col photo on cover",
    icon: "🌍"
  },
  {
    publication: "Sports Illustrated",
    date: "December 2012",
    story: "Panpatia Col trek article by Sankar Sridhar",
    icon: "🏆"
  },
  {
    publication: "National Geographic Traveller",
    date: "July 2012",
    story: "Recommended for Bara Bhangal trek",
    icon: "🌍"
  },
  {
    publication: "Open Magazine",
    date: "December 2011",
    story: "Kilimanjaro & Auden's Col story by Ashok Mahadevan",
    icon: "📰"
  },
  {
    publication: "Action Asia",
    date: "October 2011",
    story: "Auden's Col trek article by Sankar Sridhar",
    icon: "🧗"
  },
  {
    publication: "GQ Travel Special",
    date: "April 2011",
    story: "Kilimanjaro story by Ashok Mahadevan",
    icon: "✨"
  }
];
function News() {
  reactExports.useEffect(() => {
    document.title = "In the News | White Magic Adventure Travel";
  }, []);
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
              background: "var(--bg-void)",
              padding: "80px clamp(20px,4vw,48px)",
              textAlign: "center",
              borderBottom: "1px solid var(--border-subtle)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "var(--accent-blue)",
                    textTransform: "uppercase",
                    marginBottom: "12px"
                  },
                  children: "PRESS & MEDIA"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "clamp(36px,6vw,64px)",
                    color: "var(--text-primary)",
                    lineHeight: 1.1
                  },
                  children: "White Magic in Media"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "17px",
                    color: "var(--text-secondary)",
                    marginTop: "16px",
                    maxWidth: "560px",
                    margin: "16px auto 0"
                  },
                  children: "Featured in leading travel and outdoor publications since 2011."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              maxWidth: "var(--container-max)",
              margin: "0 auto",
              padding: "72px clamp(20px,4vw,48px)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "24px"
                },
                children: mediaItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-ocid": `news.media_item.${i + 1}`,
                    style: {
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-lg)",
                      padding: "24px",
                      transition: "border-color 250ms ease, transform 250ms ease"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.borderColor = "var(--border-default)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.transform = "none";
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "16px"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "28px", flexShrink: 0 }, children: item.icon }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  fontFamily: "var(--font-mono)",
                                  fontSize: "11px",
                                  color: "var(--accent-blue)",
                                  letterSpacing: "0.05em",
                                  marginBottom: "6px"
                                },
                                children: item.date
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "h3",
                              {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontWeight: 700,
                                  fontSize: "15px",
                                  color: "var(--text-primary)",
                                  marginBottom: "6px",
                                  lineHeight: 1.3
                                },
                                children: item.publication
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: "13px",
                                  color: "var(--text-secondary)",
                                  lineHeight: 1.6
                                },
                                children: item.story
                              }
                            )
                          ] })
                        ]
                      }
                    )
                  },
                  `${item.publication}-${item.date}`
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              background: "var(--bg-surface)",
              padding: "60px clamp(20px,4vw,48px)",
              textAlign: "center",
              borderTop: "1px solid var(--border-subtle)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--text-primary)",
                    marginBottom: "12px"
                  },
                  children: "Media Inquiries"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    marginBottom: "24px"
                  },
                  children: "For press inquiries, image requests, or to arrange an interview, reach out directly."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:info@whitemagicadventure.com",
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    height: "44px",
                    padding: "0 28px",
                    background: "var(--accent-blue)",
                    color: "var(--text-inverse)",
                    borderRadius: "var(--btn-radius)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none"
                  },
                  children: "Contact Media Team"
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
  News as default
};
