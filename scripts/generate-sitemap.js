// scripts/generate-sitemap.js
// Automated sitemap generator for Vite + React projects
const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const BASE_URL = "https://dhruba-datta.netlify.app";
const pagesDir = path.join(__dirname, "../src/pages");

// Helper to convert PascalCase or camelCase to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function getRoutes() {
  const routes = [];
  // Top-level pages
  const pageFiles = fs.readdirSync(pagesDir);
  for (const file of pageFiles) {
    const fullPath = path.join(pagesDir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && file === "projects") {
      // Handle project subpages
      const projectFiles = fs.readdirSync(fullPath);
      for (const projFile of projectFiles) {
        if (projFile.endsWith(".tsx")) {
          const name = projFile.replace(/Page\.tsx$/, "").replace(/\.tsx$/, "");
          routes.push(`/projects/${toKebabCase(name)}`);
        }
      }
    } else if (stat.isFile() && file.endsWith(".tsx")) {
      if (file === "HomePage.tsx") {
        routes.push("/");
      } else if (file === "AboutPage.tsx") {
        routes.push("/about");
      } else if (file === "ContactPage.tsx") {
        routes.push("/contact");
      } else if (file === "ProjectsPage.tsx") {
        routes.push("/projects");
      } // Exclude NotFoundPage.tsx
    }
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
