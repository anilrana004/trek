export interface GearItem {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  depositAmount: number;
  available: boolean;
  category:
    | "Clothing"
    | "Footwear"
    | "Shelter"
    | "Navigation"
    | "Safety"
    | "Accessories";
  icon: string;
}

export const gearItems: GearItem[] = [
  {
    id: "trekking-pole",
    name: "Trekking Poles (Pair)",
    description:
      "Adjustable aluminium trekking poles with wrist straps. Essential for knee protection on descents.",
    pricePerDay: 80,
    depositAmount: 500,
    available: true,
    category: "Accessories",
    icon: "🥾",
  },
  {
    id: "sleeping-bag",
    name: "Sleeping Bag (-10°C)",
    description:
      "High-loft sleeping bag rated to -10°C. Suitable for all Himalayan treks. Includes compression sack.",
    pricePerDay: 150,
    depositAmount: 1000,
    available: true,
    category: "Shelter",
    icon: "🛏️",
  },
  {
    id: "rain-poncho",
    name: "Rain Poncho",
    description:
      "Lightweight waterproof poncho with hood. Covers both trekker and backpack. One-size-fits-all.",
    pricePerDay: 50,
    depositAmount: 200,
    available: true,
    category: "Clothing",
    icon: "🌧️",
  },
  {
    id: "gaiters",
    name: "Gaiters",
    description:
      "Snow and mud gaiters. Keeps snow, water, and debris out of your boots. Essential for winter treks.",
    pricePerDay: 60,
    depositAmount: 300,
    available: true,
    category: "Footwear",
    icon: "🧤",
  },
  {
    id: "crampons",
    name: "Crampons (Microspikes)",
    description:
      "Strap-on microspikes for traction on icy trails. Fits all boot sizes. Essential for winter summit days.",
    pricePerDay: 100,
    depositAmount: 800,
    available: true,
    category: "Footwear",
    icon: "❄️",
  },
  {
    id: "backpack-50l",
    name: "Trekking Backpack (50L)",
    description:
      "Deuter or Osprey 50L backpack with rain cover, hip belt, and back ventilation system.",
    pricePerDay: 120,
    depositAmount: 1500,
    available: true,
    category: "Accessories",
    icon: "🎒",
  },
  {
    id: "headlamp",
    name: "Headlamp + Batteries",
    description:
      "LED headlamp with 200+ lumen output. Includes 3 AAA batteries. Essential for pre-dawn summit starts.",
    pricePerDay: 60,
    depositAmount: 400,
    available: true,
    category: "Navigation",
    icon: "🔦",
  },
  {
    id: "trekking-jacket",
    name: "Trekking Jacket (Waterproof)",
    description:
      "Hardshell waterproof and windproof jacket. Gore-Tex equivalent. Multiple sizes available.",
    pricePerDay: 120,
    depositAmount: 1500,
    available: true,
    category: "Clothing",
    icon: "🧥",
  },
  {
    id: "trekking-boots",
    name: "Trekking Boots",
    description:
      "High-ankle waterproof trekking boots (Quechua/Woodland). Sizes 6-12 available.",
    pricePerDay: 150,
    depositAmount: 2000,
    available: true,
    category: "Footwear",
    icon: "👟",
  },
  {
    id: "thermals",
    name: "Thermal Set (Top + Bottom)",
    description:
      "Moisture-wicking thermal base layer set. Available in S/M/L/XL. Freshly laundered for each rental.",
    pricePerDay: 80,
    depositAmount: 500,
    available: true,
    category: "Clothing",
    icon: "🧦",
  },
];

export const getGearByCategory = (category: GearItem["category"]): GearItem[] =>
  gearItems.filter((g) => g.category === category);

export const getAvailableGear = (): GearItem[] =>
  gearItems.filter((g) => g.available);
