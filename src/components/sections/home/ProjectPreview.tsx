import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../../data/projects';
import ProjectCard from '../../ui/ProjectCard';

const ProjectPreview = () => {
  const prefersReducedMotion = useReducedMotion();

  // Get first 6 featured projects for homepage preview
  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured).slice(0, 6),
    []
  );

  // Decorative dots for the minimal background (stable across renders)
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

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12 text-center sm:text-left"
        >
          <div>
            <h3 className="text-slate-500 dark:text-slate-400">
              Featured Works
            </h3>
            <h2 className="mt-2 sm:mt-3 text-slate-900 dark:text-white">
              Latest Projects
            </h2>

          </div>
          {/* Desktop View More Button */}
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-2 self-end px-5 py-2.5 text-sm sm:text-base font-outfit font-semibold rounded-xl border border-blue-200/80 dark:border-white/[0.08] bg-blue-50/60 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-colors duration-500 hover:border-blue-300/70 dark:hover:border-sky-400/20 group focus-override whitespace-nowrap"
          >
            <span>Browse all projects</span>
            <motion.span
              animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
              transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-4 sm:gap-5 lg:gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile View More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center sm:hidden"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-outfit font-semibold rounded-xl border border-blue-200/80 dark:border-white/[0.08] bg-blue-50/60 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-sky-500/[0.05] transition-colors duration-500 hover:border-blue-300/70 dark:hover:border-sky-400/20 group focus-override whitespace-nowrap"
          >
            <span>Browse all projects</span>
            <motion.span
              animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
              transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPreview;
