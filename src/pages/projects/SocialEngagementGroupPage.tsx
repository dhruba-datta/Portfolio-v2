import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Activity,
  ChevronDown,
  ArrowLeft,
  Zap,
  Layout,
  MousePointer2,
  Search,
  Bot,
  FileJson,
} from "lucide-react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface SocialEngagementGroupPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const SocialEngagementGroupPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/projects/Social Engagement Group.webp",
}: SocialEngagementGroupPageProps) => {
  const navigate = useNavigate();

  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  const chips = [
    { name: "Next.js 15", icon: <SiNextdotjs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Tailwind 4", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Framer 12", icon: <SiFramer className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "SEO", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Lenis", icon: <MousePointer2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  const features = [
    {
      id: "performance",
      icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "High-Performance Architecture",
      summary: "Next.js 15 App Router with Turbopack for lightning-fast loads",
      details: [
        "Utilizes the latest Next.js 15 App Router architecture for optimized server-side rendering and static generation",
        "Turbopack-enabled development environment ensuring near-instantaneous hot module replacement",
        "Strict WebP and WebM asset compression protocols keeping media payloads under 800KB",
        "Optimized hydration cycles to ensure zero flickering during complex page transitions",
      ],
    },
    {
      id: "motion",
      icon: <MousePointer2 className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Immersive Motion Design",
      summary: "Cinematic scroll orchestrations powered by Lenis and Framer Motion 12",
      details: [
        "Integrated Lenis smooth scrolling for a premium, cinematic browsing experience",
        "Complex scroll-linked animations and entrance effects powered by Framer Motion 12",
        "Custom SVG-based liquid transitions and micro-interactions enhancing user engagement",
        "Orchestrated stagger effects for gallery and service grids for a polished feel",
      ],
    },
    {
      id: "ai-ready",
      icon: <Bot className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "AI-Ready Infrastructure",
      summary: "Specialized llms.txt and AI-bot friendly crawler permissions",
      details: [
        "Published a standalone llms.txt site index to assist AI models in understanding core business offerings",
        "Advanced robots.txt configuration explicitly authorizing and guiding major AI crawlers (GPTBot, Claude-Web)",
        "Semantic HTML structure and JSON-LD structured data for rich search engine and AI agent interpretation",
        "AI-optimized meta-tagging for contextual relevance in automated summaries",
      ],
    },
    {
      id: "design-system",
      icon: <Layout className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Enterprise Design System",
      summary: "Unified branding with Outfit and Playfair Display typography",
      details: [
        "Unified typography using Outfit for modern body text and Playfair Display for premium headings",
        "Dynamic branding logic automatically suffixing page titles for maximum brand recall",
        "Modular component library ensuring 100% visual consistency across 24+ service categories",
        "Precision-crafted HSL color palette tailored for both light and dark mode excellence",
      ],
    },
    {
      id: "seo-reach",
      icon: <Search className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Advanced SEO & Reach",
      summary: "JSON-LD schema and metadata overhaul for 24+ global routes",
      details: [
        "Implementation of multi-layered JSON-LD schema including Organization, WebSite, and ProfessionalService",
        "Standardized metadata orchestration for all static and dynamic routes ensuring consistent search appearance",
        "Automated sitemap generation with next-sitemap for high-accuracy crawler indexing",
        "Optimized OpenGraph and Twitter card configurations for high-impact social sharing",
      ],
    },
    {
      id: "asset-optimization",
      icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Optimized Asset Delivery",
      summary: "High-performance WebM (VP9) and WebP media compression",
      details: [
        "Full migration from legacy PNG/JPG formats to optimized WebP, reducing payload by up to 80%",
        "High-performance background video encoding using VP9 codec strictly under 800KB for instant play",
        "Lazy-loading strategies for non-critical images to prioritize Largest Contentful Paint (LCP)",
        "CSS-based mesh gradients and patterns to reduce reliance on large background images",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("performance");

  const toc = [
    { id: "highlights", label: "Feature Highlights", icon: <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "tech", label: "Technologies Used", icon: <BsAppIndicator className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "use-cases", label: "Use Cases", icon: <LuSettings2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "how-to", label: "How to Use", icon: <FileJson className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
  ] as const;

  const [active, setActive] = useState<string>("highlights");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target?.id) setActive(top.target.id);
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      sectionRefs.current[id] = el;
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900${effectiveIsDark ? " dark" : ""} dark:bg-gray-900 dark:text-white`}>
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />
      <main className="flex-grow">
        <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 -z-10">
          <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${coverSrc}')` }} />
          <div className="absolute inset-0 backdrop-blur-[6px] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 dark:from-black/30 dark:via-transparent dark:to-black/20" />
        </div>

        <div className="container mx-auto px-4 sm:px-5 pt-2 sm:pt-3 pb-3 sm:pb-4 max-w-6xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group focus-override"
          >
            <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>
        </div>

        <header className="max-w-6xl mx-auto px-4 sm:px-6 -mt-1 md:-mt-2">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
                Social Engagement Group
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                The official Social Engagement Group (SEG) website is a state-of-the-art agency platform. 
                Engineered for maximum speed and SEO, it utilizes Next.js 15's App Router, Framer Motion 12 for complex animations, and Lenis for cinematic smooth scrolling. 
                The site is optimized for AI agents with specialized indexing and features a comprehensive design system for brand consistency across 24+ routes.
              </p>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {chips.map((c) => (
                  <span key={c.name} className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <span className="text-gray-500 dark:text-gray-400">{c.icon}</span>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile buttons */}
            <div className="flex lg:hidden items-center gap-2 mt-4">
              <a
                href="https://github.com/SocialEngagementGroup/website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override text-sm font-medium"
                aria-label="Repository on GitHub"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <motion.a
                href="https://www.socialengagementgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl
                           border border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20
                           text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition focus-override text-sm font-medium group"
              >
                Check it out
                <div className="relative w-3.5 h-3.5 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
            </div>
            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-2 md:gap-3">
              <a
                href="https://github.com/SocialEngagementGroup/website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 lg:h-11 w-10 lg:w-11 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
                aria-label="Repository on GitHub"
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <motion.a
                href="https://www.socialengagementgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap px-3 lg:px-4 py-2 lg:py-2.5 rounded-full text-sm lg:text-base
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override group"
              >
                Check it out
                <div className="relative w-3.5 h-3.5 lg:w-4 lg:h-4 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <article className="space-y-12 sm:space-y-16 md:space-y-20">
            <section id="highlights" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Feature Highlights</h2>
              </div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800">
                {features.map((f) => {
                  const open = expanded === f.id;
                  return (
                    <div key={f.id} className="border-b last:border-none border-blue-200 dark:border-gray-700 bg-blue-50/30 dark:bg-gray-800">
                      <motion.button onClick={() => setExpanded(open ? null : f.id)} className="w-full flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 text-left hover:bg-blue-100/50 dark:hover:bg-gray-700 transition">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="mt-0.5 text-blue-500 text-sm sm:text-base">{f.icon}</div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">{f.title}</div>
                            {!open && <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{f.summary}</div>}
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
                      </motion.button>
                      <AnimatePresence>
                        {open && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                              <p className="mb-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">{f.summary}</p>
                              <ul className="space-y-2">
                                {f.details.map((d, i) => (
                                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 shrink-0" />
                                    <span className="leading-relaxed">{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="tech" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BsAppIndicator className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Technologies Used</h2>
              </div>
              <ul className="space-y-3 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiNextdotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Next.js 15:</b> Powering the platform with App Router, Turbopack, and high-performance server-side rendering.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 shrink-0" />
                  <span className="text-sm sm:text-base"><b>React 19:</b> Utilizing the latest React features for efficient state management and concurrent rendering.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Tailwind CSS 4:</b> Delivering a refined design system with a utility-first approach and lightning-fast compilation.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiFramer className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Framer Motion 12:</b> Orchestrating enterprise-grade animations and interactive transitions throughout the UX.</span>
                </li>
              </ul>
            </section>

            <section id="use-cases" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <LuSettings2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Use Cases</h2>
              </div>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                <li>Establishing a premium digital presence for fast-growing agencies</li>
                <li>Achieving high performance scores through aggressive asset optimization</li>
                <li>Increasing mobile conversion rates through cinematic smooth-scrolling UX</li>
                <li>Reducing administrative burden by automating LLM-friendly content indexing</li>
              </ul>
            </section>

            <section id="how-to" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileJson className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">How to Use</h2>
              </div>

              <div className="rounded-lg sm:rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <ol className="list-decimal list-inside space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  <li className="leading-relaxed">
                    Clone repository:&nbsp;
                    <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">
                      git clone https://github.com/SocialEngagementGroup/website
                    </code>
                  </li>
                  <li className="leading-relaxed">
                    Install dependencies:&nbsp;
                    <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">
                      npm install
                    </code>
                  </li>
                  <li className="leading-relaxed">
                    Start development server:&nbsp;
                    <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">
                      npm run dev
                    </code>
                  </li>
                  <li className="leading-relaxed">
                    Production build:&nbsp;
                    <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">
                      npm run build
                    </code>
                  </li>
                  <li className="leading-relaxed">
                    Deploy:&nbsp;
                    Connect your repository to <b>Vercel</b> or <b>Netlify</b> for automated high-performance deployment.
                  </li>
                </ol>
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                <AiOutlineAlignLeft className="w-3 h-3" />
                On this page
              </div>
              <div className="relative pl-3">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />
                <nav className="space-y-1">
                  {toc.map((t) => (
                    <button key={t.id} onClick={() => scrollTo(t.id)} className={`relative flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md text-sm transition ${active === t.id ? "font-semibold text-gray-900 dark:text-gray-100" : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"}`}>
                      {active === t.id && <span className="absolute -left-[3px] top-1.5 h-4 w-[2px] rounded bg-gray-900 dark:bg-gray-100" />}
                      <span className="text-gray-400">{t.icon}</span>
                      {t.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>

        <ContactCTA title="Ready to scale your digital presence?" description="I design and build high-performance, AI-ready platforms for modern agencies. Let's elevate your brand together." primaryButtonText="Get In Touch" secondaryButtonText="Explore More Work" />
      </main>
      <Footer />
    </div>
  );
};

export default SocialEngagementGroupPage;
