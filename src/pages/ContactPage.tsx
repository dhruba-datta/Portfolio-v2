import Contact from '../components/sections/Contact';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';

interface ContactPageProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ContactPage = ({ isDark, toggleTheme }: ContactPageProps) => {
  return (
    <div className="min-h-screen">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
