import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuMessageSquareShare } from "react-icons/lu";

interface AboutProps {
  isDark?: boolean;
}

type Slide = { src: string; caption: string; alt: string };

const About = ({ }: AboutProps) => {
  const prefersReducedMotion = useReducedMotion();

  // --- Slides ---
  const slides: Slide[] = useMemo(
    () => [
      { src: '/images/me1.jpg', caption: 'I Build', alt: 'Building things' },
      { src: '/images/me2.jpg', caption: 'I Create', alt: 'Creative work' },
      { src: '/images/me.jpg',  caption: 'I Learn', alt: 'Learning & tinkering' },
    ],
    []
  );

  // --- State ---
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false); // avoid hydration/visibility quirks
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map(() => false));
  const touchStartX = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  // --- Autoplay (respects reduced motion) ---
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => !paused && setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion, slides.length]);

  // --- Keyboard nav ---
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + slides.length) % slides.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % slides.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slides.length]);

  // --- Helpers ---
  const posOf = (i: number) => {
    const d = (i - index + slides.length) % slides.length;
    if (d === 0) return 0;                 // center
    if (d === 1) return 1;                 // right
    if (d === slides.length - 1) return -1;// left
    return 2;                              // hidden
  };

  const dots = Array.from({ length: 8 }).map((_, i) => ({
    left: `${10 + i * 9}%`,
    top: `${22 + (i % 6) * 9}%`,
    size: 12 + ((i * 3) % 10),
    opacity: 0.06 + (i % 5) * 0.04,
    duration: 7 + (i % 5),
    delay: i * 0.5,
  }));

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-start justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Decorative background */}
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
            style={{
              left: d.left,
              top: d.top,
              width: d.size,
              height: d.size,
              filter: 'blur(1px)',
              opacity: d.opacity,
            }}
            initial={{ y: 0 }}
            animate={prefersReducedMotion ? {} : { y: [0, -14, 0] }}
            transition={{ duration: d.duration, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container-max-width section-padding relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <div className="grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5 md:space-y-6">
            <motion.p
              initial={prefersReducedMotion || !mounted ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[10px] sm:text-[11px] tracking-[0.22em] font-semibold uppercase text-gray-500 dark:text-gray-400"
            >
              More about me
            </motion.p>

            <motion.h2
              initial={prefersReducedMotion || !mounted ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
            >
              I’m <span className="text-blue-600 dark:text-blue-400">Dhruba</span>
            </motion.h2>

            <motion.div
              initial={prefersReducedMotion || !mounted ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              <p>
                I’m a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to
                backend, I love solving complex problems with clean, efficient code. My expertise spans React, Next.js and
                Node.js.
              </p>
              <p>
                When I’m not immersed in work, I’m exploring new ideas and staying curious. Balance matters—code, create,
                recharge, repeat.
              </p>
              <p>I believe in waking up each day eager to make a difference!</p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={prefersReducedMotion || !mounted ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-white
                           bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                           shadow-lg transition-all focus-override"
              >
                View Projects <span>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium
                           border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5
                           text-slate-800 dark:text-gray-200 hover:shadow-md transition-all focus-override"
              >
                <LuMessageSquareShare className="w-4 h-4" />
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Right: 3D coverflow - Hidden on mobile */}
          <div className="hidden md:block md:col-span-5">
            <div
              className="relative h-[480px] lg:h-[530px] flex flex-col items-center justify-start select-none"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
              onTouchMove={(e) => {
                if (touchStartX.current == null) return;
                const delta = e.touches[0].clientX - touchStartX.current;
                if (Math.abs(delta) > 50) {
                  if (delta > 0) setIndex((i) => (i - 1 + slides.length) % slides.length);
                  else setIndex((i) => (i + 1) % slides.length);
                  touchStartX.current = null;
                }
              }}
              onTouchEnd={() => { touchStartX.current = null; }}
              style={{ perspective: 1600 }}
            >
              <div
                className="relative mt-2 h-[300px] sm:h-[350px] md:h-[360px] lg:h-[410px] w-full flex items-center justify-center"
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
                    scale: p === 0 ? 1 : 0.9,
                    opacity: p === 2 ? 0 : p === 0 ? 1 : 0.78,
                    filter: p === 0 ? 'none' : 'grayscale(1) brightness(0.6) saturate(0.5) blur(1.5px)',
                    overlay: p === 0 ? 'bg-black/0' : 'bg-black/60',
                    zIndex: p === 0 ? 50 : p === -1 ? 40 : 30,
                  } as const;

                  if (p === 2) return null;

                  return (
                    <motion.figure
                      key={i}
                      className="absolute w-[72%] sm:w-[68%] md:w-[64%] lg:w-[70%] max-w-md rounded-[20px] overflow-hidden
                                 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] sm:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.55)]
                                 dark:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.8)] dark:sm:shadow-[0_28px_70px_-22px_rgba(0,0,0,0.85)]
                                 border border-white/20 dark:border-white/10 bg-white/5 backdrop-blur-[2px]"
                      style={{
                        zIndex: map.zIndex,
                        filter: map.filter as any,
                        WebkitFilter: map.filter as any,
                        transformStyle: 'preserve-3d',
                      }}
                      initial={false}
                      animate={{
                        x: map.x,
                        y: map.y,
                        rotateY: map.rotY,
                        scale: map.scale,
                        opacity: map.opacity,
                        z: map.z as any,
                      }}
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      aria-hidden={!isCenter}
                    >
                      {/* Image skeleton */}
                      {!loaded[i] && (
                        <div className="absolute inset-0 animate-pulse bg-slate-200/60 dark:bg-slate-700/30" />
                      )}

                      <img
                        src={s.src}
                        alt={s.alt}
                        className="h-[300px] sm:h-[350px] md:h-[360px] lg:h-[410px] w-full object-cover object-center select-none"
                        draggable={false}
                        loading="lazy"
                        onLoad={() =>
                          setLoaded((arr) => {
                            const next = [...arr];
                            next[i] = true;
                            return next;
                          })
                        }
                        onError={() =>
                          setLoaded((arr) => {
                            const next = [...arr];
                            next[i] = true;
                            return next;
                          })
                        }
                      />

                      {/* dark overlay for side cards */}
                      <div className={`pointer-events-none absolute inset-0 ${map.overlay}`} />

                      {/* bottom caption inside photo */}
                      <div
                        className="absolute inset-x-0 bottom-0 p-4 sm:p-5
                                   bg-gradient-to-t from-black/70 via-black/35 to-transparent
                                   text-white"
                        aria-hidden={!isCenter}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base font-semibold drop-shadow">
                            {s.caption}
                          </span>
                          {isCenter && (
                            <span className="text-[10px] sm:text-xs opacity-90">
                              {index + 1} / {slides.length}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* inner ring */}
                      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-white/15 dark:ring-white/10" />
                    </motion.figure>
                  );
                })}
              </div>

              {/* Controls + dots (icon-only; no blue focus ring) */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <button
                  type="button"
                  onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                  className="p-1.5 rounded-full outline-none ring-0 focus:outline-none focus-visible:outline-none
                             text-slate-900 dark:text-slate-100 hover:scale-110 transition-transform"
                  aria-label="Previous image"
                  title="Previous"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        i === index
                          ? 'bg-blue-600 w-6'
                          : 'bg-slate-400 hover:bg-slate-500 dark:bg-slate-600 dark:hover:bg-slate-500 w-2'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === index}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIndex((i) => (i + 1) % slides.length)}
                  className="p-1.5 rounded-full outline-none ring-0 focus:outline-none focus-visible:outline-none
                             text-slate-900 dark:text-slate-100 hover:scale-110 transition-transform"
                  aria-label="Next image"
                  title="Next"
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
