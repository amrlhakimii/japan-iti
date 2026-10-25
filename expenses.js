(function () {
  "use strict";
  var KEYS = { exp: "japan-family-expenses", fx: "japan-family-fx", bud: "japan-family-budget" };
  var CATS = ["Food", "Transport", "Shopping", "Tickets", "Baby", "Other"];
  var TRIP_MIN = "2026-11-25", TRIP_MAX = "2026-12-07";
  var DEFAULT_FX = 0.029;

  // ---------- pure helpers ----------
  function parseYen(s) {
    var t = String(s == null ? "" : s).replace(/[,\s¥]/g, "");
    if (!/^\d+(\.\d+)?$/.test(t)) return null;
    var n = Math.round(Number(t));
    return n > 0 && n <= 100000000 ? n : null;
  }
  function parseMoney(s) { // MYR budget, returns integer sen or null
    var t = String(s == null ? "" : s).replace(/[,\sRM]/gi, "");
    if (t === "") return 0;
    if (!/^\d+(\.\d+)?$/.test(t)) return null;
    return Math.round(Number(t) * 100);
  }
  function parseRate(s) {
    var n = Number(String(s).trim());
    return isFinite(n) && n > 0 && n < 10 ? n : null;
  }
  function toSen(yen, rate) { return Math.round(yen * rate * 100); } // integer sen
  function fmtYen(n) { return "¥" + Math.round(n).toLocaleString("en-US"); }
  function fmtSen(sen) {
    var neg = sen < 0, a = Math.abs(sen);
    return (neg ? "-" : "") + "RM " + Math.floor(a / 100).toLocaleString("en-US") + "." + String(a % 100).padStart(2, "0");
  }
  function clampDate(d) { return d < TRIP_MIN ? TRIP_MIN : d > TRIP_MAX ? TRIP_MAX : d; }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function sanitize(list) {
    if (!Array.isArray(list)) return [];
    return list.filter(function (e) {
      return e && Number.isInteger(e.yen) && e.yen > 0 && typeof e.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(e.date);
    }).map(function (e) {
      return { id: String(e.id || Date.now() + Math.random()), yen: e.yen, cat: CATS.indexOf(e.cat) >= 0 ? e.cat : "Other",
        note: String(e.note || "").slice(0, 120), date: e.date, by: String(e.by || "").slice(0, 40) };
    });
  }
  function totalYen(list) { return list.reduce(function (s, e) { return s + e.yen; }, 0); }
  function byCategory(list) {
    var o = {}; CATS.forEach(function (c) { o[c] = 0; });
    list.forEach(function (e) { o[e.cat] += e.yen; });
    return o;
  }
  function groupByDate(list) {
    var g = {};
    list.forEach(function (e) { (g[e.date] = g[e.date] || []).push(e); });
    return Object.keys(g).sort().reverse().map(function (d) { return { date: d, items: g[d], total: totalYen(g[d]) }; });
  }
  function csvCell(v) {
    var s = String(v);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // formula injection guard
    return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function toCSV(list, rate) {
    var rows = [["Date", "Category", "Note", "Paid by", "JPY", "MYR"]];
    list.slice().sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; }).forEach(function (e) {
      rows.push([e.date, e.cat, e.note, e.by, e.yen, (toSen(e.yen, rate) / 100).toFixed(2)]);
    });
    return rows.map(function (r) { return r.map(csvCell).join(","); }).join("\r\n");
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { parseYen: parseYen, parseMoney: parseMoney, parseRate: parseRate, toSen: toSen, fmtYen: fmtYen, fmtSen: fmtSen,
      clampDate: clampDate, sanitize: sanitize, totalYen: totalYen, byCategory: byCategory, groupByDate: groupByDate, toCSV: toCSV, csvCell: csvCell };
  }
  if (typeof document === "undefined") return;
  var root = document.querySelector("[data-expenses-root]");
  if (!root) return;

  // ---------- storage ----------
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
  }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  var expenses = sanitize(load(KEYS.exp, []));
  var fx = parseRate(load(KEYS.fx, DEFAULT_FX)) || DEFAULT_FX;
  var bud = load(KEYS.bud, {}); if (!bud || typeof bud !== "object") bud = {};
  var totalBudSen = Number.isInteger(bud.totalSen) && bud.totalSen > 0 ? bud.totalSen : 0;
  var dailyBudSen = Number.isInteger(bud.dailySen) && bud.dailySen > 0 ? bud.dailySen : 0;
  var editingId = null, undoItem = null, undoTimer = null, clearArmed = false, clearTimer = null;
  var formState = { date: clampDate(todayStr()), cat: "Food" };

  // ---------- dom helpers ----------
  function el(tag, cls, text, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function field(label, input) {
    var l = el("label", "exp-field"); l.appendChild(el("span", null, label)); l.appendChild(input); return l;
  }
  function persist() { save(KEYS.exp, expenses); }

  function render() {
    var active = document.activeElement, focusId = active && active.id;
    root.textContent = "";
    var wrap = el("div", "exp-wrap");
    var head = el("div", "section-heading");
    var hl = el("div");
    var eb = el("p", "eyebrow"); eb.appendChild(el("span")); eb.appendChild(document.createTextNode("Trip money")); hl.appendChild(eb);
    hl.appendChild(el("h2", null, "Expenses"));
    head.appendChild(hl);
    head.appendChild(el("p", null, "Log spending in yen; ringgit is estimated from your own rate. Everything is stored on this device and works offline."));
    wrap.appendChild(head);

    var grid = el("div", "exp-grid");
    var left = el("div", "exp-col"), right = el("div", "exp-col");
    left.appendChild(buildForm());
    left.appendChild(buildSettings());
    right.appendChild(buildSummary());
    right.appendChild(buildList());
    right.appendChild(buildTools());
    grid.appendChild(left); grid.appendChild(right);
    wrap.appendChild(grid);
    var live = el("div", "exp-toast", null, { role: "status", "aria-live": "polite" });
    if (undoItem) {
      live.appendChild(el("span", null, "Entry deleted."));
      var u = el("button", "exp-btn exp-btn-link", "Undo", { type: "button" });
      u.addEventListener("click", function () { expenses.push(undoItem); undoItem = null; clearTimeout(undoTimer); persist(); render(); });
      live.appendChild(u);
    }
    wrap.appendChild(live);
    root.appendChild(wrap);
    if (focusId) { var f = document.getElementById(focusId); if (f && f.focus) f.focus(); }
  }

  function buildForm() {
    var editing = editingId && expenses.filter(function (e) { return e.id === editingId; })[0];
    var card = el("form", "exp-card", null, { novalidate: "" });
    card.appendChild(el("h3", null, editing ? "Edit expense" : "Add expense"));
    var amount = el("input", "exp-input exp-amount", null, { id: "exp-amount", type: "text", inputmode: "decimal", placeholder: "0", autocomplete: "off", "aria-label": "Amount in yen" });
    var cat = el("div", "exp-cats", null, { role: "radiogroup", "aria-label": "Category" });
    var cur = editing ? editing.cat : formState.cat;
    CATS.forEach(function (c) {
      var lab = el("label", "exp-chip");
      var r = el("input", null, null, { type: "radio", name: "exp-cat", value: c });
      if (c === cur) r.checked = true;
      r.addEventListener("change", function () { formState.cat = c; });
      lab.appendChild(r); lab.appendChild(el("span", null, c)); cat.appendChild(lab);
    });
    var note = el("input", "exp-input", null, { id: "exp-note", type: "text", maxlength: "120", placeholder: "e.g. ramen at Ichiran" });
    var date = el("input", "exp-input", null, { id: "exp-date", type: "date", min: TRIP_MIN, max: TRIP_MAX });
    var by = el("input", "exp-input", null, { id: "exp-by", type: "text", maxlength: "40", placeholder: "Optional" });
    date.value = editing ? editing.date : formState.date;
    if (editing) { amount.value = String(editing.yen); note.value = editing.note; by.value = editing.by; }
    var amtWrap = el("label", "exp-field exp-amt-field"); amtWrap.appendChild(el("span", null, "Amount (¥)")); amtWrap.appendChild(amount);
    var preview = el("small", "exp-preview", "≈ RM 0.00");
    amount.addEventListener("input", function () {
      var y = parseYen(amount.value); preview.textContent = y ? "≈ " + fmtSen(toSen(y, fx)) : "≈ RM 0.00";
    });
    if (editing) preview.textContent = "≈ " + fmtSen(toSen(editing.yen, fx));
    amtWrap.appendChild(preview);
    card.appendChild(amtWrap);
    var cf = el("div", "exp-field"); cf.appendChild(el("span", null, "Category")); cf.appendChild(cat); card.appendChild(cf);
    card.appendChild(field("Note", note));
    var row = el("div", "exp-row"); row.appendChild(field("Date", date)); row.appendChild(field("Paid by", by)); card.appendChild(row);
    var err = el("p", "exp-error", "", { role: "alert" }); card.appendChild(err);
    var actions = el("div", "exp-actions");
    actions.appendChild(el("button", "exp-btn exp-btn-primary", editing ? "Save changes" : "Add expense", { type: "submit" }));
    if (editing) {
      var cancel = el("button", "exp-btn", "Cancel", { type: "button" });
      cancel.addEventListener("click", function () { editingId = null; render(); });
      actions.appendChild(cancel);
    }
    card.appendChild(actions);
    card.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var yen = parseYen(amount.value);
      if (!yen) { err.textContent = "Enter an amount in yen greater than 0."; amount.focus(); return; }
      var d = /^\d{4}-\d{2}-\d{2}$/.test(date.value) ? clampDate(date.value) : clampDate(todayStr());
      var picked = card.querySelector("input[name=exp-cat]:checked");
      var data = { yen: yen, cat: picked ? picked.value : "Other", note: note.value.trim(), date: d, by: by.value.trim() };
      if (editing) { Object.assign(editing, data); editingId = null; }
      else { data.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6); expenses.push(data); }
      formState.date = d;
      persist(); render();
      var a = document.getElementById("exp-amount"); if (a && !editing) a.focus();
    });
    return card;
  }

  function buildSettings() {
    var card = el("form", "exp-card", null, { novalidate: "" });
    card.appendChild(el("h3", null, "Rate & budget"));
    var rate = el("input", "exp-input", null, { id: "exp-fx", type: "text", inputmode: "decimal", value: String(fx) });
    card.appendChild(field("JPY → MYR rate (1 ¥ = RM)", rate));
    card.appendChild(el("p", "exp-hint", "Rate is set by hand, so it works offline. Check a live rate before you fly and update it here."));
    var tb = el("input", "exp-input", null, { id: "exp-tb", type: "text", inputmode: "decimal", placeholder: "e.g. 15000", value: totalBudSen ? String(totalBudSen / 100) : "" });
    var db = el("input", "exp-input", null, { id: "exp-db", type: "text", inputmode: "decimal", placeholder: "Optional", value: dailyBudSen ? String(dailyBudSen / 100) : "" });
    var row = el("div", "exp-row"); row.appendChild(field("Trip budget (RM)", tb)); row.appendChild(field("Daily budget (RM)", db)); card.appendChild(row);
    var err = el("p", "exp-error", "", { role: "alert" }); card.appendChild(err);
    card.appendChild(el("button", "exp-btn", "Save settings", { type: "submit" }));
    card.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var r = parseRate(rate.value), t = parseMoney(tb.value), dd = parseMoney(db.value);
      if (!r) { err.textContent = "Rate must be a number between 0 and 10, e.g. 0.029."; return; }
      if (t === null || dd === null) { err.textContent = "Budgets must be plain numbers."; return; }
      fx = r; totalBudSen = t; dailyBudSen = dd;
      save(KEYS.fx, fx); save(KEYS.bud, { totalSen: t, dailySen: dd });
      render();
    });
    return card;
  }

  function stat(label, value, sub, cls) {
    var d = el("div", "exp-stat" + (cls ? " " + cls : ""));
    d.appendChild(el("span", "exp-stat-label", label));
    d.appendChild(el("strong", "exp-stat-value", value));
    if (sub) d.appendChild(el("span", "exp-stat-sub", sub));
    return d;
  }
  function bar(pct, over) {
    var b = el("div", "exp-bar" + (over ? " is-over" : ""), null, { role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(Math.min(100, Math.round(pct))) });
    var f = el("i"); f.style.width = Math.max(0, Math.min(100, pct)) + "%"; b.appendChild(f); return b;
  }

  function buildSummary() {
    var card = el("section", "exp-card exp-summary");
    card.appendChild(el("h3", null, "Summary"));
    var total = totalYen(expenses), totalSen = toSen(total, fx);
    var grid = el("div", "exp-stats");
    grid.appendChild(stat("Total spent", fmtYen(total), "≈ " + fmtSen(totalSen)));
    if (totalBudSen) {
      var left = totalBudSen - totalSen;
      grid.appendChild(stat("Budget left", fmtSen(left), "of " + fmtSen(totalBudSen), left < 0 ? "is-over" : ""));
    } else grid.appendChild(stat("Budget left", "Not set", "Add a trip budget"));
    card.appendChild(grid);
    if (totalBudSen) card.appendChild(bar(totalSen / totalBudSen * 100, totalSen > totalBudSen));

    var today = todayStr();
    var tYen = totalYen(expenses.filter(function (e) { return e.date === today; })), tSen = toSen(tYen, fx);
    var line = el("p", "exp-today");
    line.textContent = "Today: " + fmtYen(tYen) + " ≈ " + fmtSen(tSen) + (dailyBudSen ? " of " + fmtSen(dailyBudSen) + (tSen > dailyBudSen ? " (over)" : "") : "");
    card.appendChild(line);
    if (dailyBudSen) card.appendChild(bar(tSen / dailyBudSen * 100, tSen > dailyBudSen));

    var cats = byCategory(expenses), max = Math.max.apply(null, CATS.map(function (c) { return cats[c]; }).concat([1]));
    var ul = el("ul", "exp-cat-list");
    CATS.forEach(function (c) {
      var li = el("li");
      var top = el("div", "exp-cat-top"); top.appendChild(el("span", null, c));
      top.appendChild(el("span", null, fmtYen(cats[c]) + " · " + fmtSen(toSen(cats[c], fx))));
      li.appendChild(top);
      var b = el("div", "exp-bar exp-bar-cat"); var f = el("i"); f.style.width = (cats[c] / max * 100) + "%"; b.appendChild(f);
      li.appendChild(b); ul.appendChild(li);
    });
    card.appendChild(ul);
    return card;
  }

  function buildList() {
    var card = el("section", "exp-card");
    card.appendChild(el("h3", null, "Entries"));
    if (!expenses.length) { card.appendChild(el("p", "exp-empty", "Nothing logged yet. Add your first expense.")); return card; }
    groupByDate(expenses).forEach(function (g) {
      var h = el("div", "exp-day");
      h.appendChild(el("span", null, formatDay(g.date)));
      h.appendChild(el("span", null, fmtYen(g.total) + " · " + fmtSen(toSen(g.total, fx))));
      card.appendChild(h);
      var ul = el("ul", "exp-entries");
      g.items.slice().reverse().forEach(function (e) {
        var li = el("li", "exp-entry");
        var info = el("div", "exp-entry-info");
        info.appendChild(el("strong", null, e.cat + (e.note ? " · " + e.note : "")));
        if (e.by) info.appendChild(el("small", null, "Paid by " + e.by));
        li.appendChild(info);
        var amt = el("div", "exp-entry-amt"); amt.appendChild(el("strong", null, fmtYen(e.yen))); amt.appendChild(el("small", null, "≈ " + fmtSen(toSen(e.yen, fx))));
        li.appendChild(amt);
        var ed = el("button", "exp-btn exp-icon", "Edit", { type: "button", "aria-label": "Edit " + e.cat + " " + fmtYen(e.yen) });
        ed.addEventListener("click", function () { editingId = e.id; render(); root.querySelector("form").scrollIntoView({ behavior: "smooth", block: "center" }); });
        var del = el("button", "exp-btn exp-icon", "Delete", { type: "button", "aria-label": "Delete " + e.cat + " " + fmtYen(e.yen) });
        del.addEventListener("click", function () {
          expenses = expenses.filter(function (x) { return x.id !== e.id; });
          if (editingId === e.id) editingId = null;
          undoItem = e; persist(); clearTimeout(undoTimer);
          undoTimer = setTimeout(function () { undoItem = null; render(); }, 8000);
          render();
        });
        var acts = el("div", "exp-entry-acts"); acts.appendChild(ed); acts.appendChild(del); li.appendChild(acts);
        ul.appendChild(li);
      });
      card.appendChild(ul);
    });
    return card;
  }
  function formatDay(d) {
    var p = d.split("-").map(Number), dt = new Date(p[0], p[1] - 1, p[2]);
    return dt.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) + (d === todayStr() ? " (today)" : "");
  }

  function buildTools() {
    var card = el("div", "exp-card exp-tools");
    var ex = el("button", "exp-btn", "Export CSV", { type: "button" });
    ex.addEventListener("click", function () {
      var blob = new Blob(["﻿" + toCSV(expenses, fx)], { type: "text/csv;charset=utf-8" });
      var url = URL.createObjectURL(blob), a = el("a", null, null, { href: url, download: "japan-expenses.csv" });
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    });
    var clr = el("button", "exp-btn exp-btn-danger", clearArmed ? "Tap again to delete everything" : "Clear all", { type: "button" });
    clr.disabled = !expenses.length;
    clr.addEventListener("click", function () {
      if (!clearArmed) {
        clearArmed = true; clearTimeout(clearTimer);
        clearTimer = setTimeout(function () { clearArmed = false; render(); }, 4000); render(); return;
      }
      clearArmed = false; clearTimeout(clearTimer); expenses = []; undoItem = null; editingId = null; persist(); render();
    });
    card.appendChild(ex); card.appendChild(clr);
    return card;
  }

  render();
})();
