import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Demo: navigate to dashboard
    window.location.href = "/account/dashboard";
  }

  return (
    <div className="flex min-h-screen" data-ocid="login.page">
      {/* Left: Mountain Image */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
          alt="Himalayan mountain peaks at dawn"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,92,56,0.55) 0%, rgba(8,10,12,0.75) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-end p-12 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "var(--green-primary)" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M12 2L2 19h20L12 2zm0 4l7 13H5L12 6z" />
              </svg>
            </div>
            <span
              className="text-white text-xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Global Trek
            </span>
          </div>
          <h2
            className="text-white text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", lineHeight: 1.2 }}
          >
            Where Every Trail
            <br />
            Tells a Story
          </h2>
          <p
            className="text-white/80 text-base mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Expert-guided treks across the Himalayas of Uttarakhand &amp;
            Himachal Pradesh. Join 12,000+ adventurers.
          </p>
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="text-amber-400 text-lg">★★★★★</span>
            <span className="text-white font-semibold text-sm">
              4.9★ Rated by 12,000+ Trekkers
            </span>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div
        className="flex-1 flex flex-col justify-center items-center px-6 py-12 bg-white"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-full max-w-md">
          {/* Logo (mobile) */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "var(--green-primary)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M12 2L2 19h20L12 2zm0 4l7 13H5L12 6z" />
              </svg>
            </div>
            <span
              className="text-lg font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--green-primary)",
              }}
            >
              Global Trek
            </span>
          </div>

          <h1
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            Welcome Back, Adventurer
          </h1>
          <p
            className="text-sm mb-8"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Sign in to access your bookings and dashboard.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1.5"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                data-ocid="login.input"
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{
                  border: "1.5px solid var(--border-default)",
                  fontFamily: "var(--font-body)",
                  color: "var(--text-primary)",
                  background: "#fafafa",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--green-primary)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                }}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium"
                  style={{
                    color: "var(--green-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                  data-ocid="login.forgot_password"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  data-ocid="login.password_input"
                  className="w-full px-4 py-3 pr-12 rounded-xl border text-sm outline-none transition-all"
                  style={{
                    border: "1.5px solid var(--border-default)",
                    fontFamily: "var(--font-body)",
                    color: "var(--text-primary)",
                    background: "#fafafa",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--green-primary)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-default)";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--text-muted)" }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              data-ocid="login.submit_button"
              className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all"
              style={{
                background: "var(--green-primary)",
                fontFamily: "var(--font-body)",
                boxShadow: "0 4px 14px rgba(26,122,76,0.35)",
              }}
            >
              Login to Global Trek
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border-default)" }}
            />
            <span
              className="text-xs"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              or
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--border-default)" }}
            />
          </div>

          {/* Internet Identity */}
          <button
            type="button"
            data-ocid="login.internet_identity_button"
            className="w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2.5"
            style={{
              border: "1.5px solid var(--border-default)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
              background: "white",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Continue with Internet Identity
          </button>

          <p
            className="text-center text-sm mt-6"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            New to Global Trek?{" "}
            <Link
              to="/account/register"
              className="font-semibold"
              style={{ color: "var(--green-primary)" }}
              data-ocid="login.register_link"
            >
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
