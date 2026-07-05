const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const cwd = __dirname;
const out = fs.openSync(path.join(cwd, "next-3009-dev.out.log"), "a");
const err = fs.openSync(path.join(cwd, "next-3009-dev.err.log"), "a");

fs.appendFileSync(path.join(cwd, "next-3009-dev.out.log"), `keeper started ${new Date().toISOString()}\n`);

const child = spawn(
  "C:\\Program Files\\nodejs\\node.exe",
  [path.join(cwd, "node_modules", "next", "dist", "bin", "next"), "dev", "--port", "3009"],
  {
    cwd,
    stdio: ["pipe", out, err],
    windowsHide: true,
  }
);

child.on("exit", (code, signal) => {
  fs.appendFileSync(
    path.join(cwd, "next-3009-dev.out.log"),
    `next exited code=${code} signal=${signal} ${new Date().toISOString()}\n`
  );
  process.exit(code ?? 1);
});

setInterval(() => {
  if (child.stdin.writable) {
    child.stdin.write("");
  }
}, 30000);
