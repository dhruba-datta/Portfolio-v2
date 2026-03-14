import Navigation from '../components/ui/Navigation';
import About from '../components/sections/about/About';
import Academic from '../components/sections/about/Academic';
import Research from '../components/sections/about/Research';
import Experience from '../components/sections/about/Experience';
import Certifications from '../components/sections/about/Certifications';
import Volunteer from '../components/sections/about/Volunteer';
import Footer from '../components/ui/Footer';

interface AboutPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const AboutPage = ({ isDark, toggleTheme }: AboutPageProps) => {
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-20 pb-0">
        {/* About Sections */}
        <section>
          <About />
        </section>
        <section>
          <Academic isDark={isDark} />
        </section>
        <section>
          <Research isDark={isDark} />
        </section>
        <section>
          <Experience isDark={isDark} />
        </section>
        <section>
          <Certifications isDark={isDark} />
        </section>
        <section>
          <Volunteer isDark={isDark} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
