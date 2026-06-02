import { Link } from "@tanstack/react-router";

const currentYear = new Date().getFullYear();

function _FooterLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Global Trek mountain logo"
      >
        <path
          d="M3 30 L12 12 L18 20 L22 14 L33 30 Z"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M14 30 L22 14 L33 30"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "22px",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          Global Trek
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "11px",
            color: "var(--text-secondary)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Where Every Trail Tells a Story
        </span>
      </div>
    </div>
  );
}

const _sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  fontWeight: 700,
  color: "rgba(255,255,255,0.6)",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  marginBottom: "18px",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "14px",
  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",
  display: "block",
  marginBottom: "10px",
  transition: "color 150ms ease",
};

function FooterLink({
  to,
  label,
  external,
}: { to: string; label: string; external?: boolean }) {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(255,255,255,0.8)";
        }}
      >
        {label}
      </a>
    );
  }
  return (
    <Link
      to={to}
      style={linkStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(255,255,255,0.8)";
      }}
    >
      {label}
    </Link>
  );
}

export function Footer() {
  const uttarakhandTreks = [
    {
      label: "Chopta Tungnath Trek",
      href: "/treks/uttarakhand/chopta-tungnath",
    },
    { label: "Har Ki Dun Trek", href: "/treks/uttarakhand/har-ki-dun" },
    { label: "Kedarkantha Trek", href: "/treks/uttarakhand/kedarkantha" },
    { label: "Kuari Pass Trek", href: "/treks/uttarakhand/kuari-pass" },
    { label: "Phulara Ridge Trek", href: "/treks/uttarakhand/phulara-ridge" },
    {
      label: "Valley of Flowers",
      href: "/treks/uttarakhand/valley-of-flowers",
    },
    { label: "Roopkund Trek", href: "/treks/uttarakhand/roopkund" },
    { label: "Brahmatal Trek", href: "/treks/uttarakhand/brahmatal" },
    { label: "Dayara Bugyal Trek", href: "/treks/uttarakhand/dayara-bugyal" },
    { label: "Nag Tibba Trek", href: "/treks/uttarakhand/nag-tibba" },
  ];

  const himachalTreks = [
    { label: "Hampta Pass Trek", href: "/treks/himachal-pradesh/hampta-pass" },
    { label: "Sar Pass Trek", href: "/treks/himachal-pradesh/sar-pass" },
    { label: "Kheerganga Trek", href: "/treks/himachal-pradesh/kheerganga" },
    { label: "Triund Trek", href: "/treks/himachal-pradesh/triund" },
    { label: "Beas Kund Trek", href: "/treks/himachal-pradesh/beas-kund" },
  ];

  const yatraLinks = [
    { label: "Kedarnath Yatra", href: "/yatra/kedarnath" },
    { label: "Do Dham Yatra", href: "/yatra/do-dham" },
    { label: "Char Dham Yatra", href: "/yatra/char-dham" },
    { label: "Panch Kedar Yatra", href: "/yatra/panch-kedar" },
    { label: "Badrinath Dham", href: "/yatra" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blog & Articles", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Gear Rental", href: "/gear-rental" },
    { label: "Contact Us", href: "/contact" },
    { label: "All Packages", href: "/packages" },
  ];

  return (
    <footer
      data-ocid="footer"
      style={{
        background: "#1A7A4C",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px clamp(20px,4vw,48px) 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Global Trek mountain logo"
              >
                <path
                  d="M3 30 L12 10 L18 20 L22 12 L33 30 Z"
                  fill="rgba(255,255,255,0.15)"
                  stroke="#2ECC71"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle cx="22" cy="10" r="2" fill="#F4A623" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  Global Trek
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Est. 2009
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "16px",
                lineHeight: 1.7,
              }}
            >
              Where Every Trail Tells a Story. Expert-guided treks across the
              Himalayas of Uttarakhand &amp; Himachal Pradesh since 2009.
            </p>
            <a
              href="tel:+919876543210"
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                marginBottom: "6px",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
            >
              📞 +91 98765 43210
            </a>
            <a
              href="mailto:info@globaltrek.in"
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                marginBottom: "20px",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.85)";
              }}
            >
              ✉ info@globaltrek.in
            </a>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
              {[
                {
                  href: "https://www.instagram.com/globaltrekin",
                  label: "Instagram",
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      role="img"
                      aria-label="Instagram"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.facebook.com/globaltrekin",
                  label: "Facebook",
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="img"
                      aria-label="Facebook"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.youtube.com/@globaltrekin",
                  label: "YouTube",
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="img"
                      aria-label="YouTube"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
            {/* Certification badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Ministry of Tourism", "Uttarakhand Tourism"].map((b) => (
                <span
                  key={b}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Uttarakhand Treks */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Uttarakhand Treks
            </p>
            {uttarakhandTreks.map((link) => (
              <FooterLink key={link.href} to={link.href} label={link.label} />
            ))}
          </div>

          {/* HP Treks */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Himachal Pradesh
            </p>
            {himachalTreks.map((link) => (
              <FooterLink key={link.href} to={link.href} label={link.label} />
            ))}
          </div>

          {/* Yatra */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Yatra &amp; Pilgrimage
            </p>
            {yatraLinks.map((link) => (
              <FooterLink key={link.href} to={link.href} label={link.label} />
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Quick Links
            </p>
            {quickLinks.map((link) => (
              <FooterLink key={link.href} to={link.href} label={link.label} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            &copy; {currentYear} Global Trek. All Rights Reserved. | Made with ❤️
            in Uttarakhand | info@globaltrek.in | +91 98765 43210
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
            }}
          >
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "globaltrek")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2ECC71",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
