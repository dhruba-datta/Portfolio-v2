import { motion } from 'framer-motion';

interface AboutProps {
  isDark?: boolean;
}

const About = ({ isDark }: AboutProps) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start justify-center pt-20 relative py-20 transition-colors duration-300"
    >
      {/* Minimal dot pattern background for aesthetic look */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle,rgba(203,213,225,0.25)_1px,transparent_1.5px)] dark:bg-[radial-gradient(circle,rgba(51,65,85,0.25)_1px,transparent_1.5px)] bg-[size:22px_22px] opacity-40"></div>
      <div className="container-max-width section-padding w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase"
              >
                MORE ABOUT ME
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
              >
                I'm Dhruba, a<br />
                creative <span className="text-pink-500 dark:text-pink-400 italic">engineer</span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
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
          </motion.div>

          {/* Right side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Single Background Card */}
              <motion.div
                className={`absolute w-80 h-96 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${
                  isDark 
                    ? "from-purple-800 to-purple-900" 
                    : "from-purple-500 to-purple-600"
                } border border-opacity-30 -z-10`}
                style={{
                  transform: 'translate(-30px, -30px) rotate(-8deg)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 0.95 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)
                      `
                    }}
                  ></div>
                </div>

                {/* Card Content */}
                <div className="relative h-full flex flex-col justify-center items-center p-8">
                  <motion.div 
                    className="relative mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-lg scale-110"></div>
                    
                    {/* Image Container */}
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/20 shadow-lg">
                      <img
                        src="/images/Headshot.png"
                        alt="I Lift"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div 
                    className="text-center text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <h3 className="text-3xl font-light tracking-wide mb-2">I Lift</h3>
                    <p className="text-white/80 text-sm font-light">
                      Staying strong and focused
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Main Card */}
              <motion.div 
                className={`relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                    : 'bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)
                      `
                    }}
                  ></div>
                </div>

                {/* Profile Image Container */}
                <div className="relative h-full flex flex-col justify-center items-center p-8">
                  <motion.div 
                    className="relative mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl scale-110"></div>
                    
                    {/* Image Container */}
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl">
                      <img
                        src="/images/Headshot.png"
                        alt="Dhruba Datta"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div 
                    className="text-center text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <h3 className="text-3xl font-light tracking-wide mb-2">I Code</h3>
                    <p className="text-white/80 text-sm font-light">
                      Building innovative solutions
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>

              {/* Static Floating Background Cards - for additional depth */}
              <motion.div 
                className={`absolute -bottom-4 -right-4 w-64 h-72 rounded-3xl ${
                  isDark ? 'bg-gray-600/10' : 'bg-gray-200/20'
                } -z-30`}
                animate={{
                  rotate: [0, -1, 0],
                  scale: [1, 1.01, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


