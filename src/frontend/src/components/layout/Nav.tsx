import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useNavScroll } from "../../hooks/useNavScroll";

const _navLinks = [
  { label: "Trips", href: "/trips" },
  { label: "GHT INDIA", href: "/ght-india", badge: "NEW" },
  { label: "WM Lite", href: "/wm-lite" },
  { label: "Tailor Made", href: "/tailor-made" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

function _MountainLogo() {
  return (
    <svg
      width="36"
      height="36"
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
  );
}

export function Nav() {
  const _isScrolled = useNavScroll(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treksDropdownOpen, setTreksDropdownOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    {
      label: "Treks",
      href: "/treks",
      dropdown: [
        { label: "Uttarakhand Treks", href: "/treks/uttarakhand" },
        { label: "Himachal Pradesh", href: "/treks/himachal-pradesh" },
      ],
    },
    { label: "Yatra", href: "/yatra" },
    { label: "Packages", href: "/packages" },
    { label: "Gear Rental", href: "/gear-rental" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        data-ocid="nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          background: "#145C38",
          boxShadow: "0 2px 20px rgba(20,92,56,0.25)",
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
          }}
          data-ocid="nav.logo_link"
        >
          <svg
            width="36"
            height="36"
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
            <path
              d="M18 20 L22 12 L33 30"
              fill="rgba(46,204,113,0.2)"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity="0.7"
            />
            <circle cx="22" cy="10" r="2" fill="#F4A623" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "20px",
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
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              Where Every Trail Tells a Story
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center" style={{ gap: "4px" }}>
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.href ||
              (link.href !== "/" && currentPath.startsWith(link.href));
            if (link.dropdown) {
              return (
                <div
                  key={link.href}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setTreksDropdownOpen(true)}
                  onMouseLeave={() => setTreksDropdownOpen(false)}
                >
                  <Link
                    to={link.href}
                    data-ocid={`nav.${link.label.toLowerCase()}_link`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      textDecoration: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      background: isActive
                        ? "rgba(255,255,255,0.15)"
                        : "transparent",
                      transition: "background 150ms ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                        borderBottom: isActive
                          ? "2px solid #F4A623"
                          : "2px solid transparent",
                        paddingBottom: "1px",
                      }}
                    >
                      {link.label}
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>
                  {/* Dropdown */}
                  {treksDropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        minWidth: "200px",
                        background: "#fff",
                        borderRadius: "10px",
                        boxShadow:
                          "0 8px 32px rgba(20,92,56,0.2), 0 2px 8px rgba(0,0,0,0.08)",
                        overflow: "hidden",
                        zIndex: 100,
                        borderTop: "3px solid #1A7A4C",
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          data-ocid={`nav.dropdown_${item.label
                            .toLowerCase()
                            .replace(/\s+/g, "_")
                            .replace(/[^a-z0-9_]/g, "")}_link`}
                          style={{
                            display: "block",
                            padding: "12px 18px",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "#1A1A1A",
                            textDecoration: "none",
                            transition:
                              "background 150ms ease, color 150ms ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#E8F5EE";
                            e.currentTarget.style.color = "#1A7A4C";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#1A1A1A";
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`nav.${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "_")
                  .replace(/[^a-z0-9_]/g, "")}_link`}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  background: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "transparent",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                    borderBottom: isActive
                      ? "2px solid #F4A623"
                      : "2px solid transparent",
                    paddingBottom: "1px",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right side: Login/Register */}
        <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
          <Link
            to="/account/login"
            data-ocid="nav.login_link"
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1.5px solid rgba(255,255,255,0.5)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              transition: "all 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              e.currentTarget.style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            }}
          >
            Login
          </Link>
          <Link
            to="/booking/$trekSlug"
            params={{ trekSlug: "kedarkantha" }}
            data-ocid="nav.book_now_button"
            style={{
              padding: "8px 18px",
              borderRadius: "6px",
              background: "#F4A623",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "14px",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(244,166,35,0.4)",
              transition: "all 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e09520";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#F4A623";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav.mobile_menu_toggle"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <div
            style={{
              width: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#fff",
                transition: "all 250ms ease",
                transform: mobileOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#fff",
                transition: "all 250ms ease",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#fff",
                transition: "all 250ms ease",
                transform: mobileOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          data-ocid="nav.mobile_menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "#145C38",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            animation: "fadeUp 250ms ease forwards",
            overflowY: "auto",
            paddingTop: "80px",
            paddingBottom: "100px",
          }}
        >
          {navLinks.map((link) => (
            <div key={link.href} style={{ width: "100%", textAlign: "center" }}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                data-ocid={`nav.mobile_${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "_")
                  .replace(/[^a-z0-9_]/g, "")}_link`}
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color:
                    currentPath === link.href ||
                    (link.href !== "/" && currentPath.startsWith(link.href))
                      ? "#F4A623"
                      : "#fff",
                  textDecoration: "none",
                  padding: "10px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  width: "80%",
                }}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    marginBottom: "4px",
                  }}
                >
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            <Link
              to="/account/login"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.mobile_login_link"
              style={{
                padding: "10px 24px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "15px",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
            <Link
              to="/booking/$trekSlug"
              params={{ trekSlug: "kedarkantha" }}
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.mobile_book_button"
              style={{
                padding: "10px 24px",
                background: "#F4A623",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
