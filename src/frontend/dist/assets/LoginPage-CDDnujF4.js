import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
function LoginPage() {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  function handleLogin(e) {
    e.preventDefault();
    window.location.href = "/account/dashboard";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen", "data-ocid": "login.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "hidden lg:flex lg:w-1/2 relative overflow-hidden",
        style: { minHeight: "100vh" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
              alt: "Himalayan mountain peaks at dawn",
              className: "absolute inset-0 w-full h-full object-cover",
              loading: "eager"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to bottom, rgba(20,92,56,0.55) 0%, rgba(8,10,12,0.75) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col justify-end p-12 pb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg flex items-center justify-center",
                  style: { background: "var(--green-primary)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 24 24",
                      fill: "white",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L2 19h20L12 2zm0 4l7 13H5L12 6z" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-white text-xl font-bold",
                  style: { fontFamily: "var(--font-display)" },
                  children: "Global Trek"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "text-white text-4xl font-bold mb-4",
                style: { fontFamily: "var(--font-display)", lineHeight: 1.2 },
                children: [
                  "Where Every Trail",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Tells a Story"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-white/80 text-base mb-8",
                style: { fontFamily: "var(--font-body)" },
                children: "Expert-guided treks across the Himalayas of Uttarakhand & Himachal Pradesh. Join 12,000+ adventurers."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400 text-lg", children: "★★★★★" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: "4.9★ Rated by 12,000+ Trekkers" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-1 flex flex-col justify-center items-center px-6 py-12 bg-white",
        style: { minHeight: "100vh" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8 lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-lg flex items-center justify-center",
                style: { background: "var(--green-primary)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "white",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L2 19h20L12 2zm0 4l7 13H5L12 6z" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-lg font-bold",
                style: {
                  fontFamily: "var(--font-display)",
                  color: "var(--green-primary)"
                },
                children: "Global Trek"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-3xl font-bold mb-2",
              style: {
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)"
              },
              children: "Welcome Back, Adventurer"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm mb-8",
              style: {
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)"
              },
              children: "Sign in to access your bookings and dashboard."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "email",
                  className: "block text-sm font-semibold mb-1.5",
                  style: {
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-body)"
                  },
                  children: "Email Address"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "email",
                  type: "email",
                  required: true,
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "you@example.com",
                  "data-ocid": "login.input",
                  className: "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all",
                  style: {
                    border: "1.5px solid var(--border-default)",
                    fontFamily: "var(--font-body)",
                    color: "var(--text-primary)",
                    background: "#fafafa"
                  },
                  onFocus: (e) => {
                    e.currentTarget.style.borderColor = "var(--green-primary)";
                  },
                  onBlur: (e) => {
                    e.currentTarget.style.borderColor = "var(--border-default)";
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "password",
                    className: "block text-sm font-semibold",
                    style: {
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)"
                    },
                    children: "Password"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-xs font-medium",
                    style: {
                      color: "var(--green-primary)",
                      fontFamily: "var(--font-body)"
                    },
                    "data-ocid": "login.forgot_password",
                    children: "Forgot Password?"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "password",
                    type: showPassword ? "text" : "password",
                    required: true,
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    placeholder: "••••••••",
                    "data-ocid": "login.password_input",
                    className: "w-full px-4 py-3 pr-12 rounded-xl border text-sm outline-none transition-all",
                    style: {
                      border: "1.5px solid var(--border-default)",
                      fontFamily: "var(--font-body)",
                      color: "var(--text-primary)",
                      background: "#fafafa"
                    },
                    onFocus: (e) => {
                      e.currentTarget.style.borderColor = "var(--green-primary)";
                    },
                    onBlur: (e) => {
                      e.currentTarget.style.borderColor = "var(--border-default)";
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className: "absolute right-3 top-1/2 -translate-y-1/2",
                    style: { color: "var(--text-muted)" },
                    "aria-label": showPassword ? "Hide password" : "Show password",
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": "true",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
                        ]
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": "true",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" })
                        ]
                      }
                    )
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                "data-ocid": "login.submit_button",
                className: "w-full py-3 rounded-xl font-semibold text-white text-sm transition-all",
                style: {
                  background: "var(--green-primary)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 14px rgba(26,122,76,0.35)"
                },
                children: "Login to Global Trek"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 h-px",
                style: { background: "var(--border-default)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs",
                style: {
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-body)"
                },
                children: "or"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 h-px",
                style: { background: "var(--border-default)" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "login.internet_identity_button",
              className: "w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2.5",
              style: {
                border: "1.5px solid var(--border-default)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
                background: "white"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
                    ]
                  }
                ),
                "Continue with Internet Identity"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-center text-sm mt-6",
              style: {
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)"
              },
              children: [
                "New to Global Trek?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/account/register",
                    className: "font-semibold",
                    style: { color: "var(--green-primary)" },
                    "data-ocid": "login.register_link",
                    children: "Create your account"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  LoginPage
};
