import { Clapperboard, Building2, Search, Accessibility, Palette, Mail, Filter, Smartphone } from "lucide-react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface MantissaPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const MantissaPage = ({ isDark, toggleTheme }: MantissaPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Mantissa Design"
    description="Mantissa Design & Consultant is an architecture and engineering consultancy in Dhaka, practising since 1997. It needed a website that reflects nearly three decades of practice and explains its full range of services. I designed and built the new mantissadesign.com on Next.js 16: a cinematic, scroll-driven site that walks visitors from vision to built reality, presents eight service lines, and is structured for local search with detailed schema.org data."
    coverSrc="/images/projects/Mantissa Design.webp"
    chips={[
      { name: "Next.js 16", icon: <SiNextdotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "SEO", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vercel", icon: <SiVercel className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://mantissadesign.com/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "journey",
        icon: <Clapperboard className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Cinematic Scroll Journey",
        summary: "An eight-stage scroll story from first sketch to finished building",
        details: [
          "Cinematic hero built around the line \"From Vision to Built Reality\"",
          "Eight-stage scroll journey that follows a project from planning to handover",
          "Scroll reveals built on IntersectionObserver and requestAnimationFrame",
          "All motion respects prefers-reduced-motion in both CSS and JavaScript",
        ],
      },
      {
        id: "services",
        icon: <Building2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Eight Service Lines",
        summary: "Clear pages for everything the firm does, from planning to retrofit",
        details: [
          "Planning, architecture, structural engineering and foundation engineering",
          "Documentation, construction management and site supervision",
          "Assessment and retrofit of existing buildings",
          "Dedicated Services, Expertise, Research and About pages",
        ],
      },
      {
        id: "portfolio",
        icon: <Filter className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Project Showcase",
        summary: "Filterable project gallery with detail pages",
        details: [
          "Project gallery with category filtering",
          "Individual project pages from typed content files",
          "Related-projects carousel to keep visitors browsing",
          "All content kept in TypeScript data files, no CMS to maintain",
        ],
      },
      {
        id: "seo",
        icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Local SEO & Structured Data",
        summary: "Detailed schema.org markup for a professional services firm",
        details: [
          "JSON-LD for ProfessionalService, WebSite, Service catalog, FAQPage, BreadcrumbList and CreativeWork",
          "Open Graph and Twitter cards on every page",
          "Generated sitemap and robots.txt with a canonical domain",
          "Page titles targeted at architecture and engineering searches in Dhaka",
        ],
      },
      {
        id: "a11y",
        icon: <Accessibility className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Accessibility",
        summary: "Audited and fixed against PageSpeed accessibility checks",
        details: [
          "Skip link and keyboard-friendly navigation",
          "Fixes from a PageSpeed accessibility audit",
          "Reduced-motion support across every animation",
          "Custom accessible select input for the contact form",
        ],
      },
      {
        id: "design-system",
        icon: <Palette className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Design Tokens",
        summary: "One token set and type scale behind every page",
        details: [
          "Around 65 CSS custom properties for colour, spacing and surfaces",
          "Shared type scale with the Outfit typeface",
          "Header colours that change by route",
          "A refactor pass that consolidated tokens and tightened the journey section",
        ],
      },
      {
        id: "contact",
        icon: <Mail className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Contact Flow",
        summary: "Validated enquiry form that emails the firm directly",
        details: [
          "Contact form sent through EmailJS, no server to run",
          "Inline validation and status messages",
          "Template parameters normalised in one helper",
          "Hardened against empty and malformed submissions",
        ],
      },
      {
        id: "pwa",
        icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Installable & Mobile-First",
        summary: "Web app manifest and icons so the site can be installed",
        details: [
          "Web app manifest with 192, 512 and 180 px icons",
          "Responsive layouts designed for phones first",
          "Static rendering on Vercel for fast loads",
          "Footer social links and a consistent contact point",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Next.js 16", description: "App Router with generated metadata, sitemap, robots and manifest." },
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "Components for the scroll journey, project filter and carousels." },
      { icon: <SiTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript", description: "Typed company, service and project data." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Utility styling on top of a custom token system." },
      { icon: <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "EmailJS", description: "Contact form delivery straight from the browser." },
      { icon: <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "schema.org JSON-LD", description: "Structured data for the firm, its services and pages." },
      { icon: <SiVercel className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vercel", description: "Production hosting." },
    ]}
    useCases={[
      "Architecture and engineering firms that need to show long experience and a wide service range",
      "Professional services firms competing in local search",
      "Turning a long delivery process into a story visitors scroll through",
      "Small teams that want a site they can update by editing data files",
    ]}
    howToSteps={[
      <>Visit&nbsp;<a href="https://mantissadesign.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">mantissadesign.com</a>.</>,
      <>Scroll the homepage journey from planning to handover.</>,
      <>Open <b>Services</b> to see the eight service lines.</>,
      <>Browse <b>Projects</b> and filter by category.</>,
      <>Send an enquiry from <b>Contact</b>.</>,
    ]}
    contactCTA={{
      title: "Need a site for your practice?",
      description: "I build fast, well-structured websites for professional services firms. Let's talk.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default MantissaPage;
