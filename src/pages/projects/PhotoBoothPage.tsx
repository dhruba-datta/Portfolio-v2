import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe2, Upload, Search, Heart, MessageCircle, Camera, User, Smartphone, Code, Database, Palette, Zap, ChevronDown, Users, Layers, Settings, Shield, ArrowLeft, Eye, Filter } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/ui/Navigation';
import Footer from '../../components/ui/Footer';

interface PhotoBoothPageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const PhotoBoothPage = ({ isDark, toggleTheme }: PhotoBoothPageProps) => {
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
      id: 'upload',
      icon: <Upload className="w-5 h-5" />,
      title: 'Photo Upload & Sharing',
      summary: 'Seamless image upload with metadata and instant sharing',
      details: [
        'Drag-and-drop image upload with progress indicators',
        'Add descriptions, tags, and categories to photos',
        'Instant sharing with optimized image processing',
        'Support for multiple image formats (JPG, PNG, WebP)',
        'Automatic image optimization and CDN delivery via Sanity.io'
      ]
    },
    {
      id: 'search',
      icon: <Search className="w-5 h-5" />,
      title: 'Advanced Search & Filter',
      summary: 'Real-time search with dynamic filtering capabilities',
      details: [
        'Real-time search across titles, descriptions, and tags',
        'Dynamic filtering by categories and user preferences',
        'Autocomplete suggestions for improved user experience',
        'Search history and saved searches functionality',
        'Responsive search results with infinite scroll loading'
      ]
    },
    {
      id: 'engagement',
      icon: <Heart className="w-5 h-5" />,
      title: 'Social Engagement Features',
      summary: 'Like, comment, and interact with community photos',
      details: [
        'One-click like/unlike functionality with real-time updates',
        'Threaded comment system with reply capabilities',
        'User mention system with @username tagging',
        'Activity feed showing likes, comments, and follows',
        'Engagement analytics for photo performance tracking'
      ]
    },
    {
      id: 'auth',
      icon: <User className="w-5 h-5" />,
      title: 'Google OAuth Authentication',
      summary: 'Secure sign-in with personalized user experience',
      details: [
        'Seamless Google OAuth integration for secure authentication',
        'Personalized user profiles with photo galleries',
        'Session management with persistent login state',
        'User preference settings and privacy controls',
        'Activity tracking and personalized content recommendations'
      ]
    },
    {
      id: 'gallery',
      icon: <Eye className="w-5 h-5" />,
      title: 'Interactive Photo Gallery',
      summary: 'Immersive photo viewing with detailed modal experiences',
      details: [
        'Fullscreen photo modal with navigation controls',
        'Image metadata display including EXIF data',
        'Zoom functionality with smooth animations',
        'Keyboard shortcuts for efficient navigation',
        'Share options for social media integration'
      ]
    },
    {
      id: 'responsive',
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Responsive Design',
      summary: 'Mobile-first approach with cross-device compatibility',
      details: [
        'Mobile-optimized touch gestures for photo interactions',
        'Adaptive grid layouts for different screen sizes',
        'Progressive Web App features for mobile installation',
        'Offline-first caching for improved performance',
        'Touch-friendly interface with gesture support'
      ]
    },
    {
      id: 'components',
      icon: <Layers className="w-5 h-5" />,
      title: 'Modular Component Architecture',
      summary: 'Reusable React components for scalable development',
      details: [
        'Modular photo card components with consistent styling',
        'Reusable modal system for various content types',
        'Custom hooks for state management and API calls',
        'Accessible form components with validation',
        'Toast notification system for user feedback'
      ]
    },
    {
      id: 'performance',
      icon: <Zap className="w-5 h-5" />,
      title: 'Performance Optimization',
      summary: 'Fast loading with modern web performance techniques',
      details: [
        'Lazy loading for images with intersection observer',
        'Code splitting for optimized bundle sizes',
        'Image compression and format optimization',
        'Efficient state management with React hooks',
        'CDN delivery for global performance optimization'
      ]
    }
  ];

  const techStack = [
    { name: 'React', icon: <Code className="w-4 h-4" /> },
    { name: 'Sanity.io', icon: <Database className="w-4 h-4" /> },
    { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> },
    { name: 'Google OAuth', icon: <User className="w-4 h-4" /> },
    { name: 'Netlify', icon: <Globe2 className="w-4 h-4" /> }
  ];

  const techStackDetailed = [
    {
      name: 'React',
      icon: <Code className="w-5 h-5" />,
      description: 'Component-driven UI development with hooks for state management and interactive photo gallery features'
    },
    {
      name: 'Sanity.io',
      icon: <Database className="w-5 h-5" />,
      description: 'Headless CMS backend for storing images, user data, comments, and content with real-time updates'
    },
    {
      name: 'Tailwind CSS',
      icon: <Palette className="w-4 h-4" />,
      description: 'Utility-first CSS framework for responsive design and consistent visual styling'
    },
    {
      name: 'Google OAuth',
      icon: <User className="w-5 h-5" />,
      description: 'Secure authentication system with Google sign-in and user session management'
    },
    {
      name: 'React Router DOM',
      icon: <Code className="w-5 h-5" />,
      description: 'Client-side routing for seamless navigation between gallery, profile, and detail views'
    },
    {
      name: 'Netlify',
      icon: <Globe2 className="w-5 h-5" />,
      description: 'Static site deployment with continuous integration and global CDN distribution'
    }
  ];

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white text-black${effectiveIsDark ? ' dark' : ''} dark:bg-gray-900 dark:text-white`}>
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />
      
      {/* KFC page-inspired animated background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Animated radial gradient overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            background:
              "radial-gradient(ellipse 65% 45% at 50% 14%,rgba(99,102,241,0.13),transparent 90%)",
          }}
        />
        {/* Animated color blobs */}
        <motion.div
          className="absolute top-0 left-1/3 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"
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
            <div className="inline-flex items-center gap-2 border border-pink-400 bg-gradient-to-r from-pink-50 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 text-pink-600 dark:text-pink-400 px-4 py-2 rounded-full text-sm mb-6 font-medium">
              <Code className="w-3 h-3" />
              Web Development
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
              PhotoBooth
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              A modern photo-sharing web application enabling users to upload, discover, and engage with images. Built with React and Sanity.io, featuring Google authentication and real-time social interactions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.a 
                href="https://phootobooth.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </motion.a>
              <motion.a 
                href="https://github.com/dhruba-datta/photoBooth" 
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
                    <div className="p-3 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-xl border border-pink-100 dark:border-pink-800/50">
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
                              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
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
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-xl flex-shrink-0 border border-pink-100 dark:border-pink-800/50 group-hover:scale-105 transition-transform">
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
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Built end-to-end by me</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Every component, API integration, and user interaction designed and coded from scratch</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30"
                >
                  <div className="w-8 h-8 text-purple-500 mt-1 flex-shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Headless CMS integration</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Full-stack frontend approach using Sanity.io as backend-as-a-service</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30"
                >
                  <div className="w-8 h-8 text-blue-500 mt-1 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Social media features</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Complete engagement system with likes, comments, and real-time interactions</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-pink-50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-800/30"
                >
                  <div className="w-8 h-8 text-pink-500 mt-1 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Production-ready architecture</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Scalable React patterns with authentication, routing, and state management</p>
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

export default PhotoBoothPage;
