import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe2,
  Smartphone,
  ChevronDown,
  ArrowLeft,
  FileText,
  Activity,
  FileJson,
  Zap,
  Sparkles,
  Monitor,
  Accessibility,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { SiReact, SiTypescript, SiTailwindcss, SiFramer, SiVite, SiNetlify } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface PortfolioV2PageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const PortfolioV2Page = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/portfolio-v2-cover.jpg",
}: PortfolioV2PageProps) => {
  const navigate = useNavigate();

  // local theme fallback (aligns with other project pages)
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    { name: "React 18", icon: <SiReact className="w-3.5 h-3.5" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-3.5 h-3.5" /> },
    { name: "Vite", icon: <SiVite className="w-3.5 h-3.5" /> },
    { name: "Responsive", icon: <Smartphone className="w-3.5 h-3.5" /> },
  ];

  // features (accordion)
  const features = [
    {
      id: "modern",
      icon: <Sparkles className="w-5 h-5" />,
      title: "Modern Architecture",
      summary: "React 18 + TypeScript with component-based architecture",
      details: [
        "Built with React 18 functional components and hooks",
        "Full TypeScript integration for type safety",
        "Modular component structure with reusable UI elements",
        "Clean separation of concerns with organized folder structure",
      ],
    },
    {
      id: "animations",
      icon: <SiFramer className="w-5 h-5" />,
      title: "Smooth Animations",
      summary: "Framer Motion for professional scroll-based animations",
      details: [
        "Scroll-triggered animations with viewport detection",
        "Staggered animations for lists and grids",
        "Smooth page transitions and hover effects",
        "Performance-optimized with reduced motion support",
      ],
    },
    {
      id: "responsive",
      icon: <Monitor className="w-5 h-5" />,
      title: "Responsive Design",
      summary: "Mobile-first approach with Tailwind CSS utility classes",
      details: [
        "Mobile-first responsive design methodology",
        "Tailwind CSS utility-first styling approach",
        "Dark/light theme support with smooth transitions",
        "Optimized for all screen sizes and devices",
      ],
    },
    {
      id: "performance",
      icon: <Zap className="w-5 h-5" />,
      title: "Performance Optimized",
      summary: "Fast loading with Vite build tool and optimized assets",
      details: [
        "Vite for lightning-fast development and builds",
        "Code splitting and lazy loading for optimal performance",
        "Optimized images with proper loading strategies",
        "Tree shaking and bundle optimization",
      ],
    },
    {
      id: "content",
      icon: <FileText className="w-5 h-5" />,
      title: "Comprehensive Sections",
      summary: "Complete portfolio with all essential pages and sections",
      details: [
        "Hero section with animated background effects",
        "About page with experience, education, and research",
        "Projects showcase with detailed case study pages",
        "Skills and tech stack visualization",
        "Photography portfolio and contact forms",
      ],
    },
    {
      id: "accessibility",
      icon: <Accessibility className="w-5 h-5" />,
      title: "Accessible & SEO Ready",
      summary: "WCAG compliant with proper semantic HTML and meta tags",
      details: [
        "Semantic HTML structure for better accessibility",
        "Keyboard navigation and screen reader support",
        "Proper meta tags and Open Graph integration",
        "SEO-optimized structure ready for search engines",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("modern");

  // Right TOC (same structure across pages)
  const toc = [
    { id: "highlights", label: "Feature Highlights", icon: <Activity className="w-4 h-4" /> },
    { id: "tech", label: "Technologies Used", icon: <BsAppIndicator className="w-4 h-4" /> },
    { id: "use-cases", label: "Use Cases", icon: <LuSettings2 className="w-4 h-4" /> },
    { id: "how-to", label: "How to Use", icon: <FileJson className="w-4 h-4" /> },
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
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
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
    <div
      className={`min-h-screen transition-colors duration-300 bg-white text-gray-900${
        effectiveIsDark ? " dark" : ""
      } dark:bg-gray-900 dark:text-white`}
    >
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />

      <main>
        {/* Full-width cover under navbar */}
        <div className="relative h-40 sm:h-56 md:h-64 -z-10">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${coverSrc}')` }}
          />
          <div className="absolute inset-0 backdrop-blur-[6px] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 dark:from-black/30 dark:via-transparent dark:to-black/20" />
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-5 pt-18 pb-8 max-w-6xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group focus-override"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>
        </div>

        {/* Header */}
        <header className="max-w-6xl mx-auto px-4 md:px-6 -mt-2 md:-mt-4">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                Portfolio v2
              </h1>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                A modern, responsive portfolio website showcasing multidisciplinary expertise with React 18, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark theme, and comprehensive project showcases.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border
                               border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                               text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-gray-500 dark:text-gray-400">{c.icon}</span>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub + Live */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://github.com/dhruba-datta/Portfolio-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
                aria-label="Source code on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                View Live <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </header>

        {/* Layout: main + right toc */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-14">
          {/* MAIN */}
          <article className="space-y-20">
            {/* Feature Highlights */}
            <section id="highlights" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 shrink-0 text-blue-500" />
                <h2 className="text-2xl md:text-3xl font-bold leading-none">Feature Highlights</h2>
              </div>

              <div className="rounded-2xl overflow-hidden border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800">
                {features.map((f) => {
                  const open = expanded === f.id;
                  return (
                    <div
                      key={f.id}
                      className="border-b last:border-none border-blue-200 dark:border-gray-700 bg-blue-50/30 dark:bg-gray-800"
                    >
                      <motion.button
                        whileTap={{ scale: 0.995 }}
                        onClick={() => setExpanded(open ? null : f.id)}
                        className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-blue-100/50 dark:hover:bg-gray-700 transition focus-override"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-blue-500">{f.icon}</div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-gray-100">{f.title}</div>
                            {!open && (
                              <div className="text-sm text-gray-600 dark:text-gray-300">{f.summary}</div>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pt-0">
                              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{f.summary}</p>
                              <ul className="space-y-2">
                                {f.details.map((d, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.15, delay: i * 0.05 }}
                                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                    <span>{d}</span>
                                  </motion.li>
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

            {/* Technologies Used */}
            <section id="tech" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-4">
                <BsAppIndicator className="w-5 h-5 shrink-0 text-blue-500" />
                <h2 className="text-2xl md:text-3xl font-bold leading-none">Technologies Used</h2>
              </div>

              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiReact className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>React 18</b> — Modern functional components with hooks and concurrent features.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiTypescript className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>TypeScript</b> — Type-safe development with interfaces and strict typing.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiTailwindcss className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Tailwind CSS</b> — Utility-first CSS framework for rapid UI development.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiFramer className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Framer Motion</b> — Production-ready motion library for smooth animations.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiVite className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Vite</b> — Next-generation frontend tooling for fast development and builds.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Globe2 className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>React Router</b> — Declarative routing for single-page application navigation.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiNetlify className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Deployment Ready</b> — Optimized for Netlify, Vercel, or any static hosting.</span>
                </li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-4">
                <LuSettings2 className="w-5 h-5 shrink-0 text-blue-500" />
                <h2 className="text-2xl md:text-3xl font-bold leading-none">Use Cases</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Professional portfolio for software engineers and developers</li>
                <li>Showcase for multidisciplinary expertise (development, QA, AI, research)</li>
                <li>Template for modern React/TypeScript portfolio projects</li>
                <li>Job application showcase with comprehensive project case studies</li>
                <li>Photography portfolio integration with technical skills</li>
                <li>Contact and networking platform for professional opportunities</li>
              </ul>
            </section>

            {/* How to Use */}
            <section id="how-to" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-4">
                <FileJson className="w-5 h-5 shrink-0 text-blue-500" />
                <h2 className="text-2xl md:text-3xl font-bold leading-none">How to Use</h2>
              </div>

              <div className="rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-6 space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
                  <li>
                    Clone the repository:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      git clone https://github.com/dhruba-datta/Portfolio-v2
                    </code>
                  </li>
                  <li>
                    Install dependencies:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npm install
                    </code>
                  </li>
                  <li>
                    Start development server:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npm run dev
                    </code>
                  </li>
                  <li>
                    Customize content in <code>src/components/sections/</code> and <code>src/pages/</code> directories.
                  </li>
                  <li>
                    Build for production:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npm run build
                    </code>
                  </li>
                  <li>
                    Deploy to Netlify, Vercel, or any static hosting service.
                  </li>
                </ol>
              </div>
            </section>
          </article>

          {/* RIGHT TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                <AiOutlineAlignLeft className="w-3 h-3" />
                On this page
              </div>
              <div className="relative pl-3">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />
                <nav className="space-y-1">
                  {toc.map((t) => {
                    const isActive = active === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => scrollTo(t.id)}
                        className={`relative flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md text-sm transition ${
                          isActive
                            ? "font-semibold text-gray-900 dark:text-gray-100"
                            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {isActive && (
                          <span className="absolute -left-[3px] top-1.5 h-4 w-[2px] rounded bg-gray-900 dark:bg-gray-100" />
                        )}
                        <span className="text-gray-400">{t.icon}</span>
                        {t.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile CTA - Show both GitHub and main action */}
        <div className="sm:hidden mt-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/dhruba-datta/Portfolio-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium focus-override"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium focus-override"
            >
              View Live <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact CTA Section */}
        <ContactCTA
          title="Need a modern portfolio like this?"
          description="I build professional, responsive portfolios with React, TypeScript, and modern animations. Let's create yours."
          primaryButtonText="Get In Touch"
          secondaryButtonText="View More Projects"
        />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioV2Page;
