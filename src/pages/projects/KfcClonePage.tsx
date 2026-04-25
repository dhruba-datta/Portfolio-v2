import { Languages, ShoppingCart, Smartphone, Database, Zap, BadgeCheck } from "lucide-react";
import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
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
    description="Food delivery startups struggle to build professional ordering experiences that work seamlessly across languages and devices without massive development costs. This production-ready food ordering platform solves that by delivering KFC-grade UX with multilingual support, dynamic cart management, and location services - transforming weeks of complex development into a ready-to-deploy foundation that handles the entire ordering flow from discovery to checkout across English, Bengali, and Hindi markets."
    coverSrc="/images/projects/KFC Clone.webp"
    chips={[
      { name: "Vue 3", icon: <FaVuejs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript/ES6+", icon: <BiLogoTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vue I18n", icon: <Languages className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "localStorage", icon: <GrStorage className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <BiLogoNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/kfc-clone"
    secondaryUrl="https://kfc-bd.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "modern-ui", icon: <BadgeCheck className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Modern UI/UX Design", summary: "Aesthetically pleasing minimal layout featuring bold typography and subtle depth effects", details: ["Elegant whitespace management and consistent component spacing for maximum readability", "Sophisticated visual depth using mesh gradients, dot patterns, and glassmorphism cards", "Consistent design language with pill-shaped buttons and interactive hover states", "Intuitive navigation patterns ensuring a seamless user journey from discovery to checkout"] },
      { id: "multilingual", icon: <Languages className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Advanced Multilingual Support", summary: "Seamless real-time language switching capabilities (English, Bengali, Hindi)", details: ["Integrated Vue I18n plugin for instant, page-reload-free content translation", "Automatic persistence of user language preferences using browser local storage", "Comprehensive localization covering menus, UI labels, and system notifications", "Scalable translation architecture allowing easy addition of future languages"] },
      { id: "workflow", icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Full-Cycle Ordering Workflow", summary: "End-to-end simulation of the e-commerce flow: Discovery -> Cart -> Checkout", details: ["Interactive product cards with detailed modals for customization and add-ons", "Real-time cart state management with instant price updates and total calculations", "Simulated checkout process with mock authentication and order history tracking", "Smart cart validation and user feedback mechanisms for a smooth experience"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Mobile-First Responsiveness", summary: "Adaptive interface designed primarily for touch interaction on mobile devices", details: ["Fluid grid layouts that gracefully adapt to smartphones, tablets, and desktops", "Optimized touch targets and gesture-friendly interactions for mobile users", "Keyboard accessible navigation ensuring usability for all input methods", "Consistent visual fidelity and functional parity across all screen sizes"] },
      { id: "performance", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Performance Optimization", summary: "Engineered for speed with modern build tools and best practices", details: ["Powered by Vite for blazing-fast development server and optimized production builds", "Minimal bundle size through tree-shaking and efficient dependency management", "Implementation of lazy loading for images and components to improve Core Web Vitals", "SPA architecture ensures instant page transitions without full reloads"] },
      { id: "persistence", icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Robust Data Persistence", summary: "Reliable state retention across sessions using browser storage APIs", details: ["Secure storage of cart contents and user sessions in localStorage", "Persisted delivery location preferences using Cookies and convenient retrieval", "Integrated map interface (Leaflet.js) for precise delivery address selection", "Designed with API-ready architectural patterns for easy backend integration"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <FaVuejs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vue 3", description: "Progressive JavaScript framework leveraging the Composition API for building reactive, scalable, and modular user interfaces." },
      { icon: <RiTailwindCssFill className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first CSS framework enabling rapid UI development with a customizable and consistent design system." },
      { icon: <BiLogoTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript/ES6+", description: "Strongly typed superset of JavaScript ensuring type safety, better developer tooling, and maintainable codebase." },
      { icon: <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vue I18n", description: "Powerful internationalization plugin handling seamless content translation and language persistence." },
      { icon: <GrStorage className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "localStorage", description: "Browser-based storage API for maintaining cart state and user session data across page reloads." },
      { icon: <BiLogoNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Modern hosting platform providing continuous deployment, Global CDN distribution, and serverless functions." },
    ]}
    useCases={[
      "Rapid prototyping of food delivery or e-commerce startups",
      "Demonstration of advanced Frontend capabilities with Vue 3 and modern CSS",
      "Educational resource for implementing internationalization (i18n) in web apps",
      "Template for businesses needing a location-aware ordering system",
      "Showcase of performant Single Page Application (SPA) architecture",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/kfc-clone</code></>,
      <>Install deps:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code>&nbsp;or&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">pnpm i</code></>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Build:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code>&nbsp;→ preview:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run preview</code></>,
      <>Deploy (Netlify): drag&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">dist</code>&nbsp;to Netlify or connect repo.</>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default KfcClonePage;
