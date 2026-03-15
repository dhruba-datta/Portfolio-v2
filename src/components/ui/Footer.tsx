import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruba-datta/', icon: <FaLinkedinIn className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/dhruba-datta', icon: <FaGithub className="w-5 h-5" /> },
  { name: 'Gmail', href: 'mailto:dhrubadattaanjan@gmail.com', icon: <SiGmail className="w-5 h-5" /> },
  { name: 'Google Scholar', href: 'https://scholar.google.co.uk/citations?user=RGxdIVkAAAAJ', icon: <FaGoogleScholar className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/dhrubz_/', icon: <FaInstagram className="w-5 h-5" /> },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const handleGmailClick = (e: React.MouseEvent) => {
    // Detect mobile/tablet users
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText('dhrubadattaanjan@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
      aria-label="Site Footer"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        {/* Left: Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1.5 md:gap-2 font-outfit">
          <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">Dhruba Datta</span>
          <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400">&copy; {__LAST_UPDATE_YEAR__} | All rights reserved</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 md:gap-5 py-2 md:py-0 -mr-2.5 md:-mr-3">
          {socialLinks.map(link => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => setHoveredName(link.name)}
              onMouseLeave={() => setHoveredName(null)}
            >
              <a
                href={link.href}
                onClick={link.name === 'Gmail' ? handleGmailClick : undefined}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={link.name}
                className={
                  `p-2.5 md:p-3 rounded-lg transition duration-300 text-gray-500 dark:text-gray-400 min-h-[40px] min-w-[40px] md:min-h-[48px] md:min-w-[48px] flex items-center justify-center focus-override ` +
                  (link.name === 'GitHub' ? 'hover:text-gray-900 dark:hover:text-white ' : '') +
                  (link.name === 'LinkedIn' ? 'hover:text-blue-600 dark:hover:text-blue-400 ' : '') +
                  (link.name === 'Instagram' ? 'hover:text-pink-500 dark:hover:text-pink-400 ' : '') +
                  (link.name === 'Google Scholar' ? 'hover:text-blue-600 dark:hover:text-blue-500 ' : '') +
                  (link.name === 'Gmail' ? 'hover:text-red-500 dark:hover:text-red-400 ' : '')
                }
              >
                {link.icon}
              </a>

              <AnimatePresence>
                {( (link.name === 'Gmail' && copied) || (hoveredName === link.name) ) && (
                  <motion.div
                    initial={{ opacity: 0, x: '-50%', y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: '-50%', y: 10, scale: 0.8 }}
                    className="absolute bottom-full left-1/2 mb-1.5 px-2.5 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[10px] sm:text-xs font-bold rounded-md shadow-lg pointer-events-none whitespace-nowrap z-50 font-outfit"
                  >
                    {link.name === 'Gmail' && copied ? 'Copied!' : link.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
