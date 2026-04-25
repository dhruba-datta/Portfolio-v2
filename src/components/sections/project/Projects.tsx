import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Code2 } from 'lucide-react';
import { projects, categories } from '../../../data/projects';
import ProjectCard from '../../ui/ProjectCard';

const VALID_CATEGORIES = ['all', 'development', 'app', 'automation'] as const;

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mounted, setMounted] = useState(false);

  // URL is the source of truth for the active category
  const tabParam = searchParams.get('tab');
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
    setSearchParams(next, { replace: true });
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const visibleProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative pt-4 pb-6 sm:pt-12 sm:pb-8 lg:pt-12 lg:pb-8 overflow-hidden bg-white dark:bg-gray-900">
      {/* Simplified background - no grid pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none dark:block hidden">
        {/* Soft gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.08), transparent 50%), radial-gradient(circle at 70% 80%, rgba(99,102,241,0.06), transparent 50%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 lg:mb-10">
          <h3 className="text-slate-500 dark:text-slate-400">
            Projects
          </h3>
          <h2 className="mt-2 sm:mt-3 text-slate-900 dark:text-white text-center">
            Featured Works
          </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-6 sm:mb-7 lg:mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative inline-flex items-center gap-0.5 sm:gap-1 rounded-full p-0.5 sm:p-1 border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md"
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
        <div className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {/* Empty state */}
        {visibleProjects.length === 0 && (
          <div className="mt-8 sm:mt-9 lg:mt-10 text-center text-slate-600 dark:text-slate-400 text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
