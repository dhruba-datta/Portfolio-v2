import Navigation from '../components/ui/Navigation';
import About from '../components/sections/about/About';
import Academic from '../components/sections/about/Academic';
import Research from '../components/sections/about/Research';
import Achievements from '../components/sections/about/Achievements';
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
    <div className={
      `min-h-screen transition-colors duration-300 ` +
      (isDark ? 'bg-gray-900' : 'bg-gray-50')
    }>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      {/* Background pattern to match hero, only in dark mode */}
      {isDark && (
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 -z-10"></div>
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
        </>
      )}
      <main className="pt-20">
        {/* About Sections */}
        <section>
          <About isDark={isDark} />
        </section>
        <section>
          <Academic isDark={isDark} />
        </section>
        <section>
          <Research isDark={isDark} />
        </section>
        <section>
          <Achievements isDark={isDark} />
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
