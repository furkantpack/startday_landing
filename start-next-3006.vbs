Set shell = CreateObject("WScript.Shell")
shell.CurrentDirectory = "C:\Users\furkan\Desktop\startbase landing - Kopya (2)"
shell.Run """C:\Program Files\nodejs\node.exe"" ""node_modules\next\dist\bin\next"" start --port 3006", 0, False
