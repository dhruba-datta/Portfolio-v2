import {
  MapPin,
  Navigation,
  UtensilsCrossed,
  Calculator,
  Search,
  Newspaper,
  Gauge,
  Bot,
  Globe2,
  Map,
  Workflow,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiN8N,
  SiVercel,
  SiGooglesearchconsole,
} from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface FlameHibachiPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const FlameHibachiPage = ({ isDark, toggleTheme }: FlameHibachiPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Flame Japanese Hibachi"
    description="A multi-location hibachi restaurant group needed one website that works for every store: the right menu, catering and order link for wherever the visitor is, and a page per location that ranks in local search. I built it end to end on Next.js 16, driven by a single locations data file that generates 19 store, menu and catering pages, their structured data, sitemap and llms.txt, with nearest-store routing and lead forms that feed n8n."
    coverSrc="/images/projects/Flame Japanese Hibachi.webp"
    chips={[
      { name: "Next.js 16", icon: <SiNextdotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Local SEO", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://www.flamehibachi.com/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "locations",
        icon: <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "19 Location Pages From One Data File",
        summary: "Every store's store, menu and catering page is generated from a single locations file",
        details: [
          "One typed locations file is the single source of truth for slugs, addresses, coordinates, hours and order links",
          "Store, menu and catering routes are statically generated per location with generateStaticParams",
          "One permanent slug per store, shared across every location-scoped URL (/store, /menu, /catering, /order)",
          "Adding a new location is one object in the data file: no new route, no code change",
        ],
      },
      {
        id: "nearest-store",
        icon: <Navigation className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Nearest-Store Routing",
        summary: "Visitors land on their closest location's menu and catering without choosing",
        details: [
          "Edge proxy reads Vercel IP geolocation and redirects /menu, /catering and /store to the nearest store",
          "Browser GPS and ZIP-code lookup as fallbacks, with Haversine distance sorting and a US service-area check",
          "A manual choice is remembered in a cookie and always wins over automatic detection",
          "Search crawlers skip the redirect so the generic pages are still indexed on their own content",
        ],
      },
      {
        id: "catering",
        icon: <Calculator className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Catering Quote Builder",
        summary: "Guests build a catering order and see a live estimate before they send it",
        details: [
          "Packages and add-ons with a running subtotal as quantities change",
          "Server-side validation re-calculates the estimate so the price can't be tampered with",
          "Quote requests post to an authenticated n8n webhook for follow-up",
          "Per-location catering pages so each store receives its own leads",
        ],
      },
      {
        id: "menu",
        icon: <UtensilsCrossed className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Menu & Ordering",
        summary: "Photo-led menu with category navigation and per-store order links",
        details: [
          "Interactive menu with category navigation across hibachi, sushi, bento, combos, drinks and add-ons",
          "Order buttons resolve to the selected store's online ordering link",
          "Ordering URL centralised in one constant, ready for the move to an in-house storefront",
          "Hand-rolled light/dark theme with an init script that prevents a flash of the wrong theme",
        ],
      },
      {
        id: "seo",
        icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Local SEO & Structured Data",
        summary: "Restaurant JSON-LD, unique store copy and a generated sitemap for local search",
        details: [
          "schema.org Restaurant JSON-LD per store, with address, geo coordinates and opening hours",
          "Unique meta description and FAQ copy per store, rendered visibly and mirrored in FAQPage JSON-LD",
          "Canonical URLs and a sitemap generated from the locations data so nothing drifts",
          "Weekly Search Console reporting on clicks, impressions, CTR and position",
        ],
      },
      {
        id: "ai-ready",
        icon: <Bot className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "AI-Ready Discovery",
        summary: "Generated llms.txt and explicit AI crawler permissions",
        details: [
          "/llms.txt generated from the same data: every store with its slug, address, hours and phone",
          "Blog posts listed in llms.txt grouped by the store they belong to",
          "robots.txt explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User and ClaudeBot",
          "Kept in sync with the sitemap so AI and search crawlers see the same map of the site",
        ],
      },
      {
        id: "blog",
        icon: <Newspaper className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Location-Targeted Blog",
        summary: "Blog with search, category and location filters, built for local content",
        details: [
          "Posts tagged to the stores they're written for, with a location hub per store",
          "Search with suggestions, category and location filters, and pagination",
          "Cover image pipeline with an audit script for naming, dimensions, encoding and file size",
          "Related posts to keep readers moving between locations and topics",
        ],
      },
      {
        id: "performance",
        icon: <Gauge className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Performance",
        summary: "AVIF/WebP images, year-long caching and a static-first build",
        details: [
          "Next.js image optimisation serving AVIF first with WebP fallback for the photo-heavy menu",
          "Immutable one-year cache headers on public media, including the hero video",
          "Static generation for every location page, so pages are served from the edge",
          "Canonical host redirect and HSTS configured in the Next.js config",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Next.js 16", description: "App Router with static generation for every location page, route handlers for forms and geo lookups, and an edge proxy for nearest-store redirects." },
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Client providers for theme, nearest location and the catering quote." },
      { icon: <SiTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript", description: "Typed location, menu, catering and blog data shared across routes, metadata and structured data." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Design tokens and a bold light/dark visual system." },
      { icon: <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "n8n", description: "Authenticated webhooks receiving contact and catering quote submissions." },
      { icon: <SiVercel className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vercel", description: "Hosting, edge IP geolocation for nearest-store routing, and image optimisation." },
      { icon: <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Geolocation", description: "Browser GPS, offline ZIP-code lookup and Haversine distance sorting to find the closest store." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "schema.org JSON-LD", description: "Restaurant and FAQPage structured data generated per store." },
      { icon: <SiGooglesearchconsole className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Google Search Console", description: "Weekly reporting on clicks, impressions, CTR and position." },
      { icon: <Workflow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Swiper", description: "Carousels for menu highlights and blog content." },
    ]}
    useCases={[
      "Multi-location restaurants that need one site with a correct page for every store",
      "Sending visitors straight to their nearest store's menu, catering and ordering",
      "Capturing catering leads with a live estimate, routed per location into an automation workflow",
      "Ranking each store in local search with unique copy and Restaurant structured data",
      "Adding a new location in minutes by editing one data file",
      "Moving from third-party delivery apps toward direct ordering",
    ]}
    howToSteps={[
      <>Visit&nbsp;<a href="https://www.flamehibachi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">flamehibachi.com</a>.</>,
      <>Allow location access, or enter a ZIP code, to find your nearest Flame.</>,
      <>Open <b>Menu</b> to see your store's menu and order from that location.</>,
      <>Open <b>Catering</b>, add packages and add-ons, and send a quote request with the live estimate.</>,
      <>Browse <b>Locations</b> or the <b>Blog</b> for store details and local guides.</>,
    ]}
    contactCTA={{
      title: "Running a multi-location business?",
      description: "I build web, lead-capture and local SEO systems that bring customers to you directly. Let's talk.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default FlameHibachiPage;
