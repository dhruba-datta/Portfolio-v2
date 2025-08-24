// scripts/generate-sitemap.cjs
// Automated sitemap generator for Vite + React projects
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const BASE_URL = 'https://dhruba-datta.netlify.app';
const pagesDir = path.join(__dirname, '../src/pages');

function getRoutes(dir, baseRoute = '') {
  let routes = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      routes = routes.concat(getRoutes(fullPath, baseRoute + '/' + file));
    } else if (file.endsWith('.tsx') && !file.startsWith('_')) {
      let route = baseRoute + '/' + file.replace(/\.tsx$/, '');
      if (route.endsWith('/index')) route = route.replace(/\/index$/, '/');
      routes.push(route.replace(/\/\//g, '/'));
    }
  }
  return routes;
}

(async () => {
  const routes = getRoutes(pagesDir).map(route => route === '/' ? '' : route);
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  routes.forEach(route => {
    sitemap.write({ url: route || '/', changefreq: 'weekly', priority: 0.7 });
  });
  sitemap.end();
  const data = await streamToPromise(sitemap);
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), data.toString());
  console.log('sitemap.xml generated!');
})();
