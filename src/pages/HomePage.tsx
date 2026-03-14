import { Suspense, lazy } from 'react';
import Navigation from '../components/ui/Navigation';
import Hero from '../components/sections/home/Hero';
import { motion } from 'framer-motion';

// Lazy load heavy sections
const TechStack = lazy(() => import('../components/sections/home/TechStack'));
const ProjectPreview = lazy(() => import('../components/sections/home/ProjectPreview'));
const Photography = lazy(() => import('../components/sections/home/Photography'));
const Footer = lazy(() => import('../components/ui/Footer'));

interface HomePageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6 }}
  >
    <Suspense fallback={<div className="h-[400px] flex items-center justify-center animate-pulse bg-gray-50 dark:bg-gray-900/50 rounded-3xl m-4" />}>
      {children}
    </Suspense>
  </motion.div>
);

const HomePage = ({ isDark, toggleTheme }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <LazySection>
          <TechStack isDark={isDark} />
        </LazySection>
        <LazySection>
          <ProjectPreview />
        </LazySection>
        <LazySection>
          <Photography />
        </LazySection>
      </main>
      
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
};

export default HomePage;
