/* "Show this to staff" cards. No dependencies, no network. */
(function (root) {
  "use strict";

  var ALLERGY_KEY = "japan-family-allergies";
  var HOTEL_KEY = "japan-family-hotels";

  // Default hotel slots. script.js `days` only mentions "the Airbnb" with no address,
  // so entries start empty and the user fills them in.
  var DEFAULT_HOTELS = [
    { label: "Tokyo stay", name: "", address: "" },
    { label: "Kawaguchiko stay", name: "", address: "" },
    { label: "Kyoto stay", name: "", address: "" }
  ];

  var PHRASES = {
    halal: [
      { jp: "私はイスラム教徒です。豚肉とアルコールは食べられません。", ro: "Watashi wa isuramu-kyōto desu. Butaniku to arukōru wa taberaremasen.", en: "I am Muslim. I cannot eat pork or alcohol." },
      { jp: "豚肉、豚のだし、ラード、ゼラチン、みりん、料理酒、お酒は入っていますか？", ro: "Butaniku, buta no dashi, rādo, zerachin, mirin, ryōrishu, osake wa haitte imasu ka?", en: "Does it contain pork, pork stock, lard, gelatin, mirin, cooking sake or alcohol?" },
      { jp: "食べられる料理を教えてください。", ro: "Taberareru ryōri o oshiete kudasai.", en: "Please tell me which dishes are safe to eat." }
    ],
    allergyLead: { jp: "アレルギーがあります。", ro: "Arerugī ga arimasu.", en: "I have an allergy." },
    allergyAsk: { jp: "これには入っていますか？", ro: "Kore ni wa haitte imasu ka?", en: "Does this contain it?" },
    baby: [
      { jp: "赤ちゃんのミルク用に、お湯をいただけますか？", ro: "Akachan no miruku-yō ni, oyu o itadakemasu ka?", en: "Could I have hot water for the baby's milk?" },
      { jp: "おむつ替えができる場所はありますか？", ro: "Omutsu-gae ga dekiru basho wa arimasu ka?", en: "Is there a place to change a nappy?" },
      { jp: "ベビーカーで入れますか？ エレベーターはありますか？", ro: "Bebīkā de hairemasu ka? Erebētā wa arimasu ka?", en: "Can I enter with a stroller? Is there an elevator?" },
      { jp: "電子レンジを使ってもいいですか？", ro: "Denshi renji o tsukatte mo ii desu ka?", en: "May I use the microwave?" }
    ],
    prayer: [
      { jp: "静かな部屋はありますか？ お祈りをしたいです。", ro: "Shizuka na heya wa arimasu ka? Oinori o shitai desu.", en: "Is there a quiet room where I can pray?" }
    ],
    taxi: { jp: "この住所までお願いします。", ro: "Kono jūsho made onegai shimasu.", en: "Please take us to this address." },
    emergency: [
      { jp: "助けてください。", ro: "Tasukete kudasai.", en: "Please help me." },
      { jp: "救急車を呼んでください。", ro: "Kyūkyūsha o yonde kudasai.", en: "Please call an ambulance." },
      { jp: "赤ちゃんの具合が悪いです。", ro: "Akachan no guai ga warui desu.", en: "The baby is unwell." },
      { jp: "英語を話せる人はいますか？", ro: "Eigo o hanaseru hito wa imasu ka?", en: "Is there anyone who speaks English?" }
    ]
  };

  /* ---------- pure helpers (tested in node) ---------- */

  function normalizeHotels(raw) {
    var out = DEFAULT_HOTELS.map(function (h) { return { label: h.label, name: "", address: "" }; });
    if (!Array.isArray(raw)) return out;
    raw.slice(0, 20).forEach(function (item, i) {
      if (!item || typeof item !== "object") return;
      if (!out[i]) out[i] = { label: "Stay " + (i + 1), name: "", address: "" };
      if (typeof item.label === "string" && item.label.trim()) out[i].label = item.label.slice(0, 60);
      if (typeof item.name === "string") out[i].name = item.name.slice(0, 200);
      if (typeof item.address === "string") out[i].address = item.address.slice(0, 400);
    });
    return out;
  }

  function hotelDisplay(h) {
    var parts = [];
    if (h.name && h.name.trim()) parts.push(h.name.trim());
    if (h.address && h.address.trim()) parts.push(h.address.trim());
    return parts;
  }

  function allergyDisplay(text) {
    return typeof text === "string" ? text.trim() : "";
  }

  var api = { normalizeHotels: normalizeHotels, hotelDisplay: hotelDisplay, allergyDisplay: allergyDisplay, PHRASES: PHRASES };
  if (typeof module !== "undefined" && module.exports) module.exports = api;

  var doc = root.document;
  if (!doc) return;
  var mount = doc.querySelector("[data-cards-root]");
  if (!mount) return;

  /* ---------- storage ---------- */

  function load(key) {
    try { return root.localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, val) {
    try { root.localStorage.setItem(key, val); } catch (e) { /* private mode: ignore */ }
  }

  var state = {
    allergy: load(ALLERGY_KEY) || "",
    hotels: (function () {
      var raw = null;
      try { raw = JSON.parse(load(HOTEL_KEY)); } catch (e) { raw = null; }
      return normalizeHotels(raw);
    })(),
    selectedHotel: 0
  };

  /* ---------- DOM helpers ---------- */

  function el(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function phraseBlock(p, big) {
    var b = el("div", "sc-phrase");
    b.appendChild(el("p", "sc-jp", p.jp)).setAttribute("lang", "ja");
    if (p.ro) b.appendChild(el("p", "sc-ro", p.ro));
    b.appendChild(el("p", "sc-en", p.en));
    return b;
  }

  /* ---------- card definitions: each builds body nodes for given mode ---------- */

  var CARDS = [
    {
      id: "halal", icon: "🌙", title: "Halal food", sub: "No pork, no alcohol",
      body: function () { return PHRASES.halal.map(phraseBlock); }
    },
    {
      id: "allergy", icon: "⚠️", title: "Allergies", sub: "Fill in once, show anytime",
      editor: function () {
        var wrap = el("div", "sc-edit");
        var label = el("label", null, "My allergies (write in Japanese or English)");
        var input = el("input");
        input.type = "text"; input.maxLength = 300; input.value = state.allergy;
        input.placeholder = "e.g. 卵 (egg), 乳 (milk), 小麦 (wheat), ナッツ (nuts)";
        input.id = "sc-allergy-input";
        label.setAttribute("for", input.id);
        input.addEventListener("input", function () { state.allergy = input.value; save(ALLERGY_KEY, input.value); refreshPreviews(); });
        wrap.appendChild(label); wrap.appendChild(input);
        return wrap;
      },
      body: function () {
        var a = allergyDisplay(state.allergy);
        var out = [];
        if (a) {
          var box = el("div", "sc-phrase");
          box.appendChild(el("p", "sc-jp sc-user", a)).setAttribute("lang", "ja");
          box.appendChild(el("p", "sc-en", "My allergy: " + a));
          out.push(box);
        } else {
          out.push(el("p", "sc-empty", "Add your allergies below, then show this card."));
        }
        out.push(phraseBlock(PHRASES.allergyLead));
        out.push(phraseBlock(PHRASES.allergyAsk));
        return out;
      }
    },
    {
      id: "baby", icon: "🍼", title: "Baby needs", sub: "Hot water, nappy, stroller, microwave",
      body: function () { return PHRASES.baby.map(phraseBlock); }
    },
    {
      id: "prayer", icon: "🕌", title: "Prayer space", sub: "Ask for a quiet room",
      body: function () { return PHRASES.prayer.map(phraseBlock); }
    },
    {
      id: "taxi", icon: "🚕", title: "Taxi helper", sub: "Show the address to the driver",
      editor: function () {
        var wrap = el("div", "sc-edit");
        var sel = el("div", "sc-seg");
        sel.setAttribute("role", "group"); sel.setAttribute("aria-label", "Choose stay");
        var fields = el("div", "sc-fields");
        function renderFields() {
          fields.textContent = "";
          var h = state.hotels[state.selectedHotel];
          [["name", "Hotel name (Japanese)", "例：ホテル〇〇"], ["address", "Address (Japanese)", "例：東京都新宿区…"]].forEach(function (f) {
            var id = "sc-hotel-" + f[0];
            var l = el("label", null, h.label + " — " + f[1]);
            l.setAttribute("for", id);
            var inp = el("input"); inp.type = "text"; inp.id = id; inp.value = h[f[0]]; inp.placeholder = f[2];
            inp.maxLength = f[0] === "name" ? 200 : 400;
            inp.setAttribute("lang", "ja");
            inp.addEventListener("input", function () {
              h[f[0]] = inp.value; save(HOTEL_KEY, JSON.stringify(state.hotels)); refreshPreviews();
            });
            fields.appendChild(l); fields.appendChild(inp);
          });
          fields.appendChild(el("p", "sc-hint", "Copy the Japanese name/address from your booking confirmation."));
        }
        function renderSeg() {
          sel.textContent = "";
          state.hotels.forEach(function (h, i) {
            var b = el("button", "sc-chip", h.label);
            b.type = "button"; b.setAttribute("aria-pressed", String(i === state.selectedHotel));
            b.addEventListener("click", function (e) {
              e.stopPropagation(); state.selectedHotel = i; renderSeg(); renderFields(); refreshPreviews();
            });
            sel.appendChild(b);
          });
        }
        renderSeg(); renderFields();
        wrap.appendChild(sel); wrap.appendChild(fields);
        return wrap;
      },
      body: function () {
        var out = [phraseBlock(PHRASES.taxi)];
        var h = state.hotels[state.selectedHotel];
        var lines = hotelDisplay(h);
        if (lines.length) {
          var box = el("div", "sc-phrase sc-address");
          lines.forEach(function (t) { box.appendChild(el("p", "sc-jp sc-user", t)).setAttribute("lang", "ja"); });
          out.push(box);
        } else {
          out.push(el("p", "sc-empty", "Add the hotel name and address below (" + h.label + ")."));
        }
        return out;
      }
    },
    {
      id: "emergency", icon: "🚨", title: "Emergency", sub: "Police 110 · Ambulance/Fire 119",
      body: function () {
        var out = [];
        var nums = el("ul", "sc-nums");
        [["警察 Police", "110", "tel:110"], ["救急・消防 Ambulance / Fire", "119", "tel:119"], ["Japan Helpline (English, 24h)", "0570-000-911", "tel:0570000911"]].forEach(function (r) {
          var li = el("li");
          li.appendChild(el("span", "sc-num-label", r[0]));
          var a = el("a", "sc-num", r[1]); a.href = r[2];
          li.appendChild(a); nums.appendChild(li);
        });
        out.push(nums);
        PHRASES.emergency.forEach(function (p) { out.push(phraseBlock(p)); });
        return out;
      }
    }
  ];

  /* ---------- section ---------- */

  var previews = [];
  function fill(container, nodes) {
    container.textContent = "";
    nodes.forEach(function (n) { container.appendChild(n); });
  }
  function refreshPreviews() { previews.forEach(function (p) { fill(p.box, p.card.body()); }); }

  var head = el("div", "section-heading");
  var hl = el("div");
  var eb = el("p", "eyebrow"); eb.appendChild(el("span")); eb.appendChild(doc.createTextNode(" Show this to staff"));
  hl.appendChild(eb);
  var h2 = el("h2"); h2.appendChild(doc.createTextNode("Say it in ")); h2.appendChild(doc.createElement("br")); h2.appendChild(doc.createTextNode("Japanese."));
  hl.appendChild(h2);
  head.appendChild(hl);
  head.appendChild(el("p", null, "Tap a card for full-screen text you can hold up to restaurant, hotel or station staff. Works offline."));
  mount.appendChild(head);

  var grid = el("div", "sc-grid");
  mount.appendChild(grid);

  var dlg = doc.createElement("dialog");
  dlg.className = "sc-dialog";
  dlg.setAttribute("aria-labelledby", "sc-dlg-title");
  var dlgHead = el("div", "sc-dlg-head");
  var dlgTitle = el("h3", "sc-dlg-title"); dlgTitle.id = "sc-dlg-title";
  var closeBtn = el("button", "sc-close", "Close ✕"); closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Close full-screen card");
  dlgHead.appendChild(dlgTitle); dlgHead.appendChild(closeBtn);
  var dlgBody = el("div", "sc-dlg-body");
  dlg.appendChild(dlgHead); dlg.appendChild(dlgBody);
  mount.appendChild(dlg);

  var opener = null;
  var openCard = null;
  function openFull(card, trigger) {
    openCard = card; opener = trigger;
    dlgTitle.textContent = card.title;
    fill(dlgBody, card.body());
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    doc.documentElement.classList.add("sc-lock");
    closeBtn.focus();
  }
  function closeFull() {
    if (typeof dlg.close === "function" && dlg.open) dlg.close(); else dlg.removeAttribute("open");
  }
  closeBtn.addEventListener("click", closeFull);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) closeFull(); });
  dlg.addEventListener("close", function () {
    doc.documentElement.classList.remove("sc-lock");
    openCard = null;
    if (opener && opener.focus) opener.focus();
  });
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && dlg.hasAttribute("open") && typeof dlg.showModal !== "function") closeFull();
  });

  CARDS.forEach(function (card) {
    var art = el("article", "sc-card");
    art.setAttribute("data-card", card.id);
    var top = el("div", "sc-top");
    top.appendChild(el("span", "sc-icon", card.icon)).setAttribute("aria-hidden", "true");
    var t = el("div");
    t.appendChild(el("h3", null, card.title));
    t.appendChild(el("p", "sc-sub", card.sub));
    top.appendChild(t);
    var show = el("button", "sc-show", "Show full screen");
    show.type = "button";
    show.addEventListener("click", function (e) { e.stopPropagation(); openFull(card, show); });
    top.appendChild(show);
    art.appendChild(top);

    var box = el("div", "sc-preview");
    fill(box, card.body());
    art.appendChild(box);
    previews.push({ box: box, card: card });

    if (card.editor) {
      var ed = card.editor();
      ed.addEventListener("click", function (e) { e.stopPropagation(); });
      art.appendChild(ed);
    }
    // Tap anywhere else on the card to open full screen.
    art.addEventListener("click", function (e) {
      if (e.target.closest("a, input, label, button, textarea")) return;
      openFull(card, show);
    });
    grid.appendChild(art);
  });

  mount.appendChild(el("p", "sc-note", "These are standard, polite phrases, but it is worth having a Japanese speaker check them before you travel."));
})(typeof window !== "undefined" ? window : globalThis);
