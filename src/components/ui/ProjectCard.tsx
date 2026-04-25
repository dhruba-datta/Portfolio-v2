import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import type { Project } from '../../types';
import { categoryMeta } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const meta = categoryMeta[project.category] ?? { label: project.category, Icon: Layers };

  // Resolve which tags to show on the card. cardTags overrides; falls back to first 2.
  const visibleTags = project.cardTags
    ? project.cardTags
        .map((name) => project.tags.find((t) => t.name === name))
        .filter((t): t is NonNullable<typeof t> => Boolean(t))
    : project.tags.slice(0, 2);

  const extraCount = project.tags.length - visibleTags.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -50px 0px' }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.5, ease: 'easeOut' }}
      className="group transform-gpu max-w-[94%] mx-auto sm:max-w-none"
    >
      <Link
        to={`/projects/${project.id}`}
        aria-label={`View details for ${project.title}`}
        className="block rounded-3xl overflow-hidden border border-slate-300 bg-white dark:border-white/[0.08] dark:bg-slate-950/90 shadow-lg sm:hover:shadow-xl sm:hover:shadow-blue-500/[0.08] dark:sm:hover:shadow-sky-500/[0.05] transition-colors duration-500 sm:hover:border-blue-300/50 dark:sm:hover:border-sky-400/20 min-h-[44px] focus-override"
      >
        {/* Image Area */}
        <div
          className="relative w-full aspect-[2/1] sm:aspect-[1.82/1] overflow-hidden isolate transform-gpu"
          style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-[50%_60%] transition-transform duration-700 sm:group-hover:scale-110 will-change-transform transform-gpu"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            loading="lazy"
            decoding="async"
          />

          {/* Bottom blend gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 via-black/10 to-transparent dark:from-slate-950 dark:via-slate-950/50 dark:to-transparent z-10 pointer-events-none" />

          {/* Category badge */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
            <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-outfit font-medium rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 inline-flex items-center gap-1.5 shadow-sm">
              <meta.Icon className="w-3.5 h-3.5 opacity-80" />
              {meta.label}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex-1 bg-white dark:bg-slate-950 p-4 sm:p-5 lg:p-6 flex flex-col justify-between -mt-[1px]">
          <div>
            <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
              <h6 className="text-slate-900 dark:text-white sm:group-hover:text-blue-600 dark:sm:group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                {project.title}
              </h6>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 sm:mb-4 min-h-[32px] sm:min-h-[40px] line-clamp-2">
              {project.tagline}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
            {visibleTags.map((tag) => (
              <span
                key={tag.name}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-outfit font-medium rounded-xl border border-slate-200/70 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="text-slate-500 dark:text-slate-400">{tag.icon}</span>
                {tag.name}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-outfit font-medium rounded-xl border border-blue-200/70 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 bg-blue-50/80 dark:bg-sky-900/20 backdrop-blur-sm">
                +{extraCount}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
