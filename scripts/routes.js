// scripts/routes.js — single source of truth for the site's routes (sitemap + pre-render)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDataPath = path.join(__dirname, "../src/data/projects.ts");

export const BASE_URL = "https://dhruba-datta.netlify.app";

const STATIC_ROUTES = ["/", "/about", "/contact", "/projects"];

// Sitemap priorities; any route not listed gets DEFAULT_PRIORITY.
const PRIORITIES = {
  "/": 1.0,
  "/about": 0.9,
  "/projects": 0.9,
  "/projects/social-engagement-group": 0.8,
  "/projects/flame-hibachi": 0.8,
  "/projects/operavo": 0.8,
  "/projects/ab-pharmacy": 0.8,
};
const DEFAULT_PRIORITY = 0.6;

// Extract project IDs from projects.ts using regex (matches `id: 'some-id'` only)
export function getProjectIds() {
  const tsContent = fs.readFileSync(projectsDataPath, "utf-8");
  const idRegex = /^\s*id:\s*['"]([\w-]+)['"]/gm;
  const ids = [];
  let match;
  while ((match = idRegex.exec(tsContent)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

export function getRoutes() {
  return [...STATIC_ROUTES, ...getProjectIds().map((id) => `/projects/${id}`)];
}

export function getPriority(route) {
  return PRIORITIES[route] ?? DEFAULT_PRIORITY;
}
