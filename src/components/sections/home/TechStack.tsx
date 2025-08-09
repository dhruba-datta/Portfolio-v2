import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineWork } from "react-icons/md";
import { projects } from '../../../data/projects';

interface TechStackProps { isDark?: boolean }
interface TechItem { name: string; icon: string; color?: string }

const TechStack = ({ isDark }: TechStackProps) => {
  // -------- tech rows (unchanged) --------
  const frontendTech: TechItem[] = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Next.js', icon: isDark ? 'https://cdn.simpleicons.org/nextdotjs/ffffff' : 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
  ];
  const backendTech: TechItem[] = [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'Express.js', icon: isDark ? 'https://cdn.simpleicons.org/express/ffffff' : 'https://cdn.simpleicons.org/express' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma' },
  ];
  const toolsTech: TechItem[] = [
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws' },
    { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode' },
    { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
  ];

  const TechScroll = ({
    technologies,
    direction = 'left'
  }: { technologies: TechItem[]; direction?: 'left' | 'right' }) => {
    const dup = useMemo(() => [...technologies, ...technologies], [technologies]);
    return (
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-3 items-center"
          animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {dup.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              className={`flex items-center gap-2 ${isDark ? 'bg-gray-800/30 border-gray-700/30' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-lg px-3 py-2 border flex-shrink-0`}
              whileHover={{ scale: 1.05 }}
            >
              <img src={t.icon} alt={t.name} className="w-5 h-5" />
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  const wrapRef  = useRef<HTMLDivElement>(null);

  // responsive canvas
  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(() => {
      // setSize({ w: r.width, h: r.height });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // helper colors
  const cardBase = 'rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:-translate-y-1';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderSoft = isDark ? 'border-white/10' : 'border-gray-200';
  const statBg = isDark ? 'bg-white/[0.03]' : 'bg-gray-50';

  // Icons for cards
  const AcademicIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
    </svg>
  );

  const BriefcaseIcon = () => (
    <MdOutlineWork className="w-5 h-5" />
  );

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
    <Link to={to} className="block group focus:outline-none focus-visible:ring-0">
      <div className={`${cardBase} p-8 h-full flex flex-col justify-center relative`}>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[11px] uppercase tracking-[0.14em] ${textMuted}`}>{badge}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-500">{icon}</span>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className={`text-sm mt-2 ${textMuted}`}>{description}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {cta}
            </span>
          </div>
          <svg className="w-5 h-5 text-blue-400 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div>
            <span className={`uppercase tracking-[0.2em] text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Tech Stack & Status
            </span>
            <h2 className={`mt-3 text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Profile Overview
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {/* Card 1 (Academic) — identical style */}
          <FeatureCard
            to="/about"
            badge="For Academics"
            title=" Academic Excellence"
            description="Scholarships, publications and research interests view my academic profile."
            icon={<AcademicIcon />}
            cta="View Profile"
          />

          {/* Card 2 (Tech Stack — unchanged) */}
          <div className={`lg:col-span-2 ${cardBase} p-8`}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-1">
                Tech  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Stack</span>
              </h3>
            </div>
            <div className="space-y-4">
              <TechScroll technologies={frontendTech} direction="right" />
              <TechScroll technologies={backendTech} direction="left" />
              <TechScroll technologies={toolsTech} direction="right" />
            </div>
          </div>

          {/* Card 3: Key Highlights — unchanged */}
          <div className={`lg:col-span-2 ${cardBase} p-8`}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-1">
                Key <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Highlights</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              {/* Scholarship - Link to about page */}
              <Link to="/about" className="block group">
                <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-32`}>
                  <div className="flex-1">
                    <div className="text-sm font-semibold leading-snug">ICCR Government Scholarship</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Scholarship</div>
                </div>
              </Link>

              {/* Publications - Link to Google Scholar */}
              <a href="https://scholar.google.co.uk/citations?hl=en&user=RGxdIVkAAAAJ&view_op=list_works&authuser=1&gmla=AH70aAURqNk3ktsHQOlfZFUuNTBsHi7ZPnDjzbSkBWhg2ulKof0-hdur7ndSkkQ72sJwZ2ImrmCa9MtZLRPfjYoH" target="_blank" rel="noopener noreferrer" className="block group">
                <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-32`}>
                  <div className="flex-1">
                    <div className="text-3xl font-extrabold leading-none">1</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Paper Published</div>
                </div>
              </a>

              {/* Projects - Link to projects page */}
              <Link to="/projects" className="block group">
                <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-32`}>
                  <div className="flex-1">
                    <div className="text-3xl font-extrabold leading-none">{projects.length}</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Total Projects</div>
                </div>
              </Link>

              {/* LeetCode - Link to LeetCode profile */}
              <a href="https://leetcode.com/u/dhruba-datta/" target="_blank" rel="noopener noreferrer" className="block group">
                <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-32`}>
                  <div className="flex-1">
                    <div className="text-3xl font-extrabold leading-none">480+</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">Solved Leetcode</div>
                </div>
              </a>

              {/* Countries - Link to Instagram */}
              <a href="https://www.instagram.com/dhrubz_/" target="_blank" rel="noopener noreferrer" className="block group">
                <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5 flex flex-col cursor-pointer h-32`}>
                  <div className="flex-1">
                    <div className="text-3xl font-extrabold leading-none">2</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mt-auto">visited Country</div>
                </div>
              </a>
            </div>
          </div>

          {/* Card 4 (Recruiter) — identical style */}
          <FeatureCard
            to="/projects"
            badge="For Recruiters"
            title=" Project Showcase"
            description="Explore shipped work, case studies, and live demos tailored for hiring."
            icon={<BriefcaseIcon />}
            cta="View Recent Work"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
