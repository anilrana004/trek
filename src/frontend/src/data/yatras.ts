export interface YatraItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
}

export interface Yatra {
  slug: string;
  name: string;
  subtitle: string;
  state: string;
  templeAltitudeM: number;
  templeAltitudeFt: number;
  durationDays: number;
  durationLabel: string;
  season: string;
  priceFrom: number;
  priceTo: number;
  rating: number;
  reviewCount: number;
  description: string;
  significance: string[];
  highlights: string[];
  itinerary: YatraItineraryDay[];
  transportOptions?: string[];
  registration?: string;
  isFeatured?: boolean;
}

export const yatras: Yatra[] = [
  {
    slug: "kedarnath",
    name: "Kedarnath Yatra",
    subtitle: "Jyotirlinga of Lord Shiva",
    state: "Uttarakhand",
    templeAltitudeM: 3583,
    templeAltitudeFt: 11755,
    durationDays: 4,
    durationLabel: "3-4 Days",
    season: "May-June, September-October 2026",
    priceFrom: 8000,
    priceTo: 20000,
    rating: 4.9,
    reviewCount: 847,
    isFeatured: true,
    description:
      "Kedarnath is the holiest of the 12 Jyotirlingas and one of the four Char Dhams. Situated at 3,583m in the Rudraprayag district, the ancient temple has stood for over 1,200 years. Lord Shiva is believed to have appeared as a bull at this sacred spot to escape the Pandavas after the Kurukshetra war. The temple, restored by Adi Shankaracharya in the 8th century, is surrounded by the majestic Kedarnath range, Kedar Dome, and the Mandakini River.",
    significance: [
      "One of the 12 Jyotirlingas - most sacred Shiva shrines in India",
      "Part of Char Dham Yatra and Panch Kedar circuit",
      "Built by the Pandavas, restored by Adi Shankaracharya in 8th century",
      "Lord Shiva's hump (peetha) is worshipped at the inner sanctum",
      "Surrounded by Kedarnath range, Kedar Dome (6,940m) and Bhagirathi peaks",
      "Mandakini River originates near Vasuki Tal above the temple",
      "Temple opens around Vaishakh Panchami (May) and closes on Bhai Dooj (Nov)",
    ],
    highlights: [
      "Garbha Griha darshan - inner sanctum, hump of divine bull",
      "Mangal Aarti at 4 AM - most powerful spiritual experience",
      "Evening Sandhya Aarti at the temple complex",
      "Helicopter service from Phata/Sersi/Agastmuni",
      "Rudrabhishek and Laghu Rudrabhishek puja arrangements",
      "Stay at Kedarnath altitude - 3,583m overnight",
      "Trek 16km from Gaurikund through majestic mountain trail",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Guptkashi",
        altitude: "1,319m",
        description:
          "Drive 180km from Haridwar/Rishikesh through the scenic Kedar Valley. Pass through Devprayag, Rudraprayag, and reach Guptkashi. Evening visit to Vishwanath Temple. Overnight hotel.",
      },
      {
        day: 2,
        title: "Guptkashi to Gaurikund to Kedarnath Trek",
        altitude: "3,583m",
        description:
          "Drive to Sonprayag (30km), then shuttle to Gaurikund (5km). Begin the 16km trek or take pony/doli to Kedarnath. Arrive by evening. Attend the mesmerizing Sandhya Aarti. Overnight at altitude (3,583m).",
      },
      {
        day: 3,
        title: "Kedarnath Darshan - Return to Guptkashi",
        altitude: "3,583m to 1,319m",
        description:
          "Wake at 3:30 AM for the divine Mangal Aarti (4 AM). Garbha Griha darshan. Special puja options: Rudrabhishek (book in advance). After darshan, begin descent to Gaurikund and drive to Guptkashi.",
      },
      {
        day: 4,
        title: "Guptkashi to Haridwar",
        description:
          "Morning drive back to Haridwar/Rishikesh (180km, 6hrs). Tour ends.",
      },
    ],
    transportOptions: [
      "On Foot (16km from Gaurikund)",
      "Pony/Ghoda (Rs 1,200-2,000 one way)",
      "Doli/Palki (Rs 4,500-6,000 one way)",
      "Helicopter (Rs 7,000-9,000 one way from Phata/Sersi)",
    ],
    registration:
      "Online biometric registration mandatory via devasthanam.uk.gov.in",
  },
  {
    slug: "do-dham",
    name: "Do Dham Yatra",
    subtitle: "Kedarnath + Badrinath",
    state: "Uttarakhand",
    templeAltitudeM: 3583,
    templeAltitudeFt: 11755,
    durationDays: 6,
    durationLabel: "5-7 Days",
    season: "May-June, September-October 2026",
    priceFrom: 15000,
    priceTo: 35000,
    rating: 4.9,
    reviewCount: 534,
    isFeatured: true,
    description:
      "The Do Dham Yatra combines the two most powerful pilgrimage sites of Uttarakhand - Kedarnath (Lord Shiva at 3,583m) and Badrinath (Lord Vishnu at 3,133m). This sacred journey through the Garhwal Himalayas is one of the most fulfilling spiritual experiences available to devotees.",
    significance: [
      "Kedarnath: One of 12 Jyotirlingas of Lord Shiva - 16km trek from Gaurikund",
      "Badrinath: Char Dham abode of Lord Vishnu - road-accessible temple",
      "Mana Village - last Indian village before the Tibet border (3km from Badrinath)",
      "Vasundhara Falls - 122m natural waterfall near Badrinath",
      "Tapt Kund - sacred hot spring for ritual bath before Badrinath darshan",
      "Brahma Kapal - shraddh ritual site on Alaknanda River",
      "Complete Shiva-Vishnu circuit in Garhwal Himalayas",
    ],
    highlights: [
      "Kedarnath Garbha Griha darshan + Mangal Aarti",
      "Badrinath temple - open all day with multiple aarti slots",
      "Mana Village - buy yak wool products and Tibetan handicrafts",
      "Tapt Kund dip - sacred hot spring bath",
      "Vasundhara Falls - stunning 122m waterfall",
      "Helicopter option for Kedarnath + road for Badrinath",
      "Joshimath Shankaracharya Math visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Guptkashi",
        description: "Drive to Guptkashi (180km, 7hrs). Overnight rest.",
      },
      {
        day: 2,
        title: "Guptkashi to Kedarnath Trek",
        altitude: "3,583m",
        description:
          "Drive to Gaurikund, then 16km trek or pony/helicopter to Kedarnath. Sandhya Aarti. Overnight at Kedarnath.",
      },
      {
        day: 3,
        title: "Kedarnath Darshan to Rudraprayag",
        altitude: "3,583m",
        description:
          "Mangal Aarti (4 AM) + Garbha Griha darshan. Descend to Gaurikund. Drive to Rudraprayag/Chamoli.",
      },
      {
        day: 4,
        title: "Drive to Badrinath",
        altitude: "3,133m",
        description:
          "Drive 130km from Guptkashi through Joshimath. Arrive Badrinath. Evening Aarti. Overnight Badrinath.",
      },
      {
        day: 5,
        title: "Badrinath Darshan + Sightseeing",
        description:
          "Morning Badrinath darshan. Tapt Kund ritual bath. Mana Village. Vasundhara Falls. Drive towards Haridwar.",
      },
      {
        day: 6,
        title: "Return to Haridwar",
        description:
          "Complete journey back to Haridwar. Tour ends with divine blessings of both Dhams.",
      },
    ],
    transportOptions: [
      "Helicopter + Road (most popular combination)",
      "Road only (budget option)",
      "Full helicopter (premium)",
    ],
    registration:
      "Biometric registration required for both Kedarnath and Badrinath",
  },
  {
    slug: "char-dham",
    name: "Char Dham Yatra",
    subtitle: "Yamunotri - Gangotri - Kedarnath - Badrinath",
    state: "Uttarakhand",
    templeAltitudeM: 3583,
    templeAltitudeFt: 11755,
    durationDays: 12,
    durationLabel: "10-14 Days",
    season: "May-June (best), September-October 2026",
    priceFrom: 25000,
    priceTo: 75000,
    rating: 4.9,
    reviewCount: 723,
    isFeatured: true,
    description:
      "The Char Dham Yatra is the most sacred pilgrimage circuit in Hinduism, covering the four holy shrines of Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. Completing this circuit is considered equivalent to moksha (liberation).",
    significance: [
      "Yamunotri - Source of River Yamuna; Surya Kund hot spring; 5km trek from Janki Chatti",
      "Gangotri - Source of River Ganga (Bhagirathi); road-accessible; Gaumukh Glacier 18km ahead",
      "Kedarnath - Lord Shiva Jyotirlinga; 16km trek; 3,583m",
      "Badrinath - Lord Vishnu Char Dham abode; road-accessible; 3,133m",
      "Completing the circuit grants liberation (moksha) in Hindu tradition",
      "Yamunotri: cook rice in Surya Kund boiling hot spring - sacred ritual",
      "Gangotri: Bhagirathi Shila where King Bhagirath meditated for Ganga to descend",
    ],
    highlights: [
      "Yamunotri: Surya Kund boiling hot spring + temple darshan",
      "Gangotri: Bhagirathi River source + evening Ganga Aarti",
      "Kedarnath: Garbha Griha inner sanctum + Mangal Aarti at 4 AM",
      "Badrinath: Temple + Mana Village + Tapt Kund + Vasundhara Falls",
      "Complete moksha pilgrimage circuit in one journey",
      "Multiple accommodation grades: Budget/Standard/Luxury/Helicopter",
      "Expert local guides at each shrine",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Barkot (Yamunotri base)",
        description: "Drive to Barkot (200km, 7hrs). Overnight rest.",
      },
      {
        day: 2,
        title: "Yamunotri Darshan",
        altitude: "3,291m",
        description:
          "Drive to Janki Chatti. Trek 5km to Yamunotri temple. Cook rice in Surya Kund. Darshan. Return to Barkot.",
      },
      {
        day: 3,
        title: "Barkot to Uttarkashi",
        description: "Drive to Uttarkashi (100km, 4hrs). Overnight.",
      },
      {
        day: 4,
        title: "Gangotri Darshan",
        altitude: "3,048m",
        description:
          "Drive to Gangotri (100km). Morning darshan. Bhagirathi Shila. Evening Ganga Aarti. Return to Uttarkashi.",
      },
      {
        day: 5,
        title: "Uttarkashi to Guptkashi",
        description: "Long drive via Tehri (250km). Overnight Guptkashi.",
      },
      {
        day: 6,
        title: "Kedarnath Trek",
        altitude: "3,583m",
        description:
          "Gaurikund to 16km trek to Kedarnath. Sandhya Aarti. Overnight altitude stay.",
      },
      {
        day: 7,
        title: "Kedarnath Darshan to Drive toward Badrinath",
        description:
          "Mangal Aarti (4 AM). Garbha Griha darshan. Descent. Drive to Joshimath/Badrinath.",
      },
      {
        day: 8,
        title: "Badrinath Darshan",
        altitude: "3,133m",
        description:
          "Badrinath temple darshan. Tapt Kund. Evening Aarti. Mana Village. Overnight Badrinath.",
      },
      {
        day: 9,
        title: "Badrinath to Rudraprayag",
        description: "Vasundhara Falls visit. Drive towards Haridwar.",
      },
      {
        day: 10,
        title: "Return Haridwar",
        description: "Final drive to Haridwar. Char Dham Yatra complete.",
      },
    ],
    transportOptions: [
      "Road (Budget/Standard/Luxury packages)",
      "Helicopter (Premium - Kedarnath + road for others)",
      "Full Helicopter Circuit (Ultra Premium)",
    ],
    registration:
      "Mandatory biometric + online registration for all 4 dhams via Uttarakhand government portal",
  },
  {
    slug: "panch-kedar",
    name: "Panch Kedar Yatra",
    subtitle: "Five Sacred Shrines of Lord Shiva",
    state: "Uttarakhand",
    templeAltitudeM: 3583,
    templeAltitudeFt: 11755,
    durationDays: 14,
    durationLabel: "12-14 Days",
    season: "May-June, September-October 2026",
    priceFrom: 35000,
    priceTo: 80000,
    rating: 4.9,
    reviewCount: 312,
    description:
      "The Panch Kedar circuit encompasses five sacred shrines where Lord Shiva appeared in the form of a bull to the Pandavas. Each shrine enshrines a different body part: Kedarnath (hump), Tungnath (arms), Rudranath (face), Madhyamaheshwar (navel), and Kalpeshwar (hair). This is one of the most challenging and spiritually rewarding pilgrimages in the Himalayas.",
    significance: [
      "Kedarnath (3,583m): Bull's hump - most famous Jyotirlinga",
      "Tungnath (3,680m): Bull's arms - world's highest Shiva temple",
      "Rudranath (3,600m): Bull's face - most remote of the Panch Kedar",
      "Madhyamaheshwar (3,497m): Bull's navel - set amidst alpine meadows",
      "Kalpeshwar (2,200m): Bull's hair - open year-round",
      "All five temples built by the Pandavas after the Kurukshetra war",
      "Completing Panch Kedar is highly auspicious for moksha",
    ],
    highlights: [
      "Kedarnath Garbha Griha - inner sanctum darshan",
      "Tungnath - world's highest Shiva temple at 3,680m",
      "Rudranath - most remote; trekking through Nanda Devi biosphere",
      "Madhyamaheshwar - stunning meadow at 3,497m",
      "Kalpeshwar - year-round accessible in Urgam Valley",
      "Complete Pandava circuit - deeply mythological journey",
      "Expert Brahmin pujari at each shrine for rituals",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Guptkashi",
        description: "Drive to Guptkashi base.",
      },
      {
        day: 2,
        title: "Kedarnath Trek and Darshan",
        altitude: "3,583m",
        description: "Trek to Kedarnath. Sandhya Aarti. Overnight at altitude.",
      },
      {
        day: 3,
        title: "Kedarnath Mangal Aarti to Return",
        description:
          "4 AM Mangal Aarti. Garbha Griha darshan. Descend to Guptkashi.",
      },
      {
        day: 4,
        title: "Drive to Chopta to Tungnath",
        altitude: "3,680m",
        description:
          "Drive to Chopta. Trek 3.5km to Tungnath. Darshan. Return to Chopta.",
      },
      {
        day: 5,
        title: "Chopta to Gopeshwar (Rudranath base)",
        description:
          "Drive to Gopeshwar. Rest before challenging Rudranath trek.",
      },
      {
        day: 6,
        title: "Rudranath Trek Day 1",
        altitude: "2,400m",
        description: "Begin trek to Rudranath through Ansuya Devi forest.",
      },
      {
        day: 7,
        title: "Rudranath Darshan",
        altitude: "3,600m",
        description: "Complete trek to Rudranath. Darshan. Return to base.",
      },
      {
        day: 8,
        title: "Drive to Madhyamaheshwar base (Ransi)",
        description: "Drive to Ransi village base for Madhyamaheshwar.",
      },
      {
        day: 9,
        title: "Madhyamaheshwar Trek",
        altitude: "3,497m",
        description:
          "Trek 24km to Madhyamaheshwar through beautiful meadows. Darshan.",
      },
      {
        day: 10,
        title: "Madhyamaheshwar to Return to Ransi",
        description: "Descend back to Ransi village.",
      },
      {
        day: 11,
        title: "Drive to Kalpeshwar (Urgam Valley)",
        altitude: "2,200m",
        description: "Drive to Urgam Valley. Short 2km trek to Kalpeshwar.",
      },
      {
        day: 12,
        title: "Kalpeshwar Darshan to Return",
        description: "Darshan at Kalpeshwar. Drive to Joshimath.",
      },
      {
        day: 13,
        title: "Joshimath to Haridwar",
        description: "Drive back to Haridwar. Panch Kedar Yatra complete.",
      },
    ],
    transportOptions: [
      "Road and Trekking (standard)",
      "Helicopter for Kedarnath (premium add-on)",
    ],
    registration: "Biometric registration required for Kedarnath and Tungnath",
  },
];

export const getYatraBySlug = (slug: string): Yatra | undefined =>
  yatras.find((y) => y.slug === slug);

export const getFeaturedYatras = (): Yatra[] =>
  yatras.filter((y) => y.isFeatured);
