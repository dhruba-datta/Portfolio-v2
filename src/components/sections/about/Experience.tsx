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
        "Architected CMS-driven reusable pagebuilder blocks with Sanity & Contentful; optimized GROQ queries for faster content delivery.",
        "Delivered high-performance Next.js/React apps (SSG/SSR), improving engagement and Core Web Vitals.",
        "Implemented TypeScript end-to-end to reduce production defects and improve maintainability.",
        "Scaled team productivity with Turborepo monorepo and rigorous peer reviews (40+ hours/week contribution).",
        "Shipped WCAG 2.1 AA-compliant UI with Agile sprints in Linear and collaboration via Slack.",
        "Boosted SEO & performance with lazy loading, code splitting, and best-practice SEO."
      ],
      technologies: ["TypeScript","Next.js","Sanity CMS","Contentful CMS","Tailwind CSS","Figma","Turborepo","Vercel AI SDK","Agile","Teamwork","Research","Problem-solving"]
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
        "Lead AI model training to enhance coding capabilities using competitive programming methodologies.",
        "Develop algorithms/data structures for ML use cases focusing on financial reasoning & optimization.",
        "Improve model performance on coding assessments and financial analysis tasks.",
        "Apply best practices for large-scale training dataset optimization."
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
      description: [
        "Owned QA & automation to uphold reliability standards across the Kounsel platform.",
        "Built Selenium test plans/cases, cutting manual testing time by ~60%.",
        "Used Jira for robust bug tracking and workflow visibility.",
        "Partnered with cross-functional teams to resolve issues quickly.",
        "Leveraged Bitbucket for CI and code quality controls."
      ],
      technologies: ["Selenium","Jira","Bitbucket","Kotlin","MongoDB","Docker","Test Automation","Quality Assurance"]
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
        "Redesigned corporate site to improve UX & SEO; increased organic traffic by ~45%.",
        "Built micro-sites, landing pages, and blogs to lift conversions.",
        "Shipped clean UI with intuitive navigation and modern patterns.",
        "Executed SEO strategies to raise search visibility.",
        "Produced social content for brand & demand gen."
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
      description: [
        "Hands-on UI and front-end development across real projects.",
        "Contributed to micro-sites, landing pages, and web apps.",
        "Applied core design principles for usable, attractive UIs.",
        "Built responsive layouts with HTML & CSS best practices.",
        "Verified cross-browser/device compatibility."
      ],
      technologies: ["HTML","CSS","UI Design","Responsive Design","Figma","Cross-browser Compatibility"]
    }
  ];

  return (
    <section id="experience" className="py-20 transition-colors duration-300">
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
          <div
            className={`absolute lg:left-[25.25rem] top-0 bottom-0 w-1 hidden lg:block ${
              isDark ? 'bg-blue-500/30' : 'bg-blue-500/20'
            }`}
          />

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
                    {exp.company}
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

                {/* Timeline Dot - Hidden on mobile */}
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
                          isDark ? 'text-white' : 'text-gray-900'
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

                  {/* Skills/Technologies section removed as requested */}
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
