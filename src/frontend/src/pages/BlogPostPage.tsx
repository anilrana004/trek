import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { blogPosts, getBlogBySlug } from "../data/blogs";

export function BlogPostPage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const [copiedLink, setCopiedLink] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const post = getBlogBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Global Trek Blog`;
    } else {
      document.title = "Article Not Found | Global Trek";
    }
  }, [post]);

  const getBlogImage = (s: string) => {
    const map: Record<string, string> = {
      "kedarkantha-winter-2026-guide":
        "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1400&q=85",
      "chopta-tungnath-spirituality-beauty":
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85",
      "char-dham-2026-complete-guide":
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85",
      "hampta-pass-crossover-trek":
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1400&q=85",
      "har-ki-dun-valley-of-gods":
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1400&q=85",
      "himalayan-trek-gear-checklist-2026":
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1400&q=85",
      "kuari-pass-lord-curzon-trail":
        "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1400&q=85",
      "sar-pass-parvati-valley-guide":
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1400&q=85",
      "himalayan-acclimatization-guide":
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1400&q=85",
      "phulara-ridge-indias-finest-walk":
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=85",
    };
    return (
      map[s] ||
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85"
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

  // Parse content: split on ## headings and \n
  const renderContent = (content: string) => {
    const blocks = content.split(/\n\n+/);
    return blocks.map((block, i) => {
      if (block.startsWith("## ")) {
        const headingText = block.replace(/^## /, "");
        const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <h2
            key={id}
            id={id}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(20px,2.5vw,26px)",
              color: "var(--green-dark)",
              lineHeight: 1.3,
              marginTop: "40px",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "2px solid var(--border-subtle)",
            }}
          >
            {headingText}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        const h3Id = block
          .replace(/^### /, "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-");
        return (
          <h3
            key={h3Id || i}
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "17px",
              color: "var(--text-primary)",
              marginTop: "28px",
              marginBottom: "12px",
            }}
          >
            {block.replace(/^### /, "")}
          </h3>
        );
      }
      // Paragraph with **bold** support
      const parts = block.split(/(\*\*[^*]+\*\*)/);
      return (
        <p
          key={`para-${block.substring(0, 20).replace(/\s/g, "_")}-${i}`}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: "20px",
          }}
        >
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong
                key={`bold-${j}-${part.slice(2, -2).substring(0, 10)}`}
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 700,
                }}
              >
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            ),
          )}
        </p>
      );
    });
  };

  // Extract TOC headings from content
  const getTocHeadings = (content: string) => {
    return content
      .split(/\n\n+/)
      .filter((b) => b.startsWith("## "))
      .map((b) => {
        const text = b.replace(/^## /, "");
        return { text, id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-") };
      });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  if (!post) {
    return (
      <div
        style={{
          paddingTop: "var(--nav-height)",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          background: "var(--bg-primary)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "32px",
            color: "var(--text-primary)",
          }}
        >
          Article Not Found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-muted)",
            fontSize: "16px",
          }}
        >
          The article you're looking for doesn't exist.
        </p>
        <Link
          to="/blog"
          data-ocid="blog_post.back_to_blog"
          style={{
            height: "44px",
            padding: "0 28px",
            background: "var(--green-primary)",
            color: "#fff",
            borderRadius: "8px",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const tocHeadings = getTocHeadings(post.content);
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const whatsappMsg = encodeURIComponent(
    `Check out this trek article: ${post.title} - ${window.location.href}`,
  );

  return (
    <main
      style={{
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Hero Banner */}
      <div
        style={{
          position: "relative",
          height: "clamp(300px, 55vh, 520px)",
          overflow: "hidden",
        }}
      >
        <img
          src={getBlogImage(post.slug)}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,10,12,0.2) 0%, rgba(8,10,12,0.7) 60%, rgba(8,10,12,0.92) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "clamp(24px,4vw,56px)",
            maxWidth: "var(--container-max)",
            margin: "0 auto",
          }}
        >
          <Link
            to="/blog"
            data-ocid="blog_post.back_to_blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              textDecoration: "none",
              marginBottom: "16px",
              transition: "color 200ms ease",
            }}
          >
            ← Back to Blog
          </Link>
          <span
            style={{
              display: "inline-block",
              background: getCategoryColor(post.category),
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              padding: "5px 14px",
              borderRadius: "9999px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {post.category}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(24px,4vw,52px)",
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: "820px",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Author Bar */}
      <div
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "16px clamp(20px,4vw,48px)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "var(--green-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {post.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "14px",
                color: "var(--text-primary)",
              }}
            >
              {post.author}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--text-muted)",
              }}
            >
              {post.authorBio}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexShrink: 0,
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
              📅 {formatDate(post.date)}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--text-muted)",
              }}
            >
              ⏱ {post.readTime} min read
            </span>
            <span
              style={{
                background: getCategoryColor(post.category),
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "3px 10px",
                borderRadius: "9999px",
                textTransform: "uppercase",
              }}
            >
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Body + TOC */}
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "56px clamp(20px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: tocHeadings.length > 0 ? "1fr 280px" : "1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Article Content */}
        <article data-ocid="blog_post.article_body">
          {renderContent(post.content)}

          {/* Tags */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "var(--green-muted)",
                  color: "var(--green-dark)",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  letterSpacing: "0.04em",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Share */}
          <div
            data-ocid="blog_post.social_share"
            style={{
              marginTop: "40px",
              padding: "28px",
              background: "var(--bg-surface)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}
            >
              SHARE THIS ARTICLE
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="blog_post.share_whatsapp"
                aria-label="Share on WhatsApp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                  padding: "0 18px",
                  background: "#25d366",
                  color: "#fff",
                  borderRadius: "8px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 200ms ease",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="blog_post.share_facebook"
                aria-label="Share on Facebook"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                  padding: "0 18px",
                  background: "#1877f2",
                  color: "#fff",
                  borderRadius: "8px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="blog_post.share_twitter"
                aria-label="Share on X / Twitter"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                  padding: "0 18px",
                  background: "#000",
                  color: "#fff",
                  borderRadius: "8px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M714.163 519.284L1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026zM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026z" />
                </svg>
                X / Twitter
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                data-ocid="blog_post.copy_link"
                aria-label="Copy article link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                  padding: "0 18px",
                  background: copiedLink
                    ? "var(--green-primary)"
                    : "var(--bg-surface)",
                  color: copiedLink ? "#fff" : "var(--text-secondary)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "8px",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 200ms ease",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                {copiedLink ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </article>

        {/* Sticky TOC */}
        {tocHeadings.length > 0 && (
          <aside
            data-ocid="blog_post.toc"
            style={{
              position: "sticky",
              top: "calc(var(--nav-height) + 24px)",
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderLeft: "3px solid var(--green-primary)",
              borderRadius: "var(--radius-lg)",
              padding: "24px",
            }}
          >
            <button
              type="button"
              onClick={() => setTocOpen(!tocOpen)}
              data-ocid="blog_post.toc_toggle"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginBottom: tocOpen ? "16px" : 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--green-primary)",
                  fontWeight: 700,
                }}
              >
                TABLE OF CONTENTS
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--green-primary)"
                strokeWidth="2"
                aria-hidden="true"
                style={{
                  transform: tocOpen ? "rotate(180deg)" : "none",
                  transition: "transform 200ms ease",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <nav
              aria-label="Article table of contents"
              style={{
                display:
                  tocOpen || window.innerWidth >= 1024 ? "block" : "none",
              }}
            >
              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {tocHeadings.map((h, idx) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      data-ocid={`blog_post.toc_link.${idx + 1}`}
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "flex-start",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        lineHeight: 1.4,
                        padding: "4px 0",
                        transition: "color 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--green-primary)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--text-secondary)";
                      }}
                    >
                      <span
                        style={{
                          color: "var(--green-primary)",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {idx + 1}.
                      </span>
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        )}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section
          data-ocid="blog_post.related_posts"
          style={{
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "64px clamp(20px,4vw,48px)",
          }}
        >
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "8px",
              }}
            >
              RELATED READING
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(22px,3vw,32px)",
                color: "var(--text-primary)",
                marginBottom: "32px",
              }}
            >
              More {post.category} Articles
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {relatedPosts.map((rp, i) => (
                <article
                  key={rp.slug}
                  data-ocid={`blog_post.related_item.${i + 1}`}
                  style={{
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-subtle)",
                    borderTop: `3px solid ${getCategoryColor(rp.category)}`,
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    boxShadow: "var(--card-shadow)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(26,122,76,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "var(--card-shadow)";
                  }}
                >
                  <div style={{ height: "160px", overflow: "hidden" }}>
                    <img
                      src={getBlogImage(rp.slug)}
                      alt={rp.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ padding: "18px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                        marginBottom: "10px",
                      }}
                    >
                      {rp.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          color: "var(--text-muted)",
                        }}
                      >
                        {rp.readTime} min read
                      </span>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: rp.slug }}
                        data-ocid={`blog_post.related_link.${i + 1}`}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--green-primary)",
                          textDecoration: "none",
                        }}
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
