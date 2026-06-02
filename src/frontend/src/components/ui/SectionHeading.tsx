import type { ReactNode } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "center" | "left";
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = "center",
}: SectionHeadingProps) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-on-scroll"
      style={{
        textAlign: align,
        marginBottom: "48px",
        opacity: 0,
      }}
    >
      <style>{`
        .animate-on-scroll.visible {
          animation: fadeUp 600ms ease forwards;
        }
        .animate-on-scroll.visible .sh-eyebrow { animation: fadeUp 600ms ease 0ms forwards; }
        .animate-on-scroll.visible .sh-heading { animation: fadeUp 600ms ease 100ms forwards; }
        .animate-on-scroll.visible .sh-subtext { animation: fadeUp 600ms ease 200ms forwards; }
      `}</style>
      {eyebrow && (
        <div
          className="sh-eyebrow"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--accent-blue)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="sh-heading"
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "clamp(32px, 5vw, 48px)",
          color: "var(--text-primary)",
          lineHeight: 1.1,
          marginBottom: subtext ? "16px" : "0",
        }}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className="sh-subtext"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--text-secondary)",
            maxWidth: align === "center" ? "520px" : undefined,
            margin: align === "center" ? "0 auto" : "0",
            lineHeight: 1.6,
          }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
