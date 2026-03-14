import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineWork } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiCanva,
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
  SiXcode,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiVite,
  SiFramer,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiDocker,
  SiNetlify,
  SiN8N,
  SiNotion,
  SiJira,
  SiTrello,
  SiOverleaf,
  SiConfluence
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { projects } from '../../../data/projects';
import CountUp from '../../ui/CountUp';

interface TechStackProps { isDark?: boolean }
interface TechItem { name: string; icon: string | React.ReactNode; color?: string }

// Moved outside to prevent re-mounting on every render
const TechScroll = ({
  technologies,
  direction = 'left',
  isDark
}: { technologies: TechItem[]; direction?: 'left' | 'right'; isDark?: boolean }) => {
  const triplicated = useMemo(() => [...technologies, ...technologies, ...technologies], [technologies]);
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex items-center will-change-transform"
        animate={{ x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{ transform: 'translateZ(0)' }}
      >
        {triplicated.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            className={`flex items-center gap-1.5 sm:gap-2 ${isDark ? 'bg-gray-800/60 border-gray-700/50' : 'bg-white/90 border-gray-200'} rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border flex-shrink-0 shadow-sm mx-1.5 sm:mx-2`}
            whileHover={{ scale: 1.05 }}
          >
            {typeof t.icon === 'string' ? (
              <img src={t.icon} alt={t.name} className="w-4 sm:w-5 h-4 sm:h-5" />
            ) : (
              t.icon
            )}
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>{t.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Icons for cards
const AcademicIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
  </svg>
);

const BriefcaseIcon = () => (
  <MdOutlineWork className="w-5 h-5" />
);

// Accurate AI Platform Icons
const AntigravityIcon = () => (
  <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32C12 32 16 8 20 8C24 8 28 32 32 32" stroke="url(#antigravity_grad)" strokeWidth="6" strokeLinecap="round"/>
    <defs>
      <linearGradient id="antigravity_grad" x1="20" y1="32" x2="20" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="0.5" stopColor="#10B981" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
);

const AIStudioIcon = () => (
  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.921 4.196H6.328A2.705 2.705 0 003.623 6.9v11.362a2.705 2.705 0 002.705 2.705h11.363a2.705 2.705 0 002.705-2.705v-4.756l1.623-1.113v5.87a4.329 4.329 0 01-4.328 4.328H6.328A4.329 4.329 0 012 18.263V6.901a4.328 4.328 0 014.328-4.329h4.545l-.952 1.624z"></path>
    <path d="M17.82 0c.145 0 .268.104.299.246a7 7 0 001.9 3.484 7 7 0 003.485 1.901c.142.031.246.154.246.3a.308.308 0 01-.246.298A7 7 0 0020.02 8.13a7 7 0 00-1.912 3.535.297.297 0 01-.288.238.297.297 0 01-.288-.238A7 7 0 0015.62 8.13a7 7 0 00-3.535-1.912.297.297 0 01-.238-.288c0-.14.1-.26.238-.288A7 7 0 0015.62 3.73 7.001 7.001 0 0017.521.246.308.308 0 0117.82 0z"></path>
  </svg>
);

const NotebookLMIcon = ({ isDark }: { isDark: boolean }) => (
  <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill={isDark ? "white" : "#1F1F1F"} />
    <path d="M256 112c-88.373 0-160 71.04-160 158.693v75.973h29.493v-7.572c0-35.547 29.04-64.374 64.88-64.374s64.88 28.827 64.88 64.374v7.572h29.494v-7.572c0-51.707-42.267-93.6-94.374-93.6-20.293 0-39.093 6.346-54.48 17.173 16.107-31.76 49.28-53.547 87.574-53.547 54.106 0 97.973 43.52 97.973 97.173v40.373h29.494v-40.373c0-69.813-57.067-126.426-127.467-126.426-31.654 0-60.614 11.44-82.907 30.4 21.893-41.04 65.36-69.014 115.44-69.014 72.08 0 130.506 57.947 130.506 129.44v75.973H416v-75.973C416 183.04 344.374 112 256 112z" fill={isDark ? "#1F1F1F" : "#fff"} />
  </svg>
);


const TechStack = ({ isDark }: TechStackProps) => {
  // Memoize data to ensure referential stability
  const frontendTech: TechItem[] = useMemo(() => [
    { name: 'React', icon: <SiReact className="w-4 sm:w-5 h-4 sm:h-5 text-[#61DAFB]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-4 sm:w-5 h-4 sm:h-5 text-[#3178C6]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-black'}`} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 sm:w-5 h-4 sm:h-5 text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="w-4 sm:w-5 h-4 sm:h-5 text-[#7952B3]" /> },
    { name: 'WordPress', icon: <SiWordpress className="w-4 sm:w-5 h-4 sm:h-5 text-[#21759B]" /> },
    { name: 'Vite', icon: <SiVite className="w-4 sm:w-5 h-4 sm:h-5 text-[#646CFF]" /> },
    { name: 'Framer', icon: <SiFramer className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-black'}`} /> },
    { name: 'Figma', icon: <SiFigma className="w-4 sm:w-5 h-4 sm:h-5 text-[#F24E1E]" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="w-4 sm:w-5 h-4 sm:h-5 text-[#31A8FF]" /> },
    { name: 'Lightroom', icon: <SiAdobelightroom className="w-4 sm:w-5 h-4 sm:h-5 text-[#31A8FF]" /> },
    { name: 'Illustrator', icon: <SiAdobeillustrator className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF9A00]" /> },
    { name: 'Canva', icon: <SiCanva className="w-4 sm:w-5 h-4 sm:h-5 text-[#00C4CC]" /> },
  ], [isDark]);

  const backendTech: TechItem[] = useMemo(() => [
    { name: 'Node.js', icon: <SiNodedotjs className="w-4 sm:w-5 h-4 sm:h-5 text-[#339933]" /> },
    { name: 'Express.js', icon: <SiExpress className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-black'}`} /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-4 sm:w-5 h-4 sm:h-5 text-[#47A248]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 sm:w-5 h-4 sm:h-5 text-[#4169E1]" /> },
    { name: 'Python', icon: <SiPython className="w-4 sm:w-5 h-4 sm:h-5 text-[#3776AB]" /> },
    { name: 'Java', icon: <FaJava className="w-4 sm:w-5 h-4 sm:h-5 text-[#007396]" /> },
    { name: 'C++', icon: <SiCplusplus className="w-4 sm:w-5 h-4 sm:h-5 text-[#00599C]" /> },
    { name: 'Linux', icon: <FcLinux className="w-4 sm:w-5 h-4 sm:h-5" /> },
    { name: 'Git', icon: <SiGit className="w-4 sm:w-5 h-4 sm:h-5 text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-black'}`} /> },
    { name: 'Bitbucket', icon: <SiBitbucket className="w-4 sm:w-5 h-4 sm:h-5 text-[#0052CC]" /> },
    { name: 'Docker', icon: <SiDocker className="w-4 sm:w-5 h-4 sm:h-5 text-[#2496ED]" /> },
    { name: 'Netlify', icon: <SiNetlify className="w-4 sm:w-5 h-4 sm:h-5 text-[#00C8C8]" /> },
    { name: 'n8n', icon: <SiN8N className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF6C37]" /> },
  ], [isDark]);

  const toolsTech: TechItem[] = useMemo(() => [
    { name: 'Gemini', icon: <SiGooglegemini className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-[#8E75B2]'}`} /> },
    { name: 'ChatGPT', icon: <SiOpenai className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-[#74aa9c]'}`} /> },
    { name: 'Perplexity', icon: <SiPerplexity className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-[#22B1BF]'}`} /> },
    { name: 'Antigravity', icon: <AntigravityIcon /> },
    { name: 'AI Studio', icon: <AIStudioIcon /> },
    { name: 'NotebookLM', icon: <NotebookLMIcon isDark={!!isDark} /> },
    { name: 'Xcode', icon: <SiXcode className="w-4 sm:w-5 h-4 sm:h-5 text-[#147EFB]" /> },
    { name: 'VS Code', icon: <VscVscode className="w-4 sm:w-5 h-4 sm:h-5 text-[#007ACC]" /> },
    { name: 'Notion', icon: <SiNotion className={`w-4 sm:w-5 h-4 sm:h-5 ${isDark ? 'text-white' : 'text-black'}`} /> },
    { name: 'Jira', icon: <SiJira className="w-4 sm:w-5 h-4 sm:h-5 text-[#0052CC]" /> },
    { name: 'Confluence', icon: <SiConfluence className="w-4 sm:w-5 h-4 sm:h-5 text-[#172B4D]" /> },
    { name: 'Trello', icon: <SiTrello className="w-4 sm:w-5 h-4 sm:h-5 text-[#0079BF]" /> },
    { name: 'Overleaf', icon: <SiOverleaf className="w-4 sm:w-5 h-4 sm:h-5 text-[#47A141]" /> },
  ], [isDark]);


  // helper colors
  const cardBase = 'rounded-3xl overflow-hidden border border-blue-200/60 dark:border-white/[0.08] bg-blue-50/30 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/50 dark:hover:border-sky-400/20';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderSoft = isDark ? 'border-white/10' : 'border-blue-200/50';
  const statBg = isDark ? 'bg-white/[0.03]' : 'bg-blue-50/40';

  // --- Reusable identical feature card (used for Card 1 and Card 4) ---
  const FeatureCard = ({
    to,
    badge,
    title,
    description,
    icon,
    cta = 'Explore'
  }: {
    to: string;
    badge: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    cta?: string;
  }) => (
    <Link to={to} className="block group focus-override" aria-label={`View ${title}`}>
      <div className={`${cardBase} p-4 sm:p-5 lg:p-8 h-full flex flex-col justify-center relative min-h-[180px] sm:min-h-[200px]`}>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.14em] ${textMuted}`}>{badge}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-500">{icon}</span>
                <h5 className="font-semibold">{title}</h5>
              </div>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center justify-between min-h-[40px] sm:min-h-[44px]">
          <div className="flex items-center gap-2">
            <span className="text-base font-outfit font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {cta}
            </span>
          </div>
          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h3 className={isDark ? 'text-slate-400' : 'text-slate-500'}>
              Tech Stack & Status
            </h3>
            <h2 className={`mt-2 sm:mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Profile Overview
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 h-auto lg:h-[600px]">
          {/* Card 1 (Academic) — identical style */}
          <FeatureCard
            to="/about"
            badge="For Academics"
            title=" Academic Excellence"
            description="Scholarships, publications and research interests view my academic profile."
            icon={<AcademicIcon />}
            cta="View Profile"
          />

          {/* Card 2 (Tech Stack) */}
          <div className={`lg:col-span-2 ${cardBase} p-4 sm:p-5 lg:p-8`}>
            <div className="mb-4 sm:mb-5 lg:mb-8">
              <h5 className="mb-1">
                My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Toolbox</span>
              </h5>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <TechScroll technologies={frontendTech} direction="right" isDark={isDark} />
              <TechScroll technologies={backendTech} direction="left" isDark={isDark} />
              <TechScroll technologies={toolsTech} direction="right" isDark={isDark} />
            </div>
          </div>

          {/* Card 3: Key Highlights — unchanged */}
          <div className={`lg:col-span-2 ${cardBase} p-4 sm:p-5 lg:p-8`}>
            <div className="mb-4 sm:mb-5 lg:mb-8">
              <h5 className="mb-1">
                Key <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Highlights</span>
              </h5>
            </div>

            {/* Mobile: 3 in first row, 2 in second row. Desktop: original grid. */}
            <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
              {/* Publications */}
              <a href="https://scholar.google.co.uk/citations?hl=en&user=RGxdIVkAAAAJ&view_op=list_works&authuser=1&gmla=AH70aAURqNk3ktsHQOlfZFUuNTBsHi7ZPnDjzbSkBWhg2ulKof0-hdur7ndSkkQ72sJwZ2ImrmCa9MtZLRPfjYoH" target="_blank" rel="noopener noreferrer" className="block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={1} duration={1.5} delay={0.2} />
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Paper Published</div>
                </div>
              </a>
              {/* Total Automation */}
              <Link to="/projects?tab=automation" className="block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={projects.filter(p => p.category === 'automation').length} duration={1.5} delay={0.2} />+
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Automation</div>
                </div>
              </Link>
              {/* Projects */}
              <Link to="/projects" className="block group focus-override">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={projects.length} duration={1.5} delay={0.2} />+
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Projects</div>
                </div>
              </Link>
              {/* LeetCode */}
              <a href="https://leetcode.com/u/dhruba-datta/" target="_blank" rel="noopener noreferrer" className="block group focus-override" aria-label="View my LeetCode profile">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={500} duration={0.5} delay={0.2} separator="," />+
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Solved Leetcode</div>
                </div>
              </a>
              {/* Countries */}
              <a href="https://www.instagram.com/dhrubz_/" target="_blank" rel="noopener noreferrer" className="hidden sm:block group focus-override" aria-label="View my travel stories on Instagram">
                <div className={`p-3 sm:p-4 lg:p-5 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 sm:h-28 lg:h-32 min-h-[96px] sm:min-h-[112px]`}>
                  <div className="flex-1">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-none">
                      <CountUp from={0} to={2} duration={1.2} delay={1} />
                    </div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">visited Country</div>
                </div>
              </a>
            </div>
            {/* Mobile: only 3 highlights in a single row */}
            <div className="block sm:hidden mb-4">
              <div className="grid grid-cols-3 gap-3">
                {/* First row: 3 items */}
                <a href="https://scholar.google.co.uk/citations?hl=en&user=RGxdIVkAAAAJ&view_op=list_works&authuser=1&gmla=AH70aAURqNk3ktsHQOlfZFUuNTBsHi7ZPnDjzbSkBWhg2ulKof0-hdur7ndSkkQ72sJwZ2ImrmCa9MtZLRPfjYoH" target="_blank" rel="noopener noreferrer" className="block group focus-override">
                  <div className={`p-3 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 min-h-[96px]`}>
                    <div className="flex-1">
                      <div className="text-xl font-extrabold leading-none">
                        <CountUp from={0} to={1} duration={1.5} delay={0.2} />
                      </div>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.14em] opacity-70 mt-auto">Paper Published</div>
                  </div>
                </a>
                <Link to="/projects?tab=automation" className="block group focus-override">
                  <div className={`p-3 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 min-h-[96px]`}>
                    <div className="flex-1">
                      <div className="text-xl font-extrabold leading-none">
                        <CountUp from={0} to={projects.filter(p => p.category === 'automation').length} duration={1.5} delay={0.2} />+
                      </div>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Automation</div>
                  </div>
                </Link>
                <Link to="/projects" className="block group focus-override">
                  <div className={`p-3 rounded-xl border ${borderSoft} ${statBg} transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:shadow-lg hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] flex flex-col cursor-pointer h-24 min-h-[96px]`}>
                    <div className="flex-1">
                      <div className="text-xl font-extrabold leading-none">
                        <CountUp from={0} to={projects.length} duration={1.5} delay={0.2} />+
                      </div>
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Projects</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 (Recruiter) — identical style */}
          <FeatureCard
            to="/projects"
            badge="For Recruiters"
            title=" Project Showcase"
            description="Explore shipped work, case studies, and live demos tailored for hiring."
            icon={<BriefcaseIcon />}
            cta="View Recent Works"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
