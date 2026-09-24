import Contact from '../components/sections/Contact';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Seo from '../components/ui/Seo';

interface ContactPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ContactPage = ({ isDark, toggleTheme }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1c] transition-colors duration-300">
      <Seo
        title="Contact | Dhruba Datta"
        description="Get in touch with Dhruba Datta about AI engineering roles, product work, or a voice AI, automation or web project."
        path="/contact"
      />
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
