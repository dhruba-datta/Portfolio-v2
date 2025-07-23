import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhruba-datta/',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
        <circle cx="8" cy="8" r="1" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dhrubz_/',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17" cy="7" r="1.5" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/dhruba_datta_anjan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.5 5.5 7.5 12.5l4 2 2 4 2.5-3.5 3.5-10z" />
        <path d="M7.5 12.5 2.5 11l19-7.5" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/DhrubaDattaAnjan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.54 6.42A2.78 2.78 0 0 0 20.85 4.7C19.18 4 12 4 12 4s-7.18 0-8.85.7A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.69 1.72C4.82 20 12 20 12 20s7.18 0 8.85-.7a2.78 2.78 0 0 0 1.69-1.72A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dhruba-datta',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.03A9.36 9.36 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.3 2.75-1.03 2.75-1.03.54 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16"
      aria-label="Site Footer"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Left: Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2 md:w-1/3">
          <span className="text-base font-semibold text-gray-900 dark:text-white">Dhruba Datta</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} | All rights reserved.</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex justify-center md:justify-center gap-5 md:w-1/3 order-last md:order-none py-4 md:py-0">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={
                `p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-500 dark:text-gray-400 ` +
                (link.name === 'GitHub' ? 'hover:text-gray-900 dark:hover:text-white' : '') +
                (link.name === 'LinkedIn' ? 'hover:text-blue-600 dark:hover:text-blue-400' : '') +
                (link.name === 'Instagram' ? 'hover:text-pink-500 dark:hover:text-pink-400' : '') +
                (link.name === 'Telegram' ? 'hover:text-blue-400 dark:hover:text-blue-300' : '') +
                (link.name === 'YouTube' ? 'hover:text-red-500 dark:hover:text-red-400' : '')
              }
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right: Navigation */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-end md:w-1/3">
          {footerLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.footer>
  );
};

export default Footer;
