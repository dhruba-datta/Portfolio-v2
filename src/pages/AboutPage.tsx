import Navigation from '../components/ui/Navigation';
import About from '../components/sections/about/About';
import Academic from '../components/sections/about/Academic';
import Research from '../components/sections/about/Research';
import Experience from '../components/sections/about/Experience';
import Certifications from '../components/sections/about/Certifications';
import Volunteer from '../components/sections/about/Volunteer';
import Footer from '../components/ui/Footer';
import Seo from '../components/ui/Seo';

interface AboutPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const AboutPage = ({ isDark, toggleTheme }: AboutPageProps) => {
  return (
    <div className={`min-h-screen bg-white dark:bg-[#0a0f1c] transition-colors duration-300`}>
      <Seo
        title="About | Dhruba Datta"
        description="About Dhruba Datta: R&D Lead at Social Engagement Group and part-time Product & Operations Lead at Optify, building voice AI, LLM automation and full-stack platforms."
        path="/about"
      />
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
