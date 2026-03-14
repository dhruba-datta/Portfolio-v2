import { Smartphone, FileText, Search } from "lucide-react";
import { BsLayers } from "react-icons/bs";
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
    description="The inaugural version of my personal digital portfolio, designed to be a lightweight, high-performance showcase of technical skills and professional achievements. Engineered with semantic HTML5, modern CSS3, and the Bootstrap framework, this project prioritizes essential web vitals—speed, accessibility, and SEO-friendliness—providing a solid foundation for personal branding on the open web."
    coverSrc="/images/myportfolio-cover.jpg"
    chips={[
      { name: "HTML", icon: <SiHtml5 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "CSS", icon: <SiCss3 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Netlify", icon: <SiNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    githubUrl="https://github.com/dhruba-datta/Portfolio-v1"
    secondaryUrl="https://dhruba-datta-v1.netlify.app/"
    secondaryLabel="Check it out"
    features={[
      { id: "seo", icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Optimized SEO Architecture", summary: "Built for maximum discoverability with semantic markup and meta-data optimization", details: ["Implementation of comprehensive Open Graph and Twitter Card tags for rich social sharing previews", "Strict adherence to semantic HTML5 standards (header, nav, main, footer) to enhance search engine indexing", "XML sitemap and robots.txt configuration to guide crawler access and improve organic search ranking"] },
      { id: "sections", icon: <BsLayers className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Strategic Content Layout", summary: "Professionally structured sections designed to effectively narrate the career journey", details: ["Dedicated 'About Me' and 'Skills' sections to clearly communicate professional value and core competencies", "Dynamic project grid featuring detailed role descriptions, technology stacks, and direct repository links", "Prominent Call-to-Actions (CTAs) for instant resume download and one-click contact methods"] },
      { id: "responsive", icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Responsive Minimalist Design", summary: "Mobile-first philosophy ensuring seamless usability across all device form factors", details: ["Utilization of Bootstrap's responsive grid system for fluid layout adaptation from mobile to desktop", "High-readability typography choices and calculated whitespace to reduce cognitive load", "Accessible color contrast ratios and clearly defined focus states for inclusive navigation"] },
      { id: "showcase", icon: <FileText className="w-4 sm:w-5 h-4 sm:h-5" />, title: "Professional Project Showcase", summary: "Credible presentation of technical work with authentic case study details", details: ["Individual project cards showcasing real-world problem statements and deployed solutions", "Visual technology badges providing a quick snapshot of the stack used for each project", "Integrated linking strategy connecting visitors directly to live demos and GitHub source code"] },
    ]}
    techSectionTitle="Technologies Used"
    techItems={[
      { icon: <SiHtml5 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "HTML5", description: "Semantic, accessible markup structure ensuring broad compatibility and SEO efficiency." },
      { icon: <SiCss3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "CSS3", description: "Modern styling capabilities used for layout precision, typography, and visual responsiveness." },
      { icon: <SiJavascript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "JavaScript (ES6)", description: "Lightweight scripting for interactive UI components, smooth scrolling, and dynamic interactions." },
      { icon: <SiBootstrap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Bootstrap Framework", description: "Rapid development toolkit providing a robust responsive grid system and pre-built components." },
      { icon: <SiNetlify className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Netlify", description: "Modern hosting platform offering continuous deployment (CD) and global edge network delivery." },
    ]}
    useCases={[
      "Professional personal portfolio and interactive digital resume for career advancement",
      "Conversion-optimized landing page for freelancers showcasing case studies and services",
      "Job application hub allowing recruiters to explore detailed project narratives and live links",
      "Clean, accessible starter template for junior developers engaging in personal branding",
    ]}
    howToSteps={[
      <>Clone:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">git clone https://github.com/dhruba-datta/Portfolio-v1</code></>,
      <>Open locally:&nbsp;double-click <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">index.html</code>, or run a local server:&nbsp;<code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">npx serve</code></>,
      <>Customize content in <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">about</code>, <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">skills</code>, <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">projects</code> &amp; <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">contact</code> sections.</>,
      <>Deploy (Netlify): drag the folder or connect the repo for CI/CD.</>,
    ]}
    contactCTA={{
      title: "Need a high-performance web solution?",
      description: "I build scalable, pixel-perfect web applications with React, TypeScript, and modern styling. Let's turn your vision into reality.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "Explore More Work",
    }}
  />
);

export default PortfolioV1Page;
