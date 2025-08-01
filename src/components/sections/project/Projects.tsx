import type { Project } from '../../../types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
Code2, 
Sparkles, 
ExternalLink,
Github,
Eye,
Smartphone
} from 'lucide-react';
import React from 'react';

const projects: Project[] = [
  {
    id: 'kfc-clone',
    title: 'KFC Clone',
    description: "Modern, responsive web app replicating KFC's online ordering experience with seamless UI and dynamic features.",
    longDescription: "Seamless UI, dynamic menu, multi-language, and e-commerce features.",
    image: '/public/images/kfc-clone.png',
    tags: ['Vue.js', 'Tailwind', 'Vite'],
    link: 'https://kfc-bd.netlify.app/',
    github: 'https://github.com/dhruba-datta/kfc-clone',
    featured: true,
    category: 'development',
  },
  
  {
    id: 'ab-pharmacy-expo',
    title: 'AB Pharmacy',
    description: 'Android app for medical store with direct ordering and comprehensive business management features.',
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
    description: 'Social photo sharing app with advanced features, modern UI and comprehensive user engagement tools.',
    longDescription: 'Fullscreen mode, Google authentication, create/edit/delete posts, like/comment, search/filter images.',
    image: '/public/images/photoBooth.png',
    tags: ['React', 'Sanity', 'Tailwind'],
    link: 'https://phootobooth.netlify.app/',
    github: 'https://github.com/dhruba-datta/photoBooth',
    featured: true,
    category: 'development',
  },
  {
    id: 'cryptoverse',
    title: 'CryptoVerse',
    description: 'Real-time crypto dashboard with latest news, market data and comprehensive cryptocurrency insights.',
    longDescription: 'Search/filter cryptocurrencies, latest news, detailed info, cross-platform.',
    image: '/public/images/cryptoverse.png',
    tags: ['React', 'Redux Toolkit', 'Ant Design'],
    link: 'https://cryptoverse20.netlify.app/',
    github: 'https://github.com/dhruba-datta/CryptoVerse',
    featured: true,
    category: 'development',
  },
  {
    id: 'myportfolio',
    title: 'MyPortfolio',
    description: 'Professional portfolio with clean sections and Google search visibility for enhanced online presence.',
    longDescription: 'SEO indexed personal portfolio with about, skills, resume, projects, and contact sections.',
    image: '/public/images/portfolio.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://dhruba-datta.netlify.app/',
    github: 'https://github.com/dhruba-datta/MyPortfolio',
    featured: true,
    category: 'development',
  },
];

const categories = [
  { key: 'development', label: 'Web', icon: Code2 },
  { key: 'automation', label: 'AI', icon: Sparkles },
  { key: 'app', label: 'App', icon: Smartphone },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header - Consistent with other sections */}
        <div className="flex flex-col items-center mb-14">
          <span className="uppercase tracking-widest text-xs text-blue-500 font-semibold mb-2">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 text-center">Featured Work</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 text-center max-w-xl">A selection of recent projects demonstrating my multidisciplinary skills and impact.</p>
        </div>

        {/* Filters - Consistent button style */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === 'all'
                ? 'bg-blue-500 text-white shadow-lg border-blue-500'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </button>
          {categories.map(cat => {
            const count = projects.filter(p => p.category === cat.key).length;
            return count > 0 ? (
              <button
                key={cat.key}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                  activeCategory === cat.key
                    ? 'bg-blue-500 text-white shadow-lg border-blue-500'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ) : null;
          })}
        </div>

        {/* Projects Grid - Consistent card style */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px] border border-gray-100 dark:border-gray-800">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  {/* Overlay - stronger on hover */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    hoveredCard === project.id
                      ? 'bg-black/60'
                      : 'bg-black/20'
                  }`} />
                  {/* Content Area - Always visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      {/* Action Buttons - Always visible */}
                      <div className="flex gap-2 mb-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener"
                            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium transition-colors border border-gray-200 dark:border-gray-700"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener"
                            className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors border border-blue-500"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live
                          </a>
                        )}
                      </div>
                      {/* Hover Content - Description and Tags */}
                      <div className={`transition-all duration-300 overflow-hidden ${
                        hoveredCard === project.id
                          ? 'max-h-32 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-2">
                          <span className="line-clamp-2 block">{project.description}</span>
                        </p>
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 2).map((tag) => {
                            // Icon mapping for tags (should match details page usage)
                            const tagIcons: Record<string, JSX.Element> = {
                              'Vue.js': <Code2 className="w-3 h-3 text-green-400" />,
                              'Tailwind': <Sparkles className="w-3 h-3 text-cyan-400" />,
                              'Vite': <ExternalLink className="w-3 h-3 text-purple-400" />,
                              'React Native': <Eye className="w-3 h-3 text-blue-400" />,
                              'Expo': <Sparkles className="w-3 h-3 text-yellow-400" />,
                              'TypeScript': <Code2 className="w-3 h-3 text-blue-500" />,
                              'React': <Code2 className="w-3 h-3 text-cyan-400" />,
                              'Sanity': <Sparkles className="w-3 h-3 text-red-400" />,
                              'Redux Toolkit': <Code2 className="w-3 h-3 text-purple-400" />,
                              'Ant Design': <Sparkles className="w-3 h-3 text-blue-400" />,
                              'HTML': <Code2 className="w-3 h-3 text-orange-400" />,
                              'CSS': <Sparkles className="w-3 h-3 text-blue-300" />,
                              'JavaScript': <Code2 className="w-3 h-3 text-yellow-400" />,
                            };
                            return (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900/80 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 text-gray-100 dark:text-gray-200 rounded-full text-xs font-semibold shadow-sm transition-colors"
                              >
                                {tagIcons[tag] || <Code2 className="w-3 h-3 text-blue-400" />}
                                {tag}
                              </span>
                            );
                          })}
                          {project.tags.length > 2 && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200 shadow-sm">
                              +{project.tags.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
