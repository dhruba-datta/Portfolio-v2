// scripts/prerender.js — writes static HTML for every route into dist/
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx`.
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { getRoutes } from "./routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const NOT_FOUND_MARKER = "404 — Page not found";

// React 19 emits hoisted <title>/<meta>/<link> tags at the start of the markup.
// Split them off so they can be moved into <head>.
function splitHead(html) {
  const tagRe = /^(<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)/;
  const head = [];
  let rest = html;
  let match;
  while ((match = rest.match(tagRe))) {
    head.push(match[0]);
    rest = rest.slice(match[0].length);
  }
  return { head: head.join("\n    "), body: rest };
}

function buildPage(template, rendered) {
  const { head, body } = splitHead(rendered);
  let html = template;
  if (head.includes("<title>")) {
    // The route has its own metadata: drop the home-page defaults from index.html
    html = html.replace(/^\s*<(title|meta|link)\b[^>]*\bdata-default\b[\s\S]*?(<\/title>|\/?>)\s*$/gm, "");
  }
  html = html.replace("</head>", `    ${head}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

// "/about" → about.html and about/index.html, so the page is served for both
// /about and /about/ without relying on host-specific pretty-URL handling.
function outFiles(route) {
  if (route === "/") return [path.join(distDir, "index.html")];
  const rel = route.replace(/^\//, "");
  return [path.join(distDir, `${rel}.html`), path.join(distDir, rel, "index.html")];
}

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

let failed = false;
for (const route of getRoutes()) {
  const rendered = await render(route);
  if (rendered.includes(NOT_FOUND_MARKER)) {
    console.error(`✖ ${route} rendered the 404 page — is it missing from src/App.tsx?`);
    failed = true;
    continue;
  }
  const page = buildPage(template, rendered);
  for (const file of outFiles(route)) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);
  }
}

// 404 page for unknown URLs (served by Netlify with a 404 status)
fs.writeFileSync(path.join(distDir, "404.html"), buildPage(template, await render("/__not-found__")));

fs.rmSync(ssrDir, { recursive: true, force: true });

if (failed) process.exit(1);
console.log(`✅ Pre-rendered ${getRoutes().length} routes + 404.html`);
