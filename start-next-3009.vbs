Set shell = CreateObject("WScript.Shell")
shell.CurrentDirectory = "C:\Users\furkan\Desktop\startbase landing - Kopya (3) - Kopya"
shell.Run """C:\Program Files\nodejs\node.exe"" ""node_modules\next\dist\bin\next"" dev --port 3009", 0, False
