# Java 程式題庫測驗系統

一個現代化的 Java 程式題庫線上測驗系統，支援隨機出題、即時比對答案、計時功能，並具備完整的響應式設計。

## ✨ 功能特色

### 🎯 核心功能
- **隨機出題** - 從五個類別中隨機抽取題目
- **類別選擇** - 可選擇特定類別進行練習
- **即時編輯** - 整合 CodeMirror 編輯器，提供類似 IDE 的編寫體驗
- **答案比對** - 自動比對答案並標示錯誤行數
- **計時功能** - 記錄作答時間
- **重置答案** - 一鍵恢復原始題目

### 🎨 介面設計
- **現代化 UI** - 採用漸層色彩、流暢動畫
- **配色主題** - 棕色系配色 (#a47b5b, #cbc0b6, #554945, #a64d39, #83949d)
- **動態效果** - 按鈕懸停效果、題目切換動畫、結果展示動畫
- **智能滾動** - 作答時無滾動條，查看結果時自動啟用滾動

### 📱 響應式設計
- **桌面優化** - 完整功能體驗 (> 1024px)
- **平板支援** - 適配 iPad 等設備 (769px - 1024px)
- **手機友善** - 完整的移動端優化 (< 768px)
- **小螢幕適配** - 超小螢幕專屬優化 (≤ 480px)

### 💻 技術特點
- **純前端** - 無需後端，可直接部署到 GitHub Pages
- **零依賴** - 僅使用 CodeMirror CDN
- **高效能** - 流暢動畫，快速響應
- **跨瀏覽器** - 支援現代瀏覽器（Chrome, Firefox, Safari, Edge）

## 🚀 快速開始

### 線上使用
直接訪問 GitHub Pages：
```
https://[your-username].github.io/java-exam-system/
```

### 本地運行

1. **克隆專案**
```bash
git clone https://github.com/[your-username]/java-exam-system.git
cd java-exam-system
```

2. **開啟網站**
```bash
# 使用任何本地伺服器，例如：
python -m http.server 8000
# 或
npx http-server
```

3. **訪問**
```
http://localhost:8000
```

## 📁 專案結構

```
java-exam-system/
├── index.html          # 主頁面
├── style.css           # 樣式表
├── app.js              # 主要邏輯
├── questions.js        # 題目資料
└── README.md           # 說明文件
```

## 🎓 題目結構

系統包含 5 個類別，每個類別有多道題目：

- **第一類** - JPA102 ~ JPA110 (5 題)
- **第二類** - JPA202 ~ JPA210 (4 題)
- **第三類** - JPA302 ~ JPA310 (5 題)
- **第四類** - JPA402 ~ JPA410 (5 題)
- **第五類** - JPA502 ~ JPA510 (5 題)

每道題目包含：
- **JPD 檔案** - 作答模板
- **JPA 檔案** - 參考答案（後端比對用）

## 🔧 自訂題目

在 `questions.js` 中添加新題目：

```javascript
const questions = [
    {
        id: 'JPA601',
        jpa: `// 參考答案
public class JPA601 {
    // ...
}`,
        jpd: `// 作答模板
public class JPD601 {
    // ...
}`
    },
    // 更多題目...
];
```

## 🎨 自訂配色

在 `style.css` 的 `:root` 中修改顏色變數：

```css
:root {
    --primary: #a64d39;        /* 主色調 */
    --primary-dark: #8a3d2c;   /* 主色調深色 */
    --primary-light: #c55f47;  /* 主色調淺色 */
    --success: #5a7a5f;        /* 成功色 */
    --danger: #a64d39;         /* 錯誤色 */
    --accent: #83949d;         /* 強調色 */
    --bg-primary: #e5ddd4;     /* 主背景 */
    --bg-secondary: #cbc0b6;   /* 次背景 */
    --text-primary: #554945;   /* 主文字 */
    --text-secondary: #a47b5b; /* 次文字 */
}
```

## 📱 瀏覽器支援

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移動端瀏覽器

## 🛠️ 技術棧

- **HTML5** - 結構
- **CSS3** - 樣式與動畫
- **JavaScript (ES6+)** - 互動邏輯
- **CodeMirror 5.65.2** - 程式碼編輯器

## 📄 授權

MIT License

### 開發指南

1. Fork 專案
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request