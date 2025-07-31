import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Search, ShoppingCart, Calendar, Users, MessageCircle, Map, Bell, Code, Database, Palette, Zap, ChevronDown, Layers, Settings, Shield, ArrowLeft, Filter, Package, Store } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/ui/Navigation';
import Footer from '../../components/ui/Footer';

interface ABPharmacyExpoPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const ABPharmacyExpoPage = ({ isDark, toggleTheme }: ABPharmacyExpoPageProps) => {
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
      id: 'native',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Cross-Platform Native Experience',
      summary: 'Optimized React Native app for both iOS and Android platforms',
      details: [
        'Single codebase deployment for both iOS and Android platforms',
        'Native device interactions with smooth, fast navigation',
        'Platform-specific UI adaptations for authentic native feel',
        'Optimized performance with native modules and components',
        'Touch gestures and haptic feedback integration'
      ]
    },
    {
      id: 'schedule',
      icon: <Calendar className="w-5 h-5" />,
      title: 'Expo Schedule Management',
      summary: 'Real-time event timeline with session details and scheduling',
      details: [
        'Interactive event timeline with session details and speakers',
        'Real-time schedule updates and event notifications',
        'Easy access to session information and timing',
        'Calendar integration for personal event planning',
        'Offline schedule caching for uninterrupted access'
      ]
    },
    {
      id: 'directory',
      icon: <Store className="w-5 h-5" />,
      title: 'Exhibitor Directory',
      summary: 'Searchable exhibitor profiles with booth details and contact info',
      details: [
        'Comprehensive exhibitor database with detailed profiles',
        'Advanced search and filtering by company, category, or services',
        'Direct contact integration with booth information',
        'Company highlights and product showcase sections',
        'Interactive exhibitor map with booth locations'
      ]
    },
    {
      id: 'catalog',
      icon: <Package className="w-5 h-5" />,
      title: 'Product & Service Catalog',
      summary: 'Categorized pharmacy products with detailed descriptions',
      details: [
        'Organized product categories with high-quality images',
        'Detailed product descriptions and specifications',
        'Price information and availability status',
        'Product comparison features and recommendations',
        'Wishlist and favorites functionality for easy access'
      ]
    },
    {
      id: 'search',
      icon: <Search className="w-5 h-5" />,
      title: 'Real-Time Search & Filters',
      summary: 'Instant search with advanced filtering capabilities',
      details: [
        'Lightning-fast search across products, exhibitors, and sessions',
        'Multi-criteria filtering with instant results',
        'Search history and popular search suggestions',
        'Voice search integration for hands-free operation',
        'Advanced filters by category, price range, and availability'
      ]
    },
    {
      id: 'components',
      icon: <Layers className="w-5 h-5" />,
      title: 'Modular Native Components',
      summary: 'Custom React Native components for consistent UI/UX',
      details: [
        'Reusable component library for consistent design language',
        'Custom navigation components with smooth transitions',
        'Interactive event cards and exhibitor profile displays',
        'Product showcase components with image galleries',
        'Form components with validation and error handling'
      ]
    },
    {
      id: 'design',
      icon: <Palette className="w-5 h-5" />,
      title: 'Mobile-First Design',
      summary: 'Responsive design optimized for all mobile screen sizes',
      details: [
        'Flexbox layouts ensuring perfect display on all devices',
        'Responsive typography and spacing for optimal readability',
        'Touch-friendly interface with appropriate button sizes',
        'Support for both portrait and landscape orientations',
        'Accessibility features including screen reader support'
      ]
    },
    {
      id: 'features',
      icon: <Bell className="w-5 h-5" />,
      title: 'Advanced Mobile Features',
      summary: 'Native mobile capabilities and integrations',
      details: [
        'Push notifications for real-time event updates',
        'WhatsApp integration for direct communication',
        'Interactive expo map with pinch, zoom, and tap navigation',
        'Offline data caching for uninterrupted app usage',
        'Google Sheets integration for dynamic login system'
      ]
    }
  ];

  const techStack = [
    { name: 'React Native', icon: <Code className="w-4 h-4" /> },
    { name: 'Expo', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'JavaScript ES6+', icon: <Code className="w-4 h-4" /> },
    { name: 'React Navigation', icon: <Layers className="w-4 h-4" /> },
    { name: 'AsyncStorage', icon: <Database className="w-4 h-4" /> }
  ];

  const techStackDetailed = [
    {
      name: 'React Native',
      icon: <Code className="w-5 h-5" />,
      description: 'Cross-platform mobile framework for native iOS and Android app development with single codebase'
    },
    {
      name: 'Expo',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Development platform for simplified build, testing, deployment, and access to native device features'
    },
    {
      name: 'JavaScript (ES6+)',
      icon: <Code className="w-5 h-5" />,
      description: 'Modern JavaScript for app logic, state management, and API interactions with async/await patterns'
    },
    {
      name: 'React Navigation',
      icon: <Layers className="w-5 h-5" />,
      description: 'Navigation library for seamless screen transitions and native mobile navigation patterns'
    },
    {
      name: 'AsyncStorage',
      icon: <Database className="w-5 h-5" />,
      description: 'Local data persistence for user preferences, offline caching, and expo data storage'
    },
    {
      name: 'NativeBase/Styled Components',
      icon: <Palette className="w-5 h-5" />,
      description: 'UI component libraries for consistent styling and fast mobile-optimized interface development'
    }
  ];

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white text-black${effectiveIsDark ? ' dark' : ''} dark:bg-gray-900 dark:text-white`}>
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />
      
      {/* Medical/pharmacy-themed animated background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Animated radial gradient overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            background:
              "radial-gradient(ellipse 65% 45% at 50% 14%,rgba(34,197,94,0.13),transparent 90%)",
          }}
        />
        {/* Animated color blobs */}
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-green-400/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-emerald-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -30, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_28px] opacity-10 [mask-image:radial-gradient(ellipse_60%_40%_at_50%_14%,#000_70%,transparent_120%)]"></div>
      </div>
      
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm mb-6 font-medium border border-green-200 dark:border-green-800">
              <Smartphone className="w-3 h-3" />
              App Development
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent leading-tight">
              AB-Pharmacy
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              A comprehensive React Native mobile application designed for the pharmacy expo industry. Features cross-platform compatibility, real-time schedules, exhibitor directories, and seamless product catalog browsing with native mobile experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.a 
                href="http://surl.li/lkiufr" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-4 h-4" />
                View Demo
              </motion.a>
              <motion.a 
                href="https://github.com/dhruba-datta/AB-Pharmacy-Expo" 
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

          {/* Tech Stack Pills */}
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
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl border border-green-100 dark:border-green-800/50">
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
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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
                <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl flex-shrink-0 border border-green-100 dark:border-green-800/50 group-hover:scale-105 transition-transform">
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
              What Makes This Project Stand Out
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
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">True native mobile app</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Built from the ground up for smartphones with native performance and mobile UX</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30"
                >
                  <div className="w-8 h-8 text-emerald-500 mt-1 flex-shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Cross-platform efficiency</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Single React Native codebase for both iOS and Android platforms</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800/30"
                >
                  <div className="w-8 h-8 text-teal-500 mt-1 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Industry-specific focus</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Designed specifically for expo and pharmacy industry needs, not generic solutions</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-800/30"
                >
                  <div className="w-8 h-8 text-cyan-500 mt-1 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Production-ready & scalable</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Client-ready architecture that can be extended for other event industries</p>
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

export default ABPharmacyExpoPage;
