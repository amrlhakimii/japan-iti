(function () {
  "use strict";
  var MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  var YEAR = 2026;

  function parseDayDate(str) {
    var m = /(\d{1,2})\s+([A-Za-z]{3})/.exec(String(str || ""));
    if (!m || !(m[2].toLowerCase() in MONTHS)) return null;
    return new Date(YEAR, MONTHS[m[2].toLowerCase()], +m[1]);
  }

  // Returns minutes since midnight for the START of a time string, or null.
  function parseStartMinutes(str) {
    var s = String(str || "").replace(/–|—|−/g, "-");
    var re = /(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/gi;
    var first = re.exec(s);
    if (!first) return null;
    var second = re.exec(s);
    var h = +first[1], min = first[2] ? +first[2] : 0, mer = first[3] ? first[3].toLowerCase() : null;
    if (h > 24 || min > 59) return null;
    if (!mer && second && second[3]) {
      mer = second[3].toLowerCase();
      var h2 = +second[1] % 12;
      if ((h % 12) > h2) mer = mer === "pm" ? "am" : "pm";
    }
    if (mer) {
      if (h < 1 || h > 12) return null;
      h = h % 12 + (mer === "pm" ? 12 : 0);
    } else if (!/:/.test(first[0]) && !(second)) {
      return null; // bare number, too ambiguous
    }
    return h * 60 + min;
  }

  function parseNow(search, real) {
    var m = /[?&]today=([^&]+)/.exec(search || "");
    if (m) {
      var d = new Date(decodeURIComponent(m[1]));
      if (!isNaN(d)) return d;
    }
    return real || new Date();
  }

  function dayStart(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

  // Pure state computation.
  function computeState(days, now) {
    var dates = days.map(function (d) { return parseDayDate(d.date); });
    var valid = dates.filter(Boolean);
    if (!valid.length) return null;
    var first = valid[0], last = valid[valid.length - 1];
    var today = dayStart(now);
    if (today < first) {
      return { phase: "before", daysToGo: Math.round((first - today) / 864e5), first: first, last: last, index: dates.indexOf(first) };
    }
    if (today > last) return { phase: "after" };
    var idx = -1;
    dates.forEach(function (d, i) { if (d && d.getTime() === today.getTime()) idx = i; });
    if (idx < 0) return { phase: "after" };
    var nowMin = now.getHours() * 60 + now.getMinutes();
    var timed = days[idx].events.map(function (e, i) { return { i: i, t: parseStartMinutes(e[0]) }; });
    var next = null, current = null;
    timed.forEach(function (x) {
      if (x.t === null) return;
      if (x.t > nowMin) { if (next === null) next = x.i; } else current = x.i;
    });
    return { phase: "during", index: idx, next: next, current: current, first: first, last: last };
  }

  var api = { parseDayDate: parseDayDate, parseStartMinutes: parseStartMinutes, computeState: computeState, parseNow: parseNow };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }
  if (typeof document === "undefined" || typeof days === "undefined") return;

  var root = document.querySelector("[data-today-root]");
  if (!root) return;
  if (!Array.isArray(days) || !days.length) { root.hidden = true; return; }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function fmtDate(d) { return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }); }
  function mapsUrl(q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q); }

  function mapLink(title) {
    var a = el("a", "today-map", "Map ↗");
    a.href = mapsUrl(title);
    a.target = "_blank";
    a.rel = "noreferrer";
    a.setAttribute("aria-label", "Open " + title + " in Google Maps");
    return a;
  }

  function render() {
    var now = parseNow(location.search);
    var st = computeState(days, now);
    root.textContent = "";
    if (!st) { root.hidden = true; return; }
    root.hidden = false;
    var card = el("div", "today-card today-" + st.phase);
    var eyebrow = el("p", "today-eyebrow");
    card.appendChild(eyebrow);

    if (st.phase === "before") {
      eyebrow.textContent = "Countdown";
      var big = el("p", "today-count");
      big.appendChild(el("span", "today-num", String(st.daysToGo)));
      big.appendChild(document.createTextNode(st.daysToGo === 1 ? " day to go" : " days to go"));
      card.appendChild(big);
      card.appendChild(el("p", "today-sub", fmtDate(st.first) + " – " + fmtDate(st.last) + " " + YEAR));
      var d0 = days[st.index];
      var e0 = d0.events[0];
      if (e0) {
        var row = el("div", "today-next");
        row.appendChild(el("span", "today-label", "Departure day"));
        row.appendChild(el("strong", "today-title", d0.title));
        row.appendChild(el("span", "today-time", e0[0] + " · " + e0[1]));
        card.appendChild(row);
      }
    } else if (st.phase === "after") {
      eyebrow.textContent = "Trip complete";
      card.appendChild(el("p", "today-count today-home", "Welcome home"));
      card.appendChild(el("p", "today-sub", "Hope it was a wonderful trip. Rest well, and keep the photos safe."));
    } else {
      var day = days[st.index];
      eyebrow.textContent = day.number + " · " + day.date;
      card.appendChild(el("h3", "today-heading", day.title));
      card.appendChild(el("p", "today-sub", day.lede));

      var focusIdx = st.next !== null ? st.next : null;
      var nxt = el("div", "today-next");
      if (focusIdx !== null) {
        var ev = day.events[focusIdx];
        nxt.appendChild(el("span", "today-label", "Up next"));
        nxt.appendChild(el("strong", "today-title", ev[1]));
        nxt.appendChild(el("span", "today-time", ev[0]));
        nxt.appendChild(mapLink(ev[1]));
      } else {
        nxt.appendChild(el("span", "today-label", "All done"));
        nxt.appendChild(el("strong", "today-title", "Nothing else scheduled today"));
      }
      card.appendChild(nxt);

      var list = el("ol", "today-list");
      day.events.forEach(function (e, i) {
        var li = el("li", "today-item" + (i === focusIdx ? " is-next" : "") + (i === st.current && i !== focusIdx ? " is-now" : ""));
        li.appendChild(el("span", "today-item-time", e[0]));
        li.appendChild(el("span", "today-item-title", e[1]));
        li.appendChild(mapLink(e[1]));
        list.appendChild(li);
      });
      card.appendChild(list);

      var jump = el("a", "today-jump", "Jump to full day →");
      jump.href = "#day-" + st.index;
      jump.addEventListener("click", function (ev2) {
        ev2.preventDefault();
        var content = document.getElementById("day-" + st.index);
        var dayCard = content && content.closest(".day-card");
        if (!dayCard) return;
        var btn = dayCard.querySelector(".day-summary");
        if (btn && !dayCard.classList.contains("open")) btn.click();
        dayCard.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      card.appendChild(jump);
    }
    root.appendChild(card);
  }

  render();
  setInterval(render, 60000);
})();
