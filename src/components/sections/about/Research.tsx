import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  conference: string;
  date: string;
  location: string;
  doi: string;
  status: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: 'scholarship' | 'technical' | 'competition' | 'research';
  icon: string;
}

interface ResearchProps {
  isDark?: boolean;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Skin Cancer Detection with Edge Devices Using YOLOv7 Deep CNN",
    authors: ["Dhruba Datta", "Harsh Prakash", "Priya Singh"],
    conference: "4th International Conference on Data Analytics & Management, 2023",
    date: "November 2023",
    location: "London Metropolitan University, London, UK",
    doi: "10.1007/978-981-99-6550-2_5",
    status: "Published"
  }
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "ICCR Government Scholarship",
    description: "Received the prestigious Indian Government Scholarship entailing full funded education and monthly stipend.",
    category: 'scholarship',
    icon: "graduation-cap"
  },
  {
    id: 2,
    title: "SEO-Optimized Portfolio Website",
    description: "Built a personal portfolio website that ranked on the first page of Google search results.",
    category: 'technical',
    icon: "rocket"
  },
  {
    id: 3,
    title: "LeetCode Achievement",
    description: "Solved 450+ problems with 3K+ reputation and 200K+ views, capturing coding enthusiasts worldwide.",
    category: 'technical',
    icon: "code"
  },
  {
    id: 4,
    title: "1st Position - Wall Magazine",
    description: "Secured 1st position among 250+ teams at DRMC National Science Festival '16.",
    category: 'competition',
    icon: "trophy"
  },
  {
    id: 5,
    title: "3rd Position - Science Project",
    description: "Achieved 3rd position out of 120 teams at SGHS Inter-School Science Festival '16.",
    category: 'competition',
    icon: "medal"
  }
];

// Animation Variants
const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const getCategoryColor = (category: string, isDark: boolean) => {
  switch (category) {
    case 'scholarship': return isDark ? 'from-yellow-400 to-amber-500' : 'from-yellow-500 to-amber-600';
    case 'technical': return isDark ? 'from-blue-400 to-cyan-500' : 'from-blue-500 to-cyan-600';
    case 'competition': return isDark ? 'from-purple-400 to-pink-500' : 'from-purple-500 to-pink-600';
    case 'research': return isDark ? 'from-green-400 to-teal-500' : 'from-green-500 to-teal-600';
    default: return isDark ? 'from-gray-400 to-gray-500' : 'from-gray-500 to-gray-600';
  }
};

function AchievementIcon({ icon, category, isDark }: { icon: string; category: string; isDark: boolean }) {
  if (icon === 'rocket') {
    return (
      <svg className="w-6 h-6" fill="none" stroke={isDark ? "#38bdf8" : "#0ea5e9"} strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a5.5 5.5 0 0 1-5.96-5.96l.2-1.13a2 2 0 0 1 1.67-1.67l1.13-.2a5.5 5.5 0 0 1 5.96 5.96l-.2 1.13a2 2 0 0 1-1.67 1.67l-1.13.2z"/>
        <circle cx="12" cy="12" r="2" fill={isDark ? '#38bdf8' : '#0ea5e9'} />
      </svg>
    );
  }
  if (icon === 'code') {
    return (
      <svg className="w-6 h-6" fill="none" stroke={isDark ? "#38bdf8" : "#0ea5e9"} strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
      </svg>
    );
  }
  if (icon === 'graduation-cap') {
    return (
      <svg className="w-6 h-6" fill="none" stroke={category === 'scholarship' ? (isDark ? '#ef4444' : '#dc2626') : (isDark ? '#fbbf24' : '#f59e42')} strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0c-4.418 0-8-1.343-8-3V9"/>
      </svg>
    );
  }
  if (icon === 'trophy') {
    return (
      <svg className="w-6 h-6" fill="none" stroke={isDark ? '#a78bfa' : '#8b5cf6'} strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4m0-4a7 7 0 0 1-7-7V5h14v5a7 7 0 0 1-7 7z"/>
      </svg>
    );
  }
  if (icon === 'medal') {
    return (
      <svg className="w-6 h-6" fill="none" stroke={isDark ? '#f472b6' : '#ec4899'} strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" strokeWidth="1.5"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l4 4 4-4"/>
      </svg>
    );
  }
  return null;
}

const ResearchAndAchievements = ({ isDark = false }: ResearchProps) => {
  // Animation only on first visit
  const [timelineAnimated] = useState(() => {
    return typeof window !== 'undefined' && !window.sessionStorage.getItem('timelineAnimated');
  });
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineAnimated) {
      window.sessionStorage.setItem('timelineAnimated', 'true');
    }
  }, [timelineAnimated]);

  return (
    <section className={`py-12 sm:py-16 md:py-20 transition-colors duration-300 min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-[11px] text-slate-500 dark:text-slate-400">
              Research & Recognition
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Publications & Achievements
            </h2>
            
          </motion.div>
        </motion.div>
        <div className="flex flex-col md:grid md:grid-cols-[1.3fr_0.7fr] gap-8 sm:gap-10 md:gap-20">
          {/* Publications Timeline */}
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={timelineAnimated ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={timelineAnimated ? { duration: 1, ease: "easeInOut" } : { duration: 0 }}
            className={`relative pb-4`}
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-5 tracking-tight flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}> 
              Publications
            </h3>
            <motion.ol
              initial="hidden"
              animate={timelineAnimated ? "visible" : "visible"}
              variants={timelineAnimated ? timelineVariants : {}}
              className="relative border-l-4 border-gray-200 dark:border-gray-700 mt-2 space-y-8 sm:space-y-10"
            >
              {publications.map((pub, index) => (
                <motion.li
                  key={pub.id}
                  className="relative pl-7"
                  variants={itemVariants}
                  transition={{
                    duration: 0.75,
                    ease: [0.42, 0, 0.58, 1]
                  }}
                >
                  {/* Timeline Dot: styled and animated like achievement section */}
                  <motion.span
                    className="absolute left-[-8.5px] top-2 w-3 h-3 rounded-full shadow-md bg-gradient-to-br from-blue-500 to-cyan-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 300 }}
                    viewport={{ once: true }}
                  />
                  {/* Timeline Content ... */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 leading-tight text-blue-600 dark:text-blue-400 group-hover:underline">
                      <a href={`https://link.springer.com/chapter/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                    </h4>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm mb-2">
                      <div className={`flex flex-wrap items-center gap-1 sm:gap-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}> 
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <span className="font-medium">Authors:</span> {pub.authors.map((author, i) => (
                          <span key={i} className={author === "Dhruba Datta" ? "font-bold" : ""}>{author}{i < pub.authors.length - 1 ? ', ' : ''}</span>
                        ))}
                      </div>
                      <div className={`flex flex-wrap items-center gap-1 sm:gap-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}> 
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        <span className="font-medium whitespace-nowrap">Conference:</span>
                        <span className="flex-1 break-words">{pub.conference}</span>
                      </div>
                      <div className={`flex flex-wrap items-center gap-1 sm:gap-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}> 
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span className="font-medium">Location:</span> {pub.location}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      <span className="font-medium text-blue-600 dark:text-blue-400 text-xs">DOI:</span>
                      <a href={`https://link.springer.com/chapter/${pub.doi}`} target="_blank" rel="noopener noreferrer" className={`font-mono text-xs hover:underline transition-colors duration-200 flex items-center gap-1 ${isDark ? 'text-blue-300' : 'text-blue-800'}`}> 
                        {pub.doi}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isDark ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-green-50 text-green-700 border border-green-200'}`}>{pub.status}</span>
                      <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-400'}`}>{pub.date}</span>
                    </div>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ol>
            <div className={`mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl ${isDark ? 'bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-700/50' : 'bg-gradient-to-br from-gray-50/80 to-blue-50/50 border border-gray-200/60'}`}>
              <p className={`text-xs sm:text-sm leading-relaxed italic text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "Bridging theoretical research with practical applications in Artificial Intelligence"
              </p>
            </div>
            <div className="mt-8 sm:mt-12">
              <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Research Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
                {[{ id: 1, area: "Computer Vision", color: "from-blue-500 to-cyan-500" },
                  { id: 2, area: "Artificial Intelligence", color: "from-purple-500 to-pink-500" },
                  { id: 3, area: "Machine Learning", color: "from-green-500 to-teal-500" },
                  { id: 4, area: "Natural Language Processing", color: "from-orange-500 to-red-500" }].map((interest) => (
                  <div key={interest.id} className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${interest.color} flex-shrink-0`} />
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{interest.area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Timeline */}
          <div className="relative pb-4">
            <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-5 tracking-tight flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}> 
              Achievements
            </h3>
            <motion.ol
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.12, delayChildren: 0.18 }}
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.18
                  }
                }
              }}
              className="relative border-l-4 border-gray-200 dark:border-gray-700 mt-2 space-y-8 sm:space-y-10"
            >
              {achievements.map((a, index) => (
                <motion.li
                  key={a.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-7 flex flex-col gap-1"
                >
                  <motion.span
                    className={`absolute left-[-8.5px] top-2 w-3 h-3 rounded-full shadow-md bg-gradient-to-br ${getCategoryColor(a.category, isDark)}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  >
                    <span className="flex items-center justify-center h-full w-full">
                      <AchievementIcon icon={a.icon} isDark={isDark} category={a.category} />
                    </span>
                  </motion.span>
                  <span className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white">{a.title}</span>
                  <span className={`text-xs mt-1 text-gray-500 dark:text-gray-400`}>{a.description}</span>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAndAchievements;
