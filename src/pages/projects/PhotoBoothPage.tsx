import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe2,
  Upload,
  Search,
  Heart,
  User,
  Smartphone,
  Code,
  Database,
  Palette,
  Zap,
  ChevronDown,
  ArrowLeft,
  Eye,
  Activity,
  FileJson,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface PhotoBoothPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const PhotoBoothPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/photo-booth-cover.jpg",
}: PhotoBoothPageProps) => {
  const navigate = useNavigate();

  // local theme fallback (same pattern as KFC page)
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  const [expanded, setExpanded] = useState<string | null>("upload");

  // chips under title
  const chips = [
    { name: "React", icon: <Code className="w-3.5 h-3.5" /> },
    { name: "Sanity.io", icon: <Database className="w-3.5 h-3.5" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-3.5 h-3.5" /> },
    { name: "Google OAuth", icon: <User className="w-3.5 h-3.5" /> },
    { name: "React Router", icon: <Globe2 className="w-3.5 h-3.5" /> },
    { name: "Netlify", icon: <Globe2 className="w-3.5 h-3.5" /> },
  ];

  // features (accordion)
  const features = [
    {
      id: "upload",
      icon: <Upload className="w-5 h-5" />,
      title: "Photo Upload & Sharing",
      summary: "Drag, describe, tag & share instantly",
      details: [
        "Drag-and-drop uploads with progress indicators",
        "Descriptions, tags & categories on each photo",
        "CDN-backed delivery via Sanity pipeline",
        "Multiple formats supported (JPG, PNG, WebP)",
        "Auto optimization & responsive images",
      ],
    },
    {
      id: "search",
      icon: <Search className="w-5 h-5" />,
      title: "Advanced Search & Filter",
      summary: "Real-time results with dynamic filters",
      details: [
        "Live search across title, description & tags",
        "Filter by categories / user prefs",
        "Autocomplete suggestions & history",
        "Saved searches & infinite scroll",
      ],
    },
    {
      id: "engagement",
      icon: <Heart className="w-5 h-5" />,
      title: "Social Engagement",
      summary: "Likes, comments & activity feed",
      details: [
        "One-tap like/unlike with instant UI updates",
        "Threaded comments & replies",
        "@mentions with username tagging",
        "Activity feed for likes/comments/follows",
        "Basic engagement analytics",
      ],
    },
    {
      id: "auth",
      icon: <User className="w-5 h-5" />,
      title: "Google OAuth",
      summary: "Secure sign-in & personalized profiles",
      details: [
        "Google OAuth for authentication",
        "Profiles with personal galleries",
        "Persisted sessions & privacy controls",
        "Personalized recommendations",
      ],
    },
    {
      id: "gallery",
      icon: <Eye className="w-5 h-5" />,
      title: "Interactive Gallery",
      summary: "Immersive viewing with metadata & zoom",
      details: [
        "Fullscreen modal with keyboard nav",
        "EXIF/metadata display",
        "Smooth zoom & pan animations",
        "Share to social from modal",
      ],
    },
    {
      id: "responsive",
      icon: <Smartphone className="w-5 h-5" />,
      title: "Responsive by Default",
      summary: "Mobile-first, PWA-ready experience",
      details: [
        "Touch gestures for interactions",
        "Adaptive grid layouts",
        "PWA install prompts",
        "Offline-first caching for speed",
      ],
    },
    {
      id: "components",
      icon: <Code className="w-5 h-5" />,
      title: "Modular Components",
      summary: "Reusable cards, modals & forms",
      details: [
        "Consistent photo card components",
        "Reusable modal system",
        "Custom hooks for API/state",
        "Accessible forms & validation",
        "Toast notifications",
      ],
    },
    {
      id: "performance",
      icon: <Zap className="w-5 h-5" />,
      title: "Performance Minded",
      summary: "Lazy images, code-splitting & CDN",
      details: [
        "IntersectionObserver image lazy-loading",
        "Code splitting for lean bundles",
        "Image compression & modern formats",
        "Hook-based state for minimal re-renders",
        "Global CDN for low latency",
      ],
    },
  ];

  // Right TOC (same sections as KFC style)
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
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
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
                PhotoBooth
              </h1>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                A modern photo-sharing web app to upload, discover, and engage with images. Built with React
                + Tailwind + Sanity.io, featuring Google authentication, real-time social interactions, and an
                immersive gallery.
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
                href="https://github.com/dhruba-datta/photoBooth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Source code on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <motion.a
                href="https://phootobooth.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
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
                  <Code className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>React</b> — Component-driven UI with hooks.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Database className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Sanity.io</b> — Headless CMS for images, users & comments.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Palette className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Tailwind CSS</b> — Utility-first responsive styling.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <User className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Google OAuth</b> — Secure auth & session persistence.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Globe2 className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>React Router</b> — Smooth client-side navigation.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Globe2 className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Netlify</b> — CI/CD & global CDN hosting.</span>
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
                <li>Photography communities & hobbyist sharing platforms</li>
                <li>Portfolio/gallery sites with social engagement</li>
                <li>Prototype for content moderation & feeds</li>
                <li>Headless CMS + React reference implementation</li>
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
                      git clone https://github.com/dhruba-datta/photoBooth
                    </code>
                  </li>
                  <li>
                    Install deps:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npm install
                    </code>
                  </li>
                  <li>
                    Configure environment:&nbsp;Set Sanity project vars and Google OAuth credentials in your <code>.env</code>.
                  </li>
                  <li>
                    Start dev server:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npm run dev
                    </code>
                  </li>
                  <li>
                    Build & deploy (Netlify):&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600">
                      npm run build
                    </code>
                    &nbsp;then connect repo on Netlify for CI/CD.
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
              href="https://github.com/dhruba-datta/photoBooth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium focus-override"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href="https://phootobooth.netlify.app/"
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
          title="Impressed by this project?"
          description="I design and ship modern, scalable web apps. Let’s talk about your next build."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};

export default PhotoBoothPage;
