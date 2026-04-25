import Navigation from '../components/ui/Navigation';
import Projects from '../components/sections/project/Projects';
import Footer from '../components/ui/Footer';

interface ProjectsPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ProjectsPage = ({ isDark, toggleTheme }: ProjectsPageProps) => {
  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <title>Projects | Dhruba Datta</title>
      <meta
        name="description"
        content="A curated catalog of web platforms, mobile apps, and n8n automations Dhruba Datta has shipped — case studies for each."
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
