$nodeDir = "C:\Users\BENAZIR\.gemini\antigravity\scratch\nodejs\node-v20.18.0-win-x64"
$env:PATH = "$nodeDir;$env:PATH"
Set-Location $PSScriptRoot
Write-Host "Starting Vite Development Server..."
& "$nodeDir\node.exe" "node_modules\vite\bin\vite.js" --host 0.0.0.0 --port 3000
