import {
  Sparkles,
  MousePointer2,
  Layout,
  Zap,
  Menu,
  Smartphone,
} from "lucide-react";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNetlify,
  SiGreensock,
} from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface AquaPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const AquaPage = ({ isDark, toggleTheme }: AquaPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Aqua Innovations"
    description="I built a modern agency website for Aqua that combines smooth scrolling with GSAP animations and a slide-out navigation menu. The site uses modular page sections so the layout can be recomposed for different pitches and case studies, responsive typography for any screen size, and Lenis smooth scroll with GSAP entrance animations for a polished feel."
    coverSrc="/images/projects/Aqua.webp"
    chips={[
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite 7", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "GSAP", icon: <SiGreensock className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Lenis", icon: <MousePointer2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <SiNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/Aqua"
    secondaryUrl="https://www.aquabd.pro/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "scroll-animation",
        icon: <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Smooth Scroll & Entrance Animations",
        summary: "Momentum-based scrolling with GSAP-driven reveals",
        details: [
          "Lenis smooth scroll providing momentum-based scrolling across the site",
          "GSAP animations for hero headings, section reveals, and element entrances",
          "Mouse trail on the hero section that disables on touch devices",
          "Staggered animations across Statement, Industries, and Approach sections",
        ],
      },
      {
        id: "navigation",
        icon: <Menu className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Slide-Out Navigation Menu",
        summary: "Custom menu using transform-origin for the opening animation",
        details: [
          "Slide-out menu triggered from the top-right, with a custom transform-origin animation",
          "Route transitions across Home, Privacy, Terms, and Legal pages",
          "Sticky GET STARTED CTA button in the top-right corner",
          "Responsive design with mobile-optimized touch interactions",
        ],
      },
      {
        id: "section-system",
        icon: <Layout className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Modular Section Components",
        summary: "Pre-built sections that compose the page",
        details: [
          "Reusable sections: Statement, Industries, Approach, Portfolio, Testimonials, Team, and Contact",
          "Each section is self-contained so the page can be recomposed by changing section order",
          "Consistent typography system with fluid sizing across all screen sizes",
          "Unified color and spacing system across sections",
        ],
      },
      {
        id: "responsive",
        icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Responsive Across Devices",
        summary: "Works on mobile, tablet, and desktop screens",
        details: [
          "Mobile-first layout with the slide-out menu collapsing to a drawer on small screens",
          "Fluid typography using CSS clamp so text scales smoothly from 360px phones to 4K displays",
          "Touch-optimized buttons and CTAs with appropriate spacing for thumb reach",
          "Mouse trail disabled on touch devices to avoid layout shifts",
        ],
      },
      {
        id: "performance",
        icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Fast Load Performance",
        summary: "Optimized bundle and rendering",
        details: [
          "React 19 with concurrent rendering for smooth animations",
          "Vite 7 build pipeline with tree-shaking for a minimal bundle size",
          "Background blur and overlays handled in CSS, not JavaScript",
          "Lazy initialization of animations and interactive elements",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Component framework with concurrent rendering for smooth animations and transitions." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vite 7", description: "Build tool for fast development and optimized production bundles." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Utility-first CSS framework for responsive design and fluid typography." },
      { icon: <SiGreensock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "GSAP", description: "Animation library for entrance effects and section reveals." },
      { icon: <MousePointer2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Lenis", description: "Smooth scroll library with momentum-based scrolling." },
      { icon: <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React Router 7", description: "Client-side routing for page navigation." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Hosting with continuous deployment and global CDN." },
    ]}
    useCases={[
      "Digital agencies and creative studios wanting a portfolio site with custom animations",
      "Freelancers needing a modular section-based homepage they can quickly adapt",
      "Teams that want smooth scroll and entrance animations without building from scratch",
    ]}
    howToSectionTitle="Deploy It"
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/Aqua</code></>,
      <>Install:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm install</code></>,
      <>Run dev:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run dev</code>&nbsp;at <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">localhost:5173</code></>,
      <>Build & deploy:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">npm run build</code>&nbsp;then push <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">dist</code> to Netlify</>,
    ]}
    contactCTA={{
      title: "Need a site with smooth animations and custom interactions?",
      description: "I build portfolio and marketing sites with GSAP, Lenis, and modular components that you can customize.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default AquaPage;
