import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContactCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  className?: string;
}

const ContactCTA = ({
  title = "Ready to bring your ideas to life?",
  description = "Let's collaborate and create something amazing together. I'm always excited to work on innovative projects.",
  primaryButtonText = "Start a Conversation",
  secondaryButtonText = "View All Projects",
  className = "",
}: ContactCTAProps) => {
  const navigate = useNavigate();

  return (
    <section className={`pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-10 sm:pb-12 md:pb-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 border border-blue-200 dark:border-blue-800"
          >
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
            Let's Connect
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-gray-100 leading-tight px-1 sm:px-2"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-1 sm:px-2"
          >
            {description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-1 sm:px-2"
          >
            {/* Primary Button */}
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-lg sm:rounded-xl font-medium sm:font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 focus-override w-full sm:w-auto min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm sm:text-base"
            >
              {primaryButtonText}
              <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-lg sm:rounded-xl font-medium sm:font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/10 focus-override w-full sm:w-auto min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm sm:text-base"
            >
              {secondaryButtonText}
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <div className="relative mt-8 sm:mt-12 md:mt-16">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-500 rounded-full blur-3xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
