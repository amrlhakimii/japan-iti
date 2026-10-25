(function () {
  var pages = Array.prototype.slice.call(document.querySelectorAll(".page"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var names = pages.map(function (p) { return p.dataset.page; });
  var legacy = { top: "home", today: "home", itinerary: "plan", essentials: "guide", "travel-guide": "guide", expenses: "money" };
  var current = null;

  function showPage(name) {
    if (names.indexOf(name) === -1) name = "home";
    if (name === current) return;
    current = name;
    pages.forEach(function (p) { p.hidden = p.dataset.page !== name; });
    navLinks.forEach(function (a) {
      var on = a.dataset.nav === name;
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.body.dataset.page = name;
    var active = document.getElementById("page-" + name);
    active.classList.remove("page-enter");
    void active.offsetWidth;
    active.classList.add("page-enter");
    var activeLink = document.querySelector('[data-nav="' + name + '"]');
    if (activeLink && activeLink.scrollIntoView) activeLink.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function route() {
    var id = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (!id) { showPage("home"); window.scrollTo(0, 0); return; }
    if (names.indexOf(id) !== -1) { showPage(id); window.scrollTo(0, 0); return; }
    if (legacy[id]) { showPage(legacy[id]); window.scrollTo(0, 0); return; }
    var el = document.getElementById(id);
    var page = el && el.closest(".page");
    if (page) {
      showPage(page.dataset.page);
      el.scrollIntoView();
    } else {
      showPage("home");
    }
  }

  window.showPage = function (name) {
    showPage(name);
    window.scrollTo(0, 0);
  };
  window.addEventListener("hashchange", route);

  // "Expand all days" lives on Home but acts on the Plan page.
  var expand = document.querySelector("[data-expand-all]");
  if (expand) expand.addEventListener("click", function () { location.hash = "plan"; });

  route();
})();
