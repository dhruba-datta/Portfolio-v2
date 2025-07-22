import Navigation from '../components/ui/Navigation';
import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import Skills from '../components/sections/Skills';
import Achievements from '../components/sections/Achievements';
import Projects from '../components/sections/Projects';
import Photography from '../components/sections/Photography';
import Updates from '../components/sections/Updates';
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
        <Skills />
        <Achievements />
        <Projects />
        <Photography />
        <Updates />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
