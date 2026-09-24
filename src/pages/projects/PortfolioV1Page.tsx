import { Smartphone, FileText, Search, Zap } from "lucide-react";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiNetlify } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface PortfolioV1PageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const PortfolioV1Page = ({ isDark, toggleTheme }: PortfolioV1PageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Portfolio v1"
    description="My first portfolio site, built with plain HTML, CSS and JavaScript to showcase my early projects. It is a single lightweight page that works on mobile, with semantic markup and meta tags for search. It was my starting point before I moved to React."
    coverSrc="/images/projects/Portfolio v1.webp"
    chips={[
      { name: "HTML5", icon: <SiHtml5 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "CSS3", icon: <SiCss3 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <SiNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/Portfolio-v1"
    secondaryUrl="https://dhruba-datta-v1.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "semantic", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Semantic HTML and SEO", summary: "Built with accessibility and search in mind", details: ["Proper heading hierarchy and semantic tags for screen readers and crawlers", "Open Graph and Twitter Card meta tags for social sharing", "XML sitemap and robots.txt for indexing"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Mobile-First Responsive Design", summary: "Works smoothly on phones, tablets and desktops", details: ["Bootstrap grid for flexible layouts across devices", "Touch-friendly navigation and readable typography", "Tested on common screen sizes"] },
      { id: "content", icon: <FileText className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Project Showcase", summary: "Sections for about, skills and projects", details: ["Individual project cards with descriptions and links", "Skills and technology badges", "Resume download and contact methods"] },
      { id: "speed", icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Fast Load Times", summary: "No frameworks, no bloat", details: ["Plain HTML and CSS, minimal JavaScript", "Single HTTP requests for most assets", "Instant time to first paint"] },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiHtml5 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "HTML5", description: "Semantic markup with proper heading hierarchy and accessibility features." },
      { icon: <SiCss3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "CSS3", description: "Layout with Flexbox and Grid, responsive design patterns, custom animations." },
      { icon: <SiJavascript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vanilla JavaScript", description: "Smooth scroll navigation, form handling, and interactive elements." },
      { icon: <SiBootstrap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Bootstrap", description: "Responsive grid and component library for rapid prototyping." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Static hosting with automatic deployments from Git." },
    ]}
    useCases={[
      "A learning project to understand frontend basics and deployment",
      "Portfolio template for junior developers starting their journey",
      "Proof of concept for a static site before moving to more complex frameworks",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/Portfolio-v1</code></>,
      <>Open locally:&nbsp;double-click <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">index.html</code>&nbsp;in your browser, or run&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npx serve</code></>,
      <>Edit the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">index.html</code>&nbsp;to add your own content</>,
      <>Deploy to Netlify by connecting the repo, or drag the folder to their interface</>,
    ]}
    contactCTA={{
      title: "Building your first site?",
      description: "I help developers build and deploy their portfolios, from static sites to full React apps.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default PortfolioV1Page;
