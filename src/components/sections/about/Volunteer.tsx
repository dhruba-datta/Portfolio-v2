import { TbLocationFilled } from "react-icons/tb";
import { HiUserGroup, HiAcademicCap, HiHeart } from "react-icons/hi2";
import { motion } from 'framer-motion';

interface VolunteerProps {
  isDark?: boolean;
}

interface VolunteerExperience {
  id: number;
  organization: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  type: 'Leadership' | 'Education' | 'Social Impact';
}

const Volunteer = ({ isDark: _isDark = false }: VolunteerProps) => {
  void _isDark;
  const experiences: VolunteerExperience[] = [
    {
      id: 1,
      organization: "Dhrubotara Youth Development Foundation",
      position: "Youth Development Volunteer",
      duration: "SEP 2021 - AUG 2022",
      location: "New Delhi, India",
      type: "Leadership",
      description: "DYDF-INDIA combines student power of Bangladesh and India and works on skill development and social issues of both countries."
    },
    {
      id: 2,
      organization: "Private Tutoring",
      position: "Academic Mentor & Tutor",
      duration: "DEC 2018 - JUL 2019",
      location: "Dhaka, Bangladesh",
      type: "Education",
      description: "While applying for higher education, I assisted high school students of 10th and 12th grade in subjects including Maths, Physics, and ICT."
    },
    {
      id: 3,
      organization: "Help Bangladesh",
      position: "Co-founder",
      duration: "MAY 2017 - JUL 2019",
      location: "Dhaka, Bangladesh",
      type: "Social Impact",
      description: "Co-founded a group aimed to help and support street children, providing basic needs such as food & education for over hundred children with a team of more than fifty members."
    }
  ];

  const getTypeIcon = (type: string) => {
    const iconClass = "w-5 h-5 text-blue-600 dark:text-blue-400";
    switch (type) {
      case 'Leadership':
        return <HiUserGroup className={iconClass} />;
      case 'Education':
        return <HiAcademicCap className={iconClass} />;
      case 'Social Impact':
        return <HiHeart className={iconClass} />;
      default:
        return <HiHeart className={iconClass} />;
    }
  };

  return (
    <section
      id="volunteer"
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
              Community Service
            </h3>
            <h2 className="mt-2 sm:mt-3 text-slate-900 dark:text-white">
              Volunteer Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden lg:block bg-blue-500/20 dark:bg-blue-500/20" />

          {/* Mobile Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-1 lg:hidden bg-blue-500/20 dark:bg-blue-500/20" />

          {/* Volunteer Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
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
                      {exp.duration}
                    </div>

                    <h4 className="font-semibold !text-blue-600 dark:!text-blue-400">
                      {exp.organization}
                    </h4>

                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="font-bold text-slate-900 dark:text-white">
                      {exp.position}
                    </p>

                    <p className="text-sm leading-relaxed mt-3 text-slate-600 dark:text-slate-400">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-center gap-4 lg:gap-8">
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-2 lg:text-left lg:pl-12'}`}>
                    <div className="text-sm font-medium mb-2 text-slate-500 dark:text-slate-400">
                      {exp.duration}
                    </div>
                    <p className="font-bold mb-3 text-slate-900 dark:text-white">
                      {exp.position}
                    </p>
                    <h4 className="font-semibold mb-1 !text-blue-600 dark:!text-blue-400">
                      {exp.organization}
                    </h4>
                    <div className={`flex items-center gap-2 mb-4 text-sm text-slate-500 dark:text-slate-400 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <TbLocationFilled className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className={`absolute left-[calc(50%-6px)] -translate-y-2 ${index === 0 ? 'top-20' : 'top-16'} w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full z-10 shadow-lg hidden lg:block`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />

                  {/* Right Side - Impact Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'} flex ${
                    index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                  } items-center`}>
                    <div className="px-5 py-4 rounded-2xl bg-white dark:bg-slate-950/90 border border-slate-200/70 dark:border-white/[0.08] backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-blue-500/[0.08] dark:hover:shadow-blue-500/[0.05] hover:border-blue-300/60 dark:hover:border-blue-400/25 transition-all duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-50 dark:bg-blue-500/10 ring-1 ring-blue-200/70 dark:ring-blue-400/20">
                          {getTypeIcon(exp.type)}
                        </div>

                        <div className="flex-1">
                          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                            Impact
                          </div>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {exp.description}
                          </p>
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

export default Volunteer;
