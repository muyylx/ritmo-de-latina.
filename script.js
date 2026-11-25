const dict = {
  en: {
    nav_about: "About",
    nav_schedule: "Schedule",
    nav_prices: "Prices",
    nav_visit: "Location",
    nav_contacts: "Contacts",

    about_label: "About",
    about_h2_a: "Latin",
    about_h2_b: "in Kharkiv",
    about_p1: "Ritmo de Latina is a Kharkiv project on the Latin American scene. Bachata, salsa and New York salsa — one class per hour.",
    about_p2: "Classes run every Saturday in a hall in Oleksiivka. Come with no experience and no partner — we pair people up on the spot.",
    f_city_k: "City",
    f_city_v: "Kharkiv",
    f_district_k: "District",
    f_district_v: "Oleksiivka",
    f_metro_k: "Metro",
    f_metro_v: "Oleksiivska",
    f_styles_k: "Styles",
    f_styles_v: "Bachata · Salsa · New York salsa",

    hero_tag: "Oleksiivka, Myroslava Mysly St.",
    hero_lead: "Bachata, salsa and New York salsa. Every Saturday, three classes back to back — from 16:00.",
    hero_micro: "Book by phone or in Instagram Direct. No previous experience needed for your first class.",
    stat_day: "When",
    stat_day_v: "Saturdays",
    stat_price: "Single class",
    stat_style: "Styles",
    cur: "UAH",
    cta_schedule: "Schedule and prices",
    cta_call: "Call us",
    hero_scroll: "Scroll",

    schedule_label: "Schedule",
    schedule_h2_a: "Every Saturday",
    schedule_h2_b: "three styles",
    slot_bachata: "Bachata",
    slot_salsa: "Salsa",
    slot_note_bachata: "Latin",
    slot_note_salsa: "Cubana",
    slot_ny: "New York salsa",
    slot_note_ny: "On2",
    schedule_foot: "One class lasts one hour. Come 10–15 minutes early so you have time to change.",

    prices_label: "Prices",
    prices_h2_a: "Passes",
    prices_h2_b: "and drop-ins",
    price_badge: "Best value",
    price_one_name: "Single class",
    price_one_desc: "One style, one hour.",
    price_four_name: "4 classes",
    price_four_desc: "Four classes of one style.",
    price_four_unit: "250 UAH per class",
    price_eight_name: "8 classes",
    price_eight_desc: "Eight classes across both styles.",
    price_eight_unit: "200 UAH per class",
    note_valid: "All passes are valid for 30 calendar days.",
    note_person: "Prices are per person.",

    contacts_label: "Contacts",
    contacts_h2_a: "Book",
    contacts_h2_b: "a class",
    c_phone_k: "Phone 1",
    c_phone_k2: "Phone 2",
    c_call_h: "Call",

    visit_label: "Location",
    visit_h2_a: "How to reach",
    visit_h2_b: "the hall",
    addr_full: "Myroslava Mysly Street, 48V",
    visit_micro: "Directions and the map open in Google Maps in a new tab.",
    cta_route_full: "Get directions",
    cta_map_open: "Open on the map",
    how_metro_h: "By metro",
    how_metro_p: "Get off at Oleksiivska and walk to building 48V.",
    how_car_h: "By car",
    how_car_p: "Your navigator will get you there with these coordinates <span class=\"mono\">50.0471622, 36.2036876</span>.",
    how_ask_h: "Ask first",
    how_ask_p: "Need the entrance or a specific hall? Call us in advance.",

    c_ig_k: "Instagram",
    c_ig_h: "Message in Direct",
    c_ig_micro: "Opens Instagram in a new tab.",
    c_geo_k: "Address",
    c_geo_v: "Myroslava Mysly, 48V",
    c_geo_h: "See it on the map",
    c_geo_micro: "Opens Google Maps in a new tab.",

    f_addr_label: "Address",
    f_contact_label: "Contact",
    f_schedule_label: "Classes",
    f_schedule_v: "Saturdays, 16:00–19:00",
    f_legal_label: "Legal",
    f_privacy: "Privacy policy",
    f_cookie: "Cookie settings",
    f_city: "Kharkiv, Ukraine",
    f_top: "Back to top ↑",
    disclaimer: "Information on this site is for reference only and does not constitute a public offer.",

    cookie_text: "We use strictly necessary cookies so the site works, and — with your consent — analytics cookies. We do not collect personal data through this site.",
    cookie_more: "Learn more",
    cookie_decline: "Essential only",
    cookie_accept: "Accept"
  }
};

const ukSnapshot = {};
const html = document.documentElement;
const langBtn = document.getElementById("lang");
const langLabel = document.getElementById("lang-label");
const themeBtn = document.getElementById("theme");
const themeLabel = document.getElementById("theme-label");
const nav = document.querySelector(".nav");

let lang = "uk";

function collect(capture) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (capture) ukSnapshot[k] = el.innerHTML;
    else if (ukSnapshot[k] !== undefined) el.innerHTML = ukSnapshot[k];
  });
}

function setLang(next) {
  if (next !== lang) {
    if (lang === "uk") collect(true);
    lang = next;
    html.lang = next;
    if (next === "en") {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const v = dict.en[el.dataset.i18n];
        if (v) el.innerHTML = v;
      });
    } else {
      collect(false);
    }
    try { localStorage.setItem("ritmo-lang", next); } catch (e) {}
  }
  if (langLabel) langLabel.textContent = lang === "uk" ? "UA" : "EN";
  if (themeLabel) themeLabel.textContent = lang === "uk" ? "Тема" : "Theme";
  if (langBtn) langBtn.setAttribute("aria-label", lang === "uk" ? "Перемкнути на англійську" : "Switch to Ukrainian");
}

function setTheme(next) {
  html.dataset.theme = next;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "dark" ? "#101614" : "#fbf9f5");
  if (themeLabel) themeLabel.textContent = lang === "uk" ? "Тема" : "Theme";
  if (themeBtn) {
    themeBtn.setAttribute("aria-pressed", String(next === "dark"));
    themeBtn.title = next === "dark"
      ? (lang === "uk" ? "Увімкнути світлу тему" : "Switch to light theme")
      : (lang === "uk" ? "Увімкнути темну тему" : "Switch to dark theme");
  }
  try { localStorage.setItem("ritmo-theme", next); } catch (e) {}
}

if (langBtn) langBtn.addEventListener("click", () => setLang(lang === "uk" ? "en" : "uk"));
if (themeBtn) themeBtn.addEventListener("click", () => setTheme(html.dataset.theme === "dark" ? "light" : "dark"));

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    nav.classList.toggle("is-stuck", window.scrollY > 8);
    ticking = false;
  });
}, { passive: true });

(function init() {
  let savedLang = null;
  let savedTheme = null;
  try {
    savedLang = localStorage.getItem("ritmo-lang");
    savedTheme = localStorage.getItem("ritmo-theme");
  } catch (e) {}

  setTheme(savedTheme === "dark" ? "dark" : "light");
  setLang(savedLang === "en" ? "en" : "uk");
  nav.classList.toggle("is-stuck", window.scrollY > 8);
})();

/* external links: open reliably even from a local file */
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="http"]');
  if (!a) return;
  const win = window.open(a.href, "_blank", "noopener,noreferrer");
  if (win) e.preventDefault();
});

/* ---------- cookie consent ---------- */

const COOKIE_KEY = "ritmo-cookie";
const cookieBar = document.getElementById("cookie");
const cookieAccept = document.getElementById("cookie-accept");
const cookieDecline = document.getElementById("cookie-decline");
const cookieSettings = document.getElementById("cookie-settings");

function readConsent() {
  try { return localStorage.getItem(COOKIE_KEY); } catch (e) { return null; }
}

function writeConsent(value) {
  try { localStorage.setItem(COOKIE_KEY, value); } catch (e) {}
  applyConsent(value);
}

/* Single place where analytics may start. Nothing is loaded until consent === "all". */
function applyConsent(value) {
  if (value === "all") loadAnalytics();
}

function loadAnalytics() {
  /* Intentionally empty: no analytics or ad pixels are installed yet.
     When Meta Pixel / Google Analytics are added, initialise them only here. */
}

function showCookie() {
  if (!cookieBar) return;
  cookieBar.hidden = false;
  document.body.classList.add("has-cookie");
}

function hideCookie() {
  if (!cookieBar) return;
  cookieBar.hidden = true;
  document.body.classList.remove("has-cookie");
}

if (cookieBar) {
  const consent = readConsent();
  if (!consent) showCookie();
  else applyConsent(consent);

  cookieAccept?.addEventListener("click", () => { writeConsent("all"); hideCookie(); });
  cookieDecline?.addEventListener("click", () => { writeConsent("essential"); hideCookie(); });
  cookieSettings?.addEventListener("click", () => {
    try { localStorage.removeItem(COOKIE_KEY); } catch (e) {}
    showCookie();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !cookieBar.hidden) hideCookie();
  });
}

/* copyright year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ---------- phones: assembled at runtime (light scraper protection) ---------- */
/* A whole number is never present in the markup: digits arrive in data-* chunks,
   the tel: href and the visible label are built here. <noscript> covers no-JS. */
(function buildPhones() {
  const pick = (el) => ["cc", "n1", "n2", "n3", "n4"]
    .map((k) => el.dataset[k] || "")
    .join("");

  const format = (d) => {
    if (d.length !== 12) return "+" + d;
    return `+${d.slice(0, 2)} (0${d.slice(3, 5)}) ${d.slice(5, 8)}-${d.slice(8, 10)}-${d.slice(10)}`;
  };

  document.querySelectorAll("[data-phone]").forEach((el) => {
    const digits = pick(el);
    if (digits.length < 10) return;
    el.setAttribute("href", "tel:+" + digits);
    const label = el.querySelector("[data-phone-label]");
    if (label) label.textContent = format(digits);
  });
})();

/* ---------- smooth anchor scrolling ---------- */

(function smoothAnchors() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const headerH = () => (document.querySelector(".nav")?.offsetHeight ?? 64) + 16;

  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute("href");
    if (!hash || hash === "#") return;

    const target = hash === "#top"
      ? document.getElementById("top")
      : document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    const top = hash === "#top"
      ? 0
      : target.getBoundingClientRect().top + window.scrollY - headerH();

    // Focus before scrolling so iOS Safari cannot interrupt the animation.
    target.setAttribute("tabindex", "-1");
    try { target.focus({ preventScroll: true }); } catch (err) {}
    try { history.replaceState(null, "", hash); } catch (err) {}
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
  });
})();

/* ---------- active nav item ---------- */

(function activeNav() {
  const links = [...document.querySelectorAll(".nav__links a[data-nav]")];
  if (!links.length || !("IntersectionObserver" in window)) return;

  const map = new Map();
  links.forEach((a) => {
    const sec = document.querySelector(a.getAttribute("href"));
    if (sec) map.set(sec, a);
  });

  const setActive = (link) => {
    links.forEach((a) => {
      const on = a === link;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length) setActive(map.get(visible[0].target));
  }, { rootMargin: "-45% 0px -45% 0px", threshold: [0, .25, .5, 1] });

  map.forEach((_, sec) => io.observe(sec));
})();
