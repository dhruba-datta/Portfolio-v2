import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Smartphone, Globe, Languages, Database, Zap } from 'lucide-react';
// ...existing code...
import Navigation from '../../components/ui/Navigation';
import Footer from '../../components/ui/Footer';

interface KfcClonePageProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

import { useState } from 'react';

const KfcClonePage = ({ isDark, toggleTheme }: KfcClonePageProps) => {
  // Fallback local theme state if props not provided
  const [localDark, setLocalDark] = useState(false);
  const effectiveIsDark = typeof isDark === 'boolean' ? isDark : localDark;
  const effectiveToggleTheme =
    typeof toggleTheme === 'function'
      ? toggleTheme
      : () => setLocalDark((d) => !d);
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Themes & Fields',
      description: 'Responsive design optimized for all devices and screen sizes'
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: 'Language Detection',
      description: 'Multi-language support with Vue I18n for English, Bengali, and Hindi'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Export Options',
      description: 'Dynamic menu display with real-time updates and filtering'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Deep Customization',
      description: 'Persistent data storage with cookies and local storage'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Reusable Context & Shortcuts',
      description: 'Interactive modals and seamless user experience'
    }
  ];

  const useCases = [
    'Share code snippets in blog posts or newsletters',
    'Post clean, styled code blocks on social media',
    'Create branded visuals for tutorials or documentation',
    'Capture snippets for team wikis or product documentation'
  ];

  // ...existing code...

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white text-black${effectiveIsDark ? ' dark' : ''} dark:bg-black dark:text-white`}>
      <Navigation isDark={effectiveIsDark} toggleTheme={effectiveToggleTheme} />
      {/* Background pattern for consistency */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 -z-10"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10 dark:opacity-10 -z-10"></div>
      <main className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full text-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Live Project
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                KFC Clone
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
                A powerful tool for developers to beautifully display and share formatted code snippets across social media. Supports multiple languages, customizable themes, and export formats — built for developers who care about presentation.
              </p>
            </motion.div>

            <div className="flex gap-4 mb-12">
              <a 
                href="https://kfc-bd.netlify.app/" 
                target="_blank" 
                rel="noopener"
                className="inline-flex items-center gap-2 bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </a>
              <a 
                href="https://github.com/dhruba-datta/kfc-clone" 
                target="_blank" 
                rel="noopener"
                className="inline-flex items-center gap-2 border border-gray-600 dark:border-gray-400 px-6 py-3 rounded-lg font-medium hover:border-gray-500 dark:hover:border-gray-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>

          {/* Main Preview Card */}
          <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-6 md:p-8 rounded-2xl">
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur rounded-xl p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">KFC Clone - Food Ordering App</span>
                </div>
                
                <div className="font-mono text-sm">
                  <div className="text-purple-400 dark:text-purple-300">import</div>
                  <div className="text-blue-400 dark:text-blue-300 ml-4">{'{'} useState, useEffect {'}'} from 'react';</div>
                  <div className="text-purple-400 dark:text-purple-300 mt-2">const</div>
                  <div className="text-yellow-400 dark:text-yellow-300 ml-4">FoodApp = () =&gt; {'{'}</div>
                  <div className="text-gray-500 dark:text-gray-300 ml-8">const [menu, setMenu] = useState([]);</div>
                  <div className="text-gray-500 dark:text-gray-300 ml-8">const [cart, setCart] = useState([]);</div>
                  <div className="text-purple-400 dark:text-purple-300 ml-8 mt-2">return</div>
                  <div className="text-gray-500 dark:text-gray-300 ml-12">&lt;OrderingInterface /&gt;</div>
                  <div className="text-yellow-400 dark:text-yellow-300 ml-4">{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is KFC Clone Section */}
        <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
          <div className="flex items-start gap-2 mb-4">
            <Zap className="w-6 h-6 text-blue-400 mt-1" />
            <h2 className="text-2xl font-bold">What is KFC Clone?</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            KFC Clone is a developer tool that transforms your code into stylish, shareable snippets — perfect for showcasing on Twitter, LinkedIn, blogs, or presentations. It supports real-time customization, syntax highlighting, and export formats — all tweeks clean, intuitive UI.
          </p>
        </div>

        {/* Key Features */}
        <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
          <div className="flex items-start gap-2 mb-8">
            <Code2 className="w-6 h-6 text-green-400 mt-1" />
            <h2 className="text-2xl font-bold">Key Features</h2>
          </div>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
              >
                <div className="text-blue-400 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why I Built This */}
        <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
          <div className="flex items-start gap-2 mb-4">
            <div className="w-6 h-6 text-yellow-400 mt-1">⚡</div>
            <h2 className="text-2xl font-bold">Why I Built This</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            As a developer sharing code snippets on Twitter and LinkedIn, I was frustrated by tools with limited themes, no export options, or clunky UX. KFC Clone was born from that frustration — a tool for modern food ordering workflows.
          </p>
        </div>

        {/* Use Cases */}
        <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
          <div className="flex items-start gap-2 mb-8">
            <div className="w-6 h-6 text-purple-400 mt-1">💡</div>
            <h2 className="text-2xl font-bold">Use Cases</h2>
          </div>
          
          <ul className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-green-400 mt-1">•</span>
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="container mx-auto px-4 md:px-6 py-20 max-w-3xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Experience?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Try the KFC Clone application and see how modern food ordering should work
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://kfc-bd.netlify.app/" 
                target="_blank" 
                rel="noopener"
                className="inline-flex items-center gap-2 bg-white text-black dark:bg-gray-900 dark:text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
              <a 
                href="https://github.com/dhruba-datta/kfc-clone" 
                target="_blank" 
                rel="noopener"
                className="inline-flex items-center gap-2 border border-gray-600 dark:border-gray-400 px-8 py-4 rounded-lg font-medium hover:border-gray-500 dark:hover:border-gray-300 transition-colors"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KfcClonePage;
