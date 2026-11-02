/* Per-day split view: stay card + flip cards on the left, live map on the right.
   Map: Leaflet + CARTO light tiles (OpenStreetMap data). Nearby places: Overpass API. No API key needed. */
(function () {
  "use strict";

  var CATEGORIES = [
    { id: "food", search: "restaurant", label: "Restaurants", color: "#f59e0b", icon: "🍴", q: '["amenity"~"^(restaurant|cafe|fast_food)$"]' },
    { id: "halal", search: "halal restaurant", label: "Halal", color: "#10b981", icon: "☪", q: '["diet:halal"~"^(yes|only)$"]' },
    { id: "prayer", search: "mosque", label: "Prayer", color: "#6366f1", icon: "🕌", q: '["amenity"="place_of_worship"]["religion"="muslim"]' },
    { id: "grocery", search: "supermarket", label: "Groceries", color: "#3b82f6", icon: "🛒", q: '["shop"~"^(supermarket|convenience|greengrocer)$"]' },
    { id: "shop", search: "shopping mall", label: "Shopping", color: "#ec4899", icon: "🛍", q: '["shop"~"^(mall|department_store|clothes|shoes|variety_store)$"]' },
    { id: "transport", search: "train station", label: "Transport", color: "#64748b", icon: "🚆", q: '["railway"="station"]' },
    { id: "sight", search: "tourist attraction", label: "Attractions", color: "#8b5cf6", icon: "📸", q: '["tourism"~"^(attraction|museum|gallery|viewpoint)$"]' }
  ];
  var KIND_ICON = { transport: "🚆", food: "🍴", shop: "🛍", sight: "📸", prayer: "🕌", stay: "🏠" };
  var OVERPASS = ["https://overpass-api.de/api/interpreter"];
  var maps = {};

  function hav(a, b) {
    var R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  }

  // Straight-line distance, with a rough real-route factor and a suggested way to go.
  function leg(a, b) {
    var km = hav(a, b) * 1.3;
    if (km < 0.15) return { text: "right here", mode: "walk" };
    if (km <= 1.4) return { text: Math.max(2, Math.round(km / 0.075)) + " min walk · " + km.toFixed(1) + " km", mode: "walk" };
    if (km <= 6) return { text: km.toFixed(1) + " km · short train or taxi", mode: "train" };
    return { text: Math.round(km) + " km · train", mode: "train" };
  }

  function fmtDist(d) { return d >= 1000 ? (d / 1000).toFixed(1) + " km" : d + " m"; }
  function routeFor(a, b) { return typeof ROUTES !== "undefined" ? ROUTES[a + ">" + b] : null; }
  function gwalk(a, b) { return "https://www.google.com/maps/dir/?api=1&origin=" + a.lat + "," + a.lng + "&destination=" + b.lat + "," + b.lng + "&travelmode=walking"; }

  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

  function gmaps(p) { return "https://www.google.com/maps/dir/?api=1&destination=" + p.lat + "," + p.lng + "&travelmode=transit"; }

  function numIcon(n, cls) {
    return L.divIcon({ className: "pin " + (cls || ""), html: "<span>" + n + "</span>", iconSize: [30, 30], iconAnchor: [15, 15] });
  }

  function overpass(cat, center, radius) {
    var key = "ovp:" + cat.id + ":" + center.lat.toFixed(3) + "," + center.lng.toFixed(3) + ":" + radius;
    try { var hit = sessionStorage.getItem(key); if (hit) return Promise.resolve(JSON.parse(hit)); } catch (e) {}
    var around = "(around:" + radius + "," + center.lat + "," + center.lng + ")";
    var body = "[out:json][timeout:20];(node" + cat.q + around + ";way" + cat.q + around + ";);out center 70;";
    function post(url) {
      var ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
      var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 5000);
      return fetch(url, { method: "POST", body: "data=" + encodeURIComponent(body), headers: { "Content-Type": "application/x-www-form-urlencoded" }, signal: ctl ? ctl.signal : undefined })
        .then(function (r) { clearTimeout(timer); if (!r.ok) throw new Error("http"); return r.json(); })
        .catch(function (e) { clearTimeout(timer); throw e; });
    }
    function ask(i) {
      if (i >= OVERPASS.length) return Promise.reject(new Error("overpass"));
      return post(OVERPASS[i]).catch(function () { return ask(i + 1); });
    }
    function mapOverpass(json) {
      return (json.elements || []).map(function (e) {
        var t = e.tags || {};
        return { lat: e.lat || (e.center && e.center.lat), lng: e.lon || (e.center && e.center.lon), name: t["name:en"] || t.name || t.brand || cat.label, jp: t.name && t["name:en"] ? t.name : "", halal: t["diet:halal"] };
      }).filter(function (x) { return x.lat && x.lng; });
    }
    // Fallback when Overpass is busy: Nominatim search inside the same box.
    function nominatim() {
      var dLat = radius / 111000, dLng = radius / (111000 * Math.cos(center.lat * Math.PI / 180));
      var vb = [center.lng - dLng, center.lat + dLat, center.lng + dLng, center.lat - dLat].join(",");
      var url = "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=40&bounded=1&accept-language=en&viewbox=" + vb + "&q=" + encodeURIComponent(cat.search);
      return fetch(url).then(function (r) { if (!r.ok) throw new Error("nominatim"); return r.json(); }).then(function (rows) {
        return rows.map(function (r) { return { lat: +r.lat, lng: +r.lon, name: (r.name || r.display_name.split(",")[0]), jp: "", halal: cat.id === "halal" ? "yes" : "" }; });
      });
    }
    return ask(0).then(mapOverpass).catch(nominatim).then(function (items) {
      try { sessionStorage.setItem(key, JSON.stringify(items)); } catch (e) {}
      return items;
    });
  }

  function buildMap(index) {
    var day = GEO.days[index];
    var el = document.getElementById("map-" + index);
    if (!el || !day || typeof L === "undefined") return null;
    var stay = day.stay ? GEO.places[STAYS[day.stay].place] : null;
    var stops = day.stops.map(function (k) { return GEO.places[k]; }).filter(function (p) { return p && p.lat; });
    var all = stops.slice();
    if (stay && (!stops.length || stops.some(function (p) { return hav(p, stay) < 12; }))) all.push(stay);
    var map = L.map(el, { zoomControl: false, attributionControl: true, scrollWheelZoom: false, tap: true });
    L.control.zoom({ position: "topright" }).addTo(map);
    var vector = false;
    if (L.maplibreGL && typeof maplibregl !== "undefined") {
      try {
        L.maplibreGL({ style: "https://tiles.openfreemap.org/styles/bright", attribution: '<a href="https://openfreemap.org" target="_blank" rel="noreferrer">OpenFreeMap</a> &copy; <a href="https://www.openmaptiles.org/" target="_blank" rel="noreferrer">OpenMapTiles</a> data from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>' }).addTo(map);
        vector = true;
      } catch (e) { vector = false; }
    }
    if (!vector) {
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    }

    var state = { map: map, stopMarkers: [], layers: {}, active: {}, stops: stops, stay: stay, index: index };

    if (stops.length > 1) {
      L.polyline(stops.map(function (p) { return [p.lat, p.lng]; }), { color: "#00adb5", weight: 3, opacity: .55, dashArray: "6 8" }).addTo(map);
    }
    stops.forEach(function (p, i) {
      var m = L.marker([p.lat, p.lng], { icon: numIcon(i + 1), title: p.label }).addTo(map);
      m.bindPopup("<strong>" + esc(p.label) + "</strong><br><a href='" + gmaps(p) + "' target='_blank' rel='noreferrer'>Directions ↗</a>");
      m.on("click", function () { highlightCard(index, i); });
      state.stopMarkers.push(m);
    });
    if (stay) {
      L.marker([stay.lat, stay.lng], { icon: L.divIcon({ className: "pin pin-stay", html: "<span>🏠</span>", iconSize: [38, 38], iconAnchor: [19, 19] }), zIndexOffset: 800 })
        .addTo(map).bindPopup("<strong>Your stay</strong><br>" + esc(STAYS[day.stay].name));
    }
    state.fit = function () {
      if (all.length) {
        var bounds = L.latLngBounds(all.map(function (p) { return [p.lat, p.lng]; }));
        if (bounds.getNorthEast().equals(bounds.getSouthWest())) map.setView(bounds.getCenter(), 15);
        else map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
      } else {
        map.setView([35.68, 139.76], 11);
      }
    };
    state.fit();
    map.on("moveend", function () { var b = document.querySelector('[data-search-area="' + index + '"]'); if (b && Object.keys(state.active).length) b.hidden = false; });
    maps[index] = state;
    return state;
  }

  function highlightCard(index, i) {
    var card = document.querySelector('[data-stop="' + index + "-" + i + '"]');
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    card.classList.add("pulse");
    setTimeout(function () { card.classList.remove("pulse"); }, 900);
  }

  function showCategory(state, cat, on, force) {
    var b = document.querySelector('[data-search-area="' + state.index + '"]');
    if (state.layers[cat.id]) { state.map.removeLayer(state.layers[cat.id]); delete state.layers[cat.id]; }
    if (!on) { delete state.active[cat.id]; return Promise.resolve(); }
    state.active[cat.id] = true;
    var c = state.map.getCenter();
    var radius = Math.min(2500, Math.max(500, Math.round(state.map.getBounds().getNorthEast().distanceTo(c) * 0.9)));
    var status = document.querySelector('[data-map-status="' + state.index + '"]');
    if (status) status.textContent = "Searching " + cat.label.toLowerCase() + "…";
    return overpass(cat, { lat: c.lat, lng: c.lng }, radius).then(function (items) {
      if (!state.active[cat.id]) return;
      var group = L.layerGroup();
      items.forEach(function (it) {
        var m = L.marker([it.lat, it.lng], { icon: L.divIcon({ className: "dot", html: "<span style='background:" + cat.color + "'>" + cat.icon + "</span>", iconSize: [26, 26], iconAnchor: [13, 13] }) });
        m.bindPopup("<strong>" + esc(it.name) + "</strong>" + (it.jp ? "<br>" + esc(it.jp) : "") + (it.halal === "yes" || it.halal === "only" ? "<br>☪ Halal tagged" : "") + "<br><a target='_blank' rel='noreferrer' href='" + gmaps(it) + "'>Directions ↗</a>");
        group.addLayer(m);
      });
      group.addTo(state.map);
      state.layers[cat.id] = group;
      if (status) status.textContent = items.length ? items.length + " " + cat.label.toLowerCase() + " nearby. Verify halal status before you go." : "Nothing mapped here. Try moving the map.";
      if (b) b.hidden = true;
    }).catch(function () {
      delete state.active[cat.id];
      var chip = document.querySelector('[data-cat="' + cat.id + '"][data-day="' + state.index + '"]');
      if (chip) chip.setAttribute("aria-pressed", "false");
      if (status) status.textContent = "Could not load nearby places. Check your connection.";
    });
  }

  function locate(state, btn) {
    var status = document.querySelector('[data-map-status="' + state.index + '"]');
    if (!navigator.geolocation) { if (status) status.textContent = "Your browser cannot share location."; return; }
    btn.disabled = true;
    if (status) status.textContent = "Finding you…";
    navigator.geolocation.getCurrentPosition(function (pos) {
      btn.disabled = false;
      var me = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (state.me) { state.map.removeLayer(state.me); state.map.removeLayer(state.meRing); }
      state.meRing = L.circle([me.lat, me.lng], { radius: Math.min(pos.coords.accuracy || 30, 300), color: "#2563eb", weight: 1, fillColor: "#2563eb", fillOpacity: .12 }).addTo(state.map);
      state.me = L.circleMarker([me.lat, me.lng], { radius: 8, color: "#fff", weight: 3, fillColor: "#2563eb", fillOpacity: 1 }).addTo(state.map).bindPopup("You are here");
      var near = null, best = Infinity;
      state.stops.forEach(function (p, i) { var d = hav(me, p); if (d < best) { best = d; near = { p: p, i: i }; } });
      if (near && best < 40) {
        state.map.fitBounds(L.latLngBounds([[me.lat, me.lng], [near.p.lat, near.p.lng]]), { padding: [60, 60], maxZoom: 16 });
        if (status) status.textContent = "Nearest stop: " + near.p.label + ", about " + (best < 1 ? Math.round(best * 1000) + " m" : best.toFixed(1) + " km") + " away (straight line).";
        highlightCard(state.index, near.i);
      } else {
        state.map.flyTo([me.lat, me.lng], 16, { duration: .8 });
        if (status) status.textContent = near ? "You are far from today's stops (nearest: " + near.p.label + ", " + Math.round(best) + " km). Use the category chips to find places around you." : "Showing your location.";
      }
      state.map.once("moveend", function () { var b = document.querySelector('[data-search-area="' + state.index + '"]'); if (b && Object.keys(state.active).length) b.hidden = false; });
    }, function (err) {
      btn.disabled = false;
      if (status) status.textContent = err && err.code === 1 ? "Location is blocked. Allow it in the browser settings for this site." : "Could not get your location. Try again outside or near a window.";
    }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 30000 });
  }

  // One face is shown at a time (no 3D backface tricks, which misbehave on iOS); the turn is a short Web Animations flip.
  function turnCard(card) {
    if (!card || card.dataset.turning) return;
    var inner = card.querySelector(".flip-inner");
    var toBack = !card.classList.contains("flipped");
    var done = function () {
      card.classList.toggle("flipped", toBack);
      card.querySelectorAll("[data-flip]").forEach(function (b) { b.setAttribute("aria-pressed", String(toBack)); });
      var next = card.querySelector(toBack ? ".flip-back [data-flip]" : ".flip-front");
      if (next && next.focus) { try { next.focus({ preventScroll: true }); } catch (e) {} }
    };
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!inner || !inner.animate || reduce) { done(); return; }
    card.dataset.turning = "1";
    inner.animate([{ transform: "perspective(700px) rotateY(0deg)" }, { transform: "perspective(700px) rotateY(90deg)" }], { duration: 160, easing: "ease-in" }).onfinish = function () {
      done();
      inner.animate([{ transform: "perspective(700px) rotateY(-90deg)" }, { transform: "perspective(700px) rotateY(0deg)" }], { duration: 200, easing: "ease-out" }).onfinish = function () { delete card.dataset.turning; };
    };
  }

  function drawRoute(state, key) {
    var R = typeof ROUTES !== "undefined" ? ROUTES[key] : null;
    if (!R) return;
    if (state.routeLayer) state.map.removeLayer(state.routeLayer);
    state.routeLayer = L.polyline(R.line, { color: "#111827", weight: 5, opacity: .85, lineCap: "round" }).addTo(state.map);
    state.map.fitBounds(state.routeLayer.getBounds(), { padding: [50, 50], maxZoom: 17 });
    var el = document.getElementById("map-" + state.index);
    if (el && window.innerWidth < 960 && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function wire(index) {
    var root = document.getElementById("split-" + index);
    if (!root || root.dataset.wired) return;
    root.dataset.wired = "1";
    var state = maps[index] || buildMap(index);
    if (!state) { var s = root.querySelector("[data-map-status]"); if (s) s.textContent = "Map needs an internet connection."; return; }

    root.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-cat]");
      if (chip) {
        var cat = CATEGORIES.filter(function (c) { return c.id === chip.dataset.cat; })[0];
        var on = chip.getAttribute("aria-pressed") !== "true";
        chip.setAttribute("aria-pressed", String(on));
        showCategory(state, cat, on);
        return;
      }
      var sa = e.target.closest("[data-search-area]");
      if (sa) {
        Object.keys(state.active).forEach(function (id) {
          var cat = CATEGORIES.filter(function (c) { return c.id === id; })[0];
          showCategory(state, cat, true);
        });
        return;
      }
      var go = e.target.closest("[data-flyto]");
      if (go) {
        e.stopPropagation();
        var p = go.dataset.flyto === "stay" ? state.stay : state.stops[Number(go.dataset.flyto)];
        if (p) {
          state.map.flyTo([p.lat, p.lng], 16, { duration: .8 });
          var el = document.getElementById("map-" + index);
          if (el && el.scrollIntoView && window.innerWidth < 900) el.scrollIntoView({ behavior: "smooth", block: "center" });
          if (go.dataset.flyto !== "stay" && state.stopMarkers[Number(go.dataset.flyto)]) state.stopMarkers[Number(go.dataset.flyto)].openPopup();
        }
        return;
      }
      var lc = e.target.closest("[data-locate]");
      if (lc) { locate(state, lc); return; }
      var wk = e.target.closest("[data-walk]");
      if (wk) {
        var det = root.querySelector('.leg[data-route="' + wk.dataset.walk + '"]');
        if (det) { det.open = true; drawRoute(state, det.dataset.route); det.scrollIntoView({ behavior: "smooth", block: "center" }); }
        return;
      }
      var sm = e.target.closest(".leg > summary");
      if (sm) {
        var d2 = sm.parentNode;
        if (!d2.open && d2.dataset.route) drawRoute(state, d2.dataset.route);
        else if (d2.open && state.routeLayer) { state.map.removeLayer(state.routeLayer); state.routeLayer = null; }
        return;
      }
      var flip = e.target.closest("[data-flip]");
      if (flip && !e.target.closest("a")) { turnCard(flip.closest(".flip")); }
    });
    setTimeout(function () { state.map.invalidateSize(); if (!state.fitted) { state.fitted = true; state.fit(); } }, 200);
  }

  window.initDayMap = function (index) {
    wire(index);
    var st = maps[index];
    if (st) setTimeout(function () {
      st.map.invalidateSize();
      if (!st.fitted) { st.fitted = true; st.fit(); }
    }, 160);
  };

  window.refreshMaps = function () {
    if (window.currentDayIndex && window.initDayMap) {
      var i = window.currentDayIndex();
      setTimeout(function () { window.initDayMap(i); }, 60);
    }
  };

  // HTML builders used by script.js
  window.splitHtml = function (index, day) {
    var g = GEO.days[index];
    if (!g) return "";
    var stay = g.stay ? STAYS[g.stay] : null;
    var stops = g.stops.map(function (k) { return GEO.places[k]; }).filter(function (p) { return p && p.lat; });
    var stayHtml = "";
    if (stay) {
      stayHtml = '<article class="stay-card">' +
        '<div class="stay-top"><div class="stay-art" aria-hidden="true">🏠</div><div class="stay-info"><h4>Your stay</h4><p>Hosted by ' + esc(stay.host) + '</p><p class="stay-dates">' + esc(stay.dates) + '</p></div></div>' +
        '<div class="stay-actions"><span class="stay-city">' + esc(stay.city) + '</span><button type="button" class="stay-btn" data-flyto="stay">View on map</button></div>' +
        '</article>' +
        '<div class="stay-times"><div class="time-card"><span>Check-in</span><strong>' + esc(stay.checkIn) + '</strong></div><div class="time-card"><span>Checkout</span><strong>' + esc(stay.checkOut) + '</strong></div></div>';
    }
    var cards = stops.map(function (p, i) {
      var prev = i > 0 ? leg(stops[i - 1], p) : null;
      var rt = i > 0 ? routeFor(g.stops[i - 1], g.stops[i]) : null;
      if (rt) prev = { mode: "walk", text: Math.max(1, Math.round(rt.t / 60)) + " min walk · " + fmtDist(rt.d) };
      var note = (GEO.notes && GEO.notes[g.stops[i]]) || "";
      return '<div class="flip" data-stop="' + index + "-" + i + '">' +
        '<div class="flip-inner"><button type="button" class="flip-face flip-front" data-flip aria-pressed="false" aria-label="Flip card for ' + esc(p.label) + '">' +
        '<span class="flip-num">' + (i + 1) + '</span><span class="flip-icon" aria-hidden="true">' + (KIND_ICON[p.kind] || "📍") + '</span>' +
        '<strong>' + esc(p.label) + '</strong><span class="flip-leg">' + (prev ? (prev.mode === "walk" ? "🚶 " : "🚆 ") + esc(prev.text) : "Start of the day") + '</span><span class="flip-hint">Tap to flip ↻</span></button>' +
        '<div class="flip-face flip-back"><strong>' + esc(p.label) + '</strong><p>' + esc(note || "Tap Directions to open live transit directions.") + '</p>' +
        '<div class="flip-actions"><button type="button" data-flyto="' + i + '">Show on map</button>' + (i > 0 && routeFor(g.stops[i - 1], g.stops[i]) ? '<button type="button" data-walk="' + g.stops[i - 1] + ">" + g.stops[i] + '">Walk here</button>' : '') + '<a href="' + gmaps(p) + '" target="_blank" rel="noreferrer">Directions ↗</a><button type="button" data-flip aria-pressed="true">Back ↺</button></div></div>' +
        '</div></div>';
    }).join("");
    var legs = "";
    for (var li = 1; li < stops.length; li++) {
      var ka = g.stops[li - 1], kb = g.stops[li], A = stops[li - 1], B = stops[li], R = routeFor(ka, kb), est = leg(A, B);
      var approx = A.approx || B.approx ? '<p class="leg-note">One of these pins is approximate, so use the street signs and the Google Maps link for the last few metres.</p>' : "";
      if (R) {
        legs += '<details class="leg" data-route="' + ka + ">" + kb + '" data-day="' + index + '"><summary><span class="leg-ico" aria-hidden="true">🚶</span><span class="leg-main"><strong>' + esc(A.label) + ' → ' + esc(B.label) + '</strong><small>' + Math.max(1, Math.round(R.t / 60)) + ' min on foot · ' + fmtDist(R.d) + '</small></span></summary>' +
          '<ol class="leg-steps">' + R.steps.map(function (s) { return '<li><span>' + esc(s[0]) + '</span>' + (s[1] ? '<em>' + fmtDist(s[1]) + '</em>' : '') + '</li>'; }).join("") + '</ol>' + approx +
          '<p class="leg-note">Street names are as they appear on signs, often in Japanese. Follow the route drawn on the map.</p>' +
          '<a class="leg-link" href="' + gwalk(A, B) + '" target="_blank" rel="noreferrer">Open walking route in Google Maps ↗</a></details>';
      } else {
        var how = est.mode === "walk" ? "Walk" : (hav(A, B) * 1.3 > 25 ? "Take a train (Shinkansen or limited express if booked)" : "Take a train, or a taxi if the baby is tired");
        legs += '<details class="leg" data-day="' + index + '"><summary><span class="leg-ico" aria-hidden="true">' + (est.mode === "walk" ? "🚶" : "🚆") + '</span><span class="leg-main"><strong>' + esc(A.label) + ' → ' + esc(B.label) + '</strong><small>' + esc(est.text) + '</small></span></summary>' +
          '<p class="leg-note">' + how + '. Station names, platforms and the live timetable are in the day guide below and in Google Maps.</p>' + approx +
          '<a class="leg-link" href="' + gmaps(B) + '" target="_blank" rel="noreferrer">Open live transit directions ↗</a></details>';
      }
    }
    var chips = CATEGORIES.map(function (c) {
      return '<button type="button" class="cat-chip" data-cat="' + c.id + '" data-day="' + index + '" aria-pressed="false"><span class="cat-icon" style="background:' + c.color + '">' + c.icon + '</span>' + c.label + '</button>';
    }).join("");
    return '<div class="day-split" id="split-' + index + '">' +
      '<div class="split-side">' + stayHtml +
      (cards ? '<h4 class="side-title">Stops today</h4><div class="flip-row">' + cards + '</div>' : '') +
      (legs ? '<h4 class="side-title">Getting between stops</h4><div class="legs">' + legs + '</div>' : '') + '</div>' +
      '<div class="split-map"><div class="map-box"><div class="map-el" id="map-' + index + '" aria-label="Map for ' + esc(day.title) + '"></div>' +
      '<button type="button" class="search-area" data-search-area="' + index + '" hidden>Search this area</button>' +
      '<button type="button" class="locate-btn" data-locate="' + index + '" aria-label="Show my location and nearest stop"><span aria-hidden="true">📍</span> Near me</button></div>' +
      '<div class="cat-row" role="group" aria-label="Show nearby places">' + chips + '</div>' +
      '<p class="map-status" data-map-status="' + index + '" aria-live="polite">Tap a category to see places around the map. Map data © OpenStreetMap.</p></div></div>';
  };
})();
