import { Link, useRouterState } from "@tanstack/react-router";
import type React from "react";

const navItems: Array<{
  label: string;
  href: string;
  icon: React.ReactNode;
  cta?: boolean;
}> = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Search",
    href: "/treks",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Treks",
    href: "/treks",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 17l4-8 4 5 3-4 4 7" />
        <path d="M12 3L9 8" strokeDasharray="1 2" />
      </svg>
    ),
  },
  {
    label: "Yatra",
    href: "/yatra",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2L8 6H4v4l-2 2 2 2v4h4l4 4 4-4h4v-4l2-2-2-2V6h-4L12 2z" />
      </svg>
    ),
  },
  {
    label: "Profile",
    href: "/account/dashboard",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export function BottomNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 md:hidden z-[997]"
      data-ocid="bottom_nav"
      style={{
        background: "#fff",
        borderTop: "1px solid #E8F5EE",
        boxShadow: "0 -4px 20px rgba(26,122,76,0.08)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      aria-label="Mobile navigation"
    >
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {navItems.map((item) => {
          const isActive =
            currentPath === item.href ||
            (item.href !== "/" && currentPath.startsWith(item.href));
          return (
            <Link
              key={item.label}
              to={item.href}
              data-ocid={`bottom_nav.${item.label.toLowerCase()}_link`}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 4px 6px",
                textDecoration: "none",
                gap: "3px",
                background: item.cta ? "#1A7A4C" : "transparent",
                color: item.cta ? "#fff" : isActive ? "#1A7A4C" : "#6B7280",
                borderTop:
                  isActive && !item.cta
                    ? "2px solid #1A7A4C"
                    : "2px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              {item.icon}
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: item.cta || isActive ? 600 : 400,
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
