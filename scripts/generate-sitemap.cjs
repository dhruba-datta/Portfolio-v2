// scripts/generate-sitemap.cjs
// Automated sitemap generator for Vite + React projects
const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const BASE_URL = "https://dhruba-datta.netlify.app";
const pagesDir = path.join(__dirname, "../src/pages");

// Import the projects array from the compiled JS file
const projectsDataPath = path.join(__dirname, "../src/data/projects.ts");
let projects = [];
try {
  // Try to load the compiled JS if available (for production)
  const jsPath = path.join(__dirname, "../src/data/projects.js");
  if (fs.existsSync(jsPath)) {
    projects = require(jsPath).projects;
  } else {
    // Fallback: parse the TS file for project IDs (for dev)
    const tsContent = fs.readFileSync(projectsDataPath, "utf-8");
    const idRegex = /id:\s*['\"]([\w-]+)['\"]/g;
    let match;
    while ((match = idRegex.exec(tsContent)) !== null) {
      projects.push({ id: match[1] });
    }
  }
} catch (e) {
  console.error("Could not load project IDs:", e);
}

// Helper to convert PascalCase or camelCase to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function getRoutes() {
  const routes = ["/", "/about", "/contact", "/projects"];
  // Add project URLs using their IDs
  for (const project of projects) {
    routes.push(`/projects/${project.id}`);
  }
  return routes;
}

(async () => {
  const routes = getRoutes();
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.7 });
  });
  sitemap.end();
  const data = await streamToPromise(sitemap);
  fs.writeFileSync(
    path.join(__dirname, "../public/sitemap.xml"),
    data.toString()
  );
  console.log("sitemap.xml generated!");
})();
