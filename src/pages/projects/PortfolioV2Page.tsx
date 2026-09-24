import { Sparkles, Smartphone, Activity, Accessibility } from "lucide-react";
import { SiReact, SiTypescript, SiTailwindcss, SiFramer, SiVite, SiNetlify } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface PortfolioV2PageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const PortfolioV2Page = ({ isDark, toggleTheme }: PortfolioV2PageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Portfolio v2"
    description="I rebuilt my portfolio with React 18, TypeScript, and Framer Motion to showcase modern frontend skills. It features scroll-triggered animations, a dark mode, and project case studies that are both interactive and mobile-friendly. This was a milestone where I moved from a static site to a full React application."
    coverSrc="/images/projects/Portfolio v2.webp"
    chips={[
      { name: "React 18", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/Portfolio-v2"
    features={[
      { id: "components", icon: <SiReact className="w-4 sm:w-5 h-4 sm:h-5" />, title: "React Component Architecture", summary: "Organized, reusable React components with proper TypeScript types", details: ["Functional components with custom hooks for state and effects", "Component organization by feature and domain", "Type safety across all props and data", "Modular, maintainable structure"] },
      { id: "animations", icon: <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Framer Motion Animations", summary: "Scroll-triggered reveals and smooth transitions", details: ["Staggered entrance effects for lists and grids", "Scroll-based animations that don't feel jarring", "Respects prefers-reduced-motion for accessibility"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Mobile-First Responsive Design", summary: "Looks good on phones, tablets, and desktops", details: ["Tailwind CSS for rapid responsive layouts", "Dark mode and light mode support", "Touch-friendly navigation"] },
      { id: "dark-mode", icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Dark and Light Themes", summary: "System-aware color switching and manual toggle", details: ["Smooth transitions between themes", "Respects system preferences on first visit", "Manual toggle button for user choice"] },
      { id: "accessibility", icon: <Accessibility className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Semantic HTML and SEO", summary: "Built with accessibility standards in mind", details: ["Proper heading hierarchy and landmarks", "Open Graph and meta tags for sharing", "Keyboard navigable throughout"] },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 18", description: "Functional components with hooks, custom hooks for reusable logic." },
      { icon: <SiTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript", description: "Static type checking for safer code and better IDE support." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first CSS framework for rapid layout and responsive design." },
      { icon: <SiFramer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Framer Motion", description: "Animation library for scroll effects and page transitions." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite", description: "Fast build tool with instant dev server and optimized builds." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Hosting with automatic deployments from GitHub." },
    ]}
    useCases={[
      "A personal portfolio using modern React patterns and animations",
      "Template for other developers wanting to build similar sites",
      "Learning project to master React 18, TypeScript, and design animations",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/Portfolio-v2</code></>,
      <>Install dependencies:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Edit content in <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">src/components/</code>&nbsp;and&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">src/pages/</code></>,
      <>Build for production:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code></>,
    ]}
    contactCTA={{
      title: "Building a React portfolio?",
      description: "I help developers create beautiful, interactive portfolios that showcase their best work.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default PortfolioV2Page;
