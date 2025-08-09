import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe2,
  Webhook,
  Clock,
  FileJson,
  Code2,
  Send,
  AlertTriangle,
  Activity,
  ChevronDown,
  ArrowLeft,
  Search,
  Filter,
} from "lucide-react";
import { SiN8N, SiGooglesheets, SiLinkedin } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface N8nLinkedinJobSearchPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const N8nLinkedinJobSearchPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/n8n-linkedin-cover.jpg",
}: N8nLinkedinJobSearchPageProps) => {
  const navigate = useNavigate();

  // Local theme fallback (same pattern as other project pages)
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // Chips under title
  const chips = [
    { name: "n8n", icon: <SiN8N className="w-3.5 h-3.5" /> },
    { name: "LinkedIn", icon: <SiLinkedin className="w-3.5 h-3.5" /> },
    { name: "Web Scraping", icon: <Search className="w-3.5 h-3.5" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
    { name: "Webhook", icon: <Webhook className="w-3.5 h-3.5" /> },
    { name: "Data Extraction", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
  ];

  // Features (accordion) — tailored for LinkedIn Job Search automation
  const features = [
    {
      id: "discovery",
      icon: <Activity className="w-5 h-5" />,
      title: "Job Discovery Pipeline",
      summary: "Keyword + location search → normalize → store",
      details: [
        "Fetch recent job posts from a data source/API with HTTP Request",
        "Normalize fields (title, company, location, postedAt, applyUrl)",
        "Map to a consistent schema for downstream steps",
      ],
    },
    {
      id: "filters",
      icon: <Filter className="w-5 h-5" />,
      title: "Smart Filters & De-duplication",
      summary: "Tight control over results and no repeat alerts",
      details: [
        "Filter by keywords, locations, seniority, remote/on-site",
        "De-dupe via hash/URL to avoid repeat notifications",
        "Optional time-window filter (e.g., last 24–72 hours)",
      ],
    },
    {
      id: "scheduler",
      icon: <Clock className="w-5 h-5" />,
      title: "Scheduling & Triggers",
      summary: "Run on a schedule or on-demand",
      details: [
        "Cron schedules for daily/weekly discovery runs",
        "Webhook endpoint to trigger ad-hoc searches with params",
        "Replay-safe execution with input validation",
      ],
    },
    {
      id: "storage",
      icon: <SiGooglesheets className="w-5 h-5" />,
      title: "Storage & Tracking",
      summary: "Persist results and track status",
      details: [
        "Append results to Google Sheets (or DB) as a job queue",
        "Status columns for Not Applied / Applied / Interview",
        "Automatic updates when a listing changes or duplicates are found",
      ],
    },
    {
      id: "alerts",
      icon: <Send className="w-5 h-5" />,
      title: "Notifications",
      summary: "Get notified where you work",
      details: [
        "Send email or Telegram alerts with top matches",
        "Compact card-style messages with title/company/apply link",
        "Batching & rate-limit friendly dispatch",
      ],
    },
    {
      id: "safety",
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Reliability & Safety",
      summary: "Error handling & secrets hygiene",
      details: [
        "Dedicated error branch with alerts and retry/backoff",
        "Credential scoping per integration",
        "Graceful degradation if a source endpoint is down",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("discovery");

  // Right TOC (same layout/UX as other pages)
  const toc = [
    { id: "highlights", label: "Feature Highlights", icon: <Activity className="w-4 h-4" /> },
    { id: "tech", label: "Nodes & Tech Used", icon: <BsAppIndicator className="w-4 h-4" /> },
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
          <div className="flex items-start justify-between gap-4 sm:gap-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
                LinkedIn Job Search (n8n)
              </h1>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-6 sm:mb-8 leading-relaxed">
                A set of n8n workflows to automate your LinkedIn-style job discovery and notifications.
                Search by keywords & location, filter results, store them in Sheets, and get instant alerts—on a schedule
                or on demand.
              </p>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {chips.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border
                               border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                               text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-gray-500 dark:text-gray-400">{c.icon}</span>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub + Open folder */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://github.com/dhruba-datta/n8n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Repository on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <motion.a
                href="https://github.com/dhruba-datta/n8n/tree/main/Linkedin%20Job%20Search"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Open Folder <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </header>

        {/* Layout: main + right toc */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 sm:gap-12 lg:gap-14">
          {/* MAIN */}
          <article className="space-y-12 sm:space-y-16 lg:space-y-20 min-w-0">
            {/* Feature Highlights */}
            <section id="highlights" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Feature Highlights</h2>
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

            {/* Nodes & Tech Used */}
            <section id="tech" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BsAppIndicator className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Nodes & Tech Used</h2>
              </div>

              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiN8N className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>n8n Core</b> — Visual builder, credentials, error branches, sub-workflows.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Globe2 className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>HTTP Request</b> — Job source/API calls and data retrieval.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Code2 className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Code (JS)</b> — Parsing, de-duplication, mapping, and scoring logic.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Cron</b> — Scheduled discovery & follow-ups.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Webhook className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Webhook</b> — On-demand searches with query params.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiGooglesheets className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Google Sheets</b> — Persistent queue & status tracking.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Send className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Email/Telegram</b> — Job alerts and error notifications.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <FileJson className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Workflow JSON</b> — Importable templates to get started fast.</span>
                </li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <LuSettings2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Use Cases</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Daily job digests by role + location delivered to your inbox/Telegram</li>
                <li>Team job board powered by Google Sheets with live updates</li>
                <li>Lead a pipeline for applying later—tag, prioritize, and track status</li>
                <li>Trigger ad-hoc searches from a form/webhook and notify instantly</li>
              </ul>
            </section>

            {/* How to Use */}
            <section id="how-to" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <FileJson className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">How to Use</h2>
              </div>

              <div className="rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-6 space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
                  <li>
                    Open folder:&nbsp;
                    <a
                      className="underline underline-offset-2"
                      href="https://github.com/dhruba-datta/n8n/tree/main/Linkedin%20Job%20Search"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub — LinkedIn Job Search
                    </a>
                  </li>
                  <li>
                    Import the workflow JSON(s): In n8n go to <b>Workflows → Import</b> and upload the <code>.json</code>.
                  </li>
                  <li>
                    Add credentials: job data source/API, Google Sheets, and your alert channel (Email/Telegram).
                  </li>
                  <li>
                    Set parameters: default keywords, locations, seniority, remote/on-site, and de-dup secret/hash field.
                  </li>
                  <li>
                    Choose triggers: attach a <b>Cron</b> schedule and/or expose a <b>Webhook</b> for ad-hoc searches.
                  </li>
                  <li>
                    Test & enable: run once with sample inputs, check the sheet and notifications, then enable.
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
              href="https://github.com/dhruba-datta/n8n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium focus-override"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href="https://github.com/dhruba-datta/n8n/tree/main/Linkedin%20Job%20Search"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium focus-override"
            >
              Open Folder <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact CTA Section */}
        <ContactCTA
          title="Want to automate your job search?"
          description="I build production-ready n8n workflows—discovery, filtering, storage, and alerts tailored to your stack."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};

export default N8nLinkedinJobSearchPage;
