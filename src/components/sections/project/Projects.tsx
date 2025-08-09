import type { Project } from '../../../types';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code2,
  ExternalLink,
  Github,
  Smartphone,
  Layers,
} from 'lucide-react';
import { SiN8N } from 'react-icons/si';
// ...existing code...

const projects: Project[] = [
  {
    id: 'kfc-clone',
    title: 'KFC Clone',
    description:
      "Modern, responsive web app replicating KFC's online ordering experience with seamless UI and dynamic features.",
    longDescription: 'Seamless UI, dynamic menu, multi-language, and e-commerce features.',
    image: '/images/kfc-clone.png',
    tags: ['Vue.js', 'Tailwind', 'Vite'],
    link: 'https://kfc-bd.netlify.app/',
    github: 'https://github.com/dhruba-datta/kfc-clone',
    featured: true,
    category: 'development',
  },
  {
    id: 'ab-pharmacy-expo',
    title: 'AB Pharmacy Expo',
    description:
      'Android app for medical store with direct ordering and comprehensive business management features.',
    longDescription:
      'Sort by categories, search/filter products, add to cart, WhatsApp integration, and more.',
    image: '/images/pharmacy.png',
    tags: ['React Native', 'Expo', 'TypeScript'],
    link: 'http://surl.li/lkiufr',
    github: 'https://github.com/dhruba-datta/AB-Pharmacy-Expo',
    featured: true,
    category: 'app',
  },
  {
    id: 'photoBooth',
    title: 'PhotoBooth',
    description:
      'Social photo sharing app with advanced features, modern UI and comprehensive user engagement tools.',
    longDescription:
      'Fullscreen mode, Google authentication, create/edit/delete posts, like/comment, search/filter images.',
    image: '/images/photoBooth.png',
    tags: ['React', 'Sanity', 'Tailwind'],
    link: 'https://phootobooth.netlify.app/',
    github: 'https://github.com/dhruba-datta/photoBooth',
    featured: true,
    category: 'development',
  },
  {
    id: 'cryptoverse',
    title: 'CryptoVerse',
    description:
      'Real-time crypto dashboard with latest news, market data and comprehensive cryptocurrency insights.',
    longDescription: 'Search/filter cryptocurrencies, latest news, detailed info, cross-platform.',
    image: '/images/cryptoverse.png',
    tags: ['React', 'Redux Toolkit', 'Ant Design'],
    link: 'https://cryptoverse20.netlify.app/',
    github: 'https://github.com/dhruba-datta/CryptoVerse',
    featured: true,
    category: 'development',
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio v1',
    description:
      'Professional portfolio with clean sections and Google search visibility for enhanced online presence.',
    longDescription:
      'SEO indexed personal portfolio with about, skills, resume, projects, and contact sections.',
    image: '/images/portfolio.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://dhruba-datta.netlify.app/',
    github: 'https://github.com/dhruba-datta/Portfolio-v1',
    featured: true,
    category: 'development',
  },
  {
    id: 'content-automation',
    title: 'Content Automation',
    description:
      'AI-powered n8n workflow that automates social media content generation using OpenAI and integrates with Google Sheets and Trello.',
    longDescription:
      'Automated content creation workflow with Google Sheets integration, AI content generation, and Trello management.',
    image: '/images/n8n-automation.png',
    tags: ['n8n', 'OpenAI', 'Google Sheets', 'Trello'],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation',
    featured: true,
    category: 'automation',
  },
  {
    id: 'linkedin-job-search',
    title: 'LinkedIn Job Search',
    description:
      'Automated LinkedIn job search workflow that scrapes job postings based on criteria and saves results to Google Sheets for tracking.',
    longDescription:
      'Web form-driven job search automation with dynamic URL building, data extraction, and Google Sheets integration.',
    image: '/images/linkedin-automation.png',
    tags: ['n8n', 'LinkedIn', 'Web Scraping', 'Google Sheets'],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Linkedin%20Job%20Search',
    featured: true,
    category: 'automation',
  },
];

const categories = [
  { key: 'development', label: 'Web', icon: Code2 },
  { key: 'app', label: 'App', icon: Smartphone },
  { key: 'automation', label: 'Automation', icon: SiN8N },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | string>('all');
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 text-center max-w-xl">
            A selection of recent projects across web, app, and automation.
          </p>
        </div>

        {/* Filters: blue-accented pills */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex items-center gap-1 rounded-full p-1 border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
            {(['all', ...categories.map((c) => c.key)] as const).map((key) => {
              const isActive = activeCategory === key;
              const label = key === 'all' ? 'All' : categories.find((c) => c.key === key)?.label;
              const Icon = key === 'all' ? Layers : categories.find((c) => c.key === key)?.icon || Code2;

              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`relative z-10 px-3.5 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1.5 transition-colors
                    ${isActive ? 'text-white' : 'text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300'}`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 -z-10 rounded-full ring-1 ring-inset ring-blue-300/40 dark:ring-sky-400/20"
                      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(37,99,235,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' }}
              className="group"
            >
              <Link
                to={`/projects/${project.id}`}
                className="block rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-slate-950/80 backdrop-blur-sm hover:shadow-md transition-all
                           hover:border-blue-400/40 dark:hover:border-sky-400/30"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Blue hover tint */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-blue-500 dark:bg-sky-500" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] rounded-full border border-slate-200/70 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-[11px] rounded-full border border-blue-200/70 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 bg-blue-50/80 dark:bg-sky-900/20">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-slate-200/70 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-sky-300 hover:border-blue-300/60 dark:hover:border-sky-400/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-blue-500/40 text-blue-700 dark:text-sky-300 bg-blue-50/60 dark:bg-sky-900/20 hover:bg-blue-100/70 dark:hover:bg-sky-900/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

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
