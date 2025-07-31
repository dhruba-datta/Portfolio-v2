import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe2, Languages, ShoppingCart, Smartphone, Code, Database, Palette, Zap, ChevronDown, Users, Layers, Settings, Shield, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/ui/Navigation';
import Footer from '../../components/ui/Footer';

interface KfcClonePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const KfcClonePage = ({ isDark, toggleTheme }: KfcClonePageProps) => {
  const navigate = useNavigate();
  
  // Fallback local theme state if props not provided
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === 'boolean' ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === 'function'
      ? toggleTheme
      : () => setLocalDark((d) => !d);

  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'multilingual',
      icon: <Languages className="w-5 h-5" />,
      title: 'Multilingual Support',
      summary: 'Real-time language switching with Vue I18n',
      details: [
        'Real-time language switching between English, Bengali, and Hindi',
        'Vue I18n integration for seamless translations',
        'Translated UI elements throughout the application',
        'localStorage persistence for language preferences'
      ]
    },
    {
      id: 'responsive',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Responsive Design',
      summary: 'Mobile-first design with Tailwind CSS',
      details: [
        'Mobile-first approach ensuring optimal mobile experience',
        'Tailwind CSS for consistent responsive layouts',
        'Optimized layouts for menu, cart, checkout, and profile pages',
        'Touch-friendly interface with responsive components'
      ]
    },
    {
      id: 'ecommerce',
      icon: <ShoppingCart className="w-5 h-5" />,
      title: 'E-commerce Workflow',
      summary: 'Complete ordering system with cart and checkout',
      details: [
        'Real-time search and filtering for product categories (Buckets, Chicken, Burgers)',
        'Dynamic product cards with detailed information',
        'Product modal with one-click "Add to Cart" functionality',
        'Shopping cart with add/remove items and live total calculations',
        'Simulated OTP signup and persistent login system',
        'Mock order history displayed in user profile',
        'Validated address form and mock payment options (Cash/Card)',
        'Order confirmation and tracking system'
      ]
    },
    {
      id: 'components',
      icon: <Layers className="w-5 h-5" />,
      title: 'Modular Components',
      summary: 'Reusable and maintainable component architecture',
      details: [
        'Responsive navbar and footer that adapt to user state',
        'Accessible language switcher for instant toggling',
        'Custom Vue toast notifications for cart, order, and error feedback',
        'Reusable modals for product details and confirmations',
        'Componentized architecture for easy maintenance'
      ]
    },
    {
      id: 'ux',
      icon: <Palette className="w-5 h-5" />,
      title: 'UX Enhancements',
      summary: 'Smooth animations and accessibility features',
      details: [
        'Vue transitions for smooth modal and route animations',
        'ARIA-compliant markup for accessibility',
        'Interactive hover, focus, and active states',
        'Intuitive user interface with clear visual feedback'
      ]
    },
    {
      id: 'optimization',
      icon: <Zap className="w-5 h-5" />,
      title: 'Front-End Optimization',
      summary: 'Performance-focused with modern best practices',
      details: [
        'Vue Router for seamless single-page navigation',
        'Vue 3 reactivity with localStorage integration',
        'Semantic HTML and meta tags for SPA SEO optimization',
        'Lazy-loaded images for improved performance',
        'Minimal dependencies for faster load times'
      ]
    },
    {
      id: 'persistence',
      icon: <Database className="w-5 h-5" />,
      title: 'Data Persistence',
      summary: 'Secure localStorage with API-ready architecture',
      details: [
        'Secure localStorage implementation for cart data',
        'User profile and session persistence',
        'Language preference storage',
        'API-ready architecture for easy backend integration'
      ]
    }
  ];

  const techStack = [
    { name: 'Vue.js 3', icon: <Code className="w-4 h-4" /> },
    { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> },
    { name: 'JavaScript ES6+', icon: <Code className="w-4 h-4" /> },
    { name: 'Vue I18n', icon: <Languages className="w-4 h-4" /> },
    { name: 'Netlify', icon: <Globe2 className="w-4 h-4" /> }
  ];

  const techStackDetailed = [
    {
      name: 'Vue.js 3',
      icon: <Code className="w-5 h-5" />,
      description: 'Framework for all app features, routing, components, multilingual support, and UI logic'
    },
    {
      name: 'Tailwind CSS',
      icon: <Palette className="w-5 h-5" />,
      description: 'Utility-first CSS framework for responsive and modern design'
    },
    {
      name: 'JavaScript (ES6+)',
      icon: <Code className="w-5 h-5" />,
      description: 'Application scripting and interactivity'
    },
    {
      name: 'localStorage API',
      icon: <Database className="w-5 h-5" />,
      description: 'Persistence for cart, user session, and preferences'
    },
    {
      name: 'Netlify',
      icon: <Globe2 className="w-5 h-5" />,
      description: 'Static site deployment and hosting'
    },
    {
      name: 'Git & GitHub',
      icon: <Github className="w-5 h-5" />,
      description: 'Version control and project repository'
    }
  ];

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white text-black${effectiveIsDark ? ' dark' : ''} dark:bg-gray-900 dark:text-white`}>
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />
      
      {/* Enhanced background pattern - lighter in dark mode */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5 dark:opacity-10 -z-10"></div>
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm mb-6 font-medium border border-blue-200 dark:border-blue-800">
              <Code className="w-3 h-3" />
              Web Development
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
              KFC Clone
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              A fully client-side, single-page food ordering application inspired by KFC Bangladesh. Built with Vue.js 3, showcasing modern web development, UX design, and internationalization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.a 
                href="https://kfc-bd.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 hover:from-blue-600 hover:via-indigo-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </motion.a>
              <motion.a 
                href="https://github.com/dhruba-datta/kfc-clone" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                Source Code
              </motion.a>
            </div>
          </motion.div>

          {/* Enhanced Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-20"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-all duration-200 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-gray-600 dark:text-gray-400">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Application Features
            </h2>
            
          </motion.div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 bg-white dark:bg-gray-800 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFeature(feature.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-100 dark:border-blue-800/50">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.summary}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      expandedFeature === feature.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {expandedFeature === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                        <ul className="mt-4 space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Used Section */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Tech Stack Used
            </h2>
           
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {techStackDetailed.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-lg group"
              >
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex-shrink-0 border border-blue-100 dark:border-blue-800/50 group-hover:scale-105 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{tech.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What Makes It Unique */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Makes This Project Unique
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30"
                >
                  <div className="w-8 h-8 text-green-500 mt-1 flex-shrink-0">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Built 100% by me</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Every feature, animation, and interaction coded from scratch</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30"
                >
                  <div className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Multilingual from the ground up</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Designed for Bangladesh's real user base with proper i18n</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30"
                >
                  <div className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Production-ready</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Can be extended for real business use with minimal backend addition</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30"
                >
                  <div className="w-8 h-8 text-indigo-500 mt-1 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Recruiter-friendly</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Demonstrates hands-on Vue, state, UX, and multi-language SPA experience</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        
      </main>
      
      <Footer />
    </div>
  );
};

export default KfcClonePage;
