

import Navigation from '../components/ui/Navigation';
import Projects from '../components/sections/project/Projects';
import Footer from '../components/ui/Footer';
import { useSearchParams } from 'react-router-dom';

interface ProjectsPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}


const ProjectsPage = ({ isDark, toggleTheme }: ProjectsPageProps) => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  // Pass tab as prop to Projects
  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-14 sm:pt-20 flex-grow">
        <Projects initialCategory={tab} />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
