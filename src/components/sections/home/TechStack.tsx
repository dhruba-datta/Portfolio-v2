import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TechStackProps { isDark?: boolean }
interface TechItem { name: string; icon: string; color?: string }
type ZoneKey = 'UK' | 'IN' | 'US';

const TechStack = ({ isDark }: TechStackProps) => {
  // -------- tech rows (unchanged) --------
  const frontendTech: TechItem[] = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Next.js', icon: isDark ? 'https://cdn.simpleicons.org/nextdotjs/ffffff' : 'https://cdn.simpleicons.org/nextdotjs' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
  ];
  const backendTech: TechItem[] = [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'Express.js', icon: isDark ? 'https://cdn.simpleicons.org/express/ffffff' : 'https://cdn.simpleicons.org/express' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma' },
  ];
  const toolsTech: TechItem[] = [
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws' },
    { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode' },
    { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
  ];

  const TechScroll = ({
    technologies,
    direction = 'left'
  }: { technologies: TechItem[]; direction?: 'left' | 'right' }) => {
    const dup = useMemo(() => [...technologies, ...technologies], [technologies]);
    return (
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-3 items-center"
          animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {dup.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              className={`flex items-center gap-2 ${isDark ? 'bg-gray-800/30 border-gray-700/30' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-lg px-3 py-2 border flex-shrink-0`}
              whileHover={{ scale: 1.05 }}
            >
              <img src={t.icon} alt={t.name} className="w-5 h-5" />
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  // -------- time zones + true 3D globe --------
  const zones: Record<ZoneKey, { pill: string; country: string; city: string; lat: number; lng: number }> = {
    UK: { pill: 'GB United', country: 'United Kingdom', city: 'London',    lat: 51.5072, lng: -0.1276 },
    IN: { pill: 'IN India',  country: 'India',          city: 'Bengaluru', lat: 12.9716, lng: 77.5946 },
    US: { pill: 'US USA',    country: 'United States',  city: 'New York',  lat: 40.7128, lng: -74.006 }
  };
  const [activeZone, setActiveZone] = useState<ZoneKey>('IN');

  const markers = useMemo(
    () => (['UK', 'IN', 'US'] as ZoneKey[]).map(k => ({ lat: zones[k].lat, lng: zones[k].lng, name: k })),
    []
  );

  const wrapRef  = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 420, h: 420 });

  // responsive canvas
  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver((ents) => {
      const r = ents[0].contentRect;
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className={`uppercase tracking-[0.2em] text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Tech Stack & Status
            </span>
            <h2 className={`mt-3 text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              My Stack & Collaboration
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {/* Card 1 */}
          <motion.div
            className={`${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border flex flex-col justify-between`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Research publications, LeetCode achievements, and academic collaborations for professors and researchers.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Publications & Research</span>
              </div>
              <Link 
                to="/about"
                className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                View Profile →
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className={`lg:col-span-2 ${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-1">
                My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">stack</span> & status
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Modern tools I ship with—lean, fast, production-ready.</p>
            </div>
            <div className="space-y-4">
              <TechScroll technologies={frontendTech} direction="right" />
              <TechScroll technologies={backendTech} direction="left" />
              <TechScroll technologies={toolsTech} direction="right" />
            </div>
          </motion.div>

          {/* Card 3: time zones + 3D dotted Earth */}
          <motion.div
            className={`lg:col-span-2 ${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* text column */}
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-semibold mb-1">I&apos;m very flexible with time</h3>
              <h4 className="text-xl text-blue-400 mb-6">zone communications</h4>

              <div className="flex gap-3 mb-6">
                {(Object.keys(zones) as ZoneKey[]).map(z => {
                  const active = z === activeZone;
                  return (
                    <motion.button
                      key={z}
                      onClick={() => setActiveZone(z)}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${
                        isDark
                          ? active ? 'bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/30' : 'bg-gray-700/50 text-gray-200'
                          : active ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <span className="font-bold">{z === 'UK' ? 'GB' : z}</span>
                      <span>{z === 'US' ? 'USA' : zones[z].country.split(' ')[0]}</span>
                    </motion.button>
                  );
                })}
              </div>

              <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span className="text-sm">Remote</span>
              </div>
              <p className="font-semibold mt-1 text-lg">
                {zones[activeZone].country}
                <span className={`ml-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>• {zones[activeZone].city}</span>
              </p>
            </div>

            {/* globe on the right with soft mask */}
            <div
              ref={wrapRef}
              className="absolute right-0 bottom-0 w-[60%] md:w-[55%] lg:w-[50%] h-[105%] pointer-events-none"
              style={{
                maskImage: 'radial-gradient(120% 100% at 70% 40%, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(120% 100% at 70% 40%, black 60%, transparent 100%)'
              }}
            >
              {/* Advanced Dotted Globe - Enhanced */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Globe container */}
                <div 
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: Math.min(size.w, size.h) * 0.85,
                    height: Math.min(size.w, size.h) * 0.85,
                  }}
                >
                  {/* Base dark sphere with enhanced gradient */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, 
                        #1e3a8a 0%, 
                        #1e293b 30%, 
                        #0f172a 60%, 
                        #020617 100%
                      )`,
                      boxShadow: `
                        inset -40px -40px 80px rgba(0,0,0,0.6),
                        inset 40px 40px 80px rgba(59, 130, 246, 0.03),
                        0 0 100px rgba(59, 130, 246, 0.2),
                        0 0 200px rgba(59, 130, 246, 0.1)
                      `
                    }}
                  />
                  
                  {/* Dense dotted pattern overlay */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <svg 
                      className="absolute inset-0 w-full h-full" 
                      viewBox="0 0 400 400"
                      style={{ borderRadius: '50%' }}
                    >
                      <defs>
                        {/* Enhanced dot gradients */}
                        <radialGradient id="dotGradient" cx="0.5" cy="0.3" r="0.8">
                          <stop offset="0%" stopColor="rgba(56, 189, 248, 1)" />
                          <stop offset="40%" stopColor="rgba(59, 130, 246, 0.8)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
                        </radialGradient>
                        
                        <radialGradient id="continentDot" cx="0.5" cy="0.3" r="0.8">
                          <stop offset="0%" stopColor="rgba(34, 211, 238, 1)" />
                          <stop offset="40%" stopColor="rgba(56, 189, 248, 0.9)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
                        </radialGradient>
                        
                        {/* Sphere mask */}
                        <mask id="sphereMask">
                          <circle cx="200" cy="200" r="190" fill="white" />
                        </mask>
                      </defs>
                      
                      {/* Dense dot pattern */}
                      <g mask="url(#sphereMask)">
                        {(() => {
                          const dots = [];
                          const radius = 190;
                          
                          // Much denser grid - more dots for realistic effect
                          for (let i = 0; i < 60; i++) {
                            for (let j = 0; j < 120; j++) {
                              const lat = (i / 59) * Math.PI - Math.PI/2;
                              const lng = (j / 119) * 2 * Math.PI;
                              
                              // 3D to 2D projection
                              const y = Math.sin(lat);
                              const x = Math.cos(lat) * Math.cos(lng);
                              const z = Math.cos(lat) * Math.sin(lng);
                              
                              // Only render front-facing dots (more generous range)
                              if (z > -0.4) {
                                const screenX = 200 + x * radius * 0.95;
                                const screenY = 200 - y * radius * 0.95;
                                
                                // Enhanced depth calculation
                                const depth = (z + 0.4) / 1.4;
                                const baseSize = 1.2;
                                let dotSize = baseSize * (0.3 + depth * 0.7);
                                
                                // Base opacity with depth
                                let opacity = depth * 0.8 + 0.2;
                                
                                // Enhanced continent detection with more realistic shapes
                                const latDeg = lat * 180 / Math.PI;
                                const lngDeg = lng * 180 / Math.PI;
                                
                                let isLand = false;
                                
                                // Africa
                                if (lngDeg >= -20 && lngDeg <= 55 && latDeg >= -35 && latDeg <= 35) {
                                  isLand = true;
                                }
                                // Europe
                                if (lngDeg >= -15 && lngDeg <= 45 && latDeg >= 35 && latDeg <= 70) {
                                  isLand = true;
                                }
                                // Asia
                                if (lngDeg >= 45 && lngDeg <= 180 && latDeg >= 10 && latDeg <= 75) {
                                  isLand = true;
                                }
                                // North America
                                if (lngDeg >= -170 && lngDeg <= -50 && latDeg >= 15 && latDeg <= 75) {
                                  isLand = true;
                                }
                                // South America
                                if (lngDeg >= -85 && lngDeg <= -35 && latDeg >= -55 && latDeg <= 15) {
                                  isLand = true;
                                }
                                // Australia
                                if (lngDeg >= 110 && lngDeg <= 160 && latDeg >= -45 && latDeg <= -10) {
                                  isLand = true;
                                }
                                
                                // Ocean dots - dimmer and smaller
                                if (!isLand) {
                                  opacity *= 0.3;
                                  dotSize *= 0.7;
                                } else {
                                  // Land dots - brighter and larger
                                  opacity *= 1.3;
                                  dotSize *= 1.2;
                                }
                                
                                // Clamp values
                                opacity = Math.min(Math.max(opacity, 0.1), 1);
                                const finalSize = Math.max(dotSize, 0.5);
                                
                                dots.push(
                                  <circle
                                    key={`${i}-${j}`}
                                    cx={screenX}
                                    cy={screenY}
                                    r={finalSize}
                                    fill={isLand ? "url(#continentDot)" : "url(#dotGradient)"}
                                    opacity={opacity}
                                  />
                                );
                              }
                            }
                          }
                          return dots;
                        })()}
                      </g>
                    </svg>
                  </div>
                  
                  {/* Enhanced atmospheric layers */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(ellipse at 35% 25%, 
                        rgba(56, 189, 248, 0.2) 0%, 
                        rgba(59, 130, 246, 0.1) 30%, 
                        rgba(37, 99, 235, 0.05) 60%,
                        transparent 80%
                      )`
                    }}
                  />
                  
                  {/* Active zone markers with enhanced effects */}
                  {markers.map((marker) => {
                    const isActive = marker.name === activeZone;
                    
                    // Convert lat/lng to screen coordinates with better projection
                    const lat = (marker.lat * Math.PI) / 180;
                    const lng = (marker.lng * Math.PI) / 180;
                    
                    const y = Math.sin(lat);
                    const x = Math.cos(lat) * Math.cos(lng);
                    const z = Math.cos(lat) * Math.sin(lng);
                    
                    // Only show if on front side
                    if (z > -0.3) {
                      const screenX = 50 + (x * 38);
                      const screenY = 50 - (y * 38);
                      
                      return (
                        <motion.div
                          key={marker.name}
                          className={`absolute rounded-full border-2 ${
                            isActive 
                              ? 'bg-cyan-400 border-cyan-300 w-3 h-3' 
                              : 'bg-blue-400 border-blue-300 w-2.5 h-2.5'
                          }`}
                          style={{
                            left: `${screenX}%`,
                            top: `${screenY}%`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            boxShadow: isActive 
                              ? '0 0 20px rgba(34, 211, 238, 0.6)' 
                              : '0 0 10px rgba(59, 130, 246, 0.4)'
                          }}
                          animate={isActive ? {
                            scale: [1, 1.2, 1],
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {isActive && (
                            <>
                              {/* Primary pulsing ring */}
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-cyan-400"
                                animate={{
                                  scale: [1, 3, 1],
                                  opacity: [0.8, 0, 0.8]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              {/* Secondary ring */}
                              <motion.div
                                className="absolute inset-0 rounded-full border border-cyan-300"
                                animate={{
                                  scale: [1, 4, 1],
                                  opacity: [0.4, 0, 0.4]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5
                                }}
                              />
                              {/* Outer glow ring */}
                              <motion.div
                                className="absolute inset-0 rounded-full border border-cyan-200"
                                animate={{
                                  scale: [1, 5, 1],
                                  opacity: [0.2, 0, 0.2]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 1
                                }}
                              />
                            </>
                          )}
                        </motion.div>
                      );
                    }
                    return null;
                  })}
                  
                  {/* Enhanced rotating highlight */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, 
                        transparent 0deg, 
                        rgba(56, 189, 248, 0.15) 30deg,
                        rgba(34, 211, 238, 0.25) 60deg,
                        rgba(56, 189, 248, 0.15) 90deg, 
                        transparent 120deg,
                        transparent 360deg
                      )`,
                      mixBlendMode: 'soft-light'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Final outer glow */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: `
                        0 0 60px rgba(56, 189, 248, 0.3),
                        0 0 120px rgba(59, 130, 246, 0.15),
                        inset 0 0 60px rgba(0, 0, 0, 0.4)
                      `
                    }}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-full blur-3xl bg-cyan-400/10" />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className={`${isDark ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white border-gray-200 shadow-2xl'} backdrop-blur-sm rounded-2xl p-8 border`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" /></svg>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>For Tech Recruiters</p>
              <h3 className="text-lg font-semibold">Portfolio & Project Showcase</h3>
            </div>
            <Link 
              to="/projects"
              className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors flex items-center gap-1"
            >
              View Recent Work →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
