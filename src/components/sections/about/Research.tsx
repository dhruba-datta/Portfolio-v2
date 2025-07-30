import { motion } from 'framer-motion';

interface ResearchProps {
  isDark?: boolean;
}

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

interface ResearchInterest {
  id: number;
  area: string;
  icon: string;
  color: string;
}

const Research = ({ isDark = false }: ResearchProps) => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "Skin Cancer Detection with Edge Devices Using YOLOv7 Deep CNN",
      authors: ["Dhruba Datta", "Harsh Prakash", "Priya Singh"],
      conference: "4th International Conference on Data Analytics & Management [ICDAM-2023]",
      date: "November 2023",
      location: "London Metropolitan University, London, UK",
      doi: "10.1007/978-981-99-6550-2_5",
      status: "Published"
    }
  ];

  const researchInterests: ResearchInterest[] = [
    {
      id: 1,
      area: "Computer Vision",
      icon: "eye",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      area: "Artificial Intelligence",
      icon: "brain",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      area: "Machine Learning",
      icon: "neural-network",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      area: "Natural Language Processing",
      icon: "message",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      id="research" 
      className="py-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className={`text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Research & Publications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}
          >
            Academic research and peer-reviewed publications
          </motion.p>
        </motion.div>

        {/* Two Column Layout with Divider */}
        <div className="grid lg:grid-cols-[350px,1px,1fr] gap-12 lg:gap-16">
          {/* Research Interests Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <div>
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Research Focus
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } leading-relaxed mt-2`}>
                  Core areas of interest and expertise
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {researchInterests.map((interest, index) => (
                <motion.div
                  key={interest.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${interest.color} flex-shrink-0`}></div>
                  <span className={`font-medium ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {interest.area}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className={`mt-8 p-4 rounded-xl ${
              isDark 
                ? 'bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-700/50' 
                : 'bg-gradient-to-br from-gray-50/80 to-blue-50/50 border border-gray-200/60'
            }`}>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed italic text-center`}>
                "Bridging theoretical research with practical applications in artificial intelligence"
              </p>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:block">
            <div className={`w-px h-full ${
              isDark 
                ? 'bg-gradient-to-b from-transparent via-gray-700/60 to-transparent' 
                : 'bg-gradient-to-b from-transparent via-gray-300/60 to-transparent'
            }`}></div>
          </div>

          {/* Publications Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <div>
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Publications
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } mt-2`}>
                  Peer-reviewed research contributions
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.article
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group ${
                    isDark 
                      ? 'bg-gradient-to-br from-gray-800/60 to-gray-700/40 border-gray-600/40 hover:from-gray-800/80 hover:to-gray-700/60 hover:border-gray-600/60' 
                      : 'bg-gradient-to-br from-white to-gray-50/80 border-gray-200/40 hover:from-white hover:to-blue-50/30 hover:border-blue-200/40 shadow-md hover:shadow-lg'
                  } backdrop-blur-sm border rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] cursor-default`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex items-center gap-1 text-xs ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {pub.date}
                    </div>
                    <div className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      isDark 
                        ? 'bg-green-500/15 text-green-400 border border-green-500/30' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {pub.status}
                    </div>
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-3 leading-tight ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300`}>
                    {pub.title}
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <span className="font-medium">Authors:</span>{' '}
                        {pub.authors.map((author, index) => (
                          <span key={index}>
                            {author === 'Dhruba Datta' ? (
                              <span className="font-bold">{author}</span>
                            ) : (
                              author
                            )}
                            {index < pub.authors.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <span className="font-medium">Conference:</span> {pub.conference}
                      </div>
                    </div>
                    
                    <div className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <span className="font-medium">Location:</span> {pub.location}
                      </div>
                    </div>
                    
                    <div className={`flex items-start gap-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">DOI:</span>
                        <a 
                          href="https://link.springer.com/chapter/10.1007/978-981-99-6550-2_5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-mono text-xs hover:underline transition-colors duration-200 flex items-center gap-1 ${
                            isDark ? 'hover:text-blue-300' : 'hover:text-blue-800'
                          }`}
                        >
                          {pub.doi}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
