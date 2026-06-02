import List       "mo:core/List";
import TripsTypes "types/trips";
import SubTypes   "types/submissions";
import TrekTypes  "types/treks";
import TripsMixin "mixins/trips-api";
import SubMixin   "mixins/submissions-api";
import TreksMixin "mixins/treks-api";



actor {
  // ── Trip catalogue ──────────────────────────────────────────────────────────
  let trips : List.List<TripsTypes.Trip> = List.fromArray([
    { id = "miyar-valley-trek"; slug = "miyar-valley-trek"; name = "Miyar Valley Trek"; country = "India"; subRegion = ?"Himachal"; region = "India, Himachal"; tripType = "Trek"; difficulty = "Moderate Trek"; difficultyGrade = 3; duration = 10; maxAltitude = 4000; maxGroup = 12; departureDate = ?"2026-06-09"; returnDate = ?"2026-06-18"; priceINR = ?94800; priceUSD = ?1150; isPremium = false; isOnRequest = false; imageUrl = null; season = ["summer"] },
    { id = "dzo-jongo-west-summit-6300m"; slug = "dzo-jongo-west-summit-6300m"; name = "Dzo Jongo West Summit (6300m)"; country = "India"; subRegion = ?"Ladakh"; region = "India, Ladakh"; tripType = "Climb"; difficulty = "Trekking Peak"; difficultyGrade = 6; duration = 13; maxAltitude = 6300; maxGroup = 12; departureDate = ?"2026-06-15"; returnDate = ?"2026-06-27"; priceINR = ?109900; priceUSD = ?1660; isPremium = false; isOnRequest = false; imageUrl = null; season = ["summer"] },
    { id = "zalung-karpo-la-5197m-trek"; slug = "zalung-karpo-la-5197m-trek"; name = "Zalung Karpo La (5197m) Trek"; country = "India"; subRegion = ?"Ladakh"; region = "India, Ladakh"; tripType = "Trek"; difficulty = "Challenging Trek"; difficultyGrade = 5; duration = 10; maxAltitude = 5197; maxGroup = 12; departureDate = ?"2026-07-17"; returnDate = ?"2026-07-26"; priceINR = ?99500; priceUSD = ?1250; isPremium = false; isOnRequest = false; imageUrl = null; season = ["monsoon"] },
    { id = "dzo-jongo-kang-yatse-i-twin-summits"; slug = "dzo-jongo-kang-yatse-i-twin-summits"; name = "Dzo Jongo West + Kang Yatse I Twin Summits"; country = "India"; subRegion = ?"Ladakh"; region = "India, Ladakh"; tripType = "Climb"; difficulty = "Demanding Climb"; difficultyGrade = 7; duration = 20; maxAltitude = 6401; maxGroup = 12; departureDate = ?"2026-07-19"; returnDate = ?"2026-08-07"; priceINR = ?205000; priceUSD = ?2750; isPremium = true; isOnRequest = false; imageUrl = null; season = ["monsoon"] },
    { id = "kang-yatse-i-6401m"; slug = "kang-yatse-i-6401m"; name = "Kang Yatse I (6401m)"; country = "India"; subRegion = ?"Ladakh"; region = "India, Ladakh"; tripType = "Climb"; difficulty = "Moderate Climb"; difficultyGrade = 7; duration = 17; maxAltitude = 6401; maxGroup = 8; departureDate = ?"2026-07-22"; returnDate = ?"2026-08-07"; priceINR = ?169000; priceUSD = ?2250; isPremium = false; isOnRequest = false; imageUrl = null; season = ["monsoon"] },
    { id = "bara-banghal-trek"; slug = "bara-banghal-trek"; name = "Bara Banghal Trek"; country = "India"; subRegion = ?"Himachal"; region = "India, Himachal"; tripType = "Trek"; difficulty = "Challenging Trek"; difficultyGrade = 6; duration = 14; maxAltitude = 4800; maxGroup = 12; departureDate = ?"2026-09-19"; returnDate = ?"2026-10-02"; priceINR = ?145000; priceUSD = ?1820; isPremium = false; isOnRequest = false; imageUrl = null; season = ["fall"] },
    { id = "markha-valley-trek"; slug = "markha-valley-trek"; name = "Markha Valley Trek"; country = "India"; subRegion = ?"Ladakh"; region = "India, Ladakh"; tripType = "Trek"; difficulty = "Moderate Trek"; difficultyGrade = 4; duration = 8; maxAltitude = 5274; maxGroup = 12; departureDate = ?"2026-06-15"; returnDate = ?"2026-06-22"; priceINR = ?78500; priceUSD = ?920; isPremium = false; isOnRequest = false; imageUrl = null; season = ["summer"] },
    { id = "everest-base-camp"; slug = "everest-base-camp"; name = "Everest Base Camp"; country = "Nepal"; subRegion = null; region = "Nepal"; tripType = "Trek"; difficulty = "Challenging Trek"; difficultyGrade = 5; duration = 16; maxAltitude = 5500; maxGroup = 16; departureDate = ?"2026-10-16"; returnDate = ?"2026-10-31"; priceINR = ?112000; priceUSD = ?1780; isPremium = false; isOnRequest = false; imageUrl = null; season = ["fall"] },
    { id = "annapurna-base-camp"; slug = "annapurna-base-camp"; name = "Annapurna Base Camp"; country = "Nepal"; subRegion = null; region = "Nepal"; tripType = "Trek"; difficulty = "Moderate Trek"; difficultyGrade = 4; duration = 10; maxAltitude = 4130; maxGroup = 14; departureDate = ?"2026-10-22"; returnDate = ?"2026-10-31"; priceINR = ?76000; priceUSD = ?990; isPremium = false; isOnRequest = false; imageUrl = null; season = ["fall"] },
    { id = "manaslu-circuit-trek"; slug = "manaslu-circuit-trek"; name = "Manaslu Circuit Trek"; country = "Nepal"; subRegion = null; region = "Nepal"; tripType = "Trek"; difficulty = "Challenging Trek"; difficultyGrade = 5; duration = 14; maxAltitude = 5106; maxGroup = 12; departureDate = ?"2026-04-05"; returnDate = ?"2026-04-18"; priceINR = ?98900; priceUSD = null; isPremium = false; isOnRequest = false; imageUrl = null; season = ["spring"] },
  ]);

  // ── Form submissions ────────────────────────────────────────────────────────
  stable var contacts         : List.List<SubTypes.ContactSubmission>     = List.empty();
  stable var newsletters      : List.List<SubTypes.NewsletterSubscription> = List.empty();
  stable var tailorMadeReqs   : List.List<SubTypes.TailorMadeRequest>     = List.empty();
  stable var ghtInterests     : List.List<SubTypes.GHTInterestForm>       = List.empty();
  stable var bookingInquiries : List.List<SubTypes.BookingInquiry>        = List.empty();
  stable var bookingRequests  : List.List<SubTypes.BookingRequest>        = List.empty();

  // ── Shared ID counters (mutable fields wrapped in a record so mixins
  //    can mutate them by reference) ──────────────────────────────────────────
  stable let submissionState = {
    var nextContactId          : Nat = 1;
    var nextNewsletterId       : Nat = 1;
    var nextTailorMadeId       : Nat = 1;
    var nextGHTInterestId      : Nat = 1;
    var nextBookingInquiryId   : Nat = 1;
    var nextBookingRequestId   : Nat = 1;
  };

  // ── Global Trek catalogue (15 treks) ────────────────────────────────────
  let gtTreks : List.List<TrekTypes.Trek> = List.fromArray([
    {
      id = "chopta-tungnath"; slug = "chopta-tungnath";
      name = "Chopta Tungnath Trek"; state = "Uttarakhand";
      district = ?"Rudraprayag"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #EasyModerate;
      durationDays = 3; maxAltitudeM = 4000; trekDistanceKm = ?6.5;
      priceFrom = 3500; priceTo = ?8000;
      bestSeason = "April–June, September–November, December–February";
      startPoint = ?"Chopta"; endPoint = ?"Chopta";
      highlights = [
        "World's highest Shiva temple (Tungnath, 3,680 m) — 1,000+ years old, part of Panch Kedar",
        "360° summit panorama from Chandrashila: Nanda Devi, Trishul, Chaukhamba",
        "Chopta — Mini Switzerland of India — stunning alpine meadows",
        "Optional Deoriatal Lake with Chaukhamba reflection",
        "Magical winter snow trek December–February"
      ];
      itinerary = [
        { dayNumber = 1; title = "Rishikesh to Chopta"; altitude = ?"2,680 m"; distanceKm = null; durationHrs = ?8.0; meals = ?"Dinner"; accommodation = ?"Camp/Guesthouse"; description = "Drive 220 km from Rishikesh through Ukhimath. Acclimatization walk around Chopta meadows. Campfire dinner under the stars."; waypoints = ["Rishikesh", "Ukhimath", "Chopta"] },
        { dayNumber = 2; title = "Chopta – Tungnath – Chandrashila – Deoriatal"; altitude = ?"4,000 m"; distanceKm = ?6.5; durationHrs = ?6.0; meals = ?"Breakfast, Packed Lunch"; accommodation = ?"Sari Village"; description = "Trek 3.5 km to Tungnath Temple then 1.5 km to Chandrashila summit for 360° Himalayan views. Descend to Chopta and drive to Sari village."; waypoints = ["Chopta", "Tungnath Temple", "Chandrashila"] },
        { dayNumber = 3; title = "Deoriatal Lake and Return"; altitude = ?"2,438 m"; distanceKm = ?6.0; durationHrs = ?4.0; meals = ?"Breakfast"; accommodation = null; description = "Morning trek to Deoriatal — an emerald lake with Chaukhamba reflection. Return to Sari then drive back to Rishikesh."; waypoints = ["Sari", "Deoriatal Lake"] }
      ];
      inclusions = ["Certified trek guide", "Camp accommodation", "All meals on trek", "Forest entry permit", "First aid kit"];
      exclusions = ["Travel to/from Rishikesh", "Personal trekking gear", "Tips and gratuities", "Travel insurance"];
      packingList = ["Warm jacket", "Trekking poles", "Rain poncho", "Headlamp", "Sunscreen", "Personal medication"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is this trek suitable for beginners?"; answer = "Yes, Chopta Tungnath is rated Easy-to-Moderate and is ideal for first-time trekkers." },
        { question = "When does Tungnath Temple open in 2026?"; answer = "The temple typically opens around Vaishakh Panchami (May 2026) and closes on Bhai Dooj in November." }
      ];
      isTrending = true; isEditorsPick = true; isMostBooked = false;
      imageUrl = null;
      description = "Chopta Tungnath is a spiritual and scenic wonder — home to the world's highest Shiva temple at 3,680 m and the thrilling Chandrashila summit at 4,000 m. Mini Switzerland of India, this trek offers sweeping Himalayan panoramas and a magical winter snow experience.";
    },
    {
      id = "har-ki-dun"; slug = "har-ki-dun";
      name = "Har Ki Dun Trek"; state = "Uttarakhand";
      district = ?"Uttarkashi"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #Moderate;
      durationDays = 8; maxAltitudeM = 3566; trekDistanceKm = ?53.0;
      priceFrom = 12000; priceTo = ?18000;
      bestSeason = "April–June, September–November";
      startPoint = ?"Sankri"; endPoint = ?"Sankri";
      highlights = [
        "Valley of Gods — mythological route the Pandavas took to heaven",
        "Views of Swargarohini, Bandarpunch, and Kalanag peaks",
        "Ancient villages Osla and Gangar with traditional Himalayan architecture",
        "Optional Ruinsara Lake at 3,900 m",
        "Diverse wildlife: Himalayan monal, musk deer"
      ];
      itinerary = [
        { dayNumber = 1; title = "Dehradun to Sankri"; altitude = ?"1,950 m"; distanceKm = null; durationHrs = ?8.0; meals = ?"Dinner"; accommodation = ?"Hotel/Homestay"; description = "Drive 210 km through the Tons Valley to Sankri village, the base camp for Har Ki Dun."; waypoints = ["Dehradun", "Purola", "Mori", "Sankri"] },
        { dayNumber = 2; title = "Sankri to Seema"; altitude = ?"2,600 m"; distanceKm = ?12.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Drive to Taluka then trek through dense forests and meadows along the Tons River to Seema camp."; waypoints = ["Taluka", "Seema"] },
        { dayNumber = 3; title = "Seema to Osla"; altitude = ?"2,565 m"; distanceKm = ?9.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through oak and rhododendron forest to Osla village. Visit the unique Duryodhana Temple."; waypoints = ["Seema", "Osla Village", "Duryodhana Temple"] },
        { dayNumber = 4; title = "Osla to Har Ki Dun Base"; altitude = ?"3,200 m"; distanceKm = ?12.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through Kalkatidhar grasslands to base camp with dramatic views of Swargarohini massif."; waypoints = ["Osla", "Kalkatidhar", "Har Ki Dun Base"] },
        { dayNumber = 5; title = "Har Ki Dun Valley Exploration"; altitude = ?"3,566 m"; distanceKm = ?8.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Full day exploration of the valley floor. Optional extension to Maninda Lake (4,100 m)."; waypoints = ["Har Ki Dun Valley", "Jaundhar Glacier viewpoint"] },
        { dayNumber = 6; title = "Har Ki Dun to Osla"; altitude = ?"2,565 m"; distanceKm = ?12.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Descend back through the valley to Osla."; waypoints = ["Har Ki Dun", "Osla"] },
        { dayNumber = 7; title = "Osla to Sankri"; altitude = ?"1,950 m"; distanceKm = ?21.0; durationHrs = ?7.0; meals = ?"Breakfast, Lunch"; accommodation = ?"Hotel"; description = "Long descent via Seema back to Sankri."; waypoints = ["Osla", "Seema", "Sankri"] },
        { dayNumber = 8; title = "Sankri to Dehradun"; altitude = null; distanceKm = null; durationHrs = ?8.0; meals = ?"Breakfast"; accommodation = null; description = "Drive back to Dehradun."; waypoints = ["Sankri", "Dehradun"] }
      ];
      inclusions = ["Certified guide", "Camp accommodation", "All meals on trek", "National Park permit", "First aid"];
      exclusions = ["Transport to/from Dehradun", "Personal gear", "Travel insurance"];
      packingList = ["Warm layers", "Waterproof jacket", "Trekking poles", "Gaiters", "Headlamp"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is a permit required?"; answer = "Yes, Govind Pashu Vihar National Park entry permit is required and included in the package." },
        { question = "What is the mythological significance?"; answer = "Har Ki Dun literally means Valley of Gods — legend holds this is where the Pandavas began their ascent to heaven (Swargarohan)." }
      ];
      isTrending = false; isEditorsPick = true; isMostBooked = false;
      imageUrl = null;
      description = "Har Ki Dun — the Valley of Gods — is one of Uttarakhand's most mythologically significant treks, leading through ancient Himalayan villages and dense forests to a cradle-shaped valley. The trek offers stunning views of Swargarohini and Bandarpunch peaks.";
    },
    {
      id = "kedarkantha"; slug = "kedarkantha";
      name = "Kedarkantha Trek"; state = "Uttarakhand";
      district = ?"Uttarkashi"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #EasyModerate;
      durationDays = 6; maxAltitudeM = 3810; trekDistanceKm = ?25.0;
      priceFrom = 8000; priceTo = ?14000;
      bestSeason = "December–April (best), May–June, September–October";
      startPoint = ?"Sankri"; endPoint = ?"Sankri";
      highlights = [
        "India's most celebrated winter trek — 360° snow summit views",
        "Panorama of Swargarohini, Bandarpunch, Kalanag, Black Peak from summit",
        "Juda Ka Talab — magical frozen lake in winter",
        "Summit a Himalayan peak without technical climbing gear",
        "Beautiful deodar and pine forest campsites"
      ];
      itinerary = [
        { dayNumber = 1; title = "Dehradun to Sankri"; altitude = ?"2,000 m"; distanceKm = null; durationHrs = ?8.0; meals = ?"Dinner"; accommodation = ?"Hotel"; description = "Drive 210 km to Sankri, the quaint Garhwali base village."; waypoints = ["Dehradun", "Sankri"] },
        { dayNumber = 2; title = "Sankri to Juda Ka Talab"; altitude = ?"2,950 m"; distanceKm = ?6.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through dense deodar forests to the beautiful Juda Ka Talab — a frozen lake in winter months."; waypoints = ["Sankri", "Juda Ka Talab"] },
        { dayNumber = 3; title = "Juda Ka Talab to Kedarkantha Base"; altitude = ?"3,430 m"; distanceKm = ?4.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Short ascent above the tree line to the base camp with spectacular ridge views."; waypoints = ["Juda Ka Talab", "Kedarkantha Base"] },
        { dayNumber = 4; title = "Summit Day — Kedarkantha"; altitude = ?"3,810 m"; distanceKm = ?10.0; durationHrs = ?7.0; meals = ?"Breakfast, Packed Lunch, Dinner"; accommodation = ?"Camp"; description = "Pre-dawn start to summit Kedarkantha for golden sunrise views over the Himalayan horizon. Descend to Juda Ka Talab camp."; waypoints = ["Base Camp", "Kedarkantha Summit", "Juda Ka Talab"] },
        { dayNumber = 5; title = "Juda Ka Talab to Sankri"; altitude = ?"2,000 m"; distanceKm = ?6.0; durationHrs = ?3.0; meals = ?"Breakfast, Lunch"; accommodation = null; description = "Descend through the forest to Sankri then drive to Dehradun."; waypoints = ["Juda Ka Talab", "Sankri"] }
      ];
      inclusions = ["Guide and support staff", "Camp accommodation", "All meals on trek", "Camping equipment", "First aid"];
      exclusions = ["Travel to/from Dehradun", "Personal gear", "Insurance"];
      packingList = ["Warm sleeping bag", "Thermal layers", "Snow gaiters", "Crampons (rental available)", "Sunglasses"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is this the best winter trek in India?"; answer = "Kedarkantha is consistently rated India's #1 winter trek for its accessible summit and spectacular snow views." },
        { question = "Do I need prior trekking experience?"; answer = "No. The trek is Easy-to-Moderate and suitable for first-timers with basic fitness." }
      ];
      isTrending = true; isEditorsPick = true; isMostBooked = true;
      imageUrl = null;
      description = "Kedarkantha is India's most popular winter trek — a stunning 3,810 m summit offering 360° views of snow-clad Himalayan peaks. The frozen Juda Ka Talab lake, beautiful deodar forests, and achievable summit make it perfect for beginners and seasoned trekkers alike.";
    },
    {
      id = "kuari-pass"; slug = "kuari-pass";
      name = "Kuari Pass Trek"; state = "Uttarakhand";
      district = ?"Chamoli"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #Moderate;
      durationDays = 6; maxAltitudeM = 3820; trekDistanceKm = ?22.0;
      priceFrom = 11000; priceTo = ?18000;
      bestSeason = "October–November, March–May, December–February";
      startPoint = ?"Joshimath"; endPoint = ?"Tapovan";
      highlights = [
        "Grandest amphitheater view: Nanda Devi, Kamet, Dronagiri, Chaukhamba from the pass",
        "Gorson Bugyal — one of Uttarakhand's most beautiful alpine meadows",
        "Historic Lord Curzon Trail — named after British Viceroy (1905)",
        "World-class Auli ski resort on the approach",
        "Dense rhododendron forests spectacular in April bloom"
      ];
      itinerary = [
        { dayNumber = 1; title = "Haridwar to Joshimath"; altitude = ?"1,890 m"; distanceKm = null; durationHrs = ?9.0; meals = ?"Dinner"; accommodation = ?"Hotel"; description = "Drive 280 km through Devprayag, Rudraprayag, and Karnaprayag to Joshimath."; waypoints = ["Haridwar", "Rishikesh", "Devprayag", "Joshimath"] },
        { dayNumber = 2; title = "Joshimath to Gorson Bugyal"; altitude = ?"3,056 m"; distanceKm = ?6.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Take cable car or trek to Auli ski resort then continue through oak forests to the sweeping Gorson meadow."; waypoints = ["Joshimath", "Auli", "Gorson Bugyal"] },
        { dayNumber = 3; title = "Gorson Bugyal to Tali"; altitude = ?"3,200 m"; distanceKm = ?5.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Gentle ascent through meadows and forest to Tali camp with open valley views."; waypoints = ["Gorson Bugyal", "Tali"] },
        { dayNumber = 4; title = "Tali to Khullara Top"; altitude = ?"3,600 m"; distanceKm = ?6.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Ascend to Khullara Top ridge — best Nanda Devi views of the entire trek."; waypoints = ["Tali", "Khullara Top"] },
        { dayNumber = 5; title = "Khullara to Kuari Pass to Tapovan"; altitude = ?"3,820 m"; distanceKm = ?8.0; durationHrs = ?7.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Summit Kuari Pass for breathtaking panorama then descend to Tapovan village."; waypoints = ["Khullara", "Kuari Pass", "Tapovan"] },
        { dayNumber = 6; title = "Tapovan to Joshimath to Haridwar"; altitude = null; distanceKm = null; durationHrs = ?9.0; meals = ?"Breakfast"; accommodation = null; description = "Drive from Tapovan to Joshimath then back to Haridwar."; waypoints = ["Tapovan", "Joshimath", "Haridwar"] }
      ];
      inclusions = ["Guide and support staff", "All camping accommodation", "All trek meals", "Camping equipment", "First aid kit"];
      exclusions = ["Travel to/from Haridwar", "Auli cable car charges", "Personal gear"];
      packingList = ["Warm layering system", "Trekking poles", "Waterproof jacket", "Sunglasses", "Headlamp"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is Nanda Devi visible from Kuari Pass?"; answer = "Yes — Kuari Pass is one of the rare moderate treks offering a full frontal view of Nanda Devi (7,816 m), India's second highest peak." },
        { question = "Why is it called Lord Curzon Trail?"; answer = "British Viceroy Lord Curzon trekked this route in 1905, famously describing it as the finest walk in the world." }
      ];
      isTrending = false; isEditorsPick = true; isMostBooked = false;
      imageUrl = null;
      description = "Kuari Pass — the historic Lord Curzon Trail — offers the grandest amphitheater of Garhwal Himalayan peaks accessible on a moderate trek. From Gorson Bugyal to the 3,820 m pass, every step rewards with sweeping views of Nanda Devi, Kamet, and Dronagiri.";
    },
    {
      id = "phulara-ridge"; slug = "phulara-ridge";
      name = "Phulara Ridge Trek"; state = "Uttarakhand";
      district = ?"Uttarkashi"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #EasyModerate;
      durationDays = 5; maxAltitudeM = 3700; trekDistanceKm = ?27.0;
      priceFrom = 9000; priceTo = ?14000;
      bestSeason = "May–June, September–October";
      startPoint = ?"Sankri"; endPoint = ?"Sankri";
      highlights = [
        "India's longest continuous ridge walk — 4+ hours on top of the world",
        "360° panorama: Swargarohini, Bandarpunch, Kalanag, Kedarkantha, Rangnala",
        "Pushtara Meadows — vast green alpine bugyal",
        "Offbeat and uncrowded — pure Himalayan solitude",
        "Himalayan Monal sightings in oak and rhododendron forest"
      ];
      itinerary = [
        { dayNumber = 1; title = "Dehradun to Sankri"; altitude = ?"1,950 m"; distanceKm = null; durationHrs = ?8.0; meals = ?"Dinner"; accommodation = ?"Hotel"; description = "Drive 210 km to Sankri. Evening orientation and gear check."; waypoints = ["Dehradun", "Sankri"] },
        { dayNumber = 2; title = "Sankri to Juda Ka Talab"; altitude = ?"2,730 m"; distanceKm = ?6.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through dense deodar forest to the high-altitude Juda Ka Talab lake."; waypoints = ["Sankri", "Juda Ka Talab"] },
        { dayNumber = 3; title = "Juda Ka Talab to Bhoj Gadi"; altitude = ?"3,400 m"; distanceKm = ?8.4; durationHrs = ?7.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Ascend steeply above the tree line to Bhoj Gadi with sweeping ridge views at camp."; waypoints = ["Juda Ka Talab", "Bhoj Gadi"] },
        { dayNumber = 4; title = "Phulara Ridge Day — Bhoj Gadi to Pushtara"; altitude = ?"3,700 m"; distanceKm = ?8.4; durationHrs = ?7.0; meals = ?"Breakfast, Packed Lunch, Dinner"; accommodation = ?"Camp"; description = "The highlight day — walk the spectacular Phulara Ridge at 3,700 m with 360° views across the Garhwal Himalaya. Descend to Pushtara meadows camp."; waypoints = ["Bhoj Gadi", "Phulara Ridge Top", "Pushtara"] },
        { dayNumber = 5; title = "Pushtara to Sankri to Dehradun"; altitude = null; distanceKm = ?8.0; durationHrs = ?5.0; meals = ?"Breakfast"; accommodation = null; description = "Trek down through Taluka village to Sankri then drive back to Dehradun."; waypoints = ["Pushtara", "Taluka", "Sankri"] }
      ];
      inclusions = ["Guide and support team", "All camping", "All trek meals", "National Park permit", "First aid"];
      exclusions = ["Transport to Dehradun", "Personal gear", "Travel insurance"];
      packingList = ["Warm jacket", "Trekking poles", "Rain poncho", "Gaiters", "Headlamp"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is Phulara Ridge suitable for beginners?"; answer = "Yes, it is rated Easy-to-Moderate. The ridge section is non-technical but requires sustained walking for 6–7 hours." },
        { question = "Is this trek crowded?"; answer = "No — Phulara Ridge is one of Uttarakhand's best-kept secrets with very few trekkers, offering true solitude." }
      ];
      isTrending = false; isEditorsPick = true; isMostBooked = false;
      imageUrl = null;
      description = "Phulara Ridge is India's finest continuous ridge walk — a 4+ hour traverse at 3,700 m with jaw-dropping 360° views of the Garhwal Himalaya. Offbeat and uncrowded, this gem of Govind Pashu Vihar National Park is the trekker's trekking experience.";
    },
    {
      id = "valley-of-flowers"; slug = "valley-of-flowers";
      name = "Valley of Flowers Trek"; state = "Uttarakhand";
      district = ?"Chamoli"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #Moderate;
      durationDays = 6; maxAltitudeM = 3658; trekDistanceKm = ?38.0;
      priceFrom = 10000; priceTo = ?16000;
      bestSeason = "July–September";
      startPoint = ?"Govindghat"; endPoint = ?"Govindghat";
      highlights = [
        "UNESCO World Heritage Site — 500+ species of wildflowers bloom July–September",
        "Combined with Hemkund Sahib Sikh pilgrimage site at 4,329 m",
        "Ancient forests of birch and rhododendron",
        "Diverse Himalayan wildlife: snow leopard (rare), Himalayan brown bear",
        "One of India's most photographed natural landscapes"
      ];
      itinerary = [
        { dayNumber = 1; title = "Haridwar to Govindghat"; altitude = ?"1,828 m"; distanceKm = null; durationHrs = ?9.0; meals = ?"Dinner"; accommodation = ?"Guesthouse"; description = "Drive 280 km from Haridwar to Govindghat, the gateway to Valley of Flowers."; waypoints = ["Haridwar", "Joshimath", "Govindghat"] },
        { dayNumber = 2; title = "Govindghat to Ghangaria"; altitude = ?"3,048 m"; distanceKm = ?14.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Guesthouse"; description = "Trek 14 km along the Pushpawati River through forest and meadows to Ghangaria base."; waypoints = ["Govindghat", "Pulna", "Ghangaria"] },
        { dayNumber = 3; title = "Valley of Flowers Exploration"; altitude = ?"3,658 m"; distanceKm = ?8.0; durationHrs = ?5.0; meals = ?"Breakfast, Packed Lunch, Dinner"; accommodation = ?"Ghangaria"; description = "Full day in the UNESCO valley — walk among carpets of brahmakamal, blue poppy, and hundreds of wildflower species."; waypoints = ["Ghangaria", "Valley of Flowers"] },
        { dayNumber = 4; title = "Hemkund Sahib"; altitude = ?"4,329 m"; distanceKm = ?12.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Ghangaria"; description = "Trek to the sacred Hemkund Sahib Gurudwara beside a glacial lake at 4,329 m."; waypoints = ["Ghangaria", "Hemkund Sahib"] },
        { dayNumber = 5; title = "Ghangaria to Govindghat"; altitude = ?"1,828 m"; distanceKm = ?14.0; durationHrs = ?5.0; meals = ?"Breakfast"; accommodation = ?"Joshimath"; description = "Descend back to Govindghat and drive to Joshimath."; waypoints = ["Ghangaria", "Govindghat"] },
        { dayNumber = 6; title = "Joshimath to Haridwar"; altitude = null; distanceKm = null; durationHrs = ?7.0; meals = ?"Breakfast"; accommodation = null; description = "Drive back to Haridwar."; waypoints = ["Joshimath", "Haridwar"] }
      ];
      inclusions = ["Guide", "All accommodation on trek", "All meals", "Park entry fees", "First aid"];
      exclusions = ["Transport to Haridwar", "Personal gear", "Mule/helicopter services"];
      packingList = ["Rain gear", "Warm layers", "Trekking poles", "Camera", "Insect repellent"];
      youtubeVideoIds = [];
      faqs = [
        { question = "When is the best time to see the wildflowers?"; answer = "Mid-July to mid-August is peak blooming season with the maximum number of wildflower species in bloom." }
      ];
      isTrending = true; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "The Valley of Flowers is a UNESCO World Heritage Site in Chamoli district — a breathtaking high-altitude meadow where 500+ species of Himalayan wildflowers bloom in a riot of color every monsoon. Combined with the Hemkund Sahib pilgrimage, it is a spiritual and natural masterpiece.";
    },
    {
      id = "roopkund"; slug = "roopkund";
      name = "Roopkund Trek"; state = "Uttarakhand";
      district = ?"Chamoli"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #Difficult;
      durationDays = 8; maxAltitudeM = 5029; trekDistanceKm = ?53.0;
      priceFrom = 14000; priceTo = ?22000;
      bestSeason = "May–June, September–October";
      startPoint = ?"Lohajung"; endPoint = ?"Lohajung";
      highlights = [
        "The Mystery Lake — 500+ skeletal remains dating to the 9th century",
        "Views of Trishul (7,120 m) and Nanda Ghunti from the rim",
        "Bedni Bugyal — one of India's most beautiful high-altitude meadows",
        "Rare Brahmakamal flowers bloom in season",
        "Traverse glacial terrain to reach 5,029 m"
      ];
      itinerary = [
        { dayNumber = 1; title = "Kathgodam/Haridwar to Lohajung"; altitude = ?"2,350 m"; distanceKm = null; durationHrs = ?8.0; meals = ?"Dinner"; accommodation = ?"Guesthouse"; description = "Drive to Lohajung, the base camp village for Roopkund."; waypoints = ["Kathgodam", "Lohajung"] },
        { dayNumber = 2; title = "Lohajung to Didna"; altitude = ?"2,600 m"; distanceKm = ?9.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through oak and rhododendron forest to Didna village."; waypoints = ["Lohajung", "Neel Ganga", "Didna"] },
        { dayNumber = 3; title = "Didna to Ali Bugyal"; altitude = ?"3,627 m"; distanceKm = ?10.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek to the vast Ali Bugyal meadow with first views of the Trishul massif."; waypoints = ["Didna", "Tolpani", "Ali Bugyal"] },
        { dayNumber = 4; title = "Ali Bugyal to Bedni Bugyal"; altitude = ?"3,354 m"; distanceKm = ?5.0; durationHrs = ?3.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Short trek across the expansive Bedni meadow with the Roopkund range ahead."; waypoints = ["Ali Bugyal", "Bedni Bugyal"] },
        { dayNumber = 5; title = "Bedni Bugyal to Bhagwabasa"; altitude = ?"4,400 m"; distanceKm = ?8.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Climb through rocky scree and snowfields to high camp at Bhagwabasa."; waypoints = ["Bedni", "Patar Nachuni", "Bhagwabasa"] },
        { dayNumber = 6; title = "Summit Day — Roopkund Lake"; altitude = ?"5,029 m"; distanceKm = ?10.0; durationHrs = ?8.0; meals = ?"Breakfast, Packed Lunch, Dinner"; accommodation = ?"Camp at Bedni"; description = "Pre-dawn ascent to the frozen skeleton lake at 5,029 m. Return to Bedni Bugyal camp."; waypoints = ["Bhagwabasa", "Roopkund Lake", "Bedni Bugyal"] },
        { dayNumber = 7; title = "Bedni to Lohajung"; altitude = ?"2,350 m"; distanceKm = ?14.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch"; accommodation = ?"Guesthouse"; description = "Descend from the meadows all the way back to Lohajung."; waypoints = ["Bedni", "Didna", "Lohajung"] },
        { dayNumber = 8; title = "Lohajung to Kathgodam"; altitude = null; distanceKm = null; durationHrs = ?8.0; meals = ?"Breakfast"; accommodation = null; description = "Drive back to Kathgodam or Haridwar."; waypoints = ["Lohajung", "Kathgodam"] }
      ];
      inclusions = ["Guide and support staff", "All camping", "All trek meals", "Forest permits", "First aid"];
      exclusions = ["Transport", "Personal gear", "Insurance"];
      packingList = ["High-altitude sleeping bag", "Crampons", "Ice axe (guided use)", "Thermal layers", "Gaiters"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Are the skeletons still visible at Roopkund?"; answer = "The skeletal remains are visible when the lake is not frozen, typically in September. Some bones have been covered or moved due to conservation efforts." }
      ];
      isTrending = true; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Roopkund is India's most mysterious high-altitude trek — leading to a frozen glacial lake at 5,029 m where over 500 skeletal remains lie preserved since the 9th century. The trek traverses spectacular bugyals and offers stunning views of Trishul peak.";
    },
    {
      id = "brahmatal"; slug = "brahmatal";
      name = "Brahmatal Trek"; state = "Uttarakhand";
      district = ?"Chamoli"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #Moderate;
      durationDays = 6; maxAltitudeM = 3800; trekDistanceKm = ?35.0;
      priceFrom = 9000; priceTo = ?15000;
      bestSeason = "December–February (winter), March–April";
      startPoint = ?"Lohajung"; endPoint = ?"Lohajung";
      highlights = [
        "Perfect winter trek with less crowds than Kedarkantha",
        "Mt. Trishul and Nanda Ghunti reflected in frozen Brahmatal Lake",
        "Dense forest trails blanketed in pristine snow",
        "Bekaltal and Brahmatal twin lakes above 3,500 m",
        "Views of Ali Bugyal meadow in winter white"
      ];
      itinerary = [
        { dayNumber = 1; title = "Kathgodam to Lohajung"; altitude = ?"2,350 m"; distanceKm = null; durationHrs = ?7.0; meals = ?"Dinner"; accommodation = ?"Guesthouse"; description = "Drive to Lohajung base camp."; waypoints = ["Kathgodam", "Lohajung"] },
        { dayNumber = 2; title = "Lohajung to Bekaltal"; altitude = ?"2,930 m"; distanceKm = ?6.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through dense forest to Bekaltal lake with early ridge views."; waypoints = ["Lohajung", "Bekaltal"] },
        { dayNumber = 3; title = "Bekaltal to Brahmatal"; altitude = ?"3,500 m"; distanceKm = ?7.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek to Brahmatal lake with stunning Trishul and Nanda Ghunti views in clear weather."; waypoints = ["Bekaltal", "Brahmatal Lake"] },
        { dayNumber = 4; title = "Brahmatal Pass Summit"; altitude = ?"3,800 m"; distanceKm = ?8.0; durationHrs = ?6.0; meals = ?"Breakfast, Packed Lunch, Dinner"; accommodation = ?"Camp"; description = "Summit the Brahmatal Pass for panoramic views of Trishul, Nanda Ghunti, and the Ali Bugyal plateau."; waypoints = ["Brahmatal", "Brahmatal Pass"] },
        { dayNumber = 5; title = "Descent to Lohajung"; altitude = ?"2,350 m"; distanceKm = ?13.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch"; accommodation = ?"Guesthouse"; description = "Descend through the forest back to Lohajung."; waypoints = ["Brahmatal", "Lohajung"] },
        { dayNumber = 6; title = "Lohajung to Kathgodam"; altitude = null; distanceKm = null; durationHrs = ?7.0; meals = ?"Breakfast"; accommodation = null; description = "Drive back to Kathgodam."; waypoints = ["Lohajung", "Kathgodam"] }
      ];
      inclusions = ["Guide", "All camping", "All trek meals", "Permits", "First aid"];
      exclusions = ["Transport", "Personal gear", "Insurance"];
      packingList = ["Warm sleeping bag", "Snow gaiters", "Thermal layers", "Crampons", "Trekking poles"];
      youtubeVideoIds = [];
      faqs = [
        { question = "How does Brahmatal compare to Kedarkantha?"; answer = "Brahmatal offers similar winter snow experience but is less crowded and has the unique frozen lake reflection of Trishul and Nanda Ghunti." }
      ];
      isTrending = false; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Brahmatal is a gem of a winter trek offering pristine snow trails, twin high-altitude lakes, and spectacular reflections of Trishul and Nanda Ghunti. Less crowded than Kedarkantha, it rewards trekkers with a quieter, more intimate Himalayan winter experience.";
    },
    {
      id = "dayara-bugyal"; slug = "dayara-bugyal";
      name = "Dayara Bugyal Trek"; state = "Uttarakhand";
      district = ?"Uttarkashi"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #EasyModerate;
      durationDays = 5; maxAltitudeM = 3408; trekDistanceKm = ?24.0;
      priceFrom = 7500; priceTo = ?12000;
      bestSeason = "October–November, June–July; December–February (skiing)";
      startPoint = ?"Barsu Village"; endPoint = ?"Barsu Village";
      highlights = [
        "One of India's most beautiful high-altitude meadows — vast green carpet",
        "Winter skiing available on natural snow slopes",
        "Summer wildflower carpets of rhododendron and brahmakamal",
        "360° views of Bandarpunch, Kedarnath, and Gangotri peaks",
        "Easy access for families and first-time trekkers"
      ];
      itinerary = [
        { dayNumber = 1; title = "Dehradun to Barsu Village"; altitude = ?"2,900 m"; distanceKm = null; durationHrs = ?8.0; meals = ?"Dinner"; accommodation = ?"Guesthouse"; description = "Drive 210 km to Barsu village via Uttarkashi."; waypoints = ["Dehradun", "Uttarkashi", "Barsu"] },
        { dayNumber = 2; title = "Barsu to Dayara Bugyal"; altitude = ?"3,408 m"; distanceKm = ?8.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through dense forest to the vast open meadow of Dayara Bugyal."; waypoints = ["Barsu", "Dayara Bugyal"] },
        { dayNumber = 3; title = "Dayara Bugyal Exploration"; altitude = ?"3,408 m"; distanceKm = ?6.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Explore the full extent of the meadow with panoramic Himalayan views."; waypoints = ["Dayara Bugyal", "Bakaria Top"] },
        { dayNumber = 4; title = "Descent to Barsu"; altitude = ?"2,900 m"; distanceKm = ?8.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch"; accommodation = ?"Guesthouse"; description = "Descend back through the forest to Barsu village."; waypoints = ["Dayara Bugyal", "Barsu"] },
        { dayNumber = 5; title = "Barsu to Dehradun"; altitude = null; distanceKm = null; durationHrs = ?8.0; meals = ?"Breakfast"; accommodation = null; description = "Drive back to Dehradun."; waypoints = ["Barsu", "Dehradun"] }
      ];
      inclusions = ["Guide", "All accommodation", "All trek meals", "Permits", "First aid"];
      exclusions = ["Transport", "Personal gear", "Insurance"];
      packingList = ["Warm jacket", "Trekking poles", "Rain poncho", "Sunscreen"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Can we ski at Dayara Bugyal?"; answer = "Yes, skiing is possible in December–February on natural snow. Ski rental is available at Barsu village." }
      ];
      isTrending = false; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Dayara Bugyal is one of India's most accessible and beautiful high-altitude meadows at 3,408 m — a vast green plateau with 360° Himalayan views, seasonal wildflowers, and winter skiing opportunities. Perfect for families and first-time high-altitude trekkers.";
    },
    {
      id = "nag-tibba"; slug = "nag-tibba";
      name = "Nag Tibba Trek"; state = "Uttarakhand";
      district = ?"Tehri Garhwal"; country = "India"; region = "India, Uttarakhand";
      category = #trek; difficulty = #Easy;
      durationDays = 2; maxAltitudeM = 3022; trekDistanceKm = ?16.0;
      priceFrom = 2500; priceTo = ?5000;
      bestSeason = "October–June; December–February (snow)";
      startPoint = ?"Pantwari Village"; endPoint = ?"Pantwari Village";
      highlights = [
        "Perfect Dehradun/Mussoorie weekend trek",
        "Views of Swargarohini, Bandarpunch, and Kedarnath range from summit",
        "Dense oak and rhododendron forest",
        "Winter snow trek from December–February",
        "Ideal for beginners and corporate groups"
      ];
      itinerary = [
        { dayNumber = 1; title = "Dehradun to Pantwari to Nag Tibba Summit"; altitude = ?"3,022 m"; distanceKm = ?7.0; durationHrs = ?5.0; meals = ?"Packed Lunch, Dinner"; accommodation = ?"Camp"; description = "Drive 90 km from Dehradun to Pantwari village. Trek through oak forest to summit camp."; waypoints = ["Dehradun", "Pantwari", "Nag Tibba Summit"] },
        { dayNumber = 2; title = "Nag Tibba Descent and Return"; altitude = null; distanceKm = ?7.0; durationHrs = ?3.0; meals = ?"Breakfast, Lunch"; accommodation = null; description = "Morning views from summit then descend to Pantwari and drive back to Dehradun."; waypoints = ["Nag Tibba", "Pantwari", "Dehradun"] }
      ];
      inclusions = ["Guide", "Camp accommodation", "All trek meals", "Camping equipment", "First aid"];
      exclusions = ["Transport to/from Dehradun", "Personal gear"];
      packingList = ["Warm jacket", "Trekking shoes", "Headlamp", "Water bottle"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is Nag Tibba good for beginners?"; answer = "Yes — it is the easiest Himalayan summit trek and ideal for those doing their first overnight Himalayan trek." }
      ];
      isTrending = false; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Nag Tibba is the perfect weekend escape from Dehradun — a quick 2-day trek to a 3,022 m summit with sweeping Himalayan panoramas. The easiest Himalayan summit trek, it is ideal for beginners, corporate groups, and families looking for their first Himalayan experience.";
    },
    {
      id = "hampta-pass"; slug = "hampta-pass";
      name = "Hampta Pass Trek"; state = "Himachal Pradesh";
      district = ?"Kullu"; country = "India"; region = "India, Himachal Pradesh";
      category = #trek; difficulty = #Moderate;
      durationDays = 5; maxAltitudeM = 4270; trekDistanceKm = ?35.0;
      priceFrom = 9000; priceTo = ?16000;
      bestSeason = "June–September";
      startPoint = ?"Jobra"; endPoint = ?"Chatru";
      highlights = [
        "India's most dramatic crossover trek — lush Kullu Valley to stark Lahaul desert",
        "Chandratal Lake optional extension — the Moon Lake at 4,300 m",
        "Roaring glacial rivers, hidden waterfalls, alpine wildflower meadows",
        "Campsites: Chika, Balu Ka Ghera, Shea Goru — each stunning",
        "Beginner-friendly even during monsoon season"
      ];
      itinerary = [
        { dayNumber = 1; title = "Manali to Chika Camp"; altitude = ?"3,100 m"; distanceKm = ?3.0; durationHrs = ?2.0; meals = ?"Lunch, Dinner"; accommodation = ?"Camp"; description = "Drive 20 km from Manali to Jobra trailhead. Short trek to Chika riverside camp."; waypoints = ["Manali", "Jobra", "Chika Camp"] },
        { dayNumber = 2; title = "Chika to Balu Ka Ghera"; altitude = ?"3,720 m"; distanceKm = ?8.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through meadows and river crossings with cascading waterfalls to high camp."; waypoints = ["Chika", "Jwara", "Balu Ka Ghera"] },
        { dayNumber = 3; title = "Hampta Pass Crossover"; altitude = ?"4,270 m"; distanceKm = ?14.0; durationHrs = ?10.0; meals = ?"Breakfast, Packed Lunch, Dinner"; accommodation = ?"Camp at Shea Goru"; description = "The epic crossover day — summit Hampta Pass (4,270 m) and descend into barren Lahaul Valley. Two completely different Himalayan worlds in one day."; waypoints = ["Balu Ka Ghera", "Hampta Pass", "Shea Goru"] },
        { dayNumber = 4; title = "Shea Goru to Chandratal Lake"; altitude = ?"4,300 m"; distanceKm = ?8.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp at Chandratal"; description = "Trek to Chatru then drive to the stunning crescent-shaped Chandratal (Moon Lake)."; waypoints = ["Shea Goru", "Chatru", "Chandratal Lake"] },
        { dayNumber = 5; title = "Chandratal to Manali"; altitude = null; distanceKm = null; durationHrs = ?5.0; meals = ?"Breakfast"; accommodation = null; description = "Drive back to Manali via Rohtang Pass."; waypoints = ["Chandratal", "Rohtang Pass", "Manali"] }
      ];
      inclusions = ["Guide and support team", "All camping", "All trek meals", "Camping equipment", "First aid"];
      exclusions = ["Transport to/from Manali", "Rohtang Pass permit", "Personal gear"];
      packingList = ["Waterproof jacket", "Quick-dry clothing", "Trekking poles", "Gaiters", "Headlamp"];
      youtubeVideoIds = [];
      faqs = [
        { question = "What makes Hampta Pass unique?"; answer = "Hampta Pass is the only trek where you stand in lush green Kullu Valley and step into the barren moonscape of Lahaul in a single day — two completely contrasting Himalayan environments." },
        { question = "Can beginners do Hampta Pass?"; answer = "Yes, despite the dramatic scenery, the trek is well-graded and suitable for beginners with basic fitness." }
      ];
      isTrending = true; isEditorsPick = true; isMostBooked = false;
      imageUrl = null;
      description = "Hampta Pass is India's most dramatic crossover trek — in a single day you cross from the lush green Kullu Valley into the stark, barren desert of Lahaul at 4,270 m. The optional Chandratal Lake extension adds a crescent-shaped high-altitude gem to the experience.";
    },
    {
      id = "sar-pass"; slug = "sar-pass";
      name = "Sar Pass Trek"; state = "Himachal Pradesh";
      district = ?"Kullu"; country = "India"; region = "India, Himachal Pradesh";
      category = #trek; difficulty = #Moderate;
      durationDays = 5; maxAltitudeM = 4270; trekDistanceKm = ?48.0;
      priceFrom = 8500; priceTo = ?15000;
      bestSeason = "April–June, September–October";
      startPoint = ?"Kasol"; endPoint = ?"Kasol";
      highlights = [
        "Parvati Valley — India's most mystical and beautiful valley",
        "Sar Lake — stunning turquoise lake beside the pass at 4,270 m",
        "Exciting snow-slope sliding descent in April–May",
        "Cultural experience: Grahan village homestays and Himachali cuisine",
        "Views of Pin Parvati range and Kullu Himalaya"
      ];
      itinerary = [
        { dayNumber = 1; title = "Kasol to Grahan Village"; altitude = ?"2,380 m"; distanceKm = ?8.5; durationHrs = ?5.0; meals = ?"Lunch, Dinner"; accommodation = ?"Homestay/Camp"; description = "Trek from Kasol along the Parvati River to the remote Grahan village."; waypoints = ["Kasol", "Grahan"] },
        { dayNumber = 2; title = "Grahan to Mina Thatch"; altitude = ?"2,900 m"; distanceKm = ?9.0; durationHrs = ?5.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek through pine and oak forest to the open alpine meadows of Mina Thatch."; waypoints = ["Grahan", "Mina Thatch"] },
        { dayNumber = 3; title = "Mina Thatch to Nagaru"; altitude = ?"3,550 m"; distanceKm = ?6.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Ascend above the tree line through snow patches to Nagaru high camp."; waypoints = ["Mina Thatch", "Nagaru"] },
        { dayNumber = 4; title = "Nagaru to Biskeri Thach via Sar Pass"; altitude = ?"4,270 m"; distanceKm = ?12.0; durationHrs = ?7.0; meals = ?"Breakfast, Packed Lunch, Dinner"; accommodation = ?"Camp"; description = "Summit Sar Pass beside the stunning Sar Lake then slide down the spectacular snow slope and descend to Biskeri Thach."; waypoints = ["Nagaru", "Sar Pass", "Sar Lake", "Biskeri Thach"] },
        { dayNumber = 5; title = "Biskeri Thach to Kasol"; altitude = null; distanceKm = ?14.0; durationHrs = ?6.0; meals = ?"Breakfast, Lunch"; accommodation = null; description = "Trek down to Barsheni then drive back to Kasol and Bhuntar."; waypoints = ["Biskeri Thach", "Barsheni", "Kasol"] }
      ];
      inclusions = ["Guide and support staff", "All camping", "All trek meals", "First aid"];
      exclusions = ["Transport to/from Kasol", "Personal gear", "Insurance"];
      packingList = ["Warm layers", "Snow gaiters", "Trekking poles", "Sunglasses", "Waterproof jacket"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is there snow sliding at Sar Pass?"; answer = "Yes — the descent from Sar Pass involves an exciting snow-slide in April–May when 20–30 feet of snow covers the slope." }
      ];
      isTrending = true; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Sar Pass is a 48 km adventure through the mystical Parvati Valley — leading to a 4,270 m pass with a stunning turquoise lake and an exciting snow-slope descent. The trek combines remote Himalayan villages, dense forest, and high-altitude snow for an unforgettable experience.";
    },
    {
      id = "kheerganga"; slug = "kheerganga";
      name = "Kheerganga Trek"; state = "Himachal Pradesh";
      district = ?"Kullu"; country = "India"; region = "India, Himachal Pradesh";
      category = #trek; difficulty = #Easy;
      durationDays = 2; maxAltitudeM = 2950; trekDistanceKm = ?24.0;
      priceFrom = 3000; priceTo = ?6000;
      bestSeason = "May–June, September–October";
      startPoint = ?"Barsheni"; endPoint = ?"Barsheni";
      highlights = [
        "Natural hot spring at Kheerganga summit — the ultimate trek reward",
        "Parvati Valley — India's most scenic and culturally rich valley",
        "Lush forest trail beside roaring Parvati River",
        "Views of snow peaks from the meadow",
        "Easy and accessible for all fitness levels"
      ];
      itinerary = [
        { dayNumber = 1; title = "Kasol to Barsheni to Kheerganga"; altitude = ?"2,950 m"; distanceKm = ?12.0; durationHrs = ?5.0; meals = ?"Packed Lunch, Dinner"; accommodation = ?"Camp/Guesthouse"; description = "Drive to Barsheni then trek through Parvati Valley forest to Kheerganga meadow and hot spring."; waypoints = ["Kasol", "Barsheni", "Kheerganga"] },
        { dayNumber = 2; title = "Kheerganga to Kasol"; altitude = null; distanceKm = ?12.0; durationHrs = ?4.0; meals = ?"Breakfast"; accommodation = null; description = "Morning soak in hot spring then descend back to Barsheni and drive to Kasol."; waypoints = ["Kheerganga", "Barsheni", "Kasol"] }
      ];
      inclusions = ["Guide", "Camp accommodation", "All meals on trek", "First aid"];
      exclusions = ["Transport", "Hot spring entry fee", "Personal gear"];
      packingList = ["Light day pack", "Rain poncho", "Swimwear for hot spring", "Trekking shoes"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is the hot spring open year-round?"; answer = "The natural hot spring at Kheerganga is open whenever the trail is accessible, typically May–November." }
      ];
      isTrending = false; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Kheerganga is the most rewarding short trek in Himachal Pradesh — a 2-day journey through the scenic Parvati Valley culminating in a natural hot spring meadow at 2,950 m. Perfect for beginners, couples, and anyone seeking a relaxing Himalayan retreat.";
    },
    {
      id = "triund"; slug = "triund";
      name = "Triund Trek"; state = "Himachal Pradesh";
      district = ?"Kangra"; country = "India"; region = "India, Himachal Pradesh";
      category = #trek; difficulty = #Easy;
      durationDays = 2; maxAltitudeM = 2850; trekDistanceKm = ?14.0;
      priceFrom = 2500; priceTo = ?5000;
      bestSeason = "March–June, September–November";
      startPoint = ?"McLeod Ganj"; endPoint = ?"McLeod Ganj";
      highlights = [
        "Spectacular views of the Dhauladhar snow range",
        "McLeod Ganj basecamp — home of the Dalai Lama and Tibetan culture",
        "Perfect beginner and family trek",
        "Open meadow campsite with 180° mountain views",
        "Moonlit Dhauladhar range from camp — breathtaking"
      ];
      itinerary = [
        { dayNumber = 1; title = "McLeod Ganj to Triund"; altitude = ?"2,850 m"; distanceKm = ?7.0; durationHrs = ?4.0; meals = ?"Packed Lunch, Dinner"; accommodation = ?"Camp"; description = "Trek from McLeod Ganj through Gallu Devi temple and dense forest to the open Triund ridge."; waypoints = ["McLeod Ganj", "Gallu Devi", "Triund"] },
        { dayNumber = 2; title = "Triund Sunrise and Descent"; altitude = null; distanceKm = ?7.0; durationHrs = ?3.0; meals = ?"Breakfast"; accommodation = null; description = "Sunrise over the Dhauladhar then descend back to McLeod Ganj."; waypoints = ["Triund", "McLeod Ganj"] }
      ];
      inclusions = ["Guide", "Camp accommodation", "All trek meals", "First aid"];
      exclusions = ["Transport to McLeod Ganj", "Personal gear"];
      packingList = ["Warm jacket", "Trekking shoes", "Water bottle", "Camera"];
      youtubeVideoIds = [];
      faqs = [
        { question = "Is a permit needed for Triund?"; answer = "Yes, a forest permit is required from the Himachal Pradesh Forest Department. We include this in the package." }
      ];
      isTrending = false; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Triund is Dharamshala's most famous trek — a short but spectacular 2-day hike to a 2,850 m ridge with sweeping views of the Dhauladhar snow range. Based out of the vibrant McLeod Ganj, it offers the perfect combination of Tibetan culture and Himalayan adventure.";
    },
    {
      id = "beas-kund"; slug = "beas-kund";
      name = "Beas Kund Trek"; state = "Himachal Pradesh";
      district = ?"Kullu"; country = "India"; region = "India, Himachal Pradesh";
      category = #trek; difficulty = #EasyModerate;
      durationDays = 3; maxAltitudeM = 3700; trekDistanceKm = ?18.0;
      priceFrom = 5500; priceTo = ?9000;
      bestSeason = "June–September";
      startPoint = ?"Dhundi"; endPoint = ?"Dhundi";
      highlights = [
        "Source of the Beas River — a glacial lake at 3,700 m",
        "Panoramic views of Hanuman Tibba (5,928 m) and Shitidhar",
        "Solang Valley meadows with Manali backdrop",
        "Glacier approach through moraine fields",
        "Easy access from Manali — perfect 3-day trek"
      ];
      itinerary = [
        { dayNumber = 1; title = "Manali to Dhundi to Bakkar Thach"; altitude = ?"3,200 m"; distanceKm = ?6.0; durationHrs = ?3.0; meals = ?"Lunch, Dinner"; accommodation = ?"Camp"; description = "Drive to Dhundi (Solang Valley) and trek to Bakkar Thach meadow camp."; waypoints = ["Manali", "Dhundi", "Bakkar Thach"] },
        { dayNumber = 2; title = "Bakkar Thach to Beas Kund"; altitude = ?"3,700 m"; distanceKm = ?6.0; durationHrs = ?4.0; meals = ?"Breakfast, Lunch, Dinner"; accommodation = ?"Camp"; description = "Ascend through moraine to the glacial Beas Kund lake — source of the sacred Beas River."; waypoints = ["Bakkar Thach", "Beas Kund"] },
        { dayNumber = 3; title = "Return to Manali"; altitude = null; distanceKm = ?6.0; durationHrs = ?3.0; meals = ?"Breakfast"; accommodation = null; description = "Descend back to Dhundi and drive to Manali."; waypoints = ["Beas Kund", "Dhundi", "Manali"] }
      ];
      inclusions = ["Guide", "All camping", "All trek meals", "Camping equipment", "First aid"];
      exclusions = ["Transport to/from Manali", "Personal gear"];
      packingList = ["Warm jacket", "Sunglasses", "Trekking poles", "Rain gear", "Headlamp"];
      youtubeVideoIds = [];
      faqs = [
        { question = "What is Beas Kund's significance?"; answer = "Beas Kund is the sacred glacial origin of the Beas River — one of the Indus tributaries. The lake is named after the sage Vyasa (Beas) who meditated here." }
      ];
      isTrending = false; isEditorsPick = false; isMostBooked = false;
      imageUrl = null;
      description = "Beas Kund is a pristine 3-day trek from Manali leading to the glacial source of the Beas River at 3,700 m. The trail passes through beautiful Solang Valley meadows with commanding views of Hanuman Tibba and offers an easy introduction to glacier trekking.";
    }
  ]);

  // ── Trek batches ────────────────────────────────────────────────────────────
  let trekBatches : List.List<TrekTypes.TrekBatch> = List.fromArray([
    // Kedarkantha — 3 winter batches
    { id = 1;  trekSlug = "kedarkantha"; startDate = "2026-01-05"; endDate = "2026-01-10"; pricePerPerson = 8500;  totalSeats = 12; bookedSeats = 7;  status = #open },
    { id = 2;  trekSlug = "kedarkantha"; startDate = "2026-02-02"; endDate = "2026-02-07"; pricePerPerson = 8500;  totalSeats = 12; bookedSeats = 4;  status = #open },
    { id = 3;  trekSlug = "kedarkantha"; startDate = "2026-03-09"; endDate = "2026-03-14"; pricePerPerson = 8000;  totalSeats = 12; bookedSeats = 2;  status = #open },
    // Hampta Pass — 3 monsoon batches
    { id = 4;  trekSlug = "hampta-pass"; startDate = "2026-06-08"; endDate = "2026-06-12"; pricePerPerson = 10500; totalSeats = 12; bookedSeats = 8;  status = #open },
    { id = 5;  trekSlug = "hampta-pass"; startDate = "2026-07-06"; endDate = "2026-07-10"; pricePerPerson = 10500; totalSeats = 12; bookedSeats = 5;  status = #open },
    { id = 6;  trekSlug = "hampta-pass"; startDate = "2026-08-03"; endDate = "2026-08-07"; pricePerPerson = 10500; totalSeats = 12; bookedSeats = 3;  status = #open },
    // Chopta Tungnath — 3 batches (spring, autumn, winter)
    { id = 7;  trekSlug = "chopta-tungnath"; startDate = "2026-04-10"; endDate = "2026-04-12"; pricePerPerson = 5500;  totalSeats = 12; bookedSeats = 6;  status = #open },
    { id = 8;  trekSlug = "chopta-tungnath"; startDate = "2026-10-05"; endDate = "2026-10-07"; pricePerPerson = 5500;  totalSeats = 12; bookedSeats = 2;  status = #open },
    { id = 9;  trekSlug = "chopta-tungnath"; startDate = "2026-12-14"; endDate = "2026-12-16"; pricePerPerson = 6000;  totalSeats = 12; bookedSeats = 4;  status = #open }
  ]);

  // ── Bookings ───────────────────────────────────────────────────────────────
  let trekBookings  : List.List<TrekTypes.Booking>        = List.empty();

  // ── Wishlist ───────────────────────────────────────────────────────────────
  let wishlist      : List.List<TrekTypes.WishlistItem>   = List.empty();

  // ── Gear rental catalogue ─────────────────────────────────────────────────
  let gearCatalogue : List.List<TrekTypes.GearRentalItem> = List.fromArray([
    { id = 1;  name = "Trekking Pole (pair)";        pricePerDay = 80;  depositAmount = 240;  description = "Lightweight aluminum trekking poles with cork handles and rubber tips.";       available = true },
    { id = 2;  name = "Sleeping Bag (-10°C)";         pricePerDay = 150; depositAmount = 450;  description = "Rated to -10°C, suitable for all Himalayan winter treks and high camps.";     available = true },
    { id = 3;  name = "Rain Poncho";                  pricePerDay = 50;  depositAmount = 150;  description = "Waterproof rain poncho covering you and your backpack — essential for monsoon treks."; available = true },
    { id = 4;  name = "Gaiters";                      pricePerDay = 60;  depositAmount = 180;  description = "Snow and mud gaiters that protect your lower legs and keep boots dry.";          available = true },
    { id = 5;  name = "Crampons";                     pricePerDay = 100; depositAmount = 300;  description = "10-point steel crampons for icy and snow-covered Himalayan terrain.";            available = true },
    { id = 6;  name = "Trekking Backpack (50 L)";     pricePerDay = 120; depositAmount = 360;  description = "50 L expedition-grade backpack with ventilated back panel and hip belt.";       available = true },
    { id = 7;  name = "Headlamp + Batteries";         pricePerDay = 60;  depositAmount = 180;  description = "High-lumen LED headlamp with spare batteries for pre-dawn summit starts.";       available = true },
    { id = 8;  name = "Trekking Jacket";              pricePerDay = 120; depositAmount = 360;  description = "Waterproof, windproof trekking jacket suitable for 3,000–5,000 m altitude.";    available = true },
    { id = 9;  name = "Trekking Boots";               pricePerDay = 150; depositAmount = 450;  description = "Vibram-sole ankle-support trekking boots — available in sizes 5 to 12.";         available = true },
    { id = 10; name = "Thermals Set";                 pricePerDay = 80;  depositAmount = 240;  description = "Moisture-wicking thermal top and bottom set for cold nights at high altitude.";   available = true }
  ]);

  // ── Inquiries & callbacks ─────────────────────────────────────────────────
  let inquiries     : List.List<TrekTypes.Inquiry>         = List.empty();
  let callbackReqs  : List.List<TrekTypes.CallbackRequest> = List.empty();

  // ── Trek-domain counters ───────────────────────────────────────────────────
  let trekState = {
    var nextBookingId  : Nat = 1;
    var nextInquiryId  : Nat = 1;
    var nextCallbackId : Nat = 1;
  };

  // ── Mixin inclusion ─────────────────────────────────────────────────────────
  include TripsMixin(trips);
  include SubMixin(contacts, newsletters, tailorMadeReqs, ghtInterests, bookingInquiries, bookingRequests, submissionState);
  include TreksMixin(gtTreks, trekBatches, trekBookings, wishlist, gearCatalogue, inquiries, callbackReqs, trekState);
};


