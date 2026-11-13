/* ==========================================================================
   MALTO — site behaviour
   Shared chrome (header, footer, loader) + page renderers driven by data.js
   ========================================================================== */
(function () {
  "use strict";

  var D = window.MALTO;
  var doc = document;
  var root = doc.documentElement;
  var page = doc.body.getAttribute("data-page") || "";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.remove("no-js");

  /* ------------------------------------------------------------------
     Logo (vector paths extracted from the official Malto .ai file)
     ------------------------------------------------------------------ */
  var MARK = {
    s1: "M20.85 3.38C20.83 3.44 20.8 3.5 20.77 3.56L20.77 3.56C20.48 4.5 20.12 5.48 19.59 6.42L19.59 6.42C19.21 7.09 18.82 7.79 18.43 8.39L18.43 8.39C17.22 10.34 15.51 12.41 13.86 14.41L13.86 14.41C13.37 15 12.9 15.58 12.43 16.16L12.43 16.16C12 16.67 11.58 17.19 11.16 17.71L11.16 17.71C9.92 19.25 8.64 20.84 7.1 22.17L7.1 22.17C6.59 22.65 6.03 23.1 5.39 23.61L5.39 23.61C4.5 24.31 3.53 24.84 2.74 25.23L2.74 25.23C2.71 25.25 2.68 25.27 2.65 25.29L2.65 25.29C1.01 26.12 0 27.78 0 29.61L0 29.61C0 32.3 2.18 34.48 4.87 34.48L4.87 34.48C7.19 34.48 9.2 32.82 9.64 30.56L9.64 30.56C9.65 30.49 9.67 30.42 9.68 30.36L9.68 30.36C9.88 29.1 10.18 28.03 10.62 27.09L10.62 27.09C11.18 25.92 11.89 24.57 12.87 23.45L12.87 23.45C14.39 21.42 21.8 12.61 24 11.03L24 11.03C25.01 10.31 26.14 9.83 27.13 9.43L27.13 9.43C27.17 9.42 27.21 9.4 27.25 9.38L27.25 9.38C29.12 8.65 30.34 6.88 30.34 4.87L30.34 4.87C30.34 2.18 28.15 0 25.47 0L25.47 0C23.34 0 21.48 1.36 20.85 3.38Z",
    s2: "M41.12 3.38C41.1 3.44 41.08 3.5 41.05 3.56L41.05 3.56C40.75 4.5 40.39 5.48 39.86 6.42L39.86 6.42C39.49 7.09 39.1 7.79 38.7 8.39L38.7 8.39C37.49 10.34 35.78 12.41 34.13 14.41L34.13 14.41C33.65 15 33.17 15.58 32.71 16.16L32.71 16.16C32.27 16.67 31.86 17.19 31.44 17.71L31.44 17.71C30.2 19.25 28.92 20.84 27.38 22.17L27.38 22.17C26.87 22.65 26.3 23.1 25.67 23.61L25.67 23.61C24.77 24.31 23.8 24.84 23.02 25.23L23.02 25.23C22.99 25.25 22.95 25.27 22.92 25.29L22.92 25.29C21.29 26.12 20.27 27.78 20.27 29.61L20.27 29.61C20.27 32.3 22.45 34.48 25.14 34.48L25.14 34.48C27.47 34.48 29.48 32.82 29.91 30.56L29.91 30.56C29.93 30.49 29.94 30.42 29.96 30.36L29.96 30.36C30.15 29.1 30.46 28.03 30.9 27.09L30.9 27.09C31.46 25.92 32.17 24.57 33.14 23.45L33.14 23.45C34.67 21.42 42.08 12.61 44.28 11.03L44.28 11.03C45.29 10.31 46.42 9.83 47.41 9.43L47.41 9.43C47.45 9.42 47.49 9.4 47.53 9.38L47.53 9.38C49.4 8.65 50.61 6.88 50.61 4.87L50.61 4.87C50.61 2.18 48.43 0 45.74 0L45.74 0C43.62 0 41.76 1.36 41.12 3.38Z",
    dot: "M45.75 34.48C43.06 34.48 40.88 32.29 40.88 29.61C40.88 26.93 43.06 24.75 45.75 24.75C48.43 24.75 50.61 26.93 50.61 29.61C50.61 32.29 48.43 34.48 45.75 34.48Z"
  };
  var WORD = [
    "M48.1 2.31L48.1 32.55C48.1 33.66 47.19 34.62 46.09 34.62C44.93 34.62 44.02 33.66 44.02 32.55L44.02 7.45L21.89 33.9C21.51 34.33 20.93 34.62 20.4 34.62C19.35 34.62 18.48 33.75 18.48 32.7C18.48 32.27 18.58 31.88 18.96 31.45L23.55 25.77L25.54 7.45L3.41 33.9C3.03 34.33 2.45 34.62 1.92 34.62C0.87 34.62 0 33.75 0 32.7C0 32.27 0.1 31.88 0.48 31.45L25.92 1.06C26.45 0.49 26.93 0.25 27.6 0.25C28.71 0.25 29.62 1.16 29.62 2.31L27.86 20.63L44.41 1.06C44.48 0.99 44.54 0.92 44.61 0.86C44.74 0.73 44.87 0.63 45 0.55C45.14 0.47 45.28 0.4 45.42 0.36C45.49 0.33 45.56 0.31 45.63 0.3C45.66 0.29 45.7 0.28 45.73 0.28C45.73 0.28 45.74 0.27 45.75 0.28C45.8 0.27 45.86 0.26 45.91 0.26C45.97 0.25 46.03 0.25 46.09 0.25C47.19 0.25 48.1 1.16 48.1 2.31Z",
    "M77.76 1.06C78.29 0.49 78.87 0.25 79.44 0.25C80.55 0.25 81.46 1.16 81.46 2.31L81.46 32.55C81.46 33.66 80.55 34.62 79.44 34.62C78.29 34.62 77.38 33.66 77.38 32.55L77.38 25.88L68.74 25.88C67.68 25.88 66.87 25.06 66.87 24.01C66.87 22.95 67.68 22.09 68.74 22.09L77.38 22.09L77.38 7.45L55.25 33.9C54.91 34.28 54.29 34.62 53.76 34.62C52.7 34.62 51.84 33.75 51.84 32.7C51.84 32.27 51.94 31.88 52.32 31.45Z",
    "M87.99 2.31C87.99 1.16 88.9 0.25 90 0.25C91.15 0.25 92.07 1.16 92.07 2.31L92.07 30.44L103.63 30.44C104.69 30.44 105.51 31.26 105.51 32.31C105.51 33.37 104.69 34.23 103.63 34.23L90 34.23C88.9 34.23 87.99 33.32 87.99 32.17Z",
    "M109.87 4.42L102.39 4.42C101.33 4.42 100.47 3.56 100.47 2.5C100.47 1.45 101.33 0.63 102.39 0.63L121.44 0.63C122.5 0.63 123.32 1.45 123.32 2.5C123.32 3.56 122.5 4.42 121.44 4.42L113.95 4.42L113.95 32.55C113.95 33.66 113.04 34.62 111.89 34.62C110.79 34.62 109.87 33.66 109.87 32.55Z",
    "M140.4 30.97C133.2 30.97 127.54 25.06 127.54 17.62C127.54 10.13 133.2 4.23 140.4 4.23C147.6 4.23 153.32 10.13 153.32 17.62C153.32 25.06 147.6 30.97 140.4 30.97M140.4 0.34C130.85 0.34 123.31 7.97 123.31 17.62C123.31 27.27 130.85 34.9 140.4 34.9C149.96 34.9 157.49 27.27 157.49 17.62C157.49 7.97 149.96 0.34 140.4 0.34Z"
  ];

  function markSVG(cls) {
    return '<svg class="' + (cls || "logo-mark") + '" viewBox="0 0 50.61 34.48" aria-hidden="true" focusable="false">' +
      '<path class="s1" d="' + MARK.s1 + '"/><path class="s2" d="' + MARK.s2 + '"/><path class="dot" d="' + MARK.dot + '"/></svg>';
  }
  function wordSVG(cls) {
    return '<svg class="' + (cls || "logo-word") + '" viewBox="0 0 157.49 34.9" aria-hidden="true" focusable="false">' +
      WORD.map(function (d) { return '<path fill-rule="evenodd" d="' + d + '"/>'; }).join("") + "</svg>";
  }
  function fullLogo() {
    return '<svg viewBox="0 0 220.25 34.9" role="img" aria-label="MALTO" focusable="false">' +
      '<g class="logo-mark"><path d="' + MARK.s1 + '"/><path d="' + MARK.s2 + '"/><path d="' + MARK.dot + '"/></g>' +
      '<g class="logo-word" transform="translate(62.76 0)">' + WORD.map(function (d) { return '<path fill-rule="evenodd" d="' + d + '"/>'; }).join("") + "</g></svg>";
  }

  /* ------------------------------------------------------------------
     Icons (Lucide-style, 1.75 stroke)
     ------------------------------------------------------------------ */
  var I = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUR: '<path d="M7 17 17 7M8 7h9v9"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    paper: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/>',
    link: '<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    brain: '<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 1 5 3 3 0 0 0 4 4 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"/><path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-1 5 3 3 0 0 1-4 4 3 3 0 0 1-3-3"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    grad: '<path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
    tools: '<path d="M14 7a4 4 0 0 0 5 5l2 2-7 7-2-2a4 4 0 0 0-5-5L3 10l7-7Z"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    form: '<rect x="5" y="3.5" width="14" height="17.5" rx="2"/><path d="M9 2.5h6v3H9zM8.5 11h7M8.5 15h4.5"/>',
    listcheck: '<path d="M11 6h9M11 12h9M11 18h9"/><path d="m3.5 6 1.5 1.5L7.5 5M3.5 12l1.5 1.5L7.5 11M3.5 18l1.5 1.5L7.5 17"/>',
    chat: '<path d="M4 5h16v11H9.5L5 19.5V16H4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/><path d="M8.5 9.5h5M8.5 12.5h3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9M12 3C9.5 5.6 8.2 8.6 8.2 12s1.3 6.4 3.8 9"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx=".5"/><path d="M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3"/>',
    ram: '<rect x="2.5" y="6.5" width="19" height="9.5" rx="1"/><path d="M6 9.5v3.5M9.5 9.5v3.5M13 9.5v3.5M16.5 9.5v3.5"/><path d="M5 16v2.5M8.5 16v2.5M12 16v2.5M15.5 16v2.5M19 16v2.5"/>',
    gpu: '<rect x="2.5" y="6" width="17" height="11" rx="1.5"/><circle cx="8" cy="11.5" r="2.8"/><circle cx="14.5" cy="11.5" r="2.8"/><path d="M19.5 9h2v5h-2M5 17v2.5h3V17"/>',
    server: '<rect x="3" y="3.5" width="18" height="7" rx="1.5"/><rect x="3" y="13.5" width="18" height="7" rx="1.5"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>',
    cloud: '<path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 10a4.25 4.25 0 0 1-.25 8.5z"/>',
    aitext: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="M14 3v5h5v3"/><path d="M8 12h5M8 16h3"/><path d="m18 14 .9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z"/>',
    motion: '<path d="M2 6.5 13.5 4l1.5 6L3.5 12.5z"/><path d="m8 11.3.9 3.7H5.5"/><path d="M5.5 13v4"/><path d="M18 6.5a5 5 0 0 1 0 5"/><path d="M20.5 4.5a8.5 8.5 0 0 1 0 9"/><circle cx="6.5" cy="8.2" r=".6" fill="currentColor"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + I[name] + "</svg>";
  }

  /* ------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------ */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function byId(id) { return D.challenges.filter(function (c) { return c.id === id; })[0]; }
  function initials(name) {
    var p = name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
    return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fmtDate(s) {
    if (!s) return "";
    var p = String(s).split("-");
    if (p.length === 1) return p[0];
    if (p.length === 2) return MONTHS[+p[1] - 1] + " " + p[0];
    return (+p[2]) + " " + MONTHS[+p[1] - 1] + " " + p[0];
  }
  function ext(url) { return url ? ' href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"' : ""; }

  /* ------------------------------------------------------------------
     Navigation model
     ------------------------------------------------------------------ */
  var NAV = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "Team", key: "team", children: [
      { label: "Challengers", href: "members.html", key: "members", desc: "Team leader, advisor & challengers" },
      { label: "Trainees", href: "trainees.html", key: "trainees", desc: "Preparing for future challenges" },
      { label: "Alumni", href: "alumni.html", key: "alumni", desc: "Where our former members are now" },
      { label: "Social Media & Communication", href: "communication.html", key: "communication", desc: "The people behind our channels" }
    ]},
    { label: "Challenges", href: "challenges.html", key: "challenges" },
    { label: "Events", key: "events", children: [
      { label: "MALTALKS", href: "maltalks.html", key: "maltalks", desc: "Guest talks from research & industry" },
      { label: "Workshops", href: "workshops.html", key: "workshops", desc: "Hands-on Machine Learning sessions" },
      { label: "Conferences", href: "conferences.html", key: "conferences", desc: "Where we presented our research" },
      { label: "Hackathons", href: "hackathons.html", key: "hackathons", desc: "Challenges we organised" }
    ]},
    { label: "Hardware", href: "hardware.html", key: "hardware" },
    { label: "FAQ", href: "faq.html", key: "faq" },
    { label: "Contact", href: "contact.html", key: "contact" }
  ];
  function isActive(item) {
    if (item.key === page) return true;
    return (item.children || []).some(function (c) { return c.key === page; });
  }
  function cur(key) { return key === page ? ' aria-current="page"' : ""; }

  function buildHeader() {
    var desk = NAV.map(function (n) {
      if (!n.children) {
        return '<li class="nav-item"><a class="nav-link" href="' + n.href + '"' + cur(n.key) + ">" + n.label + "</a></li>";
      }
      return '<li class="nav-item"><button class="nav-link' + (isActive(n) ? " is-active" : "") + '" aria-haspopup="true" aria-expanded="false">' + n.label + icon("chev", "chev") + "</button>" +
        '<div class="dropdown">' + n.children.map(function (c) {
          return '<a href="' + c.href + '"' + cur(c.key) + "><strong>" + c.label + "</strong><span>" + c.desc + "</span></a>";
        }).join("") + "</div></li>";
    }).join("");

    var mob = NAV.map(function (n) {
      if (!n.children) return '<div class="m-group"><a class="m-link" href="' + n.href + '"' + cur(n.key) + ">" + n.label + "</a></div>";
      return '<div class="m-group"><span class="m-link">' + n.label + '</span><div class="m-sub">' +
        n.children.map(function (c) { return '<a href="' + c.href + '"' + cur(c.key) + ">" + c.label + "</a>"; }).join("") + "</div></div>";
    }).join("");

    var header = doc.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="container nav">' +
        '<a class="brand" href="index.html" aria-label="MALTO, Machine Learning at PoliTO — home">' + fullLogo() +
          '<span class="brand__tag" aria-hidden="true"><b>MA</b>chine <b>L</b>earning @ poli<b>TO</b></span></a>' +
        '<nav aria-label="Main"><ul class="nav-list">' + desk + "</ul></nav>" +
        '<a class="btn btn--sm nav-cta" href="join.html">Join MALTO ' + icon("arrow") + "</a>" +
        '<button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span></button>' +
      "</div>";
    var menu = doc.createElement("div");
    menu.className = "mobile-menu";
    menu.id = "mobile-menu";
    menu.innerHTML = '<nav aria-label="Mobile">' + mob + '</nav><a class="btn" href="join.html">Join MALTO ' + icon("arrow") + "</a>";

    doc.body.insertBefore(menu, doc.body.firstChild);
    doc.body.insertBefore(header, doc.body.firstChild);

    var skip = doc.createElement("a");
    skip.className = "skip-link"; skip.href = "#main"; skip.textContent = "Skip to content";
    doc.body.insertBefore(skip, doc.body.firstChild);

    // mobile toggle
    var toggle = $(".menu-toggle", header);
    function setMenu(open) {
      root.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      doc.body.style.overflow = open ? "hidden" : "";
    }
    toggle.addEventListener("click", function () { setMenu(!root.classList.contains("menu-open")); });
    doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1000) setMenu(false); });

    // dropdown aria-expanded on hover/focus
    $all(".nav-item", header).forEach(function (li) {
      var btn = $("button", li);
      if (!btn) return;
      function set(v) { btn.setAttribute("aria-expanded", v); }
      li.addEventListener("mouseenter", function () { set("true"); });
      li.addEventListener("mouseleave", function () { set("false"); });
      li.addEventListener("focusin", function () { set("true"); });
      li.addEventListener("focusout", function (e) { if (!li.contains(e.relatedTarget)) set("false"); });
      btn.addEventListener("click", function () { var a = $(".dropdown a", li); if (a) a.focus(); });
    });

    // scroll state: solid after 24px, hide on scroll down
    var lastY = window.scrollY, ticking = false;
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 24);
      var hide = y > 400 && y > lastY && !root.classList.contains("menu-open") && !header.contains(doc.activeElement);
      header.classList.toggle("is-hidden", hide);
      lastY = y; ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }

  function buildFooter() {
    var c = D.contact;
    var f = doc.createElement("footer");
    f.className = "site-footer";
    f.innerHTML =
      '<div class="container">' +
        '<div class="footer-thanks">' +
          '<img src="assets/img/polito.png" alt="Politecnico di Torino" width="263" height="116" loading="lazy">' +
          "<p>We&rsquo;re grateful to Politecnico di Torino for supporting our growth as a student team. Its guidance and resources help us take on new challenges, develop our ideas and create opportunities for students to learn and contribute to AI research.</p>" +
        "</div>" +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' + fullLogo() +
            "<p>Student Team</p></div>" +
          '<div class="footer-col"><h3>Team</h3><a href="members.html">Challengers</a><a href="trainees.html">Trainees</a><a href="alumni.html">Alumni</a><a href="communication.html">Social Media &amp; Communication</a></div>' +
          '<div class="footer-col"><h3>Work</h3><a href="challenges.html">Challenges &amp; Papers</a><a href="maltalks.html">MALTALKS</a><a href="workshops.html">Workshops</a><a href="conferences.html">Conferences</a><a href="hackathons.html">Hackathons</a><a href="hardware.html">Hardware</a></div>' +
          '<div class="footer-col"><h3>Connect</h3>' +
            '<a href="mailto:' + c.email + '">' + c.email + "</a>" +
            "<a" + ext(c.instagram.url) + ">Instagram " + c.instagram.handle + "</a>" +
            "<a" + ext(c.linkedin.url) + ">LinkedIn " + c.linkedin.handle + "</a>" +
            "<a" + ext("https://github.com/MAL-TO") + ">GitHub MAL-TO</a>" +
            '<a href="faq.html">FAQ</a></div>' +
        "</div>" +
        '<div class="footer-giant" aria-hidden="true">' + wordSVG("giant") + "</div>" +
        '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " MALTO · Politecnico di Torino · DAUIN</span><span>Machine Learning · AI · Research</span></div>" +
      "</div>";
    doc.body.appendChild(f);
  }

  /* ------------------------------------------------------------------
     Loader — full animation once per session, quick wipe afterwards
     ------------------------------------------------------------------ */
  function buildLoader(done) {
    var seen = false;
    try { seen = sessionStorage.getItem("malto-intro") === "1"; } catch (e) {}
    var quick = seen || reduceMotion;

    var el = doc.createElement("div");
    el.className = "loader" + (quick ? " loader--quick" : "");
    el.setAttribute("role", "status");
    el.setAttribute("aria-label", "Loading MALTO");
    el.innerHTML =
      '<div class="loader__inner">' +
        '<div class="loader__logo">' + markSVG("loader__mark") + wordSVG("loader__word") + "</div>" +
        '<div class="loader__meta" aria-hidden="true"><div class="loader__bar"><i></i></div>' +
        '<div class="loader__row"><span>Initialising model</span><b>000</b></div></div>' +
      "</div>";
    doc.body.appendChild(el);
    doc.body.style.overflow = "hidden";

    function finish() {
      el.classList.add("is-done");
      doc.body.style.overflow = "";
      try { sessionStorage.setItem("malto-intro", "1"); } catch (e) {}
      done();
      setTimeout(function () { el.classList.add("is-gone"); el.remove(); }, 950);
    }

    if (quick) { setTimeout(finish, reduceMotion ? 0 : 280); return; }

    var bar = $(".loader__bar i", el), num = $(".loader__row b", el), label = $(".loader__row span", el);
    var steps = ["Initialising model", "Loading weights", "Training challengers", "Ready"];
    var start = null, DUR = 2100, pageLoaded = doc.readyState === "complete";
    window.addEventListener("load", function () { pageLoaded = true; });
    function tick(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / DUR, 1);
      if (!pageLoaded && p > 0.9) p = 0.9;            // wait for real load
      var e = 1 - Math.pow(1 - p, 3);
      bar.style.transform = "scaleX(" + e + ")";
      num.textContent = String(Math.round(e * 100)).padStart(3, "0");
      label.textContent = steps[Math.min(steps.length - 1, Math.floor(e * steps.length))];
      if (p < 1) requestAnimationFrame(tick); else setTimeout(finish, 280);
    }
    requestAnimationFrame(tick);
    // safety net — never trap the user
    setTimeout(function () { if (!el.classList.contains("is-done")) finish(); }, 5000);
  }

  /* ------------------------------------------------------------------
     Reveal on scroll + counters
     ------------------------------------------------------------------ */
  function initReveal() {
    var els = $all(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  }
  function stagger(container, sel, step) {
    $all(sel, container).forEach(function (el, i) { el.classList.add("reveal"); el.style.setProperty("--d", Math.min(i * (step || 50), 400) + "ms"); });
  }
  function initCounters() {
    var els = $all("[data-count]");
    function run(el) {
      var to = +el.getAttribute("data-count");
      if (reduceMotion) { el.textContent = to; return; }
      var s = null, dur = 1400;
      function f(t) { if (!s) s = t; var p = Math.min((t - s) / dur, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))); if (p < 1) requestAnimationFrame(f); }
      requestAnimationFrame(f);
    }
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { run(x.target); io.unobserve(x.target); } }); }, { threshold: 0.4 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ------------------------------------------------------------------
     Hero network canvas — nodes & edges echo the logo's "bones"
     ------------------------------------------------------------------ */
  function initNetwork(canvas) {
    if (!canvas) return;
    var ctx = canvas.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W, H, nodes = [], raf = null, visible = true, mouse = { x: -9999, y: -9999 };
    function resize() {
      var r = canvas.getBoundingClientRect(); W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(90, Math.max(28, (W * H) / 16000)));
      nodes = [];
      for (var i = 0; i < n; i++) {
        nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28, r: Math.random() * 1.8 + 1.2, g: Math.random() < 0.18 });
      }
      if (reduceMotion) draw();
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      var LINK = Math.min(170, W / 7);
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.strokeStyle = "rgba(58,175,220," + (0.32 * (1 - d / LINK)).toFixed(3) + ")";
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        var md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 180) {
          ctx.strokeStyle = "rgba(192,255,174," + (0.45 * (1 - md / 180)).toFixed(3) + ")";
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        ctx.fillStyle = n.g ? "#C0FFAE" : "rgba(240,247,238,0.85)";
        if (n.g) { ctx.shadowColor = "#C0FFAE"; ctx.shadowBlur = 12; }
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    function step() {
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i]; n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;
      }
      draw();
      raf = visible ? requestAnimationFrame(step) : null;
    }
    resize();
    window.addEventListener("resize", function () { clearTimeout(resize.t); resize.t = setTimeout(resize, 150); });
    if (reduceMotion) return;
    canvas.parentElement.addEventListener("pointermove", function (e) { var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    canvas.parentElement.addEventListener("pointerleave", function () { mouse.x = mouse.y = -9999; });
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(step); }).observe(canvas);
    doc.addEventListener("visibilitychange", function () { visible = !doc.hidden; if (visible && !raf) raf = requestAnimationFrame(step); });
    raf = requestAnimationFrame(step);
  }

  /* ------------------------------------------------------------------
     Page renderers
     ------------------------------------------------------------------ */
  function placeLabel(c) {
    if (c.podium === 1) return "1st";
    if (c.podium === 2) return "2nd";
    if (c.podium === 3) return "3rd";
    return c.result;
  }

  function renderHome() {
    // stats
    var s = $("#stats");
    if (s) {
      var AUTO = {
        "auto-challenges": D.challenges.length,
        "auto-podiums": D.challenges.filter(function (c) { return c.podium; }).length,
        "auto-papers": D.challenges.filter(function (c) { return c.paperUrl && !c.paperIsOverview; }).length,
        "auto-events": D.events.filter(function (e) { return (e.type === "maltalks" || e.type === "workshop") && !e.upcoming; }).length,
        "auto-conferences": D.events.filter(function (e) { return e.type === "conference"; }).length
      };
      s.innerHTML = D.stats.map(function (x) {
        var v = AUTO.hasOwnProperty(x.value) ? AUTO[x.value] : x.value;
        return '<div class="stat"><div class="stat__num"><span data-count="' + v + '">0</span><span class="suf">' + esc(x.suffix) + "</span></div>" +
          '<div class="stat__label">' + esc(x.label) + "</div></div>";
      }).join("");
      stagger(s, ".stat", 70);
    }

    // ticker
    var t = $("#ticker");
    if (t) {
      var items = D.challenges.filter(function (c) { return c.podium; }).map(function (c) {
        return '<span class="ticker__item"><b>' + placeLabel(c) + "</b>" + esc(c.short) + "</span>";
      });
      items.push('<span class="ticker__item"><b>Top 10</b>SemEval 2026 · Task 13</span>');
      items.push('<span class="ticker__item"><b>' + D.challenges.filter(function (c) { return c.paperUrl && !c.paperIsOverview; }).length + '</b>Papers published</span>');
      items.push('<span class="ticker__item"><b>150+</b>Attendees · MALTALKS #2</span>');
      var row = items.join("");
      t.innerHTML = '<div class="ticker__track">' + row + '<span aria-hidden="true" style="display:contents">' + row + "</span></div>";
    }

    // podium results
    var r = $("#results");
    if (r) {
      // all 1st and 2nd places
      r.innerHTML = D.challenges.filter(function (c) { return c.podium && c.podium <= 2; }).sort(function (a, b) { return a.podium - b.podium || b.year - a.year; }).map(function (c) {
        return '<a class="result" href="challenges.html#' + c.id + '">' +
          '<div class="result__place"><b>' + placeLabel(c) + "</b><span>place · " + c.year + "</span></div>" +
          "<div><h3>" + esc(c.name) + '</h3><p style="margin-top:10px">' + esc(c.resultDetail) + "</p></div>" +
          '<span class="text-link">View challenge ' + icon("arrow") + "</span></a>";
      }).join("");
      stagger(r, ".result", 80);
    }

    // latest event (hero badge)
    var le = $("#latest-event");
    if (le) {
      var last = D.events.filter(function (e) { return e.type === "maltalks"; })
        .sort(function (a, b) { return b.date.localeCompare(a.date); })[0];
      if (last) {
        $(".v", le).textContent = "MALTALKS " + last.num;
        $(".s", le).textContent = last.title + " · " + fmtDate(last.date) + (last.partner ? " · in collaboration with " + last.partner : "");
        if (last.page) le.setAttribute("href", last.page);
      } else { le.remove(); }
    }

    // latest feed: challenge results + events (MALTALKS, conferences) only
    var f = $("#feed");
    if (f) {
      var items = [];
      D.events.forEach(function (e) {
        if (e.type !== "maltalks" && e.type !== "conference") return;
        if (!e.date || e.date.length < 7) return;
        items.push({
          date: e.date, href: e.page || (e.type === "maltalks" ? "maltalks.html" : "challenges.html"),
          title: (e.num ? "MALTALKS " + e.num + " — " : "") + e.title,
          sub: (e.speaker || e.place || "") + (e.partner ? " · in collaboration with " + e.partner : ""),
          tag: e.type === "maltalks" ? ["MALTALKS", "tag--green"] : ["Conference", "tag--blue"]
        });
      });
      D.challenges.forEach(function (c) {
        if (!c.date) return;
        items.push({
          date: c.date, href: "challenges.html#" + c.id,
          title: c.name,
          sub: c.resultDetail || c.result,
          tag: [c.podium ? placeLabel(c) + " place" : "Challenge", c.podium ? "tag--gold" : ""]
        });
      });
      items.sort(function (a, b) { return b.date.localeCompare(a.date); });
      f.innerHTML = items.slice(0, 6).map(function (it) {
        return '<a class="feed__item" href="' + it.href + '">' +
          '<span class="feed__date">' + fmtDate(it.date) + "</span>" +
          '<span class="feed__title">' + esc(it.title) + "<small>" + esc(it.sub) + "</small></span>" +
          '<span class="feed__tag"><span class="tag ' + it.tag[1] + '">' + esc(it.tag[0]) + "</span></span>" +
          '<span class="feed__arrow">' + icon("arrowUR") + "</span></a>";
      }).join("");
      stagger(f, ".feed__item", 60);
    }
  }

  function personCard(p, opts) {
    opts = opts || {};
    var photo = p.photo
      ? '<img src="' + esc(p.photo) + '" alt="Portrait of ' + esc(p.name) + '" loading="lazy" width="400" height="440">'
      : '<div class="person__initials" aria-hidden="true">' + initials(p.name) + "</div>";
    var badge = opts.badge ? '<div class="person__badge"><span class="tag ' + (opts.badgeCls || "tag--green") + '">' + esc(opts.badge) + "</span></div>" : "";
    var chips = (p.challenges || []).map(function (id) {
      var c = byId(id); if (!c) return "";
      return '<a class="chip" href="challenges.html#' + c.id + '" title="' + esc(c.name) + '">' + (c.podium ? '<span class="pod" aria-hidden="true"></span>' : "") + esc(c.short) + "</a>";
    }).join("");
    var pos = "";
    if (opts.alumni && p.position) {
      pos = '<div class="person__pos">' + icon("briefcase") + '<div><span class="k">Now</span>' + esc(p.position) + "</div></div>";
    }
    var study = p.study
      ? '<div class="person__study">' + icon("grad") + "<span>" + esc(p.study) + "</span></div>"
      : "";
    return '<article class="person">' +
      '<div class="person__photo">' + photo + badge + "</div>" +
      '<div class="person__body">' +
        '<div><h3 class="person__name">' + esc(p.name) + '</h3><div class="person__role">' + esc(p.role) + "</div>" +
          (p.note ? '<p class="person__note" style="margin-top:6px">' + esc(p.note) + "</p>" : "") + "</div>" +
        study + pos +
        (chips ? '<div><div class="person__ch-label">Challenges · ' + p.challenges.length + '</div><div class="chips" style="margin-top:8px">' + chips + "</div></div>" : "") +
      "</div></article>";
  }

  var PODIUM_LEGEND = '<p class="legend reveal"><span class="pod" aria-hidden="true"></span>Green dot = podium finish (1st, 2nd or 3rd place) in that challenge</p>';

  function group(title, count, cards, lead, legend) {
    return '<section class="group"><div class="group__head reveal"><h2>' + title + '</h2><span class="group__count">' + count + "</span></div>" +
      (legend || "") +
      '<div class="people' + (lead ? " people--lead" : "") + '">' + cards + "</div></section>";
  }

  function renderMembers() {
    var el = $("#people"); if (!el) return;
    var P = D.people;
    var lead = P.filter(function (p) { return p.group === "leader"; });
    var adv = P.filter(function (p) { return p.group === "advisor"; });
    var mem = P.filter(function (p) { return p.group === "member"; });
    // Team Leader + Academic Advisor first, without a section heading
    el.innerHTML = PODIUM_LEGEND +
      '<section class="group"><h2 class="sr-only">Team Leader and Academic Advisor</h2><div class="people people--lead">' +
        lead.map(function (p) { return personCard(p, { badge: "Team Leader" }); }).join("") +
        adv.map(function (p) { return personCard(p, { badge: "Academic Advisor", badgeCls: "tag--blue" }); }).join("") +
      "</div></section>" +
      group("Challengers", String(mem.length).padStart(2, "0") + " members", mem.map(function (p) { return personCard(p); }).join(""));
    $all(".people", el).forEach(function (g) { stagger(g, ".person", 45); });
  }

  function renderAlumni() {
    var el = $("#people"); if (!el) return;
    var A = D.people.filter(function (p) { return p.group === "alumni"; });
    var ex = A.filter(function (p) { return p.exLeader; });
    var rest = A.filter(function (p) { return !p.exLeader; });
    el.innerHTML =
      group("Former Team Leaders", String(ex.length).padStart(2, "0") + " people", ex.map(function (p) { return personCard(p, { alumni: true, badge: "Ex Team Leader" }); }).join(""), true) +
      group("Alumni", String(rest.length).padStart(2, "0") + " people", rest.map(function (p) { return personCard(p, { alumni: true }); }).join(""));
    $all(".people", el).forEach(function (g) { stagger(g, ".person", 45); });
  }

  function renderTrainees() {
    var el = $("#people"); if (!el) return;
    var T = D.people.filter(function (p) { return p.group === "trainee"; });
    el.innerHTML = group("Trainees", String(T.length).padStart(2, "0") + " people", T.map(function (p) { return personCard(p); }).join(""));
    $all(".people", el).forEach(function (g) { stagger(g, ".person", 45); });
  }

  function renderSocial() {
    var el = $("#people"); if (!el) return;
    var S = D.people.filter(function (p) { return p.group === "social"; });
    var lead = S.filter(function (p) { return /lead/i.test(p.role); });
    var rest = S.filter(function (p) { return !/lead/i.test(p.role); });
    el.innerHTML =
      group("Lead", "01 person", lead.map(function (p) { return personCard(p, { badge: "Lead" }); }).join(""), true) +
      group("Team", String(rest.length).padStart(2, "0") + " people", rest.map(function (p) { return personCard(p); }).join(""));
    $all(".people", el).forEach(function (g) { stagger(g, ".person", 45); });
  }

  function renderChallenges() {
    var el = $("#challenge-list"); if (!el) return;
    el.innerHTML = D.challenges.map(function (c) {
      var resCls = c.podium ? "is-podium" : "";
      var paper = c.paperUrl
        ? '<div class="paper"><div class="paper__label">' + icon("paper") + "Publication</div>" +
          '<div class="paper__title">' + esc(c.paper) + "</div>" +
          '<div class="paper__links"><a class="btn btn--sm btn--blue"' + ext(c.paperUrl) + ">Read paper " + icon("arrowUR") + "</a>" +
          (c.github ? '<a class="btn btn--sm btn--ghost"' + ext(c.github) + ">" + icon("github") + " GitHub</a>" : "") +
          "</div></div>"
        : (c.github ? '<div class="paper__links"><a class="btn btn--sm btn--ghost"' + ext(c.github) + ">" + icon("github") + " GitHub</a></div>" : "");
      var authors = c.team.map(function (n) { return '<span class="author">' + esc(n) + "</span>"; }).join("") +
        c.advisors.map(function (n) { return '<span class="author author--adv">' + esc(n) + "</span>"; }).join("");
      return '<article class="challenge reveal" id="' + c.id + '" data-year="' + c.year + '" data-podium="' + (c.podium ? 1 : 0) + '" data-paper="' + (c.paperUrl ? 1 : 0) + '">' +
        '<div class="challenge__side">' +
          '<span class="challenge__id">' + c.id.toUpperCase() + " · " + c.year + "</span>" +
          '<div class="challenge__result"><b class="' + resCls + '">' + esc(c.result) + "</b>" + (c.resultDetail ? "<span>" + esc(c.resultDetail) + "</span>" : "") + "</div>" +
          '<div class="challenge__meta">' +
            (c.venueUrl
              ? '<a class="tag tag--link"' + ext(c.venueUrl) + ">" + esc(c.venue) + icon("arrowUR") + "</a>"
              : '<span class="tag">' + esc(c.venue) + "</span>") +
            (c.paperUrl ? '<span class="tag tag--blue">Paper</span>' : "") + "</div>" +
          (c.source ? '<a class="text-link"' + ext(c.source) + ">Announcement " + icon("arrowUR") + "</a>" : "") +
        "</div>" +
        '<div class="challenge__main">' +
          "<h2>" + esc(c.name) + "</h2>" +
          '<div class="challenge__cols"><div><h3>The challenge</h3><p>' + esc(c.brief) + '</p></div><div class="sol"><h3>Our solution</h3><p>' + esc(c.solution) + "</p></div></div>" +
          paper +
          (authors ? '<div class="challenge__authors"><h3>Team &amp; authors</h3><div class="authors">' + authors + "</div></div>" : "") +
        "</div></article>";
    }).join("");

    // filters
    var btns = $all(".filter");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        btns.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        var f = b.getAttribute("data-filter"), shown = 0;
        $all(".challenge", el).forEach(function (card) {
          var ok = f === "all" || (f === "podium" && card.dataset.podium === "1") || (f === "paper" && card.dataset.paper === "1") || card.dataset.year === f;
          card.hidden = !ok; if (ok) { shown++; card.classList.add("is-in"); }
        });
        var live = $("#filter-status"); if (live) live.textContent = shown + " challenges shown";
      });
    });

    var hosted = $("#hosted");
    if (hosted) {
      hosted.innerHTML = D.hosted.map(function (h) {
        return '<div class="hosted__card reveal"><span class="eyebrow">' + esc(h.date) + "</span><h3>" + esc(h.name) + "</h3><p>" + esc(h.text) + "</p></div>";
      }).join("");
    }

    // deep link highlight (from member chips)
    function flash() {
      var id = location.hash.slice(1); if (!id) return;
      var t = doc.getElementById(id); if (!t || !t.classList.contains("challenge")) return;
      t.hidden = false; t.classList.add("is-in", "is-flash");
      setTimeout(function () { t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }); }, 60);
      setTimeout(function () { t.classList.remove("is-flash"); }, 2600);
    }
    window.addEventListener("hashchange", flash);
    flash.pending = true;
    renderChallenges.flash = flash;
  }

  function partnerTag(e) {
    return e.partner ? '<span class="tag tag--blue">In collaboration with ' + esc(e.partner) + "</span>" : "";
  }

  // Shared helpers for MALTALKS and workshop pages
  var SERIES = {
    maltalks: { list: "maltalks.html", back: "All MALTALKS", nav: "Other MALTALKS", poster: true },
    workshop: { list: "workshops.html", back: "All workshops", nav: "Other workshops", poster: false },
    conference: { list: "conferences.html", back: "All conferences", nav: "Other conferences", poster: false, label: "Conference", guest: "Presented by" }
  };
  function fullTitle(e) { return (e.num ? "MALTALKS " + e.num + " — " : "") + e.title; }
  function dateText(e) { return e.dateLabel || fmtDate(e.date); }

  // Card for an event with its own page (MALTALKS: poster 4:5, workshops: photo 4:3)
  function talkCard(e) {
    var title = fullTitle(e);
    var poster = (SERIES[e.type] || {}).poster;
    return '<a class="event event--link" href="' + esc(e.page) + '">' +
      '<div class="event__media ' + (poster ? "event__media--poster" : "event__media--photo") + (e.type === "conference" ? " tint" : "") + '">' +
        (e.cover
          ? '<img src="' + esc(e.cover) + '" alt="' + esc(title) + (poster ? " poster" : "") + '" loading="lazy" width="' + (poster ? 800 : 1400) + '" height="' + (poster ? 1000 : 1050) + '">'
          : (e.num ? '<span class="num">' + esc(e.num) + "</span>" : icon("tools", "ico"))) +
      "</div>" +
      '<div class="event__body">' +
        '<div class="event__date"><span>' + icon("cal") + esc(dateText(e)) + "</span>" + (e.place ? "<span>" + icon("pin") + esc(e.place) + "</span>" : "") + "</div>" +
        "<h3>" + esc(title) + "</h3>" +
        (e.speaker ? '<div class="speaker">' + esc(e.speaker) + "</div>" : "") +
        (e.partner ? "<div>" + partnerTag(e) + "</div>" : "") +
        '<span class="text-link">View event ' + icon("arrow") + "</span>" +
      "</div></a>";
  }

  // Card for an upcoming event (no page yet)
  function upcomingCard(e) {
    var p = String(e.date).split("-");
    return '<article class="upcoming">' +
      '<div class="upcoming__date" aria-hidden="true"><b>' + (+p[2]) + "</b><span>" + MONTHS[+p[1] - 1] + " " + p[0] + "</span></div>" +
      '<div class="upcoming__body">' +
        '<span class="tag tag--green">Upcoming</span>' +
        "<h3>" + esc(e.title) + "</h3>" +
        '<div class="event__date"><span>' + icon("cal") + fmtDate(e.date) + "</span>" + (e.time ? "<span>" + icon("clock") + esc(e.time) + "</span>" : "") + (e.place ? "<span>" + icon("pin") + esc(e.place) + "</span>" : "") + "</div>" +
        "<p>" + esc(e.text) + "</p>" +
      "</div></article>";
  }

  // Detail page for a single MALTALK or workshop (body[data-talk])
  function renderTalk() {
    var el = $("#talk"); if (!el) return;
    var id = doc.body.getAttribute("data-talk");
    var e = D.events.filter(function (x) { return x.id === id; })[0]; if (!e) return;
    var S = SERIES[e.type] || SERIES.maltalks;
    var talks = D.events.filter(function (x) { return x.type === e.type && x.page; })
      .sort(function (a, b) { return a.date.localeCompare(b.date); });
    var i = talks.indexOf(e);
    var label = e.num ? "MALTALKS " + e.num : (S.label || "Workshop");

    var photos = (e.photos || []).map(function (src, k) {
      return '<button class="gallery__item" type="button" data-src="' + esc(src) + '" aria-label="Open photo ' + (k + 1) + ' of ' + e.photos.length + '">' +
        '<img src="' + esc(src) + '" alt="' + esc(fullTitle(e)) + " — photo " + (k + 1) + '" loading="lazy"></button>';
    }).join("");

    var media = e.cover
      ? (S.poster
          ? '<figure class="talk__poster reveal" style="--d:100ms"><img src="' + esc(e.cover) + '" alt="' + esc(label) + ' poster" width="800" height="1000"></figure>'
          : '<figure class="talk__poster talk__poster--photo' + (e.type === "conference" ? " tint" : "") + ' reveal" style="--d:100ms"><img src="' + esc(e.cover) + '" alt="' + esc(e.title) + '" width="1400" height="1050"></figure>')
      : "";

    var prev = talks[i - 1], next = talks[i + 1];
    el.innerHTML =
      '<section class="page-hero talk-hero"><div class="container">' +
        '<a class="text-link back-link reveal" href="' + S.list + '">' + icon("arrow", "flip") + S.back + "</a>" +
        '<span class="eyebrow reveal">' + esc(label) + "</span>" +
        '<h1 class="reveal" style="--d:60ms">' + esc(e.title) + "</h1>" +
        '<div class="event__date talk-meta reveal" style="--d:120ms"><span>' + icon("cal") + esc(dateText(e)) + "</span>" +
          (e.time ? "<span>" + icon("clock") + esc(e.time) + "</span>" : "") +
          (e.place ? "<span>" + icon("pin") + esc(e.place) + "</span>" : "") + "</div>" +
        (e.partner ? '<div class="reveal" style="--d:150ms">' + partnerTag(e) + "</div>" : "") +
      "</div></section>" +

      '<section class="section section--tight"><div class="container talk' + (media ? "" : " talk--solo") + '">' +
        '<div class="talk__body reveal">' +
          (e.speaker ? '<div class="talk__guest"><span class="k">' + (S.guest || "Guest") + "</span><b>" + esc(e.speaker) + "</b></div>" : "") +
          '<p class="talk__text">' + esc(e.text) + "</p>" +
          relatedChallenges(e) +
        "</div>" +
        media +
      "</div></section>" +

      (photos ? '<section class="section section--line" aria-labelledby="gal-title"><div class="container">' +
        '<div class="section-head reveal"><span class="eyebrow">Gallery</span><h2 id="gal-title" class="h-md" style="margin-top:18px">Moments from the event</h2></div>' +
        '<div class="gallery">' + photos + "</div></div></section>" : "") +

      '<section class="section section--tight"><div class="container"><nav class="talk-nav" aria-label="' + S.nav + '">' +
        (prev ? '<a href="' + esc(prev.page) + '"><span class="k">Previous</span><b>' + esc(fullTitle(prev)) + "</b></a>" : "<span></span>") +
        (next ? '<a class="next" href="' + esc(next.page) + '"><span class="k">Next</span><b>' + esc(fullTitle(next)) + "</b></a>" : "<span></span>") +
      "</nav></div></section>" +

      '<dialog class="lightbox" aria-label="Photo viewer"><button class="lightbox__close" type="button" aria-label="Close photo">&times;</button><img alt=""></dialog>';

    stagger($(".gallery", el) || el, ".gallery__item", 50);

    var dlg = $(".lightbox", el), big = $("img", dlg);
    $all(".gallery__item", el).forEach(function (b) {
      b.addEventListener("click", function () {
        big.src = b.getAttribute("data-src");
        big.alt = $("img", b).alt;
        if (dlg.showModal) dlg.showModal(); else window.open(big.src, "_blank");
      });
    });
    $(".lightbox__close", dlg).addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (ev) { if (ev.target === dlg) dlg.close(); });
  }

  // Links from a conference page to the challenge(s) it was about
  function relatedChallenges(e) {
    var list = (e.challenges || []).map(byId).filter(Boolean);
    if (!list.length) return "";
    return '<div class="related">' +
      '<span class="k">The challenge' + (list.length > 1 ? "s" : "") + " behind this conference</span>" +
      "<p>You can find the full details of the challenge" + (list.length > 1 ? "s" : "") + ", our solution" + (list.length > 1 ? "s" : "") + " and the paper" + (list.length > 1 ? "s" : "") + " on our Challenges page.</p>" +
      '<div class="related__links">' + list.map(function (c) {
        return '<a class="related__item" href="challenges.html#' + c.id + '">' +
          '<span class="related__place">' + esc(c.result) + "</span>" +
          '<span class="related__name">' + esc(c.name) + "</span>" + icon("arrow") + "</a>";
      }).join("") + "</div></div>";
  }

  // Conferences page: every conference, newest first
  function renderConferences() {
    var el = $("#past-events"); if (!el) return;
    var C = D.events.filter(function (e) { return e.type === "conference"; }).sort(function (a, b) { return b.date.localeCompare(a.date); });
    el.innerHTML = C.map(eventCard).join("");
    stagger(el, ".event", 60);
  }

  // Workshops page: upcoming list + past editions (reverse chronological)
  function renderWorkshops() {
    var W = D.events.filter(function (e) { return e.type === "workshop"; });
    var up = $("#upcoming-workshops");
    if (up) {
      var U = W.filter(function (e) { return e.upcoming; }).sort(function (a, b) { return a.date.localeCompare(b.date); });
      up.innerHTML = U.map(upcomingCard).join("");
      stagger(up, ".upcoming", 60);
      if (!U.length) { var sec = up.closest("section"); if (sec) sec.remove(); }
    }
    var past = $("#past-events");
    if (past) {
      var P = W.filter(function (e) { return !e.upcoming; }).sort(function (a, b) { return b.date.localeCompare(a.date); });
      past.innerHTML = P.map(eventCard).join("");
      stagger(past, ".event", 60);
    }
  }

  function eventCard(e) {
    if (e.page) return talkCard(e);
    var TYPE = { maltalks: ["MALTALKS", "tag--green"], conference: ["Conference", "tag--blue"], community: ["Community", "tag--green"], workshop: ["Workshop", "tag--blue"] };
    var ty = TYPE[e.type] || ["Event", ""];
    var ico = { maltalks: "mic", conference: "trophy", community: "users", workshop: "tools" }[e.type] || "spark";
    var media = (e.image || e.num)
      ? '<div class="event__media">' + (e.image ? '<img src="' + esc(e.image) + '" alt="' + esc(e.title) + ' — event poster" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">' : "") +
        '<div class="kind"><span class="tag ' + ty[1] + '">' + ty[0] + "</span></div>" + (e.num && !e.image ? '<span class="num">' + esc(e.num) + "</span>" : "") + "</div>"
      : '<div class="event__media event__media--plain"><div class="kind"><span class="tag ' + ty[1] + '">' + ty[0] + "</span></div>" + icon(ico, "ico") + "</div>";
    var title = (e.num ? "MALTALKS " + e.num + " — " : "") + e.title;
    return '<article class="event">' + media +
      '<div class="event__body">' +
        '<div class="event__date"><span>' + icon("cal") + fmtDate(e.date) + "</span>" + (e.time ? "<span>" + icon("clock") + esc(e.time) + "</span>" : "") + (e.place ? "<span>" + icon("pin") + esc(e.place) + "</span>" : "") + "</div>" +
        "<h3>" + esc(title) + "</h3>" + (e.speaker ? '<div class="speaker">' + esc(e.speaker) + "</div>" : "") +
        "<p>" + esc(e.text) + "</p>" +
        (e.link ? '<a class="text-link"' + ext(e.link) + ">See the post " + icon("arrowUR") + "</a>" : "") +
      "</div></article>";
  }

  function renderEvents(types) {
    var el = $("#past-events"); if (!el) return;
    var list = D.events.filter(function (e) { return types.indexOf(e.type) > -1; })
      .sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
    el.innerHTML = list.map(eventCard).join("");
    stagger(el, ".event", 60);
  }

  function renderContact() {
    $all("[data-copy]").forEach(function (b) {
      b.addEventListener("click", function () {
        var txt = b.getAttribute("data-copy");
        var t = $("#toast");
        function ok() { if (t) { t.textContent = "Email copied"; t.classList.add("is-on"); setTimeout(function () { t.classList.remove("is-on"); }, 2400); } }
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(ok, function () {}); else ok();
      });
    });
  }

  /* ------------------------------------------------------------------
     Hackathons (Kaggle competitions hosted by MALTO)
     ------------------------------------------------------------------ */
  function hackIcon(h, cls) {
    return '<span class="hack-icon ' + (cls || "") + '" aria-hidden="true">' + icon(h.icon || "spark") + "</span>";
  }
  function hackStatsLine(h) {
    var s = h.stats || {};
    return [s.participants ? s.participants + " participants" : "", s.submissions ? s.submissions + " submissions" : ""].filter(Boolean).join(" · ");
  }

  function hackCard(h) {
    return '<a class="hack-card" href="' + esc(h.page) + '">' +
      '<div class="hack-card__top">' + hackIcon(h) + '<span class="tag tag--blue">Kaggle</span></div>' +
      '<div class="hack-card__body">' +
        '<div class="event__date"><span>' + icon("cal") + esc(h.dateLabel) + "</span></div>" +
        "<h3>" + esc(h.title) + "</h3>" +
        "<p>" + esc(h.tagline) + "</p>" +
        (hackStatsLine(h) ? '<div class="hack-card__stats">' + icon("users") + "<span>" + esc(hackStatsLine(h)) + "</span></div>" : "") +
        '<span class="text-link">View hackathon ' + icon("arrow") + "</span>" +
      "</div></a>";
  }

  function renderHackathons() {
    var el = $("#hackathon-list"); if (!el) return;
    var H = (D.hackathons || []).slice().sort(function (a, b) { return b.start.localeCompare(a.start); });
    el.innerHTML = H.map(hackCard).join("");
    stagger(el, ".hack-card", 60);
  }

  function renderHackathon() {
    var el = $("#hackathon"); if (!el) return;
    var id = doc.body.getAttribute("data-hack");
    var H = (D.hackathons || []).slice().sort(function (a, b) { return a.start.localeCompare(b.start); });
    var h = H.filter(function (x) { return x.id === id; })[0]; if (!h) return;
    var i = H.indexOf(h), prev = H[i - 1], next = H[i + 1];
    var s = h.stats || {};
    var PLACES = ["1st", "2nd", "3rd"];

    var stats = [
      ["Participants", s.participants], ["Submissions", s.submissions], ["Entrants", s.entrants]
    ].filter(function (x) { return x[1]; }).map(function (x) {
      return '<div class="stat"><div class="stat__num"><span data-count="' + x[1] + '">0</span></div><div class="stat__label">' + x[0] + "</div></div>";
    }).join("");

    var podium = (h.podium || []).map(function (p, k) {
      return '<li class="podium__row podium__row--' + (k + 1) + '"><span class="podium__place">' + PLACES[k] + "</span>" +
        '<span class="podium__name">' + esc(p.name) + "</span>" +
        (p.score ? '<span class="podium__score">' + esc(p.score) + "</span>" : "") + "</li>";
    }).join("");

    el.innerHTML =
      '<section class="page-hero talk-hero"><div class="container">' +
        '<a class="text-link back-link reveal" href="hackathons.html">' + icon("arrow", "flip") + "All hackathons</a>" +
        '<div class="hack-hero reveal" style="--d:60ms">' + hackIcon(h, "hack-icon--lg") +
          '<div><span class="eyebrow">MALTO Hackathon</span><h1>' + esc(h.title) + "</h1></div></div>" +
        '<p class="lead reveal" style="--d:120ms">' + esc(h.tagline) + "</p>" +
        '<div class="event__date talk-meta reveal" style="--d:150ms"><span>' + icon("cal") + esc(h.dateLabel) + "</span><span>" + icon("code") + "Kaggle Community Competition</span></div>" +
        '<div class="reveal" style="--d:180ms"><a class="btn"' + ext(h.url) + ">Open on Kaggle " + icon("arrowUR") + "</a></div>" +
      "</div></section>" +

      (stats ? '<section class="section section--tight"><div class="container"><h2 class="sr-only">Participation</h2><div class="stats stats--3">' + stats + "</div></div></section>" : "") +

      '<section class="section section--line"><div class="container hack-detail">' +
        '<div class="hack-detail__desc reveal">' +
          '<span class="eyebrow">The challenge</span>' +
          (h.description || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        "</div>" +
        (podium ? '<aside class="podium reveal" style="--d:100ms" aria-labelledby="podium-title">' +
          '<span class="eyebrow" id="podium-title">Final top 3</span>' +
          (h.metric ? '<p class="podium__metric">' + esc(h.metric) + "</p>" : "") +
          '<ol class="podium__list">' + podium + "</ol>" +
          '<a class="text-link"' + ext(h.url + "/leaderboard") + ">Full leaderboard " + icon("arrowUR") + "</a>" +
        "</aside>" : "") +
      "</div></section>" +

      ((prev || next) ? '<section class="section section--tight"><div class="container"><nav class="talk-nav" aria-label="Other hackathons">' +
        (prev ? '<a href="' + esc(prev.page) + '"><span class="k">Previous</span><b>' + esc(prev.title) + "</b></a>" : "<span></span>") +
        (next ? '<a class="next" href="' + esc(next.page) + '"><span class="k">Next</span><b>' + esc(next.title) + "</b></a>" : "<span></span>") +
      "</nav></div></section>" : "");
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  buildHeader();
  buildFooter();

  // fill icons declared in markup: <span data-icon="mic"></span>
  $all("[data-icon]").forEach(function (s) { s.outerHTML = icon(s.getAttribute("data-icon"), s.className); });
  // logo slots in markup
  $all("[data-logo='mark']").forEach(function (s) { s.innerHTML = markSVG(); });

  var R = {
    home: renderHome, members: renderMembers, trainees: renderTrainees, alumni: renderAlumni, communication: renderSocial,
    challenges: renderChallenges, contact: renderContact,
    // talk pages use data-page="maltalks" (keeps the menu highlight) plus data-talk
    maltalks: function () { if (doc.body.hasAttribute("data-talk")) renderTalk(); else renderEvents(["maltalks"]); },
    workshops: function () { if (doc.body.hasAttribute("data-talk")) renderTalk(); else renderWorkshops(); },
    conferences: function () { if (doc.body.hasAttribute("data-talk")) renderTalk(); else renderConferences(); },
    hackathons: function () { if (doc.body.hasAttribute("data-hack")) renderHackathon(); else renderHackathons(); }
  };
  if (R[page]) R[page]();

  initNetwork($(".hero__canvas"));
  initCounters();

  buildLoader(function () {
    initReveal();
    if (renderChallenges.flash) renderChallenges.flash();
  });
})();
