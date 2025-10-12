import { motion } from 'framer-motion';
import { MdOutlineWork } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

interface ExperienceProps {
  isDark?: boolean;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  description: string[];
  technologies: string[]; // kept in data shape, not rendered
  current: boolean;
  companyUrl?: string; // Make company URL optional
}

const Experience = ({ isDark = false }: ExperienceProps) => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Social Engagement Group",
      position: "Research & Development Lead",
      duration: "JUL 2025 - PRESENT",
      location: "Florida, United States",
      type: "Remote",
      current: true,
      companyUrl: "https://www.linkedin.com/company/social-engagement-group/",
      description: [
        "Lead research on emerging tools, technologies, and best practices to optimize workflows and enhance client outcomes.",
        "Design, develop, and deploy innovative automation solutions, including n8n workflows and AI-driven systems, to improve operational efficiency.",
        "Create and maintain detailed technical documentation in Confluence, driving knowledge sharing and team effectiveness.",
        "Collaborate seamlessly with cross-functional teams to streamline processes and contribute to marketing and content initiatives."
      ],
      technologies: ["TypeScript","Next.js","Sanity CMS","Contentful CMS","Tailwind CSS","Figma","Turborepo","Vercel AI SDK","Agile","Teamwork","Research","Problem-solving"]
    },
    {
      id: 2,
      company: "AfterQuery Experts",
      position: "AI Model Trainer",
      duration: "APR 2025 - JUN 2025",
      location: "California, United States",
      type: "Remote",
      current: true,
      companyUrl: "https://www.linkedin.com/company/afterquery-experts/",
      description: [
        "Develop and solve advanced competitive programming challenges to train and evaluate AI model coding capabilities.",
        "Analyze AI model performance, providing actionable feedback to refine reasoning and problem-solving.",
        "Implement optimized, efficient code solutions to benchmark and elevate AI model accuracy and efficiency.",
        "Document problem solutions and evaluation insights comprehensively to support collaborative AI research and innovation."
      ],
      technologies: ["Python","Competitive Programming","Data Structures","Algorithms","AI Training","Machine Learning","Financial Analysis","Problem-solving"]
    },
    {
      id: 3,
      company: "Kounsel",
      position: "SQA Engineer",
      duration: "JUN 2024 - MAR 2025",
      location: "California, United States",
      type: "Remote",
      current: false,
      companyUrl: "https://www.linkedin.com/company/kounsel",
      description: [
        "Owned QA processes and developed automation frameworks for both mobile and web platforms to ensure high reliability standards.",
        "Created comprehensive test plans, wrote detailed test cases, and maintained technical documentation to support quality assurance efforts.",
        "Managed database updates in MongoDB, handling new client information and approvals to streamline onboarding workflows.",
        "Collaborated with cross-functional teams using Jira and Bitbucket to track bugs, maintain CI pipelines, and ensure rapid issue resolution and code quality control."
      ],
      technologies: ["Selenium","Jira","Bitbucket","Kotlin","MongoDB","Docker","Test Automation","Quality Assurance"]
    },
    {
      id: 4,
      company: "Kingsley Engineering Service Co.",
      position: "Software Engineer",
      duration: "AUG 2023 - JUN 2024",
      location: "Dhaka, Bangladesh",
      type: "On-site",
      current: false,
      companyUrl: "https://www.linkedin.com/company/kingsley-engineering-service-company/",
      description: [
        "Redesigned the corporate website to enhance user experience and SEO, resulting in approximately 45% increase in organic traffic.",
        "Developed micro-sites, landing pages, and blogs to improve conversion rates and support marketing goals.",
        "Created compelling social media posters and business profiles using Illustrator, Notebook, and other design tools to boost brand presence.",
        "Delivered clean, modern UI with intuitive navigation, while executing SEO strategies to increase search visibility and drive demand generation."
      ],
      technologies: ["Front-End Development","Web Design","WordPress","SEO","Digital Marketing","UI/UX Design"]
    },
    {
      id: 5,
      company: "Revinns Limited",
      position: "Web Developer Intern",
      duration: "JUN 2022 - JUL 2022",
      location: "Dhaka, Bangladesh",
      type: "On-site",
      current: false,
      companyUrl: "https://www.linkedin.com/company/revinns/",
      description: [
        "Executed UI and front-end development on live projects, ensuring high usability and aesthetic appeal.",
        "Contributed to building micro-sites, landing pages, and web applications aligned with project goals.",
        "Applied core design principles to create responsive layouts using HTML and CSS best practices.",
        "Tested and verified cross-browser and device compatibility to deliver consistent user experiences."
      ],
      technologies: ["HTML","CSS","UI Design","Responsive Design","Figma","Cross-browser Compatibility"]
    }
  ];;

  return (
    <section id="experience" className="py-10 sm:py-12 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
              Professional Journey
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Work Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line - Hidden on mobile */}
          <div
            className={`absolute lg:left-[25.25rem] top-0 bottom-0 w-1 hidden lg:block ${
              isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
            }`}
          />

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className={`absolute left-2 top-0 bottom-0 w-1 lg:hidden ${
            isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="lg:hidden relative pl-8">
                  {/* Mobile Timeline Dot */}
                    <motion.div
                      className="absolute left-[0.375rem] top-9 w-2 h-2 bg-blue-500 rounded-full z-10 shadow-lg -translate-x-1/2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                      viewport={{ once: true }}
                    />
                  
                  {/* Mobile Content */}
                  <div className="space-y-2">
                    {/* Duration */}
                    <div className={`text-sm font-medium ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.duration}
                    </div>
                    
                    {/* Company Name */}
                    <h3 className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors duration-200 focus-override`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    
                    {/* Location and Type */}
                    <div className="flex flex-col gap-1">
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                    
                    {/* Position */}
                    <h4 className={`text-base sm:text-lg font-semibold ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {exp.position}
                    </h4>
                    
                    {/* Description */}
                    <ul
                      role="list"
                      className={`list-disc pl-5 space-y-2 mt-3 leading-relaxed ${
                        isDark ? 'text-gray-300 marker:text-blue-400' : 'text-gray-700 marker:text-blue-600'
                      } text-sm`}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Layout - Keep existing desktop layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-start gap-8">
                  {/* Left Side - Date and Company Info */}
                  <div className="lg:w-96 lg:text-right lg:pr-8 flex-shrink-0">
                    <div
                      className={`text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {exp.duration}
                    </div>
                                        <h3
                      className={`text-xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors duration-200 focus-override`}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <div
                      className={`flex flex-col lg:items-end gap-1 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 lg:justify-end">
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className="absolute lg:left-[25rem] top-2.5 w-3 h-3 bg-blue-500 rounded-full z-10 shadow-lg hidden lg:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  />

                  {/* Right Side - Job Details */}
                  <div className="flex-1 lg:pl-8">
                    <div className="mb-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 mb-2">
                        <h4
                            className={`text-xl font-bold ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}
                        >
                          {exp.position}
                        </h4>
                      </div>
                    </div>

                    {/* Description - bullet list */}
                    <ul
                      role="list"
                      className={`list-disc pl-5 space-y-3 mb-0 leading-relaxed ${
                        isDark ? 'text-gray-300 marker:text-blue-400' : 'text-gray-700 marker:text-blue-600'
                      } text-sm lg:text-base`}
                    >
                      {exp.description.map((item, idx) => (
                        <li key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
