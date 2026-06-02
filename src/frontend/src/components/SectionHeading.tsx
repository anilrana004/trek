interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      style={{ textAlign: centered ? "center" : "left", marginBottom: "40px" }}
    >
      {label && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{ width: "24px", height: "2px", background: "#1A7A4C" }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1A7A4C",
            }}
          >
            {label}
          </span>
          <div
            style={{ width: "24px", height: "2px", background: "#1A7A4C" }}
          />
        </div>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          lineHeight: 1.15,
          color: dark ? "#fff" : "#1A1A1A",
          margin: 0,
          marginBottom: subtitle ? "14px" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: dark ? "rgba(255,255,255,0.8)" : "#4A4A4A",
            lineHeight: 1.6,
            maxWidth: centered ? "600px" : "100%",
            margin: centered ? "0 auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
