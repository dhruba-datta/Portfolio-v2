/**
 * Lightweight local dev server for Netlify Functions.
 * Run with: node scripts/functions-dev.js
 * This serves /api/send-email locally for development.
 */
import { createServer } from "http";
import { readFileSync } from "fs";
import { pathToFileURL } from "url";
import { resolve } from "path";

// Manually load .env
try {
  const envContent = readFileSync(resolve(process.cwd(), ".env"), "utf8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch { /* no .env file */ }

const PORT = 9999;

const server = createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/send-email" && req.method === "POST") {
    let body = "";
    for await (const chunk of req) body += chunk;

    try {
      const fnPath = pathToFileURL(
        resolve(process.cwd(), "netlify/functions/send-email.js")
      ).href;

      const fn = await import(fnPath + "?t=" + Date.now());
      const handler = fn.default;

      const request = new Request(`http://localhost:${PORT}${req.url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          origin: req.headers.origin || "http://localhost:5173",
        },
        body,
      });

      const response = await handler(request, {});
      const responseBody = await response.text();

      res.writeHead(response.status, {
        "Content-Type": response.headers.get("Content-Type") || "text/plain",
      });
      res.end(responseBody);
    } catch (err) {
      console.error("Function error:", err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`⚡ Functions dev server running at http://localhost:${PORT}`);
  console.log(`  ENV: RECAPTCHA_SECRET_KEY=${process.env.RECAPTCHA_SECRET_KEY ? "set" : "NOT SET"}`);
  console.log(`  ENV: EMAILJS keys=${process.env.VITE_EMAILJS_SERVICE_ID ? "set" : "NOT SET"}`);
});
