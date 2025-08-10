import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Search,
  Calendar,
  Bell,
  Code,
  Database,
  ChevronDown,
  ArrowLeft,
  Package,
  Store,
  Activity,
  FileJson,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { GrStorage } from "react-icons/gr";
import { SiReact, SiExpo, SiJavascript, SiGooglesheets } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface ABPharmacyExpoPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const ABPharmacyExpoPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/ab-pharmacy-cover.jpg",
}: ABPharmacyExpoPageProps) => {
  const navigate = useNavigate();

  // local theme fallback (matches KFC page pattern)
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    { name: "React Native", icon: <SiReact className="w-3.5 h-3.5" /> },
    { name: "Expo", icon: <SiExpo className="w-3.5 h-3.5" /> },
    { name: "JavaScript ES6+", icon: <SiJavascript className="w-3.5 h-3.5" /> },
    { name: "React Navigation", icon: <Code className="w-3.5 h-3.5" /> },
    { name: "AsyncStorage", icon: <GrStorage className="w-3.5 h-3.5" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
  ];

  // features (accordion)
  const features = [
    {
      id: "native",
      icon: <Smartphone className="w-5 h-5" />,
      title: "Cross-Platform Native Experience",
      summary: "Optimized for iOS & Android with native feel",
      details: [
        "Single codebase deployed to both platforms",
        "Smooth navigation, gestures & haptics",
        "Platform-specific UI polish & performance",
      ],
    },
    {
      id: "schedule",
      icon: <Calendar className="w-5 h-5" />,
      title: "Expo Schedule Management",
      summary: "Real-time timeline, sessions & reminders",
      details: [
        "Interactive agenda with speaker/session details",
        "Live updates & notifications",
        "Calendar integration & offline caching",
      ],
    },
    {
      id: "directory",
      icon: <Store className="w-5 h-5" />,
      title: "Exhibitor Directory",
      summary: "Searchable profiles with booth & contact info",
      details: [
        "Rich exhibitor profiles & product highlights",
        "Advanced search & filtering",
        "Interactive map & booth locations",
      ],
    },
    {
      id: "catalog",
      icon: <Package className="w-5 h-5" />,
      title: "Product & Service Catalog",
      summary: "Categorized products with details & status",
      details: [
        "Clear categories & high-quality images",
        "Specs, availability & pricing fields",
        "Comparisons, recommendations & favorites",
      ],
    },
    {
      id: "search",
      icon: <Search className="w-5 h-5" />,
      title: "Real-Time Search & Filters",
      summary: "Instant results across content types",
      details: [
        "Fast search across products & exhibitors",
        "Multi-criteria filters, history & suggestions",
        "Optional voice search pattern",
      ],
    },
    {
      id: "components",
      icon: <Code className="w-5 h-5" />,
      title: "Modular Components",
      summary: "Reusable RN components with consistent UX",
      details: [
        "Shared card, list & detail components",
        "Custom nav transitions & sheets",
        "Forms with validation & errors",
      ],
    },
    {
      id: "features",
      icon: <Bell className="w-5 h-5" />,
      title: "Advanced Mobile Features",
      summary: "Notifications, offline, and integrations",
      details: [
        "Push notifications for live updates",
        "Offline data caching",
        "Google Sheets login integration (demo)",
      ],
    },
    {
      id: "persistence",
      icon: <Database className="w-5 h-5" />,
      title: "Local Persistence",
      summary: "AsyncStorage for session & preferences",
      details: [
        "Persisted auth state & preferences",
        "Pluggable data layer to swap APIs",
        "Predictable storage utilities",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("native");

  // Right TOC (same structure as KFC)
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
        {/* Full-width cover under navbar (matches KFC) */}
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
                AB Pharmacy Expo
              </h1>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                A production-ready React Native/Expo app for pharmacy trade shows: live schedules, exhibitor
                directory, product catalogs, and instant search—built with modular components and offline-first
                UX.
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

            {/* GitHub + Demo */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://github.com/dhruba-datta/AB-Pharmacy-Expo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
                aria-label="Source code on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <motion.a
                href="http://surl.li/lkiufr"
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
                        className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-blue-100/50 dark:hover:bg-gray-700 transition"
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
                  <span><b>React Native</b> — Native iOS/Android with one codebase.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiExpo className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Expo</b> — Build, test, deploy & access device APIs.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiJavascript className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>JavaScript (ES6+)</b> — Async flows, state & API logic.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Code className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>React Navigation</b> — Native navigation patterns.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <GrStorage className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>AsyncStorage</b> — Offline cache & preferences.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiGooglesheets className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Google Sheets</b> — Lightweight demo auth/data integration.</span>
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
                <li>Pharmacy & medical expos (attendee companion app)</li>
                <li>Trade shows needing schedules, exhibitors & catalogs</li>
                <li>Client demos for native app capability & UX</li>
                <li>Starter kit for event-industry mobile products</li>
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
                    Clone:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      git clone https://github.com/dhruba-datta/AB-Pharmacy-Expo
                    </code>
                  </li>
                  <li>
                    Install deps:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npm install
                    </code>
                  </li>
                  <li>
                    Start (Expo):&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npx expo start
                    </code>
                    &nbsp;then run on device/emulator.
                  </li>
                  <li>
                    Build (optional):&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npx expo prebuild && npx expo run:android
                    </code>
                    &nbsp;/&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npx expo run:ios
                    </code>
                  </li>
                  <li>
                    Configure integrations (Sheets/auth) in <code>env</code> or config as needed.
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
              href="https://github.com/dhruba-datta/AB-Pharmacy-Expo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium focus-override"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href="http://surl.li/lkiufr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium focus-override"
            >
              Check it out <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact CTA Section */}
        <ContactCTA
          title="Like what you see?"
          description="I build performant, scalable native apps with a clean UX. Let’s discuss your event or product."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ABPharmacyExpoPage;
