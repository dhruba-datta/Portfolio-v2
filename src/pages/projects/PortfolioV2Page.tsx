import { Globe2, Smartphone, FileText, Zap, Sparkles, Monitor, Accessibility } from "lucide-react";
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
    description="A state-of-the-art personal portfolio website designed to deliver an immersive and interactive user experience. Built with React 18, TypeScript, and Tailwind CSS, it features professional-grade animations powered by Framer Motion, full dark mode support, and a comprehensive showcase of multidisciplinary expertise."
    coverSrc="/images/portfolio-v2-cover.jpg"
    chips={[
      { name: "React 18", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Responsive", icon: <Smartphone className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/Portfolio-v2"
    secondaryUrl="https://dhruba-datta.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "modern", icon: <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Modern Component Architecture", summary: "Scalable and maintainable codebase built on React 18 functional principles", details: ["Utilization of React 18 hooks and functional components for clean, declarative UI logic", "Strict TypeScript integration ensuring compile-time safety and self-documenting code", "Modular component design promoting reusability and consistent styling across all pages", "Architecture organized by feature and domain for improved long-term maintainability"] },
      { id: "animations", icon: <SiFramer className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Professional Motion Design", summary: "High-fidelity micro-interactions and transitions powered by Framer Motion", details: ["Scroll-triggered reveal animations providing a dynamic and engaging browsing experience", "Staggered entrance effects for list items and grids to guide user attention", "Seamless page transitions and polished hover states for a premium app-like feel", "Performance-aware implementation respecting users' reduced motion preferences"] },
      { id: "responsive", icon: <Monitor className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Adaptive Responsive Layouts", summary: "Fluid design system that ensures perfect rendering on any device or viewport", details: ["Mobile-first development methodology guaranteeing core functionality on smaller screens", "Tailwind CSS utility classes for rapid, breakpoint-specific layout adjustments", "Comprehensive dark/light mode theming with smooth, system-aware color transitions", "Rigorous testing across mobile, tablet, and desktop resolutions for visual consistency"] },
      { id: "performance", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "High-Performance Optimization", summary: "Engineered for speed, achieving top-tier Core Web Vitals scores", details: ["Powered by Vite for instant development server starts and optimized production bundles", "Strategic code splitting and route-based lazy loading to minimize initial payload", "Next-gen image optimization and adaptive loading strategies for rapid content paint", "Aggressive tree-shaking to eliminate unused code and keep the application lightweight"] },
      { id: "content", icon: <FileText className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Comprehensive Content Strategy", summary: "A holistic digital presence covering all professional dimensions", details: ["Immersive hero section with animated backgrounds to make a strong first impression", "Detailed 'About' narrative covering professional experience, education, and research work", "Rich project case studies with deep dives into problem solving and tech stacks", "Interactive visualization of technical skills and proficiency levels", "Integrated photography portfolio showcasing creative interests alongside technical ones"] },
      { id: "accessibility", icon: <Accessibility className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Accessibility & SEO Standards", summary: "Built to be inclusive and discoverable by sticking to web best practices", details: ["Strict semantic HTML hierarchy (headings, landmarks) for screen reader compatibility", "Full keyboard navigability ensuring all interactive elements are reachable without a mouse", "Comprehensive meta-tagging and Open Graph data for rich social media sharing", "SEO-forward routing and structure designed for effective search engine indexing"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 18", description: "Utilizing modern concurrent features, custom hooks, and functional components for a reactive UI." },
      { icon: <SiTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript", description: "Ensuring robust code quality through static typing, interfaces, and enhanced developer tooling support." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS", description: "Utility-first framework enabling rapid, constraint-based design implementation and effortless responsiveness." },
      { icon: <SiFramer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Framer Motion", description: "Production-grade animation library for complex gestures, layout transitions, and scroll effects." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite", description: "Next-generation frontend build tool offering HMR and optimized production builds." },
      { icon: <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Router", description: "Industry-standard routing solution for seamless client-side navigation in SPAs." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Deployment Ready", description: "Configured for automated CI/CD pipelines on platforms like Netlify or Vercel." },
    ]}
    useCases={[
      "Primary professional portfolio for senior software engineers and developers",
      "Strategic showcase for highlighting multidisciplinary expertise (e.g., Development, QA, AI)",
      "Robust starting template for building modern, high-performance React/TypeScript applications",
      "Comprehensive career hub for job applications, featuring detailed case studies and CV integration",
      "Unified personal brand platform merging technical projects with creative pursuits like photography",
      "Centralized networking node providing easy access to social profiles and contact channels",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/Portfolio-v2</code></>,
      <>Install dependencies:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Start dev server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code></>,
      <>Customize content in <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">src/components/sections/</code> and <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">src/pages/</code> directories.</>,
      <>Build for production:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code></>,
      <>Deploy to Netlify, Vercel, or any static hosting service.</>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default PortfolioV2Page;
