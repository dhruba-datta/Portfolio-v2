import { Link } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { BsBookmarkHeartFill } from "react-icons/bs";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const codeLines = [
    "// Software Engineer",
    "const developer = {",
    "  name: 'Dhruba Datta',",
    "  skills: ['n8n', 'C++', 'React', 'Photography'],",
    "  researching: ['Code Bias', 'Computer Vision'],",
    "  learning: 'Always',",
    "  availableForCoffee: true",
    "};",
  ];

  const tk = {
    comment: "text-slate-400 dark:text-[#7c8095] italic",
    keyword: "text-fuchsia-600 dark:text-[#c792ea]",
    variable: "text-sky-600 dark:text-[#82aaff]",
    property: "text-cyan-600 dark:text-[#5eead4]",
    string: "text-emerald-600 dark:text-[#c3e88d]",
    punct: "text-slate-400 dark:text-[#a9b1d6]",
    bracket: "text-amber-500 dark:text-[#ffcb6b]",
    bool: "text-orange-500 dark:text-[#f78c6c]",
  } as const;

  const stringList = (items: string[]) => (
    <>
      <span className={tk.bracket}>[</span>
      {items.map((s, i) => (
        <span key={s}>
          <span className={tk.string}>'{s}'</span>
          {i < items.length - 1 && <span className={tk.punct}>, </span>}
        </span>
      ))}
      <span className={tk.bracket}>]</span>
    </>
  );

  const property = (
    name: string,
    value: ReactNode,
    { trailingComma = true }: { trailingComma?: boolean } = {}
  ) => (
    <>
      {"  "}
      <span className={tk.property}>{name}</span>
      <span className={tk.punct}>:</span> {value}
      {trailingComma && <span className={tk.punct}>,</span>}
    </>
  );

  const renderCodeLine = (index: number): ReactNode => {
    switch (index) {
      case 0:
        return <span className={tk.comment}>// Software Engineer</span>;
      case 1:
        return (
          <>
            <span className={tk.keyword}>const</span>{" "}
            <span className={tk.variable}>developer</span>{" "}
            <span className={tk.punct}>=</span>{" "}
            <span className={tk.bracket}>{"{"}</span>
          </>
        );
      case 2:
        return property("name", <span className={tk.string}>'Dhruba Datta'</span>);
      case 3:
        return property(
          "skills",
          stringList(["n8n", "C++", "React", "Photography"])
        );
      case 4:
        return property(
          "researching",
          stringList(["Code Bias", "Computer Vision"])
        );
      case 5:
        return property("learning", <span className={tk.string}>'Always'</span>);
      case 6:
        return property(
          "availableForCoffee",
          <span className={tk.bool}>true</span>,
          { trailingComma: false }
        );
      case 7:
        return (
          <>
            <span className={tk.bracket}>{"}"}</span>
            <span className={tk.punct}>;</span>
            <span className="ml-1 inline-block w-[7px] h-[14px] bg-blue-500 dark:bg-[#7aa2f7] align-middle animate-pulse" />
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhruba-datta/",
      icon: <FaLinkedinIn className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/dhruba-datta",
      icon: <FaGithub className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dhrubz_/",
      icon: <FaInstagram className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.co.uk/citations?hl=en&user=RGxdIVkAAAAJ&view_op=list_works&authuser=1&gmla=AH70aAURqNk3ktsHQOlfZFUuNTBsHi7ZPnDjzbSkBWhg2ulKof0-hdur7ndSkkQ72sJwZ2ImrmCa9MtZLRPfjYoH",
      icon: <FaGoogleScholar className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/dhruba_datta_anjan",
      icon: <FaTelegramPlane className="w-4 sm:w-5 h-4 sm:h-5" />,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 sm:pt-12 lg:pt-0"
    >
      {/* Subtle background effects - keeping it minimal like other sections */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Interactive mouse-tracking overlay */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05) 50%, transparent 70%)`,
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        style={{ top: "-300px", height: "calc(100% + 300px)" }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 container-max-width section-padding -mt-24 sm:-mt-20 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Profile and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 relative pb-24 sm:pb-28 lg:pb-0"
          >
            {/* Introduction */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              {/* Mobile Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="lg:hidden flex justify-center mb-2 sm:mb-6 relative -top-12"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative group focus-override"
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl transition-all duration-500"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ transform: "scale(1.2)" }}
                  />

                  {/* Mobile main image */}
                  <motion.img
                    src="/images/Headshot.webp"
                    alt="Dhruba Datta"
                    className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-xl border-2 border-white/10"
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    animate={{
                      boxShadow: [
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Rotating border ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-40 transition-opacity duration-300"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, #60a5fa, transparent, #a855f7, transparent)",
                      mask: "radial-gradient(circle, transparent 50px, black 52px, black 54px, transparent 56px)",
                      WebkitMask:
                        "radial-gradient(circle, transparent 50px, black 52px, black 54px, transparent 56px)",
                    }}
                  />

                  {/* Status indicator with pulse */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg z-20"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 6px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating sparkles */}
                  <motion.div
                    className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full shadow-lg z-20"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, 4, 0],
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -right-3 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-lg z-20"
                    animate={{
                      scale: [0, 1.2, 0],
                      opacity: [0, 1, 0],
                      x: [0, -2, 0],
                      y: [0, 2, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating geometric shapes */}
                  <motion.div
                    className="absolute -top-6 right-0 w-3 h-3 border border-purple-400 opacity-60 z-20"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    animate={{
                      rotate: [0, 360],
                      y: [0, -6, 0],
                    }}
                    transition={{
                      rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />
                  <motion.div
                    className="absolute -left-4 bottom-4 w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-70 z-20"
                    style={{
                      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                    }}
                    animate={{
                      rotate: [0, -360],
                      x: [0, 6, 0],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />
                </motion.div>
              </motion.div>

              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0 }}
                  className="text-[10px] sm:text-[11px] tracking-[0.22em] font-semibold uppercase text-slate-500 dark:text-slate-400 font-outfit block"
                >
                  Hello! I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  className="text-slate-900 dark:text-white leading-[1.1] -ml-1 mt-2 sm:mt-3"
                >
                  Dhruba{" "}
                  <span className="text-blue-600 dark:text-blue-400">Datta</span>
                </motion.h1>
                <motion.h4
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0 }}
                  className="text-slate-800 dark:text-slate-300 mt-2 sm:mt-3"
                >
                  R&D Lead · AI Engineer · Researcher
                </motion.h4>
              </div>
              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0 }}
                className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-lg"
              >
                Tackling complex challenges with innovative tech and a passion
                for automation. Beyond building solutions, love to explore the
                world and capture memories.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start py-2 sm:py-3 lg:py-0"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className={
                    `p-1.5 sm:p-2 rounded-lg transition-all duration-300 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 focus-override ` +
                    (social.name === "LinkedIn"
                      ? "hover:text-blue-600 dark:hover:text-blue-400"
                      : "") +
                    (social.name === "Instagram"
                      ? "hover:text-pink-500 dark:hover:text-pink-400"
                      : "") +
                    (social.name === "Telegram"
                      ? "hover:text-blue-400 dark:hover:text-blue-300"
                      : "") +
                    (social.name === "YouTube"
                      ? "hover:text-red-500 dark:hover:text-red-400"
                      : "") +
                    (social.name === "Facebook"
                      ? "hover:text-blue-700 dark:hover:text-blue-500"
                      : "") +
                    (social.name === "GitHub"
                      ? "hover:text-gray-900 dark:hover:text-white"
                      : "") +
                    (social.name === "Google Scholar"
                      ? "hover:text-gray-900 dark:hover:text-white"
                      : "")
                  }
                  aria-label={`Visit my ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start mb-16 sm:mb-20 lg:mb-0"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm sm:text-base font-outfit font-semibold
                           text-slate-900 dark:text-white
                           bg-blue-50/60 dark:bg-white/[0.04]
                           ring-1 ring-blue-200/80 dark:ring-white/[0.08]
                           backdrop-blur-md
                           hover:ring-blue-300/80 dark:hover:ring-sky-400/20
                           hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05]
                           transition-all focus-override"
                aria-label="About"
              >
                <BsBookmarkHeartFill className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-sky-400" />
                <span>About me</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>

            {/* Mobile-only scroll indicator */}
            <motion.button
              type="button"
              onClick={() => {
                const nextSection = document.querySelector(
                  "#about, .next-section, main > section:nth-child(2)",
                );
                if (nextSection) {
                  nextSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="lg:hidden absolute -bottom-12 sm:-bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
              aria-label="Explore more"
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-300/80">
                explore
              </span>
              <span className="h-10 w-7 rounded-full border border-gray-400 dark:border-gray-600/70 bg-gray-200 dark:bg-gray-900/50 backdrop-blur-sm shadow flex items-start justify-center">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-200"
                  animate={
                    !prefersReducedMotion
                      ? { y: [6, 18, 6], opacity: [1, 0.35, 1] }
                      : undefined
                  }
                  transition={
                    !prefersReducedMotion
                      ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                      : undefined
                  }
                />
              </span>
            </motion.button>
          </motion.div>

          {/* Right side - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Profile Image - floating above IDE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="absolute -top-20 -right-12 z-20"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative group cursor-pointer focus-override"
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ transform: "scale(1.3)" }}
                  />

                  {/* Inner glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />

                  {/* Main image */}
                  <motion.img
                    src="/images/Headshot.webp"
                    alt="Dhruba Datta Headshot"
                    className="relative z-10 w-40 h-40 rounded-full object-cover shadow-2xl transition-all duration-300"
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                    animate={{
                      boxShadow: [
                        "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
                        "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Rotating border ring - removed on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, #60a5fa, transparent, #a855f7, transparent)",
                      mask: "radial-gradient(circle, transparent 70px, black 72px, black 74px, transparent 76px)",
                      WebkitMask:
                        "radial-gradient(circle, transparent 70px, black 72px, black 74px, transparent 76px)",
                    }}
                  />

                  {/* Status indicator with pulse */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
                    animate={{
                      scale: [1, 1.4, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 8px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Enhanced floating sparkles */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.2, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                      x: [0, 5, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-3 -right-5 w-2 h-2 bg-blue-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, -3, 0],
                      y: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute top-2 -right-6 w-1.5 h-1.5 bg-pink-400 rounded-full shadow-lg"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating geometric shapes */}
                  <motion.div
                    className="absolute -top-8 right-2 w-4 h-4 border-2 border-purple-400 opacity-60"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    animate={{
                      rotate: [0, 360],
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <motion.div
                    className="absolute -left-6 bottom-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 opacity-70"
                    style={{
                      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                    }}
                    animate={{
                      rotate: [0, -360],
                      x: [0, 8, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      scale: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Code block container */}
              <div className="relative">
                {/* Ambient glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 opacity-50 blur-lg dark:opacity-60"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#0e1525] backdrop-blur-xl">
                  {/* Title bar */}
                  <div className="relative flex items-center px-3.5 py-2.5 bg-gray-50 dark:bg-[#0a1020] border-b border-gray-200 dark:border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 text-[11px] font-mono tracking-wide text-gray-500 dark:text-gray-400">
                      ~/portfolio/developer.js
                    </span>
                  </div>

                  {/* Tab bar */}
                  <div className="flex items-end bg-gray-100/70 dark:bg-[#0a101e] border-b border-gray-200 dark:border-white/[0.04]">
                    <div className="flex items-center gap-2 px-3.5 py-2 text-[11px] font-medium bg-white dark:bg-[#0e1525] border-r border-gray-200 dark:border-white/[0.06] text-gray-700 dark:text-[#c0caf5] relative">
                      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] bg-[#f7df1e] text-[8px] font-bold text-black">JS</span>
                      developer.js
                      <span className="text-blue-500 dark:text-[#7aa2f7] ml-0.5 text-base leading-none">●</span>
                    </div>
                  </div>

                  {/* Code content */}
                  <div className="font-mono text-[12.5px] leading-6 py-4 pr-4">
                    {codeLines.map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center whitespace-pre"
                      >
                        <span className="w-10 pr-3 text-right text-gray-300 dark:text-[#3b4261] select-none">
                          {index + 1}
                        </span>
                        <span className="flex-1">{renderCodeLine(index)}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-lg opacity-20"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-20"
              />

              {/* Additional bottom left elements */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  x: [0, 4, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
                className="absolute -bottom-4 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-25"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -bottom-8 left-2 w-3 h-3 border-2 border-pink-400 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
