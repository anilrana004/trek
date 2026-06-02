import { useState } from "react";

export function CallbackButton() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", trek: "", date: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setForm({ name: "", phone: "", trek: "", date: "" });
    }, 2500);
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-ocid="callback_button"
        aria-label="Request a callback from our trek experts"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 998,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 20px",
          background: "#1A7A4C",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "14px",
          boxShadow: "0 4px 20px rgba(26,122,76,0.4)",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#145C38";
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#1A7A4C";
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(0)";
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        <span className="hidden sm:inline">Request Callback</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          data-ocid="callback.dialog"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <dialog
            open
            aria-modal="true"
            aria-labelledby="callback-modal-title"
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "40px",
              width: "100%",
              maxWidth: "440px",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              border: "none",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              data-ocid="callback.close_button"
              aria-label="Close callback modal"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#4A4A4A",
                padding: "8px",
                borderRadius: "8px",
                lineHeight: 1,
                fontSize: "20px",
              }}
            >
              &#x2715;
            </button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                  &#x2705;
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    color: "#1A7A4C",
                    marginBottom: "8px",
                  }}
                >
                  We will call you back!
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#4A4A4A",
                    fontSize: "15px",
                  }}
                >
                  Our trek expert will contact you within 2 hours (9 AM - 9 PM
                  IST).
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    borderTop: "4px solid #1A7A4C",
                    borderRadius: "4px 4px 0 0",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                />
                <h2
                  id="callback-modal-title"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  Request a Callback
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#4A4A4A",
                    fontSize: "14px",
                    marginBottom: "24px",
                  }}
                >
                  Our trek expert will call you back within 2 hours.
                </p>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div>
                    <label
                      htmlFor="cb-name"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="cb-name"
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      data-ocid="callback.input"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1.5px solid #d1d5db",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cb-phone"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="cb-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      data-ocid="callback.input"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1.5px solid #d1d5db",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cb-trek"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#1A1A1A",
                        marginBottom: "6px",
                      }}
                    >
                      Trek Interest
                    </label>
                    <select
                      id="cb-trek"
                      data-ocid="callback.select"
                      value={form.trek}
                      onChange={(e) =>
                        setForm({ ...form, trek: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1.5px solid #d1d5db",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        outline: "none",
                        background: "#fff",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="">Select a trek or yatra</option>
                      <option>Kedarkantha Trek</option>
                      <option>Chopta Tungnath Trek</option>
                      <option>Hampta Pass Trek</option>
                      <option>Kedarnath Yatra</option>
                      <option>Char Dham Yatra</option>
                      <option>Custom Trip</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    data-ocid="callback.submit_button"
                    style={{
                      padding: "14px",
                      background: "#1A7A4C",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "15px",
                      cursor: "pointer",
                      transition: "background 0.2s",
                      marginTop: "4px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#145C38";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#1A7A4C";
                    }}
                  >
                    Request Callback
                  </button>
                </form>
              </>
            )}
          </dialog>
        </div>
      )}
    </>
  );
}
