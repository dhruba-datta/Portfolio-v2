interface AchievementsProps {
  isDark?: boolean;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: 'scholarship' | 'technical' | 'competition' | 'research';
  icon: string;
}

const Achievements = ({ isDark = false }: AchievementsProps) => {
  // Arrange cards: [2,3,1,4,5] so scholarship is center
  const achievements: Achievement[] = [
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
      id: 1,
      title: "ICCR Government Scholarship",
      description: "Received the prestigious Indian Government Scholarship entailing full funded education and monthly stipend.",
      category: 'scholarship',
      icon: "graduation-cap"
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



  // Returns Tailwind gradient string for each category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'scholarship':
        return isDark ? 'from-yellow-400 to-amber-500' : 'from-yellow-500 to-amber-600';
      case 'technical':
        return isDark ? 'from-blue-400 to-cyan-500' : 'from-blue-500 to-cyan-600';
      case 'competition':
        return isDark ? 'from-purple-400 to-pink-500' : 'from-purple-500 to-pink-600';
      case 'research':
        return isDark ? 'from-green-400 to-teal-500' : 'from-green-500 to-teal-600';
      default:
        return isDark ? 'from-gray-400 to-gray-500' : 'from-gray-500 to-gray-600';
    }
  };



  return (
    <section
      id="achievements"
      className="py-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Achievements
          </h2>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            Notable accomplishments and recognitions
          </p>
        </div>

        {/* Achievements Row */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-10">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`relative px-5 py-4 rounded-2xl border flex flex-col justify-between w-[200px] md:w-[220px] lg:w-[240px] h-[340px] md:h-[360px] lg:h-[380px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
                ${isDark ? 'bg-gray-800/80 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-700'}
                ${achievement.category === 'scholarship' ? 'z-10 scale-105 shadow-2xl ring-4 ring-amber-200/40' : 'z-0'}
              `}
              style={{ minWidth: 200, maxWidth: 260 }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
                  achievement.category
                )} opacity-10 pointer-events-none rounded-2xl`}
              />
              {/* Icon Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mt-6 mb-2 relative z-10
                  ${achievement.category === 'scholarship'
                    ? isDark ? 'bg-red-500/30' : 'bg-red-100'
                    : isDark ? 'bg-blue-500/20' : 'bg-blue-50'}
                `}
              >
                {/* Professional SVG icons */}
                {achievement.icon === 'rocket' && (
                  <svg className="w-7 h-7" fill="none" stroke={isDark ? '#38bdf8' : '#0ea5e9'} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a5.5 5.5 0 0 1-5.96-5.96l.2-1.13a2 2 0 0 1 1.67-1.67l1.13-.2a5.5 5.5 0 0 1 5.96 5.96l-.2 1.13a2 2 0 0 1-1.67 1.67l-1.13.2z"/>
                    <circle cx="12" cy="12" r="2" fill={isDark ? '#38bdf8' : '#0ea5e9'} />
                  </svg>
                )}
                {achievement.icon === 'code' && (
                  <svg className="w-7 h-7" fill="none" stroke={isDark ? '#38bdf8' : '#0ea5e9'} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
                  </svg>
                )}
                {achievement.icon === 'graduation-cap' && (
                  <svg className="w-7 h-7" fill="none" stroke={achievement.category === 'scholarship' ? (isDark ? '#ef4444' : '#dc2626') : (isDark ? '#fbbf24' : '#f59e42')} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0c-4.418 0-8-1.343-8-3V9"/>
                  </svg>
                )}
                {achievement.icon === 'trophy' && (
                  <svg className="w-7 h-7" fill="none" stroke={isDark ? '#a78bfa' : '#8b5cf6'} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4m0-4a7 7 0 0 1-7-7V5h14v5a7 7 0 0 1-7 7z"/>
                  </svg>
                )}
                {achievement.icon === 'medal' && (
                  <svg className="w-7 h-7" fill="none" stroke={isDark ? '#f472b6' : '#ec4899'} strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="6" strokeWidth="1.5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l4 4 4-4"/>
                  </svg>
                )}
              </div>
              {/* Title */}
              <div className="pb-2 flex justify-center items-center">
                <h4 className={`text-lg md:text-xl font-bold text-center leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{achievement.title}</h4>
              </div>
              {/* Description */}
              <div className="flex flex-col flex-1 items-center justify-center">
                <p className={`text-xs md:text-sm leading-relaxed text-center mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
