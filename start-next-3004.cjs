const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const cwd = __dirname;
const out = fs.openSync(path.join(cwd, "next-3004-detached.out.log"), "a");
const err = fs.openSync(path.join(cwd, "next-3004-detached.err.log"), "a");

const child = spawn(process.execPath, [path.join(cwd, "keep-next-3004-dev.cjs")], {
  cwd,
  detached: true,
  stdio: ["ignore", out, err],
  windowsHide: true,
});

child.unref();
console.log(child.pid);
