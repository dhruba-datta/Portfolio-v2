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
  Languages,
  Calendar,
  Bell,
  Code,
  Database,
  Package,
  Store,
  Search,
  Heart,
  User,
  Palette,
  Zap,
  Upload,
  Eye,
  TrendingUp,
  BarChart3,
  Newspaper,
  LineChart,
  Globe2,
  Webhook,
  Clock,
  FileJson,
  Send,
} from 'lucide-react';
import { 
  SiN8N, 
  SiReact, 
  SiExpo, 
  SiJavascript, 
  SiGooglesheets,
  SiOpenai,
  SiTrello,
  SiLinkedin,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiGithub
} from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoNetlify, BiLogoTypescript } from 'react-icons/bi';
import { GrStorage } from 'react-icons/gr';
// ...existing code...

const projects: Project[] = [
  {
    id: 'kfc-clone',
    title: 'KFC Clone',
    description:
      'A sleek, single-page food ordering app inspired by KFC Bangladesh. Built with Vue 3 and Tailwind, focused on performance, multilingual UX, and a clean component architecture.',
    longDescription: 'Seamless UI, dynamic menu, multi-language, and e-commerce features.',
    image: '/images/kfc-clone.png',
    tags: [
      { name: "Vue 3", icon: <FaVuejs className="w-3.5 h-3.5" /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill className="w-3.5 h-3.5" /> },
      { name: "TypeScript/ES6+", icon: <BiLogoTypescript className="w-3.5 h-3.5" /> },
      { name: "Vue I18n", icon: <Languages className="w-3.5 h-3.5" /> },
      { name: "localStorage", icon: <GrStorage className="w-3.5 h-3.5" /> },
      { name: "Netlify", icon: <BiLogoNetlify className="w-3.5 h-3.5" /> },
      { name: "GitHub", icon: <Github className="w-3.5 h-3.5" /> },
    ],
    link: 'https://kfc-bd.netlify.app/',
    github: 'https://github.com/dhruba-datta/kfc-clone',
    featured: true,
    category: 'development',
  },
  {
    id: 'ab-pharmacy-expo',
    title: 'AB Pharmacy Expo',
    description:
      'A production-ready React Native/Expo app for pharmacy trade shows: live schedules, exhibitor directory, product catalogs, and instant search—built with modular components and offline-first UX.',
    longDescription:
      'Sort by categories, search/filter products, add to cart, WhatsApp integration, and more.',
    image: '/images/pharmacy.png',
    tags: [
      { name: "React Native", icon: <SiReact className="w-3.5 h-3.5" /> },
      { name: "Expo", icon: <SiExpo className="w-3.5 h-3.5" /> },
      { name: "JavaScript ES6+", icon: <SiJavascript className="w-3.5 h-3.5" /> },
      { name: "React Navigation", icon: <Code className="w-3.5 h-3.5" /> },
      { name: "AsyncStorage", icon: <GrStorage className="w-3.5 h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
    ],
    link: 'http://surl.li/lkiufr',
    github: 'https://github.com/dhruba-datta/AB-Pharmacy-Expo',
    featured: true,
    category: 'app',
  },
  {
    id: 'photoBooth',
    title: 'PhotoBooth',
    description:
      'A Pinterest-inspired social photo sharing app with modern UI. Features include Google OAuth, real-time uploads, social engagement (likes/comments), advanced search/filtering, and responsive design for seamless cross-platform experience.',
    longDescription:
      'Fullscreen mode, Google authentication, create/edit/delete posts, like/comment, search/filter images.',
    image: '/images/photoBooth.png',
    tags: [
      { name: "React", icon: <SiReact className="w-3.5 h-3.5" /> },
      { name: "Sanity CMS", icon: <Database className="w-3.5 h-3.5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5" /> },
      { name: "Google OAuth", icon: <User className="w-3.5 h-3.5" /> },
      { name: "JavaScript ES6+", icon: <SiJavascript className="w-3.5 h-3.5" /> },
      { name: "Responsive Design", icon: <Smartphone className="w-3.5 h-3.5" /> },
    ],
    link: 'https://phootobooth.netlify.app/',
    github: 'https://github.com/dhruba-datta/photoBooth',
    featured: true,
    category: 'development',
  },
  {
    id: 'cryptoverse',
    title: 'CryptoVerse',
    description:
      'A comprehensive cryptocurrency dashboard offering real-time market data, detailed analytics, trending news, and interactive charts. Features responsive design, advanced search/filtering, and seamless API integrations for up-to-date crypto insights.',
    longDescription: 'Search/filter cryptocurrencies, latest news, detailed info, cross-platform.',
    image: '/images/cryptoverse.png',
    tags: [
      { name: "React", icon: <SiReact className="w-3.5 h-3.5" /> },
      { name: "Redux Toolkit", icon: <Database className="w-3.5 h-3.5" /> },
      { name: "Ant Design", icon: <Palette className="w-3.5 h-3.5" /> },
      { name: "Chart.js", icon: <LineChart className="w-3.5 h-3.5" /> },
      { name: "API Integration", icon: <Globe2 className="w-3.5 h-3.5" /> },
      { name: "Responsive Design", icon: <Smartphone className="w-3.5 h-3.5" /> },
    ],
    link: 'https://cryptoverse20.netlify.app/',
    github: 'https://github.com/dhruba-datta/CryptoVerse',
    featured: true,
    category: 'development',
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio v1',
    description:
      'A minimalist, SEO-optimized personal portfolio featuring essential sections (about, skills, projects, contact), clean responsive design, and Google search visibility. Built with vanilla HTML/CSS/JavaScript for optimal performance and accessibility.',
    longDescription:
      'SEO indexed personal portfolio with about, skills, resume, projects, and contact sections.',
    image: '/images/portfolio.png',
    tags: [
      { name: "HTML5", icon: <Code className="w-3.5 h-3.5" /> },
      { name: "CSS3", icon: <Palette className="w-3.5 h-3.5" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-3.5 h-3.5" /> },
      { name: "SEO Optimized", icon: <Search className="w-3.5 h-3.5" /> },
      { name: "Responsive Design", icon: <Smartphone className="w-3.5 h-3.5" /> },
      { name: "Netlify", icon: <BiLogoNetlify className="w-3.5 h-3.5" /> },
    ],
    link: 'https://dhruba-datta.netlify.app/',
    github: 'https://github.com/dhruba-datta/Portfolio-v1',
    featured: true,
    category: 'development',
  },
  {
    id: 'content-automation',
    title: 'Content Automation (n8n)',
    description:
      'A collection of n8n workflows to automate your content lifecycle—from ingestion and enrichment to scheduling and multi-channel publishing. Import ready-made JSONs, add credentials, and ship.',
    longDescription:
      'Automated content creation workflow with Google Sheets integration, AI content generation, and Trello management.',
    image: '/images/n8n-automation.png',
    tags: [
      { name: "n8n", icon: <SiN8N className="w-3.5 h-3.5" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-3.5 h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
      { name: "Trello", icon: <SiTrello className="w-3.5 h-3.5" /> },
      { name: "Webhook", icon: <Webhook className="w-3.5 h-3.5" /> },
      { name: "Workflow JSON", icon: <FileJson className="w-3.5 h-3.5" /> },
    ],
    link: '',
    github: 'https://github.com/dhruba-datta/n8n/tree/main/Content%20Automation',
    featured: true,
    category: 'automation',
  },
  {
    id: 'linkedin-job-search',
    title: 'LinkedIn Job Search (n8n)',
    description:
      'A set of n8n workflows to automate your LinkedIn-style job discovery and notifications. Search by keywords & location, filter results, store them in Sheets, and get instant alerts—on a schedule or on demand.',
    longDescription:
      'Web form-driven job search automation with dynamic URL building, data extraction, and Google Sheets integration.',
    image: '/images/linkedin-automation.png',
    tags: [
      { name: "n8n", icon: <SiN8N className="w-3.5 h-3.5" /> },
      { name: "LinkedIn", icon: <SiLinkedin className="w-3.5 h-3.5" /> },
      { name: "Web Scraping", icon: <Search className="w-3.5 h-3.5" /> },
      { name: "Google Sheets", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
      { name: "Webhook", icon: <Webhook className="w-3.5 h-3.5" /> },
      { name: "Data Extraction", icon: <SiGooglesheets className="w-3.5 h-3.5" /> },
    ],
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => {
            // Truncate description to 2 lines (approximately 100-120 characters)
            const truncateDescription = (text: string, maxLength: number = 110) => {
              if (text.length <= maxLength) return text;
              const truncated = text.slice(0, maxLength);
              const lastSpace = truncated.lastIndexOf(' ');
              return truncated.slice(0, lastSpace) + '...';
            };

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
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                        {project.category === 'development' ? 'Web' : project.category === 'app' ? 'App' : 'Automation'}
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
                    <div className="flex flex-wrap gap-2 mb-5">
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

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border border-slate-200/70 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-300/60 dark:hover:border-sky-400/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
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
                          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 dark:from-sky-500 dark:to-sky-600 text-white hover:from-blue-600 hover:to-blue-700 dark:hover:from-sky-600 dark:hover:to-sky-700 shadow-lg shadow-blue-500/25 dark:shadow-sky-500/20 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
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
