import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Layers, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, categories } from '../../../data/projects';
import ProjectCard from '../../ui/ProjectCard';

const VALID_CATEGORIES = ['all', 'development', 'app', 'automation'] as const;
const PAGE_SIZE = 9;

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  // The pre-rendered HTML has no query string, so the first client render must
  // show "All"; the ?tab= value is applied right after hydration, before paint.
  const [hydrated, setHydrated] = useState(false);
  useLayoutEffect(() => setHydrated(true), []);

  // URL is the source of truth for the active category
  const tabParam = hydrated ? searchParams.get('tab') : null;
  const activeCategory: 'all' | string = (
    tabParam && (VALID_CATEGORIES as readonly string[]).includes(tabParam) ? tabParam : 'all'
  );

  const setActiveCategory = (key: string) => {
    const next = new URLSearchParams(searchParams);
    if (key === 'all') {
      next.delete('tab');
    } else {
      next.set('tab', key);
    }
    next.delete('page'); // each tab starts on page 1
    setSearchParams(next, { replace: true });
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // projects.ts is ordered newest → oldest, so pages run from latest to oldest work
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const pageParam = hydrated ? Number(searchParams.get('page')) : 1;
  const currentPage = Number.isInteger(pageParam) && pageParam >= 1 ? Math.min(pageParam, totalPages) : 1;
  const visibleProjects = filteredProjects.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const gridTopRef = useRef<HTMLDivElement>(null);
  const goToPage = (page: number) => {
    const next = new URLSearchParams(searchParams);
    if (page <= 1) next.delete('page');
    else next.set('page', String(page));
    setSearchParams(next, { replace: true });
    const top = gridTopRef.current;
    if (top) {
      window.scrollTo({
        top: top.getBoundingClientRect().top + window.scrollY - 120,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

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
    <section
      id="projects"
      className="relative py-12 sm:py-14 lg:py-16 overflow-hidden"
    >
      {/* Background — matches home-page section style */}
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
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 lg:mb-10">
          <p className="eyebrow text-slate-500 dark:text-slate-400">
            Projects
          </p>
          <h1 className="mt-2 sm:mt-3 text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            Featured Works
          </h1>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-6 sm:mb-7 lg:mb-8">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative inline-flex items-center gap-0.5 sm:gap-1 rounded-full p-0.5 sm:p-1 border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-sm"
          >
            {(['all', ...categories.map((c) => c.key)] as const).map((key) => {
              const isActive = activeCategory === key;
              const label = key === 'all' ? 'All' : categories.find((c) => c.key === key)?.label;
              const Icon = key === 'all' ? Layers : categories.find((c) => c.key === key)?.icon || Code2;

              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`relative z-10 px-3 sm:px-3.5 py-1.5 sm:py-1.5 rounded-full text-sm sm:text-sm font-outfit font-medium inline-flex items-center gap-1.5 sm:gap-1.5 transition-all focus-override
                    ${isActive ? 'text-white' : 'text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300'}`}
                >
                  {isActive ? (
                    mounted ? (
                      <>
                        <motion.span
                          layoutId="activePillBg"
                          className="absolute inset-0 -z-10 rounded-full ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/25"
                          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                          style={{
                            background: 'linear-gradient(90deg, rgba(37,99,235,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                          }}
                        />
                        <motion.span
                          layoutId="activePillGlow"
                          className="absolute -inset-[2px] -z-20 rounded-full blur-md"
                          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                          style={{
                            background: 'radial-gradient(70% 120% at 50% 50%, rgba(59,130,246,0.35), rgba(99,102,241,0.22) 60%, transparent 80%)',
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <span
                          className="absolute inset-0 -z-10 rounded-full ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/25"
                          style={{
                            background: 'linear-gradient(90deg, rgba(37,99,235,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                          }}
                        />
                        <span
                          className="absolute -inset-[2px] -z-20 rounded-full blur-md"
                          style={{
                            background: 'radial-gradient(70% 120% at 50% 50%, rgba(59,130,246,0.35), rgba(99,102,241,0.22) 60%, transparent 80%)',
                          }}
                        />
                      </>
                    )
                  ) : null}

                  <motion.span
                    initial={false}
                    animate={{ scale: isActive ? 1 : 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="inline-flex items-center gap-1.5 sm:gap-1.5"
                  >
                    <Icon className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
                    {label}
                  </motion.span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Grid */}
        <div ref={gridTopRef} className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} priority={index < 3} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Projects pagination"
            className="mt-8 sm:mt-10 lg:mt-12 flex items-center justify-center gap-1.5 sm:gap-2 font-outfit"
          >
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300 disabled:opacity-40 disabled:pointer-events-none transition-colors focus-override"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isCurrent = page === currentPage;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-label={`Page ${page}`}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full text-sm font-medium transition-all focus-override ${
                    isCurrent
                      ? 'text-white shadow-sm ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/25 bg-gradient-to-r from-blue-600 to-indigo-600'
                      : 'border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300 disabled:opacity-40 disabled:pointer-events-none transition-colors focus-override"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}

        {/* Empty state */}
        {visibleProjects.length === 0 && (
          <div className="mt-8 sm:mt-10 mx-auto max-w-md rounded-2xl border border-slate-200/70 dark:border-white/[0.08] bg-white/70 dark:bg-slate-950/70 backdrop-blur-md p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-sky-500/10 ring-1 ring-blue-200/70 dark:ring-sky-400/20">
              <Layers className="h-5 w-5 text-blue-600 dark:text-sky-400" />
            </div>
            <h6 className="text-slate-900 dark:text-white">
              No projects yet
            </h6>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              This category is empty. Try switching to another tab.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
