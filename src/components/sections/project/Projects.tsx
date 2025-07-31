import type { Project } from '../../../types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Sparkles, 
  ArrowRight, 
  Filter, 
  Star,
  Calendar,
  ExternalLink,
  Github,
  Eye
} from 'lucide-react';

const projects: Project[] = [
  {
    id: 'kfc-clone',
    title: 'KFC-CLONE',
    description: "Modern, responsive web app replicating KFC's online ordering experience.",
    longDescription: "Seamless UI, dynamic menu, multi-language, and e-commerce features.",
    image: '/public/images/kfc-clone.png',
    tags: ['Vue.js', 'Tailwind', 'Vite', 'E-commerce'],
    link: 'https://kfc-bd.netlify.app/',
    github: 'https://github.com/dhruba-datta/kfc-clone',
    featured: true,
    category: 'development',
  },
  {
    id: 'myportfolio',
    title: 'MyPortfolio',
    description: 'Professional portfolio with clean sections and Google search visibility.',
    longDescription: 'SEO indexed personal portfolio with about, skills, resume, projects, and contact sections.',
    image: '/public/images/portfolio.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://dhruba-datta.netlify.app/',
    github: 'https://github.com/dhruba-datta/MyPortfolio',
    featured: true,
    category: 'development',
  },
  {
    id: 'ab-pharmacy-expo',
    title: 'AB-Pharmacy-Expo',
    description: 'Android app for medical store with direct ordering and business features.',
    longDescription: 'Sort by categories, search/filter products, add to cart, WhatsApp integration, and more.',
    image: '/public/images/pharmacy.png',
    tags: ['React Native', 'Expo', 'TypeScript'],
    link: 'http://surl.li/lkiufr',
    github: 'https://github.com/dhruba-datta/AB-Pharmacy-Expo',
    featured: true,
    category: 'app',
  },
  {
    id: 'photoBooth',
    title: 'photoBooth',
    description: 'Social photo sharing app with advanced features and modern UI.',
    longDescription: 'Fullscreen mode, Google authentication, create/edit/delete posts, like/comment, search/filter images.',
    image: '/public/images/photoBooth.png',
    tags: ['React', 'Sanity', 'Tailwind', 'Google API'],
    link: 'https://phootobooth.netlify.app/',
    github: 'https://github.com/dhruba-datta/photoBooth',
    featured: true,
    category: 'development',
  },
  {
    id: 'cryptoverse',
    title: 'CryptoVerse',
    description: 'Real-time crypto dashboard with news and market data.',
    longDescription: 'Search/filter cryptocurrencies, latest news, detailed info, cross-platform.',
    image: '/public/images/cryptoverse.png',
    tags: ['React', 'Redux Toolkit', 'Ant Design', 'Rapid API'],
    link: 'https://cryptoverse20.netlify.app/',
    github: 'https://github.com/dhruba-datta/CryptoVerse',
    featured: true,
    category: 'development',
  },
];

const categories = [
  { key: 'development', label: 'Web Development', icon: Code2, color: 'blue' },
  { key: 'automation', label: 'AI & Automation', icon: Sparkles, color: 'purple' },
  { key: 'app', label: 'App Development', icon: Eye, color: 'green' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const filterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, delay: 0.3 }
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 min-h-screen transition-all duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:50px_50px] opacity-20" />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 dark:from-purple-400/5 dark:to-pink-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 dark:from-cyan-400/5 dark:to-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-2 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Title with Gradient */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400">
            My Projects
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my latest work showcasing modern web development, 
            <br className="hidden md:block" />
            mobile applications, and innovative solutions.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-32" />
            <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1 max-w-32" />
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex flex-wrap gap-2 p-2 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <motion.button
              className={`group px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/20 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80'
              }`}
              onClick={() => setActiveCategory('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  activeCategory === 'all' ? 'bg-white' : 'bg-blue-400 dark:bg-blue-300'
                }`} />
                All Projects
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === 'all' 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {projects.length}
                </span>
              </div>
            </motion.button>

            {categories.map(cat => {
              const Icon = cat.icon;
              const count = projects.filter(p => p.category === cat.key).length;
              const isActive = activeCategory === cat.key;
              
              return count > 0 ? (
                <motion.button
                  key={cat.key}
                  className={`group px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/20 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80'
                  }`}
                  onClick={() => setActiveCategory(cat.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {cat.label}
                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {count}
                    </span>
                  </div>
                </motion.button>
              ) : null;
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Filter className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    No Projects Found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    No projects match the selected category. Try selecting a different filter.
                  </p>
                </div>
              </motion.div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group relative"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 animate-pulse">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  )}

                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/95 dark:hover:bg-gray-900/95 focus-within:ring-2 focus-within:ring-blue-400/30">
                    {/* Top Tag (Category Label) */}
                    <div className="absolute left-6 top-6 z-10">
                      {(() => {
                        const cat = categories.find(c => c.key === project.category);
                        if (!cat) return null;
                        const Icon = cat.icon;
                        // Color pattern for tag
                        let gradient = '';
                        if (cat.key === 'development') gradient = 'bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white';
                        else if (cat.key === 'automation') gradient = 'bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white';
                        else if (cat.key === 'app') gradient = 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white';
                        return (
                          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold shadow-lg border-0 ${gradient}`}>
                            <Icon className="w-3 h-3" />
                            {cat.label}
                          </span>
                        );
                      })()}
                    </div>
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener"
                            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener"
                            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                          </motion.a>
                        )}
                      </div>
                      {/* Project Index */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                          #{String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title & Date */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 ml-3 bg-gray-100/80 dark:bg-gray-800/80 px-2 py-1 rounded-lg">
                          <Calendar className="w-3 h-3" />
                          2024
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-200/50 dark:border-gray-600/50 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-blue-200/50 dark:border-blue-600/50">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <Link
                        to={`/projects/${project.id}`}
                        className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
