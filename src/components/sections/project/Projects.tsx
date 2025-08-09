import { Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layers, Code2 } from 'lucide-react';
import { projects, categories, categoryMeta } from '../../../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | string>('all');
  const [mounted, setMounted] = useState(false); // prevent first-time thumb animation
  const [visibleCount, setVisibleCount] = useState(6); // load-more
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Enable animations after first paint to avoid the initial "All" slide-in
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Reset visible items when category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Decorative dots for the minimal background (stable across renders)
  const bgDots = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        left: `${6 + i * 9}%`,
        top: `${18 + i * 7}%`,
        size: 10 + (i % 3) * 2,
        opacity: 0.05 + (i % 4) * 0.02,
        duration: 7 + i,
        delay: i * 0.6,
      })),
    []
  );

  return (
    <section id="projects" className="relative py-12 overflow-hidden">
      {/* Minimal, blue-leaning background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft mesh glows */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          style={{
            background:
              'radial-gradient(900px 520px at 70% -5%, rgba(59,130,246,0.12), transparent 70%), radial-gradient(800px 520px at 10% 105%, rgba(99,102,241,0.10), transparent 72%)',
          }}
        />
        {/* Blue orbs */}
        <motion.div
          className="absolute -top-24 left-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl bg-gradient-to-tr from-blue-500/18 via-indigo-500/14 to-cyan-500/16"
          animate={
            prefersReducedMotion ? {} : { y: [0, 18, 0], x: [0, 24, 0], scale: [1, 1.04, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/5 w-[22rem] h-[22rem] rounded-full blur-3xl bg-gradient-to-tl from-sky-400/16 via-blue-500/14 to-indigo-600/14"
          animate={
            prefersReducedMotion ? {} : { y: [0, -16, 0], x: [0, -18, 0], scale: [1, 1.05, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Subtle masked grid */}
        <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_60%_45%_at_50%_8%,#000_70%,transparent_120%)]
                        bg-[linear-gradient(to_right,#64748b33_1px,transparent_1px),linear-gradient(to_bottom,#64748b33_1px,transparent_1px)]
                        dark:bg-[linear-gradient(to_right,#93c5fd33_1px,transparent_1px),linear-gradient(to_bottom,#93c5fd33_1px,transparent_1px)]
                        bg-[size:18px_26px]" />
        {/* Floating micro-dots */}
        {bgDots.map((d, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-blue-400/50 dark:bg-sky-300/50"
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              filter: 'blur(1px)',
              opacity: d.opacity,
            }}
            initial={{ y: 0 }}
            animate={prefersReducedMotion ? {} : { y: [0, -14, 0] }}
            transition={
              prefersReducedMotion ? {} : { duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        ))}
        {/* Very gentle rotating sheen */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.05), transparent 30%, rgba(255,255,255,0.05) 60%, transparent 80%, rgba(255,255,255,0.05))',
          }}
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={prefersReducedMotion ? {} : { duration: 80, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <span className="uppercase tracking-[0.2em] text-[11px] text-slate-500 dark:text-slate-400">
            Projects
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center">
            Featured Work
          </h2>
          
        </div>

        {/* Filters: Modern segmented control with no initial slide-in */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative inline-flex items-center gap-1 rounded-full p-1 border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md"
          >
            {(['all', ...categories.map((c) => c.key)] as const).map((key) => {
              const isActive = activeCategory === key;
              const label = key === 'all' ? 'All' : categories.find((c) => c.key === key)?.label;
              const Icon = key === 'all' ? Layers : categories.find((c) => c.key === key)?.icon || Code2;

              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`relative z-10 px-3.5 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1.5 transition-all
                    ${isActive ? 'text-white' : 'text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300'}`}
                >
                  {/* Active background: static on first paint, animated thereafter */}
                  {isActive ? (
                    mounted ? (
                      <>
                        <motion.span
                          layoutId="activePillBg"
                          className="absolute inset-0 -z-10 rounded-full ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/25"
                          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(37,99,235,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                          }}
                        />
                        <motion.span
                          layoutId="activePillGlow"
                          className="absolute -inset-[2px] -z-20 rounded-full blur-md"
                          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                          style={{
                            background:
                              'radial-gradient(70% 120% at 50% 50%, rgba(59,130,246,0.35), rgba(99,102,241,0.22) 60%, transparent 80%)',
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <span
                          className="absolute inset-0 -z-10 rounded-full ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/25"
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(37,99,235,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                          }}
                        />
                        <span
                          className="absolute -inset-[2px] -z-20 rounded-full blur-md"
                          style={{
                            background:
                              'radial-gradient(70% 120% at 50% 50%, rgba(59,130,246,0.35), rgba(99,102,241,0.22) 60%, transparent 80%)',
                          }}
                        />
                      </>
                    )
                  ) : null}

                  <motion.span
                    initial={false}
                    animate={{ scale: isActive ? 1 : 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="inline-flex items-center gap-1.5"
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
                    {label}
                  </motion.span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Grid (shows first 6, then expands) */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const truncateDescription = (text: string, maxLength: number = 110) => {
              if (text.length <= maxLength) return text;
              const truncated = text.slice(0, maxLength);
              const lastSpace = truncated.lastIndexOf(' ');
              return truncated.slice(0, lastSpace) + '...';
            };

            const meta = categoryMeta[project.category] || { label: project.category, Icon: Layers };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
                className="group"
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="block rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-slate-950/90 backdrop-blur-md hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500
                             hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Modern gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category badge with icon */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 inline-flex items-center gap-1.5">
                        <meta.Icon className="w-3.5 h-3.5 opacity-80" />
                        {meta.label}
                      </span>
                    </div>

                    <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.08] dark:ring-white/[0.08] rounded-t-3xl" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 min-h-[40px]">
                      {truncateDescription(project.description)}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border border-slate-200/70 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <span className="text-slate-500 dark:text-slate-400">{tag.icon}</span>
                          {tag.name}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-xl border border-blue-200/70 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 bg-blue-50/80 dark:bg-sky-900/20 backdrop-blur-sm">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Actions removed as requested */}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Load More */}
        {filteredProjects.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 dark:from-sky-500 dark:to-sky-600 text-white hover:from-blue-600 hover:to-blue-700 dark:hover:from-sky-600 dark:hover:to-sky-700 shadow-lg shadow-blue-500/25 dark:shadow-sky-500/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              Load more
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-10 text-center text-slate-600 dark:text-slate-400">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
