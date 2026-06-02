import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-RYfA8Irf.js";
function RegisterPage() {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const [agreed, setAgreed] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: ""
  });
  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = "/account/dashboard";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen", "data-ocid": "register.page", children: [
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
              alt: "Himalayan mountain peaks — Global Trek",
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
                  "Begin Your",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Himalayan Journey"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-white/80 text-base mb-8",
                style: { fontFamily: "var(--font-body)" },
                children: "Join 12,000+ trekkers who've discovered their summit with Global Trek."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4", children: ["500+ Treks", "15 Years", "100% Safe"].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 text-center py-3 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: stat })
              },
              stat
            )) })
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
              children: "Create Your Account"
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
              children: "Start your trekking adventure with Global Trek today."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            [
              {
                name: "name",
                label: "Full Name",
                type: "text",
                placeholder: "Arjun Sharma",
                ocid: "register.name_input"
              },
              {
                name: "email",
                label: "Email Address",
                type: "email",
                placeholder: "you@example.com",
                ocid: "register.email_input"
              },
              {
                name: "phone",
                label: "Phone Number",
                type: "tel",
                placeholder: "+91 98765 43210",
                ocid: "register.phone_input"
              }
            ].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: field.name,
                  className: "block text-sm font-semibold mb-1.5",
                  style: {
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-body)"
                  },
                  children: field.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: field.name,
                  name: field.name,
                  type: field.type,
                  required: true,
                  value: form[field.name],
                  onChange: handleChange,
                  placeholder: field.placeholder,
                  "data-ocid": field.ocid,
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
            ] }, field.name)),
            [
              {
                name: "password",
                label: "Password",
                show: showPassword,
                toggle: () => setShowPassword((v) => !v),
                ocid: "register.password_input"
              },
              {
                name: "confirm",
                label: "Confirm Password",
                show: showConfirm,
                toggle: () => setShowConfirm((v) => !v),
                ocid: "register.confirm_input"
              }
            ].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: field.name,
                  className: "block text-sm font-semibold mb-1.5",
                  style: {
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-body)"
                  },
                  children: field.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: field.name,
                    name: field.name,
                    type: field.show ? "text" : "password",
                    required: true,
                    value: form[field.name],
                    onChange: handleChange,
                    placeholder: "••••••••",
                    "data-ocid": field.ocid,
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
                    onClick: field.toggle,
                    className: "absolute right-3 top-1/2 -translate-y-1/2",
                    style: { color: "var(--text-muted)" },
                    "aria-label": field.show ? "Hide" : "Show",
                    children: field.show ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
            ] }, field.name)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "flex items-start gap-3 cursor-pointer",
                "data-ocid": "register.terms_checkbox",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "sr-only",
                        checked: agreed,
                        onChange: (e) => setAgreed(e.target.checked),
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                        style: {
                          background: agreed ? "var(--green-primary)" : "white",
                          borderColor: agreed ? "var(--green-primary)" : "var(--border-default)"
                        },
                        children: agreed && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            width: "11",
                            height: "9",
                            viewBox: "0 0 11 9",
                            fill: "white",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                d: "M1 4l3 3 6-6",
                                stroke: "white",
                                strokeWidth: "2",
                                fill: "none"
                              }
                            )
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-sm",
                      style: {
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-body)"
                      },
                      children: [
                        "I agree to the",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: { color: "var(--green-primary)" },
                            className: "font-semibold cursor-pointer",
                            children: "Terms of Service"
                          }
                        ),
                        " ",
                        "and",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: { color: "var(--green-primary)" },
                            className: "font-semibold cursor-pointer",
                            children: "Privacy Policy"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                "data-ocid": "register.submit_button",
                className: "w-full py-3 rounded-xl font-semibold text-white text-sm transition-all",
                style: {
                  background: "var(--green-primary)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 14px rgba(26,122,76,0.35)"
                },
                children: "Create My Account"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-center text-sm mt-6",
              style: {
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)"
              },
              children: [
                "Already have an account?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/account/login",
                    className: "font-semibold",
                    style: { color: "var(--green-primary)" },
                    "data-ocid": "register.login_link",
                    children: "Sign in here"
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
  RegisterPage
};
