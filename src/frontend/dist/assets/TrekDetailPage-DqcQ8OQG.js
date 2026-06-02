import { r as reactExports, j as jsxRuntimeExports, u as useParams, L as Link } from "./index-RYfA8Irf.js";
import { T as TrekCard } from "./TrekCard-MEq-mcYL.js";
import { F as FloatingParallaxHero } from "./FloatingParallaxHero-DVn2zDPp.js";
import { g as getTrekBySlug, a as getTreksByState } from "./treks-NQ8g2zVB.js";
const kedarkanthaWaypoints = [
  {
    id: "kk-1",
    name: "Sankri Village",
    altitude: 1950,
    dayNumber: 1,
    type: "basecamp",
    x: 120,
    y: 400,
    description: "Traditional Garhwali base village with hotels and homestays at 1,950m."
  },
  {
    id: "kk-2",
    name: "Juda Ka Talab",
    altitude: 2950,
    dayNumber: 2,
    type: "camp",
    x: 280,
    y: 320,
    description: "Enchanting lake that freezes in winter. Brilliant campsite surrounded by deodar forests."
  },
  {
    id: "kk-3",
    name: "Kedarkantha Base",
    altitude: 3430,
    dayNumber: 3,
    type: "camp",
    x: 450,
    y: 230,
    description: "Open meadow campsite with panoramic ridge views at 3,430m."
  },
  {
    id: "kk-4",
    name: "Kedarkantha Summit",
    altitude: 3810,
    dayNumber: 4,
    type: "summit",
    x: 610,
    y: 130,
    description: "360° panorama: Swargarohini, Bandarpunch, Kalanag, Black Peak — India's best winter summit."
  },
  {
    id: "kk-5",
    name: "Descent to Sankri",
    altitude: 1950,
    dayNumber: 5,
    type: "village",
    x: 750,
    y: 400,
    description: "Gentle descent back through snow-laden deodar forests to Sankri."
  }
];
const harKiDunWaypoints = [
  {
    id: "hkd-1",
    name: "Sankri",
    altitude: 1950,
    dayNumber: 1,
    type: "basecamp",
    x: 100,
    y: 420,
    description: "Drive from Dehradun (210 km). Overnight at Sankri village."
  },
  {
    id: "hkd-2",
    name: "Seema Camp",
    altitude: 2600,
    dayNumber: 2,
    type: "camp",
    x: 230,
    y: 350,
    description: "Trek from Taluka through dense oak-rhododendron forests."
  },
  {
    id: "hkd-3",
    name: "Osla Village",
    altitude: 2565,
    dayNumber: 3,
    type: "village",
    x: 360,
    y: 340,
    description: "Ancient village with the famous Duryodhana Temple — a mythological mystery."
  },
  {
    id: "hkd-4",
    name: "Har Ki Dun Base",
    altitude: 3200,
    dayNumber: 4,
    type: "camp",
    x: 510,
    y: 240,
    description: "Approach through alpine meadows toward the 'Valley of Gods'."
  },
  {
    id: "hkd-5",
    name: "Har Ki Dun Valley",
    altitude: 3566,
    dayNumber: 5,
    type: "summit",
    x: 660,
    y: 160,
    description: "The legendary valley where Pandavas ascended to heaven. Views of Swargarohini peak."
  },
  {
    id: "hkd-6",
    name: "Return Sankri",
    altitude: 1950,
    dayNumber: 7,
    type: "village",
    x: 760,
    y: 420,
    description: "Descent back through forests, rivers and Osla village."
  }
];
const chopTungnathWaypoints = [
  {
    id: "ct-1",
    name: "Chopta Meadows",
    altitude: 2680,
    dayNumber: 1,
    type: "basecamp",
    x: 120,
    y: 380,
    description: "Mini Switzerland of India — stunning bugyals. Drive from Rishikesh 220 km."
  },
  {
    id: "ct-2",
    name: "Tungnath Temple",
    altitude: 3680,
    dayNumber: 2,
    type: "landmark",
    x: 360,
    y: 200,
    description: "World's highest Shiva temple (1000+ years old). One of the five Panch Kedar shrines."
  },
  {
    id: "ct-3",
    name: "Chandrashila Summit",
    altitude: 4e3,
    dayNumber: 2,
    type: "summit",
    x: 500,
    y: 130,
    description: "360° panorama: Nanda Devi, Trishul, Chaukhamba, Kedarnath. Epic sunrise destination."
  },
  {
    id: "ct-4",
    name: "Deoriatal Lake",
    altitude: 2438,
    dayNumber: 3,
    type: "landmark",
    x: 660,
    y: 310,
    description: "Emerald lake reflecting Chaukhamba peaks. Optional add-on from Sari village."
  }
];
const hamptaPassWaypoints = [
  {
    id: "hp-1",
    name: "Jobra / Manali",
    altitude: 2900,
    dayNumber: 1,
    type: "basecamp",
    x: 110,
    y: 390,
    description: "Starting point 20 km from Manali. Lush green Kullu Valley."
  },
  {
    id: "hp-2",
    name: "Chika Camp",
    altitude: 3100,
    dayNumber: 1,
    type: "camp",
    x: 250,
    y: 350,
    description: "Riverside campsite at 3,100m. Dense deodar forests and alpine meadows."
  },
  {
    id: "hp-3",
    name: "Balu Ka Ghera",
    altitude: 3720,
    dayNumber: 2,
    type: "camp",
    x: 400,
    y: 250,
    description: "River crossings, hidden waterfalls, open glacial moraines. Beautiful camp."
  },
  {
    id: "hp-4",
    name: "Hampta Pass",
    altitude: 4270,
    dayNumber: 3,
    type: "summit",
    x: 540,
    y: 140,
    description: "The dramatic crossover — green Kullu Valley behind, stark Lahaul desert ahead."
  },
  {
    id: "hp-5",
    name: "Shea Goru",
    altitude: 3700,
    dayNumber: 3,
    type: "camp",
    x: 660,
    y: 250,
    description: "First camp in the Lahaul valley. Barren, beautiful, otherworldly landscape."
  },
  {
    id: "hp-6",
    name: "Chandratal Lake",
    altitude: 4300,
    dayNumber: 4,
    type: "landmark",
    x: 760,
    y: 200,
    description: "Optional extension — Moon Lake at 4,300m, one of India's most stunning alpine lakes."
  }
];
const sarPassWaypoints = [
  {
    id: "sp-1",
    name: "Kasol / Grahan",
    altitude: 2380,
    dayNumber: 1,
    type: "basecamp",
    x: 100,
    y: 400,
    description: "Beautiful Parvati Valley village. Trek begins through dense pine-oak forests."
  },
  {
    id: "sp-2",
    name: "Mina Thatch",
    altitude: 2900,
    dayNumber: 2,
    type: "camp",
    x: 280,
    y: 330,
    description: "Alpine meadow camp. Open landscapes and first views of the high peaks."
  },
  {
    id: "sp-3",
    name: "Nagaru",
    altitude: 3550,
    dayNumber: 3,
    type: "camp",
    x: 450,
    y: 220,
    description: "Above the treeline. Snow patches visible. Starry nights at 3,550m."
  },
  {
    id: "sp-4",
    name: "Sar Pass",
    altitude: 4270,
    dayNumber: 4,
    type: "summit",
    x: 590,
    y: 130,
    description: "Stunning Sar Lake and the epic snow-sliding descent on the way down!"
  },
  {
    id: "sp-5",
    name: "Biskeri Thach",
    altitude: 3e3,
    dayNumber: 4,
    type: "camp",
    x: 700,
    y: 300,
    description: "Descent campsite through Pin Parvati range views."
  },
  {
    id: "sp-6",
    name: "Barsheni / Kasol",
    altitude: 1900,
    dayNumber: 5,
    type: "village",
    x: 790,
    y: 420,
    description: "Final descent back to civilization in Parvati Valley."
  }
];
const kedarnathWaypoints = [
  {
    id: "kdn-1",
    name: "Haridwar",
    altitude: 314,
    dayNumber: 1,
    type: "basecamp",
    x: 80,
    y: 430,
    description: "Gateway to Char Dham. Drive to Guptkashi (180 km)."
  },
  {
    id: "kdn-2",
    name: "Gaurikund",
    altitude: 1982,
    dayNumber: 2,
    type: "village",
    x: 250,
    y: 360,
    description: "Trek/Pony/Helicopter start point. Sacred hot spring of Goddess Gauri."
  },
  {
    id: "kdn-3",
    name: "Jungle Chatti",
    altitude: 2650,
    dayNumber: 2,
    type: "camp",
    x: 390,
    y: 280,
    description: "Rest stop with basic food stalls. 8 km from Gaurikund."
  },
  {
    id: "kdn-4",
    name: "Kedarnath Temple",
    altitude: 3583,
    dayNumber: 2,
    type: "summit",
    x: 580,
    y: 160,
    description: "Sacred Jyotirlinga of Lord Shiva. One of 12 most sacred shrines in India. Built by the Pandavas."
  },
  {
    id: "kdn-5",
    name: "Vasuki Tal",
    altitude: 4135,
    dayNumber: 3,
    type: "landmark",
    x: 700,
    y: 100,
    description: "Optional high-altitude glacial lake above Kedarnath. Breathtaking views of Kedar Dome."
  }
];
const charDhamWaypoints = [
  {
    id: "cd-1",
    name: "Yamunotri",
    altitude: 3291,
    dayNumber: 2,
    type: "summit",
    x: 100,
    y: 180,
    description: "Source of the Yamuna. Surya Kund hot spring. Goddess Yamuna's temple."
  },
  {
    id: "cd-2",
    name: "Gangotri",
    altitude: 3048,
    dayNumber: 4,
    type: "landmark",
    x: 280,
    y: 200,
    description: "Source of the Ganga. Bhagirathi River temple. Gaumukh glacier 18 km ahead."
  },
  {
    id: "cd-3",
    name: "Kedarnath",
    altitude: 3583,
    dayNumber: 7,
    type: "summit",
    x: 490,
    y: 150,
    description: "Lord Shiva's Jyotirlinga. Inner sanctum hump of Nandi bull."
  },
  {
    id: "cd-4",
    name: "Badrinath",
    altitude: 3133,
    dayNumber: 10,
    type: "landmark",
    x: 680,
    y: 200,
    description: "Lord Vishnu's abode. Alaknanda River. Tapt Kund hot spring."
  },
  {
    id: "cd-5",
    name: "Mana Village",
    altitude: 3219,
    dayNumber: 11,
    type: "village",
    x: 760,
    y: 250,
    description: "Last Indian village before Tibet border. Saraswati River source. Vyasa Cave."
  }
];
function WaypointIcon({
  type,
  size = 24
}) {
  if (type === "summit") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        role: "img",
        "aria-label": "Trail waypoint icon",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M12 2 L20 20 L12 16 L4 20 Z",
              fill: "#F4A623",
              stroke: "#C07000",
              strokeWidth: "1.2",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "11", y: "2", width: "2", height: "6", fill: "#F4A623" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "12", y: "3", width: "8", height: "3", fill: "#F4A623", rx: "1" })
        ]
      }
    );
  }
  if (type === "camp") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        role: "img",
        "aria-label": "Trail waypoint icon",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M2 18 L12 4 L22 18 Z",
              fill: "#2D4A2A",
              stroke: "#1A7A4C",
              strokeWidth: "1.2",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "9", y: "14", width: "6", height: "4", fill: "#FFF8E7", rx: "0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M9 14 Q12 11 15 14",
              fill: "none",
              stroke: "#1A7A4C",
              strokeWidth: "0.8"
            }
          )
        ]
      }
    );
  }
  if (type === "basecamp") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        role: "img",
        "aria-label": "Trail waypoint icon",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "10", width: "16", height: "10", fill: "#145C38", rx: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M2 12 L12 4 L22 12",
              fill: "none",
              stroke: "#145C38",
              strokeWidth: "2",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "15", width: "4", height: "5", fill: "#FFF8E7", rx: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "13", width: "3", height: "3", fill: "#A8E6C0", rx: "0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "15", y: "13", width: "3", height: "3", fill: "#A8E6C0", rx: "0.5" })
        ]
      }
    );
  }
  if (type === "village") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        role: "img",
        "aria-label": "Trail waypoint icon",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "5", y: "11", width: "14", height: "9", fill: "#5B9BD5", rx: "1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M3 13 L12 5 L21 13",
              fill: "none",
              stroke: "#5B9BD5",
              strokeWidth: "2",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "16", width: "4", height: "4", fill: "#FFF8E7", rx: "0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "6",
              y: "13",
              width: "3",
              height: "3",
              fill: "rgba(255,255,255,0.5)",
              rx: "0.3"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "15",
              y: "13",
              width: "3",
              height: "3",
              fill: "rgba(255,255,255,0.5)",
              rx: "0.3"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": "Trail waypoint icon",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "12",
            cy: "10",
            r: "5",
            fill: "#9B59B6",
            stroke: "#7D3C98",
            strokeWidth: "1.2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M12 15 L12 22",
            stroke: "#9B59B6",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "10", r: "2", fill: "#FFF8E7" })
      ]
    }
  );
}
const TYPE_COLORS = {
  summit: "#F4A623",
  camp: "#2D4A2A",
  basecamp: "#145C38",
  village: "#5B9BD5",
  landmark: "#9B59B6"
};
function MountainPeaks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M-20 200 L100 60 L170 130 L260 30 L340 100 L420 15 L510 85 L600 10 L680 75 L760 35 L840 90 L900 45 L980 100 L1050 55 L1150 115 L1250 50 L1350 90 L1440 60 L1440 200 Z",
        fill: "#2D4A2A",
        opacity: "0.18"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M50 200 L160 80 L230 140 L320 55 L410 115 L500 30 L590 95 L670 50 L750 110 L850 45 L950 105 L1040 60 L1140 120 L1240 70 L1350 130 L1440 80 L1440 200 Z",
        fill: "#2D4A2A",
        opacity: "0.12"
      }
    ),
    [
      { x: [80, 150, 220], snow: [90, 150, 210] },
      { x: [280, 370, 460], snow: [295, 370, 445] },
      { x: [460, 560, 660], snow: [475, 560, 645] },
      { x: [660, 740, 820], snow: [672, 740, 808] }
    ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "polygon",
        {
          points: `${m.x[0]},200 ${m.x[1]},50 ${m.x[2]},200`,
          fill: "#2D4A2A",
          opacity: "0.35"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "polygon",
        {
          points: `${m.snow[0]},50 ${m.x[1]},50 ${m.snow[2]},50 ${(m.snow[0] + m.snow[2]) / 2},80`,
          fill: "white",
          opacity: "0.65"
        }
      )
    ] }, `m-${m.x[0]}-${m.x[1]}-${m.x[2]}`))
  ] });
}
function ForestClusters() {
  const trees = [
    { x: 60, y: 370 },
    { x: 90, y: 385 },
    { x: 75, y: 395 },
    { x: 160, y: 360 },
    { x: 185, y: 375 },
    { x: 170, y: 390 },
    { x: 320, y: 370 },
    { x: 345, y: 385 },
    { x: 700, y: 380 },
    { x: 720, y: 395 },
    { x: 740, y: 370 },
    { x: 760, y: 385 },
    { x: 780, y: 398 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: trees.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${t.x},${t.y})`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "line",
      {
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "14",
        stroke: "#2D4A2A",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "-4", r: "7", fill: "#2D4A2A", opacity: "0.55" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "-2", r: "5", fill: "#1A7A4C", opacity: "0.45" })
  ] }, `tree-${t.x}-${t.y}`)) });
}
function River() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      d: "M 30 480 C 80 460 120 450 170 440 C 220 430 260 420 310 415 C 360 410 400 420 440 415 C 480 410 510 400 550 395",
      fill: "none",
      stroke: "#5B9BD5",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      opacity: "0.6"
    }
  );
}
function CompassRose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(740, 420)", "aria-label": "Compass rose", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx: "0",
        cy: "0",
        r: "28",
        fill: "#FFF8E7",
        stroke: "#C8B89A",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx: "0",
        cy: "0",
        r: "20",
        fill: "none",
        stroke: "#C8B89A",
        strokeWidth: "0.8"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 -22 L4 -8 L0 -4 L-4 -8 Z", fill: "#1A7A4C" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 22 L4 8 L0 4 L-4 8 Z", fill: "#C8B89A" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 0 L8 4 L4 0 L8 -4 Z", fill: "#C8B89A" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-22 0 L-8 4 L-4 0 L-8 -4 Z", fill: "#C8B89A" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "0", r: "3", fill: "#1A7A4C" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "text",
      {
        x: "0",
        y: "-25",
        textAnchor: "middle",
        fontSize: "8",
        fontWeight: "bold",
        fill: "#1A7A4C",
        fontFamily: "DM Sans, sans-serif",
        children: "N"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "text",
      {
        x: "0",
        y: "32",
        textAnchor: "middle",
        fontSize: "7",
        fill: "#9B8B72",
        fontFamily: "DM Sans, sans-serif",
        children: "S"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "text",
      {
        x: "28",
        y: "3",
        textAnchor: "start",
        fontSize: "7",
        fill: "#9B8B72",
        fontFamily: "DM Sans, sans-serif",
        children: "E"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "text",
      {
        x: "-28",
        y: "3",
        textAnchor: "end",
        fontSize: "7",
        fill: "#9B8B72",
        fontFamily: "DM Sans, sans-serif",
        children: "W"
      }
    )
  ] });
}
function ParchmentTexture({ id }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "feTurbulence",
        {
          type: "fractalNoise",
          baseFrequency: "0.65",
          numOctaves: "3",
          stitchTiles: "stitch"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("feColorMatrix", { type: "saturate", values: "0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("feBlend", { in: "SourceGraphic", mode: "multiply", result: "blend" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("feComponentTransfer", { in: "blend", children: /* @__PURE__ */ jsxRuntimeExports.jsx("feFuncA", { type: "linear", slope: "0.06" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in: "SourceGraphic", in2: "blend", operator: "atop" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("filter", { id: `${id}-shadow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "feDropShadow",
      {
        dx: "0",
        dy: "2",
        stdDeviation: "3",
        floodColor: "#2D4A2A",
        floodOpacity: "0.3"
      }
    ) })
  ] });
}
function IllustratedTrailMap({
  trekName,
  region,
  waypoints
}) {
  const [hoveredId, setHoveredId] = reactExports.useState(null);
  const [popupPos, setPopupPos] = reactExports.useState(
    null
  );
  const svgRef = reactExports.useRef(null);
  const sorted = [...waypoints].sort((a, b) => a.dayNumber - b.dayNumber);
  sorted.length > 1 ? sorted.map((wp, i) => `${i === 0 ? "M" : "L"} ${wp.x} ${wp.y}`).join(" ") : "";
  const smoothPath = (() => {
    if (sorted.length < 2) return "";
    let d = `M ${sorted[0].x} ${sorted[0].y}`;
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      const cpX = (prev.x + curr.x) / 2;
      const cpY = Math.min(prev.y, curr.y) - 20;
      d += ` Q ${cpX} ${cpY} ${curr.x} ${curr.y}`;
    }
    return d;
  })();
  const hoveredWp = hoveredId ? waypoints.find((w) => w.id === hoveredId) : null;
  const handleMarkerEnter = (wp, _e) => {
    setHoveredId(wp.id);
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const scaleX = rect.width / 800;
      const scaleY = rect.height / 500;
      const px = wp.x * scaleX;
      const py = wp.y * scaleY;
      setPopupPos({ x: px, y: py });
    }
  };
  const handleMarkerLeave = () => {
    setHoveredId(null);
    setPopupPos(null);
  };
  const filterId = `parchment-${trekName.replace(/\s+/g, "-").toLowerCase()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        border: "2px solid #C8B89A",
        boxShadow: "0 8px 32px rgba(45,74,42,0.15)"
      },
      "data-ocid": "trek_detail.trail_map",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            ref: svgRef,
            viewBox: "0 0 800 500",
            style: {
              width: "100%",
              height: "auto",
              display: "block",
              background: "#FFF8E7"
            },
            role: "img",
            "aria-label": `Illustrated trail map for ${trekName}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ParchmentTexture, { id: filterId }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "800",
                  height: "500",
                  fill: "#FFF8E7",
                  filter: `url(#${filterId})`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "8",
                  y: "8",
                  width: "784",
                  height: "484",
                  fill: "none",
                  stroke: "#C8B89A",
                  strokeWidth: "1.5",
                  rx: "4",
                  strokeDasharray: "6 3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "14",
                  y: "14",
                  width: "772",
                  height: "472",
                  fill: "none",
                  stroke: "#C8B89A",
                  strokeWidth: "0.5",
                  rx: "2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MountainPeaks, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(River, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ForestClusters, {}),
              smoothPath && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: smoothPath,
                  fill: "none",
                  stroke: "rgba(45,74,42,0.15)",
                  strokeWidth: "6",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              smoothPath && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: smoothPath,
                  fill: "none",
                  stroke: "#F4A623",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeDasharray: "8 4"
                }
              ),
              sorted.map((wp, i) => {
                if (i === 0 || i === sorted.length - 1) return null;
                const prev = sorted[i - 1];
                const midX = (prev.x + wp.x) / 2;
                const midY = Math.min(prev.y, wp.y) - 14;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "text",
                  {
                    x: midX,
                    y: midY,
                    textAnchor: "middle",
                    fontSize: "9",
                    fill: "#C07000",
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: "600",
                    opacity: "0.8",
                    children: [
                      "Day ",
                      wp.dayNumber
                    ]
                  },
                  `trail-label-${wp.id}`
                );
              }),
              sorted.map((wp) => {
                const isHovered = hoveredId === wp.id;
                const color = TYPE_COLORS[wp.type];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "g",
                  {
                    transform: `translate(${wp.x - 12}, ${wp.y - 12})`,
                    style: { cursor: "pointer" },
                    onMouseEnter: (e) => handleMarkerEnter(wp),
                    onMouseLeave: handleMarkerLeave,
                    "data-ocid": `trek_detail.trail_map.waypoint.${wp.id}`,
                    "aria-label": `${wp.name} — Day ${wp.dayNumber}, ${wp.altitude}m`,
                    tabIndex: 0,
                    onFocus: (e) => handleMarkerEnter(
                      wp
                    ),
                    onBlur: handleMarkerLeave,
                    children: [
                      isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "18", fill: color, opacity: "0.2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "14", r: "12", fill: "rgba(0,0,0,0.12)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: "12",
                          cy: "12",
                          r: "13",
                          fill: "#FFF8E7",
                          stroke: color,
                          strokeWidth: isHovered ? "2.5" : "1.5"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(WaypointIcon, { type: wp.type, size: 24 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "text",
                        {
                          x: "12",
                          y: "-6",
                          textAnchor: "middle",
                          fontSize: "8",
                          fill: "#1A7A4C",
                          fontFamily: "DM Sans, sans-serif",
                          fontWeight: "700",
                          children: [
                            "D",
                            wp.dayNumber
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "text",
                        {
                          x: "12",
                          y: "32",
                          textAnchor: "middle",
                          fontSize: "8",
                          fill: "#2D4A2A",
                          fontFamily: "DM Sans, sans-serif",
                          fontWeight: "600",
                          children: wp.name.length > 14 ? `${wp.name.substring(0, 13)}…` : wp.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "text",
                        {
                          x: "12",
                          y: "42",
                          textAnchor: "middle",
                          fontSize: "7",
                          fill: "#9B8B72",
                          fontFamily: "DM Sans, sans-serif",
                          children: [
                            wp.altitude,
                            "m"
                          ]
                        }
                      )
                    ]
                  },
                  wp.id
                );
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CompassRose, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "text",
                {
                  x: "400",
                  y: "482",
                  textAnchor: "middle",
                  fontSize: "13",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: "700",
                  fontStyle: "italic",
                  fill: "#9B8B72",
                  letterSpacing: "0.05em",
                  children: [
                    region,
                    " — ",
                    trekName
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(22, 400)", "aria-label": "Map legend", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: "0",
                    y: "0",
                    width: "100",
                    height: "80",
                    fill: "#FFF8E7",
                    stroke: "#C8B89A",
                    strokeWidth: "1",
                    rx: "4",
                    opacity: "0.9"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: "8",
                    y: "12",
                    fontSize: "7",
                    fontWeight: "700",
                    fill: "#2D4A2A",
                    fontFamily: "DM Sans, sans-serif",
                    style: { textTransform: "uppercase" },
                    children: "LEGEND"
                  }
                ),
                [
                  { type: "summit", label: "Summit" },
                  { type: "camp", label: "Camp" },
                  { type: "basecamp", label: "Base" },
                  { type: "village", label: "Village" },
                  { type: "landmark", label: "Landmark" }
                ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(8, ${18 + i * 12})`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "5", cy: "4", r: "4", fill: TYPE_COLORS[item.type] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "text",
                    {
                      x: "14",
                      y: "8",
                      fontSize: "7",
                      fill: "#4A4A4A",
                      fontFamily: "DM Sans, sans-serif",
                      children: item.label
                    }
                  )
                ] }, item.type))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: "translate(22, 24)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "text",
                {
                  fontSize: "9",
                  fontFamily: "DM Sans, sans-serif",
                  fill: "#9B8B72",
                  fontStyle: "italic",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "0", dy: "0", children: "Illustrated Trail Map" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: "0", dy: "12", fontSize: "7", children: "Not to scale — for reference only" })
                  ]
                }
              ) })
            ]
          }
        ),
        hoveredWp && popupPos && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            role: "tooltip",
            "aria-live": "polite",
            style: {
              position: "absolute",
              left: `${Math.min(Math.max(popupPos.x - 90, 8), 600)}px`,
              top: `${Math.max(popupPos.y - 130, 8)}px`,
              width: "200px",
              background: "#fff",
              border: "2px solid #1A7A4C",
              borderRadius: "10px",
              padding: "12px 14px",
              boxShadow: "0 8px 24px rgba(26,122,76,0.2)",
              zIndex: 10,
              pointerEvents: "none"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        style: {
                          background: TYPE_COLORS[hoveredWp.type],
                          color: "#fff",
                          borderRadius: "20px",
                          padding: "2px 10px",
                          fontSize: "10px",
                          fontFamily: "DM Sans, sans-serif",
                          fontWeight: 700
                        },
                        children: [
                          "Day ",
                          hoveredWp.dayNumber
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          fontSize: "10px",
                          fontFamily: "DM Sans, sans-serif",
                          color: "#6B7280",
                          textTransform: "capitalize"
                        },
                        children: hoveredWp.type
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#1A1A1A",
                    marginBottom: "4px",
                    lineHeight: 1.3
                  },
                  children: hoveredWp.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "11px",
                    color: "#1A7A4C",
                    fontWeight: 600,
                    marginBottom: "6px"
                  },
                  children: [
                    "↑ ",
                    hoveredWp.altitude.toLocaleString("en-IN"),
                    " m altitude"
                  ]
                }
              ),
              hoveredWp.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "11px",
                    color: "#4A4A4A",
                    lineHeight: 1.5,
                    margin: 0
                  },
                  children: hoveredWp.description
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "8px solid #1A7A4C"
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600",
  "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600",
  "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600",
  "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=600",
  "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600"
];
const STANDARD_FAQS = [
  {
    q: "What fitness level is required?",
    a: "Moderate fitness is sufficient. We recommend 4-6 weeks of regular cardio before the trek. No prior trekking experience is mandatory for easy/moderate treks."
  },
  {
    q: "What is the best time to do this trek?",
    a: "Each trek has an optimal season listed in the quick info. Avoid peak monsoon (July-August) for Himalayan treks unless stated otherwise."
  },
  {
    q: "Is altitude sickness a concern?",
    a: "For treks above 3,500m, altitude sickness is possible. Our guides carry emergency oxygen and first-aid kits. Acclimatization days are built into the itinerary."
  },
  {
    q: "What accommodation is provided?",
    a: "Quality camping tents with sleeping bags, foam mats, and common dining/kitchen tents. Village stays may be arranged at base camps."
  },
  {
    q: "What is the cancellation policy?",
    a: "30+ days before: 80% refund. 15-29 days: 50% refund. Less than 15 days: no refund. Travel insurance is strongly recommended."
  }
];
const SAMPLE_REVIEWS = [
  {
    name: "Priya Sharma",
    date: "November 2025",
    rating: 5,
    text: "Absolutely breathtaking experience! The guides were professional and the camp setup was top-notch. The sunrise from the summit left me speechless - will definitely book again.",
    avatar: "PS"
  },
  {
    name: "Arjun Mehta",
    date: "October 2025",
    rating: 5,
    text: "Perfect organization from start to finish. The route was challenging but manageable, and the team's knowledge of local history made every step more enriching.",
    avatar: "AM"
  },
  {
    name: "Neha Kapoor",
    date: "September 2025",
    rating: 4,
    text: "A truly memorable trek. Food was surprisingly good in the mountains! A couple of itinerary tweaks would have made it 5-star, but overall an incredible adventure.",
    avatar: "NK"
  }
];
const PACKING_LIST = [
  {
    category: "Clothing",
    items: [
      "Thermal base layers",
      "Fleece jacket",
      "Waterproof shell",
      "Trekking trousers",
      "Warm hat & gloves",
      "Wool socks (3 pairs)"
    ]
  },
  {
    category: "Footwear",
    items: ["Ankle trekking boots", "Camp sandals", "Gaiters (snow treks)"]
  },
  {
    category: "Gear",
    items: [
      "Trekking poles",
      "60L backpack",
      "Sleeping bag liner",
      "Headlamp + batteries"
    ]
  },
  {
    category: "Personal Care",
    items: [
      "Sunscreen SPF 50+",
      "Lip balm SPF",
      "Personal first-aid kit",
      "ORS packets"
    ]
  },
  {
    category: "Documents",
    items: [
      "Photo ID (original)",
      "Passport photos (2)",
      "Booking confirmation"
    ]
  }
];
function TabBtn({
  id,
  active,
  label,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "data-ocid": `trek_detail.tab.${id}`,
      onClick,
      style: {
        padding: "10px 20px",
        border: "none",
        borderBottom: active ? "3px solid #1A7A4C" : "3px solid transparent",
        background: "transparent",
        color: active ? "#1A7A4C" : "#4A4A4A",
        fontFamily: "var(--font-body)",
        fontWeight: active ? 700 : 500,
        fontSize: "14px",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "color 0.2s, border-color 0.2s"
      },
      children: label
    }
  );
}
function AccordionItem({
  title,
  children,
  defaultOpen = false,
  ocid
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        border: "1px solid #E8F5EE",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "10px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": ocid,
            onClick: () => setOpen((p) => !p),
            "aria-expanded": open,
            style: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              background: open ? "#E8F5EE" : "#fff",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.2s"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#1A1A1A",
                    flex: 1,
                    minWidth: 0
                  },
                  children: title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#1A7A4C",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  style: {
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                    flexShrink: 0,
                    marginLeft: "12px"
                  },
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              padding: "16px 20px",
              background: "#fff",
              borderTop: "1px solid #E8F5EE"
            },
            children
          }
        )
      ]
    }
  );
}
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "inline-flex", gap: "2px" }, children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: s <= rating ? "#F4A623" : "none",
      stroke: "#F4A623",
      strokeWidth: "1.5",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    },
    s
  )) });
}
function OverviewTab({ trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "28px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          lineHeight: 1.8,
          color: "#4A4A4A",
          margin: 0
        },
        children: [
          trek.shortDescription,
          " This iconic Himalayan adventure takes you through ancient forests, alpine meadows, and dramatic mountain landscapes. With expert-certified guides, Global Trek ensures your safety and enriches every step with local knowledge, mythology, and natural history."
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#E8F5EE",
          borderRadius: "12px",
          padding: "24px",
          borderLeft: "4px solid #1A7A4C"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 700,
                color: "#145C38",
                marginBottom: "16px",
                marginTop: 0
              },
              children: "Trek Highlights"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "ul",
            {
              style: {
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              },
              children: trek.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#1A1A1A",
                    lineHeight: 1.6
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          width: "20px",
                          height: "20px",
                          background: "#1A7A4C",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "1px"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            width: "10",
                            height: "10",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" })
                          }
                        )
                      }
                    ),
                    h
                  ]
                },
                h
              ))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "16px",
            marginTop: 0
          },
          children: "Quick Info"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            border: "1px solid #E8F5EE",
            borderRadius: "12px",
            overflow: "hidden"
          },
          children: [
            ["Duration", trek.durationLabel],
            [
              "Distance",
              trek.trekDistanceKm ? `${trek.trekDistanceKm} km` : "Varies"
            ],
            [
              "Max Altitude",
              `${trek.maxAltitudeM}m (${trek.maxAltitudeFt} ft)`
            ],
            ["Start Point", trek.startPoint],
            ["End Point", trek.endPoint],
            ["Trek Grade", trek.difficulty],
            ["Best Season", trek.bestSeason],
            ["State", trek.state],
            ...trek.nearestRailway ? [["Nearest Railway", trek.nearestRailway]] : [],
            ...trek.permits ? [["Permits", trek.permits]] : []
          ].map(([lbl, val], i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                borderBottom: i < arr.length - 1 ? "1px solid #E8F5EE" : "none",
                background: i % 2 === 0 ? "#F8FAF9" : "#fff"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      width: "160px",
                      flexShrink: 0,
                      padding: "12px 16px",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#1A7A4C",
                      borderRight: "1px solid #E8F5EE"
                    },
                    children: lbl
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      padding: "12px 16px",
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "#1A1A1A"
                    },
                    children: val
                  }
                )
              ]
            },
            lbl
          ))
        }
      )
    ] })
  ] });
}
function ItineraryTab({ trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "#6B7280",
          marginBottom: "20px",
          marginTop: 0
        },
        children: [
          trek.durationLabel,
          " • ",
          trek.itinerary.length,
          " days detailed itinerary"
        ]
      }
    ),
    trek.itinerary.map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItem,
      {
        defaultOpen: i === 0,
        ocid: `trek_detail.itinerary.day.${day.day}`,
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                width: "32px",
                height: "32px",
                background: "#1A7A4C",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: 700,
                flexShrink: 0,
                fontFamily: "var(--font-body)"
              },
              children: day.day
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#1A1A1A"
                },
                children: day.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  gap: "8px",
                  marginTop: "4px",
                  flexWrap: "wrap"
                },
                children: [
                  day.altitude && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontSize: "11px",
                        background: "#E8F5EE",
                        color: "#1A7A4C",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600
                      },
                      children: day.altitude
                    }
                  ),
                  day.distance && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontSize: "11px",
                        background: "#FFF8EC",
                        color: "#C07000",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600
                      },
                      children: day.distance
                    }
                  ),
                  day.meals && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontSize: "11px",
                        background: "#F0F9FF",
                        color: "#0369A1",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600
                      },
                      children: day.meals
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#4A4A4A",
              margin: 0
            },
            children: day.description
          }
        )
      },
      day.day
    ))
  ] });
}
function InclusionsTab({ trek }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "32px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                background: "#F0FBF4",
                borderRadius: "12px",
                padding: "24px",
                borderTop: "4px solid #1A7A4C"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#145C38",
                      marginBottom: "16px",
                      marginTop: 0
                    },
                    children: "Included"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "ul",
                  {
                    style: {
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px"
                    },
                    children: trek.inclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "#1A1A1A",
                          lineHeight: 1.5
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "svg",
                            {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "#1A7A4C",
                              strokeWidth: "2.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              style: { flexShrink: 0, marginTop: "2px" },
                              "aria-hidden": "true",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" })
                            }
                          ),
                          item
                        ]
                      },
                      item
                    ))
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                background: "#FFF5F5",
                borderRadius: "12px",
                padding: "24px",
                borderTop: "4px solid #E74C3C"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#C0392B",
                      marginBottom: "16px",
                      marginTop: 0
                    },
                    children: "Not Included"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "ul",
                  {
                    style: {
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px"
                    },
                    children: trek.exclusions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "#1A1A1A",
                          lineHeight: 1.5
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "svg",
                            {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "#E74C3C",
                              strokeWidth: "2.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              style: { flexShrink: 0, marginTop: "2px" },
                              "aria-hidden": "true",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                              ]
                            }
                          ),
                          item
                        ]
                      },
                      item
                    ))
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          style: {
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "20px",
            marginTop: 0
          },
          children: "What to Carry - Packing List"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px"
          },
          children: PACKING_LIST.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                background: "#F8FAF9",
                borderRadius: "10px",
                padding: "18px",
                border: "1px solid #E8F5EE"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h4",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "12px",
                      color: "#1A7A4C",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "10px",
                      marginTop: 0
                    },
                    children: cat.category
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "ul",
                  {
                    style: {
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px"
                    },
                    children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "li",
                      {
                        style: {
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "#4A4A4A",
                          paddingLeft: "10px",
                          borderLeft: "2px solid #2ECC71",
                          lineHeight: 1.5
                        },
                        children: item
                      },
                      item
                    ))
                  }
                )
              ]
            },
            cat.category
          ))
        }
      )
    ] })
  ] });
}
function GalleryTab({ trekName }) {
  const [lightbox, setLightbox] = reactExports.useState(null);
  const closeLightbox = () => setLightbox(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { columns: "3 200px", columnGap: "12px" }, children: GALLERY_IMAGES.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        style: {
          marginBottom: "12px",
          breakInside: "avoid",
          borderRadius: "10px",
          overflow: "hidden",
          cursor: "zoom-in",
          transition: "transform 0.25s",
          border: "none",
          padding: 0,
          background: "transparent",
          display: "block",
          width: "100%"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "scale(1.02)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "scale(1)";
        },
        onClick: () => setLightbox(src),
        "data-ocid": `trek_detail.gallery.item.${i + 1}`,
        "aria-label": `View ${trekName} landscape ${i + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt: `${trekName} landscape ${i + 1}`,
            style: { width: "100%", display: "block" },
            loading: "lazy"
          }
        )
      },
      src
    )) }),
    lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "dialog",
      {
        open: true,
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.92)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          padding: "20px",
          border: "none",
          maxWidth: "100vw",
          maxHeight: "100vh",
          width: "100vw",
          height: "100vh",
          margin: 0
        },
        "data-ocid": "trek_detail.lightbox",
        "aria-label": "Photo lightbox",
        onClick: closeLightbox,
        onKeyDown: (e) => {
          if (e.key === "Escape") closeLightbox();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "trek_detail.lightbox.close_button",
              onClick: (e) => {
                e.stopPropagation();
                closeLightbox();
              },
              style: {
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                cursor: "pointer",
                color: "#fff",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              "aria-label": "Close lightbox",
              children: "X"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: lightbox.replace("w=600", "w=1200"),
              alt: "Himalayan trek landscape full view",
              style: {
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: "12px",
                objectFit: "contain"
              },
              onClick: (e) => e.stopPropagation(),
              onKeyDown: (e) => e.stopPropagation()
            }
          )
        ]
      }
    )
  ] });
}
function ReviewsTab({ trek }) {
  const breakdown = [
    { stars: 5, pct: 85 },
    { stars: 4, pct: 10 },
    { stars: 3, pct: 5 },
    { stars: 2, pct: 0 },
    { stars: 1, pct: 0 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "32px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "#1A7A4C",
                  lineHeight: 1
                },
                children: trek.rating
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: Math.round(trek.rating) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "#6B7280",
                  marginTop: "6px"
                },
                children: [
                  trek.reviewCount,
                  " reviews"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, minWidth: "200px" }, children: breakdown.map(({ stars, pct }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "#4A4A4A",
                      width: "36px",
                      flexShrink: 0
                    },
                    children: [
                      stars,
                      "★"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      flex: 1,
                      height: "8px",
                      background: "#E8F5EE",
                      borderRadius: "4px",
                      overflow: "hidden"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          width: `${pct}%`,
                          height: "100%",
                          background: pct > 50 ? "#1A7A4C" : pct > 20 ? "#2ECC71" : "#E8F5EE",
                          borderRadius: "4px"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "#6B7280",
                      width: "34px",
                      flexShrink: 0,
                      textAlign: "right"
                    },
                    children: [
                      pct,
                      "%"
                    ]
                  }
                )
              ]
            },
            stars
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: SAMPLE_REVIEWS.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `trek_detail.reviews.item.${i + 1}`,
        style: {
          background: "#fff",
          border: "1px solid #E8F5EE",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(26,122,76,0.06)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      width: "44px",
                      height: "44px",
                      background: "#1A7A4C",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "14px",
                      flexShrink: 0
                    },
                    "aria-hidden": "true",
                    children: r.avatar
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#1A1A1A"
                      },
                      children: r.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "2px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: r.rating }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "12px",
                              color: "#6B7280"
                            },
                            children: r.date
                          }
                        )
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#4A4A4A",
                margin: 0
              },
              children: r.text
            }
          )
        ]
      },
      r.name
    )) })
  ] });
}
function FaqTab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: STANDARD_FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionItem,
    {
      ocid: `trek_detail.faq.item.${i + 1}`,
      title: faq.q,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            lineHeight: 1.7,
            color: "#4A4A4A",
            margin: 0
          },
          children: faq.a
        }
      )
    },
    faq.q
  )) });
}
function BookingSidebar({ trek }) {
  const waMsg = encodeURIComponent(
    `Hi Global Trek! I am interested in booking the ${trek.name}. Please share details.`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        background: "#fff",
        borderRadius: "14px",
        borderTop: "4px solid #1A7A4C",
        boxShadow: "0 4px 20px rgba(26,122,76,0.14)",
        padding: "24px",
        position: "sticky",
        top: "88px"
      },
      "data-ocid": "trek_detail.booking_sidebar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "#6B7280",
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              },
              children: "Starting from"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 700,
                color: "#1A7A4C",
                lineHeight: 1.2
              },
              children: [
                "₹",
                trek.priceFrom.toLocaleString("en-IN"),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      fontSize: "14px",
                      fontFamily: "var(--font-body)",
                      color: "#6B7280",
                      fontWeight: 400
                    },
                    children: [
                      " ",
                      "/person"
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "#E8F5EE",
              borderRadius: "8px",
              padding: "12px 14px",
              marginBottom: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      color: "#6B7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em"
                    },
                    children: "Next Batch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#1A1A1A"
                    },
                    children: "Jun 15, 2026"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    background: "#F4A623",
                    color: "#fff",
                    borderRadius: "50px",
                    padding: "4px 10px",
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 700
                  },
                  children: "8 seats left!"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/booking/${trek.slug}`,
            "data-ocid": "trek_detail.booking_sidebar.primary_button",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "14px",
              background: "#F4A623",
              color: "#fff",
              borderRadius: "10px",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              marginBottom: "10px",
              boxSizing: "border-box"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.background = "#E0941A";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.background = "#F4A623";
            },
            children: "Book Now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "trek_detail.booking_sidebar.secondary_button",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "12px",
              background: "transparent",
              border: "2px solid #1A7A4C",
              borderRadius: "10px",
              color: "#1A7A4C",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              marginBottom: "10px"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.background = "#E8F5EE";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.background = "transparent";
            },
            children: "Send Inquiry"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "trek_detail.booking_sidebar.download_button",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "10px",
              background: "transparent",
              border: "none",
              color: "#1A7A4C",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "rgba(26,122,76,0.4)",
              marginBottom: "10px"
            },
            children: "Download Itinerary PDF"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `https://wa.me/918882306635?text=${waMsg}`,
            target: "_blank",
            rel: "noopener noreferrer",
            "data-ocid": "trek_detail.booking_sidebar.whatsapp_button",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "10px",
              background: "#25D366",
              borderRadius: "10px",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              marginBottom: "18px",
              boxSizing: "border-box"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.background = "#1EBE57";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.background = "#25D366";
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
                }
              ),
              "WhatsApp Us"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-around",
              borderTop: "1px solid #E8F5EE",
              paddingTop: "16px"
            },
            children: ["Certified", "Safe", "Insured"].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  textAlign: "center",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  color: "#1A7A4C",
                  fontWeight: 700
                },
                children: badge
              },
              badge
            ))
          }
        )
      ]
    }
  );
}
function MobileBottomBar({ trek }) {
  const waMsg = encodeURIComponent(
    `Hi Global Trek! I am interested in booking the ${trek.name}.`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "trek-mobile-bar",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        borderTop: "1px solid #E8F5EE",
        display: "flex",
        gap: "8px",
        padding: "10px 12px",
        zIndex: 100,
        boxShadow: "0 -4px 16px rgba(26,122,76,0.12)"
      },
      "data-ocid": "trek_detail.mobile_bar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/booking/${trek.slug}`,
            "data-ocid": "trek_detail.mobile_bar.primary_button",
            style: {
              flex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 8px",
              background: "#F4A623",
              borderRadius: "10px",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none"
            },
            children: "Book Now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://wa.me/918882306635?text=${waMsg}`,
            target: "_blank",
            rel: "noopener noreferrer",
            "data-ocid": "trek_detail.mobile_bar.whatsapp_button",
            style: {
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 8px",
              background: "#25D366",
              borderRadius: "10px",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "13px",
              textDecoration: "none"
            },
            children: "WhatsApp"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:+918882306635",
            "data-ocid": "trek_detail.mobile_bar.call_button",
            style: {
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 8px",
              background: "#1A7A4C",
              borderRadius: "10px",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "13px",
              textDecoration: "none"
            },
            children: "Call"
          }
        )
      ]
    }
  );
}
function TrekDetailPage() {
  const params = useParams({ strict: false });
  const slug = params.slug ?? "";
  const trek = getTrekBySlug(slug);
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  if (!trek) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          paddingTop: "var(--nav-height, 72px)",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          background: "#fff"
        },
        "data-ocid": "trek_detail.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "64px" }, children: "🏔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                color: "#1A1A1A",
                fontStyle: "italic",
                margin: 0
              },
              children: "Trek Not Found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "#6B7280",
                margin: 0
              },
              children: "The trek you are looking for does not exist in our collection yet."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/treks",
              "data-ocid": "trek_detail.empty_state.link",
              style: {
                padding: "12px 28px",
                background: "#1A7A4C",
                color: "#fff",
                borderRadius: "8px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "15px"
              },
              children: "Explore All Treks"
            }
          )
        ]
      }
    );
  }
  const stateSlug = trek.state === "Uttarakhand" ? "uttarakhand" : "himachal-pradesh";
  const similarTreks = getTreksByState(trek.state).filter((t) => t.slug !== trek.slug).slice(0, 3);
  const WAYPOINT_MAP = {
    kedarkantha: kedarkanthaWaypoints,
    "har-ki-dun": harKiDunWaypoints,
    "chopta-tungnath": chopTungnathWaypoints,
    "hampta-pass": hamptaPassWaypoints,
    "sar-pass": sarPassWaypoints,
    kedarnath: kedarnathWaypoints,
    "char-dham": charDhamWaypoints
  };
  const mapWaypoints = WAYPOINT_MAP[trek.slug] ?? kedarkanthaWaypoints;
  const TABS = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "inclusions", label: "Inclusions" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "map", label: "Trail Map" },
    { id: "faq", label: "FAQ" }
  ];
  const trekBreadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Treks", href: "/treks" },
    { label: trek.state, href: `/treks/${stateSlug}` },
    { label: trek.name, href: `/treks/${stateSlug}/${trek.slug}` }
  ];
  const trekHeroImages = [
    GALLERY_IMAGES[0],
    GALLERY_IMAGES[3],
    GALLERY_IMAGES[6]
  ];
  const trekStats = [
    {
      icon: "📍",
      label: "Max Altitude",
      value: `${trek.maxAltitudeM.toLocaleString()}m / ${trek.maxAltitudeFt.toLocaleString()} ft`
    },
    { icon: "⏱", label: "Duration", value: trek.durationLabel },
    { icon: "🥾", label: "Difficulty", value: trek.difficulty },
    {
      icon: "📅",
      label: "Best Season",
      value: trek.bestSeason.split(";")[0].split(",")[0].trim()
    },
    {
      icon: "💰",
      label: "Starting From",
      value: `₹${trek.priceFrom.toLocaleString("en-IN")}`
    },
    {
      icon: "⭐",
      label: "Rating",
      value: `${trek.rating} (${trek.reviewCount} reviews)`
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        background: "#fff",
        minHeight: "100vh"
      },
      "data-ocid": "trek_detail.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FloatingParallaxHero,
          {
            title: trek.name,
            subtitle: `${trek.district}, ${trek.state}`,
            images: trekHeroImages,
            stats: trekStats,
            breadcrumbs: trekBreadcrumbs,
            onDownloadPDF: () => window.print()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "trek_detail.content",
            style: {
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "40px 24px 80px",
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) 340px",
              gap: "40px",
              alignItems: "start"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      display: "flex",
                      borderBottom: "2px solid #E8F5EE",
                      marginBottom: "28px",
                      overflowX: "auto"
                    },
                    "data-ocid": "trek_detail.tabs",
                    children: TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabBtn,
                      {
                        id: tab.id,
                        active: activeTab === tab.id,
                        label: tab.label,
                        onClick: () => setActiveTab(tab.id)
                      },
                      tab.id
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, { trek }),
                  activeTab === "itinerary" && /* @__PURE__ */ jsxRuntimeExports.jsx(ItineraryTab, { trek }),
                  activeTab === "inclusions" && /* @__PURE__ */ jsxRuntimeExports.jsx(InclusionsTab, { trek }),
                  activeTab === "gallery" && /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryTab, { trekName: trek.name }),
                  activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsTab, { trek }),
                  activeTab === "map" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "h3",
                        {
                          style: {
                            fontFamily: "var(--font-display)",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#1A1A1A",
                            marginBottom: "6px",
                            marginTop: 0
                          },
                          children: [
                            trek.name,
                            " — Trail Map"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            color: "#6B7280",
                            margin: 0
                          },
                          children: "Hover or tap a waypoint to explore day-by-day details along the trail."
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IllustratedTrailMap,
                      {
                        trekName: trek.name,
                        region: `${trek.district}, ${trek.state}`,
                        waypoints: mapWaypoints
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          marginTop: "20px",
                          background: "#F8FAF9",
                          borderRadius: "10px",
                          padding: "16px 20px",
                          border: "1px solid #E8F5EE"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              style: {
                                fontFamily: "var(--font-body)",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#1A7A4C",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                marginBottom: "12px"
                              },
                              children: "Altitude Profile"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              style: {
                                display: "flex",
                                gap: "4px",
                                alignItems: "flex-end",
                                height: "70px"
                              },
                              children: [...mapWaypoints].sort((a, b) => a.dayNumber - b.dayNumber).map((wp) => {
                                const maxAlt = Math.max(
                                  ...mapWaypoints.map((w) => w.altitude)
                                );
                                const minAlt = Math.min(
                                  ...mapWaypoints.map((w) => w.altitude)
                                );
                                const range = maxAlt - minAlt || 1;
                                const barH = Math.round((wp.altitude - minAlt) / range * 50) + 10;
                                const barColor = wp.type === "summit" ? "#F4A623" : wp.type === "basecamp" || wp.type === "village" ? "#5B9BD5" : "#1A7A4C";
                                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      flex: 1
                                    },
                                    title: `${wp.name}: ${wp.altitude}m`,
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                        "div",
                                        {
                                          style: {
                                            fontFamily: "var(--font-body)",
                                            fontSize: "8px",
                                            color: "#9B8B72",
                                            marginBottom: "2px",
                                            whiteSpace: "nowrap"
                                          },
                                          children: [
                                            wp.altitude,
                                            "m"
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "div",
                                        {
                                          style: {
                                            width: "100%",
                                            height: `${barH}px`,
                                            background: barColor,
                                            borderRadius: "3px 3px 0 0",
                                            opacity: 0.75
                                          }
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                        "div",
                                        {
                                          style: {
                                            fontFamily: "var(--font-body)",
                                            fontSize: "7px",
                                            color: "#6B7280",
                                            textAlign: "center",
                                            marginTop: "3px",
                                            width: "100%",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                          },
                                          children: [
                                            "D",
                                            wp.dayNumber
                                          ]
                                        }
                                      )
                                    ]
                                  },
                                  wp.id
                                );
                              })
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  activeTab === "faq" && /* @__PURE__ */ jsxRuntimeExports.jsx(FaqTab, {})
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "trek_detail.sidebar_col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingSidebar, { trek }) })
            ]
          }
        ),
        similarTreks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              background: "#F8FAF9",
              borderTop: "1px solid #E8F5EE",
              padding: "48px 24px"
            },
            "data-ocid": "trek_detail.similar_treks",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "24px",
                    marginTop: 0
                  },
                  children: "You Might Also Like"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "24px"
                  },
                  children: similarTreks.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TrekCard, { trek: t, index: i }, t.slug))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomBar, { trek }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media (min-width: 1024px) { .trek-mobile-bar { display: none !important; } }
        @media (max-width: 1023px) {
          [data-ocid="trek_detail.content"] { grid-template-columns: 1fr !important; }
          [data-ocid="trek_detail.sidebar_col"] { display: none !important; }
          [data-ocid="trek_detail.page"] { padding-bottom: 80px; }
        }
        [data-ocid="trek_detail.tabs"] { scrollbar-width: none; }
        [data-ocid="trek_detail.tabs"]::-webkit-scrollbar { display: none; }
      ` })
      ]
    }
  );
}
export {
  TrekDetailPage
};
