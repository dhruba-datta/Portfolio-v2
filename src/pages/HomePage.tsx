import Navigation from '../components/ui/Navigation';
import Hero from '../components/sections/home/Hero';
import TechStack from '../components/sections/home/TechStack';
import ProjectPreview from '../components/sections/home/ProjectPreview';
import Photography from '../components/sections/home/Photography';
import Footer from '../components/ui/Footer';

interface HomePageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const HomePage = ({ isDark, toggleTheme }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <TechStack isDark={isDark} />
        <ProjectPreview />
        <Photography />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
