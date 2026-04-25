import Contact from '../components/sections/Contact';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';

interface ContactPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ContactPage = ({ isDark, toggleTheme }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1c] transition-colors duration-300">
      <title>Contact | Dhruba Datta</title>
      <meta
        name="description"
        content="Get in touch with Dhruba Datta — let's talk about your web platform, automation pipeline, or voice AI project."
      />
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
