import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Languages,
  ShoppingCart,
  Smartphone,
  Database,
  Zap,
  ChevronDown,
  ArrowLeft,
  BadgeCheck,     // For modern-ui feature
  Activity,
  FileJson,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
import { GrStorage } from "react-icons/gr";
import { FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface KfcClonePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const KfcClonePage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/kfc-cover.jpg",
}: KfcClonePageProps) => {
  const navigate = useNavigate();

  // local theme fallback
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    { name: "Vue 3", icon: <FaVuejs className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "TailwindCSS", icon: <RiTailwindCssFill className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "TypeScript/ES6+", icon: <BiLogoTypescript className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Vue I18n", icon: <Languages className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "localStorage", icon: <GrStorage className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Netlify", icon: <BiLogoNetlify className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "GitHub", icon: <Github className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  // features
  const features = [
    {
      id: "modern-ui",
      icon: <BadgeCheck className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Modern UI/UX",
      summary: "Minimal layout with bold type & soft depth",
      details: [
        "Elegant spacing and readable line lengths",
        "Subtle mesh/dots background for depth",
        "Consistent pills and glass cards",
      ],
    },
    {
      id: "multilingual",
      icon: <Languages className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Multilingual Support",
      summary: "Real-time language switch (EN/BN/HI)",
      details: ["Vue I18n integration", "Preference persistence", "Instant updates"],
    },
    {
      id: "workflow",
      icon: <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Ordering Workflow",
      summary: "Search → Add to cart → Checkout",
      details: ["Cards & modal details", "Live cart totals", "Mock auth + order history"],
    },
    {
      id: "responsive",
      icon: <Smartphone className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Responsive by default",
      summary: "Mobile-first, touch-friendly UI",
      details: ["Adaptive layout", "Tap targets & keyboard access"],
    },
    {
      id: "performance",
      icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Performance minded",
      summary: "Small deps, lazy images, SPA SEO basics",
      details: ["Vue Router", "Minimal deps", "Lazy image loading"],
    },
    {
      id: "persistence",
      icon: <Database className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Data persistence",
      summary: "API-ready cart & session storage",
      details: ["Cart/session in localStorage", "Easy swap to real APIs"],
    },
  ];
  const [expanded, setExpanded] = useState<string | null>("modern-ui");

  // Right TOC
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
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      sectionRefs.current[id] = el;
      if (el) io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 -z-10">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${coverSrc}')` }}
          />
          <div className="absolute inset-0 backdrop-blur-[6px] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 dark:from-black/30 dark:via-transparent dark:to-black/20" />
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-5 pt-2 sm:pt-3 pb-3 sm:pb-4 max-w-6xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group focus-override"
          >
            <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>
        </div>

        {/* Header */}
        <header className="max-w-6xl mx-auto px-4 sm:px-6 -mt-1 md:-mt-2">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
                KFC Clone
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                A sleek, single-page food ordering app inspired by KFC Bangladesh. Built with Vue 3 and Tailwind, focused on
                performance, multilingual UX, and a clean component architecture.
              </p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {chips.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border
                               border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                               text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-gray-500 dark:text-gray-400">{c.icon}</span>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile buttons */}
            <div className="flex lg:hidden items-center gap-2 mt-4">
              <a
                href="https://github.com/dhruba-datta/kfc-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override text-sm font-medium"
                aria-label="Source code on GitHub"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <motion.a
                href="https://kfc-bd.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl
                           border border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20
                           text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition focus-override text-sm font-medium"
              >
                Check it out <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
            
            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://github.com/dhruba-datta/kfc-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
                aria-label="Source code on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <motion.a
                href="https://kfc-bd.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override"
              >
                Check it out <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </header>

        {/* Layout: main + right toc */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 sm:gap-10 lg:gap-14">
          {/* MAIN */}
          <article className="space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Feature Highlights — chevron on right + click/tap animation */}
            <section id="highlights" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Activity className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">Feature Highlights</h2>
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
                        className="w-full flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 text-left hover:bg-blue-100/50 dark:hover:bg-gray-700 transition focus-override"
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="mt-0.5 text-blue-500">{f.icon}</div>
                          <div>
                            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">{f.title}</div>
                            {!open && (
                              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{f.summary}</div>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
                            <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                              <p className="mb-2 sm:mb-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">{f.summary}</p>
                              <ul className="space-y-1.5 sm:space-y-2">
                                {f.details.map((d, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.15, delay: i * 0.05 }}
                                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2" />
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
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BsAppIndicator className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">Technologies Used</h2>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <FaVuejs className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base"><b>Vue 3:</b> Components, routing & SPA.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <RiTailwindCssFill className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base"><b>Tailwind CSS:</b> Utility-first styling.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <BiLogoTypescript className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base"><b>TypeScript/ES6+:</b> Safer, scalable code.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Languages className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base"><b>Vue I18n:</b> Multilingual UI & persistence.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <GrStorage className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base"><b>localStorage:</b> Cart/session persistence.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <BiLogoNetlify className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm sm:text-base"><b>Netlify:</b> Deploy & host.</span>
                </li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <LuSettings2 className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">Use Cases</h2>
              </div>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="text-sm sm:text-base">Food ordering prototypes & demos</li>
                <li className="text-sm sm:text-base">Real projects with quick API hookup</li>
                <li className="text-sm sm:text-base">Portfolios showcasing SPA/i18n/UX</li>
                <li className="text-sm sm:text-base">Training projects for Vue 3</li>
              </ul>
            </section>

            {/* How to Use */}
            <section id="how-to" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileJson className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">How to Use</h2>
              </div>

              <div className="rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                  <li>
                    Clone:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      git clone https://github.com/dhruba-datta/kfc-clone
                    </code>
                  </li>
                  <li>
                    Install deps:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      npm install
                    </code>
                    &nbsp;or&nbsp;
                    <code className="px-1 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      pnpm i
                    </code>
                  </li>
                  <li>
                    Start dev server:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      npm run dev
                    </code>
                  </li>
                  <li>
                    Build:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      npm run build
                    </code>
                    &nbsp;→ preview:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      npm run preview
                    </code>
                  </li>
                  <li>
                    Deploy (Netlify): drag&nbsp;
                    <code className="px-1 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      dist
                    </code>
                    &nbsp;to Netlify or connect repo.
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
                        className={`relative flex items-center gap-1.5 sm:gap-2 w-full text-left px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm transition ${
                          isActive
                            ? "font-semibold text-gray-900 dark:text-gray-100"
                            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {isActive && (
                          <span className="absolute -left-[3px] top-1 sm:top-1.5 h-3 sm:h-4 w-[2px] rounded bg-gray-900 dark:bg-gray-100" />
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

        {/* Contact CTA Section */}
        <ContactCTA 
          title="Impressed by this project?"
          description="I specialize in creating modern, scalable web applications. Let's discuss how we can work together on your next project."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};

export default KfcClonePage;
