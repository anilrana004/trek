import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const waMessage = encodeURIComponent(
    "Hi Global Trek! I am interested in booking a trek.",
  );

  return (
    <a
      href={`https://wa.me/919876543210?text=${waMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-ocid="whatsapp_button"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        position: "fixed",
        bottom: "80px",
        left: "16px",
        zIndex: 999,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "var(--whatsapp-green)",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(80px) scale(0.8)",
        opacity: visible ? 1 : 0,
        transition:
          "transform 400ms cubic-bezier(0.34,1.56,0.64,1), opacity 400ms ease",
        animation: visible ? "waBounce 1s ease 8s infinite" : undefined,
      }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            left: "68px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#1A7A4C",
            border: "none",
            borderRadius: "50px",
            padding: "8px 14px",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "#fff",
            boxShadow: "0 4px 16px rgba(26,122,76,0.3)",
            pointerEvents: "none",
          }}
        >
          Chat with Us
        </div>
      )}
      {/* WhatsApp SVG */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="WhatsApp"
      >
        <path d="M16 3C8.832 3 3 8.832 3 16c0 2.346.635 4.545 1.74 6.44L3 29l6.76-1.724A12.94 12.94 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11a10.95 10.95 0 01-5.592-1.53l-.392-.238-4.02 1.025 1.044-3.91-.256-.408A10.95 10.95 0 015 16C5 9.935 9.935 5 16 5zm-3.647 5.5c-.22 0-.576.082-.878.408-.302.326-1.154 1.128-1.154 2.75 0 1.624 1.181 3.192 1.345 3.415.164.222 2.29 3.647 5.625 4.97 2.785 1.099 3.337.88 3.939.824.601-.055 1.94-.793 2.214-1.558.275-.765.275-1.42.192-1.558-.082-.137-.302-.22-.632-.384-.33-.164-1.94-.957-2.24-1.066-.3-.11-.52-.164-.74.164-.22.329-.85 1.066-1.043 1.286-.192.22-.384.247-.713.082-.33-.164-1.394-.514-2.655-1.638-.981-.875-1.643-1.955-1.835-2.284-.192-.33-.02-.507.144-.671.148-.148.33-.384.494-.576.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.576-.082-.164-.733-1.79-1.016-2.45-.27-.641-.547-.55-.74-.56-.192-.008-.412-.01-.633-.01z" />
      </svg>
    </a>
  );
}
