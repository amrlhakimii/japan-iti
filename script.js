const days = [
  {
    number: "Day 00",
    date: "Thu · 26 Nov",
    title: "The journey begins",
    category: "transit",
    lede: "Keep tonight simple: a calm airport arrival, an easy check-in and as much rest as possible before boarding.",
    events: [
      ["10:30 PM", "Leave for KLIA Terminal 1", "Allow extra time for the baby, luggage and a feeding stop before check-in.", "Travel"],
      ["11:30 PM", "Arrive at KLIA1", "Check in, clear security, refill water and change the baby before heading to the gate.", "Baby reset"]
    ],
    tip: "Pack one complete baby change, milk/feed supplies and adult essentials in a small pouch that stays under the seat."
  },
  {
    number: "Day 01",
    date: "Fri · 27 Nov",
    title: "Touchdown, Tokyo",
    category: "transit",
    lede: "Arrival day has only one goal: reach the Airbnb comfortably. Dinner stays flexible depending on everyone’s energy.",
    events: [
      ["1:55–7:05 AM", "Flight KUL → Shanghai", "Keep a fresh nappy and one feed ready for descent.", "Flight"],
      ["7:05–9:50 AM", "Shanghai transit", "Change, feed and let the baby stretch near the gate. Do not plan shopping during this connection.", "Reset"],
      ["9:50 AM–12:50 PM", "Flight Shanghai → Narita", "Arrival at Narita Terminal 1.", "Flight"],
      ["12:50–2:20 PM", "Immigration, luggage & Suica", "Open the Visit Japan Web QR code prepared before departure, then collect bags. Use digital Suica if your phone supports it; otherwise buy a physical IC card. Allow 90 minutes.", "Airport", [{ label: "Prepare arrival QR", url: "https://services.digital.go.jp/en/visit-japan-web/" }]],
      ["2:40–4:10 PM", "Transfer to Shinjuku", "Recommended: reserved-seat Narita Express. Door-to-door transfer is easiest if luggage is heavy; confirm a child seat with any private car.", "Reserved seats", [{ label: "Book on JR East", url: "https://www.eki-net.com/en/jreast-train-reservation/top/index" }]],
      ["4:10–5:00 PM", "Shinjuku → Airbnb", "Use a taxi for the last leg rather than navigating a busy station with bags and stroller.", "Low walking"],
      ["5:00–6:30 PM", "Check in, feed & rest", "Unpack only the first-night essentials and let the baby settle.", "Rest"],
      ["6:45–8:00 PM", "Dinner at Halal Karemen King", "The restaurant is in Kanda/Akihabara—not Ginza. If everyone is tired, switch to a closer halal dinner or delivery.", "Halal"],
      ["8:30 PM", "Convenience-store breakfast", "Pick up water, fruit, yoghurt, bread and easy snacks near the Airbnb.", "Flexible"]
    ],
    tip: "Best arrival choice: private door-to-door transfer for a larger group, but ask in writing whether an age-appropriate baby seat is provided."
  },
  {
    number: "Day 02",
    date: "Sat · 28 Nov",
    title: "A gentle Ginza day",
    category: "tokyo",
    lede: "Ginza works well with a stroller: wide pavements, department-store lifts, nursing rooms and plenty of indoor breaks.",
    events: [
      ["8:30 AM", "Breakfast at the Airbnb", "Eat before leaving and pack one feed plus a full baby change.", "Easy start"],
      ["9:30 AM", "Train to Ginza", "Avoid rushing through peak transfers; use station lifts even if the route is slightly longer.", "Transit"],
      ["10:00 AM–12:30 PM", "Ginza shopping loop", "GU, Onitsuka Tiger and nearby stores. Choose two priority shops; treat everything else as a bonus.", "Stroller-friendly"],
      ["1:00 PM", "Lunch at Tendon Itsuki", "Ginza INZ 1, 2F. It can queue and does not usually take reservations, so one adult can line up while the other settles the baby.", "Halal"],
      ["2:00 PM", "Prayer at Matsuya Ginza", "Rooftop prayer room with wudu facilities. Reconfirm same-day access and department-store hours.", "Prayer"],
      ["2:30–3:00 PM", "Feed & nappy reset", "Use Matsuya or another department store’s family facilities before continuing.", "Baby reset"],
      ["3:00–4:15 PM", "UNIQLO Ginza & coffee", "Explore a few floors, then pause at the café rather than trying to cover the whole building.", "Indoor"],
      ["4:30–5:30 PM", "Polène Ginza", "Allow queue time. One adult can browse while the other takes a quiet stroller loop.", "Shopping"],
      ["5:30–6:30 PM", "Unscheduled rest window", "Sit, feed or return early. This buffer protects the dinner plan.", "Rest"],
      ["6:30–8:00 PM", "Dinner at Gyumon Ginza", "6-12-1 Ginza, B1F. Reserve ahead and check whether the basement entrance has lift access.", "Halal"],
      ["8:00 PM", "Return to the Airbnb", "Skip extra shopping if the baby is overstimulated.", "Home"]
    ],
    tip: "Ginza’s pedestrian paradise may operate on weekend afternoons, but crossings can still be crowded. Department stores are your best base for lifts and baby rooms."
  },
  {
    number: "Day 03",
    date: "Sun · 29 Nov",
    title: "Treasures & old Tokyo",
    category: "tokyo",
    lede: "The flea market and Asakusa pair into a full day. Tokyo Tower is kept as an optional add-on, not a must-do.",
    events: [
      ["8:15 AM", "Leave for Oi Racecourse", "Bring cash, a compact rain cover and an empty foldable bag.", "Transit"],
      ["9:00–11:00 AM", "Oi Racecourse flea market", "Browse before it becomes busiest. The market is weather-dependent—check the organiser’s update that morning.", "Market"],
      ["11:00 AM–12:15 PM", "Travel to Asakusa", "This is the longest cross-city move today. Use a taxi if trains and transfers feel too much.", "Long transfer"],
      ["12:30–1:30 PM", "Lunch at Honolu Asakusa", "Halal ramen near Sensoji. Arrive around opening/lunch time and expect limited space for a large stroller.", "Halal"],
      ["1:30–2:15 PM", "Prayer & baby reset", "Ask the restaurant about prayer space, then feed and change before sightseeing.", "Reset"],
      ["2:15–4:30 PM", "Sensoji & Nakamise", "Enter via quieter side streets if Nakamise is packed. Keep the stroller for flat temple grounds; use the carrier in dense crowds.", "Culture"],
      ["4:30–5:15 PM", "Tea and warm-up break", "Let the biggest crowds thin and enjoy the temple lights at dusk.", "Rest"],
      ["5:15 PM", "Choose: home or Tokyo Tower", "Recommended with baby: return home. If everyone still feels good, take a taxi to Tokyo Tower for a short exterior visit.", "Optional"]
    ],
    tip: "Do not force Tokyo Tower. Sensoji at dusk is already a memorable finish, and preserving energy will make tomorrow much better."
  },
  {
    number: "Day 04",
    date: "Mon · 30 Nov",
    title: "Shibuya, at your pace",
    category: "tokyo",
    lede: "A compact Shibuya day with a dedicated streetwear loop, halal lunch, a proper reset and a pre-booked skyline moment near sunset.",
    events: [
      ["9:30–10:30 AM", "MEGA Don Quijote Shibuya", "Shop from a list; the aisles are tight, so use a carrier and park or fold the stroller if requested.", "Shopping"],
      ["11:00 AM–1:00 PM", "Shibuya streetwear loop", "Start at Kith Tokyo in Miyashita Park, then prioritise Stüssy Shibuya, Supreme Shibuya and BAPE Shibuya. Choose two or three must-visits so queues do not take over the day.", "Streetwear"],
      ["1:10–2:00 PM", "Lunch at Master Chicken", "Halal-certified casual lunch at 33-10 Udagawacho, B1F. Access may be awkward with a stroller.", "Halal"],
      ["2:00–3:00 PM", "Prayer, feed & indoor rest", "Use a booked private room, suitable prayer space or a nearby family facility. Keep this block protected.", "Reset"],
      ["3:00–3:20 PM", "Shibuya Crossing & Hachiko", "View once from street level; there is no need to repeat the crossing with a stroller.", "Icon"],
      ["3:30–5:00 PM", "Shibuya Sky", "Book a timed entry around sunset. Outdoor areas can close in bad weather; strollers must be stored, so bring the carrier.", "Book ahead", [{ label: "Book official ticket", url: "https://www.shibuya-scramble-square.com/sky/ticket/" }]],
      ["5:00–6:00 PM", "Early dinner or return home", "Choose the option with the shortest queue. Buy breakfast on the way back.", "Flexible"],
      ["7:00 PM", "Pack for Fuji", "Prepare one overnight bag and keep warm layers accessible for the next morning.", "Prep"]
    ],
    tip: "Most streetwear stores open around 11 AM. Reconfirm hours and release-day entry rules; Supreme and other limited drops can involve queues or lotteries."
  },
  {
    number: "Day 05",
    date: "Tue · 1 Dec",
    title: "Tokyo to Fuji",
    category: "fuji",
    lede: "Move to Kawaguchiko without changing trains, collect the car after lunch, then keep the first afternoon light and local.",
    events: [
      ["7:45 AM", "Check out & taxi to Shinjuku", "Leave enough time for lifts, the correct platform and breakfast supplies.", "Travel"],
      ["9:30–11:28 AM", "Fuji Excursion to Kawaguchiko", "Recommended direct reserved-seat train. Current 2026 timetable shows this service; reconfirm before booking.", "Reserve 1 month ahead", [{ label: "Book on JR East", url: "https://www.eki-net.com/en/jreast-train-reservation/top/index" }, { label: "Check train details", url: "https://www.fujikyu-railway.jp/en/fujikaiyuu/" }]],
      ["11:30 AM–12:15 PM", "Luggage drop & early lunch", "Ask the accommodation about bag storage before check-in.", "Reset"],
      ["12:30–1:15 PM", "Collect rental car", "Toyota is the clearest direct-booking option. Reserve an infant seat, ETC card and winter tyres if conditions require them.", "Child seat required", [{ label: "Reserve Toyota car", url: "https://rent.toyota.co.jp/eng/reservation/index01.aspx" }, { label: "First-time rental guide", url: "https://rent.toyota.co.jp/eng/guide/" }]],
      ["1:30–2:15 PM", "Lawson Kawaguchiko photo stop", "Use the official viewing area and respect barriers. If crowded, skip it—there are better lake views ahead.", "Quick stop"],
      ["2:30–4:00 PM", "Lake Kawaguchi & Oishi Park", "Flat lakeside paths, café, toilets and an easy Fuji view make this ideal for the first afternoon.", "Stroller-friendly"],
      ["4:00–4:45 PM", "The Park Café / warm drink", "Feed the baby and warm up before sunset temperatures drop.", "Warm-up"],
      ["5:00 PM", "Check in & quiet evening", "Dinner near the accommodation, bath, early sleep.", "Rest"]
    ],
    tip: "Children under six must use an appropriate child seat in Japan. Add the correct rear-facing infant seat during the car reservation—not at pickup."
  },
  {
    number: "Day 06",
    date: "Wed · 2 Dec",
    title: "Fuji morning, Kyoto evening",
    category: "fuji",
    lede: "See Fuji before clouds build, then return the car and travel west. Driving all the way to Kyoto is not recommended with a baby.",
    events: [
      ["7:15–8:00 AM", "Honcho Street", "Go early for lighter traffic and clearer Fuji views. Take photos only from the pavement and watch for vehicles.", "Early start"],
      ["8:30–9:45 AM", "Lake Yamanakako", "Short lakeside stop. Keep the warm pram cover handy; this is likely the coldest part of the trip.", "Scenic"],
      ["10:15–11:15 AM", "Arakura Shrine base", "Enjoy the lower shrine area. The famous pagoda viewpoint has roughly 400 steps—carrier only and optional.", "Optional climb"],
      ["11:30 AM–12:15 PM", "Early lunch near Kawaguchiko", "Choose a confirmed halal or seafood/vegetarian option and avoid a tight connection.", "Lunch"],
      ["12:30 PM", "Fuel up & return rental car", "Allow time for inspection and luggage repacking.", "Car return"],
      ["1:20–2:50 PM", "Reserved bus to Mishima", "Book the Kawaguchiko–Mishima highway bus and keep one feed in the seat bag.", "Reserve", [{ label: "Book Fujikyu bus", url: "https://bus.fujikyu.co.jp/en/highway/mishima/" }]],
      ["3:45–5:45 PM", "Shinkansen Mishima → Kyoto", "Target a Hikari/Kodama connection with reserved seats; exact December times must be confirmed.", "Reserved seats", [{ label: "Book with SmartEX", url: "https://smart-ex.jp/en/" }]],
      ["6:15 PM", "Kyoto check-in", "Taxi from Kyoto Station to avoid another luggage-heavy transfer.", "Low walking"],
      ["7:00 PM", "Simple dinner & early night", "Use a nearby halal restaurant or takeaway. Save Kyoto sightseeing for tomorrow.", "Rest"]
    ],
    tip: "Better than driving: return the car at Kawaguchiko, bus to Mishima, then Shinkansen. It avoids a 5–6 hour drive, tolls and a large one-way drop fee."
  },
  {
    number: "Day 07",
    date: "Thu · 3 Dec",
    title: "Soft light in Arashiyama",
    category: "kyoto",
    lede: "Your open day becomes one calm Kyoto neighbourhood: bamboo, river views, halal lunch and prayer without racing across the city.",
    events: [
      ["8:00 AM", "Taxi/train to Arashiyama", "An early arrival avoids the busiest part of the autumn crowd.", "Early start"],
      ["8:45–9:45 AM", "Bamboo Grove", "The main path is paved. Keep the stroller compact and turn back before uneven temple paths if needed.", "Stroller-friendly"],
      ["10:00–11:00 AM", "Togetsukyo Bridge riverside", "Flat, scenic and easy to shorten. Skip Monkey Park—it is a steep climb with a baby.", "Gentle walk"],
      ["11:15 AM–12:45 PM", "Lunch at Yoshiya Arashiyama", "Halal-certified options plus a prayer room and wudu facilities. Reserve and reconfirm ahead.", "Halal + prayer"],
      ["12:45–2:00 PM", "Feed, prayer & nap window", "Do not schedule another ticketed attraction here.", "Reset"],
      ["2:00–3:30 PM", "Kimono Forest & café", "A compact, mostly flat afternoon close to transport and facilities.", "Easy"],
      ["3:30–4:30 PM", "Return to accommodation", "Rest before dinner and keep the evening unhurried.", "Rest"],
      ["6:00 PM", "Dinner in central Kyoto", "Honolu Grande Kyoto is a practical halal ramen option with prayer facilities; reconfirm hours and reserve if available.", "Halal"]
    ],
    tip: "Kyoto’s peak autumn season means crowds. Start early, skip Monkey Park and use taxis between the accommodation and station when the stroller day becomes long."
  },
  {
    number: "Day 08",
    date: "Fri · 4 Dec",
    title: "A Kyoto buffer day",
    category: "kyoto",
    lede: "Keep this newly added day deliberately open for rest, laundry, shopping or one missed Kyoto priority—without turning it into a catch-up marathon.",
    events: [
      ["9:00 AM", "Slow breakfast", "Review everyone’s energy before choosing a plan. There is no need to leave early.", "Flexible"],
      ["10:30 AM–12:30 PM", "Choose one Kyoto priority", "Pick one easy area or repeat a favourite. Avoid crossing the city for several attractions.", "One area"],
      ["12:30–2:30 PM", "Lunch, prayer & baby reset", "Choose a confirmed halal-friendly meal near the selected area and protect the full reset window.", "Reset"],
      ["2:30–4:30 PM", "Free afternoon", "Use this for shopping, a warm indoor stop, laundry or an early return to the accommodation.", "Open plan"],
      ["6:00 PM", "Easy dinner", "Revisit a trusted restaurant or choose takeaway rather than queueing.", "Low pressure"]
    ],
    tip: "Treat this as the trip’s recovery day. Decide the plan the night before based on weather, sleep and anything missed earlier."
  },
  {
    number: "Day 09",
    date: "Sat · 5 Dec",
    title: "One last unhurried day",
    category: "kyoto",
    lede: "The final full day can stay local or become one optional Kansai day trip. Choose Kyoto, Osaka or Nara—not more than one.",
    events: [
      ["8:30 AM", "Decide: Kyoto, Osaka or Nara", "Stay in Kyoto for the gentlest option. Only take a day trip if the group is rested and the weather is kind.", "Choose one"],
      ["10:00 AM–1:00 PM", "Single-area outing", "Keep the morning compact and close to reliable indoor facilities.", "Flexible"],
      ["1:00–2:30 PM", "Lunch, prayer & reset", "No Osaka or Nara restaurant has been shortlisted yet, so confirm a suitable option before leaving Kyoto.", "Plan ahead"],
      ["3:00–4:30 PM", "Return and pack", "Pack most luggage, separate airport essentials and weigh bags before dinner.", "Departure prep"],
      ["6:00 PM", "Final dinner", "Choose a familiar, reservable option close to the accommodation.", "Easy finish"]
    ],
    tip: "Do not combine Osaka and Nara. Keeping the final afternoon light protects tomorrow’s airport journey."
  },
  {
    number: "Day 10",
    date: "Sun · 6 Dec",
    title: "Journey home",
    category: "transit",
    lede: "The return date is confirmed; airport, flight and check-in times still need to be added before transport can be finalised.",
    events: [
      ["TBC", "Check out", "Set the time after the return flight is confirmed. Keep passports, feeds, nappies and one change of clothes in the cabin bag.", "Confirm time"],
      ["TBC", "Transfer to departure airport", "If departing from KIX, compare the reserved Haruka airport express with a private transfer for the group and luggage.", "Book ahead"],
      ["Before bag drop", "Complete tax-free departure steps", "For travel after 1 November 2026, eligible refunds require the new departure process. Keep purchased goods accessible and allow extra airport time.", "2026 rule"],
      ["TBC", "Fly home", "Add the flight number, terminal and connection details once issued.", "Flight"]
    ],
    tip: "Aim to reach the airport at least three hours before an international departure, with additional buffer if completing tax-free refund procedures."
  }
];

const photo = id => `https://unsplash.com/photos/${id}/download?force=true&w=1200`;

const dayImages = [
  { id: "5tQvtADmmyg", alt: "Interior architecture at Kuala Lumpur International Airport", label: "KLIA · the journey begins" },
  { id: "8Tlrh8aPFw0", alt: "Shinjuku streets illuminated at night", label: "Shinjuku · first night" },
  { id: "DcklCt6hau8", alt: "Ginza avenue with pedestrians and city traffic", label: "Ginza · shopping day" },
  { id: "Fy3OG2l2KwE", alt: "Visitors walking through the Sensoji temple grounds", label: "Asakusa · old Tokyo" },
  { id: "keRAW9X0OlM", alt: "Shibuya Crossing illuminated by signs at night", label: "Shibuya · city lights" },
  { id: "J_7o0_1S-PM", alt: "Mount Fuji reflected in Lake Kawaguchi", label: "Kawaguchiko · Fuji arrival" },
  { id: "EylXr_kvBFU", alt: "Chureito Pagoda with Mount Fuji in the distance", label: "Fujiyoshida · early Fuji views" },
  { id: "HmNssAygTlw", alt: "Path beneath tall bamboo in Arashiyama", label: "Arashiyama · bamboo and river" },
  { id: "Qiw63GpWN6w", alt: "Traditional wooden buildings along a quiet Kyoto street", label: "Kyoto · a slower day" },
  { id: "HmqChFEBNXc", alt: "Path through orange torii gates at Fushimi Inari", label: "Kansai · choose one last outing" },
  { id: "7diobitpahY", alt: "Airport departure board displaying flight information", label: "Departure day · journey home" }
];

const places = [
  {
    id: "ginza",
    name: "Ginza",
    region: "tokyo",
    kinds: ["planned", "rain"],
    image: "DcklCt6hau8",
    alt: "Ginza avenue with pedestrians and city traffic",
    time: "3–6 hours",
    access: "Excellent with stroller",
    summary: "Wide pavements, flagship shops, cafés and department-store baby rooms make this the easiest shopping district for the group.",
    note: "Best match: Day 02. Add Dover Street Market Ginza at 6-9-5 Ginza for multi-brand streetwear, then use Matsuya or another department store as the reset base."
  },
  {
    id: "sensoji",
    name: "Sensoji and Asakusa",
    region: "tokyo",
    kinds: ["planned"],
    image: "Fy3OG2l2KwE",
    alt: "Visitors walking through the Sensoji temple grounds",
    time: "2–3 hours",
    access: "Stroller; carrier in crowds",
    summary: "Temple courtyards, Nakamise shopping street and atmospheric side lanes offer the strongest old-Tokyo experience on the route.",
    note: "Best match: Day 03 after lunch. Stay for dusk if everyone is comfortable."
  },
  {
    id: "shibuya",
    name: "Shibuya Crossing and Sky",
    region: "tokyo",
    kinds: ["planned"],
    image: "keRAW9X0OlM",
    alt: "Shibuya Crossing illuminated by signs at night",
    time: "2–4 hours",
    access: "Carrier needed at Sky",
    summary: "Combine the crossing, Hachiko and a pre-booked skyline slot without trying to cover the whole neighbourhood.",
    note: "Best match: Day 04. Shibuya Sky closes its outdoor deck in poor weather."
  },
  {
    id: "streetwear-loop",
    name: "Shibuya streetwear loop",
    region: "tokyo",
    kinds: ["planned", "rain"],
    image: "umxLHwRtAfQ",
    alt: "Busy fashion and shopping street in Harajuku",
    time: "2–3 hours",
    access: "Compact shops; expect queues",
    summary: "Start at Kith Tokyo in Miyashita Park, then walk through Jinnan for Stüssy Shibuya and Supreme Shibuya before finishing at BAPE Shibuya.",
    note: "Addresses: Kith, 6-20-10 Jingumae; Stüssy, 1-14-5 Jinnan; Supreme, 1-18-2 Jinnan; BAPE, 13-17 Udagawacho. For another half-day, add Palace Tokyo plus Supreme and Stüssy Harajuku."
  },
  {
    id: "meiji",
    name: "Meiji Jingu and Harajuku",
    region: "tokyo",
    kinds: ["spare"],
    image: "uw2g-yJTvIU",
    alt: "Traditional wooden architecture at Meiji Jingu",
    time: "2–3 hours",
    access: "Long gravel approach",
    summary: "A calm forest shrine beside energetic Harajuku. Visit the shrine first, then decide whether the shopping streets feel manageable.",
    note: "Good spare-time choice near Shibuya. A carrier is smoother than a stroller on gravel."
  },
  {
    id: "skytree",
    name: "Tokyo Skytree and Solamachi",
    region: "tokyo",
    kinds: ["spare", "rain"],
    image: "ksscKoQEzaE",
    alt: "Tokyo Skytree rising into a blue sky",
    time: "3–5 hours",
    access: "Very stroller-friendly",
    summary: "Observation decks sit above a large indoor mall with food, lifts and family facilities—useful when the weather turns.",
    note: "Pair with Asakusa only if energy is high; otherwise make this its own half-day."
  },
  {
    id: "odaiba",
    name: "Odaiba waterfront",
    region: "tokyo",
    kinds: ["spare", "rain"],
    image: "fVM_kxGwNx0",
    alt: "Rainbow Bridge and the Tokyo skyline viewed from Odaiba",
    time: "Half-day",
    access: "Excellent with stroller",
    summary: "A spacious waterfront with bay views and large indoor complexes, offering an easier pace than central Tokyo.",
    note: "Best as a standalone half-day. Indoor attractions vary, so choose one before travelling."
  },
  {
    id: "kawaguchiko",
    name: "Lake Kawaguchiko and Oishi Park",
    region: "fuji",
    kinds: ["planned"],
    image: "J_7o0_1S-PM",
    alt: "Mount Fuji reflected in Lake Kawaguchi",
    time: "1–2 hours",
    access: "Flat and stroller-friendly",
    summary: "The easiest reliable Fuji-view stop, with lakeside paths, toilets and somewhere warm to pause.",
    note: "Best match: Day 05. Go earlier if the forecast predicts afternoon cloud."
  },
  {
    id: "yamanakako",
    name: "Lake Yamanakako",
    region: "fuji",
    kinds: ["planned"],
    image: "3n9qTt06kug",
    alt: "Boardwalk beside Lake Yamanaka with Mount Fuji beyond",
    time: "45–90 minutes",
    access: "Easy short stop",
    summary: "A quieter lake perspective with broad Fuji views and room for a brief boardwalk or shoreline stop.",
    note: "Best match: early Day 06. It will feel colder than Tokyo, especially near the water."
  },
  {
    id: "arakurayama",
    name: "Arakurayama Sengen Park",
    region: "fuji",
    kinds: ["planned"],
    image: "EylXr_kvBFU",
    alt: "Chureito Pagoda with Mount Fuji in the distance",
    time: "1–2 hours",
    access: "Carrier; many steps",
    summary: "The iconic pagoda-and-Fuji view is beautiful but requires roughly 400 steps; the lower shrine remains worthwhile without the climb.",
    note: "Best match: Day 06. One adult can climb while another stays with the baby below."
  },
  {
    id: "oshino",
    name: "Oshino Hakkai",
    region: "fuji",
    kinds: ["spare"],
    image: "qQz6GOr8IvI",
    alt: "Clear water and greenery at Oshino Hakkai",
    time: "1–2 hours",
    access: "Some narrow paths",
    summary: "Spring-fed ponds and traditional village scenery make a pleasant add-on between the Fuji lakes when roads are clear.",
    note: "Only add if Fuji is visible and Day 06 timing remains generous. Parking areas can become busy."
  },
  {
    id: "arashiyama",
    name: "Arashiyama",
    region: "kyoto",
    kinds: ["planned"],
    image: "HmNssAygTlw",
    alt: "Path beneath tall bamboo in Arashiyama",
    time: "Half-day",
    access: "Stroller on main paths",
    summary: "Bamboo, the riverside, Togetsukyo Bridge and nearby lunch form a complete day without crossing Kyoto repeatedly.",
    note: "Best match: Day 07. Arrive early and skip Monkey Park with the baby."
  },
  {
    id: "fushimi",
    name: "Fushimi Inari",
    region: "kyoto",
    kinds: ["spare"],
    image: "HmqChFEBNXc",
    alt: "Path through orange torii gates at Fushimi Inari",
    time: "1.5–3 hours",
    access: "Carrier beyond lower shrine",
    summary: "Walk only the lower torii-gate loop for the signature atmosphere; there is no need to climb the full mountain.",
    note: "Strong Day 08 option before 8 AM or late afternoon. Avoid the midday crowd."
  },
  {
    id: "gion",
    name: "Gion and Hanamikoji",
    region: "kyoto",
    kinds: ["spare"],
    image: "Qiw63GpWN6w",
    alt: "Traditional wooden buildings along a quiet Kyoto street",
    time: "1–2 hours",
    access: "Mostly flat streets",
    summary: "Traditional streets are most atmospheric around late afternoon, especially when combined with the Shirakawa canal rather than a rushed attraction list.",
    note: "Respect private property and no-photo signs. Do not photograph geiko or maiko without permission."
  },
  {
    id: "kiyomizu",
    name: "Kiyomizu-dera and Higashiyama",
    region: "kyoto",
    kinds: ["spare"],
    image: "rJDgKEpcWso",
    alt: "Kiyomizu-dera surrounded by green trees",
    time: "3–4 hours",
    access: "Steep; carrier recommended",
    summary: "A landmark temple with preserved lanes nearby, but hills, stairs and crowds make it one of the harder options with a stroller.",
    note: "Choose this instead of another major sight, not in addition to one. Taxi uphill and walk down."
  },
  {
    id: "nishiki",
    name: "Nishiki Market",
    region: "kyoto",
    kinds: ["spare", "rain"],
    image: "HTMBgPvKbMk",
    alt: "Visitors walking through Nishiki Market in Kyoto",
    time: "1–2 hours",
    access: "Covered but crowded",
    summary: "A central covered food market that works as a short weather-proof browse, though the narrow arcade is difficult at peak times.",
    note: "Go near opening, fold the stroller if asked and verify ingredients before buying food."
  },
  {
    id: "railway-museum",
    name: "Kyoto Railway Museum",
    region: "kyoto",
    kinds: ["spare", "rain"],
    image: "CdZ5oRV5NII",
    alt: "Shinkansen train at a Kyoto station platform",
    time: "2–4 hours",
    access: "Excellent with stroller",
    summary: "A spacious indoor backup near Kyoto Station with full-size trains, lifts and family-friendly facilities.",
    note: "Best rainy-day choice for Day 08. Check closure days and last admission before going."
  },
  {
    id: "osaka-castle",
    name: "Osaka Castle Park",
    region: "osaka",
    kinds: ["spare"],
    image: "hM6BYCsEFkA",
    alt: "White walls and ornate roofs of Osaka Castle",
    time: "2–3 hours",
    access: "Long but stroller-friendly paths",
    summary: "The park and exterior views are easier with a baby than queueing for the castle museum and observation floor.",
    note: "Use this as the main sight on an Osaka day trip, then choose one second neighbourhood only."
  },
  {
    id: "dotonbori",
    name: "Dotonbori and Namba",
    region: "osaka",
    kinds: ["spare"],
    image: "QXcQ99G1PSw",
    alt: "Neon signs reflected in the Dotonbori canal at night",
    time: "2–3 hours",
    access: "Flat but very crowded",
    summary: "The canal, signs and surrounding streets deliver classic Osaka energy, best seen before the late-evening crowds build.",
    note: "Visit around dusk, use the carrier and confirm a halal meal before leaving Kyoto."
  },
  {
    id: "nara-park",
    name: "Nara Park",
    region: "nara",
    kinds: ["spare"],
    image: "qffujJHQ5eg",
    alt: "A deer beside an ancient stone lantern in Nara Park",
    time: "2–3 hours",
    access: "Broad paths; watch the deer",
    summary: "Open parkland and roaming deer make a memorable gentle outing, but the animals can be assertive around food and paper.",
    note: "Keep snacks, maps and the baby away from deer. Do not let the baby feed or touch them."
  },
  {
    id: "todaiji",
    name: "Tōdai-ji",
    region: "nara",
    kinds: ["spare", "rain"],
    image: "y5yOqWItXtM",
    alt: "The Great Buddha Hall at Todai-ji in Nara",
    time: "1–2 hours",
    access: "Mostly accessible main route",
    summary: "The monumental Great Buddha Hall gives a Nara day trip a clear destination beyond the deer park.",
    note: "Pair only with Nara Park and a planned lunch; do not add Osaka on the same day."
  }
];

const checklist = [
  "Complete Visit Japan Web and save the arrival QR code",
  "Set up the eSIM, offline maps and digital Suica",
  "Prepare an arrival cash buffer and coin pouch",
  "Book Narita transfer and confirm child-seat policy",
  "Reserve Fuji Excursion seats when sales open",
  "Book Shibuya Sky timed entry",
  "Choose priority streetwear stores and check release-day rules",
  "Reserve Gyumon Ginza and Yoshiya Kyoto",
  "Reserve rental car, infant seat and ETC card",
  "Book Kawaguchiko → Mishima highway bus",
  "Confirm Airbnb luggage storage, cot and Yamato acceptance",
  "Confirm the 6 December flight, airport and transfer",
  "Pack carrier, compact stroller, rain cover, tissues and hand towel",
  "Check prayer times, weather, market status and restaurant hours"
];

const daysRoot = document.querySelector("[data-days]");

daysRoot.innerHTML = days.map((day, index) => `
  <article class="day-card${index === 0 ? " open" : ""}" data-category="${day.category}">
    <button class="day-summary" type="button" aria-expanded="${index === 0}" aria-controls="day-${index}">
      <span class="day-number">${day.number}</span>
      <h3 class="day-title">${day.title}</h3>
      <span class="day-date">${day.date}</span>
      <span class="day-toggle" aria-hidden="true">+</span>
    </button>
    <div class="day-content" id="day-${index}">
      <span aria-hidden="true"></span>
      <div class="day-content-inner">
        <figure class="day-photo">
          <img src="${photo(dayImages[index].id)}" alt="${dayImages[index].alt}" loading="lazy">
          <figcaption><span>${dayImages[index].label}</span><a href="https://unsplash.com/photos/${dayImages[index].id}" target="_blank" rel="noreferrer">Photo source ↗</a></figcaption>
        </figure>
        <p class="day-lede">${day.lede}</p>
        <div class="timeline">
          ${day.events.map(([time, title, detail, tag, links = []]) => `
            <div class="event">
              <time class="event-time">${time}</time>
              <div class="event-info">
                <h4>${title}</h4>
                <p>${detail}</p>
                <div class="event-meta">
                  <span class="event-tag">${tag}</span>
                  ${links.map(link => `<a class="event-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label} ↗</a>`).join("")}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="day-tip"><strong>Family note</strong><span>${day.tip}</span></div>
      </div>
    </div>
  </article>
`).join("");

const regionLabels = { tokyo: "Tokyo", fuji: "Fuji", kyoto: "Kyoto", osaka: "Osaka", nara: "Nara" };
const kindLabels = { planned: "In the plan", spare: "If there’s time", rain: "Rainy-day option" };
const savedPlaces = new Set(JSON.parse(localStorage.getItem("japan-family-saved-places") || "[]"));
const placesRoot = document.querySelector("[data-places]");
const savedCount = document.querySelector("[data-saved-count]");
const placesEmpty = document.querySelector("[data-places-empty]");
let activeRegion = "all";
let activeKind = "all";

placesRoot.innerHTML = places.map(place => `
  <article class="place-card" data-place-id="${place.id}" data-region="${place.region}" data-kinds="${place.kinds.join(" ")}">
    <figure class="place-image">
      <img src="${photo(place.image)}" alt="${place.alt}" loading="lazy">
      <figcaption>${regionLabels[place.region]}</figcaption>
      <a href="https://unsplash.com/photos/${place.image}" target="_blank" rel="noreferrer" aria-label="View photo source for ${place.name}">Photo ↗</a>
    </figure>
    <div class="place-body">
      <div class="place-badges">${place.kinds.map(kind => `<span class="place-badge ${kind}">${kindLabels[kind]}</span>`).join("")}</div>
      <div class="place-title-row"><h3>${place.name}</h3><button class="save-place${savedPlaces.has(place.id) ? " saved" : ""}" type="button" data-save-place="${place.id}" aria-pressed="${savedPlaces.has(place.id)}">${savedPlaces.has(place.id) ? "Saved" : "Save"}</button></div>
      <dl class="place-meta"><div><dt>Allow</dt><dd>${place.time}</dd></div><div><dt>With baby</dt><dd>${place.access}</dd></div></dl>
      <p>${place.summary}</p>
      <div class="place-note"><strong>How to use it</strong><span>${place.note}</span></div>
    </div>
  </article>
`).join("");

const applyPlaceFilters = () => {
  let visible = 0;
  document.querySelectorAll(".place-card").forEach(card => {
    const regionMatch = activeRegion === "all" || card.dataset.region === activeRegion;
    const kindMatch = activeKind === "all"
      || (activeKind === "saved" ? savedPlaces.has(card.dataset.placeId) : card.dataset.kinds.split(" ").includes(activeKind));
    card.hidden = !regionMatch || !kindMatch;
    if (!card.hidden) visible += 1;
  });
  savedCount.textContent = savedPlaces.size;
  placesEmpty.hidden = visible !== 0;
};

const setActivePlaceFilter = (button, attribute) => {
  document.querySelectorAll(`[${attribute}]`).forEach(item => item.classList.remove("active"));
  button.classList.add("active");
};

document.querySelectorAll("[data-place-region]").forEach(button => button.addEventListener("click", () => {
  activeRegion = button.dataset.placeRegion;
  setActivePlaceFilter(button, "data-place-region");
  applyPlaceFilters();
}));

document.querySelectorAll("[data-place-kind]").forEach(button => button.addEventListener("click", () => {
  activeKind = button.dataset.placeKind;
  setActivePlaceFilter(button, "data-place-kind");
  applyPlaceFilters();
}));

placesRoot.addEventListener("click", event => {
  const button = event.target.closest("[data-save-place]");
  if (!button) return;
  const id = button.dataset.savePlace;
  if (savedPlaces.has(id)) savedPlaces.delete(id);
  else savedPlaces.add(id);
  const saved = savedPlaces.has(id);
  button.classList.toggle("saved", saved);
  button.setAttribute("aria-pressed", String(saved));
  button.textContent = saved ? "Saved" : "Save";
  localStorage.setItem("japan-family-saved-places", JSON.stringify([...savedPlaces]));
  applyPlaceFilters();
});

applyPlaceFilters();

daysRoot.addEventListener("click", event => {
  const button = event.target.closest(".day-summary");
  if (!button) return;
  const card = button.closest(".day-card");
  const open = card.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".day-card").forEach(card => {
      card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
    });
  });
});

document.querySelector("[data-expand-all]").addEventListener("click", event => {
  const cards = [...document.querySelectorAll(".day-card:not([hidden])")];
  const shouldOpen = cards.some(card => !card.classList.contains("open"));
  cards.forEach(card => {
    card.classList.toggle("open", shouldOpen);
    card.querySelector(".day-summary").setAttribute("aria-expanded", String(shouldOpen));
  });
  event.currentTarget.textContent = shouldOpen ? "Collapse all days" : "Expand all days";
});

document.querySelectorAll("[data-print]").forEach(button => button.addEventListener("click", () => window.print()));

const savedChecks = JSON.parse(localStorage.getItem("japan-family-checklist") || "[]");
const checklistRoot = document.querySelector("[data-checklist]");
checklistRoot.innerHTML = checklist.map((item, index) => `
  <label class="check-item">
    <input type="checkbox" data-check="${index}" ${savedChecks.includes(index) ? "checked" : ""}>
    <span class="custom-check" aria-hidden="true"></span>
    <span>${item}</span>
  </label>
`).join("");

checklistRoot.addEventListener("change", () => {
  const checked = [...checklistRoot.querySelectorAll("input:checked")].map(input => Number(input.dataset.check));
  localStorage.setItem("japan-family-checklist", JSON.stringify(checked));
});
