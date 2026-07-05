Set-Location -LiteralPath "C:\Users\furkan\Desktop\startbase landing - Kopya (3) - Kopya"
"launcher started $(Get-Date)" | Out-File -FilePath "next-launcher-3009.log" -Append
& "C:\Program Files\nodejs\node.exe" "node_modules\next\dist\bin\next" dev --port 3009 *>> "next-launcher-3009.log"
"node exited with $LASTEXITCODE $(Get-Date)" | Out-File -FilePath "next-launcher-3009.log" -Append
Read-Host "Press Enter to close"
