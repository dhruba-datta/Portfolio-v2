import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe2,
  Webhook,
  FileJson,
  Activity,
  ChevronDown,
  ArrowLeft,
  Search,
  Mail,
} from "lucide-react";
import { SiN8N, SiGooglesheets, SiOpenai, SiGmail } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface SEOAuditPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const SEOAuditPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/projects/SEO Audit (n8n).webp",
}: SEOAuditPageProps) => {
  const navigate = useNavigate();

  // Local theme fallback
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // Chips under title
  const chips = [
    { name: "n8n", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "OpenAI", icon: <SiOpenai className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "PageSpeed", icon: <Search className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Gmail", icon: <SiGmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Webhook", icon: <Webhook className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  // Features (accordion)
  const features = [
    {
      id: "analysis",
      icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Automated Performance Pipeline",
      summary: "High-precision website analysis using Google PageSpeed Insights API",
      details: [
        "Real-time fetching of Lighthouse mobile performance metrics for any URL via automated REST API calls",
        "Extraction of critical Core Web Vitals (LCP, FID, CLS) and PageSpeed scores to quantify user experience",
        "Deep data parsing logic that benchmarks results against industry standards to pinpoint specific latency issues",
      ],
    },
    {
      id: "ai",
      icon: <SiOpenai className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "AI-Powered Audit Generation",
      summary: "GPT-4 driven analysis transforming raw metrics into professional, persuasive reports",
      details: [
        "Intelligent interpretation of performance data by OpenAI's GPT-4 model to articulate technical findings into business value",
        "Generation of concise, persuasive audits designed for high-impact client presentations and sales decks",
        "Strategic prioritization of optimization tasks based on their projected impact on SEO rankings and conversion rates",
      ],
    },
    {
      id: "reporting",
      icon: <Mail className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Automated Gmail Reporting",
      summary: "Seamless delivery of professional audit results directly to clients via custom HTML templates",
      details: [
        "Dynamic creation of beautifully formatted HTML email reports with embedded performance charts and AI insights",
        "Automated dispatching via secure Gmail API nodes with personalized subject lines and clear Call-to-Actions (CTAs)",
        "Zero-touch client communication flow triggered instantly by form submissions or manual webhook pings",
      ],
    },
    {
      id: "logging",
      icon: <SiGooglesheets className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Centralized Lead Management",
      summary: "Production-ready tracking of audit requests and client data in Google Sheets",
      details: [
        "Persistent logging of every audit request to track lead sources and maintain a historical database of client performance",
        "Bi-directional synchronization of client metadata across the agency tech stack for unified lead nurturing",
        "Automated sheet maintenance that flags high-priority leads based on their performance scores for immediate sales follow-up",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("analysis");

  // Right TOC
  const toc = [
    { id: "highlights", label: "Feature Highlights", icon: <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
    { id: "tech", label: "Nodes & Tech Used", icon: <BsAppIndicator className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> },
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
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900${
        effectiveIsDark ? " dark" : ""
      } dark:bg-gray-900 dark:text-white`}
    >
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />

      <main className="flex-grow">
        <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 -z-10">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url('${coverSrc}')` }}
          />
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
                SEO Audit (n8n)
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                Optimize your website's search engine visibility and loading speed with this n8n workflow. It automates website performance analysis using Google PageSpeed Insights, generates a professional audit report using GPT-4, and sends it directly to your clients via Gmail.
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

            <div className="flex lg:hidden items-center gap-2 mt-4">
              <a
                href="https://github.com/dhruba-datta/n8n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <motion.a
                href="https://github.com/dhruba-datta/n8n/tree/main/SEO%20Audit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl
                  border border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20
                  text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition focus-override text-sm font-medium group"
              >
                Open Folder
                <div className="relative w-3.5 h-3.5 overflow-hidden">
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:-translate-y-full" />
                  <ExternalLink className="absolute inset-0 w-full h-full transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                </div>
              </motion.a>
            </div>

            <div className="hidden lg:flex items-center gap-2 md:gap-3">
              <a
                href="https://github.com/dhruba-datta/n8n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 lg:h-11 w-10 lg:w-11 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <motion.a
                href="https://github.com/dhruba-datta/n8n/tree/main/SEO%20Audit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap px-3 lg:px-4 py-2 lg:py-2.5 rounded-full text-sm lg:text-base
                  border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                  text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus-override group"
              >
                Open Folder
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
                            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">{f.title}</div>
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

            <section id="tech" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BsAppIndicator className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Nodes & Tech Used</h2>
              </div>
              <ul className="space-y-3 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>n8n Orchestration:</b> Core engine managing the end-to-end automation from webhook trigger to final reporting.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>HTTP Request Node:</b> Executes high-performance calls to the Google PageSpeed Insights API for real-time metrics.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiOpenai className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>GPT-4 Model:</b> Advanced AI model used for interpreting technical Lighthouse data into human-readable business audits.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiGmail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Gmail Integration:</b> Transactional email system for delivering personalized SEO reports directly to client inboxes.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiGooglesheets className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Google Sheets:</b> Serves as a lightweight CRM and request log for long-term client tracking and pipeline monitoring.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <Webhook className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base"><b>Webhook Node:</b> Universal entry point allowing external contact forms or apps to trigger audits instantaneously.</span>
                </li>
              </ul>
            </section>

            <section id="use-cases" className="scroll-mt-24 sm:scroll-mt-28">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <LuSettings2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">Use Cases</h2>
              </div>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                <li>Automated lead generation engine delivering immediate value to prospective clients via SEO audits</li>
                <li>Scalable performance monitoring for agency clients with weekly or monthly automated reporting</li>
                <li>Internal technical debt auditing for development teams to maintain high Lighthouse scores at scale</li>
                <li>Strategic sales tool for identifying and approaching businesses with underperforming website metrics</li>
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
                    Open folder:&nbsp;
                    <a
                      className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600 break-words hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      href="https://github.com/dhruba-datta/n8n/tree/main/SEO%20Audit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub - SEO Audit
                    </a>
                  </li>
                  <li className="leading-relaxed">
                    Import workflow:&nbsp;
                    In n8n go to <b>Workflows → Import</b> and upload the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">SEO_Audit.json</code> file.
                  </li>
                  <li className="leading-relaxed">
                    Configure API Keys:&nbsp;
                    Set up your <b>Google PageSpeed API</b> key, <b>OpenAI</b> credentials, and <b>Gmail OAuth2</b> permissions.
                  </li>
                  <li className="leading-relaxed">
                    Connect Trigger:&nbsp;
                    Point your website's contact form or a custom script to the n8n <b>Webhook URL</b>.
                  </li>
                  <li className="leading-relaxed">
                    Test Pipeline:&nbsp;
                    Perform a manual trigger with test data to verify the audit generation and email delivery flow.
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
                  {toc.map((t) => {
                    const isActive = active === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => scrollTo(t.id)}
                        className={`relative flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md text-sm transition ${isActive
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

        <ContactCTA
          title="Automate your agency growth?"
          description="I build intelligent n8n workflows that transform technical data into high-value client experiences. Let's optimize your pipeline."
          primaryButtonText="Start Automation"
          secondaryButtonText="View All Projects"
        />
      </main>

      <Footer />
    </div>
  );
};

export default SEOAuditPage;
