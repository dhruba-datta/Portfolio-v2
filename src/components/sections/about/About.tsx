import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AboutProps {
  isDark?: boolean;
}

type Slide = { src: string; caption: string; alt: string };

const About = ({ isDark }: AboutProps) => {
  const prefersReducedMotion = useReducedMotion();

  const slides: Slide[] = useMemo(
    () => [
      { src: '/images/me1.jpg',        caption: 'I Build',  alt: 'Building things' },
      { src: '/images/me2.jpg',  caption: 'I Create', alt: 'Creative work' },
      { src: '/images/me.jpg',        caption: 'I Learn',  alt: 'Learning & tinkering' },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => !paused && setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion, slides.length]);

  const posOf = (i: number) => {
    const d = (i - index + slides.length) % slides.length;
    if (d === 0) return 0;                 // center
    if (d === 1) return 1;                 // right
    if (d === slides.length - 1) return -1;// left
    return 2;                              // hide others
  };

  const accentGrad = isDark
    ? 'from-fuchsia-400 via-sky-400 to-indigo-400'
    : 'from-pink-500 via-violet-500 to-blue-500';

  const dots = Array.from({ length: 8 }).map((_, i) => ({
    left: `${10 + i * 9}%`,
    top: `${22 + (i % 6) * 9}%`,
    size: 12 + ((i * 3) % 10),
    opacity: 0.06 + (i % 5) * 0.04,
    duration: 7 + (i % 5),
    delay: i * 0.5,
  }));

  return (
    <section id="about" className="relative min-h-screen flex items-start justify-center pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{
            background:
              'radial-gradient(1000px 520px at 60% 0%, rgba(99,102,241,0.16), transparent 70%), radial-gradient(900px 540px at 15% 100%, rgba(236,72,153,0.14), transparent 72%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-10
          [mask-image:radial-gradient(ellipse_60%_45%_at_50%_10%,#000_70%,transparent_120%)]
          bg-[linear-gradient(to_right,#64748b33_1px,transparent_1px),linear-gradient(to_bottom,#64748b33_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#94a3b833_1px,transparent_1px),linear-gradient(to_bottom,#94a3b833_1px,transparent_1px)]
          bg-[size:18px_28px]"
        />
        {dots.map((d, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-blue-400/50 dark:bg-indigo-300/60"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size, filter: 'blur(1px)', opacity: d.opacity }}
            initial={{ y: 0 }}
            animate={prefersReducedMotion ? {} : { y: [0, -14, 0] }}
            transition={{ duration: d.duration, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container-max-width section-padding relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="md:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] tracking-[0.22em] font-semibold uppercase text-gray-500 dark:text-gray-400"
            >
              More about me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
            >
              I’m Dhruba, a{' '}
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${accentGrad} italic`}>creative engineer</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              <p>
                I’m a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend,
                I love solving complex problems with clean, efficient code. My expertise spans React, Next.js and Node.js.
              </p>
              <p>
                When I’m not immersed in work, I’m exploring new ideas and staying curious. Balance matters—code, create, recharge, repeat.
              </p>
              <p>I believe in waking up each day eager to make a difference!</p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-3 pt-2"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg transition-all"
              >
                View Projects <span>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-gray-200 hover:shadow-md transition-all"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Right: 3D coverflow */}
          <div className="md:col-span-5">
            <div
              className="relative h-[480px] sm:h-[530px] flex flex-col items-center justify-start select-none"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{ perspective: 1600 }}
            >
              <div
                className="relative mt-2 h-[360px] sm:h-[410px] w-full flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {slides.map((s, i) => {
                  const p = posOf(i); // -1 (left), 0 (center), 1 (right), 2 (hidden)
                  const isCenter = p === 0;

                  const map = {
                    x: p === -1 ? -200 : p === 1 ? 200 : 0,
                    y: p === 0 ? 0 : 8,
                    z: p === 0 ? 0 : -140,
                    rotY: p === -1 ? -26 : p === 1 ? 26 : 0,
                    scale: p === 0 ? 1 : 0.88,
                    opacity: p === 2 ? 0 : p === 0 ? 1 : 0.7,
                    filter:
                      p === 0
                        ? 'none'
                        : 'grayscale(1) brightness(0.55) saturate(0.4) blur(2px)',
                    overlay: p === 0 ? 'bg-black/0' : 'bg-black/65',
                    zIndex: p === 0 ? 50 : p === -1 ? 40 : 30,
                  } as const;

                  if (p === 2) return null;

                  return (
                    <motion.figure
                      key={i}
                      className="absolute w-[70%] sm:w-[76%] max-w-md rounded-[22px] overflow-hidden
                                 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.55)]
                                 dark:shadow-[0_28px_70px_-22px_rgba(0,0,0,0.85)]
                                 border border-white/20 dark:border-white/10 bg-white/5 backdrop-blur-[2px]"
                      style={{
                        zIndex: map.zIndex,
                        filter: map.filter,
                        WebkitFilter: map.filter,
                        transformStyle: 'preserve-3d',
                      }}
                      initial={false}
                      animate={{
                        x: map.x,
                        y: map.y,
                        rotateY: map.rotY,
                        scale: map.scale,
                        opacity: map.opacity,
                        z: map.z,
                      }}
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      aria-hidden={!isCenter}
                    >
                      <img
                        src={s.src}
                        alt={s.alt}
                        className="h-[360px] sm:h-[410px] w-full object-cover object-center select-none"
                        draggable={false}
                        loading="lazy"
                      />
                      {/* dark overlay for side cards */}
                      <div className={`pointer-events-none absolute inset-0 ${map.overlay}`} />
                      {/* inner ring */}
                      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/15 dark:ring-white/10" />
                    </motion.figure>
                  );
                })}
              </div>

              {/* Controls + dots (icon-only, visible in light & dark) */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <button
                  onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                  className="p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500
                             text-slate-700 hover:text-slate-900
                             dark:text-slate-200 dark:hover:text-white transition-transform hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        i === index
                          ? 'bg-blue-600 w-6'
                          : 'bg-slate-400 hover:bg-slate-500 dark:bg-slate-600 dark:hover:bg-slate-500 w-2'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setIndex((i) => (i + 1) % slides.length)}
                  className="p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500
                             text-slate-700 hover:text-slate-900
                             dark:text-slate-200 dark:hover:text-white transition-transform hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* /carousel */}
        </div>
      </div>
    </section>
  );
};

export default About;
