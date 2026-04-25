import { type ReactNode, useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Activity,
  FileJson,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../ui/Navigation";
import Footer from "../ui/Footer";
import ProjectCard from "../ui/ProjectCard";
import ContactCTA from "../sections/ContactCTA";
import { projects } from "../../data/projects";

/* ─── Types ─── */

export interface Chip {
  name: string;
  icon: ReactNode;
}

export interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  summary: string;
  details: string[];
}

export interface TechItem {
  icon: ReactNode;
  label: string;
  description: string;
}

export interface ContactCTAData {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export interface TocItem {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface ProjectPageTemplateProps {
  isDark?: boolean;
  toggleTheme?: () => void;

  /* Header */
  title: string;
  description: ReactNode;
  coverSrc: string;
  chips: Chip[];

  /* Buttons */
  githubUrl?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;

  /* Sections */
  features: Feature[];
  techSectionTitle?: string;
  techItems: TechItem[];
  useCases: string[];
  howToSectionTitle?: string;
  howToSteps: ReactNode[];

  /* TOC override (optional) */
  toc?: TocItem[];

  /* CTA */
  contactCTA: ContactCTAData;
}

/* ─── Component ─── */

const ProjectPageTemplate = ({
  isDark,
  toggleTheme,
  title,
  description,
  coverSrc,
  chips,
  githubUrl,
  secondaryUrl,
  secondaryLabel = "Open Folder",
  features,
  techSectionTitle = "Technologies Used",
  techItems,
  useCases,
  howToSectionTitle = "How to Use",
  howToSteps,
  toc: tocOverride,
  contactCTA,
}: ProjectPageTemplateProps) => {
  const location = useLocation();

  /* Current project lookup (from URL) — gives access to data not passed as props */
  const currentProject = useMemo(
    () => projects.find((p) => `/projects/${p.id}` === location.pathname),
    [location.pathname]
  );

  /* Prev / Next within same category */
  const { prev, next } = useMemo(() => {
    if (!currentProject) return { prev: null, next: null };
    const sameCategory = projects.filter((p) => p.category === currentProject.category);
    const idx = sameCategory.findIndex((p) => p.id === currentProject.id);
    return {
      prev: idx > 0 ? sameCategory[idx - 1] : null,
      next: idx >= 0 && idx < sameCategory.length - 1 ? sameCategory[idx + 1] : null,
    };
  }, [currentProject]);

  /* Related projects (manual override via relatedIds, else first 3 same-category siblings) */
  const relatedProjects = useMemo(() => {
    if (!currentProject) return [];
    if (currentProject.relatedIds && currentProject.relatedIds.length > 0) {
      return currentProject.relatedIds
        .map((id) => projects.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => Boolean(p));
    }
    return projects
      .filter((p) => p.category === currentProject.category && p.id !== currentProject.id)
      .slice(0, 3);
  }, [currentProject]);

  /* Theme fallback */
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  /* Feature accordion */
  const [expanded, setExpanded] = useState<string | null>(features[0]?.id ?? null);

  /* TOC */
  const defaultToc: TocItem[] = [
    { id: "highlights", label: "Feature Highlights", icon: <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "tech", label: techSectionTitle, icon: <BsAppIndicator className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "use-cases", label: "Use Cases", icon: <LuSettings2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "how-to", label: "How to Use", icon: <FileJson className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
  ];
  const toc = tocOverride ?? defaultToc;

  const [active, setActive] = useState<string>(toc[0]?.id ?? "highlights");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* SEO metadata derived from props + project data */
  const SITE_URL = "https://dhruba-datta.netlify.app";
  const pageTitle = `${title} | Dhruba Datta`;
  const metaDescription =
    currentProject?.tagline ?? (typeof description === "string" ? description : title);
  const absoluteImageUrl = coverSrc.startsWith("http") ? coverSrc : `${SITE_URL}${coverSrc}`;
  const absolutePageUrl = `${SITE_URL}${location.pathname}`;
  const keywords = chips.map((c) => c.name).join(", ");

  const projectJsonLd = currentProject
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: title,
        description: metaDescription,
        image: absoluteImageUrl,
        url: absolutePageUrl,
        datePublished: currentProject.year,
        creator: {
          "@type": "Person",
          name: "Dhruba Datta",
          url: SITE_URL,
        },
        keywords,
        ...(currentProject.github ? { codeRepository: currentProject.github } : {}),
        ...(currentProject.liveUrl ? { sameAs: [currentProject.liveUrl] } : {}),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
      { "@type": "ListItem", position: 3, name: title, item: absolutePageUrl },
    ],
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900${
        effectiveIsDark ? " dark" : ""
      } dark:bg-[#0a0f1c] dark:text-white`}
    >
      {/* React 19 native metadata — hoisted into <head> */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={absolutePageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={absolutePageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={absoluteImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={absolutePageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* JSON-LD: project + breadcrumb */}
      {projectJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />

      <main className="flex-grow">
        {/* Cover */}
        <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 -z-10">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${coverSrc}')` }}
          />
          <div className="absolute inset-0 backdrop-blur-[6px] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 dark:from-black/30 dark:via-transparent dark:to-black/20" />
        </div>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 sm:px-5 pt-2 sm:pt-3 pb-3 sm:pb-4 max-w-6xl">
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-outfit text-gray-500 dark:text-gray-400"
          >
            <Link
              to="/"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors focus-override"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60" aria-hidden />
            <Link
              to="/projects"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors focus-override"
            >
              Projects
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60" aria-hidden />
            <span
              className="text-gray-900 dark:text-gray-100 font-medium truncate"
              aria-current="page"
            >
              {title}
            </span>
          </motion.nav>
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 -mt-1 md:-mt-2"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
            <div className="flex-1">
              <h1 className="text-gray-900 dark:text-gray-100">
                {title}
              </h1>

              {/* Quick-facts strip — Year · Role · Outcome */}
              {currentProject && (
                <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-xs sm:text-sm font-outfit text-gray-500 dark:text-gray-400">
                  <span>{currentProject.year}</span>
                  <span className="opacity-40" aria-hidden>·</span>
                  <span>{currentProject.role}</span>
                  {currentProject.outcome && (
                    <>
                      <span className="opacity-40" aria-hidden>·</span>
                      <span>{currentProject.outcome}</span>
                    </>
                  )}
                </div>
              )}

              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-3 sm:mb-4">
                {description}
              </p>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {chips.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-outfit font-medium border
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
            {(githubUrl || secondaryUrl) && (
            <div className="flex lg:hidden items-center gap-2 mt-4">
              {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override text-sm font-medium font-outfit"
                aria-label="Repository on GitHub"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              )}
              {secondaryUrl && (
              <motion.a
                href={secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl
                           border border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20
                           text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition focus-override text-sm font-medium group font-outfit"
              >
                {secondaryLabel}
                <div className="relative w-3.5 h-3.5 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
              )}
            </div>
            )}

            {/* Desktop buttons */}
            {(githubUrl || secondaryUrl) && (
            <div className="hidden lg:flex items-center gap-2 md:gap-3">
              {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={
                  secondaryUrl 
                    ? "inline-flex h-10 lg:h-11 w-10 lg:w-11 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
                    : "inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap px-3 lg:px-4 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-outfit border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override group"
                }
                aria-label="Repository on GitHub"
              >
                <Github className={secondaryUrl ? "w-4 h-4 lg:w-5 lg:h-5" : "w-4 h-4 lg:w-5 lg:h-5"} />
                {!secondaryUrl && <span>View on GitHub</span>}
              </motion.a>
              )}
              {secondaryUrl && (
              <motion.a
                href={secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap px-3 lg:px-4 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-outfit
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override group"
              >
                {secondaryLabel}
                <div className="relative w-3.5 h-3.5 lg:w-4 lg:h-4 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
              )}
            </div>
            )}
          </div>
        </motion.header>

        {/* Layout: main + right toc */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {/* MAIN */}
          <div className="min-w-0">
            {/* Mobile TOC (collapsible) — outside <article> so its space-y rules don't push the first section down */}
            <details className="lg:hidden mb-6 sm:mb-8 group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/40 open:bg-gray-50 dark:open:bg-gray-800/60 transition-colors">
              <summary className="flex items-center justify-between gap-2 px-4 py-3 cursor-pointer list-none text-sm font-outfit font-medium text-gray-700 dark:text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <AiOutlineAlignLeft className="w-3.5 h-3.5 text-gray-400" />
                  On this page
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <nav className="px-2 pb-2">
                {toc.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => scrollTo(t.id)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-left text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors focus-override font-outfit"
                  >
                    <span className="text-gray-400">{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </nav>
            </details>

            <article className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Feature Highlights */}
            <section id="highlights" className="scroll-mt-24 sm:scroll-mt-28">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">Feature Highlights</h2>
              </motion.div>

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800">
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
                        className="w-full flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 text-left hover:bg-blue-100/50 dark:hover:bg-gray-700 transition"
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="mt-0.5 text-blue-500 text-sm sm:text-base">{f.icon}</div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 dark:text-gray-100">{f.title}</p>
                            {!open && (
                              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">{f.summary}</div>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
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
                              <p className="mb-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">{f.summary}</p>
                              <ul className="space-y-2">
                                {f.details.map((d, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.15, delay: i * 0.05 }}
                                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 shrink-0" />
                                    <span className="leading-relaxed">{d}</span>
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

            {/* Tech / Nodes */}
            <section id="tech" className="scroll-mt-24 sm:scroll-mt-28">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <BsAppIndicator className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">{techSectionTitle}</h2>
              </motion.div>

              <ul className="space-y-3 sm:space-y-2 text-gray-800 dark:text-gray-200">
                {techItems.map((t, i) => (
                  <li key={i} className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                    <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0 flex items-center justify-center">
                      {t.icon}
                    </span>
                    <span className="text-sm sm:text-base">
                      <strong className="font-bold">{t.label}:</strong> {t.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="scroll-mt-24 sm:scroll-mt-28">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <LuSettings2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">Use Cases</h2>
              </motion.div>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                {useCases.map((uc, i) => (
                  <li key={i}>{uc}</li>
                ))}
              </ul>
            </section>

            {/* How to Use */}
            <section id="how-to" className="scroll-mt-24 sm:scroll-mt-28">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <FileJson className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">{howToSectionTitle}</h2>
              </motion.div>

              <div className="rounded-lg sm:rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <ol className="list-decimal list-inside space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  {howToSteps.map((step, i) => (
                    <li key={i} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            </article>
          </div>

          {/* RIGHT TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-outfit">
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
                        className={`relative flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md text-sm transition font-outfit ${
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

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <section
            aria-label="Related projects"
            className="max-w-6xl mx-auto px-4 md:px-6 mt-16 sm:mt-20 md:mt-24"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4 sm:mb-6"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                Related projects
              </h2>
            </motion.div>
            <div className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Prev / Next */}
        {(prev || next) && (
          <nav
            aria-label="Project navigation"
            className="max-w-6xl mx-auto px-4 md:px-6 mt-12 sm:mt-16"
          >
            <div className="flex items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
              {prev ? (
                <Link
                  to={`/projects/${prev.id}`}
                  className="group inline-flex items-center gap-2 sm:gap-3 text-left min-w-0 max-w-[48%] focus-override font-outfit"
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-gray-400 group-hover:-translate-x-1 group-hover:text-blue-500 transition-all" />
                  <span className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      Previous
                    </span>
                    <span className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {prev.title}
                    </span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to={`/projects/${next.id}`}
                  className="group inline-flex items-center gap-2 sm:gap-3 text-right min-w-0 max-w-[48%] ml-auto focus-override font-outfit"
                >
                  <span className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      Next
                    </span>
                    <span className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {next.title}
                    </span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-gray-400 group-hover:translate-x-1 group-hover:text-blue-500 transition-all" />
                </Link>
              ) : (
                <span />
              )}
            </div>
          </nav>
        )}

        {/* Contact CTA */}
        <ContactCTA
          title={contactCTA.title}
          description={contactCTA.description}
          primaryButtonText={contactCTA.primaryButtonText}
          secondaryButtonText={contactCTA.secondaryButtonText}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPageTemplate;
