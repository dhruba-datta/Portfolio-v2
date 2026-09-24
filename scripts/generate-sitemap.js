// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SitemapStream, streamToPromise } from "sitemap";
import { BASE_URL, getRoutes, getPriority } from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  try {
    const routes = getRoutes();
    const lastmod = new Date().toISOString().slice(0, 10);
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    routes.forEach((route) => {
      sitemap.write({ url: route, changefreq: "weekly", priority: getPriority(route), lastmod });
    });

    sitemap.end();
    const data = await streamToPromise(sitemap);

    // Written to public/ before `vite build` so it is copied into dist/
    fs.writeFileSync(
      path.join(__dirname, "../public/sitemap.xml"),
      data.toString()
    );

    console.log(`✅ sitemap.xml generated with ${routes.length} routes (lastmod ${lastmod}).`);
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    process.exit(1);
  }
})();
