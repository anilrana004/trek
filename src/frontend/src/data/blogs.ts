export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category:
    | "Trekking Tips"
    | "Trek Stories"
    | "Gear & Guides"
    | "Spiritual Journeys"
    | "Photography";
  author: string;
  authorBio: string;
  date: string;
  readTime: number;
  tags: string[];
  isFeatured?: boolean;
  relatedTrek?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kedarkantha-winter-2026-guide",
    title:
      "Kedarkantha in Winter: India's Most Beautiful Snow Trek - A Complete 2026 Guide",
    excerpt:
      "Frozen lakes, snow-laden deodar forests, and a 360-degree Himalayan sunrise from 12,500 feet - Kedarkantha in winter is unlike anything else in Indian trekking.",
    category: "Trek Stories",
    author: "Arjun Rawat",
    authorBio:
      "Senior Trek Leader, Global Trek | 15 years of Himalayan guiding",
    date: "2026-01-15",
    readTime: 12,
    tags: ["Kedarkantha", "Winter Trek", "Uttarakhand", "2026"],
    isFeatured: true,
    relatedTrek: "kedarkantha",
    content:
      "The alarm rings at 3:30 AM. Outside the tent, it is -8 degrees C, and the stars are impossibly bright over the Sankri valley. This is Kedarkantha in December, and it is the most beautiful place on Earth.\n\nIndia's most celebrated winter trek earns its reputation every single time. The 25km circuit from Sankri village to the 3,810m summit has converted thousands of first-time trekkers into lifelong Himalayan addicts.\n\n## Why December to February is Magical\n\nThe Sankri valley receives heavy snowfall from December onwards. By mid-December, Juda Ka Talab (the lake at 3,000m) freezes solid. The deodar forest trail transforms into a winter wonderland, with 2-4 feet of snow turning every step into a postcard moment.\n\nThe summit push before dawn is the centrepiece. As you climb the snow ridge at 5 AM with headlamps, the Himalayan sky transitions from deep purple to rose gold. When you reach the summit at sunrise, you see Swargarohini, Bandarpunch, Kalanag, and over a dozen Himalayan peaks turn golden simultaneously.\n\n## Getting There\n\nFrom Dehradun: Drive 210km (8hrs) via Mussoorie, Nainbagh, and Purola to Sankri village.\n\n## Essential Gear for Winter Kedarkantha\n\nLayers: Base layer (moisture-wicking thermal), Mid layer (fleece 200gsm), Outer layer (waterproof Gore-Tex jacket), Down jacket for camp (800+ fill power). Sleeping bag rated to -10 degrees C is non-negotiable. Balaclava, fleece gloves, waterproof mittens, sunglasses (UV400).",
  },
  {
    slug: "chopta-tungnath-spirituality-beauty",
    title:
      "Chopta Tungnath: A Trek That Blends Spirituality and Himalayan Beauty",
    excerpt:
      "Where the world's highest Shiva temple meets the mini-Switzerland of India - Chopta and Tungnath offer a rare combination of pilgrimage and peak adventure.",
    category: "Spiritual Journeys",
    author: "Priya Sharma",
    authorBio:
      "Travel Writer and Trekker | Specialist in Himalayan Spirituality",
    date: "2026-02-10",
    readTime: 10,
    tags: ["Chopta", "Tungnath", "Chandrashila", "Panch Kedar"],
    isFeatured: true,
    relatedTrek: "chopta-tungnath",
    content:
      "There is a specific kind of silence at 3,680 metres above sea level. Not the silence of absence, but the silence of something immense and ancient being present. Standing at the gates of Tungnath temple, with the wind carrying the faint smell of incense and the Chaukhamba massif towering white on the horizon, you understand why this place has been sacred for over a millennium.\n\n## The Mini-Switzerland That Surprises You\n\nChopta is known as the Mini-Switzerland of Uttarakhand for its rolling bugyals (alpine meadows). In April and May, rhododendron forests explode in crimson and pink. In December and January, everything turns white.\n\n## The Sacred Temple\n\nTungnath translates to Lord of the Peaks. This is the highest Shiva temple in the world at 3,680m. The stone structure, built by the Pandavas, has survived Himalayan winters for over 1,000 years. According to mythology, this is where Shiva's arms (bahu) appeared when he took bull form.\n\n## The Summit View\n\nFrom Tungnath, continue 1.5km to Chandrashila Peak (4,000m). The panorama includes Nanda Devi (7,816m), Trishul (7,120m), Chaukhamba (7,138m), and Kedarnath Temple visible as a tiny white dot in the valley below.",
  },
  {
    slug: "char-dham-2026-complete-guide",
    title:
      "Char Dham Yatra 2026: Complete Registration Guide, Dates, Cost and Tips",
    excerpt:
      "Everything you need to plan the Char Dham Yatra 2026 - temple opening dates, online registration, package costs, and practical tips for first-timers.",
    category: "Spiritual Journeys",
    author: "Vikram Singh Negi",
    authorBio:
      "Yatra Coordinator, Global Trek | 12 years of Char Dham logistics",
    date: "2026-03-01",
    readTime: 15,
    tags: ["Char Dham", "Yatra 2026", "Kedarnath", "Badrinath", "Registration"],
    isFeatured: true,
    content:
      "The Char Dham Yatra 2026 opening dates have been announced. Temple opening dates 2026 (tentative): Yamunotri May 5, Gangotri May 5, Kedarnath May 2, Badrinath May 8-10.\n\n## Registration - Step by Step\n\nOnline biometric registration is MANDATORY for all pilgrims. Visit registrationandtouristcare.uk.gov.in, create an account, enter pilgrim details, upload Aadhaar or passport, select preferred date and shrine, download e-pass.\n\n## Costs\n\nBudget packages Rs 25,000-35,000/person. Standard Rs 40,000-55,000. Luxury Rs 65,000-85,000. Helicopter (Kedarnath) Rs 75,000+.\n\n## Best Time\n\nSeptember-October (post-monsoon) is the most recommended window by experienced yatris - best weather, less crowd, clear skies.",
  },
  {
    slug: "hampta-pass-crossover-trek",
    title:
      "Hampta Pass: Why This Crossover Trek Will Change the Way You See the Himalayas",
    excerpt:
      "In one dramatic day on Hampta Pass, you walk from lush Kullu Valley to stark Lahaul desert - experiencing two completely different Himalayas in a single crossing.",
    category: "Trek Stories",
    author: "Ananya Kapoor",
    authorBio: "Adventure Travel Writer | Himalayan Trek Enthusiast",
    date: "2026-02-20",
    readTime: 11,
    tags: ["Hampta Pass", "Himachal Pradesh", "Chandratal", "Monsoon Trek"],
    isFeatured: true,
    relatedTrek: "hampta-pass",
    content:
      "Day 3 of the Hampta Pass trek is unlike any other day in mountain travel. You wake up at Balu Ka Ghera (3,720m) in the green, lush Kullu Valley. By evening, you are at Shea Goru (3,700m) in the Lahaul Valley - a completely barren, moonscape-like terrain. Same altitude. Completely different planet.\n\nThis is why Hampta Pass is special. It is not just a trek. It is a geographic and climatic transformation that you walk through in real time.\n\n## Why Monsoon Season is the Best Time\n\nThe Kullu Valley is at peak greenery and wildflower bloom June-September. Waterfalls are in full force. The contrast between Kullu and Lahaul is maximum. Chandratal Lake, visited after the pass, reflects the bluest of skies.\n\n## Chandratal: The Moon Lake\n\nThe optional extension after Hampta Pass is Chandratal Lake at 4,300m. This crescent-shaped glacial lake is one of the most extraordinary bodies of water in the Himalayas - a deep, impossibly blue lake surrounded by barren brown mountains.",
  },
  {
    slug: "har-ki-dun-valley-of-gods",
    title: "Har Ki Dun: Walking Through the Valley of Gods in Uttarakhand",
    excerpt:
      "The Har Ki Dun valley has been walking distance from heaven since the time of the Mahabharata. Here is what makes this 7-day trek one of the most extraordinary in India.",
    category: "Trek Stories",
    author: "Rohan Bisht",
    authorBio: "Trekking Guide and Wilderness Educator, Global Trek",
    date: "2026-01-28",
    readTime: 13,
    tags: ["Har Ki Dun", "Uttarakhand", "Sankri", "Govind Wildlife Sanctuary"],
    relatedTrek: "har-ki-dun",
    content:
      "The Mahabharata says the Pandavas walked through the Swargarohini valley on their final journey to heaven. Har Ki Dun - the Valley of Gods - is one of the most beautiful and historically significant trekking destinations in the Indian Himalayas.\n\n## The Mythology\n\nThe valley takes its name from Sanskrit: Har (Lord Shiva) + Ki (of) + Dun (valley). The Valley of Lord Shiva. Osla village, on the approach, is home to the unique Duryodhana Temple - in this valley, the Mahabharata villain is worshipped as a god.\n\n## The Trek Experience\n\nSankri to Har Ki Dun is a 7-day moderate trek through Govind Pashu Vihar National Park. The trail follows the Supin River valley, passing through dense forest, before opening into the Har Ki Dun meadow at 3,566m.\n\n## Wildlife\n\nGovind Pashu Vihar is a protected biosphere. Our guides have encountered snow leopard tracks, Himalayan brown bear, musk deer, and the Himalayan monal pheasant - Uttarakhand state bird.",
  },
  {
    slug: "himalayan-trek-gear-checklist-2026",
    title:
      "What to Pack for a Himalayan Trek: The Ultimate 2026 Gear Checklist",
    excerpt:
      "After 15 years of guiding treks in the Himalayas, we have seen what gear makes or breaks a trek. Here is the definitive packing list for 2026.",
    category: "Gear & Guides",
    author: "Deepak Negi",
    authorBio: "Senior Trek Guide and Gear Specialist, Global Trek",
    date: "2026-02-05",
    readTime: 14,
    tags: ["Gear", "Packing List", "Trekking Tips", "Himalayan Trek"],
    isFeatured: true,
    content:
      "The layering system is not optional in the Himalayas. Base layer: moisture-wicking synthetic or merino wool - NOT cotton. Mid layer: Fleece 200gsm or down vest. Outer layer: Waterproof and windproof hardshell jacket - Gore-Tex or equivalent. Down jacket for camp - 700+ fill power.\n\n## Footwear: The Most Critical Choice\n\nRequirements: High ankle support, waterproof membrane (Gore-Tex preferred), Vibram rubber sole, BREAK THEM IN before the trek - 2 weeks minimum.\n\n## Altitude Essentials\n\nSunscreen SPF50+: UV radiation increases 4% per 300m altitude. Sunglasses UV400. Water purification tablets. Diamox (Acetazolamide) - consult your doctor. First aid kit: bandages, antiseptic, blister plasters, ORS sachets, Ibuprofen.",
  },
  {
    slug: "kuari-pass-lord-curzon-trail",
    title:
      "Kuari Pass (Lord Curzon Trail): The Trek Where History Meets the Himalayas",
    excerpt:
      "In 1905, British Viceroy Lord Curzon walked this route and wrote that it was the finest view in the world. 120 years later, the Kuari Pass panorama still stops trekkers in their tracks.",
    category: "Trek Stories",
    author: "Priya Sharma",
    authorBio:
      "Travel Writer and Trekker | Specialist in Himalayan Spirituality",
    date: "2026-03-10",
    readTime: 10,
    tags: ["Kuari Pass", "Lord Curzon Trail", "Nanda Devi", "Uttarakhand"],
    relatedTrek: "kuari-pass",
    content:
      "Lord Curzon, the British Viceroy of India, walked the Kuari Pass route in 1905 and recorded in his diary that the view from the pass was the finest in the world. He was looking at Nanda Devi (7,816m). Standing on the same pass today, 120 years later, it is impossible to argue.\n\n## The Nanda Devi Spectacle\n\nThe full Garhwal Himalayan panorama visible from Kuari Pass (3,820m): Nanda Devi (7,816m), Kamet (7,756m), Dronagiri (7,066m), Chaukhamba (7,138m), Neelkanth (6,596m).\n\n## The Route\n\nThe best approach begins at Auli - the Garhwal ski resort. From Auli, the trail traverses Gorson Bugyal (3,056m) before climbing to Tali, Khullara Top, and finally Kuari Pass. Khullara Top (3,600m) is one of the finest high campsites in India.",
  },
  {
    slug: "sar-pass-parvati-valley-guide",
    title: "Sar Pass Trek: Kasol's Secret Gateway to High Himachal Alps",
    excerpt:
      "From the hippie cafes of Kasol to a 14,000-foot snow pass in five days - Sar Pass is the Parvati Valley's finest high-altitude adventure.",
    category: "Trek Stories",
    author: "Ananya Kapoor",
    authorBio: "Adventure Travel Writer | Himalayan Trek Enthusiast",
    date: "2026-03-22",
    readTime: 11,
    tags: ["Sar Pass", "Kasol", "Parvati Valley", "Himachal Pradesh"],
    relatedTrek: "sar-pass",
    content:
      "Kasol has a reputation. The Parvati Valley village is famous among backpackers. What is less famous is that 5km upstream begins one of the finest high-altitude treks in Himachal Pradesh: the Sar Pass Trek.\n\nFrom Kasol to Sar Pass is a 48km, 5-day journey from 1,580m to 4,270m - a 2,690m ascent through five completely different landscape zones.\n\n## The Snow Slide Moment\n\nIf you trek in April, the descent from Sar Pass involves a thrilling snow slide: you sit on your waterproof and glide 50-100 metres down a snow slope. Every trekker who has done this remembers it with a grin for the rest of their life.\n\n## Grahan Village\n\nGrahan village (Day 1 camp) is an ancient Himachali village of 50 families, reachable only on foot. The homestay experience here - sleeping on local dhurries, eating rajma-rice cooked on wood fire - is the most authentic Himachali cultural experience on any trek circuit.",
  },
  {
    slug: "himalayan-acclimatization-guide",
    title:
      "How to Acclimatize Properly on Himalayan Treks - Doctor-Approved Tips",
    excerpt:
      "Acute Mountain Sickness affects 25% of trekkers above 3,000m. Here is the science-backed guide to acclimatizing safely and enjoying your trek to the fullest.",
    category: "Trekking Tips",
    author: "Dr. Kavitha Rao",
    authorBio:
      "Wilderness Medicine Specialist | Medical Advisor to Global Trek",
    date: "2026-01-20",
    readTime: 12,
    tags: ["AMS", "Acclimatization", "Altitude Sickness", "Safety"],
    isFeatured: true,
    content:
      "Acute Mountain Sickness (AMS) is the most common health issue on Himalayan treks, affecting 25-40% of people who ascend above 3,000m too quickly.\n\n## The Golden Rules\n\nRule 1: Ascend gradually. Above 3,000m, never increase sleeping altitude by more than 300-500m per day. Rule 2: Acclimatize by going high, sleeping low. Rule 3: Never ascend with symptoms. Rule 4: Hydrate - drink 3-4 litres per day. Rule 5: Avoid alcohol and sedatives.\n\n## Diamox (Acetazolamide)\n\nStandard dose: 125mg twice daily, starting 24 hours before ascent. Side effects: tingling in fingers and toes, frequent urination. Consult your doctor 2-3 weeks before the trek.\n\n## What to Do If AMS Strikes\n\nStop ascending immediately. Rest at current altitude for 24 hours. Hydrate. Ibuprofen 400mg for headache. If symptoms worsen after 24hrs: DESCEND 300-500m.",
  },
  {
    slug: "phulara-ridge-indias-finest-walk",
    title: "Phulara Ridge: India's Finest Ridge Walk That Nobody Talks About",
    excerpt:
      "Four hours walking on top of the world with 360-degree Himalayan panorama - Phulara Ridge is India best-kept trekking secret in the Govind Wildlife Sanctuary.",
    category: "Trek Stories",
    author: "Arjun Rawat",
    authorBio:
      "Senior Trek Leader, Global Trek | 15 years of Himalayan guiding",
    date: "2026-02-28",
    readTime: 9,
    tags: ["Phulara Ridge", "Sankri", "Uttarkashi", "Ridge Trek"],
    relatedTrek: "phulara-ridge",
    content:
      "Ask any experienced trekker in Uttarakhand what their favourite day in the mountains was, and a surprising number will say: Phulara Ridge. Not the summit of a famous peak, not a pilgrimage temple, not a lake. A ridge. Four hours of walking on top of the world with the entire Himalayan panorama rotating slowly around you.\n\n## The Ridge Walk\n\nThe Phulara Ridge (3,700m) is traversed on Day 4. The panorama includes: Swargarohini (6,252m), Bandarpunch (6,316m), Kalanag/Black Peak (6,387m), Kedarkantha Summit visible as a snow dome.\n\nYou walk along this ridge for 4 full hours. There is no better use of 4 hours in the Indian outdoors.\n\n## Pushtara Meadow\n\nAfter the ridge, you descend to Pushtara Meadow (2,800m) - a vast green alpine bugyal with a small stream. The Himalayan monal - the state bird of Uttarakhand - is regularly spotted here.",
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((b) => b.slug === slug);

export const getFeaturedBlogs = (): BlogPost[] =>
  blogPosts.filter((b) => b.isFeatured).slice(0, 3);

export const getBlogsByCategory = (
  category: BlogPost["category"],
): BlogPost[] => blogPosts.filter((b) => b.category === category);
