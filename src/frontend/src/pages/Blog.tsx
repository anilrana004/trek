import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { blogPosts } from "../data/blogs";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    document.title = "Himalayan Trek Stories & Guides | Global Trek Blog";
  }, []);

  const categories = [
    "All",
    "Trekking Tips",
    "Trek Stories",
    "Gear & Guides",
    "Spiritual Journeys",
    "Photography",
  ];

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const getBlogImage = (slug: string) => {
    const map: Record<string, string> = {
      "kedarkantha-winter-2026-guide":
        "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=900&q=80",
      "chopta-tungnath-spirituality-beauty":
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
      "char-dham-2026-complete-guide":
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
      "hampta-pass-crossover-trek":
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=900&q=80",
      "har-ki-dun-valley-of-gods":
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80",
      "himalayan-trek-gear-checklist-2026":
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=900&q=80",
      "kuari-pass-lord-curzon-trail":
        "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=900&q=80",
      "sar-pass-parvati-valley-guide":
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&q=80",
      "himalayan-acclimatization-guide":
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=900&q=80",
      "phulara-ridge-indias-finest-walk":
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80",
    };
    return (
      map[slug] ||
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
    );
  };

  const getCategoryColor = (cat: string) => {
    const map: Record<string, string> = {
      "Trekking Tips": "#2ecc71",
      "Trek Stories": "#1a7a4c",
      "Gear & Guides": "#f4a623",
      "Spiritual Journeys": "#9b59b6",
      Photography: "#3498db",
    };
    return map[cat] || "#1a7a4c";
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
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
          padding: "72px clamp(20px,4vw,48px) 60px",
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
          THE GLOBAL TREK JOURNAL
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(36px,6vw,64px)",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Himalayan Trek Stories &amp; Guides
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "560px",
            margin: "0 auto 36px",
            lineHeight: 1.6,
          }}
        >
          Expert trek guides, route reports, gear reviews and spiritual journey
          insights from 15 years in the Himalayas.
        </p>
        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Blog categories"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              data-ocid={`blog.category_tab.${cat.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "9px 22px",
                borderRadius: "9999px",
                border:
                  activeCategory === cat
                    ? "2px solid #ffffff"
                    : "2px solid rgba(255,255,255,0.25)",
                background:
                  activeCategory === cat ? "#ffffff" : "rgba(255,255,255,0.08)",
                color: activeCategory === cat ? "var(--green-dark)" : "#ffffff",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 200ms ease",
                letterSpacing: "0.04em",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "64px clamp(20px,4vw,48px)",
        }}
      >
        {/* Featured Article */}
        {featured && (
          <div style={{ marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--green-primary)",
                marginBottom: "20px",
              }}
            >
              FEATURED ARTICLE
            </p>
            <article
              data-ocid="blog.featured_article"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                boxShadow: "var(--card-shadow)",
                minHeight: "400px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "320px",
                }}
              >
                <img
                  src={getBlogImage(featured.slug)}
                  alt={featured.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    inset: 0,
                  }}
                />
                <span
                  style={{
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
                    textTransform: "uppercase",
                  }}
                >
                  {featured.category}
                </span>
              </div>
              <div
                style={{
                  padding: "44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {formatDate(featured.date)}
                  </span>
                  <span
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      background: "var(--text-muted)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {featured.readTime} min read
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "clamp(20px,2.5vw,30px)",
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {featured.excerpt.slice(0, 200)}
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
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
                      flexShrink: 0,
                    }}
                  >
                    {featured.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {featured.author}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "11px",
                        color: "var(--text-muted)",
                      }}
                    >
                      {featured.authorBio.split("|")[0].trim()}
                    </p>
                  </div>
                </div>
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  data-ocid="blog.featured_read_more"
                  style={{
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
                    transition: "background 200ms ease",
                  }}
                >
                  Read Full Article →
                </Link>
              </div>
            </article>
          </div>
        )}

        {/* Article Grid */}
        {rest.length > 0 && (
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "24px",
              }}
            >
              MORE ARTICLES
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "28px",
              }}
            >
              {rest.map((post, i) => (
                <article
                  key={post.slug}
                  data-ocid={`blog.post_card.${i + 1}`}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderTop: `4px solid ${getCategoryColor(post.category)}`,
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 250ms ease, box-shadow 250ms ease",
                    boxShadow: "var(--card-shadow)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 36px rgba(26,122,76,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "var(--card-shadow)";
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={getBlogImage(post.slug)}
                      alt={post.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 400ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <span
                      style={{
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
                        textTransform: "uppercase",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "22px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                        flexWrap: "wrap",
                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          color: "var(--text-muted)",
                        }}
                      >
                        {formatDate(post.date)}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          color: "var(--text-muted)",
                        }}
                      >
                        {post.readTime} min read
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: "18px",
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                        marginBottom: "10px",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        flex: 1,
                        marginBottom: "16px",
                      }}
                    >
                      {post.excerpt.slice(0, 120)}…
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
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
                            flexShrink: 0,
                          }}
                        >
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            color: "var(--text-secondary)",
                            fontWeight: 500,
                          }}
                        >
                          {post.author.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </div>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        data-ocid={`blog.read_more.${i + 1}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--green-primary)",
                          textDecoration: "none",
                        }}
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div
            data-ocid="blog.empty_state"
            style={{
              textAlign: "center",
              padding: "80px 40px",
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "22px",
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              No articles in this category yet
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--text-muted)",
              }}
            >
              Our writers are out on the trail. Check back soon.
            </p>
          </div>
        )}

        {/* Newsletter */}
        <div
          data-ocid="blog.newsletter_section"
          style={{
            marginTop: "80px",
            background: "var(--green-dark)",
            borderRadius: "var(--radius-xl)",
            padding: "56px clamp(24px,5vw,72px)",
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
                "radial-gradient(ellipse at 50% 0%, rgba(46,204,113,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--green-light)",
              marginBottom: "12px",
            }}
          >
            HIMALAYAN DISPATCHES
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(24px,3vw,36px)",
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            Get Trek Guides in Your Inbox
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "480px",
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            Monthly dispatches: new trek guides, packing lists, and batch
            announcements. No spam, ever.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector("input");
              if (input) input.value = "";
              alert("Thanks! You'll get our next dispatch soon.");
            }}
            style={{
              display: "flex",
              gap: "12px",
              maxWidth: "440px",
              margin: "0 auto",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              data-ocid="blog.newsletter_input"
              aria-label="Email address for newsletter"
              style={{
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
                outline: "none",
              }}
            />
            <button
              type="submit"
              data-ocid="blog.newsletter_submit"
              style={{
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
                whiteSpace: "nowrap",
              }}
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
