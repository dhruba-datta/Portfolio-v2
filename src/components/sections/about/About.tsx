import { motion } from 'framer-motion';

interface AboutProps {
  isDark?: boolean;
}

// Main About component
const About = ({ isDark }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations
        delayChildren: 0.2,
      },
    },
  };

  // Fixed: Remove transition from variants to avoid TypeScript conflicts
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-start justify-center pt-32 relative py-8 pb-20 transition-colors duration-300"
    >
      {/* Minimal dot pattern background for aesthetic look */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle,rgba(203,213,225,0.25)_1px,transparent_1.5px)] dark:bg-[radial-gradient(circle,rgba(51,65,85,0.25)_1px,transparent_1.5px)] bg-[size:22px_22px] opacity-40"></div>
      
      <div className="container-max-width section-padding w-full pt-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase"
              >
                MORE ABOUT ME
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
              >
                I'm Dhruba, a<br />
                creative <span className="text-pink-500 dark:text-pink-400 italic">engineer</span>
              </motion.h2>
            </div>
            
            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <p>
                I'm Dhruba Datta, a proactive full-stack developer passionate 
                about creating dynamic web experiences. From frontend to 
                backend, I thrive on solving complex problems with clean, 
                efficient code. My expertise spans React, TypeScript, and WordPress, 
                and I'm always eager to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and 
                staying curious. Life's about balance, and I love embracing 
                every part of it.
              </p>
              <p className="font-medium">
                I believe in waking up each day eager to make a difference!
              </p>
            </motion.div>
          </div>

          {/* Right side - Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className={`w-full max-w-xs overflow-hidden rounded-3xl p-1 shadow-2xl transition-colors duration-300 transform-gpu
                ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400'
                }
              `}
            >
              <div className="relative w-full h-full aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src="/images/your-photo.jpg" // <<< Replace this path with your actual image path
                  alt="Dhruba Datta"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;