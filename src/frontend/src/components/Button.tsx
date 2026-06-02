import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "cta" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href: string;
}

const variants: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "#1A7A4C",
    color: "#fff",
    border: "none",
  },
  outline: {
    background: "transparent",
    color: "#1A7A4C",
    border: "2px solid #1A7A4C",
  },
  cta: {
    background: "#F4A623",
    color: "#fff",
    border: "none",
  },
  ghost: {
    background: "transparent",
    color: "#1A7A4C",
    border: "none",
  },
};

const sizes: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: "8px 16px",
    fontSize: "13px",
    borderRadius: "8px",
    height: "36px",
  },
  md: {
    padding: "10px 22px",
    fontSize: "14px",
    borderRadius: "10px",
    height: "44px",
  },
  lg: {
    padding: "14px 32px",
    fontSize: "16px",
    borderRadius: "12px",
    height: "52px",
  },
};

const baseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "var(--font-body)",
  fontWeight: 600,
  letterSpacing: "0.02em",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading,
  children,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...sizes[size],
        width: fullWidth ? "100%" : "auto",
        opacity: props.disabled || loading ? 0.6 : 1,
        cursor: props.disabled || loading ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  children,
  style,
  ...props
}: LinkButtonProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...sizes[size],
        width: fullWidth ? "100%" : "auto",
        ...style,
      }}
    >
      {children}
    </a>
  );
}
