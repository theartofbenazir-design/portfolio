@echo off
title BENAZIR STUDIO - Portfolio Development Server
color 0A

echo ============================================================
echo   BENAZIR STUDIO - Premium Graphic ^& UI/UX Portfolio
echo ============================================================
echo.
echo [1/3] Setting up Node environment...
set "PATH=C:\Users\BENAZIR\.gemini\antigravity\scratch\nodejs\node-v20.18.0-win-x64;%PATH%"
cd /d "%~dp0"

echo [2/3] Opening your portfolio in your default browser...
start "" "http://localhost:3000"

echo [3/3] Starting local web server on port 3000...
echo.
echo ============================================================
echo   Website running at: http://localhost:3000
echo   Press CTRL+C anytime to stop the server.
echo   Keep this window open while browsing your portfolio!
echo ============================================================
echo.

"C:\Users\BENAZIR\.gemini\antigravity\scratch\nodejs\node-v20.18.0-win-x64\node.exe" node_modules\vite\bin\vite.js --host 0.0.0.0 --port 3000

pause
