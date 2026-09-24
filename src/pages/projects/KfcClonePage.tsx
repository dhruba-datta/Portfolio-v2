import { Languages, ShoppingCart, Smartphone, Database } from "lucide-react";
import { BiLogoNetlify } from "react-icons/bi";
import { GrStorage } from "react-icons/gr";
import { FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface KfcClonePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const KfcClonePage = ({ isDark, toggleTheme }: KfcClonePageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="KFC Clone"
    description="I built a food ordering site clone in Vue 3 to practice modern frontend patterns. The app features a responsive menu, real-time cart updates, delivery address selection with a map, and support for three languages (English, Bengali, Hindi). It uses Vue I18n to switch languages instantly, and localStorage to persist the cart and delivery address across sessions."
    coverSrc="/images/projects/KFC Clone.webp"
    chips={[
      { name: "Vue 3", icon: <FaVuejs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vue I18n", icon: <Languages className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Leaflet", icon: <GrStorage className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <BiLogoNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/kfc-clone"
    secondaryUrl="https://kfc-bd.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "menu", icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Dynamic Menu & Cart", summary: "Browse products, add to cart, and view order summary", details: ["Categorized product menu for easy browsing", "Add items to cart with instant price updates", "View cart, update quantities, and manage items", "See order total and proceed to checkout"] },
      { id: "multilingual", icon: <Languages className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Multi-Language Support", summary: "Switch between English, Bengali, and Hindi", details: ["Vue I18n for instant language switching without page reload", "Language preference saved to browser storage", "All menu items, labels, and buttons translated", "Easy to add more languages if needed"] },
      { id: "location", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Location & Address Selection", summary: "Choose delivery location with an integrated map", details: ["Leaflet.js map for selecting delivery address", "OpenStreetMap Nominatim API for address search", "Search for and autocomplete address names", "Save delivery address across sessions"] },
      { id: "persistence", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Local Storage Persistence", summary: "Cart and preferences saved in the browser", details: ["Cart contents persist across browser sessions", "Delivery address remembered with localStorage", "Language preference saved between visits", "Cookies used for session data"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Responsive Design", summary: "Works on mobile, tablet, and desktop", details: ["Tailwind CSS for responsive layout", "Touch-friendly buttons and inputs", "Sticky header for consistent navigation", "Adapts smoothly from mobile to desktop"] },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <FaVuejs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vue 3", description: "Progressive JavaScript framework for building the reactive UI." },
      { icon: <RiTailwindCssFill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first CSS framework for responsive design and styling." },
      { icon: <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vue I18n", description: "Internationalization plugin for translating content between languages." },
      { icon: <GrStorage className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Leaflet & Nominatim", description: "Map library for address selection with OpenStreetMap's geocoding API." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite", description: "Build tool for fast development and optimized production builds." },
      { icon: <BiLogoNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Hosting with continuous deployment and global CDN." },
    ]}
    useCases={[
      "Learning Vue 3 with real-world patterns like i18n and cart management",
      "Reference for building multilingual web apps with language persistence",
      "Example of integrating maps and geocoding for location selection",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/kfc-clone</code></>,
      <>Install deps:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code>&nbsp;or&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">pnpm i</code></>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Build:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code>&nbsp;→ preview:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run preview</code></>,
      <>Deploy (Netlify): drag&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">dist</code>&nbsp;to Netlify or connect repo.</>,
    ]}
    contactCTA={{
      title: "Building a multilingual e-commerce app?",
      description: "I build responsive ordering and shopping sites with Vue or React, multilingual support, and browser storage for persistence.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default KfcClonePage;
