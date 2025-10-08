import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { projects, categoryMeta } from '../../../data/projects';

const ProjectPreview = () => {
  const prefersReducedMotion = useReducedMotion();

  // Get first 6 projects for homepage preview
  const featuredProjects = useMemo(() => projects.slice(0, 6), []);

  // Decorative dots for the minimal background (stable across renders)
  const bgDots = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        left: `${8 + i * 11}%`,
        top: `${20 + i * 8}%`,
        size: 8 + (i % 3) * 2,
        opacity: 0.04 + (i % 4) * 0.02,
        duration: 6 + i,
        delay: i * 0.5,
      })),
    []
  );

  const truncateDescription = (text: string, maxLength: number = 110) => {
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.slice(0, lastSpace) + '...';
  };

  return (
    <section id="projects-preview" className="relative py-12 sm:py-14 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft mesh glows */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          style={{
            background:
              'radial-gradient(800px 400px at 60% -5%, rgba(59,130,246,0.08), transparent 65%), radial-gradient(700px 400px at 20% 105%, rgba(99,102,241,0.06), transparent 70%)',
          }}
        />
        {/* Blue orbs */}
        <motion.div
          className="absolute -top-20 left-1/3 w-[20rem] h-[20rem] rounded-full blur-3xl bg-gradient-to-tr from-blue-500/12 via-indigo-500/8 to-cyan-500/10"
          animate={
            prefersReducedMotion ? {} : { y: [0, 15, 0], x: [0, 20, 0], scale: [1, 1.03, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 right-1/4 w-[18rem] h-[18rem] rounded-full blur-3xl bg-gradient-to-tl from-sky-400/10 via-blue-500/8 to-indigo-600/8"
          animate={
            prefersReducedMotion ? {} : { y: [0, -12, 0], x: [0, -15, 0], scale: [1, 1.04, 1] }
          }
          transition={prefersReducedMotion ? {} : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Floating micro-dots */}
        {bgDots.map((d, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-blue-400/40 dark:bg-sky-300/40"
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              filter: 'blur(1px)',
              opacity: d.opacity,
            }}
            initial={{ y: 0 }}
            animate={prefersReducedMotion ? {} : { y: [0, -12, 0] }}
            transition={
              prefersReducedMotion ? {} : { duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
              Featured Work
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Latest Projects
            </h2>
            
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-8 sm:mb-10 lg:mb-12">
          {featuredProjects.map((project, index) => {
            const meta = categoryMeta[project.category] || { label: project.category, Icon: Layers };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="group"
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="block rounded-3xl overflow-hidden border border-slate-300 bg-white dark:border-white/[0.08] dark:bg-slate-950/90 shadow-lg hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/50 dark:hover:border-sky-400/20 hover:-translate-y-1 min-h-[44px] focus-override"
                >
                  {/* Flex column for both mobile and desktop */}
                  <div className="relative flex flex-col h-full">
                    {/* Project image: visible on all screens */}
                    <div className="w-full aspect-[2/1] sm:aspect-[16/10] flex-shrink-0 overflow-hidden rounded-t-3xl z-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-center scale-100 transition-transform duration-700 group-hover:scale-110 rounded-t-3xl"
                        loading="lazy"
                      />
                      {/* Modern gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Category badge with icon */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 inline-flex items-center gap-1.5">
                          <meta.Icon className="w-3.5 h-3.5 opacity-80" />
                          {meta.label}
                        </span>
                      </div>
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.08] dark:ring-white/[0.08] rounded-t-3xl" />
                    </div>
                    {/* Content section */}
                    <div className="relative z-10 flex-1 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                          <h3 className="text-sm sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 sm:mb-4 min-h-[40px]">
                          {truncateDescription(project.description, 110)}
                        </p>
                      </div>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag.name}
                            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-xl border border-slate-200/70 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            <span className="text-slate-500 dark:text-slate-400">{tag.icon}</span>
                            {tag.name}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-xl border border-blue-200/70 dark:border-sky-400/20 text-blue-700 dark:text-sky-200 bg-blue-50/80 dark:bg-sky-900/20 backdrop-blur-sm">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl border border-blue-200/80 dark:border-white/[0.08] bg-blue-50/60 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-all duration-500 hover:border-blue-300/70 dark:hover:border-sky-400/20 hover:-translate-y-1 group min-h-[48px] sm:min-h-[56px] focus-override"
            >
              <span>View All Projects</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="group-hover:translate-x-2"
              >
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
