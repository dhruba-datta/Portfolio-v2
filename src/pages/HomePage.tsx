import { Suspense, lazy } from 'react';
import Navigation from '../components/ui/Navigation';
import Hero from '../components/sections/home/Hero';

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
  <Suspense fallback={<div className="h-[400px]" aria-hidden />}>
    {children}
  </Suspense>
);

const HomePage = ({ isDark, toggleTheme }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1c] transition-colors duration-300">
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
