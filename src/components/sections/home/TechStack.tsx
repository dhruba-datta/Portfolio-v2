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
    const ro = new ResizeObserver((ents) => {
      const r = ents[0].contentRect;
      // setSize({ w: r.width, h: r.height });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // helper colors
  const cardBase = isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderSoft = isDark ? 'border-white/10' : 'border-gray-200';
  const statBg = isDark ? 'bg-white/[0.03]' : 'bg-gray-50';

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
          {/* Card 1 */}
          <motion.div
            className={`${cardBase} backdrop-blur-sm rounded-2xl p-8 border flex flex-col justify-between`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className={`${textMuted} leading-relaxed`}>
                Research publications, LeetCode achievements, and academic collaborations for professors and researchers.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <span className={`text-sm ${textMuted}`}>Publications & Research</span>
              </div>
              <Link
                to="/about"
                className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                View Profile →
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className={`lg:col-span-2 ${cardBase} backdrop-blur-sm rounded-2xl p-8 border`}
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

          {/* Card 3: Key Highlights - five sections in one line */}
          <motion.div
            className={`lg:col-span-2 ${cardBase} backdrop-blur-sm rounded-2xl p-8 border`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Header aligned with stack card and NO ICON */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-1">
                Key <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Highlights</span>
              </h3>
            </div>

            {/* Five items side-by-side */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {/* 1) ICCR Scholarship */}
              <div
                className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}
              >
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Scholarship</div>
                <div className="text-sm font-semibold leading-snug">ICCR Government Scholarship</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Fully funded & stipend</div>
              </div>

              {/* 2) Publications */}
              <div
                className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}
              >
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Publications</div>
                <div className="text-3xl font-extrabold leading-none">1</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Peer-reviewed</div>
              </div>

              {/* 3) Countries */}
              <div
                className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}
              >
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Countries</div>
                <div className="text-3xl font-extrabold leading-none">3</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Visited & collaborated</div>
              </div>

              {/* 4) Projects */}
              <div
                className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}
              >
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70 mb-1">Projects</div>
                <div className="text-3xl font-extrabold leading-none">{projects.length}</div>
                <div className={`mt-2 text-xs ${textMuted}`}>Production & demos</div>
              </div>

              {/* 5) LeetCode */}
              <div
                className={`p-5 rounded-xl border ${borderSoft} ${statBg} transition-all hover:shadow-lg hover:-translate-y-0.5`}
              >
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

          {/* Card 4 */}
          <motion.div
            className={`${cardBase} backdrop-blur-sm rounded-2xl p-8 border`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" /></svg>
              </div>
              <p className={`text-sm ${textMuted} mb-2`}>For Tech Recruiters</p>
              <h3 className="text-lg font-semibold">Portfolio & Project Showcase</h3>
            </div>
            <Link
              to="/projects"
              className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors flex items-center gap-1"
            >
              View Recent Work →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
