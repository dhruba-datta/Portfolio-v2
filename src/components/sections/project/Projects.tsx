
import type { Project } from '../../../types';
import { motion, easeInOut } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max-width section-padding text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-300 border border-gray-200 dark:border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Live</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener" className="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium">GitHub</a>
                  )}
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


