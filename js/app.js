(function () {
  "use strict";
  var T = window.TRIP;

  /* 地圖搜尋用的日文名稱 */
  var JP = {
    "熊本機場": "阿蘇くまもと空港", "Budget 租車 熊本機場店": "バジェット・レンタカー 熊本空港店", "草千里之濱": "草千里ヶ浜", "阿蘇山本堂 西巖殿寺奧之院": "阿蘇山 西巌殿寺 奥之院",
    "阿蘇中岳火山口": "阿蘇山 中岳火口", "白川水源": "白川水源", "高千穗神社": "高千穂神社", "真名井瀑布": "真名井の滝",
    "高千穗峽": "高千穂峡", "天岩戶神社": "天岩戸神社", "天安河原": "天安河原", "湯之坪街道": "湯の坪街道",
    "湯布院花卉村": "湯布院フローラルヴィレッジ", "湯布院昭和館": "湯布院昭和館", "金鱗湖": "金鱗湖",
    "宇奈岐日女神社": "宇奈岐日女神社", "狹霧台": "狭霧台", "鶴見岳・別府空中纜車": "別府ロープウェイ",
    "竹瓦溫泉": "竹瓦温泉", "別府地獄溫泉巡禮": "別府地獄めぐり 海地獄", "地獄溫泉博物館": "地獄温泉ミュージアム",
    "別府塔": "別府タワー", "九重夢大吊橋": "九重夢大吊橋", "阿蘇神社": "阿蘇神社", "阿蘇牛奶工廠 ASO MILK FACTORY": "ASO MILK FACTORY",
    "熊本城": "熊本城", "櫻之馬場城彩苑": "桜の馬場 城彩苑", "熊本熊廣場": "くまモンスクエア", "上通町・下通町": "上通 熊本",
    "水前寺成趣園": "水前寺成趣園", "海地獄": "海地獄", "鬼石坊主地獄": "鬼石坊主地獄", "灶地獄": "かまど地獄",
    "鬼山地獄": "鬼山地獄", "白池地獄": "白池地獄", "血池地獄": "血の池地獄", "龍卷地獄": "龍巻地獄"
  };

  /* 小地圖用的概略經緯度 [經度, 緯度] */
  var GEO = {
    "熊本機場": [130.855, 32.837], "Budget 租車 熊本機場店": [130.862, 32.839], "草千里之濱": [131.055, 32.885], "阿蘇山本堂 西巖殿寺奧之院": [131.07, 32.885],
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
      html = "<b>" + { transport: "交通", stay: "住宿", info: "資訊", ledger: "記帳" }[state.tab] + "</b>" + { transport: "航班與租車", stay: "四間飯店・七晚", info: "氣候、美食與行前清單", ledger: "四人分帳・日圓與台幣" }[state.tab];
    }
    $("#guide").innerHTML = html;
  }

  /* ── 待填欄位 ───────────────────────── */
  function val(v) { return v ? esc(v) : '<span class="todo">待填</span>'; }
  function facts(rows, cls) {
    return '<dl class="facts' + (cls ? " " + cls : "") + '">' + rows.map(function (r) { return '<div class="facts__row' + (r[2] ? " " + r[2] : "") + '"><dt>' + r[0] + "</dt><dd>" + r[1] + "</dd></div>"; }).join("") + "</dl>";
  }

  /* ── 備註：可在網頁上直接打字，存在這台裝置的瀏覽器 ── */
  var NK = "kyushu2026-notes";
  function loadNotes() { try { return JSON.parse(localStorage.getItem(NK)) || {}; } catch (e) { return {}; } }
  function saveNote(k, v) { try { var o = loadNotes(); o[k] = v; localStorage.setItem(NK, JSON.stringify(o)); } catch (e) {} }
  function noteRow(k, fallback) {
    var o = loadNotes(), v = Object.prototype.hasOwnProperty.call(o, k) ? o[k] : (fallback || "");
    return ["備註", '<textarea class="note" data-note="' + k + '" rows="2" placeholder="點這裡輸入備註" aria-label="備註">' + esc(v) + "</textarea>" +
      '<span class="note__saved" aria-live="polite"></span>', "facts__row--wide"];
  }
  var savedTimer;
  document.addEventListener("input", function (e) {
    var k = e.target.getAttribute && e.target.getAttribute("data-note"); if (!k) return;
    saveNote(k, e.target.value);
    /* 同一間飯店在行程頁和住宿頁各有一份，一起同步 */
    document.querySelectorAll('[data-note="' + k + '"]').forEach(function (t) { if (t !== e.target) t.value = e.target.value; });
    /* 打完字安靜地確認一聲：已經存好了 */
    var tag = e.target.nextElementSibling;
    if (tag) {
      tag.textContent = "已記在這支手機"; tag.classList.add("is-on");
      clearTimeout(savedTimer); savedTimer = setTimeout(function () { tag.classList.remove("is-on"); }, 1800);
    }
  });

  function bookingFacts(k, b) {
    return facts([["訂房編號", val(b.no)], ["房型", val(b.room)], ["金額", b.price ? '<span class="num">' + esc(b.price) + "</span>" : val("")], ["付款", val(b.paid)],
      noteRow("hotel-" + k, b.note)], "facts--grid");
  }
  /* 全程 7 晚排成一條色階，這間飯店住的那幾晚填上當天的日色 */
  function nightsStrip(h) {
    return '<span class="nights" aria-hidden="true">' + T.days.slice(0, -1).map(function (d, i) {
      return "<i" + (h.nights.indexOf(d.date) > -1 ? ' style="--c:' + DAYC[i].chip + '"' : "") + "></i>";
    }).join("") + "</span>";
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
      '<p class="lodge__nights num">' + nightsLabel(h) + (h.nameAlt ? " · " + esc(h.nameAlt) : "") + "</p>" + nightsStrip(h) + "</div></header>" +
      '<div class="lodge__body">' +
      facts([["地址", esc(h.address)], ["電話", '<a class="num" href="tel:' + tel(h.phone) + '">' + esc(h.phone) + "</a>"]]
        .concat(T.mapcodes && T.mapcodes[h.name] ? [["MAPCODE", '<span class="num mc__v">' + esc(T.mapcodes[h.name]) + "</span>"]] : [])) +
      '<div class="actions"><a class="btn btn--day" href="' + mapUrl(h.name + " " + h.address) + '" target="_blank" rel="noopener">' + icon("nav") + "導航</a>" +
      '<a class="btn" href="tel:' + tel(h.phone) + '">' + icon("phone") + "撥打電話</a></div>" +
      (opts && opts.desc ? '<p class="lodge__desc">' + esc(h.desc) + "</p>" : "") +
      '<details class="slot"' + (opts && opts.openBooking ? " open" : "") + '><summary>' + icon("ticket") + "訂房資訊" + icon("chev", "chev") + "</summary>" + bookingFacts(key, h.booking) + "</details>" +
      "</div></article>";
  }

  /* ── 九州小地圖 ─────────────────────── */
  var KYUSHU = [[130.88,33.95],[131.05,33.85],[131.25,33.62],[131.68,33.65],[131.75,33.45],[131.55,33.27],[131.85,33.1],[131.95,32.85],[131.75,32.5],[131.6,32.1],[131.45,31.6],[131.3,31.4],[131.1,31.35],[130.95,31.05],[130.7,31.0],[130.68,31.25],[130.45,31.25],[130.2,31.3],[130.2,31.6],[130.3,31.9],[130.15,32.15],[130.45,32.4],[130.6,32.65],[130.55,32.8],[130.35,32.85],[130.2,32.75],[129.95,32.75],[129.75,32.6],[129.7,33.0],[129.85,33.2],[129.6,33.3],[129.85,33.5],[130.05,33.5],[130.3,33.6],[130.45,33.75],[130.7,33.9]];
  function proj(p) { return [((p[0] - 129.55) * 60).toFixed(1), ((34.02 - p[1]) * 71).toFixed(1)]; }
  function pts(names) { return names.map(function (n) { return GEO[n]; }).filter(Boolean).map(proj); }
  function line(ps) { return ps.map(function (p) { return p.join(","); }).join(" "); }
  /* 全程依日期分段，其他天淡淡帶過；選中那天加粗成白色實線 */
  function miniMap(d) {
    var segs = T.days.map(function (x) {
      var ps = pts(x.stops.map(function (s) { return s.name; }));
      return '<polyline class="minimap__seg' + (x.n === d.n ? " is-on" : "") + '" points="' + line(ps) + '"/>';
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

  /* 車用導航 MAPCODE：只有自駕的 Day 1–6 顯示 */
  function mapcode(name, d) {
    var c = T.mapcodes && T.mapcodes[name];
    return c && (!d || d.n <= 6) ? '<span class="mc"><span class="mc__k">MAPCODE</span><span class="mc__v num">' + esc(c) + "</span></span>" : "";
  }

  function stopHtml(d, s, num) {
    var base = s.kind === "start" || s.kind === "hotel", transfer = s.kind === "transfer", rental = s.kind === "rental";
    /* 抵達這一站前的移動，掛在上一站與這一站的交界，像路線上的一段 */
    var leg = s.move ? '<span class="stop__leg num">' + icon(s.move.mode === "walk" ? "walk" : "car") + moveText(s.move) + "</span>" : "";
    var role = s.kind === "start" ? "出發" : s.kind === "hotel" ? "今晚住宿" : transfer || rental ? (s.note || "") : "";
    var media = s.img ? '<span class="stop__img"><img src="images/' + s.img + '.jpg" alt="" loading="lazy" width="56" height="56">' + (num ? '<b class="stop__n">' + num + "</b>" : "") + "</span>"
      : '<span class="stop__img stop__img--icon">' + icon(base ? "bed" : transfer ? "plane" : rental ? "car" : "pin") + (num ? '<b class="stop__n">' + num + "</b>" : "") + "</span>";
    var head = media + '<span class="stop__title"><span class="stop__name">' + esc(s.name) + "</span>" + (role ? '<span class="stop__role">' + esc(role) + "</span>" : "") + (s.kind === "start" ? "" : mapcode(s.name, d)) + "</span>";
    if (!s.text) {
      var acts = s.kind === "start" || s.kind === "hotel" ? "" : navBtn(s.name, true);
      return '<li class="stop' + (leg ? " stop--leg" : "") + '">' + leg + '<div class="stop__head">' + head + "</div>" + (acts ? '<div class="actions actions--stop">' + acts + "</div>" : "") + "</li>";
    }
    return '<li class="stop' + (leg ? " stop--leg" : "") + '">' + leg + '<details><summary class="stop__head">' + head + icon("chev", "chev") + "</summary>" +
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
      return '<li><img src="images/' + x.img + '.jpg" alt="' + esc(x.name) + '" loading="lazy" width="88" height="66"><div><h4><b>' + (i + 1) + "</b>" + esc(x.name) + "</h4>" + mapcode(x.name) + "</div><p>" + esc(x.text) + '</p><div class="subs__act">' + navBtn(x.name, true) + "</div></li>";
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
    var d = T.days[state.day - 1];
    var head = '<div class="dayhead"><div class="dayhead__text">' +
      '<h2 class="dayhead__route"><span class="pl">' + esc(d.from) + '<span class="arr" aria-label="到">→</span></span><span class="pl">' + esc(d.via || d.to) + "</span></h2>" +
      '<p class="dayhead__meta num">' + md(d.date) + "（" + d.dow + "）</p></div>" +
      miniMap(d) + "</div>";

    var num = 0;
    var items = d.stops.map(function (s) { if (!s.kind) num++; return stopHtml(d, s, s.kind ? 0 : num); }).join("");

    var aside = "";
    if (d.hotel) aside += lodgeBlock(d.hotel, { desc: false });
    if (d.n === 1 || d.n === 8) aside += '<section class="aside"><h3 class="h-sub">今日航班</h3>' + flightHtml(T.flights[d.n === 1 ? 0 : 1]) + "</section>";
    aside += daySpend(d);
    if (d.intro) aside += '<section class="aside"><h3 class="h-sub">' + esc(d.intro.title) + "</h3>" + d.intro.text.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</section>";
    if (d.reading) aside += '<section class="aside"><h3 class="h-sub">' + esc(d.reading.title) + "</h3><p>" + esc(d.reading.text[0]) + "</p>" +
      '<details class="more"><summary>繼續閱讀' + icon("chev", "chev") + "</summary>" + d.reading.text.slice(1).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</details></section>";

    var dv = $("#dayview");
    dv.setAttribute("aria-labelledby", "tab-d" + d.n);
    dv.innerHTML = head + '<div class="daygrid"><div class="daygrid__main">' + spendBar(d) + '<ol class="stops" aria-label="Day ' + d.n + ' 景點">' + items + '</ol></div><div class="daygrid__aside">' + aside + "</div></div>";
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
  /* 租車卡：跟航班卡同一種「起點 → 終點」版型，取車在左、還車在右，不會看錯 */
  function rentEnd(label, when, place, end) {
    var m = /^(.*?)\s*(\d{1,2}:\d{2})$/.exec(when || "");
    return '<div class="flight__pt' + (end ? " flight__pt--end" : "") + '"><span class="flight__code">' + label + "</span>" +
      (m ? '<span class="flight__time num">' + m[2] + '</span><span class="rent__date num">' + esc(m[1]) + "</span>"
        : '<span class="rent__todo">' + val(when) + "</span>") +
      '<span class="flight__city">' + val(place) + "</span></div>";
  }
  function renderTransport() {
    var r = T.rental;
    $("#view-transport").innerHTML =
      '<h2 class="h-sec">航班</h2><div class="flights">' + T.flights.map(flightHtml).join("") + "</div>" +
      '<h2 class="h-sec">租車</h2><article class="flight rent"><header class="flight__head"><b>' + val(r.company) + "</b>" +
      (r.phone ? '<a class="rent__tel num" href="tel:' + tel(r.phone) + '">' + icon("phone") + esc(r.phone) + "</a>" : "") + "</header>" +
      '<div class="flight__leg">' + rentEnd("取車", r.pickupTime, r.pickupPlace) +
      '<div class="flight__mid">' + icon("car") + "</div>" + rentEnd("還車", r.returnTime, r.returnPlace, true) + "</div>" +
      '<div class="rent__body">' +
      facts([["預約編號", val(r.bookingNo)], ["車型", val(r.car)], ["保險", val(r.insurance)], ["ETC", val(r.etc)],
        ["金額", r.price ? '<span class="num">' + esc(r.price) + "</span>" : val("")], noteRow("rental", r.note)], "facts--grid") +
      '<p class="hint">標示「待填」的欄位，補上後會顯示在這裡。</p></div></article>';
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
      var body = (b.text || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        (b.list ? facts(b.list.map(function (r) { return [esc(r[0]), esc(r[1])]; })) : "");
      /* 氣候是出發前最該看的一項：佔滿整列，溫度放大當主角，說明與穿著放旁邊 */
      if (extra) return '<section class="infobox infobox--lead"><div class="infobox__key"><h3>' + esc(b.title) + "</h3>" + extra + '</div><div class="infobox__body">' + body + "</div></section>";
      return '<section class="infobox"><h3>' + esc(b.title) + "</h3>" + body + "</section>";
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
      '<h2 class="h-sec">行前清單</h2><div class="check"><div class="check__bar"><span id="ck-count" class="check__count num" aria-live="polite"></span>' +
      /* 打包進度沿著和色色階走：由 Day 1 苔綠一格格推進到 Day 8 葡萄鼠 */
      '<span class="check__meter" aria-hidden="true">' + DAYC.map(function (c, i) { return '<i style="--c:' + c.chip + ";--i:" + i + '"><b></b></i>'; }).join("") + "</span></div>" +
      '<p class="check__done" id="ck-done" hidden>' + icon("plane") + '<span class="num">' + T.flights[0].label + " " + T.flights[0].dep + " " + esc(T.flights[0].from) + "機場見，<span class=\"nw\">" + esc(T.flights[0].airline) + " " + T.flights[0].no + "</span></span></p>" +
      '<div class="check__groups">' + groups + '</div><div class="check__foot"><button class="btn btn--sm btn--quiet" type="button" id="ck-reset">清除全部勾選</button></div></div>';
    var segs = document.querySelectorAll(".check__meter b");
    var update = function () {
      var n = document.querySelectorAll("[data-ck]:checked").length, done = n === total;
      $("#ck-count").innerHTML = done ? icon("check") + "全部準備好了" : "已準備 " + n + " / " + total;
      $("#ck-count").classList.toggle("is-done", done);
      $("#ck-done").hidden = !done;
      var f = n / total * segs.length;
      segs.forEach(function (b, i) { b.style.transform = "scaleX(" + Math.max(0, Math.min(1, f - i)) + ")"; });
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

  /* ── 記帳：四人分帳 ─────────────────────
     每個人記的帳只存在自己手機，用「同步碼」互傳合併。
     帳本依記帳人分開存，每人只改自己那一本；合併時整本以較新的為準，不會互相蓋掉。 */
  var LK = "kyushu2026-ledger";
  var CATS = ["餐飲", "交通", "住宿", "門票", "購物", "其他"];
  function loadLedger() {
    var o; try { o = JSON.parse(localStorage.getItem(LK)); } catch (e) {}
    o = o || {}; o.cfg = o.cfg || {}; o.books = o.books || {};
    if (!o.cfg.names) { o.cfg.names = ["旅伴 1", "旅伴 2", "旅伴 3", "旅伴 4"]; o.cfg.namesAt = 0; }
    return o;
  }
  var L = loadLedger();
  function saveLedger() { try { localStorage.setItem(LK, JSON.stringify(L)); } catch (e) {} }
  function ledgerReady() { return L.cfg.me != null && L.cfg.rate > 0; }
  function everyone() { return L.cfg.names.map(function (_, i) { return i; }); }
  function allItems() {
    var out = [];
    Object.keys(L.books).forEach(function (k) {
      (L.books[k].items || []).forEach(function (it) { var x = { owner: +k }; for (var p in it) x[p] = it[p]; out.push(x); });
    });
    return out.sort(function (a, b) { return a.day - b.day || a.t - b.t; });
  }
  function jpy(it) { return it.cur === "TWD" ? it.amt / L.cfg.rate : it.amt; }
  function sumJ(items) { return items.reduce(function (s, it) { return s + jpy(it); }, 0); }
  function fmtJ(n) { return "¥" + Math.round(n).toLocaleString("en-US"); }
  function fmtT(n) { return "NT$" + Math.round(n).toLocaleString("en-US"); }
  function fmtAmt(it) { return it.cur === "TWD" ? fmtT(it.amt) : fmtJ(it.amt); }
  function dayName(n) { return n ? "Day " + n + " · " + md(T.days[n - 1].date) : "行前"; }
  function defaultDay() { return todayDay ? todayDay.n : TODAY < T.start ? 0 : 8; }

  /* 每人付了多少、該分攤多少；正數是要收回，負數是要付出 */
  function balances(items) {
    var paid = everyone().map(function () { return 0; }), owe = paid.slice();
    items.forEach(function (it) {
      var j = jpy(it), s = it.split.length ? it.split : everyone();
      paid[it.by] += j;
      s.forEach(function (p) { owe[p] += j / s.length; });
    });
    return { paid: paid, owe: owe, bal: paid.map(function (p, i) { return p - owe[i]; }) };
  }
  /* 欠最多的先付給該收最多的，轉帳次數最少 */
  function transfers(bal) {
    var d = [], c = [], out = [];
    bal.forEach(function (b, i) { if (b < -0.5) d.push({ i: i, v: -b }); else if (b > 0.5) c.push({ i: i, v: b }); });
    var big = function (a, b) { return b.v - a.v; }; d.sort(big); c.sort(big);
    while (d.length && c.length) {
      var v = Math.min(d[0].v, c[0].v);
      out.push([d[0].i, c[0].i, v]);
      d[0].v -= v; c[0].v -= v;
      if (d[0].v < 0.5) d.shift();
      if (c[0].v < 0.5) c.shift();
    }
    return out;
  }

  /* 訂房、租車手冊裡已有金額的，列成行前建議，點一下帶進表單 */
  function presets() {
    var num = function (s) { var m = /[\d,]+/.exec(s || ""); return m ? +m[0].replace(/,/g, "") : 0; };
    var list = [];
    if (num(T.rental.price)) list.push({ note: T.rental.company, cat: "交通", amt: num(T.rental.price) });
    Object.keys(T.hotels).forEach(function (k) {
      var h = T.hotels[k], a = num(h.booking.price);
      if (a) list.push({ note: h.name, cat: "住宿", amt: a });
    });
    return list;
  }

  /* 同步碼：整份帳本壓縮後轉成文字，可直接貼到 LINE 群組 */
  function zhErr(m) { var e = new Error(m); e.zh = true; return e; }
  function toB64(u) { var s = ""; for (var i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); }
  function fromB64(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function pipe(u, stream) { return new Response(new Blob([u]).stream().pipeThrough(stream)).arrayBuffer().then(function (b) { return new Uint8Array(b); }); }
  function encodeSync() {
    var u = new TextEncoder().encode(JSON.stringify({ v: 1, names: L.cfg.names, namesAt: L.cfg.namesAt, rate: L.cfg.rate, rateAt: L.cfg.rateAt, books: L.books }));
    if (!window.CompressionStream) return Promise.resolve("KY26." + toB64(u));
    return pipe(u, new CompressionStream("deflate-raw")).then(function (z) { return "KY26z." + toB64(z); });
  }
  function decodeSync(text) {
    return Promise.resolve().then(function () {
      var m = /KY26(z?)\.([A-Za-z0-9+\/=]+)/.exec(text.replace(/\s+/g, ""));
      if (!m) throw zhErr("找不到同步碼，請確認有完整複製");
      var u = fromB64(m[2]);
      if (!m[1]) return u;
      if (!window.DecompressionStream) throw zhErr("這支手機的瀏覽器太舊，讀不了同步碼，請先更新系統");
      return pipe(u, new DecompressionStream("deflate-raw"));
    }).then(function (b) { return JSON.parse(new TextDecoder().decode(b)); });
  }
  function mergeSync(d) {
    if (!d || d.v !== 1 || !d.books) throw zhErr("同步碼格式不對");
    var got = 0;
    if (Array.isArray(d.names) && d.names.length === L.cfg.names.length && (+d.namesAt || 0) > (L.cfg.namesAt || 0)) {
      L.cfg.names = d.names.map(function (x) { return String(x).slice(0, 8); }); L.cfg.namesAt = +d.namesAt;
    }
    if (+d.rate > 0 && (!(L.cfg.rate > 0) || (d.rateAt || 0) > (L.cfg.rateAt || 0))) { L.cfg.rate = +d.rate; L.cfg.rateAt = +d.rateAt || 0; }
    var n = L.cfg.names.length, ok = function (p) { return p >= 0 && p < n; };
    Object.keys(d.books).forEach(function (k) {
      var b = d.books[k], had = L.books[k];
      if (!ok(+k) || !b || !Array.isArray(b.items) || (had && !(+b.at > had.at))) return;
      /* 別人手機來的資料，數字欄位一律轉型、範圍不對的丟掉 */
      L.books[k] = { at: +b.at, items: b.items.map(function (it) {
        return { id: String(it.id), t: +it.t || 0, day: +it.day, amt: +it.amt, cur: it.cur === "TWD" ? "TWD" : "JPY", cat: String(it.cat || "其他"), note: String(it.note || ""),
          by: +it.by, split: (Array.isArray(it.split) ? it.split : []).map(Number).filter(ok) };
      }).filter(function (it) { return it.amt > 0 && it.day >= 0 && it.day <= T.days.length && ok(it.by); }) };
      got++;
    });
    saveLedger();
    return got;
  }

  function chip(type, name, value, label, on) {
    return '<label class="chip"><input type="' + type + '" name="' + name + '" value="' + value + '"' + (on ? " checked" : "") + "><span>" + label + "</span></label>";
  }
  function cfgForm(submit) {
    var c = L.cfg;
    return '<form class="cfg" id="ld-cfg" novalidate><fieldset class="chips cfg__names"><legend>四位旅伴，並選出哪一位是你</legend>' +
      c.names.map(function (nm, i) {
        return '<div class="cfg__row"><input class="fld__in" name="nm' + i + '" value="' + (c.namesAt ? esc(nm) : "") + '" placeholder="旅伴 ' + (i + 1) + '" maxlength="8" aria-label="旅伴 ' + (i + 1) + ' 的名字">' +
          chip("radio", "me", i, "是我", c.me === i) + "</div>";
      }).join("") + "</fieldset>" +
      '<label class="fld"><span>匯率：1 日圓 = 多少台幣</span><input name="rate" inputmode="decimal" autocomplete="off" value="' + (c.rate || "") + '" placeholder="例如 0.21"></label>' +
      '<p class="hint">匯率全程固定用這個數字換算，同步時會一起帶給旅伴，所以只要一個人設定。</p>' +
      '<p class="ledf__err" id="ld-cfg-err" aria-live="polite"></p>' +
      '<div class="actions"><button class="btn btn--day" type="submit">' + submit + "</button></div></form>";
  }
  function syncBox() {
    return '<label class="fld"><span>貼上旅伴的同步碼</span><textarea class="note" id="ld-in" rows="3" placeholder="KY26…"></textarea></label>' +
      '<div class="actions"><button class="btn" type="button" data-act="import">合併</button></div>' +
      '<p class="ledmsg" id="ld-msg" aria-live="polite"></p>';
  }

  function renderLedger() {
    var v = $("#view-ledger");
    if (!ledgerReady()) {
      v.innerHTML = '<h2 class="h-sec">記帳</h2><section class="ledsum"><p class="ledsum__k">四人分帳，先設定一次</p>' + cfgForm("開始記帳") + "</section>" +
        '<h2 class="h-sec">已經有旅伴的同步碼？</h2><div class="ledsync"><p>貼上後名字和匯率會自動帶入，你只要選出哪一位是自己。</p>' + syncBox() + "</div>";
      return;
    }
    var n = L.cfg.names, me = L.cfg.me, rate = L.cfg.rate, items = allItems(), total = sumJ(items), b = balances(items), tx = transfers(b.bal);

    var sum = '<h2 class="h-sec">記帳</h2><section class="ledsum"><p class="ledsum__k">全團花費</p><p class="ledsum__v num">' + fmtJ(total) + "</p>" +
      '<p class="ledsum__t num">≈ ' + fmtT(total * rate) + "・匯率 1 日圓 = " + rate + " 台幣</p>" +
      '<div class="actions"><button class="btn btn--day" type="button" data-act="add">' + icon("plus") + "記一筆</button></div></section>";

    var bal = '<h2 class="h-sec">分帳</h2><div class="ledbal">' + n.map(function (nm, i) {
      var d = b.bal[i], st = d > 0.5 ? "要收 " + fmtT(d * rate) : d < -0.5 ? "要付 " + fmtT(-d * rate) : "打平";
      return '<div class="ledbal__row"><span class="ledbal__name">' + esc(nm) + (i === me ? "<small>我</small>" : "") + "</span>" +
        '<span class="ledbal__d num' + (d > 0.5 ? " is-get" : "") + '">' + st + "</span>" +
        '<span class="ledbal__sub num">付了 ' + fmtJ(b.paid[i]) + "・應分攤 " + fmtJ(b.owe[i]) + "</span></div>";
    }).join("") + "</div>" +
      (tx.length ? '<ol class="ledtx" aria-label="建議的轉帳">' + tx.map(function (t) {
        return "<li><b>" + esc(n[t[0]]) + '</b><span aria-label="付給">→</span><b>' + esc(n[t[1]]) + '</b><span class="num">' + fmtT(t[2] * rate) + "</span><small class=\"num\">" + fmtJ(t[2]) + "</small></li>";
      }).join("") + "</ol>" : '<p class="ledempty">目前大家打平，不用互相轉帳。</p>') +
      '<p class="hint">以台幣結算，四捨五入到整數；只算到已經同步進這支手機的帳。</p>';

    var pre = presets().filter(function (p) { return !items.some(function (it) { return it.note === p.note; }); });
    var days = [0].concat(T.days.map(function (d) { return d.n; })).map(function (dn) {
      var its = items.filter(function (it) { return it.day === dn; });
      var sug = dn === 0 ? pre : [];
      if (!its.length && !sug.length) return "";
      var rows = its.map(function (it) {
        var s = it.split.length && it.split.length < n.length ? it.split.map(function (p) { return esc(n[p]); }).join("、") + " 分" : n.length + " 人分";
        var meta = esc(n[it.by]) + " 付・" + s + (it.owner === me ? "" : "・" + esc(n[it.owner]) + " 記");
        var inner = '<span class="led__cat">' + esc(it.cat) + '</span><span class="led__main"><span class="led__note">' + esc(it.note || it.cat) + '</span><span class="led__meta">' + meta + "</span></span>" +
          '<span class="led__amt num">' + fmtAmt(it) + "</span>";
        return it.owner === me ? '<li><button class="led__item" type="button" data-edit="' + esc(it.id) + '" aria-label="修改：' + esc(it.note || it.cat) + " " + fmtAmt(it) + '">' + inner + "</button></li>"
          : '<li><div class="led__item">' + inner + "</div></li>";
      }).concat(sug.map(function (p) {
        return '<li><button class="led__item led__item--sug" type="button" data-pre="' + esc(p.note) + '"><span class="led__cat">' + p.cat + '</span><span class="led__main"><span class="led__note">' + esc(p.note) +
          '</span><span class="led__meta">手冊已有金額，點一下記入</span></span><span class="led__amt num">' + fmtJ(p.amt) + "</span></button></li>";
      })).join("");
      return '<section class="ledday" style="--c:' + (dn ? DAYC[dn - 1].chip : "var(--g-400)") + '"><h3 class="ledday__h">' + dayName(dn) +
        (its.length ? '<span class="num">' + fmtJ(sumJ(its)) + "</span>" : "") + '</h3><ul class="ledlist">' + rows + "</ul></section>";
    }).join("");
    var list = '<h2 class="h-sec">明細</h2>' + (items.length ? "" : '<p class="ledempty">還沒有任何一筆。自己記的帳點一下就能修改。</p>') + days;

    var who = '<ul class="ledwho">' + n.map(function (nm, i) {
      var bk = L.books[i];
      return "<li><b>" + esc(nm) + (i === me ? "（我）" : "") + "</b>" + (bk && bk.at ? '<span class="num">' + bk.items.length + " 筆・" +
        new Date(bk.at).toLocaleString("zh-TW", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false }) + "</span>" : "還沒同步進來") + "</li>";
    }).join("") + "</ul>";
    var sync = '<h2 class="h-sec">同步</h2><div class="ledsync"><p>每個人記的帳只存在自己的手機。把同步碼傳到群組，旅伴貼上就會合併；同步碼也會帶上你手上其他人的帳，所以只要有人轉傳，大家都會收到。</p>' + who +
      '<div class="actions"><button class="btn btn--day" type="button" data-act="share">' + icon("share") + "分享同步碼</button></div>" +
      '<textarea class="note" id="ld-out" rows="3" readonly hidden aria-label="同步碼"></textarea>' + syncBox() + "</div>" +
      '<details class="slot"><summary>' + icon("wallet") + "設定：名字、我是誰、匯率" + icon("chev", "chev") + "</summary>" + cfgForm("儲存設定") + "</details>";

    v.innerHTML = sum + bal + list + sync;
  }

  /* 記一筆／修改：從底部滑出的表單 */
  var dlg = document.createElement("dialog");
  dlg.className = "ledf"; dlg.setAttribute("aria-labelledby", "lf-title");
  document.body.appendChild(dlg);
  var editing = null;
  function openForm(it) {
    var n = L.cfg.names, f = it || {};
    editing = f.id ? f : null;
    var split = f.split && f.split.length ? f.split : everyone(), by = f.by != null ? f.by : L.cfg.me, day = f.day != null ? f.day : defaultDay();
    dlg.innerHTML = '<form class="ledf__form" id="lf" novalidate>' +
      '<header class="ledf__head"><h2 id="lf-title">' + (editing ? "修改這筆" : "記一筆") + '</h2><button class="ledf__x" type="button" data-act="close" aria-label="關閉">×</button></header>' +
      '<div class="ledf__amt"><input name="amt" inputmode="decimal" autocomplete="off" placeholder="0" aria-label="金額" value="' + (f.amt || "") + '">' +
      '<div class="chips" role="radiogroup" aria-label="幣別">' + chip("radio", "cur", "JPY", "日圓", f.cur !== "TWD") + chip("radio", "cur", "TWD", "台幣", f.cur === "TWD") + "</div></div>" +
      '<fieldset class="chips"><legend>類別</legend>' + CATS.map(function (c) { return chip("radio", "cat", c, c, (f.cat || "餐飲") === c); }).join("") + "</fieldset>" +
      '<label class="fld"><span>項目</span><input name="note" maxlength="40" autocomplete="off" placeholder="例：一蘭拉麵、加油" value="' + esc(f.note || "") + '"></label>' +
      '<label class="fld"><span>日期</span><select name="day">' + [0].concat(T.days.map(function (d) { return d.n; })).map(function (dn) {
        return '<option value="' + dn + '"' + (dn === day ? " selected" : "") + ">" + dayName(dn) + "</option>";
      }).join("") + "</select></label>" +
      '<fieldset class="chips"><legend>誰付的</legend>' + n.map(function (nm, i) { return chip("radio", "by", i, esc(nm), by === i); }).join("") + "</fieldset>" +
      '<fieldset class="chips"><legend>誰分攤（平均分）</legend>' + n.map(function (nm, i) { return chip("checkbox", "split", i, esc(nm), split.indexOf(i) > -1); }).join("") + "</fieldset>" +
      '<p class="ledf__err" id="lf-err" aria-live="polite"></p>' +
      '<div class="actions"><button class="btn btn--day" type="submit">' + icon("check") + "儲存</button>" +
      '<button class="btn btn--quiet" type="button" data-act="close">取消</button>' +
      (editing ? '<button class="btn btn--quiet ledf__del" type="button" data-act="del">刪除</button>' : "") + "</div></form>";
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    if (!editing) dlg.querySelector('[name="amt"]').focus();
  }
  function closeForm() { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); }
  function myBook() { return L.books[L.cfg.me] || (L.books[L.cfg.me] = { at: 0, items: [] }); }
  function ledgerChanged() { saveLedger(); renderLedger(); renderDay(); }

  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) return closeForm();
    var a = e.target.closest("[data-act]"); if (!a) return;
    if (a.getAttribute("data-act") === "close") closeForm();
    if (a.getAttribute("data-act") === "del" && editing && confirm("確定要刪除這一筆嗎？")) {
      var bk = myBook(); bk.items = bk.items.filter(function (x) { return x.id !== editing.id; }); bk.at = Date.now();
      closeForm(); ledgerChanged();
    }
  });
  dlg.addEventListener("submit", function (e) {
    e.preventDefault();
    var fm = e.target, err = $("#lf-err", fm);
    var amt = parseFloat(fm.amt.value.replace(/[,，\s]/g, ""));
    var split = [].map.call(fm.querySelectorAll('[name="split"]:checked'), function (c) { return +c.value; });
    if (!(amt > 0)) { err.textContent = "請輸入金額"; fm.amt.focus(); return; }
    if (!split.length) { err.textContent = "至少要有一個人分攤"; return; }
    var it = {
      id: editing ? editing.id : Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      t: editing ? editing.t : Date.now(), day: +fm.day.value, amt: amt, cur: fm.querySelector('[name="cur"]:checked').value,
      cat: fm.querySelector('[name="cat"]:checked').value, note: fm.note.value.trim(), by: +fm.querySelector('[name="by"]:checked').value,
      split: split.length === L.cfg.names.length ? [] : split
    };
    var bk = myBook();
    if (editing) bk.items = bk.items.map(function (x) { return x.id === it.id ? it : x; }); else bk.items.push(it);
    bk.at = Date.now();
    closeForm(); ledgerChanged();
  });

  function ledMsg(t) { var m = $("#ld-msg"); if (m) m.textContent = t; }
  $("#view-ledger").addEventListener("click", function (e) {
    var ed = e.target.closest("[data-edit]"), pr = e.target.closest("[data-pre]"), a = e.target.closest("[data-act]");
    if (ed) {
      var id = ed.getAttribute("data-edit");
      openForm((myBook().items.filter(function (x) { return x.id === id; }))[0]);
    } else if (pr) {
      var p = presets().filter(function (x) { return x.note === pr.getAttribute("data-pre"); })[0];
      openForm({ note: p.note, cat: p.cat, amt: p.amt, day: 0 });
    } else if (a && a.getAttribute("data-act") === "add") openForm();
    else if (a && a.getAttribute("data-act") === "share") {
      encodeSync().then(function (code) {
        var text = "九州記帳同步碼（到行程網站「記帳」頁貼上）\n" + code;
        if (navigator.share) return navigator.share({ text: text }).catch(function () {});
        return navigator.clipboard.writeText(text).then(function () { ledMsg("已複製，貼到群組就好"); });
      }).catch(function () {
        /* 不能分享也不能複製時，直接把同步碼攤出來讓人手動複製 */
        encodeSync().then(function (code) { var o = $("#ld-out"); o.value = code; o.hidden = false; o.select(); ledMsg("請長按上面的同步碼手動複製"); });
      });
    } else if (a && a.getAttribute("data-act") === "import") {
      decodeSync($("#ld-in").value).then(function (d) {
        var got = mergeSync(d);
        renderLedger(); renderDay();
        ledMsg(got ? "已合併 " + got + " 本帳" : "已經是最新的，沒有新資料");
      }).catch(function (er) { ledMsg(er.zh ? er.message : "同步碼讀不出來，請確認有完整複製"); });
    }
  });
  $("#view-ledger").addEventListener("submit", function (e) {
    if (e.target.id !== "ld-cfg") return;
    e.preventDefault();
    var fm = e.target, err = $("#ld-cfg-err"), c = L.cfg;
    var names = c.names.map(function (_, i) { return fm["nm" + i].value.trim() || "旅伴 " + (i + 1); });
    var me = fm.querySelector('[name="me"]:checked'), rate = parseFloat(fm.rate.value.replace(/[,，\s]/g, ""));
    if (!me) { err.textContent = "請選出哪一位是你"; return; }
    if (!(rate > 0 && rate < 10)) { err.textContent = "請輸入匯率，例如 0.21"; fm.rate.focus(); return; }
    if (names.join("|") !== c.names.join("|")) { c.names = names; c.namesAt = Date.now(); }
    if (rate !== c.rate) { c.rate = rate; c.rateAt = Date.now(); }
    c.me = +me.value;
    /* 請瀏覽器別在空間不足時清掉帳本 */
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
    ledgerChanged();
  });

  /* 行程頁景點清單上方的記帳列：點進當天就能記一筆，不必滑到底 */
  function spendBar(d) {
    if (!ledgerReady()) return '<div class="spendbar"><p class="spendbar__t">四人分帳，記在自己手機、用同步碼互傳。</p><a class="btn btn--sm" href="#ledger">' + icon("wallet") + "開始設定</a></div>";
    var its = allItems().filter(function (it) { return it.day === d.n; }), t = sumJ(its);
    return '<div class="spendbar"><p class="spendbar__t">今日 <b class="num">' + fmtJ(t) + '</b><span class="num">' + its.length + " 筆</span></p>" +
      '<a class="btn btn--sm btn--day" href="#ledger/add/day' + d.n + '">' + icon("plus") + "記一筆</a></div>";
  }

  /* 行程頁每天的側欄：今日花費明細（換算台幣） */
  function daySpend(d) {
    if (!ledgerReady()) return "";
    var its = allItems().filter(function (it) { return it.day === d.n; }), t = sumJ(its);
    return '<section class="aside spend"><h3 class="h-sub">今日花費</h3><p class="spend__v"><b class="num">' + fmtJ(t) + '</b><span class="num">≈ ' + fmtT(t * L.cfg.rate) + "・" + its.length + " 筆</span></p></section>";
  }

  /* ── 分頁切換 ───────────────────────── */
  function route() {
    var parts = location.hash.replace("#", "").split("/");
    var tab = ["trip", "transport", "stay", "info", "ledger"].indexOf(parts[0]) >= 0 ? parts[0] : "trip";
    state.tab = tab;
    document.querySelectorAll(".view").forEach(function (v) { v.hidden = v.getAttribute("data-view") !== tab; });
    document.querySelectorAll(".tabs__item").forEach(function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (tab === "trip" && /^day[1-8]$/.test(parts[1] || "") && +parts[1].slice(3) !== state.day) selectDay(+parts[1].slice(3));
    /* 從行程頁點「記一筆」：#ledger/add/day3 直接打開表單，日期帶好 */
    if (tab === "ledger" && parts[1] === "add") {
      try { history.replaceState(null, "", "#ledger"); } catch (e) {}
      window.scrollTo(0, 0);
      if (ledgerReady()) openForm(/^day[1-8]$/.test(parts[2] || "") ? { day: +parts[2].slice(3) } : null);
    }
    setGuide();
  }

  renderTrip(); renderTransport(); renderStay(); renderInfo(); renderLedger();

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
  /* 山裡斷訊時：網站已存進手機的話，就直接告訴旅伴行程照常可看 */
  function net() {
    var cached = "serviceWorker" in navigator && navigator.serviceWorker.controller;
    $("#net-text").textContent = cached ? "離線・行程照常可看" : "離線中";
    $("#net").hidden = navigator.onLine;
  }
  window.addEventListener("online", net); window.addEventListener("offline", net); net();
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    /* 網站有新版接手時自動重新整理；正在填表單就先不打斷，下次開啟再換 */
    var hadSW = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      net();
      if (hadSW && !document.querySelector("dialog[open]")) location.reload();
    });
    navigator.serviceWorker.register("sw.js").then(function () {
      navigator.serviceWorker.ready.then(function () { $("#sw-status").textContent = "已儲存到這支手機，沒有網路也能開啟。"; net(); });
    }).catch(function () {});
  }
})();
