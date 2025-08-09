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
  technologies: string[];
  current: boolean;
}

const Experience = ({ isDark = false }: ExperienceProps) => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "Social Engagement Group",
      position: "Research & Development Lead",
      duration: "JAN 2025 - PRESENT",
      location: "Florida, United States",
      type: "Remote",
      current: true,
      description: [
        "Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Sanity and Contentful, enabling non-technical teams to manage content across 6+ production websites. Designed custom schemas and optimized GROQ queries, resulting in 40% faster content delivery.",
        "Delivered high-performance web applications using Next.js, React, and Tailwind CSS with advanced rendering strategies (SSG/SSR), achieving 25% increase in user engagement and 20% improvement in Core Web Vitals.",
        "Implemented TypeScript across full-stack codebases, reducing production defects by 15% and establishing type-safe development standards for enhanced code quality and maintainability.",
        "Enhanced team productivity via a scalable Monorepo architecture (Turborepo) and rigorous peer code reviews, contributing 40+ hours weekly while maintaining high engineering standards.",
        "Collaborated with cross-functional teams (Design, Product) to ship WCAG 2.1 AA-compliant, user-centered interfaces using Agile methodologies, managing sprints in Linear and coordinating communication via Slack.",
        "Optimized performance and SEO by implementing lazy loading, strategic code splitting, and adhering to SEO best practices, resulting in higher search rankings and better UX metrics."
      ],
      technologies: ["TypeScript", "Next.js", "Sanity CMS", "Contentful CMS", "Tailwind CSS", "Figma", "Turborepo", "Vercel AI SDK", "Agile", "Teamwork", "Research", "Problem-solving"]
    },
    {
      id: 2,
      company: "AfterQuery Experts",
      position: "AI Model Trainer",
      duration: "APR 2025 - PRESENT",
      location: "United States",
      type: "Remote",
      current: true,
      description: [
        "Leading AI model training initiatives to enhance coding capabilities and problem-solving efficiency through competitive programming methodologies.",
        "Developing advanced algorithms and data structures for machine learning applications, focusing on financial reasoning and computational optimization.",
        "Contributing to the improvement of AI models' performance in coding assessments and financial analysis tasks.",
        "Implementing best practices in algorithm design and optimization for large-scale AI training datasets."
      ],
      technologies: ["Python", "Competitive Programming", "Data Structures", "Algorithms", "AI Training", "Machine Learning", "Financial Analysis", "Problem-solving"]
    },
    {
      id: 3,
      company: "Kounsel",
      position: "SQA Engineer",
      duration: "JUN 2024 - MAR 2025",
      location: "California, United States",
      type: "Remote",
      current: false,
      description: [
        "Conducted comprehensive quality assurance and automation testing for Kounsel platform to ensure high standards and reliability.",
        "Developed and executed detailed test plans and test cases using Selenium for automated testing, reducing manual testing time by 60%.",
        "Utilized Jira for efficient bug tracking and project management, enhancing workflow efficiency and team collaboration.",
        "Collaborated with cross-functional teams to identify, document, and resolve issues promptly, maintaining product quality standards.",
        "Leveraged Bitbucket for version control and continuous integration to maintain code quality and streamlined deployment processes."
      ],
      technologies: ["Selenium", "Jira", "Bitbucket", "Kotlin", "MongoDB", "Docker", "Test Automation", "Quality Assurance"]
    },
    {
      id: 4,
      company: "Kingsley Engineering Service Co.",
      position: "Software Engineer",
      duration: "AUG 2023 - JUL 2024",
      location: "Dhaka, Bangladesh",
      type: "On-site",
      current: false,
      description: [
        "Redesigned the company's website for improved functionality and SEO, resulting in 45% increase in organic traffic and better user engagement.",
        "Developed micro websites, landing pages, and blog pages to enhance user experience and conversion rates.",
        "Created visually captivating interfaces with seamless navigation using modern web technologies and design principles.",
        "Leveraged comprehensive SEO strategies to boost online visibility and search engine rankings.",
        "Produced engaging social media content for brand promotion and digital marketing initiatives."
      ],
      technologies: ["Front-End Development", "Web Design", "WordPress", "SEO", "Digital Marketing", "UI/UX Design"]
    },
    {
      id: 5,
      company: "Revinns Limited",
      position: "Web Developer Intern",
      duration: "JUN 2022 - JUL 2022",
      location: "Dhaka, Bangladesh",
      type: "On-site",
      current: false,
      description: [
        "Gained practical experience in user interface design and front-end development through hands-on projects.",
        "Contributed to the development of micro websites, landing pages and web applications using modern technologies.",
        "Applied design principles to create visually captivating and user-centric interfaces with focus on usability.",
        "Utilized HTML and CSS for crafting seamless user experiences with attention to detail and best practices.",
        "Ensured compatibility across various devices and browsers through responsive design implementation."
      ],
      technologies: ["HTML", "CSS", "UI Design", "Responsive Design", "Figma", "Cross-browser Compatibility"]
    }
  ];

  return (
    <section 
      id="experience" 
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-[11px] text-slate-500 dark:text-slate-400">
              Professional Journey
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Work Experience
            </h2>
            
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Timeline Line - Hidden on mobile */}
          <div className={`absolute lg:left-[25.25rem] top-0 bottom-0 w-1 hidden lg:block ${
            isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col lg:flex-row lg:items-start gap-8"
              >
                {/* Left Side - Date and Company Info */}
                <div className="lg:w-96 lg:text-right lg:pr-8 flex-shrink-0">
                  <div className={`text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {exp.duration}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {exp.company}
                  </h3>
                  <div className={`flex flex-col lg:items-end gap-1 text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
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

                {/* Timeline Dot - Hidden on mobile */}
                <motion.div
                  className="absolute lg:left-[25rem] top-2.5 w-3 h-3 bg-blue-500 rounded-full z-10 shadow-lg hidden lg:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                >
                </motion.div>

                {/* Right Side - Job Details */}
                <div className="flex-1 lg:pl-8">
                  <div className="mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 mb-2">
                      <h4 className={`text-xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.position}
                      </h4>
                      {exp.current && (
                        <div className="flex items-center gap-2 bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0 w-fit">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Current</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className={`space-y-4 mb-6 leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.description.map((item, idx) => (
                      <p key={idx} className="text-sm lg:text-base">
                        {item}
                      </p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          isDark 
                            ? 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700' 
                            : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
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
