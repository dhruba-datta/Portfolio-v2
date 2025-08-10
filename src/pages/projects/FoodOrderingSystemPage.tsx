import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Code,
  Database,
  Settings,
  Terminal,
  ShoppingCart,
  ChevronDown,
  ArrowLeft,
  Activity,
  FileJson,
} from "lucide-react";
import { BsAppIndicator } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { SiCplusplus } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import ContactCTA from "../../components/sections/ContactCTA";

interface FoodOrderingSystemPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
  coverSrc?: string;
}

const FoodOrderingSystemPage = ({
  isDark,
  toggleTheme,
  coverSrc = "/images/placeholder-project.svg",
}: FoodOrderingSystemPageProps) => {
  const navigate = useNavigate();

  // local theme fallback
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === "function" ? toggleTheme : () => setLocalDark((d) => !d);

  // chips under title
  const chips = [
    { name: "C++", icon: <SiCplusplus className="w-3.5 h-3.5" /> },
    { name: "OOP", icon: <Code className="w-3.5 h-3.5" /> },
    { name: "File Handling", icon: <Database className="w-3.5 h-3.5" /> },
    { name: "Admin Panel", icon: <Settings className="w-3.5 h-3.5" /> },
    { name: "Console App", icon: <Terminal className="w-3.5 h-3.5" /> },
    { name: "Order Management", icon: <ShoppingCart className="w-3.5 h-3.5" /> },
  ];

  // features
  const features = [
    {
      id: "ordering-system",
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Complete Ordering System",
      summary: "Customer interface for browsing menu and placing orders",
      details: [
        "Interactive menu with multiple food categories",
        "Order selection and customization",
        "Real-time bill calculation",
        "Order confirmation and tracking",
      ],
    },
    {
      id: "admin-panel",
      icon: <Settings className="w-5 h-5" />,
      title: "Admin Panel",
      summary: "Management interface for orders and menu items",
      details: [
        "View and manage customer orders",
        "Modify menu items and prices",
        "Order status management",
        "Customer data overview",
      ],
    },
    {
      id: "oop-design",
      icon: <Code className="w-5 h-5" />,
      title: "Object-Oriented Design",
      summary: "Clean C++ architecture with proper class structure",
      details: [
        "Modular class-based architecture",
        "Encapsulation and data abstraction",
        "Inheritance for code reusability",
        "Polymorphism for flexible functionality",
      ],
    },
    {
      id: "data-persistence",
      icon: <Database className="w-5 h-5" />,
      title: "File-Based Storage",
      summary: "Persistent data storage using file handling",
      details: [
        "Order history preservation",
        "Menu data persistence",
        "Customer information storage",
        "Data integrity and validation",
      ],
    },
  ];
  const [expanded, setExpanded] = useState<string | null>("ordering-system");

  // Right TOC
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
            onClick={() => navigate('/projects')}
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
                Food Ordering System
              </h1>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
                A console-based C++ application for food ordering with menu selection, bill calculation, payment processing, 
                and admin panel for order management. Features object-oriented design and file handling for data persistence.
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

            {/* GitHub button only (no live demo for C++ console app) */}
            <div className="hidden sm:flex items-center gap-2">
              <motion.a
                href="https://github.com/dhruba-datta/FoodOrderingSystem"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full
                           border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800
                           text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <Github className="w-4 h-4" />
                View on GitHub
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
                  <SiCplusplus className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>C++</b> — Core programming language with STL usage.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Code className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Object-Oriented Programming</b> — Classes, inheritance, and encapsulation.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Database className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>File Handling</b> — Persistent data storage using file streams.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Terminal className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Console Interface</b> — Text-based user interaction and menu navigation.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <Settings className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Admin Controls</b> — Management interface for system administration.</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <ShoppingCart className="w-4 h-4 mt-1 text-gray-500 dark:text-gray-400" />
                  <span><b>Order Management</b> — Cart system with bill calculation and processing.</span>
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
                <li>Educational project for learning C++ OOP concepts</li>
                <li>Small restaurant or cafe management system</li>
                <li>Foundation for larger point-of-sale systems</li>
                <li>Demonstration of file handling and data persistence</li>
                <li>Template for console-based business applications</li>
                <li>Academic assignments and programming coursework</li>
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
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      git clone https://github.com/dhruba-datta/FoodOrderingSystem
                    </code>
                  </li>
                  <li>
                    Compile the C++ code:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      g++ main.cpp -o food_ordering
                    </code>
                  </li>
                  <li>
                    Run the executable:&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      ./food_ordering
                    </code>
                    &nbsp;(Linux/Mac) or&nbsp;
                    <code className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      food_ordering.exe
                    </code>
                    &nbsp;(Windows)
                  </li>
                  <li>Follow the console menu to navigate between customer and admin interfaces</li>
                  <li>For customers: Browse menu, add items to cart, and place orders</li>
                  <li>For admin: Manage orders, update menu items, and view customer data</li>
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

        {/* Mobile CTA - Only GitHub for console app */}
        <div className="sm:hidden mt-10 max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/dhruba-datta/FoodOrderingSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium focus-override"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Contact CTA Section */}
        <ContactCTA 
          title="Interested in working together?"
          description="I have experience in multiple programming languages including C++, JavaScript, and Python. Let's discuss how I can contribute to your development team."
          primaryButtonText="Let's Talk"
          secondaryButtonText="See More Projects"
        />
      </main>

      <Footer />
    </div>
  );
};

export default FoodOrderingSystemPage;
