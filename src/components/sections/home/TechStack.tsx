import { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

  // --- Reusable identical feature card (used for Card 1 and Card 4) ---
  const FeatureCard = ({
    to,
    badge,
    title,
    description,
    delay = 0.1,
    cta = 'Explore'
  }: {
    to: string;
    badge: string;
    title: string;
    description: string;
    delay?: number;
    cta?: string;
  }) => (
    <Link to={to} className="block group focus:outline-none focus-visible:ring-0">
      <motion.div
        className={`${cardBase} p-8 h-full flex flex-col justify-between relative`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        <div>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <span className={`text-[11px] uppercase tracking-[0.14em] ${textMuted}`}>{badge}</span>
              <h3 className="text-xl font-semibold mt-1">{
                title
              }</h3>
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
      </motion.div>
    </Link>
  );

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className={`uppercase tracking-[0.2em] text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Tech Stack & Status
            </span>
            <h2 className={`mt-3 text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              My Stack & Collaboration
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {/* Card 1 (Academic) — identical style */}
          <FeatureCard
            to="/about"
            badge="For Academics"
            title="Academic Excellence"
            description="Scholarships, publications, and research interests—view my academic profile."
            delay={0.1}
            cta="View Profile"
          />

          {/* Card 2 (Tech Stack — unchanged) */}
          <motion.div
            className={`lg:col-span-2 ${cardBase} p-8`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Card 3: Key Highlights — unchanged */}
          <motion.div
            className={`lg:col-span-2 ${cardBase} p-8`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-1">
                Key <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Highlights</span>
              </h3>
            </div>

            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Scholarship</div>
                <div className="text-sm font-semibold leading-snug">ICCR Government Scholarship</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Fully funded & stipend</div>
              </div>

              <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Publications</div>
                <div className="text-3xl font-extrabold leading-none">1</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Peer-reviewed</div>
              </div>

              <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Countries</div>
                <div className="text-3xl font-extrabold leading-none">3</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Visited & collaborated</div>
              </div>

              <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Projects</div>
                <div className="text-3xl font-extrabold leading-none">{projects.length}</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Production & demos</div>
              </div>

              <div className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}>
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">LeetCode</div>
                <div className="text-3xl font-extrabold leading-none">450+</div>
                <div className={`mt-3 h-1.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                  <div
                    className={`h-1.5 rounded-full ${isDark ? 'bg-orange-400' : 'bg-orange-500'}`}
                    style={{ width: '45%' }}
                  />
                </div>
                <div className={`mt-1 flex justify-between text-[10px] ${textMuted}`}>
                  <span>450 / 1000</span>
                  <span>Goal</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 (Recruiter) — identical style */}
          <FeatureCard
            to="/projects"
            badge="For Recruiters"
            title="Project Showcase"
            description="Explore shipped work, case studies, and live demos tailored for hiring."
            delay={0.4}
            cta="View Recent Work"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
