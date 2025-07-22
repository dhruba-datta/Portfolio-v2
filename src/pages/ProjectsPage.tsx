import Navigation from '../components/ui/Navigation';
import Projects from '../components/sections/Projects';
import Footer from '../components/ui/Footer';

interface ProjectsPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ProjectsPage = ({ isDark, toggleTheme }: ProjectsPageProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Background pattern to match hero */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 -z-10"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
      
      <main className="pt-20">

        {/* Projects Sections */}
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
