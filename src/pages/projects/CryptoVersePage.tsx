import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe2, TrendingUp, Search, BarChart3, Newspaper, Smartphone, Code, Database, Palette, Zap, ChevronDown, Users, Layers, Settings, Shield, ArrowLeft, LineChart, Filter, Eye } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/ui/Navigation';
import Footer from '../../components/ui/Footer';

interface CryptoVersePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const CryptoVersePage = ({ isDark, toggleTheme }: CryptoVersePageProps) => {
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
      id: 'dashboard',
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Real-Time Stats Dashboard',
      summary: 'Live cryptocurrency metrics updated via RapidAPI',
      details: [
        'Global cryptocurrency market cap and 24h volume tracking',
        'Real-time updates for total assets and market statistics',
        'Live price feeds for over 100+ cryptocurrencies',
        'Performance indicators with percentage changes',
        'Market dominance charts and trending analysis'
      ]
    },
    {
      id: 'search',
      icon: <Search className="w-5 h-5" />,
      title: 'Search & Filtering',
      summary: 'Advanced search and filter capabilities for crypto assets',
      details: [
        'Search cryptocurrencies by name, symbol, or market data',
        'Real-time filtering with instant results display',
        'Sort by market cap, price, volume, and percentage changes',
        'Advanced filters for market categories and rankings',
        'Bookmark and watchlist functionality for favorite coins'
      ]
    },
    {
      id: 'details',
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Cryptocurrency Detail View',
      summary: 'Interactive charts and comprehensive crypto analysis',
      details: [
        'Interactive price charts powered by Chart.js integration',
        'Historical price data with multiple timeframe options',
        'Volume trends and trading activity visualization',
        'Market statistics including supply, market cap, and rankings',
        'Technical indicators and price prediction insights'
      ]
    },
    {
      id: 'news',
      icon: <Newspaper className="w-5 h-5" />,
      title: 'Latest Crypto News',
      summary: 'Real-time cryptocurrency news and market updates',
      details: [
        'Latest crypto articles fetched via RapidAPI endpoints',
        'Market analysis and expert opinions integration',
        'Breaking news alerts for significant market movements',
        'Categorized news by topics and cryptocurrency projects',
        'Social sentiment analysis and community discussions'
      ]
    },
    {
      id: 'responsive',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Responsive Interface',
      summary: 'Ant Design powered responsive layouts for all devices',
      details: [
        'Mobile-first responsive design with Ant Design components',
        'Adaptive layouts for tablets, mobile, and desktop screens',
        'Touch-friendly interface with optimized mobile navigation',
        'Progressive Web App features for offline functionality',
        'Cross-browser compatibility and performance optimization'
      ]
    },
    {
      id: 'navigation',
      icon: <Eye className="w-5 h-5" />,
      title: 'Smooth Navigation',
      summary: 'React Router powered multi-page navigation system',
      details: [
        'Fast client-side routing between dashboard, markets, and news',
        'Deep linking support for individual cryptocurrency pages',
        'Breadcrumb navigation for improved user experience',
        'Loading states and smooth transitions between routes',
        'Browser history management and URL-based state persistence'
      ]
    },
    {
      id: 'state',
      icon: <Database className="w-5 h-5" />,
      title: 'Redux State Management',
      summary: 'Redux Toolkit for efficient global state handling',
      details: [
        'Centralized state management for market data and user preferences',
        'RTK Query for efficient API caching and data synchronization',
        'Redux slices for crypto data, news items, and search filters',
        'Optimistic updates and error handling for API operations',
        'Persistent state for user settings and watchlist preferences'
      ]
    },
    {
      id: 'performance',
      icon: <Zap className="w-5 h-5" />,
      title: 'Performance Optimization',
      summary: 'Optimized rendering and API management',
      details: [
        'Chart.js optimization for smooth real-time data visualization',
        'API rate limiting and caching strategies for RapidAPI',
        'Lazy loading for improved initial page load performance',
        'Memoized components and efficient re-rendering patterns',
        'Batched API requests to minimize network overhead'
      ]
    }
  ];

  const techStack = [
    { name: 'React', icon: <Code className="w-4 h-4" /> },
    { name: 'Redux Toolkit', icon: <Database className="w-4 h-4" /> },
    { name: 'Ant Design', icon: <Palette className="w-4 h-4" /> },
    { name: 'Chart.js', icon: <LineChart className="w-4 h-4" /> },
    { name: 'RapidAPI', icon: <Globe2 className="w-4 h-4" /> }
  ];

  const techStackDetailed = [
    {
      name: 'React',
      icon: <Code className="w-5 h-5" />,
      description: 'Component-based UI development with hooks for interactive cryptocurrency dashboard features'
    },
    {
      name: 'Redux Toolkit',
      icon: <Database className="w-5 h-5" />,
      description: 'Streamlined global state management for market data, filters, and user preferences with RTK Query'
    },
    {
      name: 'Ant Design',
      icon: <Palette className="w-5 h-5" />,
      description: 'Professional pre-styled components for layout, cards, inputs, and responsive grid systems'
    },
    {
      name: 'Chart.js',
      icon: <LineChart className="w-5 h-5" />,
      description: 'Interactive data visualization for price trends, volume analysis, and market performance charts'
    },
    {
      name: 'RapidAPI',
      icon: <Globe2 className="w-5 h-5" />,
      description: 'Real-time cryptocurrency data and news endpoints for live market information'
    },
    {
      name: 'React Router DOM',
      icon: <Code className="w-5 h-5" />,
      description: 'Client-side routing for seamless navigation between dashboard, markets, and detail views'
    }
  ];

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white text-black${effectiveIsDark ? ' dark' : ''} dark:bg-gray-900 dark:text-white`}>
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />
      
      {/* Crypto-themed animated background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Animated radial gradient overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            background:
              "radial-gradient(ellipse 65% 45% at 50% 14%,rgba(251,191,36,0.15),transparent 90%)",
          }}
        />
        {/* Animated color blobs */}
        <motion.div
          className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-64 h-64 bg-orange-400/25 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm mb-6 font-medium border border-yellow-200 dark:border-yellow-800">
              <Code className="w-3 h-3" />
              Web Development
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
              CryptoVerse
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              A real-time, interactive cryptocurrency dashboard built with React, Redux Toolkit, and Chart.js. Features live market data, advanced filtering, and comprehensive crypto analysis with modern UI/UX design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.a 
                href="https://cryptoverse20.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </motion.a>
              <motion.a 
                href="https://github.com/dhruba-datta/CryptoVerse" 
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
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-xl border border-yellow-100 dark:border-yellow-800/50">
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
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
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
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-xl flex-shrink-0 border border-yellow-100 dark:border-yellow-800/50 group-hover:scale-105 transition-transform">
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
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Built entirely by me</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Complete dashboard development from API integration to chart visualizations</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800/30"
                >
                  <div className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Real-time data integration</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Live cryptocurrency market data with advanced charting and analytics</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800/30"
                >
                  <div className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Production-ready architecture</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Redux Toolkit state management with optimized performance and error handling</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/30"
                >
                  <div className="w-8 h-8 text-red-500 mt-1 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Fintech expertise showcase</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Demonstrates data visualization, API integration, and financial dashboard skills</p>
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

export default CryptoVersePage;
