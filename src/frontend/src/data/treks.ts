export type TrekDifficulty =
  | "Easy"
  | "Easy to Moderate"
  | "Moderate"
  | "Difficult";
export type TrekState = "Uttarakhand" | "Himachal Pradesh";

export interface TrekItineraryDay {
  day: number;
  title: string;
  altitude?: string;
  distance?: string;
  description: string;
  meals?: string;
}

export interface Trek {
  slug: string;
  name: string;
  state: TrekState;
  district: string;
  maxAltitudeM: number;
  maxAltitudeFt: number;
  baseAltitudeM?: number;
  trekDistanceKm?: number;
  durationDays: number;
  durationLabel: string;
  difficulty: TrekDifficulty;
  bestSeason: string;
  startPoint: string;
  endPoint: string;
  priceFrom: number;
  priceTo: number;
  rating: number;
  reviewCount: number;
  highlights: string[];
  itinerary: TrekItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  isTrending?: boolean;
  isEditorsPick?: boolean;
  isMostBooked?: boolean;
  shortDescription: string;
  heroImage?: string;
  nearestRailway?: string;
  permits?: string;
}

export const treks: Trek[] = [
  {
    slug: "chopta-tungnath",
    name: "Chopta Tungnath Trek",
    state: "Uttarakhand",
    district: "Rudraprayag",
    maxAltitudeM: 4000,
    maxAltitudeFt: 13123,
    baseAltitudeM: 2680,
    trekDistanceKm: 6.5,
    durationDays: 3,
    durationLabel: "2-3 Days",
    difficulty: "Easy to Moderate",
    bestSeason: "April-June, Sept-Nov; Winter Dec-Feb",
    startPoint: "Chopta",
    endPoint: "Chopta",
    priceFrom: 3500,
    priceTo: 8000,
    rating: 4.9,
    reviewCount: 312,
    isTrending: true,
    isEditorsPick: true,
    shortDescription:
      "World's highest Shiva temple + 360 panorama of Nanda Devi, Trishul and Chaukhamba from Chandrashila Summit.",
    highlights: [
      "World's highest Shiva temple - Tungnath at 3,680m, over 1000 years old",
      "Chandrashila Peak: 360 panorama of Nanda Devi, Trishul, Chaukhamba",
      "Chopta - Mini Switzerland of India - stunning alpine meadows",
      "Deoriatal Lake add-on: emerald lake with Chaukhamba reflection",
      "Rhododendron forests bloom red/pink in April-May",
      "Magical winter snow trek Dec-Feb",
      "Part of Panch Kedar circuit - deep mythological significance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Chopta",
        altitude: "2,680m",
        distance: "220km drive",
        description:
          "Drive 7-8 hours from Rishikesh through the stunning Kedarnath valley. Passing through Devprayag, Rudraprayag, and Ukhimath before reaching the magical meadows of Chopta. Acclimatization walk in the bugyals. Campfire dinner under the stars with views of the Himalayan skyline.",
      },
      {
        day: 2,
        title: "Chopta to Tungnath to Chandrashila to Sari",
        altitude: "4,000m summit",
        distance: "10km",
        description:
          "Early morning trek to Tungnath Temple (3.5km, 2-3 hrs) through oak and rhododendron forest. Darshan at the highest Shiva shrine. Continue to Chandrashila Summit for breathtaking 360 views. Descend to Chopta, then drive to Sari village for overnight stay.",
      },
      {
        day: 3,
        title: "Sari to Deoriatal to Return",
        altitude: "2,438m",
        distance: "6km",
        description:
          "Morning trek to Deoriatal Lake (3km, 2hrs) - the magical emerald lake reflecting the Chaukhamba massif. Perfect sunrise photography spot. Descend to Sari village and drive back to Rishikesh by evening.",
      },
    ],
    inclusions: [
      "Experienced trekking guide",
      "Camp stay at Chopta/Sari",
      "All meals during trek",
      "Forest entry permit",
      "First aid kit and oxygen cylinder",
      "Trekking equipment",
      "Transportation from Rishikesh",
    ],
    exclusions: [
      "Personal trekking gear",
      "Travel insurance",
      "Helicopter services",
      "Anything not in inclusions",
      "Tips and personal expenses",
    ],
    nearestRailway: "Rishikesh (220 km)",
    permits: "Forest entry permit at Chopta",
  },
  {
    slug: "har-ki-dun",
    name: "Har Ki Dun Trek",
    state: "Uttarakhand",
    district: "Uttarkashi",
    maxAltitudeM: 3566,
    maxAltitudeFt: 11700,
    trekDistanceKm: 55,
    durationDays: 8,
    durationLabel: "7-8 Days",
    difficulty: "Moderate",
    bestSeason: "April-June, September-November",
    startPoint: "Sankri Village",
    endPoint: "Sankri Village",
    priceFrom: 12000,
    priceTo: 18000,
    rating: 4.8,
    reviewCount: 187,
    isEditorsPick: true,
    shortDescription:
      "Trek through the mythological Valley of Gods - remote ancient villages, glacier views, and Himalayan wildlife.",
    highlights: [
      "Har Ki Dun - Valley of Gods where Pandavas ascended to heaven",
      "Remote valley of Swargarohini, Bandarpunch and Kalanag peaks",
      "Ancient villages: Osla and Gangar with traditional Himalayan architecture",
      "Ruinsara Lake optional - crystal blue lake at 3,900m",
      "Himalayan monal, snow leopard (rare), musk deer wildlife",
      "Dense oak, rhododendron, pine and spruce forests",
      "Views of Jaundhar Glacier - accessible glacier in Garhwal",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        distance: "210km drive",
        description:
          "Drive 8 hours from Dehradun through Purola and Mori valleys. Arrive at Sankri, the base village at 1,920m. Village orientation walk, meet your guide team.",
      },
      {
        day: 2,
        title: "Sankri to Taluka to Seema",
        altitude: "2,600m",
        distance: "12km",
        description:
          "Short drive to Taluka (3km), then begin trek through dense forest. Cross the Supin River multiple times. Pass through dramatic gorge landscapes. Reach Seema campsite.",
      },
      {
        day: 3,
        title: "Seema to Osla Village",
        altitude: "2,565m",
        distance: "9km",
        description:
          "Trek to Osla village, passing through ancient deodar forests. Visit the unique Duryodhana Temple where the Mahabharata villain is worshipped. Explore traditional Garhwali architecture.",
      },
      {
        day: 4,
        title: "Osla to Har Ki Dun Base",
        altitude: "3,200m",
        distance: "12km",
        description:
          "Ascend through the widening valley with stunning views of Swargarohini peak group. Wildflowers carpet the trail in spring. Reach base camp at 3,200m.",
      },
      {
        day: 5,
        title: "Har Ki Dun Valley Exploration",
        altitude: "3,566m",
        distance: "8km",
        description:
          "Full valley exploration day. Trek to Har Ki Dun meadow (3,566m). Optional Maninda Lake day trip. Wildlife spotting opportunity.",
      },
      {
        day: 6,
        title: "Har Ki Dun to Osla",
        altitude: "2,565m",
        distance: "12km",
        description:
          "Begin descent through the magical valley. Wildflowers and rushing streams accompany the descent.",
      },
      {
        day: 7,
        title: "Osla to Sankri",
        altitude: "1,920m",
        distance: "21km",
        description:
          "Long descent day via Seema village. Trek through riverside trails with forested ridge views. Reach Sankri by afternoon.",
      },
      {
        day: 8,
        title: "Sankri to Dehradun",
        description:
          "Drive back to Dehradun (8hrs). Drop at Dehradun railway station or bus stand.",
      },
    ],
    inclusions: [
      "Experienced mountain guide and support staff",
      "All meals during trek",
      "Govind Pashu Vihar National Park permit",
      "Quality camping equipment",
      "First aid kit and emergency oxygen",
      "Transportation from Dehradun",
      "Porters for common luggage",
    ],
    exclusions: [
      "Personal trekking gear",
      "Travel insurance",
      "Personal expenses and tips",
    ],
    permits: "Govind Pashu Vihar National Park permit required",
  },
  {
    slug: "kedarkantha",
    name: "Kedarkantha Trek",
    state: "Uttarakhand",
    district: "Uttarkashi",
    maxAltitudeM: 3810,
    maxAltitudeFt: 12500,
    trekDistanceKm: 25,
    durationDays: 6,
    durationLabel: "5-6 Days",
    difficulty: "Easy to Moderate",
    bestSeason: "Dec-Apr (best winter), May-Jun, Sept-Oct",
    startPoint: "Sankri Village",
    endPoint: "Sankri Village",
    priceFrom: 8000,
    priceTo: 14000,
    rating: 4.9,
    reviewCount: 524,
    isTrending: true,
    isMostBooked: true,
    shortDescription:
      "India's most celebrated winter trek - 360 snow summit panorama with frozen lakes and snow-laden deodar forests.",
    highlights: [
      "India's most celebrated winter trek - 360 summit snow views",
      "Views of Swargarohini, Bandarpunch, Kalanag, and Black Peak",
      "Summit a Himalayan peak without technical climbing gear",
      "Juda Ka Talab - magical frozen lake in winter at 3,000m",
      "Snow-laden deodar and pine forest campsites",
      "Among India's most beautiful campsites at Juda Ka Talab",
      "Cultural experience through traditional Sankri village",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        distance: "210km drive",
        description:
          "Drive from Dehradun (8hrs) through Mussoorie and Nainbagh to Sankri village at 2,000m. Orientation walk in the village. Traditional Garhwali dinner. Overnight at Sankri.",
      },
      {
        day: 2,
        title: "Sankri to Juda Ka Talab",
        altitude: "2,950m",
        distance: "6km",
        description:
          "Begin the trail through dense forest of oak and rhododendron. Steady climb through snow (in winter) to Juda Ka Talab - the enchanting lake that freezes solid December-February.",
      },
      {
        day: 3,
        title: "Juda Ka Talab to Kedarkantha Base",
        altitude: "3,430m",
        distance: "4km",
        description:
          "Short but rewarding climb through increasingly snow-covered trail. The treeline gradually gives way to open alpine meadows. Reach Kedarkantha Base camp with dramatic summit views.",
      },
      {
        day: 4,
        title: "Summit Day to Juda Ka Talab",
        altitude: "3,810m",
        distance: "10km total",
        description:
          "Pre-dawn start (4 AM) for the summit. Climb through pristine snow slopes as the sky turns golden. Reach Kedarkantha Summit at sunrise - panorama of Himalayan peaks paints itself gold. Descend to Juda Ka Talab.",
      },
      {
        day: 5,
        title: "Juda Ka Talab to Sankri to Dehradun",
        distance: "6km trek + drive",
        description:
          "Final descent through forest trail to Sankri. Certificate distribution and farewell. Drive to Dehradun.",
      },
    ],
    inclusions: [
      "Experienced summit guide and support team",
      "All meals",
      "Forest department camping permit",
      "Quality mountain tents and sleeping bags",
      "First aid kit and emergency oxygen",
      "Transport from Dehradun",
      "Trek completion certificate",
    ],
    exclusions: [
      "Personal cold-weather trekking gear",
      "Travel insurance",
      "Personal expenses",
    ],
  },
  {
    slug: "kuari-pass",
    name: "Kuari Pass Trek",
    state: "Uttarakhand",
    district: "Chamoli",
    maxAltitudeM: 3820,
    maxAltitudeFt: 12516,
    trekDistanceKm: 22,
    durationDays: 6,
    durationLabel: "6 Days",
    difficulty: "Moderate",
    bestSeason: "Oct-Nov, Mar-May; Dec-Feb winter",
    startPoint: "Joshimath / Dhak Village",
    endPoint: "Tapovan / Joshimath",
    priceFrom: 11000,
    priceTo: 18000,
    rating: 4.8,
    reviewCount: 203,
    isEditorsPick: true,
    shortDescription:
      "The legendary Lord Curzon Trail - grandest amphitheater view of Garhwal Himalayas including mighty Nanda Devi (7,816m).",
    highlights: [
      "Named Lord Curzon Trail after British Viceroy's 1905 expedition",
      "Grandest Garhwal amphitheater: Nanda Devi, Dronagiri, Kamet, Chaukhamba",
      "Gorson Bugyal - one of Uttarakhand best alpine meadows",
      "World-class Auli ski resort on the approach",
      "Rhododendron forests spectacular in April bloom",
      "Traditional villages of Dhak and Khullara",
      "Nanda Devi - India 2nd highest peak - visible in full glory",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Joshimath",
        distance: "280km drive",
        description:
          "Drive through the Alaknanda valley, passing Devprayag, Rudraprayag, Karanprayag, and Chamoli. Arrive Joshimath (1,890m). Overnight rest.",
      },
      {
        day: 2,
        title: "Joshimath to Gorson Bugyal",
        altitude: "3,056m",
        distance: "6km",
        description:
          "Take cable car from Joshimath to Auli (world highest ski resort) or trek 3km. Continue to Gorson Bugyal (3,056m) through dense oak and rhododendron forests. Sweeping meadow views.",
      },
      {
        day: 3,
        title: "Gorson to Tali",
        altitude: "3,200m",
        distance: "5km",
        description:
          "Gradual ascent through open meadows and patches of forest. The Nanda Devi summit gradually reveals itself. Camp Tali at 3,200m.",
      },
      {
        day: 4,
        title: "Tali to Khullara Top",
        altitude: "3,600m",
        distance: "6km",
        description:
          "Most dramatic day. Full Garhwal Himalayan panorama unfolds - Nanda Devi (7,816m), Dronagiri, Kamet (7,756m), Chaukhamba, Neelkanth. Camp at Khullara Top (3,600m).",
      },
      {
        day: 5,
        title: "Khullara to Kuari Pass to Tapovan",
        altitude: "3,820m",
        distance: "8km",
        description:
          "Final ascent to Kuari Pass (3,820m). Magnificent panorama. Descend steeply to Tapovan village (2,600m) through bamboo forest.",
      },
      {
        day: 6,
        title: "Tapovan to Joshimath to Haridwar",
        description:
          "Drive from Tapovan to Joshimath (12km). Breakfast, then drive back to Haridwar (280km).",
      },
    ],
    inclusions: [
      "Experienced mountain guide",
      "All meals",
      "Forest and national park permits",
      "Camping equipment",
      "First aid and emergency oxygen",
      "Transport from Haridwar",
    ],
    exclusions: [
      "Personal gear",
      "Travel insurance",
      "Cable car charges at Auli",
      "Personal expenses",
    ],
  },
  {
    slug: "phulara-ridge",
    name: "Phulara Ridge Trek",
    state: "Uttarakhand",
    district: "Uttarkashi",
    maxAltitudeM: 3700,
    maxAltitudeFt: 12345,
    trekDistanceKm: 27,
    durationDays: 5,
    durationLabel: "5 Days / 4 Nights",
    difficulty: "Easy to Moderate",
    bestSeason: "May-June, September-October",
    startPoint: "Sankri Village",
    endPoint: "Sankri Village",
    priceFrom: 9000,
    priceTo: 14000,
    rating: 4.8,
    reviewCount: 156,
    shortDescription:
      "India's longest continuous ridge walk - 4+ hours on top of the world with 360 Himalayan panorama. Offbeat and uncrowded.",
    highlights: [
      "India's longest continuous ridge walk - 4+ hours above the world",
      "360 panorama: Swargarohini, Bandarpunch, Kalanag, Kedarkantha",
      "Lush oak, maple, deodar forest trails",
      "Pushtara Meadows - vast green alpine bugyal",
      "Juda Ka Talab high-altitude lake",
      "Offbeat and uncrowded - pure Himalayan solitude",
      "Himalayan Monal and Koklass Pheasant spotting",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        distance: "210km drive",
        description:
          "Drive from Dehradun to Sankri village (1,950m) through beautiful Uttarkashi district. Orientation walk. Overnight at Sankri.",
      },
      {
        day: 2,
        title: "Sankri to Juda Ka Talab",
        altitude: "2,730m",
        distance: "6km",
        description:
          "Trek through forest to Juda Ka Talab. Beautiful camp beside the tranquil lake with Himalayan backdrop.",
      },
      {
        day: 3,
        title: "Juda Ka Talab to Bhoj Gadi",
        altitude: "3,400m",
        distance: "8.4km",
        description:
          "Ascend gradually above treeline. The ridge comes into view. Camp at Bhoj Gadi (3,400m) with first ridge views.",
      },
      {
        day: 4,
        title: "Phulara Ridge Walk to Pushtara",
        altitude: "3,700m",
        distance: "8.4km",
        description:
          "HIGHLIGHT DAY. Ascend to the Phulara Ridge (3,700m) and walk along it for 4+ hours. 360 panoramic views in every direction. Descend to Pushtara Meadow (2,800m).",
      },
      {
        day: 5,
        title: "Pushtara to Sankri to Dehradun",
        distance: "8km trek + drive",
        description:
          "Morning descent through Taluka village back to Sankri. Drive to Dehradun.",
      },
    ],
    inclusions: [
      "Trekking guide",
      "All meals during trek",
      "Govind Pashu Vihar permit",
      "Camping equipment",
      "First aid kit",
      "Transport from Dehradun",
    ],
    exclusions: ["Personal gear", "Travel insurance", "Personal expenses"],
  },
  {
    slug: "valley-of-flowers",
    name: "Valley of Flowers Trek",
    state: "Uttarakhand",
    district: "Chamoli",
    maxAltitudeM: 3658,
    maxAltitudeFt: 11995,
    trekDistanceKm: 38,
    durationDays: 6,
    durationLabel: "6 Days",
    difficulty: "Moderate",
    bestSeason: "July-September (UNESCO bloom season)",
    startPoint: "Govindghat",
    endPoint: "Govindghat",
    priceFrom: 10000,
    priceTo: 16000,
    rating: 4.9,
    reviewCount: 445,
    isTrending: true,
    isMostBooked: true,
    shortDescription:
      "UNESCO World Heritage Site - 500+ species of wildflowers bloom in this magical valley July-September, combined with Hemkund Sahib pilgrimage.",
    highlights: [
      "UNESCO World Heritage Site - one of India most protected valleys",
      "500+ species of wildflowers bloom July-September",
      "Hemkund Sahib - sacred Sikh pilgrimage at 4,329m altitude",
      "Bhyundar Valley with Pushpawati River",
      "Snow leopard and Himalayan brown bear habitat",
      "Pristine alpine lake at Hemkund reflecting snowy peaks",
      "Rare herbs including Brahmakamal and Saussurea",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Govindghat",
        description: "Drive 280km to Govindghat (1,828m) via Joshimath.",
      },
      {
        day: 2,
        title: "Govindghat to Ghangaria",
        altitude: "3,049m",
        distance: "14km",
        description:
          "Trek through Bhyundar valley alongside roaring Pushpawati River. Dense forests gradually open to Ghangaria base camp.",
      },
      {
        day: 3,
        title: "Valley of Flowers",
        altitude: "3,658m",
        distance: "12km",
        description:
          "Full day in the Valley of Flowers. Carpet of wildflowers in every color. Photography, exploration, and botanical discovery.",
      },
      {
        day: 4,
        title: "Hemkund Sahib",
        altitude: "4,329m",
        distance: "12km",
        description:
          "Steep climb to Hemkund Sahib (4,329m) - the sacred glacial lake and Gurudwara. Spiritual experience at highest Sikh shrine.",
      },
      {
        day: 5,
        title: "Ghangaria to Govindghat",
        distance: "14km",
        description: "Descend back to Govindghat.",
      },
      {
        day: 6,
        title: "Govindghat to Haridwar",
        description: "Drive back to Haridwar.",
      },
    ],
    inclusions: [
      "Guide",
      "All meals during trek",
      "Valley of Flowers entry permit",
      "Camping equipment",
      "Transport from Haridwar",
    ],
    exclusions: [
      "Personal gear",
      "Hemkund Sahib offerings",
      "Travel insurance",
    ],
  },
  {
    slug: "roopkund",
    name: "Roopkund Trek",
    state: "Uttarakhand",
    district: "Chamoli",
    maxAltitudeM: 5029,
    maxAltitudeFt: 16499,
    trekDistanceKm: 52,
    durationDays: 8,
    durationLabel: "8 Days",
    difficulty: "Difficult",
    bestSeason: "May-June, September-October",
    startPoint: "Lohajung",
    endPoint: "Lohajung",
    priceFrom: 15000,
    priceTo: 25000,
    rating: 4.8,
    reviewCount: 267,
    isTrending: true,
    shortDescription:
      "The mysterious Skeleton Lake at 5,029m - 500+ skeletal remains dating to the 9th century with breathtaking views of Trishul (7,120m).",
    highlights: [
      "Roopkund - Mystery Lake with 500+ human skeletons from 9th century",
      "Views of magnificent Trishul (7,120m) and Nanda Ghunti",
      "High altitude of 5,029m - significant achievement",
      "Bedni Bugyal - one of the largest high-altitude meadows",
      "Pathar Nachauni and Ali Bugyal pristine campsites",
      "Challenging and rewarding",
      "Rich Hindu mythology - Nanda Devi Raj Jat pilgrimage route",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kathgodam to Lohajung",
        distance: "210km drive",
        description: "Drive to Lohajung (2,350m), the base village.",
      },
      {
        day: 2,
        title: "Lohajung to Didna Village",
        altitude: "2,800m",
        distance: "10km",
        description: "Trek through dense oak forest to Didna.",
      },
      {
        day: 3,
        title: "Didna to Ali Bugyal",
        altitude: "3,750m",
        distance: "9km",
        description:
          "Ascend to Ali Bugyal - one of India's most beautiful meadows.",
      },
      {
        day: 4,
        title: "Ali Bugyal to Pathar Nachauni",
        altitude: "3,800m",
        distance: "4km",
        description: "Short trek across the bugyal with first Trishul views.",
      },
      {
        day: 5,
        title: "Pathar Nachauni to Bhagwabasa",
        altitude: "4,400m",
        distance: "5km",
        description: "Ascend through rocky terrain to high camp.",
      },
      {
        day: 6,
        title: "Roopkund Summit Day",
        altitude: "5,029m",
        distance: "8km",
        description:
          "Pre-dawn summit push to Roopkund Lake. View the skeletal remains. Panorama of Trishul and Nanda Ghunti.",
      },
      {
        day: 7,
        title: "Bedni Bugyal to Wan Village",
        altitude: "2,400m",
        distance: "11km",
        description: "Long descent to Wan village.",
      },
      { day: 8, title: "Wan to Kathgodam", description: "Drive back." },
    ],
    inclusions: [
      "Experienced high-altitude guide",
      "All meals",
      "Permits",
      "Camping equipment",
      "First aid and oxygen",
      "Transport",
    ],
    exclusions: [
      "Personal high-altitude gear",
      "Travel insurance",
      "Personal expenses",
    ],
  },
  {
    slug: "brahmatal",
    name: "Brahmatal Trek",
    state: "Uttarakhand",
    district: "Chamoli",
    maxAltitudeM: 3800,
    maxAltitudeFt: 12467,
    trekDistanceKm: 35,
    durationDays: 6,
    durationLabel: "6 Days",
    difficulty: "Moderate",
    bestSeason: "December-February (winter), April-June",
    startPoint: "Lohajung",
    endPoint: "Lohajung",
    priceFrom: 9500,
    priceTo: 15000,
    rating: 4.7,
    reviewCount: 198,
    shortDescription:
      "Perfect winter trek with a frozen lake reflecting Mt. Trishul and Nanda Ghunti - less crowded than Kedarkantha.",
    highlights: [
      "Brahmatal frozen lake - perfect mirror of Trishul and Nanda Ghunti",
      "Excellent winter trek December-February",
      "Less crowded than popular Kedarkantha",
      "Dense oak and rhododendron forest trails",
      "Bekaltal and Brahmatal twin lake views",
      "Views of Trishul (7,120m) and Nanda Ghunti (6,309m)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kathgodam to Lohajung",
        description: "Drive to Lohajung base village.",
      },
      {
        day: 2,
        title: "Lohajung to Bekaltal",
        altitude: "2,960m",
        distance: "8km",
        description: "Trek through forest to Bekaltal lake camp.",
      },
      {
        day: 3,
        title: "Bekaltal to Brahmatal",
        altitude: "3,150m",
        distance: "6km",
        description: "Trek to Brahmatal lake with views of Trishul.",
      },
      {
        day: 4,
        title: "Brahmatal to Summit",
        altitude: "3,800m",
        distance: "7km",
        description: "Summit day with panoramic Himalayan views.",
      },
      {
        day: 5,
        title: "Summit to Lohajung",
        distance: "14km",
        description: "Descent through forest back to base.",
      },
      { day: 6, title: "Lohajung to Kathgodam", description: "Drive back." },
    ],
    inclusions: ["Guide", "Meals", "Permits", "Equipment", "Transport"],
    exclusions: ["Personal gear", "Travel insurance"],
  },
  {
    slug: "dayara-bugyal",
    name: "Dayara Bugyal Trek",
    state: "Uttarakhand",
    district: "Uttarkashi",
    maxAltitudeM: 3408,
    maxAltitudeFt: 11181,
    trekDistanceKm: 22,
    durationDays: 5,
    durationLabel: "4-5 Days",
    difficulty: "Easy to Moderate",
    bestSeason: "Summer: May-June, Oct; Winter skiing: Dec-Feb",
    startPoint: "Barsu Village",
    endPoint: "Barsu Village",
    priceFrom: 7500,
    priceTo: 12000,
    rating: 4.7,
    reviewCount: 167,
    shortDescription:
      "One of India's most beautiful high-altitude meadows - skiing in winter, wildflower carpets in summer.",
    highlights: [
      "Dayara Bugyal - one of India's most beautiful alpine meadows",
      "Winter skiing available on natural snow slopes",
      "Summer wildflower carpets in July-September",
      "Views of Draupadi Ka Danda, Srikanth, Kala Nag peaks",
      "Traditional village of Barsu",
      "Rhododendron and oak forest trails",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Barsu",
        description: "Drive to Barsu village base.",
      },
      {
        day: 2,
        title: "Barsu to Gui",
        altitude: "2,800m",
        distance: "5km",
        description: "Forest trail through rhododendron groves.",
      },
      {
        day: 3,
        title: "Gui to Dayara Bugyal",
        altitude: "3,408m",
        distance: "5km",
        description: "Open meadow with stunning views.",
      },
      {
        day: 4,
        title: "Bugyal exploration",
        description: "Full day exploring the meadow.",
      },
      {
        day: 5,
        title: "Return to Dehradun",
        description: "Descend and drive back.",
      },
    ],
    inclusions: ["Guide", "Meals", "Permits", "Equipment", "Transport"],
    exclusions: ["Personal gear", "Travel insurance"],
  },
  {
    slug: "nag-tibba",
    name: "Nag Tibba Trek",
    state: "Uttarakhand",
    district: "Tehri Garhwal",
    maxAltitudeM: 3022,
    maxAltitudeFt: 9915,
    trekDistanceKm: 16,
    durationDays: 2,
    durationLabel: "2 Days",
    difficulty: "Easy",
    bestSeason: "Year-round; Oct-Feb best",
    startPoint: "Pantwari Village",
    endPoint: "Pantwari Village",
    priceFrom: 3500,
    priceTo: 6000,
    rating: 4.6,
    reviewCount: 389,
    isMostBooked: true,
    shortDescription:
      "Perfect weekend trek from Dehradun/Mussoorie - summit views of Swargarohini, Bandarpunch and the Kedarnath range.",
    highlights: [
      "Perfect 2-day weekend trek from Dehradun",
      "Nag Tibba temple at summit - serpent god of the hills",
      "Views of Swargarohini, Bandarpunch, Kedarnath range",
      "Dense oak and rhododendron forest",
      "Minimal fitness requirement - great for beginners",
      "Year-round trek with snow in Dec-Feb",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Pantwari to Camp",
        altitude: "2,500m",
        distance: "8km",
        description:
          "Drive to Pantwari (2,000m), trek to the forest campsite. Campfire dinner under stars.",
      },
      {
        day: 2,
        title: "Summit to Pantwari to Dehradun",
        altitude: "3,022m",
        distance: "8km",
        description:
          "Early morning summit push. Views of the Himalayan range. Descend and drive back to Dehradun.",
      },
    ],
    inclusions: [
      "Guide",
      "Meals during trek",
      "Camping equipment",
      "Transport from Dehradun",
    ],
    exclusions: ["Personal gear", "Personal expenses"],
  },
  {
    slug: "hampta-pass",
    name: "Hampta Pass Trek",
    state: "Himachal Pradesh",
    district: "Kullu and Lahaul-Spiti",
    maxAltitudeM: 4270,
    maxAltitudeFt: 14100,
    trekDistanceKm: 35,
    durationDays: 5,
    durationLabel: "4-5 Days",
    difficulty: "Moderate",
    bestSeason: "June-September (monsoon - best time)",
    startPoint: "Jobra (20km from Manali)",
    endPoint: "Chatru (Lahaul Valley)",
    priceFrom: 9000,
    priceTo: 16000,
    rating: 4.9,
    reviewCount: 356,
    isTrending: true,
    isEditorsPick: true,
    shortDescription:
      "India's most dramatic crossover trek - lush green Kullu Valley to stark desert Lahaul in a single pass crossing.",
    highlights: [
      "Dramatic crossover: green Kullu Valley to desert Lahaul in one day",
      "Chandratal Lake optional - Moon Lake at 4,300m, stunning crescent",
      "Roaring glacial rivers, waterfalls, alpine wildflower meadows",
      "Unique experience of two completely different Himalayas",
      "Chika, Balu Ka Ghera, Shea Goru - stunning campsite progression",
      "Best during monsoon - most dramatic waterfalls and greenery",
      "Connects Pir Panjal range to Chandrabhaga range",
    ],
    itinerary: [
      {
        day: 1,
        title: "Manali to Jobra to Chika",
        altitude: "3,100m",
        distance: "3km trek",
        description:
          "Drive from Manali to Jobra (20km). Short trek to Chika campsite on the banks of the Rani Nallah river.",
      },
      {
        day: 2,
        title: "Chika to Balu Ka Ghera",
        altitude: "3,720m",
        distance: "8km",
        description:
          "Trek along the glacial river with multiple stream crossings. Alpine meadows with wildflowers. Arrive at Balu Ka Ghera.",
      },
      {
        day: 3,
        title: "CROSSOVER DAY - Hampta Pass to Shea Goru",
        altitude: "4,270m",
        distance: "14km",
        description:
          "EPIC DAY. Steep ascent to Hampta Pass (4,270m). Landscape transforms dramatically - green valley behind, stark Lahaul desert ahead. Descend to Shea Goru (3,700m).",
      },
      {
        day: 4,
        title: "Shea Goru to Chatru to Chandratal",
        altitude: "4,300m",
        distance: "5km trek",
        description:
          "Trek to Chatru (3,360m) and drive to Chandratal Lake. Camp beside this crescent-shaped jewel at 4,300m.",
      },
      {
        day: 5,
        title: "Chandratal to Manali",
        description: "Drive back to Manali via Rohtang Pass (90km).",
      },
    ],
    inclusions: [
      "Expert guide",
      "All meals",
      "Permits",
      "Camping equipment",
      "Transport from Manali",
      "River crossing assistance",
    ],
    exclusions: ["Personal gear", "Travel insurance", "Chandratal charges"],
  },
  {
    slug: "sar-pass",
    name: "Sar Pass Trek",
    state: "Himachal Pradesh",
    district: "Kullu (Parvati Valley)",
    maxAltitudeM: 4270,
    maxAltitudeFt: 14010,
    trekDistanceKm: 48,
    durationDays: 5,
    durationLabel: "5 Days",
    difficulty: "Moderate",
    bestSeason: "April-June (snow), September-October",
    startPoint: "Kasol Village",
    endPoint: "Barshaini / Kasol",
    priceFrom: 8500,
    priceTo: 15000,
    rating: 4.8,
    reviewCount: 291,
    isTrending: true,
    shortDescription:
      "Parvati Valley crown jewel - Sar Lake at 4,270m with thrilling snow slide descent and remote village experiences.",
    highlights: [
      "Sar Lake at 4,270m - turquoise jewel beside the pass",
      "Thrilling snow slope descent from the pass in April-May",
      "Parvati Valley - India's most mystical and beautiful valley",
      "Remote villages: Grahan, Mina Thatch, Nagaru",
      "Grahan village homestays - authentic Himachali culture",
      "Dense pine and oak forests; open alpine meadows",
      "Views of Pin Parvati range and Kullu peaks",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kasol to Grahan Village",
        altitude: "2,380m",
        distance: "8.5km",
        description:
          "Trek from Kasol through Parvati Valley forest to Grahan village (2,380m). Homestay or camp. Traditional Himachali dinner.",
      },
      {
        day: 2,
        title: "Grahan to Mina Thatch",
        altitude: "2,900m",
        distance: "9km",
        description:
          "Ascend through alpine meadows and dense forest to Mina Thatch campsite (2,900m).",
      },
      {
        day: 3,
        title: "Mina Thatch to Nagaru",
        altitude: "3,550m",
        distance: "6km",
        description:
          "Above treeline, snow patches begin. Reach Nagaru camp (3,550m) with panoramic views.",
      },
      {
        day: 4,
        title: "Nagaru to Sar Pass to Biskeri Thach",
        altitude: "4,270m",
        distance: "12km",
        description:
          "Summit to Sar Pass (4,270m). Views of Sar Lake. Thrilling snow slide descent in April-May. Long descent to Biskeri Thach.",
      },
      {
        day: 5,
        title: "Biskeri Thach to Barshaini to Kasol",
        distance: "14km",
        description:
          "Final descent through forest to Barshaini village. Drive to Kasol.",
      },
    ],
    inclusions: ["Guide", "All meals", "Permits", "Equipment", "Transport"],
    exclusions: ["Personal gear", "Travel insurance"],
  },
  {
    slug: "kheerganga",
    name: "Kheerganga Trek",
    state: "Himachal Pradesh",
    district: "Kullu (Parvati Valley)",
    maxAltitudeM: 2950,
    maxAltitudeFt: 9678,
    trekDistanceKm: 14,
    durationDays: 2,
    durationLabel: "2 Days",
    difficulty: "Easy",
    bestSeason: "May-June, September-October",
    startPoint: "Barshaini",
    endPoint: "Barshaini",
    priceFrom: 3000,
    priceTo: 6000,
    rating: 4.7,
    reviewCount: 512,
    isMostBooked: true,
    shortDescription:
      "Parvati Valley beloved trail ending in a magical natural hot spring - the reward after the trek is truly heavenly.",
    highlights: [
      "Natural hot spring at Kheerganga - soak after the trek",
      "Beautiful Parvati Valley forest trail",
      "Lord Shiva meditation spot - ancient spiritual significance",
      "Stunning mountain meadow with circular hot pool",
      "Perfect beginner trek and family friendly",
      "Panoramic views of Parvati Valley",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kasol to Barshaini to Kheerganga",
        altitude: "2,950m",
        distance: "7km",
        description:
          "Drive to Barshaini, trek through forest and meadows to Kheerganga. Dip in the hot spring! Overnight camp.",
      },
      {
        day: 2,
        title: "Kheerganga to Barshaini to Kasol",
        distance: "7km",
        description: "Descend in the morning, return to Kasol.",
      },
    ],
    inclusions: [
      "Guide",
      "Meals during trek",
      "Camping equipment",
      "Transport",
    ],
    exclusions: ["Personal gear", "Personal expenses"],
  },
  {
    slug: "triund",
    name: "Triund Trek",
    state: "Himachal Pradesh",
    district: "Kangra (Dharamshala)",
    maxAltitudeM: 2850,
    maxAltitudeFt: 9350,
    trekDistanceKm: 18,
    durationDays: 2,
    durationLabel: "2 Days",
    difficulty: "Easy",
    bestSeason: "March-June, September-December",
    startPoint: "McLeod Ganj / Dharamkot",
    endPoint: "McLeod Ganj",
    priceFrom: 2500,
    priceTo: 5500,
    rating: 4.7,
    reviewCount: 678,
    isMostBooked: true,
    shortDescription:
      "McLeod Ganj iconic trek - dramatic views of the Dhauladhar range from a stunning ridge campsite.",
    highlights: [
      "Iconic Dharamshala trek with Dhauladhar range backdrop",
      "McLeod Ganj - home of Dalai Lama and Tibetan culture",
      "Triund ridge campsite - one of India most scenic",
      "Views of the snow-capped Dhauladhar massif",
      "Easy enough for all ages and fitness levels",
      "Moonlit nights on the ridge with panoramic stargazing",
    ],
    itinerary: [
      {
        day: 1,
        title: "McLeod Ganj to Triund Ridge",
        altitude: "2,850m",
        distance: "9km",
        description:
          "Trek from McLeod Ganj through oak and rhododendron forest to Triund ridge. Sunset over the Dhauladhar. Overnight camp.",
      },
      {
        day: 2,
        title: "Triund to McLeod Ganj",
        distance: "9km",
        description:
          "Early morning views of the Dhauladhar at sunrise. Descend to McLeod Ganj.",
      },
    ],
    inclusions: ["Guide", "Meals during trek", "Camping equipment"],
    exclusions: ["Personal gear", "Transport to McLeod Ganj"],
  },
  {
    slug: "beas-kund",
    name: "Beas Kund Trek",
    state: "Himachal Pradesh",
    district: "Kullu (Manali)",
    maxAltitudeM: 3700,
    maxAltitudeFt: 12139,
    trekDistanceKm: 20,
    durationDays: 3,
    durationLabel: "3 Days",
    difficulty: "Easy to Moderate",
    bestSeason: "June-October",
    startPoint: "Dhundi (Manali)",
    endPoint: "Dhundi",
    priceFrom: 5500,
    priceTo: 9000,
    rating: 4.7,
    reviewCount: 187,
    shortDescription:
      "Source of the sacred Beas River - a glacial lake with spectacular views of Hanuman Tibba and Shitidhar peak.",
    highlights: [
      "Beas Kund - source of the sacred River Beas",
      "Views of Hanuman Tibba (5,928m) and Shitidhar",
      "Glacial lake with crystal clear water",
      "Solang Valley meadows and Dhundi base",
      "Suitable for beginners and families",
      "Manali - easy access and great amenities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Manali to Dhundi to Bakarthach",
        altitude: "3,200m",
        distance: "7km",
        description:
          "Drive to Dhundi (2,800m). Trek to Bakarthach meadow campsite.",
      },
      {
        day: 2,
        title: "Bakarthach to Beas Kund",
        altitude: "3,700m",
        distance: "6km",
        description:
          "Trek to Beas Kund glacial lake. Views of Hanuman Tibba. Return to Bakarthach.",
      },
      {
        day: 3,
        title: "Bakarthach to Dhundi to Manali",
        distance: "7km",
        description: "Descend to Dhundi, drive back to Manali.",
      },
    ],
    inclusions: [
      "Guide",
      "Meals",
      "Permits",
      "Equipment",
      "Transport from Manali",
    ],
    exclusions: ["Personal gear", "Travel insurance"],
  },
];

export const getTrekBySlug = (slug: string): Trek | undefined =>
  treks.find((t) => t.slug === slug);

export const getTreksByState = (state: TrekState): Trek[] =>
  treks.filter((t) => t.state === state);

export const getTrendingTreks = (): Trek[] =>
  treks.filter((t) => t.isTrending).slice(0, 6);

export const getFeaturedTreks = (): Trek[] =>
  treks.filter((t) => t.isMostBooked || t.isEditorsPick).slice(0, 6);
