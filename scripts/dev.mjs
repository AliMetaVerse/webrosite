// Starts the Next.js dev server and opens the default browser once it's ready.
import { spawn } from "node:child_process";
import process from "node:process";

const npxCmd = process.platform === "win32" ? "next.cmd" : "next";

const child = spawn(npxCmd, ["dev", ...process.argv.slice(2)], {
  cwd: process.cwd(),
  stdio: ["inherit", "pipe", "inherit"],
  shell: process.platform === "win32",
});

let opened = false;

function openBrowser(url) {
  if (opened) return;
  opened = true;

  const platform = process.platform;
  const command =
    platform === "win32" ? "cmd" : platform === "darwin" ? "open" : "xdg-open";
  const args =
    platform === "win32" ? ["/c", "start", "", url] : [url];

  spawn(command, args, { stdio: "ignore", detached: true }).unref();
}

child.stdout.on("data", (chunk) => {
  const text = chunk.toString();
  process.stdout.write(text);

  const match = text.match(/(https?:\/\/localhost:\d+[^\s]*)/i);
  if (match) {
    openBrowser(match[1]);
  }
});

child.on("exit", (code) => process.exit(code ?? 0));

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
