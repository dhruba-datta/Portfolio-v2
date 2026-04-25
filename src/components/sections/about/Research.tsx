import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LuUsers, LuBookOpen, LuMapPin, LuExternalLink } from "react-icons/lu";

interface Publication {
  id: number;
  title: string;
  authors: string[];
  conference: React.ReactNode;
  date: string;
  location: string;
  doi: string;
  status: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: "scholarship" | "technical" | "competition" | "research";
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
    conference: (
      <>
        4<sup>th</sup> International Conference on Data Analytics & Management,
        2023
      </>
    ),
    date: "November 2023",
    location: "London Metropolitan University, London, UK",
    doi: "10.1007/978-981-99-6550-2_5",
    status: "Published",
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "ICCR Government Scholarship",
    description:
      "Received the prestigious Indian Government Scholarship entailing full funded education and monthly stipend.",
    category: "scholarship",
    icon: "graduation-cap",
  },
  {
    id: 2,
    title: "LeetCode Achievement",
    description:
      "Solved 500+ problems with 3K+ reputation and 250K+ views, capturing coding enthusiasts worldwide.",
    category: "technical",
    icon: "code",
  },
  {
    id: 3,
    title: "SEO-Optimized Portfolio Website",
    description:
      "Built a personal portfolio website that ranked on the first page of Google search results.",
    category: "technical",
    icon: "rocket",
  },

  {
    id: 4,
    title: "Science Fair Achievements",
    description:
      "Secured 1st place out of 250+ teams (DRMC National Science Festival 2016) and 3rd place out of 120 teams (SGHS Inter-School Science Festival 2016).",
    category: "competition",
    icon: "trophy",
  },
];

// Animation Variants
const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};



const ResearchAndAchievements = ({ isDark = false }: ResearchProps) => {
  // Animation only on first visit
  const [timelineAnimated] = useState(() => {
    return (
      typeof window !== "undefined" &&
      !window.sessionStorage.getItem("timelineAnimated")
    );
  });
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineAnimated) {
      window.sessionStorage.setItem("timelineAnimated", "true");
    }
  }, [timelineAnimated]);

  return (
    <section
      className="py-12 sm:py-14 lg:py-16 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-slate-500 dark:text-slate-400">
              Research & Recognition
            </h3>
            <h2 className="mt-2 sm:mt-3 text-slate-900 dark:text-white">
              Publications & Achievements
            </h2>
          </motion.div>
        </motion.div>
        <div className="flex flex-col lg:grid lg:grid-cols-[1.3fr_0.7fr] gap-6 sm:gap-8 lg:gap-20">
          {/* Publications Timeline */}
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0 }}
            animate={
              timelineAnimated ? { opacity: 1 } : { opacity: 1 }
            }
            transition={
              timelineAnimated
                ? { duration: 1, ease: "easeInOut" }
                : { duration: 0 }
            }
            className={`relative pb-4`}
          >
            <h4
              className={`font-bold mb-3 sm:mb-4 lg:mb-5 tracking-tight flex items-center gap-2 ${
                isDark ? "!text-white" : "text-slate-900"
              }`}
            >
              Publications
            </h4>

            {/* Mobile Timeline Line for Publications */}
            <div className="absolute left-2 top-9 bottom-4 w-1 sm:hidden bg-blue-500/20 dark:bg-blue-500/20"></div>

            <motion.ol
              initial="hidden"
              animate={timelineAnimated ? "visible" : "visible"}
              variants={timelineAnimated ? timelineVariants : {}}
              className="relative border-l-0 sm:border-l-4 border-blue-500/20 dark:border-blue-500/20 mt-2 space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {publications.map((pub, index) => (
                <motion.li
                  key={pub.id}
                  className="relative pl-8 sm:pl-7"
                  variants={itemVariants}
                  transition={{
                    duration: 0.75,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                >
                  {/* Timeline Dot: styled and animated like achievement section */}
                  <motion.span
                    className="absolute left-[0.375rem] sm:left-[-8px] top-2 w-2 sm:w-3 h-2 sm:h-3 rounded-full shadow-md bg-blue-500 dark:bg-blue-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                  />
                  {/* Timeline Content ... */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <h4 className="text-base sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 leading-tight text-blue-600 dark:text-blue-400 group-hover:underline">
                      <a
                        href={`https://link.springer.com/chapter/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-override"
                      >
                        {pub.title}
                      </a>
                    </h4>
                    <div className="flex flex-col gap-1.5 text-xs sm:text-xs lg:text-sm mb-3">
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuUsers className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium mr-1.5">Authors:</span>
                          {pub.authors.map((author, i) => (
                            <span
                              key={i}
                              className={
                                author === "Dhruba Datta" ? "font-bold" : ""
                              }
                            >
                              {author}
                              {i < pub.authors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuBookOpen className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium mr-1.5">
                            Conference:
                          </span>
                          <span>{pub.conference}</span>
                        </div>
                      </div>
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuMapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium mr-1.5">Location:</span>{" "}
                          <span>{pub.location}</span>
                        </div>
                      </div>
                      <div
                        className={`flex items-start gap-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <LuExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400 mt-px sm:mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-blue-600 dark:text-blue-400 mr-1.5">
                            DOI:
                          </span>
                          <a
                            href={`https://link.springer.com/chapter/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-mono hover:underline transition-colors duration-200 focus-override ${
                              isDark ? "text-blue-300" : "text-blue-800"
                            }`}
                          >
                            {pub.doi}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-xs font-semibold rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-400/30">
                        {pub.status}
                      </span>
                      <span className="text-xs sm:text-xs text-slate-500 dark:text-slate-400">
                        {pub.date}
                      </span>
                    </div>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ol>
            <div className="mt-6 sm:mt-8 lg:mt-12 hidden sm:block">
              <h4
                className={`font-bold mb-2 sm:mb-3 ${
                  isDark ? "!text-white" : "text-slate-900"
                }`}
              >
                Research Interests
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-4 lg:gap-x-4 gap-y-1.5 sm:gap-y-2 lg:gap-y-3">
                {[
                  {
                    id: 1,
                    area: "Artificial Intelligence",
                  },
                  {
                    id: 2,
                    area: "Machine Learning",
                  },
                  {
                    id: 5,
                    area: "Generative AI",
                  },
                  {
                    id: 3,
                    area: "Computer Vision",
                  },
                  {
                    id: 4,
                    area: "Large Language Models",
                  },
                  {
                    id: 6,
                    area: "Natural Language Processing",
                  },
                ].map((interest) => (
                  <div
                    key={interest.id}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                    <p className="whitespace-nowrap text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      {interest.area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Timeline */}
          <div className="relative pb-4">
            <h4
              className={`font-bold mb-3 sm:mb-4 lg:mb-5 tracking-tight flex items-center gap-2 ${
                isDark ? "!text-white" : "text-slate-900"
              }`}
            >
              Achievements
            </h4>

            {/* Mobile Timeline Line for Achievements */}
            <div className="absolute left-2 top-8 bottom-2 w-1 sm:hidden bg-blue-500/20 dark:bg-blue-500/20"></div>

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
                    delayChildren: 0.18,
                  },
                },
              }}
              className="relative border-l-0 sm:border-l-4 border-blue-500/20 dark:border-blue-500/20 mt-2 space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {achievements.map((a, index) => (
                <motion.li
                  key={a.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 sm:pl-7 flex flex-col gap-1"
                >
                  <motion.span
                    className="absolute left-[0.375rem] sm:left-[-8px] top-1 w-2 sm:w-3 h-2 sm:h-3 rounded-full shadow-md bg-blue-500 dark:bg-blue-400"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                  />
                  <span className="font-semibold text-sm sm:text-sm lg:text-base text-gray-800 dark:text-white">
                    {a.title}
                  </span>
                  <p
                    className={`text-xs sm:text-sm mt-0.5 sm:mt-1 text-gray-500 dark:text-gray-400`}
                  >
                    {a.description}
                  </p>
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
