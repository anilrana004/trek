import { j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { u as useScrollAnimation } from "./useScrollAnimation-CjWvoXuE.js";
function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = "center"
}) {
  const ref = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "animate-on-scroll",
      style: {
        textAlign: align,
        marginBottom: "48px",
        opacity: 0
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .animate-on-scroll.visible {
          animation: fadeUp 600ms ease forwards;
        }
        .animate-on-scroll.visible .sh-eyebrow { animation: fadeUp 600ms ease 0ms forwards; }
        .animate-on-scroll.visible .sh-heading { animation: fadeUp 600ms ease 100ms forwards; }
        .animate-on-scroll.visible .sh-subtext { animation: fadeUp 600ms ease 200ms forwards; }
      ` }),
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "sh-eyebrow",
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--accent-blue)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "12px"
            },
            children: eyebrow
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "sh-heading",
            style: {
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 48px)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: subtext ? "16px" : "0"
            },
            children: heading
          }
        ),
        subtext && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "sh-subtext",
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--text-secondary)",
              maxWidth: align === "center" ? "520px" : void 0,
              margin: align === "center" ? "0 auto" : "0",
              lineHeight: 1.6
            },
            children: subtext
          }
        )
      ]
    }
  );
}
export {
  SectionHeading as S
};
