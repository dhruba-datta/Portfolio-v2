import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrContact } from 'react-icons/gr';
import { RiHome4Line, RiContactsLine } from 'react-icons/ri';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      label: 'Home', 
      href: '/',
      icon: (
        <RiHome4Line className="w-4 h-4" />
      )
    },
    { 
      label: 'About', 
      href: '/about',
      icon: (
        <RiContactsLine className="w-4 h-4" />
      )
    },
    { 
      label: 'Projects', 
      href: '/projects',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      label: 'Contact', 
      href: '/contact',
      icon: (
        <GrContact className="w-4 h-4" />
      )
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-2 md:pt-4 pb-2 md:pb-4 ${
        scrolled 
          ? 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm' 
          : 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-none'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
              <Link to="/" className="flex items-center transition-transform duration-200 hover:scale-105 focus-override">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-xl overflow-hidden border border-white/30 dark:border-0 bg-white dark:bg-[#111827] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                >
                  <img
                    src="/images/logo.svg"
                    alt="Logo"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-lg"
                  />
                </div>
              </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 bg-gray-100/80 dark:bg-gray-800/80 rounded-full px-2 py-2 shadow-lg backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px] focus-override ${
                    location.pathname === item.href
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg scale-105'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-gray-700/60 hover:shadow-md hover:scale-105'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 md:p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-sm focus-override"
            >
              {isDark ? (
                <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-sm focus-override"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center relative">
                <span
                  className={`w-4 h-0.5 bg-gray-700 dark:bg-gray-300 absolute transition-all duration-200 ${
                    isOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-1'
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-gray-700 dark:bg-gray-300 absolute transition-all duration-200 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-gray-700 dark:bg-gray-300 absolute transition-all duration-200 ${
                    isOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-2xl backdrop-blur-lg overflow-hidden">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 w-full px-4 py-4 text-left rounded-xl text-base font-medium transition-all duration-300 min-h-[56px] focus-override ${
                    location.pathname === item.href
                      ? 'bg-gray-100/80 dark:bg-gray-800/80 text-gray-900 dark:text-white shadow-lg scale-105'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50/60 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white hover:shadow-md hover:scale-105'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
