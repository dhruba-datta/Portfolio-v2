import { motion } from 'framer-motion';

interface AboutProps {
  isDark?: boolean;
}

const About = ({ isDark }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const accentGrad = isDark
    ? 'from-fuchsia-400 via-sky-400 to-indigo-400'
    : 'from-pink-500 via-violet-500 to-blue-500';

  const glowGrad = isDark
    ? 'from-fuchsia-500/15 via-sky-500/15 to-indigo-500/15'
    : 'from-pink-500/25 via-violet-500/25 to-blue-500/25';

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-start justify-center pt-28 md:pt-36 pb-20 transition-colors duration-300"
      aria-label="About Dhruba Datta"
    >
      {/* Aesthetic background: dots + soft gradient blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,116,139,0.22)_1px,transparent_1.6px)] dark:bg-[radial-gradient(circle,rgba(51,65,85,0.25)_1px,transparent_1.6px)] bg-[size:22px_22px]" />
        <div className={`absolute -top-24 -left-24 w-[36rem] h-[36rem] blur-3xl rounded-full opacity-80 bg-gradient-to-br ${glowGrad}`} />
        <div className={`absolute -bottom-24 -right-24 w-[32rem] h-[32rem] blur-3xl rounded-full opacity-70 bg-gradient-to-tr ${glowGrad}`} />
      </div>

      <div className="container-max-width section-padding relative z-10 w-full">
        <motion.div
          className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Left — copy */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-5">
              <motion.p
                variants={itemVariants}
                className="text-[11px] tracking-[0.22em] font-semibold uppercase text-gray-500 dark:text-gray-400"
              >
                More about me
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
              >
                I’m Dhruba, a{' '}
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r ${accentGrad} italic`}
                >
                  creative engineer
                </span>
              </motion.h2>
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              <p>
                I’m a proactive full-stack developer crafting dynamic web
                experiences end-to-end. I love turning fuzzy ideas into crisp,
                performant interfaces and resilient backends. My daily toolkit
                includes React, TypeScript, and WordPress—plus whatever the
                problem demands.
              </p>
              <p>
                When I’m not shipping, I’m exploring new patterns, tinkering
                with automation (hi, n8n), and staying relentlessly curious.
                Balance matters—code, create, recharge, repeat.
              </p>
              <p className="font-medium">
                I show up each day to build something a little smarter—and a
                little more delightful—than yesterday.
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 max-w-md"
            >
              {[
                { k: '13+', v: 'Years' },
                { k: '40+', v: 'Projects' },
                { k: '100%', v: 'Ownership' },
              ].map((s) => (
                <div
                  key={s.v}
                  className={`rounded-2xl px-4 py-3 text-center border backdrop-blur ${
                    isDark
                      ? 'border-white/10 bg-white/5'
                      : 'border-slate-200 bg-white/70'
                  } shadow-sm`}
                >
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {s.k}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-2"
              aria-label="Technologies I love"
            >
              {[
                'React',
                'TypeScript',
                'Next.js',
                'Node.js',
                'Tailwind',
                'n8n',
                'WordPress',
              ].map((t) => (
                <span
                  key={t}
                  className={`text-xs rounded-full px-3 py-1 border transition ${
                    isDark
                      ? 'border-white/10 bg-white/5 text-gray-200'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 pt-2"
              aria-label="Primary actions"
            >
              <a
                href="#work"
                className={`group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isDark
                    ? 'bg-white text-slate-900 hover:bg-slate-100 focus:ring-white/30'
                    : 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900/30'
                }`}
              >
                View Work
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium border backdrop-blur transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 border-slate-200 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 focus:ring-slate-300/40 dark:focus:ring-white/20"
              >
                Let’s Talk
              </a>
            </motion.div>
          </div>

          {/* Right — image + floating bits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="group relative w-full max-w-sm">
              {/* Soft outer glow */}
              <div
                className={`absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl transition group-hover:opacity-90 bg-gradient-to-br ${glowGrad}`}
                aria-hidden
              />
              {/* Gradient border card */}
              <div
                className={`relative rounded-[1.6rem] p-[1px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[0.25deg] bg-gradient-to-br ${accentGrad}`}
              >
                <div
                  className={`rounded-[1.5rem] overflow-hidden backdrop-blur-xl ${
                    isDark ? 'bg-slate-900/70' : 'bg-white/80'
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full">
                    {/* Subtle inner ring */}
                    <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-black/5 dark:ring-white/10" />
                    <img
                      src="/images/me.jpg"
                      alt="Portrait of Dhruba Datta"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, type: 'spring', stiffness: 120 }}
                className={`absolute -left-3 -top-3 rounded-xl px-3 py-1.5 text-xs font-medium border shadow-sm ${
                  isDark
                    ? 'border-white/10 bg-white/10 text-white'
                    : 'border-slate-200 bg-white text-slate-700'
                }`}
              >
                React
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                className={`absolute -right-3 top-8 rounded-xl px-3 py-1.5 text-xs font-medium border shadow-sm ${
                  isDark
                    ? 'border-white/10 bg-white/10 text-white'
                    : 'border-slate-200 bg-white text-slate-700'
                }`}
              >
                TypeScript
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65, type: 'spring', stiffness: 120 }}
                className={`absolute left-6 -bottom-3 rounded-xl px-3 py-1.5 text-xs font-medium border shadow-sm ${
                  isDark
                    ? 'border-white/10 bg-white/10 text-white'
                    : 'border-slate-200 bg-white text-slate-700'
                }`}
              >
                n8n
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
