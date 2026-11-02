/* Day-by-day "how to get around" + solat plan. Index matches `days` in script.js.
   Times and costs are planning estimates: confirm in Google Maps / Navitime / Muslim Pro on the day. */
const dayGuide = [
  { // Day 00 · Thu 26 Nov
    legs: [
      ["Home → KLIA Terminal 1", "Private MPV / e-hailing", "6 adults and a baby will not fit one car. Book a 7-seater or two cars. KLIA Ekspres from KL Sentral (about 30 min) is the backup."]
    ],
    solat: [
      "Maghrib + Isyak: pray them together (jamak taqdim) at home before leaving, or at the KLIA1 surau after check-in. KL Maghrib is about 7:10 PM and Isyak about 8:20 PM.",
      "Subuh falls in Shanghai after landing, about 5:00 AM Shanghai time."
    ]
  },
  { // Day 01 · Fri 27 Nov
    legs: [
      ["KLIA → Shanghai Pudong", "Flight MU8584", "At check-in ask for bags to be tagged all the way to Narita. Confirm the transfer rules for the connection."],
      ["Shanghai T1 → Narita T2", "Flight MU523", "Stay in Terminal 1 for the whole connection. Keep a feed, nappies and a change of clothes in the cabin bag."],
      ["Narita T2 → Kameari (Airbnb)", "Keisei Skyliner + JR Joban Line", "Skyliner to Nippori (about 40 min, reserved seats), then JR Joban Line to Kameari (about 25 min). Kameari is on the EAST side of Tokyo, so do not go via Shinjuku. Easier with luggage: one pre-booked van (about 1 hour), but confirm a baby seat."],
      ["Kameari Station → Airbnb", "Walk / short taxi", "Check the route for lifts. The Airbnb is near the station, so a stroller is fine."]
    ],
    solat: [
      "Subuh (about 5:00 AM Shanghai time): pray at the gate area on a travel prayer mat, before sunrise at about 6:30.",
      "Zohor + Asar: jamak at the Narita prayer room before the train. Tokyo Zohor is about 11:30 AM; Asar runs until about 4:30 PM, so you have time.",
      "Maghrib + Isyak: jamak at the Airbnb after about 6:00 PM, or Maghrib on arrival (about 4:30 PM) and Isyak later."
    ]
  },
  { // Day 02 · Sat 28 Nov
    legs: [
      ["Airbnb → Ginza", "JR Joban Line + Tokyo Metro", "About 40–50 min with one transfer. Typical route is Kameari → Ayase, then Chiyoda Line to Hibiya, then a 5–8 min walk to Ginza. Use station lifts. Taxi costs roughly ¥5,000–7,000 per car, so only use it if the baby is upset."],
      ["Inside Ginza", "Walk", "Everything in the plan (shops, Tendon Itsuki, Matsuya, UNIQLO, Polène, Gyumon) is within about 10 minutes on foot. Do not take trains inside Ginza."],
      ["Ginza → Airbnb", "Same route back", "Leave Gyumon by 8:00 PM and avoid a late crowded train."]
    ],
    solat: [
      "Subuh: pray at the Airbnb before breakfast. Sunrise is about 6:30 AM.",
      "Zohor + Asar: jamak at the Matsuya Ginza rooftop prayer room at about 2:00 PM (Zohor about 11:30, Asar about 14:10). Pray Zohor first, then Asar.",
      "Maghrib + Isyak: jamak at the Airbnb after dinner, about 8:30 PM (jamak ta'khir). Maghrib is about 4:30 PM and Isyak about 6:00 PM."
    ]
  },
  { // Day 03 · Sun 29 Nov
    legs: [
      ["Airbnb → Tokyo Station", "JR Joban Line to Ayase, Chiyoda Line to Otemachi", "About 50 min with one transfer. Use station lifts. A taxi is about 40 min but costs ¥8,000–10,000 per car (two cars), so only use it if needed."],
      ["Tokyo Station → Kamakura", "JR Yokosuka Line (direct)", "About 55 min, roughly ¥940 per adult. No more changes. Board at the Yokosuka / Sobu Rapid platforms. Allow extra time to find them in the big station."],
      ["Kamakura Station → Komachi-dori → Tsurugaoka Hachimangu", "Walk (about 15 min)", "Flat. Use the carrier on weekends."],
      ["Kamakura → Hase (Great Buddha)", "Enoden tram (about 5 min)", "Fold the stroller on board. Great Buddha is a 10 min flat walk from Hase Station."],
      ["Hase → Kamakura → Tokyo → Airbnb", "Enoden, Yokosuka Line, then the same route home", "Leave Hase by 3:30 PM. Expect about 2 hours home."]
    ],
    solat: [
      "Subuh: before leaving, about 5:00–6:30 AM.",
      "Zohor + Asar: jamak taqdim at lunch, about 12:15 PM. There is no confirmed prayer room in Kamakura, so use a quiet corner with a portable mat, or the baby/family room at Tokyo Station for a private space.",
      "Maghrib + Isyak: jamak at the Airbnb after the train home, about 6:30–7:00 PM (jamak ta'khir)."
    ]
  },
  { // Day 04 · Mon 30 Nov
    legs: [
      ["Airbnb → Shibuya", "JR Joban Line + Chiyoda Line (or taxi)", "About 50–60 min with a transfer. Joban Line trains from Kameari run onto the Chiyoda Line, so check which stations you can reach without changing."],
      ["MEGA Don Quijote → streetwear loop → lunch", "Walk", "All in Shibuya. Don Quijote is near Shibuya Station. Master Chicken is in Udagawacho."],
      ["Shibuya → Tokyo Camii, Oyamacho", "Taxi (about 10 min)", "About ¥1,500 per car, so two cars. The mosque is a short walk from Yoyogi-Uehara Station. Check its opening hours and visiting rules first."],
      ["Tokyo Camii → Shibuya Sky", "Taxi (10 min)", "Book the Sky ticket for around 3:30–4:00 PM, with sunset at about 4:30 PM."],
      ["Shibuya → Airbnb", "Train (about 55 min) or taxi", "Buy breakfast on the way."]
    ],
    solat: [
      "Zohor + Asar: jamak at Tokyo Camii after lunch, at about 2:10 PM. It is the one proper mosque on this trip, so plan to use it.",
      "Maghrib + Isyak: jamak at the Airbnb after getting home, about 6:30–7:00 PM. Maghrib is about 4:30 PM, while you are at Shibuya Sky."
    ]
  },
  { // Day 05 · Tue 1 Dec
    legs: [
      ["Airbnb → Shinjuku", "Two taxis or a van (best with luggage)", "About 45–60 min and ¥8,000–12,000 per car. By train: Joban Line to Ayase, Chiyoda Line to Otemachi, Marunouchi Line to Shinjuku. Leave by 7:45 AM for the 9:30 AM Fuji Excursion."],
      ["Shinjuku → Kawaguchiko", "Fuji Excursion (about 2 hr)", "Reserved seats. Carry only an overnight bag on the train. Yamato can forward your main suitcases to Kyoto, so ask the Airbnb host."],
      ["Kawaguchiko Station → rental car", "Walk or short taxi", "Pick up the car after lunch. Fit the infant seat before leaving the lot."],
      ["Lawson → Lake Kawaguchi / Oishi Park → Airbnb", "Drive (about 10–20 min each)", "All close together. Oishi Park is about 15 minutes by car from the station."]
    ],
    solat: [
      "Subuh: pray at the Airbnb in Tokyo before leaving. It is dark until about 6:30 AM.",
      "Zohor + Asar: jamak at lunch, about 12:00 PM. There is no mosque near Kawaguchiko, so pray at the Airbnb or in a quiet corner.",
      "Maghrib + Isyak: jamak at the Airbnb after check-in, about 6:00 PM. Daylight ends early and it gets very cold."
    ]
  },
  { // Day 06 · Wed 2 Dec
    legs: [
      ["Airbnb → Honcho Street → Arakura Shrine", "Drive (about 20–30 min, then 10 min)", "Both are in Fujiyoshida, so do them together. Check out of the Airbnb by 10:00 AM and keep the luggage in the car."],
      ["Arakura → Lake Yamanakako", "Drive (about 30–40 min)", "The farthest point of the day. Order is now closest first, then outward."],
      ["Yamanakako → Kawaguchiko", "Drive (about 35 min)", "Refuel before returning the car. Allow time for inspection and repacking."],
      ["Kawaguchiko Station → Mishima Station", "Fujikyu highway bus (about 1 hr 30 min)", "Board at the Kawaguchiko Station bus area and get off at Mishima Station, then walk to the Shinkansen entrance. Book now: sales open 1 month ahead (2 Nov), web fare ¥2,500, call 0555-73-8181 or use the Kawaguchiko Station counter. One bag per person under the floor. Reserve a seat for the baby."],
      ["Mishima → Kyoto", "Shinkansen (about 1 hr 45 min)", "Reserved seats with luggage space. Taxi from Kyoto Station to the Airbnb, which is on the east side of the city."]
    ],
    solat: [
      "Subuh: before the 6:45 AM departure, about 5:00–6:30.",
      "Zohor + Asar: jamak taqdim at lunch near Kawaguchiko, about 12:00, before the bus.",
      "Maghrib + Isyak: jamak on arrival at the Kyoto Airbnb, about 6:15 PM (jamak ta'khir), or Maghrib on the Shinkansen and Isyak at the Airbnb."
    ]
  },
  { // Day 07 · Thu 3 Dec
    legs: [
      ["Airbnb → Arashiyama", "JR via Kyoto Station, or taxi", "The Airbnb is in Yamashina Ward on the east side, so Arashiyama is on the far west side. By train about 45–60 min via Kyoto Station and the JR Sagano Line to Saga-Arashiyama. Taxi about 40 min (¥6,000+ per car). Leave by 7:30 AM."],
      ["Saga-Arashiyama → Bamboo Grove → Togetsukyo → Yoshiya → Kimono Forest", "Walk", "Order is closest to farthest. About 10 minutes between each. The Kimono Forest is at the Randen Arashiyama station."],
      ["Arashiyama → Airbnb", "JR + taxi or taxi", "Take a taxi if the baby is tired."]
    ],
    solat: [
      "Subuh: before leaving at about 7:30 AM (Kyoto sunrise is about 6:50 AM).",
      "Zohor + Asar: jamak at Yoshiya Arashiyama, which has a prayer room and wudu facilities, at about 12:00–1:00 PM.",
      "Maghrib + Isyak: jamak at the Airbnb after dinner (jamak ta'khir). Be on the way back from Arashiyama by 4:00 PM."
    ]
  },
  { // Day 08 · Fri 4 Dec
    legs: [
      ["Kyoto Airbnb → Kyoto Station", "Taxi or train", "Check out by 10:00 AM. Two taxis for the group and luggage."],
      ["Kyoto → Shin-Osaka", "Shinkansen (about 15 min) or JR Special Rapid (about 30 min)", "Shinkansen is faster. Both are good with a stroller."],
      ["Osaka → Airbnb (Izuo, Taisho Ward)", "Taxi (about 20–25 min) or JR Loop Line to Taisho", "Check-in is after 16:00. Store bags in a coin locker or ask the host about early drop-off. Taxi is the sensible choice with luggage."]
    ],
    solat: [
      "Subuh: before leaving, about 5:30–6:50.",
      "Zohor + Asar: jamak at lunch in Osaka, about 12:00–1:00 PM. No mosque is confirmed on this route, so use a quiet corner or the station area.",
      "Maghrib + Isyak: jamak at the Airbnb after check-in."
    ]
  },
  { // Day 09 · Sat 5 Dec
    legs: [
      ["Airbnb → Osaka Castle Park", "JR Osaka Loop Line from Taisho", "About 25 min. Get off at Osakajokoen Station. Check the lift."],
      ["Castle Park → Shinsaibashi-suji → Dotonbori", "Train (about 20–30 min, one transfer) or taxi, then walk", "Get off at Shinsaibashi, walk the covered arcade south for about 10 minutes to Dotonbori. Crowded and loud: use the carrier, not the stroller."],
      ["Dotonbori → Airbnb", "Metro Nagahori Tsurumi-ryokuchi Line to Taisho (about 15 min)", "Go back before 7:00 PM."]
    ],
    solat: [
      "Subuh: before breakfast.",
      "Zohor + Asar: jamak at a halal restaurant or a quiet corner, about 12:30–2:00 PM. Check the Halal Gourmet Japan app for prayer space near your lunch spot.",
      "Maghrib + Isyak: jamak at the Airbnb when you get home, about 7:00 PM (jamak ta'khir), or Maghrib at Dotonbori at dusk."
    ]
  },
  { // Day 10 · Sun 6 Dec
    legs: [
      ["Airbnb → your one outing", "Train or taxi", "Choose the closest saved place. Keep it under 30 minutes each way."]
    ],
    solat: [
      "Five prayers at the Airbnb, with the two jamak pairs: Zohor + Asar at lunch time, and Maghrib + Isyak after dinner."
    ]
  },
  { // Day 11 · Mon 7 Dec
    legs: [
      ["Airbnb → Shin-Osaka", "Two pre-booked taxis (about 25 min)", "Leave at about 6:00 AM. Book them the night before with an app such as GO, or ask the host."],
      ["Shin-Osaka → Tokyo", "Shinkansen Nozomi (about 2.5 hr)", "Take a 6:30–7:00 AM train, roughly ¥14,000 per adult. Reserved seats with luggage space. Not later than 7:30 AM."],
      ["Tokyo Station → Narita", "Narita Express (about 1 hr)", "Reserved seats. Allow 20 minutes to change trains and find the platform, using lifts."],
      ["Narita → Shanghai → KLIA", "Two flights", "The Shanghai connection is only 45 min, so ask for bags to be tagged through to KLIA."]
    ],
    solat: [
      "Subuh: at the Airbnb at about 5:25–5:45 AM, before the 6:00 AM taxi. Check the exact time in Muslim Pro.",
      "Zohor + Asar: jamak at the Narita prayer room at about 11:30 AM, after bag drop.",
      "Maghrib + Isyak: jamak on the Shanghai → KLIA flight or at the gate, before landing at 11:15 PM."
    ]
  }
];
