import Navigation from '../components/ui/Navigation';
import Projects from '../components/sections/project/Projects';
import Footer from '../components/ui/Footer';
import Seo from '../components/ui/Seo';

interface ProjectsPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ProjectsPage = ({ isDark, toggleTheme }: ProjectsPageProps) => {
  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-[#0a0f1c] transition-colors duration-300`}>
      <Seo
        title="Projects | Dhruba Datta"
        description="Case studies from Dhruba Datta: voice AI and LLM automation, client web platforms, e-commerce, and n8n workflows."
        path="/projects"
      />
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-14 sm:pt-20 flex-grow">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
