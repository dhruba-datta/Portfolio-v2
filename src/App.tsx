import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import KfcClonePage from './pages/projects/KfcClonePage';
import MyPortfolioPage from './pages/projects/MyPortfolioPage';
import ABPharmacyExpoPage from './pages/projects/ABPharmacyExpoPage';
import PhotoBoothPage from './pages/projects/PhotoBoothPage';
import CryptoVersePage from './pages/projects/CryptoVersePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the page has rendered
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      setTimeout(scrollToTop, 100);
    });
  }, [pathname]);

  return null;
}

function AppRoutes({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />} />
      <Route path="/about" element={<AboutPage isDark={isDark} toggleTheme={toggleTheme} />} />
      <Route path="/projects" element={<ProjectsPage isDark={isDark} toggleTheme={toggleTheme} />} />
      <Route path="/contact" element={<ContactPage isDark={isDark} toggleTheme={toggleTheme} />} />
      <Route path="/projects/kfc-clone" element={<KfcClonePage isDark={isDark} toggleTheme={toggleTheme} />} />
      <Route path="/projects/myportfolio" element={<MyPortfolioPage />} />
      <Route path="/projects/ab-pharmacy-expo" element={<ABPharmacyExpoPage />} />
      <Route path="/projects/photoBooth" element={<PhotoBoothPage />} />
      <Route path="/projects/cryptoverse" element={<CryptoVersePage />} />
    </Routes>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ScrollToTop />
          <AppRoutes isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </Router>
  );
}

export default App;
