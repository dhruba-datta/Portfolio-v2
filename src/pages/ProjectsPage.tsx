

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
    <div className={
      `min-h-screen flex flex-col transition-colors duration-300 ` +
      (isDark ? 'bg-gray-900' : 'bg-white')
    }>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      {/* Background pattern to match hero, only in dark mode */}
      {isDark && (
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 -z-10"></div>
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
        </>
      )}
      <main className="pt-20 flex-grow">
        <Projects initialCategory={tab} />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
