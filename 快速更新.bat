@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ======================================
echo    快速更新到 GitHub
echo ======================================
echo.
echo 請輸入更新說明（留空則使用預設）
echo 範例：新增題目 / 修復bug / 更新樣式
echo.
set /p commit_msg="更新說明: "
if "%commit_msg%"=="" set commit_msg=更新檔案
echo.

echo [步驟 1/3] 添加檔案...
git add .
if errorlevel 1 (
    echo [!] 添加檔案失敗
    pause
    exit /b 1
)
echo ✓ 檔案添加完成
echo.

echo [步驟 2/3] 提交更改...
git commit -m "%commit_msg%"
if errorlevel 1 (
    echo ℹ️  沒有新的更改需要提交
    echo.
    pause
    exit /b 0
)
echo ✓ 提交完成
echo.

echo [步驟 3/3] 推送到 GitHub...
git push
if errorlevel 1 (
    echo [!] 推送失敗，請檢查網路連線
    pause
    exit /b 1
)
echo.

echo ======================================
echo    ✓ 更新成功！
echo ======================================
echo.
echo 🌐 您的網站：https://wall4oppy.github.io/Java-/
echo ⏰ 請等待 1-2 分鐘後查看更新
echo.

timeout /t 5
