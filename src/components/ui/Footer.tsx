import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaTelegramPlane, FaYoutube, FaGithub } from 'react-icons/fa';

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
    icon: <FaLinkedinIn className="w-5 h-5" />,
  },
    {
    name: 'GitHub',
    href: 'https://github.com/dhruba-datta',
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dhrubz_/',
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/dhruba_datta_anjan',
    icon: <FaTelegramPlane className="w-5 h-5" />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/DhrubaDattaAnjan',
    icon: <FaYoutube className="w-5 h-5" />,
  },

];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
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
                `p-3 rounded-lg transition-all duration-300 hover:scale-110 text-gray-500 dark:text-gray-400 min-h-[48px] min-w-[48px] flex items-center justify-center ` +
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
        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-6 gap-y-4 justify-center md:justify-end md:w-1/3">
          {footerLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base font-medium min-h-[44px] flex items-center px-2 py-2"
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
