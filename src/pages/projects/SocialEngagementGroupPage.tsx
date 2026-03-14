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
    description="The official Social Engagement Group (SEG) website is a state-of-the-art agency platform. Engineered for maximum speed and SEO, it utilizes Next.js 15's App Router, Framer Motion 12 for complex animations, and Lenis for cinematic smooth scrolling. The site is optimized for AI agents with specialized indexing and features a comprehensive design system for brand consistency across 24+ routes."
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
      { id: "performance", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "High-Performance Architecture", summary: "Next.js 15 App Router with Turbopack for lightning-fast loads", details: ["Utilizes the latest Next.js 15 App Router architecture for optimized server-side rendering and static generation", "Turbopack-enabled development environment ensuring near-instantaneous hot module replacement", "Strict WebP and WebM asset compression protocols keeping media payloads under 800KB", "Optimized hydration cycles to ensure zero flickering during complex page transitions"] },
      { id: "motion", icon: <MousePointer2 className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Immersive Motion Design", summary: "Cinematic scroll orchestrations powered by Lenis and Framer Motion 12", details: ["Integrated Lenis smooth scrolling for a premium, cinematic browsing experience", "Complex scroll-linked animations and entrance effects powered by Framer Motion 12", "Custom SVG-based liquid transitions and micro-interactions enhancing user engagement", "Orchestrated stagger effects for gallery and service grids for a polished feel"] },
      { id: "ai-ready", icon: <Bot className="w-4 sm:w-5 h-4 sm:h-5" />, title: "AI-Ready Infrastructure", summary: "Specialized llms.txt and AI-bot friendly crawler permissions", details: ["Published a standalone llms.txt site index to assist AI models in understanding core business offerings", "Advanced robots.txt configuration explicitly authorizing and guiding major AI crawlers (GPTBot, Claude-Web)", "Semantic HTML structure and JSON-LD structured data for rich search engine and AI agent interpretation", "AI-optimized meta-tagging for contextual relevance in automated summaries"] },
      { id: "design-system", icon: <Layout className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Enterprise Design System", summary: "Unified branding with Outfit and Playfair Display typography", details: ["Unified typography using Outfit for modern body text and Playfair Display for premium headings", "Dynamic branding logic automatically suffixing page titles for maximum brand recall", "Modular component library ensuring 100% visual consistency across 24+ service categories", "Precision-crafted HSL color palette tailored for both light and dark mode excellence"] },
      { id: "seo-reach", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Advanced SEO & Reach", summary: "JSON-LD schema and metadata overhaul for 24+ global routes", details: ["Implementation of multi-layered JSON-LD schema including Organization, WebSite, and ProfessionalService", "Standardized metadata orchestration for all static and dynamic routes ensuring consistent search appearance", "Automated sitemap generation with next-sitemap for high-accuracy crawler indexing", "Optimized OpenGraph and Twitter card configurations for high-impact social sharing"] },
      { id: "asset-optimization", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Optimized Asset Delivery", summary: "High-performance WebM (VP9) and WebP media compression", details: ["Full migration from legacy PNG/JPG formats to optimized WebP, reducing payload by up to 80%", "High-performance background video encoding using VP9 codec strictly under 800KB for instant play", "Lazy-loading strategies for non-critical images to prioritize Largest Contentful Paint (LCP)", "CSS-based mesh gradients and patterns to reduce reliance on large background images"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Next.js 15", description: "Powering the platform with App Router, Turbopack, and high-performance server-side rendering." },
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Utilizing the latest React features for efficient state management and concurrent rendering." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Delivering a refined design system with a utility-first approach and lightning-fast compilation." },
      { icon: <SiFramer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Framer Motion 12", description: "Orchestrating enterprise-grade animations and interactive transitions throughout the UX." },
    ]}
    useCases={[
      "Establishing a premium digital presence for fast-growing agencies",
      "Achieving high performance scores through aggressive asset optimization",
      "Increasing mobile conversion rates through cinematic smooth-scrolling UX",
      "Reducing administrative burden by automating LLM-friendly content indexing",
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
