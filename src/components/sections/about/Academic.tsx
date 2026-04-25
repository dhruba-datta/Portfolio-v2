import { motion } from 'framer-motion';
import { TbLocationFilled } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi2";

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

const Academic = ({ isDark: _isDark = false }: AcademicProps) => {
  void _isDark;
  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Technology (BTech)",
      institution: "Delhi Technological University",
      duration: "AUG 2019 - JUL 2023",
      location: "New Delhi, India",
      grade: "CGPA: 8.22/10.00",
      field: "Software Engineering"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      duration: "JUL 2016 - AUG 2018",
      location: "Dhaka, Bangladesh",
      grade: "GPA: 5.00/5.00",
      field: "Field of Study: Science"
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Gregory's High School",
      duration: "JAN 2006 - JUN 2016",
      location: "Dhaka, Bangladesh",
      grade: "GPA: 5.00/5.00",
      field: "Field of Study: Science"
    }
  ];

  return (
    <section
      id="academic"
      className="py-12 sm:py-14 lg:py-16 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-slate-500 dark:text-slate-400">
              Education
            </h3>
            <h2 className="mt-2 sm:mt-3 text-slate-900 dark:text-white">
              Academic Background
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block bg-blue-500/20 dark:bg-blue-500/20" />

          {/* Mobile Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-1 lg:hidden bg-blue-500/20 dark:bg-blue-500/20" />

          {/* Education Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="lg:hidden relative pl-8">
                  {/* Mobile Timeline Dot */}
                  <motion.div
                    className="absolute left-[0.375rem] top-9 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full z-10 shadow-lg -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />

                  {/* Mobile Content */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {edu.duration}
                    </div>

                    <p className="font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </p>

                    <h4 className="font-semibold !text-blue-600 dark:!text-blue-400">
                      {edu.institution}
                    </h4>

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <HiAcademicCap className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{edu.grade.includes('CGPA') ? 'CGPA' : 'GPA'}:</span>
                          <span className="font-bold text-blue-600 dark:text-blue-400">
                            {edu.grade.replace('CGPA: ', '').replace('GPA: ', '')}
                          </span>
                        </div>
                      </div>

                      {edu.field && (
                        <div className="text-sm font-medium pl-1 text-slate-500 dark:text-slate-500">
                          {edu.field}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-center gap-8">
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:text-left lg:pl-12'}`}>
                    <div className="text-sm font-medium mb-2 text-slate-500 dark:text-slate-400">
                      {edu.duration}
                    </div>
                    <p className="font-bold mb-3 text-slate-900 dark:text-white">
                      {edu.degree}
                    </p>

                    <h4 className="font-semibold mb-1 !text-blue-600 dark:!text-blue-400">
                      {edu.institution}
                    </h4>
                    <div className={`flex items-center gap-2 mb-4 text-sm text-slate-500 dark:text-slate-400 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className={`absolute left-[calc(50%-6px)] -translate-y-2 ${index === 0 ? 'top-20' : 'top-16'} w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full z-10 shadow-lg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />

                  {/* Right Side - Grade Badge */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'} flex ${
                    index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                  } items-center`}>
                    <div className="px-5 py-4 rounded-2xl bg-white dark:bg-slate-950/90 border border-slate-200/70 dark:border-white/[0.08] backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-blue-500/[0.05] hover:border-blue-300/60 dark:hover:border-blue-400/25 transition-all duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-50 dark:bg-blue-500/10 ring-1 ring-blue-200/70 dark:ring-blue-400/20">
                          <HiAcademicCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>

                        <div className="flex-1">
                          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {edu.grade.includes('CGPA') ? 'CGPA' : 'GPA'}
                          </div>
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {edu.grade.replace('CGPA: ', '').replace('GPA: ', '')}
                          </div>
                          {edu.field && (
                            <div className="text-sm font-medium leading-tight mt-0.5 text-slate-500 dark:text-slate-400">
                              {edu.field}
                            </div>
                          )}
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
