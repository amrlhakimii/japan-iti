const days = [
  {
    number: "Departure",
    date: "Thu · 26 Nov",
    title: "The journey begins",
    category: "transit",
    lede: "Keep tonight simple: a calm airport arrival, an easy check-in and as much rest as possible before boarding.",
    events: [
      ["7:30 PM", "Leave for KLIA Terminal 1", "Allow extra time for the baby, luggage and a feeding stop. Check-in closes at 11:15 PM, so do not cut it fine.", "Travel"],
      ["9:00 PM", "Arrive at KLIA1 · check-in island A", "MU8584 departs 12:15 AM. Check in early, clear security, refill water and change the baby before heading to the gate.", "Baby reset"]
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
      ["12:15–5:40 AM", "Flight MU8584 KUL → Shanghai Pudong", "Departs KLIA T1 at 12:15 AM and lands at PVG T1 at 5:40 AM. Keep a fresh nappy and one feed ready for descent. Recent arrivals average about 30 minutes late.", "Flight"],
      ["5:40–9:10 AM", "Shanghai transit", "A 3 h 30 min connection at PVG Terminal 1, with bags checked through to Narita (no need to collect and re-check). Change, feed and let the baby stretch near the gate. Do not plan shopping during this connection.", "Reset"],
      ["9:10 AM–12:50 PM", "Flight Shanghai → Narita", "MU523 departs PVG T1 at 9:10 AM and lands at Narita T2 at 12:50 PM (Tokyo is 1 hour ahead), per your booking.", "Flight"],
      ["12:50–2:20 PM", "Immigration, luggage & Suica", "Open the Visit Japan Web QR code prepared before departure, then collect bags. Use digital Suica if your phone supports it; otherwise buy a physical IC card. Allow 90 minutes.", "Airport", [{ label: "Prepare arrival QR", url: "https://services.digital.go.jp/en/visit-japan-web/" }]],
      ["2:20–3:30 PM", "Private van, Narita T2 → Kameari", "Booked on Klook with Deren International (UYX696452). The driver tracks MU523 and waits 90 minutes from landing, then ¥2,000 per 30 minutes. About 1 hour to the Airbnb door. The voucher shows the T2 arrivals hall with counters A and B but does not say which one, so confirm the meeting point and a rear-facing baby seat with the operator beforehand. Max 9 passengers and 9 bags.", "Booked"],
      ["4:30–5:00 PM", "Kameari Station → Airbnb", "Short walk or taxi. Maghrib starts at about 4:30 PM: pray it on arrival, and jamak it with Isyak after 6:00 PM if you prefer.", "Low walking"],
      ["5:00–6:30 PM", "Check in, feed & rest", "Unpack only the first-night essentials and let the baby settle.", "Rest"],
      ["6:45–8:00 PM", "Dinner at Halal Karemen King", "The restaurant is in Kanda/Akihabara—not Ginza. If everyone is tired, switch to a closer halal dinner or delivery.", "Halal"],
      ["8:30 PM", "Convenience-store breakfast", "Pick up water, fruit, yoghurt, bread and easy snacks near the Airbnb.", "Flexible"]
    ],
    tip: "Best arrival choice: private door-to-door transfer for a larger group, but ask in writing whether an age-appropriate baby seat is provided. Otherwise Skyliner plus Joban Line is much cheaper."
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
    title: "Kamakura by train",
    category: "tokyo",
    lede: "A full day out to the seaside temple town. It is far from Kameari, so the day is built around one direct train each way and a compact walk.",
    events: [
      ["8:00 AM", "Leave the Airbnb", "Kameari → Ayase → Otemachi → Tokyo Station. Carry lunch supplies and a full baby change.", "Long transfer"],
      ["9:45–10:00 AM", "Tokyo Station: lunch & baby reset", "Buy a seafood or vegetarian bento or onigiri for lunch. Use the station family room for a feed and nappy change.", "Reset"],
      ["10:00–10:55 AM", "JR Yokosuka Line to Kamakura", "Direct, about 55 minutes with no more changes. Sit by the door with the stroller.", "Direct train"],
      ["11:00 AM–12:15 PM", "Komachi-dori & Tsurugaoka Hachimangu", "From Kamakura Station walk the flat shopping street to the shrine, about 15 minutes. Use the carrier if it is crowded.", "Walk"],
      ["12:15–1:15 PM", "Zohor + Asar (jamak) & lunch", "No confirmed prayer room here. Use a quiet corner with a portable prayer mat and pray Zohor then Asar together (jamak taqdim). Try shirasu-don (whitebait bowl) and ask the staff to check for mirin, sake and pork stock.", "Prayer + lunch"],
      ["1:30–2:00 PM", "Enoden tram to Hase", "About 5 minutes from Kamakura Station. The tram is small, so fold the stroller.", "Short ride"],
      ["2:00–3:00 PM", "Great Buddha (Kotoku-in)", "A 10-minute walk from Hase Station on flat ground. Hase-dera is up steps: carrier only, and optional.", "Sight"],
      ["3:00–3:30 PM", "Feed, nappy & rest", "Asar is already done with the jamak at lunch, so use this time for the baby before heading back.", "Reset"],
      ["3:30–4:15 PM", "Back to Kamakura Station", "Enoden then the Yokosuka Line. Leave by 3:30 to avoid the weekend rush.", "Return"],
      ["4:30–6:30 PM", "Train back to Kameari", "Maghrib starts at about 4:30 PM. Pray Maghrib and Isyak together (jamak) at the Airbnb after getting home, or pray Maghrib on the train.", "Home"],
      ["7:00 PM", "Easy dinner near the Airbnb", "Keep it simple after a long day.", "Rest"]
    ],
    tip: "Kamakura is crowded on Sundays. Skip anything that needs a long queue, and keep the afternoon short since sunset is early. Asakusa and Sensoji are not on this plan; add them on another Tokyo day only if there is energy."
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
    lede: "Take the highway bus from Tokyo Station to Kawaguchiko, collect the van after lunch, then keep the first afternoon light and local.",
    events: [
      ["7:30 AM", "Check out & travel to Tokyo Station", "Joban Line to Ayase, Chiyoda Line to Otemachi, then walk to Tokyo Station. About 50 minutes, so use the lifts. Carry only overnight bags, because the big suitcases are forwarded to Kyoto by Yamato.", "Travel"],
      ["9:20–9:50 AM", "Find the highway bus terminal", "The JR Bus Expressway Bus Terminal is on the Yaesu south side. Reviewers say it is hard to find, so arrive 30 minutes early with the Klook voucher on your phone.", "Early arrival"],
      ["9:50–11:50 AM", "Highway bus to Kawaguchiko", "Bus 0115-01, about 2 hours, 6 adults, one Klook order (ref FSS898620). Seats 2A–2D and 3C–3D. Suitcases go in the lower hold. Traffic can add time, so keep the baby feed ready.", "Booked"],
      ["11:50 AM–12:30 PM", "Lunch near the station", "The Lawson is right outside Kawaguchiko Station. Eat nearby, and ask the Airbnb host about early bag drop before check-in.", "Reset"],
      ["12:30–1:15 PM", "Collect rental car", "Toyota Fujikawaguchiko Shop, a 7-minute walk from the station, open 8:00 AM to 8:00 PM. One-way plan: return it at the Toyota Mishima Shinkansen Ext. shop at 12:30 PM tomorrow. Take the brother's passport with a Narita landing stamp, International Driving Permit and Malaysian licence. W2 class, infant seat, no winter tyres. Reservation 99951151400, ¥36,190. Roslina is the renter and card holder, so she comes to the counter with her passport and card. Register the brother as the driver before signing, and add the Double Protection Package (¥1,650).", "Child seat required", [{ label: "Reserve Toyota car", url: "https://rent.toyota.co.jp/eng/reservation/index01.aspx" }, { label: "First-time rental guide", url: "https://rent.toyota.co.jp/eng/guide/" }]],
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
    lede: "See Fuji early, check out by 10:00, drive the van to Mishima, return it by 12:30 and take Hikari 713 at 1:46 PM to Kyoto.",
    events: [
      ["7:15–8:00 AM", "Honcho Street", "Go early for lighter traffic and clearer Fuji views. Take photos only from the pavement and watch for vehicles. Check out of the Airbnb first and keep the luggage in the car.", "Early start"],
      ["8:15–9:15 AM", "Arakura Shrine base", "It is a few minutes from Honcho Street. Enjoy the lower shrine area. The famous pagoda viewpoint has roughly 400 steps—carrier only and optional.", "Optional climb"],
      ["9:30–10:00 AM", "Back to the Airbnb & check out", "Checkout is 10:00 AM. Load the van with the overnight bags and check that nothing is left behind.", "Checkout"],
      ["10:15 AM–12:00 PM", "Drive to Mishima", "About 1.5 hours. Leave by 10:30 AM at the latest. Your brother drives, so check the weather and road conditions first and use winter tyres. Refuel near Mishima before returning the van.", "Drive"],
      ["12:30 PM", "Return the van at Mishima", "Toyota Mishima Shinkansen Ext. shop, due back at 12:30 PM. Aim to return it by about 12:00 to keep a buffer for the 1:46 PM train. Allow time for inspection and repacking.", "Car return"],
      ["12:45–1:30 PM", "Lunch & buffer near Mishima Station", "Eat near the station and keep this slack for traffic. If the drive runs late, the next Hikari 717 leaves at 3:46 PM.", "Buffer"],
      ["1:46–3:37 PM", "Hikari 713 Mishima → Kyoto", "About 1 h 51 min. Reserved ordinary car, 6 adults, Klook order 5603694494 (RM 1,767.49), QR boarding. Seat numbers come by email after 10 Nov. Platform 5.", "Ordered", [{ label: "Check trains", url: "https://smart-ex.jp/en/" }]],
      ["4:15 PM", "Kyoto check-in", "Check-in opens at 3:00 PM. Take two taxis from Kyoto Station to avoid another luggage-heavy transfer.", "Low walking"],
      ["7:00 PM", "Simple dinner & early night", "Use a nearby halal restaurant or takeaway. Save Kyoto sightseeing for tomorrow.", "Rest"]
    ],
    tip: "Plan: one-way van to Mishima, then Hikari 713 at 1:46 PM. If the drive runs late, the next Hikari 717 leaves at 3:46 PM, and the Klook ticket is changeable. Fall back to the Fujikyu highway bus if the weather or roads look bad."
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
    title: "Kyoto to Osaka",
    category: "transit",
    lede: "Kyoto checkout is 10:00 and the Osaka Airbnb opens at 16:00, so this is a light travel day with a luggage plan for the gap.",
    events: [
      ["8:00 AM", "Slow breakfast & final pack", "Repack feeds, nappies and one change of clothes in the day bag. Leave the Kyoto annex tidy and follow the host's check-out instructions for the key.", "Easy start"],
      ["By 10:00 AM", "Check out of Kyoto", "Checkout is before 10:00. Ask the host early if a later bag drop is possible.", "Checkout"],
      ["10:30–11:30 AM", "Kyoto Station to Osaka", "Take a reserved Shinkansen to Shin-Osaka or the JR line to Osaka Station, with a taxi for any luggage-heavy leg.", "Short ride"],
      ["12:00–2:00 PM", "Lunch, prayer & baby reset", "Eat near the station and confirm a halal-friendly option before arriving. Protect a full feed and nap window.", "Reset"],
      ["2:00–4:00 PM", "Bridge the check-in gap", "Check-in is after 16:00. Use Airbnb luggage storage, station lockers or Yamato forwarding rather than carrying bags around.", "Luggage plan"],
      ["4:00–5:00 PM", "Osaka check-in", "1-chōme-18-25 Izuo, Osaka 551-0031. The lockbox code comes from the host, so message Tatsu before arriving.", "Check-in"],
      ["6:30 PM", "Simple dinner & early night", "Pick up easy food near the Airbnb and save sightseeing for tomorrow.", "Rest"]
    ],
    tip: "Check-in and checkout are six hours apart, so the luggage plan is the whole day. Sort it before leaving Kyoto."
  },
  {
    number: "Day 09",
    date: "Sat · 5 Dec",
    title: "An easy Osaka day",
    category: "osaka",
    lede: "One main Osaka sight, a halal-checked lunch, a long reset, then the Shinsaibashi shopping street and Dotonbori at dusk.",
    events: [
      ["9:00 AM", "Slow breakfast at the Airbnb", "Review energy and weather before choosing the plan.", "Flexible"],
      ["10:30 AM–12:30 PM", "Osaka Castle Park", "Park and exterior views are easier with a baby than queueing inside. Paths are long but stroller-friendly.", "Main sight"],
      ["12:30–2:30 PM", "Lunch, prayer & baby reset", "No Osaka restaurant has been shortlisted yet, so confirm a halal-friendly option the night before.", "Plan ahead"],
      ["2:45–5:30 PM", "Shinsaibashi-suji shopping, then Dotonbori", "The family wants to shop here, so this is a planned stop. Go to Shinsaibashi Station and walk the covered arcade south (about 600 m), taking breaks in the shops. Finish at the canal and neon signs of Dotonbori around dusk. Saturday is packed, so use the carrier, agree a meeting point in case you get separated, and split into two groups if needed.", "Planned"],
      ["6:30 PM", "Easy dinner", "Choose takeaway or a reservable place near the Airbnb rather than queueing in a crowd.", "Low pressure"]
    ],
    tip: "Do not add Nara or Kyoto on top of this. Osaka is the final base, so keep the trip's pace gentle."
  },
  {
    number: "Day 10",
    date: "Sun · 6 Dec",
    title: "A spare Osaka day",
    category: "osaka",
    lede: "Last full day, and tomorrow starts around 5 AM. Keep today easy, pack tonight, and be in bed early.",
    events: [
      ["9:00 AM", "Slow breakfast", "No fixed plan. Decide the day from sleep and weather.", "Flexible"],
      ["10:30 AM–12:30 PM", "One easy outing", "Pick a department store, a favourite from the Places list or a warm indoor stop. If shopping ran short yesterday, go back to Shinsaibashi-suji early.", "One area"],
      ["12:30–2:30 PM", "Lunch, prayer & baby reset", "Choose a confirmed halal-friendly meal and protect the full reset window.", "Reset"],
      ["3:00–5:00 PM", "Free afternoon", "Shopping, laundry or an early return to the Airbnb. Buy breakfast and snacks for tomorrow's train.", "Open plan"],
      ["6:00 PM", "Early dinner", "Eat early and keep it simple.", "Early night"],
      ["7:00–8:30 PM", "Pack & set out clothes", "Pack everything tonight. Keep passports, feeds, nappies and one change of clothes in the cabin bag, and charge phones. Be asleep by 9:00 PM.", "Departure prep"]
    ],
    tip: "Book the two taxis for 6:00 AM the night before (use an app such as GO, or ask the host). Reserve the Shinkansen and Narita Express seats now, because early trains fill up."
  },
  {
    number: "Day 11",
    date: "Mon · 7 Dec",
    title: "Osaka to Tokyo to home",
    category: "transit",
    lede: "Taxi to Shin-Osaka, the 6:33 AM Nozomi to Tokyo, the 10:03 Narita Express, then a 1:50 PM flight. Both trains are booked on Klook, and you reach Narita at about 10:54 AM.",
    events: [
      ["4:45 AM", "Wake up", "Feed the baby, dress and do a last check of the Airbnb. Checkout is before 10:00, so leaving early is fine; follow the host's key and lockbox instructions.", "Early start"],
      ["5:25–5:40 AM", "Subuh prayer", "Osaka Subuh begins at about 5:25 AM. Pray at the Airbnb just before the taxi, or on the Shinkansen if running late.", "Prayer"],
      ["5:40 AM", "Taxis to Shin-Osaka", "Two taxis, about 25 minutes, so you reach the station by about 6:10. Book them on 5 or 6 Dec through the host or the GO app, and confirm the night before. Take everything, since the next bag drop is at Narita.", "Travel"],
      ["6:33–8:57 AM", "Shinkansen Nozomi 68 Shin-Osaka → Tokyo", "Booked on Klook: reserved ordinary car, 6 adults, Car 4 seats 5A–C and 6A–C, QR-code boarding. About 2 h 24 min. Feed the baby on the train.", "Booked"],
      ["9:00–10:03 AM", "Tokyo Station → Narita Express 15", "You have about 66 minutes. Use the lifts to the Narita Express platform. Your Klook slips may need a QR scan at a JR East machine for the basic fare ticket, so follow the voucher's how-to-use notes and allow 10 minutes. Board car 10 at 10:03: seats 1-A to 1-D, 2-C and 2-D.", "Booked"],
      ["10:54–11:15 AM", "Narita check-in & bag drop", "The train reaches Narita Terminal 2-3 at 10:54. MU524 departs Narita Terminal 2 at 1:50 PM per your booking. Do the tax-free departure steps first if you bought tax-free goods.", "Check-in"],
      ["11:15 AM–12:45 PM", "Zohor + Asar (jamak), feed & nappy", "Use the airport prayer room after bag drop. Tokyo Zohor is about 11:30 AM, so pray Zohor then Asar together (jamak taqdim) before boarding.", "Prayer + reset"],
      ["1:50–4:30 PM", "Flight Tokyo → Shanghai", "Lands at 4:30 PM Shanghai time. Asar is already done with the jamak, so just rest and feed the baby.", "Flight"],
      ["4:30–5:15 PM", "Shanghai transit", "A 45-minute connection. Go straight to the gate and tell staff you have a baby.", "Tight"],
      ["5:15–11:15 PM", "Flight Shanghai → KLIA", "Lands at KLIA at 11:15 PM. Pray Maghrib and Isyak together (jamak) on board or at the gate, before landing.", "Flight"]
    ],
    tip: "If the Shinkansen runs late, the Narita Express is the next thing to slip. A later Narita Express usually leaves about 30 minutes after, and would still get you to Narita by about 11:30. Ask Narita check-in to tag bags through to KLIA."
  }
];

const photo = id => `https://unsplash.com/photos/${id}/download?force=true&w=1200`;

const dayImages = [
  { id: "5tQvtADmmyg", alt: "Interior architecture at Kuala Lumpur International Airport", label: "KLIA · the journey begins" },
  { id: "8Tlrh8aPFw0", alt: "Shinjuku streets illuminated at night", label: "Shinjuku · first night" },
  { id: "DcklCt6hau8", alt: "Ginza avenue with pedestrians and city traffic", label: "Ginza · shopping day" },
  null,
  { id: "keRAW9X0OlM", alt: "Shibuya Crossing illuminated by signs at night", label: "Shibuya · city lights" },
  { id: "J_7o0_1S-PM", alt: "Mount Fuji reflected in Lake Kawaguchi", label: "Kawaguchiko · Fuji arrival" },
  { id: "EylXr_kvBFU", alt: "Chureito Pagoda with Mount Fuji in the distance", label: "Fujiyoshida · early Fuji views" },
  { id: "HmNssAygTlw", alt: "Path beneath tall bamboo in Arashiyama", label: "Arashiyama · bamboo and river" },
  { id: "Qiw63GpWN6w", alt: "Traditional wooden buildings along a quiet Kyoto street", label: "Kyoto · last morning" },
  { id: "hM6BYCsEFkA", alt: "White walls and ornate roofs of Osaka Castle", label: "Osaka · castle park" },
  { id: "QXcQ99G1PSw", alt: "Neon signs reflected in the Dotonbori canal at night", label: "Osaka · a spare day" },
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
    note: "Not in the plan. Add it on a spare Tokyo day, after lunch, and stay for dusk if everyone is comfortable."
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
    note: "Strong Day 07 option before 8 AM or late afternoon, or a quick early stop before leaving Kyoto on Day 08. Avoid the midday crowd."
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
    note: "Best rainy-day choice for Day 07. Check closure days and last admission before going."
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
    note: "Best match: Day 09 as the main Osaka sight, then choose one second neighbourhood only."
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
    note: "Best match: Day 09 or 10 around dusk. Use the carrier and confirm a halal meal beforehand."
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
  "Message the Narita van operator (Klook UYX696452) to arrange a rear-facing baby seat for the 7-month-old, and ask where the driver meets you",
  "Book the Tokyo Station to Kawaguchiko highway bus on Klook for 1 Dec (about 9:50 AM, 6 adults)",
  "Book Shibuya Sky timed entry",
  "Choose priority streetwear stores and check release-day rules",
  "Reserve Gyumon Ginza and Yoshiya Kyoto",
  "Reserve the Toyota van: Fujikawaguchiko 1 Dec 12:30 to Mishima Shinkansen Ext. 2 Dec 12:30, with infant seat, protection and winter tyres",
  "Book Hikari 713, Mishima 1:46 PM to Kyoto 3:37 PM on 2 Dec, for 6 adults",
  "Confirm Airbnb luggage storage, cot and Yamato acceptance",
  "Check the Klook emails for the 7 Dec Nozomi 68 and Narita Express 15 vouchers, and save every QR code offline",
  "Pack carrier, compact stroller, rain cover, tissues and hand towel",
  "Check prayer times, weather, market status and restaurant hours",
  "Fix the 7 Dec return: the 45-minute Shanghai connection (MU524 → MU8583) is too tight, so ask Trip.com or China Eastern for a safer flight",
  "Confirm the infant's ticket name matches her passport (the name-change request was cancelled)",
  "Confirm the infant does not count towards the 6-guest limit at the Tokyo and Kyoto Airbnbs",
  "Decide on any Airbnb changes before the cancellation deadlines: Tokyo 20 Nov, Fuji 24 Nov, Kyoto 25 Nov, Osaka 27 Nov",
  "Save all 7 Visit Japan Web QR codes offline (one per traveller) on two devices",
  "Check the Shanghai arrival-card rule for airside transit on the China NIA site",
  "Book the Osaka taxis for about 5:40 AM on 7 Dec through the host or the GO app, on 5 or 6 Dec, and confirm the night before",
  "Message the Fuji, Tokyo and Kyoto hosts about van parking and Yamato forwarding of the big suitcases"
];

const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
function guideHtml(index) {
  const g = typeof dayGuide !== "undefined" ? dayGuide[index] : null;
  if (!g) return "";
  return `
        <div class="day-guide">
          <section class="guide-block">
            <h4>How to get around</h4>
            <ol class="guide-legs">
              ${g.legs.map(([route, mode, note]) => `<li><strong>${esc(route)}</strong><span class="guide-mode">${esc(mode)}</span><span>${esc(note)}</span></li>`).join("")}
            </ol>
          </section>
          <section class="guide-block">
            <h4>Solat plan</h4>
            <ul class="guide-solat">
              ${g.solat.map(item => `<li>${esc(item)}</li>`).join("")}
            </ul>
          </section>
        </div>`;
}

const daysRoot = document.querySelector("[data-days]");

daysRoot.innerHTML = days.map((day, index) => `
  <article class="day-card" id="day-card-${index}" data-category="${day.category}" hidden>
    <header class="day-head">
      <span class="day-number">${day.number} · ${day.date}</span>
      <h3 class="day-title">${day.title}</h3>
    </header>
    <div class="day-content" id="day-${index}">
      <div class="day-content-inner">
        <p class="day-lede">${day.lede}</p>
        <nav class="day-jump" aria-label="Sections of this day">
          <button type="button" data-jump="sched-${index}">Schedule</button>
          <button type="button" data-jump="daymap-${index}">Map and stops</button>
          <button type="button" data-jump="guide-${index}">Getting around</button>
        </nav>
        <section class="day-sec day-sched" id="sched-${index}">
        <h4 class="timeline-title">Hour by hour</h4>
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
        </section>
        <section class="day-sec day-mapsec" id="daymap-${index}">
        ${dayImages[index] ? `<figure class="day-photo">
          <img src="${photo(dayImages[index].id)}" alt="${dayImages[index].alt}" loading="lazy">
          <figcaption><span>${dayImages[index].label}</span><a href="https://unsplash.com/photos/${dayImages[index].id}" target="_blank" rel="noreferrer">Photo source ↗</a></figcaption>
        </figure>` : ""}
        ${typeof splitHtml === "function" ? splitHtml(index, day) : ""}
        </section>
        <section class="day-sec day-guidesec" id="guide-${index}">
        ${guideHtml(index)}
        </section>
      </div>
    </div>
  </article>
`).join("");

document.addEventListener("click", event => {
  const jump = event.target.closest("[data-jump]");
  if (!jump) return;
  const target = document.getElementById(jump.dataset.jump);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});

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

const dayShort = ["KLIA", "Tokyo", "Ginza", "Kamakura", "Shibuya", "Fuji", "To Kyoto", "Kyoto", "To Osaka", "Osaka", "Osaka", "Home"];
const dayRail = document.querySelector("[data-day-rail]");
const dayCount = document.querySelector("[data-day-count]");
const dayPrev = document.querySelector("[data-day-prev]");
const dayNext = document.querySelector("[data-day-next]");
const dayCards = [...document.querySelectorAll(".day-card")];
const MONTH_INDEX = { Nov: 10, Dec: 11 };
let currentDay = 0;

const dayDate = day => {
  const match = /(\d{1,2})\s+(Nov|Dec)/.exec(day.date);
  return match ? { d: match[1], m: match[2] } : { d: "", m: "" };
};

dayRail.innerHTML = days.map((day, index) => {
  const { d, m } = dayDate(day);
  return `<button class="day-chip" type="button" role="tab" data-day-chip="${index}" aria-selected="false">
    <span class="chip-num">${day.number.replace("Day ", "Day ")}</span>
    <strong>${d} ${m}</strong>
    <span class="chip-place">${dayShort[index] || ""}</span>
  </button>`;
}).join("");

// Scroll affordances: fade the edge that has more content, and keep arrow buttons in step.
const watchScroll = el => {
  if (!el || el.dataset.watched) return;
  el.dataset.watched = "1";
  const update = () => {
    const max = el.scrollWidth - el.clientWidth;
    el.classList.toggle("can-left", el.scrollLeft > 4);
    el.classList.toggle("can-right", el.scrollLeft < max - 4);
    el.dispatchEvent(new CustomEvent("scrollstate"));
  };
  el.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  requestAnimationFrame(update);
  setTimeout(update, 400);
};
const railPrev = document.querySelector("[data-rail-prev]");
const railNext = document.querySelector("[data-rail-next]");
const railHint = document.querySelector("[data-rail-hint]");
watchScroll(dayRail);
const syncArrows = () => {
  railPrev.hidden = !dayRail.classList.contains("can-left");
  railNext.hidden = !dayRail.classList.contains("can-right");
};
dayRail.addEventListener("scrollstate", syncArrows);
const hideHint = () => {
  if (!railHint || railHint.hidden) return;
  railHint.hidden = true;
  try { localStorage.setItem("japan-rail-hint", "1"); } catch (e) {}
};
railPrev.addEventListener("click", () => { dayRail.scrollBy({ left: -dayRail.clientWidth * 0.7, behavior: "smooth" }); hideHint(); });
railNext.addEventListener("click", () => { dayRail.scrollBy({ left: dayRail.clientWidth * 0.7, behavior: "smooth" }); hideHint(); });
dayRail.addEventListener("touchstart", hideHint, { passive: true });
dayRail.addEventListener("wheel", hideHint, { passive: true });
try { if (localStorage.getItem("japan-rail-hint")) railHint.hidden = true; } catch (e) {}
// A short sideways nudge the first time the Plan page is shown, so the strip is seen to move.
window.nudgeRail = () => {
  if (window.__railNudged) return;
  window.__railNudged = true;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  setTimeout(() => {
    if (dayRail.scrollWidth <= dayRail.clientWidth + 8) return;
    const back = dayRail.scrollLeft;
    dayRail.scrollTo({ left: back + 72, behavior: "smooth" });
    setTimeout(() => dayRail.scrollTo({ left: back, behavior: "smooth" }), 650);
  }, 700);
};
document.querySelectorAll(".flip-row, .cat-row").forEach(watchScroll);

const selectDay = (index, scroll = true) => {
  currentDay = Math.max(0, Math.min(days.length - 1, index));
  dayCards.forEach((card, i) => { card.hidden = i !== currentDay; });
  dayRail.querySelectorAll(".day-chip").forEach((chip, i) => {
    const on = i === currentDay;
    chip.classList.toggle("active", on);
    chip.setAttribute("aria-selected", String(on));
    if (on && scroll) chip.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  });
  if (typeof initDayMap === "function") requestAnimationFrame(() => initDayMap(currentDay));
  requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
  dayCount.textContent = `${days[currentDay].number} of ${days.length - 1}`;
  dayPrev.disabled = currentDay === 0;
  dayNext.disabled = currentDay === days.length - 1;
  try { localStorage.setItem("japan-family-day", String(currentDay)); } catch (e) {}
};
window.selectDay = selectDay;
window.currentDayIndex = () => currentDay;

dayRail.addEventListener("click", event => {
  const chip = event.target.closest("[data-day-chip]");
  if (chip) { selectDay(Number(chip.dataset.dayChip)); window.scrollTo({ top: 0, behavior: "smooth" }); }
});
const stepDay = delta => { selectDay(currentDay + delta); window.scrollTo({ top: 0, behavior: "smooth" }); };
dayPrev.addEventListener("click", () => stepDay(-1));
dayNext.addEventListener("click", () => stepDay(1));

document.addEventListener("keydown", event => {
  if (document.body.dataset.page !== "plan") return;
  if (/^(input|textarea|select)$/i.test(event.target.tagName)) return;
  if (event.key === "ArrowLeft") stepDay(-1);
  if (event.key === "ArrowRight") stepDay(1);
});

let touchX = null;
let touchY = null;
const NO_SWIPE = ".flip-row, .cat-row, .map-box, .day-rail, .leaflet-container, .leg, a, button, input, select, textarea";
daysRoot.addEventListener("touchstart", event => {
  if (event.touches.length !== 1 || event.target.closest(NO_SWIPE)) { touchX = touchY = null; return; }
  touchX = event.touches[0].clientX;
  touchY = event.touches[0].clientY;
}, { passive: true });
daysRoot.addEventListener("touchend", event => {
  if (touchX === null) return;
  const dx = event.changedTouches[0].clientX - touchX;
  const dy = event.changedTouches[0].clientY - touchY;
  touchX = touchY = null;
  if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 2) stepDay(dx < 0 ? 1 : -1);
}, { passive: true });

(() => {
  const now = new Date();
  let start = 0;
  const todayIndex = days.findIndex(day => {
    const { d, m } = dayDate(day);
    return m && now.getFullYear() === 2026 && now.getMonth() === MONTH_INDEX[m] && now.getDate() === Number(d);
  });
  if (todayIndex >= 0) start = todayIndex;
  else {
    try { start = Number(localStorage.getItem("japan-family-day")) || 0; } catch (e) { start = 0; }
  }
  selectDay(start, false);
})();

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
