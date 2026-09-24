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
  location?: string;
  /** Work mode, with employment type where relevant (e.g. "Remote · Part-time"). */
  type: string;
  description: string[];
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
      type: "Remote · Full-time",
      current: true,
      companyUrl: "https://www.linkedin.com/company/social-engagement-group/",
      description: [
        "Built an AI lead-qualification system that handles 100+ leads a week and cut response time from 24 hours to under 2 hours.",
        "Designed and deployed n8n and LLM workflows for lead intake, content ideation, landing pages and email outreach, including a prospecting pipeline that researches, scores and verifies every lead before contact.",
        "Architected and shipped lead-capture websites, including a multi-location build that generates 19 location pages from a single data model, and led domain migrations.",
        "Own SEO and site performance for the agency's website, reaching 17.3K organic clicks from 309K impressions a quarter, and run weekly Search Console reporting.",
        "Led the plan to move a client's online orders onto its own site through a delivery-platform integration, and produced pitch and marketing-plan decks.",
        "Audited a CRM sales pipeline and scoped its due-diligence automation into a delivery-ready backlog.",
      ],
    },
    {
      id: 2,
      company: "Optify Transformation Partners",
      position: "Product & Operations Lead",
      duration: "APR 2026 - PRESENT",
      location: "New Jersey, United States",
      type: "Remote · Part-time",
      current: true,
      companyUrl: "https://www.linkedin.com/company/optify-ll-bt/",
      description: [
        "Lead product and operations for a multi-tenant voice AI platform and an e-commerce brand, owning the roadmap and sprint planning.",
        "Shaped the architecture across real-time voice agents, automation workflows, multi-tenant data with row-level security, subscription billing and guided client onboarding.",
        "Drove security hardening, including row-level security, webhook signature verification and encrypted OAuth tokens, and diagnosed production incidents.",
        "Run operations and growth for the online store: catalogue and checkout optimisation, SEO, email campaigns and short-form video.",
        "Wrote proposals, contracts and pricing, hired and mentored a sales trainee, and built brand design systems and operating documentation.",
      ],
    },
    {
      id: 4,
      company: "AfterQuery Experts",
      position: "AI Model Trainer",
      duration: "APR 2025 - JUN 2025",
      location: "California, United States",
      type: "Remote",
      current: false,
      companyUrl: "https://www.linkedin.com/company/afterquery-experts/",
      description: [
        "Wrote and solved advanced competitive-programming problems used to train and evaluate the coding ability of large language models.",
        "Reviewed model solutions for correctness and reasoning, and gave feedback that sharpened how the models approach hard problems.",
        "Wrote optimised reference solutions that set the bar for model accuracy and efficiency.",
        "Documented solutions and evaluation findings for the research team.",
      ],
    },
    {
      id: 5,
      company: "Kounsel",
      position: "SQA Engineer",
      duration: "JUN 2024 - MAR 2025",
      location: "California, United States",
      type: "Remote",
      current: false,
      companyUrl: "https://www.linkedin.com/company/kounsel",
      description: [
        "Built automated test suites and regression pipelines for a telehealth platform across web and mobile.",
        "Owned the QA process end to end and built the test automation frameworks for both the mobile and web apps.",
        "Wrote the test plans, test cases and technical documentation that each release was checked against.",
        "Managed client onboarding data in MongoDB, handling new client records and approvals.",
        "Worked with engineering in Jira and Bitbucket to track defects, keep CI pipelines healthy and get fixes shipped quickly.",
      ],
    },
    {
      id: 6,
      company: "Kingsley Engineering Service Co.",
      position: "Software Engineer",
      duration: "AUG 2023 - JUN 2024",
      location: "Dhaka, Bangladesh",
      type: "On-site",
      current: false,
      companyUrl: "https://www.linkedin.com/company/kingsley-engineering-service-company/",
      description: [
        "Redesigned the corporate website for a clearer experience and stronger SEO, growing organic traffic by about 45%.",
        "Built micro-sites, landing pages and a blog to support marketing campaigns and lift conversions.",
        "Led the SEO strategy that raised search visibility and drove inbound demand.",
        "Designed social media campaigns and business profiles in Adobe Illustrator to strengthen the brand.",
      ],
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-14 lg:py-16 transition-colors duration-300">
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
            <p className="eyebrow text-slate-500 dark:text-slate-400">
              Professional Journey
            </p>
            <h2 className="mt-2 sm:mt-3 text-slate-900 dark:text-white">
              Work Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line - Hidden on mobile */}
          <div className="absolute lg:left-[25.25rem] top-0 bottom-0 w-1 hidden lg:block bg-blue-500/20 dark:bg-sky-500/20" />

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className="absolute left-2 top-0 bottom-0 w-1 lg:hidden bg-blue-500/20 dark:bg-sky-500/20"></div>

          {/* Experience Items */}
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
                      className="absolute left-[0.375rem] top-9 w-2 h-2 bg-blue-500 dark:bg-sky-400 rounded-full z-10 shadow-lg -translate-x-1/2"
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
                    <h4 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold ${
                      isDark ? 'dark:!text-white' : 'text-gray-900'
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
                    </h4>
                    
                    {/* Location and Type */}
                    <div className="flex flex-col gap-1">
                      {exp.location && (
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      )}
                      <div className={`flex items-center gap-2 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                    
                    {/* Position */}
                    <h4 className={`text-base sm:text-lg font-semibold ${
                      isDark ? 'dark:!text-blue-400' : 'text-blue-600'
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
                                        <h4
                      className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 ${
                        isDark ? 'dark:!text-white' : 'text-gray-900'
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
                    </h4>
                    <div
                      className={`flex flex-col lg:items-end gap-1 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {exp.location && (
                      <div className="flex items-center gap-2 lg:justify-end">
                        <TbLocationFilled className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      )}
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MdOutlineWork className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <motion.div
                    className="absolute lg:left-[25rem] top-2.5 w-3 h-3 bg-blue-500 dark:bg-sky-400 rounded-full z-10 shadow-lg hidden lg:block"
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
                            className={`text-xl sm:text-2xl font-bold ${
                              isDark ? 'dark:!text-blue-400' : 'text-blue-600'
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
