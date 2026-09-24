import { Zap, Layout, MousePointer2, Search, Bot } from "lucide-react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface SocialEngagementGroupPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const SocialEngagementGroupPage = ({ isDark, toggleTheme }: SocialEngagementGroupPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Social Engagement Group"
    description="The website for Social Engagement Group, a digital marketing agency. I led its development on Next.js 15 with Turbopack, React 19, Tailwind 4, Framer Motion for scroll-linked animations, and Lenis for smooth scrolling. It features 24+ service pages with a cohesive design system, JSON-LD schema for rich search results and AI interpretation, llms.txt for AI discovery, and optimized WebP/WebM media. Images are compressed 60–80% smaller, and background videos stay under 800KB."
    coverSrc="/images/projects/Social Engagement Group.webp"
    chips={[
      { name: "Next.js 15", icon: <SiNextdotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Framer 12", icon: <SiFramer className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "SEO", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Lenis", icon: <MousePointer2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/SocialEngagementGroup/website"
    secondaryUrl="https://www.socialengagementgroup.com/"
    secondaryLabel="Check it out"
    features={[
      { id: "performance", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "High-Performance Architecture", summary: "Next.js 15 App Router with Turbopack for fast builds", details: ["Next.js 15 App Router with static generation for every route", "Turbopack in development for instant hot reloads", "Image optimisation serving WebP and AVIF with fallbacks", "Immutable one-year cache headers on media files"] },
      { id: "motion", icon: <MousePointer2 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Motion Design", summary: "Scroll-linked animations powered by Lenis and Framer Motion 12", details: ["Lenis smooth scrolling throughout", "Framer Motion 12 for entrance and scroll-triggered effects", "Staggered animations on gallery and service grids", "Light/dark theme with theme init script to prevent flash"] },
      { id: "ai-ready", icon: <Bot className="w-4 sm:w-5 h-4 sm:h-5" />, title: "AI-Ready Infrastructure", summary: "llms.txt and explicit AI crawler permissions", details: ["Published /llms.txt with service offerings and contact info", "robots.txt explicitly allows GPTBot, OAI-SearchBot and ClaudeBot", "Semantic HTML and JSON-LD structured data", "llms.txt kept in sync with sitemap"] },
      { id: "design-system", icon: <Layout className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Design System", summary: "Unified typography and colour across all pages", details: ["Outfit for body text, Playfair Display for headings", "Dynamic page titles with brand suffix", "Modular component library", "Light and dark mode colour palettes"] },
      { id: "seo-reach", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "SEO and Structured Data", summary: "JSON-LD schema and metadata for 24+ routes", details: ["Organization and WebSite schema", "Per-page metadata and OpenGraph tags", "Generated sitemap with next-sitemap", "Canonical URLs"] },
      { id: "asset-optimization", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Media Optimization", summary: "WebP images and VP9 video with minimal file size", details: ["Full WebP and AVIF migration from PNG/JPG", "Video files stay under 800KB using VP9 codec", "Lazy-loading for non-critical images", "CSS gradients instead of background images where possible"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Next.js 15", description: "Powering the platform with App Router, Turbopack, and high-performance server-side rendering." },
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Utilizing the latest React features for efficient state management and concurrent rendering." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Delivering a refined design system with a utility-first approach and lightning-fast compilation." },
      { icon: <SiFramer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Framer Motion 12", description: "Orchestrating enterprise-grade animations and interactive transitions throughout the UX." },
      { icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Lenis Smooth Scroll", description: "Premium cinematic scrolling library creating a fluid, physics-based browsing experience." },
      { icon: <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "JSON-LD Schema", description: "Structured data markup ensuring rich search results and optimal AI agent interpretation." },
      { icon: <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "llms.txt", description: "AI-native site indexing file helping language models understand and navigate site content." },
      { icon: <Layout className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript", description: "Strict type safety ensuring code quality and maintainability across all components." },
    ]}
    useCases={[
      "Agencies that want a website showcasing their own work with modern performance and animations",
      "Businesses with many service lines that need one unified site with consistent branding",
      "Teams that want to be discoverable in AI chatbot searches alongside traditional SEO",
    ]}
    howToSteps={[
      <>Clone repository:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/SocialEngagementGroup/website</code></>,
      <>Install dependencies:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Start development server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Production build:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code></>,
      <>Deploy:&nbsp;Connect your repository to <b>Vercel</b> or <b>Netlify</b> for automated high-performance deployment.</>,
    ]}
    contactCTA={{
      title: "Ready to scale your digital presence?",
      description: "I design and build high-performance, AI-ready platforms for modern agencies. Let's elevate your brand together.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default SocialEngagementGroupPage;
