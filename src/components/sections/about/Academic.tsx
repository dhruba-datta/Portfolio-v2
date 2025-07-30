import { motion } from 'framer-motion';

interface AcademicProps {
  isDark?: boolean;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  grade: string;
  field: string;
  achievements?: string[];
}

const Academic = ({ isDark = false }: AcademicProps) => {
  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Technology (BTech)",
      institution: "Delhi Technological University",
      duration: "AUG 2019 - JUL 2023",
      location: "New Delhi, India",
      grade: "CGPA: 8.22/10.00",
      field: "Department of Software Engineering"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      duration: "JUL 2016 - AUG 2018",
      location: "Dhaka, Bangladesh",
      grade: "GPA: 5.00/5.00",
      field: ""
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Gregory's High School",
      duration: "JAN 2006 - JUN 2016",
      location: "Dhaka, Bangladesh",
      grade: "GPA: 5.00/5.00",
      field: ""
    }
  ];

  return (
    <section
      id="academic"
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
            Academic Background
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-lg mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } max-w-3xl mx-auto`}
          >
            Educational journey and academic achievements
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Timeline Line - Hidden on mobile */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block ${
            isDark ? 'bg-green-500/30' : 'bg-green-500/20'
          }`}></div>

          {/* Education Items */}
          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8"
              >
                {/* Left Side Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:text-left lg:pl-12'}`}>
                  <div className={`text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {edu.duration}
                  </div>
                  <h4 className={`text-lg lg:text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.degree}
                  </h4>
                  {edu.field && (
                    <div className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      isDark 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-green-500/20 text-green-600'
                    } mb-4`}>
                      {edu.field}
                    </div>
                  )}
                  <h3 className={`text-lg lg:text-xl font-semibold mb-1 ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {edu.institution}
                  </h3>
                  <div className={`flex items-center gap-2 mb-4 text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  } ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Timeline Dot - Hidden on mobile */}
                <motion.div
                  className={`absolute left-[calc(50%-6px)] -translate-y-2 ${index === 0 ? 'top-20' : 'top-16'} w-3 h-3 bg-green-500 rounded-full z-10 shadow-lg hidden lg:block`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                >
                </motion.div>

                {/* Right Side - CGPA Badge */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'} flex ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                } items-center`}>
                  <div className={`px-5 py-4 rounded-2xl ${
                    isDark 
                      ? 'bg-gray-800/50 border border-gray-700 text-gray-200' 
                      : 'bg-white border border-gray-200 text-gray-700 shadow-lg'
                  } hover:shadow-xl transition-all duration-300`}>
                    {/* 2 Column Layout */}
                    <div className="flex items-center gap-3">
                      {/* First Column - Icon */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDark ? 'bg-green-500/20' : 'bg-green-50'
                      }`}>
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                        </svg>
                      </div>
                      
                      {/* Second Column - 2 Rows of Text */}
                      <div className="flex-1">
                        {/* Row 1 - Label */}
                        <div className={`text-xs font-medium ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          CGPA
                        </div>
                        {/* Row 2 - Score */}
                        <div className={`text-lg font-bold ${
                          isDark ? 'text-green-500' : 'text-green-700'
                        }`}>
                          {edu.grade.replace('CGPA: ', '').replace('GPA: ', '')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
