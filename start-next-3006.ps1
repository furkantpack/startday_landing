Set-Location -LiteralPath "C:\Users\furkan\Desktop\startbase landing - Kopya (2)"
"launcher started $(Get-Date)" | Out-File -FilePath "next-launcher-3006.log" -Append
& "C:\Program Files\nodejs\node.exe" "node_modules\next\dist\bin\next" start --port 3006 *>> "next-launcher-3006.log"
"node exited with $LASTEXITCODE $(Get-Date)" | Out-File -FilePath "next-launcher-3006.log" -Append
Read-Host "Press Enter to close"
