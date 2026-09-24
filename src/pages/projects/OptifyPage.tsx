import { Sparkles, Search, Bot, ShieldCheck, FileText, ToggleLeft, TestTube2, Route, Layers } from "lucide-react";
import { SiReact, SiTypescript, SiTailwindcss, SiVite, SiVercel, SiMdx } from "react-icons/si";
import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

interface OptifyPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const OptifyPage = ({ isDark, toggleTheme }: OptifyPageProps) => (
  <ProjectPageTemplate
    isDark={isDark}
    toggleTheme={toggleTheme}
    title="Optify"
    description="Optify is an AI transformation company that builds AI automation, AI agents and AI strategy for businesses, with the message that AI should do the work while people stay in control. It needed a website that looks like an AI company and is easy for both search engines and AI assistants to read. I built the new optifyllc.com: a statically exported React site with shader-driven visuals, a journal written in MDX, and an SEO and AI-search layer that generates structured data, sitemaps, llms.txt and Markdown versions of every page at build time."
    coverSrc="/images/projects/Optify.webp"
    chips={[
      { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vite 8", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "MDX", icon: <SiMdx className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
      { name: "Vercel", icon: <SiVercel className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    ]}
    secondaryUrl="https://optifyllc.com/"
    secondaryLabel="Check it out"
    features={[
      {
        id: "visuals",
        icon: <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Shader-Driven Visual System",
        summary: "WebGL/WebGPU shader backgrounds and scroll-driven motion",
        details: [
          "Animated shader backgrounds built with Paper Design shaders",
          "Scroll reveal, stacked-card scroll and a journal carousel built on IntersectionObserver",
          "Services (AI Automation, AI Agents, AI Strategy & Implementation) and solutions for sales, customer operations, back office and knowledge",
          "A custom retro-TV 404 page",
        ],
      },
      {
        id: "ai-search",
        icon: <Bot className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Built for AI Search",
        summary: "Every page is published in a form AI assistants can read directly",
        details: [
          "llms.txt and llms-full.txt generated at build time",
          "A Markdown copy of every page under /md/, linked from the page with rel=\"alternate\"",
          "robots.txt that names and allows AI crawlers",
          "A test that fails the build if a Markdown copy drifts from its page",
        ],
      },
      {
        id: "seo",
        icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Structured Data & SEO",
        summary: "Per-page metadata and JSON-LD for the company, pages and articles",
        details: [
          "Per-page metadata built from one SEO helper",
          "JSON-LD for Organization, WebSite, FAQPage, BlogPosting and BreadcrumbList",
          "Sitemap generated from the same routes the site renders",
          "Canonical URLs on every page",
        ],
      },
      {
        id: "journal",
        icon: <FileText className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "MDX Journal",
        summary: "A journal of notes written in MDX and compiled at build time",
        details: [
          "Journal posts written as MDX files in the repo, no CMS to maintain",
          "A build script compiles the journal and writes the sitemap, feeds and Markdown copies",
          "BlogPosting structured data per post",
          "Journal carousel on the homepage",
        ],
      },
      {
        id: "migration",
        icon: <Route className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Clean Migration From WordPress",
        summary: "Old URLs handled so the move kept search equity",
        details: [
          "308 permanent redirects from legacy blog and page URLs to their new homes",
          "410 Gone for retired WordPress URLs so search engines drop them quickly",
          "Clean URLs without .html extensions",
          "Deploys only from the main branch",
        ],
      },
      {
        id: "security",
        icon: <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Security Headers",
        summary: "A locked-down static site with strict headers",
        details: [
          "Content Security Policy",
          "HSTS with preload",
          "X-Frame-Options DENY and a restrictive Permissions-Policy",
          "Static export, so there is no server to attack",
        ],
      },
      {
        id: "flags",
        icon: <ToggleLeft className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Section Visibility Flags",
        summary: "Sections and routes can be switched on or off from one file",
        details: [
          "One visibility file controls which sections and routes are live",
          "Navigation, sitemap and tests all read the same flags",
          "Unfinished sections can ship dark without breaking links",
          "Makes staged launches a one-line change",
        ],
      },
      {
        id: "tests",
        icon: <TestTube2 className="w-4 sm:w-5 h-4 sm:h-5" />,
        title: "Tested Build Output",
        summary: "Tests run against the built HTML, not just the source",
        details: [
          "34 tests that check the rendered HTML of the built site",
          "Accessibility linting with jsx-a11y",
          "Legacy blog redirects covered by the same test suite",
          "Quality targets of Lighthouse 95+ and WCAG 2.1 AA set in the project brief",
        ],
      },
    ]}
    techSectionTitle="Stack"
    techItems={[
      { icon: <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "React 19", description: "UI for every page, section and interactive component." },
      { icon: <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "vinext on Vite 8", description: "Next.js App Router conventions running on Vite, exported as a static site." },
      { icon: <SiTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "TypeScript", description: "Typed company data, schema builders and content across the site." },
      { icon: <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Tailwind CSS 4", description: "Utility-first styling for the visual system." },
      { icon: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Paper Design Shaders", description: "WebGL/WebGPU shader backgrounds." },
      { icon: <SiMdx className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "MDX", description: "Journal posts compiled at build time." },
      { icon: <SiVercel className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, label: "Vercel", description: "Static hosting with redirects, clean URLs and security headers." },
    ]}
    useCases={[
      "AI and technology companies that need a site that matches the product",
      "Making a company easy for ChatGPT, Claude and other assistants to read and cite",
      "Moving off WordPress without losing search traffic",
      "Publishing a journal without running a CMS",
      "Staging a site launch section by section behind visibility flags",
    ]}
    howToSteps={[
      <>Visit&nbsp;<a href="https://optifyllc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">optifyllc.com</a>.</>,
      <>Explore the services and solutions sections on the homepage.</>,
      <>Read the <b>Journal</b> for notes on applying AI at work.</>,
      <>Open <a href="https://optifyllc.com/llms.txt" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">/llms.txt</a> to see the site as an AI assistant reads it.</>,
      <>Use <b>Contact</b> to reach the team.</>,
    ]}
    contactCTA={{
      title: "Need a site built for AI search?",
      description: "I build fast, well-structured websites that search engines and AI assistants can read. Let's talk.",
      primaryButtonText: "Get In Touch",
      secondaryButtonText: "View All Projects",
    }}
  />
);

export default OptifyPage;
