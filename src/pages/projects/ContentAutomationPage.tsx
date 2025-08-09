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
} from "lucide-react";
import { SiN8N, SiOpenai, SiGooglesheets, SiTrello } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface N8nContentAutomationPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const N8nContentAutomationPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/n8n-cover.jpg",
}: N8nContentAutomationPageProps) => {
  const navigate = useNavigate();

  // local theme fallback (aligns with your other project pages)
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    { name: "n8n", icon: <SiN8N className="w-3.5 h-3.5" /> },
    { name: "OpenAI", icon: <SiOpenai className="w-3.5 h-3.5" /> },
    { name: "Google Sheets", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
    { name: "Trello", icon: <SiTrello className="w-3.5 h-3.5" /> },
    { name: "Webhook", icon: <Webhook className="w-3.5 h-3.5" /> },
    { name: "Workflow JSON", icon: <FileJson className="w-3.5 h-3.5" /> },
  ];

  // features (accordion) — tailored for Content Automation
  const features = [
    {
      id: "pipeline",
      icon: <Activity className="w-5 h-5" />,
      title: "Content Pipeline Orchestrator",
      summary: "Ingest → Transform (AI/clean) → Publish/Queue",
      details: [
        "Ingest content from forms/APIs/feeds via Webhook & HTTP Request nodes",
        "Normalize & enrich fields (title, tags, canonical URL)",
        "Optional AI assist for summaries/captions via Code/HTTP nodes",
        "Branching for multi-channel outputs (blog, newsletter, socials)",
      ],
    },
    {
      id: "scheduler",
      icon: <Clock className="w-5 h-5" />,
      title: "Scheduling & Triggers",
      summary: "Cron triggers & on-demand webhooks",
      details: [
        "Cron schedules for daily/weekly runs",
        "Instant Webhook endpoints for manual publish",
        "Replay-friendly runs with input validation",
        "Idempotent guards to prevent duplicate posts",
      ],
    },
    {
      id: "integrations",
      icon: <Send className="w-5 h-5" />,
      title: "Integrations",
      summary: "Email, CMS, Sheets & social endpoints",
      details: [
        "Email/newsletter providers (e.g., Brevo) for campaign drafts",
        "CMS/Docs (Notion/Markdown repos/Headless CMS) via HTTP",
        "Spreadsheets/DB (Google Sheets/SQL) for content queues",
        "Social endpoints (X/LinkedIn) ready via HTTP & OAuth creds",
      ],
    },
    {
      id: "blocks",
      icon: <Code2 className="w-5 h-5" />,
      title: "Reusable Building Blocks",
      summary: "Set/Merge, Switch/If, Split in Batches",
      details: [
        "Reusable sub-workflows for parsing & templating",
        "Batch processing with retry & backoff patterns",
        "Field mapping with Set/Merge nodes",
        "Switch/If for channel-specific formats",
      ],
    },
    {
      id: "observability",
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Observability & Safety",
      summary: "Error handling, notifications & audit trails",
      details: [
        "Dedicated error workflows with alerts to email/Slack",
        "Run-level metadata & checkpoints for traceability",
        "Secret-scoped credentials per integration",
        "Graceful degradation when an endpoint is down",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("pipeline");

  // Right TOC (keep structure; section content adapted for n8n)
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
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                Content Automation (n8n)
              </h1>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                A collection of n8n workflows to automate your content lifecycle—from ingestion and enrichment to
                scheduling and multi-channel publishing. Import ready-made JSONs, add credentials, and ship.
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
                href="https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation"
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

            {/* Nodes & Tech Used */}
            <section id="tech" className="scroll-mt-28">
              <div className="flex items-center gap-2 mb-4">
                <BsAppIndicator className="w-5 h-5 shrink-0 text-blue-500" />
                <h2 className="text-2xl md:text-3xl font-bold leading-none">Nodes & Tech Used</h2>
              </div>

              <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiN8N className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>n8n Core</b> — Visual builder, credentials, error workflows.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Webhook className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Webhook</b> — On-demand triggers for manual runs or integrations.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Cron</b> — Scheduled publishing & batch jobs.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Globe2 className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>HTTP Request</b> — Connect any REST API (CMS, socials, email).</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Code2 className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Code Node (JS)</b> — Transform, template, and validate payloads.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <SiGooglesheets className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Sheets/DB</b> — Queues & audit logs via Google Sheets/SQL.</span>
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
                <li>Auto-generate post drafts, titles, and social captions</li>
                <li>Build a content queue from feeds, forms, or spreadsheets</li>
                <li>Cross-post to blog, newsletter (e.g., Brevo), and socials</li>
                <li>Create weekly digests from curated links & publish on schedule</li>
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
                    Open folder:&nbsp;
                    <a
                      className="underline underline-offset-2"
                      href="https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub — Content Automation
                    </a>
                  </li>
                  <li>
                    Import workflow JSON:&nbsp;In n8n, go to <b>Workflows → Import</b> and upload the selected <code>.json</code>.
                  </li>
                  <li>
                    Configure credentials:&nbsp;Add API keys/OAuth apps for channels you’ll publish to (e.g., email, CMS,
                    Sheets, socials).
                  </li>
                  <li>
                    Set triggers:&nbsp;Attach a <b>Cron</b> schedule and/or expose a <b>Webhook</b> for manual runs.
                  </li>
                  <li>
                    Test & ship:&nbsp;Run once with sample input, verify outputs, then enable the workflow. Deploy on n8n
                    Cloud or your Docker instance.
                  </li>
                </ol>
              </div>
            </section>
          </article>

          {/* RIGHT TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                <FileJson className="w-3 h-3" />
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

        {/* Mobile CTA */}
        <div className="sm:hidden mt-10 max-w-6xl mx-auto px-4 md:px-6">
          <a
            href="https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            Open Folder <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Contact CTA Section */}
        <ContactCTA
          title="Need custom n8n automations?"
          description="I design robust, production-ready n8n workflows for content, growth, and internal tooling. Let’s build your pipeline."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Explore More Work"
        />
      </main>

      <Footer />
    </div>
  );
};
 
export default N8nContentAutomationPage;
