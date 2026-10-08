---
name: 熊本・阿蘇・由布院・別府 行程網站
description: 和風沉穩——8 天各有一個沉穩的和色，由苔綠走到葡萄鼠，頁面隨選中的日子換色。
colors:
  white: "#FFFFFF"
  g-50: "#FAF8F5"
  g-100: "#F3EFEA"
  g-200: "#E8E2D8"
  g-400: "#A79F94"
  g-600: "#6B6258"
  g-800: "#3E3831"
  ink: "#2A2622"
  day-1-chip: "#5F7036"
  day-1-deep: "#4F5E2C"
  day-1-soft: "#EDEFE3"
  day-2-chip: "#6E7A3A"
  day-2-deep: "#5B6630"
  day-2-soft: "#EEEFE2"
  day-3-chip: "#7D7436"
  day-3-deep: "#6A622D"
  day-3-soft: "#F1EFE1"
  day-4-chip: "#8F6936"
  day-4-deep: "#7A582D"
  day-4-soft: "#F3ECE2"
  day-5-chip: "#8E5534"
  day-5-deep: "#76462B"
  day-5-soft: "#F3E8E2"
  day-6-chip: "#844536"
  day-6-deep: "#6E392D"
  day-6-soft: "#F2E5E2"
  day-7-chip: "#74393F"
  day-7-deep: "#612F35"
  day-7-soft: "#F0E3E4"
  day-8-chip: "#5C3B50"
  day-8-deep: "#4C3143"
  day-8-soft: "#EDE4EA"
typography:
  display:
    fontFamily: "Zen Maru, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "clamp(32px, 9.6vw, 60px)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "0.01em"
  masthead:
    fontFamily: "Zen Maru, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "clamp(19px, 5vw, 24px)"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Zen Maru, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    lineHeight: 1.3
  title:
    fontFamily: "Zen Maru, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 900
    lineHeight: 1.35
  numeral:
    fontFamily: "Zen Maru, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 900
    lineHeight: 1.1
    fontFeature: "tnum"
  numeral-lead:
    fontFamily: "Zen Maru, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "clamp(48px, 13vw, 72px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
  body:
    fontFamily: "Noto Sans TC, PingFang TC, Hiragino Sans, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  body-reading:
    fontFamily: "Noto Sans TC, PingFang TC, Hiragino Sans, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Zen Maru, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
    lineHeight: 1.2
  meta:
    fontFamily: "Noto Sans TC, PingFang TC, Hiragino Sans, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "99px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  gutter: "16px"
  max: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.day-1-deep}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  button-small:
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "36px"
  day-chip:
    backgroundColor: "{colors.day-1-chip}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    height: "58px"
  chip-leg:
    backgroundColor: "{colors.day-1-soft}"
    textColor: "{colors.day-1-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 9px"
    height: "22px"
  masthead:
    backgroundColor: "{colors.day-1-deep}"
    textColor: "{colors.white}"
    typography: "{typography.masthead}"
  stop-photo:
    rounded: "{rounded.md}"
    size: "56px"
  stop-badge:
    backgroundColor: "{colors.day-1-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    size: "22px"
  lodge-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "16px"
  lodge-head:
    backgroundColor: "{colors.day-1-soft}"
    padding: "16px"
  nights-strip:
    rounded: "{rounded.pill}"
    height: "8px"
    width: "238px"
  info-box:
    backgroundColor: "{colors.g-50}"
    rounded: "{rounded.lg}"
    padding: "16px"
  placeholder-todo:
    textColor: "{colors.g-600}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
---

# Design System: 熊本・阿蘇・由布院・別府 行程網站

## Overview

**Creative North Star: "和風沉穩"**

這趟 11 月下旬的九州自駕是一路走進深秋。系統的核心是一條「和風沉穩」日色色階：8 天各擁有一個低彩度的傳統和色，從 Day 1 苔綠經黃土、柿渋、弁柄，一路沉到 Day 8 葡萄鼠。整個頁面只有一個會變的顏色——選中日的秋色——它鋪滿頁首，從日期色階一路由濃到淡漸回白底，並染上主要按鈕、今日路段、路線脊線、編號徽章與淡底塊；其餘一律是白底與一組暖灰。換日時，整頁的日色以 0.6 秒平滑轉換，像季節往前推了一格。

密度屬於「旅途中單手查詢」：手機優先、底部頁籤、44px 以上的觸控目標，資訊靠清單與細暖灰分隔線組織，而不是卡片堆疊。標題用圓潤厚重的 Zen Maru Gothic，內文交給系統黑體，數字一律等寬對齊。圖像只出現在景點：清單裡是 56px 的圓角小照片，展開後才是大圖。

已確認拒絕的方向：行程 App 常見的「封面大圖＋白卡片」、上一版的昭和印刷摺頁風格，以及先前高彩度的紅葉見頃色階（使用者在實際網站截圖比較五組色調後選定「和風沉穩」）。

**Key Characteristics:**
- 白底＋單一暖灰階（g-50 → ink）為唯一中性色。
- 8 個和風沉穩日色，各有 chip / deep / soft 三個角色，日期格上一律白字；選中日由 JS 換上 `--day`、`--day-chip`、`--day-soft`。
- 頁首整塊鋪當日深色，往下接一條由濃到淡、淡回白底的當日漸層；換日時一起轉色。
- Zen Maru Gothic（自架子集）用於標題、標籤、按鈕；內文用系統 CJK 黑體；tabular-nums。
- 圓角 8 / 12 / 16 加膠囊形；無重陰影；細暖灰分隔線與 2px 墨線分段。

## Colors

一組暖灰承載所有結構，一個隨日期輪替、低彩度的和色承載所有強調。

### Primary（日色，8 組輪替）
每一天都是一組三色，依角色使用：
- **chip**（較亮）：只用在「整條色階」的元件：8 格色階日期鈕、「吃什麼」各地區的小方塊、行前清單進度條、住宿卡夜晚色階。
- **deep**（深色）：頁首底色、主要按鈕、連結、今日地圖路段、景點編號徽章、路線脊線、車程文字、勾選框的勾選狀態、`theme-color`。白字放在上面。
- **soft**（淡色）：車程接點膠囊、住宿卡頭、圖示佔位底、文字選取底色。
- **chip 上的文字**：8 天一律白字（DAYC 的 ink 皆為 #FFFFFF，對應 white token）。8 個 chip 都夠深，白字皆可讀；新增日色時必須維持這個條件。

色階順序（名稱即色名）：苔 → 鶯 → 海松茶 → 黃土 → 柿渋 → 弁柄 → 蘇芳 → 葡萄鼠。整條色階彩度刻意壓低、明度相近，靠色相由綠轉褐轉紫來區分日子，而非靠鮮豔度。執行期由 `applyDayColor()` 把選中日的 deep / chip / soft 寫入 `--day`、`--day-chip`、`--day-soft`；CSS 只引用這三個變數，不直接寫死某一天的色值（預設值為 Day 1）。

### Neutral（暖灰階）
- **White**：頁面底色、卡片底、日期鈕選中時的內圈、當日漸層的終點、小地圖陸地（60% 白）、夜晚色階的空格。
- **g-50 紙白**：資訊方塊、子景點列、航班卡頭的底。
- **g-100 淺砂**：進度條軌道。
- **g-200 砂線**：所有 1px 分隔線、卡片外框、按鈕外框。
- **g-400 灰石**：展開箭頭、勾選框外框、「待填」虛線框、小地圖上其他天的路段。
- **g-600 溫灰**：次要說明文字、表頭、頁籤未選文字。
- **g-800 炭褐**：長段落內文、地圖地名、當日大標下的日期。
- **ink 墨**：標題與主文字、2px 分段墨線、選中日期鈕的外框、「今天」膠囊、焦點框、主要按鈕 hover。

### Named Rules
**The One Season Rule.** 任何畫面上只有一個和色在發聲：選中日的 deep / soft。其他天的顏色只允許出現在色階日期鈕、「吃什麼」地區小方塊、行前清單的和色色階進度條與住宿卡的夜晚色階這些「整條色階」的地方。新增或調整日色時維持和風沉穩的低彩度，不要放回鮮豔的紅葉色。

**The One Gray Rule.** 中性色只能從 white、g-50…g-800、ink 這一組暖灰取用。不要引入冷灰、純黑或另一組灰。唯一例外是頁首「離線中」膠囊的 28% 黑半透明底，用來在任何日色上壓出一塊較深的底。

**The Role-Not-Hex Rule.** 元件只引用 `--day` / `--day-chip` / `--day-soft`，不寫某一天的 hex；新元件同樣要能在 8 個日色間切換而保持可讀。

## Typography

**Display Font:** Zen Maru Gothic（自架子集，family 名稱 "Zen Maru"，字重 900 / 700；圓體缺的「嗎奶灶糕糰」五字由同字重黑體以 unicode-range 補在同一 family 下），fallback 為 Noto Sans TC、PingFang TC、Microsoft JhengHei
**Body Font:** 系統 CJK 黑體（Noto Sans TC、PingFang TC、Hiragino Sans、Microsoft JhengHei、system-ui）

**Character:** 圓體的厚重與圓角讓標題親切、像旅伴手寫的路線牌；內文黑體則安靜、易讀、零下載成本。

### Hierarchy
- **Display**（900, clamp(32px, 9.6vw, 60px), 1.15）：當日路線大標「阿蘇 → 高千穗」，ink 字，箭頭用日色；地名不斷字，換行時箭頭跟著前一個地名。
- **Masthead**（900, clamp(19px, 5vw, 24px), 1.25）：頁首的旅程名，白字。
- **Headline**（900, 22px, 1.3）：區段標題，下方帶 2px 墨線。
- **Title**（900, 17px, 1.35）：景點名、住宿名（18px）、資訊方塊標題、子標題。
- **Numeral**（900, 32px, 1.1, tabular-nums）：航班與租車時刻等大型數字。
- **Numeral Lead**（900, clamp(48px, 13vw, 72px), 1）：只給資訊頁氣候方塊的氣溫，全站最大的數字。
- **Body**（400, 16px, 1.7）：基本內文；景點介紹 15.5px / 1.85，段落最寬 68ch。
- **Label**（Zen Maru 700, 12–15px）：按鈕、膠囊、頁籤、車程；說明文字（meta）則用黑體 12.5–13.5px、g-600。

### Named Rules
**The Round-For-Voice Rule.** 圓體只給「會被掃視」的文字：標題、名稱、按鈕、膠囊、數字。超過一行的段落一律用黑體。

**The Tabular Rule.** 時刻、車程、日期、溫度都用 tabular-nums，時刻靠右緊貼對齊；車程則掛在兩站交界的接點膠囊上。PDF 沒有的各站時刻不得虛構；只顯示「車程 N 分」「步行 N 分」。

## Layout

手機優先的單欄，內容最寬 1120px、左右 16px 間距。間距節奏為 4 / 8 / 12 / 16 / 24 / 32 / 48。

- **頁首**：sticky，整塊日色；第二列是即時導讀（行程頁為 Day N、路線、日期；其他頁為分頁名與摘要）與「離線中」膠囊，以半透明白線分隔。
- **分頁**：手機為固定在底部的 4 格頁籤（高 62px，含 safe-area）；860px 以上移入頁首右側，成為白字膠囊，選中者白底日色字。
- **日期色階**：8 欄等寬格線，間距 5px（370px 以下 3px）。
- **當日漸層**：從日期色階開始，背景是一條滿版、由上而下的當日色漸層——緊接頁首的 deep，經 soft，最後淡回白底；日期鈕坐在濃的一段，路線大標（ink 字、Zen Maru 900, clamp(32px, 9.6vw, 60px)，地名不斷字、箭頭為日色且跟著前一個地名）與小地圖（手機 120px、600px 以上 170px、960px 以上 180px、370px 以下 104px）坐在淡的一段。`--day`、`--day-soft` 以 @property 註冊為顏色，換日時頁首與漸層一起 0.6 秒轉色。
- **當日內容**：960px 以上切成 1.4 : 1 兩欄，右欄（住宿卡、延伸閱讀）sticky。
- **其他頁**：航班 720px 以上兩欄；資訊方塊 720px 以上三欄，氣候方塊佔滿整列（內部左溫度、右說明）；住宿 860px 以上兩欄；美食 720px 兩欄、1040px 四欄。

## Elevation & Depth

扁平系統。深度靠 g-50 / 日色 soft 的色塊分層、1px g-200 分隔線與 2px 墨線建立，不使用投影。唯一的 box-shadow 是「環」而非陰影：選中日期鈕的白內圈＋墨外框，以及編號徽章外的 2px 白圈，用來把它從照片上切開。

### Named Rules
**The No-Shadow Rule.** 不用任何模糊投影。需要分層就換底色，需要強調就加墨線或墨框。

## Shapes

圓角語彙只有四階：8px（日期鈕、子景點小圖）、12px（景點小照片、子景點列、圖示佔位）、16px（卡片、資訊方塊、展開大圖）、膠囊形（按鈕、所有標籤膠囊、編號徽章、進度條、夜晚色階、「待填」）。小尺寸例外：勾選框 7px、美食地區小方塊 4px、焦點框 6px。線條則是 1px g-200 分隔、2px ink 分段、1.5px 按鈕與勾選框外框。圖示為 1.8px 描邊、圓端點的線性 SVG。

## Components

### Buttons
- **Shape:** 膠囊形（99px），最小高度 44px，左右 16px；小型 36px / 12px。
- **Primary:** 日色 deep 底、白字、Zen Maru 700 14.5px，可帶 18px 線性圖示（如「導航」）。
- **Hover / Focus:** 主要按鈕 hover 轉為 ink 底；外框按鈕 hover 外框由 g-200 轉 ink。焦點一律 3px ink 外框、2px 間距。
- **Outline:** 白底、1.5px g-200 外框、ink 字（如「撥打電話」）；quiet 變體字色 g-600。

### Chips
- **車程接點膠囊：** 日色 soft 底、日色 deep 字、22px 高，帶 15px 車／步行圖示（如「車程 30 分」）。畫面上不顯示和色名稱，顏色只是視覺。
- **「待填」：** 1.5px g-400 虛線膠囊、g-600 字，用於尚未提供的訂房、租車欄位。不得以捏造資料取代。

### 色階日期鈕（Signature）
8 格各以自己那天的 chip 為底、白字；大字為日序（Zen Maru 900 21px），小字為日期。選中者加白內圈＋墨外框；hover 上浮 2px；當天日期上方掛 ink 底「今天」小膠囊。這是唯一同時顯示全部 8 色的元件，也就是整條和風沉穩色階本身。

### 九州小地圖（Signature）
位於當日漸層的淡段。九州輪廓填 60% 白、描白；其他天的路段以 g-400、2.4px、55% 不透明畫出；選中日路段為 `--day` 5.5px 實線，起訖點白底日色圈。最多 3 個地名，g-800 字、渲染後不小於 11px，以白色描邊做光暈。底部以 mask-image 漸隱。

### 景點清單
2px ink 墨線起頭，每列 1px g-200 分隔、最小高度 76px。左為 56px 圓角照片（無照片時為日色 soft 底＋日色圖示），左上角掛日色編號徽章；中為景點名（Title）與角色說明；右為展開箭頭。一條 2px `--day` 路線脊線從第一站照片中心穿到最後一站，把整天串成一條路；抵達某站前的車程／步行分鐘數是日色 soft 底膠囊（Zen Maru 700 12.5px、日色字），掛在上一站與這一站的分隔線上，左緣對齊景點名。展開後是大圖、15.5px 介紹段落與 g-50 底的子景點列。

### Cards / Containers
- **住宿卡：** 白底、1px g-200 框、16px 圓角；卡頭為日色 soft 底＋日色圖示，名稱與入住日期下方是 7 格夜晚色階（8px 高、間距 3px、兩端膠囊形；這間住的那幾晚填當天 chip 色，其餘白）；卡身為地址電話事實列與按鈕；「訂房資訊」是以細線分隔的可收合區塊。
- **航班卡：** 同框線；卡頭 g-50；起訖時刻用 Numeral。
- **資訊方塊：** g-50 底、16px 圓角、無框。氣候方塊是資訊頁的主角：佔滿整列、氣溫放大。
- **Internal Padding:** 16px。

### Inputs / Fields
勾選清單：22px、7px 圓角、1.5px g-400 外框；勾選後日色底＋白勾，文字轉 g-600 加刪除線。上方進度條是「和色色階」：10px 高、8 格（間距 3px、兩端膠囊形），每格 g-100 軌道、以該日 chip 色由左填滿，打包進度從 Day 1 苔一路推進到 Day 8 葡萄鼠。勾滿時文字改為「✓ 全部準備好了」（Zen Maru、ink），8 格依序亮一下（每格延遲 70ms），下方浮出日色 soft 底的出發提示，內容只取自航班資料（日期、時刻、機場、航班號）。

備註欄（訂房、租車）：textarea，g-50 底、1.5px g-400 虛線、8px 圓角、16px 字（避免 iOS 放大）；聚焦轉白底＋日色實線。輸入即存於 localStorage，下方以 12.5px g-600 淡入「已記在這支手機」，停止輸入 1.8 秒後淡出。

離線膠囊：Service Worker 已接管時寫「離線・行程照常可看」，否則只寫「離線中」，不做沒有根據的保證。

### Navigation
見 Layout。頁籤用 Zen Maru 700，未選為 g-600，選中為日色並加粗圖示描邊。

### Motion
緩動 `cubic-bezier(.16, 1, .3, 1)`。`--day`、`--day-soft` 以 @property 註冊為顏色並在根元素上 0.6 秒過渡，所以換日時頁首、漸層、路線與按鈕一起轉色；景點清單 0.45 秒淡入上移；展開箭頭 0.3 秒旋轉。`prefers-reduced-motion: reduce` 時全部關閉。

## Do's and Don'ts

### Do:
- **Do** 讓選中日的秋色成為唯一強調色，透過 `--day` / `--day-chip` / `--day-soft` 引用。
- **Do** 中性色只從 white、g-50…g-800、ink 取用。
- **Do** 標題、名稱、按鈕、膠囊用 Zen Maru Gothic；段落用系統黑體。
- **Do** 數字用 tabular-nums，時刻靠右對齊，車程掛在路線脊線的接點上。
- **Do** 以 1px g-200 細線與 2px ink 墨線分段，用 g-50 / 日色 soft 底塊分層。
- **Do** 圓角只用 8 / 12 / 16px 與膠囊形；按鈕一律膠囊形、最小 44px 高。
- **Do** 未提供的資料以虛線「待填」膠囊表示。

### Don't:
- **Don't** 用模糊投影或重陰影製造層次。
- **Don't** 在標題上方加小字標籤（kicker / eyebrow）。
- **Don't** 顯示 PDF 沒有的各站時刻，或捏造訂房、租車資料。
- **Don't** 在同一畫面讓兩個不同日子的顏色同時當強調色。
- **Don't** 回到「封面大圖＋白卡片」的行程 App 版型或印刷摺頁風格。
- **Don't** 在小地圖放超過 3 個地名，或讓地名渲染小於 11px。
