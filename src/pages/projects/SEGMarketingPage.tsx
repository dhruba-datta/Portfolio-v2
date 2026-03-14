import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Activity,
  ChevronDown,
  ArrowLeft,
  Webhook,
  Target,
  Users,
  BarChart3,
  Rocket,
  FileJson,
} from "lucide-react";
import { SiReact, SiVite, SiTailwindcss, SiN8N } from "react-icons/si";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface SEGMarketingPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const SEGMarketingPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/projects/SEG Marketing.webp",
}: SEGMarketingPageProps) => {
  const navigate = useNavigate();

  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  const chips = [
    { name: "React 19", icon: <SiReact className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Vite 6", icon: <SiVite className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "n8n Automation", icon: <SiN8N className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Lead Generation", icon: <Target className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
    { name: "Conversion UX", icon: <Rocket className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> },
  ];

  const features = [
    {
      id: "landing-pages",
      icon: <Rocket className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Industry-Specific Landing Pages",
      summary: "High-conversion UX tailored for Legal, Healthcare, and Restaurants",
      details: [
        "Specialized design patterns for modern lawyers, medical practices, and restaurant marketing",
        "Strategic multi-step lead capture forms designed to reduce friction and qualify prospects",
        "Immersive full-screen section transitions optimized for desktop sales presentations",
        "Tailored value propositions and social proof modules specific to each industry domain",
      ],
    },
    {
      id: "automation",
      icon: <Webhook className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "n8n Lead Orchestration",
      summary: "Bulletproof data routing from structured forms to internal CRMs",
      details: [
        "Deep integration with n8n automated workflows for real-time lead capture and notification",
        "Error-resilient webhook infrastructure ensuring 99.9% data integrity between platforms",
        "Automated lead tagging and segmentation based on industry-specific qualification criteria",
        "Direct routing to various CRM endpoints including HubSpot, Salesforce, or Google Sheets",
      ],
    },
    {
      id: "conversion",
      icon: <Users className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Conversion-Focused UX",
      summary: "Strategic CTAs and interactive marketing components",
      details: [
        "Seamless Calendly integration for instant discovery call scheduling and lead booking",
        "Visually striking 'Elastic' transitions creating a premium, agency-grade browsing experience",
        "Dynamic hero sections with floating parallax elements and custom scroll indicators",
        "Sticky conversion anchors and optimized touch targets for high-intent mobile users",
      ],
    },
    {
      id: "seo",
      icon: <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Measurable SEO Strategy",
      summary: "Dynamic per-page metadata and visibility optimization",
      details: [
        "Highly optimized React Router 7 setup for clean, crawlable URL structures across all industry pages",
        "Dynamic title and meta-tag injection architecture for granular search engine targeting",
        "Performance-hardened asset pipeline ensuring maximum visibility in high-intent search markets",
        "Automated canonical URL generation to prevent duplication across localized landing pages",
      ],
    },
    {
      id: "immersive-ux",
      icon: <Target className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Immersive UX Workflow",
      summary: "Elastic desktop transitions and dynamic parallax hero sections",
      details: [
        "Implementation of custom 'Elastic' easing functions for section-to-section navigation",
        "Floating parallax background elements that react to mouse position or scroll intent",
        "Sophisticated visual hierarchy using premium display typography and high-contrast layouts",
        "Interactive services sections with multi-slide carousels and auto-rotating mobile views",
      ],
    },
    {
      id: "premium-aesthetics",
      icon: <Activity className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: "Premium Agency Aesthetics",
      summary: "High-end display typography and refined visual hierarchy",
      details: [
        "Curation of agency-grade display fonts for a sophisticated, luxury-market visual appeal",
        "Precision spacing and 'Glassmorphism' UI effects for a modern, state-of-the-art feel",
        "Custom iconography and consistent button styling that wows users at first glance",
        "Aesthetic dark/light mode balance ensuring visual comfort and brand authority",
      ],
    },
  ];

  const [expanded, setExpanded] = useState<string | null>("landing-pages");

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
          <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} onClick={() => navigate("/projects")} className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group focus-override font-outfit">
            <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>
        </div>

        <motion.header
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 -mt-1 md:-mt-2"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100">
                SEG Marketing
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
                SEG Marketing is a performance-driven multipage application built with React 19 and Vite. 
                It serves as a specialized lead generation engine, featuring industry-specific landing pages (Legal, Healthcare, Restaurants) with unique UX patterns. 
                The platform is deeply integrated with n8n automation workflows to bridge unstructured form data directly into CRM systems, ensuring 99.9% lead capture reliability.
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
                href="https://github.com/SocialEngagementGroup/marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override text-sm font-medium font-outfit"
                aria-label="Repository on GitHub"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <motion.a
                href="https://digital.socialengagementgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl
                           border border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20
                           text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition focus-override text-sm font-medium group font-outfit"
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
                href="https://github.com/SocialEngagementGroup/marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 lg:h-11 w-10 lg:w-11 items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus-override"
                aria-label="Repository on GitHub"
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <motion.a
                href="https://digital.socialengagementgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap px-3 lg:px-4 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-outfit
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
        </motion.header>

        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          <article className="space-y-12 sm:space-y-16 md:space-y-20">
            <section id="highlights" className="scroll-mt-24 sm:scroll-mt-28">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-gray-100">Feature Highlights</h2>
              </motion.div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800">
                {features.map((f) => {
                  const open = expanded === f.id;
                  return (
                    <div key={f.id} className="border-b last:border-none border-blue-200 dark:border-gray-700 bg-blue-50/30 dark:bg-gray-800">
                      <motion.button onClick={() => setExpanded(open ? null : f.id)} className="w-full flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 text-left hover:bg-blue-100/50 dark:hover:bg-gray-700 transition">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="mt-0.5 text-blue-500 text-sm sm:text-base">{f.icon}</div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 dark:text-gray-100">{f.title}</p>
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
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <BsAppIndicator className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-gray-100">Technologies Used</h2>
              </motion.div>
              <ul className="space-y-3 sm:space-y-2 text-gray-800 dark:text-gray-200">
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 shrink-0" />
                  <span className="text-sm sm:text-base"><strong className="font-bold">React 19:</strong> Building a high-performance, interactive multi-page experience.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiVite className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 shrink-0" />
                  <span className="text-sm sm:text-base"><strong className="font-bold">Vite 6:</strong> Modern build pipeline for optimized production bundles and fast developer experience.</span>
                </li>
                <li className="grid grid-cols-[20px_1fr] sm:grid-cols-[24px_1fr] items-start gap-2 sm:gap-3">
                  <SiN8N className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 text-gray-500 shrink-0" />
                  <span className="text-sm sm:text-base"><strong className="font-bold">n8n Automation:</strong> Backend choreography for complex lead capture workflows and CRM distribution.</span>
                </li>
              </ul>
            </section>

            <section id="use-cases" className="scroll-mt-24 sm:scroll-mt-28">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <LuSettings2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-gray-100">Use Cases</h2>
              </motion.div>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                <li>Legal: Specialized high-conversion funnels for law practices and attorneys</li>
                <li>Healthcare: HIPAA-ready patient inquiry management for medical clinics</li>
                <li>Restaurants: Modern digital marketing layouts for dining and hospitality</li>
                <li>General: Scalable automation-driven platform for multi-industry lead generation</li>
              </ul>
            </section>

            <section id="how-to" className="scroll-mt-24 sm:scroll-mt-28">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <FileJson className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-blue-500" />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-gray-100">How to Use</h2>
              </motion.div>

              <div className="rounded-lg sm:rounded-xl border border-blue-200 dark:border-gray-700 bg-blue-50/50 dark:bg-gray-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <ol className="list-decimal list-inside space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200">
                  <li className="leading-relaxed">
                    Clone repository:&nbsp;
                    <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">
                      git clone https://github.com/SocialEngagementGroup/marketing
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
                    Build for production:&nbsp;
                    <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded border border-blue-200 dark:border-gray-600">
                      npm run build
                    </code>
                  </li>
                  <li className="leading-relaxed">
                    Deploy:&nbsp;
                    Drag the <code className="text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded border border-blue-200 dark:border-gray-600">dist</code> folder to <b>Netlify</b> or connect your repository for automated deployment.
                  </li>
                </ol>
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-outfit">
                <AiOutlineAlignLeft className="w-3 h-3" />
                On this page
              </div>
              <div className="relative pl-3">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />
                <nav className="space-y-1">
                  {toc.map((t) => (
                    <button key={t.id} onClick={() => scrollTo(t.id)} className={`relative flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md text-sm transition font-outfit ${active === t.id ? "font-semibold text-gray-900 dark:text-gray-100" : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"}`}>
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

        <ContactCTA title="Want to automate your marketing funnel?" description="I build lead generation platforms that scale with your business. Let's talk about your marketing infrastructure." primaryButtonText="Get In Touch" secondaryButtonText="Explore More Work" />
      </main>
      <Footer />
    </div>
  );
};

export default SEGMarketingPage;
