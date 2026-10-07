---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# 熊本行程網站（index.html）

## Scope and mode
單頁網站 index.html（含 data.js、sw.js、manifest）。Visitor mode: Operate（旅途中查資訊），兼顧旅後分享閱讀。

## Audience and job
使用者與旅伴，手機單手、戶外、移動中、山區弱網。工作：找到今天的路線、下一站、當晚住宿地址電話與導航；查航班、租車、訂房、旅遊須知。旅後：當作紀錄分享。

## Content and constraints
內容全來自 九州行程.pdf / 九州手冊.docx；景點照片 28 張在 images/。訂房、租車只留欄位（待填），不得捏造。照片上傳已取消。需離線快取（Service Worker）。RWD 手機優先。PDF 沒有各站時刻，不得顯示虛構時間。

## History
- 第一版「昭和觀光導覽摺頁」使用者看過後覺得醜，2026-10-08 重抽（reroll 1）改選「紅葉前線」。
- 2026-10-08 使用者在實際網站截圖比較五組色調（紅葉前線、楓紅暖色、和風沉穩、溫泉湯色、粉彩秋日）後，選定「和風沉穩」取代高彩度紅葉見頃色階；版面與元件不變。網站不提供色調切換。
- 2026-10-08 專案移至 KumamotoTrip/ 資料夾。

## Direction contract
THESIS: 這趟 11 月下旬的旅程是一路走進深秋——每一天擁有一個日本傳統色（Day 1 苔 → 鶯 → 海松茶 → 黃土 → 柿渋 → 弁柄 → 蘇芳 → Day 8 葡萄鼠，低彩度、色相由綠轉褐再轉紫），頁面隨選中的日子換色；拒絕行程 App 的「封面大圖＋白卡片」與上一版的印刷摺頁。
OWN-WORLD: 白底、一組暖灰階中性色；8 個和色，各有 chip（日期格，白字）、deep（頁首底色與文字）、soft（淡底塊）；Zen Maru Gothic 圓體標題、系統黑體內文；圓角 8／12／16px 加膠囊形、細暖灰分隔線、無模糊陰影；車程數字靠右緊貼對齊。
STORY: 打開就看到今天的和色與「Day N · 地名 → 地名」，旁邊九州小地圖標出今天的路線；往下是景點清單（圓角照片、名稱、車程靠右）；點開看介紹；底部頁籤切交通、住宿、資訊。
FIRST VIEWPORT: 頁首整塊鋪當日 deep 色（白字：旅程名、日期、即時導讀）；其下 8 格和色日期鈕（白字，選中者加墨環）；當日大標題＋資訊列＋日色膠囊（如「Day 2・鶯」），右側九州小地圖（全程 8 段各用當天 chip 色淡化、選中日加粗上 deep 色、下緣淡出）；接著 2px 墨線下的景點清單。手機底部頁籤。
FORM: 紅葉前線（色階改為和風沉穩），reroll 1 我方清單第 5 位；seed key a2014c4d。raises：選中日路段在地圖上突出（orienteering）、車程靠右緊貼（cassette）、中性色只用一組暖灰（darkroom）、破壞性按鈕獨立（console）。
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- 訂房、租車實際資料待使用者提供。
- 車程為估計值，標示「約」。
