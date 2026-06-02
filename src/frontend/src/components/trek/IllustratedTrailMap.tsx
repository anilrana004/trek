import { useRef, useState } from "react";

export interface TrekWaypoint {
  id: string;
  name: string;
  altitude: number;
  dayNumber: number;
  type: "basecamp" | "camp" | "summit" | "landmark" | "village";
  x: number;
  y: number;
  description?: string;
}

export interface IllustratedTrailMapProps {
  trekName: string;
  region: string;
  waypoints: TrekWaypoint[];
}

// ---------- Waypoint preset exports ----------

export const kedarkanthaWaypoints: TrekWaypoint[] = [
  {
    id: "kk-1",
    name: "Sankri Village",
    altitude: 1950,
    dayNumber: 1,
    type: "basecamp",
    x: 120,
    y: 400,
    description:
      "Traditional Garhwali base village with hotels and homestays at 1,950m.",
  },
  {
    id: "kk-2",
    name: "Juda Ka Talab",
    altitude: 2950,
    dayNumber: 2,
    type: "camp",
    x: 280,
    y: 320,
    description:
      "Enchanting lake that freezes in winter. Brilliant campsite surrounded by deodar forests.",
  },
  {
    id: "kk-3",
    name: "Kedarkantha Base",
    altitude: 3430,
    dayNumber: 3,
    type: "camp",
    x: 450,
    y: 230,
    description: "Open meadow campsite with panoramic ridge views at 3,430m.",
  },
  {
    id: "kk-4",
    name: "Kedarkantha Summit",
    altitude: 3810,
    dayNumber: 4,
    type: "summit",
    x: 610,
    y: 130,
    description:
      "360° panorama: Swargarohini, Bandarpunch, Kalanag, Black Peak — India's best winter summit.",
  },
  {
    id: "kk-5",
    name: "Descent to Sankri",
    altitude: 1950,
    dayNumber: 5,
    type: "village",
    x: 750,
    y: 400,
    description:
      "Gentle descent back through snow-laden deodar forests to Sankri.",
  },
];

export const harKiDunWaypoints: TrekWaypoint[] = [
  {
    id: "hkd-1",
    name: "Sankri",
    altitude: 1950,
    dayNumber: 1,
    type: "basecamp",
    x: 100,
    y: 420,
    description: "Drive from Dehradun (210 km). Overnight at Sankri village.",
  },
  {
    id: "hkd-2",
    name: "Seema Camp",
    altitude: 2600,
    dayNumber: 2,
    type: "camp",
    x: 230,
    y: 350,
    description: "Trek from Taluka through dense oak-rhododendron forests.",
  },
  {
    id: "hkd-3",
    name: "Osla Village",
    altitude: 2565,
    dayNumber: 3,
    type: "village",
    x: 360,
    y: 340,
    description:
      "Ancient village with the famous Duryodhana Temple — a mythological mystery.",
  },
  {
    id: "hkd-4",
    name: "Har Ki Dun Base",
    altitude: 3200,
    dayNumber: 4,
    type: "camp",
    x: 510,
    y: 240,
    description: "Approach through alpine meadows toward the 'Valley of Gods'.",
  },
  {
    id: "hkd-5",
    name: "Har Ki Dun Valley",
    altitude: 3566,
    dayNumber: 5,
    type: "summit",
    x: 660,
    y: 160,
    description:
      "The legendary valley where Pandavas ascended to heaven. Views of Swargarohini peak.",
  },
  {
    id: "hkd-6",
    name: "Return Sankri",
    altitude: 1950,
    dayNumber: 7,
    type: "village",
    x: 760,
    y: 420,
    description: "Descent back through forests, rivers and Osla village.",
  },
];

export const chopTungnathWaypoints: TrekWaypoint[] = [
  {
    id: "ct-1",
    name: "Chopta Meadows",
    altitude: 2680,
    dayNumber: 1,
    type: "basecamp",
    x: 120,
    y: 380,
    description:
      "Mini Switzerland of India — stunning bugyals. Drive from Rishikesh 220 km.",
  },
  {
    id: "ct-2",
    name: "Tungnath Temple",
    altitude: 3680,
    dayNumber: 2,
    type: "landmark",
    x: 360,
    y: 200,
    description:
      "World's highest Shiva temple (1000+ years old). One of the five Panch Kedar shrines.",
  },
  {
    id: "ct-3",
    name: "Chandrashila Summit",
    altitude: 4000,
    dayNumber: 2,
    type: "summit",
    x: 500,
    y: 130,
    description:
      "360° panorama: Nanda Devi, Trishul, Chaukhamba, Kedarnath. Epic sunrise destination.",
  },
  {
    id: "ct-4",
    name: "Deoriatal Lake",
    altitude: 2438,
    dayNumber: 3,
    type: "landmark",
    x: 660,
    y: 310,
    description:
      "Emerald lake reflecting Chaukhamba peaks. Optional add-on from Sari village.",
  },
];

export const hamptaPassWaypoints: TrekWaypoint[] = [
  {
    id: "hp-1",
    name: "Jobra / Manali",
    altitude: 2900,
    dayNumber: 1,
    type: "basecamp",
    x: 110,
    y: 390,
    description: "Starting point 20 km from Manali. Lush green Kullu Valley.",
  },
  {
    id: "hp-2",
    name: "Chika Camp",
    altitude: 3100,
    dayNumber: 1,
    type: "camp",
    x: 250,
    y: 350,
    description:
      "Riverside campsite at 3,100m. Dense deodar forests and alpine meadows.",
  },
  {
    id: "hp-3",
    name: "Balu Ka Ghera",
    altitude: 3720,
    dayNumber: 2,
    type: "camp",
    x: 400,
    y: 250,
    description:
      "River crossings, hidden waterfalls, open glacial moraines. Beautiful camp.",
  },
  {
    id: "hp-4",
    name: "Hampta Pass",
    altitude: 4270,
    dayNumber: 3,
    type: "summit",
    x: 540,
    y: 140,
    description:
      "The dramatic crossover — green Kullu Valley behind, stark Lahaul desert ahead.",
  },
  {
    id: "hp-5",
    name: "Shea Goru",
    altitude: 3700,
    dayNumber: 3,
    type: "camp",
    x: 660,
    y: 250,
    description:
      "First camp in the Lahaul valley. Barren, beautiful, otherworldly landscape.",
  },
  {
    id: "hp-6",
    name: "Chandratal Lake",
    altitude: 4300,
    dayNumber: 4,
    type: "landmark",
    x: 760,
    y: 200,
    description:
      "Optional extension — Moon Lake at 4,300m, one of India's most stunning alpine lakes.",
  },
];

export const sarPassWaypoints: TrekWaypoint[] = [
  {
    id: "sp-1",
    name: "Kasol / Grahan",
    altitude: 2380,
    dayNumber: 1,
    type: "basecamp",
    x: 100,
    y: 400,
    description:
      "Beautiful Parvati Valley village. Trek begins through dense pine-oak forests.",
  },
  {
    id: "sp-2",
    name: "Mina Thatch",
    altitude: 2900,
    dayNumber: 2,
    type: "camp",
    x: 280,
    y: 330,
    description:
      "Alpine meadow camp. Open landscapes and first views of the high peaks.",
  },
  {
    id: "sp-3",
    name: "Nagaru",
    altitude: 3550,
    dayNumber: 3,
    type: "camp",
    x: 450,
    y: 220,
    description:
      "Above the treeline. Snow patches visible. Starry nights at 3,550m.",
  },
  {
    id: "sp-4",
    name: "Sar Pass",
    altitude: 4270,
    dayNumber: 4,
    type: "summit",
    x: 590,
    y: 130,
    description:
      "Stunning Sar Lake and the epic snow-sliding descent on the way down!",
  },
  {
    id: "sp-5",
    name: "Biskeri Thach",
    altitude: 3000,
    dayNumber: 4,
    type: "camp",
    x: 700,
    y: 300,
    description: "Descent campsite through Pin Parvati range views.",
  },
  {
    id: "sp-6",
    name: "Barsheni / Kasol",
    altitude: 1900,
    dayNumber: 5,
    type: "village",
    x: 790,
    y: 420,
    description: "Final descent back to civilization in Parvati Valley.",
  },
];

export const kedarnathWaypoints: TrekWaypoint[] = [
  {
    id: "kdn-1",
    name: "Haridwar",
    altitude: 314,
    dayNumber: 1,
    type: "basecamp",
    x: 80,
    y: 430,
    description: "Gateway to Char Dham. Drive to Guptkashi (180 km).",
  },
  {
    id: "kdn-2",
    name: "Gaurikund",
    altitude: 1982,
    dayNumber: 2,
    type: "village",
    x: 250,
    y: 360,
    description:
      "Trek/Pony/Helicopter start point. Sacred hot spring of Goddess Gauri.",
  },
  {
    id: "kdn-3",
    name: "Jungle Chatti",
    altitude: 2650,
    dayNumber: 2,
    type: "camp",
    x: 390,
    y: 280,
    description: "Rest stop with basic food stalls. 8 km from Gaurikund.",
  },
  {
    id: "kdn-4",
    name: "Kedarnath Temple",
    altitude: 3583,
    dayNumber: 2,
    type: "summit",
    x: 580,
    y: 160,
    description:
      "Sacred Jyotirlinga of Lord Shiva. One of 12 most sacred shrines in India. Built by the Pandavas.",
  },
  {
    id: "kdn-5",
    name: "Vasuki Tal",
    altitude: 4135,
    dayNumber: 3,
    type: "landmark",
    x: 700,
    y: 100,
    description:
      "Optional high-altitude glacial lake above Kedarnath. Breathtaking views of Kedar Dome.",
  },
];

export const charDhamWaypoints: TrekWaypoint[] = [
  {
    id: "cd-1",
    name: "Yamunotri",
    altitude: 3291,
    dayNumber: 2,
    type: "summit",
    x: 100,
    y: 180,
    description:
      "Source of the Yamuna. Surya Kund hot spring. Goddess Yamuna's temple.",
  },
  {
    id: "cd-2",
    name: "Gangotri",
    altitude: 3048,
    dayNumber: 4,
    type: "landmark",
    x: 280,
    y: 200,
    description:
      "Source of the Ganga. Bhagirathi River temple. Gaumukh glacier 18 km ahead.",
  },
  {
    id: "cd-3",
    name: "Kedarnath",
    altitude: 3583,
    dayNumber: 7,
    type: "summit",
    x: 490,
    y: 150,
    description: "Lord Shiva's Jyotirlinga. Inner sanctum hump of Nandi bull.",
  },
  {
    id: "cd-4",
    name: "Badrinath",
    altitude: 3133,
    dayNumber: 10,
    type: "landmark",
    x: 680,
    y: 200,
    description: "Lord Vishnu's abode. Alaknanda River. Tapt Kund hot spring.",
  },
  {
    id: "cd-5",
    name: "Mana Village",
    altitude: 3219,
    dayNumber: 11,
    type: "village",
    x: 760,
    y: 250,
    description:
      "Last Indian village before Tibet border. Saraswati River source. Vyasa Cave.",
  },
];

// ---------- Icon helpers ----------

function WaypointIcon({
  type,
  size = 24,
}: { type: TrekWaypoint["type"]; size?: number }) {
  const _half = size / 2;
  if (type === "summit") {
    return (
      <svg
        role="img"
        aria-label="Trail waypoint icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2 L20 20 L12 16 L4 20 Z"
          fill="#F4A623"
          stroke="#C07000"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <rect x="11" y="2" width="2" height="6" fill="#F4A623" />
        <rect x="12" y="3" width="8" height="3" fill="#F4A623" rx="1" />
      </svg>
    );
  }
  if (type === "camp") {
    return (
      <svg
        role="img"
        aria-label="Trail waypoint icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2 18 L12 4 L22 18 Z"
          fill="#2D4A2A"
          stroke="#1A7A4C"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <rect x="9" y="14" width="6" height="4" fill="#FFF8E7" rx="0.5" />
        <path
          d="M9 14 Q12 11 15 14"
          fill="none"
          stroke="#1A7A4C"
          strokeWidth="0.8"
        />
      </svg>
    );
  }
  if (type === "basecamp") {
    return (
      <svg
        role="img"
        aria-label="Trail waypoint icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="4" y="10" width="16" height="10" fill="#145C38" rx="2" />
        <path
          d="M2 12 L12 4 L22 12"
          fill="none"
          stroke="#145C38"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="10" y="15" width="4" height="5" fill="#FFF8E7" rx="1" />
        <rect x="6" y="13" width="3" height="3" fill="#A8E6C0" rx="0.5" />
        <rect x="15" y="13" width="3" height="3" fill="#A8E6C0" rx="0.5" />
      </svg>
    );
  }
  if (type === "village") {
    return (
      <svg
        role="img"
        aria-label="Trail waypoint icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="5" y="11" width="14" height="9" fill="#5B9BD5" rx="1.5" />
        <path
          d="M3 13 L12 5 L21 13"
          fill="none"
          stroke="#5B9BD5"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="10" y="16" width="4" height="4" fill="#FFF8E7" rx="0.5" />
        <rect
          x="6"
          y="13"
          width="3"
          height="3"
          fill="rgba(255,255,255,0.5)"
          rx="0.3"
        />
        <rect
          x="15"
          y="13"
          width="3"
          height="3"
          fill="rgba(255,255,255,0.5)"
          rx="0.3"
        />
      </svg>
    );
  }
  // landmark
  return (
    <svg
      role="img"
      aria-label="Trail waypoint icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="10"
        r="5"
        fill="#9B59B6"
        stroke="#7D3C98"
        strokeWidth="1.2"
      />
      <path
        d="M12 15 L12 22"
        stroke="#9B59B6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="10" r="2" fill="#FFF8E7" />
    </svg>
  );
}

const TYPE_COLORS: Record<TrekWaypoint["type"], string> = {
  summit: "#F4A623",
  camp: "#2D4A2A",
  basecamp: "#145C38",
  village: "#5B9BD5",
  landmark: "#9B59B6",
};

// ---------- Background decoration helpers ----------

function MountainPeaks() {
  return (
    <g>
      {/* Background mountain range */}
      <path
        d="M-20 200 L100 60 L170 130 L260 30 L340 100 L420 15 L510 85 L600 10 L680 75 L760 35 L840 90 L900 45 L980 100 L1050 55 L1150 115 L1250 50 L1350 90 L1440 60 L1440 200 Z"
        fill="#2D4A2A"
        opacity="0.18"
      />
      {/* Midground peaks */}
      <path
        d="M50 200 L160 80 L230 140 L320 55 L410 115 L500 30 L590 95 L670 50 L750 110 L850 45 L950 105 L1040 60 L1140 120 L1240 70 L1350 130 L1440 80 L1440 200 Z"
        fill="#2D4A2A"
        opacity="0.12"
      />
      {/* Foreground mountains with snow caps */}
      {[
        { x: [80, 150, 220], snow: [90, 150, 210] },
        { x: [280, 370, 460], snow: [295, 370, 445] },
        { x: [460, 560, 660], snow: [475, 560, 645] },
        { x: [660, 740, 820], snow: [672, 740, 808] },
      ].map((m) => (
        <g key={`m-${m.x[0]}-${m.x[1]}-${m.x[2]}`}>
          <polygon
            points={`${m.x[0]},200 ${m.x[1]},50 ${m.x[2]},200`}
            fill="#2D4A2A"
            opacity="0.35"
          />
          <polygon
            points={`${m.snow[0]},50 ${m.x[1]},50 ${m.snow[2]},50 ${(m.snow[0] + m.snow[2]) / 2},80`}
            fill="white"
            opacity="0.65"
          />
        </g>
      ))}
    </g>
  );
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
    { x: 780, y: 398 },
  ];
  return (
    <g>
      {trees.map((t) => (
        <g key={`tree-${t.x}-${t.y}`} transform={`translate(${t.x},${t.y})`}>
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="14"
            stroke="#2D4A2A"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="-4" r="7" fill="#2D4A2A" opacity="0.55" />
          <circle cx="0" cy="-2" r="5" fill="#1A7A4C" opacity="0.45" />
        </g>
      ))}
    </g>
  );
}

function River() {
  return (
    <path
      d="M 30 480 C 80 460 120 450 170 440 C 220 430 260 420 310 415 C 360 410 400 420 440 415 C 480 410 510 400 550 395"
      fill="none"
      stroke="#5B9BD5"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  );
}

function CompassRose() {
  return (
    <g transform="translate(740, 420)" aria-label="Compass rose">
      <circle
        cx="0"
        cy="0"
        r="28"
        fill="#FFF8E7"
        stroke="#C8B89A"
        strokeWidth="1.5"
      />
      <circle
        cx="0"
        cy="0"
        r="20"
        fill="none"
        stroke="#C8B89A"
        strokeWidth="0.8"
      />
      {/* N/S arrow */}
      <path d="M0 -22 L4 -8 L0 -4 L-4 -8 Z" fill="#1A7A4C" />
      <path d="M0 22 L4 8 L0 4 L-4 8 Z" fill="#C8B89A" />
      {/* E/W arrow */}
      <path d="M22 0 L8 4 L4 0 L8 -4 Z" fill="#C8B89A" />
      <path d="M-22 0 L-8 4 L-4 0 L-8 -4 Z" fill="#C8B89A" />
      <circle cx="0" cy="0" r="3" fill="#1A7A4C" />
      <text
        x="0"
        y="-25"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#1A7A4C"
        fontFamily="DM Sans, sans-serif"
      >
        N
      </text>
      <text
        x="0"
        y="32"
        textAnchor="middle"
        fontSize="7"
        fill="#9B8B72"
        fontFamily="DM Sans, sans-serif"
      >
        S
      </text>
      <text
        x="28"
        y="3"
        textAnchor="start"
        fontSize="7"
        fill="#9B8B72"
        fontFamily="DM Sans, sans-serif"
      >
        E
      </text>
      <text
        x="-28"
        y="3"
        textAnchor="end"
        fontSize="7"
        fill="#9B8B72"
        fontFamily="DM Sans, sans-serif"
      >
        W
      </text>
    </g>
  );
}

function ParchmentTexture({ id }: { id: string }) {
  return (
    <defs>
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
        <feBlend in="SourceGraphic" mode="multiply" result="blend" />
        <feComponentTransfer in="blend">
          <feFuncA type="linear" slope="0.06" />
        </feComponentTransfer>
        <feComposite in="SourceGraphic" in2="blend" operator="atop" />
      </filter>
      <filter id={`${id}-shadow`}>
        <feDropShadow
          dx="0"
          dy="2"
          stdDeviation="3"
          floodColor="#2D4A2A"
          floodOpacity="0.3"
        />
      </filter>
    </defs>
  );
}

// ---------- Main component ----------

export function IllustratedTrailMap({
  trekName,
  region,
  waypoints,
}: IllustratedTrailMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const svgRef = useRef<SVGSVGElement>(null);

  const sorted = [...waypoints].sort((a, b) => a.dayNumber - b.dayNumber);

  // Build trail path connecting all waypoints in order
  const _trailD =
    sorted.length > 1
      ? sorted
          .map((wp, i) => `${i === 0 ? "M" : "L"} ${wp.x} ${wp.y}`)
          .join(" ")
      : "";

  // Build smooth curve path
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

  const hoveredWp = hoveredId
    ? waypoints.find((w) => w.id === hoveredId)
    : null;

  const handleMarkerEnter = (
    wp: TrekWaypoint,
    _e: React.MouseEvent<SVGGElement>,
  ) => {
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

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        border: "2px solid #C8B89A",
        boxShadow: "0 8px 32px rgba(45,74,42,0.15)",
      }}
      data-ocid="trek_detail.trail_map"
    >
      {/* SVG Canvas */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 500"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          background: "#FFF8E7",
        }}
        role="img"
        aria-label={`Illustrated trail map for ${trekName}`}
      >
        <ParchmentTexture id={filterId} />

        {/* Parchment rect */}
        <rect
          x="0"
          y="0"
          width="800"
          height="500"
          fill="#FFF8E7"
          filter={`url(#${filterId})`}
        />

        {/* Decorative border */}
        <rect
          x="8"
          y="8"
          width="784"
          height="484"
          fill="none"
          stroke="#C8B89A"
          strokeWidth="1.5"
          rx="4"
          strokeDasharray="6 3"
        />
        <rect
          x="14"
          y="14"
          width="772"
          height="472"
          fill="none"
          stroke="#C8B89A"
          strokeWidth="0.5"
          rx="2"
        />

        {/* Background mountains */}
        <MountainPeaks />

        {/* River */}
        <River />

        {/* Forest clusters */}
        <ForestClusters />

        {/* Trail shadow */}
        {smoothPath && (
          <path
            d={smoothPath}
            fill="none"
            stroke="rgba(45,74,42,0.15)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Trail path — amber dashed */}
        {smoothPath && (
          <path
            d={smoothPath}
            fill="none"
            stroke="#F4A623"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 4"
          />
        )}

        {/* Day labels along trail */}
        {sorted.map((wp, i) => {
          if (i === 0 || i === sorted.length - 1) return null;
          const prev = sorted[i - 1];
          const midX = (prev.x + wp.x) / 2;
          const midY = Math.min(prev.y, wp.y) - 14;
          return (
            <text
              key={`trail-label-${wp.id}`}
              x={midX}
              y={midY}
              textAnchor="middle"
              fontSize="9"
              fill="#C07000"
              fontFamily="DM Sans, sans-serif"
              fontWeight="600"
              opacity="0.8"
            >
              Day {wp.dayNumber}
            </text>
          );
        })}

        {/* Waypoint markers */}
        {sorted.map((wp) => {
          const isHovered = hoveredId === wp.id;
          const color = TYPE_COLORS[wp.type];
          return (
            <g
              key={wp.id}
              transform={`translate(${wp.x - 12}, ${wp.y - 12})`}
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => handleMarkerEnter(wp, e)}
              onMouseLeave={handleMarkerLeave}
              data-ocid={`trek_detail.trail_map.waypoint.${wp.id}`}
              aria-label={`${wp.name} — Day ${wp.dayNumber}, ${wp.altitude}m`}
              tabIndex={0}
              onFocus={(e) =>
                handleMarkerEnter(
                  wp,
                  e as unknown as React.MouseEvent<SVGGElement>,
                )
              }
              onBlur={handleMarkerLeave}
            >
              {/* Pulse ring when hovered */}
              {isHovered && (
                <circle cx="12" cy="12" r="18" fill={color} opacity="0.2" />
              )}
              {/* Shadow */}
              <circle cx="12" cy="14" r="12" fill="rgba(0,0,0,0.12)" />
              {/* Background circle */}
              <circle
                cx="12"
                cy="12"
                r="13"
                fill="#FFF8E7"
                stroke={color}
                strokeWidth={isHovered ? "2.5" : "1.5"}
              />
              {/* Icon */}
              <WaypointIcon type={wp.type} size={24} />
              {/* Day badge */}
              <text
                x="12"
                y="-6"
                textAnchor="middle"
                fontSize="8"
                fill="#1A7A4C"
                fontFamily="DM Sans, sans-serif"
                fontWeight="700"
              >
                D{wp.dayNumber}
              </text>
              {/* Waypoint name */}
              <text
                x="12"
                y="32"
                textAnchor="middle"
                fontSize="8"
                fill="#2D4A2A"
                fontFamily="DM Sans, sans-serif"
                fontWeight="600"
              >
                {wp.name.length > 14 ? `${wp.name.substring(0, 13)}…` : wp.name}
              </text>
              {/* Altitude label */}
              <text
                x="12"
                y="42"
                textAnchor="middle"
                fontSize="7"
                fill="#9B8B72"
                fontFamily="DM Sans, sans-serif"
              >
                {wp.altitude}m
              </text>
            </g>
          );
        })}

        {/* Compass rose */}
        <CompassRose />

        {/* Trek name */}
        <text
          x="400"
          y="482"
          textAnchor="middle"
          fontSize="13"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontStyle="italic"
          fill="#9B8B72"
          letterSpacing="0.05em"
        >
          {region} — {trekName}
        </text>

        {/* Legend */}
        <g transform="translate(22, 400)" aria-label="Map legend">
          <rect
            x="0"
            y="0"
            width="100"
            height="80"
            fill="#FFF8E7"
            stroke="#C8B89A"
            strokeWidth="1"
            rx="4"
            opacity="0.9"
          />
          <text
            x="8"
            y="12"
            fontSize="7"
            fontWeight="700"
            fill="#2D4A2A"
            fontFamily="DM Sans, sans-serif"
            style={{ textTransform: "uppercase" as const }}
          >
            LEGEND
          </text>
          {[
            { type: "summit" as const, label: "Summit" },
            { type: "camp" as const, label: "Camp" },
            { type: "basecamp" as const, label: "Base" },
            { type: "village" as const, label: "Village" },
            { type: "landmark" as const, label: "Landmark" },
          ].map((item, i) => (
            <g key={item.type} transform={`translate(8, ${18 + i * 12})`}>
              <circle cx="5" cy="4" r="4" fill={TYPE_COLORS[item.type]} />
              <text
                x="14"
                y="8"
                fontSize="7"
                fill="#4A4A4A"
                fontFamily="DM Sans, sans-serif"
              >
                {item.label}
              </text>
            </g>
          ))}
        </g>

        {/* Altitude scale indicator */}
        <g transform="translate(22, 24)">
          <text
            fontSize="9"
            fontFamily="DM Sans, sans-serif"
            fill="#9B8B72"
            fontStyle="italic"
          >
            <tspan x="0" dy="0">
              Illustrated Trail Map
            </tspan>
            <tspan x="0" dy="12" fontSize="7">
              Not to scale — for reference only
            </tspan>
          </text>
        </g>
      </svg>

      {/* Hover popup */}
      {hoveredWp && popupPos && (
        <div
          role="tooltip"
          aria-live="polite"
          style={{
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
            pointerEvents: "none",
          }}
        >
          {/* Day badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                background: TYPE_COLORS[hoveredWp.type],
                color: "#fff",
                borderRadius: "20px",
                padding: "2px 10px",
                fontSize: "10px",
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
              }}
            >
              Day {hoveredWp.dayNumber}
            </span>
            <span
              style={{
                fontSize: "10px",
                fontFamily: "DM Sans, sans-serif",
                color: "#6B7280",
                textTransform: "capitalize",
              }}
            >
              {hoveredWp.type}
            </span>
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#1A1A1A",
              marginBottom: "4px",
              lineHeight: 1.3,
            }}
          >
            {hoveredWp.name}
          </div>
          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "11px",
              color: "#1A7A4C",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            ↑ {hoveredWp.altitude.toLocaleString("en-IN")} m altitude
          </div>
          {hoveredWp.description && (
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "11px",
                color: "#4A4A4A",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {hoveredWp.description}
            </p>
          )}
          {/* Small arrow */}
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid #1A7A4C",
            }}
          />
        </div>
      )}
    </div>
  );
}
