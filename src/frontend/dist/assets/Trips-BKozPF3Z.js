import { r as reactExports, j as jsxRuntimeExports } from "./index-RYfA8Irf.js";
import { T as TripCard, a as allTrips } from "./trips-Dg0_nTXB.js";
const PAGE_SIZE = 24;
const REGIONS = ["India", "Nepal", "Bhutan", "Tibet", "Outside Himalaya"];
const INDIA_SUB_REGIONS = [
  "Ladakh",
  "Uttarakhand",
  "Himachal",
  "Kashmir",
  "Sikkim & Darjeeling"
];
const GRADINGS = [
  "Discover / Active Holiday",
  "Beginner Trek",
  "Moderate Trek",
  "Challenging Trek",
  "Technical Trek",
  "Trekking Peak",
  "Moderate Climb",
  "Demanding Climb",
  "Very Demanding",
  "Extreme Climb"
];
const GRADING_MAP = {
  "Discover / Active Holiday": ["Active Holiday", "Discover"],
  "Beginner Trek": ["Beginner Trek"],
  "Moderate Trek": ["Moderate Trek"],
  "Challenging Trek": ["Challenging Trek"],
  "Technical Trek": ["Technical Trek"],
  "Trekking Peak": ["Trekking Peak"],
  "Moderate Climb": ["Moderate Climb"],
  "Demanding Climb": ["Demanding Climb"],
  "Very Demanding": ["Very Demanding"],
  "Extreme Climb": ["Extreme Climb"]
};
const DURATIONS = [
  { label: "Under a week (<7 days)", value: "1" },
  { label: "8–10 Days", value: "2" },
  { label: "11–14 Days", value: "3" },
  { label: "15–20 Days", value: "4" },
  { label: "Over 20 Days", value: "5" }
];
const SEASONS = [
  { label: "Spring (Mar–Apr)", value: "spring" },
  { label: "Summer (May–Jun)", value: "summer" },
  { label: "Monsoon (Jul–Sep)", value: "monsoon" },
  { label: "Fall (Oct–Nov)", value: "fall" },
  { label: "Winter (Dec–Feb)", value: "winter" }
];
const SORT_OPTIONS = [
  { label: "Upcoming Departures", value: "departure" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Duration: Short First", value: "duration-asc" }
];
function emptyFilters() {
  return {
    regions: /* @__PURE__ */ new Set(),
    subRegions: /* @__PURE__ */ new Set(),
    gradings: /* @__PURE__ */ new Set(),
    durations: /* @__PURE__ */ new Set(),
    seasons: /* @__PURE__ */ new Set()
  };
}
function matchesDuration(trip, durations) {
  if (durations.size === 0) return true;
  if (durations.has("1") && trip.duration < 7) return true;
  if (durations.has("2") && trip.duration >= 8 && trip.duration <= 10)
    return true;
  if (durations.has("3") && trip.duration >= 11 && trip.duration <= 14)
    return true;
  if (durations.has("4") && trip.duration >= 15 && trip.duration <= 20)
    return true;
  if (durations.has("5") && trip.duration > 20) return true;
  return false;
}
function matchesGrading(trip, gradings) {
  if (gradings.size === 0) return true;
  for (const g of gradings) {
    const values = GRADING_MAP[g] ?? [g];
    if (values.some(
      (v) => trip.difficulty.toLowerCase().includes(v.toLowerCase())
    ))
      return true;
  }
  return false;
}
function filterTrips(trips, filters) {
  return trips.filter((trip) => {
    if (filters.regions.size > 0) {
      const countryMatch = filters.regions.has(trip.country);
      if (!countryMatch) return false;
    }
    if (filters.subRegions.size > 0 && trip.country === "India") {
      if (!trip.subRegion || !filters.subRegions.has(trip.subRegion))
        return false;
    }
    if (!matchesGrading(trip, filters.gradings)) return false;
    if (!matchesDuration(trip, filters.durations)) return false;
    if (filters.seasons.size > 0) {
      if (!trip.season.some((s) => filters.seasons.has(s))) return false;
    }
    return true;
  });
}
function sortTrips(trips, sort) {
  const sorted = [...trips];
  if (sort === "price-asc") {
    return sorted.sort(
      (a, b) => (a.priceINR ?? a.priceUSD ?? 0) - (b.priceINR ?? b.priceUSD ?? 0)
    );
  }
  if (sort === "price-desc") {
    return sorted.sort(
      (a, b) => (b.priceINR ?? b.priceUSD ?? 0) - (a.priceINR ?? a.priceUSD ?? 0)
    );
  }
  if (sort === "duration-asc") {
    return sorted.sort((a, b) => a.duration - b.duration);
  }
  return sorted;
}
function getActiveTags(filters, setFilters) {
  var _a, _b;
  const tags = [];
  for (const r of filters.regions) {
    tags.push({
      label: r,
      remove: () => setFilters((prev) => {
        const s = new Set(prev.regions);
        s.delete(r);
        return { ...prev, regions: s };
      })
    });
  }
  for (const sr of filters.subRegions) {
    tags.push({
      label: sr,
      remove: () => setFilters((prev) => {
        const s = new Set(prev.subRegions);
        s.delete(sr);
        return { ...prev, subRegions: s };
      })
    });
  }
  for (const g of filters.gradings) {
    tags.push({
      label: g,
      remove: () => setFilters((prev) => {
        const s = new Set(prev.gradings);
        s.delete(g);
        return { ...prev, gradings: s };
      })
    });
  }
  for (const d of filters.durations) {
    const label = ((_a = DURATIONS.find((x) => x.value === d)) == null ? void 0 : _a.label) ?? d;
    tags.push({
      label,
      remove: () => setFilters((prev) => {
        const s = new Set(prev.durations);
        s.delete(d);
        return { ...prev, durations: s };
      })
    });
  }
  for (const se of filters.seasons) {
    const label = ((_b = SEASONS.find((x) => x.value === se)) == null ? void 0 : _b.label) ?? se;
    tags.push({
      label,
      remove: () => setFilters((prev) => {
        const s = new Set(prev.seasons);
        s.delete(se);
        return { ...prev, seasons: s };
      })
    });
  }
  return tags;
}
function CheckIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: "10",
      height: "10",
      viewBox: "0 0 10 10",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M2 5l2.5 2.5L8 3",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function FilterCheckbox({
  checked,
  onChange,
  label,
  indent = false
}) {
  const inputId = `filter-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      htmlFor: inputId,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        paddingLeft: indent ? "16px" : "0",
        paddingTop: "5px",
        paddingBottom: "5px"
      },
      onMouseEnter: (e) => {
        const el = e.currentTarget.querySelector(".fc-label");
        if (el) el.style.color = "var(--text-primary)";
      },
      onMouseLeave: (e) => {
        if (!checked) {
          const el = e.currentTarget.querySelector(".fc-label");
          if (el) el.style.color = "var(--text-secondary)";
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            id: inputId,
            readOnly: true,
            checked,
            onChange,
            style: { position: "absolute", opacity: 0, width: 0, height: 0 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              width: "18px",
              height: "18px",
              flexShrink: 0,
              background: checked ? "var(--accent-blue)" : "var(--bg-elevated)",
              border: `1px solid ${checked ? "var(--accent-blue)" : "var(--border-default)"}`,
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 150ms ease, border-color 150ms ease"
            },
            role: "presentation",
            "aria-hidden": "true",
            children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckIcon, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "fc-label",
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: checked ? "var(--text-primary)" : "var(--text-secondary)",
              transition: "color 150ms ease",
              userSelect: "none"
            },
            children: label
          }
        )
      ]
    }
  );
}
function FilterGroup({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "24px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 700,
          color: "var(--text-muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "12px",
          paddingBottom: "8px",
          borderBottom: "1px solid var(--border-subtle)"
        },
        children: title
      }
    ),
    children
  ] });
}
function FilterPanel({ filters, setFilters }) {
  function toggleSet(set, value) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "24px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase"
              },
              children: "FILTERS"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFilters(() => emptyFilters()),
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "var(--accent-blue)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0
              },
              children: "Clear all"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FilterGroup, { title: "REGION", children: [
      REGIONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FilterCheckbox,
        {
          label: r,
          checked: filters.regions.has(r),
          onChange: () => setFilters((prev) => ({
            ...prev,
            regions: toggleSet(prev.regions, r)
          }))
        },
        r
      )),
      filters.regions.has("India") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "4px" }, children: INDIA_SUB_REGIONS.map((sr) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FilterCheckbox,
        {
          label: sr,
          checked: filters.subRegions.has(sr),
          onChange: () => setFilters((prev) => ({
            ...prev,
            subRegions: toggleSet(prev.subRegions, sr)
          })),
          indent: true
        },
        sr
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "GRADING", children: GRADINGS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterCheckbox,
      {
        label: g,
        checked: filters.gradings.has(g),
        onChange: () => setFilters((prev) => ({
          ...prev,
          gradings: toggleSet(prev.gradings, g)
        }))
      },
      g
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "DURATION", children: DURATIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterCheckbox,
      {
        label: d.label,
        checked: filters.durations.has(d.value),
        onChange: () => setFilters((prev) => ({
          ...prev,
          durations: toggleSet(prev.durations, d.value)
        }))
      },
      d.value
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterGroup, { title: "SEASON", children: SEASONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterCheckbox,
      {
        label: s.label,
        checked: filters.seasons.has(s.value),
        onChange: () => setFilters((prev) => ({
          ...prev,
          seasons: toggleSet(prev.seasons, s.value)
        }))
      },
      s.value
    )) })
  ] });
}
function XIcon({ size = 12 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M2 2l8 8M10 2l-8 8",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round"
        }
      )
    }
  );
}
function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  if (totalPages <= 1) return null;
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++)
      pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }
  const btnBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    background: "transparent",
    transition: "all 150ms ease"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginTop: "48px",
        flexWrap: "wrap"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "trips.pagination_prev",
            onClick: () => onPageChange(currentPage - 1),
            disabled: currentPage === 1,
            style: {
              ...btnBase,
              color: currentPage === 1 ? "var(--text-muted)" : "var(--text-secondary)",
              cursor: currentPage === 1 ? "not-allowed" : "pointer"
            },
            onMouseEnter: (e) => {
              if (currentPage > 1) {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
                e.currentTarget.style.color = "var(--accent-blue)";
              }
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.borderColor = "var(--border-default)";
              e.currentTarget.style.color = currentPage === 1 ? "var(--text-muted)" : "var(--text-secondary)";
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 18l-6-6 6-6" })
              }
            )
          }
        ),
        pages.map(
          (p, i) => p === "..." ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                padding: "0 4px"
              },
              children: "…"
            },
            i === 1 ? "ellipsis-start" : "ellipsis-end"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `trips.pagination.${p}`,
              onClick: () => onPageChange(p),
              style: {
                ...btnBase,
                background: p === currentPage ? "var(--accent-blue)" : "transparent",
                borderColor: p === currentPage ? "var(--accent-blue)" : "var(--border-default)",
                color: p === currentPage ? "var(--text-inverse)" : "var(--text-secondary)"
              },
              onMouseEnter: (e) => {
                if (p !== currentPage) {
                  e.currentTarget.style.borderColor = "var(--accent-blue)";
                  e.currentTarget.style.color = "var(--accent-blue)";
                }
              },
              onMouseLeave: (e) => {
                if (p !== currentPage) {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }
              },
              children: p
            },
            p
          )
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "trips.pagination_next",
            onClick: () => onPageChange(currentPage + 1),
            disabled: currentPage === totalPages,
            style: {
              ...btnBase,
              color: currentPage === totalPages ? "var(--text-muted)" : "var(--text-secondary)",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer"
            },
            onMouseEnter: (e) => {
              if (currentPage < totalPages) {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
                e.currentTarget.style.color = "var(--accent-blue)";
              }
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.borderColor = "var(--border-default)";
              e.currentTarget.style.color = currentPage === totalPages ? "var(--text-muted)" : "var(--text-secondary)";
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18l6-6-6-6" })
              }
            )
          }
        )
      ]
    }
  );
}
function TripsPage() {
  var _a;
  reactExports.useEffect(() => {
    document.title = "All Trips | White Magic Adventure Travel";
  }, []);
  const [filters, setFilters] = reactExports.useState(emptyFilters);
  const [sort, setSort] = reactExports.useState("departure");
  const [page, setPage] = reactExports.useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = reactExports.useState(false);
  const [sortOpen, setSortOpen] = reactExports.useState(false);
  const filteredTrips = reactExports.useMemo(() => {
    const filtered = filterTrips(allTrips, filters);
    return sortTrips(filtered, sort);
  }, [filters, sort]);
  const totalPages = Math.ceil(filteredTrips.length / PAGE_SIZE);
  const pagedTrips = filteredTrips.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
  const handlePageChange = reactExports.useCallback((p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleSetFilters = reactExports.useCallback(
    (fn) => {
      setFilters(fn);
      setPage(1);
    },
    []
  );
  const activeTags = getActiveTags(filters, handleSetFilters);
  const activeCount = filters.regions.size + filters.subRegions.size + filters.gradings.size + filters.durations.size + filters.seasons.size;
  const currentSortLabel = ((_a = SORT_OPTIONS.find((o) => o.value === sort)) == null ? void 0 : _a.label) ?? "Upcoming Departures";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-primary)", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "relative",
          height: "clamp(360px, 40vh, 560px)",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
              alt: "Himalayan panorama",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                background: "var(--gradient-hero)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingBottom: "60px",
                textAlign: "center",
                padding: "0 24px 60px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--accent-blue)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "12px"
                    },
                    children: "EXPLORE"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(40px, 7vw, 64px)",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      marginBottom: "16px"
                    },
                    children: "All Our Trips"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      color: "var(--text-secondary)"
                    },
                    children: "67+ Adventures across the Himalaya"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          maxWidth: "var(--container-wide)",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          gap: "0"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "aside",
            {
              "data-ocid": "trips.filters.panel",
              style: {
                width: "280px",
                flexShrink: 0,
                background: "var(--bg-surface)",
                borderRight: "1px solid var(--border-subtle)",
                position: "sticky",
                top: "72px",
                height: "calc(100vh - 72px)",
                overflowY: "auto",
                display: "none"
              },
              className: "trips-sidebar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { filters, setFilters: handleSetFilters })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: { flex: 1, padding: "32px 24px 80px", minWidth: 0 }, children: [
            activeTags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "trips.active_filters",
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "20px",
                  alignItems: "center"
                },
                children: [
                  activeTags.map((tag, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "var(--accent-blue-dim)",
                        border: "1px solid var(--accent-blue)",
                        color: "var(--accent-blue)",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        padding: "4px 12px",
                        borderRadius: "var(--radius-full)"
                      },
                      children: [
                        tag.label,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: tag.remove,
                            style: {
                              display: "flex",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "var(--accent-blue)",
                              padding: 0,
                              lineHeight: 1
                            },
                            "aria-label": `Remove ${tag.label} filter`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, { size: 10 })
                          }
                        )
                      ]
                    },
                    `${tag.label}-${i}`
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "trips.clear_all_filters",
                      onClick: () => handleSetFilters(() => emptyFilters()),
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--accent-blue)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px 8px",
                        textDecoration: "underline"
                      },
                      children: "Clear all"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                  flexWrap: "wrap",
                  gap: "12px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "var(--text-muted)"
                      },
                      children: [
                        "Showing",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-secondary)" }, children: filteredTrips.length }),
                        " ",
                        "trips"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "trips.sort_dropdown",
                        onClick: () => setSortOpen((v) => !v),
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border-default)",
                          borderRadius: "var(--radius-md)",
                          padding: "8px 14px",
                          cursor: "pointer",
                          transition: "border-color 150ms ease"
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.borderColor = "var(--accent-blue)";
                        },
                        onMouseLeave: (e) => {
                          if (!sortOpen)
                            e.currentTarget.style.borderColor = "var(--border-default)";
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            "Sort by: ",
                            currentSortLabel
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "svg",
                            {
                              width: "14",
                              height: "14",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              role: "presentation",
                              "aria-hidden": "true",
                              style: {
                                flexShrink: 0,
                                transform: sortOpen ? "rotate(180deg)" : "none",
                                transition: "transform 150ms ease"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9l6 6 6-6" })
                            }
                          )
                        ]
                      }
                    ),
                    sortOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          top: "calc(100% + 6px)",
                          right: 0,
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border-default)",
                          borderRadius: "var(--radius-md)",
                          minWidth: "220px",
                          zIndex: 50,
                          boxShadow: "var(--shadow-card)",
                          overflow: "hidden"
                        },
                        children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `trips.sort.${opt.value}`,
                            onClick: () => {
                              setSort(opt.value);
                              setSortOpen(false);
                            },
                            style: {
                              display: "block",
                              width: "100%",
                              textAlign: "left",
                              padding: "10px 16px",
                              fontFamily: "var(--font-body)",
                              fontSize: "13px",
                              color: sort === opt.value ? "var(--accent-blue)" : "var(--text-secondary)",
                              background: sort === opt.value ? "var(--accent-blue-dim)" : "transparent",
                              border: "none",
                              cursor: "pointer",
                              transition: "background 150ms ease, color 150ms ease"
                            },
                            onMouseEnter: (e) => {
                              if (sort !== opt.value) {
                                e.currentTarget.style.background = "var(--bg-surface)";
                                e.currentTarget.style.color = "var(--text-primary)";
                              }
                            },
                            onMouseLeave: (e) => {
                              if (sort !== opt.value) {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "var(--text-secondary)";
                              }
                            },
                            children: opt.label
                          },
                          opt.value
                        ))
                      }
                    )
                  ] })
                ]
              }
            ),
            pagedTrips.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "trips.list",
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "24px"
                },
                className: "trips-grid",
                children: pagedTrips.map((trip, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TripCard,
                  {
                    trip,
                    index: (page - 1) * PAGE_SIZE + i
                  },
                  trip.id
                ))
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "trips.empty_state",
                style: {
                  textAlign: "center",
                  padding: "80px 24px",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-xl)",
                  background: "var(--bg-surface)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      width: "48",
                      height: "48",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "var(--text-muted)",
                      strokeWidth: "1.5",
                      "aria-hidden": "true",
                      style: { marginBottom: "16px" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 20l7-12 4 6 2-3 5 9H3z" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: "24px",
                        color: "var(--text-primary)",
                        marginBottom: "8px"
                      },
                      children: "No trips found"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        color: "var(--text-secondary)",
                        marginBottom: "20px"
                      },
                      children: "Try adjusting your filters to find your adventure."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "trips.empty_state.clear_button",
                      onClick: () => handleSetFilters(() => emptyFilters()),
                      style: {
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--text-inverse)",
                        background: "var(--accent-blue)",
                        border: "none",
                        borderRadius: "var(--radius-md)",
                        padding: "0 24px",
                        height: "44px",
                        cursor: "pointer",
                        transition: "background 150ms ease, box-shadow 150ms ease"
                      },
                      onMouseEnter: (e) => {
                        e.currentTarget.style.background = "var(--accent-blue-hover)";
                        e.currentTarget.style.boxShadow = "var(--shadow-glow-blue)";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.background = "var(--accent-blue)";
                        e.currentTarget.style.boxShadow = "none";
                      },
                      children: "Clear All Filters"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pagination,
              {
                currentPage: page,
                totalPages,
                onPageChange: handlePageChange
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "trips.mobile_filters_button",
        onClick: () => setMobileFiltersOpen(true),
        style: {
          display: "none",
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          alignItems: "center",
          gap: "8px",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-strong)",
          borderRadius: "var(--radius-full)",
          padding: "0 24px",
          height: "48px",
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--text-primary)",
          cursor: "pointer",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)"
        },
        className: "trips-mobile-filter-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "4", y1: "6", x2: "20", y2: "6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8", y1: "12", x2: "16", y2: "12" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "11", y1: "18", x2: "13", y2: "18" })
              ]
            }
          ),
          "Filters",
          activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                background: "var(--accent-blue)",
                color: "var(--text-inverse)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                width: "20px",
                height: "20px",
                borderRadius: "var(--radius-full)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: activeCount
            }
          )
        ]
      }
    ),
    mobileFiltersOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "trips.mobile_filters.dialog",
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 200,
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              role: "presentation",
              onClick: () => setMobileFiltersOpen(false),
              onKeyDown: (e) => {
                if (e.key === "Enter") setMobileFiltersOpen(false);
              },
              style: {
                position: "absolute",
                inset: 0,
                background: "rgba(8,10,12,0.8)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "var(--bg-surface)",
                borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
                maxHeight: "85vh",
                overflowY: "auto",
                borderTop: "1px solid var(--border-default)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px 24px 0",
                      position: "sticky",
                      top: 0,
                      background: "var(--bg-surface)",
                      zIndex: 1,
                      borderBottom: "1px solid var(--border-subtle)",
                      paddingBottom: "16px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--text-primary)"
                          },
                          children: "Filter Trips"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": "trips.mobile_filters.close_button",
                          onClick: () => setMobileFiltersOpen(false),
                          style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--text-muted)",
                            display: "flex",
                            padding: "4px"
                          },
                          "aria-label": "Close filters",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "svg",
                            {
                              width: "20",
                              height: "20",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              "aria-hidden": "true",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6L6 18M6 6l12 12" })
                            }
                          )
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FilterPanel, { filters, setFilters: handleSetFilters }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      padding: "16px 24px 32px",
                      position: "sticky",
                      bottom: 0,
                      background: "var(--bg-surface)",
                      borderTop: "1px solid var(--border-subtle)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "trips.mobile_filters.confirm_button",
                        onClick: () => setMobileFiltersOpen(false),
                        style: {
                          width: "100%",
                          height: "52px",
                          background: "var(--accent-blue)",
                          border: "none",
                          borderRadius: "var(--radius-md)",
                          fontFamily: "var(--font-body)",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "var(--text-inverse)",
                          cursor: "pointer",
                          transition: "background 150ms ease"
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.background = "var(--accent-blue-hover)";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.background = "var(--accent-blue)";
                        },
                        children: [
                          "Show ",
                          filteredTrips.length,
                          " trips"
                        ]
                      }
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    sortOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "presentation",
        style: { position: "fixed", inset: 0, zIndex: 40 },
        onClick: () => setSortOpen(false),
        onKeyDown: (e) => {
          if (e.key === "Enter") setSortOpen(false);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media (min-width: 768px) {
          .trips-sidebar { display: block !important; }
          .trips-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
          }
        }
        @media (min-width: 1024px) {
          .trips-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .trips-mobile-filter-btn { display: inline-flex !important; }
          .trips-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .trips-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .trips-sidebar::-webkit-scrollbar { width: 4px; }
        .trips-sidebar::-webkit-scrollbar-track { background: transparent; }
        .trips-sidebar::-webkit-scrollbar-thumb { background: var(--border-default); border-radius: 2px; }
      ` })
  ] });
}
export {
  TripsPage as default
};
