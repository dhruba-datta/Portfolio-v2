import { motion } from 'framer-motion';
import Navigation from '../../components/ui/Navigation';
import Footer from '../../components/ui/Footer';

const features = [
  'Search & filter cryptocurrencies',
  'Latest crypto news',
  'Detailed crypto info',
  'Cross-platform',
];

const techStack = [
  'React',
  'Redux Toolkit',
  'Ant Design',
  'Rapid API',
];

const CryptoVersePage = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navigation isDark={false} toggleTheme={() => {}} />
    <main className="container-max-width py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">CryptoVerse 🔥</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Real-time crypto dashboard with news, market data, and a modern UI.
        </p>
        <a href="https://cryptoverse20.netlify.app/" target="_blank" rel="noopener" className="inline-block mt-6 px-6 py-2 bg-yellow-600 text-white rounded-lg font-semibold shadow hover:bg-yellow-700 transition">Live Demo</a>
        <a href="https://github.com/dhruba-datta/CryptoVerse" target="_blank" rel="noopener" className="ml-4 inline-block mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition">GitHub</a>
      </motion.div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Features</h2>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 text-left">
          {features.map(f => (
            <li key={f} className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-800 dark:text-gray-200 shadow-sm">
              {f}
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map(t => (
            <span key={t} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Screenshots</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder images, replace with real screenshots if available */}
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300 font-semibold">Screenshot 1</div>
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300 font-semibold">Screenshot 2</div>
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300 font-semibold">Screenshot 3</div>
        </div>
      </motion.section>
    </main>
    <Footer />
  </div>
);

export default CryptoVersePage;
