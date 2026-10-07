(function () {
  "use strict";
  var T = window.TRIP;

  /* 地圖搜尋用的日文名稱 */
  var JP = {
    "熊本機場": "阿蘇くまもと空港", "草千里之濱": "草千里ヶ浜", "阿蘇山本堂 西巖殿寺奧之院": "阿蘇山 西巌殿寺 奥之院",
    "阿蘇中岳火山口": "阿蘇山 中岳火口", "白川水源": "白川水源", "高千穗神社": "高千穂神社", "真名井瀑布": "真名井の滝",
    "高千穗峽": "高千穂峡", "天岩戶神社": "天岩戸神社", "天安河原": "天安河原", "湯之坪街道": "湯の坪街道",
    "湯布院花卉村": "湯布院フローラルハウス", "湯布院昭和館": "湯布院昭和館", "金鱗湖": "金鱗湖",
    "宇奈岐日女神社": "宇奈岐日女神社", "狹霧台": "狭霧台", "鶴見岳・別府空中纜車": "別府ロープウェイ",
    "竹瓦溫泉": "竹瓦温泉", "別府地獄溫泉巡禮": "別府地獄めぐり 海地獄", "地獄溫泉博物館": "地獄温泉ミュージアム",
    "別府塔": "別府タワー", "九重夢大吊橋": "九重夢大吊橋", "阿蘇神社": "阿蘇神社", "阿蘇牛奶工廠 ASO MILK FACTORY": "ASO MILK FACTORY",
    "熊本城": "熊本城", "櫻之馬場城彩苑": "桜の馬場 城彩苑", "熊本熊廣場": "くまモンスクエア", "上通町・下通町": "上通 熊本",
    "水前寺成趣園": "水前寺成趣園", "海地獄": "海地獄", "鬼石坊主地獄": "鬼石坊主地獄", "灶地獄": "かまど地獄",
    "鬼山地獄": "鬼山地獄", "白池地獄": "白池地獄", "血池地獄": "血の池地獄", "龍卷地獄": "龍巻地獄"
  };

  /* 小地圖用的概略經緯度 [經度, 緯度] */
  var GEO = {
    "熊本機場": [130.855, 32.837], "草千里之濱": [131.055, 32.885], "阿蘇山本堂 西巖殿寺奧之院": [131.07, 32.885],
    "阿蘇中岳火山口": [131.085, 32.884], "熊本阿蘇萬楓酒店": [131.05, 32.95], "白川水源": [131.10, 32.80],
    "高千穗神社": [131.30, 32.71], "真名井瀑布": [131.305, 32.70], "高千穗峽": [131.305, 32.70], "天岩戶神社": [131.34, 32.74],
    "天安河原": [131.345, 32.745], "湯之坪街道": [131.36, 33.265], "湯布院花卉村": [131.36, 33.265], "湯布院昭和館": [131.36, 33.265],
    "湯布院 山燈館": [131.37, 33.265], "金鱗湖": [131.37, 33.266], "宇奈岐日女神社": [131.35, 33.255], "狹霧台": [131.39, 33.28],
    "鶴見岳・別府空中纜車": [131.45, 33.29], "竹瓦溫泉": [131.50, 33.28], "Apartment Hotel YAEZAKI": [131.505, 33.275],
    "別府地獄溫泉巡禮": [131.475, 33.315], "地獄溫泉博物館": [131.475, 33.315], "別府塔": [131.505, 33.278],
    "九重夢大吊橋": [131.27, 33.14], "阿蘇神社": [131.12, 32.95], "阿蘇牛奶工廠 ASO MILK FACTORY": [131.04, 32.98],
    "KOKO HOTEL Premier 熊本": [130.70, 32.80], "熊本城": [130.705, 32.806], "櫻之馬場城彩苑": [130.70, 32.803],
    "熊本熊廣場": [130.71, 32.80], "上通町・下通町": [130.71, 32.80], "水前寺成趣園": [130.735, 32.79]
  };

  /* 和風沉穩色階：每天一個日本傳統色，由苔綠一路沉到葡萄鼠。
     chip 用於日期格，deep 用於頁首底色與文字（白字），soft 用於淡底塊，ink 是日期格上的文字色 */
  var DAYC = [
    { name: "苔", chip: "#5F7036", deep: "#4F5E2C", soft: "#EDEFE3", ink: "#FFFFFF" },
    { name: "鶯", chip: "#6E7A3A", deep: "#5B6630", soft: "#EEEFE2", ink: "#FFFFFF" },
    { name: "海松茶", chip: "#7D7436", deep: "#6A622D", soft: "#F1EFE1", ink: "#FFFFFF" },
    { name: "黃土", chip: "#8F6936", deep: "#7A582D", soft: "#F3ECE2", ink: "#FFFFFF" },
    { name: "柿渋", chip: "#8E5534", deep: "#76462B", soft: "#F3E8E2", ink: "#FFFFFF" },
    { name: "弁柄", chip: "#844536", deep: "#6E392D", soft: "#F2E5E2", ink: "#FFFFFF" },
    { name: "蘇芳", chip: "#74393F", deep: "#612F35", soft: "#F0E3E4", ink: "#FFFFFF" },
    { name: "葡萄鼠", chip: "#5C3B50", deep: "#4C3143", soft: "#EDE4EA", ink: "#FFFFFF" }
  ];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var icon = function (id, cls) { return '<svg class="ic' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; };
  var mapUrl = function (q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q); };
  var md = function (iso) { var p = iso.split("-"); return +p[1] + "/" + p[2]; };
  var tel = function (p) { return p.replace(/[^+\d]/g, ""); };

  /* 日本時間的今天 */
  function todayJP() {
    try { return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()); }
    catch (e) { return new Date().toISOString().slice(0, 10); }
  }
  var TODAY = todayJP();
  var dayDiff = function (a, b) { return Math.round((Date.parse(b) - Date.parse(a)) / 864e5); };
  var todayDay = T.days.filter(function (d) { return d.date === TODAY; })[0];

  var state = { tab: "trip", day: todayDay ? todayDay.n : 1 };

  /* 頁面換上選中日的秋色 */
  function applyDayColor() {
    var c = DAYC[state.day - 1], r = document.documentElement.style;
    r.setProperty("--day", c.deep); r.setProperty("--day-chip", c.chip); r.setProperty("--day-soft", c.soft);
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", c.deep);
  }

  /* ── 導讀列 ─────────────────────────── */
  function setGuide() {
    var html;
    if (state.tab === "trip") {
      var d = T.days[state.day - 1];
      html = '<span class="u"><b>Day ' + d.n + "</b>" + esc(d.from) + " → " + esc(d.via || d.to) + '</span> <span class="u"><span class="sep">·</span>' + md(d.date) + "（" + d.dow + "）</span>";
    } else {
      html = "<b>" + { transport: "交通", stay: "住宿", info: "資訊" }[state.tab] + "</b>" + { transport: "航班與租車", stay: "四間飯店・七晚", info: "氣候、美食與行前清單" }[state.tab];
    }
    var n = dayDiff(TODAY, T.start);
    if (n > 0) html += ' <span class="u"><span class="sep">·</span>倒數 ' + n + " 天</span>";
    else if (dayDiff(T.end, TODAY) > 0) html += '<span class="sep">·</span>旅程回顧';
    $("#guide").innerHTML = html;
  }

  /* ── 待填欄位 ───────────────────────── */
  function val(v) { return v ? esc(v) : '<span class="todo">待填</span>'; }
  function facts(rows, cls) {
    return '<dl class="facts' + (cls ? " " + cls : "") + '">' + rows.map(function (r) { return '<div class="facts__row"><dt>' + r[0] + "</dt><dd>" + r[1] + "</dd></div>"; }).join("") + "</dl>";
  }
  function bookingFacts(b) {
    return facts([["訂房編號", val(b.no)], ["PIN", val(b.pin)], ["房型", val(b.room)], ["房號", val(b.roomNo)],
      ["人數", val(b.guests)], ["金額", val(b.price)], ["付款", val(b.paid)], ["免費取消", val(b.cancel)], ["備註", val(b.note)]], "facts--grid");
  }
  function nightsLabel(h) {
    var last = h.nights[h.nights.length - 1];
    var out = new Date(Date.parse(last) + 864e5).toISOString().slice(0, 10);
    return md(h.nights[0]) + " 入住 – " + md(out) + " 退房 · " + h.nights.length + " 晚";
  }
  function lodgeBlock(key, opts) {
    var h = T.hotels[key];
    return '<article class="lodge">' +
      '<header class="lodge__head">' + icon("bed") + '<div><h3 class="lodge__name">' + esc(h.name) + "</h3>" +
      '<p class="lodge__nights num">' + nightsLabel(h) + (h.nameAlt ? " · " + esc(h.nameAlt) : "") + "</p></div></header>" +
      '<div class="lodge__body">' +
      facts([["地址", esc(h.address)], ["電話", '<a class="num" href="tel:' + tel(h.phone) + '">' + esc(h.phone) + "</a>"]]) +
      '<div class="actions"><a class="btn btn--day" href="' + mapUrl(h.name + " " + h.address) + '" target="_blank" rel="noopener">' + icon("nav") + "導航</a>" +
      '<a class="btn" href="tel:' + tel(h.phone) + '">' + icon("phone") + "撥打電話</a></div>" +
      (opts && opts.desc ? '<p class="lodge__desc">' + esc(h.desc) + "</p>" : "") +
      '<details class="slot"' + (opts && opts.openBooking ? " open" : "") + '><summary>' + icon("ticket") + "訂房資訊" + icon("chev", "chev") + "</summary>" + bookingFacts(h.booking) + "</details>" +
      "</div></article>";
  }

  /* ── 九州小地圖 ─────────────────────── */
  var KYUSHU = [[130.88,33.95],[131.05,33.85],[131.25,33.62],[131.68,33.65],[131.75,33.45],[131.55,33.27],[131.85,33.1],[131.95,32.85],[131.75,32.5],[131.6,32.1],[131.45,31.6],[131.3,31.4],[131.1,31.35],[130.95,31.05],[130.7,31.0],[130.68,31.25],[130.45,31.25],[130.2,31.3],[130.2,31.6],[130.3,31.9],[130.15,32.15],[130.45,32.4],[130.6,32.65],[130.55,32.8],[130.35,32.85],[130.2,32.75],[129.95,32.75],[129.75,32.6],[129.7,33.0],[129.85,33.2],[129.6,33.3],[129.85,33.5],[130.05,33.5],[130.3,33.6],[130.45,33.75],[130.7,33.9]];
  function proj(p) { return [((p[0] - 129.55) * 60).toFixed(1), ((34.02 - p[1]) * 71).toFixed(1)]; }
  function pts(names) { return names.map(function (n) { return GEO[n]; }).filter(Boolean).map(proj); }
  function line(ps) { return ps.map(function (p) { return p.join(","); }).join(" "); }
  /* 全程依日期分段，各用當天秋色；選中那天加粗，像紅葉前線一路推進 */
  function miniMap(d) {
    var segs = T.days.map(function (x, i) {
      var ps = pts(x.stops.map(function (s) { return s.name; }));
      return '<polyline class="minimap__seg' + (x.n === d.n ? ' is-on"' : '" style="stroke:' + DAYC[i].chip + '"') + ' points="' + line(ps) + '"/>';
    });
    var on = segs.splice(d.n - 1, 1)[0];
    var tp = pts(d.stops.map(function (s) { return s.name; })), last = tp[tp.length - 1];
    var lab = function (n, p, dx, dy, a) { return '<text x="' + (+p[0] + dx) + '" y="' + (+p[1] + dy) + '" text-anchor="' + a + '">' + n + "</text>"; };
    return '<svg class="minimap" viewBox="0 0 150 150" role="img" aria-label="九州地圖，標示 Day ' + d.n + ' 路線">' +
      '<polygon class="minimap__land" points="' + line(KYUSHU.map(proj)) + '"/>' +
      segs.join("") + on +
      '<circle class="minimap__end" cx="' + last[0] + '" cy="' + last[1] + '" r="5"/>' +
      '<g class="minimap__labels">' + lab("熊本", proj([130.70, 32.80]), -6, 5, "end") + lab("別府", proj([131.50, 33.28]), -4, -10, "end") + lab("阿蘇", proj([131.06, 32.93]), 0, 22, "middle") + "</g></svg>";
  }

  /* ── 行程 ───────────────────────────── */
  function moveText(m) { return (m.mode === "walk" ? "步行" : "車程") + " " + m.min + " 分"; }
  function navBtn(name, small) {
    return '<a class="btn' + (small ? " btn--sm" : "") + '" href="' + mapUrl(JP[name] || name) + '" target="_blank" rel="noopener">' + icon("pin") + "地圖</a>";
  }

  function stopHtml(d, s, num) {
    var base = s.kind === "start" || s.kind === "hotel", transfer = s.kind === "transfer";
    var move = s.move ? '<span class="stop__move num">' + icon(s.move.mode === "walk" ? "walk" : "car") + moveText(s.move) + "</span>" : '<span class="stop__move"></span>';
    var role = s.kind === "start" ? "出發" : s.kind === "hotel" ? "今晚住宿" : transfer ? (s.note || "") : "";
    var media = s.img ? '<span class="stop__img"><img src="images/' + s.img + '.jpg" alt="" loading="lazy" width="56" height="56">' + (num ? '<b class="stop__n">' + num + "</b>" : "") + "</span>"
      : '<span class="stop__img stop__img--icon">' + icon(base ? "bed" : transfer ? "plane" : "pin") + (num ? '<b class="stop__n">' + num + "</b>" : "") + "</span>";
    var head = media + '<span class="stop__title"><span class="stop__name">' + esc(s.name) + "</span>" + (role ? '<span class="stop__role">' + esc(role) + "</span>" : "") + "</span>" + move;
    if (!s.text) {
      var acts = s.kind === "start" || s.kind === "hotel" ? "" : navBtn(s.name, true);
      return '<li class="stop' + (base ? " stop--base" : "") + '"><div class="stop__head">' + head + "</div>" + (acts ? '<div class="actions actions--stop">' + acts + "</div>" : "") + "</li>";
    }
    return '<li class="stop"><details><summary class="stop__head">' + head + icon("chev", "chev") + "</summary>" +
      '<div class="stop__detail">' + detailHtml(s) + "</div></details></li>";
  }

  function detailHtml(s) {
    var out = "";
    if (s.img && s.img2) out += '<div class="pair"><img src="images/' + s.img + '.jpg" alt="' + esc(s.name) + '" loading="lazy"><img src="images/' + s.img2 + '.jpg" alt="別府空中纜車" loading="lazy"></div>';
    else if (s.img) out += '<figure class="photo"><img src="images/' + s.img + '.jpg" alt="' + esc(s.name) + '" loading="lazy"></figure>';
    out += s.text.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    if (s.extra) out += '<h4 class="h-sub">' + esc(s.extra.title) + "</h4><p>" + esc(s.extra.text) + "</p>";
    if (s.table) out += '<table class="tt"><caption>' + esc(s.table.title) + "</caption><thead><tr>" + s.table.head.map(function (h) { return '<th scope="col">' + h + "</th>"; }).join("") +
      "</tr></thead><tbody>" + s.table.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
    if (s.subs) out += '<ol class="subs">' + s.subs.map(function (x, i) {
      return '<li><img src="images/' + x.img + '.jpg" alt="' + esc(x.name) + '" loading="lazy" width="88" height="66"><h4><b>' + (i + 1) + "</b>" + esc(x.name) + "</h4><p>" + esc(x.text) + '</p><div class="subs__act">' + navBtn(x.name, true) + "</div></li>";
    }).join("") + "</ol>";
    out += '<div class="actions">' + navBtn(s.name) + "</div>";
    return out;
  }

  function renderTrip() {
    var strip = '<div class="days" role="tablist" aria-label="選擇日期">' + T.days.map(function (d, i) {
      var c = DAYC[i];
      return '<button class="days__btn' + (d.date === TODAY ? " is-today" : "") + '" role="tab" id="tab-d' + d.n + '" aria-controls="dayview" aria-selected="' + (d.n === state.day) + '" tabindex="' + (d.n === state.day ? 0 : -1) +
        '" data-day="' + d.n + '" style="--c:' + c.chip + ";--ci:" + c.ink + '"><span class="days__n">' + d.n + '</span><span class="days__d num">' + md(d.date) + '</span><span class="sr">（' + d.dow + "）" + esc(d.from + "到" + d.to) + "</span></button>";
    }).join("") + "</div>";
    $("#view-trip").innerHTML = strip + '<div id="dayview" role="tabpanel"></div>';
    renderDay();
  }

  function renderDay() {
    var d = T.days[state.day - 1], c = DAYC[state.day - 1];
    var drive = 0, walk = 0;
    d.stops.forEach(function (s) { if (s.move) { if (s.move.mode === "walk") walk += s.move.min; else drive += s.move.min; } });
    var sights = d.stops.filter(function (s) { return !s.kind; }).length;
    var dur = drive >= 60 ? Math.floor(drive / 60) + " 小時" + (drive % 60 ? " " + (drive % 60) + " 分" : "") : drive + " 分";
    var head = '<div class="dayhead"><div class="dayhead__text">' +
      '<h2 class="dayhead__route">' + esc(d.from) + '<span class="arr" aria-label="到">→</span>' + esc(d.via || d.to) + "</h2>" +
      '<p class="dayhead__meta num">' + md(d.date) + "（" + d.dow + "）· " + sights + " 個景點 · 車程約 " + dur + (walk ? " · 步行約 " + walk + " 分" : "") + "</p>" +
      '<p class="dayhead__chips"><span class="chip">Day ' + d.n + " · " + c.name + "</span>" + (d.via ? '<span class="chip chip--quiet">' + esc(d.to) + " 住宿</span>" : "") + "</p></div>" +
      miniMap(d) + "</div>";

    var num = 0;
    var items = d.stops.map(function (s) { if (!s.kind) num++; return stopHtml(d, s, s.kind ? 0 : num); }).join("");

    var aside = "";
    if (d.hotel) aside += lodgeBlock(d.hotel, { desc: false });
    if (d.n === 1 || d.n === 8) aside += '<section class="aside"><h3 class="h-sub">今日航班</h3>' + flightHtml(T.flights[d.n === 1 ? 0 : 1]) + "</section>";
    if (d.intro) aside += '<section class="aside"><h3 class="h-sub">' + esc(d.intro.title) + "</h3>" + d.intro.text.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section>";
    if (d.reading) aside += '<section class="aside"><h3 class="h-sub">' + esc(d.reading.title) + "</h3><p>" + esc(d.reading.text[0]) + "</p>" +
      '<details class="more"><summary>繼續閱讀' + icon("chev", "chev") + "</summary>" + d.reading.text.slice(1).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</details></section>";

    var dv = $("#dayview");
    dv.setAttribute("aria-labelledby", "tab-d" + d.n);
    dv.innerHTML = head + '<div class="daygrid"><ol class="stops" aria-label="Day ' + d.n + ' 景點">' + items + '</ol><div class="daygrid__aside">' + aside + "</div></div>";
    applyDayColor();
    setGuide();
  }

  function selectDay(n, focus) {
    if (n < 1 || n > T.days.length) return;
    state.day = n;
    document.querySelectorAll(".days__btn").forEach(function (b) {
      var on = +b.getAttribute("data-day") === n;
      b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    renderDay();
    try { history.replaceState(null, "", "#trip/day" + n); } catch (e) {}
  }

  /* ── 交通 ───────────────────────────── */
  function flightHtml(f) {
    var a = f.dep.split(":"), b = f.arr.split(":");
    var m = (+b[0] * 60 + +b[1]) - (+a[0] * 60 + +a[1]) + (f.fromCode === "KHH" ? -60 : 60);
    return '<article class="flight"><header class="flight__head"><span class="num">' + f.label + " · " + esc(f.airline) + '</span><b class="num">' + f.no + "</b></header>" +
      '<div class="flight__leg"><div class="flight__pt"><span class="flight__code">' + f.fromCode + '</span><span class="flight__time num">' + f.dep + '</span><span class="flight__city">' + esc(f.from) + "</span></div>" +
      '<div class="flight__mid">' + icon("plane") + '<span class="num">' + Math.floor(m / 60) + " 小時 " + (m % 60 ? (m % 60) + " 分" : "") + "</span></div>" +
      '<div class="flight__pt flight__pt--end"><span class="flight__code">' + f.toCode + '</span><span class="flight__time num">' + f.arr + '</span><span class="flight__city">' + esc(f.to) + "</span></div></div>" +
      '<p class="flight__note">皆為當地時間，日本比台灣快 1 小時。</p></article>';
  }
  function renderTransport() {
    var r = T.rental;
    $("#view-transport").innerHTML =
      '<h2 class="h-sec">航班</h2><div class="flights">' + T.flights.map(flightHtml).join("") + "</div>" +
      '<h2 class="h-sec">租車</h2><div class="panel">' +
      facts([["租車公司", val(r.company)], ["預約編號", val(r.bookingNo)], ["取車地點", val(r.pickupPlace)], ["取車時間", val(r.pickupTime)],
        ["還車地點", val(r.returnPlace)], ["還車時間", val(r.returnTime)], ["車型", val(r.car)], ["保險", val(r.insurance)],
        ["ETC", val(r.etc)], ["金額", val(r.price)], ["聯絡電話", r.phone ? '<a href="tel:' + tel(r.phone) + '">' + esc(r.phone) + "</a>" : val("")], ["備註", val(r.note)]], "facts--grid") +
      '<p class="hint">租車資料尚未填入，補上後會顯示在這裡。</p></div>';
  }

  /* ── 住宿 ───────────────────────────── */
  function renderStay() {
    $("#view-stay").innerHTML = '<h2 class="h-sec">住宿</h2><div class="stays">' +
      Object.keys(T.hotels).map(function (k) { return lodgeBlock(k, { desc: true, openBooking: true }); }).join("") + "</div>";
  }

  /* ── 資訊 ───────────────────────────── */
  var CK = "kyushu2026-checklist";
  function loadChecks() { try { return JSON.parse(localStorage.getItem(CK)) || {}; } catch (e) { return {}; } }
  function saveChecks(o) { try { localStorage.setItem(CK, JSON.stringify(o)); } catch (e) {} }

  function renderInfo() {
    var checks = loadChecks(), total = 0;
    var info = T.info.map(function (b) {
      var extra = b.title === "氣候" ? '<p class="temp"><b class="num">9–16<small>°C</small></b><span>11 月平均氣溫，早晚溫差大</span></p>' : "";
      return '<section class="infobox"><h3>' + esc(b.title) + "</h3>" + extra + (b.text || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        (b.list ? facts(b.list.map(function (r) { return [esc(r[0]), esc(r[1])]; })) : "") + "</section>";
    }).join("");
    var food = T.food.map(function (a, i) {
      return '<section class="food__col" style="--c:' + DAYC[[1, 3, 5, 7][i]].chip + '"><h3 class="food__area">' + esc(a.area) + "</h3><ul>" +
        a.items.map(function (it) { return "<li><b>" + esc(it[0]) + "</b><span>" + esc(it[1]) + "</span></li>"; }).join("") + "</ul></section>";
    }).join("");
    var groups = T.checklist.map(function (g, gi) {
      return '<section class="check__group"><h3>' + esc(g.group) + '</h3><ul class="check__list">' + g.items.map(function (it, ii) {
        total++; var id = "c" + gi + "-" + ii;
        return '<li><label><input type="checkbox" data-ck="' + id + '"' + (checks[id] ? " checked" : "") + "><span>" + esc(it) + "</span></label></li>";
      }).join("") + "</ul></section>";
    }).join("");
    $("#view-info").innerHTML =
      '<h2 class="h-sec">旅遊須知</h2><div class="infogrid">' + info + "</div>" +
      '<h2 class="h-sec">當地美食</h2><div class="food">' + food + "</div>" +
      '<h2 class="h-sec">行前清單</h2><div class="check"><p class="check__bar"><span id="ck-count" class="num"></span><span class="check__meter"><i id="ck-meter"></i></span></p>' +
      '<div class="check__groups">' + groups + '</div><div class="check__foot"><button class="btn btn--sm btn--quiet" type="button" id="ck-reset">清除全部勾選</button></div></div>';
    var update = function () {
      var n = document.querySelectorAll("[data-ck]:checked").length;
      $("#ck-count").textContent = "已準備 " + n + " / " + total;
      $("#ck-meter").style.transform = "scaleX(" + (n / total) + ")";
    };
    update();
    $("#view-info").addEventListener("change", function (e) {
      var k = e.target.getAttribute("data-ck"); if (!k) return;
      var o = loadChecks(); if (e.target.checked) o[k] = 1; else delete o[k]; saveChecks(o); update();
    });
    $("#ck-reset").addEventListener("click", function () {
      if (!confirm("確定要清除所有勾選嗎？")) return;
      saveChecks({}); document.querySelectorAll("[data-ck]").forEach(function (c) { c.checked = false; }); update();
    });
  }

  /* ── 分頁切換 ───────────────────────── */
  function route() {
    var parts = location.hash.replace("#", "").split("/");
    var tab = ["trip", "transport", "stay", "info"].indexOf(parts[0]) >= 0 ? parts[0] : "trip";
    state.tab = tab;
    document.querySelectorAll(".view").forEach(function (v) { v.hidden = v.getAttribute("data-view") !== tab; });
    document.querySelectorAll(".tabs__item").forEach(function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (tab === "trip" && /^day[1-8]$/.test(parts[1] || "") && +parts[1].slice(3) !== state.day) selectDay(+parts[1].slice(3));
    setGuide();
  }

  renderTrip(); renderTransport(); renderStay(); renderInfo();

  $("#view-trip").addEventListener("click", function (e) {
    var b = e.target.closest(".days__btn"); if (b) selectDay(+b.getAttribute("data-day"));
  });
  $("#view-trip").addEventListener("keydown", function (e) {
    if (!e.target.classList.contains("days__btn")) return;
    var n = state.day;
    if (e.key === "ArrowRight") n++; else if (e.key === "ArrowLeft") n--; else if (e.key === "Home") n = 1; else if (e.key === "End") n = 8; else return;
    e.preventDefault(); selectDay(Math.max(1, Math.min(8, n)), true);
  });
  document.querySelectorAll(".tabs__item").forEach(function (a) { a.addEventListener("click", function () { window.scrollTo(0, 0); }); });
  window.addEventListener("hashchange", route);
  route();

  /* ── 離線 ───────────────────────────── */
  function net() { $("#net").hidden = navigator.onLine; }
  window.addEventListener("online", net); window.addEventListener("offline", net); net();
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("sw.js").then(function () {
      navigator.serviceWorker.ready.then(function () { $("#sw-status").textContent = "已儲存到這支手機，沒有網路也能開啟。"; });
    }).catch(function () {});
  }
})();
