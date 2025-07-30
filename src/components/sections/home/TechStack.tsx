import { motion } from 'framer-motion';

interface TechStackProps {
  isDark?: boolean;
}

interface TechItem {
  name: string;
  icon: string;
  color?: string;
}

const TechStack = ({ isDark }: TechStackProps) => {
  // Technology categories for different cards
  const frontendTech: TechItem[] = [
    { name: "React", icon: "https://cdn.simpleicons.org/react", color: "#61DAFB" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", color: "#3178C6" },
    { name: "Next.js", icon: isDark ? "https://cdn.simpleicons.org/nextdotjs/ffffff" : "https://cdn.simpleicons.org/nextdotjs", color: "#000000" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss", color: "#06B6D4" },
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite", color: "#646CFF" },
    { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer", color: "#0055FF" },
  ];

  const backendTech: TechItem[] = [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", color: "#339933" },
    { name: "Express.js", icon: isDark ? "https://cdn.simpleicons.org/express/ffffff" : "https://cdn.simpleicons.org/express", color: "#000000" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", color: "#47A248" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql", color: "#4169E1" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python", color: "#3776AB" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma", color: "#2D3748" },
  ];

  const toolsTech: TechItem[] = [
    { name: "Git", icon: "https://cdn.simpleicons.org/git", color: "#F05032" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker", color: "#2496ED" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws", color: "#232F3E" },
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode", color: "#007ACC" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux", color: "#FCC624" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma", color: "#F24E1E" },
  ];

  // Infinite scrolling component for tech icons
  const TechScroll = ({ technologies, direction = 'left' }: { technologies: TechItem[], direction?: 'left' | 'right' }) => {
    const duplicatedTech = [...technologies, ...technologies];
    
    return (
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-3 items-center"
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className={`flex items-center gap-2 ${isDark ? 'bg-gray-800/30 border-gray-700/30' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-lg px-3 py-2 border flex-shrink-0`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 h-5"
              />
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  const countryFlags = [
    { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
    { code: "US", name: "USA", flag: "🇺🇸" },
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          
          {/* Card 1: Collaboration - Top Left */}
          <motion.div
            className={`${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border flex flex-col justify-between`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                I prioritize client collaboration, fostering open communication
              </p>
            </div>
            
            {/* Profile images row */}
            <div className="flex items-center gap-2 mt-6">
              <img
                src="/images/Headshot.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-500"
              />
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-gray-800"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Technologies - Top Center/Right (Spans 2 columns) */}
          <motion.div
            className={`lg:col-span-2 ${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Passionate about{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  cutting-edge
                </span>{' '}
                technologies
              </h3>
            </div>

            <div className="space-y-4">
              {/* First row of technologies */}
              <TechScroll technologies={frontendTech} direction="right" />
              
              {/* Second row of technologies */}
              <TechScroll technologies={backendTech} direction="left" />
              
              {/* Third row of technologies */}
              <TechScroll technologies={toolsTech} direction="right" />
            </div>
          </motion.div>

          {/* Card 3: Time Zone Communication - Bottom (Spans 2 columns) */}
          <motion.div
            className={`lg:col-span-2 ${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-semibold mb-2">I'm very flexible with time</h3>
              <h4 className="text-xl text-blue-400 mb-8">zone communications</h4>
              
              <div className="flex gap-3 mb-8">
                {countryFlags.map((country) => (
                  <motion.div
                    key={country.code}
                    className={`flex items-center gap-2 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'} rounded-lg px-4 py-3`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-bold">{country.code}</span>
                    <span className="text-sm font-medium">{country.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Remote</span>
              </div>
              <p className="font-semibold mt-1 text-lg">Bangladesh</p>
            </div>
          </motion.div>

          {/* Card 4: Current Project - Bottom Right */}
          <motion.div
            className={`${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
                </svg>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>The Inside Scoop</p>
              <h3 className="text-lg font-semibold">Currently building a Portfolio Application</h3>
            </div>

            <motion.button
              className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              View Recent work →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
