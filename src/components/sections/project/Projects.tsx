import type { Project } from '../../../types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ...existing code...
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
    category: 'automation',
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

  const featuredCount = projects.filter(p => p.featured).length;

  return (
    <section id="projects" className="relative py-16 min-h-screen bg-white dark:bg-gray-950 transition-all duration-500">

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-2 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
         

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A curated collection of my latest work showcasing modern web development, mobile applications, and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          

          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button
              className={`group px-5 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 ${
                activeCategory === 'all'
                  ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 shadow'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
              }`}
              onClick={() => setActiveCategory('all')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  activeCategory === 'all' ? 'bg-blue-700 dark:bg-blue-300' : 'bg-blue-200 dark:bg-blue-700'
                }`}></div>
                All Projects
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === 'all' 
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  {projects.length}
                </span>
              </div>
            </motion.button>

            {categories.map(cat => {
              const Icon = cat.icon;
              const count = projects.filter(p => p.category === cat.key).length;
              return (
                <motion.button
                  key={cat.key}
                  className={`group px-5 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20 ${
                    activeCategory === cat.key
                      ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 shadow'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                  onClick={() => setActiveCategory(cat.key)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {cat.label}
                    {count > 0 && (
                      <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                        activeCategory === cat.key 
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {count}
                      </span>
                    )}
                  </div>
                </motion.button>
              );
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
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-12 border border-gray-200 dark:border-gray-700">
                  <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Filter className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
                    <div className="absolute -top-2 -right-2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  )}

                  <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-400/20">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-52 bg-gray-100 dark:bg-gray-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Minimal Quick Actions */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener"
                            className="p-2 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.95 }}
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
                            className="p-2 bg-white dark:bg-gray-900 rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                          </motion.a>
                        )}
                      </div>
                      {/* Project Index */}
                      <div className="absolute bottom-3 left-3">
                        <div className="bg-white dark:bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          #{String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Title & Date */}
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 ml-2">
                          <Calendar className="w-3 h-3" />
                          2024
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-semibold">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link
                          to={`/projects/${project.id}`}
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
